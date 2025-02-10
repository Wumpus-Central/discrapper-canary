let i;
n.d(t, { Z: () => P }), n(47120);
var l = n(200651);
n(192379);
var r = n(481060),
    a = n(570140),
    s = n(317770),
    o = n(622822),
    c = n(391650),
    d = n(305325),
    u = n(983736),
    h = n(341298),
    m = n(390885),
    p = n(524329),
    g = n(995532),
    _ = n(486472),
    f = n(430824),
    E = n(914010),
    I = n(594174),
    C = n(823379),
    v = n(358085),
    N = n(929809),
    T = n(179645),
    S = n(701476),
    Z = n(785997),
    A = n(981631),
    x = n(188785),
    b = n(630724);
function L() {
    null != i && (0, r.Mr3)(i);
}
class y extends s.Z {
    _initialize() {
        a.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen), a.Z.subscribe('LOGOUT', L);
    }
    _terminate() {
        a.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen), a.Z.unsubscribe('LOGOUT', L);
    }
    handleConnectionOpen() {
        var e;
        let t;
        let a = T.Z.getType();
        if (null == a) return;
        switch (a) {
            case S.M5.INVITE_UNCLAIMED:
                m.Z.flowStart(b.MK.INVITE, b.EW.NUF_STARTED);
                break;
            case S.M5.ORGANIC_REGISTERED:
                m.Z.flowStart(b.MK.ORGANIC, b.EW.NUF_STARTED);
                break;
            case S.M5.MARKETING_UNCLAIMED:
                m.Z.flowStart(b.MK.ORGANIC_MARKETING, b.EW.NUF_STARTED);
        }
        let s = !1,
            L = E.Z.getGuildId();
        if (a === S.M5.INVITE_UNCLAIMED) {
            let e = f.Z.getGuild(L);
            null != e && (0, u.Dc)(e) && ((s = !0), (0, p.RM)(e.id));
        }
        let y = () => 0 === _.Z.totalGuilds && !v.isPlatformEmbedded,
            P = o.b();
        (e = [
            {
                key: 'Unified NUF Modal',
                open: async function (e) {
                    let t = (e) => {
                        switch (e) {
                            case Z.F.AGE_GATE:
                                m.Z.flowStep(b.MK.ANY, b.EW.AGE_GATE);
                                break;
                            case Z.F.CHOOSE_TEMPLATE:
                                m.Z.flowStep(b.MK.ANY, b.X2.GUILD_TEMPLATES);
                                break;
                            case Z.F.CUSTOMIZE_GUILD:
                                m.Z.flowStep(b.MK.ANY, b.X2.GUILD_CREATE);
                                break;
                            case Z.F.CHANNEL_PROMPT:
                                m.Z.flowStep(b.MK.ANY, b.X2.CHANNEL_PROMPT);
                                break;
                            case Z.F.JOIN_GUILD:
                                m.Z.flowStep(b.MK.ANY, b.X2.JOIN_GUILD);
                                break;
                            case Z.F.CREATION_INTENT:
                                m.Z.flowStep(b.MK.ANY, b.X2.CREATION_INTENT);
                                break;
                            case Z.F.COMPLETE:
                                m.Z.flowStep(b.MK.ANY, b.X2.SUCCESS);
                                break;
                            case null:
                                break;
                            default:
                                C.vE(e);
                        }
                    };
                    i = await (0, r.ZDy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e('63288'), n.e('1337'), n.e('42483'), n.e('82077')]).then(n.bind(n, 599219));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    onSlideChange: t
                                });
                        },
                        {
                            onCloseRequest: A.dG4,
                            onCloseCallback: e,
                            modalKey: i
                        }
                    );
                },
                predicate: () => y() && !x.a
            },
            {
                key: 'New User Age Gate',
                open: c.i,
                predicate: () => P && !y() && !x.a
            },
            {
                key: 'Claim Account Modal',
                open: (e) => c.j(v.isPlatformEmbedded, e),
                predicate: () => {
                    var e;
                    return !s && null != I.default.getCurrentUser() && !(null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !x.a && !(0, h.g)('new_user_manager');
                }
            },
            {
                key: 'Verification Gate with Claim Account',
                open: (e) => (0, d.hk)(L, null != e ? e : void 0),
                predicate: () => {
                    var e;
                    return s && !(null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !x.a;
                }
            },
            {
                key: 'Guild Welcome Modal',
                open: (e) =>
                    (0, r.ZDy)(
                        async () => {
                            let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                            return (t) =>
                                (0, l.jsx)(e, {
                                    ...t,
                                    guildId: L
                                });
                        },
                        { onCloseCallback: e }
                    ),
                predicate: () => null != L && null != g.Z.get(L) && g.Z.get(L) !== g.a
            }
        ]),
            (t = () => {
                N.H(), m.Z.flowStep(b.MK.ANY, b.EW.NUF_COMPLETE, !0);
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
let P = new y();
