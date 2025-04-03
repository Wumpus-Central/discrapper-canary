n.d(t, { Z: () => h });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    c = n(895924),
    s = n(827498),
    u = n(106066),
    d = n(98880),
    p = n(772606),
    m = n(388032),
    f = n(655420);
function h(e) {
    let { context: t, entrypoint: n, title: l, look: h, items: b, sectionName: C, sectionOverallPosition: _ } = e,
        x = (0, u.s)('AppLauncherApplicationListViewScreen'),
        v = r.useMemo(() => (n === s._b.TEXT ? d.kA : d.qR), [n]);
    return (0, i.jsxs)('section', {
        className: f.container,
        'aria-label': m.NW.formatToPlainString(m.t.iobNIC, { sectionTitle: l }),
        children: [
            (0, i.jsxs)('div', {
                className: f.header,
                children: [
                    (0, i.jsx)(p.Z, { className: f.backButton }),
                    (0, i.jsx)(o.X6q, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: l
                    })
                ]
            }),
            (0, i.jsx)(o.Ttm, {
                children: (0, i.jsx)('div', {
                    className: a()({
                        [f.appGrid]: h !== d.U4.ROW,
                        [f.rows]: h === d.U4.ROW
                    }),
                    children: b.map((e, n) => {
                        let { application: r, installOnDemand: l, showsPromoted: a } = e;
                        return (0, i.jsx)(
                            v,
                            {
                                context: t,
                                application: r,
                                look: h,
                                sectionName: C,
                                resultsPosition: n,
                                location: c.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: l,
                                isOneClickCTA: x,
                                sectionOverallPosition: _,
                                showsPromoted: a
                            },
                            r.id
                        );
                    })
                })
            })
        ]
    });
}
