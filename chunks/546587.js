"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(939249),
    u = n(850992),
    c = n(802019),
    d = n(392054),
    _ = n(664929),
    f = n(282214);
let p = [16, 8, 8, 8];
function h(e) {
    let {
            className: t,
            channel: n,
            sections: s,
            activeCategoryIndex: h,
            filteredSectionId: E,
            onSectionClick: m,
            applicationCommandListRef: g,
        } = e,
        A = i.useRef(null),
        I = i.useCallback(
            (e, t) => {
                let n = 8;
                return s[t + 1]?.type === d.Hf.BUILT_IN && (n += 8), 32 + n;
            },
            [s],
        ),
        T = i.useCallback((e, t) => (t ? 8 * (s[e + 1]?.type !== d.Hf.BUILT_IN) : 8 * (0 !== e)), [s]),
        S = i.useCallback(
            (e, t) => {
                let i = s[t];
                if (null == i) return;
                let a = (0, _.Rg)(i),
                    u = 4 * (i.type === d.Hf.BUILT_IN),
                    c = 32 - 2 * u,
                    p = (0, r.jsx)(a, {
                        channel: n,
                        section: i,
                        isSelected: null != E ? i.id === E : h === t,
                        padding: u,
                        width: c,
                        height: c,
                        selectable: !0,
                    }),
                    g = i.type !== d.Hf.BUILT_IN && t < s.length - 1 && s[t + 1].type === d.Hf.BUILT_IN;
                return (0, r.jsxs)(
                    "div",
                    {
                        className: f.uW,
                        children: [
                            (0, r.jsx)(o.m, {
                                text: i.name,
                                position: "right",
                                asContainer: !0,
                                children: (0, r.jsx)(l.D, {
                                    "aria-label": i.name,
                                    onClick: () => {
                                        m(i);
                                    },
                                    children: p,
                                }),
                            }),
                            g ? (0, r.jsx)("hr", { className: f.zQ }) : null,
                        ],
                    },
                    i.id,
                );
            },
            [h, n, m, s, E],
        );
    return 0 === s.length
        ? null
        : (0, r.jsx)("div", {
              className: a()(t, f.iE),
              children: (0, r.jsx)(c.A, {
                  categoryListRef: A,
                  expressionsListRef: g,
                  store: u.LS,
                  categories: s,
                  className: f.p_,
                  renderCategoryListItem: S,
                  rowCount: s.length,
                  categoryHeight: I,
                  listPadding: p,
                  getScrollOffsetForIndex: T,
              }),
          });
}
