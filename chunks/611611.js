n.r(t),
    n.d(t, {
        default: function () {
            return E;
        }
    }),
    n(47120);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(525769),
    s = n(263568),
    c = n(481060),
    u = n(213609),
    d = n(313201),
    m = n(542383),
    f = n(79390),
    h = n(728076),
    x = n(2466),
    g = n(485168),
    p = n(309081),
    C = n(185306),
    v = n(240521),
    j = n(489887),
    I = n(20281),
    w = n(388032),
    _ = n(841916);
let b = (0, d.hQ)(),
    A = (0, d.hQ)();
function k(e) {
    let { question: t, onChange: n, error: r, inputRef: o } = e,
        [s, u] = l.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.FormTitle, {
                tag: c.FormTitleTags.LABEL,
                htmlFor: A,
                children: w.intl.string(w.t.WBiKnJ)
            }),
            (0, a.jsx)(c.TextArea, {
                inputRef: o,
                id: A,
                placeholder: w.intl.string(w.t['/uQqJS']),
                value: t,
                className: i()(_.questionInput, { [_.hasError]: null != r }),
                onChange: n,
                maxLength: j.Az,
                error: r,
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
function N(e) {
    let { selectedDuration: t, onSelect: n } = e,
        l = (0, x.Z)(),
        r = l[t];
    return (0, a.jsxs)('div', {
        className: _.duration,
        children: [
            (0, a.jsx)(c.Text, {
                variant: 'text-md/medium',
                color: 'header-secondary',
                tag: 'label',
                'aria-hidden': !0,
                children: w.intl.string(w.t.bGHzxc)
            }),
            (0, a.jsx)(c.Select, {
                'aria-label': w.intl.formatToPlainString(w.t.nXNHND, { duration: r }),
                className: _.durationSelect,
                options: Object.entries(l).map((e) => {
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
                    (0, a.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        children: e.label
                    }),
                popoutPosition: 'top'
            })
        ]
    });
}
function E(e) {
    let { channel: t, transitionState: n, onClose: r } = e,
        d = (0, f._N)();
    (0, u.Z)({
        type: I.n.MODAL,
        name: o.z.POLL_EDITOR_VIEWED
    });
    let x = l.useRef(null),
        A = l.useRef([]),
        R = l.useRef([]),
        P = l.useRef(null),
        S = l.useRef([]),
        T = l.useCallback((e) => {
            var t, n, a, l;
            let { indexToRemove: r, numberOfAnswers: i } = e;
            i === j.gY + 1 ? null === (n = P.current) || void 0 === n || null === (t = n.ref) || void 0 === t || t.focus() : null === (l = S.current[r === i - 1 ? r - 1 : r + 1]) || void 0 === l || null === (a = l.ref) || void 0 === a || a.focus();
        }, []),
        { answers: y, question: D, selectedLayoutType: O, setSelectedLayoutType: L, allowMultiSelect: B, setAllowMultiSelect: M, duration: Z, setDuration: U, handleQuestionChange: H, handleAnswerTextChange: F, handleEmojiSelect: z, canAddMoreAnswers: W, handleRemoveAnswerImage: K, canRemoveMoreAnswers: Y, handleAddAnswer: G, handleRemoveAnswer: q, createPollError: V, handleSubmitPoll: J, fieldErrors: Q, submitting: X, shouldFocusOnInvalidField: $, setShouldFocusOnInvalidField: ee } = (0, h.Z)(t, r, T),
        { trackPollCreationCancelled: et } = (0, g.l)(y, B, O),
        en = l.useRef(y.length),
        ea = O === s.C.DEFAULT,
        el = l.useCallback(() => {
            et(), r();
        }, [r, et]),
        er = l.useCallback(() => {
            if ((0, f.D$)(D, y, O)) el();
            else {
                (0, v.Z)({
                    title: w.intl.string(w.t.HMrgcn),
                    body: w.intl.string(w.t['Wxa/j4']),
                    cta: w.intl.string(w.t.TzJA4u),
                    closeLabel: w.intl.string(w.t['2BR5R0']),
                    onConfirm: () => {
                        el();
                    }
                });
                return;
            }
        }, [el, y, D, O]);
    l.useEffect(() => {
        (0, c.updateModal)(
            j.$z,
            (e) =>
                (0, a.jsx)(E, {
                    ...e,
                    channel: t
                }),
            er
        );
    }, [er, t]),
        l.useEffect(() => {
            if (y.length > en.current) {
                var e;
                null === (e = R.current[y.length - 1]) || void 0 === e || e.focus();
            }
            en.current = y.length;
        }, [y.length]),
        l.useEffect(() => {
            if ($) {
                var e, t;
                if ((null == Q ? void 0 : Q.question) != null) null === (e = x.current) || void 0 === e || e.focus();
                else {
                    let e = y.findIndex((e) => Q['answer-'.concat(e.localCreationAnswerId)]);
                    -1 !== e && (null === (t = R.current[e]) || void 0 === t || t.focus());
                }
                ee(!1);
            }
        }, [Q, y, $, ee, R, A]);
    let ei = () => {
            n === c.ModalTransitionState.ENTERED && J();
        },
        eo = (0, m.Z)({
            disabled: X,
            onSubmit: ei
        });
    return (0, a.jsxs)(c.ModalRoot, {
        size: c.ModalSize.MEDIUM,
        className: _.container,
        transitionState: n,
        'aria-labelledby': b,
        children: [
            (0, a.jsxs)(c.ModalHeader, {
                className: _.header,
                separator: !1,
                children: [
                    (0, a.jsx)(c.Heading, {
                        color: 'interactive-normal',
                        variant: 'text-lg/semibold',
                        className: _.headerText,
                        id: b,
                        children: w.intl.string(w.t['GD/8X1'])
                    }),
                    (0, a.jsx)(c.ModalCloseButton, { onClick: er })
                ]
            }),
            (0, a.jsxs)(c.ModalContent, {
                className: _.content,
                onKeyDown: eo,
                children: [
                    null != V &&
                        (0, a.jsx)(c.FormErrorBlock, {
                            className: _.apiErrorBlock,
                            children: V.getAnyErrorMessage()
                        }),
                    (0, a.jsx)(k, {
                        question: D,
                        onChange: H,
                        error: null == Q ? void 0 : Q.question,
                        inputRef: x
                    }),
                    d &&
                        (0, a.jsx)(C.Z, {
                            selectedLayoutType: O,
                            onSelectedLayoutType: L
                        }),
                    (0, a.jsx)(c.Spacer, { size: 26 }),
                    (0, a.jsxs)('fieldset', {
                        className: i()(_.answerInputsContainer, ea ? _.defaultContainer : _.imageOnlyContainer),
                        children: [
                            (0, a.jsx)(c.FormTitle, {
                                tag: c.FormTitleTags.LEGEND,
                                children: w.intl.string(w.t.oMBfeX)
                            }),
                            y.map((e, n) =>
                                (0, a.jsx)(
                                    p.Z,
                                    {
                                        answer: e,
                                        channelId: t.id,
                                        index: n,
                                        isLastAnswer: n === y.length - 1,
                                        onEmojiSelect: z,
                                        onEmojiRemove: K,
                                        layout: O,
                                        onAnswerTextChange: F,
                                        onRemoveAnswer: q,
                                        addAnswer: G,
                                        submitPoll: ei,
                                        answerTextInputRefs: R,
                                        error: null == Q ? void 0 : Q['answer-'.concat(e.localCreationAnswerId)],
                                        canRemoveAnswer: Y,
                                        ref: (e) => (A.current[n] = e),
                                        inputRef: (e) => (R.current[n] = e),
                                        deleteButtonRef: (e) => (S.current[n] = e)
                                    },
                                    e.localCreationAnswerId
                                )
                            ),
                            W &&
                                (0, a.jsxs)(c.Clickable, {
                                    className: i()(ea ? _.addAnswerButtonDefault : _.addAnswerButtonImageOnly, { [_.canRemoveMoreAnswers]: Y }),
                                    onClick: W ? G : void 0,
                                    'aria-label': w.intl.string(w.t.B2UvmZ),
                                    ref: P,
                                    children: [
                                        (0, a.jsx)(c.PlusSmallIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: ea ? _.addAnswerIconDefault : _.addAnswerIconImageOnly
                                        }),
                                        ea &&
                                            (0, a.jsx)(c.Text, {
                                                variant: 'text-md/normal',
                                                color: 'text-muted',
                                                className: _.addAnswerButtonLabel,
                                                children: w.intl.string(w.t.B2UvmZ)
                                            })
                                    ]
                                })
                        ]
                    }),
                    (0, a.jsx)(c.Spacer, { size: 18 }),
                    (0, a.jsx)(N, {
                        selectedDuration: Z,
                        onSelect: U
                    })
                ]
            }),
            (0, a.jsxs)(c.ModalFooter, {
                className: _.footer,
                children: [
                    (0, a.jsx)(c.Checkbox, {
                        className: _.checkbox,
                        type: c.Checkbox.Types.INVERTED,
                        size: 24,
                        value: B,
                        checkboxColor: (0, c.useToken)(c.tokens.colors.INTERACTIVE_NORMAL).hex(),
                        onChange: (e, t) => M(t),
                        children: (0, a.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            children: w.intl.string(w.t['Ux+iQU'])
                        })
                    }),
                    (0, a.jsx)(c.Button, {
                        look: c.ButtonLooks.FILLED,
                        size: c.Button.Sizes.MEDIUM,
                        className: _.postButton,
                        onClick: ei,
                        submitting: X,
                        children: (0, a.jsx)(c.Text, {
                            variant: 'text-md/semibold',
                            className: _.postButtonText,
                            children: w.intl.string(w.t.JOj8Zm)
                        })
                    })
                ]
            })
        ]
    });
}
