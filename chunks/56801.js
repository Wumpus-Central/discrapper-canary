n.d(t, { Z: () => E });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(481060),
    c = n(806966),
    u = n(254494),
    d = n(895924),
    f = n(826298),
    _ = n(610781);
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
            filteredSectionId: b,
            onSectionClick: y,
            applicationCommandListRef: O,
        } = e,
        v = i.useRef(null),
        I = i.useCallback(
            (e, t) => {
                var n;
                let r = 2 * m;
                return (null == (n = a[t + 1]) ? void 0 : n.type) === d.Qi.BUILT_IN && (r += g), h + r;
            },
            [a],
        ),
        T = i.useCallback(
            (e, t) => {
                var n;
                return t
                    ? (null == (n = a[e + 1]) ? void 0 : n.type) === d.Qi.BUILT_IN
                        ? 0
                        : 2 * m
                    : 0 === e
                      ? 0
                      : 2 * m;
            },
            [a],
        ),
        S = i.useCallback(
            (e, t) => {
                let i = a[t];
                if (null == i) return;
                let o = (0, f.ky)(i),
                    c = i.type === d.Qi.BUILT_IN ? m : 0,
                    u = h - 2 * c,
                    p = (0, r.jsx)(o, {
                        channel: n,
                        section: i,
                        isSelected: null != b ? i.id === b : E === t,
                        padding: c,
                        width: u,
                        height: u,
                        selectable: !0,
                    }),
                    g = i.type !== d.Qi.BUILT_IN && t < a.length - 1 && a[t + 1].type === d.Qi.BUILT_IN;
                return (0, r.jsxs)(
                    "div",
                    {
                        className: _.section,
                        children: [
                            (0, r.jsx)(s.u, {
                                text: i.name,
                                position: "right",
                                asContainer: !0,
                                children: (0, r.jsx)(l.P3F, {
                                    "aria-label": i.name,
                                    onClick: () => {
                                        y(i);
                                    },
                                    children: p,
                                }),
                            }),
                            g ? (0, r.jsx)("hr", { className: _.builtInSeparator }) : null,
                        ],
                    },
                    i.id,
                );
            },
            [E, n, y, a, b],
        );
    return 0 === a.length
        ? null
        : (0, r.jsx)("div", {
              className: o()(t, _.wrapper),
              children: (0, r.jsx)(u.Z, {
                  categoryListRef: v,
                  expressionsListRef: O,
                  store: c.Xn,
                  categories: a,
                  className: _.list,
                  renderCategoryListItem: S,
                  rowCount: a.length,
                  categoryHeight: I,
                  listPadding: p,
                  getScrollOffsetForIndex: T,
              }),
          });
}
