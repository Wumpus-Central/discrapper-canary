n.d(t, { Z: () => O }), n(388685), n(953529);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
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
    E = n(981631),
    v = n(388032),
    N = n(583136);
function O(e) {
    let { invite: t, isMemberOfGuild: n, onTransitionToInviteChannel: l, onAcceptInstantInvite: c } = e,
        d = i.useRef(null),
        [p, f] = i.useState(!0),
        [h, O] = i.useState(!1),
        C = t.state === E.r2o.ACCEPTING,
        S = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        O((null != (t = null == (e = d.current) ? void 0 : e.clientHeight) ? t : 0) > 328);
    }, [O]);
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
              className: a()(N.guildInviteContainer, { [N.clickable]: h && p }),
              onClick: T,
              style: A,
              children: [
                  (0, r.jsxs)('div', {
                      className: N.cardHeightMeasure,
                      ref: d,
                      children: [
                          (0, r.jsx)(x.Z7, {
                              profile: I,
                              className: N.banner
                          }),
                          (0, r.jsx)(x.N3, { profile: I }),
                          (0, r.jsx)(_.Z, { profile: I }),
                          (0, r.jsxs)('div', {
                              className: N.mainContent,
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
                            className: N.hideDetailsButton,
                            innerClassName: N.hideDetailsButtonInner,
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'interactive-normal',
                                children: v.NW.string(v.t.xdCLeH)
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: a()(N.footer, { [N.floatingFooter]: h }),
                      children: [
                          h && p ? (0, r.jsx)('div', { className: N.gradient }) : null,
                          (0, r.jsxs)('div', {
                              className: N.footerContent,
                              children: [
                                  (0, r.jsx)('div', { className: N.separator }),
                                  (0, r.jsx)('div', {
                                      className: N.buttonContainer,
                                      children: (0, r.jsx)(j, {
                                          invite: t,
                                          profile: I,
                                          isMemberOfGuild: n,
                                          submitting: C,
                                          onTransitionToInviteChannel: l,
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
    let { invite: t, profile: n, isMemberOfGuild: l, submitting: a, onTransitionToInviteChannel: o, onAcceptInstantInvite: s } = e,
        { guildId: u, ctaType: m } = (0, f.ZP)(n, f.F3.INVITE),
        { analyticsLocations: g } = (0, p.ZP)(d.Z.INVITE_EMBED),
        _ = i.useCallback(() => {
            let e = l ? 'transition' : 'accept';
            (0, c.r$)(t, e, g);
        }, [t, g, l]);
    return null == m
        ? null
        : (0, r.jsx)(h.o, {
              guildId: u,
              ctaType: m,
              submitting: a,
              onGoToGuild: o,
              onAcceptInvite: s,
              onStartApplication: s,
              onComplete: _
          });
}
