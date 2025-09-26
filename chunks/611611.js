n.d(t, { default: () => k }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(525769),
    i = n(693789),
    o = n(886025),
    c = n(82659),
    s = n(755721),
    u = n(481060),
    d = n(240872),
    f = n(213609),
    m = n(542383),
    p = n(79390),
    b = n(728076),
    g = n(2466),
    j = n(485168),
    O = n(309081),
    y = n(489887),
    h = n(20281),
    v = n(388032),
    P = n(520317);
function w(e) {
    let { question: t, onChange: n, error: l, inputRef: a } = e;
    return (0, r.jsx)(u.Kx8, {
        label: v.intl.string(v.t.WBiKnJ),
        inputRef: a,
        placeholder: v.intl.string(v.t["/uQqJS"]),
        value: t,
        onChange: n,
        maxLength: y.Az,
        error: l,
        rows: 1,
        autosize: !0,
        autoFocus: !0,
        showCharacterCount: !0,
    });
}
function x(e) {
    let { selectedDuration: t, onSelect: n } = e,
        l = (0, g.Z)(),
        a = l[t];
    return (0, r.jsxs)("div", {
        className: P.duration,
        children: [
            (0, r.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "header-secondary",
                tag: "label",
                "aria-hidden": !0,
                children: v.intl.string(v.t.bGHzxc),
            }),
            (0, r.jsx)(u.PhF, {
                "aria-label": v.intl.formatToPlainString(v.t.nXNHND, { duration: a }),
                className: P.durationSelect,
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
                    (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        children: e.label,
                    }),
                popoutPosition: "top",
            }),
        ],
    });
}
function k(e) {
    let { channel: t, transitionState: n, onClose: g, initialQuestion: C, initialAnswers: R, initialDuration: E } = e;
    (0, f.Z)({
        type: h.n.MODAL,
        name: a.z.POLL_EDITOR_VIEWED,
    });
    let _ = l.useRef(null),
        S = l.useRef([]),
        D = l.useRef(null),
        A = l.useCallback((e) => {
            var t, n;
            let { indexToRemove: r, numberOfAnswers: l } = e;
            l === y.gY + 1
                ? null == (t = D.current) || t.focus()
                : null == (n = S.current[r === l - 1 ? r - 1 : r + 1]) || n.focusDeleteButton();
        }, []),
        {
            answers: I,
            question: N,
            allowMultiSelect: T,
            setAllowMultiSelect: U,
            duration: L,
            setDuration: Z,
            handleQuestionChange: B,
            handleAnswerTextChange: Y,
            handleEmojiSelect: K,
            canAddMoreAnswers: z,
            handleRemoveAnswerImage: M,
            canRemoveMoreAnswers: H,
            handleAddAnswer: q,
            handleRemoveAnswer: W,
            createPollError: F,
            handleSubmitPoll: G,
            fieldErrors: V,
            submitting: X,
            shouldFocusOnInvalidField: J,
            setShouldFocusOnInvalidField: Q,
        } = (0, b.Z)(t, g, A, {
            initialQuestion: C,
            initialAnswers: R,
            initialDuration: E,
        }),
        { trackPollCreationCancelled: $ } = (0, j.l)(I, T),
        ee = l.useRef(I.length),
        et = l.useCallback(() => {
            $(), g();
        }, [g, $]),
        en = l.useCallback(() => {
            if (!(0, p.D$)(N, I))
                return void d.Z.show({
                    title: v.intl.string(v.t.HMrgcn),
                    body: v.intl.string(v.t["Wxa/j4"]),
                    confirmColor: i.Tt.RED,
                    confirmText: v.intl.string(v.t.TzJA4u),
                    confirmVariant: "critical-primary",
                    cancelText: v.intl.string(v.t["2BR5R0"]),
                    onConfirm: () => {
                        et();
                    },
                });
            et();
        }, [et, I, N]);
    l.useEffect(() => {
        (0, u.oav)(
            y.$z,
            (e) => {
                var n, l;
                return (0, r.jsx)(
                    k,
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
            en,
        );
    }, [en, t]),
        l.useEffect(() => {
            if (I.length > ee.current) {
                var e;
                null == (e = S.current[I.length - 1]) || e.focusInput();
            }
            ee.current = I.length;
        }, [I.length]),
        l.useEffect(() => {
            if (J) {
                var e, t;
                if ((null == V ? void 0 : V.question) != null) null == (e = _.current) || e.focus();
                else {
                    let e = I.findIndex((e) => V["answer-".concat(e.localCreationAnswerId)]);
                    -1 !== e && (null == (t = S.current[e]) || t.focusInput());
                }
                Q(!1);
            }
        }, [V, I, J, Q, S]);
    let er = l.useCallback(() => {
            n === u.Dvm.ENTERED && G();
        }, [G, n]),
        el = (0, m.Z)({
            disabled: X,
            onSubmit: er,
        }),
        ea = l.useMemo(
            () => [
                {
                    variant: "primary",
                    onClick: er,
                    submitting: X,
                    text: v.intl.string(v.t.JOj8Zm),
                },
            ],
            [er, X],
        );
    return (0, r.jsx)(c.Modal, {
        transitionState: n,
        onClose: g,
        title: v.intl.string(v.t["GD/8X1"]),
        actions: ea,
        actionBarInput: (0, r.jsx)(s.$q, {
            className: P.checkbox,
            size: 24,
            value: T,
            onChange: (e, t) => U(t),
            children: (0, r.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "interactive-active",
                children: v.intl.string(v.t["Ux+iQU"]),
            }),
        }),
        children: (0, r.jsxs)("div", {
            className: P.content,
            onKeyDown: el,
            children: [
                null != F &&
                    (0, r.jsx)(u.kzN, {
                        className: P.apiErrorBlock,
                        children: F.getAnyErrorMessage(),
                    }),
                (0, r.jsx)(w, {
                    question: N,
                    onChange: B,
                    error: null == V ? void 0 : V.question,
                    inputRef: _,
                }),
                (0, r.jsx)(u.LZC, { size: 26 }),
                (0, r.jsxs)(o.N, {
                    role: "group",
                    label: v.intl.string(v.t.oMBfeX),
                    children: [
                        I.map((e, n) =>
                            (0, r.jsx)(
                                O.Z,
                                {
                                    answer: e,
                                    channelId: t.id,
                                    index: n,
                                    isLastAnswer: n === I.length - 1,
                                    onEmojiSelect: K,
                                    onEmojiRemove: M,
                                    onAnswerTextChange: Y,
                                    onRemoveAnswer: W,
                                    addAnswer: q,
                                    submitPoll: er,
                                    answerRowRefs: S,
                                    error: null == V ? void 0 : V["answer-".concat(e.localCreationAnswerId)],
                                    canRemoveAnswer: H,
                                    ref: (e) => {
                                        S.current[n] = e;
                                    },
                                },
                                e.localCreationAnswerId,
                            ),
                        ),
                        z &&
                            (0, r.jsx)("div", {
                                className: P.addAnswerButton,
                                children: (0, r.jsx)(u.zxk, {
                                    icon: u.qJs,
                                    variant: "secondary",
                                    onClick: q,
                                    "aria-label": v.intl.string(v.t.B2UvmZ),
                                    buttonRef: D,
                                    text: v.intl.string(v.t.B2UvmZ),
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(u.LZC, { size: 18 }),
                (0, r.jsx)(x, {
                    selectedDuration: L,
                    onSelect: Z,
                }),
            ],
        }),
    });
}
