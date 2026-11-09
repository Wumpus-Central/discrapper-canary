var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(855986),
    o = n(554146),
    c = n(939249),
    d = n(834730),
    u = n(805251),
    h = n(687966),
    p = n(34188),
    m = n(597770),
    A = n(43990),
    f = n(265872),
    g = n(724302),
    x = n(294323),
    C = n(429913),
    y = n(643421),
    I = n(263775),
    j = n(409626),
    v = n(692969),
    N = n(980822),
    E = n(834757),
    b = n(682163),
    S = n(832163),
    T = n(909004),
    _ = n(46653),
    R = n(240248),
    O = n(49999),
    L = n(818348),
    P = n(792996),
    w = n(472344);
function M(e) {
    let [t, n] = (0, I.RF)(e, (0, y.c)(e), void 0, !0);
    return [t === e, n];
}
function U(e) {
    let {
        className: t,
        containerRef: n,
        icon: l,
        isAppIcon: a = !1,
        text: r,
        showBadge: o = !1,
        onClick: h,
        "aria-expanded": p,
        "aria-haspopup": m,
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(t, w.kL),
        ref: n,
        children: [
            (0, i.jsxs)(c.D, {
                className: w.BQ,
                onClick: h,
                "aria-expanded": p,
                "aria-haspopup": m,
                children: [
                    null != l && (0, i.jsx)("div", { className: s()(w.zc, { [w.RT]: a }), children: l }),
                    (0, i.jsx)(d.E, { variant: "body-sm/normal", color: "text-strong", lineClamp: 1, children: r }),
                ],
            }),
            o && (0, i.jsx)(u.E, { type: "new", variant: "primary" }),
        ],
    });
}
function D(e) {
    let { className: t, applicationId: n } = e,
        { gameId: l, gameRecord: a } = (0, N.A)({ applicationId: n }),
        r = (0, v.A)({ gameId: l ?? void 0, source: j.GameProfileSources.VcHeaderActivity });
    if (null == r) return null;
    let o = a?.getIconURL(b.iu.MEDIUM),
        c = (0, R.uJ)(o)
            ? (0, i.jsx)(h.GameControllerIcon, { className: w.Kk })
            : (0, i.jsx)("img", { className: w.Kk, src: o, alt: "", "aria-hidden": !0 });
    return (0, i.jsx)(U, {
        className: s()(t, w.LM),
        icon: c,
        isAppIcon: !(0, R.uJ)(o),
        text: P.intl.string(P.t.f7aVGn),
        onClick: r,
    });
}
n.d(
    t,
    {},
    {
        F: function (e) {
            let t,
                { user: n, stream: a, channel: s } = e,
                [c, d] = l.useState(!1),
                u = (0, E.AO)(a),
                y = u?.id,
                I = (0, r.bG)([S.A], () => S.A.getDetectableIdsToApplicationIds()),
                j = null != y ? I[y] : null,
                v = (0, C.h)(j),
                N = j ?? y ?? null,
                R = (0, C.h)(N),
                {
                    isLoading: V,
                    applicationWidgetConfig: G,
                    profileApplicationWidget: k,
                    userApplicationIdentity: B,
                } = (0, x.A)(n.id, N),
                F = (0, r.bG)([_.default], () => _.default.getId()),
                z = l.useRef(null),
                [H, W] = M(o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE),
                [$, Y] = M(o.M.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA),
                { hasAlreadyLinked: K, canStartAuthorization: X, fetched: q } = (0, g.RD)(F === n.id ? R : null),
                Z = F === n.id && X && !q,
                Q = l.useCallback(() => {
                    d(!1);
                }, []),
                J = l.useCallback(() => {
                    Y(O.i.USER_DISMISS);
                }, [Y]),
                ee = $ && null != G && (K || X),
                et = null != k || ee,
                { rankIconUrl: en, rankText: ei } =
                    ((t = B?.profile),
                    l.useMemo(() => {
                        if (null == t || "1346069614634864772" !== N) return {};
                        let e = t.data?.primary?.rank_name;
                        return { rankIconUrl: t.data?.primary?.rank_image?.proxy_url, rankText: e };
                    }, [N, t])),
                {
                    isAppIcon: el,
                    icon: ea,
                    text: es,
                    renderPopout: er,
                    positionKey: eo,
                } = l.useMemo(() => {
                    if (et && null != N) {
                        let e = en ?? R?.getIconURL(b.iu.SMALL),
                            t = null != e && null == en,
                            l =
                                null != e
                                    ? (0, i.jsx)("img", { className: w.Kk, src: e, alt: "", "aria-hidden": !0 })
                                    : (0, i.jsx)(h.GameControllerIcon, { className: w.Kk });
                        return {
                            isAppIcon: t,
                            icon: l,
                            text: ei ?? P.intl.string(P.t["9njbm2"]),
                            renderPopout: function (e) {
                                return null == N
                                    ? null
                                    : (0, i.jsx)(T.V, {
                                          className: e,
                                          userId: n.id,
                                          channel: s,
                                          applicationId: N,
                                          onClose: Q,
                                          canShowCTA: $,
                                          onDismissCTA: J,
                                      });
                            },
                            positionKey: "widget-version",
                        };
                    }
                    if (null == v || null == j) return { isAppIcon: !1 };
                    let { icon: e, text: t } =
                        F === n.id
                            ? { icon: (0, i.jsx)(p.ShopIcon, { className: w.Kk }), text: P.intl.string(P.t.e6S76Q) }
                            : { icon: (0, i.jsx)(m.GiftIcon, { className: w.Kk }), text: P.intl.string(P.t["8ZzYIv"]) };
                    return {
                        isAppIcon: !1,
                        icon: e,
                        text: t,
                        renderPopout: function (e) {
                            return null == j
                                ? null
                                : (0, i.jsx)(T.Z, {
                                      className: e,
                                      userId: n.id,
                                      channel: s,
                                      applicationId: j,
                                      onClose: Q,
                                  });
                        },
                        positionKey: "feature-card-version",
                    };
                }, [et, N, R, v, j, F, n.id, s, Q, $, J, en, ei]);
            return V || Z
                ? null
                : (0, i.jsx)(A.N, {
                      theme: L.NJ.DARK,
                      children: (e) =>
                          null == er
                              ? (0, i.jsx)(D, { className: e, applicationId: y })
                              : (0, i.jsx)(f.Y, {
                                    targetElementRef: z,
                                    shouldShow: c,
                                    animation: f.Y.Animation.FADE,
                                    position: "bottom",
                                    positionKey: eo,
                                    align: "center",
                                    spacing: 8,
                                    onRequestClose: Q,
                                    renderPopout: () => er(e),
                                    children: () =>
                                        (0, i.jsx)(U, {
                                            className: e,
                                            containerRef: z,
                                            icon: ea,
                                            isAppIcon: el,
                                            text: es,
                                            showBadge: H,
                                            onClick: () => {
                                                (W(O.i.TAKE_ACTION), d((e) => !e));
                                            },
                                            "aria-expanded": c,
                                            "aria-haspopup": "dialog",
                                        }),
                                }),
                  });
        },
    },
);
