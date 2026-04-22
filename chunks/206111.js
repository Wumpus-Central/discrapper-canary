i.d(e, { l: () => a });
var t = i(627968),
    l = i(64700),
    s = i(834730),
    r = i(277834);
function a(n) {
    let {
            title: e,
            subtitle: i,
            iconSrc: a,
            backgroundSrc: d,
            animatedBackgroundSrc: u,
            prefersReducedMotion: o = !0,
        } = n,
        c = l.useMemo(() => {
            let n = d ?? a;
            if (null != n) return { "--custom-background-url": `url(${n.toString()})` };
        }, [d, a]),
        m = l.useMemo(() => {
            if (null == d) return;
            let n = { "--custom-background-static": `url(${d.toString()}` };
            return o || null == u || (n["--custom-background-animated"] = `url(${u.toString()})`), n;
        }, [u, d, o]);
    return (0, t.jsxs)("div", {
        className: r.iE,
        children: [
            (0, t.jsx)("div", { className: r.Tp, style: c }),
            (0, t.jsxs)("div", {
                className: r.Qs,
                children: [
                    null != a &&
                        (0, t.jsx)("div", {
                            className: r.Kk,
                            children: (0, t.jsx)("img", { src: a.toString(), alt: "" }),
                        }),
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(s.E, { variant: "heading-xl/bold", tag: "div", children: e }),
                            null != i && (0, t.jsxs)(s.E, { variant: "text-sm/normal", children: ["“", i, "”"] }),
                        ],
                    }),
                ],
            }),
            null != d ? (0, t.jsx)("div", { className: r.Sl, style: m }) : null,
        ],
    });
}
