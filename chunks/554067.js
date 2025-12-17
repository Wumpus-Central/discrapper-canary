n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    i = n(481060),
    c = n(706454),
    u = n(626135),
    d = n(381585),
    f = n(501431),
    g = n(215023),
    b = n(981631),
    p = n(388032),
    m = n(973638);
function h(e) {
    let { handleTransition: t, selectedTab: n, isNarrow: a, hasText: h } = e,
        { searchQuery: C, onSetSearchQuery: E } = (0, f.S)(),
        [v, S] = l.useState(""),
        _ = (0, d.sp)(),
        x = (0, o.e7)([c.default], () => c.default.locale),
        O = l.useRef(null),
        [y, k] = l.useState(!1);
    l.useEffect(() => {
        let e = setTimeout(() => {
            E(v);
        }, 250);
        return () => clearTimeout(e);
    }, [v, E]),
        l.useEffect(() => {
            S(C);
        }, [C]),
        l.useEffect(() => {
            k(a && h);
        }, [a, h]);
    let T = l.useCallback(
            (e) => {
                "Enter" === e.key && E(v);
            },
            [v, E],
        ),
        j = l.useCallback(
            (e) => {
                u.default.track(b.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == _ ? void 0 : _.sessionId,
                    page_section: null == _ ? void 0 : _.pageSection,
                    page_category: null == _ ? void 0 : _.pageCategory,
                    page_index: null == _ ? void 0 : _.pageIndex,
                    page_size: null == _ ? void 0 : _.pageSize,
                    cta_name: e,
                    page_type: n,
                });
            },
            [n, _],
        ),
        L = l.useCallback(() => {
            n !== g.AW.CATALOG && t(g.AW.CATALOG),
                j(g.Dh.SEARCH_ICON),
                k(!0),
                setTimeout(() => {
                    var e;
                    return null == (e = O.current) ? void 0 : e.focus();
                });
        }, [n, t, j]),
        I = l.useCallback(() => {
            n !== g.AW.CATALOG && t(g.AW.CATALOG), j(g.Dh.SEARCH_BAR);
        }, [n, t, j]),
        A = l.useCallback(() => {
            S(""), E(""), j(g.Dh.SEARCH_BAR_CLEAR), a && k(!1);
        }, [E, j, a]),
        B = l.useCallback(() => {
            a && "" === v && k(!1);
        }, [a, v]),
        N = a && !y,
        R = (0, r.jsx)(i.P3F, {
            className: m.searchIcon,
            onClick: L,
            children: (0, r.jsx)(i._Ve, {
                size: "sm",
                color: i.TVs.colors.INTERACTIVE_ICON_DEFAULT,
            }),
        }),
        P = (0, r.jsx)(i.E1j, {
            size: "sm",
            ref: O,
            onKeyDown: T,
            query: v,
            onChange: S,
            onClear: A,
            onBlur: B,
            placeholder: "en-US" === x ? p.intl.string(p.t.arz34K) : p.intl.string(p.t["hIt/Nm"]),
        }),
        w = {
            "--custom-search-bar-width": "".concat(g.Cs, "px"),
            "--custom-search-bar-icon-width": "".concat(g.wf, "px"),
        };
    if (N)
        return (0, r.jsx)("div", {
            style: w,
            children: R,
        });
    let Z = s()(m.searchBar, { [m.searchFloating]: y });
    return y
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      className: m.searchIconContainerHidden,
                      style: w,
                      children: R,
                  }),
                  (0, r.jsx)(i.P3F, {
                      className: Z,
                      style: w,
                      onClick: I,
                      ignoreKeyPress: !0,
                      children: P,
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: Z,
              style: w,
              children: (0, r.jsx)(i.P3F, {
                  ignoreKeyPress: !0,
                  onClick: I,
                  children: P,
              }),
          });
}
