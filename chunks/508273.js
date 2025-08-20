n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(447543),
    u = n(607070),
    d = n(100527),
    p = n(906732),
    m = n(406218),
    f = n(993860),
    g = n(328656),
    _ = n(708321),
    h = n(174161),
    b = n(798476),
    E = n(358595),
    C = n(981631),
    v = n(388032),
    O = n(492681);
function y(e) {
    let { invite: t, isMemberOfGuild: n, message: l, onTransitionToInviteChannel: c, onAcceptInstantInvite: d } = e,
        p = i.useRef(null),
        [f, _] = i.useState(!0),
        [y, j] = i.useState(!1),
        I = t.state === C.r2o.ACCEPTING,
        S = (0, a.e7)([u.Z], () => u.Z.useReducedMotion);
    i.useLayoutEffect(() => {
        var e, t;
        j((null != (t = null == (e = p.current) ? void 0 : e.clientHeight) ? t : 0) > 292);
    }, [j]);
    let T = (0, m.PC)(t),
        P = i.useCallback(() => {
            y && f && _(!1);
        }, [f, y]),
        N = i.useCallback(() => {
            y && (f || _(!0));
        }, [f, y]),
        A = i.useMemo(() => {
            var e;
            return y && (null == (e = p.current) ? void 0 : e.clientHeight) != null
                ? {
                      height: f ? 292 : p.current.clientHeight + 36 + 48,
                      transition: S ? void 0 : "height 0.2s ease",
                  }
                : {};
        }, [f, y, S]);
    return null == T
        ? (0, r.jsx)(E.Z, {})
        : (0, r.jsxs)(s.P3F, {
              className: o()(O.guildInviteContainer, { [O.clickable]: y && f }),
              onClick: P,
              style: A,
              children: [
                  (0, r.jsxs)("div", {
                      className: O.cardHeightMeasure,
                      ref: p,
                      children: [
                          (0, r.jsx)(b.Z7, {
                              profile: T,
                              className: O.banner,
                          }),
                          (0, r.jsx)(b.N3, { profile: T }),
                          (0, r.jsx)(h.Z, { profile: T }),
                          (0, r.jsx)(g.E, {
                              profile: T,
                              className: O.mainContent,
                          }),
                      ],
                  }),
                  y && !f
                      ? (0, r.jsx)("div", {
                            className: O.hideDetailsButtonContainer,
                            children: (0, r.jsx)(s.Avr, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: N,
                                text: v.intl.string(v.t.xdCLeH),
                            }),
                        })
                      : null,
                  (0, r.jsxs)("div", {
                      className: o()(O.footer, { [O.floatingFooter]: y }),
                      children: [
                          y && f ? (0, r.jsx)("div", { className: O.gradient }) : null,
                          (0, r.jsx)("div", {
                              className: o()(O.footerContent, { [O.collapsedFooterContent]: y && f }),
                              children: (0, r.jsx)("div", {
                                  className: O.buttonContainer,
                                  children: (0, r.jsx)(x, {
                                      invite: t,
                                      profile: T,
                                      isMemberOfGuild: n,
                                      message: l,
                                      submitting: I,
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
function x(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: l,
            message: o,
            submitting: a,
            onTransitionToInviteChannel: s,
            onAcceptInstantInvite: u,
        } = e,
        { guildId: m, ctaType: g } = (0, f.ZP)(n, f.F3.INVITE),
        { analyticsLocations: h } = (0, p.ZP)(d.Z.INVITE_EMBED),
        b = i.useCallback(() => {
            let e = l ? "transition" : "accept";
            (0, c.r$)(
                {
                    invite: t,
                    action: e,
                    inviter_id: o.author.id,
                    invite_message_id: o.id,
                },
                h,
            );
        }, [t, o, h, l]);
    return null == g
        ? null
        : (0, r.jsx)(_.o, {
              guildId: m,
              ctaType: g,
              submitting: a,
              onGoToGuild: s,
              onAcceptInvite: u,
              onStartApplication: u,
              onComplete: b,
          });
}
