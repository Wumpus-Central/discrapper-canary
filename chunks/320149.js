n.d(t, { Z: () => y });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(541716),
    s = n(665149),
    c = n(910611),
    u = n(355298),
    d = n(333984),
    p = n(26373),
    h = n(486622),
    g = n(718538),
    f = n(359110),
    m = n(6025),
    b = n(433355),
    _ = n(933557),
    E = n(287746),
    O = n(388032),
    N = n(567692),
    v = n(746034);
function y(e) {
    let { channel: t, baseChannelId: n } = e,
        y = (0, _.ZP)(t),
        I = (0, p.K)(),
        C = (0, p.V)(),
        S = (0, l.e7)([u.Z], () => u.Z.isMessageRequest(t.id)),
        T = (0, l.e7)([d.Z], () => d.Z.isSpam(t.id)),
        P = (0, g.V)(t.id, t.getRecipientId()),
        j = i.useCallback(() => {
            m.Z.closeChannelSidebar(b.uZ), S && I && (0, f.Kh)(t.id), T && C && (0, f.Kh)(t.id);
        }, [t.id, T, C, S, I]),
        A = i.useCallback(() => {
            (0, o.showToast)((0, o.createToast)(O.NW.string(O.t.pIQ3h4), o.ToastType.FAILURE));
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
                icon: o.Dio,
                tooltip: O.NW.string(O.t.cpT0Cg),
                onClick: () => m.Z.closeChannelSidebar(n)
            },
            'close'
        )
    ];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.ZP, {
                toolbar: x,
                'aria-label': O.NW.string(O.t.BIYAqa),
                children: (0, c.ud)({
                    channel: t,
                    channelName: y,
                    inSidebar: !0
                })
            }),
            T &&
                (0, r.jsxs)('div', {
                    className: v.hamBanner,
                    children: [
                        (0, r.jsx)(o.Text, {
                            className: v.__invalid_hamBannerText,
                            variant: 'text-sm/normal',
                            children: O.NW.string(O.t.XVOKgo)
                        }),
                        (0, r.jsx)(o.zxk, {
                            className: v.hamBannerButton,
                            size: o.PhG.SMALL,
                            onClick: () => Z(t, P),
                            children: O.NW.string(O.t.koqL3d)
                        })
                    ]
                }),
            (0, r.jsx)('div', {
                className: N.chat,
                children: (0, r.jsx)(
                    E.Z,
                    {
                        channel: t,
                        guild: null,
                        chatInputType: a.Ie.SIDEBAR
                    },
                    t.id
                )
            })
        ]
    });
}
