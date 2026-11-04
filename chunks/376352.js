var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(855986),
    o = n(554146),
    d = n(939249),
    c = n(834730),
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
    j = n(263775),
    I = n(409626),
    N = n(613902),
    v = n(692969),
    E = n(980822),
    b = n(834757),
    S = n(682163),
    _ = n(832163),
    T = n(909004),
    R = n(46653),
    O = n(240248),
    P = n(49999),
    L = n(818348),
    M = n(792996),
    w = n(472344);
function U(e) {
    let [t, n] = (0, j.RF)(e, (0, y.c)(e), void 0, !0);
    return [t === e, n];
}
function D(e) {
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
            (0, i.jsxs)(d.D, {
                className: w.BQ,
                onClick: h,
                "aria-expanded": p,
                "aria-haspopup": m,
                children: [
                    null != l && (0, i.jsx)("div", { className: s()(w.zc, { [w.RT]: a }), children: l }),
                    (0, i.jsx)(c.E, { variant: "body-sm/normal", color: "text-strong", lineClamp: 1, children: r }),
                ],
            }),
            o && (0, i.jsx)(u.E, { type: "new", variant: "primary" }),
        ],
    });
}
function V(e) {
    let { className: t, applicationId: n } = e,
        { gameId: l, gameRecord: a } = (0, E.A)({ applicationId: n }),
        r = (0, v.A)({ gameId: l ?? void 0, source: I.GameProfileSources.VcHeaderActivity });
    if (null == r) return null;
    let o = a?.getIconURL(S.iu.MEDIUM),
        d = (0, O.uJ)(o)
            ? (0, i.jsx)(h.GameControllerIcon, { className: w.Kk })
            : (0, i.jsx)("img", { className: w.Kk, src: o, alt: "", "aria-hidden": !0 });
    return (0, i.jsx)(D, {
        className: s()(t, w.LM),
        icon: d,
        isAppIcon: !(0, O.uJ)(o),
        text: M.intl.string(M.t.f7aVGn),
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
                [d, c] = l.useState(!1),
                u = (0, b.AO)(a),
                y = u?.id,
                j = (0, r.bG)([_.A], () => _.A.getDetectableIdsToApplicationIds()),
                I = null != y ? j[y] : null,
                v = (0, C.h)(I),
                E = (0, N.E)({ location: "SocialLayerCommerceStreamHeader" }),
                O = E ? (I ?? y ?? null) : I,
                G = (0, C.h)(O),
                {
                    isLoading: k,
                    applicationWidgetConfig: B,
                    profileApplicationWidget: F,
                    userApplicationIdentity: z,
                } = (0, x.A)(n.id, O),
                H = (0, r.bG)([R.default], () => R.default.getId()),
                W = l.useRef(null),
                [$, Y] = U(o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE),
                [K, X] = U(o.M.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA),
                { hasAlreadyLinked: q, canStartAuthorization: Z, fetched: Q } = (0, g.RD)(H === n.id ? G : null),
                J = H === n.id && Z && !Q,
                ee = l.useCallback(() => {
                    c(!1);
                }, []),
                et = l.useCallback(() => {
                    X(P.i.USER_DISMISS);
                }, [X]),
                en = K && null != B && (q || Z),
                ei = null != F || en,
                { rankIconUrl: el, rankText: ea } =
                    ((t = z?.profile),
                    l.useMemo(() => {
                        if (null == t || "1346069614634864772" !== O) return {};
                        let e = t.data?.primary?.rank_name;
                        return { rankIconUrl: t.data?.primary?.rank_image?.proxy_url, rankText: e };
                    }, [O, t])),
                {
                    isAppIcon: es,
                    icon: er,
                    text: eo,
                    renderPopout: ed,
                    positionKey: ec,
                } = l.useMemo(() => {
                    if (!E && (null == v || null == I)) return { isAppIcon: !1 };
                    if (ei && null != O) {
                        let e = el ?? G?.getIconURL(S.iu.SMALL),
                            t = null != e && null == el,
                            l =
                                null != e
                                    ? (0, i.jsx)("img", { className: w.Kk, src: e, alt: "", "aria-hidden": !0 })
                                    : (0, i.jsx)(h.GameControllerIcon, { className: w.Kk });
                        return {
                            isAppIcon: t,
                            icon: l,
                            text: ea ?? M.intl.string(M.t["9njbm2"]),
                            renderPopout: function (e) {
                                return null == O
                                    ? null
                                    : (0, i.jsx)(T.V, {
                                          className: e,
                                          userId: n.id,
                                          channel: s,
                                          applicationId: O,
                                          onClose: ee,
                                          canShowCTA: K,
                                          onDismissCTA: et,
                                      });
                            },
                            positionKey: "widget-version",
                        };
                    }
                    if (null == v || null == I) return { isAppIcon: !1 };
                    let { icon: e, text: t } =
                        H === n.id
                            ? { icon: (0, i.jsx)(p.U, { className: w.Kk }), text: M.intl.string(M.t.e6S76Q) }
                            : { icon: (0, i.jsx)(m.GiftIcon, { className: w.Kk }), text: M.intl.string(M.t["8ZzYIv"]) };
                    return {
                        isAppIcon: !1,
                        icon: e,
                        text: t,
                        renderPopout: function (e) {
                            return null == I
                                ? null
                                : (0, i.jsx)(T.Z, {
                                      className: e,
                                      userId: n.id,
                                      channel: s,
                                      applicationId: I,
                                      onClose: ee,
                                  });
                        },
                        positionKey: "feature-card-version",
                    };
                }, [E, ei, O, G, v, I, H, n.id, s, ee, K, et, el, ea]);
            return k || J || (null == ed && !E)
                ? null
                : (0, i.jsx)(A.N, {
                      theme: L.NJ.DARK,
                      children: (e) =>
                          null == ed
                              ? (0, i.jsx)(V, { className: e, applicationId: y })
                              : (0, i.jsx)(f.Y, {
                                    targetElementRef: W,
                                    shouldShow: d,
                                    animation: f.Y.Animation.FADE,
                                    position: "bottom",
                                    positionKey: ec,
                                    align: "center",
                                    spacing: 8,
                                    onRequestClose: ee,
                                    renderPopout: () => ed(e),
                                    children: () =>
                                        (0, i.jsx)(D, {
                                            className: e,
                                            containerRef: W,
                                            icon: er,
                                            isAppIcon: es,
                                            text: eo,
                                            showBadge: $,
                                            onClick: () => {
                                                (Y(P.i.TAKE_ACTION), c((e) => !e));
                                            },
                                            "aria-expanded": d,
                                            "aria-haspopup": "dialog",
                                        }),
                                }),
                  });
        },
    },
);
