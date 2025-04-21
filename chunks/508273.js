n.d(t, { Z: () => j }), n(388685), n(953529);
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
    O = n(583136);
function j(e) {
    let { invite: t, isMemberOfGuild: n, inviterId: l, onTransitionToInviteChannel: c, onAcceptInstantInvite: d } = e,
        p = i.useRef(null),
        [f, h] = i.useState(!0),
        [j, S] = i.useState(!1),
        I = t.state === E.r2o.ACCEPTING,
        N = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        S((null != (t = null == (e = p.current) ? void 0 : e.clientHeight) ? t : 0) > 328);
    }, [S]);
    let T = (0, m.PC)(t),
        P = i.useCallback(() => {
            j && f && h(!1);
        }, [f, j]),
        A = i.useCallback(() => {
            j && (f || h(!0));
        }, [f, j]),
        w = i.useMemo(() => {
            var e;
            return j && (null == (e = p.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: f ? 328 : p.current.clientHeight + 24 + 65,
                      transition: N ? void 0 : 'height 0.2s ease'
                  }
                : {};
        }, [f, j, N]);
    return null == T
        ? (0, r.jsx)(y.Z, {})
        : (0, r.jsxs)(s.P3F, {
              className: a()(O.guildInviteContainer, { [O.clickable]: j && f }),
              onClick: P,
              style: w,
              children: [
                  (0, r.jsxs)('div', {
                      className: O.cardHeightMeasure,
                      ref: p,
                      children: [
                          (0, r.jsx)(x.Z7, {
                              profile: T,
                              className: O.banner
                          }),
                          (0, r.jsx)(x.N3, { profile: T }),
                          (0, r.jsx)(_.Z, { profile: T }),
                          (0, r.jsxs)('div', {
                              className: O.mainContent,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-secondary',
                                      children: T.description
                                  }),
                                  (0, r.jsx)(g.Z, { profile: T }),
                                  (0, r.jsx)(b.F, { profile: T })
                              ]
                          })
                      ]
                  }),
                  j && !f
                      ? (0, r.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.TRANSPARENT,
                            size: s.zxk.Sizes.NONE,
                            onClick: A,
                            className: O.hideDetailsButton,
                            innerClassName: O.hideDetailsButtonInner,
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'interactive-normal',
                                children: v.intl.string(v.t.xdCLeH)
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: a()(O.footer, { [O.floatingFooter]: j }),
                      children: [
                          j && f ? (0, r.jsx)('div', { className: O.gradient }) : null,
                          (0, r.jsxs)('div', {
                              className: O.footerContent,
                              children: [
                                  (0, r.jsx)('div', { className: O.separator }),
                                  (0, r.jsx)('div', {
                                      className: O.buttonContainer,
                                      children: (0, r.jsx)(C, {
                                          invite: t,
                                          profile: T,
                                          isMemberOfGuild: n,
                                          inviterId: l,
                                          submitting: I,
                                          onTransitionToInviteChannel: c,
                                          onAcceptInstantInvite: d
                                      })
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
}
function C(e) {
    let { invite: t, profile: n, isMemberOfGuild: l, inviterId: a, submitting: o, onTransitionToInviteChannel: s, onAcceptInstantInvite: u } = e,
        { guildId: m, ctaType: g } = (0, f.ZP)(n, f.F3.INVITE),
        { analyticsLocations: _ } = (0, p.ZP)(d.Z.INVITE_EMBED),
        b = i.useCallback(() => {
            let e = l ? 'transition' : 'accept';
            (0, c.r$)(
                {
                    invite: t,
                    action: e,
                    inviter_id: a
                },
                _
            );
        }, [t, a, _, l]);
    return null == g
        ? null
        : (0, r.jsx)(h.o, {
              guildId: m,
              ctaType: g,
              submitting: o,
              onGoToGuild: s,
              onAcceptInvite: u,
              onStartApplication: u,
              onComplete: b
          });
}
