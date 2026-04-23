s.d(t, { A: () => F });
var i = s(627968),
    r = s(64700),
    n = s(503698),
    l = s.n(n),
    a = s(299855),
    o = s.n(a),
    c = s(141931),
    d = s(311907),
    u = s(31300),
    f = s(93688),
    h = s(428689),
    x = s(939249),
    p = s(834730),
    _ = s(821609),
    m = s(289873),
    g = s(827734),
    j = s(77729),
    v = s(15285),
    A = s(843402),
    C = s(674966),
    S = s(859703),
    y = s(157257),
    b = s(975571),
    w = s(723702),
    E = s(290805),
    I = s(830012),
    N = s(905552),
    O = s(688465),
    R = s(207975),
    T = s(502075),
    M = s(765682),
    D = s(710787),
    G = s(985018),
    U = s(495163);
function L(e, t, s, i) {
    let r = (0, w.isWindows)() ? (0, N.A)(v.Ay, y.A) : null,
        n = v.Ay.getRunningGames(),
        l = s?.split(":")[1],
        a = e.id.split(":")[1];
    if (null != l && l === a) return 0;
    if (null != t && t === e.id) return 5;
    if (null != r && (0, I.A)(e.id, r.windowHandle)) return 4;
    if (null != n.find((t) => (0, I.A)(e.id, t.windowHandle))) return 3;
    let o = i?.[a];
    return null != o && T.F2.has(o) ? 2 : 1;
}
function P(e) {
    let { source: t } = e;
    return t.id.startsWith(c.fS.SCREEN)
        ? (0, i.jsx)(u.k, { size: "xs" })
        : t.id.startsWith(c.fS.WINDOW)
          ? null != t.icon && "" !== t.icon
              ? (0, i.jsx)("img", { src: t.icon, className: U.pI, alt: "" })
              : (0, i.jsx)(f.W, { size: "xs" })
          : (0, i.jsx)(h.n, { size: "xs" });
}
function k(e) {
    let { source: t, selected: s, onClick: r } = e,
        { url: n, name: a } = t;
    return (0, i.jsxs)(x.D, {
        onClick: () => r(t),
        className: l()(U.sP, { [U.Lv]: s }),
        children: [
            (0, i.jsx)("div", {
                className: U.ji,
                children: (0, i.jsxs)("div", {
                    className: U.KG,
                    children: [
                        (0, i.jsx)("img", { src: n, className: U.f5, alt: "" }),
                        (0, i.jsx)("div", {
                            className: U.qe,
                            children: (0, i.jsx)("div", {
                                className: U.K3,
                                children: (0, i.jsx)(p.E, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    children: G.intl.string(G.t.z7WGhv),
                                }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsxs)("div", {
                className: U.Uw,
                children: [
                    (0, i.jsx)(P, { source: t }),
                    (0, i.jsx)(p.E, { variant: "text-sm/medium", className: U.VZ, children: a }),
                ],
            }),
        ],
    });
}
function F(e) {
    let { onClick: t } = e,
        [
            {
                windowSources: s,
                deviceSources: n,
                screenSources: l,
                sourceType: a,
                fetchingSources: u,
                selectedSource: f,
                discordSourceId: h,
                hasPermission: x,
            },
        ] = (0, O.tS)(),
        g = (0, d.bG)([v.Ay], () => v.Ay.getRunningGames()),
        y = (0, d.cf)([v.Ay], () => {
            let e = v.Ay.getCandidateGames(),
                t = {};
            for (let s of e) null != s.windowHandle && (t[s.windowHandle] = s.exeName);
            return t;
        }),
        b = (0, d.bG)([S.A], () => S.A.quests),
        N = (0, R.A)(b, g, s);
    r.useEffect(() => ((0, A.a2)(), A.e0), []);
    let T = r.useMemo(() => [...s].sort((e, t) => L(t, N?.source.id, h, y) - L(e, N?.source.id, h, y)), [N, s, h, y]);
    if (u) {
        if (!1 === x) {
            let e = !1;
            if ((0, w.isMac)()) {
                let t = j.A?.app.getVersion();
                e = !E.M || "0.0.0" === t || o().satisfies(t, "0.0.363");
            }
            return (0, i.jsxs)("div", {
                className: U.Ye,
                children: [
                    (0, i.jsxs)(p.E, {
                        className: U.kc,
                        variant: "text-md/normal",
                        color: "text-feedback-critical",
                        children: [G.intl.string(G.t["kW5h/W"]), (0, i.jsx)("br", {}), G.intl.string(G.t["5Jvu1R"])],
                    }),
                    e &&
                        (0, i.jsx)(_.$, {
                            text: G.intl.string(G.t["XgZk+u"]),
                            onClick: () => {
                                C.A.openSettings(M.iL.SCREEN_RECORDING);
                            },
                        }),
                ],
            });
        }
        return (0, i.jsx)("div", { className: U.Lq, children: (0, i.jsx)(m.y, {}) });
    }
    let D = [];
    return ((D = a === c.fS.WINDOW ? T : a === c.fS.SCREEN ? l : n), a === c.fS.CAMERA && 0 === D.length)
        ? (0, i.jsx)(H, {})
        : (0, i.jsx)("div", {
              className: U.zr,
              children: D.map((e) =>
                  (0, i.jsx)(
                      k,
                      {
                          onClick: t,
                          source: e,
                          selected: null != f && "windowHandle" in f ? (0, I.A)(e.id, f.windowHandle) : f?.id === e.id,
                      },
                      e.id,
                  ),
              ),
          });
}
function H() {
    return (0, i.jsxs)("div", {
        className: U.p$,
        children: [
            (0, i.jsx)(h.n, { size: "md", color: g.A.colors.ICON_MUTED, className: U.Dw }),
            (0, i.jsx)(p.E, {
                variant: "text-lg/medium",
                color: "text-strong",
                className: U.jU,
                children: G.intl.string(D.default["/z3YaZ"]),
            }),
            (0, i.jsx)(p.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                className: U.C3,
                children: G.intl.string(D.default.agwSGA),
            }),
            (0, i.jsx)(p.E, {
                variant: "text-sm/semibold",
                children: G.intl.format(D.default.xpVzr3, { helpdeskURL: b.A.getArticleURL(0x53d41ade17) }),
            }),
        ],
    });
}
