var l = n(477900),
    i = n(834730),
    a = n(866665),
    s = n(939249),
    r = n(789645),
    d = n(394245),
    o = n(792996),
    c = n(382701);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { tag: t, variant: n = "default", onRemove: u, className: g, ref: m } = e,
                x = (0, d.W)(t);
            if (null == x) return null;
            let { getText: f, icon: h } = x,
                I = "filled" === n;
            return (0, l.jsxs)("li", {
                className: g ?? (I ? c.zE : c.Tc),
                ref: m,
                children: [
                    (0, l.jsx)(h, { size: "xxs", color: I ? "currentColor" : void 0 }),
                    (0, l.jsx)(i.E, {
                        variant: "footnote/medium",
                        color: I ? "text-overlay-light" : "text-subtle",
                        children: f(),
                    }),
                    null != u &&
                        (0, l.jsx)(a.m, {
                            text: o.intl.string(o.t.Otv9fP),
                            ariaHidden: !0,
                            children: (0, l.jsx)(s.D, {
                                onClick: u,
                                className: I ? c.to : c.DT,
                                "aria-label": o.intl.formatToPlainString(o.t.GCn1ne, { tag: f() }),
                                children: (0, l.jsx)(r.XSmallIcon, { size: "xxs", color: "currentColor" }),
                            }),
                        }),
                ],
            });
        },
    },
);
