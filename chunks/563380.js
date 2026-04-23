n.r(t), n.d(t, { default: () => B });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    d = n(284009),
    r = n.n(d),
    o = n(534514),
    c = n(289873),
    h = n(408278),
    u = n(807072),
    x = n(834730),
    m = n(821609),
    b = n(707554),
    f = n(311907),
    A = n(761508),
    _ = n(824552),
    g = n(933958),
    j = n(869003),
    p = n(793574),
    v = n(688810),
    O = n(429913),
    E = n(793943),
    N = n(409626),
    L = n(692969),
    C = n(134861),
    D = n(147964),
    I = n(362490),
    W = n(487431),
    R = n(311350),
    k = n(985018),
    y = n(564741);
function B() {
    let e = (0, O.h)(D.A.testModeApplicationId),
        { analyticsLocations: t } = (0, v.Ay)(p.A.SDK_DEBUG_TOOLS),
        n = (0, E.fy)().metadata,
        l = s.useRef(!1),
        {
            canStartAuthorization: d,
            hasAlreadyLinked: B,
            startAuthorization: V,
            chosenFlow: w,
            connectionApp: T,
            debug: { isSubscribedToAuthorizeRequest: G, oauth2Token: S, hasConnectionEntrypointUrl: K, validFlows: F },
        } = (0, I.RD)(e, { debug: !0 }),
        M = (0, f.bG)([C.A], () => null != e && C.A.isConnected(e.id)),
        U = (0, f.bG)([g.Ay], () => g.Ay.getSelfEmbeddedActivities()),
        z = e?.id ?? "",
        P = (0, L.A)({ applicationId: z, source: N.Ob.DevTools, trackEntryPointImpression: !1, forceV2: !0 });
    s.useEffect(() => {
        n?.shouldAutoOpenGameProfile !== !0 || null == P || l.current || ((l.current = !0), P());
    }, [n, P]);
    let H = "authorization_debug",
        J = [{ id: "authorization_debug", name: k.intl.string(R.default.vR0zs6) }];
    return (0, i.jsx)("div", {
        "data-app-right-panel": !0,
        className: y.nE,
        children: (0, i.jsx)(b.F, {
            children:
                null != e
                    ? (r()(null != e, "Application should be defined when rendering the test mode panel"),
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)("div", {
                                  className: y.wx,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: y.if,
                                          children: (0, i.jsx)(o.D, {
                                              variant: "heading-lg/extrabold",
                                              children: k.intl.format(R.default.KoK4J9, { appName: e.name }),
                                          }),
                                      }),
                                      (0, i.jsx)(h.K, {
                                          variant: "icon-only",
                                          icon: u.U,
                                          "aria-label": "Close",
                                          onClick: () => (0, E.Jp)(),
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: y.rf,
                                  children: [
                                      (0, i.jsx)(A.V, {
                                          className: y.$H,
                                          selectedItem: H,
                                          onItemSelect: () => {},
                                          orientation: "horizontal",
                                          type: "top",
                                          look: "brand",
                                          children: J.map((e) =>
                                              (0, i.jsx)(
                                                  A.V.Item,
                                                  {
                                                      className: a()(y.Mf, { [y.wH]: e.id === H }),
                                                      id: e.id,
                                                      "aria-label": e.name,
                                                      children: e.name,
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                      }),
                                      (0, i.jsx)(x.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: k.intl.string(R.default["no+FQS"]),
                                      }),
                                      (0, i.jsx)(W.VT, {
                                          overallStatus: G ? W.nW.OVERALL_GOOD : M ? W.nW.WARN : W.nW.OVERALL_BAD,
                                          name: k.intl.string(R.default.AGLx00),
                                          steps: [
                                              {
                                                  status: M ? W.nW.GOOD : W.nW.BAD,
                                                  text: k.intl.string(R.default.kxF9br),
                                                  description: M ? null : k.intl.string(R.default.PFxxJa),
                                                  learnMoreLink: M
                                                      ? null
                                                      : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                              },
                                              {
                                                  status: G ? W.nW.GOOD : M ? W.nW.WARN : W.nW.BAD,
                                                  text: k.intl.string(R.default.S94dzs),
                                                  description: G || !M ? null : k.intl.string(R.default.aTULMB),
                                                  learnMoreLink:
                                                      G || !M
                                                          ? null
                                                          : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                              },
                                          ],
                                          isChosen: w === I._M.RPC,
                                      }),
                                      (0, i.jsx)(W.VT, {
                                          overallStatus: K ? W.nW.OVERALL_GOOD : W.nW.OVERALL_BAD,
                                          name: k.intl.string(R.default.K3ObrU),
                                          steps: [
                                              {
                                                  status: K ? W.nW.GOOD : W.nW.BAD,
                                                  text: k.intl.string(R.default["8a7IrV"]),
                                                  description: K
                                                      ? k.intl.formatToPlainString(R.default["9iLeL2"], {
                                                            url: T?.connectionEntrypointUrl,
                                                        })
                                                      : null,
                                              },
                                          ],
                                          isChosen: w === I._M.WEB,
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: y.qr,
                                  children: [
                                      (0, i.jsx)(W.Sy, {
                                          status: B ? W.nW.OVERALL_GOOD : W.nW.OVERALL_BAD,
                                          text: k.intl.string(k.t["Vu/zmQ"]),
                                      }),
                                      0 === F.length &&
                                          (0, i.jsx)(x.E, {
                                              style: { minWidth: 0, overflow: "hidden" },
                                              variant: "text-md/medium",
                                              children: k.intl.string(R.default.eg0mNa),
                                          }),
                                      (0, i.jsx)(m.$, {
                                          variant: "secondary",
                                          disabled: !d || B,
                                          onClick: () => V({ analyticsLocations: t }),
                                          text: k.intl.string(R.default.w0pN4R),
                                          fullWidth: !0,
                                      }),
                                      null != S &&
                                          (0, i.jsx)(m.$, {
                                              variant: "secondary",
                                              onClick: () => {
                                                  _.A.delete(S.id);
                                                  let t = U.get(e.id);
                                                  null != t &&
                                                      j.A.leaveActivity({
                                                          location: t.location,
                                                          applicationId: e.id,
                                                          showFeedback: !1,
                                                      });
                                              },
                                              text: k.intl.string(R.default.tkIymA),
                                              fullWidth: !0,
                                          }),
                                      (0, i.jsx)(m.$, {
                                          variant: "secondary",
                                          onClick: P ?? void 0,
                                          disabled: null == P,
                                          text: k.intl.string(R.default.cCvdJy),
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }))
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: y.wx,
                                  children: (0, i.jsx)("div", {
                                      className: y.if,
                                      children: (0, i.jsx)(o.D, {
                                          variant: "heading-lg/extrabold",
                                          children: k.intl.format(R.default.KoK4J9, { appName: "" }),
                                      }),
                                  }),
                              }),
                              (0, i.jsx)("div", { className: y.rf, children: (0, i.jsx)(c.y, { className: y.u1 }) }),
                          ],
                      }),
        }),
    });
}
