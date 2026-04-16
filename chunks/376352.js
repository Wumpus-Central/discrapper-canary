n.d(t, { F: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(554146),
    d = n(397927),
    c = n(362490),
    u = n(294323),
    h = n(429913),
    A = n(357186),
    _ = n(932001),
    m = n(834757),
    p = n(263063),
    g = n(832163),
    f = n(535296),
    E = n(961350),
    x = n(49999),
    I = n(818348),
    C = n(985018),
    N = n(474143);
function T(e) {
    let [t, n] = (0, _.RF)(e, (0, A.c)(e), void 0, !0);
    return [t === e, n];
}
function S(e) {
    let t,
        { user: n, stream: s, channel: A } = e,
        [_, S] = l.useState(!1),
        b = (0, m.AO)(s),
        y = (0, r.bG)([g.A], () => g.A.getDetectableIdsToApplicationIds()),
        v = b?.id,
        R = null != v ? y[v] : null,
        j = (0, h.h)(R),
        {
            isLoading: O,
            applicationWidgetConfig: L,
            profileApplicationWidget: M,
            userApplicationIdentity: D,
        } = (0, u.A)(n.id, R, "social_layer_commerce_stream_header"),
        U = (0, r.bG)([E.default], () => E.default.getId()),
        G = l.useRef(null),
        [P, k] = T(o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE),
        [w, B] = T(o.M.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA),
        { hasAlreadyLinked: V, canStartAuthorization: H, fetched: F } = (0, c.RD)(U === n.id ? j : null),
        W = U === n.id && H && !F,
        K = l.useCallback(() => {
            S(!1);
        }, []),
        Y = l.useCallback(() => {
            B(x.i.USER_DISMISS);
        }, [B]),
        z = null != M,
        q = w && null != L && (V || H),
        { rankIconUrl: X, rankText: $ } =
            ((t = D?.profile),
            l.useMemo(() => {
                if (null == t || "1346069614634864772" !== R) return {};
                let e = t.data?.primary?.rank_name;
                return { rankIconUrl: t.data?.primary?.rank_image?.proxy_url, rankText: e };
            }, [R, t])),
        {
            isAppIcon: J,
            icon: Q,
            text: Z,
            renderPopout: ee,
            positionKey: et,
        } = l.useMemo(() => {
            if (null == j || null == R) return { isAppIcon: !1 };
            if (z || q) {
                let e = X ?? j.getIconURL(p.iu.SMALL),
                    t = null != e && null == X,
                    l =
                        null != e
                            ? (0, i.jsx)("img", { className: N.Kk, src: e, alt: "", "aria-hidden": !0 })
                            : (0, i.jsx)(d._xR, { className: N.Kk });
                return {
                    isAppIcon: t,
                    icon: l,
                    text: $ ?? C.intl.string(C.t["9njbm2"]),
                    renderPopout: (e) =>
                        (0, i.jsx)(f.V, {
                            className: e,
                            userId: n.id,
                            channel: A,
                            applicationId: R,
                            onClose: K,
                            canShowCTA: w,
                            onDismissCTA: Y,
                        }),
                    positionKey: "widget-version",
                };
            }
            let { icon: e, text: t } =
                U === n.id
                    ? { icon: (0, i.jsx)(d.U1X, { className: N.Kk }), text: C.intl.string(C.t.e6S76Q) }
                    : { icon: (0, i.jsx)(d.okO, { className: N.Kk }), text: C.intl.string(C.t["8ZzYIv"]) };
            return {
                isAppIcon: !1,
                icon: e,
                text: t,
                renderPopout: (e) =>
                    (0, i.jsx)(f.Z, { className: e, userId: n.id, channel: A, applicationId: R, onClose: K }),
                positionKey: "feature-card-version",
            };
        }, [j, R, z, q, U, n.id, A, K, w, Y, X, $]);
    return O || W || null == ee
        ? null
        : (0, i.jsx)(d.NPJ, {
              theme: I.NJ.DARKER,
              children: (e) =>
                  (0, i.jsx)(d.YNO, {
                      targetElementRef: G,
                      shouldShow: _,
                      animation: d.YNO.Animation.FADE,
                      position: "bottom",
                      positionKey: et,
                      align: "center",
                      spacing: 8,
                      onRequestClose: K,
                      renderPopout: () => ee(e),
                      children: () =>
                          (0, i.jsxs)("div", {
                              className: a()(e, N.kL),
                              ref: G,
                              children: [
                                  (0, i.jsxs)(d.DUT, {
                                      className: N.BQ,
                                      onClick: () => {
                                          k(x.i.TAKE_ACTION), S((e) => !e);
                                      },
                                      "aria-expanded": _,
                                      "aria-haspopup": "dialog",
                                      children: [
                                          null != Q &&
                                              (0, i.jsx)("div", { className: a()(N.zc, { [N.RT]: J }), children: Q }),
                                          (0, i.jsx)(d.Text, {
                                              variant: "text-sm/normal",
                                              color: "text-strong",
                                              lineClamp: 1,
                                              children: Z,
                                          }),
                                      ],
                                  }),
                                  P && (0, i.jsx)(d.Exy, { type: "new", variant: "brand" }),
                              ],
                          }),
                  }),
          });
}
