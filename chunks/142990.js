(n.d(t, { Z: () => d }), n(413496), n(433524), n(35282), n(997841));
var r = n(255367),
    i = n(73800),
    a = n(600406),
    o = n(865427),
    s = n(853425),
    l = n(830121),
    c = n(887580);
let u = RegExp('^' + l.oO.source, l.oO.flags);
function d(e) {
    return {
        match: (e, t) => (t.allowLinks && t.allowDevLinks ? u.exec(e) : null),
        parse: (e, t) => ({
            target: e,
            type: 'devLink'
        }),
        react: (e, t, n) => {
            let l = e.target[0];
            return (0, o.mG)(l)
                ? (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)('span', { children: l }), (0, r.jsx)(i.Fragment, { children: (0, r.jsx)(s.Z, { url: l }, l) }, n.key)]
                  })
                : (0, c.$2)(l)
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)('span', { children: l }), (0, r.jsx)(i.Fragment, { children: (0, r.jsx)(c.vF, { url: l }) }, n.key)]
                    })
                  : (0, a.Y)(l)
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)('span', { children: l }), (0, r.jsx)(i.Fragment, { children: (0, r.jsx)(a.k, { url: l }) }, n.key)]
                      })
                    : (0, r.jsx)('span', { children: l });
        },
        order: 6
    };
}
