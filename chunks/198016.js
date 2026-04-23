n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(534514),
    o = n(573613),
    c = n(392054),
    d = n(500049),
    u = n(933840),
    m = n(169909),
    p = n(278597),
    _ = n(985018),
    A = n(1555);
function h(e) {
    let { context: t, entrypoint: n, title: a, look: h, items: f, sectionName: x, sectionOverallPosition: C } = e,
        g = (0, u.f)(),
        N = l.useMemo(() => (n === d.s4.TEXT ? m.Gt : m.wW), [n]);
    return (0, i.jsxs)("section", {
        className: A.kL,
        "aria-label": _.intl.formatToPlainString(_.t.iobNIB, { sectionTitle: a }),
        children: [
            (0, i.jsxs)("div", {
                className: A.wx,
                children: [
                    (0, i.jsx)(p.A, { className: A.Gv }),
                    (0, i.jsx)(r.D, { variant: "heading-md/medium", color: "text-strong", children: a }),
                ],
            }),
            (0, i.jsx)(o.Ip, {
                children: (0, i.jsx)("div", {
                    className: s()({ [A.wf]: h !== m.r0.ROW, [A.Ge]: h === m.r0.ROW }),
                    children: f.map((e, n) => {
                        let { application: l, installOnDemand: a, showsPromoted: s } = e;
                        return (0, i.jsx)(
                            N,
                            {
                                context: t,
                                application: l,
                                look: h,
                                sectionName: x,
                                resultsPosition: n,
                                location: c.Oh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: a,
                                isOneClickCTA: g,
                                sectionOverallPosition: C,
                                showsPromoted: s,
                            },
                            l.id,
                        );
                    }),
                }),
            }),
        ],
    });
}
