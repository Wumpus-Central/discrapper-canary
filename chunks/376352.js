n.d(t, { F: () => C });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(554146),
    d = n(397927),
    c = n(294323),
    u = n(429913),
    h = n(357186),
    A = n(932001),
    _ = n(834757),
    m = n(263063),
    p = n(832163),
    g = n(535296),
    f = n(961350),
    E = n(49999),
    x = n(985018),
    I = n(8719);
function C(e) {
    let { user: t, stream: n, channel: s } = e,
        [C, N] = l.useState(!1),
        T = (0, _.AO)(n),
        S = (0, r.bG)([p.A], () => p.A.getDetectableIdsToApplicationIds()),
        b = T?.id,
        y = null != b ? S[b] : null,
        v = (0, u.h)(y),
        { isLoading: j, hasApplicationWidgetOnUserProfile: R } = (0, c.A)(
            t.id,
            y,
            "social_layer_commerce_stream_header",
        ),
        O = (0, r.bG)([f.default], () => f.default.getId()),
        L = l.useRef(null),
        [M, D] = (0, A.RF)(
            o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE,
            (0, h.c)(o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE),
            void 0,
            !0,
        ),
        U = M === o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE,
        G = l.useCallback(() => {
            N(!1);
        }, []),
        {
            isAppIcon: P,
            icon: k,
            text: w,
            renderPopout: B,
        } = l.useMemo(() => {
            if (null == v || null == y) return { isAppIcon: !1 };
            if (R) {
                let e = v.getIconURL(m.iu.SMALL),
                    n = null != e,
                    l = n
                        ? (0, i.jsx)("img", { className: I.Kk, src: e, alt: "", "aria-hidden": !0 })
                        : (0, i.jsx)(d._xR, { className: I.Kk });
                return {
                    isAppIcon: n,
                    icon: l,
                    text: x.intl.string(x.t["9njbm2"]),
                    renderPopout: () => (0, i.jsx)(g.Vp, { userId: t.id, channel: s, applicationId: y, onClose: G }),
                };
            }
            let { icon: e, text: n } =
                O === t.id
                    ? { icon: (0, i.jsx)(d.U1X, { className: I.Kk }), text: x.intl.string(x.t.e6S76Q) }
                    : { icon: (0, i.jsx)(d.okO, { className: I.Kk }), text: x.intl.string(x.t["8ZzYIv"]) };
            return {
                isAppIcon: !1,
                icon: e,
                text: n,
                renderPopout: () => (0, i.jsx)(g.Z, { userId: t.id, channel: s, applicationId: y, onClose: G }),
            };
        }, [v, y, s, O, G, R, t.id]);
    return j || null == B
        ? null
        : (0, i.jsx)(d.YNO, {
              targetElementRef: L,
              shouldShow: C,
              animation: d.YNO.Animation.FADE,
              position: "bottom",
              align: "center",
              spacing: 8,
              onRequestClose: G,
              renderPopout: B,
              children: () =>
                  (0, i.jsxs)("div", {
                      className: I.kL,
                      ref: L,
                      children: [
                          (0, i.jsxs)(d.DUT, {
                              className: I.BQ,
                              onClick: () => {
                                  D(E.i.TAKE_ACTION), N((e) => !e);
                              },
                              "aria-expanded": C,
                              "aria-haspopup": "dialog",
                              children: [
                                  null != k && (0, i.jsx)("div", { className: a()(I.zc, { [I.RT]: P }), children: k }),
                                  (0, i.jsx)(d.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-strong",
                                      lineClamp: 1,
                                      children: w,
                                  }),
                              ],
                          }),
                          U && (0, i.jsx)(d.Exy, { type: "new", variant: "brand" }),
                      ],
                  }),
          });
}
