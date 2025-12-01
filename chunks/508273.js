n.d(t, { Z: () => C }), n(388685);
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
    b = n(254887),
    y = n(358595),
    O = n(981631),
    v = n(388032),
    S = n(492681);
let I = 292,
    T = 36,
    A = 48;
function C(e) {
    let { invite: t, isMemberOfGuild: n, message: a, onTransitionToInviteChannel: c, onAcceptInstantInvite: d } = e,
        f = i.useRef(null),
        [_, h] = i.useState(!0),
        [C, P] = i.useState(!1),
        R = t.state === O.r2o.ACCEPTING,
        w = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        P((null != (t = null == (e = f.current) ? void 0 : e.clientHeight) ? t : 0) > I);
    }, [P]);
    let D = (0, p.PC)(t),
        x = i.useCallback(() => {
            C && _ && h(!1);
        }, [_, C]),
        L = i.useCallback(() => {
            C && (_ || h(!0));
        }, [_, C]),
        j = i.useMemo(() => {
            var e;
            return C && (null == (e = f.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: _ ? I : f.current.clientHeight + T + A,
                      transition: w ? void 0 : "height 0.2s ease",
                  }
                : {};
        }, [_, C, w]);
    return null == D
        ? (0, r.jsx)(y.Z, {})
        : (0, r.jsxs)(l.kL8, {
              className: o()(S.guildInviteContainer, { [S.clickable]: C && _ }),
              onClick: x,
              style: j,
              "aria-label": v.intl.string(v.t.dcl9MQ),
              children: [
                  (0, r.jsxs)("div", {
                      className: S.cardHeightMeasure,
                      ref: f,
                      children: [
                          (0, r.jsx)(E.Z7, {
                              profile: D,
                              className: S.banner,
                          }),
                          (0, r.jsx)(E.N3, { profile: D }),
                          (0, r.jsx)(g.Z, { profile: D }),
                          (0, r.jsx)(m.E, {
                              profile: D,
                              className: S.mainContent,
                          }),
                          (0, r.jsx)(b.Z, { invite: t }),
                      ],
                  }),
                  C && !_
                      ? (0, r.jsx)("div", {
                            className: S.hideDetailsButtonContainer,
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
                      className: o()(S.footer, { [S.floatingFooter]: C }),
                      children: [
                          C && _ ? (0, r.jsx)("div", { className: S.gradient }) : null,
                          (0, r.jsx)("div", {
                              className: o()(S.footerContent, { [S.collapsedFooterContent]: C && _ }),
                              children: (0, r.jsx)("div", {
                                  className: S.buttonContainer,
                                  children: (0, r.jsx)(N, {
                                      invite: t,
                                      profile: D,
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
