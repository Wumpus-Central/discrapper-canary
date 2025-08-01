(n.d(t, { default: () => E }), n(388685));
var r = n(255367),
    a = n(73800),
    l = n(120356),
    i = n.n(l),
    o = n(525769),
    s = n(693789),
    c = n(82659),
    u = n(755721),
    d = n(481060),
    f = n(240872),
    m = n(213609),
    p = n(313201),
    b = n(542383),
    g = n(79390),
    h = n(728076),
    j = n(2466),
    v = n(485168),
    w = n(309081),
    x = n(489887),
    O = n(20281),
    y = n(388032),
    P = n(735077);
let C = (0, p.hQ)();
function _(e) {
    let { question: t, onChange: n, error: l, inputRef: o } = e,
        [s, c] = a.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.vwX, {
                tag: d.RB0.LABEL,
                htmlFor: C,
                children: y.intl.string(y.t.WBiKnJ)
            }),
            (0, r.jsx)(u.iS, {
                inputRef: o,
                id: C,
                placeholder: y.intl.string(y.t['/uQqJS']),
                value: t,
                className: i()(P.questionInput, { [P.hasError]: null != l }),
                onChange: n,
                maxLength: x.Az,
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
function R(e) {
    let { selectedDuration: t, onSelect: n } = e,
        a = (0, j.Z)(),
        l = a[t];
    return (0, r.jsxs)('div', {
        className: P.duration,
        children: [
            (0, r.jsx)(d.Text, {
                variant: 'text-md/medium',
                color: 'header-secondary',
                tag: 'label',
                'aria-hidden': !0,
                children: y.intl.string(y.t.bGHzxc)
            }),
            (0, r.jsx)(d.PhF, {
                'aria-label': y.intl.formatToPlainString(y.t.nXNHND, { duration: l }),
                className: P.durationSelect,
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
function E(e) {
    let { channel: t, transitionState: n, onClose: l, initialQuestion: u, initialAnswers: p, initialDuration: j } = e;
    (0, m.Z)({
        type: O.n.MODAL,
        name: o.z.POLL_EDITOR_VIEWED
    });
    let C = a.useRef(null),
        k = a.useRef([]),
        A = a.useRef([]),
        D = a.useRef(null),
        S = a.useRef([]),
        I = a.useCallback((e) => {
            var t, n, r, a;
            let { indexToRemove: l, numberOfAnswers: i } = e;
            i === x.gY + 1 ? null == (n = D.current) || null == (t = n.ref) || t.focus() : null == (a = S.current[l === i - 1 ? l - 1 : l + 1]) || null == (r = a.ref) || r.focus();
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
            handleRemoveAnswerImage: M,
            canRemoveMoreAnswers: W,
            handleAddAnswer: q,
            handleRemoveAnswer: H,
            createPollError: G,
            handleSubmitPoll: X,
            fieldErrors: V,
            submitting: J,
            shouldFocusOnInvalidField: Q,
            setShouldFocusOnInvalidField: $
        } = (0, h.Z)(t, l, I, {
            initialQuestion: u,
            initialAnswers: p,
            initialDuration: j
        }),
        { trackPollCreationCancelled: ee } = (0, v.l)(N, L),
        et = a.useRef(N.length),
        en = a.useCallback(() => {
            (ee(), l());
        }, [l, ee]),
        er = a.useCallback(() => {
            if (!(0, g.D$)(T, N))
                return void f.Z.show({
                    title: y.intl.string(y.t.HMrgcn),
                    body: y.intl.string(y.t['Wxa/j4']),
                    confirmColor: s.Tt.RED,
                    confirmText: y.intl.string(y.t.TzJA4u),
                    confirmVariant: 'critical-primary',
                    cancelText: y.intl.string(y.t['2BR5R0']),
                    onConfirm: () => {
                        en();
                    }
                });
            en();
        }, [en, N, T]);
    (a.useEffect(() => {
        (0, d.oav)(
            x.$z,
            (e) => {
                var n, a;
                return (0, r.jsx)(
                    E,
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
                if ((null == V ? void 0 : V.question) != null) null == (e = C.current) || e.focus();
                else {
                    let e = N.findIndex((e) => V['answer-'.concat(e.localCreationAnswerId)]);
                    -1 !== e && (null == (t = A.current[e]) || t.focus());
                }
                $(!1);
            }
        }, [V, N, Q, $, A, k]));
    let ea = a.useCallback(() => {
            n === d.Dvm.ENTERED && X();
        }, [X, n]),
        el = (0, b.Z)({
            disabled: J,
            onSubmit: ea
        }),
        ei = a.useMemo(
            () => [
                {
                    variant: 'primary',
                    onClick: ea,
                    submitting: J,
                    text: y.intl.string(y.t.JOj8Zm)
                }
            ],
            [ea, J]
        );
    return (0, r.jsx)(c.Modal, {
        transitionState: n,
        onClose: l,
        title: y.intl.string(y.t['GD/8X1']),
        actions: ei,
        actionBarInput: (0, r.jsx)(d.XZJ, {
            className: P.checkbox,
            size: 24,
            value: L,
            onChange: (e, t) => B(t),
            children: (0, r.jsx)(d.Text, {
                variant: 'text-md/medium',
                color: 'interactive-active',
                children: y.intl.string(y.t['Ux+iQU'])
            })
        }),
        children: (0, r.jsxs)('div', {
            className: P.content,
            onKeyDown: el,
            children: [
                null != G &&
                    (0, r.jsx)(d.kzN, {
                        className: P.apiErrorBlock,
                        children: G.getAnyErrorMessage()
                    }),
                (0, r.jsx)(_, {
                    question: T,
                    onChange: Y,
                    error: null == V ? void 0 : V.question,
                    inputRef: C
                }),
                (0, r.jsx)(d.LZC, { size: 26 }),
                (0, r.jsxs)('fieldset', {
                    className: i()(P.answerInputsContainer, P.defaultContainer),
                    children: [
                        (0, r.jsx)(d.vwX, {
                            tag: d.RB0.LEGEND,
                            children: y.intl.string(y.t.oMBfeX)
                        }),
                        N.map((e, n) =>
                            (0, r.jsx)(
                                w.Z,
                                {
                                    answer: e,
                                    channelId: t.id,
                                    index: n,
                                    isLastAnswer: n === N.length - 1,
                                    onEmojiSelect: z,
                                    onEmojiRemove: M,
                                    onAnswerTextChange: K,
                                    onRemoveAnswer: H,
                                    addAnswer: q,
                                    submitPoll: ea,
                                    answerTextInputRefs: A,
                                    error: null == V ? void 0 : V['answer-'.concat(e.localCreationAnswerId)],
                                    canRemoveAnswer: W,
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
                            (0, r.jsxs)(d.P3F, {
                                className: i()(P.addAnswerButtonDefault, { [P.canRemoveMoreAnswers]: W }),
                                onClick: F ? q : void 0,
                                'aria-label': y.intl.string(y.t.B2UvmZ),
                                ref: D,
                                children: [
                                    (0, r.jsx)(d.qJs, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: P.addAnswerIconDefault
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        className: P.addAnswerButtonLabel,
                                        children: y.intl.string(y.t.B2UvmZ)
                                    })
                                ]
                            })
                    ]
                }),
                (0, r.jsx)(d.LZC, { size: 18 }),
                (0, r.jsx)(R, {
                    selectedDuration: U,
                    onSelect: Z
                })
            ]
        })
    });
}
