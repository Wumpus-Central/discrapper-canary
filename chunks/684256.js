n.d(t, { Z: () => h });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(895924),
    c = n(827498),
    d = n(106066),
    u = n(98880),
    p = n(772606),
    m = n(388032),
    f = n(655420);
function h(e) {
    let { context: t, entrypoint: n, title: l, look: h, items: b, sectionName: x, sectionOverallPosition: C } = e,
        _ = (0, d.s)('AppLauncherApplicationListViewScreen'),
        v = r.useMemo(() => (n === c._b.TEXT ? u.kA : u.qR), [n]);
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
                        [f.appGrid]: h !== u.U4.ROW,
                        [f.rows]: h === u.U4.ROW
                    }),
                    children: b.map((e, n) => {
                        let { application: r, installOnDemand: l, showsPromoted: a } = e;
                        return (0, i.jsx)(
                            v,
                            {
                                context: t,
                                application: r,
                                look: h,
                                sectionName: x,
                                resultsPosition: n,
                                location: s.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: l,
                                isOneClickCTA: _,
                                sectionOverallPosition: C,
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
