n.d(t, { O: () => N });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(205693),
    d = n(451988),
    c = n(827734),
    u = n(397927),
    _ = n(827343),
    m = n(915089),
    g = n(419954),
    A = n(430452),
    h = n(780964),
    x = n(731854),
    p = n(985018),
    T = n(15267),
    E = n(785294);
let C = (0, m.Ld)();
function S(e) {
    let { isSpeaking: t, className: n, id: s, ariaDescribedBy: l, ariaLabelledBy: a, disabled: o } = e;
    return (0, i.jsx)("div", {
        className: r()(T.$I, n),
        id: s,
        "aria-describedby": l,
        "aria-labelledby": a,
        children: (0, i.jsx)("div", { className: r()(T.Jx, T.NU, { [T.zY]: t && !o, [T.r9]: o }) }),
    });
}
function f(e) {
    let { volume: t, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: o } = e,
        { threshold: d, autoThreshold: m } = (0, a.cf)([A.Ay], () => ({
            threshold: A.Ay.getModeOptions().threshold,
            autoThreshold: A.Ay.getModeOptions().autoThreshold,
        })),
        g = (0, a.bG)([A.Ay], () => A.Ay.getMode());
    return (0, i.jsx)("section", {
        className: r()(T.Mo, T.jW),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        children: (0, i.jsx)(u.Apm, {
            initialValue: d + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void _.A.setMode(g, { threshold: t, autoThreshold: m });
            },
            barStyles: { background: c.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: c.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": C,
            disabled: o,
            children: (0, i.jsxs)("div", {
                className: r()(T.NU, T.TL, T.Jx, E.bar),
                children: [
                    (0, i.jsx)("div", { className: r()(T.GS, T.SH), style: { width: o ? 0 : t + 100 + "%" } }),
                    (0, i.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let N = (0, g.E2)(h.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [p.intl.string(p.t["sqUm+k"]), p.intl.string(p.t.I1Zuq0), p.intl.string(p.t.nuFtHH)],
    usePredicate: () => (0, a.bG)([A.Ay], () => A.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, a.cf)([A.Ay], () => ({
                autoThreshold: A.Ay.getModeOptions().autoThreshold,
                disabled: A.Ay.getMode() !== x.TB.VOICE_ACTIVITY,
            })),
            n = s.useCallback((e) => {
                let t = A.Ay.getMode(),
                    { threshold: n } = A.Ay.getModeOptions();
                _.A.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            l = (0, a.bG)([A.Ay], () => A.Ay.supports(x.O5.AUTOMATIC_VAD)),
            { volume: r, isSpeaking: c } = (function () {
                let [e, t] = s.useState(-100),
                    [n, i] = s.useState(!1);
                function l(e, n) {
                    t(e), i((n & x.ME.VOICE) === x.ME.VOICE);
                }
                return (
                    s.useEffect(() => {
                        let e = new d.Ep();
                        return (
                            e.start(1e3, () => {
                                A.Ay.getMediaEngine().on(o.bg.VoiceActivity, l), e.stop();
                            }),
                            () => {
                                A.Ay.getMediaEngine().removeListener(o.bg.VoiceActivity, l), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            m = (0, a.bG)([A.Ay], () => A.Ay.isEnabled()),
            g = s.useMemo(
                () =>
                    !m &&
                    (0, i.jsx)("div", {
                        className: T.B4,
                        children: (0, i.jsx)(u.wx6, {
                            type: "warning",
                            children: p.intl.format(p.t["O13I+O"], { onEnableClick: () => _.A.enable(!0) }),
                        }),
                    }),
                [m],
            ),
            h = s.useMemo(() => (e ? p.intl.string(p.t.JsbzjA) : p.intl.string(p.t.MLmyMY)), [e]),
            E = s.useId(),
            C = s.useId();
        return l
            ? (0, i.jsxs)("fieldset", {
                  "aria-describedby": C,
                  children: [
                      (0, i.jsx)(u.AC4, { tag: "legend", id: E, children: p.intl.string(p.t.GByLar) }),
                      (0, i.jsx)(u.AC4, { id: C, children: h }),
                      (0, i.jsxs)(u.BJc, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, i.jsx)(u.dOG, {
                                  disabled: t,
                                  label: p.intl.string(p.t.lY6j47),
                                  description: h,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, i.jsx)(S, {
                                        isSpeaking: c,
                                        className: T.UJ,
                                        ariaDescribedBy: C,
                                        ariaLabelledBy: E,
                                        disabled: t,
                                    })
                                  : (0, i.jsx)(f, { volume: r, ariaDescribedBy: C, ariaLabelledBy: E, disabled: t }),
                              g,
                          ],
                      }),
                  ],
              })
            : (0, i.jsxs)(u.BJc, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, i.jsx)(u.D0$, {
                          label: p.intl.string(p.t["sqUm+k"]),
                          description: h,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, i.jsx)(S, {
                                        isSpeaking: c,
                                        className: T.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, i.jsx)(f, {
                                        volume: r,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    }),
                      }),
                      g,
                  ],
              });
    },
});
