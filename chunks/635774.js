n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    l = n(442837),
    r = n(481060),
    o = n(230711),
    u = n(706454),
    d = n(346585),
    c = n(347649),
    m = n(981631),
    g = n(388032),
    E = n(579532);
function h(e) {
    let { onClose: t, handleStartFlow: n } = e,
        s = (0, c.CC)(),
        h = (0, l.e7)([u.default], () => u.default.locale);
    return (0, i.jsxs)('div', {
        className: E.infoContainer,
        children: [
            (0, i.jsx)(r.X6q, {
                className: a()(E.finishTitle, { [E.finishTitlePadding]: s }),
                color: 'header-primary',
                variant: 'heading-xl/bold',
                children: s ? g.intl.formatToPlainString(g.t.XOWfNj, { date: (0, d.IE)(h) }) : g.intl.string(g.t['3C+rbG'])
            }),
            (0, i.jsx)(r.Text, {
                className: E.subtitleFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: s ? g.intl.formatToPlainString(g.t['g/gkAw'], { date: (0, d.IE)(h) }) : g.intl.string(g.t.TS1L09)
            }),
            (0, i.jsx)(r.Text, {
                className: E.promptFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: g.intl.format(g.t.bWE0ZG, {
                    onClick: () => {
                        t(), o.Z.open(m.oAB.ACCOUNT);
                    }
                })
            }),
            (0, i.jsx)(r.zxk, {
                className: E.button,
                type: 'button',
                size: r.zxk.Sizes.SMALL,
                onClick: s ? n : t,
                children: s ? g.intl.string(g.t['Zpd+Ym']) : g.intl.string(g.t['yD/zkp'])
            })
        ]
    });
}
