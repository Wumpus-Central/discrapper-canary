n.d(s, { default: () => k });
var i = n(477900),
    l = n(582128),
    t = n(503698),
    a = n.n(t),
    d = n(17928),
    r = n(521489),
    o = n(761508),
    c = n(834730),
    u = n(408278),
    m = n(972213),
    f = n(866665),
    x = n(604525),
    p = n(289873),
    h = n(546772),
    j = n(643210),
    g = n(648127),
    v = n(372795),
    b = n(261425),
    C = n(660183),
    N = n(135422);
function k(e) {
    let { transitionState: s, onClose: n, projectId: t, sessionId: f, sessionIds: x } = e,
        p = (0, d.yK)(
            [j.A],
            () => [
                ...x.flatMap((e) => {
                    let s = j.A.getTab(t, e);
                    return null == s ? [] : [s];
                }),
                ...j.A.getTabs(t).filter((e) => !e.ended && !x.includes(e.session.id)),
            ],
            [t, x],
        ),
        [v, k] = l.useState(f),
        [S, I] = l.useState(null),
        H = p.find((e) => e.session.id === v) ?? p[0];
    (null != H && H.session.id !== v && k(H.session.id),
        null != S && S !== H?.session.id && I(null),
        l.useEffect(() => {
            if (null != S) return ((0, h.EG)(t, S, !0), () => (0, h.EG)(t, S, !1));
        }, [t, S]));
    let T = l.useRef([]);
    return (
        l.useEffect(() => {
            T.current = p.map((e) => e.session.id);
        }, [p]),
        l.useEffect(
            () => () => {
                for (let e of T.current) (0, h.gG)(t, e);
            },
            [t],
        ),
        (0, i.jsx)(r.N, {
            transitionState: s,
            onClose: n,
            "aria-label": C.intl.string(b.default.sGsShB),
            children: (0, i.jsxs)("div", {
                className: N.lJ,
                children: [
                    (0, i.jsxs)("header", {
                        className: N.wx,
                        children: [
                            (0, i.jsx)(o.V, {
                                type: "top",
                                selectedItem: H?.session.id,
                                onItemSelect: k,
                                "aria-label": C.intl.string(b.default.UjUsph),
                                className: N.vR,
                                children: p.map((e) => {
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
                                                    s.ended ? b.default["OO/He7"] : b.default.FkosiV,
                                                    { title: n },
                                                )),
                                            children: (0, i.jsxs)("span", {
                                                className: N.Gn,
                                                children: [
                                                    (0, i.jsx)("span", { className: a()(N.W9, e.ended && N.oM) }),
                                                    (0, i.jsx)(c.E, {
                                                        tag: "span",
                                                        variant: "text-sm/medium",
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
                            null == H || H.ended
                                ? null
                                : (0, i.jsx)(E, {
                                      projectId: t,
                                      sessionId: H.session.id,
                                      inControl: S === H.session.id,
                                      onTakeControl: () => {
                                          ((0, h.EG)(t, H.session.id, !0), I(H.session.id));
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
                    null == H
                        ? null
                        : (0, i.jsx)(
                              w,
                              { projectId: t, tab: H, inControl: S === H.session.id, onHandBack: () => I(null) },
                              H.session.id,
                          ),
                ],
            }),
        })
    );
}
function E(e) {
    let { projectId: s, sessionId: n, inControl: l, onTakeControl: t, onHandBack: a } = e,
        d = (0, h.HJ)(s, n),
        r = l && "granted" === d,
        o = "denied" === d && !r,
        c = C.intl.string(r ? b.default["7lQQJ5"] : b.default.d5Slrv);
    return (0, i.jsx)(f.m, {
        text: o ? C.intl.string(b.default.Wuww13) : c,
        children: (0, i.jsx)(u.K, {
            icon: x.x,
            size: "sm",
            variant: r ? "primary" : "icon-only",
            "aria-label": c,
            "aria-pressed": r,
            disabled: o,
            loading: l && "pending" === d,
            onClick: r ? a : t,
        }),
    });
}
function w(e) {
    let { projectId: s, tab: n, inControl: t, onHandBack: d } = e,
        { session: r } = n,
        [o, u] = l.useState({ state: "connecting", hasFrame: !1 }),
        m = l.useCallback((e, s) => u({ state: e, hasFrame: s }), []),
        { ended: f } = n,
        x = (0, h.HJ)(s, r.id),
        j = t && "granted" === x && !f;
    return (
        l.useEffect(() => {
            t && (f || "denied" === x) && d();
        }, [t, f, x, d]),
        (0, i.jsx)("div", {
            className: N.dZ,
            children: (0, i.jsxs)("div", {
                className: a()(N.dw, j && N._d),
                children: [
                    (0, i.jsx)(v.A, {
                        projectId: s,
                        sessionId: r.id,
                        fps: 15,
                        interactive: j,
                        paused: f,
                        className: a()(N.Ji, f && N.tl),
                        "aria-label": C.intl.formatToPlainString(b.default.rnwqXb, { name: (0, g.i)(r) }),
                        onStateChange: m,
                    }),
                    o.hasFrame || f
                        ? null
                        : (0, i.jsxs)("div", {
                              className: N.Lw,
                              children: [
                                  (0, i.jsx)(p.y, {}),
                                  (0, i.jsx)(c.E, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: C.intl.string(b.default.wuE3Ja),
                                  }),
                              ],
                          }),
                    f
                        ? (0, i.jsx)("div", {
                              className: a()(N.Lw, N.Hl),
                              children: (0, i.jsx)(c.E, {
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: C.intl.string(b.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
        })
    );
}
