n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(442837),
    l = n(481060),
    o = n(230711),
    u = n(706454),
    c = n(346585),
    d = n(347649),
    m = n(981631),
    g = n(388032),
    E = n(579532);
function h(e) {
    let { onClose: t, handleStartFlow: n } = e,
        s = (0, d.CC)(),
        h = (0, a.e7)([u.default], () => u.default.locale);
    return (0, i.jsxs)('div', {
        className: E.infoContainer,
        children: [
            (0, i.jsx)(l.Heading, {
                className: r()(E.finishTitle, { [E.finishTitlePadding]: s }),
                color: 'header-primary',
                variant: 'heading-xl/bold',
                children: s ? g.intl.formatToPlainString(g.t.XOWfNj, { date: (0, c.IE)(h) }) : g.intl.string(g.t['3C+rbG'])
            }),
            (0, i.jsx)(l.Text, {
                className: E.subtitleFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: s ? g.intl.formatToPlainString(g.t['g/gkAw'], { date: (0, c.IE)(h) }) : g.intl.string(g.t.TS1L09)
            }),
            (0, i.jsx)(l.Text, {
                className: E.promptFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: g.intl.format(g.t.bWE0ZG, {
                    onClick: () => {
                        t(), o.Z.open(m.oAB.ACCOUNT);
                    }
                })
            }),
            (0, i.jsx)(l.Button, {
                className: E.button,
                type: 'button',
                size: l.Button.Sizes.SMALL,
                onClick: s ? n : t,
                children: s ? g.intl.string(g.t['Zpd+Ym']) : g.intl.string(g.t['yD/zkp'])
            })
        ]
    });
}
