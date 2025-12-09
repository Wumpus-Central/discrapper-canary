n.d(t, { Z: () => j });
var r = n(54381),
    i = n(473749),
    o = n(442837),
    l = n(481060),
    s = n(100527),
    a = n(367907),
    c = n(881998),
    d = n(553795),
    u = n(626135),
    p = n(745752),
    m = n(45966),
    f = n(637853),
    g = n(657021),
    h = n(290511),
    x = n(981631),
    _ = n(388032),
    b = n(362791);
function v(e) {
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
function O(e, t) {
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
function j(e) {
    let { guildId: t, onComplete: n, isLastStep: j, disableTracking: y } = e,
        N = i.useRef(!1),
        { onboardingConnections: P, isLoading: C } = (0, o.cj)([m.Z], () => ({
            onboardingConnections: m.Z.getConnections(t),
            isLoading: m.Z.isLoading(),
        })),
        E = (0, o.e7)(
            [c.default, d.Z],
            () =>
                P.some((e) => {
                    if (e.connection_type === h.zz.APPLICATION && null != e.application_id) {
                        let t = c.default.getNewestTokenForApplication(e.application_id);
                        return (
                            c.default.getFetchStateForApplication(e.application_id) === c.FetchState.FETCHED &&
                            null != t
                        );
                    }
                    if (e.connection_type === h.zz.PROVIDER_CONNECTED_ACCOUNT && null != e.provider_id) {
                        let t = d.Z.getAccount(null, e.provider_id);
                        return null != t && !t.revoked;
                    }
                    return !1;
                }),
            [P],
        );
    i.useEffect(() => {
        if (y || C || 0 === P.length || N.current) return;
        let e = (0, f.OZ)(P),
            n = (0, f.N4)(P);
        u.default.track(
            x.rMx.GUILD_ONBOARDING_STEP_VIEWED,
            O(v({}, (0, a.hH)(t)), {
                step: p.Xx,
                required: !1,
                provider_connections_connected: e.connected,
                provider_connections_not_connected: e.notConnected,
                application_connections_connected: n.connected,
                application_connections_not_connected: n.notConnected,
            }),
        ),
            (N.current = !0);
    }, [t, C, P, y]);
    let D = i.useCallback(() => {
        if (!y) {
            let e = (0, f.OZ)(P),
                n = (0, f.N4)(P);
            u.default.track(
                x.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                O(v({}, (0, a.hH)(t)), {
                    step: p.Xx,
                    skipped: !E,
                    back: !1,
                    options_selected: 0,
                    in_onboarding: !0,
                    is_final_step: j,
                    provider_connections_connected: e.connected,
                    provider_connections_not_connected: e.notConnected,
                    application_connections_connected: n.connected,
                    application_connections_not_connected: n.notConnected,
                }),
            );
        }
        n();
    }, [n, y, t, P, E, j]);
    return C
        ? (0, r.jsxs)("div", {
              className: b.loadingContainer,
              children: [
                  (0, r.jsx)(l.$jN, {}),
                  (0, r.jsx)(l.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: _.intl.string(_.t.ZTNur7),
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: b.container,
              children: (0, r.jsxs)("div", {
                  className: b.content,
                  children: [
                      (0, r.jsxs)("div", {
                          className: b.scrollerContent,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: b.header,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: b.headerTitle,
                                          children: (0, r.jsx)(l.Heading, {
                                              variant: "heading-xl/semibold",
                                              children: _.intl.string(_.t.eDVMrA),
                                          }),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: b.headerDescription,
                                          children: (0, r.jsx)(l.Text, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: _.intl.string(_.t.BozOXu),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: b.connectionsListScroller,
                                  children: (0, r.jsx)("div", {
                                      className: b.connectionsList,
                                      children: P.map((e, n) =>
                                          (0, r.jsx)(
                                              g.Z,
                                              {
                                                  connection: e,
                                                  guildId: t,
                                                  location: s.Z.GUILD_ONBOARDING,
                                              },
                                              n,
                                          ),
                                      ),
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: b.footer,
                          children: (0, r.jsxs)("div", {
                              className: b.actions,
                              children: [
                                  (0, r.jsx)("div", {}),
                                  (0, r.jsx)("div", {
                                      className: b.primaryActions,
                                      children: (0, r.jsx)(l.Button, {
                                          variant: E ? "primary" : "secondary",
                                          onClick: D,
                                          text: E
                                              ? j
                                                  ? "".concat(_.intl.string(_.t["8SuVoE"]), " \uD83C\uDF89")
                                                  : _.intl.string(_.t.PDTjLN)
                                              : _.intl.string(_.t["5Wxrcd"]),
                                          icon: j ? void 0 : l.d4D,
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
