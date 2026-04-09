a.r(t), a.d(t, { default: () => k });
var l = a(627968),
    s = a(64700),
    n = a(735438),
    i = a.n(n),
    r = a(158954),
    c = a(311907),
    o = a(397927),
    d = a(702805),
    x = a(565645),
    m = a(148719),
    h = a(47167),
    u = a(713654),
    j = a(495273),
    C = a(7584),
    v = a(808728),
    g = a(985018),
    N = a(853316);
function f(e) {
    let { onClose: t, handleReviewPermissions: a, transitionState: n } = e,
        i = (e) => (0, l.jsx)(o.Text, { tag: "span", variant: "text-md/medium", color: "text-strong", children: e }),
        c = s.useMemo(
            () => [
                { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: t },
                { variant: "primary", text: g.intl.string(g.t.bEnleq), onClick: a },
            ],
            [a, t],
        );
    return (0, l.jsx)(r.Modal, {
        title: g.intl.string(g.t.PJOCL6),
        actions: c,
        onClose: t,
        transitionState: n,
        children: (0, l.jsxs)("ul", {
            className: N.Dj,
            children: [
                (0, l.jsxs)("li", {
                    className: N.KN,
                    children: [
                        (0, l.jsx)("div", {
                            className: N.P0,
                            children: (0, l.jsx)(x.A, { emojiName: C.Ay.getByName("eyes")?.surrogates }),
                        }),
                        (0, l.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: g.intl.format(g.t["8JzOBn"], { emphasisHook: i }),
                        }),
                    ],
                }),
                (0, l.jsxs)("li", {
                    className: N.KN,
                    children: [
                        (0, l.jsx)("div", {
                            className: N.P0,
                            children: (0, l.jsx)(x.A, { emojiName: C.Ay.getByName("star_struck")?.surrogates }),
                        }),
                        (0, l.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: g.intl.format(g.t.UcGDkt, { emphasisHook: i }),
                        }),
                    ],
                }),
                (0, l.jsxs)("li", {
                    className: N.KN,
                    children: [
                        (0, l.jsx)("div", {
                            className: N.P0,
                            children: (0, l.jsx)(x.A, { emojiName: C.Ay.getByName("books")?.surrogates }),
                        }),
                        (0, l.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: g.intl.format(g.t.kALJ5q, { emphasisHook: i }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function p(e) {
    let { channel: t, selected: a, onChange: n } = e,
        i = (0, h.Ay)(t),
        r = (0, u.gU)(t) ?? o.N$i,
        c = s.useCallback(() => {
            n(t);
        }, [t, n]);
    return (0, l.jsxs)(o.DUT, {
        "aria-label": i ?? void 0,
        "aria-checked": a,
        className: N.qC,
        onClick: c,
        children: [
            (0, l.jsxs)("div", {
                className: N.yB,
                children: [
                    (0, l.jsx)(r, { className: N.p, size: "xs", color: "currentColor" }),
                    (0, l.jsx)(o.Text, {
                        className: N.HA,
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: i,
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: N.Mv, children: (0, l.jsx)(o.P7L, { checked: a }) }),
        ],
    });
}
function k(e) {
    let { transitionState: t, onClose: a, guildId: n, startingChannelId: x } = e,
        h = (0, c.yK)([v.Ay], () => {
            let e = v.Ay.getChannels(n);
            return (e[v.I6] ?? [])
                .concat(e[v.vM] ?? [])
                .filter((e) => (0, m.A)(e.channel))
                .map((e) => e.channel);
        }),
        [u, C] = s.useState(0),
        k = h.find((e) => e.id === x),
        [b, y] = s.useState(null != k ? [k] : []),
        T = b.length === h.length,
        A = s.useCallback(() => {
            C(1);
        }, [C]),
        _ = s.useCallback(
            (e) => {
                y((t) => (t.includes(e) ? [...i().pull(t, e)] : [...t, e]));
            },
            [y],
        ),
        P = s.useCallback(() => {
            T ? y([]) : y(h);
        }, [T, h, y]),
        E = s.useCallback(() => {
            b.forEach((e) => {
                let t = (0, j.es)(e, e.accessPermissions, !0);
                (0, d.R$)(e.id, [t]), a();
            });
        }, [b, a]),
        B = s.useMemo(
            () => [
                { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: a },
                { variant: "primary", text: g.intl.string(g.t.PggHmu), onClick: E, disabled: 0 === b.length },
            ],
            [E, a, b.length],
        );
    return 0 === u
        ? (0, l.jsx)(f, { handleReviewPermissions: A, onClose: a, transitionState: t })
        : (0, l.jsxs)(r.Modal, {
              title: g.intl.string(g.t.y77PiT),
              subtitle: g.intl.string(g.t.ZSzBe5),
              actions: B,
              onClose: a,
              transitionState: t,
              input: (0, l.jsxs)("div", {
                  className: N.TY,
                  children: [
                      (0, l.jsx)(o.Text, {
                          className: N.ko,
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: g.intl.format(g.t.rrYCq2, { count: h.length }),
                      }),
                      (0, l.jsx)("div", {
                          className: N.L7,
                          children: (0, l.jsx)(o.Checkbox, {
                              onChange: P,
                              checked: T,
                              label: g.intl.string(g.t.l4rqaz),
                              labelType: "secondary",
                          }),
                      }),
                  ],
              }),
              children: [
                  (0, l.jsx)("div", {
                      className: N.XK,
                      children: h.map((e) => (0, l.jsx)(p, { channel: e, selected: b.includes(e), onChange: _ }, e.id)),
                  }),
                  (0, l.jsx)("div", {
                      className: N.PE,
                      children: (0, l.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: g.intl.format(g.t["OP/pKr"], {
                              emphasisHook: (e) =>
                                  (0, l.jsx)(o.Text, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "interactive-text-active",
                                      children: e,
                                  }),
                              brandHook: (e) =>
                                  (0, l.jsx)(o.Text, {
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
