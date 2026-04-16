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
    C = n(474143);
function N(e) {
    let t,
        { user: n, stream: s, channel: N } = e,
        [T, S] = l.useState(!1),
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
        [P, k] = (0, _.RF)(
            o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE,
            (0, A.c)(o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE),
            void 0,
            !0,
        ),
        w = P === o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE,
        { hasAlreadyLinked: B, canStartAuthorization: V, fetched: H } = (0, c.RD)(U === n.id ? j : null),
        F = U === n.id && V && !H,
        W = l.useCallback(() => {
            S(!1);
        }, []),
        K = null != M,
        Y = null != L && (B || V),
        { rankIconUrl: z, rankText: q } =
            ((t = D?.profile),
            l.useMemo(() => {
                if (null == t || "1346069614634864772" !== R) return {};
                let e = t.data?.primary?.rank_name;
                return { rankIconUrl: t.data?.primary?.rank_image?.proxy_url, rankText: e };
            }, [R, t])),
        {
            isAppIcon: X,
            icon: $,
            text: J,
            renderPopout: Q,
        } = l.useMemo(() => {
            if (null == j || null == R) return { isAppIcon: !1 };
            if (K || Y) {
                let e = z ?? j.getIconURL(p.iu.SMALL),
                    t = null != e && null == z,
                    l =
                        null != e
                            ? (0, i.jsx)("img", { className: C.Kk, src: e, alt: "", "aria-hidden": !0 })
                            : (0, i.jsx)(d._xR, { className: C.Kk });
                return {
                    isAppIcon: t,
                    icon: l,
                    text: q ?? I.intl.string(I.t["9njbm2"]),
                    renderPopout: () => (0, i.jsx)(f.V, { userId: n.id, channel: N, applicationId: R, onClose: W }),
                };
            }
            let { icon: e, text: t } =
                U === n.id
                    ? { icon: (0, i.jsx)(d.U1X, { className: C.Kk }), text: I.intl.string(I.t.e6S76Q) }
                    : { icon: (0, i.jsx)(d.okO, { className: C.Kk }), text: I.intl.string(I.t["8ZzYIv"]) };
            return {
                isAppIcon: !1,
                icon: e,
                text: t,
                renderPopout: () => (0, i.jsx)(f.Z, { userId: n.id, channel: N, applicationId: R, onClose: W }),
            };
        }, [j, R, K, Y, U, n.id, N, W, z, q]);
    return O || F || null == Q
        ? null
        : (0, i.jsx)(d.YNO, {
              targetElementRef: G,
              shouldShow: T,
              animation: d.YNO.Animation.FADE,
              position: "bottom",
              align: "center",
              spacing: 8,
              onRequestClose: W,
              renderPopout: Q,
              children: () =>
                  (0, i.jsxs)("div", {
                      className: C.kL,
                      ref: G,
                      children: [
                          (0, i.jsxs)(d.DUT, {
                              className: C.BQ,
                              onClick: () => {
                                  k(x.i.TAKE_ACTION), S((e) => !e);
                              },
                              "aria-expanded": T,
                              "aria-haspopup": "dialog",
                              children: [
                                  null != $ && (0, i.jsx)("div", { className: a()(C.zc, { [C.RT]: X }), children: $ }),
                                  (0, i.jsx)(d.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-strong",
                                      lineClamp: 1,
                                      children: J,
                                  }),
                              ],
                          }),
                          w && (0, i.jsx)(d.Exy, { type: "new", variant: "brand" }),
                      ],
                  }),
          });
}
