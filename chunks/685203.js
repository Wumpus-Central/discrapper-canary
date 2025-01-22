r.d(n, {
    a: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(660384);
function u(e) {
    let { children: n, onClick: r, className: a, tooltip: u } = e;
    return (0, i.jsx)(s.Tooltip, {
        text: u,
        children: (e) => {
            let { onClick: u, ...c } = e;
            return (0, i.jsx)(s.Button, {
                ...c,
                onClick: (e) => {
                    null == r || r(e), null == u || u();
                },
                innerClassName: l.buttonReset,
                color: o()(l.cta, a),
                size: s.Button.Sizes.MIN,
                children: n
            });
        }
    });
}
