n.d(t, { Z: () => N }), n(388685), n(953529);
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
    f = n(993860),
    h = n(15210),
    g = n(464647),
    _ = n(43542),
    b = n(723776),
    x = n(910200),
    y = n(358595),
    v = n(981631),
    E = n(388032),
    O = n(583136);
function N(e) {
    let { invite: t, isMemberOfGuild: n, onTransitionToInviteChannel: a, onAcceptInstantInvite: c } = e,
        d = i.useRef(null),
        [p, f] = i.useState(!0),
        [h, N] = i.useState(!1),
        C = t.state === v.r2o.ACCEPTING,
        S = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        N((null != (t = null == (e = d.current) ? void 0 : e.clientHeight) ? t : 0) > 328);
    }, [N]);
    let I = (0, m.PC)(t),
        T = i.useCallback(() => {
            h && p && f(!1);
        }, [p, h]),
        P = i.useCallback(() => {
            h && (p || f(!0));
        }, [p, h]),
        A = i.useMemo(() => {
            var e;
            return h && (null == (e = d.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: p ? 328 : d.current.clientHeight + 24 + 65,
                      transition: S ? void 0 : 'height 0.2s ease'
                  }
                : {};
        }, [p, h, S]);
    return null == I
        ? (0, r.jsx)(y.Z, {})
        : (0, r.jsxs)(s.P3F, {
              className: l()(O.guildInviteContainer, { [O.clickable]: h && p }),
              onClick: T,
              style: A,
              children: [
                  (0, r.jsxs)('div', {
                      className: O.cardHeightMeasure,
                      ref: d,
                      children: [
                          (0, r.jsx)(x.Z7, {
                              profile: I,
                              className: O.banner
                          }),
                          (0, r.jsx)(x.N3, { profile: I }),
                          (0, r.jsx)(_.Z, { profile: I }),
                          (0, r.jsxs)('div', {
                              className: O.mainContent,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-secondary',
                                      children: I.description
                                  }),
                                  (0, r.jsx)(g.Z, { profile: I }),
                                  (0, r.jsx)(b.F, { profile: I })
                              ]
                          })
                      ]
                  }),
                  h && !p
                      ? (0, r.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.TRANSPARENT,
                            size: s.zxk.Sizes.NONE,
                            onClick: P,
                            className: O.hideDetailsButton,
                            innerClassName: O.hideDetailsButtonInner,
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'interactive-normal',
                                children: E.NW.string(E.t.xdCLeH)
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: l()(O.footer, { [O.floatingFooter]: h }),
                      children: [
                          h && p ? (0, r.jsx)('div', { className: O.gradient }) : null,
                          (0, r.jsxs)('div', {
                              className: O.footerContent,
                              children: [
                                  (0, r.jsx)('div', { className: O.separator }),
                                  (0, r.jsx)('div', {
                                      className: O.buttonContainer,
                                      children: (0, r.jsx)(j, {
                                          invite: t,
                                          profile: I,
                                          isMemberOfGuild: n,
                                          submitting: C,
                                          onTransitionToInviteChannel: a,
                                          onAcceptInstantInvite: c
                                      })
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
}
function j(e) {
    let { invite: t, profile: n, isMemberOfGuild: a, submitting: l, onTransitionToInviteChannel: o, onAcceptInstantInvite: s } = e,
        { guildId: u, ctaType: m } = (0, f.ZP)(n, f.F3.INVITE),
        { analyticsLocations: g } = (0, p.ZP)(d.Z.INVITE_EMBED),
        _ = i.useCallback(() => {
            let e = a ? 'transition' : 'accept';
            (0, c.r$)(t, e, g);
        }, [t, g, a]);
    return null == m
        ? null
        : (0, r.jsx)(h.o, {
              guildId: u,
              ctaType: m,
              submitting: l,
              onGoToGuild: o,
              onAcceptInvite: s,
              onStartApplication: s,
              onComplete: _
          });
}
