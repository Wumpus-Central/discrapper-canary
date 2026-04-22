n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(417597),
    r = n(599319),
    a = n(834730),
    o = n(534514),
    c = n(821609),
    d = n(548411),
    u = n(58149),
    m = n(408213),
    _ = n(60175),
    p = n(46054),
    x = n(954571),
    g = n(652215),
    h = n(985018),
    f = n(462918);
function A(e) {
    let {
            guild: t,
            prompts: n,
            completeOnboarding: A,
            setCurrentStep: v,
            disableTracking: N,
            previousPromptIndex: E,
        } = e,
        j = s.useRef(null),
        b = (0, l.bG)([_.A], () => _.A.getRulesPrompt(t.id)),
        [C, I] = s.useState(b?.response ?? !1),
        [O, D] = s.useState(!1),
        y = (0, l.bG)([_.A], () => _.A.get(t.id)),
        P = s.useRef(null),
        S = s.useRef(null),
        k = s.useCallback(async () => {
            if (null != y && null != b) {
                D(!0);
                try {
                    await m.Ay.submitVerificationForm(t.id, { ...y, formFields: [{ ...b, response: C }] });
                } catch {}
                A();
            }
        }, [t.id, y, b, C, A]);
    function T(e) {
        let [t] = e;
        t.isIntersecting && I(!0);
    }
    return (s.useEffect(() => {
        let e = new IntersectionObserver(T, { root: P.current, rootMargin: "0px", threshold: 0 }),
            t = S.current;
        return (
            null != t && null != t.lastElementChild && e.observe(t.lastElementChild),
            () => {
                null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild);
            }
        );
    }, [S, P]),
    null == b)
        ? null
        : (0, i.jsx)("div", {
              className: f.J1,
              children: (0, i.jsxs)("div", {
                  className: f.mK,
                  ref: P,
                  children: [
                      (0, i.jsxs)(r.Ch, {
                          className: f.gT,
                          ref: j,
                          children: [
                              (0, i.jsx)(a.E, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: h.intl.string(h.t["b1JC+l"]),
                              }),
                              (0, i.jsx)(o.D, { variant: "heading-xl/semibold", children: h.intl.string(h.t.prJqwT) }),
                              (0, i.jsx)("div", {
                                  className: f.qE,
                                  ref: S,
                                  children: b.values.map((e, n) =>
                                      (0, i.jsxs)(
                                          "div",
                                          {
                                              className: f.gJ,
                                              children: [
                                                  (0, i.jsx)(a.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: `${n + 1}.`,
                                                  }),
                                                  (0, i.jsx)(a.E, {
                                                      variant: "text-sm/normal",
                                                      className: f.RQ,
                                                      children: p.A.parseGuildVerificationFormRule(e, !0, {
                                                          channelId: t.rulesChannelId,
                                                      }),
                                                  }),
                                              ],
                                          },
                                          `term-${n}`,
                                      ),
                                  ),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", { className: f.Lw }),
                      (0, i.jsxs)("div", {
                          className: f.N3,
                          children: [
                              (0, i.jsx)("div", {
                                  className: f.X1,
                                  children:
                                      -1 !== E &&
                                      "cover" !== E &&
                                      (0, i.jsx)(c.$, {
                                          variant: "secondary",
                                          size: "md",
                                          text: h.intl.string(h.t["13/7kX"]),
                                          onClick: () => {
                                              !N &&
                                                  (x.default.track(g.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                                                      ...(0, u.H$)(t.id),
                                                      step: -1,
                                                      skipped: !1,
                                                      back: !0,
                                                      options_selected: 0,
                                                      in_onboarding: !0,
                                                      is_final_step: !1,
                                                  }),
                                                  "number" == typeof E &&
                                                      E >= 0 &&
                                                      x.default.track(g.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                                                          ...(0, u.H$)(t.id),
                                                          step: E,
                                                          required: n[E].required,
                                                      })),
                                                  v(E);
                                          },
                                          icon: d.Z,
                                          iconPosition: "start",
                                      }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: f.Oh,
                                  children: [
                                      (0, i.jsx)(a.E, {
                                          className: f.BK,
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: C ? h.intl.string(h.t.arAe3I) : h.intl.string(h.t.D0CVAc),
                                      }),
                                      (0, i.jsx)(c.$, {
                                          variant: "primary",
                                          size: "md",
                                          text: `${h.intl.string(h.t["8SuVoE"])} 🎉`,
                                          onClick: k,
                                          disabled: !C || O,
                                          loading: O,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
