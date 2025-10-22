n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(541716),
    s = n(665149),
    c = n(910611),
    u = n(355298),
    d = n(333984),
    p = n(26373),
    f = n(486622),
    h = n(718538),
    g = n(359110),
    m = n(6025),
    b = n(433355),
    _ = n(933557),
    E = n(287746),
    O = n(388032),
    v = n(952713),
    y = n(998603);
function I(e) {
    let { channel: t, baseChannelId: n } = e,
        I = (0, _.ZP)(t),
        C = (0, p.K)(),
        S = (0, p.V)(),
        N = (0, l.e7)([u.Z], () => u.Z.isMessageRequest(t.id)),
        T = (0, l.e7)([d.Z], () => d.Z.isSpam(t.id)),
        P = (0, h.V)(t.id, t.getRecipientId()),
        j = i.useCallback(() => {
            m.Z.closeChannelSidebar(b.uZ), N && C && (0, g.Kh)(t.id), T && S && (0, g.Kh)(t.id);
        }, [t.id, T, S, N, C]),
        x = i.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(O.intl.string(O.t.pIQ3h4), a.ToastType.FAILURE));
        }, []),
        { markAsNotSpam: A } = (0, f.m)({
            onAcceptSuccess: j,
            onError: x,
        });
    if (null == t || !t.isDM()) return null;
    let Z = [
        (0, r.jsx)(
            s.ZP.Icon,
            {
                icon: a.Dio,
                tooltip: O.intl.string(O.t.cpT0Cq),
                onClick: () => m.Z.closeChannelSidebar(n),
            },
            "close",
        ),
    ];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.ZP, {
                toolbar: Z,
                "aria-label": O.intl.string(O.t.BIYAqa),
                children: (0, c.ud)({
                    channel: t,
                    channelName: I,
                    inSidebar: !0,
                }),
            }),
            T &&
                (0, r.jsxs)("div", {
                    className: y.hamBanner,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: O.intl.string(O.t.XVOKgj),
                        }),
                        (0, r.jsx)("div", {
                            className: y.hamBannerButton,
                            children: (0, r.jsx)(a.Button, {
                                size: "sm",
                                onClick: () => A(t, P),
                                text: O.intl.string(O.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)("div", {
                className: v.chat,
                children: (0, r.jsx)(
                    E.Z,
                    {
                        channel: t,
                        guild: null,
                        chatInputType: o.Ie.SIDEBAR,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
