n.d(t, { O: () => C });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(205693),
    d = n(451988),
    c = n(827734),
    u = n(397927),
    m = n(827343),
    _ = n(915089),
    g = n(419954),
    x = n(430452),
    A = n(780964),
    h = n(731854),
    p = n(985018),
    f = n(342976),
    T = n(189039);
let S = (0, _.Ld)();
function E(e) {
    let { isSpeaking: t, className: n, id: s, ariaDescribedBy: l, ariaLabelledBy: r, disabled: o } = e;
    return (0, i.jsx)("div", {
        className: a()(f.$I, n),
        id: s,
        "aria-describedby": l,
        "aria-labelledby": r,
        children: (0, i.jsx)("div", { className: a()(f.Jx, f.NU, { [f.zY]: t && !o, [f.r9]: o }) }),
    });
}
function b(e) {
    let { volume: t, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: o } = e,
        { threshold: d, autoThreshold: _ } = (0, r.cf)([x.Ay], () => ({
            threshold: x.Ay.getModeOptions().threshold,
            autoThreshold: x.Ay.getModeOptions().autoThreshold,
        })),
        g = (0, r.bG)([x.Ay], () => x.Ay.getMode());
    return (0, i.jsx)("section", {
        className: a()(f.Mo, f.jW),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        children: (0, i.jsx)(u.Apm, {
            initialValue: d + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void m.A.setMode(g, { threshold: t, autoThreshold: _ });
            },
            barStyles: { background: c.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: c.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": S,
            disabled: o,
            children: (0, i.jsxs)("div", {
                className: a()(f.NU, f.TL, f.Jx, T.bar),
                children: [
                    (0, i.jsx)("div", { className: a()(f.GS, f.SH), style: { width: o ? 0 : t + 100 + "%" } }),
                    (0, i.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let C = (0, g.E2)(A.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [p.intl.string(p.t["sqUm+k"]), p.intl.string(p.t.I1Zuq0), p.intl.string(p.t.nuFtHH)],
    usePredicate: () => (0, r.bG)([x.Ay], () => x.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, r.cf)([x.Ay], () => ({
                autoThreshold: x.Ay.getModeOptions().autoThreshold,
                disabled: x.Ay.getMode() !== h.TB.VOICE_ACTIVITY,
            })),
            n = s.useCallback((e) => {
                let t = x.Ay.getMode(),
                    { threshold: n } = x.Ay.getModeOptions();
                m.A.setMode(t, { autoThreshold: e, threshold: n });
            }, []),
            l = (0, r.bG)([x.Ay], () => x.Ay.supports(h.O5.AUTOMATIC_VAD)),
            { volume: a, isSpeaking: c } = (function () {
                let [e, t] = s.useState(-100),
                    [n, i] = s.useState(!1);
                function l(e, n) {
                    t(e), i((n & h.ME.VOICE) === h.ME.VOICE);
                }
                return (
                    s.useEffect(() => {
                        let e = new d.Ep();
                        return (
                            e.start(1e3, () => {
                                x.Ay.getMediaEngine().on(o.bg.VoiceActivity, l), e.stop();
                            }),
                            () => {
                                x.Ay.getMediaEngine().removeListener(o.bg.VoiceActivity, l), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: n }
                );
            })(),
            _ = (0, r.bG)([x.Ay], () => x.Ay.isEnabled()),
            g = s.useMemo(
                () =>
                    !_ &&
                    (0, i.jsx)("div", {
                        className: f.B4,
                        children: (0, i.jsx)(u.wx6, {
                            type: "warning",
                            children: p.intl.format(p.t["O13I+O"], { onEnableClick: () => m.A.enable(!0) }),
                        }),
                    }),
                [_],
            ),
            A = s.useMemo(() => (e ? p.intl.string(p.t.JsbzjA) : p.intl.string(p.t.MLmyMY)), [e]),
            T = s.useId(),
            S = s.useId();
        return l
            ? (0, i.jsxs)("fieldset", {
                  "aria-describedby": S,
                  children: [
                      (0, i.jsx)(u.AC4, { tag: "legend", id: T, children: p.intl.string(p.t.GByLar) }),
                      (0, i.jsx)(u.AC4, { id: S, children: A }),
                      (0, i.jsxs)(u.BJc, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, i.jsx)(u.dOG, {
                                  disabled: t,
                                  label: p.intl.string(p.t.lY6j47),
                                  description: A,
                                  checked: e,
                                  onChange: n,
                              }),
                              e
                                  ? (0, i.jsx)(E, {
                                        isSpeaking: c,
                                        className: f.UJ,
                                        ariaDescribedBy: S,
                                        ariaLabelledBy: T,
                                        disabled: t,
                                    })
                                  : (0, i.jsx)(b, { volume: a, ariaDescribedBy: S, ariaLabelledBy: T, disabled: t }),
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
                          description: A,
                          layout: "vertical",
                          children: (n) =>
                              e
                                  ? (0, i.jsx)(E, {
                                        isSpeaking: c,
                                        className: f.UJ,
                                        id: n.controlId,
                                        ariaDescribedBy: n.describedById,
                                        ariaLabelledBy: n.labelId,
                                        disabled: t,
                                    })
                                  : (0, i.jsx)(b, {
                                        volume: a,
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
