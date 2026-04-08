"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(442433),
    l = n(927057),
    u = n(721768);
n(827669);
var c = n(985018),
    d = n(42739);
function _(e) {
    let t,
        s,
        _,
        { className: f, activeCommand: p, activeOption: h, optionStates: m, channelId: E } = e,
        g = i.useCallback(
            (e) => {
                let t = p?.rootCommand?.id;
                null == t
                    ? e.preventDefault()
                    : (0, o.L3)(e, async () => {
                          let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                          return (n) => (0, r.jsx)(e, { ...n, id: t, label: c.intl.string(c.t.oJ1Muw) });
                      });
            },
            [p?.rootCommand?.id],
        ),
        A = i.useCallback(() => {
            u.Gf({ channelId: E, command: null, section: null });
        }, [E]);
    if (null == p) return null;
    if (null != h) {
        let e = m[h.name].lastValidationResult;
        (t = h.displayName), (s = h.displayDescription), (_ = e?.success ? null : e?.error);
    } else (t = `/${p.displayName}`), (s = p.displayDescription), (_ = null);
    return (0, r.jsxs)("div", {
        className: a()(f, d.M0),
        onContextMenu: g,
        children: [
            (0, r.jsxs)("div", {
                className: d.iz,
                children: [
                    (0, r.jsx)("span", { className: d.UU, children: t }),
                    null != _
                        ? (0, r.jsx)("span", { className: d.z3, children: _ })
                        : (0, r.jsx)("span", { className: d.h_, children: s }),
                ],
            }),
            (0, r.jsx)("div", { className: d.o1, children: (0, r.jsx)(l.x, { onClick: A }) }),
        ],
    });
}
