r.d(t, { Z: () => c });
var n = r(255367);
r(73800);
var i = r(481060),
    a = r(230711),
    o = r(981631),
    s = r(388032),
    l = r(927687);
function c(e) {
    let { onClose: t } = e;
    return (0, n.jsxs)('div', {
        className: l.infoContainer,
        children: [
            (0, n.jsx)(i.X6q, {
                className: l.finishTitle,
                color: 'header-primary',
                variant: 'heading-xl/bold',
                children: s.intl.string(s.t['3C+rbG'])
            }),
            (0, n.jsx)(i.Text, {
                className: l.subtitleFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: s.intl.string(s.t.TS1L09)
            }),
            (0, n.jsx)(i.Text, {
                className: l.promptFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: s.intl.format(s.t.bWE0ZG, {
                    onClick: () => {
                        (t(), a.Z.open(o.oAB.ACCOUNT));
                    }
                })
            }),
            (0, n.jsx)('div', {
                'data-button-hoisted-classname-wrapper': !0,
                className: l.button,
                children: (0, n.jsx)(i.zxk, {
                    variant: 'primary',
                    size: 'sm',
                    text: s.intl.string(s.t['yD/zkp']),
                    type: 'button',
                    onClick: t
                })
            })
        ]
    });
}
