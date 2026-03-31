n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(417597),
    r = n(397927),
    a = n(58149),
    o = n(408213),
    c = n(60175),
    d = n(46054),
    u = n(954571),
    m = n(652215),
    _ = n(985018),
    x = n(791135);
function p(e) {
    let {
            guild: t,
            prompts: n,
            completeOnboarding: p,
            setCurrentStep: g,
            disableTracking: h,
            previousPromptIndex: f,
        } = e,
        A = s.useRef(null),
        v = (0, l.bG)([c.A], () => c.A.getRulesPrompt(t.id)),
        [N, j] = s.useState(v?.response ?? !1),
        [b, E] = s.useState(!1),
        C = (0, l.bG)([c.A], () => c.A.get(t.id)),
        I = s.useRef(null),
        O = s.useRef(null),
        T = s.useCallback(async () => {
            if (null != C && null != v) {
                E(!0);
                try {
                    await o.Ay.submitVerificationForm(t.id, { ...C, formFields: [{ ...v, response: N }] });
                } catch {}
                p();
            }
        }, [t.id, C, v, N, p]);
    function y(e) {
        let [t] = e;
        t.isIntersecting && j(!0);
    }
    return (s.useEffect(() => {
        let e = new IntersectionObserver(y, { root: I.current, rootMargin: "0px", threshold: 0 }),
            t = O.current;
        return (
            null != t && null != t.lastElementChild && e.observe(t.lastElementChild),
            () => {
                null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild);
            }
        );
    }, [O, I]),
    null == v)
        ? null
        : (0, i.jsx)("div", {
              className: x.J1,
              children: (0, i.jsxs)("div", {
                  className: x.mK,
                  ref: I,
                  children: [
                      (0, i.jsxs)(r.ChK, {
                          className: x.gT,
                          ref: A,
                          children: [
                              (0, i.jsx)(r.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: _.intl.string(_.t["b1JC+l"]),
                              }),
                              (0, i.jsx)(r.Heading, {
                                  variant: "heading-xl/semibold",
                                  children: _.intl.string(_.t.prJqwT),
                              }),
                              (0, i.jsx)("div", {
                                  className: x.qE,
                                  ref: O,
                                  children: v.values.map((e, n) =>
                                      (0, i.jsxs)(
                                          "div",
                                          {
                                              className: x.gJ,
                                              children: [
                                                  (0, i.jsx)(r.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: `${n + 1}.`,
                                                  }),
                                                  (0, i.jsx)(r.Text, {
                                                      variant: "text-sm/normal",
                                                      className: x.RQ,
                                                      children: d.A.parseGuildVerificationFormRule(e, !0, {
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
                      (0, i.jsx)("div", { className: x.Lw }),
                      (0, i.jsxs)("div", {
                          className: x.N3,
                          children: [
                              (0, i.jsx)("div", {
                                  className: x.X1,
                                  children:
                                      -1 !== f &&
                                      "cover" !== f &&
                                      (0, i.jsx)(r.Button, {
                                          variant: "secondary",
                                          size: "md",
                                          text: _.intl.string(_.t["13/7kX"]),
                                          onClick: () => {
                                              !h &&
                                                  (u.default.track(m.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                                                      ...(0, a.H$)(t.id),
                                                      step: -1,
                                                      skipped: !1,
                                                      back: !0,
                                                      options_selected: 0,
                                                      in_onboarding: !0,
                                                      is_final_step: !1,
                                                  }),
                                                  "number" == typeof f &&
                                                      f >= 0 &&
                                                      u.default.track(m.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
                                                          ...(0, a.H$)(t.id),
                                                          step: f,
                                                          required: n[f].required,
                                                      })),
                                                  g(f);
                                          },
                                          icon: r.Zge,
                                          iconPosition: "start",
                                      }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: x.Oh,
                                  children: [
                                      (0, i.jsx)(r.Text, {
                                          className: x.BK,
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: N ? _.intl.string(_.t.arAe3I) : _.intl.string(_.t.D0CVAc),
                                      }),
                                      (0, i.jsx)(r.Button, {
                                          variant: "primary",
                                          size: "md",
                                          text: `${_.intl.string(_.t["8SuVoE"])} 🎉`,
                                          onClick: T,
                                          disabled: !N || b,
                                          loading: b,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
