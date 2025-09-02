n.d(t, { default: () => k }), n(388685);
var r = n(951288),
    a = n(647438),
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
    P = n(520317);
let C = (0, p.hQ)();
function _(e) {
    let { question: t, onChange: n, error: l, inputRef: i } = e,
        [o, s] = a.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.vwX, {
                tag: d.RB0.LABEL,
                htmlFor: C,
                children: y.intl.string(y.t.WBiKnJ),
            }),
            (0, r.jsx)(d.Kx8, {
                inputRef: i,
                id: C,
                placeholder: y.intl.string(y.t["/uQqJS"]),
                value: t,
                onChange: n,
                maxLength: x.Az,
                error: l,
                onFocus: () => s(!0),
                onBlur: () => s(!1),
                showCharacterCount: o,
                showRemainingCharacterCount: o,
                rows: 1,
                autosize: !0,
                autoFocus: !0,
            }),
        ],
    });
}
function R(e) {
    let { selectedDuration: t, onSelect: n } = e,
        a = (0, j.Z)(),
        l = a[t];
    return (0, r.jsxs)("div", {
        className: P.duration,
        children: [
            (0, r.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "header-secondary",
                tag: "label",
                "aria-hidden": !0,
                children: y.intl.string(y.t.bGHzxc),
            }),
            (0, r.jsx)(d.PhF, {
                "aria-label": y.intl.formatToPlainString(y.t.nXNHND, { duration: l }),
                className: P.durationSelect,
                options: Object.entries(a).map((e) => {
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
                    (0, r.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        children: e.label,
                    }),
                popoutPosition: "top",
            }),
        ],
    });
}
function k(e) {
    let { channel: t, transitionState: n, onClose: l, initialQuestion: p, initialAnswers: j, initialDuration: C } = e;
    (0, m.Z)({
        type: O.n.MODAL,
        name: o.z.POLL_EDITOR_VIEWED,
    });
    let A = a.useRef(null),
        E = a.useRef([]),
        D = a.useRef([]),
        S = a.useRef(null),
        I = a.useRef([]),
        N = a.useCallback((e) => {
            var t, n, r, a;
            let { indexToRemove: l, numberOfAnswers: i } = e;
            i === x.gY + 1
                ? null == (n = S.current) || null == (t = n.ref) || t.focus()
                : null == (a = I.current[l === i - 1 ? l - 1 : l + 1]) || null == (r = a.ref) || r.focus();
        }, []),
        {
            answers: T,
            question: L,
            allowMultiSelect: B,
            setAllowMultiSelect: U,
            duration: Z,
            setDuration: Y,
            handleQuestionChange: K,
            handleAnswerTextChange: z,
            handleEmojiSelect: M,
            canAddMoreAnswers: W,
            handleRemoveAnswerImage: F,
            canRemoveMoreAnswers: q,
            handleAddAnswer: H,
            handleRemoveAnswer: G,
            createPollError: X,
            handleSubmitPoll: V,
            fieldErrors: Q,
            submitting: J,
            shouldFocusOnInvalidField: $,
            setShouldFocusOnInvalidField: ee,
        } = (0, h.Z)(t, l, N, {
            initialQuestion: p,
            initialAnswers: j,
            initialDuration: C,
        }),
        { trackPollCreationCancelled: et } = (0, v.l)(T, B),
        en = a.useRef(T.length),
        er = a.useCallback(() => {
            et(), l();
        }, [l, et]),
        ea = a.useCallback(() => {
            if (!(0, g.D$)(L, T))
                return void f.Z.show({
                    title: y.intl.string(y.t.HMrgcn),
                    body: y.intl.string(y.t["Wxa/j4"]),
                    confirmColor: s.Tt.RED,
                    confirmText: y.intl.string(y.t.TzJA4u),
                    confirmVariant: "critical-primary",
                    cancelText: y.intl.string(y.t["2BR5R0"]),
                    onConfirm: () => {
                        er();
                    },
                });
            er();
        }, [er, T, L]);
    a.useEffect(() => {
        (0, d.oav)(
            x.$z,
            (e) => {
                var n, a;
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
                    n),
                );
            },
            ea,
        );
    }, [ea, t]),
        a.useEffect(() => {
            if (T.length > en.current) {
                var e;
                null == (e = D.current[T.length - 1]) || e.focus();
            }
            en.current = T.length;
        }, [T.length]),
        a.useEffect(() => {
            if ($) {
                var e, t;
                if ((null == Q ? void 0 : Q.question) != null) null == (e = A.current) || e.focus();
                else {
                    let e = T.findIndex((e) => Q["answer-".concat(e.localCreationAnswerId)]);
                    -1 !== e && (null == (t = D.current[e]) || t.focus());
                }
                ee(!1);
            }
        }, [Q, T, $, ee, D, E]);
    let el = a.useCallback(() => {
            n === d.Dvm.ENTERED && V();
        }, [V, n]),
        ei = (0, b.Z)({
            disabled: J,
            onSubmit: el,
        }),
        eo = a.useMemo(
            () => [
                {
                    variant: "primary",
                    onClick: el,
                    submitting: J,
                    text: y.intl.string(y.t.JOj8Zm),
                },
            ],
            [el, J],
        );
    return (0, r.jsx)(c.Modal, {
        transitionState: n,
        onClose: l,
        title: y.intl.string(y.t["GD/8X1"]),
        actions: eo,
        actionBarInput: (0, r.jsx)(u.$q, {
            className: P.checkbox,
            size: 24,
            value: B,
            onChange: (e, t) => U(t),
            children: (0, r.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "interactive-active",
                children: y.intl.string(y.t["Ux+iQU"]),
            }),
        }),
        children: (0, r.jsxs)("div", {
            className: P.content,
            onKeyDown: ei,
            children: [
                null != X &&
                    (0, r.jsx)(d.kzN, {
                        className: P.apiErrorBlock,
                        children: X.getAnyErrorMessage(),
                    }),
                (0, r.jsx)(_, {
                    question: L,
                    onChange: K,
                    error: null == Q ? void 0 : Q.question,
                    inputRef: A,
                }),
                (0, r.jsx)(d.LZC, { size: 26 }),
                (0, r.jsxs)("fieldset", {
                    className: i()(P.answerInputsContainer, P.defaultContainer),
                    children: [
                        (0, r.jsx)(d.vwX, {
                            tag: d.RB0.LEGEND,
                            children: y.intl.string(y.t.oMBfeX),
                        }),
                        T.map((e, n) =>
                            (0, r.jsx)(
                                w.Z,
                                {
                                    answer: e,
                                    channelId: t.id,
                                    index: n,
                                    isLastAnswer: n === T.length - 1,
                                    onEmojiSelect: M,
                                    onEmojiRemove: F,
                                    onAnswerTextChange: z,
                                    onRemoveAnswer: G,
                                    addAnswer: H,
                                    submitPoll: el,
                                    answerTextInputRefs: D,
                                    error: null == Q ? void 0 : Q["answer-".concat(e.localCreationAnswerId)],
                                    canRemoveAnswer: q,
                                    ref: (e) => {
                                        E.current[n] = e;
                                    },
                                    inputRef: (e) => {
                                        D.current[n] = e;
                                    },
                                    deleteButtonRef: (e) => {
                                        I.current[n] = e;
                                    },
                                },
                                e.localCreationAnswerId,
                            ),
                        ),
                        W &&
                            (0, r.jsxs)(d.P3F, {
                                className: i()(P.addAnswerButtonDefault, { [P.canRemoveMoreAnswers]: q }),
                                onClick: W ? H : void 0,
                                "aria-label": y.intl.string(y.t.B2UvmZ),
                                ref: S,
                                children: [
                                    (0, r.jsx)(d.qJs, {
                                        size: "md",
                                        color: "currentColor",
                                        className: P.addAnswerIconDefault,
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        className: P.addAnswerButtonLabel,
                                        children: y.intl.string(y.t.B2UvmZ),
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, r.jsx)(d.LZC, { size: 18 }),
                (0, r.jsx)(R, {
                    selectedDuration: Z,
                    onSelect: Y,
                }),
            ],
        }),
    });
}
