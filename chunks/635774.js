n.d(t, { Z: () => E });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    o = n(442837),
    l = n(481060),
    a = n(230711),
    c = n(706454),
    u = n(346585),
    d = n(347649),
    g = n(981631),
    m = n(388032),
    f = n(927687);
function E(e) {
    let { onClose: t, handleStartFlow: n } = e,
        i = (0, d.CC)(),
        E = (0, o.e7)([c.default], () => c.default.locale);
    return (0, r.jsxs)('div', {
        className: f.infoContainer,
        children: [
            (0, r.jsx)(l.X6q, {
                className: s()(f.finishTitle, { [f.finishTitlePadding]: i }),
                color: 'header-primary',
                variant: 'heading-xl/bold',
                children: i ? m.intl.formatToPlainString(m.t.XOWfNj, { date: (0, u.IE)(E) }) : m.intl.string(m.t['3C+rbG'])
            }),
            (0, r.jsx)(l.Text, {
                className: f.subtitleFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: i ? m.intl.formatToPlainString(m.t['g/gkAw'], { date: (0, u.IE)(E) }) : m.intl.string(m.t.TS1L09)
            }),
            (0, r.jsx)(l.Text, {
                className: f.promptFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: m.intl.format(m.t.bWE0ZG, {
                    onClick: () => {
                        t(), a.Z.open(g.oAB.ACCOUNT);
                    }
                })
            }),
            (0, r.jsx)(l.zxk, {
                className: f.button,
                type: 'button',
                size: l.zxk.Sizes.SMALL,
                onClick: i ? n : t,
                children: i ? m.intl.string(m.t['Zpd+Ym']) : m.intl.string(m.t['yD/zkp'])
            })
        ]
    });
}
