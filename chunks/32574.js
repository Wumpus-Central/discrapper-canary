n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    l = n(911969),
    c = n(168107),
    o = n(480916),
    s = n(594174),
    u = n(62272);
let d = function (e) {
    let { onSubmit: t } = e,
        n = (0, i.e7)([s.default], () => s.default.getCurrentUser());
    return (0, r.jsx)(u.Q, {
        title: "Lorem ipsum dolor",
        actions: [
            {
                text: "Consectetur adipiscing",
                variant: "primary",
                onClick: () => {
                    (null == n ? void 0 : n.ageVerificationStatus) === l.F$.UNVERIFIED
                        ? c.Z.showAgeVerificationGetStartedModal({
                              entryPoint: o.cU.SAFETY_FLOWS,
                              onClose: () => t({ type: "empty" }),
                          })
                        : t({ type: "empty" });
                },
            },
        ],
        children: (0, r.jsxs)(a.Kqy, {
            gap: 8,
            children: [
                (0, r.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children: "Ut enim ad minim veniam quis",
                }),
            ],
        }),
    });
};
