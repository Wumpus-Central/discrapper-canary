n.d(t, { Z: () => E });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(481060),
    c = n(806966),
    u = n(254494),
    d = n(895924),
    f = n(826298),
    p = n(536349);
let _ = [16, 8, 8, 8],
    m = 32,
    h = 4,
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
        S = i.useCallback(
            (e, t) => {
                var n;
                let r = 2 * h;
                return (null == (n = a[t + 1]) ? void 0 : n.type) === d.Qi.BUILT_IN && (r += g), m + r;
            },
            [a],
        ),
        I = i.useCallback(
            (e, t) => {
                var n;
                return t
                    ? (null == (n = a[e + 1]) ? void 0 : n.type) === d.Qi.BUILT_IN
                        ? 0
                        : 2 * h
                    : 0 === e
                      ? 0
                      : 2 * h;
            },
            [a],
        ),
        T = i.useCallback(
            (e, t) => {
                let i = a[t];
                if (null == i) return;
                let o = (0, f.ky)(i),
                    c = i.type === d.Qi.BUILT_IN ? h : 0,
                    u = m - 2 * c,
                    _ = (0, r.jsx)(o, {
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
                        className: p.section,
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
                                    children: _,
                                }),
                            }),
                            g ? (0, r.jsx)("hr", { className: p.builtInSeparator }) : null,
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
              className: o()(t, p.wrapper),
              children: (0, r.jsx)(u.Z, {
                  categoryListRef: v,
                  expressionsListRef: O,
                  store: c.Xn,
                  categories: a,
                  className: p.list,
                  renderCategoryListItem: T,
                  rowCount: a.length,
                  categoryHeight: S,
                  listPadding: _,
                  getScrollOffsetForIndex: I,
              }),
          });
}
