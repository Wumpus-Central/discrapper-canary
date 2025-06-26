n.d(t, { Z: () => h });
var l = n(255367),
    i = n(73800),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(895924),
    c = n(827498),
    u = n(106066),
    d = n(98880),
    p = n(772606),
    m = n(388032),
    f = n(655420);
function h(e) {
    let { context: t, entrypoint: n, title: r, look: h, items: v, sectionName: y, sectionOverallPosition: x } = e,
        b = (0, u.s)(),
        g = i.useMemo(() => (n === c._b.TEXT ? d.kA : d.qR), [n]);
    return (0, l.jsxs)('section', {
        className: f.container,
        'aria-label': m.intl.formatToPlainString(m.t.iobNIC, { sectionTitle: r }),
        children: [
            (0, l.jsxs)('div', {
                className: f.header,
                children: [
                    (0, l.jsx)(p.Z, { className: f.backButton }),
                    (0, l.jsx)(o.X6q, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: r
                    })
                ]
            }),
            (0, l.jsx)(o.Ttm, {
                children: (0, l.jsx)('div', {
                    className: a()({
                        [f.appGrid]: h !== d.U4.ROW,
                        [f.rows]: h === d.U4.ROW
                    }),
                    children: v.map((e, n) => {
                        let { application: i, installOnDemand: r, showsPromoted: a } = e;
                        return (0, l.jsx)(
                            g,
                            {
                                context: t,
                                application: i,
                                look: h,
                                sectionName: y,
                                resultsPosition: n,
                                location: s.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: r,
                                isOneClickCTA: b,
                                sectionOverallPosition: x,
                                showsPromoted: a
                            },
                            i.id
                        );
                    })
                })
            })
        ]
    });
}
