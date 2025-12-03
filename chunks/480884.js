e.d(n, { default: () => p }), e(953529);
var a = e(54381),
    s = e(473749),
    i = e(286379),
    c = e(793030),
    o = e(399606),
    r = e(481060),
    l = e(797614),
    d = e(819557),
    u = e(138201),
    _ = e(359119),
    b = e(473092),
    g = e(636749),
    x = e(981631),
    v = e(388032),
    k = e(98201);
function p(t) {
    let {
            transitionState: n,
            onClose: e,
            channelId: p,
            warningId: h,
            senderId: m,
            description: y,
            safetyTipRows: T,
            actionRows: f,
            learnMore: j,
        } = t,
        N = (0, o.e7)([_.ZP], () => _.ZP.getChannelSafetyWarning(p, h));
    return (
        s.useEffect(() => {
            (0, b.MC)(x.rMx.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: p,
                warningId: h,
                senderId: m,
                warningType: null == N ? void 0 : N.type,
            }),
                l.Z.increment({ name: i.V.SAFETY_WARNING_MODAL_VIEW });
        }, [p, h, m, N]),
        (0, a.jsx)(c.ExpressiveModal, {
            onClose: e,
            transitionState: n,
            graphic: {
                type: "image",
                src: k.Z,
            },
            gradientColor: "blue",
            title: v.intl.string(v.t.lyt43P),
            subtitle: y,
            actions: [],
            children: (0, a.jsxs)(r.Kqy, {
                gap: 24,
                children: [
                    (0, a.jsxs)(r.Kqy, {
                        gap: 8,
                        children: [(0, a.jsx)(d.z, { children: T }), null != j ? j : null],
                    }),
                    (0, a.jsxs)(r.Kqy, {
                        gap: 4,
                        children: [
                            (0, a.jsx)(r.Text, {
                                variant: "eyebrow",
                                color: "text-default",
                                children: v.intl.string(v.t.K5FKtc),
                            }),
                            (0, a.jsx)(u.rT, { children: f }),
                        ],
                    }),
                    (0, a.jsx)(g.Z, {
                        channelId: p,
                        warningId: h,
                        senderId: m,
                        safetyWarning: N,
                    }),
                ],
            }),
        })
    );
}
