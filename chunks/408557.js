"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(442433),
    o = n(927057),
    c = n(721768);
n(827669);
var u = n(985018),
    d = n(851006);
function h(e) {
    let t,
        s,
        h,
        { className: m, activeCommand: p, activeOption: f, optionStates: g, channelId: _ } = e,
        x = l.useCallback(
            (e) => {
                let t = p?.rootCommand?.id;
                null == t
                    ? e.preventDefault()
                    : (0, a.L3)(e, async () => {
                          let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                          return (n) => (0, i.jsx)(e, { ...n, id: t, label: u.intl.string(u.t.oJ1Muw) });
                      });
            },
            [p?.rootCommand?.id],
        ),
        A = l.useCallback(() => {
            c.Gf({ channelId: _, command: null, section: null });
        }, [_]);
    if (null == p) return null;
    if (null != f) {
        let e = g[f.name].lastValidationResult;
        (t = f.displayName), (s = f.displayDescription), (h = e?.success ? null : e?.error);
    } else (t = `/${p.displayName}`), (s = p.displayDescription), (h = null);
    return (0, i.jsxs)("div", {
        className: r()(m, d.M0),
        onContextMenu: x,
        children: [
            (0, i.jsxs)("div", {
                className: d.iz,
                children: [
                    (0, i.jsx)("span", { className: d.UU, children: t }),
                    null != h
                        ? (0, i.jsx)("span", { className: d.z3, children: h })
                        : (0, i.jsx)("span", { className: d.h_, children: s }),
                ],
            }),
            (0, i.jsx)("div", {
                className: d.o1,
                children: (0, i.jsx)(o.x, { onClick: A, "aria-label": u.intl.string(u.t.cpT0Cq) }),
            }),
        ],
    });
}
