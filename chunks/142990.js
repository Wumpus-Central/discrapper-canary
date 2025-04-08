n.d(t, { Z: () => u }), n(413496), n(433524), n(35282), n(997841);
var r = n(200651),
    i = n(192379),
    o = n(865427),
    a = n(853425),
    s = n(830121),
    l = n(887580);
let c = RegExp('^' + s.oO.source, s.oO.flags);
function u(e) {
    return {
        match: (e, t) => (t.allowLinks && t.allowDevLinks ? c.exec(e) : null),
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
                : (0, l.$2)(s)
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)('span', { children: s }), (0, r.jsx)(i.Fragment, { children: (0, r.jsx)(l.vF, { url: s }) }, n.key)]
                    })
                  : (0, r.jsx)('span', { children: s });
        },
        order: 6
    };
}
