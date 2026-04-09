"use strict";
n.d(t, { Ay: () => y, fO: () => O });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(36525),
    a = n(397927),
    o = n(47167),
    d = n(713654),
    c = n(591552),
    u = n(961973),
    m = n(994500),
    g = n(287809),
    x = n(555337),
    h = n(863694),
    _ = n(527678),
    A = n(923121),
    p = n(352821),
    f = n(107795),
    j = n(655943),
    N = n(259866),
    E = n(699256),
    C = n(191117),
    T = n(652215),
    I = n(539916),
    b = n(985018),
    v = n(201205);
function S(e) {
    let { guildId: t, prompts: n } = e,
        r = (0, l.bG)([h.A], () => h.A.editedDefaultChannelIds),
        [c, x] = (0, u.Lx)(t, n, [...r]),
        _ = c.length,
        A = c.length + x.length,
        p = (_ / A) * 100,
        f = Math.max(Math.ceil((85 * A) / 100) - _, 0),
        [j, N] = s.useState(!1),
        E = j ? a.abt : a.tN5;
    return (0, i.jsxs)("div", {
        className: v.Kf,
        children: [
            (0, i.jsxs)(a.DUT, {
                className: v.a9,
                onClick: () => N(!j),
                children: [
                    (0, i.jsxs)("div", {
                        className: v.Vn,
                        children: [
                            p <= 85 && (0, i.jsx)(a.EpV, { size: "xs", color: "currentColor", className: v.$e }),
                            (0, i.jsx)(a.Text, {
                                className: v.XG,
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: b.intl.format(b.t.nMVKCX, { numChannelsMissing: A - _ }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: v.L$,
                        children: [
                            (0, i.jsx)(a.iCB, {
                                className: v.gH,
                                foregroundColor: p > 85 ? "var(--status-positive)" : "var(--status-warning)",
                                percent: p,
                            }),
                            (0, i.jsx)(E, { size: "md", color: "currentColor", className: v.OW }),
                        ],
                    }),
                ],
            }),
            j
                ? (0, i.jsxs)("div", {
                      className: v.k$,
                      children: [
                          (0, i.jsx)(a.Text, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              children: b.intl.string(b.t["0FM4i+"]),
                          }),
                          (0, i.jsx)("div", {
                              className: v.BM,
                              children: x.map((e) => {
                                  let t = (0, d.gU)(e) ?? a.N$i;
                                  return (0, i.jsx)(
                                      "div",
                                      {
                                          className: v.N5,
                                          children: (0, i.jsxs)(a.Text, {
                                              className: v.Ix,
                                              variant: "text-xs/normal",
                                              color: "interactive-text-active",
                                              children: [
                                                  (0, i.jsx)(t, { size: "xxs", color: "currentColor" }),
                                                  (0, o.m1)(e, g.default, m.A),
                                              ],
                                          }),
                                      },
                                      e.id,
                                  );
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: v.fg,
                              children:
                                  f > 0
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(a.EpV, { size: "xs", color: "currentColor" }),
                                                (0, i.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: b.intl.format(b.t.sX8890, { numChannels: f }),
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
function y(e) {
    let { saveOnClose: t } = e,
        n = (0, l.bG)([x.A], () => x.A.getGuild());
    return null == n ? null : (0, i.jsx)(R, { guild: n, saveOnClose: t });
}
function R(e) {
    let { guild: t, saveOnClose: n } = e,
        r = (0, l.bG)([c.A], () => c.A.isLoading()),
        o = (0, l.bG)([j.A], () => j.A.editedOnboardingPrompts),
        d = (0, l.bG)([j.A], () => j.A.advancedMode),
        u = s.useRef(!1);
    s.useEffect(() => {
        r || u.current || ((u.current = !0), d || 0 !== o.length || (0, f.WC)(t, [(0, I.Mc)()], !1));
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
                        (0, f.dm)(e, { ignoreDefaultPrompt: !0 })
                            .then(() => (0, A.fH)(e.id))
                            .catch(() => {});
                };
        }, [n]),
        null == t)
    )
        return null;
    let g = async () => {
        try {
            await (0, f.dm)(t), await (0, _.X$)(t.id);
        } catch {}
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Heading, {
                className: v.wx,
                variant: "heading-lg/extrabold",
                children: d ? b.intl.string(b.t.AGjtFv) : b.intl.string(b.t.dqCzoT),
            }),
            (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: b.intl.string(b.t["q/6MLL"]),
            }),
            (0, i.jsxs)("div", {
                className: v.yJ,
                children: [
                    (0, i.jsx)(a.MzZ, {
                        target: "_blank",
                        href: T.X7G.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: b.intl.string(b.t.Ok55Kh),
                        }),
                    }),
                    (0, i.jsx)("div", { className: v.Om }),
                    (0, i.jsx)(a.MzZ, {
                        onClick: g,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: b.intl.string(b.t["6gsjdM"]),
                        }),
                    }),
                    (0, i.jsx)("div", { className: v.Om }),
                    (0, i.jsx)(N.mU, { guildId: t.id }),
                ],
            }),
            (0, i.jsx)(S, { guildId: t.id, prompts: o }),
            n && (0, i.jsx)(E.A, { guildId: t.id }),
            (0, i.jsx)("div", {
                className: v.E3,
                children: r ? (0, i.jsx)(a.y$y, {}) : (0, i.jsx)(C.A, { postjoinOnly: d, guildId: t.id }),
            }),
        ],
    });
}
function O() {
    let e = (0, l.bG)([x.A], () => x.A.getGuild()),
        t = (0, l.bG)([j.A], () => j.A.submitting),
        n = (0, l.bG)([p.A], () => p.A.isSubmitting()),
        s = (0, l.bG)([p.A], () => p.A.hasChanges());
    return null == e
        ? null
        : (0, i.jsx)(r.A, {
              onSave: async () => {
                  try {
                      await (0, f.dm)(e), s && (await (0, A.q3)(e.id));
                  } catch {}
              },
              onReset: () => {
                  (0, f.P3)(), s && (0, A.p2)();
              },
              submitting: t || (s && n),
              onSaveText: b.intl.string(b.t["R3BPH+"]),
          });
}
