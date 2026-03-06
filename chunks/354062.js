s.d(t, { A: () => U });
var r = s(627968),
    i = s(64700),
    n = s(503698),
    l = s.n(n),
    a = s(299855),
    o = s.n(a),
    c = s(141931),
    d = s(311907),
    u = s(397927),
    f = s(77729),
    h = s(15285),
    x = s(843402),
    p = s(674966),
    m = s(859703),
    _ = s(157257),
    g = s(975571),
    j = s(723702),
    v = s(290805),
    A = s(429432),
    S = s(830012),
    y = s(905552),
    C = s(688465),
    b = s(207975),
    w = s(502075),
    I = s(765682),
    E = s(332800),
    N = s(985018),
    O = s(243486);
function T(e, t, s, r) {
    let i = (0, j.isWindows)() ? (0, y.A)(h.Ay, _.A) : null,
        n = h.Ay.getRunningGames(),
        l = s?.split(":")[1],
        a = e.id.split(":")[1];
    if (null != l && l === a) return 0;
    if (null != t && t === e.id) return 5;
    if (null != i && (0, S.A)(e.id, i.windowHandle)) return 4;
    if (null != n.find((t) => (0, S.A)(e.id, t.windowHandle))) return 3;
    let o = r?.[a];
    return null != o && w.F2.has(o) ? 2 : 1;
}
function R(e) {
    let { source: t } = e;
    return t.id.startsWith(c.fS.SCREEN)
        ? (0, r.jsx)(u.kN9, { size: "xs" })
        : t.id.startsWith(c.fS.WINDOW)
          ? null != t.icon && "" !== t.icon
              ? (0, r.jsx)("img", { src: t.icon, className: O.pI, alt: "" })
              : (0, r.jsx)(u.WxK, { size: "xs" })
          : (0, r.jsx)(u.npA, { size: "xs" });
}
function M(e) {
    let { source: t, selected: s, onClick: i } = e,
        { url: n, name: a } = t;
    return (0, r.jsxs)(u.DUT, {
        onClick: () => i(t),
        className: l()(O.sP, { [O.Lv]: s }),
        children: [
            (0, r.jsx)("div", {
                className: O.ji,
                children: (0, r.jsxs)("div", {
                    className: O.KG,
                    children: [
                        (0, r.jsx)("img", { src: n, className: O.f5, alt: "" }),
                        (0, r.jsx)("div", {
                            className: O.qe,
                            children: (0, r.jsx)("div", {
                                className: O.K3,
                                children: (0, r.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    children: N.intl.string(N.t.z7WGhv),
                                }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)("div", {
                className: O.Uw,
                children: [
                    (0, r.jsx)(R, { source: t }),
                    (0, r.jsx)(u.Text, { variant: "text-sm/medium", className: O.VZ, children: a }),
                ],
            }),
        ],
    });
}
function U(e) {
    let { onClick: t } = e,
        [
            {
                windowSources: s,
                deviceSources: n,
                screenSources: l,
                sourceType: a,
                fetchingSources: _,
                selectedSource: g,
                discordSourceId: y,
                hasPermission: w,
            },
        ] = (0, C.tS)(),
        { smarterSourceOrdering: E } = (0, A.s)({ location: "GoLiveSourceGrid" }),
        R = (0, d.bG)([h.Ay], () => h.Ay.getRunningGames()),
        U = (0, d.cf)([h.Ay], () => {
            let e = h.Ay.getCandidateGames(),
                t = {};
            for (let s of e) null != s.windowHandle && (t[s.windowHandle] = s.exeName);
            return t;
        }),
        L = (0, d.bG)([m.A], () => m.A.quests),
        D = (0, b.A)(L, R, s);
    i.useEffect(() => ((0, x.a2)(), x.e0), []);
    let P = i.useMemo(
        () => (E ? [...s].sort((e, t) => T(t, D?.source.id, y, U) - T(e, D?.source.id, y, U)) : s),
        [D, E, s, y, U],
    );
    if (_) {
        if (!1 === w) {
            let e = !1;
            if ((0, j.isMac)()) {
                let t = f.A?.app.getVersion();
                e = !v.M || "0.0.0" === t || o().satisfies(t, "0.0.363");
            }
            return (0, r.jsxs)("div", {
                className: O.Ye,
                children: [
                    (0, r.jsxs)(u.Text, {
                        className: O.kc,
                        variant: "text-md/normal",
                        color: "text-feedback-critical",
                        children: [N.intl.string(N.t["kW5h/W"]), (0, r.jsx)("br", {}), N.intl.string(N.t["5Jvu1R"])],
                    }),
                    e &&
                        (0, r.jsx)(u.Button, {
                            text: N.intl.string(N.t["XgZk+u"]),
                            onClick: () => {
                                p.A.openSettings(I.iL.SCREEN_RECORDING);
                            },
                        }),
                ],
            });
        }
        return (0, r.jsx)("div", { className: O.Lq, children: (0, r.jsx)(u.y$y, {}) });
    }
    let F = [];
    return ((F = a === c.fS.WINDOW ? P : a === c.fS.SCREEN ? l : n), a === c.fS.CAMERA && 0 === F.length)
        ? (0, r.jsx)(G, {})
        : (0, r.jsx)("div", {
              className: O.zr,
              children: F.map((e) =>
                  (0, r.jsx)(
                      M,
                      {
                          onClick: t,
                          source: e,
                          selected: null != g && "windowHandle" in g ? (0, S.A)(e.id, g.windowHandle) : g?.id === e.id,
                      },
                      e.id,
                  ),
              ),
          });
}
function G() {
    return (0, r.jsxs)("div", {
        className: O.p$,
        children: [
            (0, r.jsx)(u.npA, { size: "md", color: u.LU0.colors.ICON_MUTED, className: O.Dw }),
            (0, r.jsx)(u.Text, {
                variant: "text-lg/medium",
                color: "text-strong",
                className: O.jU,
                children: N.intl.string(E.default["/z3YaZ"]),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                className: O.C3,
                children: N.intl.string(E.default.agwSGA),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-sm/semibold",
                children: N.intl.format(E.default.xpVzr3, { helpdeskURL: g.A.getArticleURL(0x53d41ade17) }),
            }),
        ],
    });
}
