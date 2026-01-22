l.d(t, {
    A: () => h,
}),
    l(896048);
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    i = l(311907),
    o = l(397927),
    c = l(773669),
    u = l(954571),
    d = l(440938),
    f = l(365491),
    b = l(758836),
    g = l(652215),
    p = l(985018),
    m = l(450331);

function h(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: s, hasText: h } = e,
        { searchQuery: E, onSetSearchQuery: v } = (0, f.v)(),
        [A, x] = r.useState(""),
        S = (0, d.uM)(),
        C = (0, i.bG)([c.default], () => c.default.locale),
        O = r.useRef(null),
        [_, y] = r.useState(!1);
    r.useEffect(() => {
        let e = setTimeout(() => {
            v(A);
        }, 250);
        return () => clearTimeout(e);
    }, [A, v]),
        r.useEffect(() => {
            x(E);
        }, [E]),
        r.useEffect(() => {
            y(s && h);
        }, [s, h]);
    let j = r.useCallback(
            (e) => {
                "Enter" === e.key && v(A);
            },
            [A, v],
        ),
        L = r.useCallback(
            (e) => {
                u.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == S ? void 0 : S.sessionId,
                    page_section: null == S ? void 0 : S.pageSection,
                    page_category: null == S ? void 0 : S.pageCategory,
                    page_index: null == S ? void 0 : S.pageIndex,
                    page_size: null == S ? void 0 : S.pageSize,
                    cta_name: e,
                    page_type: l,
                });
            },
            [l, S],
        ),
        T = r.useCallback(() => {
            l !== b.G2.CATALOG && t(b.G2.CATALOG),
                L(b.uY.SEARCH_ICON),
                y(!0),
                setTimeout(() => {
                    var e;
                    return null == (e = O.current) ? void 0 : e.focus();
                });
        }, [l, t, L]),
        I = r.useCallback(() => {
            l !== b.G2.CATALOG && t(b.G2.CATALOG), L(b.uY.SEARCH_BAR);
        }, [l, t, L]),
        N = r.useCallback(() => {
            x(""), v(""), L(b.uY.SEARCH_BAR_CLEAR), s && y(!1);
        }, [v, L, s]),
        k = r.useCallback(() => {
            s && "" === A && y(!1);
        }, [s, A]),
        R = s && !_,
        P = (0, n.jsx)(o.DUT, {
            className: m.qc,
            onClick: T,
            children: (0, n.jsx)(o.$p$, {
                size: "sm",
                color: o.LU0.colors.INTERACTIVE_ICON_DEFAULT,
            }),
        }),
        D = (0, n.jsx)(o.IWV, {
            size: "sm",
            ref: O,
            onKeyDown: j,
            query: A,
            onChange: x,
            onClear: N,
            onBlur: k,
            placeholder: "en-US" === C ? p.intl.string(p.t.arz34K) : p.intl.string(p.t["hIt/Nm"]),
        }),
        w = {
            "--custom-search-bar-width": "".concat(b.rr, "px"),
            "--custom-search-bar-icon-width": "".concat(b.Dy, "px"),
        };
    if (R)
        return (0, n.jsx)("div", {
            style: w,
            children: P,
        });
    let B = a()(m.ON, {
        [m.Nz]: _,
    });
    return _
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", {
                      className: m.j8,
                      style: w,
                      children: P,
                  }),
                  (0, n.jsx)(o.DUT, {
                      className: B,
                      style: w,
                      onClick: I,
                      ignoreKeyPress: !0,
                      children: D,
                  }),
              ],
          })
        : (0, n.jsx)("div", {
              className: B,
              style: w,
              children: (0, n.jsx)(o.DUT, {
                  ignoreKeyPress: !0,
                  onClick: I,
                  children: D,
              }),
          });
}
