n.d(t, { Z: () => m });
var a = n(54381);
n(473749);
var r = n(442837),
    i = n(481060),
    l = n(911969),
    s = n(168107),
    o = n(480916),
    c = n(594174),
    d = n(118589),
    u = n(62272);
let m = function (e) {
    let { onSubmit: t } = e,
        n = (0, r.e7)([c.default], () => c.default.getCurrentUser());
    return (0, a.jsx)(u.Q, {
        title: "Lorem ipsum dolor",
        actions: [
            {
                text: "Consectetur adipiscing",
                variant: "primary",
                onClick: () => {
                    (null == n ? void 0 : n.ageVerificationStatus) === l.F$.UNVERIFIED
                        ? s.Z.showAgeVerificationGetStartedModal({
                              entryPoint: o.cU.SAFETY_FLOWS,
                              onClose: () => t({ type: d.rY.Empty }),
                          })
                        : t({ type: d.rY.Empty });
                },
            },
        ],
        children: (0, a.jsxs)(i.Kqy, {
            gap: 8,
            children: [
                (0, a.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                }),
                (0, a.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                }),
                (0, a.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: "Ut enim ad minim veniam quis",
                }),
            ],
        }),
    });
};
