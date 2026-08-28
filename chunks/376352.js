n.d(t, { F: () => k });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(554146),
    c = n(939249),
    d = n(834730),
    u = n(508770),
    h = n(687966),
    p = n(34188),
    m = n(597770),
    A = n(43990),
    f = n(922016),
    x = n(206828),
    g = n(294323),
    C = n(429913),
    y = n(853735),
    j = n(131607),
    I = n(409626),
    N = n(613902),
    v = n(692969),
    E = n(738250),
    b = n(834757),
    T = n(548118),
    _ = n(832163),
    R = n(852105),
    S = n(280450),
    L = n(240248),
    O = n(49999),
    P = n(818348),
    M = n(375708),
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
            (0, i.jsxs)(c.D, {
                className: w.BQ,
                onClick: h,
                "aria-expanded": p,
                "aria-haspopup": m,
                children: [
                    null != l && (0, i.jsx)("div", { className: s()(w.zc, { [w.RT]: a }), children: l }),
                    (0, i.jsx)(d.E, { variant: "text-sm/normal", color: "text-strong", lineClamp: 1, children: r }),
                ],
            }),
            o && (0, i.jsx)(u.E, { type: "new", variant: "brand" }),
        ],
    });
}
function V(e) {
    let { className: t, applicationId: n } = e,
        { gameId: l, gameRecord: a } = (0, E.A)({ applicationId: n }),
        r = (0, v.A)({ gameId: l ?? void 0, source: I.GameProfileSources.VcHeaderActivity });
    if (null == r) return null;
    let o = a?.getIconURL(T.iu.MEDIUM),
        c = (0, L.uJ)(o)
            ? (0, i.jsx)(h.GameControllerIcon, { className: w.Kk })
            : (0, i.jsx)("img", { className: w.Kk, src: o, alt: "", "aria-hidden": !0 });
    return (0, i.jsx)(D, {
        className: s()(t, w.LM),
        icon: c,
        isAppIcon: !(0, L.uJ)(o),
        text: M.intl.string(M.t.f7aVGn),
        onClick: r,
    });
}
function k(e) {
    let t,
        { user: n, stream: a, channel: s } = e,
        [c, d] = l.useState(!1),
        u = (0, b.AO)(a),
        y = u?.id,
        j = (0, r.bG)([_.A], () => _.A.getDetectableIdsToApplicationIds()),
        I = null != y ? j[y] : null,
        v = (0, C.h)(I),
        E = (0, N.E)({ location: "SocialLayerCommerceStreamHeader" }),
        L = E ? (I ?? y ?? null) : I,
        k = (0, C.h)(L),
        {
            isLoading: G,
            applicationWidgetConfig: B,
            profileApplicationWidget: F,
            userApplicationIdentity: H,
        } = (0, g.A)(n.id, L),
        z = (0, r.bG)([S.default], () => S.default.getId()),
        W = l.useRef(null),
        [$, Y] = U(o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE),
        [K, X] = U(o.M.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA),
        { hasAlreadyLinked: q, canStartAuthorization: Z, fetched: Q } = (0, x.RD)(z === n.id ? k : null),
        J = z === n.id && Z && !Q,
        ee = l.useCallback(() => {
            d(!1);
        }, []),
        et = l.useCallback(() => {
            X(O.i.USER_DISMISS);
        }, [X]),
        en = K && null != B && (q || Z),
        ei = null != F || en,
        { rankIconUrl: el, rankText: ea } =
            ((t = H?.profile),
            l.useMemo(() => {
                if (null == t || "1346069614634864772" !== L) return {};
                let e = t.data?.primary?.rank_name;
                return { rankIconUrl: t.data?.primary?.rank_image?.proxy_url, rankText: e };
            }, [L, t])),
        {
            isAppIcon: es,
            icon: er,
            text: eo,
            renderPopout: ec,
            positionKey: ed,
        } = l.useMemo(() => {
            if (!E && (null == v || null == I)) return { isAppIcon: !1 };
            if (ei && null != L) {
                let e = el ?? k?.getIconURL(T.iu.SMALL),
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
                        return null == L
                            ? null
                            : (0, i.jsx)(R.V, {
                                  className: e,
                                  userId: n.id,
                                  channel: s,
                                  applicationId: L,
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
                z === n.id
                    ? { icon: (0, i.jsx)(p.U, { className: w.Kk }), text: M.intl.string(M.t.e6S76Q) }
                    : { icon: (0, i.jsx)(m.GiftIcon, { className: w.Kk }), text: M.intl.string(M.t["8ZzYIv"]) };
            return {
                isAppIcon: !1,
                icon: e,
                text: t,
                renderPopout: function (e) {
                    return null == I
                        ? null
                        : (0, i.jsx)(R.Z, { className: e, userId: n.id, channel: s, applicationId: I, onClose: ee });
                },
                positionKey: "feature-card-version",
            };
        }, [E, ei, L, k, v, I, z, n.id, s, ee, K, et, el, ea]);
    return G || J || (null == ec && !E)
        ? null
        : (0, i.jsx)(A.N, {
              theme: P.NJ.DARKER,
              children: (e) =>
                  null == ec
                      ? (0, i.jsx)(V, { className: e, applicationId: y })
                      : (0, i.jsx)(f.Y, {
                            targetElementRef: W,
                            shouldShow: c,
                            animation: f.Y.Animation.FADE,
                            position: "bottom",
                            positionKey: ed,
                            align: "center",
                            spacing: 8,
                            onRequestClose: ee,
                            renderPopout: () => ec(e),
                            children: () =>
                                (0, i.jsx)(D, {
                                    className: e,
                                    containerRef: W,
                                    icon: er,
                                    isAppIcon: es,
                                    text: eo,
                                    showBadge: $,
                                    onClick: () => {
                                        Y(O.i.TAKE_ACTION), d((e) => !e);
                                    },
                                    "aria-expanded": c,
                                    "aria-haspopup": "dialog",
                                }),
                        }),
          });
}
