t.d(n, { j: () => o });
var r = t(54381),
    l = t(473749),
    i = t(793030),
    s = t(116482);
function o(e) {
    let {
            title: n,
            subtitle: t,
            iconSrc: o,
            backgroundSrc: u,
            animatedBackgroundSrc: a,
            prefersReducedMotion: c = !0,
        } = e,
        d = l.useMemo(() => {
            let e = null != u ? u : o;
            if (null != e) return { "--custom-background-url": "url(".concat(e.toString(), ")") };
        }, [u, o]),
        p = l.useMemo(() => {
            if (null == u) return;
            let e = { "--custom-background-static": "url(".concat(u.toString()) };
            return c || null == a || (e["--custom-background-animated"] = "url(".concat(a.toString(), ")")), e;
        }, [a, u, c]);
    return (0, r.jsxs)("div", {
        className: s.wrapper,
        children: [
            (0, r.jsx)("div", {
                className: s.background,
                style: d,
            }),
            (0, r.jsxs)("div", {
                className: s.content,
                children: [
                    null != o &&
                        (0, r.jsx)("div", {
                            className: s.icon,
                            children: (0, r.jsx)("img", {
                                src: o.toString(),
                                alt: "",
                            }),
                        }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(i.xvT, {
                                variant: "heading-xl/bold",
                                tag: "div",
                                children: n,
                            }),
                            null != t &&
                                (0, r.jsxs)(i.xvT, {
                                    variant: "text-sm/normal",
                                    children: ["\u201C", t, "\u201D"],
                                }),
                        ],
                    }),
                ],
            }),
            null != u
                ? (0, r.jsx)("div", {
                      className: s.image,
                      style: p,
                  })
                : null,
        ],
    });
}
