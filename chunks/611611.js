n.d(t, { default: () => k }), n(388685);
var r = n(255367),
    a = n(73800),
    l = n(120356),
    o = n.n(l),
    i = n(525769),
    s = n(263568),
    c = n(481060),
    u = n(240872),
    d = n(213609),
    f = n(313201),
    m = n(542383),
    p = n(79390),
    b = n(728076),
    g = n(2466),
    h = n(485168),
    O = n(309081),
    j = n(185306),
    y = n(489887),
    x = n(20281),
    w = n(388032),
    v = n(735077);
let _ = (0, f.hQ)(),
    P = (0, f.hQ)();
function C(e) {
    let { question: t, onChange: n, error: l, inputRef: i } = e,
        [s, u] = a.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.vwX, {
                tag: c.RB0.LABEL,
                htmlFor: P,
                children: w.intl.string(w.t.WBiKnJ)
            }),
            (0, r.jsx)(c.Kx8, {
                inputRef: i,
                id: P,
                placeholder: w.intl.string(w.t['/uQqJS']),
                value: t,
                className: o()(v.questionInput, { [v.hasError]: null != l }),
                onChange: n,
                maxLength: y.Az,
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
function E(e) {
    let { selectedDuration: t, onSelect: n } = e,
        a = (0, g.Z)(),
        l = a[t];
    return (0, r.jsxs)('div', {
        className: v.duration,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/medium',
                color: 'header-secondary',
                tag: 'label',
                'aria-hidden': !0,
                children: w.intl.string(w.t.bGHzxc)
            }),
            (0, r.jsx)(c.PhF, {
                'aria-label': w.intl.formatToPlainString(w.t.nXNHND, { duration: l }),
                className: v.durationSelect,
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
        f = (0, p._N)();
    (0, d.Z)({
        type: x.n.MODAL,
        name: i.z.POLL_EDITOR_VIEWED
    });
    let g = a.useRef(null),
        P = a.useRef([]),
        A = a.useRef([]),
        I = a.useRef(null),
        S = a.useRef([]),
        D = a.useCallback((e) => {
            var t, n, r, a;
            let { indexToRemove: l, numberOfAnswers: o } = e;
            o === y.gY + 1 ? null == (n = I.current) || null == (t = n.ref) || t.focus() : null == (a = S.current[l === o - 1 ? l - 1 : l + 1]) || null == (r = a.ref) || r.focus();
        }, []),
        { answers: R, question: N, selectedLayoutType: T, setSelectedLayoutType: L, allowMultiSelect: B, setAllowMultiSelect: Z, duration: U, setDuration: M, handleQuestionChange: z, handleAnswerTextChange: W, handleEmojiSelect: H, canAddMoreAnswers: Y, handleRemoveAnswerImage: F, canRemoveMoreAnswers: K, handleAddAnswer: q, handleRemoveAnswer: X, createPollError: G, handleSubmitPoll: J, fieldErrors: V, submitting: Q, shouldFocusOnInvalidField: $, setShouldFocusOnInvalidField: ee } = (0, b.Z)(t, l, D),
        { trackPollCreationCancelled: et } = (0, h.l)(R, B, T),
        en = a.useRef(R.length),
        er = T === s.C.DEFAULT,
        ea = a.useCallback(() => {
            et(), l();
        }, [l, et]),
        el = a.useCallback(() => {
            if (!(0, p.D$)(N, R, T))
                return void u.Z.show({
                    title: w.intl.string(w.t.HMrgcn),
                    body: w.intl.string(w.t['Wxa/j4']),
                    confirmColor: c.Ttl.RED,
                    confirmText: w.intl.string(w.t.TzJA4u),
                    confirmVariant: 'critical-primary',
                    cancelText: w.intl.string(w.t['2BR5R0']),
                    onConfirm: () => {
                        ea();
                    }
                });
            ea();
        }, [ea, R, N, T]);
    a.useEffect(() => {
        (0, c.oav)(
            y.$z,
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
            el
        );
    }, [el, t]),
        a.useEffect(() => {
            if (R.length > en.current) {
                var e;
                null == (e = A.current[R.length - 1]) || e.focus();
            }
            en.current = R.length;
        }, [R.length]),
        a.useEffect(() => {
            if ($) {
                var e, t;
                if ((null == V ? void 0 : V.question) != null) null == (e = g.current) || e.focus();
                else {
                    let e = R.findIndex((e) => V['answer-'.concat(e.localCreationAnswerId)]);
                    -1 !== e && (null == (t = A.current[e]) || t.focus());
                }
                ee(!1);
            }
        }, [V, R, $, ee, A, P]);
    let eo = () => {
            n === c.Dvm.ENTERED && J();
        },
        ei = (0, m.Z)({
            disabled: Q,
            onSubmit: eo
        });
    return (0, r.jsxs)(c.Y0X, {
        size: c.CgR.MEDIUM,
        className: v.container,
        transitionState: n,
        'aria-labelledby': _,
        parentComponent: 'PollCreationModal',
        children: [
            (0, r.jsxs)(c.xBx, {
                className: v.header,
                separator: !1,
                children: [
                    (0, r.jsx)(c.X6q, {
                        color: 'interactive-normal',
                        variant: 'text-lg/semibold',
                        className: v.headerText,
                        id: _,
                        children: w.intl.string(w.t['GD/8X1'])
                    }),
                    (0, r.jsx)(c.olH, { onClick: el })
                ]
            }),
            (0, r.jsxs)(c.hzk, {
                className: v.content,
                onKeyDown: ei,
                children: [
                    null != G &&
                        (0, r.jsx)(c.kzN, {
                            className: v.apiErrorBlock,
                            children: G.getAnyErrorMessage()
                        }),
                    (0, r.jsx)(C, {
                        question: N,
                        onChange: z,
                        error: null == V ? void 0 : V.question,
                        inputRef: g
                    }),
                    f &&
                        (0, r.jsx)(j.Z, {
                            selectedLayoutType: T,
                            onSelectedLayoutType: L
                        }),
                    (0, r.jsx)(c.LZC, { size: 26 }),
                    (0, r.jsxs)('fieldset', {
                        className: o()(v.answerInputsContainer, er ? v.defaultContainer : v.imageOnlyContainer),
                        children: [
                            (0, r.jsx)(c.vwX, {
                                tag: c.RB0.LEGEND,
                                children: w.intl.string(w.t.oMBfeX)
                            }),
                            R.map((e, n) =>
                                (0, r.jsx)(
                                    O.Z,
                                    {
                                        answer: e,
                                        channelId: t.id,
                                        index: n,
                                        isLastAnswer: n === R.length - 1,
                                        onEmojiSelect: H,
                                        onEmojiRemove: F,
                                        layout: T,
                                        onAnswerTextChange: W,
                                        onRemoveAnswer: X,
                                        addAnswer: q,
                                        submitPoll: eo,
                                        answerTextInputRefs: A,
                                        error: null == V ? void 0 : V['answer-'.concat(e.localCreationAnswerId)],
                                        canRemoveAnswer: K,
                                        ref: (e) => {
                                            P.current[n] = e;
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
                            Y &&
                                (0, r.jsxs)(c.P3F, {
                                    className: o()(er ? v.addAnswerButtonDefault : v.addAnswerButtonImageOnly, { [v.canRemoveMoreAnswers]: K }),
                                    onClick: Y ? q : void 0,
                                    'aria-label': w.intl.string(w.t.B2UvmZ),
                                    ref: I,
                                    children: [
                                        (0, r.jsx)(c.qJs, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: er ? v.addAnswerIconDefault : v.addAnswerIconImageOnly
                                        }),
                                        er &&
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-md/normal',
                                                color: 'text-muted',
                                                className: v.addAnswerButtonLabel,
                                                children: w.intl.string(w.t.B2UvmZ)
                                            })
                                    ]
                                })
                        ]
                    }),
                    (0, r.jsx)(c.LZC, { size: 18 }),
                    (0, r.jsx)(E, {
                        selectedDuration: U,
                        onSelect: M
                    })
                ]
            }),
            (0, r.jsxs)(c.mzw, {
                className: v.footer,
                children: [
                    (0, r.jsx)(c.XZJ, {
                        className: v.checkbox,
                        size: 24,
                        value: B,
                        onChange: (e, t) => Z(t),
                        children: (0, r.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            children: w.intl.string(w.t['Ux+iQU'])
                        })
                    }),
                    (0, r.jsx)(c.zxk, {
                        look: c.iLD.FILLED,
                        size: c.zxk.Sizes.MEDIUM,
                        className: v.postButton,
                        onClick: eo,
                        submitting: Q,
                        children: (0, r.jsx)(c.Text, {
                            variant: 'text-md/semibold',
                            className: v.postButtonText,
                            children: w.intl.string(w.t.JOj8Zm)
                        })
                    })
                ]
            })
        ]
    });
}
