var a = s(477900),
    n = s(582128),
    i = s(503698),
    r = s.n(i),
    t = s(805251),
    d = s(331322),
    c = s(834730),
    o = s(64584),
    u = s(735693);
s.d(
    l,
    {},
    {
        n: function (e) {
            let { children: l, label: s, description: i, badge: h, ...p } = e,
                { spacing: m } = n.useContext(o.c),
                x = n.useId(),
                b = null != i && "" !== i;
            return (0, a.jsxs)("fieldset", {
                ...p,
                className: r()(u.lI, p.className),
                "aria-describedby": b ? x : void 0,
                children: [
                    null != s
                        ? (0, a.jsxs)(c.E, {
                              tag: "legend",
                              variant: "body-lg/medium",
                              color: "text-strong",
                              className: u.o1,
                              children: [s, null != h && (0, a.jsx)(t.E, { type: h, variant: "primary" })],
                          })
                        : null,
                    b
                        ? (0, a.jsx)(c.E, {
                              variant: "body-sm/normal",
                              color: "text-default",
                              className: u.h_,
                              id: x,
                              children: i,
                          })
                        : null,
                    (0, a.jsx)(d.B, { direction: "vertical", gap: m, children: l }),
                ],
            });
        },
    },
);
