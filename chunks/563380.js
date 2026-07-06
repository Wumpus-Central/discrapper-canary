n.r(t), n.d(t, { default: () => V });
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
    f = n(707554),
    p = n(17928),
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
    E = n(206828),
    _ = n(487431),
    R = n(942370),
    w = n(311350),
    C = n(375708),
    G = n(564741);
function V() {
    let e = (0, W.h)(N.A.testModeApplicationId),
        { analyticsLocations: t } = (0, O.Ay)(b.A.SDK_DEBUG_TOOLS),
        n = (0, L.fy)().metadata,
        a = l.useRef(!1),
        {
            canStartAuthorization: d,
            hasAlreadyLinked: V,
            startAuthorization: S,
            chosenFlow: B,
            connectionApp: M,
            debug: { isSubscribedToAuthorizeRequest: I, oauth2Token: F, hasConnectionEntrypointUrl: K, validFlows: P },
        } = (0, E.RD)(e, { debug: !0 }),
        z = (0, p.bG)([y.A], () => null != e && y.A.isConnected(e.id)),
        T = (0, p.bG)([v.Ay], () => v.Ay.getSelfEmbeddedActivities()),
        J = e?.id ?? "",
        U = (0, k.A)({ applicationId: J, source: D.GameProfileSources.DevTools, trackEntryPointImpression: !1 });
    l.useEffect(() => {
        n?.shouldAutoOpenGameProfile !== !0 || null == U || a.current || ((a.current = !0), U());
    }, [n, U]);
    let $ = "authorization_debug",
        H = [{ id: "authorization_debug", name: C.intl.string(w.default.vR0zs6) }];
    return (0, i.jsx)("div", {
        "data-app-right-panel": !0,
        className: G.nE,
        children: (0, i.jsx)(f.F, {
            children:
                null != e
                    ? (r()(null != e, "Application should be defined when rendering the test mode panel"),
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)("div", {
                                  className: G.wx,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: G.if,
                                          children: (0, i.jsx)(o.D, {
                                              variant: "heading-lg/extrabold",
                                              children: C.intl.format(w.default.KoK4J9, { appName: e.name }),
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
                                  className: G.rf,
                                  children: [
                                      (0, i.jsx)(g.V, {
                                          className: G.$H,
                                          selectedItem: $,
                                          onItemSelect: () => {},
                                          orientation: "horizontal",
                                          type: "top",
                                          look: "brand",
                                          children: H.map((e) =>
                                              (0, i.jsx)(
                                                  g.V.Item,
                                                  {
                                                      className: s()(G.Mf, { [G.wH]: e.id === $ }),
                                                      id: e.id,
                                                      "aria-label": e.name,
                                                      children: e.name,
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                      }),
                                      (0, i.jsx)(m.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: C.intl.string(w.default["no+FQS"]),
                                      }),
                                      (0, i.jsx)(_.VT, {
                                          flow: R._M.RPC,
                                          overallStatus: I ? _.nW.OVERALL_GOOD : z ? _.nW.WARN : _.nW.OVERALL_BAD,
                                          name: C.intl.string(w.default.AGLx00),
                                          steps: [
                                              {
                                                  status: z ? _.nW.GOOD : _.nW.BAD,
                                                  text: C.intl.string(w.default.kxF9br),
                                                  description: z ? null : C.intl.string(w.default.PFxxJa),
                                                  learnMoreLink: z
                                                      ? null
                                                      : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                              },
                                              {
                                                  status: I ? _.nW.GOOD : z ? _.nW.WARN : _.nW.BAD,
                                                  text: C.intl.string(w.default.S94dzs),
                                                  description: I || !z ? null : C.intl.string(w.default.aTULMB),
                                                  learnMoreLink:
                                                      I || !z
                                                          ? null
                                                          : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                              },
                                          ],
                                          isChosen: B === R._M.RPC,
                                      }),
                                      (0, i.jsx)(_.VT, {
                                          flow: R._M.WEB,
                                          overallStatus: K ? _.nW.OVERALL_GOOD : _.nW.OVERALL_BAD,
                                          name: C.intl.string(w.default.K3ObrU),
                                          steps: [
                                              {
                                                  status: K ? _.nW.GOOD : _.nW.BAD,
                                                  text: C.intl.string(w.default["8a7IrV"]),
                                                  description: K
                                                      ? C.intl.formatToPlainString(w.default["9iLeL2"], {
                                                            url: M?.connectionEntrypointUrl,
                                                        })
                                                      : null,
                                              },
                                          ],
                                          isChosen: B === R._M.WEB,
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: G.qr,
                                  children: [
                                      (0, i.jsx)(_.Sy, {
                                          status: V ? _.nW.OVERALL_GOOD : _.nW.OVERALL_BAD,
                                          text: C.intl.string(C.t["Vu/zmQ"]),
                                      }),
                                      0 === P.length &&
                                          (0, i.jsx)(m.E, {
                                              style: { minWidth: 0, overflow: "hidden" },
                                              variant: "text-md/medium",
                                              children: C.intl.string(w.default.eg0mNa),
                                          }),
                                      (0, i.jsx)(x.$, {
                                          variant: "secondary",
                                          disabled: !d || V,
                                          onClick: () => S({ analyticsLocations: t }),
                                          text: C.intl.string(w.default.w0pN4R),
                                          fullWidth: !0,
                                      }),
                                      null != F &&
                                          (0, i.jsx)(x.$, {
                                              variant: "secondary",
                                              onClick: () => {
                                                  A.A.delete(F.id);
                                                  let t = T.get(e.id);
                                                  null != t &&
                                                      j.A.leaveActivity({
                                                          location: t.location,
                                                          applicationId: e.id,
                                                          showFeedback: !1,
                                                      });
                                              },
                                              text: C.intl.string(w.default.tkIymA),
                                              fullWidth: !0,
                                          }),
                                      (0, i.jsx)(x.$, {
                                          variant: "secondary",
                                          onClick: U ?? void 0,
                                          disabled: null == U,
                                          text: C.intl.string(w.default.cCvdJy),
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }))
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: G.wx,
                                  children: (0, i.jsx)("div", {
                                      className: G.if,
                                      children: (0, i.jsx)(o.D, {
                                          variant: "heading-lg/extrabold",
                                          children: C.intl.format(w.default.KoK4J9, { appName: "" }),
                                      }),
                                  }),
                              }),
                              (0, i.jsx)("div", { className: G.rf, children: (0, i.jsx)(c.y, { className: G.u1 }) }),
                          ],
                      }),
        }),
    });
}
