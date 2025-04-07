n.d(t, { Z: () => R }), n(388685);
var r = n(152057),
    i = n(570140),
    o = n(147913),
    a = n(38618),
    s = n(517100),
    l = n(914010),
    c = n(451478),
    u = n(425128),
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
let p = r.v.LEAGUE_OF_LEGENDS_WEEKLY,
    h = 3,
    m = 5,
    g = 900000,
    E = new Map(),
    b = new Set(),
    y = new Map();
function v(e, t) {
    return ''.concat(e, ':').concat(t);
}
function O(e, t) {
    var n;
    let r = v(e, t);
    if (b.has(r) || (null != (n = y.get(r)) ? n : 0) > h) return !1;
    if (l.Z.getGuildId() !== e) return;
    if (
        !(0, f.NM)({
            guildId: e,
            location: 'GuildLeaderboardManager'
        }) ||
        !c.Z.isFocused() ||
        !a.Z.isConnected()
    )
        return !1;
    let i = s.Z.getIdleSince();
    return !(null != i && Date.now() - i > g) && !0;
}
function I() {
    for (let e in E) clearTimeout(E.get(e)), E.delete(e);
}
function S() {
    var e;
    I();
    let t = l.Z.getGuildId();
    if (null == t || !O(t, p)) return;
    let n = d.Z.getLeaderboardResponse(t, p),
        r = setTimeout(
            () =>
                T({
                    guildId: t,
                    leaderboardId: p
                }),
            Math.max(0, (null != (e = null == n ? void 0 : n.expires_at) ? e : Date.now()) - Date.now())
        ),
        i = v(t, p);
    E.set(i, r);
}
async function T(e) {
    let { guildId: t, leaderboardId: n, force: r = !1 } = e;
    if (!(O(t, n) || r)) return;
    let o = v(t, n);
    if (!b.has(o))
        try {
            b.add(o);
            let e = await (0, u.pV)({
                    guildId: t,
                    leaderboardId: n,
                    intervalOffset: 0,
                    force: r
                }),
                a = d.Z.get(t, n);
            if ((null == a ? void 0 : a.interval_start) !== e.leaderboard.interval_start) {
                let e = await (0, u.pV)({
                    guildId: t,
                    leaderboardId: n,
                    intervalOffset: -1,
                    force: r
                });
                i.Z.dispatch({
                    type: 'SET_GUILD_LEADERBOARD',
                    leaderboardResponse: e,
                    intervalOffset: -1
                });
            }
            i.Z.dispatch({
                type: 'SET_GUILD_LEADERBOARD',
                leaderboardResponse: e,
                intervalOffset: 0
            }),
                y.delete(o),
                b.delete(o),
                S();
        } catch (i) {
            var a;
            let e = (null != (a = y.get(o)) ? a : 0) + 1;
            if ((y.set(o, e), !O(t, n))) return;
            let r = 1000 * Math.pow(m, e);
            E.set(
                o,
                setTimeout(
                    () =>
                        T({
                            guildId: t,
                            leaderboardId: n,
                            force: !0
                        }),
                    r
                )
            );
        }
}
function N() {
    S();
}
function A() {
    I(), (E = new Map()), (b = new Set()), (y = new Map()), N();
}
class C extends o.Z {
    fetchLeaderboard(e) {
        return T(e);
    }
    constructor(...e) {
        super(...e),
            _(this, 'actions', {
                POST_CONNECTION_OPEN: A,
                CONNECTION_CLOSED: N,
                WINDOW_FOCUS: N,
                IDLE: N,
                CHANNEL_SELECT: N
            });
    }
}
let R = new C();
