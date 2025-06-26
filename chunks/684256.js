n.d(t, { Z: () => h });
var i = n(255367),
    l = n(73800),
    r = n(120356),
    o = n.n(r),
    a = n(481060),
    c = n(895924),
    s = n(827498),
    u = n(106066),
    d = n(98880),
    p = n(772606),
    m = n(388032),
    f = n(655420);
function h(e) {
    let { context: t, entrypoint: n, title: r, look: h, items: b, sectionName: _, sectionOverallPosition: C } = e,
        v = (0, u.s)(),
        x = l.useMemo(() => (n === s._b.TEXT ? d.kA : d.qR), [n]);
    return (0, i.jsxs)('section', {
        className: f.container,
        'aria-label': m.intl.formatToPlainString(m.t.iobNIC, { sectionTitle: r }),
        children: [
            (0, i.jsxs)('div', {
                className: f.header,
                children: [
                    (0, i.jsx)(p.Z, { className: f.backButton }),
                    (0, i.jsx)(a.X6q, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: r
                    })
                ]
            }),
            (0, i.jsx)(a.Ttm, {
                children: (0, i.jsx)('div', {
                    className: o()({
                        [f.appGrid]: h !== d.U4.ROW,
                        [f.rows]: h === d.U4.ROW
                    }),
                    children: b.map((e, n) => {
                        let { application: l, installOnDemand: r, showsPromoted: o } = e;
                        return (0, i.jsx)(
                            x,
                            {
                                context: t,
                                application: l,
                                look: h,
                                sectionName: _,
                                resultsPosition: n,
                                location: c.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: r,
                                isOneClickCTA: v,
                                sectionOverallPosition: C,
                                showsPromoted: o
                            },
                            l.id
                        );
                    })
                })
            })
        ]
    });
}
