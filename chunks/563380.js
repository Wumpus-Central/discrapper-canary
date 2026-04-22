n.r(e), n.d(e, { default: () => D });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(284009),
    o = n.n(s),
    d = n(534514),
    c = n(289873),
    u = n(408278),
    h = n(807072),
    p = n(834730),
    b = n(821609),
    f = n(707554),
    _ = n(311907),
    A = n(761508),
    m = n(824552),
    x = n(933958),
    E = n(869003),
    v = n(793574),
    g = n(688810),
    O = n(429913),
    y = n(793943),
    j = n(409626),
    C = n(692969),
    N = n(134861),
    R = n(147964),
    T = n(362490),
    S = n(487431),
    F = n(311350),
    w = n(985018),
    L = n(564741);
function D() {
    let t = (0, O.h)(R.A.testModeApplicationId),
        { analyticsLocations: e } = (0, g.Ay)(v.A.SDK_DEBUG_TOOLS),
        n = (0, y.fy)().metadata,
        a = l.useRef(!1),
        {
            canStartAuthorization: s,
            hasAlreadyLinked: D,
            startAuthorization: I,
            chosenFlow: k,
            connectionApp: W,
            debug: { isSubscribedToAuthorizeRequest: U, oauth2Token: B, hasConnectionEntrypointUrl: V, validFlows: G },
        } = (0, T.RD)(t, { debug: !0 }),
        K = (0, _.bG)([N.A], () => null != t && N.A.isConnected(t.id)),
        H = (0, _.bG)([x.Ay], () => x.Ay.getSelfEmbeddedActivities()),
        P = t?.id ?? "",
        M = (0, C.A)({ applicationId: P, source: j.Ob.DevTools, trackEntryPointImpression: !1, forceV2: !0 });
    l.useEffect(() => {
        n?.shouldAutoOpenGameProfile !== !0 || null == M || a.current || ((a.current = !0), M());
    }, [n, M]);
    let z = "authorization_debug",
        q = [{ id: "authorization_debug", name: w.intl.string(F.default.vR0zs6) }];
    return (0, i.jsx)("div", {
        "data-app-right-panel": !0,
        className: L.nE,
        children: (0, i.jsx)(f.F, {
            children:
                null != t
                    ? (o()(null != t, "Application should be defined when rendering the test mode panel"),
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)("div", {
                                  className: L.wx,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: L.if,
                                          children: (0, i.jsx)(d.D, {
                                              variant: "heading-lg/extrabold",
                                              children: w.intl.format(F.default.KoK4J9, { appName: t.name }),
                                          }),
                                      }),
                                      (0, i.jsx)(u.K, {
                                          variant: "icon-only",
                                          icon: h.U,
                                          "aria-label": "Close",
                                          onClick: () => (0, y.Jp)(),
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: L.rf,
                                  children: [
                                      (0, i.jsx)(A.V, {
                                          className: L.$H,
                                          selectedItem: z,
                                          onItemSelect: () => {},
                                          orientation: "horizontal",
                                          type: "top",
                                          look: "brand",
                                          children: q.map((t) =>
                                              (0, i.jsx)(
                                                  A.V.Item,
                                                  {
                                                      className: r()(L.Mf, { [L.wH]: t.id === z }),
                                                      id: t.id,
                                                      "aria-label": t.name,
                                                      children: t.name,
                                                  },
                                                  t.id,
                                              ),
                                          ),
                                      }),
                                      (0, i.jsx)(p.E, {
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: w.intl.string(F.default["no+FQS"]),
                                      }),
                                      (0, i.jsx)(S.VT, {
                                          overallStatus: U ? S.nW.OVERALL_GOOD : K ? S.nW.WARN : S.nW.OVERALL_BAD,
                                          name: w.intl.string(F.default.AGLx00),
                                          steps: [
                                              {
                                                  status: K ? S.nW.GOOD : S.nW.BAD,
                                                  text: w.intl.string(F.default.kxF9br),
                                                  description: K ? null : w.intl.string(F.default.PFxxJa),
                                                  learnMoreLink: K
                                                      ? null
                                                      : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                              },
                                              {
                                                  status: U ? S.nW.GOOD : K ? S.nW.WARN : S.nW.BAD,
                                                  text: w.intl.string(F.default.S94dzs),
                                                  description: U || !K ? null : w.intl.string(F.default.aTULMB),
                                                  learnMoreLink:
                                                      U || !K
                                                          ? null
                                                          : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                              },
                                          ],
                                          isChosen: k === T._M.RPC,
                                      }),
                                      (0, i.jsx)(S.VT, {
                                          overallStatus: V ? S.nW.OVERALL_GOOD : S.nW.OVERALL_BAD,
                                          name: w.intl.string(F.default.K3ObrU),
                                          steps: [
                                              {
                                                  status: V ? S.nW.GOOD : S.nW.BAD,
                                                  text: w.intl.string(F.default["8a7IrV"]),
                                                  description: V
                                                      ? w.intl.formatToPlainString(F.default["9iLeL2"], {
                                                            url: W?.connectionEntrypointUrl,
                                                        })
                                                      : null,
                                              },
                                          ],
                                          isChosen: k === T._M.WEB,
                                      }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: L.qr,
                                  children: [
                                      (0, i.jsx)(S.Sy, {
                                          status: D ? S.nW.OVERALL_GOOD : S.nW.OVERALL_BAD,
                                          text: w.intl.string(w.t["Vu/zmQ"]),
                                      }),
                                      0 === G.length &&
                                          (0, i.jsx)(p.E, {
                                              style: { minWidth: 0, overflow: "hidden" },
                                              variant: "text-md/medium",
                                              children: w.intl.string(F.default.eg0mNa),
                                          }),
                                      (0, i.jsx)(b.$, {
                                          variant: "secondary",
                                          disabled: !s || D,
                                          onClick: () => I({ analyticsLocations: e }),
                                          text: w.intl.string(F.default.w0pN4R),
                                          fullWidth: !0,
                                      }),
                                      null != B &&
                                          (0, i.jsx)(b.$, {
                                              variant: "secondary",
                                              onClick: () => {
                                                  m.A.delete(B.id);
                                                  let e = H.get(t.id);
                                                  null != e &&
                                                      E.A.leaveActivity({
                                                          location: e.location,
                                                          applicationId: t.id,
                                                          showFeedback: !1,
                                                      });
                                              },
                                              text: w.intl.string(F.default.tkIymA),
                                              fullWidth: !0,
                                          }),
                                      (0, i.jsx)(b.$, {
                                          variant: "secondary",
                                          onClick: M ?? void 0,
                                          disabled: null == M,
                                          text: w.intl.string(F.default.cCvdJy),
                                          fullWidth: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }))
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: L.wx,
                                  children: (0, i.jsx)("div", {
                                      className: L.if,
                                      children: (0, i.jsx)(d.D, {
                                          variant: "heading-lg/extrabold",
                                          children: w.intl.format(F.default.KoK4J9, { appName: "" }),
                                      }),
                                  }),
                              }),
                              (0, i.jsx)("div", { className: L.rf, children: (0, i.jsx)(c.y, { className: L.u1 }) }),
                          ],
                      }),
        }),
    });
}
