n.d(t, {
    default: () => h,
}),
    n(228524);
var a = n(627968),
    l = n(64700),
    s = n(731738),
    i = n(158954),
    c = n(417597),
    r = n(397927),
    d = n(831062),
    o = n(754302),
    f = n(632738),
    u = n(349435),
    x = n(665909),
    _ = n(299921),
    m = n(652215),
    p = n(985018),
    T = n(546);

function h(e) {
    let {
            transitionState: t,
            onClose: n,
            channelId: h,
            warningId: g,
            senderId: v,
            description: y,
            safetyTipRows: j,
            actionRows: N,
            learnMore: A,
        } = e,
        E = (0, c.bG)([u.Ay], () => u.Ay.getChannelSafetyWarning(h, g));
    return (
        l.useEffect(() => {
            (0, x.mO)(m.HAw.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: h,
                warningId: g,
                senderId: v,
                warningType: null == E ? void 0 : E.type,
            }),
                d.A.increment({
                    name: s.K.SAFETY_WARNING_MODAL_VIEW,
                });
        }, [h, g, v, E]),
        (0, a.jsx)(i.ExpressiveModal, {
            onClose: n,
            transitionState: t,
            graphic: {
                type: "image",
                src: T.A,
            },
            gradientColor: "blue",
            title: p.intl.string(p.t.lyt43P),
            subtitle: y,
            actions: [],
            children: (0, a.jsxs)(r.BJc, {
                gap: 24,
                children: [
                    (0, a.jsxs)(r.BJc, {
                        gap: 8,
                        children: [
                            (0, a.jsx)(o.q, {
                                children: j,
                            }),
                            null != A ? A : null,
                        ],
                    }),
                    (0, a.jsxs)(r.BJc, {
                        gap: 4,
                        children: [
                            (0, a.jsx)(r.Text, {
                                variant: "eyebrow",
                                color: "text-default",
                                children: p.intl.string(p.t.K5FKtc),
                            }),
                            (0, a.jsx)(f.Y0, {
                                children: N,
                            }),
                        ],
                    }),
                    (0, a.jsx)(_.A, {
                        channelId: h,
                        warningId: g,
                        senderId: v,
                        safetyWarning: E,
                    }),
                ],
            }),
        })
    );
}
