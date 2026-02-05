"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(397927),
    u = n(850992),
    c = n(802019),
    d = n(392054),
    _ = n(664929),
    f = n(681755);
let p = [16, 8, 8, 8],
    h = 32,
    m = 4,
    g = 8;
function E(e) {
    let {
            className: t,
            channel: n,
            sections: a,
            activeCategoryIndex: E,
            filteredSectionId: A,
            onSectionClick: I,
            applicationCommandListRef: T,
        } = e,
        y = i.useRef(null),
        S = i.useCallback(
            (e, t) => {
                let n = 2 * m;
                return a[t + 1]?.type === d.Hf.BUILT_IN && (n += g), h + n;
            },
            [a],
        ),
        v = i.useCallback((e, t) => (t ? (a[e + 1]?.type === d.Hf.BUILT_IN ? 0 : 2 * m) : 0 === e ? 0 : 2 * m), [a]),
        C = i.useCallback(
            (e, t) => {
                let i = a[t];
                if (null == i) return;
                let s = (0, _.Rg)(i),
                    u = i.type === d.Hf.BUILT_IN ? m : 0,
                    c = h - 2 * u,
                    p = (0, r.jsx)(s, {
                        channel: n,
                        section: i,
                        isSelected: null != A ? i.id === A : E === t,
                        padding: u,
                        width: c,
                        height: c,
                        selectable: !0,
                    }),
                    g = i.type !== d.Hf.BUILT_IN && t < a.length - 1 && a[t + 1].type === d.Hf.BUILT_IN;
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
                            g ? (0, r.jsx)("hr", { className: f.zQ }) : null,
                        ],
                    },
                    i.id,
                );
            },
            [E, n, I, a, A],
        );
    return 0 === a.length
        ? null
        : (0, r.jsx)("div", {
              className: s()(t, f.iE),
              children: (0, r.jsx)(c.A, {
                  categoryListRef: y,
                  expressionsListRef: T,
                  store: u.LS,
                  categories: a,
                  className: f.p_,
                  renderCategoryListItem: C,
                  rowCount: a.length,
                  categoryHeight: S,
                  listPadding: p,
                  getScrollOffsetForIndex: v,
              }),
          });
}
