n.d(t, { F: () => b });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(554146),
    c = n(687966),
    d = n(34188),
    u = n(597770),
    h = n(43990),
    p = n(922016),
    m = n(939249),
    A = n(834730),
    x = n(508770),
    g = n(46225),
    C = n(294323),
    f = n(429913),
    E = n(853735),
    y = n(131607),
    N = n(834757),
    j = n(548118),
    v = n(832163),
    I = n(830647),
    T = n(495544),
    _ = n(49999),
    R = n(818348),
    S = n(375708),
    P = n(474143);
function O(e) {
    let [t, n] = (0, y.RF)(e, (0, E.c)(e), void 0, !0);
    return [t === e, n];
}
function b(e) {
    let t,
        { user: n, stream: a, channel: E } = e,
        [y, b] = l.useState(!1),
        L = (0, N.AO)(a),
        M = (0, r.bG)([v.A], () => v.A.getDetectableIdsToApplicationIds()),
        D = L?.id,
        U = null != D ? M[D] : null,
        w = (0, f.h)(U),
        {
            isLoading: V,
            applicationWidgetConfig: B,
            profileApplicationWidget: k,
            userApplicationIdentity: H,
        } = (0, C.A)(n.id, U, "social_layer_commerce_stream_header"),
        F = (0, r.bG)([T.default], () => T.default.getId()),
        G = l.useRef(null),
        [z, W] = O(o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE),
        [Y, K] = O(o.M.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA),
        { hasAlreadyLinked: X, canStartAuthorization: Z, fetched: q } = (0, g.RD)(F === n.id ? w : null),
        Q = F === n.id && Z && !q,
        $ = l.useCallback(() => {
            b(!1);
        }, []),
        J = l.useCallback(() => {
            K(_.i.USER_DISMISS);
        }, [K]),
        ee = null != k,
        et = Y && null != B && (X || Z),
        { rankIconUrl: en, rankText: ei } =
            ((t = H?.profile),
            l.useMemo(() => {
                if (null == t || "1346069614634864772" !== U) return {};
                let e = t.data?.primary?.rank_name;
                return { rankIconUrl: t.data?.primary?.rank_image?.proxy_url, rankText: e };
            }, [U, t])),
        {
            isAppIcon: el,
            icon: ea,
            text: es,
            renderPopout: er,
            positionKey: eo,
        } = l.useMemo(() => {
            if (null == w || null == U) return { isAppIcon: !1 };
            if (ee || et) {
                let e = en ?? w.getIconURL(j.iu.SMALL),
                    t = null != e && null == en,
                    l =
                        null != e
                            ? (0, i.jsx)("img", { className: P.Kk, src: e, alt: "", "aria-hidden": !0 })
                            : (0, i.jsx)(c._, { className: P.Kk });
                return {
                    isAppIcon: t,
                    icon: l,
                    text: ei ?? S.intl.string(S.t["9njbm2"]),
                    renderPopout: (e) =>
                        (0, i.jsx)(I.V, {
                            className: e,
                            userId: n.id,
                            channel: E,
                            applicationId: U,
                            onClose: $,
                            canShowCTA: Y,
                            onDismissCTA: J,
                        }),
                    positionKey: "widget-version",
                };
            }
            let { icon: e, text: t } =
                F === n.id
                    ? { icon: (0, i.jsx)(d.U, { className: P.Kk }), text: S.intl.string(S.t.e6S76Q) }
                    : { icon: (0, i.jsx)(u.o, { className: P.Kk }), text: S.intl.string(S.t["8ZzYIv"]) };
            return {
                isAppIcon: !1,
                icon: e,
                text: t,
                renderPopout: (e) =>
                    (0, i.jsx)(I.Z, { className: e, userId: n.id, channel: E, applicationId: U, onClose: $ }),
                positionKey: "feature-card-version",
            };
        }, [w, U, ee, et, F, n.id, E, $, Y, J, en, ei]);
    return V || Q || null == er
        ? null
        : (0, i.jsx)(h.N, {
              theme: R.NJ.DARKER,
              children: (e) =>
                  (0, i.jsx)(p.Y, {
                      targetElementRef: G,
                      shouldShow: y,
                      animation: p.Y.Animation.FADE,
                      position: "bottom",
                      positionKey: eo,
                      align: "center",
                      spacing: 8,
                      onRequestClose: $,
                      renderPopout: () => er(e),
                      children: () =>
                          (0, i.jsxs)("div", {
                              className: s()(e, P.kL),
                              ref: G,
                              children: [
                                  (0, i.jsxs)(m.D, {
                                      className: P.BQ,
                                      onClick: () => {
                                          W(_.i.TAKE_ACTION), b((e) => !e);
                                      },
                                      "aria-expanded": y,
                                      "aria-haspopup": "dialog",
                                      children: [
                                          null != ea &&
                                              (0, i.jsx)("div", { className: s()(P.zc, { [P.RT]: el }), children: ea }),
                                          (0, i.jsx)(A.E, {
                                              variant: "text-sm/normal",
                                              color: "text-strong",
                                              lineClamp: 1,
                                              children: es,
                                          }),
                                      ],
                                  }),
                                  z && (0, i.jsx)(x.E, { type: "new", variant: "brand" }),
                              ],
                          }),
                  }),
          });
}
