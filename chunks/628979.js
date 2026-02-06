s.d(t, { A: () => h });
var r = s(627968),
    l = s(64700),
    a = s(503698),
    n = s.n(a),
    o = s(311907),
    i = s(397927),
    c = s(773669),
    u = s(954571),
    d = s(440938),
    b = s(365491),
    S = s(758836),
    E = s(652215),
    p = s(985018),
    f = s(450331);
function h(e) {
    let { handleTransition: t, selectedTab: s, isNarrow: a, hasText: h } = e,
        { searchQuery: m, onSetSearchQuery: A } = (0, b.v)(),
        [C, g] = l.useState(""),
        T = (0, d.uM)(),
        y = (0, o.bG)([c.default], () => c.default.locale),
        O = l.useRef(null),
        [R, L] = l.useState(!1);
    l.useEffect(() => {
        let e = setTimeout(() => {
            A(C);
        }, 250);
        return () => clearTimeout(e);
    }, [C, A]),
        l.useEffect(() => {
            g(m);
        }, [m]),
        l.useEffect(() => {
            L(a && h);
        }, [a, h]);
    let x = l.useCallback(
            (e) => {
                "Enter" === e.key && A(C);
            },
            [C, A],
        ),
        N = l.useCallback(
            (e) => {
                u.default.track(E.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: T?.sessionId,
                    page_section: T?.pageSection,
                    page_category: T?.pageCategory,
                    page_index: T?.pageIndex,
                    page_size: T?.pageSize,
                    cta_name: e,
                    page_type: s,
                });
            },
            [s, T],
        ),
        v = l.useCallback(() => {
            s !== S.G2.CATALOG && t(S.G2.CATALOG), N(S.uY.SEARCH_ICON), L(!0), setTimeout(() => O.current?.focus());
        }, [s, t, N]),
        _ = l.useCallback(() => {
            s !== S.G2.CATALOG && t(S.G2.CATALOG), N(S.uY.SEARCH_BAR);
        }, [s, t, N]),
        G = l.useCallback(() => {
            g(""), A(""), N(S.uY.SEARCH_BAR_CLEAR), a && L(!1);
        }, [A, N, a]),
        I = l.useCallback(() => {
            a && "" === C && L(!1);
        }, [a, C]),
        j = a && !R,
        w = (0, r.jsx)(i.DUT, {
            className: f.qc,
            onClick: v,
            children: (0, r.jsx)(i.$p$, { size: "sm", color: i.LU0.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        D = (0, r.jsx)(i.IWV, {
            size: "sm",
            ref: O,
            onKeyDown: x,
            query: C,
            onChange: g,
            onClear: G,
            onBlur: I,
            placeholder: "en-US" === y ? p.intl.string(p.t.arz34K) : p.intl.string(p.t["hIt/Nm"]),
        }),
        P = { "--custom-search-bar-width": `${S.rr}px`, "--custom-search-bar-icon-width": `${S.Dy}px` };
    if (j) return (0, r.jsx)("div", { style: P, children: w });
    let F = n()(f.ON, { [f.Nz]: R });
    return R
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", { className: f.j8, style: P, children: w }),
                  (0, r.jsx)(i.DUT, { className: F, style: P, onClick: _, ignoreKeyPress: !0, children: D }),
              ],
          })
        : (0, r.jsx)("div", {
              className: F,
              style: P,
              children: (0, r.jsx)(i.DUT, { ignoreKeyPress: !0, onClick: _, children: D }),
          });
}
