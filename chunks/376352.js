n.d(t, { F: () => I });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(554146),
    d = n(397927),
    c = n(294323),
    u = n(587895),
    h = n(357186),
    A = n(932001),
    _ = n(834757),
    m = n(263063),
    p = n(535296),
    g = n(961350),
    f = n(49999),
    x = n(985018),
    E = n(8719);
function I(e) {
    let { user: t, stream: n, channel: s } = e,
        [I, C] = l.useState(!1),
        N = (0, _.AO)(n),
        T = N?.id,
        S = (0, r.bG)([u.A], () => u.A.getApplication(T), [T]),
        { isLoading: b, hasApplicationWidgetOnUserProfile: y } = (0, c.A)(
            t.id,
            T,
            "social_layer_commerce_stream_header",
        ),
        v = (0, r.bG)([g.default], () => g.default.getId()),
        j = l.useRef(null),
        [R, O] = (0, A.RF)(
            o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE,
            (0, h.c)(o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE),
            void 0,
            !0,
        ),
        L = R === o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE,
        M = l.useCallback(() => {
            C(!1);
        }, []),
        {
            isAppIcon: D,
            icon: U,
            text: G,
            renderPopout: P,
        } = l.useMemo(() => {
            if (null == S || null == T) return { isAppIcon: !1 };
            if (y) {
                let e = S.getIconURL(m.iu.SMALL),
                    n = null != e,
                    l = n
                        ? (0, i.jsx)("img", { className: E.Kk, src: e, alt: "", "aria-hidden": !0 })
                        : (0, i.jsx)(d._xR, { className: E.Kk });
                return {
                    isAppIcon: n,
                    icon: l,
                    text: x.intl.string(x.t["9njbm2"]),
                    renderPopout: () => (0, i.jsx)(p.Vp, { userId: t.id, channel: s, applicationId: T, onClose: M }),
                };
            }
            let { icon: e, text: n } =
                v === t.id
                    ? { icon: (0, i.jsx)(d.U1X, { className: E.Kk }), text: x.intl.string(x.t.e6S76Q) }
                    : { icon: (0, i.jsx)(d.okO, { className: E.Kk }), text: x.intl.string(x.t["8ZzYIv"]) };
            return {
                isAppIcon: !1,
                icon: e,
                text: n,
                renderPopout: () => (0, i.jsx)(p.Z, { userId: t.id, channel: s, applicationId: T, onClose: M }),
            };
        }, [S, T, s, v, M, y, t.id]);
    return b || null == P
        ? null
        : (0, i.jsx)(d.YNO, {
              targetElementRef: j,
              shouldShow: I,
              animation: d.YNO.Animation.FADE,
              position: "bottom",
              align: "center",
              spacing: 8,
              onRequestClose: M,
              renderPopout: P,
              children: () =>
                  (0, i.jsxs)("div", {
                      className: E.kL,
                      ref: j,
                      children: [
                          (0, i.jsxs)(d.DUT, {
                              className: E.BQ,
                              onClick: () => {
                                  O(f.i.TAKE_ACTION), C((e) => !e);
                              },
                              "aria-expanded": I,
                              "aria-haspopup": "dialog",
                              children: [
                                  null != U && (0, i.jsx)("div", { className: a()(E.zc, { [E.RT]: D }), children: U }),
                                  (0, i.jsx)(d.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-strong",
                                      lineClamp: 1,
                                      children: G,
                                  }),
                              ],
                          }),
                          L && (0, i.jsx)(d.Exy, { type: "new", variant: "brand" }),
                      ],
                  }),
          });
}
