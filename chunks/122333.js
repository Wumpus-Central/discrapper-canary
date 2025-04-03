let r;
n.d(t, { Z: () => L }), n(47120), n(978209);
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(570140),
    o = n(317770),
    s = n(622822),
    c = n(391650),
    u = n(305325),
    d = n(983736),
    p = n(341298),
    h = n(390885),
    f = n(524329),
    g = n(995532),
    m = n(486472),
    b = n(430824),
    _ = n(914010),
    E = n(594174),
    O = n(823379),
    N = n(358085),
    y = n(929809),
    I = n(179645),
    v = n(701476),
    C = n(785997),
    S = n(981631),
    T = n(188785),
    P = n(630724);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function A(e, t) {
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
function Z() {
    null != r && (0, l.Mr3)(r);
}
class x extends o.Z {
    _initialize() {
        a.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen), a.Z.subscribe('LOGOUT', Z);
    }
    _terminate() {
        a.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen), a.Z.unsubscribe('LOGOUT', Z);
    }
    handleConnectionOpen() {
        var e;
        let t,
            a = I.Z.getType();
        if (null == a) return;
        switch (a) {
            case v.M5.INVITE_UNCLAIMED:
                h.Z.flowStart(P.MK.INVITE, P.EW.NUF_STARTED);
                break;
            case v.M5.ORGANIC_REGISTERED:
                h.Z.flowStart(P.MK.ORGANIC, P.EW.NUF_STARTED);
                break;
            case v.M5.MARKETING_UNCLAIMED:
                h.Z.flowStart(P.MK.ORGANIC_MARKETING, P.EW.NUF_STARTED);
        }
        let o = !1,
            Z = _.Z.getGuildId();
        if (a === v.M5.INVITE_UNCLAIMED) {
            let e = b.Z.getGuild(Z);
            null != e && (0, d.Dc)(e) && ((o = !0), (0, f.RM)(e.id));
        }
        let x = () => 0 === m.Z.totalGuilds && !N.isPlatformEmbedded,
            L = s.bN();
        (e = [
            {
                key: 'Unified NUF Modal',
                open: async function (e) {
                    let t = (e) => {
                        switch (e) {
                            case C.F.AGE_GATE:
                                h.Z.flowStep(P.MK.ANY, P.EW.AGE_GATE);
                                break;
                            case C.F.CHOOSE_TEMPLATE:
                                h.Z.flowStep(P.MK.ANY, P.X2.GUILD_TEMPLATES);
                                break;
                            case C.F.CUSTOMIZE_GUILD:
                                h.Z.flowStep(P.MK.ANY, P.X2.GUILD_CREATE);
                                break;
                            case C.F.CHANNEL_PROMPT:
                                h.Z.flowStep(P.MK.ANY, P.X2.CHANNEL_PROMPT);
                                break;
                            case C.F.JOIN_GUILD:
                                h.Z.flowStep(P.MK.ANY, P.X2.JOIN_GUILD);
                                break;
                            case C.F.CREATION_INTENT:
                                h.Z.flowStep(P.MK.ANY, P.X2.CREATION_INTENT);
                                break;
                            case C.F.COMPLETE:
                                h.Z.flowStep(P.MK.ANY, P.X2.SUCCESS);
                                break;
                            case null:
                                break;
                            default:
                                O.vE(e);
                        }
                    };
                    r = await (0, l.ZDy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e('63288'), n.e('1337'), n.e('42483'), n.e('57015')]).then(n.bind(n, 599219));
                            return (n) => (0, i.jsx)(e, A(j({}, n), { onSlideChange: t }));
                        },
                        {
                            onCloseRequest: S.dG4,
                            onCloseCallback: e,
                            modalKey: r
                        }
                    );
                },
                predicate: () => x() && !T.a
            },
            {
                key: 'New User Age Gate',
                open: c.i,
                predicate: () => L && !x() && !T.a
            },
            {
                key: 'Claim Account Modal',
                open: (e) => c.j(N.isPlatformEmbedded, e),
                predicate: () => {
                    var e;
                    return !o && null != E.default.getCurrentUser() && !(null == (e = E.default.getCurrentUser()) ? void 0 : e.isClaimed()) && !T.a && !(0, p.g)('new_user_manager');
                }
            },
            {
                key: 'Verification Gate with Claim Account',
                open: (e) => (0, u.hk)(Z, null != e ? e : void 0),
                predicate: () => {
                    var e;
                    return o && !(null == (e = E.default.getCurrentUser()) ? void 0 : e.isClaimed()) && !T.a;
                }
            },
            {
                key: 'Guild Welcome Modal',
                open: (e) =>
                    (0, l.ZDy)(
                        async () => {
                            let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                            return (t) => (0, i.jsx)(e, A(j({}, t), { guildId: Z }));
                        },
                        { onCloseCallback: e }
                    ),
                predicate: () => null != Z && null != g.Z.get(Z) && g.Z.get(Z) !== g.a
            }
        ]),
            (t = () => {
                y.H(), h.Z.flowStep(P.MK.ANY, P.EW.NUF_COMPLETE, !0);
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
let L = new x();
