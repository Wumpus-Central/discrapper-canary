n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(895924),
    c = n(827498),
    u = n(106066),
    d = n(98880),
    f = n(772606),
    _ = n(388032),
    p = n(493891);
function h(e) {
    let { context: t, entrypoint: n, title: a, look: h, items: m, sectionName: g, sectionOverallPosition: E } = e,
        b = (0, u.s)(),
        y = i.useMemo(() => (n === c._b.TEXT ? d.kA : d.qR), [n]);
    return (0, r.jsxs)("section", {
        className: p.container,
        "aria-label": _.intl.formatToPlainString(_.t.iobNIB, { sectionTitle: a }),
        children: [
            (0, r.jsxs)("div", {
                className: p.header,
                children: [
                    (0, r.jsx)(f.Z, { className: p.backButton }),
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        children: a,
                    }),
                ],
            }),
            (0, r.jsx)(s.Ttm, {
                children: (0, r.jsx)("div", {
                    className: o()({
                        [p.appGrid]: h !== d.U4.ROW,
                        [p.rows]: h === d.U4.ROW,
                    }),
                    children: m.map((e, n) => {
                        let { application: i, installOnDemand: a, showsPromoted: o } = e;
                        return (0, r.jsx)(
                            y,
                            {
                                context: t,
                                application: i,
                                look: h,
                                sectionName: g,
                                resultsPosition: n,
                                location: l.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: a,
                                isOneClickCTA: b,
                                sectionOverallPosition: E,
                                showsPromoted: o,
                            },
                            i.id,
                        );
                    }),
                }),
            }),
        ],
    });
}
