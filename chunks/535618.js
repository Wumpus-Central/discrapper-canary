e.d(n, { default: () => S }), e(388685);
var i = e(951288),
    a = e(647438),
    s = e(793030),
    l = e(442837),
    o = e(780384),
    r = e(775644),
    c = e(410030),
    u = e(812206),
    d = e(594174),
    p = e(669079),
    x = e(823379),
    f = e(133201),
    m = e(519193),
    h = e(388032),
    C = e(167969),
    g = e(557256);
function S(t) {
    let { transitionState: n, sku: e, onClose: s, giftCode: o, channelContext: c } = t,
        [d, p] = a.useState({ state: "LINK" }),
        [C, g] = a.useState(!1),
        S = (0, l.e7)([u.Z], () => u.Z.getApplication(e.applicationId)),
        T = a.useCallback(async () => {
            try {
                g(!0),
                    await r.Z.redeemGiftCode({
                        code: o.code,
                        options: { channelId: c },
                    }),
                    p({ state: "SUCCESS" });
            } catch (t) {
                p({
                    state: "ERROR",
                    error: t,
                });
            } finally {
                g(!1);
            }
        }, [o, p, c]);
    if (null == S) return null;
    switch (d.state) {
        case "LINK":
            return (0, i.jsx)(f.Z, {
                sku: e,
                application: S,
                transitionState: n,
                onClose: s,
                successStateButtonText: h.intl.string(h.t.go1e4x),
                onSuccessButtonClick: T,
                isSuccessButtonLoading: C,
            });
        case "SUCCESS":
            return (0, i.jsx)(m.SocialLayerStorefrontItemClaimedSuccessfullyModal, {
                transitionState: n,
                application: S,
                sku: e,
                onClose: s,
            });
        case "ERROR":
            return (0, i.jsx)(_, {
                transitionState: n,
                onClose: s,
                error: d.error,
            });
        default:
            (0, x.vE)(d);
    }
}
let _ = (t) => {
    let { transitionState: n, onClose: e, error: a } = t,
        l = d.default.getCurrentUser(),
        r = (0, p.QW)(a, l),
        u = (0, c.ZP)(),
        x = (0, o.wj)(u);
    return (0, i.jsxs)(s.IX, {
        transitionState: n,
        onClose: e,
        children: [
            (0, i.jsx)(s.xBx, {
                graphic: {
                    type: "image",
                    src: x ? C : g,
                },
            }),
            (0, i.jsx)(s.fef, { children: r }),
        ],
    });
};
