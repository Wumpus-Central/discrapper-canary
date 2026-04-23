n.r(t), n.d(t, { default: () => V });
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
    f = n(17928),
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
    I = n(46225),
    W = n(487431),
    R = n(942370),
    k = n(311350),
    y = n(985018),
    B = n(564741);
function V() {
    let e = (0, O.h)(D.A.testModeApplicationId),
        { analyticsLocations: t } = (0, v.Ay)(p.A.SDK_DEBUG_TOOLS),
        n = (0, E.fy)().metadata,
        l = s.useRef(!1),
        {
            canStartAuthorization: d,
            hasAlreadyLinked: V,
            startAuthorization: w,
            chosenFlow: T,
            connectionApp: G,
            debug: { isSubscribedToAuthorizeRequest: S, oauth2Token: K, hasConnectionEntrypointUrl: F, validFlows: U },
        } = (0, I.RD)(e, { debug: !0 }),
        z = (0, f.bG)([C.A], () => null != e && C.A.isConnected(e.id)),
        M = (0, f.bG)([g.Ay], () => g.Ay.getSelfEmbeddedActivities()),
        P = e?.id ?? "",
        H = (0, L.A)({ applicationId: P, source: N.Ob.DevTools, trackEntryPointImpression: !1, forceV2: !0 });
    s.useEffect(() => {
        n?.shouldAutoOpenGameProfile !== !0 || null == H || l.current || ((l.current = !0), H());
    }, [n, H]);
    let J = "authorization_debug",
        $ = [{ id: "authorization_debug", name: y.intl.string(k.default.vR0zs6) }];
    return (0, i.jsx)("div", {
        "data-app-right-panel": !0,
        className: B.nE,
        children: (0, i.jsx)(b.F, {
            children:
                null != e
                    ? (r()(null != e, "Application should be defined when rendering the test mode panel"),
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)("div", {
                                  className: B.wx,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: B.if,
                                          children: (0, i.jsx)(o.D, {
                                              variant: "heading-lg/extrabold",
                                              children: y.intl.format(k.default.KoK4J9, { appName: e.name }),
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
                                  className: B.rf,
                                  children: [
                                      (0, i.jsx)(A.V, {
                                          className: B.$H,
                                          selectedItem: J,
                                          onItemSelect: () => {},
                                          orientation: "horizontal",
                                          type: "top",
                                          look: "brand",
                                          children: $.map((e) =>
                                              (0, i.jsx)(
                                                  A.V.Item,
                                                  {
                                                      className: a()(B.Mf, { [B.wH]: e.id === J }),
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
                                          children: y.intl.string(k.default["no+FQS"]),
                                      }),
                                      (0, i.jsx)(W.VT, {
                                          overallStatus: S ? W.nW.OVERALL_GOOD : z ? W.nW.WARN : W.nW.OVERALL_BAD,
                                          name: y.intl.string(k.default.AGLx00),
                                          steps: [
                                              {
                                                  status: z ? W.nW.GOOD : W.nW.BAD,
                                                  text: y.intl.string(k.default.kxF9br),
                                                  description: z ? null : y.intl.string(k.default.PFxxJa),
                                                  learnMoreLink: z
                                                      ? null
                                                      : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                              },
                                              {
                                                  status: S ? W.nW.GOOD : z ? W.nW.WARN : W.nW.BAD,
                                                  text: y.intl.string(k.default.S94dzs),
                                                  description: S || !z ? null : y.intl.string(k.default.aTULMB),
                                                  learnMoreLink:
                                                      S || !z
                                                          ? null
                                                          : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                              },
                                          ],
                                          isChosen: T === R._.RPC,
                                      }),
                                      (0, i.jsx)(W.VT, {
                                          overallStatus: F ? W.nW.OVERALL_GOOD : W.nW.OVERALL_BAD,
                                          name: y.intl.string(k.default.K3ObrU),
                                          steps: [
                                              {
                                                  status: F ? W.nW.GOOD : W.nW.BAD,
                                                  text: y.intl.string(k.default["8a7IrV"]),
                                                  description: F
                                                      ? y.intl.formatToPlainString(k.default["9iLeL2"], {
                                                            url: G?.connectionEntrypointUrl,
                                                        })
                                                      : null,
                                              },
                                          ],
                                          isChosen: T === R._.WEB,
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: B.qr,
                                  children: [
                                      (0, i.jsx)(W.Sy, {
                                          status: V ? W.nW.OVERALL_GOOD : W.nW.OVERALL_BAD,
                                          text: y.intl.string(y.t["Vu/zmQ"]),
                                      }),
                                      0 === U.length &&
                                          (0, i.jsx)(x.E, {
                                              style: { minWidth: 0, overflow: "hidden" },
                                              variant: "text-md/medium",
                                              children: y.intl.string(k.default.eg0mNa),
                                          }),
                                      (0, i.jsx)(m.$, {
                                          variant: "secondary",
                                          disabled: !d || V,
                                          onClick: () => w({ analyticsLocations: t }),
                                          text: y.intl.string(k.default.w0pN4R),
                                          fullWidth: !0,
                                      }),
                                      null != K &&
                                          (0, i.jsx)(m.$, {
                                              variant: "secondary",
                                              onClick: () => {
                                                  _.A.delete(K.id);
                                                  let t = M.get(e.id);
                                                  null != t &&
                                                      j.A.leaveActivity({
                                                          location: t.location,
                                                          applicationId: e.id,
                                                          showFeedback: !1,
                                                      });
                                              },
                                              text: y.intl.string(k.default.tkIymA),
                                              fullWidth: !0,
                                          }),
                                      (0, i.jsx)(m.$, {
                                          variant: "secondary",
                                          onClick: H ?? void 0,
                                          disabled: null == H,
                                          text: y.intl.string(k.default.cCvdJy),
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }))
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: B.wx,
                                  children: (0, i.jsx)("div", {
                                      className: B.if,
                                      children: (0, i.jsx)(o.D, {
                                          variant: "heading-lg/extrabold",
                                          children: y.intl.format(k.default.KoK4J9, { appName: "" }),
                                      }),
                                  }),
                              }),
                              (0, i.jsx)("div", { className: B.rf, children: (0, i.jsx)(c.y, { className: B.u1 }) }),
                          ],
                      }),
        }),
    });
}
