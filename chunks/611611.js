n.d(t, { default: () => k }), n(388685);
var r = n(255367),
    a = n(73800),
    l = n(120356),
    o = n.n(l),
    i = n(525769),
    s = n(263568),
    c = n(481060),
    u = n(213609),
    d = n(313201),
    f = n(540059),
    m = n(542383),
    p = n(79390),
    b = n(728076),
    g = n(2466),
    h = n(485168),
    O = n(309081),
    j = n(185306),
    y = n(240521),
    x = n(489887),
    w = n(20281),
    v = n(388032),
    _ = n(735077);
let P = (0, d.hQ)(),
    C = (0, d.hQ)();
function E(e) {
    let { question: t, onChange: n, error: l, inputRef: i } = e,
        [s, u] = a.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.vwX, {
                tag: c.RB0.LABEL,
                htmlFor: C,
                children: v.intl.string(v.t.WBiKnJ)
            }),
            (0, r.jsx)(c.Kx8, {
                inputRef: i,
                id: C,
                placeholder: v.intl.string(v.t['/uQqJS']),
                value: t,
                className: o()(_.questionInput, { [_.hasError]: null != l }),
                onChange: n,
                maxLength: x.Az,
                error: l,
                onFocus: () => u(!0),
                onBlur: () => u(!1),
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
        a = (0, g.Z)(),
        l = a[t];
    return (0, r.jsxs)('div', {
        className: _.duration,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/medium',
                color: 'header-secondary',
                tag: 'label',
                'aria-hidden': !0,
                children: v.intl.string(v.t.bGHzxc)
            }),
            (0, r.jsx)(c.PhF, {
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
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        children: e.label
                    }),
                popoutPosition: 'top'
            })
        ]
    });
}
function k(e) {
    let { channel: t, transitionState: n, onClose: l } = e,
        d = (0, p._N)();
    (0, u.Z)({
        type: w.n.MODAL,
        name: i.z.POLL_EDITOR_VIEWED
    });
    let g = a.useRef(null),
        C = a.useRef([]),
        I = a.useRef([]),
        S = a.useRef(null),
        D = a.useRef([]),
        N = a.useCallback((e) => {
            var t, n, r, a;
            let { indexToRemove: l, numberOfAnswers: o } = e;
            o === x.gY + 1 ? null == (n = S.current) || null == (t = n.ref) || t.focus() : null == (a = D.current[l === o - 1 ? l - 1 : l + 1]) || null == (r = a.ref) || r.focus();
        }, []),
        { answers: R, question: T, selectedLayoutType: L, setSelectedLayoutType: B, allowMultiSelect: Z, setAllowMultiSelect: U, duration: M, setDuration: z, handleQuestionChange: W, handleAnswerTextChange: H, handleEmojiSelect: Y, canAddMoreAnswers: K, handleRemoveAnswerImage: F, canRemoveMoreAnswers: q, handleAddAnswer: X, handleRemoveAnswer: J, createPollError: G, handleSubmitPoll: Q, fieldErrors: V, submitting: $, shouldFocusOnInvalidField: ee, setShouldFocusOnInvalidField: et } = (0, b.Z)(t, l, N),
        { trackPollCreationCancelled: en } = (0, h.l)(R, Z, L),
        er = (0, f.Q3)('PollCreationModal'),
        ea = (0, c.dQu)(c.TVs.colors.INTERACTIVE_NORMAL).hex(),
        el = a.useRef(R.length),
        eo = L === s.C.DEFAULT,
        ei = a.useCallback(() => {
            en(), l();
        }, [l, en]),
        es = a.useCallback(() => {
            if (!(0, p.D$)(T, R, L))
                return void (0, y.Z)({
                    title: v.intl.string(v.t.HMrgcn),
                    body: v.intl.string(v.t['Wxa/j4']),
                    cta: v.intl.string(v.t.TzJA4u),
                    closeLabel: v.intl.string(v.t['2BR5R0']),
                    onConfirm: () => {
                        ei();
                    }
                });
            ei();
        }, [ei, R, T, L]);
    a.useEffect(() => {
        (0, c.oav)(
            x.$z,
            (e) => {
                var n, a;
                return (0, r.jsx)(
                    k,
                    ((n = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
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
            if (R.length > el.current) {
                var e;
                null == (e = I.current[R.length - 1]) || e.focus();
            }
            el.current = R.length;
        }, [R.length]),
        a.useEffect(() => {
            if (ee) {
                var e, t;
                if ((null == V ? void 0 : V.question) != null) null == (e = g.current) || e.focus();
                else {
                    let e = R.findIndex((e) => V['answer-'.concat(e.localCreationAnswerId)]);
                    -1 !== e && (null == (t = I.current[e]) || t.focus());
                }
                et(!1);
            }
        }, [V, R, ee, et, I, C]);
    let ec = () => {
            n === c.Dvm.ENTERED && Q();
        },
        eu = (0, m.Z)({
            disabled: $,
            onSubmit: ec
        });
    return (0, r.jsxs)(c.Y0X, {
        size: c.CgR.MEDIUM,
        className: _.container,
        transitionState: n,
        'aria-labelledby': P,
        children: [
            (0, r.jsxs)(c.xBx, {
                className: _.header,
                separator: !1,
                children: [
                    (0, r.jsx)(c.X6q, {
                        color: 'interactive-normal',
                        variant: 'text-lg/semibold',
                        className: _.headerText,
                        id: P,
                        children: v.intl.string(v.t['GD/8X1'])
                    }),
                    (0, r.jsx)(c.olH, { onClick: es })
                ]
            }),
            (0, r.jsxs)(c.hzk, {
                className: _.content,
                onKeyDown: eu,
                children: [
                    null != G &&
                        (0, r.jsx)(c.kzN, {
                            className: _.apiErrorBlock,
                            children: G.getAnyErrorMessage()
                        }),
                    (0, r.jsx)(E, {
                        question: T,
                        onChange: W,
                        error: null == V ? void 0 : V.question,
                        inputRef: g
                    }),
                    d &&
                        (0, r.jsx)(j.Z, {
                            selectedLayoutType: L,
                            onSelectedLayoutType: B
                        }),
                    (0, r.jsx)(c.LZC, { size: 26 }),
                    (0, r.jsxs)('fieldset', {
                        className: o()(_.answerInputsContainer, eo ? _.defaultContainer : _.imageOnlyContainer),
                        children: [
                            (0, r.jsx)(c.vwX, {
                                tag: c.RB0.LEGEND,
                                children: v.intl.string(v.t.oMBfeX)
                            }),
                            R.map((e, n) =>
                                (0, r.jsx)(
                                    O.Z,
                                    {
                                        answer: e,
                                        channelId: t.id,
                                        index: n,
                                        isLastAnswer: n === R.length - 1,
                                        onEmojiSelect: Y,
                                        onEmojiRemove: F,
                                        layout: L,
                                        onAnswerTextChange: H,
                                        onRemoveAnswer: J,
                                        addAnswer: X,
                                        submitPoll: ec,
                                        answerTextInputRefs: I,
                                        error: null == V ? void 0 : V['answer-'.concat(e.localCreationAnswerId)],
                                        canRemoveAnswer: q,
                                        ref: (e) => {
                                            C.current[n] = e;
                                        },
                                        inputRef: (e) => {
                                            I.current[n] = e;
                                        },
                                        deleteButtonRef: (e) => {
                                            D.current[n] = e;
                                        }
                                    },
                                    e.localCreationAnswerId
                                )
                            ),
                            K &&
                                (0, r.jsxs)(c.P3F, {
                                    className: o()(eo ? _.addAnswerButtonDefault : _.addAnswerButtonImageOnly, { [_.canRemoveMoreAnswers]: q }),
                                    onClick: K ? X : void 0,
                                    'aria-label': v.intl.string(v.t.B2UvmZ),
                                    ref: S,
                                    children: [
                                        (0, r.jsx)(c.qJs, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: eo ? _.addAnswerIconDefault : _.addAnswerIconImageOnly
                                        }),
                                        eo &&
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-md/normal',
                                                color: 'text-muted',
                                                className: _.addAnswerButtonLabel,
                                                children: v.intl.string(v.t.B2UvmZ)
                                            })
                                    ]
                                })
                        ]
                    }),
                    (0, r.jsx)(c.LZC, { size: 18 }),
                    (0, r.jsx)(A, {
                        selectedDuration: M,
                        onSelect: z
                    })
                ]
            }),
            (0, r.jsxs)(c.mzw, {
                className: _.footer,
                children: [
                    (0, r.jsx)(c.XZJ, {
                        className: _.checkbox,
                        type: er ? void 0 : c.XZJ.Types.INVERTED,
                        size: 24,
                        value: Z,
                        checkboxColor: er ? void 0 : ea,
                        onChange: (e, t) => U(t),
                        children: (0, r.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            children: v.intl.string(v.t['Ux+iQU'])
                        })
                    }),
                    (0, r.jsx)(c.zxk, {
                        look: c.iLD.FILLED,
                        size: c.zxk.Sizes.MEDIUM,
                        className: _.postButton,
                        onClick: ec,
                        submitting: $,
                        children: (0, r.jsx)(c.Text, {
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
