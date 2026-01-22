n.d(t, {
    A: () => m,
});
var a = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    r = n(155718),
    s = n(935649),
    o = n(847599),
    c = n(287809),
    d = n(805866),
    u = n(206348);
let m = function (e) {
    let { onSubmit: t } = e,
        n = (0, l.bG)([c.default], () => c.default.getCurrentUser());
    return (0, a.jsx)(u.Z, {
        title: "Lorem ipsum dolor",
        actions: [
            {
                text: "Consectetur adipiscing",
                variant: "primary",
                onClick: () => {
                    (null == n ? void 0 : n.ageVerificationStatus) === r.Tk.UNVERIFIED
                        ? s.A.showAgeVerificationGetStartedModal({
                              entryPoint: o.q1.SAFETY_FLOWS,
                              onClose: () =>
                                  t({
                                      type: d.Ij.Empty,
                                  }),
                          })
                        : t({
                              type: d.Ij.Empty,
                          });
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
                (0, a.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: "Ut enim ad minim veniam quis",
                }),
            ],
        }),
    });
};
