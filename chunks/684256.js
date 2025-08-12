n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(895924),
    c = n(827498),
    u = n(106066),
    d = n(98880),
    f = n(772606),
    _ = n(388032),
    p = n(225465);
function h(e) {
    let { context: t, entrypoint: n, title: o, look: h, items: m, sectionName: g, sectionOverallPosition: E } = e,
        b = (0, u.s)(),
        y = i.useMemo(() => (n === c._b.TEXT ? d.kA : d.qR), [n]);
    return (0, r.jsxs)("section", {
        className: p.container,
        "aria-label": _.intl.formatToPlainString(_.t.iobNIC, { sectionTitle: o }),
        children: [
            (0, r.jsxs)("div", {
                className: p.header,
                children: [
                    (0, r.jsx)(f.Z, { className: p.backButton }),
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: o,
                    }),
                ],
            }),
            (0, r.jsx)(s.Ttm, {
                children: (0, r.jsx)("div", {
                    className: a()({
                        [p.appGrid]: h !== d.U4.ROW,
                        [p.rows]: h === d.U4.ROW,
                    }),
                    children: m.map((e, n) => {
                        let { application: i, installOnDemand: o, showsPromoted: a } = e;
                        return (0, r.jsx)(
                            y,
                            {
                                context: t,
                                application: i,
                                look: h,
                                sectionName: g,
                                resultsPosition: n,
                                location: l.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: o,
                                isOneClickCTA: b,
                                sectionOverallPosition: E,
                                showsPromoted: a,
                            },
                            i.id,
                        );
                    }),
                }),
            }),
        ],
    });
}
