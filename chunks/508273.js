(n.d(t, { Z: () => x }), n(388685));
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
    _ = n(708321),
    h = n(174161),
    b = n(798476),
    E = n(358595),
    C = n(981631),
    v = n(388032),
    O = n(583136);
function x(e) {
    let { invite: t, isMemberOfGuild: n, message: l, onTransitionToInviteChannel: c, onAcceptInstantInvite: d } = e,
        p = i.useRef(null),
        [f, _] = i.useState(!0),
        [x, I] = i.useState(!1),
        j = t.state === C.r2o.ACCEPTING,
        S = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        I((null != (t = null == (e = p.current) ? void 0 : e.clientHeight) ? t : 0) > 292);
    }, [I]);
    let T = (0, m.PC)(t),
        N = i.useCallback(() => {
            x && f && _(!1);
        }, [f, x]),
        P = i.useCallback(() => {
            x && (f || _(!0));
        }, [f, x]),
        A = i.useMemo(() => {
            var e;
            return x && (null == (e = p.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: f ? 292 : p.current.clientHeight + 36 + 48,
                      transition: S ? void 0 : 'height 0.2s ease'
                  }
                : {};
        }, [f, x, S]);
    return null == T
        ? (0, r.jsx)(E.Z, {})
        : (0, r.jsxs)(s.P3F, {
              className: a()(O.guildInviteContainer, { [O.clickable]: x && f }),
              onClick: N,
              style: A,
              children: [
                  (0, r.jsxs)('div', {
                      className: O.cardHeightMeasure,
                      ref: p,
                      children: [
                          (0, r.jsx)(b.Z7, {
                              profile: T,
                              className: O.banner
                          }),
                          (0, r.jsx)(b.N3, { profile: T }),
                          (0, r.jsx)(h.Z, { profile: T }),
                          (0, r.jsx)(g.E, {
                              profile: T,
                              className: O.mainContent
                          })
                      ]
                  }),
                  x && !f
                      ? (0, r.jsx)('div', {
                            className: O.hideDetailsButtonContainer,
                            children: (0, r.jsx)(s.Avr, {
                                textVariant: 'text-xs/medium',
                                variant: 'secondary',
                                size: 'sm',
                                onClick: P,
                                text: v.intl.string(v.t.xdCLeH)
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: a()(O.footer, { [O.floatingFooter]: x }),
                      children: [
                          x && f ? (0, r.jsx)('div', { className: O.gradient }) : null,
                          (0, r.jsx)('div', {
                              className: a()(O.footerContent, { [O.collapsedFooterContent]: x && f }),
                              children: (0, r.jsx)('div', {
                                  className: O.buttonContainer,
                                  children: (0, r.jsx)(y, {
                                      invite: t,
                                      profile: T,
                                      isMemberOfGuild: n,
                                      message: l,
                                      submitting: j,
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
function y(e) {
    let { invite: t, profile: n, isMemberOfGuild: l, message: a, submitting: o, onTransitionToInviteChannel: s, onAcceptInstantInvite: u } = e,
        { guildId: m, ctaType: g } = (0, f.ZP)(n, f.F3.INVITE),
        { analyticsLocations: h } = (0, p.ZP)(d.Z.INVITE_EMBED),
        b = i.useCallback(() => {
            let e = l ? 'transition' : 'accept';
            (0, c.r$)(
                {
                    invite: t,
                    action: e,
                    inviter_id: a.author.id,
                    invite_message_id: a.id
                },
                h
            );
        }, [t, a, h, l]);
    return null == g
        ? null
        : (0, r.jsx)(_.o, {
              guildId: m,
              ctaType: g,
              submitting: o,
              onGoToGuild: s,
              onAcceptInvite: u,
              onStartApplication: u,
              onComplete: b
          });
}
