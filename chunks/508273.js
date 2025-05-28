n.d(t, { Z: () => j }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(447543),
    u = n(607070),
    d = n(100527),
    p = n(906732),
    m = n(406218),
    f = n(749958),
    h = n(993860),
    g = n(137162),
    _ = n(15210),
    b = n(43542),
    E = n(910200),
    x = n(358595),
    y = n(981631),
    v = n(388032),
    O = n(583136);
function j(e) {
    let { invite: t, isMemberOfGuild: n, message: l, onTransitionToInviteChannel: c, onAcceptInstantInvite: d, currentUserId: p } = e,
        h = i.useRef(null),
        [_, j] = i.useState(!0),
        [S, I] = i.useState(!1),
        N = t.state === y.r2o.ACCEPTING,
        T = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        { updateButton: P, updateCopy: A } = (0, f.n2)(),
        w = p === l.author.id,
        Z = A ? 326 : 292;
    i.useLayoutEffect(() => {
        var e, t;
        I((null != (t = null == (e = h.current) ? void 0 : e.clientHeight) ? t : 0) > Z);
    }, [Z, I]);
    let R = (0, m.PC)(t),
        k = i.useCallback(() => {
            S && _ && j(!1);
        }, [_, S]),
        D = i.useCallback(() => {
            S && (_ || j(!0));
        }, [_, S]),
        L = i.useMemo(() => {
            var e;
            return S && (null == (e = h.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: _ ? Z : h.current.clientHeight + 36 + 48,
                      transition: T ? void 0 : 'height 0.2s ease'
                  }
                : {};
        }, [_, S, T, Z]);
    return null == R
        ? (0, r.jsx)(x.Z, {})
        : (0, r.jsxs)(s.P3F, {
              className: a()(O.guildInviteContainer, { [O.clickable]: S && _ }),
              onClick: k,
              style: L,
              children: [
                  (0, r.jsxs)('div', {
                      className: O.cardHeightMeasure,
                      ref: h,
                      children: [
                          A
                              ? (0, r.jsx)('div', {
                                    className: O.inviteTitleWrapper,
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'header-secondary',
                                        className: O.inviteTitle,
                                        children: w ? v.intl.string(v.t['oU/lsr']) : v.intl.string(v.t.BoQUFR)
                                    })
                                })
                              : null,
                          (0, r.jsx)(E.Z7, {
                              profile: R,
                              className: O.banner
                          }),
                          (0, r.jsx)(E.N3, { profile: R }),
                          (0, r.jsx)(b.Z, { profile: R }),
                          (0, r.jsx)(g.E, {
                              profile: R,
                              className: O.mainContent
                          })
                      ]
                  }),
                  S && !_
                      ? (0, r.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.TRANSPARENT,
                            size: s.zxk.Sizes.NONE,
                            onClick: D,
                            innerClassName: O.hideDetailsButtonInner,
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'interactive-normal',
                                children: v.intl.string(v.t.xdCLeH)
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: a()(O.footer, { [O.floatingFooter]: S }),
                      children: [
                          S && _ ? (0, r.jsx)('div', { className: O.gradient }) : null,
                          (0, r.jsx)('div', {
                              className: a()(O.footerContent, { [O.collapsedFooterContent]: S && _ }),
                              children: (0, r.jsx)('div', {
                                  className: O.buttonContainer,
                                  children: (0, r.jsx)(C, {
                                      invite: t,
                                      profile: R,
                                      isMemberOfGuild: n,
                                      message: l,
                                      submitting: N,
                                      onTransitionToInviteChannel: c,
                                      onAcceptInstantInvite: d,
                                      inIterationExperiment: P
                                  })
                              })
                          })
                      ]
                  })
              ]
          });
}
function C(e) {
    let { invite: t, profile: n, isMemberOfGuild: l, message: a, submitting: o, onTransitionToInviteChannel: s, onAcceptInstantInvite: u, inIterationExperiment: m } = e,
        { guildId: f, ctaType: g } = (0, h.ZP)(n, h.F3.INVITE),
        { analyticsLocations: b } = (0, p.ZP)(d.Z.INVITE_EMBED),
        E = i.useCallback(() => {
            let e = l ? 'transition' : 'accept';
            (0, c.r$)(
                {
                    invite: t,
                    action: e,
                    inviter_id: a.author.id,
                    invite_message_id: a.id
                },
                b
            );
        }, [t, a, b, l]);
    return null == g
        ? null
        : (0, r.jsx)(_.o, {
              guildId: f,
              ctaType: g,
              submitting: o,
              onGoToGuild: s,
              onAcceptInvite: u,
              onStartApplication: u,
              onComplete: E,
              inIterationExperiment: m
          });
}
