n.d(t, { Z: () => N }), n(388685), n(953529);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
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
    v = n(981631),
    E = n(388032),
    O = n(583136);
function N(e) {
    let { invite: t, isMemberOfGuild: n, inviterId: a, onTransitionToInviteChannel: c, onAcceptInstantInvite: d } = e,
        p = i.useRef(null),
        [f, h] = i.useState(!0),
        [N, C] = i.useState(!1),
        S = t.state === v.r2o.ACCEPTING,
        I = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        C((null != (t = null == (e = p.current) ? void 0 : e.clientHeight) ? t : 0) > 328);
    }, [C]);
    let T = (0, m.PC)(t),
        P = i.useCallback(() => {
            N && f && h(!1);
        }, [f, N]),
        A = i.useCallback(() => {
            N && (f || h(!0));
        }, [f, N]),
        w = i.useMemo(() => {
            var e;
            return N && (null == (e = p.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: f ? 328 : p.current.clientHeight + 24 + 65,
                      transition: I ? void 0 : 'height 0.2s ease'
                  }
                : {};
        }, [f, N, I]);
    return null == T
        ? (0, r.jsx)(y.Z, {})
        : (0, r.jsxs)(s.P3F, {
              className: l()(O.guildInviteContainer, { [O.clickable]: N && f }),
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
                  N && !f
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
                                children: E.NW.string(E.t.xdCLeH)
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: l()(O.footer, { [O.floatingFooter]: N }),
                      children: [
                          N && f ? (0, r.jsx)('div', { className: O.gradient }) : null,
                          (0, r.jsxs)('div', {
                              className: O.footerContent,
                              children: [
                                  (0, r.jsx)('div', { className: O.separator }),
                                  (0, r.jsx)('div', {
                                      className: O.buttonContainer,
                                      children: (0, r.jsx)(j, {
                                          invite: t,
                                          profile: T,
                                          isMemberOfGuild: n,
                                          inviterId: a,
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
    let { invite: t, profile: n, isMemberOfGuild: a, inviterId: l, submitting: o, onTransitionToInviteChannel: s, onAcceptInstantInvite: u } = e,
        { guildId: m, ctaType: g } = (0, f.ZP)(n, f.F3.INVITE),
        { analyticsLocations: _ } = (0, p.ZP)(d.Z.INVITE_EMBED),
        b = i.useCallback(() => {
            let e = a ? 'transition' : 'accept';
            (0, c.r$)(
                {
                    invite: t,
                    action: e,
                    inviter_id: l
                },
                _
            );
        }, [t, l, _, a]);
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
