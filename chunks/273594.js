n.d(s, { default: () => E });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    t = n.n(a),
    d = n(17928),
    r = n(521489),
    o = n(761508),
    c = n(834730),
    u = n(408278),
    m = n(972213),
    f = n(866665),
    p = n(604525),
    x = n(289873),
    h = n(546772),
    j = n(643210),
    g = n(648127),
    b = n(372795),
    v = n(809526),
    C = n(105292),
    N = n(606128),
    k = n(135422);
function E(e) {
    let { transitionState: s, onClose: n, projectId: a, sessionId: f, sessionIds: p } = e,
        x = (0, d.yK)(
            [j.A],
            () => [
                ...p.flatMap((e) => {
                    let s = j.A.getTab(a, e);
                    return null == s ? [] : [s];
                }),
                ...j.A.getTabs(a).filter((e) => !e.ended && !p.includes(e.session.id)),
            ],
            [a, p],
        ),
        [b, E] = l.useState(f),
        [y, I] = l.useState(null),
        T = x.find((e) => e.session.id === b) ?? x[0];
    (null != T && T.session.id !== b && E(T.session.id),
        null != y && y !== T?.session.id && I(null),
        l.useEffect(() => {
            if (null != y) return ((0, h.EG)(a, y, !0), () => (0, h.EG)(a, y, !1));
        }, [a, y]));
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
                className: t()(k.lJ, N.T),
                children: [
                    (0, i.jsxs)("header", {
                        className: k.wx,
                        children: [
                            (0, i.jsx)(o.V, {
                                type: "top",
                                selectedItem: T?.session.id,
                                onItemSelect: E,
                                "aria-label": C.intl.string(v.default.UjUsph),
                                className: k.vR,
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
                                                className: k.Gn,
                                                children: [
                                                    (0, i.jsx)("span", { className: t()(k.W9, e.ended && k.oM) }),
                                                    (0, i.jsx)(c.E, {
                                                        tag: "span",
                                                        variant: "body-sm/medium",
                                                        color: "none",
                                                        lineClamp: 1,
                                                        className: k.WT,
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
                                : (0, i.jsx)(w, {
                                      projectId: a,
                                      sessionId: T.session.id,
                                      inControl: y === T.session.id,
                                      onTakeControl: () => {
                                          ((0, h.EG)(a, T.session.id, !0), I(T.session.id));
                                      },
                                      onHandBack: () => I(null),
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
                              { projectId: a, tab: T, inControl: y === T.session.id, onHandBack: () => I(null) },
                              T.session.id,
                          ),
                ],
            }),
        })
    );
}
function w(e) {
    let { projectId: s, sessionId: n, inControl: l, onTakeControl: a, onHandBack: t } = e,
        d = (0, h.HJ)(s, n),
        r = l && "granted" === d,
        o = "denied" === d && !r,
        c = C.intl.string(r ? v.default["7lQQJ5"] : v.default.d5Slrv);
    return (0, i.jsx)(f.m, {
        text: o ? C.intl.string(v.default.Wuww13) : c,
        children: (0, i.jsx)(u.K, {
            icon: p.x,
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
            className: k.dZ,
            children: (0, i.jsxs)("div", {
                className: t()(k.dw, j && k._d),
                children: [
                    (0, i.jsx)(b.A, {
                        projectId: s,
                        sessionId: r.id,
                        fps: 15,
                        interactive: j,
                        paused: f,
                        className: t()(k.Ji, f && k.tl),
                        "aria-label": C.intl.formatToPlainString(v.default.rnwqXb, { name: (0, g.i)(r) }),
                        onStateChange: m,
                    }),
                    o.hasFrame || f
                        ? null
                        : (0, i.jsxs)("div", {
                              className: k.Lw,
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
                              className: t()(k.Lw, k.Hl),
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
