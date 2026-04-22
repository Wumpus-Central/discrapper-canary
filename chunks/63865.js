n.d(e, { default: () => h });
var a = n(627968),
    s = n(64700),
    c = n(731738),
    i = n(772707),
    r = n(417597),
    l = n(331322),
    o = n(834730),
    d = n(831062),
    _ = n(754302),
    u = n(632738),
    p = n(349435),
    x = n(665909),
    b = n(299921),
    f = n(652215),
    g = n(985018),
    m = n(546);
function h(t) {
    let {
            transitionState: e,
            onClose: n,
            channelId: h,
            warningId: A,
            senderId: E,
            description: j,
            safetyTipRows: y,
            actionRows: N,
            learnMore: v,
        } = t,
        C = (0, r.bG)([p.Ay], () => p.Ay.getChannelSafetyWarning(h, A));
    return (
        s.useEffect(() => {
            (0, x.mO)(f.HAw.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: h,
                warningId: A,
                senderId: E,
                warningType: C?.type,
            }),
                d.A.increment({ name: c.K.SAFETY_WARNING_MODAL_VIEW });
        }, [h, A, E, C]),
        (0, a.jsx)(i.k, {
            onClose: n,
            transitionState: e,
            graphic: { type: "image", src: m.A },
            gradientColor: "blue",
            title: g.intl.string(g.t.lyt43P),
            subtitle: j,
            actions: [],
            children: (0, a.jsxs)(l.B, {
                gap: 24,
                children: [
                    (0, a.jsxs)(l.B, { gap: 8, children: [(0, a.jsx)(_.q, { children: y }), v ?? null] }),
                    (0, a.jsxs)(l.B, {
                        gap: 4,
                        children: [
                            (0, a.jsx)(o.E, {
                                variant: "eyebrow",
                                color: "text-default",
                                children: g.intl.string(g.t.K5FKtc),
                            }),
                            (0, a.jsx)(u.Y0, { children: N }),
                        ],
                    }),
                    (0, a.jsx)(b.A, { channelId: h, warningId: A, senderId: E, safetyWarning: C }),
                ],
            }),
        })
    );
}
