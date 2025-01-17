var i,
    a = r(47120);
var s = r(411104);
var o = r(653041);
var l = r(998459);
var u = r(348327),
    c = r.n(u),
    d = r(442837),
    f = r(544891),
    _ = r(570140),
    h = r(457330),
    p = r(726542),
    m = r(81063),
    g = r(70956),
    E = r(553795),
    v = r(246946),
    I = r(981631);
function T(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let b = '33kozedd0zs6fbauka98psnc7zwom2s',
    y = 1 * g.Z.Millis.MINUTE,
    S = (e) => 'https://youtube.com/watch?v='.concat(e),
    A = 5 * g.Z.Millis.MINUTE,
    N = 'https://api.twitch.tv/helix',
    C = /live_user_(.*)-\{width\}/,
    R = 128,
    O = null,
    D = 0,
    L = null,
    x = new Set(),
    w = {};
function P(e) {
    var n;
    return null === (n = C.exec(e)) || void 0 === n ? void 0 : n[1];
}
function M(e, n, r) {
    return f.tn.get({
        url: ''.concat(N).concat(e),
        query: n,
        headers: {
            'Client-ID': b,
            Authorization: 'Bearer '.concat(r)
        },
        rejectWithError: !1
    });
}
async function k(e, n) {
    var r;
    let i = w[e];
    if (null != i) return i;
    let {
            body: { data: a }
        } = await M('/games', { id: e }, n),
        s = null === (r = a[0]) || void 0 === r ? void 0 : r.name;
    return (w[e] = s), s;
}
class U {
    start() {
        !this._started && ((this._started = !0), E.Z.isFetching() ? h.Z.fetch() : this._check());
    }
    stop() {
        (this._started = !1),
            (L = null),
            (D = 0),
            null != this._nextCheck && clearTimeout(this._nextCheck),
            _.Z.dispatch({
                type: 'STREAMING_UPDATE',
                stream: null
            });
    }
    async _checkTwitch(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (e.revoked || null == (n = null != n ? n : e.accessToken)) return null;
        try {
            var r, i, a;
            let {
                    body: { data: s }
                } = await M(
                    '/streams',
                    {
                        user_id: e.id,
                        first: 1
                    },
                    n
                ),
                o = s[0];
            if (null == o || 'live' !== o.type) throw Error('no stream');
            let { thumbnail_url: l, game_id: u, title: c } = o,
                d = { large_image: null != l && null !== (i = (0, m.getAssetFromImageURL)(I.ABu.TWITCH, l)) && void 0 !== i ? i : void 0 },
                f = await k(u, n),
                _ = p.Z.get(I.ABu.TWITCH),
                h = null !== (a = P(l)) && void 0 !== a ? a : e.name,
                g = null != c && '' !== c ? c.slice(0, R) : void 0,
                E = null != f && '' !== f ? f.slice(0, R) : void 0;
            return {
                url:
                    null === (r = _.getPlatformUserUrl) || void 0 === r
                        ? void 0
                        : r.call(_, {
                              id: e.id,
                              name: h
                          }),
                name: _.name,
                assets: d,
                details: g,
                state: E
            };
        } catch (r) {
            if (401 === r.status && null == n)
                return h.Z.refreshAccessToken(e.type, e.id)
                    .then((n) => this._checkTwitch(e, n))
                    .catch(() => null);
            return null;
        }
    }
    async _checkYouTube(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (((L = null), e.revoked || x.has(e.id))) return null;
        try {
            var r;
            let {
                body: { items: i }
            } = await f.tn.get({
                url: 'https://www.googleapis.com/youtube/v3/liveBroadcasts',
                query: {
                    part: 'id,snippet',
                    broadcastStatus: 'active',
                    broadcastType: 'all'
                },
                headers: { Authorization: 'Bearer '.concat(null != n ? n : e.accessToken) },
                oldFormErrors: !0,
                rejectWithError: !1
            });
            if (i.length < 1) throw Error('no stream');
            let {
                    id: a,
                    snippet: { title: s, thumbnails: o }
                } = i[0],
                l = { large_image: null !== (r = (0, m.getAssetFromImageURL)(I.ABu.YOUTUBE, o.high.url)) && void 0 !== r ? r : void 0 },
                u = null != s && '' !== s ? s.slice(0, R) : void 0;
            return (L = {
                url: S(a),
                name: p.Z.get(I.ABu.YOUTUBE).name,
                details: u,
                assets: l
            });
        } catch (r) {
            if (401 === r.status && null == n)
                return h.Z.refreshAccessToken(e.type, e.id)
                    .then((n) => this._checkYouTube(e, n))
                    .catch(() => null);
            return 403 === r.status && x.add(e.id), null;
        }
    }
    _check() {
        if (!this._started) return;
        let e = E.Z.getAccounts();
        if (null == e) return;
        null != this._nextCheck && clearTimeout(this._nextCheck);
        let n = [I.ABu.TWITCH],
            r = Date.now();
        D <= r && (n.push(I.ABu.YOUTUBE), (D = r + A)),
            Promise.allSettled(e.filter((e) => n.includes(e.type)).map((e) => (e.type === I.ABu.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e)))).then((e) => {
                if (this._started) {
                    var n;
                    let r = null === (n = e.find((e) => 'fulfilled' === e.status && null != e.value)) || void 0 === n ? void 0 : n.value;
                    null == r && null != L && (r = L),
                        _.Z.dispatch({
                            type: 'STREAMING_UPDATE',
                            stream: r
                        });
                }
                this._scheduleCheck();
            });
    }
    _scheduleCheck() {
        this._started && (this._nextCheck = setTimeout(() => this._check(), y));
    }
    constructor() {
        T(this, '_nextCheck', void 0), T(this, '_started', void 0), (this._started = !1);
    }
}
let B = new U();
function G() {
    v.Z.enabled ? B.start() : B.stop();
}
function Z(e) {
    var n;
    if (c()(e.stream, O)) return !1;
    O = null !== (n = e.stream) && void 0 !== n ? n : null;
}
class F extends (i = d.ZP.Store) {
    initialize() {
        G(), this.waitFor(E.Z), this.syncWith([v.Z], G);
    }
    getStream() {
        return O;
    }
}
T(F, 'displayName', 'ExternalStreamingStore'),
    (n.Z = new F(_.Z, {
        STREAMING_UPDATE: Z,
        USER_CONNECTIONS_UPDATE: () => B._check()
    }));
