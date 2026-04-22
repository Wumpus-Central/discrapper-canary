n.d(t, { Ay: () => w, fO: () => B });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(36525),
    a = n(847374),
    o = n(900797),
    d = n(939249),
    c = n(695366),
    u = n(834730),
    m = n(5373),
    g = n(276293),
    h = n(534514),
    x = n(349288),
    _ = n(289873),
    p = n(47167),
    A = n(713654),
    E = n(591552),
    f = n(961973),
    j = n(994500),
    N = n(287809),
    I = n(555337),
    C = n(863694),
    b = n(527678),
    v = n(923121),
    S = n(352821),
    T = n(107795),
    y = n(655943),
    R = n(259866),
    L = n(699256),
    D = n(191117),
    O = n(652215),
    G = n(539916),
    M = n(985018),
    k = n(37824);
function U(e) {
    let { guildId: t, prompts: n } = e,
        r = (0, s.bG)([C.A], () => C.A.editedDefaultChannelIds),
        [h, x] = (0, f.Lx)(t, n, [...r]),
        _ = h.length,
        E = h.length + x.length,
        I = (_ / E) * 100,
        b = Math.max(Math.ceil((85 * E) / 100) - _, 0),
        [v, S] = l.useState(!1),
        T = v ? a.a : o.t;
    return (0, i.jsxs)("div", {
        className: k.Kf,
        children: [
            (0, i.jsxs)(d.D, {
                className: k.a9,
                onClick: () => S(!v),
                children: [
                    (0, i.jsxs)("div", {
                        className: k.Vn,
                        children: [
                            I <= 85 && (0, i.jsx)(c.E, { size: "xs", color: "currentColor", className: k.$e }),
                            (0, i.jsx)(u.E, {
                                className: k.XG,
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: M.intl.format(M.t.nMVKCX, { numChannelsMissing: E - _ }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: k.L$,
                        children: [
                            (0, i.jsx)(m.i, {
                                className: k.gH,
                                foregroundColor: I > 85 ? "var(--status-positive)" : "var(--status-warning)",
                                percent: I,
                            }),
                            (0, i.jsx)(T, { size: "md", color: "currentColor", className: k.OW }),
                        ],
                    }),
                ],
            }),
            v
                ? (0, i.jsxs)("div", {
                      className: k.k$,
                      children: [
                          (0, i.jsx)(u.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              children: M.intl.string(M.t["0FM4i+"]),
                          }),
                          (0, i.jsx)("div", {
                              className: k.BM,
                              children: x.map((e) => {
                                  let t = (0, A.gU)(e) ?? g.N;
                                  return (0, i.jsx)(
                                      "div",
                                      {
                                          className: k.N5,
                                          children: (0, i.jsxs)(u.E, {
                                              className: k.Ix,
                                              variant: "text-xs/normal",
                                              color: "interactive-text-active",
                                              children: [
                                                  (0, i.jsx)(t, { size: "xxs", color: "currentColor" }),
                                                  (0, p.m1)(e, N.default, j.A),
                                              ],
                                          }),
                                      },
                                      e.id,
                                  );
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: k.fg,
                              children:
                                  b > 0
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                                (0, i.jsx)(u.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: M.intl.format(M.t.sX8890, { numChannels: b }),
                                                }),
                                            ],
                                        })
                                      : (0, i.jsx)(u.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: M.intl.string(M.t.o4s29v),
                                        }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function w(e) {
    let { saveOnClose: t } = e,
        n = (0, s.bG)([I.A], () => I.A.getGuild());
    return null == n ? null : (0, i.jsx)(P, { guild: n, saveOnClose: t });
}
function P(e) {
    let { guild: t, saveOnClose: n } = e,
        r = (0, s.bG)([E.A], () => E.A.isLoading()),
        a = (0, s.bG)([y.A], () => y.A.editedOnboardingPrompts),
        o = (0, s.bG)([y.A], () => y.A.advancedMode),
        d = l.useRef(!1);
    l.useEffect(() => {
        r || d.current || ((d.current = !0), o || 0 !== a.length || (0, T.WC)(t, [(0, G.Mc)()], !1));
    });
    let c = l.useRef(t);
    if (
        (l.useEffect(() => {
            c.current = t;
        }),
        l.useEffect(() => {
            if (n)
                return () => {
                    let e = c.current;
                    null != e &&
                        (0, T.dm)(e, { ignoreDefaultPrompt: !0 })
                            .then(() => (0, v.fH)(e.id))
                            .catch(() => {});
                };
        }, [n]),
        null == t)
    )
        return null;
    let m = async () => {
        try {
            await (0, T.dm)(t), await (0, b.X$)(t.id);
        } catch {}
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.D, {
                className: k.wx,
                variant: "heading-lg/extrabold",
                children: o ? M.intl.string(M.t.AGjtFv) : M.intl.string(M.t.dqCzoT),
            }),
            (0, i.jsx)(u.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: M.intl.string(M.t["q/6MLL"]),
            }),
            (0, i.jsxs)("div", {
                className: k.yJ,
                children: [
                    (0, i.jsx)(x.Anchor, {
                        target: "_blank",
                        href: O.X7G.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, i.jsx)(u.E, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: M.intl.string(M.t.Ok55Kh),
                        }),
                    }),
                    (0, i.jsx)("div", { className: k.Om }),
                    (0, i.jsx)(x.Anchor, {
                        onClick: m,
                        children: (0, i.jsx)(u.E, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: M.intl.string(M.t["6gsjdM"]),
                        }),
                    }),
                    (0, i.jsx)("div", { className: k.Om }),
                    (0, i.jsx)(R.mU, { guildId: t.id }),
                ],
            }),
            (0, i.jsx)(U, { guildId: t.id, prompts: a }),
            n && (0, i.jsx)(L.A, { guildId: t.id }),
            (0, i.jsx)("div", {
                className: k.E3,
                children: r ? (0, i.jsx)(_.y, {}) : (0, i.jsx)(D.A, { postjoinOnly: o, guildId: t.id }),
            }),
        ],
    });
}
function B() {
    let e = (0, s.bG)([I.A], () => I.A.getGuild()),
        t = (0, s.bG)([y.A], () => y.A.submitting),
        n = (0, s.bG)([S.A], () => S.A.isSubmitting()),
        l = (0, s.bG)([S.A], () => S.A.hasChanges());
    return null == e
        ? null
        : (0, i.jsx)(r.A, {
              onSave: async () => {
                  try {
                      await (0, T.dm)(e), l && (await (0, v.q3)(e.id));
                  } catch {}
              },
              onReset: () => {
                  (0, T.P3)(), l && (0, v.p2)();
              },
              submitting: t || (l && n),
              onSaveText: M.intl.string(M.t["R3BPH+"]),
          });
}
