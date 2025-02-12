n.d(t, { default: () => k }), n(47120);
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
    _ = n(309081),
    C = n(185306),
    b = n(240521),
    v = n(489887),
    j = n(20281),
    w = n(388032),
    A = n(583609);
let I = (0, d.hQ)(),
    N = (0, d.hQ)();
function E(e) {
    let { question: t, onChange: n, error: r, inputRef: o } = e,
        [s, u] = l.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.vwX, {
                tag: c.RB0.LABEL,
                htmlFor: N,
                children: w.intl.string(w.t.WBiKnJ)
            }),
            (0, a.jsx)(c.Kx8, {
                inputRef: o,
                id: N,
                placeholder: w.intl.string(w.t['/uQqJS']),
                value: t,
                className: i()(A.questionInput, { [A.hasError]: null != r }),
                onChange: n,
                maxLength: v.Az,
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
function R(e) {
    let { selectedDuration: t, onSelect: n } = e,
        l = (0, g.Z)(),
        r = l[t];
    return (0, a.jsxs)('div', {
        className: A.duration,
        children: [
            (0, a.jsx)(c.Text, {
                variant: 'text-md/medium',
                color: 'header-secondary',
                tag: 'label',
                'aria-hidden': !0,
                children: w.intl.string(w.t.bGHzxc)
            }),
            (0, a.jsx)(c.PhF, {
                'aria-label': w.intl.formatToPlainString(w.t.nXNHND, { duration: r }),
                className: A.durationSelect,
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
function k(e) {
    let { channel: t, transitionState: n, onClose: r } = e,
        d = (0, h._N)();
    (0, u.Z)({
        type: j.n.MODAL,
        name: o.z.POLL_EDITOR_VIEWED
    });
    let g = l.useRef(null),
        N = l.useRef([]),
        P = l.useRef([]),
        y = l.useRef(null),
        D = l.useRef([]),
        S = l.useCallback((e) => {
            var t, n, a, l;
            let { indexToRemove: r, numberOfAnswers: i } = e;
            i === v.gY + 1 ? null === (n = y.current) || void 0 === n || null === (t = n.ref) || void 0 === t || t.focus() : null === (l = D.current[r === i - 1 ? r - 1 : r + 1]) || void 0 === l || null === (a = l.ref) || void 0 === a || a.focus();
        }, []),
        { answers: O, question: T, selectedLayoutType: L, setSelectedLayoutType: B, allowMultiSelect: Z, setAllowMultiSelect: U, duration: M, setDuration: z, handleQuestionChange: W, handleAnswerTextChange: H, handleEmojiSelect: F, canAddMoreAnswers: Y, handleRemoveAnswerImage: K, canRemoveMoreAnswers: q, handleAddAnswer: X, handleRemoveAnswer: J, createPollError: G, handleSubmitPoll: Q, fieldErrors: V, submitting: $, shouldFocusOnInvalidField: ee, setShouldFocusOnInvalidField: et } = (0, x.Z)(t, r, S),
        { trackPollCreationCancelled: en } = (0, p.l)(O, Z, L),
        ea = (0, m.Q3)('PollCreationModal'),
        el = (0, c.dQu)(c.TVs.colors.INTERACTIVE_NORMAL).hex(),
        er = l.useRef(O.length),
        ei = L === s.C.DEFAULT,
        eo = l.useCallback(() => {
            en(), r();
        }, [r, en]),
        es = l.useCallback(() => {
            if ((0, h.D$)(T, O, L)) eo();
            else {
                (0, b.Z)({
                    title: w.intl.string(w.t.HMrgcn),
                    body: w.intl.string(w.t['Wxa/j4']),
                    cta: w.intl.string(w.t.TzJA4u),
                    closeLabel: w.intl.string(w.t['2BR5R0']),
                    onConfirm: () => {
                        eo();
                    }
                });
                return;
            }
        }, [eo, O, T, L]);
    l.useEffect(() => {
        (0, c.oav)(
            v.$z,
            (e) =>
                (0, a.jsx)(k, {
                    ...e,
                    channel: t
                }),
            es
        );
    }, [es, t]),
        l.useEffect(() => {
            if (O.length > er.current) {
                var e;
                null === (e = P.current[O.length - 1]) || void 0 === e || e.focus();
            }
            er.current = O.length;
        }, [O.length]),
        l.useEffect(() => {
            if (ee) {
                var e, t;
                if ((null == V ? void 0 : V.question) != null) null === (e = g.current) || void 0 === e || e.focus();
                else {
                    let e = O.findIndex((e) => V['answer-'.concat(e.localCreationAnswerId)]);
                    -1 !== e && (null === (t = P.current[e]) || void 0 === t || t.focus());
                }
                et(!1);
            }
        }, [V, O, ee, et, P, N]);
    let ec = () => {
            n === c.Dvm.ENTERED && Q();
        },
        eu = (0, f.Z)({
            disabled: $,
            onSubmit: ec
        });
    return (0, a.jsxs)(c.Y0X, {
        size: c.CgR.MEDIUM,
        className: A.container,
        transitionState: n,
        'aria-labelledby': I,
        children: [
            (0, a.jsxs)(c.xBx, {
                className: A.header,
                separator: !1,
                children: [
                    (0, a.jsx)(c.X6q, {
                        color: 'interactive-normal',
                        variant: 'text-lg/semibold',
                        className: A.headerText,
                        id: I,
                        children: w.intl.string(w.t['GD/8X1'])
                    }),
                    (0, a.jsx)(c.olH, { onClick: es })
                ]
            }),
            (0, a.jsxs)(c.hzk, {
                className: A.content,
                onKeyDown: eu,
                children: [
                    null != G &&
                        (0, a.jsx)(c.kzN, {
                            className: A.apiErrorBlock,
                            children: G.getAnyErrorMessage()
                        }),
                    (0, a.jsx)(E, {
                        question: T,
                        onChange: W,
                        error: null == V ? void 0 : V.question,
                        inputRef: g
                    }),
                    d &&
                        (0, a.jsx)(C.Z, {
                            selectedLayoutType: L,
                            onSelectedLayoutType: B
                        }),
                    (0, a.jsx)(c.LZC, { size: 26 }),
                    (0, a.jsxs)('fieldset', {
                        className: i()(A.answerInputsContainer, ei ? A.defaultContainer : A.imageOnlyContainer),
                        children: [
                            (0, a.jsx)(c.vwX, {
                                tag: c.RB0.LEGEND,
                                children: w.intl.string(w.t.oMBfeX)
                            }),
                            O.map((e, n) =>
                                (0, a.jsx)(
                                    _.Z,
                                    {
                                        answer: e,
                                        channelId: t.id,
                                        index: n,
                                        isLastAnswer: n === O.length - 1,
                                        onEmojiSelect: F,
                                        onEmojiRemove: K,
                                        layout: L,
                                        onAnswerTextChange: H,
                                        onRemoveAnswer: J,
                                        addAnswer: X,
                                        submitPoll: ec,
                                        answerTextInputRefs: P,
                                        error: null == V ? void 0 : V['answer-'.concat(e.localCreationAnswerId)],
                                        canRemoveAnswer: q,
                                        ref: (e) => (N.current[n] = e),
                                        inputRef: (e) => (P.current[n] = e),
                                        deleteButtonRef: (e) => (D.current[n] = e)
                                    },
                                    e.localCreationAnswerId
                                )
                            ),
                            Y &&
                                (0, a.jsxs)(c.P3F, {
                                    className: i()(ei ? A.addAnswerButtonDefault : A.addAnswerButtonImageOnly, { [A.canRemoveMoreAnswers]: q }),
                                    onClick: Y ? X : void 0,
                                    'aria-label': w.intl.string(w.t.B2UvmZ),
                                    ref: y,
                                    children: [
                                        (0, a.jsx)(c.qJs, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: ei ? A.addAnswerIconDefault : A.addAnswerIconImageOnly
                                        }),
                                        ei &&
                                            (0, a.jsx)(c.Text, {
                                                variant: 'text-md/normal',
                                                color: 'text-muted',
                                                className: A.addAnswerButtonLabel,
                                                children: w.intl.string(w.t.B2UvmZ)
                                            })
                                    ]
                                })
                        ]
                    }),
                    (0, a.jsx)(c.LZC, { size: 18 }),
                    (0, a.jsx)(R, {
                        selectedDuration: M,
                        onSelect: z
                    })
                ]
            }),
            (0, a.jsxs)(c.mzw, {
                className: A.footer,
                children: [
                    (0, a.jsx)(c.XZJ, {
                        className: A.checkbox,
                        type: ea ? void 0 : c.XZJ.Types.INVERTED,
                        size: 24,
                        value: Z,
                        checkboxColor: ea ? void 0 : el,
                        onChange: (e, t) => U(t),
                        children: (0, a.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            children: w.intl.string(w.t['Ux+iQU'])
                        })
                    }),
                    (0, a.jsx)(c.zxk, {
                        look: c.iLD.FILLED,
                        size: c.zxk.Sizes.MEDIUM,
                        className: A.postButton,
                        onClick: ec,
                        submitting: $,
                        children: (0, a.jsx)(c.Text, {
                            variant: 'text-md/semibold',
                            className: A.postButtonText,
                            children: w.intl.string(w.t.JOj8Zm)
                        })
                    })
                ]
            })
        ]
    });
}
