n.d(t, { Z: () => f });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(481060),
    s = n(895924),
    c = n(827498),
    u = n(106066),
    d = n(98880),
    m = n(772606),
    p = n(388032),
    h = n(268190);
function f(e) {
    let { context: t, entrypoint: n, title: r, look: f, items: v, sectionName: N, sectionOverallPosition: x } = e,
        y = (0, u.s)('AppLauncherApplicationListViewScreen'),
        b = l.useMemo(() => (n === c._b.TEXT ? d.kA : d.qR), [n]);
    return (0, i.jsxs)('section', {
        className: h.container,
        'aria-label': p.NW.formatToPlainString(p.t.iobNIC, { sectionTitle: r }),
        children: [
            (0, i.jsxs)('div', {
                className: h.header,
                children: [
                    (0, i.jsx)(m.Z, { className: h.backButton }),
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
                        [h.appGrid]: f !== d.U4.ROW,
                        [h.rows]: f === d.U4.ROW
                    }),
                    children: v.map((e, n) => {
                        let { application: l, installOnDemand: r, showsPromoted: o } = e;
                        return (0, i.jsx)(
                            b,
                            {
                                context: t,
                                application: l,
                                look: f,
                                sectionName: N,
                                resultsPosition: n,
                                location: s.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: r,
                                isOneClickCTA: y,
                                sectionOverallPosition: x,
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
