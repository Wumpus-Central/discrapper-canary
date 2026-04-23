r.d(t, { A: () => S });
var n = r(627968),
    s = r(64700),
    l = r(503698),
    a = r.n(l),
    o = r(311907),
    i = r(939249),
    c = r(7689),
    d = r(827734),
    u = r(892547),
    _ = r(773669),
    b = r(954571),
    p = r(440938),
    m = r(365491),
    f = r(758836),
    C = r(652215),
    g = r(985018),
    h = r(113960);
function S(e) {
    let { handleTransition: t, selectedTab: r, isNarrow: l, hasText: S } = e,
        { searchQuery: A, onSetSearchQuery: E } = (0, m.v)(),
        [x, y] = s.useState(""),
        I = (0, p.uM)(),
        T = (0, o.bG)([_.default], () => _.default.locale),
        v = s.useRef(null),
        [O, L] = s.useState(!1);
    s.useEffect(() => {
        let e = setTimeout(() => {
            E(x);
        }, 250);
        return () => clearTimeout(e);
    }, [x, E]),
        s.useEffect(() => {
            y(A);
        }, [A]),
        s.useEffect(() => {
            L(l && S);
        }, [l, S]);
    let R = s.useCallback(
            (e) => {
                "Enter" === e.key && E(x);
            },
            [x, E],
        ),
        w = s.useCallback(
            (e) => {
                b.default.track(C.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: I?.sessionId,
                    page_section: I?.pageSection,
                    page_category: I?.pageCategory,
                    page_index: I?.pageIndex,
                    page_size: I?.pageSize,
                    cta_name: e,
                    page_type: r,
                });
            },
            [r, I],
        ),
        k = s.useCallback(() => {
            r !== f.G2.CATALOG && t(f.G2.CATALOG), w(f.uY.SEARCH_ICON), L(!0), setTimeout(() => v.current?.focus());
        }, [r, t, w]),
        j = s.useCallback(() => {
            r !== f.G2.CATALOG && t(f.G2.CATALOG), w(f.uY.SEARCH_BAR);
        }, [r, t, w]),
        G = s.useCallback(() => {
            y(""), E(""), w(f.uY.SEARCH_BAR_CLEAR), l && L(!1);
        }, [E, w, l]),
        N = s.useCallback(() => {
            l && "" === x && L(!1);
        }, [l, x]),
        P = l && !O,
        F = (0, n.jsx)(i.D, {
            className: h.qc,
            onClick: k,
            children: (0, n.jsx)(c.$, { size: "sm", color: d.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        M = (0, n.jsx)(u.I, {
            size: "sm",
            ref: v,
            onKeyDown: R,
            query: x,
            onChange: y,
            onClear: G,
            onBlur: N,
            placeholder: "en-US" === T ? g.intl.string(g.t.arz34K) : g.intl.string(g.t["hIt/Nm"]),
        }),
        B = { "--custom-search-bar-width": `${f.rr}px`, "--custom-search-bar-icon-width": `${f.Dy}px` };
    return P
        ? (0, n.jsx)("div", { style: B, children: F })
        : (0, n.jsx)("div", {
              className: a()(h.ON, { [h.Nz]: O }),
              style: B,
              children: (0, n.jsx)(i.D, { ignoreKeyPress: !0, onClick: j, children: M }),
          });
}
