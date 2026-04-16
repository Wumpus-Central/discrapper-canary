n.d(t, { Z: () => c });
var i = n(627968),
    l = n(64700),
    a = n(492917),
    s = n(397927),
    r = n(985018),
    o = n(834581);
function c(e) {
    let { header: t, description: n, onDismiss: c, buttons: d, dismissible: u = !0 } = e,
        h = l.useCallback(() => {
            c?.();
        }, [c]);
    return (0, i.jsxs)("div", {
        className: o.HZ,
        children: [
            (0, i.jsxs)("div", {
                className: o.Be,
                children: [
                    (0, i.jsx)(a.k_4, { alt: "", size: 32 }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-strong",
                                children: t,
                            }),
                            (0, i.jsx)(s.Text, { variant: "text-sm/normal", color: "text-strong", children: n }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: o.Uo,
                children: d?.map((e, t) =>
                    (0, i.jsx)(
                        s.Button,
                        { text: e.text, variant: e.variant ?? "secondary", onClick: e.onClick, size: "sm" },
                        t,
                    ),
                ),
            }),
            u
                ? (0, i.jsx)(s.DUT, {
                      className: o.b,
                      onClick: h,
                      role: "button",
                      "aria-label": r.intl.string(r.t.WAI6xu),
                      children: (0, i.jsx)(s.PGe, { size: "md", color: "currentColor", className: o.b }),
                  })
                : null,
        ],
    });
}
