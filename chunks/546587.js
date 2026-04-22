"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(990078),
    o = n(939249),
    c = n(850992),
    u = n(802019),
    d = n(392054),
    h = n(664929),
    m = n(282214);
let p = [16, 8, 8, 8];
function f(e) {
    let {
            className: t,
            channel: n,
            sections: s,
            activeCategoryIndex: f,
            filteredSectionId: g,
            onSectionClick: _,
            applicationCommandListRef: x,
        } = e,
        A = l.useRef(null),
        C = l.useCallback(
            (e, t) => {
                let n = 8;
                return s[t + 1]?.type === d.Hf.BUILT_IN && (n += 8), 32 + n;
            },
            [s],
        ),
        E = l.useCallback((e, t) => (t ? 8 * (s[e + 1]?.type !== d.Hf.BUILT_IN) : 8 * (0 !== e)), [s]),
        I = l.useCallback(
            (e, t) => {
                let l = s[t];
                if (null == l) return;
                let r = (0, h.Rg)(l),
                    c = 4 * (l.type === d.Hf.BUILT_IN),
                    u = 32 - 2 * c,
                    p = (0, i.jsx)(r, {
                        channel: n,
                        section: l,
                        isSelected: null != g ? l.id === g : f === t,
                        padding: c,
                        width: u,
                        height: u,
                        selectable: !0,
                    }),
                    x = l.type !== d.Hf.BUILT_IN && t < s.length - 1 && s[t + 1].type === d.Hf.BUILT_IN;
                return (0, i.jsxs)(
                    "div",
                    {
                        className: m.uW,
                        children: [
                            (0, i.jsx)(a.m, {
                                text: l.name,
                                position: "right",
                                asContainer: !0,
                                children: (0, i.jsx)(o.D, {
                                    "aria-label": l.name,
                                    onClick: () => {
                                        _(l);
                                    },
                                    children: p,
                                }),
                            }),
                            x ? (0, i.jsx)("hr", { className: m.zQ }) : null,
                        ],
                    },
                    l.id,
                );
            },
            [f, n, _, s, g],
        );
    return 0 === s.length
        ? null
        : (0, i.jsx)("div", {
              className: r()(t, m.iE),
              children: (0, i.jsx)(u.A, {
                  categoryListRef: A,
                  expressionsListRef: x,
                  store: c.LS,
                  categories: s,
                  className: m.p_,
                  renderCategoryListItem: I,
                  rowCount: s.length,
                  categoryHeight: C,
                  listPadding: p,
                  getScrollOffsetForIndex: E,
              }),
          });
}
