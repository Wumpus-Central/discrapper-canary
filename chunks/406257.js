var s = n(477900),
    p = n(582128),
    u = n(347704),
    a = n(124077),
    l = n(674725),
    o = n(752222),
    r = n(792996);
let d = ["VIEW", "ACCEPT"];
n.d(
    t,
    {},
    {
        default: function (e) {
            let { code: t, ...n } = e,
                i = (0, l.A)(t),
                [c, C] = p.useState("VIEW");
            if (null == i) return null;
            let h = r.intl.formatToPlainString(o.default["jKi+kc"], { noun: (0, a.A)({ displayNoun: i.displayNoun }) });
            return (0, s.jsx)(u.t, {
                ...n,
                steps: [
                    { stepKey: "VIEW", modalProps: { title: h } },
                    { stepKey: "ACCEPT", modalProps: { title: h } },
                    { stepKey: "OUTCOME", modalProps: { title: h }, hideBackButton: !0 },
                ],
                currentStepKey: c,
                numberedSteps: d,
                onStepChange: C,
            });
        },
    },
);
