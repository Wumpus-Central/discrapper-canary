"use strict";
n.d(t, { Ay: () => I, fO: () => S });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(36525),
    a = n(397927),
    o = n(713654),
    d = n(591552),
    c = n(961973),
    u = n(555337),
    m = n(863694),
    g = n(527678),
    x = n(923121),
    h = n(352821),
    _ = n(107795),
    p = n(655943),
    A = n(259866),
    f = n(699256),
    j = n(191117),
    N = n(652215),
    E = n(539916),
    b = n(985018),
    T = n(981317);
function C(e) {
    let { guildId: t, prompts: n } = e,
        r = (0, l.bG)([m.A], () => m.A.editedDefaultChannelIds),
        [d, u] = (0, c.Lx)(t, n, [...r]),
        g = d.length,
        x = d.length + u.length,
        h = (g / x) * 100,
        _ = Math.max(Math.ceil((85 * x) / 100) - g, 0),
        [p, A] = s.useState(!1),
        f = p ? a.abt : a.tN5;
    return (0, i.jsxs)("div", {
        className: T.Kf,
        children: [
            (0, i.jsxs)(a.DUT, {
                className: T.a9,
                onClick: () => A(!p),
                children: [
                    (0, i.jsxs)("div", {
                        className: T.Vn,
                        children: [
                            h <= 85 && (0, i.jsx)(a.EpV, { size: "xs", color: "currentColor", className: T.$e }),
                            (0, i.jsx)(a.Text, {
                                className: T.XG,
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: b.intl.format(b.t.nMVKCX, { numChannelsMissing: x - g }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: T.L$,
                        children: [
                            (0, i.jsx)(a.iCB, {
                                className: T.gH,
                                foregroundColor: h > 85 ? "var(--status-positive)" : "var(--status-warning)",
                                percent: h,
                            }),
                            (0, i.jsx)(f, { size: "md", color: "currentColor", className: T.OW }),
                        ],
                    }),
                ],
            }),
            p
                ? (0, i.jsxs)("div", {
                      className: T.k$,
                      children: [
                          (0, i.jsx)(a.Text, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              children: b.intl.string(b.t["0FM4i+"]),
                          }),
                          (0, i.jsx)("div", {
                              className: T.BM,
                              children: u.map((e) => {
                                  let t = (0, o.gU)(e) ?? a.N$i;
                                  return (0, i.jsx)(
                                      "div",
                                      {
                                          className: T.N5,
                                          children: (0, i.jsxs)(a.Text, {
                                              className: T.Ix,
                                              variant: "text-xs/normal",
                                              color: "interactive-text-active",
                                              children: [(0, i.jsx)(t, { size: "xxs", color: "currentColor" }), e.name],
                                          }),
                                      },
                                      e.id,
                                  );
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: T.fg,
                              children:
                                  _ > 0
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(a.EpV, { size: "xs", color: "currentColor" }),
                                                (0, i.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: b.intl.format(b.t.sX8890, { numChannels: _ }),
                                                }),
                                            ],
                                        })
                                      : (0, i.jsx)(a.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: b.intl.string(b.t.o4s29v),
                                        }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function I(e) {
    let { saveOnClose: t } = e,
        n = (0, l.bG)([u.A], () => u.A.getGuild());
    return null == n ? null : (0, i.jsx)(v, { guild: n, saveOnClose: t });
}
function v(e) {
    let { guild: t, saveOnClose: n } = e,
        r = (0, l.bG)([d.A], () => d.A.isLoading()),
        o = (0, l.bG)([p.A], () => p.A.editedOnboardingPrompts),
        c = (0, l.bG)([p.A], () => p.A.advancedMode),
        u = s.useRef(!1);
    s.useEffect(() => {
        r || u.current || ((u.current = !0), c || 0 !== o.length || (0, _.WC)(t, [(0, E.Mc)()], !1));
    });
    let m = s.useRef(t);
    if (
        (s.useEffect(() => {
            m.current = t;
        }),
        s.useEffect(() => {
            if (n)
                return () => {
                    let e = m.current;
                    null != e &&
                        (0, _.dm)(e, { ignoreDefaultPrompt: !0 })
                            .then(() => (0, x.fH)(e.id))
                            .catch(() => {});
                };
        }, [n]),
        null == t)
    )
        return null;
    let h = async () => {
        try {
            await (0, _.dm)(t), await (0, g.X$)(t.id);
        } catch {}
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Heading, {
                className: T.wx,
                variant: "heading-lg/extrabold",
                children: c ? b.intl.string(b.t.AGjtFv) : b.intl.string(b.t.dqCzoT),
            }),
            (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: b.intl.string(b.t["q/6MLL"]),
            }),
            (0, i.jsxs)("div", {
                className: T.yJ,
                children: [
                    (0, i.jsx)(a.MzZ, {
                        target: "_blank",
                        href: N.X7G.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: b.intl.string(b.t.Ok55Kh),
                        }),
                    }),
                    (0, i.jsx)("div", { className: T.Om }),
                    (0, i.jsx)(a.MzZ, {
                        onClick: h,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: b.intl.string(b.t["6gsjdM"]),
                        }),
                    }),
                    (0, i.jsx)("div", { className: T.Om }),
                    (0, i.jsx)(A.mU, { guildId: t.id }),
                ],
            }),
            (0, i.jsx)(C, { guildId: t.id, prompts: o }),
            n && (0, i.jsx)(f.A, { guildId: t.id }),
            (0, i.jsx)("div", {
                className: T.E3,
                children: r ? (0, i.jsx)(a.y$y, {}) : (0, i.jsx)(j.A, { postjoinOnly: c, guildId: t.id }),
            }),
        ],
    });
}
function S() {
    let e = (0, l.bG)([u.A], () => u.A.getGuild()),
        t = (0, l.bG)([p.A], () => p.A.submitting),
        n = (0, l.bG)([h.A], () => h.A.isSubmitting()),
        s = (0, l.bG)([h.A], () => h.A.hasChanges());
    return null == e
        ? null
        : (0, i.jsx)(r.A, {
              onSave: async () => {
                  try {
                      await (0, _.dm)(e), s && (await (0, x.q3)(e.id));
                  } catch {}
              },
              onReset: () => {
                  (0, _.P3)(), s && (0, x.p2)();
              },
              submitting: t || (s && n),
              onSaveText: b.intl.string(b.t["R3BPH+"]),
          });
}
