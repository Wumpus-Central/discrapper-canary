"use strict";
n.d(t, { A: () => A });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(582754),
    d = n(397927),
    c = n(442433),
    u = n(665013),
    h = n(246199),
    g = n(967144),
    m = n(881762);
function x(e) {
    let { role: t, guild: s } = e,
        [r, o] = i.useState(!1);
    return (0, u.x)(s, t)
        ? (0, l.jsx)(d.DUT, {
              onClick: (e) => {
                  o(!0),
                      (0, c.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 665013));
                              return (n) => (0, l.jsx)(e, { ...n, role: t, guild: s });
                          },
                          { onClose: () => o(!1) },
                      );
              },
              className: a()(m.X2, { [m.ho]: r }),
              children: (0, l.jsx)(d.jNK, { size: "custom", color: "currentColor", width: 20, height: 20 }),
          })
        : null;
}
function A(e) {
    let {
            color: t,
            id: i,
            role: s,
            guild: a,
            children: c,
            isDragging: u,
            selectedItem: A,
            onItemSelect: f,
            itemType: p,
            locked: b,
            lockTooltip: C,
            showContextMenu: j,
            theme: N,
            roleStyle: v,
            onContextMenu: _,
            "aria-label": E,
        } = e,
        y = (0, g.X_)(a.id, s, s?.colorStrings);
    return u
        ? (0, l.jsx)("div", { className: m.rz })
        : (0, l.jsx)(d.VQ0.Item, {
              className: m.JC,
              id: i,
              selectedItem: A,
              onItemSelect: f,
              itemType: p,
              "aria-label": null != C ? `${E}, ${C}` : E,
              onContextMenu: _,
              children: (0, l.jsxs)("div", {
                  className: m.yl,
                  children: [
                      "dot" === v
                          ? (0, l.jsx)(d.WYI, {
                                color: t ?? void 0,
                                colors: y,
                                className: m.m4,
                                background: !1,
                                tooltip: !1,
                            })
                          : (0, l.jsx)(d.RYH, { color: t ?? null, colors: y, className: m.Ni }),
                      (function () {
                          if (!b) return null;
                          let e = (0, o.Mw)(N) ? n(454554) : n(470474);
                          return (0, l.jsx)(r.m, { text: C, children: (0, l.jsx)(h.A, { className: m.s2, src: e }) });
                      })(),
                      (0, l.jsx)("div", { className: m.dD, children: c }),
                      j && null != s ? (0, l.jsx)(x, { guild: a, role: s }) : null,
                  ],
              }),
          });
}
