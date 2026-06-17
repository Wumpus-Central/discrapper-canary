a.r(t), a.d(t, { default: () => A });
var s = a(627968),
    l = a(64700),
    n = a(735438),
    i = a.n(n),
    r = a(189213),
    c = a(17928),
    o = a(834730),
    d = a(276293),
    m = a(939249),
    x = a(658675),
    h = a(150934),
    u = a(702805),
    j = a(565645),
    g = a(148719),
    v = a(47167),
    N = a(713654),
    C = a(495273),
    k = a(7584),
    p = a(808728),
    y = a(375708),
    b = a(734157);
function E(e) {
    let { onClose: t, handleReviewPermissions: a, transitionState: n } = e,
        i = (e) => (0, s.jsx)(o.E, { tag: "span", variant: "text-md/medium", color: "text-strong", children: e }),
        c = l.useMemo(
            () => [
                { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: t },
                { variant: "primary", text: y.intl.string(y.t.bEnleq), onClick: a },
            ],
            [a, t],
        );
    return (0, s.jsx)(r.Modal, {
        title: y.intl.string(y.t.PJOCL6),
        actions: c,
        onClose: t,
        transitionState: n,
        children: (0, s.jsxs)("ul", {
            className: b.Dj,
            children: [
                (0, s.jsxs)("li", {
                    className: b.KN,
                    children: [
                        (0, s.jsx)("div", {
                            className: b.P0,
                            children: (0, s.jsx)(j.A, { emojiName: k.Ay.getByName("eyes")?.surrogates, alt: "" }),
                        }),
                        (0, s.jsx)(o.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: y.intl.format(y.t["8JzOBn"], { emphasisHook: i }),
                        }),
                    ],
                }),
                (0, s.jsxs)("li", {
                    className: b.KN,
                    children: [
                        (0, s.jsx)("div", {
                            className: b.P0,
                            children: (0, s.jsx)(j.A, {
                                emojiName: k.Ay.getByName("star_struck")?.surrogates,
                                alt: "",
                            }),
                        }),
                        (0, s.jsx)(o.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: y.intl.format(y.t.UcGDkt, { emphasisHook: i }),
                        }),
                    ],
                }),
                (0, s.jsxs)("li", {
                    className: b.KN,
                    children: [
                        (0, s.jsx)("div", {
                            className: b.P0,
                            children: (0, s.jsx)(j.A, { emojiName: k.Ay.getByName("books")?.surrogates, alt: "" }),
                        }),
                        (0, s.jsx)(o.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: y.intl.format(y.t.kALJ5q, { emphasisHook: i }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function f(e) {
    let { channel: t, selected: a, onChange: n } = e,
        i = (0, v.Ay)(t),
        r = (0, N.gU)(t) ?? d.N,
        c = l.useCallback(() => {
            n(t);
        }, [t, n]);
    return (0, s.jsxs)(m.D, {
        "aria-label": i ?? void 0,
        "aria-checked": a,
        className: b.qC,
        onClick: c,
        children: [
            (0, s.jsxs)("div", {
                className: b.yB,
                children: [
                    (0, s.jsx)(r, { className: b.p, size: "xs", color: "currentColor" }),
                    (0, s.jsx)(o.E, {
                        className: b.HA,
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: i,
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: b.Mv, children: (0, s.jsx)(x.P, { checked: a }) }),
        ],
    });
}
function A(e) {
    let { transitionState: t, onClose: a, guildId: n, startingChannelId: d } = e,
        m = (0, c.yK)([p.Ay], () => {
            let e = p.Ay.getChannels(n);
            return (e[p.I6] ?? [])
                .concat(e[p.vM] ?? [])
                .filter((e) => (0, g.A)(e.channel))
                .map((e) => e.channel);
        }),
        [x, j] = l.useState(0),
        v = m.find((e) => e.id === d),
        [N, k] = l.useState(null != v ? [v] : []),
        A = N.length === m.length,
        P = l.useCallback(() => {
            j(1);
        }, [j]),
        S = l.useCallback(
            (e) => {
                k((t) => (t.includes(e) ? [...i().pull(t, e)] : [...t, e]));
            },
            [k],
        ),
        B = l.useCallback(() => {
            A ? k([]) : k(m);
        }, [A, m, k]),
        K = l.useCallback(() => {
            N.forEach((e) => {
                let t = (0, C.es)(e, e.accessPermissions, !0);
                (0, u.R$)(e.id, [t]), a();
            });
        }, [N, a]),
        M = l.useMemo(
            () => [
                { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: a },
                { variant: "primary", text: y.intl.string(y.t.PggHmu), onClick: K, disabled: 0 === N.length },
            ],
            [K, a, N.length],
        );
    return 0 === x
        ? (0, s.jsx)(E, { handleReviewPermissions: P, onClose: a, transitionState: t })
        : (0, s.jsxs)(r.Modal, {
              title: y.intl.string(y.t.y77PiT),
              subtitle: y.intl.string(y.t.ZSzBe5),
              actions: M,
              onClose: a,
              transitionState: t,
              input: (0, s.jsxs)("div", {
                  className: b.TY,
                  children: [
                      (0, s.jsx)(o.E, {
                          className: b.ko,
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: y.intl.format(y.t.rrYCq2, { count: m.length }),
                      }),
                      (0, s.jsx)("div", {
                          className: b.L7,
                          children: (0, s.jsx)(h.S, {
                              onChange: B,
                              checked: A,
                              label: y.intl.string(y.t.l4rqaz),
                              labelType: "secondary",
                          }),
                      }),
                  ],
              }),
              children: [
                  (0, s.jsx)("div", {
                      className: b.XK,
                      children: m.map((e) => (0, s.jsx)(f, { channel: e, selected: N.includes(e), onChange: S }, e.id)),
                  }),
                  (0, s.jsx)("div", {
                      className: b.PE,
                      children: (0, s.jsx)(o.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: y.intl.format(y.t["OP/pKr"], {
                              emphasisHook: (e) =>
                                  (0, s.jsx)(o.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "interactive-text-active",
                                      children: e,
                                  }),
                              brandHook: (e) =>
                                  (0, s.jsx)(o.E, {
                                      tag: "span",
                                      variant: "text-xs/normal",
                                      color: "text-brand",
                                      children: e,
                                  }),
                          }),
                      }),
                  }),
              ],
          });
}
