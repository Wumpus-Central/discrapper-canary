n.d(t, { Z: () => h });
var i = n(951288),
    l = n(647438),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(895924),
    c = n(827498),
    u = n(106066),
    d = n(98880),
    p = n(772606),
    m = n(388032),
    f = n(493891);
function h(e) {
    let { context: t, entrypoint: n, title: r, look: h, items: v, sectionName: y, sectionOverallPosition: g } = e,
        x = (0, u.s)(),
        b = l.useMemo(() => (n === c._b.TEXT ? d.kA : d.qR), [n]);
    return (0, i.jsxs)("section", {
        className: f.container,
        "aria-label": m.intl.formatToPlainString(m.t.iobNIB, { sectionTitle: r }),
        children: [
            (0, i.jsxs)("div", {
                className: f.header,
                children: [
                    (0, i.jsx)(p.Z, { className: f.backButton }),
                    (0, i.jsx)(o.Heading, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: r,
                    }),
                ],
            }),
            (0, i.jsx)(o.Ttm, {
                children: (0, i.jsx)("div", {
                    className: a()({
                        [f.appGrid]: h !== d.U4.ROW,
                        [f.rows]: h === d.U4.ROW,
                    }),
                    children: v.map((e, n) => {
                        let { application: l, installOnDemand: r, showsPromoted: a } = e;
                        return (0, i.jsx)(
                            b,
                            {
                                context: t,
                                application: l,
                                look: h,
                                sectionName: y,
                                resultsPosition: n,
                                location: s.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: r,
                                isOneClickCTA: x,
                                sectionOverallPosition: g,
                                showsPromoted: a,
                            },
                            l.id,
                        );
                    }),
                }),
            }),
        ],
    });
}
