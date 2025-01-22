var i = r(47120);
var a = r(152057),
    o = r(570140),
    s = r(147913),
    l = r(38618),
    u = r(517100),
    c = r(914010),
    d = r(451478),
    f = r(425128),
    p = r(994752),
    h = r(276344);
function _(e, n, r) {
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
let m = a.v.LEAGUE_OF_LEGENDS_WEEKLY,
    g = 3,
    E = 5,
    v = 900000,
    y = new Map(),
    b = new Set(),
    I = new Map();
function T(e, n) {
    return ''.concat(e, ':').concat(n);
}
function S(e, n) {
    var r;
    let i = T(e, n);
    if (b.has(i) || (null !== (r = I.get(i)) && void 0 !== r ? r : 0) > g) return !1;
    if (c.Z.getGuildId() !== e) return;
    if (
        !(0, h.NM)({
            guildId: e,
            location: 'GuildLeaderboardManager'
        }) ||
        !d.Z.isFocused() ||
        !l.Z.isConnected()
    )
        return !1;
    let a = u.Z.getIdleSince();
    return !(null != a && Date.now() - a > v) && !0;
}
function A() {
    for (let e in y) clearTimeout(y.get(e)), y.delete(e);
}
function C() {
    var e;
    A();
    let n = c.Z.getGuildId();
    if (null == n || !S(n, m)) return;
    let r = p.Z.getLeaderboardResponse(n, m),
        i = setTimeout(
            () =>
                N({
                    guildId: n,
                    leaderboardId: m
                }),
            Math.max(0, (null !== (e = null == r ? void 0 : r.expires_at) && void 0 !== e ? e : Date.now()) - Date.now())
        ),
        a = T(n, m);
    y.set(a, i);
}
async function N(e) {
    let { guildId: n, leaderboardId: r, force: i = !1 } = e;
    if (!(S(n, r) || i)) return;
    let a = T(n, r);
    if (!b.has(a))
        try {
            b.add(a);
            let e = await (0, f.pV)({
                    guildId: n,
                    leaderboardId: r,
                    intervalOffset: 0,
                    force: i
                }),
                s = p.Z.get(n, r);
            if ((null == s ? void 0 : s.interval_start) !== e.leaderboard.interval_start) {
                let e = await (0, f.pV)({
                    guildId: n,
                    leaderboardId: r,
                    intervalOffset: -1,
                    force: i
                });
                o.Z.dispatch({
                    type: 'SET_GUILD_LEADERBOARD',
                    leaderboardResponse: e,
                    intervalOffset: -1
                });
            }
            o.Z.dispatch({
                type: 'SET_GUILD_LEADERBOARD',
                leaderboardResponse: e,
                intervalOffset: 0
            }),
                I.delete(a),
                b.delete(a),
                C();
        } catch (o) {
            var s;
            let e = (null !== (s = I.get(a)) && void 0 !== s ? s : 0) + 1;
            if ((I.set(a, e), !S(n, r))) return;
            let i = 1000 * Math.pow(E, e);
            y.set(
                a,
                setTimeout(
                    () =>
                        N({
                            guildId: n,
                            leaderboardId: r,
                            force: !0
                        }),
                    i
                )
            );
        }
}
function R() {
    C();
}
function O() {
    A(), (y = new Map()), (b = new Set()), (I = new Map()), R();
}
class D extends s.Z {
    fetchLeaderboard(e) {
        return N(e);
    }
    constructor(...e) {
        super(...e),
            _(this, 'actions', {
                POST_CONNECTION_OPEN: O,
                CONNECTION_CLOSED: R,
                WINDOW_FOCUS: R,
                IDLE: R,
                CHANNEL_SELECT: R
            });
    }
}
n.Z = new D();
