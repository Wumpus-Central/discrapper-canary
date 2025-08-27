e.d(n, { default: () => x }), e(953529);
var a = e(951288),
    s = e(647438),
    c = e(286379),
    i = e(399606),
    o = e(667202),
    r = e(481060),
    l = e(797614),
    d = e(819557),
    u = e(138201),
    b = e(359119),
    _ = e(473092),
    g = e(636749),
    f = e(981631),
    p = e(388032),
    v = e(308064);
function x(t) {
    let {
            transitionState: n,
            onClose: e,
            channelId: x,
            warningId: h,
            senderId: k,
            description: m,
            safetyTipRows: y,
            actionRows: T,
            learnMore: j,
        } = t,
        N = (0, i.e7)([b.ZP], () => b.ZP.getChannelSafetyWarning(x, h));
    return (
        s.useEffect(() => {
            (0, _.MC)(f.rMx.SAFETY_WARNING_MODAL_VIEWED, {
                channelId: x,
                warningId: h,
                senderId: k,
                warningType: null == N ? void 0 : N.type,
            }),
                l.Z.increment({ name: c.V.SAFETY_WARNING_MODAL_VIEW });
        }, [x, h, k, N]),
        (0, a.jsx)(o.I, {
            onClose: e,
            transitionState: n,
            graphic: {
                type: "image",
                src: v.Z,
            },
            gradientColor: "blue",
            title: p.intl.string(p.t.lyt43N),
            subtitle: m,
            actions: [],
            children: (0, a.jsxs)(r.Kqy, {
                gap: 24,
                children: [
                    (0, a.jsxs)(r.Kqy, {
                        gap: 8,
                        children: [(0, a.jsx)(d.z, { children: y }), null != j ? j : null],
                    }),
                    (0, a.jsxs)(r.Kqy, {
                        gap: 4,
                        children: [
                            (0, a.jsx)(r.Text, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: p.intl.string(p.t.K5FKtb),
                            }),
                            (0, a.jsx)(u.rT, { children: T }),
                        ],
                    }),
                    (0, a.jsx)(g.Z, {
                        channelId: x,
                        warningId: h,
                        senderId: k,
                        safetyWarning: N,
                    }),
                ],
            }),
        })
    );
}
