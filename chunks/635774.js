r.d(t, { Z: () => E });
var n = r(255367);
r(73800);
var i = r(120356),
    o = r.n(i),
    s = r(442837),
    l = r(481060),
    a = r(230711),
    c = r(706454),
    u = r(346585),
    d = r(347649),
    g = r(981631),
    m = r(388032),
    f = r(927687);
function E(e) {
    let { onClose: t, handleStartFlow: r } = e,
        i = (0, d.CC)(),
        E = (0, s.e7)([c.default], () => c.default.locale);
    return (0, n.jsxs)('div', {
        className: f.infoContainer,
        children: [
            (0, n.jsx)(l.X6q, {
                className: o()(f.finishTitle, { [f.finishTitlePadding]: i }),
                color: 'header-primary',
                variant: 'heading-xl/bold',
                children: i ? m.intl.formatToPlainString(m.t.XOWfNj, { date: (0, u.IE)(E) }) : m.intl.string(m.t['3C+rbG'])
            }),
            (0, n.jsx)(l.Text, {
                className: f.subtitleFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: i ? m.intl.formatToPlainString(m.t['g/gkAw'], { date: (0, u.IE)(E) }) : m.intl.string(m.t.TS1L09)
            }),
            (0, n.jsx)(l.Text, {
                className: f.promptFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: m.intl.format(m.t.bWE0ZG, {
                    onClick: () => {
                        t(), a.Z.open(g.oAB.ACCOUNT);
                    }
                })
            }),
            (0, n.jsx)(l.zxk, {
                className: f.button,
                type: 'button',
                size: l.zxk.Sizes.SMALL,
                onClick: i ? r : t,
                children: i ? m.intl.string(m.t['Zpd+Ym']) : m.intl.string(m.t['yD/zkp'])
            })
        ]
    });
}
