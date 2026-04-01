"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(397927),
    u = n(850992),
    c = n(802019),
    d = n(392054),
    _ = n(664929),
    f = n(581942);
let p = [16, 8, 8, 8],
    h = 32,
    m = 4,
    E = 8;
function g(e) {
    let {
            className: t,
            channel: n,
            sections: s,
            activeCategoryIndex: g,
            filteredSectionId: A,
            onSectionClick: I,
            applicationCommandListRef: T,
        } = e,
        S = i.useRef(null),
        y = i.useCallback(
            (e, t) => {
                let n = 2 * m;
                return s[t + 1]?.type === d.Hf.BUILT_IN && (n += E), h + n;
            },
            [s],
        ),
        v = i.useCallback((e, t) => (t ? (s[e + 1]?.type === d.Hf.BUILT_IN ? 0 : 2 * m) : 0 === e ? 0 : 2 * m), [s]),
        N = i.useCallback(
            (e, t) => {
                let i = s[t];
                if (null == i) return;
                let a = (0, _.Rg)(i),
                    u = i.type === d.Hf.BUILT_IN ? m : 0,
                    c = h - 2 * u,
                    p = (0, r.jsx)(a, {
                        channel: n,
                        section: i,
                        isSelected: null != A ? i.id === A : g === t,
                        padding: u,
                        width: c,
                        height: c,
                        selectable: !0,
                    }),
                    E = i.type !== d.Hf.BUILT_IN && t < s.length - 1 && s[t + 1].type === d.Hf.BUILT_IN;
                return (0, r.jsxs)(
                    "div",
                    {
                        className: f.uW,
                        children: [
                            (0, r.jsx)(o.m, {
                                text: i.name,
                                position: "right",
                                asContainer: !0,
                                children: (0, r.jsx)(l.DUT, {
                                    "aria-label": i.name,
                                    onClick: () => {
                                        I(i);
                                    },
                                    children: p,
                                }),
                            }),
                            E ? (0, r.jsx)("hr", { className: f.zQ }) : null,
                        ],
                    },
                    i.id,
                );
            },
            [g, n, I, s, A],
        );
    return 0 === s.length
        ? null
        : (0, r.jsx)("div", {
              className: a()(t, f.iE),
              children: (0, r.jsx)(c.A, {
                  categoryListRef: S,
                  expressionsListRef: T,
                  store: u.LS,
                  categories: s,
                  className: f.p_,
                  renderCategoryListItem: N,
                  rowCount: s.length,
                  categoryHeight: y,
                  listPadding: p,
                  getScrollOffsetForIndex: v,
              }),
          });
}
