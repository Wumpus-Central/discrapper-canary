e.d(t, { default: () => k }), e(953529);
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
    h = e(697766);
function k(n) {
    let {
            transitionState: t,
            onClose: e,
            channelId: k,
            warningId: p,
            senderId: m,
            description: y,
            safetyTipRows: T,
            actionRows: j,
            learnMore: N,
        } = n,
        f = (0, o.e7)([_.ZP], () => _.ZP.getChannelSafetyWarning(k, p));
    return (
        s.useEffect(() => {
            (0, b.MC)(x.rMx.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: k,
                warningId: p,
                senderId: m,
                warningType: null == f ? void 0 : f.type,
            }),
                l.Z.increment({ name: i.V.SAFETY_WARNING_MODAL_VIEW });
        }, [k, p, m, f]),
        (0, a.jsx)(c.ExpressiveModal, {
            onClose: e,
            transitionState: t,
            graphic: {
                type: "image",
                src: h.Z,
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
                        children: [(0, a.jsx)(d.z, { children: T }), null != N ? N : null],
                    }),
                    (0, a.jsxs)(r.Kqy, {
                        gap: 4,
                        children: [
                            (0, a.jsx)(r.Text, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: v.intl.string(v.t.K5FKtc),
                            }),
                            (0, a.jsx)(u.rT, { children: j }),
                        ],
                    }),
                    (0, a.jsx)(g.Z, {
                        channelId: k,
                        warningId: p,
                        senderId: m,
                        safetyWarning: f,
                    }),
                ],
            }),
        })
    );
}
