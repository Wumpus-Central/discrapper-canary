n.r(e), n.d(e, { default: () => G });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    d = n(284009),
    r = n.n(d),
    o = n(534514),
    c = n(289873),
    u = n(408278),
    h = n(807072),
    m = n(834730),
    x = n(821609),
    p = n(707554),
    f = n(17928),
    g = n(761508),
    A = n(824552),
    v = n(933958),
    j = n(869003),
    b = n(793574),
    O = n(688810),
    W = n(429913),
    L = n(793943),
    D = n(409626),
    k = n(692969),
    y = n(134861),
    N = n(147964),
    E = n(46225),
    _ = n(487431),
    R = n(942370),
    C = n(311350),
    V = n(375708),
    w = n(564741);
function G() {
    let t = (0, W.h)(N.A.testModeApplicationId),
        { analyticsLocations: e } = (0, O.Ay)(b.A.SDK_DEBUG_TOOLS),
        n = (0, L.fy)().metadata,
        a = l.useRef(!1),
        {
            canStartAuthorization: d,
            hasAlreadyLinked: G,
            startAuthorization: S,
            chosenFlow: B,
            connectionApp: I,
            debug: { isSubscribedToAuthorizeRequest: F, oauth2Token: K, hasConnectionEntrypointUrl: M, validFlows: z },
        } = (0, E.RD)(t, { debug: !0 }),
        T = (0, f.bG)([y.A], () => null != t && y.A.isConnected(t.id)),
        J = (0, f.bG)([v.Ay], () => v.Ay.getSelfEmbeddedActivities()),
        P = t?.id ?? "",
        U = (0, k.A)({ applicationId: P, source: D.Ob.DevTools, trackEntryPointImpression: !1 });
    l.useEffect(() => {
        n?.shouldAutoOpenGameProfile !== !0 || null == U || a.current || ((a.current = !0), U());
    }, [n, U]);
    let $ = "authorization_debug",
        H = [{ id: "authorization_debug", name: V.intl.string(C.default.vR0zs6) }];
    return (0, i.jsx)("div", {
        "data-app-right-panel": !0,
        className: w.nE,
        children: (0, i.jsx)(p.F, {
            children:
                null != t
                    ? (r()(null != t, "Application should be defined when rendering the test mode panel"),
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)("div", {
                                  className: w.wx,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: w.if,
                                          children: (0, i.jsx)(o.D, {
                                              variant: "heading-lg/extrabold",
                                              children: V.intl.format(C.default.KoK4J9, { appName: t.name }),
                                          }),
                                      }),
                                      (0, i.jsx)(u.K, {
                                          variant: "icon-only",
                                          icon: h.U,
                                          "aria-label": "Close",
                                          onClick: () => (0, L.Jp)(),
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: w.rf,
                                  children: [
                                      (0, i.jsx)(g.V, {
                                          className: w.$H,
                                          selectedItem: $,
                                          onItemSelect: () => {},
                                          orientation: "horizontal",
                                          type: "top",
                                          look: "brand",
                                          children: H.map((t) =>
                                              (0, i.jsx)(
                                                  g.V.Item,
                                                  {
                                                      className: s()(w.Mf, { [w.wH]: t.id === $ }),
                                                      id: t.id,
                                                      "aria-label": t.name,
                                                      children: t.name,
                                                  },
                                                  t.id,
                                              ),
                                          ),
                                      }),
                                      (0, i.jsx)(m.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: V.intl.string(C.default["no+FQS"]),
                                      }),
                                      (0, i.jsx)(_.VT, {
                                          overallStatus: F ? _.nW.OVERALL_GOOD : T ? _.nW.WARN : _.nW.OVERALL_BAD,
                                          name: V.intl.string(C.default.AGLx00),
                                          steps: [
                                              {
                                                  status: T ? _.nW.GOOD : _.nW.BAD,
                                                  text: V.intl.string(C.default.kxF9br),
                                                  description: T ? null : V.intl.string(C.default.PFxxJa),
                                                  learnMoreLink: T
                                                      ? null
                                                      : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                              },
                                              {
                                                  status: F ? _.nW.GOOD : T ? _.nW.WARN : _.nW.BAD,
                                                  text: V.intl.string(C.default.S94dzs),
                                                  description: F || !T ? null : V.intl.string(C.default.aTULMB),
                                                  learnMoreLink:
                                                      F || !T
                                                          ? null
                                                          : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                              },
                                          ],
                                          isChosen: B === R._M.RPC,
                                      }),
                                      (0, i.jsx)(_.VT, {
                                          overallStatus: M ? _.nW.OVERALL_GOOD : _.nW.OVERALL_BAD,
                                          name: V.intl.string(C.default.K3ObrU),
                                          steps: [
                                              {
                                                  status: M ? _.nW.GOOD : _.nW.BAD,
                                                  text: V.intl.string(C.default["8a7IrV"]),
                                                  description: M
                                                      ? V.intl.formatToPlainString(C.default["9iLeL2"], {
                                                            url: I?.connectionEntrypointUrl,
                                                        })
                                                      : null,
                                              },
                                          ],
                                          isChosen: B === R._M.WEB,
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: w.qr,
                                  children: [
                                      (0, i.jsx)(_.Sy, {
                                          status: G ? _.nW.OVERALL_GOOD : _.nW.OVERALL_BAD,
                                          text: V.intl.string(V.t["Vu/zmQ"]),
                                      }),
                                      0 === z.length &&
                                          (0, i.jsx)(m.E, {
                                              style: { minWidth: 0, overflow: "hidden" },
                                              variant: "text-md/medium",
                                              children: V.intl.string(C.default.eg0mNa),
                                          }),
                                      (0, i.jsx)(x.$, {
                                          variant: "secondary",
                                          disabled: !d || G,
                                          onClick: () => S({ analyticsLocations: e }),
                                          text: V.intl.string(C.default.w0pN4R),
                                          fullWidth: !0,
                                      }),
                                      null != K &&
                                          (0, i.jsx)(x.$, {
                                              variant: "secondary",
                                              onClick: () => {
                                                  A.A.delete(K.id);
                                                  let e = J.get(t.id);
                                                  null != e &&
                                                      j.A.leaveActivity({
                                                          location: e.location,
                                                          applicationId: t.id,
                                                          showFeedback: !1,
                                                      });
                                              },
                                              text: V.intl.string(C.default.tkIymA),
                                              fullWidth: !0,
                                          }),
                                      (0, i.jsx)(x.$, {
                                          variant: "secondary",
                                          onClick: U ?? void 0,
                                          disabled: null == U,
                                          text: V.intl.string(C.default.cCvdJy),
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }))
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: w.wx,
                                  children: (0, i.jsx)("div", {
                                      className: w.if,
                                      children: (0, i.jsx)(o.D, {
                                          variant: "heading-lg/extrabold",
                                          children: V.intl.format(C.default.KoK4J9, { appName: "" }),
                                      }),
                                  }),
                              }),
                              (0, i.jsx)("div", { className: w.rf, children: (0, i.jsx)(c.y, { className: w.u1 }) }),
                          ],
                      }),
        }),
    });
}
