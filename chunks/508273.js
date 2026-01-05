n.d(t, { Z: () => N }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(447543),
    u = n(607070),
    d = n(100527),
    f = n(906732),
    p = n(406218),
    _ = n(993860),
    m = n(328656),
    h = n(708321),
    g = n(174161),
    E = n(798476),
    b = n(411198),
    y = n(254887),
    O = n(358595),
    v = n(981631),
    S = n(388032),
    I = n(642438);
let T = 292,
    C = 36,
    A = 48;
function N(e) {
    let { invite: t, isMemberOfGuild: n, message: a, onTransitionToInviteChannel: c, onAcceptInstantInvite: d } = e,
        f = i.useRef(null),
        [_, h] = i.useState(!0),
        [N, R] = i.useState(!1),
        w = t.state === v.r2o.ACCEPTING,
        D = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        R((null != (t = null == (e = f.current) ? void 0 : e.clientHeight) ? t : 0) > T);
    }, [R]);
    let x = (0, p.PC)(t),
        L = i.useCallback(() => {
            N && _ && h(!1);
        }, [_, N]),
        j = i.useCallback(() => {
            N && (_ || h(!0));
        }, [_, N]),
        M = i.useMemo(() => {
            var e;
            return N && (null == (e = f.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: _ ? T : f.current.clientHeight + C + A,
                      transition: D ? void 0 : "height 0.2s ease",
                  }
                : {};
        }, [_, N, D]);
    return null == x
        ? (0, r.jsx)(O.Z, {})
        : (0, r.jsxs)(l.kL8, {
              className: o()(I.guildInviteContainer, { [I.clickable]: N && _ }),
              onClick: L,
              style: M,
              "aria-label": S.intl.string(S.t.dcl9MQ),
              children: [
                  (0, r.jsxs)("div", {
                      className: I.cardHeightMeasure,
                      ref: f,
                      children: [
                          (0, r.jsx)(E.Z7, {
                              profile: x,
                              className: I.banner,
                          }),
                          (0, r.jsx)(E.N3, { profile: x }),
                          (0, r.jsx)(g.Z, { profile: x }),
                          (0, r.jsx)(m.E, {
                              profile: x,
                              className: I.mainContent,
                          }),
                          (0, r.jsx)(y.Z, {
                              guild: null != t.guild ? (0, b.Qs)(t.guild) : null,
                              roles: t.roles,
                              className: I.rolesList,
                          }),
                      ],
                  }),
                  N && !_
                      ? (0, r.jsx)("div", {
                            className: I.hideDetailsButtonContainer,
                            children: (0, r.jsx)(l.Avr, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: j,
                                text: S.intl.string(S.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, r.jsxs)("div", {
                      className: o()(I.footer, { [I.floatingFooter]: N }),
                      children: [
                          N && _ ? (0, r.jsx)("div", { className: I.gradient }) : null,
                          (0, r.jsx)("div", {
                              className: o()(I.footerContent, { [I.collapsedFooterContent]: N && _ }),
                              children: (0, r.jsx)("div", {
                                  className: I.buttonContainer,
                                  children: (0, r.jsx)(P, {
                                      invite: t,
                                      profile: x,
                                      isMemberOfGuild: n,
                                      message: a,
                                      submitting: w,
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
function P(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: a,
            message: o,
            submitting: s,
            onTransitionToInviteChannel: l,
            onAcceptInstantInvite: u,
        } = e,
        { guildId: p, ctaType: m } = (0, _.ZP)(n, _.F3.INVITE, t.code),
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
    return null == m
        ? null
        : (0, r.jsx)(h.o, {
              guildId: p,
              ctaType: m,
              submitting: s,
              onGoToGuild: l,
              onAcceptInvite: u,
              onStartApplication: u,
              onComplete: E,
          });
}
