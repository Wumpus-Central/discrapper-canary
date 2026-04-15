n.d(t, { F: () => N });
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
    I = n(985018),
    C = n(8719);
function N(e) {
    let { user: t, stream: n, channel: s } = e,
        [N, T] = l.useState(!1),
        S = (0, m.AO)(n),
        b = (0, r.bG)([g.A], () => g.A.getDetectableIdsToApplicationIds()),
        y = S?.id,
        v = null != y ? b[y] : null,
        R = (0, h.h)(v),
        {
            isLoading: j,
            applicationWidgetConfig: O,
            hasApplicationWidgetOnUserProfile: L,
        } = (0, u.A)(t.id, v, "social_layer_commerce_stream_header"),
        M = (0, r.bG)([E.default], () => E.default.getId()),
        D = l.useRef(null),
        [U, G] = (0, _.RF)(
            o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE,
            (0, A.c)(o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE),
            void 0,
            !0,
        ),
        P = U === o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE,
        { hasAlreadyLinked: k, canStartAuthorization: w, fetched: B } = (0, c.RD)(M === t.id ? R : null),
        V = M === t.id && w && !B,
        H = l.useCallback(() => {
            T(!1);
        }, []),
        F = null != O && (k || w),
        {
            isAppIcon: W,
            icon: K,
            text: Y,
            renderPopout: z,
        } = l.useMemo(() => {
            if (null == R || null == v) return { isAppIcon: !1 };
            if (L || F) {
                let e = R.getIconURL(p.iu.SMALL),
                    n = null != e,
                    l = n
                        ? (0, i.jsx)("img", { className: C.Kk, src: e, alt: "", "aria-hidden": !0 })
                        : (0, i.jsx)(d._xR, { className: C.Kk });
                return {
                    isAppIcon: n,
                    icon: l,
                    text: I.intl.string(I.t["9njbm2"]),
                    renderPopout: () => (0, i.jsx)(f.V, { userId: t.id, channel: s, applicationId: v, onClose: H }),
                };
            }
            let { icon: e, text: n } =
                M === t.id
                    ? { icon: (0, i.jsx)(d.U1X, { className: C.Kk }), text: I.intl.string(I.t.e6S76Q) }
                    : { icon: (0, i.jsx)(d.okO, { className: C.Kk }), text: I.intl.string(I.t["8ZzYIv"]) };
            return {
                isAppIcon: !1,
                icon: e,
                text: n,
                renderPopout: () => (0, i.jsx)(f.Z, { userId: t.id, channel: s, applicationId: v, onClose: H }),
            };
        }, [R, v, L, F, M, t.id, s, H]);
    return j || V || null == z
        ? null
        : (0, i.jsx)(d.YNO, {
              targetElementRef: D,
              shouldShow: N,
              animation: d.YNO.Animation.FADE,
              position: "bottom",
              align: "center",
              spacing: 8,
              onRequestClose: H,
              renderPopout: z,
              children: () =>
                  (0, i.jsxs)("div", {
                      className: C.kL,
                      ref: D,
                      children: [
                          (0, i.jsxs)(d.DUT, {
                              className: C.BQ,
                              onClick: () => {
                                  G(x.i.TAKE_ACTION), T((e) => !e);
                              },
                              "aria-expanded": N,
                              "aria-haspopup": "dialog",
                              children: [
                                  null != K && (0, i.jsx)("div", { className: a()(C.zc, { [C.RT]: W }), children: K }),
                                  (0, i.jsx)(d.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-strong",
                                      lineClamp: 1,
                                      children: Y,
                                  }),
                              ],
                          }),
                          P && (0, i.jsx)(d.Exy, { type: "new", variant: "brand" }),
                      ],
                  }),
          });
}
