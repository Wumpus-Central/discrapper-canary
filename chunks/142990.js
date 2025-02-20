n.d(t, { Z: () => c }), n(474991), n(398202), n(301563), n(789020);
var r = n(200651),
    i = n(192379),
    o = n(865427),
    a = n(853425),
    s = n(830121);
let l = RegExp('^' + s.oO.source, s.oO.flags);
function c(e) {
    return {
        match: (e, t) => (t.allowLinks && t.allowDevLinks ? l.exec(e) : null),
        parse: (e, t) => ({
            target: e,
            type: 'devLink'
        }),
        react: (e, t, n) => {
            let s = e.target[0];
            return (0, o.mG)(s)
                ? (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)('span', { children: s }), (0, r.jsx)(i.Fragment, { children: (0, r.jsx)(a.Z, { url: s }, s) }, n.key)]
                  })
                : (0, r.jsx)('span', { children: s });
        },
        order: 6
    };
}
