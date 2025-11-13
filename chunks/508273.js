n.d(t, { Z: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(447543),
    u = n(607070),
    d = n(100527),
    f = n(906732),
    _ = n(406218),
    p = n(993860),
    h = n(328656),
    m = n(708321),
    g = n(174161),
    E = n(798476),
    b = n(254887),
    y = n(358595),
    O = n(981631),
    v = n(388032),
    I = n(492681);
let T = 292,
    S = 36,
    A = 48;
function C(e) {
    let { invite: t, isMemberOfGuild: n, message: a, onTransitionToInviteChannel: c, onAcceptInstantInvite: d } = e,
        f = i.useRef(null),
        [p, m] = i.useState(!0),
        [C, R] = i.useState(!1),
        P = t.state === O.r2o.ACCEPTING,
        D = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        R((null != (t = null == (e = f.current) ? void 0 : e.clientHeight) ? t : 0) > T);
    }, [R]);
    let w = (0, _.PC)(t),
        x = i.useCallback(() => {
            C && p && m(!1);
        }, [p, C]),
        L = i.useCallback(() => {
            C && (p || m(!0));
        }, [p, C]),
        M = i.useMemo(() => {
            var e;
            return C && (null == (e = f.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: p ? T : f.current.clientHeight + S + A,
                      transition: D ? void 0 : "height 0.2s ease",
                  }
                : {};
        }, [p, C, D]);
    return null == w
        ? (0, r.jsx)(y.Z, {})
        : (0, r.jsxs)(l.kL8, {
              className: o()(I.guildInviteContainer, { [I.clickable]: C && p }),
              onClick: x,
              style: M,
              "aria-label": v.intl.string(v.t.dcl9MQ),
              children: [
                  (0, r.jsxs)("div", {
                      className: I.cardHeightMeasure,
                      ref: f,
                      children: [
                          (0, r.jsx)(E.Z7, {
                              profile: w,
                              className: I.banner,
                          }),
                          (0, r.jsx)(E.N3, { profile: w }),
                          (0, r.jsx)(g.Z, { profile: w }),
                          (0, r.jsx)(h.E, {
                              profile: w,
                              className: I.mainContent,
                          }),
                          (0, r.jsx)(b.Z, { invite: t }),
                      ],
                  }),
                  C && !p
                      ? (0, r.jsx)("div", {
                            className: I.hideDetailsButtonContainer,
                            children: (0, r.jsx)(l.Avr, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: L,
                                text: v.intl.string(v.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, r.jsxs)("div", {
                      className: o()(I.footer, { [I.floatingFooter]: C }),
                      children: [
                          C && p ? (0, r.jsx)("div", { className: I.gradient }) : null,
                          (0, r.jsx)("div", {
                              className: o()(I.footerContent, { [I.collapsedFooterContent]: C && p }),
                              children: (0, r.jsx)("div", {
                                  className: I.buttonContainer,
                                  children: (0, r.jsx)(N, {
                                      invite: t,
                                      profile: w,
                                      isMemberOfGuild: n,
                                      message: a,
                                      submitting: P,
                                      onTransitionToInviteChannel: c,
                                      onAcceptInstantInvite: d,
                                  }),
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function N(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: a,
            message: o,
            submitting: s,
            onTransitionToInviteChannel: l,
            onAcceptInstantInvite: u,
        } = e,
        { guildId: _, ctaType: h } = (0, p.ZP)(n, p.F3.INVITE, t.code),
        { analyticsLocations: g } = (0, f.ZP)(d.Z.INVITE_EMBED),
        E = i.useCallback(() => {
            let e = a ? "transition" : "accept";
            (0, c.r$)(
                {
                    invite: t,
                    action: e,
                    inviter_id: o.author.id,
                    invite_message_id: o.id,
                },
                g,
            );
        }, [t, o, g, a]);
    return null == h
        ? null
        : (0, r.jsx)(m.o, {
              guildId: _,
              ctaType: h,
              submitting: s,
              onGoToGuild: l,
              onAcceptInvite: u,
              onStartApplication: u,
              onComplete: E,
          });
}
