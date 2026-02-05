n.d(e, { default: () => h });
var s = n(627968),
    a = n(64700),
    i = n(731738),
    c = n(158954),
    r = n(417597),
    l = n(397927),
    o = n(831062),
    d = n(754302),
    _ = n(632738),
    u = n(349435),
    x = n(665909),
    m = n(299921),
    p = n(652215),
    g = n(985018),
    T = n(546);
function h(t) {
    let {
            transitionState: e,
            onClose: n,
            channelId: h,
            warningId: b,
            senderId: f,
            description: y,
            safetyTipRows: j,
            actionRows: A,
            learnMore: N,
        } = t,
        E = (0, r.bG)([u.Ay], () => u.Ay.getChannelSafetyWarning(h, b));
    return (
        a.useEffect(() => {
            (0, x.mO)(p.HAw.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: h,
                warningId: b,
                senderId: f,
                warningType: E?.type,
            }),
                o.A.increment({ name: i.K.SAFETY_WARNING_MODAL_VIEW });
        }, [h, b, f, E]),
        (0, s.jsx)(c.ExpressiveModal, {
            onClose: n,
            transitionState: e,
            graphic: { type: "image", src: T.A },
            gradientColor: "blue",
            title: g.intl.string(g.t.lyt43P),
            subtitle: y,
            actions: [],
            children: (0, s.jsxs)(l.BJc, {
                gap: 24,
                children: [
                    (0, s.jsxs)(l.BJc, { gap: 8, children: [(0, s.jsx)(d.q, { children: j }), N ?? null] }),
                    (0, s.jsxs)(l.BJc, {
                        gap: 4,
                        children: [
                            (0, s.jsx)(l.Text, {
                                variant: "eyebrow",
                                color: "text-default",
                                children: g.intl.string(g.t.K5FKtc),
                            }),
                            (0, s.jsx)(_.Y0, { children: A }),
                        ],
                    }),
                    (0, s.jsx)(m.A, { channelId: h, warningId: b, senderId: f, safetyWarning: E }),
                ],
            }),
        })
    );
}
