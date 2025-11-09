n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(541716),
    o = n(665149),
    c = n(910611),
    u = n(355298),
    d = n(333984),
    p = n(26373),
    f = n(486622),
    h = n(718538),
    g = n(359110),
    m = n(6025),
    _ = n(433355),
    b = n(933557),
    E = n(287746),
    O = n(388032),
    y = n(952713),
    v = n(998603);
function I(e) {
    let { channel: t, baseChannelId: n } = e,
        I = (0, b.ZP)(t),
        C = (0, p.K)(),
        S = (0, p.V)(),
        T = (0, l.e7)([u.Z], () => u.Z.isMessageRequest(t.id)),
        N = (0, l.e7)([d.Z], () => d.Z.isSpam(t.id)),
        j = (0, h.V)(t.id, t.getRecipientId()),
        P = i.useCallback(() => {
            m.Z.closeChannelSidebar(_.uZ), T && C && (0, g.Kh)(t.id), N && S && (0, g.Kh)(t.id);
        }, [t.id, N, S, T, C]),
        x = i.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(O.intl.string(O.t.pIQ3h4), a.ToastType.FAILURE));
        }, []),
        { markAsNotSpam: A } = (0, f.m)({
            onAcceptSuccess: P,
            onError: x,
        });
    if (null == t || !t.isDM()) return null;
    let Z = [
        (0, r.jsx)(
            o.ZP.Icon,
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
            (0, r.jsx)(o.ZP, {
                toolbar: Z,
                "aria-label": O.intl.string(O.t.BIYAqa),
                children: (0, c.ud)({
                    channel: t,
                    channelName: I,
                    inSidebar: !0,
                }),
            }),
            N &&
                (0, r.jsxs)("div", {
                    className: v.hamBanner,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: O.intl.string(O.t.XVOKgj),
                        }),
                        (0, r.jsx)("div", {
                            className: v.hamBannerButton,
                            children: (0, r.jsx)(a.Button, {
                                size: "sm",
                                onClick: () => A(t, j),
                                text: O.intl.string(O.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, r.jsx)("div", {
                className: y.chat,
                children: (0, r.jsx)(
                    E.Z,
                    {
                        channel: t,
                        guild: null,
                        chatInputType: s.Ie.SIDEBAR,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
