r.d(t, { Z: () => E });
var n = r(200651);
r(192379);
var i = r(120356),
    s = r.n(i),
    o = r(442837),
    a = r(481060),
    l = r(230711),
    c = r(706454),
    u = r(346585),
    d = r(347649),
    g = r(981631),
    m = r(388032),
    f = r(927687);
function E(e) {
    let { onClose: t, handleStartFlow: r } = e,
        i = (0, d.CC)(),
        E = (0, o.e7)([c.default], () => c.default.locale);
    return (0, n.jsxs)('div', {
        className: f.infoContainer,
        children: [
            (0, n.jsx)(a.X6q, {
                className: s()(f.finishTitle, { [f.finishTitlePadding]: i }),
                color: 'header-primary',
                variant: 'heading-xl/bold',
                children: i ? m.NW.formatToPlainString(m.t.XOWfNj, { date: (0, u.IE)(E) }) : m.NW.string(m.t['3C+rbG'])
            }),
            (0, n.jsx)(a.Text, {
                className: f.subtitleFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: i ? m.NW.formatToPlainString(m.t['g/gkAw'], { date: (0, u.IE)(E) }) : m.NW.string(m.t.TS1L09)
            }),
            (0, n.jsx)(a.Text, {
                className: f.promptFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: m.NW.format(m.t.bWE0ZG, {
                    onClick: () => {
                        t(), l.Z.open(g.oAB.ACCOUNT);
                    }
                })
            }),
            (0, n.jsx)(a.zxk, {
                className: f.button,
                type: 'button',
                size: a.zxk.Sizes.SMALL,
                onClick: i ? r : t,
                children: i ? m.NW.string(m.t['Zpd+Ym']) : m.NW.string(m.t['yD/zkp'])
            })
        ]
    });
}
