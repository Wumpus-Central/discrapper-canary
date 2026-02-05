n.d(t, { A: () => m });
var a = n(627968);
n(64700);
var s = n(311907),
    i = n(397927),
    l = n(155718),
    r = n(935649),
    o = n(847599),
    d = n(287809),
    c = n(805866),
    u = n(206348);
let m = function (e) {
    let { onSubmit: t } = e,
        n = (0, s.bG)([d.default], () => d.default.getCurrentUser());
    return (0, a.jsx)(u.Z, {
        title: "Lorem ipsum dolor",
        actions: [
            {
                text: "Consectetur adipiscing",
                variant: "primary",
                onClick: () => {
                    n?.ageVerificationStatus === l.Tk.UNVERIFIED
                        ? r.A.showAgeVerificationGetStartedModal({
                              entryPoint: o.q1.SAFETY_FLOWS,
                              onClose: () => t({ type: c.Ij.Empty }),
                          })
                        : t({ type: c.Ij.Empty });
                },
            },
        ],
        children: (0, a.jsxs)(i.BJc, {
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
                (0, a.jsx)(i.Text, { variant: "text-md/normal", children: "Ut enim ad minim veniam quis" }),
            ],
        }),
    });
};
