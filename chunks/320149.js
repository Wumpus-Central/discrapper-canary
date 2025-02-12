n.d(t, { Z: () => T });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(541716),
    o = n(665149),
    c = n(910611),
    d = n(355298),
    u = n(333984),
    h = n(26373),
    m = n(486622),
    p = n(718538),
    g = n(359110),
    _ = n(6025),
    f = n(433355),
    E = n(933557),
    I = n(287746),
    C = n(388032),
    N = n(437413),
    v = n(458686);
function T(e) {
    let { channel: t, baseChannelId: n } = e,
        T = (0, E.ZP)(t),
        S = (0, h.K)(),
        A = (0, h.V)(),
        b = (0, r.e7)([d.Z], () => d.Z.isMessageRequest(t.id)),
        Z = (0, r.e7)([u.Z], () => u.Z.isSpam(t.id)),
        x = (0, p.V)(t.id, t.getRecipientId()),
        L = l.useCallback(() => {
            _.Z.closeChannelSidebar(f.uZ), b && S && (0, g.Kh)(t.id), Z && A && (0, g.Kh)(t.id);
        }, [t.id, Z, A, b, S]),
        y = l.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(C.intl.string(C.t.pIQ3h4), a.ToastType.FAILURE));
        }, []),
        { markAsNotSpam: P } = (0, m.m)({
            onAcceptSuccess: L,
            onError: y
        });
    if (null == t || !t.isDM()) return null;
    let O = [
        (0, i.jsx)(
            o.ZP.Icon,
            {
                icon: a.Dio,
                tooltip: C.intl.string(C.t.cpT0Cg),
                onClick: () => _.Z.closeChannelSidebar(n)
            },
            'close'
        )
    ];
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.ZP, {
                toolbar: O,
                'aria-label': C.intl.string(C.t.BIYAqa),
                children: (0, c.ud)({
                    channel: t,
                    channelName: T,
                    inSidebar: !0
                })
            }),
            Z &&
                (0, i.jsxs)('div', {
                    className: v.hamBanner,
                    children: [
                        (0, i.jsx)(a.Text, {
                            className: v.__invalid_hamBannerText,
                            variant: 'text-sm/normal',
                            children: C.intl.string(C.t.XVOKgo)
                        }),
                        (0, i.jsx)(a.zxk, {
                            className: v.hamBannerButton,
                            size: a.PhG.SMALL,
                            onClick: () => P(t, x),
                            children: C.intl.string(C.t.koqL3d)
                        })
                    ]
                }),
            (0, i.jsx)('div', {
                className: N.chat,
                children: (0, i.jsx)(
                    I.Z,
                    {
                        channel: t,
                        guild: null,
                        chatInputType: s.Ie.SIDEBAR
                    },
                    t.id
                )
            })
        ]
    });
}
