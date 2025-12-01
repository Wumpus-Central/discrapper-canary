n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(895924),
    c = n(827498),
    u = n(106066),
    d = n(98880),
    f = n(772606),
    p = n(388032),
    _ = n(493891);
function m(e) {
    let { context: t, entrypoint: n, title: a, look: m, items: h, sectionName: g, sectionOverallPosition: E } = e,
        b = (0, u.s)(),
        y = i.useMemo(() => (n === c._b.TEXT ? d.kA : d.qR), [n]);
    return (0, r.jsxs)("section", {
        className: _.container,
        "aria-label": p.intl.formatToPlainString(p.t.iobNIB, { sectionTitle: a }),
        children: [
            (0, r.jsxs)("div", {
                className: _.header,
                children: [
                    (0, r.jsx)(f.Z, { className: _.backButton }),
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
                        [_.appGrid]: m !== d.U4.ROW,
                        [_.rows]: m === d.U4.ROW,
                    }),
                    children: h.map((e, n) => {
                        let { application: i, installOnDemand: a, showsPromoted: o } = e;
                        return (0, r.jsx)(
                            y,
                            {
                                context: t,
                                application: i,
                                look: m,
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
