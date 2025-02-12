n.d(t, { Z: () => x });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    r = n(895924),
    c = n(827498),
    d = n(106066),
    u = n(98880),
    m = n(772606),
    p = n(388032),
    h = n(316795);
function x(e) {
    let { context: t, entrypoint: n, title: a, look: x, items: v, sectionName: f, sectionOverallPosition: N } = e,
        C = (0, d.s)('AppLauncherApplicationListViewScreen'),
        E = l.useMemo(() => (n === c._b.TEXT ? u.kA : u.qR), [n]);
    return (0, i.jsxs)('section', {
        className: h.container,
        'aria-label': p.intl.formatToPlainString(p.t.iobNIC, { sectionTitle: a }),
        children: [
            (0, i.jsxs)('div', {
                className: h.header,
                children: [
                    (0, i.jsx)(m.Z, { className: h.backButton }),
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: a
                    })
                ]
            }),
            (0, i.jsx)(s.Ttm, {
                children: (0, i.jsx)('div', {
                    className: o()({
                        [h.appGrid]: x !== u.U4.ROW,
                        [h.rows]: x === u.U4.ROW
                    }),
                    children: v.map((e, n) => {
                        let { application: l, installOnDemand: a, showsPromoted: o } = e;
                        return (0, i.jsx)(
                            E,
                            {
                                context: t,
                                application: l,
                                look: x,
                                sectionName: f,
                                resultsPosition: n,
                                location: r.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: a,
                                isOneClickCTA: C,
                                sectionOverallPosition: N,
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
