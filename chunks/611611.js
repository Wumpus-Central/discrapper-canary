n.d(t, { default: () => w }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(525769),
    i = n(793030),
    o = n(199849),
    c = n(481060),
    s = n(240872),
    u = n(213609),
    f = n(542383),
    d = n(79390),
    m = n(728076),
    p = n(2466),
    b = n(485168),
    g = n(309081),
    j = n(489887),
    O = n(20281),
    y = n(388032),
    v = n(520317);
function h(e) {
    let { question: t, onChange: n, error: l, inputRef: a } = e;
    return (0, r.jsx)(c.Kx8, {
        label: y.intl.string(y.t.WBiKnI),
        inputRef: a,
        placeholder: y.intl.string(y.t["/uQqJW"]),
        value: t,
        onChange: n,
        maxLength: j.Az,
        error: l,
        rows: 1,
        autosize: !0,
        autoFocus: !0,
        showCharacterCount: !0,
    });
}
function P(e) {
    let { selectedDuration: t, onSelect: n } = e,
        l = (0, p.Z)(),
        a = l[t];
    return (0, r.jsx)("div", {
        className: v.duration,
        children: (0, r.jsx)(o.B6, {
            label: y.intl.string(y.t.bGHzxb),
            "aria-label": y.intl.formatToPlainString(y.t.nXNHNJ, { duration: a }),
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
            popoutPosition: "top",
        }),
    });
}
function w(e) {
    let { channel: t, transitionState: n, onClose: o, initialQuestion: p, initialAnswers: C, initialDuration: k } = e;
    (0, u.Z)({
        type: O.n.MODAL,
        name: a.z.POLL_EDITOR_VIEWED,
    });
    let x = l.useRef(null),
        R = l.useRef([]),
        E = l.useRef(null),
        S = l.useCallback((e) => {
            var t, n;
            let { indexToRemove: r, numberOfAnswers: l } = e;
            l === j.gY + 1
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
        } = (0, m.Z)(t, o, S, {
            initialQuestion: p,
            initialAnswers: C,
            initialDuration: k,
        }),
        { trackPollCreationCancelled: X } = (0, b.l)(_, A),
        J = l.useRef(_.length),
        Q = l.useCallback(() => {
            X(), o();
        }, [o, X]),
        $ = l.useCallback(() => {
            if (!(0, d.D$)(D, _))
                return void s.Z.show({
                    title: y.intl.string(y.t.HMrgcp),
                    body: y.intl.string(y.t["Wxa/j8"]),
                    confirmText: y.intl.string(y.t.TzJA4g),
                    confirmVariant: "critical-primary",
                    cancelText: y.intl.string(y.t["2BR5R2"]),
                    onConfirm: () => {
                        Q();
                    },
                });
            Q();
        }, [Q, _, D]);
    l.useEffect(() => {
        (0, c.oav)(
            j.$z,
            (e) => {
                var n, l;
                return (0, r.jsx)(
                    w,
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
            n === c.Dvm.ENTERED && W();
        }, [W, n]),
        et = (0, f.Z)({
            disabled: F,
            onSubmit: ee,
        }),
        en = l.useMemo(
            () => [
                {
                    variant: "primary",
                    onClick: ee,
                    submitting: F,
                    text: y.intl.string(y.t.JOj8Zk),
                },
            ],
            [ee, F],
        );
    return (0, r.jsx)(i.Modal, {
        transitionState: n,
        onClose: o,
        title: y.intl.string(y.t["GD/8X8"]),
        actions: en,
        actionBarInput: (0, r.jsx)(c.Checkbox, {
            checked: A,
            onChange: (e) => I(e),
            label: y.intl.string(y.t["Ux+iQU"]),
        }),
        children: (0, r.jsxs)("div", {
            className: v.content,
            onKeyDown: et,
            children: [
                null != H &&
                    (0, r.jsx)(c.M14, {
                        type: "critical",
                        children: H.getAnyErrorMessage(),
                    }),
                (0, r.jsx)(h, {
                    question: D,
                    onChange: L,
                    error: null == q ? void 0 : q.question,
                    inputRef: x,
                }),
                (0, r.jsx)(c.LZC, { size: 26 }),
                (0, r.jsxs)(c.gNt, {
                    role: "group",
                    label: y.intl.string(y.t.oMBfeS),
                    children: [
                        _.map((e, n) =>
                            (0, r.jsx)(
                                g.Z,
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
                                className: v.addAnswerButton,
                                children: (0, r.jsx)(c.Button, {
                                    icon: c.qJs,
                                    variant: "secondary",
                                    onClick: M,
                                    "aria-label": y.intl.string(y.t.B2Uvme),
                                    buttonRef: E,
                                    text: y.intl.string(y.t.B2Uvme),
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(c.LZC, { size: 18 }),
                (0, r.jsx)(P, {
                    selectedDuration: N,
                    onSelect: U,
                }),
            ],
        }),
    });
}
