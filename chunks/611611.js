n.d(t, { default: () => x }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(525769),
    i = n(793030),
    o = n(693789),
    c = n(755721),
    s = n(481060),
    u = n(240872),
    d = n(213609),
    f = n(542383),
    m = n(79390),
    p = n(728076),
    b = n(2466),
    g = n(485168),
    j = n(309081),
    O = n(489887),
    y = n(20281),
    h = n(388032),
    v = n(520317);
function P(e) {
    let { question: t, onChange: n, error: l, inputRef: a } = e;
    return (0, r.jsx)(s.Kx8, {
        label: h.intl.string(h.t.WBiKnJ),
        inputRef: a,
        placeholder: h.intl.string(h.t["/uQqJS"]),
        value: t,
        onChange: n,
        maxLength: O.Az,
        error: l,
        rows: 1,
        autosize: !0,
        autoFocus: !0,
        showCharacterCount: !0,
    });
}
function w(e) {
    let { selectedDuration: t, onSelect: n } = e,
        l = (0, b.Z)(),
        a = l[t];
    return (0, r.jsxs)("div", {
        className: v.duration,
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                color: "header-secondary",
                tag: "label",
                "aria-hidden": !0,
                children: h.intl.string(h.t.bGHzxc),
            }),
            (0, r.jsx)(s.PhF, {
                "aria-label": h.intl.formatToPlainString(h.t.nXNHND, { duration: a }),
                className: v.durationSelect,
                options: Object.entries(l).map((e) => {
                    let [t, n] = e;
                    return {
                        label: n,
                        value: parseInt(t),
                    };
                }),
                isSelected: (e) => e === t,
                select: n,
                serialize: (e) => "".concat(e),
                renderOptionLabel: (e) =>
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: e.label,
                    }),
                popoutPosition: "top",
            }),
        ],
    });
}
function x(e) {
    let { channel: t, transitionState: n, onClose: b, initialQuestion: k, initialAnswers: C, initialDuration: R } = e;
    (0, d.Z)({
        type: y.n.MODAL,
        name: a.z.POLL_EDITOR_VIEWED,
    });
    let E = l.useRef(null),
        _ = l.useRef([]),
        S = l.useRef(null),
        D = l.useCallback((e) => {
            var t, n;
            let { indexToRemove: r, numberOfAnswers: l } = e;
            l === O.gY + 1
                ? null == (t = S.current) || t.focus()
                : null == (n = _.current[r === l - 1 ? r - 1 : r + 1]) || n.focusDeleteButton();
        }, []),
        {
            answers: A,
            question: I,
            allowMultiSelect: N,
            setAllowMultiSelect: L,
            duration: U,
            setDuration: T,
            handleQuestionChange: Z,
            handleAnswerTextChange: B,
            handleEmojiSelect: Y,
            canAddMoreAnswers: K,
            handleRemoveAnswerImage: z,
            canRemoveMoreAnswers: M,
            handleAddAnswer: H,
            handleRemoveAnswer: q,
            createPollError: W,
            handleSubmitPoll: F,
            fieldErrors: G,
            submitting: V,
            shouldFocusOnInvalidField: X,
            setShouldFocusOnInvalidField: J,
        } = (0, p.Z)(t, b, D, {
            initialQuestion: k,
            initialAnswers: C,
            initialDuration: R,
        }),
        { trackPollCreationCancelled: Q } = (0, g.l)(A, N),
        $ = l.useRef(A.length),
        ee = l.useCallback(() => {
            Q(), b();
        }, [b, Q]),
        et = l.useCallback(() => {
            if (!(0, m.D$)(I, A))
                return void u.Z.show({
                    title: h.intl.string(h.t.HMrgcn),
                    body: h.intl.string(h.t["Wxa/j4"]),
                    confirmColor: o.Tt.RED,
                    confirmText: h.intl.string(h.t.TzJA4u),
                    confirmVariant: "critical-primary",
                    cancelText: h.intl.string(h.t["2BR5R0"]),
                    onConfirm: () => {
                        ee();
                    },
                });
            ee();
        }, [ee, A, I]);
    l.useEffect(() => {
        (0, s.oav)(
            O.$z,
            (e) => {
                var n, l;
                return (0, r.jsx)(
                    x,
                    ((n = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, e)),
                    (l = l = { channel: t }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    n),
                );
            },
            et,
        );
    }, [et, t]),
        l.useEffect(() => {
            if (A.length > $.current) {
                var e;
                null == (e = _.current[A.length - 1]) || e.focusInput();
            }
            $.current = A.length;
        }, [A.length]),
        l.useEffect(() => {
            if (X) {
                var e, t;
                if ((null == G ? void 0 : G.question) != null) null == (e = E.current) || e.focus();
                else {
                    let e = A.findIndex((e) => G["answer-".concat(e.localCreationAnswerId)]);
                    -1 !== e && (null == (t = _.current[e]) || t.focusInput());
                }
                J(!1);
            }
        }, [G, A, X, J, _]);
    let en = l.useCallback(() => {
            n === s.Dvm.ENTERED && F();
        }, [F, n]),
        er = (0, f.Z)({
            disabled: V,
            onSubmit: en,
        }),
        el = l.useMemo(
            () => [
                {
                    variant: "primary",
                    onClick: en,
                    submitting: V,
                    text: h.intl.string(h.t.JOj8Zm),
                },
            ],
            [en, V],
        );
    return (0, r.jsx)(i.Modal, {
        transitionState: n,
        onClose: b,
        title: h.intl.string(h.t["GD/8X1"]),
        actions: el,
        actionBarInput: (0, r.jsx)(c.VL, {
            className: v.checkbox,
            checked: N,
            onChange: (e) => L(e),
            label: h.intl.string(h.t["Ux+iQU"]),
        }),
        children: (0, r.jsxs)("div", {
            className: v.content,
            onKeyDown: er,
            children: [
                null != W &&
                    (0, r.jsx)(s.kzN, {
                        className: v.apiErrorBlock,
                        children: W.getAnyErrorMessage(),
                    }),
                (0, r.jsx)(P, {
                    question: I,
                    onChange: Z,
                    error: null == G ? void 0 : G.question,
                    inputRef: E,
                }),
                (0, r.jsx)(s.LZC, { size: 26 }),
                (0, r.jsxs)(s.gNt, {
                    role: "group",
                    label: h.intl.string(h.t.oMBfeX),
                    children: [
                        A.map((e, n) =>
                            (0, r.jsx)(
                                j.Z,
                                {
                                    answer: e,
                                    channelId: t.id,
                                    index: n,
                                    isLastAnswer: n === A.length - 1,
                                    onEmojiSelect: Y,
                                    onEmojiRemove: z,
                                    onAnswerTextChange: B,
                                    onRemoveAnswer: q,
                                    addAnswer: H,
                                    submitPoll: en,
                                    answerRowRefs: _,
                                    error: null == G ? void 0 : G["answer-".concat(e.localCreationAnswerId)],
                                    canRemoveAnswer: M,
                                    ref: (e) => {
                                        _.current[n] = e;
                                    },
                                },
                                e.localCreationAnswerId,
                            ),
                        ),
                        K &&
                            (0, r.jsx)("div", {
                                className: v.addAnswerButton,
                                children: (0, r.jsx)(s.zxk, {
                                    icon: s.qJs,
                                    variant: "secondary",
                                    onClick: H,
                                    "aria-label": h.intl.string(h.t.B2UvmZ),
                                    buttonRef: S,
                                    text: h.intl.string(h.t.B2UvmZ),
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(s.LZC, { size: 18 }),
                (0, r.jsx)(w, {
                    selectedDuration: U,
                    onSelect: T,
                }),
            ],
        }),
    });
}
