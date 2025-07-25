n.d(t, { Z: () => C });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(755721),
    o = n(481060),
    s = n(541716),
    c = n(665149),
    u = n(910611),
    d = n(355298),
    p = n(333984),
    h = n(26373),
    f = n(486622),
    g = n(718538),
    m = n(359110),
    b = n(6025),
    _ = n(433355),
    O = n(933557),
    E = n(287746),
    y = n(388032),
    v = n(560460),
    I = n(46467);
function C(e) {
    let { channel: t, baseChannelId: n } = e,
        C = (0, O.ZP)(t),
        S = (0, h.K)(),
        N = (0, h.V)(),
        T = (0, l.e7)([d.Z], () => d.Z.isMessageRequest(t.id)),
        P = (0, l.e7)([p.Z], () => p.Z.isSpam(t.id)),
        j = (0, g.V)(t.id, t.getRecipientId()),
        A = i.useCallback(() => {
            (b.Z.closeChannelSidebar(_.uZ), T && S && (0, m.Kh)(t.id), P && N && (0, m.Kh)(t.id));
        }, [t.id, P, N, T, S]),
        x = i.useCallback(() => {
            (0, o.showToast)((0, o.createToast)(y.intl.string(y.t.pIQ3h4), o.ToastType.FAILURE));
        }, []),
        { markAsNotSpam: Z } = (0, f.m)({
            onAcceptSuccess: A,
            onError: x
        });
    if (null == t || !t.isDM()) return null;
    let w = [
        (0, r.jsx)(
            c.ZP.Icon,
            {
                icon: o.Dio,
                tooltip: y.intl.string(y.t.cpT0Cg),
                onClick: () => b.Z.closeChannelSidebar(n)
            },
            'close'
        )
    ];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.ZP, {
                toolbar: w,
                'aria-label': y.intl.string(y.t.BIYAqa),
                children: (0, u.ud)({
                    channel: t,
                    channelName: C,
                    inSidebar: !0
                })
            }),
            P &&
                (0, r.jsxs)('div', {
                    className: I.hamBanner,
                    children: [
                        (0, r.jsx)(o.Text, {
                            className: I.__invalid_hamBannerText,
                            variant: 'text-sm/normal',
                            children: y.intl.string(y.t.XVOKgo)
                        }),
                        (0, r.jsx)(a.zx, {
                            className: I.hamBannerButton,
                            size: a.Ph.SMALL,
                            onClick: () => Z(t, j),
                            children: y.intl.string(y.t.koqL3d)
                        })
                    ]
                }),
            (0, r.jsx)('div', {
                className: v.chat,
                children: (0, r.jsx)(
                    E.Z,
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
