e.d(n, { default: () => p }), e(953529);
var a = e(54381),
    s = e(473749),
    i = e(286379),
    c = e(793030),
    o = e(399606),
    l = e(481060),
    r = e(797614),
    d = e(819557),
    u = e(138201),
    b = e(359119),
    g = e(473092),
    x = e(636749),
    _ = e(981631),
    v = e(388032),
    k = e(602042);
function p(t) {
    let {
            transitionState: n,
            onClose: e,
            channelId: p,
            warningId: h,
            senderId: T,
            description: f,
            safetyTipRows: y,
            actionRows: m,
            learnMore: j,
        } = t,
        N = (0, o.e7)([b.ZP], () => b.ZP.getChannelSafetyWarning(p, h));
    return (
        s.useEffect(() => {
            (0, g.MC)(_.rMx.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: p,
                warningId: h,
                senderId: T,
                warningType: null == N ? void 0 : N.type,
            }),
                r.Z.increment({ name: i.V.SAFETY_WARNING_MODAL_VIEW });
        }, [p, h, T, N]),
        (0, a.jsx)(c.ExpressiveModal, {
            onClose: e,
            transitionState: n,
            graphic: {
                type: "image",
                src: k.Z,
            },
            gradientColor: "blue",
            title: v.intl.string(v.t.lyt43P),
            subtitle: f,
            actions: [],
            children: (0, a.jsxs)(l.Kqy, {
                gap: 24,
                children: [
                    (0, a.jsxs)(l.Kqy, {
                        gap: 8,
                        children: [(0, a.jsx)(d.z, { children: y }), null != j ? j : null],
                    }),
                    (0, a.jsxs)(l.Kqy, {
                        gap: 4,
                        children: [
                            (0, a.jsx)(l.Text, {
                                variant: "eyebrow",
                                color: "text-default",
                                children: v.intl.string(v.t.K5FKtc),
                            }),
                            (0, a.jsx)(u.rT, { children: m }),
                        ],
                    }),
                    (0, a.jsx)(x.Z, {
                        channelId: p,
                        warningId: h,
                        senderId: T,
                        safetyWarning: N,
                    }),
                ],
            }),
        })
    );
}
