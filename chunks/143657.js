n.d(t, { default: () => ef });
var l,
    a = n(627968),
    i = n(64700),
    r = n(239947),
    o = n(189213),
    s = n(260598),
    c = n(691885),
    u = n(192308),
    m = n(231723),
    d = n(150934),
    f = n(683071),
    g = n(696986),
    b = n(452027),
    p = n(821609),
    h = n(307301),
    C = n(579872),
    A = n(139286),
    R = n(723702),
    j = n(969632);
n(323874), n(14289), n(35956);
var x = n(966974),
    _ = n(608461),
    w = n(412136);
function E(e, t) {
    let n = decodeURIComponent(t).split("/").pop() ?? "temp.gif";
    return `${e}-${n}`;
}
var k = (((l = {}).PREPARING = "PREPARING"), (l.READY_TO_UPLOAD = "READY_TO_UPLOAD"), (l.ERROR = "ERROR"), l),
    I = n(608299),
    P = n(565150),
    D = n(31717);
async function S(e, t, n) {
    let l = E(t, n),
        a = await fetch(n);
    return N(e, t, new File([await a.blob()], l, { type: "image/gif" })), n;
}
function N(e, t, n) {
    let l = { id: t, channelId: e, file: n, platform: P.xz.WEB, origin: "unknown:poll_attachment" };
    I.A.addFile({ file: l, channelId: e, draftType: D.C.Poll });
}
async function v(e, t, n) {
    I.A.remove(e, t, D.C.Poll);
}
async function y(e) {
    I.A.clearAll(e, D.C.Poll);
}
var O = n(962514),
    T = n(985018);
function L(e, t) {
    return { mediaAttachmentState: { status: t, mediaURL: e }, emoji: void 0, stickerId: void 0 };
}
var U = n(58149),
    K = n(652215),
    Y = n(503698),
    B = n.n(Y),
    W = n(17928),
    F = n(550079),
    q = n(477782),
    M = n(289873),
    G = n(460905),
    z = n(922016),
    H = n(939249),
    V = n(22231),
    $ = n(292666),
    Z = n(241326),
    X = n(565645),
    Q = n(267889),
    J = n(770335),
    ee = n(734057),
    et = n(522602),
    en = n(307731),
    el = n(698279),
    ea = n(231876);
