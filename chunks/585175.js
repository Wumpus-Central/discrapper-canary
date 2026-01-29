i.d(t, {
    O: () => m,
}),
    i(896048);
var n = i(627968),
    l = i(64700),
    s = i(503698),
    r = i.n(s),
    a = i(311907),
    u = i(205693),
    o = i(451988),
    d = i(827734),
    T = i(397927),
    c = i(827343),
    A = i(915089),
    S = i(419954),
    _ = i(430452),
    E = i(780964),
    g = i(731854),
    I = i(985018),
    O = i(15267),
    C = i(785294);
let N = (0, A.Ld)();

function b(e) {
    let { isSpeaking: t, className: i, id: l, ariaDescribedBy: s, ariaLabelledBy: a, disabled: u } = e;
    return (0, n.jsx)("div", {
        className: r()(O.$I, i),
        id: l,
        "aria-describedby": s,
        "aria-labelledby": a,
        children: (0, n.jsx)("div", {
            className: r()(O.Jx, O.NU, {
                [O.zY]: t && !u,
                [O.r9]: u,
            }),
        }),
    });
}

function p(e) {
    let { volume: t, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: u } = e,
        { threshold: o, autoThreshold: A } = (0, a.cf)([_.A], () => ({
            threshold: _.A.getModeOptions().threshold,
            autoThreshold: _.A.getModeOptions().autoThreshold,
        })),
        S = (0, a.bG)([_.A], () => _.A.getMode());
    return (0, n.jsx)("section", {
        className: r()(O.Mo, O.jW),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        children: (0, n.jsx)(T.Apm, {
            initialValue: o + 100,
            onValueRender: (e) => "".concat((-((100 - e) * 1)).toFixed(0), "dB"),
            onValueChange: (e) => {
                var t;
                return (
                    (t = -((100 - e) * 1)),
                    void c.A.setMode(S, {
                        threshold: t,
                        autoThreshold: A,
                    })
                );
            },
            barStyles: {
                background: d.A.unsafe_rawColors.GREEN_360.css,
            },
            fillStyles: {
                background: d.A.unsafe_rawColors.YELLOW_300.css,
            },
            "aria-labelledby": N,
            disabled: u,
            children: (0, n.jsxs)("div", {
                className: r()(O.NU, O.TL, O.Jx, C.bar),
                children: [
                    (0, n.jsx)("div", {
                        className: r()(O.GS, O.SH),
                        style: {
                            width: u ? 0 : t + 100 + "%",
                        },
                    }),
                    (0, n.jsx)("div", {
                        className: "grow",
                    }),
                ],
            }),
        }),
    });
}
let m = (0, S.E2)(E.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [I.intl.string(I.t["sqUm+k"]), I.intl.string(I.t.I1Zuq0), I.intl.string(I.t.nuFtHH)],
    usePredicate: () => (0, a.bG)([_.A], () => _.A.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, a.cf)([_.A], () => ({
                autoThreshold: _.A.getModeOptions().autoThreshold,
                disabled: _.A.getMode() !== g.TB.VOICE_ACTIVITY,
            })),
            i = l.useCallback((e) => {
                let t = _.A.getMode(),
                    { threshold: i } = _.A.getModeOptions();
                c.A.setMode(t, {
                    autoThreshold: e,
                    threshold: i,
                });
            }, []),
            s = (0, a.bG)([_.A], () => _.A.supports(g.O5.AUTOMATIC_VAD)),
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
                                _.A.getMediaEngine().on(u.bg.VoiceActivity, s), e.stop();
                            }),
                            () => {
                                _.A.getMediaEngine().removeListener(u.bg.VoiceActivity, s), e.stop();
                            }
                        );
                    }, []),
                    {
                        volume: e,
                        isSpeaking: i,
                    }
                );
            })(),
            A = (0, a.bG)([_.A], () => _.A.isEnabled()),
            S = l.useMemo(
                () =>
                    !A &&
                    (0, n.jsx)("div", {
                        className: O.B4,
                        children: (0, n.jsx)(T.wx6, {
                            type: "warning",
                            children: I.intl.format(I.t["O13I+O"], {
                                onEnableClick: () => c.A.enable(!0),
                            }),
                        }),
                    }),
                [A],
            ),
            E = l.useMemo(() => (e ? I.intl.string(I.t.JsbzjA) : I.intl.string(I.t.MLmyMY)), [e]),
            C = l.useId(),
            N = l.useId();
        return s
            ? (0, n.jsxs)("fieldset", {
                  "aria-describedby": N,
                  children: [
                      (0, n.jsx)(T.AC4, {
                          tag: "legend",
                          id: C,
                          children: I.intl.string(I.t.GByLar),
                      }),
                      (0, n.jsx)(T.AC4, {
                          id: N,
                          children: E,
                      }),
                      (0, n.jsxs)(T.BJc, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, n.jsx)(T.dOG, {
                                  disabled: t,
                                  label: I.intl.string(I.t.lY6j47),
                                  description: E,
                                  checked: e,
                                  onChange: i,
                              }),
                              e
                                  ? (0, n.jsx)(b, {
                                        isSpeaking: d,
                                        className: O.UJ,
                                        ariaDescribedBy: N,
                                        ariaLabelledBy: C,
                                        disabled: t,
                                    })
                                  : (0, n.jsx)(p, {
                                        volume: r,
                                        ariaDescribedBy: N,
                                        ariaLabelledBy: C,
                                        disabled: t,
                                    }),
                              S,
                          ],
                      }),
                  ],
              })
            : (0, n.jsxs)(T.BJc, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, n.jsx)(T.D0$, {
                          label: I.intl.string(I.t["sqUm+k"]),
                          description: E,
                          layout: "vertical",
                          children: (i) =>
                              e
                                  ? (0, n.jsx)(b, {
                                        isSpeaking: d,
                                        className: O.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, n.jsx)(p, {
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
