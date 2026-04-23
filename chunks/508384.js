"use strict";
n.d(t, { A: () => b });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(462887),
    d = n(939249),
    c = n(365199),
    u = n(761508),
    h = n(545442),
    g = n(442433),
    m = n(665013),
    x = n(246199),
    p = n(967144),
    A = n(660811);
function f(e) {
    let { role: t, guild: s } = e,
        [r, o] = i.useState(!1);
    return (0, m.x)(s, t)
        ? (0, l.jsx)(d.D, {
              onClick: (e) => {
                  o(!0),
                      (0, g.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 665013));
                              return (n) => (0, l.jsx)(e, { ...n, role: t, guild: s });
                          },
                          { onClose: () => o(!1) },
                      );
              },
              className: a()(A.X2, { [A.ho]: r }),
              children: (0, l.jsx)(c.j, { size: "custom", color: "currentColor", width: 20, height: 20 }),
          })
        : null;
}
function b(e) {
    let {
            color: t,
            id: i,
            role: s,
            guild: a,
            children: d,
            isDragging: c,
            selectedItem: g,
            onItemSelect: m,
            itemType: b,
            locked: _,
            lockTooltip: C,
            showContextMenu: j,
            theme: v,
            roleStyle: N,
            onContextMenu: S,
            "aria-label": E,
        } = e,
        y = (0, p.X_)(a.id, s, s?.colorStrings);
    return c
        ? (0, l.jsx)("div", { className: A.rz })
        : (0, l.jsx)(u.V.Item, {
              className: A.JC,
              id: i,
              selectedItem: g,
              onItemSelect: m,
              itemType: b,
              "aria-label": null != C ? `${E}, ${C}` : E,
              onContextMenu: S,
              children: (0, l.jsxs)("div", {
                  className: A.yl,
                  children: [
                      "dot" === N
                          ? (0, l.jsx)(h.W, {
                                color: t ?? void 0,
                                colors: y,
                                className: A.m4,
                                background: !1,
                                tooltip: !1,
                            })
                          : (0, l.jsx)(h.R, { color: t ?? null, colors: y, className: A.Ni }),
                      (function () {
                          if (!_) return null;
                          let e = (0, o.M)(v) ? n(454554) : n(470474);
                          return (0, l.jsx)(r.m, { text: C, children: (0, l.jsx)(x.A, { className: A.s2, src: e }) });
                      })(),
                      (0, l.jsx)("div", { className: A.dD, children: d }),
                      j && null != s ? (0, l.jsx)(f, { guild: a, role: s }) : null,
                  ],
              }),
          });
}
