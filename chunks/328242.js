n.d(t, { Z: () => E }), n(388685), n(642613);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    s = n.n(l),
    o = n(209739),
    a = n.n(o),
    c = n(268146),
    d = n(442837),
    u = n(481060),
    f = n(579806),
    p = n(594190),
    h = n(320724),
    m = n(751571),
    _ = n(616022),
    g = n(63063),
    x = n(358085),
    v = n(747268),
    j = n(215915),
    S = n(855403),
    b = n(567126),
    y = n(615161),
    C = n(761274),
    O = n(128057),
    w = n(388032),
    Z = n(602804);
function P(e) {
    let { source: t } = e;
    return t.id.startsWith(c.vA.SCREEN)
        ? (0, r.jsx)(u.pzj, { size: "xs" })
        : t.id.startsWith(c.vA.WINDOW)
          ? null != t.icon && "" !== t.icon
              ? (0, r.jsx)("img", {
                    src: t.icon,
                    className: Z.sourceIcon,
                    alt: "",
                })
              : (0, r.jsx)(u.GON, { size: "xs" })
          : (0, r.jsx)(u.Odl, { size: "xs" });
}
function I(e) {
    let { source: t, selected: n, onClick: i } = e,
        { url: l, name: o } = t;
    return (0, r.jsxs)(u.P3F, {
        onClick: () => i(t),
        className: s()(Z.source, { [Z.selectedSource]: n }),
        children: [
            (0, r.jsx)("div", {
                className: Z.sourcePreviewContainer,
                children: (0, r.jsxs)("div", {
                    className: Z.sourcePreview,
                    children: [
                        (0, r.jsx)("img", {
                            src: l,
                            className: Z.sourcePreviewImage,
                            alt: "",
                        }),
                        (0, r.jsx)("div", {
                            className: Z.sourceOverlay,
                            children: (0, r.jsx)("div", {
                                className: Z.sourceOverlayCTA,
                                children: (0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "control-primary-text-default",
                                    children: w.intl.string(w.t.z7WGhv),
                                }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)("div", {
                className: Z.sourceNameContainer,
                children: [
                    (0, r.jsx)(P, { source: t }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        className: Z.sourceName,
                        children: o,
                    }),
                ],
            }),
        ],
    });
}
function E(e) {
    let { onClick: t } = e,
        [
            {
                windowSources: n,
                deviceSources: l,
                screenSources: s,
                sourceType: o,
                fetchingSources: g,
                selectedSource: O,
                discordSourceId: P,
                hasPermission: E,
            },
        ] = (0, y.E_)(),
        { smarterSourceOrdering: N } = (0, j.E)({ location: "GoLiveSourceGrid" }),
        A = (0, d.e7)([p.ZP], () => p.ZP.getRunningGames()),
        R = (0, d.cj)([p.ZP], () => {
            let e = p.ZP.getCandidateGames(),
                t = {};
            for (let n of e) null != n.windowHandle && (t[n.windowHandle] = n.exeName);
            return t;
        }),
        M = (0, d.e7)([_.Z], () => _.Z.quests),
        k = (0, b.jx)(M, A, n);
    i.useEffect(() => ((0, h.Ky)(), h.P7), []);
    let D = i.useMemo(
        () =>
            N
                ? [...n].sort(
                      (e, t) =>
                          (0, b.ov)(t, null == k ? void 0 : k.source.id, P, R) -
                          (0, b.ov)(e, null == k ? void 0 : k.source.id, P, R),
                  )
                : n,
        [k, N, n, P, R],
    );
    if (g) {
        if (!1 === E) {
            let e = !1;
            if ((0, x.isMac)()) {
                var L, B;
                let t =
                    null === f.Z || void 0 === f.Z || null == (B = f.Z.remoteApp) || null == (L = B.getVersion)
                        ? void 0
                        : L.call(B);
                e = !v.o || "0.0.0" === t || a().satisfies(t, "0.0.363");
            }
            return (0, r.jsxs)("div", {
                className: Z.errorBox,
                children: [
                    (0, r.jsxs)(u.Text, {
                        className: Z.errorText,
                        variant: "text-md/normal",
                        color: "text-feedback-critical",
                        children: [w.intl.string(w.t["kW5h/W"]), (0, r.jsx)("br", {}), w.intl.string(w.t["5Jvu1R"])],
                    }),
                    e &&
                        (0, r.jsx)(u.Button, {
                            text: w.intl.string(w.t["XgZk+u"]),
                            onClick: () => {
                                m.Z.openSettings(C.Eu.SCREEN_RECORDING);
                            },
                        }),
                ],
            });
        }
        return (0, r.jsx)("div", {
            className: Z.loading,
            children: (0, r.jsx)(u.$jN, {}),
        });
    }
    let G = [];
    return ((G = o === c.vA.WINDOW ? D : o === c.vA.SCREEN ? s : l), o === c.vA.CAMERA && 0 === G.length)
        ? (0, r.jsx)(T, {})
        : (0, r.jsx)("div", {
              className: Z.root,
              children: G.map((e) =>
                  (0, r.jsx)(
                      I,
                      {
                          onClick: t,
                          source: e,
                          selected:
                              null != O && "windowHandle" in O
                                  ? (0, S.Z)(e.id, O.windowHandle)
                                  : (null == O ? void 0 : O.id) === e.id,
                      },
                      e.id,
                  ),
              ),
          });
}
function T() {
    return (0, r.jsxs)("div", {
        className: Z.emptyState,
        children: [
            (0, r.jsx)(u.Odl, {
                size: "md",
                color: u.TVs.colors.ICON_MUTED,
                className: Z.emptyIcon,
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-lg/medium",
                color: "header-primary",
                className: Z.emptyHeader,
                children: w.intl.string(O.default["/z3YaZ"]),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                className: Z.emptyBody,
                children: w.intl.string(O.default.agwSGA),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-sm/semibold",
                children: w.intl.format(O.default.xpVzr3, { helpdeskURL: g.Z.getArticleURL(360040816151) }),
            }),
        ],
    });
}
