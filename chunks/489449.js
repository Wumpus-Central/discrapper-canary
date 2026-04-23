n.d(t, { default: () => v });
var a = n(627968),
    l = n(64700),
    i = n(239947),
    r = n(189213),
    o = n(260598),
    s = n(691885),
    c = n(192308),
    u = n(231723),
    m = n(150934),
    d = n(683071),
    f = n(696986),
    g = n(452027),
    b = n(821609),
    p = n(307301),
    h = n(579872),
    A = n(139286),
    C = n(973431),
    R = n(969632),
    j = n(998489),
    k = n(983081),
    x = n(57359),
    _ = n(820453),
    w = n(412136),
    E = n(412728),
    P = n(985018),
    I = n(316524);
function S(e) {
    let { question: t, onChange: n, error: l, inputRef: i } = e;
    return (0, a.jsx)(o.f, {
        label: P.intl.string(P.t.WBiKnI),
        inputRef: i,
        placeholder: P.intl.string(P.t["/uQqJW"]),
        value: t,
        onChange: n,
        maxLength: w.jD,
        error: l,
        rows: 1,
        autosize: !0,
        autoFocus: !0,
        showCharacterCount: !0,
    });
}
function N(e) {
    let { selectedDuration: t, onSelect: n } = e,
        l = (0, k.A)(),
        i = l[t];
    return (0, a.jsx)("div", {
        className: I.p0,
        children: (0, a.jsx)(s.l, {
            label: P.intl.string(P.t.bGHzxb),
            "aria-label": P.intl.formatToPlainString(P.t.nXNHNJ, { duration: i }),
            options: Object.entries(l).map((e) => {
                let [t, n] = e;
                return { id: t.toString(), label: n, value: parseInt(t) };
            }),
            value: t,
            onSelectionChange: n,
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
}
function v(e) {
    let { channel: t, transitionState: n, onClose: o, initialQuestion: s, initialAnswers: k, initialDuration: D } = e;
    (0, A.A)({ type: E.z.MODAL, name: i.I.POLL_EDITOR_VIEWED });
    let y = l.useRef(null),
        O = l.useRef([]),
        T = l.useRef(null),
        L = l.useCallback((e) => {
            let { indexToRemove: t, numberOfAnswers: n } = e;
            n === w.FW + 1 ? T.current?.focus() : O.current[t === n - 1 ? t - 1 : t + 1]?.focusDeleteButton();
        }, []),
        {
            answers: U,
            question: K,
            allowMultiSelect: Y,
            setAllowMultiSelect: B,
            duration: W,
            setDuration: F,
            handleQuestionChange: q,
            handleAnswerTextChange: M,
            handleEmojiSelect: $,
            canAddMoreAnswers: G,
            handleRemoveAnswerImage: z,
            canRemoveMoreAnswers: H,
            handleAddAnswer: V,
            handleRemoveAnswer: Z,
            createPollError: X,
            handleSubmitPoll: Q,
            fieldErrors: J,
            submitting: ee,
            shouldFocusOnInvalidField: et,
            setShouldFocusOnInvalidField: en,
        } = (0, j.A)(t, o, L, { initialQuestion: s, initialAnswers: k, initialDuration: D }),
        { trackPollCreationCancelled: ea } = (0, x.I)(U, Y),
        el = l.useRef(U.length),
        ei = l.useCallback(() => {
            ea(), o();
        }, [o, ea]),
        er = l.useCallback(() => {
            (0, R.Wn)(K, U)
                ? ei()
                : h.A.show({
                      title: P.intl.string(P.t.HMrgcp),
                      body: P.intl.string(P.t["Wxa/j8"]),
                      confirmText: P.intl.string(P.t.TzJA4g),
                      confirmVariant: "critical-primary",
                      cancelText: P.intl.string(P.t["2BR5R2"]),
                      onConfirm: () => {
                          ei();
                      },
                  });
        }, [ei, U, K]);
    l.useEffect(() => {
        (0, c.updateModal)(w.sm, (e) => (0, a.jsx)(v, { ...e, channel: t }), er);
    }, [er, t]),
        l.useEffect(() => {
            U.length > el.current && O.current[U.length - 1]?.focusInput(), (el.current = U.length);
        }, [U.length]),
        l.useEffect(() => {
            if (et) {
                if (J?.question != null) y.current?.focus();
                else {
                    let e = U.findIndex((e) => J[`answer-${e.localCreationAnswerId}`]);
                    -1 !== e && O.current[e]?.focusInput();
                }
                en(!1);
            }
        }, [J, U, et, en, O]);
    let eo = l.useCallback(() => {
            n === u.ip.ENTERED && Q();
        }, [Q, n]),
        es = (0, C.A)({ disabled: ee, onSubmit: eo }),
        ec = l.useMemo(
            () => [{ variant: "primary", onClick: eo, submitting: ee, text: P.intl.string(P.t.JOj8Zk), autoFocus: !1 }],
            [eo, ee],
        );
    return (0, a.jsx)(r.Modal, {
        transitionState: n,
        onClose: o,
        title: P.intl.string(P.t["GD/8X8"]),
        actions: ec,
        actionBarInput: (0, a.jsx)(m.S, { checked: Y, onChange: (e) => B(e), label: P.intl.string(P.t["Ux+iQU"]) }),
        children: (0, a.jsxs)("div", {
            className: I.Qs,
            onKeyDown: es,
            children: [
                null != X && (0, a.jsx)(d.w, { type: "critical", children: X.getAnyErrorMessage() }),
                (0, a.jsx)(S, { question: K, onChange: q, error: J?.question, inputRef: y }),
                (0, a.jsx)(f.h, { size: 26 }),
                (0, a.jsxs)(g.D, {
                    role: "group",
                    label: P.intl.string(P.t.oMBfeS),
                    children: [
                        U.map((e, n) =>
                            (0, a.jsx)(
                                _.A,
                                {
                                    answer: e,
                                    channelId: t.id,
                                    index: n,
                                    isLastAnswer: n === U.length - 1,
                                    onEmojiSelect: $,
                                    onEmojiRemove: z,
                                    onAnswerTextChange: M,
                                    onRemoveAnswer: Z,
                                    addAnswer: V,
                                    submitPoll: eo,
                                    answerRowRefs: O,
                                    error: J?.[`answer-${e.localCreationAnswerId}`],
                                    canRemoveAnswer: H,
                                    ref: (e) => {
                                        O.current[n] = e;
                                    },
                                },
                                e.localCreationAnswerId,
                            ),
                        ),
                        G &&
                            (0, a.jsx)("div", {
                                className: I.Ox,
                                children: (0, a.jsx)(b.$, {
                                    icon: p.j,
                                    variant: "secondary",
                                    onClick: V,
                                    "aria-label": P.intl.string(P.t.B2Uvme),
                                    buttonRef: T,
                                    text: P.intl.string(P.t.B2Uvme),
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)(f.h, { size: 18 }),
                (0, a.jsx)(N, { selectedDuration: W, onSelect: F }),
            ],
        }),
    });
}
