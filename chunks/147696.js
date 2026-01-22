a.r(t),
    a.d(t, {
        default: () => C,
    }),
    a(896048);
var s = a(627968),
    l = a(64700),
    n = a(735438),
    i = a.n(n),
    r = a(158954),
    c = a(311907),
    o = a(397927),
    d = a(702805),
    x = a(565645),
    m = a(148719),
    u = a(713654),
    h = a(495273),
    j = a(7584),
    b = a(808728),
    v = a(985018),
    g = a(533578);

function N(e) {
    var t, a, n;
    let { onClose: i, handleReviewPermissions: c, transitionState: d } = e,
        m = (e) =>
            (0, s.jsx)(o.Text, {
                tag: "span",
                variant: "text-md/medium",
                color: "text-strong",
                children: e,
            }),
        u = l.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: v.intl.string(v.t["ETE/oC"]),
                    onClick: i,
                },
                {
                    variant: "primary",
                    text: v.intl.string(v.t.bEnleq),
                    onClick: c,
                },
            ],
            [c, i],
        );
    return (0, s.jsx)(r.Modal, {
        title: v.intl.string(v.t.PJOCL6),
        actions: u,
        onClose: i,
        transitionState: d,
        children: (0, s.jsxs)("ul", {
            className: g.Dj,
            children: [
                (0, s.jsxs)("li", {
                    className: g.KN,
                    children: [
                        (0, s.jsx)("div", {
                            className: g.P0,
                            children: (0, s.jsx)(x.A, {
                                emojiName: null == (t = j.Ay.getByName("eyes")) ? void 0 : t.surrogates,
                            }),
                        }),
                        (0, s.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: v.intl.format(v.t["8JzOBn"], {
                                emphasisHook: m,
                            }),
                        }),
                    ],
                }),
                (0, s.jsxs)("li", {
                    className: g.KN,
                    children: [
                        (0, s.jsx)("div", {
                            className: g.P0,
                            children: (0, s.jsx)(x.A, {
                                emojiName: null == (a = j.Ay.getByName("star_struck")) ? void 0 : a.surrogates,
                            }),
                        }),
                        (0, s.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: v.intl.format(v.t.UcGDkt, {
                                emphasisHook: m,
                            }),
                        }),
                    ],
                }),
                (0, s.jsxs)("li", {
                    className: g.KN,
                    children: [
                        (0, s.jsx)("div", {
                            className: g.P0,
                            children: (0, s.jsx)(x.A, {
                                emojiName: null == (n = j.Ay.getByName("books")) ? void 0 : n.surrogates,
                            }),
                        }),
                        (0, s.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: v.intl.format(v.t.kALJ5q, {
                                emphasisHook: m,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}

function f(e) {
    var t;
    let { channel: a, selected: n, onChange: i } = e,
        r = null != (t = (0, u.gU)(a)) ? t : o.N$i,
        c = l.useCallback(() => {
            i(a);
        }, [a, i]);
    return (0, s.jsxs)(o.DUT, {
        "aria-label": a.name,
        "aria-checked": n,
        className: g.qC,
        onClick: c,
        children: [
            (0, s.jsxs)("div", {
                className: g.yB,
                children: [
                    (0, s.jsx)(r, {
                        className: g.p,
                        size: "xs",
                        color: "currentColor",
                    }),
                    (0, s.jsx)(o.Text, {
                        className: g.HA,
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: a.name,
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: g.Mv,
                children: (0, s.jsx)(o.P7L, {
                    checked: n,
                }),
            }),
        ],
    });
}

function C(e) {
    let { transitionState: t, onClose: a, guildId: n, startingChannelId: x } = e,
        u = (0, c.yK)([b.Ay], () => {
            var e, t;
            let a = b.Ay.getChannels(n);
            return (null != (e = a[b.I6]) ? e : [])
                .concat(null != (t = a[b.vM]) ? t : [])
                .filter((e) => (0, m.A)(e.channel))
                .map((e) => e.channel);
        }),
        [j, C] = l.useState(0),
        k = u.find((e) => e.id === x),
        [p, y] = l.useState(null != k ? [k] : []),
        T = p.length === u.length,
        P = l.useCallback(() => {
            C(1);
        }, [C]),
        A = l.useCallback(
            (e) => {
                y((t) => (t.includes(e) ? [...i().pull(t, e)] : [...t, e]));
            },
            [y],
        ),
        _ = l.useCallback(() => {
            T ? y([]) : y(u);
        }, [T, u, y]),
        E = l.useCallback(() => {
            p.forEach((e) => {
                let t = (0, h.es)(e, e.accessPermissions, !0);
                (0, d.R$)(e.id, [t]), a();
            });
        }, [p, a]),
        K = l.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: v.intl.string(v.t["ETE/oC"]),
                    onClick: a,
                },
                {
                    variant: "primary",
                    text: v.intl.string(v.t.PggHmu),
                    onClick: E,
                    disabled: 0 === p.length,
                },
            ],
            [E, a, p.length],
        );
    return 0 === j
        ? (0, s.jsx)(N, {
              handleReviewPermissions: P,
              onClose: a,
              transitionState: t,
          })
        : (0, s.jsxs)(r.Modal, {
              title: v.intl.string(v.t.y77PiT),
              subtitle: v.intl.string(v.t.ZSzBe5),
              actions: K,
              onClose: a,
              transitionState: t,
              input: (0, s.jsxs)("div", {
                  className: g.TY,
                  children: [
                      (0, s.jsx)(o.Text, {
                          className: g.ko,
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: v.intl.format(v.t.rrYCq2, {
                              count: u.length,
                          }),
                      }),
                      (0, s.jsx)("div", {
                          className: g.L7,
                          children: (0, s.jsx)(o.Checkbox, {
                              onChange: _,
                              checked: T,
                              label: v.intl.string(v.t.l4rqaz),
                              labelType: "secondary",
                          }),
                      }),
                  ],
              }),
              children: [
                  (0, s.jsx)("div", {
                      className: g.XK,
                      children: u.map((e) =>
                          (0, s.jsx)(
                              f,
                              {
                                  channel: e,
                                  selected: p.includes(e),
                                  onChange: A,
                              },
                              e.id,
                          ),
                      ),
                  }),
                  (0, s.jsx)("div", {
                      className: g.PE,
                      children: (0, s.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: v.intl.format(v.t["OP/pKr"], {
                              emphasisHook: (e) =>
                                  (0, s.jsx)(o.Text, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "interactive-text-active",
                                      children: e,
                                  }),
                              brandHook: (e) =>
                                  (0, s.jsx)(o.Text, {
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