function ei(e) {
    let {
        hasUpload: t,
        mediaUrl: n,
        mediaFilename: l,
        imageClassName: i,
        emoji: r,
        emojiClassName: o,
        fallback: s,
    } = e;
    return t
        ? (0, a.jsx)("img", { src: n, alt: l, className: i })
        : null != r
          ? (0, a.jsx)(X.A, {
                className: o,
                emojiId: r.id,
                emojiName: r.type === J.i.UNICODE ? r.optionallyDiverseSequence : r.name,
                animated: r.animated,
            })
          : s;
}
function er(e) {
    let { onSelect: t, onEditMedia: n, onDeleteMedia: l, closePopout: i } = e;
    return (0, a.jsx)("div", {
        className: ea.li,
        children: (0, a.jsx)(F.W, {
            "data-menu-migrated-auto": !0,
            navId: "poll-media-edit-menu",
            onClose: i,
            "aria-label": T.intl.string(T.t["cV+h7B"]),
            onSelect: t,
            children: (0, a.jsxs)(q.rX, {
                children: [
                    (0, a.jsx)(q.Dr, { id: "poll-media-replace", label: T.intl.string(T.t.CZeRhU), action: n }),
                    (0, a.jsx)(q.Dr, {
                        id: "poll-media-delete",
                        label: T.intl.string(T.t.IhMxgu),
                        action: l,
                        color: "danger",
                    }),
                ],
            }),
        }),
    });
}
function eo(e) {
    let {
            channelId: t,
            localCreationAnswerId: n,
            buttonImage: l,
            onEmojiSelect: r,
            onEmojiRemove: o,
            answerIndex: s,
            shouldShowEmojiPicker: c,
            toggleEmojiPicker: u,
            containerRef: m,
        } = e,
        d = i.useRef(null),
        f = (0, W.bG)([ee.A], () => ee.A.getChannel(t)),
        {
            emoji: g,
            isLoadingMedia: b,
            hasUpload: p,
            mediaUrl: h,
            mediaFilename: C,
        } = (function (e) {
            let { channelId: t, localCreationAnswerId: n, image: l } = e,
                a = l?.emoji,
                r = l?.mediaAttachmentState?.status === k.PREPARING,
                o = (0, W.bG)([et.A], () => et.A.getUpload(t, n, D.C.Poll)),
                [s, c] = i.useState(),
                [u, m] = i.useState("");
            return (
                i.useEffect(() => {
                    if (o?.item?.file == null) return;
                    let e = URL.createObjectURL(o.item.file);
                    return (
                        c(e),
                        m(o.item.file.name),
                        () => {
                            URL.revokeObjectURL(e);
                        }
                    );
                }, [o?.item?.file]),
                { emoji: a, isLoadingMedia: r, hasUpload: null != o, upload: o, mediaUrl: s, mediaFilename: u }
            );
        })({ channelId: t, localCreationAnswerId: n, image: l }),
        A = p || null != g,
        R = i.useCallback(() => {
            o(s);
        }, [o, s]),
        x = i.useMemo(
            () =>
                p
                    ? T.intl.formatToPlainString(T.t.vcC7Qn, { imageName: (0, j.Kj)(C), answerNumber: s + 1 })
                    : null != g
                      ? T.intl.formatToPlainString(T.t.ncOAha, { emojiName: g.name, answerNumber: s + 1 })
                      : T.intl.formatToPlainString(T.t.emdpNo, { answerNumber: s + 1 }),
            [p, g, s, C],
        ),
        _ = i.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, a.jsx)("div", {
                    className: ea.Fb,
                    children: (0, a.jsx)(Q.A, {
                        channel: f,
                        pickerIntention: en.EmojiIntention.POLLS,
                        closePopout: t,
                        onNavigateAway: t,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: l } = e;
                            null != n && r(n, s), l && t();
                        },
                    }),
                });
            },
            [f, r, s],
        ),
        w = i.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, a.jsx)(er, { onSelect: t, onEditMedia: u, onDeleteMedia: R, closePopout: t });
            },
            [R, u],
        ),
        E = b
            ? (0, a.jsx)(M.y, { className: ea.EC })
            : (0, a.jsx)(ei, {
                  hasUpload: p,
                  mediaUrl: h,
                  mediaFilename: C,
                  imageClassName: B()(ea.$_, ea.qX),
                  emoji: g,
                  emojiClassName: B()(ea.$_, ea.qZ),
                  fallback: (0, a.jsx)(G.n, { size: "sm", color: "currentColor", className: ea.vr }),
              }),
        I = B()(el.VQ, ea.GB, { [ea.ZV]: A });
    return (0, a.jsx)(z.Y, {
        targetElementRef: m,
        renderPopout: _,
        shouldShow: c,
        onRequestClose: u,
        animation: z.Y.Animation.NONE,
        position: "bottom",
        spacing: 2,
        children: (e) => {
            let { "aria-controls": t, "aria-expanded": n, ...l } = e;
            return (0, a.jsx)(z.Y, {
                targetElementRef: d,
                animation: z.Y.Animation.NONE,
                position: "bottom",
                renderPopout: w,
                children: (e) => {
                    let { onClick: l, "aria-controls": i, "aria-expanded": r, ...o } = e;
                    return (0, a.jsxs)(H.D, {
                        innerRef: d,
                        ...o,
                        className: I,
                        onClick: A && !c ? l : u,
                        "aria-label": x,
                        "aria-controls": t ?? i,
                        "aria-expanded": n || r,
                        children: [
                            E,
                            A &&
                                (0, a.jsx)(V.R, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ea.IZ,
                                    "aria-hidden": !0,
                                }),
                        ],
                    });
                },
            });
        },
    });
}
function es(e) {
    let {
            channelId: t,
            answer: n,
            index: l,
            isLastAnswer: r,
            onAnswerTextChange: o,
            onEmojiSelect: s,
            onEmojiRemove: c,
            canRemoveAnswer: u,
            onRemoveAnswer: m,
            addAnswer: d,
            submitPoll: f,
            error: g,
            ref: b,
            answerRowRefs: p,
        } = e,
        h = i.useRef(null),
        C = i.useRef(null),
        A = i.useRef(null);
    i.useImperativeHandle(b, () => ({
        focusDeleteButton: () => C.current?.focus(),
        focusInput: () => A.current?.focus(),
    }));
    let [x, _] = i.useState(!1),
        E = i.useCallback(() => {
            _((e) => !e);
        }, []),
        k = i.useCallback(
            (e) => {
                let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    a = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
                switch (e.key.toLowerCase()) {
                    case "enter":
                        r &&
                            (e.preventDefault(),
                            ((0, j.ND)(n) || "macos" !== (0, R.getOS)() ? t : a) ? (e.stopPropagation(), f()) : d()),
                            p.current[l + 1]?.focusInput();
                        break;
                    case "e":
                        ("macos" === (0, R.getOS)() ? a : t) && (e.preventDefault(), e.stopPropagation(), E());
                }
            },
            [d, n, p, l, r, f, E],
        ),
        I = (0, a.jsx)(eo, {
            containerRef: h,
            channelId: t,
            buttonImage: n.image,
            onEmojiSelect: s,
            onEmojiRemove: c,
            localCreationAnswerId: n.localCreationAnswerId,
            answerIndex: l,
            shouldShowEmojiPicker: x,
            toggleEmojiPicker: E,
        });
    return (0, a.jsx)("div", {
        ref: h,
        children: (0, a.jsx)($.k, {
            error: g,
            leading: { type: "emoji", button: I },
            trailing: u
                ? {
                      "aria-label": T.intl.formatToPlainString(T.t["22fjEc"], { answerNumber: l + 1 }),
                      icon: Z.u,
                      onClick: () => m(l),
                      buttonRef: C,
                  }
                : void 0,
            "aria-label": T.intl.formatToPlainString(T.t["3+V8G9"], { answerNumber: l + 1 }),
            placeholder: T.intl.string(T.t.NNHVlv),
            value: n.text,
            onChange: (e) => o({ text: e, index: l, localCreationAnswerId: n.localCreationAnswerId }),
            onKeyDown: k,
            maxLength: w.dv,
            inputRef: A,
        }),
    });
}
var ec = n(412728),
    eu = n(210540);
