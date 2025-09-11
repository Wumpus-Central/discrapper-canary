n.d(t, { Z: () => A }), n(388685);
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
    b = n(358595),
    y = n(981631),
    O = n(388032),
    v = n(69643);
let I = 292,
    T = 36,
    S = 48;
function A(e) {
    let { invite: t, isMemberOfGuild: n, message: a, onTransitionToInviteChannel: c, onAcceptInstantInvite: d } = e,
        f = i.useRef(null),
        [p, m] = i.useState(!0),
        [A, N] = i.useState(!1),
        R = t.state === y.r2o.ACCEPTING,
        P = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        N((null != (t = null == (e = f.current) ? void 0 : e.clientHeight) ? t : 0) > I);
    }, [N]);
    let w = (0, _.PC)(t),
        D = i.useCallback(() => {
            A && p && m(!1);
        }, [p, A]),
        x = i.useCallback(() => {
            A && (p || m(!0));
        }, [p, A]),
        L = i.useMemo(() => {
            var e;
            return A && (null == (e = f.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: p ? I : f.current.clientHeight + T + S,
                      transition: P ? void 0 : "height 0.2s ease",
                  }
                : {};
        }, [p, A, P]);
    return null == w
        ? (0, r.jsx)(b.Z, {})
        : (0, r.jsxs)(l.P3F, {
              className: o()(v.guildInviteContainer, { [v.clickable]: A && p }),
              onClick: D,
              style: L,
              children: [
                  (0, r.jsxs)("div", {
                      className: v.cardHeightMeasure,
                      ref: f,
                      children: [
                          (0, r.jsx)(E.Z7, {
                              profile: w,
                              className: v.banner,
                          }),
                          (0, r.jsx)(E.N3, { profile: w }),
                          (0, r.jsx)(g.Z, { profile: w }),
                          (0, r.jsx)(h.E, {
                              profile: w,
                              className: v.mainContent,
                          }),
                      ],
                  }),
                  A && !p
                      ? (0, r.jsx)("div", {
                            className: v.hideDetailsButtonContainer,
                            children: (0, r.jsx)(l.Avr, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: x,
                                text: O.intl.string(O.t.xdCLeH),
                            }),
                        })
                      : null,
                  (0, r.jsxs)("div", {
                      className: o()(v.footer, { [v.floatingFooter]: A }),
                      children: [
                          A && p ? (0, r.jsx)("div", { className: v.gradient }) : null,
                          (0, r.jsx)("div", {
                              className: o()(v.footerContent, { [v.collapsedFooterContent]: A && p }),
                              children: (0, r.jsx)("div", {
                                  className: v.buttonContainer,
                                  children: (0, r.jsx)(C, {
                                      invite: t,
                                      profile: w,
                                      isMemberOfGuild: n,
                                      message: a,
                                      submitting: R,
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
function C(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: a,
            message: o,
            submitting: s,
            onTransitionToInviteChannel: l,
            onAcceptInstantInvite: u,
        } = e,
        { guildId: _, ctaType: h } = (0, p.ZP)(n, p.F3.INVITE),
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
