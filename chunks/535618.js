e.d(n, { default: () => _ }), e(388685);
var i = e(951288),
    a = e(647438),
    s = e(793030),
    o = e(442837),
    l = e(780384),
    r = e(775644),
    c = e(410030),
    u = e(812206),
    d = e(594174),
    p = e(669079),
    x = e(823379),
    f = e(133201),
    C = e(388032),
    m = e(167969),
    h = e(557256);
function _(t) {
    let { transitionState: n, sku: e, onClose: s, giftCode: l, channelContext: c } = t,
        [d, p] = a.useState({ state: "LINK" }),
        [m, h] = a.useState(!1),
        _ = (0, o.e7)([u.Z], () => u.Z.getApplication(e.applicationId)),
        g = a.useCallback(async () => {
            try {
                h(!0),
                    await r.Z.redeemGiftCode({
                        code: l.code,
                        options: { channelId: c },
                    }),
                    p({ state: "SUCCESS" });
            } catch (t) {
                p({
                    state: "ERROR",
                    error: t,
                });
            } finally {
                h(!1);
            }
        }, [l, p, c]);
    if (null == _) return null;
    switch (d.state) {
        case "LINK":
            return (0, i.jsx)(f.Z, {
                sku: e,
                application: _,
                transitionState: n,
                onClose: s,
                successStateButtonText: C.intl.string(C.t["go1e4+"]),
                onSuccessButtonClick: g,
                isSuccessButtonLoading: m,
            });
        case "SUCCESS":
            return (0, i.jsx)(f.q, {
                transitionState: n,
                application: _,
                sku: e,
                onClose: s,
            });
        case "ERROR":
            return (0, i.jsx)(I, {
                transitionState: n,
                onClose: s,
                error: d.error,
            });
        default:
            (0, x.vE)(d);
    }
}
let I = (t) => {
    let { transitionState: n, onClose: e, error: a } = t,
        o = d.default.getCurrentUser(),
        r = (0, p.QW)(a, o),
        u = (0, c.ZP)(),
        x = (0, l.wj)(u);
    return (0, i.jsxs)(s.IX, {
        transitionState: n,
        onClose: e,
        children: [
            (0, i.jsx)(s.xBx, {
                graphic: {
                    type: "image",
                    src: x ? m : h,
                },
            }),
            (0, i.jsx)(s.fef, { children: r }),
        ],
    });
};
