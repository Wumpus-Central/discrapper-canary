n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(541716),
    s = n(665149),
    c = n(910611),
    u = n(355298),
    d = n(333984),
    p = n(26373),
    h = n(486622),
    f = n(718538),
    g = n(359110),
    m = n(6025),
    b = n(433355),
    _ = n(933557),
    E = n(287746),
    O = n(388032),
    y = n(560460),
    I = n(46467);
function v(e) {
    let { channel: t, baseChannelId: n } = e,
        v = (0, _.ZP)(t),
        C = (0, p.K)(),
        S = (0, p.V)(),
        N = (0, l.e7)([u.Z], () => u.Z.isMessageRequest(t.id)),
        T = (0, l.e7)([d.Z], () => d.Z.isSpam(t.id)),
        P = (0, f.V)(t.id, t.getRecipientId()),
        j = i.useCallback(() => {
            m.Z.closeChannelSidebar(b.uZ), N && C && (0, g.Kh)(t.id), T && S && (0, g.Kh)(t.id);
        }, [t.id, T, S, N, C]),
        A = i.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(O.intl.string(O.t.pIQ3h4), a.ToastType.FAILURE));
        }, []),
        { markAsNotSpam: Z } = (0, h.m)({
            onAcceptSuccess: j,
            onError: A
        });
    if (null == t || !t.isDM()) return null;
    let x = [
        (0, r.jsx)(
            s.ZP.Icon,
            {
                icon: a.Dio,
                tooltip: O.intl.string(O.t.cpT0Cg),
                onClick: () => m.Z.closeChannelSidebar(n)
            },
            'close'
        )
    ];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.ZP, {
                toolbar: x,
                'aria-label': O.intl.string(O.t.BIYAqa),
                children: (0, c.ud)({
                    channel: t,
                    channelName: v,
                    inSidebar: !0
                })
            }),
            T &&
                (0, r.jsxs)('div', {
                    className: I.hamBanner,
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: I.__invalid_hamBannerText,
                            variant: 'text-sm/normal',
                            children: O.intl.string(O.t.XVOKgo)
                        }),
                        (0, r.jsx)(a.zxk, {
                            className: I.hamBannerButton,
                            size: a.PhG.SMALL,
                            onClick: () => Z(t, P),
                            children: O.intl.string(O.t.koqL3d)
                        })
                    ]
                }),
            (0, r.jsx)('div', {
                className: y.chat,
                children: (0, r.jsx)(
                    E.Z,
                    {
                        channel: t,
                        guild: null,
                        chatInputType: o.Ie.SIDEBAR
                    },
                    t.id
                )
            })
        ]
    });
}
