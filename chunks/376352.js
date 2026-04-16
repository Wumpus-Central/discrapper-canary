n.d(t, { F: () => T });
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
    let t,
        { user: n, stream: s, channel: T } = e,
        [S, b] = l.useState(!1),
        y = (0, m.AO)(s),
        v = (0, r.bG)([g.A], () => g.A.getDetectableIdsToApplicationIds()),
        R = y?.id,
        j = null != R ? v[R] : null,
        O = (0, h.h)(j),
        {
            isLoading: L,
            applicationWidgetConfig: M,
            profileApplicationWidget: D,
            userApplicationIdentity: U,
        } = (0, u.A)(n.id, j, "social_layer_commerce_stream_header"),
        G = (0, r.bG)([E.default], () => E.default.getId()),
        P = l.useRef(null),
        [k, w] = (0, _.RF)(
            o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE,
            (0, A.c)(o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE),
            void 0,
            !0,
        ),
        B = k === o.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE,
        { hasAlreadyLinked: V, canStartAuthorization: H, fetched: F } = (0, c.RD)(G === n.id ? O : null),
        W = G === n.id && H && !F,
        K = l.useCallback(() => {
            b(!1);
        }, []),
        Y = null != D,
        z = null != M && (V || H),
        { rankIconUrl: q, rankText: X } =
            ((t = U?.profile),
            l.useMemo(() => {
                if (null == t || "1346069614634864772" !== j) return {};
                let e = t.data?.primary?.rank_name;
                return { rankIconUrl: t.data?.primary?.rank_image?.proxy_url, rankText: e };
            }, [j, t])),
        {
            isAppIcon: $,
            icon: J,
            text: Q,
            renderPopout: Z,
        } = l.useMemo(() => {
            if (null == O || null == j) return { isAppIcon: !1 };
            if (Y || z) {
                let e = q ?? O.getIconURL(p.iu.SMALL),
                    t = null != e && null == q,
                    l =
                        null != e
                            ? (0, i.jsx)("img", { className: N.Kk, src: e, alt: "", "aria-hidden": !0 })
                            : (0, i.jsx)(d._xR, { className: N.Kk });
                return {
                    isAppIcon: t,
                    icon: l,
                    text: X ?? C.intl.string(C.t["9njbm2"]),
                    renderPopout: (e) =>
                        (0, i.jsx)(f.V, { className: e, userId: n.id, channel: T, applicationId: j, onClose: K }),
                };
            }
            let { icon: e, text: t } =
                G === n.id
                    ? { icon: (0, i.jsx)(d.U1X, { className: N.Kk }), text: C.intl.string(C.t.e6S76Q) }
                    : { icon: (0, i.jsx)(d.okO, { className: N.Kk }), text: C.intl.string(C.t["8ZzYIv"]) };
            return {
                isAppIcon: !1,
                icon: e,
                text: t,
                renderPopout: (e) =>
                    (0, i.jsx)(f.Z, { className: e, userId: n.id, channel: T, applicationId: j, onClose: K }),
            };
        }, [O, j, Y, z, G, n.id, T, K, q, X]);
    return L || W || null == Z
        ? null
        : (0, i.jsx)(d.NPJ, {
              theme: I.NJ.DARKER,
              children: (e) =>
                  (0, i.jsx)(d.YNO, {
                      targetElementRef: P,
                      shouldShow: S,
                      animation: d.YNO.Animation.FADE,
                      position: "bottom",
                      align: "center",
                      spacing: 8,
                      onRequestClose: K,
                      renderPopout: () => Z(e),
                      children: () =>
                          (0, i.jsxs)("div", {
                              className: a()(e, N.kL),
                              ref: P,
                              children: [
                                  (0, i.jsxs)(d.DUT, {
                                      className: N.BQ,
                                      onClick: () => {
                                          w(x.i.TAKE_ACTION), b((e) => !e);
                                      },
                                      "aria-expanded": S,
                                      "aria-haspopup": "dialog",
                                      children: [
                                          null != J &&
                                              (0, i.jsx)("div", { className: a()(N.zc, { [N.RT]: $ }), children: J }),
                                          (0, i.jsx)(d.Text, {
                                              variant: "text-sm/normal",
                                              color: "text-strong",
                                              lineClamp: 1,
                                              children: Q,
                                          }),
                                      ],
                                  }),
                                  B && (0, i.jsx)(d.Exy, { type: "new", variant: "brand" }),
                              ],
                          }),
                  }),
          });
}
