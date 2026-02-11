i.d(t, { O: () => L });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    r = i.n(s),
    a = i(311907),
    u = i(205693),
    o = i(451988),
    d = i(827734),
    _ = i(397927),
    T = i(827343),
    A = i(915089),
    S = i(419954),
    E = i(430452),
    c = i(780964),
    g = i(731854),
    I = i(985018),
    C = i(15267),
    N = i(785294);
let O = (0, A.Ld)();
function b(e) {
    let { isSpeaking: t, className: i, id: l, ariaDescribedBy: s, ariaLabelledBy: a, disabled: u } = e;
    return (0, n.jsx)("div", {
        className: r()(C.$I, i),
        id: l,
        "aria-describedby": s,
        "aria-labelledby": a,
        children: (0, n.jsx)("div", { className: r()(C.Jx, C.NU, { [C.zY]: t && !u, [C.r9]: u }) }),
    });
}
function m(e) {
    let { volume: t, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: u } = e,
        { threshold: o, autoThreshold: A } = (0, a.cf)([E.Ay], () => ({
            threshold: E.Ay.getModeOptions().threshold,
            autoThreshold: E.Ay.getModeOptions().autoThreshold,
        })),
        S = (0, a.bG)([E.Ay], () => E.Ay.getMode());
    return (0, n.jsx)("section", {
        className: r()(C.Mo, C.jW),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        children: (0, n.jsx)(_.Apm, {
            initialValue: o + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void T.A.setMode(S, { threshold: t, autoThreshold: A });
            },
            barStyles: { background: d.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: d.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": O,
            disabled: u,
            children: (0, n.jsxs)("div", {
                className: r()(C.NU, C.TL, C.Jx, N.bar),
                children: [
                    (0, n.jsx)("div", { className: r()(C.GS, C.SH), style: { width: u ? 0 : t + 100 + "%" } }),
                    (0, n.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let L = (0, S.E2)(c.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [I.intl.string(I.t["sqUm+k"]), I.intl.string(I.t.I1Zuq0), I.intl.string(I.t.nuFtHH)],
    usePredicate: () => (0, a.bG)([E.Ay], () => E.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, a.cf)([E.Ay], () => ({
                autoThreshold: E.Ay.getModeOptions().autoThreshold,
                disabled: E.Ay.getMode() !== g.TB.VOICE_ACTIVITY,
            })),
            i = l.useCallback((e) => {
                let t = E.Ay.getMode(),
                    { threshold: i } = E.Ay.getModeOptions();
                T.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            s = (0, a.bG)([E.Ay], () => E.Ay.supports(g.O5.AUTOMATIC_VAD)),
            { volume: r, isSpeaking: d } = (function () {
                let [e, t] = l.useState(-100),
                    [i, n] = l.useState(!1);
                function s(e, i) {
                    t(e), n((i & g.ME.VOICE) === g.ME.VOICE);
                }
                return (
                    l.useEffect(() => {
                        let e = new o.Ep();
                        return (
                            e.start(1e3, () => {
                                E.Ay.getMediaEngine().on(u.bg.VoiceActivity, s), e.stop();
                            }),
                            () => {
                                E.Ay.getMediaEngine().removeListener(u.bg.VoiceActivity, s), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: i }
                );
            })(),
            A = (0, a.bG)([E.Ay], () => E.Ay.isEnabled()),
            S = l.useMemo(
                () =>
                    !A &&
                    (0, n.jsx)("div", {
                        className: C.B4,
                        children: (0, n.jsx)(_.wx6, {
                            type: "warning",
                            children: I.intl.format(I.t["O13I+O"], { onEnableClick: () => T.A.enable(!0) }),
                        }),
                    }),
                [A],
            ),
            c = l.useMemo(() => (e ? I.intl.string(I.t.JsbzjA) : I.intl.string(I.t.MLmyMY)), [e]),
            N = l.useId(),
            O = l.useId();
        return s
            ? (0, n.jsxs)("fieldset", {
                  "aria-describedby": O,
                  children: [
                      (0, n.jsx)(_.AC4, { tag: "legend", id: N, children: I.intl.string(I.t.GByLar) }),
                      (0, n.jsx)(_.AC4, { id: O, children: c }),
                      (0, n.jsxs)(_.BJc, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, n.jsx)(_.dOG, {
                                  disabled: t,
                                  label: I.intl.string(I.t.lY6j47),
                                  description: c,
                                  checked: e,
                                  onChange: i,
                              }),
                              e
                                  ? (0, n.jsx)(b, {
                                        isSpeaking: d,
                                        className: C.UJ,
                                        ariaDescribedBy: O,
                                        ariaLabelledBy: N,
                                        disabled: t,
                                    })
                                  : (0, n.jsx)(m, { volume: r, ariaDescribedBy: O, ariaLabelledBy: N, disabled: t }),
                              S,
                          ],
                      }),
                  ],
              })
            : (0, n.jsxs)(_.BJc, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, n.jsx)(_.D0$, {
                          label: I.intl.string(I.t["sqUm+k"]),
                          description: c,
                          layout: "vertical",
                          children: (i) =>
                              e
                                  ? (0, n.jsx)(b, {
                                        isSpeaking: d,
                                        className: C.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, n.jsx)(m, {
                                        volume: r,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    }),
                      }),
                      S,
                  ],
              });
    },
});
