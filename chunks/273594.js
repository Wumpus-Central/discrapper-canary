var i = n(477900),
    l = n(582128),
    a = n(503698),
    t = n.n(a),
    d = n(855986),
    r = n(521489),
    o = n(761508),
    c = n(834730),
    u = n(408278),
    m = n(972213),
    f = n(866665),
    p = n(604525),
    x = n(289873),
    h = n(504054),
    j = n(643210),
    g = n(648127),
    b = n(372795),
    v = n(191850),
    C = n(792996),
    E = n(606128),
    N = n(135422);
function k(e) {
    let { projectId: s, sessionId: n, inControl: l, onTakeControl: a, onHandBack: t } = e,
        d = (0, h.HJ)(s, n),
        r = l && "granted" === d,
        o = "denied" === d && !r,
        c = C.intl.string(r ? v.default["7lQQJ5"] : v.default.d5Slrv);
    return (0, i.jsx)(f.m, {
        text: o ? C.intl.string(v.default.Wuww13) : c,
        children: (0, i.jsx)(u.K, {
            icon: p.ExperimentalDirectSelectIcon,
            size: "sm",
            variant: r ? "primary" : "icon-only",
            "aria-label": c,
            "aria-pressed": r,
            disabled: o,
            loading: l && "pending" === d,
            onClick: r ? t : a,
        }),
    });
}
function S(e) {
    let { projectId: s, tab: n, inControl: a, onHandBack: d } = e,
        { session: r } = n,
        [o, u] = l.useState({ state: "connecting", hasFrame: !1 }),
        m = l.useCallback((e, s) => u({ state: e, hasFrame: s }), []),
        { ended: f } = n,
        p = (0, h.HJ)(s, r.id),
        j = a && "granted" === p && !f;
    return (
        l.useEffect(() => {
            a && (f || "denied" === p) && d();
        }, [a, f, p, d]),
        (0, i.jsx)("div", {
            className: N.dZ,
            children: (0, i.jsxs)("div", {
                className: t()(N.dw, j && N._d),
                children: [
                    (0, i.jsx)(b.A, {
                        projectId: s,
                        sessionId: r.id,
                        fps: 15,
                        interactive: j,
                        paused: f,
                        className: t()(N.Ji, f && N.tl),
                        "aria-label": C.intl.formatToPlainString(v.default.rnwqXb, { name: (0, g.i)(r) }),
                        onStateChange: m,
                    }),
                    o.hasFrame || f
                        ? null
                        : (0, i.jsxs)("div", {
                              className: N.Lw,
                              children: [
                                  (0, i.jsx)(x.y, {}),
                                  (0, i.jsx)(c.E, {
                                      variant: "body-sm/medium",
                                      color: "text-muted",
                                      children: C.intl.string(v.default.wuE3Ja),
                                  }),
                              ],
                          }),
                    f
                        ? (0, i.jsx)("div", {
                              className: t()(N.Lw, N.Hl),
                              children: (0, i.jsx)(c.E, {
                                  variant: "body-md/medium",
                                  color: "text-strong",
                                  children: C.intl.string(v.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
        })
    );
}
n.d(
    s,
    {},
    {
        default: function (e) {
            let { transitionState: s, onClose: n, projectId: a, sessionId: f, sessionIds: p } = e,
                x = (0, d.yK)(
                    [j.A],
                    () => {
                        let e = p.flatMap((e) => {
                                let s = j.A.getTab(a, e);
                                return null == s ? [] : [s];
                            }),
                            s = j.A.getTabs(a).filter((e) => !e.ended && !p.includes(e.session.id));
                        return [...e, ...s];
                    },
                    [a, p],
                ),
                [b, w] = l.useState(f),
                [I, y] = l.useState(null),
                T = x.find((e) => e.session.id === b) ?? x[0];
            (null != T && T.session.id !== b && w(T.session.id),
                null != I && I !== T?.session.id && y(null),
                l.useEffect(() => {
                    if (null != I) return ((0, h.EG)(a, I, !0), () => (0, h.EG)(a, I, !1));
                }, [a, I]));
            let H = l.useRef([]);
            return (
                l.useEffect(() => {
                    H.current = x.map((e) => e.session.id);
                }, [x]),
                l.useEffect(
                    () => () => {
                        for (let e of H.current) (0, h.gG)(a, e);
                    },
                    [a],
                ),
                (0, i.jsx)(r.N, {
                    transitionState: s,
                    onClose: n,
                    "aria-label": C.intl.string(v.default.sGsShB),
                    children: (0, i.jsxs)("div", {
                        className: t()(N.lJ, E.T),
                        children: [
                            (0, i.jsxs)("header", {
                                className: N.wx,
                                children: [
                                    (0, i.jsx)(o.V, {
                                        type: "top",
                                        selectedItem: T?.session.id,
                                        onItemSelect: w,
                                        "aria-label": C.intl.string(v.default.UjUsph),
                                        className: N.vR,
                                        children: x.map((e) => {
                                            var s;
                                            let n;
                                            return (0, i.jsx)(
                                                o.V.Item,
                                                {
                                                    id: e.session.id,
                                                    "aria-label":
                                                        ((s = e),
                                                        (n = (0, g.i)(s.session)),
                                                        C.intl.formatToPlainString(
                                                            s.ended ? v.default["OO/He7"] : v.default.FkosiV,
                                                            { title: n },
                                                        )),
                                                    children: (0, i.jsxs)("span", {
                                                        className: N.Gn,
                                                        children: [
                                                            (0, i.jsx)("span", {
                                                                className: t()(N.W9, e.ended && N.oM),
                                                            }),
                                                            (0, i.jsx)(c.E, {
                                                                tag: "span",
                                                                variant: "body-sm/medium",
                                                                color: "none",
                                                                lineClamp: 1,
                                                                className: N.WT,
                                                                children: (0, g.i)(e.session),
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                e.session.id,
                                            );
                                        }),
                                    }),
                                    null == T || T.ended
                                        ? null
                                        : (0, i.jsx)(k, {
                                              projectId: a,
                                              sessionId: T.session.id,
                                              inControl: I === T.session.id,
                                              onTakeControl: () => {
                                                  ((0, h.EG)(a, T.session.id, !0), y(T.session.id));
                                              },
                                              onHandBack: () => y(null),
                                          }),
                                    (0, i.jsx)(u.K, {
                                        onClick: n,
                                        icon: m.XLargeIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": C.intl.string(C.t.cpT0Cq),
                                    }),
                                ],
                            }),
                            null == T
                                ? null
                                : (0, i.jsx)(
                                      S,
                                      {
                                          projectId: a,
                                          tab: T,
                                          inControl: I === T.session.id,
                                          onHandBack: () => y(null),
                                      },
                                      T.session.id,
                                  ),
                        ],
                    }),
                })
            );
        },
    },
);
