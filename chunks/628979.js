"use strict";
s.d(t, { A: () => f });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(311907),
    o = s(397927),
    c = s(773669),
    d = s(954571),
    u = s(440938),
    g = s(365491),
    m = s(758836),
    _ = s(652215),
    h = s(985018),
    p = s(450331);
function f(e) {
    let { handleTransition: t, selectedTab: s, isNarrow: l, hasText: f } = e,
        { searchQuery: E, onSetSearchQuery: C } = (0, g.v)(),
        [b, A] = r.useState(""),
        x = (0, u.uM)(),
        S = (0, i.bG)([c.default], () => c.default.locale),
        v = r.useRef(null),
        [L, T] = r.useState(!1);
    r.useEffect(() => {
        let e = setTimeout(() => {
            C(b);
        }, 250);
        return () => clearTimeout(e);
    }, [b, C]),
        r.useEffect(() => {
            A(E);
        }, [E]),
        r.useEffect(() => {
            T(l && f);
        }, [l, f]);
    let I = r.useCallback(
            (e) => {
                "Enter" === e.key && C(b);
            },
            [b, C],
        ),
        O = r.useCallback(
            (e) => {
                d.default.track(_.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: x?.sessionId,
                    page_section: x?.pageSection,
                    page_category: x?.pageCategory,
                    page_index: x?.pageIndex,
                    page_size: x?.pageSize,
                    cta_name: e,
                    page_type: s,
                });
            },
            [s, x],
        ),
        y = r.useCallback(() => {
            s !== m.G2.CATALOG && t(m.G2.CATALOG), O(m.uY.SEARCH_ICON), T(!0), setTimeout(() => v.current?.focus());
        }, [s, t, O]),
        j = r.useCallback(() => {
            s !== m.G2.CATALOG && t(m.G2.CATALOG), O(m.uY.SEARCH_BAR);
        }, [s, t, O]),
        N = r.useCallback(() => {
            A(""), C(""), O(m.uY.SEARCH_BAR_CLEAR), l && T(!1);
        }, [C, O, l]),
        k = r.useCallback(() => {
            l && "" === b && T(!1);
        }, [l, b]),
        R = l && !L,
        B = (0, n.jsx)(o.DUT, {
            className: p.qc,
            onClick: y,
            children: (0, n.jsx)(o.$p$, { size: "sm", color: o.LU0.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        P = (0, n.jsx)(o.IWV, {
            size: "sm",
            ref: v,
            onKeyDown: I,
            query: b,
            onChange: A,
            onClear: N,
            onBlur: k,
            placeholder: "en-US" === S ? h.intl.string(h.t.arz34K) : h.intl.string(h.t["hIt/Nm"]),
        }),
        M = { "--custom-search-bar-width": `${m.rr}px`, "--custom-search-bar-icon-width": `${m.Dy}px` };
    if (R) return (0, n.jsx)("div", { style: M, children: B });
    let D = a()(p.ON, { [p.Nz]: L });
    return L
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", { className: p.j8, style: M, children: B }),
                  (0, n.jsx)(o.DUT, { className: D, style: M, onClick: j, ignoreKeyPress: !0, children: P }),
              ],
          })
        : (0, n.jsx)("div", {
              className: D,
              style: M,
              children: (0, n.jsx)(o.DUT, { ignoreKeyPress: !0, onClick: j, children: P }),
          });
}
