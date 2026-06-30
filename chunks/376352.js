n.d(t, { F: () => O });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(554146),
    c = n(687966),
    d = n(34188),
    u = n(597770),
    p = n(43990),
    h = n(922016),
    m = n(939249),
    A = n(834730),
    x = n(508770),
    g = n(206828),
    f = n(294323),
    C = n(429913),
    y = n(853735),
    E = n(131607),
    N = n(834757),
    v = n(548118),
    j = n(832163),
    I = n(830647),
    T = n(495544),
    _ = n(49999),
    S = n(818348),
    R = n(375708),
    P = n(474143);
function b(e) {
    let [t, n] = (0, E.RF)(e, (0, y.c)(e), void 0, !0);
    return [t === e, n];
}
function O(e) {
    let t,
        { user: n, stream: a, channel: y } = e,
        [E, O] = l.useState(!1),
        L = (0, N.AO)(a),
        D = (0, r.bG)([j.A], () => j.A.getDetectableIdsToApplicationIds()),
        M = L?.id,
        w = null != M ? D[M] : null,
        U = (0, C.h)(w),
        {
            isLoading: V,
            applicationWidgetConfig: k,
            profileApplicationWidget: B,
            userApplicationIdentity: H,
        } = (0, f.A)(n.id, w),
        G = (0, r.bG)([T.default], () => T.default.getId()),
        F = l.useRef(null),
        [z, W] = b(o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE),
        [Y, K] = b(o.M.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA),
        { hasAlreadyLinked: X, canStartAuthorization: Z, fetched: q } = (0, g.RD)(G === n.id ? U : null),
        $ = G === n.id && Z && !q,
        Q = l.useCallback(() => {
            O(!1);
        }, []),
        J = l.useCallback(() => {
            K(_.i.USER_DISMISS);
        }, [K]),
        ee = null != B,
        et = Y && null != k && (X || Z),
        { rankIconUrl: en, rankText: ei } =
            ((t = H?.profile),
            l.useMemo(() => {
                if (null == t || "1346069614634864772" !== w) return {};
                let e = t.data?.primary?.rank_name;
                return { rankIconUrl: t.data?.primary?.rank_image?.proxy_url, rankText: e };
            }, [w, t])),
        {
            isAppIcon: el,
            icon: ea,
            text: es,
            renderPopout: er,
            positionKey: eo,
        } = l.useMemo(() => {
            if (null == U || null == w) return { isAppIcon: !1 };
            if (ee || et) {
                let e = en ?? U.getIconURL(v.iu.SMALL),
                    t = null != e && null == en,
                    l =
                        null != e
                            ? (0, i.jsx)("img", { className: P.Kk, src: e, alt: "", "aria-hidden": !0 })
                            : (0, i.jsx)(c._, { className: P.Kk });
                return {
                    isAppIcon: t,
                    icon: l,
                    text: ei ?? R.intl.string(R.t["9njbm2"]),
                    renderPopout: (e) =>
                        (0, i.jsx)(I.V, {
                            className: e,
                            userId: n.id,
                            channel: y,
                            applicationId: w,
                            onClose: Q,
                            canShowCTA: Y,
                            onDismissCTA: J,
                        }),
                    positionKey: "widget-version",
                };
            }
            let { icon: e, text: t } =
                G === n.id
                    ? { icon: (0, i.jsx)(d.U, { className: P.Kk }), text: R.intl.string(R.t.e6S76Q) }
                    : { icon: (0, i.jsx)(u.o, { className: P.Kk }), text: R.intl.string(R.t["8ZzYIv"]) };
            return {
                isAppIcon: !1,
                icon: e,
                text: t,
                renderPopout: (e) =>
                    (0, i.jsx)(I.Z, { className: e, userId: n.id, channel: y, applicationId: w, onClose: Q }),
                positionKey: "feature-card-version",
            };
        }, [U, w, ee, et, G, n.id, y, Q, Y, J, en, ei]);
    return V || $ || null == er
        ? null
        : (0, i.jsx)(p.N, {
              theme: S.NJ.DARKER,
              children: (e) =>
                  (0, i.jsx)(h.Y, {
                      targetElementRef: F,
                      shouldShow: E,
                      animation: h.Y.Animation.FADE,
                      position: "bottom",
                      positionKey: eo,
                      align: "center",
                      spacing: 8,
                      onRequestClose: Q,
                      renderPopout: () => er(e),
                      children: () =>
                          (0, i.jsxs)("div", {
                              className: s()(e, P.kL),
                              ref: F,
                              children: [
                                  (0, i.jsxs)(m.D, {
                                      className: P.BQ,
                                      onClick: () => {
                                          W(_.i.TAKE_ACTION), O((e) => !e);
                                      },
                                      "aria-expanded": E,
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