function em(e) {
    let { question: t, onChange: n, error: l, inputRef: i } = e;
    return (0, a.jsx)(s.f, {
        label: T.intl.string(T.t.WBiKnI),
        inputRef: i,
        placeholder: T.intl.string(T.t["/uQqJW"]),
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
function ed(e) {
    let { selectedDuration: t, onSelect: n } = e,
        l = Object.freeze({
            [w.fT.ONE_HOUR]: T.intl.formatToPlainString(T.t["b/mgtw"], { num: 1 }),
            [w.fT.FOUR_HOURS]: T.intl.formatToPlainString(T.t["b/mgtw"], { num: 4 }),
            [w.fT.EIGHT_HOURS]: T.intl.formatToPlainString(T.t["b/mgtw"], { num: 8 }),
            [w.fT.ONE_DAY]: T.intl.formatToPlainString(T.t["b/mgtw"], { num: 24 }),
            [w.fT.THREE_DAYS]: T.intl.string(T.t.Xn5rX3),
            [w.fT.SEVEN_DAYS]: T.intl.string(T.t["Lmq+rj"]),
            [w.fT.FOURTEEN_DAYS]: T.intl.string(T.t["mb8A/O"]),
        }),
        i = l[t];
    return (0, a.jsx)("div", {
        className: eu.p0,
        children: (0, a.jsx)(c.l, {
            label: T.intl.string(T.t.bGHzxb),
            "aria-label": T.intl.formatToPlainString(T.t.nXNHNJ, { duration: i }),
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
function ef(e) {
    var t;
    let n,
        { channel: l, transitionState: s, onClose: c, initialQuestion: I, initialAnswers: P, initialDuration: D } = e;
    (0, A.A)({ type: ec.z.MODAL, name: r.I.POLL_EDITOR_VIEWED });
    let Y = i.useRef(null),
        B = i.useRef([]),
        W = i.useRef(null),
        {
            answers: F,
            question: q,
            allowMultiSelect: M,
            setAllowMultiSelect: G,
            duration: z,
            setDuration: H,
            handleQuestionChange: V,
            handleAnswerTextChange: $,
            handleEmojiSelect: Z,
            canAddMoreAnswers: X,
            handleRemoveAnswerImage: Q,
            canRemoveMoreAnswers: J,
            handleAddAnswer: ee,
            handleRemoveAnswer: et,
            createPollError: en,
            handleSubmitPoll: el,
            fieldErrors: ea,
            submitting: ei,
            shouldFocusOnInvalidField: er,
            setShouldFocusOnInvalidField: eo,
        } = (function (e, t, n, l) {
            let a = e.id,
                [r, o] = i.useState(
                    () => l?.initialAnswers?.map((e) => ({ ...(0, j.YP)(), ...e })) ?? [(0, j.YP)(), (0, j.YP)()],
                ),
                [s, c] = i.useState(l?.initialQuestion ?? ""),
                [u, m] = i.useState(!1),
                [d, f] = i.useState(l?.initialDuration ?? w.fT.ONE_DAY),
                [g, b] = i.useState({}),
                [p, h] = i.useState(!1),
                C = r.filter((e) => (0, j.ND)(e)),
                A = r.filter((e) => (0, j.VD)(e)),
                R = s.length > 0 && C.length >= w.FW && 0 === A.length,
                [I, { error: P, loading: D }] = (0, _.A)(O.A.createPoll),
                U = r.length < w.Lu,
                K = r.length > w.FW,
                Y = i.useCallback((e) => {
                    b((e) => {
                        let t = { ...e };
                        return delete t.question, t;
                    }),
                        c(e);
                }, []),
                B = i.useCallback((e) => {
                    let { text: t, index: n, localCreationAnswerId: l } = e;
                    b((e) => {
                        let t = { ...e };
                        return delete t[`answer-${l}`], t;
                    }),
                        o((e) => {
                            let l = [...e];
                            return (l[n] = { ...l[n], text: t }), l;
                        });
                }, []),
                W = i.useCallback((e, t) => {
                    o((n) => {
                        let l = [...n];
                        return (l[t] = { ...l[t], image: e }), l;
                    });
                }, []),
                F = i.useCallback(
                    (e, t, n) => {
                        let l = r[t],
                            a = l.image?.mediaAttachmentState;
                        null != a &&
                            a.mediaURL !== n &&
                            v(e, l.localCreationAnswerId, E(l.localCreationAnswerId, a.mediaURL));
                    },
                    [r],
                ),
                q = i.useCallback(
                    async (e, t, n) => {
                        let l = r[t].localCreationAnswerId;
                        (F(e, t), W(L(n, k.PREPARING), t), null == (await S(e, l, n)))
                            ? W(L(n, k.ERROR), t)
                            : W(L(n, k.READY_TO_UPLOAD), t);
                    },
                    [r, W, F],
                ),
                M = i.useCallback(
                    (e, t, n) => {
                        let l = r[t].localCreationAnswerId,
                            a = URL.createObjectURL(n);
                        F(e, t), W(L(a, k.PREPARING), t), N(e, l, n), W(L(a, k.READY_TO_UPLOAD), t);
                    },
                    [r, W, F],
                ),
                G = i.useCallback(
                    (e, t) => {
                        F(a, t), W({ emoji: e, stickerId: void 0, mediaAttachmentState: void 0 }, t);
                    },
                    [a, W, F],
                ),
                z = i.useCallback((e) => {
                    o((t) => {
                        let n = [...t];
                        return (n[e] = { ...n[e], image: void 0 }), n;
                    });
                }, []),
                H = i.useCallback(() => {
                    U && o((e) => [...e, (0, j.YP)()]);
                }, [U]),
                V = i.useCallback(
                    (e) => {
                        if (!K) return;
                        let t = r.length;
                        F(a, e),
                            o((t) => {
                                let n = [...t];
                                return n.splice(e, 1), n;
                            }),
                            n?.({ indexToRemove: e, numberOfAnswers: t });
                    },
                    [r.length, K, a, n, F],
                );
            i.useEffect(
                () => () => {
                    y(a);
                },
                [a],
            );
            let $ = i.useCallback(() => {
                    let e = !0,
                        t = {};
                    return (
                        0 === s.trim().length && ((e = !1), (t.question = T.intl.string(T.t.gPX3oI))),
                        r.filter((e) => (0, j.ND)(e)).length < w.FW &&
                            ((e = !1), (t[`answer-${r[0].localCreationAnswerId}`] = T.intl.string(T.t.fYvzEX))),
                        r.forEach((n) => {
                            (0, j.VD)(n) &&
                                ((e = !1), (t[`answer-${n.localCreationAnswerId}`] = T.intl.string(T.t["8Qqkc+"])));
                        }),
                        b(t),
                        h(!e),
                        e
                    );
                }, [r, s]),
                Z = i.useCallback(async () => {
                    await I({
                        channel: e,
                        question: s,
                        answers: C,
                        allowMultiSelect: u,
                        duration: d,
                        layout: x.Z.DEFAULT,
                        onClose: t,
                    });
                }, [s, C, u, d, I, e, t]),
                X = i.useCallback(() => {
                    !D && $() && Z();
                }, [Z, D, $]);
            return {
                answers: r,
                question: s,
                setQuestion: c,
                allowMultiSelect: u,
                setAllowMultiSelect: m,
                duration: d,
                setDuration: f,
                canPost: R,
                canAddMoreAnswers: U,
                canRemoveMoreAnswers: K,
                handleQuestionChange: Y,
                handleAnswerTextChange: B,
                handleGifSelect: q,
                handleEmojiSelect: G,
                handleCustomUpload: M,
                handleAddAnswer: H,
                handleRemoveAnswer: V,
                handleRemoveAnswerImage: z,
                fieldErrors: g,
                createPoll: Z,
                handleSubmitPoll: X,
                submitting: D,
                createPollError: P,
                shouldFocusOnInvalidField: p,
                setShouldFocusOnInvalidField: h,
            };
        })(
            l,
            c,
            i.useCallback((e) => {
                let { indexToRemove: t, numberOfAnswers: n } = e;
                n === w.FW + 1 ? W.current?.focus() : B.current[t === n - 1 ? t - 1 : t + 1]?.focusDeleteButton();
            }, []),
            { initialQuestion: I, initialAnswers: P, initialDuration: D },
        ),
        { trackPollCreationCancelled: eg } = {
            trackPollCreationCancelled: i.useCallback(() => {
                let e = 0,
                    t = 0,
                    n = 0;
                F.forEach((l) => {
                    let a = l.image;
                    null != a &&
                        (null != a.emoji
                            ? (t += 1)
                            : null != a.stickerId
                              ? (n += 1)
                              : null != a.mediaAttachmentState && (e += 1));
                }),
                    U.Ay.trackWithMetadata(K.HAw.POLL_CREATION_CANCELLED, {
                        answers_count: F.length,
                        attachments_count: e,
                        emojis_count: t,
                        stickers_count: n,
                        allow_multiselect: M,
                        layout_type: x.Z.DEFAULT,
                    });
            }, [F, M]),
        },
        eb = i.useRef(F.length),
        ep = i.useCallback(() => {
            eg(), c();
        }, [c, eg]),
        eh = i.useCallback(() => {
            (0, j.Wn)(q, F)
                ? ep()
                : C.A.show({
                      title: T.intl.string(T.t.HMrgcp),
                      body: T.intl.string(T.t["Wxa/j8"]),
                      confirmText: T.intl.string(T.t.TzJA4g),
                      confirmVariant: "critical-primary",
                      cancelText: T.intl.string(T.t["2BR5R2"]),
                      onConfirm: () => {
                          ep();
                      },
                  });
        }, [ep, F, q]);
    i.useEffect(() => {
        (0, u.updateModal)(w.sm, (e) => (0, a.jsx)(ef, { ...e, channel: l }), eh);
    }, [eh, l]),
        i.useEffect(() => {
            F.length > eb.current && B.current[F.length - 1]?.focusInput(), (eb.current = F.length);
        }, [F.length]),
        i.useEffect(() => {
            if (er) {
                if (ea?.question != null) Y.current?.focus();
                else {
                    let e = F.findIndex((e) => ea[`answer-${e.localCreationAnswerId}`]);
                    -1 !== e && B.current[e]?.focusInput();
                }
                eo(!1);
            }
        }, [ea, F, er, eo, B]);
    let eC = i.useCallback(() => {
            s === m.ip.ENTERED && el();
        }, [el, s]),
        eA =
            ((t = { disabled: ei, onSubmit: eC }),
            (n = i.useRef(t)),
            i.useEffect(() => {
                n.current = t;
            }, [t]),
            i.useCallback((e) => {
                let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    l = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
                    { disabled: a = !1, onSubmit: i } = n.current;
                "enter" === e.key.toLowerCase() &&
                    ("macos" === (0, R.getOS)() ? l : t) &&
                    !a &&
                    (e.preventDefault(), i());
            }, [])),
        eR = i.useMemo(
            () => [{ variant: "primary", onClick: eC, submitting: ei, text: T.intl.string(T.t.JOj8Zk), autoFocus: !1 }],
            [eC, ei],
        );
    return (0, a.jsx)(o.Modal, {
        transitionState: s,
        onClose: c,
        title: T.intl.string(T.t["GD/8X8"]),
        actions: eR,
        actionBarInput: (0, a.jsx)(d.S, { checked: M, onChange: (e) => G(e), label: T.intl.string(T.t["Ux+iQU"]) }),
        children: (0, a.jsxs)("div", {
            className: eu.Qs,
            onKeyDown: eA,
            children: [
                null != en && (0, a.jsx)(f.w, { type: "critical", children: en.getAnyErrorMessage() }),
                (0, a.jsx)(em, { question: q, onChange: V, error: ea?.question, inputRef: Y }),
                (0, a.jsx)(g.h, { size: 26 }),
                (0, a.jsxs)(b.D, {
                    role: "group",
                    label: T.intl.string(T.t.oMBfeS),
                    children: [
                        F.map((e, t) =>
                            (0, a.jsx)(
                                es,
                                {
                                    answer: e,
                                    channelId: l.id,
                                    index: t,
                                    isLastAnswer: t === F.length - 1,
                                    onEmojiSelect: Z,
                                    onEmojiRemove: Q,
                                    onAnswerTextChange: $,
                                    onRemoveAnswer: et,
                                    addAnswer: ee,
                                    submitPoll: eC,
                                    answerRowRefs: B,
                                    error: ea?.[`answer-${e.localCreationAnswerId}`],
                                    canRemoveAnswer: J,
                                    ref: (e) => {
                                        B.current[t] = e;
                                    },
                                },
                                e.localCreationAnswerId,
                            ),
                        ),
                        X &&
                            (0, a.jsx)("div", {
                                className: eu.Ox,
                                children: (0, a.jsx)(p.$, {
                                    icon: h.j,
                                    variant: "secondary",
                                    onClick: ee,
                                    "aria-label": T.intl.string(T.t.B2Uvme),
                                    buttonRef: W,
                                    text: T.intl.string(T.t.B2Uvme),
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)(g.h, { size: 18 }),
                (0, a.jsx)(ed, { selectedDuration: z, onSelect: H }),
            ],
        }),
    });
}
