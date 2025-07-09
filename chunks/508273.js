(n.d(t, { Z: () => O }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(447543),
    d = n(607070),
    p = n(100527),
    m = n(906732),
    f = n(406218),
    _ = n(993860),
    g = n(328656),
    h = n(708321),
    b = n(174161),
    E = n(798476),
    y = n(358595),
    x = n(981631),
    C = n(388032),
    v = n(583136);
function O(e) {
    let { invite: t, isMemberOfGuild: n, message: l, onTransitionToInviteChannel: u, onAcceptInstantInvite: p } = e,
        m = i.useRef(null),
        [_, h] = i.useState(!0),
        [O, I] = i.useState(!1),
        S = t.state === x.r2o.ACCEPTING,
        T = (0, o.e7)([d.Z], () => d.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        I((null != (t = null == (e = m.current) ? void 0 : e.clientHeight) ? t : 0) > 292);
    }, [I]);
    let N = (0, f.PC)(t),
        P = i.useCallback(() => {
            O && _ && h(!1);
        }, [_, O]),
        A = i.useCallback(() => {
            O && (_ || h(!0));
        }, [_, O]),
        w = i.useMemo(() => {
            var e;
            return O && (null == (e = m.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: _ ? 292 : m.current.clientHeight + 36 + 48,
                      transition: T ? void 0 : 'height 0.2s ease'
                  }
                : {};
        }, [_, O, T]);
    return null == N
        ? (0, r.jsx)(y.Z, {})
        : (0, r.jsxs)(c.P3F, {
              className: a()(v.guildInviteContainer, { [v.clickable]: O && _ }),
              onClick: P,
              style: w,
              children: [
                  (0, r.jsxs)('div', {
                      className: v.cardHeightMeasure,
                      ref: m,
                      children: [
                          (0, r.jsx)(E.Z7, {
                              profile: N,
                              className: v.banner
                          }),
                          (0, r.jsx)(E.N3, { profile: N }),
                          (0, r.jsx)(b.Z, { profile: N }),
                          (0, r.jsx)(g.E, {
                              profile: N,
                              className: v.mainContent
                          })
                      ]
                  }),
                  O && !_
                      ? (0, r.jsx)(s.zx, {
                            look: s.zx.Looks.LINK,
                            color: s.zx.Colors.TRANSPARENT,
                            size: s.zx.Sizes.NONE,
                            onClick: A,
                            innerClassName: v.hideDetailsButtonInner,
                            children: (0, r.jsx)(c.Text, {
                                variant: 'text-xs/medium',
                                color: 'interactive-normal',
                                children: C.intl.string(C.t.xdCLeH)
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: a()(v.footer, { [v.floatingFooter]: O }),
                      children: [
                          O && _ ? (0, r.jsx)('div', { className: v.gradient }) : null,
                          (0, r.jsx)('div', {
                              className: a()(v.footerContent, { [v.collapsedFooterContent]: O && _ }),
                              children: (0, r.jsx)('div', {
                                  className: v.buttonContainer,
                                  children: (0, r.jsx)(j, {
                                      invite: t,
                                      profile: N,
                                      isMemberOfGuild: n,
                                      message: l,
                                      submitting: S,
                                      onTransitionToInviteChannel: u,
                                      onAcceptInstantInvite: p
                                  })
                              })
                          })
                      ]
                  })
              ]
          });
}
function j(e) {
    let { invite: t, profile: n, isMemberOfGuild: l, message: a, submitting: o, onTransitionToInviteChannel: s, onAcceptInstantInvite: c } = e,
        { guildId: d, ctaType: f } = (0, _.ZP)(n, _.F3.INVITE),
        { analyticsLocations: g } = (0, m.ZP)(p.Z.INVITE_EMBED),
        b = i.useCallback(() => {
            let e = l ? 'transition' : 'accept';
            (0, u.r$)(
                {
                    invite: t,
                    action: e,
                    inviter_id: a.author.id,
                    invite_message_id: a.id
                },
                g
            );
        }, [t, a, g, l]);
    return null == f
        ? null
        : (0, r.jsx)(h.o, {
              guildId: d,
              ctaType: f,
              submitting: o,
              onGoToGuild: s,
              onAcceptInvite: c,
              onStartApplication: c,
              onComplete: b
          });
}
