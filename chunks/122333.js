let r;
n.d(t, { Z: () => w }), n(388685), n(583741);
var i = n(54381);
n(473749);
var l = n(481060),
    a = n(570140),
    o = n(317770),
    s = n(622822),
    c = n(391650),
    u = n(305325),
    d = n(983736),
    p = n(341298),
    f = n(390885),
    g = n(524329),
    h = n(995532),
    m = n(486472),
    b = n(430824),
    _ = n(914010),
    E = n(594174),
    O = n(823379),
    v = n(358085),
    y = n(929809),
    I = n(179645),
    C = n(701476),
    S = n(785997),
    T = n(981631),
    N = n(188785),
    j = n(630724);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A() {
    null != r && (0, l.Mr3)(r);
}
class Z extends o.Z {
    _initialize() {
        a.Z.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), a.Z.subscribe("LOGOUT", A);
    }
    _terminate() {
        a.Z.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), a.Z.unsubscribe("LOGOUT", A);
    }
    handleConnectionOpen() {
        var e;
        let t,
            a = I.Z.getType();
        if (null == a) return;
        switch (a) {
            case C.M5.INVITE_UNCLAIMED:
                f.Z.flowStart(j.MK.INVITE, j.EW.NUF_STARTED);
                break;
            case C.M5.ORGANIC_REGISTERED:
                f.Z.flowStart(j.MK.ORGANIC, j.EW.NUF_STARTED);
                break;
            case C.M5.MARKETING_UNCLAIMED:
                f.Z.flowStart(j.MK.ORGANIC_MARKETING, j.EW.NUF_STARTED);
        }
        let o = !1,
            A = _.Z.getGuildId();
        if (a === C.M5.INVITE_UNCLAIMED) {
            let e = b.Z.getGuild(A);
            null != e && (0, d.Dc)(e) && ((o = !0), (0, g.RM)(e.id));
        }
        let Z = () => 0 === m.Z.totalGuilds && !v.isPlatformEmbedded,
            w = s.bN();
        (e = [
            {
                key: "Unified NUF Modal",
                open: async function (e) {
                    let t = (e) => {
                        switch (e) {
                            case S.F.AGE_GATE:
                                f.Z.flowStep(j.MK.ANY, j.EW.AGE_GATE);
                                break;
                            case S.F.CHOOSE_TEMPLATE:
                                f.Z.flowStep(j.MK.ANY, j.X2.GUILD_TEMPLATES);
                                break;
                            case S.F.CUSTOMIZE_GUILD:
                                f.Z.flowStep(j.MK.ANY, j.X2.GUILD_CREATE);
                                break;
                            case S.F.CHANNEL_PROMPT:
                                f.Z.flowStep(j.MK.ANY, j.X2.CHANNEL_PROMPT);
                                break;
                            case S.F.JOIN_GUILD:
                                f.Z.flowStep(j.MK.ANY, j.X2.JOIN_GUILD);
                                break;
                            case S.F.CREATION_INTENT:
                                f.Z.flowStep(j.MK.ANY, j.X2.CREATION_INTENT);
                                break;
                            case S.F.COMPLETE:
                                f.Z.flowStep(j.MK.ANY, j.X2.SUCCESS);
                                break;
                            case null:
                                break;
                            default:
                                O.vE(e);
                        }
                    };
                    r = await (0, l.ZDy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("42483"), n.e("24028")]).then(
                                n.bind(n, 599219),
                            );
                            return (n) => (0, i.jsx)(e, x(P({}, n), { onSlideChange: t }));
                        },
                        {
                            onCloseRequest: T.dG4,
                            onCloseCallback: e,
                            modalKey: r,
                        },
                    );
                },
                predicate: () => Z() && !N.a,
            },
            {
                key: "New User Age Gate",
                open: c.i,
                predicate: () => w && !Z() && !N.a,
            },
            {
                key: "Claim Account Modal",
                open: (e) => c.j(v.isPlatformEmbedded, e),
                predicate: () => {
                    var e;
                    return (
                        !o &&
                        null != E.default.getCurrentUser() &&
                        !(null == (e = E.default.getCurrentUser()) ? void 0 : e.isClaimed()) &&
                        !N.a &&
                        !(0, p.g)()
                    );
                },
            },
            {
                key: "Verification Gate with Claim Account",
                open: (e) => (0, u.hk)(A, null != e ? e : void 0),
                predicate: () => {
                    var e;
                    return o && !(null == (e = E.default.getCurrentUser()) ? void 0 : e.isClaimed()) && !N.a;
                },
            },
            {
                key: "Guild Welcome Modal",
                open: (e) =>
                    (0, l.ZDy)(
                        async () => {
                            let { default: e } = await n.e("90542").then(n.bind(n, 184782));
                            return (t) => (0, i.jsx)(e, x(P({}, t), { guildId: A }));
                        },
                        { onCloseCallback: e },
                    ),
                predicate: () => null != A && null != h.Z.get(A) && h.Z.get(A) !== h.a,
            },
        ]),
            (t = () => {
                y.H(), f.Z.flowStep(j.MK.ANY, j.EW.NUF_COMPLETE, !0);
            }),
            [...e].reverse().forEach((e) => {
                let n = t;
                t = () => {
                    e.predicate() ? e.open(n) : n();
                };
            }),
            t();
    }
}
let w = new Z();
