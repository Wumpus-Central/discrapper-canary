r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(789020);
var a = r(200651),
    o = r(192379),
    s = r(865427),
    l = r(853425),
    u = r(830121);
let c = RegExp('^' + u.oO.source, u.oO.flags);
function d(e) {
    return {
        match: (e, n) => (n.allowLinks && n.allowDevLinks ? c.exec(e) : null),
        parse: (e, n) => ({
            target: e,
            type: 'devLink'
        }),
        react: (e, n, r) => {
            let i = e.target[0];
            return (0, s.mG)(i)
                ? (0, a.jsxs)(a.Fragment, {
                      children: [(0, a.jsx)('span', { children: i }), (0, a.jsx)(o.Fragment, { children: (0, a.jsx)(l.Z, { url: i }, i) }, r.key)]
                  })
                : (0, a.jsx)('span', { children: i });
        },
        order: 6
    };
}
