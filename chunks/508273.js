(n.d(t, { Z: () => C }), n(388685));
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
    f = n(993860),
    g = n(328656),
    h = n(708321),
    _ = n(174161),
    b = n(798476),
    E = n(358595),
    x = n(981631),
    y = n(388032),
    v = n(583136);
function C(e) {
    let { invite: t, isMemberOfGuild: n, message: l, onTransitionToInviteChannel: c, onAcceptInstantInvite: d } = e,
        p = i.useRef(null),
        [f, h] = i.useState(!0),
        [C, j] = i.useState(!1),
        I = t.state === x.r2o.ACCEPTING,
        S = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        j((null != (t = null == (e = p.current) ? void 0 : e.clientHeight) ? t : 0) > 292);
    }, [j]);
    let T = (0, m.PC)(t),
        N = i.useCallback(() => {
            C && f && h(!1);
        }, [f, C]),
        P = i.useCallback(() => {
            C && (f || h(!0));
        }, [f, C]),
        A = i.useMemo(() => {
            var e;
            return C && (null == (e = p.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: f ? 292 : p.current.clientHeight + 36 + 48,
                      transition: S ? void 0 : 'height 0.2s ease'
                  }
                : {};
        }, [f, C, S]);
    return null == T
        ? (0, r.jsx)(E.Z, {})
        : (0, r.jsxs)(s.P3F, {
              className: a()(v.guildInviteContainer, { [v.clickable]: C && f }),
              onClick: N,
              style: A,
              children: [
                  (0, r.jsxs)('div', {
                      className: v.cardHeightMeasure,
                      ref: p,
                      children: [
                          (0, r.jsx)(b.Z7, {
                              profile: T,
                              className: v.banner
                          }),
                          (0, r.jsx)(b.N3, { profile: T }),
                          (0, r.jsx)(_.Z, { profile: T }),
                          (0, r.jsx)(g.E, {
                              profile: T,
                              className: v.mainContent
                          })
                      ]
                  }),
                  C && !f
                      ? (0, r.jsx)('div', {
                            className: v.hideDetailsButtonContainer,
                            children: (0, r.jsx)(s.Avr, {
                                textVariant: 'text-xs/medium',
                                variant: 'secondary',
                                size: 'sm',
                                onClick: P,
                                text: y.intl.string(y.t.xdCLeH)
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: a()(v.footer, { [v.floatingFooter]: C }),
                      children: [
                          C && f ? (0, r.jsx)('div', { className: v.gradient }) : null,
                          (0, r.jsx)('div', {
                              className: a()(v.footerContent, { [v.collapsedFooterContent]: C && f }),
                              children: (0, r.jsx)('div', {
                                  className: v.buttonContainer,
                                  children: (0, r.jsx)(O, {
                                      invite: t,
                                      profile: T,
                                      isMemberOfGuild: n,
                                      message: l,
                                      submitting: I,
                                      onTransitionToInviteChannel: c,
                                      onAcceptInstantInvite: d
                                  })
                              })
                          })
                      ]
                  })
              ]
          });
}
function O(e) {
    let { invite: t, profile: n, isMemberOfGuild: l, message: a, submitting: o, onTransitionToInviteChannel: s, onAcceptInstantInvite: u } = e,
        { guildId: m, ctaType: g } = (0, f.ZP)(n, f.F3.INVITE),
        { analyticsLocations: _ } = (0, p.ZP)(d.Z.INVITE_EMBED),
        b = i.useCallback(() => {
            let e = l ? 'transition' : 'accept';
            (0, c.r$)(
                {
                    invite: t,
                    action: e,
                    inviter_id: a.author.id,
                    invite_message_id: a.id
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
