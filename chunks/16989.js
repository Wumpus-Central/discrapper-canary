r.d(t, { G: () => _ }), r(388685);
var a = r(54381),
    n = r(473749),
    o = r(793030),
    i = r(442837),
    l = r(481060),
    c = r(366939),
    s = r(706454),
    d = r(74538),
    p = r(937615),
    b = r(540310),
    m = r(388032),
    u = r(730949);
let _ = (e) => {
    let {
            analyticsLocations: t,
            onClose: r,
            transitionState: _,
            premiumSubscription: h,
            renewalInvoicePreview: C,
            fractionalPremiumInfo: f,
            setStep: S,
        } = e,
        v = (0, i.e7)([s.default], () => s.default.locale),
        x = new Date(C.subscriptionPeriodStart);
    h.isBoostOnly || (x = d.ZP.extendDateWithUnconsumedFractionalPremium(x, f.unactivatedUnits));
    let w = (0, p.T4)(C.total, C.currency),
        [P, y] = (0, n.useState)(!1),
        [g, O] = (0, n.useState)(!1),
        j = x.toLocaleDateString(v, {
            month: "long",
            day: "numeric",
            year: "numeric",
        }),
        T = async () => {
            y(!0), O(!1);
            try {
                await c.O5(h, t), S(b.R.SUCCESS);
            } catch (e) {
                O(!0), y(!1);
            }
        },
        R = [
            {
                text: m.intl.string(m.t["cY+Oob"]),
                onClick: () => T(),
                variant: "primary",
                loading: P,
                disabled: P,
            },
        ];
    return (0, a.jsxs)(o.ExpressiveModal, {
        graphic: {
            type: "image",
            src: u.Z,
        },
        gradientColor: "nitro-pink",
        transitionState: _,
        title: m.intl.string(m.t.fYEWlq),
        actions: R,
        onClose: async () => r(),
        children: [
            (0, a.jsxs)(l.Text, {
                variant: "text-md/normal",
                style: { textAlign: "center" },
                children: [
                    (0, a.jsx)("p", {
                        children: m.intl.format(m.t.dbGGui, {
                            price: w,
                            date: j,
                        }),
                    }),
                    (0, a.jsx)("p", { children: m.intl.string(m.t.UQolSy) }),
                ],
            }),
            g
                ? (0, a.jsx)(o.M14, {
                      type: "critical",
                      children: m.intl.string(m.t["5mlOCW"]),
                  })
                : null,
        ],
    });
};
