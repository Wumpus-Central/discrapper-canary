t.d(e, {
    H: function () {
        return r;
    }
});
var i,
    r,
    l = t(200651);
t(192379);
var a = t(120356),
    s = t.n(a),
    o = t(768581),
    c = t(73346),
    d = t(134384);
((i = r || (r = {}))[(i.SMALL = 40)] = 'SMALL'), (i[(i.MEDIUM = 66)] = 'MEDIUM');
let u = {
    40: d.small,
    66: d.medium
};
e.Z = (n) => {
    let e,
        { application: t, size: i, asset: r, className: a } = n;
    return (
        (e =
            null != r
                ? (0, c._W)(t.id, r, i)
                : o.ZP.getApplicationIconURL({
                      id: t.id,
                      icon: t.icon,
                      size: i
                  })),
        (0, l.jsx)('img', {
            alt: '',
            src: e,
            className: s()(d.icon, u[i], a)
        })
    );
};
