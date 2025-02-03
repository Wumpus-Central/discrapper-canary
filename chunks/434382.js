n.d(t, { Z: () => O }), n(47120);
var i = n(152057),
    r = n(570140),
    a = n(147913),
    s = n(38618),
    o = n(517100),
    l = n(914010),
    u = n(451478),
    c = n(425128),
    d = n(994752),
    f = n(276344);
function _(e, t, n) {
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
let p = i.v.LEAGUE_OF_LEGENDS_WEEKLY,
    h = 3,
    m = 5,
    g = 900000,
    E = new Map(),
    v = new Set(),
    y = new Map();
function I(e, t) {
    return ''.concat(e, ':').concat(t);
}
function b(e, t) {
    var n;
    let i = I(e, t);
    if (v.has(i) || (null !== (n = y.get(i)) && void 0 !== n ? n : 0) > h) return !1;
    if (l.Z.getGuildId() !== e) return;
    if (
        !(0, f.NM)({
            guildId: e,
            location: 'GuildLeaderboardManager'
        }) ||
        !u.Z.isFocused() ||
        !s.Z.isConnected()
    )
        return !1;
    let r = o.Z.getIdleSince();
    return !(null != r && Date.now() - r > g);
}
function T() {
    for (let e in E) clearTimeout(E.get(e)), E.delete(e);
}
function S() {
    var e;
    T();
    let t = l.Z.getGuildId();
    if (null == t || !b(t, p)) return;
    let n = d.Z.getLeaderboardResponse(t, p),
        i = setTimeout(
            () =>
                A({
                    guildId: t,
                    leaderboardId: p
                }),
            Math.max(0, (null !== (e = null == n ? void 0 : n.expires_at) && void 0 !== e ? e : Date.now()) - Date.now())
        ),
        r = I(t, p);
    E.set(r, i);
}
async function A(e) {
    let { guildId: t, leaderboardId: n, force: i = !1 } = e;
    if (!(b(t, n) || i)) return;
    let a = I(t, n);
    if (!v.has(a))
        try {
            v.add(a);
            let e = await (0, c.pV)({
                    guildId: t,
                    leaderboardId: n,
                    intervalOffset: 0,
                    force: i
                }),
                s = d.Z.get(t, n);
            if ((null == s ? void 0 : s.interval_start) !== e.leaderboard.interval_start) {
                let e = await (0, c.pV)({
                    guildId: t,
                    leaderboardId: n,
                    intervalOffset: -1,
                    force: i
                });
                r.Z.dispatch({
                    type: 'SET_GUILD_LEADERBOARD',
                    leaderboardResponse: e,
                    intervalOffset: -1
                });
            }
            r.Z.dispatch({
                type: 'SET_GUILD_LEADERBOARD',
                leaderboardResponse: e,
                intervalOffset: 0
            }),
                y.delete(a),
                v.delete(a),
                S();
        } catch (r) {
            var s;
            let e = (null !== (s = y.get(a)) && void 0 !== s ? s : 0) + 1;
            if ((y.set(a, e), !b(t, n))) return;
            let i = 1000 * Math.pow(m, e);
            E.set(
                a,
                setTimeout(
                    () =>
                        A({
                            guildId: t,
                            leaderboardId: n,
                            force: !0
                        }),
                    i
                )
            );
        }
}
function N() {
    S();
}
function C() {
    T(), (E = new Map()), (v = new Set()), (y = new Map()), N();
}
class R extends a.Z {
    fetchLeaderboard(e) {
        return A(e);
    }
    constructor(...e) {
        super(...e),
            _(this, 'actions', {
                POST_CONNECTION_OPEN: C,
                CONNECTION_CLOSED: N,
                WINDOW_FOCUS: N,
                IDLE: N,
                CHANNEL_SELECT: N
            });
    }
}
let O = new R();
