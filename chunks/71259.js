n.d(t, { Z: () => O });
var r = n(951288),
    i = n(647438),
    o = n(442837),
    l = n(481060),
    s = n(367907),
    a = n(881998),
    c = n(553795),
    d = n(626135),
    u = n(745752),
    p = n(45966),
    m = n(637853),
    f = n(657021),
    g = n(290511),
    h = n(981631),
    x = n(388032),
    _ = n(362791);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { guildId: t, onComplete: n, isLastStep: O, disableTracking: j } = e,
        y = i.useRef(!1),
        { onboardingConnections: N, isLoading: P } = (0, o.cj)([p.Z], () => ({
            onboardingConnections: p.Z.getConnections(t),
            isLoading: p.Z.isLoading(),
        })),
        C = (0, o.e7)(
            [a.default, c.Z],
            () =>
                N.some((e) => {
                    if (e.connection_type === g.zz.APPLICATION && null != e.application_id) {
                        let t = a.default.getNewestTokenForApplication(e.application_id);
                        return (
                            a.default.getFetchStateForApplication(e.application_id) === a.FetchState.FETCHED &&
                            null != t
                        );
                    }
                    if (e.connection_type === g.zz.PROVIDER_CONNECTED_ACCOUNT && null != e.provider_id) {
                        let t = c.Z.getAccount(null, e.provider_id);
                        return null != t && !t.revoked;
                    }
                    return !1;
                }),
            [N],
        );
    i.useEffect(() => {
        if (j || P || 0 === N.length || y.current) return;
        let e = (0, m.OZ)(N),
            n = (0, m.N4)(N);
        d.default.track(
            h.rMx.GUILD_ONBOARDING_STEP_VIEWED,
            v(b({}, (0, s.hH)(t)), {
                step: u.Xx,
                required: !1,
                provider_connections_connected: e.connected,
                provider_connections_not_connected: e.notConnected,
                application_connections_connected: n.connected,
                application_connections_not_connected: n.notConnected,
            }),
        ),
            (y.current = !0);
    }, [t, P, N, j]);
    let E = i.useCallback(() => {
        if (!j) {
            let e = (0, m.OZ)(N),
                n = (0, m.N4)(N);
            d.default.track(
                h.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                v(b({}, (0, s.hH)(t)), {
                    step: u.Xx,
                    skipped: !C,
                    back: !1,
                    options_selected: 0,
                    in_onboarding: !0,
                    is_final_step: O,
                    provider_connections_connected: e.connected,
                    provider_connections_not_connected: e.notConnected,
                    application_connections_connected: n.connected,
                    application_connections_not_connected: n.notConnected,
                }),
            );
        }
        n();
    }, [n, j, t, N, C, O]);
    return P
        ? (0, r.jsxs)("div", {
              className: _.loadingContainer,
              children: [
                  (0, r.jsx)(l.$jN, {}),
                  (0, r.jsx)(l.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: x.intl.string(x.t.ZTNur7),
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: _.container,
              children: (0, r.jsxs)("div", {
                  className: _.content,
                  children: [
                      (0, r.jsxs)("div", {
                          className: _.scrollerContent,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: _.header,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: _.headerTitle,
                                          children: (0, r.jsx)(l.Heading, {
                                              variant: "heading-xl/semibold",
                                              children: x.intl.string(x.t.eDVMrA),
                                          }),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: _.headerDescription,
                                          children: (0, r.jsx)(l.Text, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: x.intl.string(x.t.BozOXu),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: _.connectionsListScroller,
                                  children: (0, r.jsx)("div", {
                                      className: _.connectionsList,
                                      children: N.map((e, n) =>
                                          (0, r.jsx)(
                                              f.Z,
                                              {
                                                  connection: e,
                                                  guildId: t,
                                                  location: "guild-onboarding",
                                              },
                                              n,
                                          ),
                                      ),
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: _.footer,
                          children: (0, r.jsxs)("div", {
                              className: _.actions,
                              children: [
                                  (0, r.jsx)("div", {}),
                                  (0, r.jsx)("div", {
                                      className: _.primaryActions,
                                      children: (0, r.jsx)(l.Button, {
                                          variant: C ? "primary" : "secondary",
                                          onClick: E,
                                          text: C
                                              ? O
                                                  ? "".concat(x.intl.string(x.t["8SuVoE"]), " \uD83C\uDF89")
                                                  : x.intl.string(x.t.PDTjLN)
                                              : x.intl.string(x.t["5Wxrcd"]),
                                          icon: O ? void 0 : l.d4D,
                                          iconPosition: "end",
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
          });
}
