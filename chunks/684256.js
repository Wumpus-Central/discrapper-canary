t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(200651),
    l = t(192379),
    a = t(120356),
    o = t.n(a),
    r = t(481060),
    s = t(895924),
    c = t(827498),
    d = t(106066),
    u = t(98880),
    m = t(772606),
    p = t(388032),
    h = t(560618);
function f(e) {
    let { channel: n, entrypoint: t, title: a, look: f, items: C, sectionName: v, sectionOverallPosition: x } = e,
        _ = (0, d.s)('AppLauncherApplicationListViewScreen'),
        N = l.useMemo(() => (t === c._b.TEXT ? u.kA : u.qR), [t]);
    return (0, i.jsxs)('section', {
        className: h.container,
        'aria-label': p.intl.formatToPlainString(p.t.iobNIC, { sectionTitle: a }),
        children: [
            (0, i.jsxs)('div', {
                className: h.header,
                children: [
                    (0, i.jsx)(m.Z, { className: h.backButton }),
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: a
                    })
                ]
            }),
            (0, i.jsx)(r.Scroller, {
                children: (0, i.jsx)('div', {
                    className: o()({
                        [h.appGrid]: f !== u.U4.ROW,
                        [h.rows]: f === u.U4.ROW
                    }),
                    children: C.map((e, t) => {
                        let { application: l, installOnDemand: a, showsPromoted: o } = e;
                        return (0, i.jsx)(
                            N,
                            {
                                channel: n,
                                application: l,
                                look: f,
                                sectionName: v,
                                resultsPosition: t,
                                location: s.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
                                installOnDemand: a,
                                isOneClickCTA: _,
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
