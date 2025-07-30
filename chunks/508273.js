(n.d(t, { Z: () => v }), n(388685));
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
    _ = n(328656),
    g = n(708321),
    h = n(174161),
    b = n(798476),
    E = n(358595),
    C = n(981631),
    O = n(388032),
    y = n(583136);
function v(e) {
    let { invite: t, isMemberOfGuild: n, message: l, onTransitionToInviteChannel: c, onAcceptInstantInvite: d } = e,
        p = i.useRef(null),
        [f, g] = i.useState(!0),
        [v, I] = i.useState(!1),
        j = t.state === C.r2o.ACCEPTING,
        S = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        I((null != (t = null == (e = p.current) ? void 0 : e.clientHeight) ? t : 0) > 292);
    }, [I]);
    let T = (0, m.PC)(t),
        N = i.useCallback(() => {
            v && f && g(!1);
        }, [f, v]),
        P = i.useCallback(() => {
            v && (f || g(!0));
        }, [f, v]),
        A = i.useMemo(() => {
            var e;
            return v && (null == (e = p.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: f ? 292 : p.current.clientHeight + 36 + 48,
                      transition: S ? void 0 : 'height 0.2s ease'
                  }
                : {};
        }, [f, v, S]);
    return null == T
        ? (0, r.jsx)(E.Z, {})
        : (0, r.jsxs)(s.P3F, {
              className: a()(y.guildInviteContainer, { [y.clickable]: v && f }),
              onClick: N,
              style: A,
              children: [
                  (0, r.jsxs)('div', {
                      className: y.cardHeightMeasure,
                      ref: p,
                      children: [
                          (0, r.jsx)(b.Z7, {
                              profile: T,
                              className: y.banner
                          }),
                          (0, r.jsx)(b.N3, { profile: T }),
                          (0, r.jsx)(h.Z, { profile: T }),
                          (0, r.jsx)(_.E, {
                              profile: T,
                              className: y.mainContent
                          })
                      ]
                  }),
                  v && !f
                      ? (0, r.jsx)('div', {
                            className: y.hideDetailsButtonContainer,
                            children: (0, r.jsx)(s.Avr, {
                                textVariant: 'text-xs/medium',
                                variant: 'secondary',
                                size: 'sm',
                                onClick: P,
                                text: O.intl.string(O.t.xdCLeH)
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: a()(y.footer, { [y.floatingFooter]: v }),
                      children: [
                          v && f ? (0, r.jsx)('div', { className: y.gradient }) : null,
                          (0, r.jsx)('div', {
                              className: a()(y.footerContent, { [y.collapsedFooterContent]: v && f }),
                              children: (0, r.jsx)('div', {
                                  className: y.buttonContainer,
                                  children: (0, r.jsx)(x, {
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
function x(e) {
    let { invite: t, profile: n, isMemberOfGuild: l, message: a, submitting: o, onTransitionToInviteChannel: s, onAcceptInstantInvite: u } = e,
        { guildId: m, ctaType: _ } = (0, f.ZP)(n, f.F3.INVITE),
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
    return null == _
        ? null
        : (0, r.jsx)(g.o, {
              guildId: m,
              ctaType: _,
              submitting: o,
              onGoToGuild: s,
              onAcceptInvite: u,
              onStartApplication: u,
              onComplete: b
          });
}
