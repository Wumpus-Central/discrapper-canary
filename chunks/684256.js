n.d(t, { Z: () => h });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(895924),
    c = n(827498),
    u = n(106066),
    d = n(98880),
    p = n(772606),
    m = n(388032),
    f = n(101910);
function h(e) {
    let { context: t, entrypoint: n, title: l, look: h, items: b, sectionName: _, sectionOverallPosition: y } = e,
        x = (0, u.s)(),
        C = r.useMemo(() => (n === c._b.TEXT ? d.kA : d.qR), [n]);
    return (0, i.jsxs)('section', {
        className: f.container,
        'aria-label': m.NW.formatToPlainString(m.t.iobNIC, { sectionTitle: l }),
        children: [
            (0, i.jsxs)('div', {
                className: f.header,
                children: [
                    (0, i.jsx)(p.Z, { className: f.backButton }),
                    (0, i.jsx)(a.X6q, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: l
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
                        let { application: r, installOnDemand: l, showsPromoted: o } = e;
                        return (0, i.jsx)(
                            C,
                            {
                                context: t,
                                application: r,
                                look: h,
                                sectionName: _,
                                resultsPosition: n,
                                location: s.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: l,
                                isOneClickCTA: x,
                                sectionOverallPosition: y,
                                showsPromoted: o
                            },
                            r.id
                        );
                    })
                })
            })
        ]
    });
}
