let i;
n(47120);
var r = n(200651);
n(192379);
var l = n(481060),
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
    f = n(486472),
    _ = n(430824),
    E = n(914010),
    I = n(594174),
    C = n(823379),
    N = n(358085),
    v = n(929809),
    S = n(179645),
    T = n(701476),
    A = n(785997),
    b = n(981631),
    Z = n(188785),
    x = n(630724);
function L() {
    null != i && (0, l.closeModal)(i);
}
class P extends s.Z {
    _initialize() {
        a.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen), a.Z.subscribe('LOGOUT', L);
    }
    _terminate() {
        a.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen), a.Z.unsubscribe('LOGOUT', L);
    }
    handleConnectionOpen() {
        var e;
        let t,
            a = S.Z.getType();
        if (null == a) return;
        switch (a) {
            case T.M5.INVITE_UNCLAIMED:
                m.Z.flowStart(x.MK.INVITE, x.EW.NUF_STARTED);
                break;
            case T.M5.ORGANIC_REGISTERED:
                m.Z.flowStart(x.MK.ORGANIC, x.EW.NUF_STARTED);
                break;
            case T.M5.MARKETING_UNCLAIMED:
                m.Z.flowStart(x.MK.ORGANIC_MARKETING, x.EW.NUF_STARTED);
        }
        let s = !1,
            L = E.Z.getGuildId();
        if (a === T.M5.INVITE_UNCLAIMED) {
            let e = _.Z.getGuild(L);
            null != e && (0, u.Dc)(e) && ((s = !0), (0, p.RM)(e.id));
        }
        let P = () => 0 === f.Z.totalGuilds && !N.isPlatformEmbedded,
            O = o.b();
        (e = [
            {
                key: 'Unified NUF Modal',
                open: async function e(e) {
                    let t = (e) => {
                        switch (e) {
                            case A.F.AGE_GATE:
                                m.Z.flowStep(x.MK.ANY, x.EW.AGE_GATE);
                                break;
                            case A.F.CHOOSE_TEMPLATE:
                                m.Z.flowStep(x.MK.ANY, x.X2.GUILD_TEMPLATES);
                                break;
                            case A.F.CUSTOMIZE_GUILD:
                                m.Z.flowStep(x.MK.ANY, x.X2.GUILD_CREATE);
                                break;
                            case A.F.CHANNEL_PROMPT:
                                m.Z.flowStep(x.MK.ANY, x.X2.CHANNEL_PROMPT);
                                break;
                            case A.F.JOIN_GUILD:
                                m.Z.flowStep(x.MK.ANY, x.X2.JOIN_GUILD);
                                break;
                            case A.F.CREATION_INTENT:
                                m.Z.flowStep(x.MK.ANY, x.X2.CREATION_INTENT);
                                break;
                            case A.F.COMPLETE:
                                m.Z.flowStep(x.MK.ANY, x.X2.SUCCESS);
                                break;
                            case null:
                                break;
                            default:
                                C.vE(e);
                        }
                    };
                    i = await (0, l.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e('63288'), n.e('1337'), n.e('42483'), n.e('62245')]).then(n.bind(n, 599219));
                            return (n) =>
                                (0, r.jsx)(e, {
                                    ...n,
                                    onSlideChange: t
                                });
                        },
                        {
                            onCloseRequest: b.dG4,
                            onCloseCallback: e,
                            modalKey: i
                        }
                    );
                },
                predicate: () => P() && !Z.a
            },
            {
                key: 'New User Age Gate',
                open: c.i,
                predicate: () => O && !P() && !Z.a
            },
            {
                key: 'Claim Account Modal',
                open: (e) => c.j(N.isPlatformEmbedded, e),
                predicate: () => {
                    var e;
                    return !s && null != I.default.getCurrentUser() && !(null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !Z.a && !(0, h.g)('new_user_manager');
                }
            },
            {
                key: 'Verification Gate with Claim Account',
                open: (e) => (0, d.hk)(L, null != e ? e : void 0),
                predicate: () => {
                    var e;
                    return s && !(null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !Z.a;
                }
            },
            {
                key: 'Guild Welcome Modal',
                open: (e) =>
                    (0, l.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                            return (t) =>
                                (0, r.jsx)(e, {
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
                v.H(), m.Z.flowStep(x.MK.ANY, x.EW.NUF_COMPLETE, !0);
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
t.Z = new P();
