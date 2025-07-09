(n.d(t, { default: () => I }), n(388685));
var r = n(255367),
    a = n(73800),
    l = n(120356),
    o = n.n(l),
    i = n(525769),
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
function E(e) {
    let { question: t, onChange: n, error: l, inputRef: i } = e,
        [s, c] = a.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.vwX, {
                tag: u.RB0.LABEL,
                htmlFor: C,
                children: v.intl.string(v.t.WBiKnJ)
            }),
            (0, r.jsx)(u.Kx8, {
                inputRef: i,
                id: C,
                placeholder: v.intl.string(v.t['/uQqJS']),
                value: t,
                className: o()(_.questionInput, { [_.hasError]: null != l }),
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
function A(e) {
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
    let { channel: t, transitionState: n, onClose: l } = e,
        m = (0, b._N)();
    (0, f.Z)({
        type: w.n.MODAL,
        name: i.z.POLL_EDITOR_VIEWED
    });
    let h = a.useRef(null),
        C = a.useRef([]),
        k = a.useRef([]),
        S = a.useRef(null),
        D = a.useRef([]),
        R = a.useCallback((e) => {
            var t, n, r, a;
            let { indexToRemove: l, numberOfAnswers: o } = e;
            o === x.gY + 1 ? null == (n = S.current) || null == (t = n.ref) || t.focus() : null == (a = D.current[l === o - 1 ? l - 1 : l + 1]) || null == (r = a.ref) || r.focus();
        }, []),
        { answers: N, question: T, selectedLayoutType: L, setSelectedLayoutType: B, allowMultiSelect: Z, setAllowMultiSelect: U, duration: M, setDuration: z, handleQuestionChange: W, handleAnswerTextChange: H, handleEmojiSelect: Y, canAddMoreAnswers: F, handleRemoveAnswerImage: K, canRemoveMoreAnswers: q, handleAddAnswer: X, handleRemoveAnswer: G, createPollError: J, handleSubmitPoll: V, fieldErrors: Q, submitting: $, shouldFocusOnInvalidField: ee, setShouldFocusOnInvalidField: et } = (0, g.Z)(t, l, R),
        { trackPollCreationCancelled: en } = (0, O.l)(N, Z, L),
        er = a.useRef(N.length),
        ea = L === s.C.DEFAULT,
        el = a.useCallback(() => {
            (en(), l());
        }, [l, en]),
        eo = a.useCallback(() => {
            if (!(0, b.D$)(T, N, L))
                return void d.Z.show({
                    title: v.intl.string(v.t.HMrgcn),
                    body: v.intl.string(v.t['Wxa/j4']),
                    confirmColor: c.Tt.RED,
                    confirmText: v.intl.string(v.t.TzJA4u),
                    confirmVariant: 'critical-primary',
                    cancelText: v.intl.string(v.t['2BR5R0']),
                    onConfirm: () => {
                        el();
                    }
                });
            el();
        }, [el, N, T, L]);
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
            eo
        );
    }, [eo, t]),
        a.useEffect(() => {
            if (N.length > er.current) {
                var e;
                null == (e = k.current[N.length - 1]) || e.focus();
            }
            er.current = N.length;
        }, [N.length]),
        a.useEffect(() => {
            if (ee) {
                var e, t;
                if ((null == Q ? void 0 : Q.question) != null) null == (e = h.current) || e.focus();
                else {
                    let e = N.findIndex((e) => Q['answer-'.concat(e.localCreationAnswerId)]);
                    -1 !== e && (null == (t = k.current[e]) || t.focus());
                }
                et(!1);
            }
        }, [Q, N, ee, et, k, C]));
    let ei = () => {
            n === u.Dvm.ENTERED && V();
        },
        es = (0, p.Z)({
            disabled: $,
            onSubmit: ei
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
                    (0, r.jsx)(u.olH, { onClick: eo })
                ]
            }),
            (0, r.jsxs)(u.hzk, {
                className: _.content,
                onKeyDown: es,
                children: [
                    null != J &&
                        (0, r.jsx)(u.kzN, {
                            className: _.apiErrorBlock,
                            children: J.getAnyErrorMessage()
                        }),
                    (0, r.jsx)(E, {
                        question: T,
                        onChange: W,
                        error: null == Q ? void 0 : Q.question,
                        inputRef: h
                    }),
                    m &&
                        (0, r.jsx)(y.Z, {
                            selectedLayoutType: L,
                            onSelectedLayoutType: B
                        }),
                    (0, r.jsx)(u.LZC, { size: 26 }),
                    (0, r.jsxs)('fieldset', {
                        className: o()(_.answerInputsContainer, ea ? _.defaultContainer : _.imageOnlyContainer),
                        children: [
                            (0, r.jsx)(u.vwX, {
                                tag: u.RB0.LEGEND,
                                children: v.intl.string(v.t.oMBfeX)
                            }),
                            N.map((e, n) =>
                                (0, r.jsx)(
                                    j.Z,
                                    {
                                        answer: e,
                                        channelId: t.id,
                                        index: n,
                                        isLastAnswer: n === N.length - 1,
                                        onEmojiSelect: Y,
                                        onEmojiRemove: K,
                                        layout: L,
                                        onAnswerTextChange: H,
                                        onRemoveAnswer: G,
                                        addAnswer: X,
                                        submitPoll: ei,
                                        answerTextInputRefs: k,
                                        error: null == Q ? void 0 : Q['answer-'.concat(e.localCreationAnswerId)],
                                        canRemoveAnswer: q,
                                        ref: (e) => {
                                            C.current[n] = e;
                                        },
                                        inputRef: (e) => {
                                            k.current[n] = e;
                                        },
                                        deleteButtonRef: (e) => {
                                            D.current[n] = e;
                                        }
                                    },
                                    e.localCreationAnswerId
                                )
                            ),
                            F &&
                                (0, r.jsxs)(u.P3F, {
                                    className: o()(ea ? _.addAnswerButtonDefault : _.addAnswerButtonImageOnly, { [_.canRemoveMoreAnswers]: q }),
                                    onClick: F ? X : void 0,
                                    'aria-label': v.intl.string(v.t.B2UvmZ),
                                    ref: S,
                                    children: [
                                        (0, r.jsx)(u.qJs, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: ea ? _.addAnswerIconDefault : _.addAnswerIconImageOnly
                                        }),
                                        ea &&
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
                    (0, r.jsx)(A, {
                        selectedDuration: M,
                        onSelect: z
                    })
                ]
            }),
            (0, r.jsxs)(u.mzw, {
                className: _.footer,
                children: [
                    (0, r.jsx)(u.XZJ, {
                        className: _.checkbox,
                        size: 24,
                        value: Z,
                        onChange: (e, t) => U(t),
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
                        onClick: ei,
                        submitting: $,
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
