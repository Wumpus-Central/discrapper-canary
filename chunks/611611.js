(n.d(t, { default: () => I }), n(388685));
var r = n(255367),
    a = n(73800),
    l = n(120356),
    i = n.n(l),
    o = n(525769),
    c = n(263568),
    s = n(693789),
    u = n(82659),
    d = n(481060),
    f = n(240872),
    m = n(213609),
    p = n(313201),
    b = n(542383),
    g = n(79390),
    O = n(728076),
    h = n(2466),
    j = n(485168),
    y = n(309081),
    w = n(185306),
    x = n(489887),
    v = n(20281),
    P = n(388032),
    C = n(735077);
let _ = (0, p.hQ)();
function A(e) {
    let { question: t, onChange: n, error: l, inputRef: o } = e,
        [c, s] = a.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.vwX, {
                tag: d.RB0.LABEL,
                htmlFor: _,
                children: P.intl.string(P.t.WBiKnJ)
            }),
            (0, r.jsx)(d.Kx8, {
                inputRef: o,
                id: _,
                placeholder: P.intl.string(P.t['/uQqJS']),
                value: t,
                className: i()(C.questionInput, { [C.hasError]: null != l }),
                onChange: n,
                maxLength: x.Az,
                error: l,
                onFocus: () => s(!0),
                onBlur: () => s(!1),
                showCharacterCount: c,
                showCharacterCountFullPadding: !0,
                showRemainingCharacterCount: c,
                rows: 1,
                autosize: !0,
                autoFocus: !0
            })
        ]
    });
}
function E(e) {
    let { selectedDuration: t, onSelect: n } = e,
        a = (0, h.Z)(),
        l = a[t];
    return (0, r.jsxs)('div', {
        className: C.duration,
        children: [
            (0, r.jsx)(d.Text, {
                variant: 'text-md/medium',
                color: 'header-secondary',
                tag: 'label',
                'aria-hidden': !0,
                children: P.intl.string(P.t.bGHzxc)
            }),
            (0, r.jsx)(d.PhF, {
                'aria-label': P.intl.formatToPlainString(P.t.nXNHND, { duration: l }),
                className: C.durationSelect,
                options: Object.entries(a).map((e) => {
                    let [t, n] = e;
                    return {
                        label: n,
                        value: parseInt(t)
                    };
                }),
                isSelected: (e) => e === t,
                select: n,
                serialize: (e) => ''.concat(e),
                renderOptionLabel: (e) =>
                    (0, r.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        children: e.label
                    }),
                popoutPosition: 'top'
            })
        ]
    });
}
function I(e) {
    let { channel: t, transitionState: n, onClose: l, initialQuestion: p, initialAnswers: h, initialDuration: _ } = e,
        k = (0, g._N)();
    (0, m.Z)({
        type: v.n.MODAL,
        name: o.z.POLL_EDITOR_VIEWED
    });
    let S = a.useRef(null),
        R = a.useRef([]),
        D = a.useRef([]),
        N = a.useRef(null),
        L = a.useRef([]),
        T = a.useCallback((e) => {
            var t, n, r, a;
            let { indexToRemove: l, numberOfAnswers: i } = e;
            i === x.gY + 1 ? null == (n = N.current) || null == (t = n.ref) || t.focus() : null == (a = L.current[l === i - 1 ? l - 1 : l + 1]) || null == (r = a.ref) || r.focus();
        }, []),
        {
            answers: B,
            question: Z,
            selectedLayoutType: U,
            setSelectedLayoutType: W,
            allowMultiSelect: H,
            setAllowMultiSelect: M,
            duration: Y,
            setDuration: F,
            handleQuestionChange: K,
            handleAnswerTextChange: z,
            handleEmojiSelect: q,
            canAddMoreAnswers: G,
            handleRemoveAnswerImage: J,
            canRemoveMoreAnswers: X,
            handleAddAnswer: V,
            handleRemoveAnswer: Q,
            createPollError: $,
            handleSubmitPoll: ee,
            fieldErrors: et,
            submitting: en,
            shouldFocusOnInvalidField: er,
            setShouldFocusOnInvalidField: ea
        } = (0, O.Z)(t, l, T, {
            initialQuestion: p,
            initialAnswers: h,
            initialDuration: _
        }),
        { trackPollCreationCancelled: el } = (0, j.l)(B, H, U),
        ei = a.useRef(B.length),
        eo = U === c.C.DEFAULT,
        ec = a.useCallback(() => {
            (el(), l());
        }, [l, el]),
        es = a.useCallback(() => {
            if (!(0, g.D$)(Z, B, U))
                return void f.Z.show({
                    title: P.intl.string(P.t.HMrgcn),
                    body: P.intl.string(P.t['Wxa/j4']),
                    confirmColor: s.Tt.RED,
                    confirmText: P.intl.string(P.t.TzJA4u),
                    confirmVariant: 'critical-primary',
                    cancelText: P.intl.string(P.t['2BR5R0']),
                    onConfirm: () => {
                        ec();
                    }
                });
            ec();
        }, [ec, B, Z, U]);
    (a.useEffect(() => {
        (0, d.oav)(
            x.$z,
            (e) => {
                var n, a;
                return (0, r.jsx)(
                    I,
                    ((n = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })({}, e)),
                    (a = a = { channel: t }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    n)
                );
            },
            es
        );
    }, [es, t]),
        a.useEffect(() => {
            if (B.length > ei.current) {
                var e;
                null == (e = D.current[B.length - 1]) || e.focus();
            }
            ei.current = B.length;
        }, [B.length]),
        a.useEffect(() => {
            if (er) {
                var e, t;
                if ((null == et ? void 0 : et.question) != null) null == (e = S.current) || e.focus();
                else {
                    let e = B.findIndex((e) => et['answer-'.concat(e.localCreationAnswerId)]);
                    -1 !== e && (null == (t = D.current[e]) || t.focus());
                }
                ea(!1);
            }
        }, [et, B, er, ea, D, R]));
    let eu = a.useCallback(() => {
            n === d.Dvm.ENTERED && ee();
        }, [ee, n]),
        ed = (0, b.Z)({
            disabled: en,
            onSubmit: eu
        }),
        ef = a.useMemo(
            () => [
                {
                    variant: 'primary',
                    onClick: eu,
                    submitting: en,
                    text: P.intl.string(P.t.JOj8Zm)
                }
            ],
            [eu, en]
        );
    return (0, r.jsx)(u.u, {
        transitionState: n,
        onClose: l,
        title: P.intl.string(P.t['GD/8X1']),
        actions: ef,
        actionBarInput: (0, r.jsx)(d.XZJ, {
            className: C.checkbox,
            size: 24,
            value: H,
            onChange: (e, t) => M(t),
            children: (0, r.jsx)(d.Text, {
                variant: 'text-md/medium',
                color: 'interactive-active',
                children: P.intl.string(P.t['Ux+iQU'])
            })
        }),
        children: (0, r.jsxs)('div', {
            className: C.content,
            onKeyDown: ed,
            children: [
                null != $ &&
                    (0, r.jsx)(d.kzN, {
                        className: C.apiErrorBlock,
                        children: $.getAnyErrorMessage()
                    }),
                (0, r.jsx)(A, {
                    question: Z,
                    onChange: K,
                    error: null == et ? void 0 : et.question,
                    inputRef: S
                }),
                k &&
                    (0, r.jsx)(w.Z, {
                        selectedLayoutType: U,
                        onSelectedLayoutType: W
                    }),
                (0, r.jsx)(d.LZC, { size: 26 }),
                (0, r.jsxs)('fieldset', {
                    className: i()(C.answerInputsContainer, eo ? C.defaultContainer : C.imageOnlyContainer),
                    children: [
                        (0, r.jsx)(d.vwX, {
                            tag: d.RB0.LEGEND,
                            children: P.intl.string(P.t.oMBfeX)
                        }),
                        B.map((e, n) =>
                            (0, r.jsx)(
                                y.Z,
                                {
                                    answer: e,
                                    channelId: t.id,
                                    index: n,
                                    isLastAnswer: n === B.length - 1,
                                    onEmojiSelect: q,
                                    onEmojiRemove: J,
                                    layout: U,
                                    onAnswerTextChange: z,
                                    onRemoveAnswer: Q,
                                    addAnswer: V,
                                    submitPoll: eu,
                                    answerTextInputRefs: D,
                                    error: null == et ? void 0 : et['answer-'.concat(e.localCreationAnswerId)],
                                    canRemoveAnswer: X,
                                    ref: (e) => {
                                        R.current[n] = e;
                                    },
                                    inputRef: (e) => {
                                        D.current[n] = e;
                                    },
                                    deleteButtonRef: (e) => {
                                        L.current[n] = e;
                                    }
                                },
                                e.localCreationAnswerId
                            )
                        ),
                        G &&
                            (0, r.jsxs)(d.P3F, {
                                className: i()(eo ? C.addAnswerButtonDefault : C.addAnswerButtonImageOnly, { [C.canRemoveMoreAnswers]: X }),
                                onClick: G ? V : void 0,
                                'aria-label': P.intl.string(P.t.B2UvmZ),
                                ref: N,
                                children: [
                                    (0, r.jsx)(d.qJs, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: eo ? C.addAnswerIconDefault : C.addAnswerIconImageOnly
                                    }),
                                    eo &&
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-muted',
                                            className: C.addAnswerButtonLabel,
                                            children: P.intl.string(P.t.B2UvmZ)
                                        })
                                ]
                            })
                    ]
                }),
                (0, r.jsx)(d.LZC, { size: 18 }),
                (0, r.jsx)(E, {
                    selectedDuration: Y,
                    onSelect: F
                })
            ]
        })
    });
}
