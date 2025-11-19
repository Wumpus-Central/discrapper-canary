n.d(t, { default: () => w }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(525769),
    i = n(793030),
    o = n(693789),
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
    v = n(931975);
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
        children: (0, r.jsx)(c.PhF, {
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
    let { channel: t, transitionState: n, onClose: p, initialQuestion: C, initialAnswers: k, initialDuration: x } = e;
    (0, u.Z)({
        type: O.n.MODAL,
        name: a.z.POLL_EDITOR_VIEWED,
    });
    let R = l.useRef(null),
        E = l.useRef([]),
        S = l.useRef(null),
        _ = l.useCallback((e) => {
            var t, n;
            let { indexToRemove: r, numberOfAnswers: l } = e;
            l === j.gY + 1
                ? null == (t = S.current) || t.focus()
                : null == (n = E.current[r === l - 1 ? r - 1 : r + 1]) || n.focusDeleteButton();
        }, []),
        {
            answers: D,
            question: A,
            allowMultiSelect: I,
            setAllowMultiSelect: N,
            duration: U,
            setDuration: L,
            handleQuestionChange: T,
            handleAnswerTextChange: Z,
            handleEmojiSelect: B,
            canAddMoreAnswers: K,
            handleRemoveAnswerImage: Y,
            canRemoveMoreAnswers: M,
            handleAddAnswer: z,
            handleRemoveAnswer: H,
            createPollError: W,
            handleSubmitPoll: q,
            fieldErrors: F,
            submitting: G,
            shouldFocusOnInvalidField: V,
            setShouldFocusOnInvalidField: X,
        } = (0, m.Z)(t, p, _, {
            initialQuestion: C,
            initialAnswers: k,
            initialDuration: x,
        }),
        { trackPollCreationCancelled: J } = (0, b.l)(D, I),
        Q = l.useRef(D.length),
        $ = l.useCallback(() => {
            J(), p();
        }, [p, J]),
        ee = l.useCallback(() => {
            if (!(0, d.D$)(A, D))
                return void s.Z.show({
                    title: y.intl.string(y.t.HMrgcp),
                    body: y.intl.string(y.t["Wxa/j8"]),
                    confirmColor: o.Tt.RED,
                    confirmText: y.intl.string(y.t.TzJA4g),
                    confirmVariant: "critical-primary",
                    cancelText: y.intl.string(y.t["2BR5R2"]),
                    onConfirm: () => {
                        $();
                    },
                });
            $();
        }, [$, D, A]);
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
            ee,
        );
    }, [ee, t]),
        l.useEffect(() => {
            if (D.length > Q.current) {
                var e;
                null == (e = E.current[D.length - 1]) || e.focusInput();
            }
            Q.current = D.length;
        }, [D.length]),
        l.useEffect(() => {
            if (V) {
                var e, t;
                if ((null == F ? void 0 : F.question) != null) null == (e = R.current) || e.focus();
                else {
                    let e = D.findIndex((e) => F["answer-".concat(e.localCreationAnswerId)]);
                    -1 !== e && (null == (t = E.current[e]) || t.focusInput());
                }
                X(!1);
            }
        }, [F, D, V, X, E]);
    let et = l.useCallback(() => {
            n === c.Dvm.ENTERED && q();
        }, [q, n]),
        en = (0, f.Z)({
            disabled: G,
            onSubmit: et,
        }),
        er = l.useMemo(
            () => [
                {
                    variant: "primary",
                    onClick: et,
                    submitting: G,
                    text: y.intl.string(y.t.JOj8Zk),
                },
            ],
            [et, G],
        );
    return (0, r.jsx)(i.Modal, {
        transitionState: n,
        onClose: p,
        title: y.intl.string(y.t["GD/8X8"]),
        actions: er,
        actionBarInput: (0, r.jsx)(c.Checkbox, {
            checked: I,
            onChange: (e) => N(e),
            label: y.intl.string(y.t["Ux+iQU"]),
        }),
        children: (0, r.jsxs)("div", {
            className: v.content,
            onKeyDown: en,
            children: [
                null != W &&
                    (0, r.jsx)(c.M14, {
                        type: "critical",
                        children: W.getAnyErrorMessage(),
                    }),
                (0, r.jsx)(h, {
                    question: A,
                    onChange: T,
                    error: null == F ? void 0 : F.question,
                    inputRef: R,
                }),
                (0, r.jsx)(c.LZC, { size: 26 }),
                (0, r.jsxs)(c.gNt, {
                    role: "group",
                    label: y.intl.string(y.t.oMBfeS),
                    children: [
                        D.map((e, n) =>
                            (0, r.jsx)(
                                g.Z,
                                {
                                    answer: e,
                                    channelId: t.id,
                                    index: n,
                                    isLastAnswer: n === D.length - 1,
                                    onEmojiSelect: B,
                                    onEmojiRemove: Y,
                                    onAnswerTextChange: Z,
                                    onRemoveAnswer: H,
                                    addAnswer: z,
                                    submitPoll: et,
                                    answerRowRefs: E,
                                    error: null == F ? void 0 : F["answer-".concat(e.localCreationAnswerId)],
                                    canRemoveAnswer: M,
                                    ref: (e) => {
                                        E.current[n] = e;
                                    },
                                },
                                e.localCreationAnswerId,
                            ),
                        ),
                        K &&
                            (0, r.jsx)("div", {
                                className: v.addAnswerButton,
                                children: (0, r.jsx)(c.Button, {
                                    icon: c.qJs,
                                    variant: "secondary",
                                    onClick: z,
                                    "aria-label": y.intl.string(y.t.B2Uvme),
                                    buttonRef: S,
                                    text: y.intl.string(y.t.B2Uvme),
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(c.LZC, { size: 18 }),
                (0, r.jsx)(P, {
                    selectedDuration: U,
                    onSelect: L,
                }),
            ],
        }),
    });
}
