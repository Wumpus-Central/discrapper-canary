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
    _ = n(569984),
    g = n(63063),
    x = n(358085),
    v = n(747268),
    j = n(215915),
    S = n(855403),
    b = n(567126),
    y = n(615161),
    C = n(761274),
    O = n(266734),
    w = n(388032),
    P = n(615770);
function Z(e) {
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
function I(e) {
    let { source: t, selected: n, onClick: i } = e,
        { url: l, name: o } = t;
    return (0, r.jsxs)(u.P3F, {
        onClick: () => i(t),
        className: s()(P.source, { [P.selectedSource]: n }),
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
                    (0, r.jsx)(Z, { source: t }),
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
                discordSourceId: Z,
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
                          (0, b.ov)(t, null == k ? void 0 : k.source.id, Z, R) -
                          (0, b.ov)(e, null == k ? void 0 : k.source.id, Z, R),
                  )
                : n,
        [k, N, n, Z, R],
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
    return ((G = o === c.vA.WINDOW ? D : o === c.vA.SCREEN ? s : l), o === c.vA.CAMERA && 0 === G.length)
        ? (0, r.jsx)(T, {})
        : (0, r.jsx)("div", {
              className: P.root,
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
