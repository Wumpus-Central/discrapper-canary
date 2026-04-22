n.d(t, { Z: () => m });
var i = n(627968),
    l = n(64700),
    a = n(717065),
    s = n(534514),
    r = n(834730),
    o = n(821609),
    c = n(939249),
    d = n(789645),
    u = n(985018),
    h = n(87509);
function m(e) {
    let { header: t, description: n, onDismiss: m, buttons: A, dismissible: g = !0 } = e,
        p = l.useCallback(() => {
            m?.();
        }, [m]);
    return (0, i.jsxs)("div", {
        className: h.HZ,
        children: [
            (0, i.jsxs)("div", {
                className: h.Be,
                children: [
                    (0, i.jsx)(a.k, { alt: "", size: 32 }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(s.D, { variant: "heading-md/semibold", color: "text-strong", children: t }),
                            (0, i.jsx)(r.E, { variant: "text-sm/normal", color: "text-strong", children: n }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: h.Uo,
                children: A?.map((e, t) =>
                    (0, i.jsx)(
                        o.$,
                        { text: e.text, variant: e.variant ?? "secondary", onClick: e.onClick, size: "sm" },
                        t,
                    ),
                ),
            }),
            g
                ? (0, i.jsx)(c.D, {
                      className: h.b,
                      onClick: p,
                      role: "button",
                      "aria-label": u.intl.string(u.t.WAI6xu),
                      children: (0, i.jsx)(d.P, { size: "md", color: "currentColor", className: h.b }),
                  })
                : null,
        ],
    });
}
