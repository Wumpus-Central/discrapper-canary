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
    g = n(137162),
    _ = n(15210),
    h = n(43542),
    b = n(910200),
    E = n(358595),
    y = n(981631),
    C = n(388032),
    x = n(583136);
function v(e) {
    let { invite: t, isMemberOfGuild: n, message: l, onTransitionToInviteChannel: c, onAcceptInstantInvite: d } = e,
        p = i.useRef(null),
        [f, _] = i.useState(!0),
        [v, j] = i.useState(!1),
        I = t.state === y.r2o.ACCEPTING,
        S = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        j((null != (t = null == (e = p.current) ? void 0 : e.clientHeight) ? t : 0) > 292);
    }, [j]);
    let T = (0, m.PC)(t),
        N = i.useCallback(() => {
            v && f && _(!1);
        }, [f, v]),
        P = i.useCallback(() => {
            v && (f || _(!0));
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
              className: a()(x.guildInviteContainer, { [x.clickable]: v && f }),
              onClick: N,
              style: A,
              children: [
                  (0, r.jsxs)('div', {
                      className: x.cardHeightMeasure,
                      ref: p,
                      children: [
                          (0, r.jsx)(b.Z7, {
                              profile: T,
                              className: x.banner
                          }),
                          (0, r.jsx)(b.N3, { profile: T }),
                          (0, r.jsx)(h.Z, { profile: T }),
                          (0, r.jsx)(g.E, {
                              profile: T,
                              className: x.mainContent
                          })
                      ]
                  }),
                  v && !f
                      ? (0, r.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.TRANSPARENT,
                            size: s.zxk.Sizes.NONE,
                            onClick: P,
                            innerClassName: x.hideDetailsButtonInner,
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'interactive-normal',
                                children: C.intl.string(C.t.xdCLeH)
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: a()(x.footer, { [x.floatingFooter]: v }),
                      children: [
                          v && f ? (0, r.jsx)('div', { className: x.gradient }) : null,
                          (0, r.jsx)('div', {
                              className: a()(x.footerContent, { [x.collapsedFooterContent]: v && f }),
                              children: (0, r.jsx)('div', {
                                  className: x.buttonContainer,
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
