n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(392054),
    c = n(500049),
    u = n(933840),
    d = n(169909),
    f = n(278597),
    p = n(985018),
    _ = n(920178);

function h(e) {
    let { context: t, entrypoint: n, title: a, look: h, items: m, sectionName: g, sectionOverallPosition: E } = e,
        b = (0, u.f)(),
        y = i.useMemo(() => (n === c.s4.TEXT ? d.Gt : d.wW), [n]);
    return (0, r.jsxs)("section", {
        className: _.kL,
        "aria-label": p.intl.formatToPlainString(p.t.iobNIB, {
            sectionTitle: a,
        }),
        children: [
            (0, r.jsxs)("div", {
                className: _.wx,
                children: [
                    (0, r.jsx)(f.A, {
                        className: _.Gv,
                    }),
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: a,
                    }),
                ],
            }),
            (0, r.jsx)(o.HOs, {
                children: (0, r.jsx)("div", {
                    className: s()({
                        [_.wf]: h !== d.r0.ROW,
                        [_.Ge]: h === d.r0.ROW,
                    }),
                    children: m.map((e, n) => {
                        let { application: i, installOnDemand: a, showsPromoted: s } = e;
                        return (0, r.jsx)(
                            y,
                            {
                                context: t,
                                application: i,
                                look: h,
                                sectionName: g,
                                resultsPosition: n,
                                location: l.Oh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: a,
                                isOneClickCTA: b,
                                sectionOverallPosition: E,
                                showsPromoted: s,
                            },
                            i.id,
                        );
                    }),
                }),
            }),
        ],
    });
}
