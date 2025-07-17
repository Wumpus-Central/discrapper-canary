(n.d(t, { default: () => R }), n(388685));
var r = n(255367),
    a = n(73800),
    l = n(120356),
    i = n.n(l),
    o = n(525769),
    s = n(693789),
    c = n(82659),
    u = n(481060),
    d = n(240872),
    f = n(213609),
    m = n(313201),
    p = n(542383),
    b = n(79390),
    g = n(728076),
    h = n(2466),
    j = n(485168),
    v = n(309081),
    w = n(489887),
    x = n(20281),
    O = n(388032),
    y = n(735077);
let P = (0, m.hQ)();
function C(e) {
    let { question: t, onChange: n, error: l, inputRef: o } = e,
        [s, c] = a.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.vwX, {
                tag: u.RB0.LABEL,
                htmlFor: P,
                children: O.intl.string(O.t.WBiKnJ)
            }),
            (0, r.jsx)(u.Kx8, {
                inputRef: o,
                id: P,
                placeholder: O.intl.string(O.t['/uQqJS']),
                value: t,
                className: i()(y.questionInput, { [y.hasError]: null != l }),
                onChange: n,
                maxLength: w.Az,
                error: l,
                onFocus: () => c(!0),
                onBlur: () => c(!1),
                showCharacterCount: s,
                showCharacterCountFullPadding: !0,
                showRemainingCharacterCount: s,
                rows: 1,
                autosize: !0,
                autoFocus: !0
            })
        ]
    });
}
function _(e) {
    let { selectedDuration: t, onSelect: n } = e,
        a = (0, h.Z)(),
        l = a[t];
    return (0, r.jsxs)('div', {
        className: y.duration,
        children: [
            (0, r.jsx)(u.Text, {
                variant: 'text-md/medium',
                color: 'header-secondary',
                tag: 'label',
                'aria-hidden': !0,
                children: O.intl.string(O.t.bGHzxc)
            }),
            (0, r.jsx)(u.PhF, {
                'aria-label': O.intl.formatToPlainString(O.t.nXNHND, { duration: l }),
                className: y.durationSelect,
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
                    (0, r.jsx)(u.Text, {
                        variant: 'text-sm/normal',
                        children: e.label
                    }),
                popoutPosition: 'top'
            })
        ]
    });
}
function R(e) {
    let { channel: t, transitionState: n, onClose: l, initialQuestion: m, initialAnswers: h, initialDuration: P } = e;
    (0, f.Z)({
        type: x.n.MODAL,
        name: o.z.POLL_EDITOR_VIEWED
    });
    let E = a.useRef(null),
        k = a.useRef([]),
        A = a.useRef([]),
        D = a.useRef(null),
        S = a.useRef([]),
        I = a.useCallback((e) => {
            var t, n, r, a;
            let { indexToRemove: l, numberOfAnswers: i } = e;
            i === w.gY + 1 ? null == (n = D.current) || null == (t = n.ref) || t.focus() : null == (a = S.current[l === i - 1 ? l - 1 : l + 1]) || null == (r = a.ref) || r.focus();
        }, []),
        {
            answers: N,
            question: T,
            allowMultiSelect: L,
            setAllowMultiSelect: B,
            duration: U,
            setDuration: Z,
            handleQuestionChange: Y,
            handleAnswerTextChange: K,
            handleEmojiSelect: z,
            canAddMoreAnswers: F,
            handleRemoveAnswerImage: W,
            canRemoveMoreAnswers: M,
            handleAddAnswer: q,
            handleRemoveAnswer: H,
            createPollError: G,
            handleSubmitPoll: X,
            fieldErrors: V,
            submitting: J,
            shouldFocusOnInvalidField: Q,
            setShouldFocusOnInvalidField: $
        } = (0, g.Z)(t, l, I, {
            initialQuestion: m,
            initialAnswers: h,
            initialDuration: P
        }),
        { trackPollCreationCancelled: ee } = (0, j.l)(N, L),
        et = a.useRef(N.length),
        en = a.useCallback(() => {
            (ee(), l());
        }, [l, ee]),
        er = a.useCallback(() => {
            if (!(0, b.D$)(T, N))
                return void d.Z.show({
                    title: O.intl.string(O.t.HMrgcn),
                    body: O.intl.string(O.t['Wxa/j4']),
                    confirmColor: s.Tt.RED,
                    confirmText: O.intl.string(O.t.TzJA4u),
                    confirmVariant: 'critical-primary',
                    cancelText: O.intl.string(O.t['2BR5R0']),
                    onConfirm: () => {
                        en();
                    }
                });
            en();
        }, [en, N, T]);
    (a.useEffect(() => {
        (0, u.oav)(
            w.$z,
            (e) => {
                var n, a;
                return (0, r.jsx)(
                    R,
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
            er
        );
    }, [er, t]),
        a.useEffect(() => {
            if (N.length > et.current) {
                var e;
                null == (e = A.current[N.length - 1]) || e.focus();
            }
            et.current = N.length;
        }, [N.length]),
        a.useEffect(() => {
            if (Q) {
                var e, t;
                if ((null == V ? void 0 : V.question) != null) null == (e = E.current) || e.focus();
                else {
                    let e = N.findIndex((e) => V['answer-'.concat(e.localCreationAnswerId)]);
                    -1 !== e && (null == (t = A.current[e]) || t.focus());
                }
                $(!1);
            }
        }, [V, N, Q, $, A, k]));
    let ea = a.useCallback(() => {
            n === u.Dvm.ENTERED && X();
        }, [X, n]),
        el = (0, p.Z)({
            disabled: J,
            onSubmit: ea
        }),
        ei = a.useMemo(
            () => [
                {
                    variant: 'primary',
                    onClick: ea,
                    submitting: J,
                    text: O.intl.string(O.t.JOj8Zm)
                }
            ],
            [ea, J]
        );
    return (0, r.jsx)(c.u, {
        transitionState: n,
        onClose: l,
        title: O.intl.string(O.t['GD/8X1']),
        actions: ei,
        actionBarInput: (0, r.jsx)(u.XZJ, {
            className: y.checkbox,
            size: 24,
            value: L,
            onChange: (e, t) => B(t),
            children: (0, r.jsx)(u.Text, {
                variant: 'text-md/medium',
                color: 'interactive-active',
                children: O.intl.string(O.t['Ux+iQU'])
            })
        }),
        children: (0, r.jsxs)('div', {
            className: y.content,
            onKeyDown: el,
            children: [
                null != G &&
                    (0, r.jsx)(u.kzN, {
                        className: y.apiErrorBlock,
                        children: G.getAnyErrorMessage()
                    }),
                (0, r.jsx)(C, {
                    question: T,
                    onChange: Y,
                    error: null == V ? void 0 : V.question,
                    inputRef: E
                }),
                (0, r.jsx)(u.LZC, { size: 26 }),
                (0, r.jsxs)('fieldset', {
                    className: i()(y.answerInputsContainer, y.defaultContainer),
                    children: [
                        (0, r.jsx)(u.vwX, {
                            tag: u.RB0.LEGEND,
                            children: O.intl.string(O.t.oMBfeX)
                        }),
                        N.map((e, n) =>
                            (0, r.jsx)(
                                v.Z,
                                {
                                    answer: e,
                                    channelId: t.id,
                                    index: n,
                                    isLastAnswer: n === N.length - 1,
                                    onEmojiSelect: z,
                                    onEmojiRemove: W,
                                    onAnswerTextChange: K,
                                    onRemoveAnswer: H,
                                    addAnswer: q,
                                    submitPoll: ea,
                                    answerTextInputRefs: A,
                                    error: null == V ? void 0 : V['answer-'.concat(e.localCreationAnswerId)],
                                    canRemoveAnswer: M,
                                    ref: (e) => {
                                        k.current[n] = e;
                                    },
                                    inputRef: (e) => {
                                        A.current[n] = e;
                                    },
                                    deleteButtonRef: (e) => {
                                        S.current[n] = e;
                                    }
                                },
                                e.localCreationAnswerId
                            )
                        ),
                        F &&
                            (0, r.jsxs)(u.P3F, {
                                className: i()(y.addAnswerButtonDefault, { [y.canRemoveMoreAnswers]: M }),
                                onClick: F ? q : void 0,
                                'aria-label': O.intl.string(O.t.B2UvmZ),
                                ref: D,
                                children: [
                                    (0, r.jsx)(u.qJs, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: y.addAnswerIconDefault
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        className: y.addAnswerButtonLabel,
                                        children: O.intl.string(O.t.B2UvmZ)
                                    })
                                ]
                            })
                    ]
                }),
                (0, r.jsx)(u.LZC, { size: 18 }),
                (0, r.jsx)(_, {
                    selectedDuration: U,
                    onSelect: Z
                })
            ]
        })
    });
}
