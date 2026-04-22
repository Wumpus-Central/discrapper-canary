n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(331322),
    a = n(834730),
    r = n(155718),
    o = n(935649),
    d = n(847599),
    c = n(287809),
    u = n(805866),
    p = n(206348);
let h = function (e) {
    let { onSubmit: t } = e,
        n = (0, s.bG)([c.default], () => c.default.getCurrentUser());
    return (0, i.jsx)(p.Z, {
        title: "Lorem ipsum dolor",
        actions: [
            {
                text: "Consectetur adipiscing",
                variant: "primary",
                onClick: () => {
                    n?.ageVerificationStatus === r.Tk.UNVERIFIED
                        ? o.A.showAgeVerificationGetStartedModal({
                              entryPoint: d.q1.SAFETY_FLOWS,
                              onClose: () => t({ type: u.Ij.Empty }),
                          })
                        : t({ type: u.Ij.Empty });
                },
            },
        ],
        children: (0, i.jsxs)(l.B, {
            gap: 8,
            children: [
                (0, i.jsx)(a.E, {
                    variant: "text-md/normal",
                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                }),
                (0, i.jsx)(a.E, {
                    variant: "text-md/normal",
                    children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                }),
                (0, i.jsx)(a.E, { variant: "text-md/normal", children: "Ut enim ad minim veniam quis" }),
            ],
        }),
    });
};
