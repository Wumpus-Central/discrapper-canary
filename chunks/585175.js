n.d(t, { O: () => f });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(205693),
    d = n(451988),
    c = n(827734),
    u = n(397927),
    _ = n(827343),
    g = n(915089),
    A = n(419954),
    m = n(430452),
    h = n(780964),
    p = n(731854),
    x = n(985018),
    E = n(913129),
    T = n(244984);
let S = (0, g.Ld)();
function C(e) {
    let { isSpeaking: t, className: n, id: s, ariaDescribedBy: l, ariaLabelledBy: r, disabled: o } = e;
    return (0, i.jsx)("div", {
        className: a()(E.$I, n),
        id: s,
        "aria-describedby": l,
        "aria-labelledby": r,
        children: (0, i.jsx)("div", { className: a()(E.Jx, E.NU, { [E.zY]: t && !o, [E.r9]: o }) }),
    });
}
function I(e) {
    let { volume: t, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: o } = e,
        { threshold: d, autoThreshold: g } = (0, r.cf)([m.Ay], () => ({
            threshold: m.Ay.getModeOptions().threshold,
            autoThreshold: m.Ay.getModeOptions().autoThreshold,
        })),
        A = (0, r.bG)([m.Ay], () => m.Ay.getMode());
    return (0, i.jsx)("section", {
        className: a()(E.Mo, E.jW),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        children: (0, i.jsx)(u.Apm, {
            initialValue: d + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void _.A.setMode(A, { threshold: t, autoThreshold: g });
            },
            barStyles: { background: c.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: c.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": S,
            disabled: o,
            children: (0, i.jsxs)("div", {
                className: a()(E.NU, E.TL, E.Jx, T.bar),
                children: [
                    (0, i.jsx)("div", { className: a()(E.GS, E.SH), style: { width: o ? 0 : t + 100 + "%" } }),
                    (0, i.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let f = (0, A.E2)(h.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [x.intl.string(x.t["sqUm+k"]), x.intl.string(x.t.I1Zuq0), x.intl.string(x.t.nuFtHH)],
    usePredicate: () => (0, r.bG)([m.Ay], () => m.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, r.cf)([m.Ay], () => ({
                autoThreshold: m.Ay.getModeOptions().autoThreshold,
                disabled: m.Ay.getMode() !== p.TB.VOICE_ACTIVITY,
            })),
            n = s.useCallback((e) => {
                let t = m.Ay.getMode(),
                    { threshold: n } = m.Ay.getModeOptions();
                _.A.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            l = (0, r.bG)([m.Ay], () => m.Ay.supports(p.O5.AUTOMATIC_VAD)),
            { volume: a, isSpeaking: c } = (function () {
                let [e, t] = s.useState(-100),
                    [n, i] = s.useState(!1);
                function l(e, n) {
                    t(e), i((n & p.ME.VOICE) === p.ME.VOICE);
                }
                return (
                    s.useEffect(() => {
                        let e = new d.Ep();
                        return (
                            e.start(1e3, () => {
                                m.Ay.getMediaEngine().on(o.bg.VoiceActivity, l), e.stop();
                            }),
                            () => {
                                m.Ay.getMediaEngine().removeListener(o.bg.VoiceActivity, l), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            g = (0, r.bG)([m.Ay], () => m.Ay.isEnabled()),
            A = s.useMemo(
                () =>
                    !g &&
                    (0, i.jsx)("div", {
                        className: E.B4,
                        children: (0, i.jsx)(u.wx6, {
                            type: "warning",
                            children: x.intl.format(x.t["O13I+O"], { onEnableClick: () => _.A.enable(!0) }),
                        }),
                    }),
                [g],
            ),
            h = s.useMemo(() => (e ? x.intl.string(x.t.JsbzjA) : x.intl.string(x.t.MLmyMY)), [e]),
            T = s.useId(),
            S = s.useId();
        return l
            ? (0, i.jsxs)("fieldset", {
                  "aria-describedby": S,
                  children: [
                      (0, i.jsx)(u.AC4, { tag: "legend", id: T, children: x.intl.string(x.t.GByLar) }),
                      (0, i.jsx)(u.AC4, { id: S, children: h }),
                      (0, i.jsxs)(u.BJc, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, i.jsx)(u.dOG, {
                                  disabled: t,
                                  label: x.intl.string(x.t.lY6j47),
                                  description: h,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, i.jsx)(C, {
                                        isSpeaking: c,
                                        className: E.UJ,
                                        ariaDescribedBy: S,
                                        ariaLabelledBy: T,
                                        disabled: t,
                                    })
                                  : (0, i.jsx)(I, { volume: a, ariaDescribedBy: S, ariaLabelledBy: T, disabled: t }),
                              A,
                          ],
                      }),
                  ],
              })
            : (0, i.jsxs)(u.BJc, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, i.jsx)(u.D0$, {
                          label: x.intl.string(x.t["sqUm+k"]),
                          description: h,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, i.jsx)(C, {
                                        isSpeaking: c,
                                        className: E.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, i.jsx)(I, {
                                        volume: a,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    }),
                      }),
                      A,
                  ],
              });
    },
});
