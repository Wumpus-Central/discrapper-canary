n.d(t, {
    a: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(968797);
let a = (e) => {
    let { text: t, icon: n, onClick: a } = e;
    return (0, i.jsxs)(r.Button, {
        className: l.button,
        innerClassName: l.buttonInner,
        onClick: a,
        children: [
            (0, i.jsx)(n, { color: 'currentColor' }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/semibold',
                color: 'none',
                children: t
            })
        ]
    });
};
