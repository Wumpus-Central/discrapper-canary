i.d(e, {
    O: () => _,
});
var n = i(627968),
    l = i(64700),
    s = i(158954),
    r = i(311907),
    u = i(827343),
    a = i(419954),
    o = i(430452),
    T = i(780964),
    A = i(326433),
    S = i(731854),
    E = i(985018),
    d = i(15267);
let _ = (0, a.E2)(T.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [E.intl.string(E.t["sqUm+k"]), E.intl.string(E.t.I1Zuq0), E.intl.string(E.t.nuFtHH)],
    usePredicate: () => (0, r.bG)([o.A], () => o.A.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: t, disabled: e } = (0, r.cf)([o.A], () => ({
                autoThreshold: o.A.getModeOptions().autoThreshold,
                disabled: o.A.getMode() !== S.TB.VOICE_ACTIVITY,
            })),
            i = l.useCallback((t) => {
                let e = o.A.getMode(),
                    { threshold: i } = o.A.getModeOptions();
                u.A.setMode(e, {
                    autoThreshold: t,
                    threshold: i,
                });
            }, []),
            a = (0, r.bG)([o.A], () => o.A.supports(S.O5.AUTOMATIC_VAD)),
            { volume: T, isSpeaking: _ } = (0, A.lm)(),
            I = (0, r.bG)([o.A], () => o.A.isEnabled()),
            g = l.useMemo(
                () =>
                    !I &&
                    (0, n.jsx)("div", {
                        className: d.B,
                        children: (0, n.jsx)(s.wx6, {
                            type: "warning",
                            children: E.intl.format(E.t["O13I+O"], {
                                onEnableClick: () => u.A.enable(!0),
                            }),
                        }),
                    }),
                [I],
            ),
            c = l.useMemo(() => (t ? E.intl.string(E.t.JsbzjA) : E.intl.string(E.t.MLmyMY)), [t]),
            N = l.useId(),
            O = l.useId();
        return a
            ? (0, n.jsxs)("fieldset", {
                  "aria-describedby": O,
                  children: [
                      (0, n.jsx)(s.AC4, {
                          tag: "legend",
                          id: N,
                          children: E.intl.string(E.t.GByLar),
                      }),
                      (0, n.jsx)(s.AC4, {
                          id: O,
                          children: c,
                      }),
                      (0, n.jsxs)(s.BJc, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, n.jsx)(s.dOG, {
                                  disabled: e,
                                  label: E.intl.string(E.t.lY6j47),
                                  description: c,
                                  checked: t,
                                  onChange: i,
                              }),
                              t
                                  ? (0, n.jsx)(A.Uz, {
                                        isSpeaking: _,
                                        className: d.U,
                                        ariaDescribedBy: O,
                                        ariaLabelledBy: N,
                                        disabled: e,
                                    })
                                  : (0, n.jsx)(A.xu, {
                                        volume: T,
                                        ariaDescribedBy: O,
                                        ariaLabelledBy: N,
                                        disabled: e,
                                    }),
                              g,
                          ],
                      }),
                  ],
              })
            : (0, n.jsxs)(s.BJc, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, n.jsx)(s.D0$, {
                          label: E.intl.string(E.t["sqUm+k"]),
                          description: c,
                          layout: "vertical",
                          children: (i) =>
                              t
                                  ? (0, n.jsx)(A.Uz, {
                                        isSpeaking: _,
                                        className: d.U,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: e,
                                    })
                                  : (0, n.jsx)(A.xu, {
                                        volume: T,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: e,
                                    }),
                      }),
                      g,
                  ],
              });
    },
});
