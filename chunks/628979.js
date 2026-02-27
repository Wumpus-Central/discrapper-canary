s.d(t, { A: () => A });
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
    p = s(758836),
    E = s(652215),
    S = s(985018),
    f = s(450331);
function A(e) {
    let { handleTransition: t, selectedTab: s, isNarrow: a, hasText: A } = e,
        { searchQuery: h, onSetSearchQuery: m } = (0, b.v)(),
        [C, T] = l.useState(""),
        g = (0, d.uM)(),
        y = (0, o.bG)([c.default], () => c.default.locale),
        O = l.useRef(null),
        [L, x] = l.useState(!1);
    l.useEffect(() => {
        let e = setTimeout(() => {
            m(C);
        }, 250);
        return () => clearTimeout(e);
    }, [C, m]),
        l.useEffect(() => {
            T(h);
        }, [h]),
        l.useEffect(() => {
            x(a && A);
        }, [a, A]);
    let R = l.useCallback(
            (e) => {
                "Enter" === e.key && m(C);
            },
            [C, m],
        ),
        N = l.useCallback(
            (e) => {
                u.default.track(E.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: g?.sessionId,
                    page_section: g?.pageSection,
                    page_category: g?.pageCategory,
                    page_index: g?.pageIndex,
                    page_size: g?.pageSize,
                    cta_name: e,
                    page_type: s,
                });
            },
            [s, g],
        ),
        v = l.useCallback(() => {
            s !== p.G2.CATALOG && t(p.G2.CATALOG), N(p.uY.SEARCH_ICON), x(!0), setTimeout(() => O.current?.focus());
        }, [s, t, N]),
        G = l.useCallback(() => {
            s !== p.G2.CATALOG && t(p.G2.CATALOG), N(p.uY.SEARCH_BAR);
        }, [s, t, N]),
        I = l.useCallback(() => {
            T(""), m(""), N(p.uY.SEARCH_BAR_CLEAR), a && x(!1);
        }, [m, N, a]),
        _ = l.useCallback(() => {
            a && "" === C && x(!1);
        }, [a, C]),
        j = a && !L,
        F = (0, r.jsx)(i.DUT, {
            className: f.qc,
            onClick: v,
            children: (0, r.jsx)(i.$p$, { size: "sm", color: i.LU0.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        P = (0, r.jsx)(i.IWV, {
            size: "sm",
            ref: O,
            onKeyDown: R,
            query: C,
            onChange: T,
            onClear: I,
            onBlur: _,
            placeholder: "en-US" === y ? S.intl.string(S.t.arz34K) : S.intl.string(S.t["hIt/Nm"]),
        }),
        k = { "--custom-search-bar-width": `${p.rr}px`, "--custom-search-bar-icon-width": `${p.Dy}px` };
    return j
        ? (0, r.jsx)("div", { style: k, children: F })
        : (0, r.jsx)("div", {
              className: n()(f.ON, { [f.Nz]: L }),
              style: k,
              children: (0, r.jsx)(i.DUT, { ignoreKeyPress: !0, onClick: G, children: P }),
          });
}
