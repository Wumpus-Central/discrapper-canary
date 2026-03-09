s.d(t, { A: () => M });
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
    A = s(830012),
    y = s(905552),
    S = s(688465),
    C = s(207975),
    b = s(502075),
    w = s(765682),
    I = s(332800),
    E = s(985018),
    N = s(243486);
function O(e, t, s, r) {
    let i = (0, j.isWindows)() ? (0, y.A)(h.Ay, _.A) : null,
        n = h.Ay.getRunningGames(),
        l = s?.split(":")[1],
        a = e.id.split(":")[1];
    if (null != l && l === a) return 0;
    if (null != t && t === e.id) return 5;
    if (null != i && (0, A.A)(e.id, i.windowHandle)) return 4;
    if (null != n.find((t) => (0, A.A)(e.id, t.windowHandle))) return 3;
    let o = r?.[a];
    return null != o && b.F2.has(o) ? 2 : 1;
}
function T(e) {
    let { source: t } = e;
    return t.id.startsWith(c.fS.SCREEN)
        ? (0, r.jsx)(u.kN9, { size: "xs" })
        : t.id.startsWith(c.fS.WINDOW)
          ? null != t.icon && "" !== t.icon
              ? (0, r.jsx)("img", { src: t.icon, className: N.pI, alt: "" })
              : (0, r.jsx)(u.WxK, { size: "xs" })
          : (0, r.jsx)(u.npA, { size: "xs" });
}
function R(e) {
    let { source: t, selected: s, onClick: i } = e,
        { url: n, name: a } = t;
    return (0, r.jsxs)(u.DUT, {
        onClick: () => i(t),
        className: l()(N.sP, { [N.Lv]: s }),
        children: [
            (0, r.jsx)("div", {
                className: N.ji,
                children: (0, r.jsxs)("div", {
                    className: N.KG,
                    children: [
                        (0, r.jsx)("img", { src: n, className: N.f5, alt: "" }),
                        (0, r.jsx)("div", {
                            className: N.qe,
                            children: (0, r.jsx)("div", {
                                className: N.K3,
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
                className: N.Uw,
                children: [
                    (0, r.jsx)(T, { source: t }),
                    (0, r.jsx)(u.Text, { variant: "text-sm/medium", className: N.VZ, children: a }),
                ],
            }),
        ],
    });
}
function M(e) {
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
                hasPermission: b,
            },
        ] = (0, S.tS)(),
        I = (0, d.bG)([h.Ay], () => h.Ay.getRunningGames()),
        T = (0, d.cf)([h.Ay], () => {
            let e = h.Ay.getCandidateGames(),
                t = {};
            for (let s of e) null != s.windowHandle && (t[s.windowHandle] = s.exeName);
            return t;
        }),
        M = (0, d.bG)([m.A], () => m.A.quests),
        G = (0, C.A)(M, I, s);
    i.useEffect(() => ((0, x.a2)(), x.e0), []);
    let D = i.useMemo(() => [...s].sort((e, t) => O(t, G?.source.id, y, T) - O(e, G?.source.id, y, T)), [G, s, y, T]);
    if (_) {
        if (!1 === b) {
            let e = !1;
            if ((0, j.isMac)()) {
                let t = f.A?.app.getVersion();
                e = !v.M || "0.0.0" === t || o().satisfies(t, "0.0.363");
            }
            return (0, r.jsxs)("div", {
                className: N.Ye,
                children: [
                    (0, r.jsxs)(u.Text, {
                        className: N.kc,
                        variant: "text-md/normal",
                        color: "text-feedback-critical",
                        children: [E.intl.string(E.t["kW5h/W"]), (0, r.jsx)("br", {}), E.intl.string(E.t["5Jvu1R"])],
                    }),
                    e &&
                        (0, r.jsx)(u.Button, {
                            text: E.intl.string(E.t["XgZk+u"]),
                            onClick: () => {
                                p.A.openSettings(w.iL.SCREEN_RECORDING);
                            },
                        }),
                ],
            });
        }
        return (0, r.jsx)("div", { className: N.Lq, children: (0, r.jsx)(u.y$y, {}) });
    }
    let L = [];
    return ((L = a === c.fS.WINDOW ? D : a === c.fS.SCREEN ? l : n), a === c.fS.CAMERA && 0 === L.length)
        ? (0, r.jsx)(U, {})
        : (0, r.jsx)("div", {
              className: N.zr,
              children: L.map((e) =>
                  (0, r.jsx)(
                      R,
                      {
                          onClick: t,
                          source: e,
                          selected: null != g && "windowHandle" in g ? (0, A.A)(e.id, g.windowHandle) : g?.id === e.id,
                      },
                      e.id,
                  ),
              ),
          });
}
function U() {
    return (0, r.jsxs)("div", {
        className: N.p$,
        children: [
            (0, r.jsx)(u.npA, { size: "md", color: u.LU0.colors.ICON_MUTED, className: N.Dw }),
            (0, r.jsx)(u.Text, {
                variant: "text-lg/medium",
                color: "text-strong",
                className: N.jU,
                children: E.intl.string(I.default["/z3YaZ"]),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                className: N.C3,
                children: E.intl.string(I.default.agwSGA),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-sm/semibold",
                children: E.intl.format(I.default.xpVzr3, { helpdeskURL: g.A.getArticleURL(0x53d41ade17) }),
            }),
        ],
    });
}
