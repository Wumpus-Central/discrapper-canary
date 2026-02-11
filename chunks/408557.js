"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(442433),
    l = n(927057),
    u = n(721768);
n(827669);
var c = n(985018),
    d = n(58275);
function _(e) {
    let t,
        a,
        _,
        { className: f, activeCommand: h, activeOption: p, optionStates: g, channelId: E } = e,
        A = i.useCallback(
            (e) => {
                let t = h?.rootCommand?.id;
                null == t
                    ? e.preventDefault()
                    : (0, o.L3)(e, async () => {
                          let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                          return (n) => (0, r.jsx)(e, { ...n, id: t, label: c.intl.string(c.t.oJ1Muw) });
                      });
            },
            [h?.rootCommand?.id],
        ),
        I = i.useCallback(() => {
            u.Gf({ channelId: E, command: null, section: null });
        }, [E]);
    if (null == h) return null;
    if (null != p) {
        let e = g[p.name].lastValidationResult;
        (t = p.displayName), (a = p.displayDescription), (_ = e?.success ? null : e?.error);
    } else (t = `/${h.displayName}`), (a = h.displayDescription), (_ = null);
    return (0, r.jsxs)("div", {
        className: s()(f, d.M0),
        onContextMenu: A,
        children: [
            (0, r.jsxs)("div", {
                className: d.iz,
                children: [
                    (0, r.jsx)("span", { className: d.UU, children: t }),
                    null != _
                        ? (0, r.jsx)("span", { className: d.z3, children: _ })
                        : (0, r.jsx)("span", { className: d.h_, children: a }),
                ],
            }),
            (0, r.jsx)("div", { className: d.o1, children: (0, r.jsx)(l.x, { onClick: I }) }),
        ],
    });
}
