n.d(t, { Z: () => M }), n(35282), n(388685), n(642613);
var r = n(54381),
    i = n(473749),
    s = n(120356),
    l = n.n(s),
    o = n(209739),
    c = n.n(o),
    a = n(268146),
    d = n(442837),
    u = n(481060),
    f = n(579806),
    h = n(594190),
    p = n(320724),
    x = n(751571),
    m = n(616022),
    g = n(449224),
    v = n(63063),
    j = n(358085),
    _ = n(747268),
    b = n(215915),
    y = n(855403),
    w = n(989941),
    O = n(443762),
    C = n(953313),
    S = n(70722),
    I = n(761274),
    Z = n(715689),
    E = n(388032),
    P = n(605144);
function N(e, t, n, r) {
    let i = (0, j.isWindows)() ? (0, w.Z)(h.ZP, g.Z) : null,
        s = h.ZP.getRunningGames(),
        l = null == n ? void 0 : n.split(":")[1],
        o = e.id.split(":")[1];
    if (null != l && l === o) return 0;
    if (null != t && t === e.id) return 5;
    if (null != i && (0, y.Z)(e.id, i.windowHandle)) return 4;
    if (null != s.find((t) => (0, y.Z)(e.id, t.windowHandle))) return 3;
    let c = null == r ? void 0 : r[o];
    return null != c && S.Mm.has(c) ? 2 : 1;
}
function T(e) {
    let { source: t } = e;
    return t.id.startsWith(a.vA.SCREEN)
        ? (0, r.jsx)(u.pzj, { size: "xs" })
        : t.id.startsWith(a.vA.WINDOW)
          ? null != t.icon && "" !== t.icon
              ? (0, r.jsx)("img", {
                    src: t.icon,
                    className: P.sourceIcon,
                    alt: "",
                })
              : (0, r.jsx)(u.GON, { size: "xs" })
          : (0, r.jsx)(u.Odl, { size: "xs" });
}
function R(e) {
    let { source: t, selected: n, onClick: i } = e,
        { url: s, name: o } = t;
    return (0, r.jsxs)(u.P3F, {
        onClick: () => i(t),
        className: l()(P.source, { [P.selectedSource]: n }),
        children: [
            (0, r.jsx)("div", {
                className: P.sourcePreviewContainer,
                children: (0, r.jsxs)("div", {
                    className: P.sourcePreview,
                    children: [
                        (0, r.jsx)("img", {
                            src: s,
                            className: P.sourcePreviewImage,
                            alt: "",
                        }),
                        (0, r.jsx)("div", {
                            className: P.sourceOverlay,
                            children: (0, r.jsx)("div", {
                                className: P.sourceOverlayCTA,
                                children: (0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    children: E.intl.string(E.t.z7WGhv),
                                }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)("div", {
                className: P.sourceNameContainer,
                children: [
                    (0, r.jsx)(T, { source: t }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        className: P.sourceName,
                        children: o,
                    }),
                ],
            }),
        ],
    });
}
function M(e) {
    let { onClick: t } = e,
        [
            {
                windowSources: n,
                deviceSources: s,
                screenSources: l,
                sourceType: o,
                fetchingSources: g,
                selectedSource: v,
                discordSourceId: w,
                hasPermission: S,
            },
        ] = (0, O.E_)(),
        { smarterSourceOrdering: Z } = (0, b.E)({ location: "GoLiveSourceGrid" }),
        T = (0, d.e7)([h.ZP], () => h.ZP.getRunningGames()),
        M = (0, d.cj)([h.ZP], () => {
            let e = h.ZP.getCandidateGames(),
                t = {};
            for (let n of e) null != n.windowHandle && (t[n.windowHandle] = n.exeName);
            return t;
        }),
        L = (0, d.e7)([m.Z], () => m.Z.quests),
        U = (0, C.Z)(L, T, n);
    i.useEffect(() => ((0, p.Ky)(), p.P7), []);
    let D = i.useMemo(
        () =>
            Z
                ? [...n].sort(
                      (e, t) =>
                          N(t, null == U ? void 0 : U.source.id, w, M) - N(e, null == U ? void 0 : U.source.id, w, M),
                  )
                : n,
        [U, Z, n, w, M],
    );
    if (g) {
        if (!1 === S) {
            let e = !1;
            if ((0, j.isMac)()) {
                var G, H;
                let t =
                    null === f.Z || void 0 === f.Z || null == (H = f.Z.remoteApp) || null == (G = H.getVersion)
                        ? void 0
                        : G.call(H);
                e = !_.o || "0.0.0" === t || c().satisfies(t, "0.0.363");
            }
            return (0, r.jsxs)("div", {
                className: P.errorBox,
                children: [
                    (0, r.jsxs)(u.Text, {
                        className: P.errorText,
                        variant: "text-md/normal",
                        color: "text-feedback-critical",
                        children: [E.intl.string(E.t["kW5h/W"]), (0, r.jsx)("br", {}), E.intl.string(E.t["5Jvu1R"])],
                    }),
                    e &&
                        (0, r.jsx)(u.Button, {
                            text: E.intl.string(E.t["XgZk+u"]),
                            onClick: () => {
                                x.Z.openSettings(I.Eu.SCREEN_RECORDING);
                            },
                        }),
                ],
            });
        }
        return (0, r.jsx)("div", {
            className: P.loading,
            children: (0, r.jsx)(u.$jN, {}),
        });
    }
    let B = [];
    return ((B = o === a.vA.WINDOW ? D : o === a.vA.SCREEN ? l : s), o === a.vA.CAMERA && 0 === B.length)
        ? (0, r.jsx)(A, {})
        : (0, r.jsx)("div", {
              className: P.root,
              children: B.map((e) =>
                  (0, r.jsx)(
                      R,
                      {
                          onClick: t,
                          source: e,
                          selected:
                              null != v && "windowHandle" in v
                                  ? (0, y.Z)(e.id, v.windowHandle)
                                  : (null == v ? void 0 : v.id) === e.id,
                      },
                      e.id,
                  ),
              ),
          });
}
function A() {
    return (0, r.jsxs)("div", {
        className: P.emptyState,
        children: [
            (0, r.jsx)(u.Odl, {
                size: "md",
                color: u.TVs.colors.ICON_MUTED,
                className: P.emptyIcon,
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-lg/medium",
                color: "text-strong",
                className: P.emptyHeader,
                children: E.intl.string(Z.default["/z3YaZ"]),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                className: P.emptyBody,
                children: E.intl.string(Z.default.agwSGA),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-sm/semibold",
                children: E.intl.format(Z.default.xpVzr3, { helpdeskURL: v.Z.getArticleURL(360040816151) }),
            }),
        ],
    });
}
