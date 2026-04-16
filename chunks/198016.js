"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(392054),
    u = n(500049),
    c = n(933840),
    d = n(169909),
    _ = n(278597),
    f = n(985018),
    p = n(1555);
function h(e) {
    let { context: t, entrypoint: n, title: s, look: h, items: m, sectionName: E, sectionOverallPosition: g } = e,
        A = (0, c.f)(),
        I = i.useMemo(() => (n === u.s4.TEXT ? d.Gt : d.wW), [n]);
    return (0, r.jsxs)("section", {
        className: p.kL,
        "aria-label": f.intl.formatToPlainString(f.t.iobNIB, { sectionTitle: s }),
        children: [
            (0, r.jsxs)("div", {
                className: p.wx,
                children: [
                    (0, r.jsx)(_.A, { className: p.Gv }),
                    (0, r.jsx)(o.Heading, { variant: "heading-md/medium", color: "text-strong", children: s }),
                ],
            }),
            (0, r.jsx)(o.HOs, {
                children: (0, r.jsx)("div", {
                    className: a()({ [p.wf]: h !== d.r0.ROW, [p.Ge]: h === d.r0.ROW }),
                    children: m.map((e, n) => {
                        let { application: i, installOnDemand: s, showsPromoted: a } = e;
                        return (0, r.jsx)(
                            I,
                            {
                                context: t,
                                application: i,
                                look: h,
                                sectionName: E,
                                resultsPosition: n,
                                location: l.Oh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: s,
                                isOneClickCTA: A,
                                sectionOverallPosition: g,
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
