n.d(t, { Z: () => U }), n(47120), n(411104), n(653041), n(998459);
var i,
    r = n(348327),
    a = n.n(r),
    s = n(442837),
    o = n(544891),
    l = n(570140),
    u = n(457330),
    c = n(726542),
    d = n(81063),
    f = n(70956),
    _ = n(553795),
    p = n(246946),
    h = n(981631);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = '33kozedd0zs6fbauka98psnc7zwom2s',
    E = 1 * f.Z.Millis.MINUTE,
    v = (e) => 'https://youtube.com/watch?v='.concat(e),
    y = 5 * f.Z.Millis.MINUTE,
    I = 'https://api.twitch.tv/helix',
    T = /live_user_(.*)-\{width\}/,
    b = 128,
    S = null,
    A = 0,
    N = null,
    C = new Set(),
    R = {};
function O(e) {
    var t;
    return null === (t = T.exec(e)) || void 0 === t ? void 0 : t[1];
}
function D(e, t, n) {
    return o.tn.get({
        url: ''.concat(I).concat(e),
        query: t,
        headers: {
            'Client-ID': g,
            Authorization: 'Bearer '.concat(n)
        },
        rejectWithError: !1
    });
}
async function x(e, t) {
    var n;
    let i = R[e];
    if (null != i) return i;
    let {
            body: { data: r }
        } = await D('/games', { id: e }, t),
        a = null === (n = r[0]) || void 0 === n ? void 0 : n.name;
    return (R[e] = a), a;
}
class L {
    start() {
        this._started || ((this._started = !0), _.Z.isFetching() ? u.Z.fetch() : this._check());
    }
    stop() {
        (this._started = !1),
            (N = null),
            (A = 0),
            null != this._nextCheck && clearTimeout(this._nextCheck),
            l.Z.dispatch({
                type: 'STREAMING_UPDATE',
                stream: null
            });
    }
    async _checkTwitch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (e.revoked || null == (t = null != t ? t : e.accessToken)) return null;
        try {
            var n, i, r;
            let {
                    body: { data: a }
                } = await D(
                    '/streams',
                    {
                        user_id: e.id,
                        first: 1
                    },
                    t
                ),
                s = a[0];
            if (null == s || 'live' !== s.type) throw Error('no stream');
            let { thumbnail_url: o, game_id: l, title: u } = s,
                f = { large_image: null != o && null !== (i = (0, d.getAssetFromImageURL)(h.ABu.TWITCH, o)) && void 0 !== i ? i : void 0 },
                _ = await x(l, t),
                p = c.Z.get(h.ABu.TWITCH),
                m = null !== (r = O(o)) && void 0 !== r ? r : e.name,
                g = null != u && '' !== u ? u.slice(0, b) : void 0,
                E = null != _ && '' !== _ ? _.slice(0, b) : void 0;
            return {
                url:
                    null === (n = p.getPlatformUserUrl) || void 0 === n
                        ? void 0
                        : n.call(p, {
                              id: e.id,
                              name: m
                          }),
                name: p.name,
                assets: f,
                details: g,
                state: E
            };
        } catch (n) {
            if (401 === n.status && null == t)
                return u.Z.refreshAccessToken(e.type, e.id)
                    .then((t) => this._checkTwitch(e, t))
                    .catch(() => null);
            return null;
        }
    }
    async _checkYouTube(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (((N = null), e.revoked || C.has(e.id))) return null;
        try {
            var n;
            let {
                body: { items: i }
            } = await o.tn.get({
                url: 'https://www.googleapis.com/youtube/v3/liveBroadcasts',
                query: {
                    part: 'id,snippet',
                    broadcastStatus: 'active',
                    broadcastType: 'all'
                },
                headers: { Authorization: 'Bearer '.concat(null != t ? t : e.accessToken) },
                oldFormErrors: !0,
                rejectWithError: !1
            });
            if (i.length < 1) throw Error('no stream');
            let {
                    id: r,
                    snippet: { title: a, thumbnails: s }
                } = i[0],
                l = { large_image: null !== (n = (0, d.getAssetFromImageURL)(h.ABu.YOUTUBE, s.high.url)) && void 0 !== n ? n : void 0 },
                u = null != a && '' !== a ? a.slice(0, b) : void 0;
            return (N = {
                url: v(r),
                name: c.Z.get(h.ABu.YOUTUBE).name,
                details: u,
                assets: l
            });
        } catch (n) {
            if (401 === n.status && null == t)
                return u.Z.refreshAccessToken(e.type, e.id)
                    .then((t) => this._checkYouTube(e, t))
                    .catch(() => null);
            return 403 === n.status && C.add(e.id), null;
        }
    }
    _check() {
        if (!this._started) return;
        let e = _.Z.getAccounts();
        if (null == e) return;
        null != this._nextCheck && clearTimeout(this._nextCheck);
        let t = [h.ABu.TWITCH],
            n = Date.now();
        A <= n && (t.push(h.ABu.YOUTUBE), (A = n + y)),
            Promise.allSettled(e.filter((e) => t.includes(e.type)).map((e) => (e.type === h.ABu.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e)))).then((e) => {
                if (this._started) {
                    var t;
                    let n = null === (t = e.find((e) => 'fulfilled' === e.status && null != e.value)) || void 0 === t ? void 0 : t.value;
                    null == n && null != N && (n = N),
                        l.Z.dispatch({
                            type: 'STREAMING_UPDATE',
                            stream: n
                        });
                }
                this._scheduleCheck();
            });
    }
    _scheduleCheck() {
        this._started && (this._nextCheck = setTimeout(() => this._check(), E));
    }
    constructor() {
        m(this, '_nextCheck', void 0), m(this, '_started', void 0), (this._started = !1);
    }
}
let P = new L();
function w() {
    p.Z.enabled ? P.start() : P.stop();
}
function M(e) {
    var t;
    if (a()(e.stream, S)) return !1;
    S = null !== (t = e.stream) && void 0 !== t ? t : null;
}
class k extends (i = s.ZP.Store) {
    initialize() {
        w(), this.waitFor(_.Z), this.syncWith([p.Z], w);
    }
    getStream() {
        return S;
    }
}
m(k, 'displayName', 'ExternalStreamingStore');
let U = new k(l.Z, {
    STREAMING_UPDATE: M,
    USER_CONNECTIONS_UPDATE: () => P._check()
});
