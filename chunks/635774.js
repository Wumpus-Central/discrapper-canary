r.d(t, { Z: () => c });
var n = r(255367);
r(73800);
var i = r(481060),
    o = r(230711),
    s = r(981631),
    a = r(388032),
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
                children: a.intl.string(a.t['3C+rbG'])
            }),
            (0, n.jsx)(i.Text, {
                className: l.subtitleFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: a.intl.string(a.t.TS1L09)
            }),
            (0, n.jsx)(i.Text, {
                className: l.promptFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: a.intl.format(a.t.bWE0ZG, {
                    onClick: () => {
                        t(), o.Z.open(s.oAB.ACCOUNT);
                    }
                })
            }),
            (0, n.jsx)(i.zxk, {
                className: l.button,
                type: 'button',
                size: i.zxk.Sizes.SMALL,
                onClick: t,
                children: a.intl.string(a.t['yD/zkp'])
            })
        ]
    });
}
