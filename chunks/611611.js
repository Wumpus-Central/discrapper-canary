(n.d(t, { default: () => I }), n(388685));
var r = n(255367),
    a = n(73800),
    l = n(120356),
    i = n.n(l),
    o = n(525769),
    s = n(263568),
    c = n(755721),
    u = n(481060),
    d = n(240872),
    f = n(213609),
    m = n(313201),
    p = n(542383),
    b = n(79390),
    g = n(728076),
    h = n(2466),
    O = n(485168),
    j = n(309081),
    y = n(185306),
    x = n(489887),
    w = n(20281),
    v = n(388032),
    _ = n(735077);
let P = (0, m.hQ)(),
    C = (0, m.hQ)();
function A(e) {
    let { question: t, onChange: n, error: l, inputRef: o } = e,
        [s, c] = a.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.vwX, {
                tag: u.RB0.LABEL,
                htmlFor: C,
                children: v.intl.string(v.t.WBiKnJ)
            }),
            (0, r.jsx)(u.Kx8, {
                inputRef: o,
                id: C,
                placeholder: v.intl.string(v.t['/uQqJS']),
                value: t,
                className: i()(_.questionInput, { [_.hasError]: null != l }),
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
function E(e) {
    let { selectedDuration: t, onSelect: n } = e,
        a = (0, h.Z)(),
        l = a[t];
    return (0, r.jsxs)('div', {
        className: _.duration,
        children: [
            (0, r.jsx)(u.Text, {
                variant: 'text-md/medium',
                color: 'header-secondary',
                tag: 'label',
                'aria-hidden': !0,
                children: v.intl.string(v.t.bGHzxc)
            }),
            (0, r.jsx)(u.PhF, {
                'aria-label': v.intl.formatToPlainString(v.t.nXNHND, { duration: l }),
                className: _.durationSelect,
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
function I(e) {
    let { channel: t, transitionState: n, onClose: l, initialQuestion: m, initialAnswers: h, initialDuration: C } = e,
        k = (0, b._N)();
    (0, f.Z)({
        type: w.n.MODAL,
        name: o.z.POLL_EDITOR_VIEWED
    });
    let S = a.useRef(null),
        D = a.useRef([]),
        R = a.useRef([]),
        N = a.useRef(null),
        T = a.useRef([]),
        L = a.useCallback((e) => {
            var t, n, r, a;
            let { indexToRemove: l, numberOfAnswers: i } = e;
            i === x.gY + 1 ? null == (n = N.current) || null == (t = n.ref) || t.focus() : null == (a = T.current[l === i - 1 ? l - 1 : l + 1]) || null == (r = a.ref) || r.focus();
        }, []),
        {
            answers: B,
            question: Z,
            selectedLayoutType: U,
            setSelectedLayoutType: M,
            allowMultiSelect: z,
            setAllowMultiSelect: W,
            duration: H,
            setDuration: Y,
            handleQuestionChange: F,
            handleAnswerTextChange: K,
            handleEmojiSelect: q,
            canAddMoreAnswers: X,
            handleRemoveAnswerImage: G,
            canRemoveMoreAnswers: J,
            handleAddAnswer: Q,
            handleRemoveAnswer: V,
            createPollError: $,
            handleSubmitPoll: ee,
            fieldErrors: et,
            submitting: en,
            shouldFocusOnInvalidField: er,
            setShouldFocusOnInvalidField: ea
        } = (0, g.Z)(t, l, L, {
            initialQuestion: m,
            initialAnswers: h,
            initialDuration: C
        }),
        { trackPollCreationCancelled: el } = (0, O.l)(B, z, U),
        ei = a.useRef(B.length),
        eo = U === s.C.DEFAULT,
        es = a.useCallback(() => {
            (el(), l());
        }, [l, el]),
        ec = a.useCallback(() => {
            if (!(0, b.D$)(Z, B, U))
                return void d.Z.show({
                    title: v.intl.string(v.t.HMrgcn),
                    body: v.intl.string(v.t['Wxa/j4']),
                    confirmColor: c.Tt.RED,
                    confirmText: v.intl.string(v.t.TzJA4u),
                    confirmVariant: 'critical-primary',
                    cancelText: v.intl.string(v.t['2BR5R0']),
                    onConfirm: () => {
                        es();
                    }
                });
            es();
        }, [es, B, Z, U]);
    (a.useEffect(() => {
        (0, u.oav)(
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
            ec
        );
    }, [ec, t]),
        a.useEffect(() => {
            if (B.length > ei.current) {
                var e;
                null == (e = R.current[B.length - 1]) || e.focus();
            }
            ei.current = B.length;
        }, [B.length]),
        a.useEffect(() => {
            if (er) {
                var e, t;
                if ((null == et ? void 0 : et.question) != null) null == (e = S.current) || e.focus();
                else {
                    let e = B.findIndex((e) => et['answer-'.concat(e.localCreationAnswerId)]);
                    -1 !== e && (null == (t = R.current[e]) || t.focus());
                }
                ea(!1);
            }
        }, [et, B, er, ea, R, D]));
    let eu = () => {
            n === u.Dvm.ENTERED && ee();
        },
        ed = (0, p.Z)({
            disabled: en,
            onSubmit: eu
        });
    return (0, r.jsxs)(u.Y0X, {
        size: u.CgR.MEDIUM,
        className: _.container,
        transitionState: n,
        'aria-labelledby': P,
        parentComponent: 'PollCreationModal',
        children: [
            (0, r.jsxs)(u.xBx, {
                className: _.header,
                separator: !1,
                children: [
                    (0, r.jsx)(u.X6q, {
                        color: 'interactive-normal',
                        variant: 'text-lg/semibold',
                        className: _.headerText,
                        id: P,
                        children: v.intl.string(v.t['GD/8X1'])
                    }),
                    (0, r.jsx)(u.olH, { onClick: ec })
                ]
            }),
            (0, r.jsxs)(u.hzk, {
                className: _.content,
                onKeyDown: ed,
                children: [
                    null != $ &&
                        (0, r.jsx)(u.kzN, {
                            className: _.apiErrorBlock,
                            children: $.getAnyErrorMessage()
                        }),
                    (0, r.jsx)(A, {
                        question: Z,
                        onChange: F,
                        error: null == et ? void 0 : et.question,
                        inputRef: S
                    }),
                    k &&
                        (0, r.jsx)(y.Z, {
                            selectedLayoutType: U,
                            onSelectedLayoutType: M
                        }),
                    (0, r.jsx)(u.LZC, { size: 26 }),
                    (0, r.jsxs)('fieldset', {
                        className: i()(_.answerInputsContainer, eo ? _.defaultContainer : _.imageOnlyContainer),
                        children: [
                            (0, r.jsx)(u.vwX, {
                                tag: u.RB0.LEGEND,
                                children: v.intl.string(v.t.oMBfeX)
                            }),
                            B.map((e, n) =>
                                (0, r.jsx)(
                                    j.Z,
                                    {
                                        answer: e,
                                        channelId: t.id,
                                        index: n,
                                        isLastAnswer: n === B.length - 1,
                                        onEmojiSelect: q,
                                        onEmojiRemove: G,
                                        layout: U,
                                        onAnswerTextChange: K,
                                        onRemoveAnswer: V,
                                        addAnswer: Q,
                                        submitPoll: eu,
                                        answerTextInputRefs: R,
                                        error: null == et ? void 0 : et['answer-'.concat(e.localCreationAnswerId)],
                                        canRemoveAnswer: J,
                                        ref: (e) => {
                                            D.current[n] = e;
                                        },
                                        inputRef: (e) => {
                                            R.current[n] = e;
                                        },
                                        deleteButtonRef: (e) => {
                                            T.current[n] = e;
                                        }
                                    },
                                    e.localCreationAnswerId
                                )
                            ),
                            X &&
                                (0, r.jsxs)(u.P3F, {
                                    className: i()(eo ? _.addAnswerButtonDefault : _.addAnswerButtonImageOnly, { [_.canRemoveMoreAnswers]: J }),
                                    onClick: X ? Q : void 0,
                                    'aria-label': v.intl.string(v.t.B2UvmZ),
                                    ref: N,
                                    children: [
                                        (0, r.jsx)(u.qJs, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: eo ? _.addAnswerIconDefault : _.addAnswerIconImageOnly
                                        }),
                                        eo &&
                                            (0, r.jsx)(u.Text, {
                                                variant: 'text-md/normal',
                                                color: 'text-muted',
                                                className: _.addAnswerButtonLabel,
                                                children: v.intl.string(v.t.B2UvmZ)
                                            })
                                    ]
                                })
                        ]
                    }),
                    (0, r.jsx)(u.LZC, { size: 18 }),
                    (0, r.jsx)(E, {
                        selectedDuration: H,
                        onSelect: Y
                    })
                ]
            }),
            (0, r.jsxs)(u.mzw, {
                className: _.footer,
                children: [
                    (0, r.jsx)(u.XZJ, {
                        className: _.checkbox,
                        size: 24,
                        value: z,
                        onChange: (e, t) => W(t),
                        children: (0, r.jsx)(u.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            children: v.intl.string(v.t['Ux+iQU'])
                        })
                    }),
                    (0, r.jsx)(c.zx, {
                        look: c.iL.FILLED,
                        size: c.zx.Sizes.MEDIUM,
                        className: _.postButton,
                        onClick: eu,
                        submitting: en,
                        children: (0, r.jsx)(u.Text, {
                            variant: 'text-md/semibold',
                            className: _.postButtonText,
                            children: v.intl.string(v.t.JOj8Zm)
                        })
                    })
                ]
            })
        ]
    });
}
