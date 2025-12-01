n.d(t, { Z: () => k }), n(388685), n(35282), n(415506), n(539854), n(993155);
var r,
    i = n(348327),
    a = n.n(i),
    o = n(442837),
    s = n(544891),
    l = n(570140),
    c = n(457330),
    u = n(726542),
    d = n(81063),
    f = n(70956),
    p = n(553795),
    _ = n(246946),
    m = n(981631);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let g = "33kozedd0zs6fbauka98psnc7zwom2s",
    E = +f.Z.Millis.MINUTE,
    b = (e) => "https://youtube.com/watch?v=".concat(e),
    y = 5 * f.Z.Millis.MINUTE,
    O = "https://api.twitch.tv/helix",
    v = /live_user_(.*)-\{width\}/,
    S = 128,
    I = null,
    T = 0,
    A = null,
    C = new Set(),
    N = {};
function P(e) {
    var t;
    return null == (t = v.exec(e)) ? void 0 : t[1];
}
function R(e, t, n) {
    return s.tn.get({
        url: "".concat(O).concat(e),
        query: t,
        headers: {
            "Client-ID": g,
            Authorization: "Bearer ".concat(n),
        },
        rejectWithError: !1,
    });
}
async function w(e, t) {
    var n;
    let r = N[e];
    if (null != r) return r;
    let {
            body: { data: i },
        } = await R("/games", { id: e }, t),
        a = null == (n = i[0]) ? void 0 : n.name;
    return (N[e] = a), a;
}
class D {
    start() {
        this._started || ((this._started = !0), p.Z.isFetching() ? c.Z.fetch() : this._check());
    }
    stop() {
        (this._started = !1),
            (A = null),
            (T = 0),
            null != this._nextCheck && clearTimeout(this._nextCheck),
            l.Z.dispatch({
                type: "STREAMING_UPDATE",
                stream: null,
            });
    }
    async _checkTwitch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (e.revoked || null == (t = null != t ? t : e.accessToken)) return null;
        try {
            var n, r, i;
            let {
                    body: { data: a },
                } = await R(
                    "/streams",
                    {
                        user_id: e.id,
                        first: 1,
                    },
                    t,
                ),
                o = a[0];
            if (null == o || "live" !== o.type) throw Error("no stream");
            let { thumbnail_url: s, game_id: l, title: c } = o,
                f = { large_image: null != s && null != (r = (0, d.f)(m.ABu.TWITCH, s)) ? r : void 0 },
                p = await w(l, t),
                _ = u.Z.get(m.ABu.TWITCH),
                h = null != (i = P(s)) ? i : e.name,
                g = null != c && "" !== c ? c.slice(0, S) : void 0,
                E = null != p && "" !== p ? p.slice(0, S) : void 0;
            return {
                url:
                    null == (n = _.getPlatformUserUrl)
                        ? void 0
                        : n.call(_, {
                              id: e.id,
                              name: h,
                          }),
                name: _.name,
                assets: f,
                details: g,
                state: E,
            };
        } catch (n) {
            if (401 === n.status && null == t)
                return c.Z.refreshAccessToken(e.type, e.id)
                    .then((t) => this._checkTwitch(e, t))
                    .catch(() => null);
            return null;
        }
    }
    async _checkYouTube(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (((A = null), e.revoked || C.has(e.id))) return null;
        try {
            var n;
            let {
                body: { items: r },
            } = await s.tn.get({
                url: "https://www.googleapis.com/youtube/v3/liveBroadcasts",
                query: {
                    part: "id,snippet",
                    broadcastStatus: "active",
                    broadcastType: "all",
                },
                headers: { Authorization: "Bearer ".concat(null != t ? t : e.accessToken) },
                oldFormErrors: !0,
                rejectWithError: !1,
            });
            if (r.length < 1) throw Error("no stream");
            let {
                    id: i,
                    snippet: { title: a, thumbnails: o },
                } = r[0],
                l = { large_image: null != (n = (0, d.f)(m.ABu.YOUTUBE, o.high.url)) ? n : void 0 },
                c = null != a && "" !== a ? a.slice(0, S) : void 0;
            return (A = {
                url: b(i),
                name: u.Z.get(m.ABu.YOUTUBE).name,
                details: c,
                assets: l,
            });
        } catch (n) {
            if (401 === n.status && null == t)
                return c.Z.refreshAccessToken(e.type, e.id)
                    .then((t) => this._checkYouTube(e, t))
                    .catch(() => null);
            return 403 === n.status && C.add(e.id), null;
        }
    }
    _check() {
        if (!this._started) return;
        let e = p.Z.getAccounts();
        if (null == e) return;
        null != this._nextCheck && clearTimeout(this._nextCheck);
        let t = [m.ABu.TWITCH],
            n = Date.now();
        T <= n && (t.push(m.ABu.YOUTUBE), (T = n + y)),
            Promise.allSettled(
                e
                    .filter((e) => t.includes(e.type))
                    .map((e) => (e.type === m.ABu.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e))),
            ).then((e) => {
                if (this._started) {
                    var t;
                    let n = null == (t = e.find((e) => "fulfilled" === e.status && null != e.value)) ? void 0 : t.value;
                    null == n && null != A && (n = A),
                        l.Z.dispatch({
                            type: "STREAMING_UPDATE",
                            stream: n,
                        });
                }
                this._scheduleCheck();
            });
    }
    _scheduleCheck() {
        this._started && (this._nextCheck = setTimeout(() => this._check(), E));
    }
    constructor() {
        h(this, "_nextCheck", void 0), h(this, "_started", void 0), (this._started = !1);
    }
}
let x = new D();
function L() {
    _.Z.enabled ? x.start() : x.stop();
}
function j(e) {
    var t;
    if (a()(e.stream, I)) return !1;
    I = null != (t = e.stream) ? t : null;
}
class M extends (r = o.ZP.Store) {
    initialize() {
        L(), this.waitFor(p.Z, _.Z), this.syncWith([_.Z], L);
    }
    getStream() {
        return I;
    }
}
h(M, "displayName", "ExternalStreamingStore");
let k = new M(l.Z, {
    STREAMING_UPDATE: j,
    USER_CONNECTIONS_UPDATE: () => x._check(),
});
