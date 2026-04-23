a.r(t), a.d(t, { default: () => A });
var l = a(627968),
    s = a(64700),
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
    C = a(148719),
    v = a(47167),
    g = a(713654),
    N = a(495273),
    f = a(7584),
    p = a(808728),
    k = a(985018),
    b = a(734157);
function y(e) {
    let { onClose: t, handleReviewPermissions: a, transitionState: n } = e,
        i = (e) => (0, l.jsx)(o.E, { tag: "span", variant: "text-md/medium", color: "text-strong", children: e }),
        c = s.useMemo(
            () => [
                { variant: "secondary", text: k.intl.string(k.t["ETE/oC"]), onClick: t },
                { variant: "primary", text: k.intl.string(k.t.bEnleq), onClick: a },
            ],
            [a, t],
        );
    return (0, l.jsx)(r.Modal, {
        title: k.intl.string(k.t.PJOCL6),
        actions: c,
        onClose: t,
        transitionState: n,
        children: (0, l.jsxs)("ul", {
            className: b.Dj,
            children: [
                (0, l.jsxs)("li", {
                    className: b.KN,
                    children: [
                        (0, l.jsx)("div", {
                            className: b.P0,
                            children: (0, l.jsx)(j.A, { emojiName: f.Ay.getByName("eyes")?.surrogates }),
                        }),
                        (0, l.jsx)(o.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: k.intl.format(k.t["8JzOBn"], { emphasisHook: i }),
                        }),
                    ],
                }),
                (0, l.jsxs)("li", {
                    className: b.KN,
                    children: [
                        (0, l.jsx)("div", {
                            className: b.P0,
                            children: (0, l.jsx)(j.A, { emojiName: f.Ay.getByName("star_struck")?.surrogates }),
                        }),
                        (0, l.jsx)(o.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: k.intl.format(k.t.UcGDkt, { emphasisHook: i }),
                        }),
                    ],
                }),
                (0, l.jsxs)("li", {
                    className: b.KN,
                    children: [
                        (0, l.jsx)("div", {
                            className: b.P0,
                            children: (0, l.jsx)(j.A, { emojiName: f.Ay.getByName("books")?.surrogates }),
                        }),
                        (0, l.jsx)(o.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: k.intl.format(k.t.kALJ5q, { emphasisHook: i }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function E(e) {
    let { channel: t, selected: a, onChange: n } = e,
        i = (0, v.Ay)(t),
        r = (0, g.gU)(t) ?? d.N,
        c = s.useCallback(() => {
            n(t);
        }, [t, n]);
    return (0, l.jsxs)(m.D, {
        "aria-label": i ?? void 0,
        "aria-checked": a,
        className: b.qC,
        onClick: c,
        children: [
            (0, l.jsxs)("div", {
                className: b.yB,
                children: [
                    (0, l.jsx)(r, { className: b.p, size: "xs", color: "currentColor" }),
                    (0, l.jsx)(o.E, {
                        className: b.HA,
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: i,
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: b.Mv, children: (0, l.jsx)(x.P, { checked: a }) }),
        ],
    });
}
function A(e) {
    let { transitionState: t, onClose: a, guildId: n, startingChannelId: d } = e,
        m = (0, c.yK)([p.Ay], () => {
            let e = p.Ay.getChannels(n);
            return (e[p.I6] ?? [])
                .concat(e[p.vM] ?? [])
                .filter((e) => (0, C.A)(e.channel))
                .map((e) => e.channel);
        }),
        [x, j] = s.useState(0),
        v = m.find((e) => e.id === d),
        [g, f] = s.useState(null != v ? [v] : []),
        A = g.length === m.length,
        _ = s.useCallback(() => {
            j(1);
        }, [j]),
        P = s.useCallback(
            (e) => {
                f((t) => (t.includes(e) ? [...i().pull(t, e)] : [...t, e]));
            },
            [f],
        ),
        B = s.useCallback(() => {
            A ? f([]) : f(m);
        }, [A, m, f]),
        K = s.useCallback(() => {
            g.forEach((e) => {
                let t = (0, N.es)(e, e.accessPermissions, !0);
                (0, u.R$)(e.id, [t]), a();
            });
        }, [g, a]),
        S = s.useMemo(
            () => [
                { variant: "secondary", text: k.intl.string(k.t["ETE/oC"]), onClick: a },
                { variant: "primary", text: k.intl.string(k.t.PggHmu), onClick: K, disabled: 0 === g.length },
            ],
            [K, a, g.length],
        );
    return 0 === x
        ? (0, l.jsx)(y, { handleReviewPermissions: _, onClose: a, transitionState: t })
        : (0, l.jsxs)(r.Modal, {
              title: k.intl.string(k.t.y77PiT),
              subtitle: k.intl.string(k.t.ZSzBe5),
              actions: S,
              onClose: a,
              transitionState: t,
              input: (0, l.jsxs)("div", {
                  className: b.TY,
                  children: [
                      (0, l.jsx)(o.E, {
                          className: b.ko,
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: k.intl.format(k.t.rrYCq2, { count: m.length }),
                      }),
                      (0, l.jsx)("div", {
                          className: b.L7,
                          children: (0, l.jsx)(h.S, {
                              onChange: B,
                              checked: A,
                              label: k.intl.string(k.t.l4rqaz),
                              labelType: "secondary",
                          }),
                      }),
                  ],
              }),
              children: [
                  (0, l.jsx)("div", {
                      className: b.XK,
                      children: m.map((e) => (0, l.jsx)(E, { channel: e, selected: g.includes(e), onChange: P }, e.id)),
                  }),
                  (0, l.jsx)("div", {
                      className: b.PE,
                      children: (0, l.jsx)(o.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: k.intl.format(k.t["OP/pKr"], {
                              emphasisHook: (e) =>
                                  (0, l.jsx)(o.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "interactive-text-active",
                                      children: e,
                                  }),
                              brandHook: (e) =>
                                  (0, l.jsx)(o.E, {
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
