n.d(t, { Z: () => O }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(442837),
    s = n(481060),
    c = n(447543),
    d = n(607070),
    u = n(100527),
    p = n(906732),
    m = n(406218),
    f = n(15210),
    h = n(464647),
    g = n(43542),
    _ = n(723776),
    b = n(910200),
    v = n(358595),
    y = n(981631),
    x = n(388032),
    E = n(700457);
function O(e) {
    let { guild: t, invite: n } = e,
        a = i.useRef(null),
        [O, j] = i.useState(!0),
        [N, C] = i.useState(!1),
        I = n.state === y.r2o.ACCEPTING,
        S = null != t,
        { analyticsLocations: T } = (0, p.ZP)(u.Z.INVITE_EMBED),
        P = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        C((null !== (t = null === (e = a.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0) > 328);
    }, [C]);
    let A = i.useCallback(() => {
            let e = 'noop';
            (e = S ? 'transition' : 'accept'), (0, c.r$)(n, e, T);
        }, [n, T, S]),
        w = (0, m.PC)(n),
        Z = i.useCallback(() => {
            N && O && j(!1);
        }, [O, N]),
        k = i.useCallback(() => {
            N && (O || j(!0));
        }, [O, N]),
        R = i.useMemo(() => {
            var e;
            return N && (null === (e = a.current) || void 0 === e ? void 0 : e.clientHeight) != null
                ? {
                      height: O ? 328 : a.current.clientHeight + 20 + 65,
                      transition: P ? void 0 : 'height 0.2s ease'
                  }
                : {};
        }, [O, N, P]);
    return null == w
        ? (0, r.jsx)(v.Z, {})
        : (0, r.jsxs)(s.P3F, {
              className: o()(E.guildInviteContainer, { [E.clickable]: N && O }),
              onClick: Z,
              style: R,
              children: [
                  (0, r.jsxs)('div', {
                      className: E.cardHeightMeasure,
                      ref: a,
                      children: [
                          (0, r.jsx)(b.Z7, {
                              profile: w,
                              className: E.banner
                          }),
                          (0, r.jsx)(b.N3, { profile: w }),
                          (0, r.jsx)(g.Z, { profile: w }),
                          (0, r.jsxs)('div', {
                              className: E.mainContent,
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
                  N && !O
                      ? (0, r.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.TRANSPARENT,
                            size: s.zxk.Sizes.NONE,
                            onClick: k,
                            className: E.hideDetailsButton,
                            innerClassName: E.hideDetailsButtonInner,
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'interactive-normal',
                                children: x.NW.string(x.t.xdCLeH)
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: E.footer,
                      children: [
                          N && O ? (0, r.jsx)('div', { className: E.gradient }) : null,
                          (0, r.jsxs)('div', {
                              className: E.footerContent,
                              children: [
                                  (0, r.jsx)('div', { className: E.separator }),
                                  (0, r.jsx)('div', {
                                      className: E.buttonContainer,
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
