n.d(t, { default: () => k });
var l = n(627968),
    a = n(64700),
    i = n(239947),
    r = n(158954),
    o = n(397927),
    s = n(579872),
    c = n(139286),
    u = n(973431),
    m = n(969632),
    d = n(998489),
    f = n(983081),
    g = n(57359),
    b = n(820453),
    p = n(412136),
    h = n(412728),
    A = n(985018),
    C = n(826701);
function R(e) {
    let { question: t, onChange: n, error: a, inputRef: i } = e;
    return (0, l.jsx)(o.fs1, {
        label: A.intl.string(A.t.WBiKnI),
        inputRef: i,
        placeholder: A.intl.string(A.t["/uQqJW"]),
        value: t,
        onChange: n,
        maxLength: p.jD,
        error: a,
        rows: 1,
        autosize: !0,
        autoFocus: !0,
        showCharacterCount: !0,
    });
}
function j(e) {
    let { selectedDuration: t, onSelect: n } = e,
        a = (0, f.A)(),
        i = a[t];
    return (0, l.jsx)("div", {
        className: C.p0,
        children: (0, l.jsx)(o.l6P, {
            label: A.intl.string(A.t.bGHzxb),
            "aria-label": A.intl.formatToPlainString(A.t.nXNHNJ, { duration: i }),
            options: Object.entries(a).map((e) => {
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
function k(e) {
    let { channel: t, transitionState: n, onClose: f, initialQuestion: x, initialAnswers: _, initialDuration: w } = e;
    (0, c.A)({ type: h.z.MODAL, name: i.I.POLL_EDITOR_VIEWED });
    let E = a.useRef(null),
        P = a.useRef([]),
        N = a.useRef(null),
        I = a.useCallback((e) => {
            let { indexToRemove: t, numberOfAnswers: n } = e;
            n === p.FW + 1 ? N.current?.focus() : P.current[t === n - 1 ? t - 1 : t + 1]?.focusDeleteButton();
        }, []),
        {
            answers: S,
            question: v,
            allowMultiSelect: D,
            setAllowMultiSelect: O,
            duration: y,
            setDuration: T,
            handleQuestionChange: U,
            handleAnswerTextChange: L,
            handleEmojiSelect: K,
            canAddMoreAnswers: Y,
            handleRemoveAnswerImage: B,
            canRemoveMoreAnswers: W,
            handleAddAnswer: $,
            handleRemoveAnswer: q,
            createPollError: z,
            handleSubmitPoll: F,
            fieldErrors: G,
            submitting: M,
            shouldFocusOnInvalidField: V,
            setShouldFocusOnInvalidField: H,
        } = (0, d.A)(t, f, I, { initialQuestion: x, initialAnswers: _, initialDuration: w }),
        { trackPollCreationCancelled: Z } = (0, g.I)(S, D),
        X = a.useRef(S.length),
        Q = a.useCallback(() => {
            Z(), f();
        }, [f, Z]),
        J = a.useCallback(() => {
            (0, m.Wn)(v, S)
                ? Q()
                : s.A.show({
                      title: A.intl.string(A.t.HMrgcp),
                      body: A.intl.string(A.t["Wxa/j8"]),
                      confirmText: A.intl.string(A.t.TzJA4g),
                      confirmVariant: "critical-primary",
                      cancelText: A.intl.string(A.t["2BR5R2"]),
                      onConfirm: () => {
                          Q();
                      },
                  });
        }, [Q, S, v]);
    a.useEffect(() => {
        (0, o.zbz)(p.sm, (e) => (0, l.jsx)(k, { ...e, channel: t }), J);
    }, [J, t]),
        a.useEffect(() => {
            S.length > X.current && P.current[S.length - 1]?.focusInput(), (X.current = S.length);
        }, [S.length]),
        a.useEffect(() => {
            if (V) {
                if (G?.question != null) E.current?.focus();
                else {
                    let e = S.findIndex((e) => G[`answer-${e.localCreationAnswerId}`]);
                    -1 !== e && P.current[e]?.focusInput();
                }
                H(!1);
            }
        }, [G, S, V, H, P]);
    let ee = a.useCallback(() => {
            n === o.ip4.ENTERED && F();
        }, [F, n]),
        et = (0, u.A)({ disabled: M, onSubmit: ee }),
        en = a.useMemo(
            () => [{ variant: "primary", onClick: ee, submitting: M, text: A.intl.string(A.t.JOj8Zk) }],
            [ee, M],
        );
    return (0, l.jsx)(r.Modal, {
        transitionState: n,
        onClose: f,
        title: A.intl.string(A.t["GD/8X8"]),
        actions: en,
        actionBarInput: (0, l.jsx)(o.Checkbox, {
            checked: D,
            onChange: (e) => O(e),
            label: A.intl.string(A.t["Ux+iQU"]),
        }),
        children: (0, l.jsxs)("div", {
            className: C.Qs,
            onKeyDown: et,
            children: [
                null != z && (0, l.jsx)(o.wx6, { type: "critical", children: z.getAnyErrorMessage() }),
                (0, l.jsx)(R, { question: v, onChange: U, error: G?.question, inputRef: E }),
                (0, l.jsx)(o.hKd, { size: 26 }),
                (0, l.jsxs)(o.D0$, {
                    role: "group",
                    label: A.intl.string(A.t.oMBfeS),
                    children: [
                        S.map((e, n) =>
                            (0, l.jsx)(
                                b.A,
                                {
                                    answer: e,
                                    channelId: t.id,
                                    index: n,
                                    isLastAnswer: n === S.length - 1,
                                    onEmojiSelect: K,
                                    onEmojiRemove: B,
                                    onAnswerTextChange: L,
                                    onRemoveAnswer: q,
                                    addAnswer: $,
                                    submitPoll: ee,
                                    answerRowRefs: P,
                                    error: G?.[`answer-${e.localCreationAnswerId}`],
                                    canRemoveAnswer: W,
                                    ref: (e) => {
                                        P.current[n] = e;
                                    },
                                },
                                e.localCreationAnswerId,
                            ),
                        ),
                        Y &&
                            (0, l.jsx)("div", {
                                className: C.Ox,
                                children: (0, l.jsx)(o.Button, {
                                    icon: o.j96,
                                    variant: "secondary",
                                    onClick: $,
                                    "aria-label": A.intl.string(A.t.B2Uvme),
                                    buttonRef: N,
                                    text: A.intl.string(A.t.B2Uvme),
                                }),
                            }),
                    ],
                }),
                (0, l.jsx)(o.hKd, { size: 18 }),
                (0, l.jsx)(j, { selectedDuration: y, onSelect: T }),
            ],
        }),
    });
}
