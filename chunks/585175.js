i.d(e, { O: () => b });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    r = i.n(s),
    a = i(311907),
    u = i(205693),
    o = i(451988),
    d = i(827734),
    T = i(397927),
    A = i(827343),
    S = i(915089),
    E = i(419954),
    g = i(430452),
    _ = i(780964),
    c = i(731854),
    I = i(985018),
    N = i(15267),
    C = i(785294);
let O = (0, S.Ld)();
function L(t) {
    let { isSpeaking: e, className: i, id: l, ariaDescribedBy: s, ariaLabelledBy: a, disabled: u } = t;
    return (0, n.jsx)("div", {
        className: r()(N.$I, i),
        id: l,
        "aria-describedby": s,
        "aria-labelledby": a,
        children: (0, n.jsx)("div", { className: r()(N.Jx, N.NU, { [N.zY]: e && !u, [N.r9]: u }) }),
    });
}
function R(t) {
    let { volume: e, id: i, ariaDescribedBy: l, ariaLabelledBy: s, disabled: u } = t,
        { threshold: o, autoThreshold: S } = (0, a.cf)([g.A], () => ({
            threshold: g.A.getModeOptions().threshold,
            autoThreshold: g.A.getModeOptions().autoThreshold,
        })),
        E = (0, a.bG)([g.A], () => g.A.getMode());
    return (0, n.jsx)("section", {
        className: r()(N.Mo, N.jW),
        id: i,
        "aria-describedby": l,
        "aria-labelledby": s,
        children: (0, n.jsx)(T.Apm, {
            initialValue: o + 100,
            onValueRender: (t) => `${(-((100 - t) * 1)).toFixed(0)}dB`,
            onValueChange: (t) => {
                var e;
                return (e = -((100 - t) * 1)), void A.A.setMode(E, { threshold: e, autoThreshold: S });
            },
            barStyles: { background: d.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: d.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": O,
            disabled: u,
            children: (0, n.jsxs)("div", {
                className: r()(N.NU, N.TL, N.Jx, C.bar),
                children: [
                    (0, n.jsx)("div", { className: r()(N.GS, N.SH), style: { width: u ? 0 : e + 100 + "%" } }),
                    (0, n.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let b = (0, E.E2)(_.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [I.intl.string(I.t["sqUm+k"]), I.intl.string(I.t.I1Zuq0), I.intl.string(I.t.nuFtHH)],
    usePredicate: () => (0, a.bG)([g.A], () => g.A.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: t, disabled: e } = (0, a.cf)([g.A], () => ({
                autoThreshold: g.A.getModeOptions().autoThreshold,
                disabled: g.A.getMode() !== c.TB.VOICE_ACTIVITY,
            })),
            i = l.useCallback((t) => {
                let e = g.A.getMode(),
                    { threshold: i } = g.A.getModeOptions();
                A.A.setMode(e, { autoThreshold: t, threshold: i });
            }, []),
            s = (0, a.bG)([g.A], () => g.A.supports(c.O5.AUTOMATIC_VAD)),
            { volume: r, isSpeaking: d } = (function () {
                let [t, e] = l.useState(-100),
                    [i, n] = l.useState(!1);
                function s(t, i) {
                    e(t), n((i & c.ME.VOICE) === c.ME.VOICE);
                }
                return (
                    l.useEffect(() => {
                        let t = new o.Ep();
                        return (
                            t.start(1e3, () => {
                                g.A.getMediaEngine().on(u.bg.VoiceActivity, s), t.stop();
                            }),
                            () => {
                                g.A.getMediaEngine().removeListener(u.bg.VoiceActivity, s), t.stop();
                            }
                        );
                    }, []),
                    { volume: t, isSpeaking: i }
                );
            })(),
            S = (0, a.bG)([g.A], () => g.A.isEnabled()),
            E = l.useMemo(
                () =>
                    !S &&
                    (0, n.jsx)("div", {
                        className: N.B4,
                        children: (0, n.jsx)(T.wx6, {
                            type: "warning",
                            children: I.intl.format(I.t["O13I+O"], { onEnableClick: () => A.A.enable(!0) }),
                        }),
                    }),
                [S],
            ),
            _ = l.useMemo(() => (t ? I.intl.string(I.t.JsbzjA) : I.intl.string(I.t.MLmyMY)), [t]),
            C = l.useId(),
            O = l.useId();
        return s
            ? (0, n.jsxs)("fieldset", {
                  "aria-describedby": O,
                  children: [
                      (0, n.jsx)(T.AC4, { tag: "legend", id: C, children: I.intl.string(I.t.GByLar) }),
                      (0, n.jsx)(T.AC4, { id: O, children: _ }),
                      (0, n.jsxs)(T.BJc, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, n.jsx)(T.dOG, {
                                  disabled: e,
                                  label: I.intl.string(I.t.lY6j47),
                                  description: _,
                                  checked: t,
                                  onChange: i,
                              }),
                              t
                                  ? (0, n.jsx)(L, {
                                        isSpeaking: d,
                                        className: N.UJ,
                                        ariaDescribedBy: O,
                                        ariaLabelledBy: C,
                                        disabled: e,
                                    })
                                  : (0, n.jsx)(R, { volume: r, ariaDescribedBy: O, ariaLabelledBy: C, disabled: e }),
                              E,
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
                          description: _,
                          layout: "vertical",
                          children: (i) =>
                              t
                                  ? (0, n.jsx)(L, {
                                        isSpeaking: d,
                                        className: N.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: e,
                                    })
                                  : (0, n.jsx)(R, {
                                        volume: r,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: e,
                                    }),
                      }),
                      E,
                  ],
              });
    },
});
