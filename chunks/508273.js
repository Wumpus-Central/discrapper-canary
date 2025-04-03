n.d(t, { Z: () => O }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    s = n(481060),
    c = n(447543),
    u = n(607070),
    d = n(100527),
    p = n(906732),
    m = n(406218),
    f = n(15210),
    h = n(464647),
    g = n(43542),
    _ = n(723776),
    b = n(910200),
    x = n(358595),
    y = n(981631),
    E = n(388032),
    v = n(583136);
function O(e) {
    let { guild: t, invite: n } = e,
        a = i.useRef(null),
        [O, N] = i.useState(!0),
        [j, C] = i.useState(!1),
        I = n.state === y.r2o.ACCEPTING,
        S = null != t,
        { analyticsLocations: T } = (0, p.ZP)(d.Z.INVITE_EMBED),
        P = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        C((null != (t = null == (e = a.current) ? void 0 : e.clientHeight) ? t : 0) > 328);
    }, [C]);
    let A = i.useCallback(() => {
            let e = 'noop';
            (e = S ? 'transition' : 'accept'), (0, c.r$)(n, e, T);
        }, [n, T, S]),
        w = (0, m.PC)(n),
        Z = i.useCallback(() => {
            j && O && N(!1);
        }, [O, j]),
        k = i.useCallback(() => {
            j && (O || N(!0));
        }, [O, j]),
        R = i.useMemo(() => {
            var e;
            return j && (null == (e = a.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: O ? 328 : a.current.clientHeight + 24 + 65,
                      transition: P ? void 0 : 'height 0.2s ease'
                  }
                : {};
        }, [O, j, P]);
    return null == w
        ? (0, r.jsx)(x.Z, {})
        : (0, r.jsxs)(s.P3F, {
              className: l()(v.guildInviteContainer, { [v.clickable]: j && O }),
              onClick: Z,
              style: R,
              children: [
                  (0, r.jsxs)('div', {
                      className: v.cardHeightMeasure,
                      ref: a,
                      children: [
                          (0, r.jsx)(b.Z7, {
                              profile: w,
                              className: v.banner
                          }),
                          (0, r.jsx)(b.N3, { profile: w }),
                          (0, r.jsx)(g.Z, { profile: w }),
                          (0, r.jsxs)('div', {
                              className: v.mainContent,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-secondary',
                                      children: w.description
                                  }),
                                  (0, r.jsx)(h.Z, { profile: w }),
                                  (0, r.jsx)(_.F, { profile: w })
                              ]
                          })
                      ]
                  }),
                  j && !O
                      ? (0, r.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.TRANSPARENT,
                            size: s.zxk.Sizes.NONE,
                            onClick: k,
                            className: v.hideDetailsButton,
                            innerClassName: v.hideDetailsButtonInner,
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'interactive-normal',
                                children: E.NW.string(E.t.xdCLeH)
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: l()(v.footer, { [v.floatingFooter]: j }),
                      children: [
                          j && O ? (0, r.jsx)('div', { className: v.gradient }) : null,
                          (0, r.jsxs)('div', {
                              className: v.footerContent,
                              children: [
                                  (0, r.jsx)('div', { className: v.separator }),
                                  (0, r.jsx)('div', {
                                      className: v.buttonContainer,
                                      children: (0, r.jsx)(f.Z, {
                                          profile: w,
                                          submitting: I,
                                          onClick: A
                                      })
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
}
