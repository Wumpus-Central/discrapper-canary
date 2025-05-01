n.d(t, { Z: () => O }), n(388685);
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
    h = n(137162),
    g = n(15210),
    _ = n(43542),
    b = n(910200),
    x = n(358595),
    y = n(981631),
    E = n(388032),
    v = n(583136);
function O(e) {
    let { invite: t, isMemberOfGuild: n, message: l, onTransitionToInviteChannel: c, onAcceptInstantInvite: d } = e,
        p = i.useRef(null),
        [f, g] = i.useState(!0),
        [O, C] = i.useState(!1),
        S = t.state === y.r2o.ACCEPTING,
        I = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        C((null != (t = null == (e = p.current) ? void 0 : e.clientHeight) ? t : 0) > 328);
    }, [C]);
    let N = (0, m.PC)(t),
        T = i.useCallback(() => {
            O && f && g(!1);
        }, [f, O]),
        P = i.useCallback(() => {
            O && (f || g(!0));
        }, [f, O]),
        A = i.useMemo(() => {
            var e;
            return O && (null == (e = p.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: f ? 328 : p.current.clientHeight + 24 + 65,
                      transition: I ? void 0 : 'height 0.2s ease'
                  }
                : {};
        }, [f, O, I]);
    return null == N
        ? (0, r.jsx)(x.Z, {})
        : (0, r.jsxs)(s.P3F, {
              className: a()(v.guildInviteContainer, { [v.clickable]: O && f }),
              onClick: T,
              style: A,
              children: [
                  (0, r.jsxs)('div', {
                      className: v.cardHeightMeasure,
                      ref: p,
                      children: [
                          (0, r.jsx)(b.Z7, {
                              profile: N,
                              className: v.banner
                          }),
                          (0, r.jsx)(b.N3, { profile: N }),
                          (0, r.jsx)(_.Z, { profile: N }),
                          (0, r.jsx)(h.E, {
                              profile: N,
                              className: v.mainContent
                          })
                      ]
                  }),
                  O && !f
                      ? (0, r.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.TRANSPARENT,
                            size: s.zxk.Sizes.NONE,
                            onClick: P,
                            className: v.hideDetailsButton,
                            innerClassName: v.hideDetailsButtonInner,
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'interactive-normal',
                                children: E.intl.string(E.t.xdCLeH)
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: a()(v.footer, { [v.floatingFooter]: O }),
                      children: [
                          O && f ? (0, r.jsx)('div', { className: v.gradient }) : null,
                          (0, r.jsxs)('div', {
                              className: v.footerContent,
                              children: [
                                  (0, r.jsx)('div', { className: v.separator }),
                                  (0, r.jsx)('div', {
                                      className: v.buttonContainer,
                                      children: (0, r.jsx)(j, {
                                          invite: t,
                                          profile: N,
                                          isMemberOfGuild: n,
                                          message: l,
                                          submitting: S,
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
function j(e) {
    let { invite: t, profile: n, isMemberOfGuild: l, message: a, submitting: o, onTransitionToInviteChannel: s, onAcceptInstantInvite: u } = e,
        { guildId: m, ctaType: h } = (0, f.ZP)(n, f.F3.INVITE),
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
    return null == h
        ? null
        : (0, r.jsx)(g.o, {
              guildId: m,
              ctaType: h,
              submitting: o,
              onGoToGuild: s,
              onAcceptInvite: u,
              onStartApplication: u,
              onComplete: b
          });
}
