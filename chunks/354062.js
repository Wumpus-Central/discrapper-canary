r.d(t, {
    A: () => M,
}),
    r(747238),
    r(896048),
    r(638769);
var n = r(627968),
    l = r(64700),
    s = r(503698),
    i = r.n(s),
    a = r(299855),
    c = r.n(a),
    o = r(141931),
    d = r(311907),
    f = r(397927),
    u = r(77729),
    h = r(15285),
    p = r(843402),
    x = r(674966),
    j = r(859703),
    m = r(157257),
    g = r(975571),
    b = r(723702),
    v = r(290805),
    y = r(429432),
    S = r(830012),
    A = r(905552),
    _ = r(688465),
    O = r(207975),
    C = r(502075),
    w = r(765682),
    E = r(191850),
    N = r(985018),
    I = r(146896);

function T(e, t, r, n) {
    let l = (0, b.isWindows)() ? (0, A.A)(h.Ay, m.A) : null,
        s = h.Ay.getRunningGames(),
        i = null == r ? void 0 : r.split(":")[1],
        a = e.id.split(":")[1];
    if (null != i && i === a) return 0;
    if (null != t && t === e.id) return 5;
    if (null != l && (0, S.A)(e.id, l.windowHandle)) return 4;
    if (null != s.find((t) => (0, S.A)(e.id, t.windowHandle))) return 3;
    let c = null == n ? void 0 : n[a];
    return null != c && C.F2.has(c) ? 2 : 1;
}

function R(e) {
    let { source: t } = e;
    return t.id.startsWith(o.fS.SCREEN)
        ? (0, n.jsx)(f.kN9, {
              size: "xs",
          })
        : t.id.startsWith(o.fS.WINDOW)
          ? null != t.icon && "" !== t.icon
              ? (0, n.jsx)("img", {
                    src: t.icon,
                    className: I.pI,
                    alt: "",
                })
              : (0, n.jsx)(f.WxK, {
                    size: "xs",
                })
          : (0, n.jsx)(f.npA, {
                size: "xs",
            });
}

function P(e) {
    let { source: t, selected: r, onClick: l } = e,
        { url: s, name: a } = t;
    return (0, n.jsxs)(f.DUT, {
        onClick: () => l(t),
        className: i()(I.sP, {
            [I.Lv]: r,
        }),
        children: [
            (0, n.jsx)("div", {
                className: I.ji,
                children: (0, n.jsxs)("div", {
                    className: I.KG,
                    children: [
                        (0, n.jsx)("img", {
                            src: s,
                            className: I.f5,
                            alt: "",
                        }),
                        (0, n.jsx)("div", {
                            className: I.qe,
                            children: (0, n.jsx)("div", {
                                className: I.K3,
                                children: (0, n.jsx)(f.Text, {
                                    variant: "text-sm/medium",
                                    color: "currentColor",
                                    children: N.intl.string(N.t.z7WGhv),
                                }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: I.Uw,
                children: [
                    (0, n.jsx)(R, {
                        source: t,
                    }),
                    (0, n.jsx)(f.Text, {
                        variant: "text-sm/medium",
                        className: I.VZ,
                        children: a,
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
                windowSources: r,
                deviceSources: s,
                screenSources: i,
                sourceType: a,
                fetchingSources: m,
                selectedSource: g,
                discordSourceId: A,
                hasPermission: C,
            },
        ] = (0, _.tS)(),
        { smarterSourceOrdering: E } = (0, y.s)({
            location: "GoLiveSourceGrid",
        }),
        R = (0, d.bG)([h.Ay], () => h.Ay.getRunningGames()),
        M = (0, d.cf)([h.Ay], () => {
            let e = h.Ay.getCandidateGames(),
                t = {};
            for (let r of e) null != r.windowHandle && (t[r.windowHandle] = r.exeName);
            return t;
        }),
        U = (0, d.bG)([j.A], () => j.A.quests),
        L = (0, O.A)(U, R, r);
    l.useEffect(() => ((0, p.a2)(), p.e0), []);
    let G = l.useMemo(
        () =>
            E
                ? [...r].sort(
                      (e, t) =>
                          T(t, null == L ? void 0 : L.source.id, A, M) - T(e, null == L ? void 0 : L.source.id, A, M),
                  )
                : r,
        [L, E, r, A, M],
    );
    if (m) {
        if (!1 === C) {
            let e = !1;
            if ((0, b.isMac)()) {
                var k, F;
                let t =
                    null === u.A || void 0 === u.A || null == (F = u.A.remoteApp) || null == (k = F.getVersion)
                        ? void 0
                        : k.call(F);
                e = !v.M || "0.0.0" === t || c().satisfies(t, "0.0.363");
            }
            return (0, n.jsxs)("div", {
                className: I.Ye,
                children: [
                    (0, n.jsxs)(f.Text, {
                        className: I.kc,
                        variant: "text-md/normal",
                        color: "text-feedback-critical",
                        children: [N.intl.string(N.t["kW5h/W"]), (0, n.jsx)("br", {}), N.intl.string(N.t["5Jvu1R"])],
                    }),
                    e &&
                        (0, n.jsx)(f.Button, {
                            text: N.intl.string(N.t["XgZk+u"]),
                            onClick: () => {
                                x.A.openSettings(w.iL.SCREEN_RECORDING);
                            },
                        }),
                ],
            });
        }
        return (0, n.jsx)("div", {
            className: I.Lq,
            children: (0, n.jsx)(f.y$y, {}),
        });
    }
    let Z = [];
    return ((Z = a === o.fS.WINDOW ? G : a === o.fS.SCREEN ? i : s), a === o.fS.CAMERA && 0 === Z.length)
        ? (0, n.jsx)(D, {})
        : (0, n.jsx)("div", {
              className: I.zr,
              children: Z.map((e) =>
                  (0, n.jsx)(
                      P,
                      {
                          onClick: t,
                          source: e,
                          selected:
                              null != g && "windowHandle" in g
                                  ? (0, S.A)(e.id, g.windowHandle)
                                  : (null == g ? void 0 : g.id) === e.id,
                      },
                      e.id,
                  ),
              ),
          });
}

function D() {
    return (0, n.jsxs)("div", {
        className: I.p$,
        children: [
            (0, n.jsx)(f.npA, {
                size: "md",
                color: f.LU0.colors.ICON_MUTED,
                className: I.Dw,
            }),
            (0, n.jsx)(f.Text, {
                variant: "text-lg/medium",
                color: "text-strong",
                className: I.jU,
                children: N.intl.string(E.default["/z3YaZ"]),
            }),
            (0, n.jsx)(f.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                className: I.C3,
                children: N.intl.string(E.default.agwSGA),
            }),
            (0, n.jsx)(f.Text, {
                variant: "text-sm/semibold",
                children: N.intl.format(E.default.xpVzr3, {
                    helpdeskURL: g.A.getArticleURL(0x53d41ade17),
                }),
            }),
        ],
    });
}
