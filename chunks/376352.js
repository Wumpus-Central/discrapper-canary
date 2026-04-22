n.d(t, { F: () => O });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(554146),
    c = n(687966),
    d = n(34188),
    u = n(597770),
    p = n(43990),
    h = n(265872),
    _ = n(939249),
    m = n(834730),
    A = n(508770),
    x = n(362490),
    f = n(294323),
    g = n(429913),
    C = n(357186),
    y = n(932001),
    v = n(834757),
    E = n(263063),
    N = n(832163),
    I = n(535296),
    j = n(961350),
    T = n(49999),
    b = n(818348),
    S = n(985018),
    R = n(474143);
function P(e) {
    let [t, n] = (0, y.RF)(e, (0, C.c)(e), void 0, !0);
    return [t === e, n];
}
function O(e) {
    let t,
        { user: n, stream: l, channel: C } = e,
        [y, O] = a.useState(!1),
        w = (0, v.AO)(l),
        L = (0, r.bG)([N.A], () => N.A.getDetectableIdsToApplicationIds()),
        D = w?.id,
        M = null != D ? L[D] : null,
        U = (0, g.h)(M),
        {
            isLoading: V,
            applicationWidgetConfig: k,
            profileApplicationWidget: B,
            userApplicationIdentity: H,
        } = (0, f.A)(n.id, M, "social_layer_commerce_stream_header"),
        F = (0, r.bG)([j.default], () => j.default.getId()),
        G = a.useRef(null),
        [z, W] = P(o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE),
        [Y, K] = P(o.M.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA),
        { hasAlreadyLinked: X, canStartAuthorization: q, fetched: Z } = (0, x.RD)(F === n.id ? U : null),
        Q = F === n.id && q && !Z,
        $ = a.useCallback(() => {
            O(!1);
        }, []),
        J = a.useCallback(() => {
            K(T.i.USER_DISMISS);
        }, [K]),
        ee = null != B,
        et = Y && null != k && (X || q),
        { rankIconUrl: en, rankText: ei } =
            ((t = H?.profile),
            a.useMemo(() => {
                if (null == t || "1346069614634864772" !== M) return {};
                let e = t.data?.primary?.rank_name;
                return { rankIconUrl: t.data?.primary?.rank_image?.proxy_url, rankText: e };
            }, [M, t])),
        {
            isAppIcon: ea,
            icon: el,
            text: es,
            renderPopout: er,
            positionKey: eo,
        } = a.useMemo(() => {
            if (null == U || null == M) return { isAppIcon: !1 };
            if (ee || et) {
                let e = en ?? U.getIconURL(E.iu.SMALL),
                    t = null != e && null == en,
                    a =
                        null != e
                            ? (0, i.jsx)("img", { className: R.Kk, src: e, alt: "", "aria-hidden": !0 })
                            : (0, i.jsx)(c._, { className: R.Kk });
                return {
                    isAppIcon: t,
                    icon: a,
                    text: ei ?? S.intl.string(S.t["9njbm2"]),
                    renderPopout: (e) =>
                        (0, i.jsx)(I.V, {
                            className: e,
                            userId: n.id,
                            channel: C,
                            applicationId: M,
                            onClose: $,
                            canShowCTA: Y,
                            onDismissCTA: J,
                        }),
                    positionKey: "widget-version",
                };
            }
            let { icon: e, text: t } =
                F === n.id
                    ? { icon: (0, i.jsx)(d.U, { className: R.Kk }), text: S.intl.string(S.t.e6S76Q) }
                    : { icon: (0, i.jsx)(u.o, { className: R.Kk }), text: S.intl.string(S.t["8ZzYIv"]) };
            return {
                isAppIcon: !1,
                icon: e,
                text: t,
                renderPopout: (e) =>
                    (0, i.jsx)(I.Z, { className: e, userId: n.id, channel: C, applicationId: M, onClose: $ }),
                positionKey: "feature-card-version",
            };
        }, [U, M, ee, et, F, n.id, C, $, Y, J, en, ei]);
    return V || Q || null == er
        ? null
        : (0, i.jsx)(p.N, {
              theme: b.NJ.DARKER,
              children: (e) =>
                  (0, i.jsx)(h.Y, {
                      targetElementRef: G,
                      shouldShow: y,
                      animation: h.Y.Animation.FADE,
                      position: "bottom",
                      positionKey: eo,
                      align: "center",
                      spacing: 8,
                      onRequestClose: $,
                      renderPopout: () => er(e),
                      children: () =>
                          (0, i.jsxs)("div", {
                              className: s()(e, R.kL),
                              ref: G,
                              children: [
                                  (0, i.jsxs)(_.D, {
                                      className: R.BQ,
                                      onClick: () => {
                                          W(T.i.TAKE_ACTION), O((e) => !e);
                                      },
                                      "aria-expanded": y,
                                      "aria-haspopup": "dialog",
                                      children: [
                                          null != el &&
                                              (0, i.jsx)("div", { className: s()(R.zc, { [R.RT]: ea }), children: el }),
                                          (0, i.jsx)(m.E, {
                                              variant: "text-sm/normal",
                                              color: "text-strong",
                                              lineClamp: 1,
                                              children: es,
                                          }),
                                      ],
                                  }),
                                  z && (0, i.jsx)(A.E, { type: "new", variant: "brand" }),
                              ],
                          }),
                  }),
          });
}
