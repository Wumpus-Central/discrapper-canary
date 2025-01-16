r.d(n, {
    a: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(660384);
function u(e) {
    let { children: n, onClick: r, className: a, tooltip: u } = e;
    return (0, i.jsx)(o.Tooltip, {
        text: u,
        children: (e) => {
            let { onClick: u, ...c } = e;
            return (0, i.jsx)(o.Button, {
                ...c,
                onClick: (e) => {
                    null == r || r(e), null == u || u();
                },
                innerClassName: l.buttonReset,
                color: s()(l.cta, a),
                size: o.Button.Sizes.MIN,
                children: n
            });
        }
    });
}
