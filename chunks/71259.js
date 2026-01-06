n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    o = n(442837),
    a = n(481060),
    l = n(100527),
    s = n(367907),
    c = n(881998),
    d = n(553795),
    u = n(626135),
    p = n(745752),
    f = n(45966),
    m = n(637853),
    b = n(657021),
    g = n(290511),
    h = n(981631),
    x = n(388032),
    v = n(935954);
function O(e) {
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
function j(e, t) {
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
function _(e) {
    let { guildId: t, onComplete: n, isLastStep: _, isSubmitting: y = !1, disableTracking: N } = e,
        P = i.useRef(!1),
        { onboardingConnections: C, isLoading: E } = (0, o.cj)([f.Z], () => ({
            onboardingConnections: f.Z.getConnections(t),
            isLoading: f.Z.isLoading(),
        })),
        D = (0, o.e7)(
            [c.default, d.Z],
            () =>
                C.some((e) => {
                    if (e.connection_type === g.zz.APPLICATION && null != e.application_id) {
                        let t = c.default.getNewestTokenForApplication(e.application_id);
                        return (
                            c.default.getFetchStateForApplication(e.application_id) === c.FetchState.FETCHED &&
                            null != t
                        );
                    }
                    if (e.connection_type === g.zz.PROVIDER_CONNECTED_ACCOUNT && null != e.provider_id) {
                        let t = d.Z.getAccount(null, e.provider_id);
                        return null != t && !t.revoked;
                    }
                    return !1;
                }),
            [C],
        );
    i.useEffect(() => {
        if (N || E || 0 === C.length || P.current) return;
        let e = (0, m.OZ)(C),
            n = (0, m.N4)(C);
        u.default.track(
            h.rMx.GUILD_ONBOARDING_STEP_VIEWED,
            j(O({}, (0, s.hH)(t)), {
                step: p.Xx,
                required: !1,
                provider_connections_connected: e.connected,
                provider_connections_not_connected: e.notConnected,
                application_connections_connected: n.connected,
                application_connections_not_connected: n.notConnected,
            }),
        ),
            (P.current = !0);
    }, [t, E, C, N]);
    let I = i.useCallback(() => {
        if (!N) {
            let e = (0, m.OZ)(C),
                n = (0, m.N4)(C);
            u.default.track(
                h.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                j(O({}, (0, s.hH)(t)), {
                    step: p.Xx,
                    skipped: !D,
                    back: !1,
                    options_selected: 0,
                    in_onboarding: !0,
                    is_final_step: _,
                    provider_connections_connected: e.connected,
                    provider_connections_not_connected: e.notConnected,
                    application_connections_connected: n.connected,
                    application_connections_not_connected: n.notConnected,
                }),
            );
        }
        n();
    }, [n, N, t, C, D, _]);
    return E
        ? (0, r.jsxs)("div", {
              className: v.loadingContainer,
              children: [
                  (0, r.jsx)(a.$jN, {}),
                  (0, r.jsx)(a.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: x.intl.string(x.t.ZTNur7),
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: v.container,
              children: (0, r.jsxs)("div", {
                  className: v.content,
                  children: [
                      (0, r.jsxs)("div", {
                          className: v.scrollerContent,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: v.header,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: v.headerTitle,
                                          children: (0, r.jsx)(a.Heading, {
                                              variant: "heading-xl/semibold",
                                              children: x.intl.string(x.t.eDVMrA),
                                          }),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: v.headerDescription,
                                          children: (0, r.jsx)(a.Text, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: x.intl.string(x.t.BozOXu),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: v.connectionsListScroller,
                                  children: (0, r.jsx)("div", {
                                      className: v.connectionsList,
                                      children: C.map((e, n) =>
                                          (0, r.jsx)(
                                              b.Z,
                                              {
                                                  connection: e,
                                                  guildId: t,
                                                  location: l.Z.GUILD_ONBOARDING,
                                              },
                                              n,
                                          ),
                                      ),
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: v.footer,
                          children: (0, r.jsxs)("div", {
                              className: v.actions,
                              children: [
                                  (0, r.jsx)("div", {}),
                                  (0, r.jsx)("div", {
                                      className: v.primaryActions,
                                      children: (0, r.jsx)(a.Button, {
                                          variant: D ? "primary" : "secondary",
                                          onClick: I,
                                          text: D
                                              ? _
                                                  ? "".concat(x.intl.string(x.t["8SuVoE"]), " \uD83C\uDF89")
                                                  : x.intl.string(x.t.PDTjLN)
                                              : x.intl.string(x.t["5Wxrcd"]),
                                          disabled: y,
                                          loading: y,
                                          icon: _ ? void 0 : a.d4D,
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
