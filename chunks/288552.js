n.d(t, { a: () => o });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(690148);
let o = (e) => {
    let { text: t, icon: n, onClick: o, ref: a } = e;
    return (0, r.jsxs)(i.zxk, {
        className: l.button,
        innerClassName: l.buttonInner,
        onClick: o,
        buttonRef: a,
        children: [
            (0, r.jsx)(n, { color: 'currentColor' }),
            (0, r.jsx)(i.Text, {
                variant: 'text-md/semibold',
                color: 'none',
                children: t
            })
        ]
    });
};
