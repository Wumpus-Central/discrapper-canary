n.d(t, { F: () => g });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(294323),
    c = n(587895),
    u = n(834757),
    h = n(263063),
    A = n(535296),
    _ = n(961350),
    m = n(985018),
    p = n(8719);
function g(e) {
    let { user: t, stream: n, channel: s } = e,
        [g, f] = l.useState(!1),
        x = (0, u.AO)(n),
        E = x?.id,
        I = (0, r.bG)([c.A], () => c.A.getApplication(E), [E]),
        { isLoading: C, hasApplicationWidgetOnUserProfile: N } = (0, d.A)(
            t.id,
            E,
            "social_layer_commerce_stream_header",
        ),
        T = (0, r.bG)([_.default], () => _.default.getId()),
        S = l.useRef(null),
        b = l.useCallback(() => {
            f(!1);
        }, []),
        {
            isAppIcon: y,
            icon: v,
            text: j,
            renderPopout: R,
        } = l.useMemo(() => {
            if (null == I || null == E) return { isAppIcon: !1 };
            if (N) {
                let e = I.getIconURL(h.iu.SMALL),
                    n = null != e,
                    l = n
                        ? (0, i.jsx)("img", { className: p.Kk, src: e, alt: "", "aria-hidden": !0 })
                        : (0, i.jsx)(o._xR, { className: p.Kk });
                return {
                    isAppIcon: n,
                    icon: l,
                    text: m.intl.string(m.t["9njbm2"]),
                    renderPopout: () => (0, i.jsx)(A.Vp, { userId: t.id, channel: s, applicationId: E, onClose: b }),
                };
            }
            let { icon: e, text: n } =
                T === t.id
                    ? { icon: (0, i.jsx)(o.U1X, { className: p.Kk }), text: m.intl.string(m.t.e6S76Q) }
                    : { icon: (0, i.jsx)(o.okO, { className: p.Kk }), text: m.intl.string(m.t["8ZzYIv"]) };
            return {
                isAppIcon: !1,
                icon: e,
                text: n,
                renderPopout: () => (0, i.jsx)(A.Z, { userId: t.id, channel: s, applicationId: E, onClose: b }),
            };
        }, [I, E, s, T, b, N, t.id]);
    return C || null == R
        ? null
        : (0, i.jsx)(o.YNO, {
              targetElementRef: S,
              shouldShow: g,
              animation: o.YNO.Animation.FADE,
              position: "bottom",
              align: "center",
              spacing: 8,
              onRequestClose: b,
              renderPopout: R,
              children: () =>
                  (0, i.jsx)("div", {
                      ref: S,
                      children: (0, i.jsxs)(o.DUT, {
                          className: p.BQ,
                          onClick: () => f((e) => !e),
                          "aria-expanded": g,
                          "aria-haspopup": "dialog",
                          children: [
                              null != v && (0, i.jsx)("div", { className: a()(p.zc, { [p.RT]: y }), children: v }),
                              (0, i.jsx)(o.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-strong",
                                  lineClamp: 1,
                                  children: j,
                              }),
                          ],
                      }),
                  }),
          });
}
