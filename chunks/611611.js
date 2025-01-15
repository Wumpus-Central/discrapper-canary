n.r(t),
    n.d(t, {
        default: function () {
            return R;
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
    m = n(540059),
    f = n(542383),
    h = n(79390),
    x = n(728076),
    g = n(2466),
    p = n(485168),
    C = n(309081),
    v = n(185306),
    j = n(240521),
    I = n(489887),
    w = n(20281),
    _ = n(388032),
    b = n(841916);
let A = (0, d.hQ)(),
    k = (0, d.hQ)();
function N(e) {
    let { question: t, onChange: n, error: r, inputRef: o } = e,
        [s, u] = l.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.FormTitle, {
                tag: c.FormTitleTags.LABEL,
                htmlFor: k,
                children: _.intl.string(_.t.WBiKnJ)
            }),
            (0, a.jsx)(c.TextArea, {
                inputRef: o,
                id: k,
                placeholder: _.intl.string(_.t['/uQqJS']),
                value: t,
                className: i()(b.questionInput, { [b.hasError]: null != r }),
                onChange: n,
                maxLength: I.Az,
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
function E(e) {
    let { selectedDuration: t, onSelect: n } = e,
        l = (0, g.Z)(),
        r = l[t];
    return (0, a.jsxs)('div', {
        className: b.duration,
        children: [
            (0, a.jsx)(c.Text, {
                variant: 'text-md/medium',
                color: 'header-secondary',
                tag: 'label',
                'aria-hidden': !0,
                children: _.intl.string(_.t.bGHzxc)
            }),
            (0, a.jsx)(c.Select, {
                'aria-label': _.intl.formatToPlainString(_.t.nXNHND, { duration: r }),
                className: b.durationSelect,
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
function R(e) {
    let { channel: t, transitionState: n, onClose: r } = e,
        d = (0, h._N)();
    (0, u.Z)({
        type: w.n.MODAL,
        name: o.z.POLL_EDITOR_VIEWED
    });
    let g = l.useRef(null),
        k = l.useRef([]),
        P = l.useRef([]),
        S = l.useRef(null),
        T = l.useRef([]),
        y = l.useCallback((e) => {
            var t, n, a, l;
            let { indexToRemove: r, numberOfAnswers: i } = e;
            i === I.gY + 1 ? null === (n = S.current) || void 0 === n || null === (t = n.ref) || void 0 === t || t.focus() : null === (l = T.current[r === i - 1 ? r - 1 : r + 1]) || void 0 === l || null === (a = l.ref) || void 0 === a || a.focus();
        }, []),
        { answers: D, question: O, selectedLayoutType: L, setSelectedLayoutType: B, allowMultiSelect: M, setAllowMultiSelect: Z, duration: U, setDuration: H, handleQuestionChange: F, handleAnswerTextChange: z, handleEmojiSelect: W, canAddMoreAnswers: K, handleRemoveAnswerImage: Y, canRemoveMoreAnswers: G, handleAddAnswer: q, handleRemoveAnswer: V, createPollError: J, handleSubmitPoll: Q, fieldErrors: X, submitting: $, shouldFocusOnInvalidField: ee, setShouldFocusOnInvalidField: et } = (0, x.Z)(t, r, y),
        { trackPollCreationCancelled: en } = (0, p.l)(D, M, L),
        ea = (0, m.Q3)('PollCreationModal'),
        el = (0, c.useToken)(c.tokens.colors.INTERACTIVE_NORMAL).hex(),
        er = l.useRef(D.length),
        ei = L === s.C.DEFAULT,
        eo = l.useCallback(() => {
            en(), r();
        }, [r, en]),
        es = l.useCallback(() => {
            if ((0, h.D$)(O, D, L)) eo();
            else {
                (0, j.Z)({
                    title: _.intl.string(_.t.HMrgcn),
                    body: _.intl.string(_.t['Wxa/j4']),
                    cta: _.intl.string(_.t.TzJA4u),
                    closeLabel: _.intl.string(_.t['2BR5R0']),
                    onConfirm: () => {
                        eo();
                    }
                });
                return;
            }
        }, [eo, D, O, L]);
    l.useEffect(() => {
        (0, c.updateModal)(
            I.$z,
            (e) =>
                (0, a.jsx)(R, {
                    ...e,
                    channel: t
                }),
            es
        );
    }, [es, t]),
        l.useEffect(() => {
            if (D.length > er.current) {
                var e;
                null === (e = P.current[D.length - 1]) || void 0 === e || e.focus();
            }
            er.current = D.length;
        }, [D.length]),
        l.useEffect(() => {
            if (ee) {
                var e, t;
                if ((null == X ? void 0 : X.question) != null) null === (e = g.current) || void 0 === e || e.focus();
                else {
                    let e = D.findIndex((e) => X['answer-'.concat(e.localCreationAnswerId)]);
                    -1 !== e && (null === (t = P.current[e]) || void 0 === t || t.focus());
                }
                et(!1);
            }
        }, [X, D, ee, et, P, k]);
    let ec = () => {
            n === c.ModalTransitionState.ENTERED && Q();
        },
        eu = (0, f.Z)({
            disabled: $,
            onSubmit: ec
        });
    return (0, a.jsxs)(c.ModalRoot, {
        size: c.ModalSize.MEDIUM,
        className: b.container,
        transitionState: n,
        'aria-labelledby': A,
        children: [
            (0, a.jsxs)(c.ModalHeader, {
                className: b.header,
                separator: !1,
                children: [
                    (0, a.jsx)(c.Heading, {
                        color: 'interactive-normal',
                        variant: 'text-lg/semibold',
                        className: b.headerText,
                        id: A,
                        children: _.intl.string(_.t['GD/8X1'])
                    }),
                    (0, a.jsx)(c.ModalCloseButton, { onClick: es })
                ]
            }),
            (0, a.jsxs)(c.ModalContent, {
                className: b.content,
                onKeyDown: eu,
                children: [
                    null != J &&
                        (0, a.jsx)(c.FormErrorBlock, {
                            className: b.apiErrorBlock,
                            children: J.getAnyErrorMessage()
                        }),
                    (0, a.jsx)(N, {
                        question: O,
                        onChange: F,
                        error: null == X ? void 0 : X.question,
                        inputRef: g
                    }),
                    d &&
                        (0, a.jsx)(v.Z, {
                            selectedLayoutType: L,
                            onSelectedLayoutType: B
                        }),
                    (0, a.jsx)(c.Spacer, { size: 26 }),
                    (0, a.jsxs)('fieldset', {
                        className: i()(b.answerInputsContainer, ei ? b.defaultContainer : b.imageOnlyContainer),
                        children: [
                            (0, a.jsx)(c.FormTitle, {
                                tag: c.FormTitleTags.LEGEND,
                                children: _.intl.string(_.t.oMBfeX)
                            }),
                            D.map((e, n) =>
                                (0, a.jsx)(
                                    C.Z,
                                    {
                                        answer: e,
                                        channelId: t.id,
                                        index: n,
                                        isLastAnswer: n === D.length - 1,
                                        onEmojiSelect: W,
                                        onEmojiRemove: Y,
                                        layout: L,
                                        onAnswerTextChange: z,
                                        onRemoveAnswer: V,
                                        addAnswer: q,
                                        submitPoll: ec,
                                        answerTextInputRefs: P,
                                        error: null == X ? void 0 : X['answer-'.concat(e.localCreationAnswerId)],
                                        canRemoveAnswer: G,
                                        ref: (e) => (k.current[n] = e),
                                        inputRef: (e) => (P.current[n] = e),
                                        deleteButtonRef: (e) => (T.current[n] = e)
                                    },
                                    e.localCreationAnswerId
                                )
                            ),
                            K &&
                                (0, a.jsxs)(c.Clickable, {
                                    className: i()(ei ? b.addAnswerButtonDefault : b.addAnswerButtonImageOnly, { [b.canRemoveMoreAnswers]: G }),
                                    onClick: K ? q : void 0,
                                    'aria-label': _.intl.string(_.t.B2UvmZ),
                                    ref: S,
                                    children: [
                                        (0, a.jsx)(c.PlusSmallIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: ei ? b.addAnswerIconDefault : b.addAnswerIconImageOnly
                                        }),
                                        ei &&
                                            (0, a.jsx)(c.Text, {
                                                variant: 'text-md/normal',
                                                color: 'text-muted',
                                                className: b.addAnswerButtonLabel,
                                                children: _.intl.string(_.t.B2UvmZ)
                                            })
                                    ]
                                })
                        ]
                    }),
                    (0, a.jsx)(c.Spacer, { size: 18 }),
                    (0, a.jsx)(E, {
                        selectedDuration: U,
                        onSelect: H
                    })
                ]
            }),
            (0, a.jsxs)(c.ModalFooter, {
                className: b.footer,
                children: [
                    (0, a.jsx)(c.Checkbox, {
                        className: b.checkbox,
                        type: ea ? void 0 : c.Checkbox.Types.INVERTED,
                        size: 24,
                        value: M,
                        checkboxColor: ea ? void 0 : el,
                        onChange: (e, t) => Z(t),
                        children: (0, a.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            children: _.intl.string(_.t['Ux+iQU'])
                        })
                    }),
                    (0, a.jsx)(c.Button, {
                        look: c.ButtonLooks.FILLED,
                        size: c.Button.Sizes.MEDIUM,
                        className: b.postButton,
                        onClick: ec,
                        submitting: $,
                        children: (0, a.jsx)(c.Text, {
                            variant: 'text-md/semibold',
                            className: b.postButtonText,
                            children: _.intl.string(_.t.JOj8Zm)
                        })
                    })
                ]
            })
        ]
    });
}
