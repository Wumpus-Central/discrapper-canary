n.d(t, { F: () => L });
var i = n(477900),
    l = n(582128),
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
    f = n(508770),
    x = n(206828),
    g = n(294323),
    C = n(429913),
    y = n(853735),
    j = n(131607),
    v = n(834757),
    E = n(548118),
    N = n(832163),
    I = n(830647),
    T = n(280450),
    b = n(49999),
    _ = n(818348),
    R = n(375708),
    S = n(1991);
function P(e) {
    let [t, n] = (0, j.RF)(e, (0, y.c)(e), void 0, !0);
    return [t === e, n];
}
function L(e) {
    let t,
        { user: n, stream: a, channel: y } = e,
        [j, L] = l.useState(!1),
        O = (0, v.AO)(a),
        w = (0, r.bG)([N.A], () => N.A.getDetectableIdsToApplicationIds()),
        M = O?.id,
        D = null != M ? w[M] : null,
        U = (0, C.h)(D),
        {
            isLoading: k,
            applicationWidgetConfig: V,
            profileApplicationWidget: G,
            userApplicationIdentity: B,
        } = (0, g.A)(n.id, D),
        H = (0, r.bG)([T.default], () => T.default.getId()),
        F = l.useRef(null),
        [z, W] = P(o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE),
        [Y, K] = P(o.M.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA),
        { hasAlreadyLinked: X, canStartAuthorization: $, fetched: Z } = (0, x.RD)(H === n.id ? U : null),
        q = H === n.id && $ && !Z,
        Q = l.useCallback(() => {
            L(!1);
        }, []),
        J = l.useCallback(() => {
            K(b.i.USER_DISMISS);
        }, [K]),
        ee = null != G,
        et = Y && null != V && (X || $),
        { rankIconUrl: en, rankText: ei } =
            ((t = B?.profile),
            l.useMemo(() => {
                if (null == t || "1346069614634864772" !== D) return {};
                let e = t.data?.primary?.rank_name;
                return { rankIconUrl: t.data?.primary?.rank_image?.proxy_url, rankText: e };
            }, [D, t])),
        {
            isAppIcon: el,
            icon: ea,
            text: es,
            renderPopout: er,
            positionKey: eo,
        } = l.useMemo(() => {
            if (null == U || null == D) return { isAppIcon: !1 };
            if (ee || et) {
                let e = en ?? U.getIconURL(E.iu.SMALL),
                    t = null != e && null == en,
                    l =
                        null != e
                            ? (0, i.jsx)("img", { className: S.Kk, src: e, alt: "", "aria-hidden": !0 })
                            : (0, i.jsx)(c._, { className: S.Kk });
                return {
                    isAppIcon: t,
                    icon: l,
                    text: ei ?? R.intl.string(R.t["9njbm2"]),
                    renderPopout: function (e) {
                        return null == D
                            ? null
                            : (0, i.jsx)(I.V, {
                                  className: e,
                                  userId: n.id,
                                  channel: y,
                                  applicationId: D,
                                  onClose: Q,
                                  canShowCTA: Y,
                                  onDismissCTA: J,
                              });
                    },
                    positionKey: "widget-version",
                };
            }
            let { icon: e, text: t } =
                H === n.id
                    ? { icon: (0, i.jsx)(d.U, { className: S.Kk }), text: R.intl.string(R.t.e6S76Q) }
                    : { icon: (0, i.jsx)(u.o, { className: S.Kk }), text: R.intl.string(R.t["8ZzYIv"]) };
            return {
                isAppIcon: !1,
                icon: e,
                text: t,
                renderPopout: function (e) {
                    return null == D
                        ? null
                        : (0, i.jsx)(I.Z, { className: e, userId: n.id, channel: y, applicationId: D, onClose: Q });
                },
                positionKey: "feature-card-version",
            };
        }, [U, D, ee, et, H, n.id, y, Q, Y, J, en, ei]);
    return k || q || null == er
        ? null
        : (0, i.jsx)(h.N, {
              theme: _.NJ.DARKER,
              children: (e) =>
                  (0, i.jsx)(p.Y, {
                      targetElementRef: F,
                      shouldShow: j,
                      animation: p.Y.Animation.FADE,
                      position: "bottom",
                      positionKey: eo,
                      align: "center",
                      spacing: 8,
                      onRequestClose: Q,
                      renderPopout: () => er(e),
                      children: () =>
                          (0, i.jsxs)("div", {
                              className: s()(e, S.kL),
                              ref: F,
                              children: [
                                  (0, i.jsxs)(m.D, {
                                      className: S.BQ,
                                      onClick: () => {
                                          W(b.i.TAKE_ACTION), L((e) => !e);
                                      },
                                      "aria-expanded": j,
                                      "aria-haspopup": "dialog",
                                      children: [
                                          null != ea &&
                                              (0, i.jsx)("div", { className: s()(S.zc, { [S.RT]: el }), children: ea }),
                                          (0, i.jsx)(A.E, {
                                              variant: "text-sm/normal",
                                              color: "text-strong",
                                              lineClamp: 1,
                                              children: es,
                                          }),
                                      ],
                                  }),
                                  z && (0, i.jsx)(f.E, { type: "new", variant: "brand" }),
                              ],
                          }),
                  }),
          });
}
