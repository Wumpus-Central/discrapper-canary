n.d(t, { F: () => O });
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
    I = n(834757),
    E = n(548118),
    N = n(832163),
    v = n(830647),
    b = n(280450),
    T = n(49999),
    _ = n(818348),
    R = n(375708),
    S = n(472344);
function L(e) {
    let [t, n] = (0, j.RF)(e, (0, y.c)(e), void 0, !0);
    return [t === e, n];
}
function O(e) {
    let t,
        { user: n, stream: a, channel: y } = e,
        [j, O] = l.useState(!1),
        P = (0, I.AO)(a),
        M = (0, r.bG)([N.A], () => N.A.getDetectableIdsToApplicationIds()),
        w = P?.id,
        D = null != w ? M[w] : null,
        U = (0, C.h)(D),
        {
            isLoading: V,
            applicationWidgetConfig: k,
            profileApplicationWidget: G,
            userApplicationIdentity: B,
        } = (0, g.A)(n.id, D),
        F = (0, r.bG)([b.default], () => b.default.getId()),
        H = l.useRef(null),
        [z, W] = L(o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE),
        [$, Y] = L(o.M.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA),
        { hasAlreadyLinked: K, canStartAuthorization: q, fetched: X } = (0, x.RD)(F === n.id ? U : null),
        Z = F === n.id && q && !X,
        Q = l.useCallback(() => {
            O(!1);
        }, []),
        J = l.useCallback(() => {
            Y(T.i.USER_DISMISS);
        }, [Y]),
        ee = null != G,
        et = $ && null != k && (K || q),
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
                            : (0, i.jsx)(c.GameControllerIcon, { className: S.Kk });
                return {
                    isAppIcon: t,
                    icon: l,
                    text: ei ?? R.intl.string(R.t["9njbm2"]),
                    renderPopout: function (e) {
                        return null == D
                            ? null
                            : (0, i.jsx)(v.V, {
                                  className: e,
                                  userId: n.id,
                                  channel: y,
                                  applicationId: D,
                                  onClose: Q,
                                  canShowCTA: $,
                                  onDismissCTA: J,
                              });
                    },
                    positionKey: "widget-version",
                };
            }
            let { icon: e, text: t } =
                F === n.id
                    ? { icon: (0, i.jsx)(d.U, { className: S.Kk }), text: R.intl.string(R.t.e6S76Q) }
                    : { icon: (0, i.jsx)(u.GiftIcon, { className: S.Kk }), text: R.intl.string(R.t["8ZzYIv"]) };
            return {
                isAppIcon: !1,
                icon: e,
                text: t,
                renderPopout: function (e) {
                    return null == D
                        ? null
                        : (0, i.jsx)(v.Z, { className: e, userId: n.id, channel: y, applicationId: D, onClose: Q });
                },
                positionKey: "feature-card-version",
            };
        }, [U, D, ee, et, F, n.id, y, Q, $, J, en, ei]);
    return V || Z || null == er
        ? null
        : (0, i.jsx)(h.N, {
              theme: _.NJ.DARKER,
              children: (e) =>
                  (0, i.jsx)(p.Y, {
                      targetElementRef: H,
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
                              ref: H,
                              children: [
                                  (0, i.jsxs)(m.D, {
                                      className: S.BQ,
                                      onClick: () => {
                                          W(T.i.TAKE_ACTION), O((e) => !e);
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
