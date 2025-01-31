n.d(t, { Z: () => u }), n(789020);
var i = n(200651),
    r = n(192379),
    a = n(865427),
    s = n(853425),
    o = n(830121);
let l = RegExp('^' + o.oO.source, o.oO.flags);
function u(e) {
    return {
        match: (e, t) => (t.allowLinks && t.allowDevLinks ? l.exec(e) : null),
        parse: (e, t) => ({
            target: e,
            type: 'devLink'
        }),
        react: (e, t, n) => {
            let o = e.target[0];
            return (0, a.mG)(o)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)('span', { children: o }), (0, i.jsx)(r.Fragment, { children: (0, i.jsx)(s.Z, { url: o }, o) }, n.key)]
                  })
                : (0, i.jsx)('span', { children: o });
        },
        order: 6
    };
}
