i.d(e, {
    H: function () {
        return r;
    }
});
var t,
    r,
    l = i(200651);
i(192379);
var a = i(120356),
    s = i.n(a),
    o = i(768581),
    c = i(73346),
    d = i(134384);
((t = r || (r = {}))[(t.SMALL = 40)] = 'SMALL'), (t[(t.MEDIUM = 66)] = 'MEDIUM');
let u = {
    40: d.small,
    66: d.medium
};
e.Z = (n) => {
    let e,
        { application: i, size: t, asset: r, className: a } = n;
    return (
        (e =
            null != r
                ? (0, c._W)(i.id, r, t)
                : o.ZP.getApplicationIconURL({
                      id: i.id,
                      icon: i.icon,
                      size: t
                  })),
        (0, l.jsx)('img', {
            alt: '',
            src: e,
            className: s()(d.icon, u[t], a)
        })
    );
};
