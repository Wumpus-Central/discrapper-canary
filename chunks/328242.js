n.d(t, { Z: () => I }), n(388685), n(642613);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(209739),
    a = n.n(s),
    c = n(268146),
    d = n(442837),
    u = n(481060),
    f = n(579806),
    p = n(594190),
    h = n(320724),
    m = n(751571),
    _ = n(569984),
    g = n(63063),
    x = n(358085),
    v = n(747268),
    j = n(215915),
    b = n(855403),
    S = n(567126),
    y = n(615161),
    C = n(761274),
    O = n(529822),
    w = n(388032),
    P = n(602804);
function T(e) {
    let { source: t } = e;
    return t.id.startsWith(c.vA.SCREEN)
        ? (0, r.jsx)(u.pzj, { size: "xs" })
        : t.id.startsWith(c.vA.WINDOW)
          ? null != t.icon && "" !== t.icon
              ? (0, r.jsx)("img", {
                    src: t.icon,
                    className: P.sourceIcon,
                    alt: "",
                })
              : (0, r.jsx)(u.GON, { size: "xs" })
          : (0, r.jsx)(u.Odl, { size: "xs" });
}
function Z(e) {
    let { source: t, selected: n, onClick: i } = e,
        { url: l, name: s } = t;
    return (0, r.jsxs)(u.P3F, {
        onClick: () => i(t),
        className: o()(P.source, { [P.selectedSource]: n }),
        children: [
            (0, r.jsx)("div", {
                className: P.sourcePreviewContainer,
                children: (0, r.jsxs)("div", {
                    className: P.sourcePreview,
                    children: [
                        (0, r.jsx)("img", {
                            src: l,
                            className: P.sourcePreviewImage,
                            alt: "",
                        }),
                        (0, r.jsx)("div", {
                            className: P.sourceOverlay,
                            children: (0, r.jsx)("div", {
                                className: P.sourceOverlayCTA,
                                children: (0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "button-filled-white-text",
                                    children: w.intl.string(w.t.z7WGhv),
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
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { onClick: t } = e,
        [
            {
                windowSources: n,
                deviceSources: l,
                screenSources: o,
                sourceType: s,
                fetchingSources: g,
                selectedSource: O,
                discordSourceId: T,
                hasPermission: I,
            },
        ] = (0, y.E_)(),
        { smarterSourceOrdering: N } = (0, j.E)({ location: "GoLiveSourceGrid" }),
        R = (0, d.e7)([p.ZP], () => p.ZP.getRunningGames()),
        A = (0, d.cj)([p.ZP], () => {
            let e = p.ZP.getCandidateGames(),
                t = {};
            for (let n of e) null != n.windowHandle && (t[n.windowHandle] = n.exeName);
            return t;
        }),
        M = (0, d.e7)([_.Z], () => _.Z.quests),
        k = (0, S.jx)(M, R, n);
    i.useEffect(() => ((0, h.Ky)(), h.P7), []);
    let D = i.useMemo(
        () =>
            N
                ? [...n].sort(
                      (e, t) =>
                          (0, S.ov)(t, null == k ? void 0 : k.source.id, T, A) -
                          (0, S.ov)(e, null == k ? void 0 : k.source.id, T, A),
                  )
                : n,
        [k, N, n, T, A],
    );
    if (g) {
        if (!1 === I) {
            let e = !1;
            if ((0, x.isMac)()) {
                var B, L;
                let t =
                    null === f.Z || void 0 === f.Z || null == (L = f.Z.remoteApp) || null == (B = L.getVersion)
                        ? void 0
                        : B.call(L);
                e = !v.o || "0.0.0" === t || a().satisfies(t, "0.0.363");
            }
            return (0, r.jsxs)("div", {
                className: P.errorBox,
                children: [
                    (0, r.jsxs)(u.Text, {
                        className: P.errorText,
                        variant: "text-md/normal",
                        color: "text-danger",
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
            className: P.loading,
            children: (0, r.jsx)(u.$jN, {}),
        });
    }
    let G = [];
    return ((G = s === c.vA.WINDOW ? D : s === c.vA.SCREEN ? o : l), s === c.vA.CAMERA && 0 === G.length)
        ? (0, r.jsx)(E, {})
        : (0, r.jsx)("div", {
              className: P.root,
              children: G.map((e) =>
                  (0, r.jsx)(
                      Z,
                      {
                          onClick: t,
                          source: e,
                          selected:
                              null != O && "windowHandle" in O
                                  ? (0, b.Z)(e.id, O.windowHandle)
                                  : (null == O ? void 0 : O.id) === e.id,
                      },
                      e.id,
                  ),
              ),
          });
}
function E() {
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
                color: "header-primary",
                className: P.emptyHeader,
                children: w.intl.string(O.default["/z3YaZ"]),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: P.emptyBody,
                children: w.intl.string(O.default.agwSGA),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-sm/semibold",
                children: w.intl.format(O.default.xpVzr3, { helpdeskURL: g.Z.getArticleURL(360040816151) }),
            }),
        ],
    });
}
