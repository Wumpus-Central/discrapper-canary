t.d(l, { A: () => p });
var s = t(627968),
    n = t(64700),
    r = t(503698),
    a = t.n(r),
    i = t(311907),
    c = t(397927),
    u = t(497685),
    o = t(291147),
    d = t(380544),
    g = t(247683),
    m = t(821102),
    h = t(970449),
    f = t(652215),
    x = t(650583),
    b = t(844045),
    C = t(985018),
    _ = t(573436);
let j = (e) => e.stopPropagation();
function p(e) {
    let { className: l, onSelectGIF: t } = e,
        {
            query: r,
            resultQuery: p,
            resultItems: y,
            suggestions: k,
        } = (0, i.cf)([m.A], () => ({
            query: m.A.getQuery(),
            resultQuery: m.A.getResultQuery(),
            resultItems: m.A.getResultItems(),
            suggestions: m.A.getSuggestions(),
        })),
        [A, v] = n.useState(null),
        I = n.useRef(null),
        N = n.useCallback((e, l, t) => {
            u.$P(e, l, t), v("" === e ? null : l);
        }, []),
        S = n.useCallback(() => {
            u.Se(), v(null), I.current?.focus();
        }, []);
    n.useEffect(
        () => (
            u.V$(),
            () => {
                u.Se();
            }
        ),
        [],
    ),
        n.useEffect(() => {
            if (null == A) return;
            let e = (e) => {
                e.key === x.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), S());
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        }, [A, S]);
    let E = n.useCallback(
            (e) => {
                N(e, f.dD.SEARCH);
            },
            [N],
        ),
        U = n.useCallback(
            (e) => {
                u.Se(), N(e, f.dD.SEARCH_SUGGESTION, !0);
            },
            [N],
        ),
        T = n.useCallback(
            (e) => {
                N(e, f.dD.TRENDING_CATEGORY, !0), I.current?.focus();
            },
            [N],
        ),
        G = (0, o.w)((0, d.cf)()),
        R = null != A;
    return (0, s.jsxs)(c.sqX, {
        className: a()(_.kL, l),
        onClick: j,
        "aria-label": C.intl.string(b.default.yP0hhq),
        children: [
            (0, s.jsx)("div", {
                className: _.wx,
                children: (0, s.jsxs)("div", {
                    className: _.U1,
                    children: [
                        R
                            ? (0, s.jsx)(c.DUT, {
                                  onClick: S,
                                  className: _.Gv,
                                  "aria-label": C.intl.string(C.t["13/7kX"]),
                                  children: (0, s.jsx)(c.rJJ, { size: "md", color: "currentColor" }),
                              })
                            : null,
                        (0, s.jsx)(c.IWV, {
                            query: r,
                            onChange: E,
                            onClear: S,
                            placeholder: G,
                            "aria-label": G,
                            ref: I,
                            autoFocus: !0,
                        }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: _.Qs,
                children:
                    null == A
                        ? (0, s.jsx)(h.A, { onSelectCategory: T })
                        : (0, s.jsx)(g.Ay, {
                              data: y,
                              onSelectGIF: t,
                              resultType: A,
                              resultQuery: p,
                              query: r,
                              searchOffset: 0,
                              searchLimit: null,
                              searchTotalResults: y.length,
                              suggestions: k,
                              onSelectSuggestion: U,
                          }),
            }),
        ],
    });
}
