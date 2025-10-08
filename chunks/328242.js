n.d(t, { Z: () => P }), n(388685), n(642613);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    o = n(209739),
    a = n.n(o),
    c = n(268146),
    d = n(442837),
    u = n(481060),
    f = n(579806),
    m = n(594190),
    h = n(320724),
    p = n(751571),
    x = n(569984),
    g = n(63063),
    _ = n(358085),
    v = n(747268),
    j = n(215915),
    b = n(855403),
    C = n(567126),
    S = n(615161),
    y = n(761274),
    O = n(637824),
    w = n(388032),
    Z = n(602804);
function I(e) {
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
function N(e) {
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
                                    color: "button-filled-white-text",
                                    children: w.intl.string(w.t.z7WGho),
                                }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)("div", {
                className: Z.sourceNameContainer,
                children: [
                    (0, r.jsx)(I, { source: t }),
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
function P(e) {
    let { onClick: t } = e,
        [
            {
                windowSources: n,
                deviceSources: l,
                screenSources: s,
                sourceType: o,
                fetchingSources: g,
                selectedSource: O,
                discordSourceId: I,
                hasPermission: P,
            },
        ] = (0, S.E_)(),
        { smarterSourceOrdering: E } = (0, j.E)({ location: "GoLiveSourceGrid" }),
        R = (0, d.e7)([m.ZP], () => m.ZP.getRunningGames()),
        k = (0, d.cj)([m.ZP], () => {
            let e = m.ZP.getCandidateGames(),
                t = {};
            for (let n of e) null != n.windowHandle && (t[n.windowHandle] = n.exeName);
            return t;
        }),
        A = (0, d.e7)([x.Z], () => x.Z.quests),
        M = (0, C.jx)(A, R, n);
    i.useEffect(() => ((0, h.Ky)(), h.P7), []);
    let D = i.useMemo(
        () =>
            E
                ? [...n].sort(
                      (e, t) =>
                          (0, C.ov)(t, null == M ? void 0 : M.source.id, I, k) -
                          (0, C.ov)(e, null == M ? void 0 : M.source.id, I, k),
                  )
                : n,
        [M, E, n, I, k],
    );
    if (g) {
        if (!P) {
            let e = !1;
            if ((0, _.isMac)()) {
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
                        color: "text-danger",
                        children: [w.intl.string(w.t["kW5h/f"]), (0, r.jsx)("br", {}), w.intl.string(w.t["5Jvu1d"])],
                    }),
                    e &&
                        (0, r.jsx)(u.zxk, {
                            text: w.intl.string(w.t["XgZk+v"]),
                            onClick: () => {
                                p.Z.openSettings(y.Eu.SCREEN_RECORDING);
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
                      N,
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
                children: w.intl.string(O.default["/z3YaW"]),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: Z.emptyBody,
                children: w.intl.string(O.default.agwSGB),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-sm/semibold",
                children: w.intl.format(O.default.xpVzr6, { helpdeskURL: g.Z.getArticleURL(360040816151) }),
            }),
        ],
    });
}
