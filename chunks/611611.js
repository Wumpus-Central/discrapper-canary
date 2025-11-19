n.d(t, { default: () => P }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(525769),
    i = n(793030),
    o = n(481060),
    c = n(240872),
    s = n(213609),
    u = n(542383),
    f = n(79390),
    d = n(728076),
    m = n(2466),
    p = n(485168),
    b = n(309081),
    g = n(489887),
    j = n(20281),
    O = n(388032),
    y = n(931975);
function v(e) {
    let { question: t, onChange: n, error: l, inputRef: a } = e;
    return (0, r.jsx)(o.Kx8, {
        label: O.intl.string(O.t.WBiKnI),
        inputRef: a,
        placeholder: O.intl.string(O.t["/uQqJW"]),
        value: t,
        onChange: n,
        maxLength: g.Az,
        error: l,
        rows: 1,
        autosize: !0,
        autoFocus: !0,
        showCharacterCount: !0,
    });
}
function h(e) {
    let { selectedDuration: t, onSelect: n } = e,
        l = (0, m.Z)(),
        a = l[t];
    return (0, r.jsx)("div", {
        className: y.duration,
        children: (0, r.jsx)(o.PhF, {
            label: O.intl.string(O.t.bGHzxb),
            "aria-label": O.intl.formatToPlainString(O.t.nXNHNJ, { duration: a }),
            className: y.durationSelect,
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
            popoutPosition: "top",
        }),
    });
}
function P(e) {
    let { channel: t, transitionState: n, onClose: m, initialQuestion: w, initialAnswers: C, initialDuration: k } = e;
    (0, s.Z)({
        type: j.n.MODAL,
        name: a.z.POLL_EDITOR_VIEWED,
    });
    let x = l.useRef(null),
        R = l.useRef([]),
        E = l.useRef(null),
        S = l.useCallback((e) => {
            var t, n;
            let { indexToRemove: r, numberOfAnswers: l } = e;
            l === g.gY + 1
                ? null == (t = E.current) || t.focus()
                : null == (n = R.current[r === l - 1 ? r - 1 : r + 1]) || n.focusDeleteButton();
        }, []),
        {
            answers: _,
            question: D,
            allowMultiSelect: A,
            setAllowMultiSelect: I,
            duration: N,
            setDuration: U,
            handleQuestionChange: L,
            handleAnswerTextChange: T,
            handleEmojiSelect: Z,
            canAddMoreAnswers: B,
            handleRemoveAnswerImage: K,
            canRemoveMoreAnswers: Y,
            handleAddAnswer: M,
            handleRemoveAnswer: z,
            createPollError: H,
            handleSubmitPoll: W,
            fieldErrors: q,
            submitting: F,
            shouldFocusOnInvalidField: G,
            setShouldFocusOnInvalidField: V,
        } = (0, d.Z)(t, m, S, {
            initialQuestion: w,
            initialAnswers: C,
            initialDuration: k,
        }),
        { trackPollCreationCancelled: X } = (0, p.l)(_, A),
        J = l.useRef(_.length),
        Q = l.useCallback(() => {
            X(), m();
        }, [m, X]),
        $ = l.useCallback(() => {
            if (!(0, f.D$)(D, _))
                return void c.Z.show({
                    title: O.intl.string(O.t.HMrgcp),
                    body: O.intl.string(O.t["Wxa/j8"]),
                    confirmText: O.intl.string(O.t.TzJA4g),
                    confirmVariant: "critical-primary",
                    cancelText: O.intl.string(O.t["2BR5R2"]),
                    onConfirm: () => {
                        Q();
                    },
                });
            Q();
        }, [Q, _, D]);
    l.useEffect(() => {
        (0, o.oav)(
            g.$z,
            (e) => {
                var n, l;
                return (0, r.jsx)(
                    P,
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
            $,
        );
    }, [$, t]),
        l.useEffect(() => {
            if (_.length > J.current) {
                var e;
                null == (e = R.current[_.length - 1]) || e.focusInput();
            }
            J.current = _.length;
        }, [_.length]),
        l.useEffect(() => {
            if (G) {
                var e, t;
                if ((null == q ? void 0 : q.question) != null) null == (e = x.current) || e.focus();
                else {
                    let e = _.findIndex((e) => q["answer-".concat(e.localCreationAnswerId)]);
                    -1 !== e && (null == (t = R.current[e]) || t.focusInput());
                }
                V(!1);
            }
        }, [q, _, G, V, R]);
    let ee = l.useCallback(() => {
            n === o.Dvm.ENTERED && W();
        }, [W, n]),
        et = (0, u.Z)({
            disabled: F,
            onSubmit: ee,
        }),
        en = l.useMemo(
            () => [
                {
                    variant: "primary",
                    onClick: ee,
                    submitting: F,
                    text: O.intl.string(O.t.JOj8Zk),
                },
            ],
            [ee, F],
        );
    return (0, r.jsx)(i.Modal, {
        transitionState: n,
        onClose: m,
        title: O.intl.string(O.t["GD/8X8"]),
        actions: en,
        actionBarInput: (0, r.jsx)(o.Checkbox, {
            checked: A,
            onChange: (e) => I(e),
            label: O.intl.string(O.t["Ux+iQU"]),
        }),
        children: (0, r.jsxs)("div", {
            className: y.content,
            onKeyDown: et,
            children: [
                null != H &&
                    (0, r.jsx)(o.M14, {
                        type: "critical",
                        children: H.getAnyErrorMessage(),
                    }),
                (0, r.jsx)(v, {
                    question: D,
                    onChange: L,
                    error: null == q ? void 0 : q.question,
                    inputRef: x,
                }),
                (0, r.jsx)(o.LZC, { size: 26 }),
                (0, r.jsxs)(o.gNt, {
                    role: "group",
                    label: O.intl.string(O.t.oMBfeS),
                    children: [
                        _.map((e, n) =>
                            (0, r.jsx)(
                                b.Z,
                                {
                                    answer: e,
                                    channelId: t.id,
                                    index: n,
                                    isLastAnswer: n === _.length - 1,
                                    onEmojiSelect: Z,
                                    onEmojiRemove: K,
                                    onAnswerTextChange: T,
                                    onRemoveAnswer: z,
                                    addAnswer: M,
                                    submitPoll: ee,
                                    answerRowRefs: R,
                                    error: null == q ? void 0 : q["answer-".concat(e.localCreationAnswerId)],
                                    canRemoveAnswer: Y,
                                    ref: (e) => {
                                        R.current[n] = e;
                                    },
                                },
                                e.localCreationAnswerId,
                            ),
                        ),
                        B &&
                            (0, r.jsx)("div", {
                                className: y.addAnswerButton,
                                children: (0, r.jsx)(o.Button, {
                                    icon: o.qJs,
                                    variant: "secondary",
                                    onClick: M,
                                    "aria-label": O.intl.string(O.t.B2Uvme),
                                    buttonRef: E,
                                    text: O.intl.string(O.t.B2Uvme),
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(o.LZC, { size: 18 }),
                (0, r.jsx)(h, {
                    selectedDuration: N,
                    onSelect: U,
                }),
            ],
        }),
    });
}
