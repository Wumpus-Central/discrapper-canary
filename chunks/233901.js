t.d(l, { A: () => A });
var s = t(627968),
    n = t(64700),
    r = t(503698),
    a = t.n(r),
    i = t(311907),
    c = t(890856),
    u = t(939249),
    o = t(477155),
    d = t(892547),
    g = t(497685),
    m = t(291147),
    h = t(380544),
    f = t(247683),
    x = t(821102),
    b = t(970449),
    C = t(652215),
    _ = t(650583),
    j = t(844045),
    p = t(985018),
    y = t(573436);
let k = (e) => e.stopPropagation();
function A(e) {
    let { className: l, onSelectGIF: t } = e,
        {
            query: r,
            resultQuery: A,
            resultItems: v,
            suggestions: I,
        } = (0, i.cf)([x.A], () => ({
            query: x.A.getQuery(),
            resultQuery: x.A.getResultQuery(),
            resultItems: x.A.getResultItems(),
            suggestions: x.A.getSuggestions(),
        })),
        [N, E] = n.useState(null),
        S = n.useRef(null),
        G = n.useCallback((e, l, t) => {
            g.$P(e, l, t), E("" === e ? null : l);
        }, []),
        R = n.useCallback(() => {
            g.Se(), E(null), S.current?.focus();
        }, []);
    n.useEffect(
        () => (
            g.V$(),
            () => {
                g.Se();
            }
        ),
        [],
    ),
        n.useEffect(() => {
            if (null == N) return;
            let e = (e) => {
                e.key === _.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), R());
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        }, [N, R]);
    let w = n.useCallback(
            (e) => {
                G(e, C.dD.SEARCH);
            },
            [G],
        ),
        H = n.useCallback(
            (e) => {
                g.Se(), G(e, C.dD.SEARCH_SUGGESTION, !0);
            },
            [G],
        ),
        U = n.useCallback(
            (e) => {
                G(e, C.dD.TRENDING_CATEGORY, !0), S.current?.focus();
            },
            [G],
        ),
        D = (0, m.w)((0, h.cf)()),
        L = null != N;
    return (0, s.jsxs)(c.s, {
        className: a()(y.kL, l),
        onClick: k,
        "aria-label": p.intl.string(j.default.yP0hhq),
        children: [
            (0, s.jsx)("div", {
                className: y.wx,
                children: (0, s.jsxs)("div", {
                    className: y.U1,
                    children: [
                        L
                            ? (0, s.jsx)(u.D, {
                                  onClick: R,
                                  className: y.Gv,
                                  "aria-label": p.intl.string(p.t["13/7kX"]),
                                  children: (0, s.jsx)(o.r, { size: "md", color: "currentColor" }),
                              })
                            : null,
                        (0, s.jsx)(d.I, {
                            query: r,
                            onChange: w,
                            onClear: R,
                            placeholder: D,
                            "aria-label": D,
                            ref: S,
                            autoFocus: !0,
                        }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: y.Qs,
                children:
                    null == N
                        ? (0, s.jsx)(b.A, { onSelectCategory: U })
                        : (0, s.jsx)(f.Ay, {
                              data: v,
                              onSelectGIF: t,
                              resultType: N,
                              resultQuery: A,
                              query: r,
                              searchOffset: 0,
                              searchLimit: null,
                              searchTotalResults: v.length,
                              suggestions: I,
                              onSelectSuggestion: H,
                          }),
            }),
        ],
    });
}
