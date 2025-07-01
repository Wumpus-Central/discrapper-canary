(n.d(t, { Z: () => O }), n(388685));
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
    g = n(993860),
    _ = n(137162),
    h = n(15210),
    b = n(43542),
    E = n(910200),
    y = n(358595),
    C = n(981631),
    x = n(388032),
    v = n(583136);
function O(e) {
    let { invite: t, isMemberOfGuild: n, message: l, onTransitionToInviteChannel: c, onAcceptInstantInvite: d, currentUserId: p } = e,
        g = i.useRef(null),
        [h, O] = i.useState(!0),
        [I, S] = i.useState(!1),
        T = t.state === C.r2o.ACCEPTING,
        N = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        { updateButton: P, updateCopy: A } = (0, f.n2)(),
        w = p === l.author.id,
        Z = A ? 326 : 292;
    i.useLayoutEffect(() => {
        var e, t;
        S((null != (t = null == (e = g.current) ? void 0 : e.clientHeight) ? t : 0) > Z);
    }, [Z, S]);
    let R = (0, m.PC)(t),
        L = i.useCallback(() => {
            I && h && O(!1);
        }, [h, I]),
        k = i.useCallback(() => {
            I && (h || O(!0));
        }, [h, I]),
        D = i.useMemo(() => {
            var e;
            return I && (null == (e = g.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: h ? Z : g.current.clientHeight + 36 + 48,
                      transition: N ? void 0 : 'height 0.2s ease'
                  }
                : {};
        }, [h, I, N, Z]);
    return null == R
        ? (0, r.jsx)(y.Z, {})
        : (0, r.jsxs)(s.P3F, {
              className: a()(v.guildInviteContainer, { [v.clickable]: I && h }),
              onClick: L,
              style: D,
              children: [
                  (0, r.jsxs)('div', {
                      className: v.cardHeightMeasure,
                      ref: g,
                      children: [
                          A
                              ? (0, r.jsx)('div', {
                                    className: v.inviteTitleWrapper,
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'header-secondary',
                                        className: v.inviteTitle,
                                        children: w ? x.intl.string(x.t['oU/lsr']) : x.intl.string(x.t.BoQUFR)
                                    })
                                })
                              : null,
                          (0, r.jsx)(E.Z7, {
                              profile: R,
                              className: v.banner
                          }),
                          (0, r.jsx)(E.N3, { profile: R }),
                          (0, r.jsx)(b.Z, { profile: R }),
                          (0, r.jsx)(_.E, {
                              profile: R,
                              className: v.mainContent
                          })
                      ]
                  }),
                  I && !h
                      ? (0, r.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.TRANSPARENT,
                            size: s.zxk.Sizes.NONE,
                            onClick: k,
                            innerClassName: v.hideDetailsButtonInner,
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'interactive-normal',
                                children: x.intl.string(x.t.xdCLeH)
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: a()(v.footer, { [v.floatingFooter]: I }),
                      children: [
                          I && h ? (0, r.jsx)('div', { className: v.gradient }) : null,
                          (0, r.jsx)('div', {
                              className: a()(v.footerContent, { [v.collapsedFooterContent]: I && h }),
                              children: (0, r.jsx)('div', {
                                  className: v.buttonContainer,
                                  children: (0, r.jsx)(j, {
                                      invite: t,
                                      profile: R,
                                      isMemberOfGuild: n,
                                      message: l,
                                      submitting: T,
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
function j(e) {
    let { invite: t, profile: n, isMemberOfGuild: l, message: a, submitting: o, onTransitionToInviteChannel: s, onAcceptInstantInvite: u, inIterationExperiment: m } = e,
        { guildId: f, ctaType: _ } = (0, g.ZP)(n, g.F3.INVITE),
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
    return null == _
        ? null
        : (0, r.jsx)(h.o, {
              guildId: f,
              ctaType: _,
              submitting: o,
              onGoToGuild: s,
              onAcceptInvite: u,
              onStartApplication: u,
              onComplete: E,
              inIterationExperiment: m
          });
}
