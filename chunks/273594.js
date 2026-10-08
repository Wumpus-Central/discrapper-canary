n.d(s, { default: () => E });
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
    b = n(248675),
    C = n(660183),
    N = n(606128),
    k = n(135422);
function E(e) {
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
        [v, E] = l.useState(f),
        [I, T] = l.useState(null),
        H = p.find((e) => e.session.id === v) ?? p[0];
    (null != H && H.session.id !== v && E(H.session.id),
        null != I && I !== H?.session.id && T(null),
        l.useEffect(() => {
            if (null != I) return ((0, h.EG)(t, I, !0), () => (0, h.EG)(t, I, !1));
        }, [t, I]));
    let y = l.useRef([]);
    return (
        l.useEffect(() => {
            y.current = p.map((e) => e.session.id);
        }, [p]),
        l.useEffect(
            () => () => {
                for (let e of y.current) (0, h.gG)(t, e);
            },
            [t],
        ),
        (0, i.jsx)(r.N, {
            transitionState: s,
            onClose: n,
            "aria-label": C.intl.string(b.default.sGsShB),
            children: (0, i.jsxs)("div", {
                className: a()(k.lJ, N.T),
                children: [
                    (0, i.jsxs)("header", {
                        className: k.wx,
                        children: [
                            (0, i.jsx)(o.V, {
                                type: "top",
                                selectedItem: H?.session.id,
                                onItemSelect: E,
                                "aria-label": C.intl.string(b.default.UjUsph),
                                className: k.vR,
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
                                                className: k.Gn,
                                                children: [
                                                    (0, i.jsx)("span", { className: a()(k.W9, e.ended && k.oM) }),
                                                    (0, i.jsx)(c.E, {
                                                        tag: "span",
                                                        variant: "text-sm/medium",
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
                            null == H || H.ended
                                ? null
                                : (0, i.jsx)(w, {
                                      projectId: t,
                                      sessionId: H.session.id,
                                      inControl: I === H.session.id,
                                      onTakeControl: () => {
                                          ((0, h.EG)(t, H.session.id, !0), T(H.session.id));
                                      },
                                      onHandBack: () => T(null),
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
                              S,
                              { projectId: t, tab: H, inControl: I === H.session.id, onHandBack: () => T(null) },
                              H.session.id,
                          ),
                ],
            }),
        })
    );
}
function w(e) {
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
function S(e) {
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
            className: k.dZ,
            children: (0, i.jsxs)("div", {
                className: a()(k.dw, j && k._d),
                children: [
                    (0, i.jsx)(v.A, {
                        projectId: s,
                        sessionId: r.id,
                        fps: 15,
                        interactive: j,
                        paused: f,
                        className: a()(k.Ji, f && k.tl),
                        "aria-label": C.intl.formatToPlainString(b.default.rnwqXb, { name: (0, g.i)(r) }),
                        onStateChange: m,
                    }),
                    o.hasFrame || f
                        ? null
                        : (0, i.jsxs)("div", {
                              className: k.Lw,
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
                              className: a()(k.Lw, k.Hl),
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
