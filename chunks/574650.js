n(653041), n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(512969),
    o = n(442837),
    s = n(481060),
    c = n(430824),
    u = n(914010),
    d = n(693546),
    m = n(305325),
    h = n(246364),
    f = n(983736),
    p = n(937111),
    _ = n(981631),
    g = n(176505),
    E = n(388032),
    C = n(59220),
    I = n(532623);
t.Z = () => {
    var e, t;
    let r = (0, o.e7)([u.Z], () => u.Z.getGuildId(), []),
        x = (0, o.e7)([c.Z], () => c.Z.getGuild(r), [r]),
        N = (0, o.e7)([p.Z], () => (null != r ? p.Z.getRequest(r) : null), [r]),
        v = (0, a.TH)(),
        T = (null === (e = (0, a.LX)(v.pathname, _.Z5c.CHANNEL(null == x ? void 0 : x.id, g.oC.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
    if (null == x || !(0, f.Dc)(x) || T) return null;
    let S = null !== (t = null == N ? void 0 : N.applicationStatus) && void 0 !== t ? t : h.wB.STARTED,
        A = null,
        b = null,
        j = null,
        R = [C.notice, I.notice];
    switch (S) {
        case h.wB.SUBMITTED:
            (A = E.intl.string(E.t['5iLvS0'])),
                (b = E.intl.string(E.t.mqtdmZ)),
                (j = () => {
                    (0, s.openModal)((e) =>
                        (0, i.jsx)(s.ConfirmModal, {
                            header: E.intl.string(E.t.aIz1oa),
                            confirmText: E.intl.string(E.t['cY+Ooa']),
                            cancelText: E.intl.string(E.t['ETE/oK']),
                            onConfirm: () => d.Z.removeGuildJoinRequest(x.id),
                            confirmButtonColor: s.Button.Colors.BRAND,
                            ...e,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: E.intl.string(E.t['13tjTU'])
                            })
                        })
                    );
                });
            break;
        case h.wB.REJECTED:
            (A = E.intl.string(E.t.lk30cX)),
                (b = E.intl.string(E.t['8RrsHh'])),
                (j = () => {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                        return (t) =>
                            (0, i.jsx)(e, {
                                guildId: x.id,
                                ...t
                            });
                    });
                }),
                R.push(C.error);
            break;
        default:
            (A = E.intl.string(E.t.G5YKXF)),
                (b = E.intl.string(E.t['r8/DT0'])),
                (j = () => {
                    (0, m.hk)(x.id);
                });
    }
    return (0, i.jsxs)('div', {
        className: l()(...R),
        children: [
            (0, i.jsx)(s.Text, {
                className: C.header,
                variant: 'text-sm/normal',
                children: A
            }),
            (0, i.jsx)(s.Button, {
                className: C.button,
                look: s.Button.Looks.OUTLINED,
                color: s.Button.Colors.WHITE,
                size: s.Button.Sizes.NONE,
                onClick: j,
                children: b
            })
        ]
    });
};
