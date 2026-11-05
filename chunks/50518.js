n.d(t, { default: () => eh });
var l,
    a = n(477900),
    i = n(582128),
    r = n(536637),
    o = n.n(r),
    s = n(239947),
    c = n(189213),
    u = n(103557),
    m = n(691885),
    d = n(192308),
    f = n(231723),
    g = n(588190),
    h = n(150934),
    C = n(683071),
    b = n(696986),
    R = n(452027),
    p = n(821609),
    A = n(307301),
    j = n(579872),
    w = n(139286),
    E = n(723702),
    x = n(551640),
    I = n(970244),
    k = n(969632);
(n(323874), n(14289), n(35956));
var P = n(744593),
    v = n(608461),
    N = n(412136);
function S(e, t) {
    let n = decodeURIComponent(t).split("/").pop() ?? "temp.gif";
    return `${e}-${n}`;
}
var y = (((l = {}).PREPARING = "PREPARING"), (l.READY_TO_UPLOAD = "READY_TO_UPLOAD"), (l.ERROR = "ERROR"), l),
    D = n(608299),
    O = n(274652),
    T = n(31717);
function _(e, t, n) {
    let l = { id: t, channelId: e, file: n, platform: O.x.WEB, origin: "unknown:poll_attachment" };
    D.A.addFile({ file: l, channelId: e, draftType: T.C.Poll });
}
var L = n(180662),
    U = n(792996);
function K(e, t) {
    return { mediaAttachmentState: { status: t, mediaURL: e }, emoji: void 0, stickerId: void 0 };
}
var Y = n(149468),
    q = n(652215),
    G = n(503698),
    z = n.n(G),
    B = n(855986),
    H = n(165862),
    M = n(477782),
    V = n(289873),
    F = n(460905),
    W = n(265872),
    $ = n(939249),
    X = n(22231),
    Z = n(95477),
    Q = n(241326),
    J = n(565645),
    ee = n(920134),
    et = n(770335),
    en = n(734057),
    el = n(522602),
    ea = n(307731),
    ei = n(698279),
    er = n(406255);
function eo(e) {
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
          ? (0, a.jsx)(J.A, {
                className: o,
                emojiId: r.id,
                emojiName: r.type === et.i.UNICODE ? r.optionallyDiverseSequence : r.name,
                animated: r.animated,
            })
          : s;
}
function es(e) {
    let { onSelect: t, onEditMedia: n, onDeleteMedia: l, closePopout: i } = e;
    return (0, a.jsx)("div", {
        className: er.li,
        children: (0, a.jsx)(H.W, {
            "data-menu-migrated-auto": !0,
            navId: "poll-media-edit-menu",
            onClose: i,
            "aria-label": U.intl.string(U.t["cV+h7B"]),
            onSelect: t,
            children: (0, a.jsxs)(M.rX, {
                children: [
                    (0, a.jsx)(M.Dr, { id: "poll-media-replace", label: U.intl.string(U.t.CZeRhU), action: n }),
                    (0, a.jsx)(M.Dr, {
                        id: "poll-media-delete",
                        label: U.intl.string(U.t.IhMxgu),
                        action: l,
                        color: "danger",
                    }),
                ],
            }),
        }),
    });
}
function ec(e) {
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
        f = (0, B.bG)([en.A], () => en.A.getChannel(t)),
        {
            emoji: g,
            isLoadingMedia: h,
            hasUpload: C,
            mediaUrl: b,
            mediaFilename: R,
        } = (function (e) {
            let { channelId: t, localCreationAnswerId: n, image: l } = e,
                a = l?.emoji,
                r = l?.mediaAttachmentState?.status === y.PREPARING,
                o = (0, B.bG)([el.A], () => el.A.getUpload(t, n, T.C.Poll)),
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
        p = C || null != g,
        A = i.useCallback(() => {
            o(s);
        }, [o, s]),
        j = i.useMemo(
            () =>
                C
                    ? U.intl.formatToPlainString(U.t.vcC7Qn, { imageName: (0, k.Kj)(R), answerNumber: s + 1 })
                    : null != g
                      ? U.intl.formatToPlainString(U.t.ncOAha, { emojiName: g.name, answerNumber: s + 1 })
                      : U.intl.formatToPlainString(U.t.emdpNo, { answerNumber: s + 1 }),
            [C, g, s, R],
        ),
        w = i.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, a.jsx)("div", {
                    className: er.Fb,
                    children: (0, a.jsx)(ee.A, {
                        channel: f,
                        pickerIntention: ea.EmojiIntention.POLLS,
                        closePopout: t,
                        onNavigateAway: t,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: l } = e;
                            (null != n && r(n, s), l && t());
                        },
                    }),
                });
            },
            [f, r, s],
        ),
        E = i.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, a.jsx)(es, { onSelect: t, onEditMedia: u, onDeleteMedia: A, closePopout: t });
            },
            [A, u],
        ),
        x = h
            ? (0, a.jsx)(V.y, { className: er.EC })
            : (0, a.jsx)(eo, {
                  hasUpload: C,
                  mediaUrl: b,
                  mediaFilename: R,
                  imageClassName: z()(er.$_, er.qX),
                  emoji: g,
                  emojiClassName: z()(er.$_, er.qZ),
                  fallback: (0, a.jsx)(F.ReactionIcon, { size: "sm", color: "currentColor", className: er.vr }),
              }),
        I = z()(ei.VQ, er.GB, { [er.ZV]: p });
    return (0, a.jsx)(W.Y, {
        targetElementRef: m,
        renderPopout: w,
        shouldShow: c,
        onRequestClose: u,
        animation: W.Y.Animation.NONE,
        position: "bottom",
        spacing: 2,
        children: (e) => {
            let { "aria-controls": t, "aria-expanded": n, ...l } = e;
            return (0, a.jsx)(W.Y, {
                targetElementRef: d,
                animation: W.Y.Animation.NONE,
                position: "bottom",
                renderPopout: E,
                children: (e) => {
                    let { onClick: l, "aria-controls": i, "aria-expanded": r, ...o } = e;
                    return (0, a.jsxs)($.D, {
                        innerRef: d,
                        ...o,
                        className: I,
                        onClick: p && !c ? l : u,
                        "aria-label": j,
                        "aria-controls": t ?? i,
                        "aria-expanded": n || r,
                        children: [
                            x,
                            p &&
                                (0, a.jsx)(X.PencilIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: er.IZ,
                                    "aria-hidden": !0,
                                }),
                        ],
                    });
                },
            });
        },
    });
}
function eu(e) {
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
            ref: h,
            answerRowRefs: C,
        } = e,
        b = i.useRef(null),
        R = i.useRef(null),
        p = i.useRef(null);
    i.useImperativeHandle(h, () => ({
        focusDeleteButton: () => R.current?.focus(),
        focusInput: () => p.current?.focus(),
    }));
    let [A, j] = i.useState(!1),
        w = i.useCallback(() => {
            j((e) => !e);
        }, []),
        x = i.useCallback(
            (e) => {
                let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    a = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
                switch (e.key.toLowerCase()) {
                    case "enter":
                        (r &&
                            (e.preventDefault(),
                            ((0, k.ND)(n) || "macos" !== (0, E.R0)() ? t : a) ? (e.stopPropagation(), f()) : d()),
                            C.current[l + 1]?.focusInput());
                        break;
                    case "e":
                        ("macos" === (0, E.R0)() ? a : t) && (e.preventDefault(), e.stopPropagation(), w());
                }
            },
            [d, n, C, l, r, f, w],
        ),
        I = (0, a.jsx)(ec, {
            containerRef: b,
            channelId: t,
            buttonImage: n.image,
            onEmojiSelect: s,
            onEmojiRemove: c,
            localCreationAnswerId: n.localCreationAnswerId,
            answerIndex: l,
            shouldShowEmojiPicker: A,
            toggleEmojiPicker: w,
        });
    return (0, a.jsx)("div", {
        ref: b,
        children: (0, a.jsx)(Z.k, {
            error: g,
            leading: { type: "emoji", button: I },
            trailing: u
                ? {
                      "aria-label": U.intl.formatToPlainString(U.t["22fjEc"], { answerNumber: l + 1 }),
                      icon: Q.TrashIcon,
                      onClick: () => m(l),
                      buttonRef: R,
                  }
                : void 0,
            "aria-label": U.intl.formatToPlainString(U.t["3+V8G9"], { answerNumber: l + 1 }),
            placeholder: U.intl.string(U.t.NNHVlv),
            value: n.text,
            onChange: (e) => o({ text: e, index: l, localCreationAnswerId: n.localCreationAnswerId }),
            onKeyDown: x,
            maxLength: 55,
            inputRef: p,
        }),
    });
}
var em = n(412728),
    ed = n(590923);
function ef(e) {
    let { question: t, onChange: n, error: l, inputRef: i } = e;
    return (0, a.jsx)(u.f, {
        label: U.intl.string(U.t.WBiKnI),
        inputRef: i,
        placeholder: U.intl.string(U.t["/uQqJW"]),
        value: t,
        onChange: n,
        maxLength: 300,
        error: l,
        rows: 1,
        autosize: !0,
        autoFocus: !0,
        showCharacterCount: !0,
    });
}
function eg(e) {
    let { selectedDuration: t, onSelect: n } = e,
        l = Object.freeze({
            [N.fT.ONE_HOUR]: U.intl.formatToPlainString(U.t["b/mgtw"], { num: 1 }),
            [N.fT.FOUR_HOURS]: U.intl.formatToPlainString(U.t["b/mgtw"], { num: 4 }),
            [N.fT.EIGHT_HOURS]: U.intl.formatToPlainString(U.t["b/mgtw"], { num: 8 }),
            [N.fT.ONE_DAY]: U.intl.formatToPlainString(U.t["b/mgtw"], { num: 24 }),
            [N.fT.THREE_DAYS]: U.intl.string(U.t.Xn5rX3),
            [N.fT.SEVEN_DAYS]: U.intl.string(U.t["Lmq+rj"]),
            [N.fT.FOURTEEN_DAYS]: U.intl.string(U.t["mb8A/O"]),
        }),
        i = l[t];
    return (0, a.jsx)("div", {
        className: ed.p0,
        children: (0, a.jsx)(m.l, {
            label: U.intl.string(U.t.bGHzxb),
            "aria-label": U.intl.formatToPlainString(U.t.nXNHNJ, { duration: i }),
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
function eh(e) {
    var t;
    let n,
        { channel: l, transitionState: r, onClose: u, initialQuestion: m, initialAnswers: O, initialDuration: G } = e;
    (0, w.A)({ type: em.z.MODAL, name: s.IJ.POLL_EDITOR_VIEWED });
    let z = i.useRef(null),
        B = i.useRef([]),
        H = i.useRef(null),
        {
            answers: M,
            question: V,
            allowMultiSelect: F,
            setAllowMultiSelect: W,
            duration: $,
            setDuration: X,
            scheduledTimestamp: Z,
            setScheduledTimestamp: Q,
            handleQuestionChange: J,
            handleAnswerTextChange: ee,
            handleEmojiSelect: et,
            canAddMoreAnswers: en,
            handleRemoveAnswerImage: el,
            canRemoveMoreAnswers: ea,
            handleAddAnswer: ei,
            handleRemoveAnswer: er,
            createPollError: eo,
            handleSubmitPoll: es,
            fieldErrors: ec,
            submitting: eC,
            shouldFocusOnInvalidField: eb,
            setShouldFocusOnInvalidField: eR,
        } = (function (e, t, n, l) {
            let a = e.id,
                [r, o] = i.useState(
                    () => l?.initialAnswers?.map((e) => ({ ...(0, k.YP)(), ...e })) ?? [(0, k.YP)(), (0, k.YP)()],
                ),
                [s, c] = i.useState(l?.initialQuestion ?? ""),
                [u, m] = i.useState(!1),
                [d, f] = i.useState(l?.initialDuration ?? N.fT.ONE_DAY),
                [g, h] = i.useState(),
                [C, b] = i.useState({}),
                [R, p] = i.useState(!1),
                A = r.filter((e) => (0, k.ND)(e)),
                j = r.filter((e) => (0, k.VD)(e)),
                w = s.length > 0 && A.length >= 1 && 0 === j.length,
                [E, { error: x, loading: I }] = (0, v.A)(L.A.createPoll),
                O = r.length < 10,
                Y = r.length > 1,
                q = i.useCallback((e) => {
                    (b((e) => {
                        let t = { ...e };
                        return (delete t.question, t);
                    }),
                        c(e));
                }, []),
                G = i.useCallback((e) => {
                    let { text: t, index: n, localCreationAnswerId: l } = e;
                    (b((e) => {
                        let t = { ...e };
                        return (delete t[`answer-${l}`], t);
                    }),
                        o((e) => {
                            let l = [...e];
                            return ((l[n] = { ...l[n], text: t }), l);
                        }));
                }, []),
                z = i.useCallback((e, t) => {
                    o((n) => {
                        let l = [...n];
                        return ((l[t] = { ...l[t], image: e }), l);
                    });
                }, []),
                B = i.useCallback(
                    (e, t, n) => {
                        let l = r[t],
                            a = l.image?.mediaAttachmentState;
                        null != a &&
                            a.mediaURL !== n &&
                            (async function (e, t, n) {
                                D.A.remove(e, t, T.C.Poll);
                            })(e, l.localCreationAnswerId, S(l.localCreationAnswerId, a.mediaURL));
                    },
                    [r],
                ),
                H = i.useCallback(
                    async (e, t, n) => {
                        let l = r[t].localCreationAnswerId;
                        (B(e, t),
                        z(K(n, y.PREPARING), t),
                        null ==
                            (await (async function (e, t, n) {
                                let l = S(t, n),
                                    a = await fetch(n);
                                return (_(e, t, new File([await a.blob()], l, { type: "image/gif" })), n);
                            })(e, l, n)))
                            ? z(K(n, y.ERROR), t)
                            : z(K(n, y.READY_TO_UPLOAD), t);
                    },
                    [r, z, B],
                ),
                M = i.useCallback(
                    (e, t, n) => {
                        let l = r[t].localCreationAnswerId,
                            a = URL.createObjectURL(n);
                        (B(e, t), z(K(a, y.PREPARING), t), _(e, l, n), z(K(a, y.READY_TO_UPLOAD), t));
                    },
                    [r, z, B],
                ),
                V = i.useCallback(
                    (e, t) => {
                        (B(a, t), z({ emoji: e, stickerId: void 0, mediaAttachmentState: void 0 }, t));
                    },
                    [a, z, B],
                ),
                F = i.useCallback((e) => {
                    o((t) => {
                        let n = [...t];
                        return ((n[e] = { ...n[e], image: void 0 }), n);
                    });
                }, []),
                W = i.useCallback(() => {
                    O && o((e) => [...e, (0, k.YP)()]);
                }, [O]),
                $ = i.useCallback(
                    (e) => {
                        if (!Y) return;
                        let t = r.length;
                        (B(a, e),
                            o((t) => {
                                let n = [...t];
                                return (n.splice(e, 1), n);
                            }),
                            n?.({ indexToRemove: e, numberOfAnswers: t }));
                    },
                    [r.length, Y, a, n, B],
                );
            i.useEffect(
                () => () => {
                    !(async function (e) {
                        D.A.clearAll(e, T.C.Poll);
                    })(a);
                },
                [a],
            );
            let X = i.useCallback(() => {
                    let e = !0,
                        t = {};
                    return (
                        0 === s.trim().length && ((e = !1), (t.question = U.intl.string(U.t.gPX3oI))),
                        r.filter((e) => (0, k.ND)(e)).length < 1 &&
                            ((e = !1), (t[`answer-${r[0].localCreationAnswerId}`] = U.intl.string(U.t.fYvzEX))),
                        r.forEach((n) => {
                            (0, k.VD)(n) &&
                                ((e = !1), (t[`answer-${n.localCreationAnswerId}`] = U.intl.string(U.t["8Qqkc+"])));
                        }),
                        b(t),
                        p(!e),
                        e
                    );
                }, [r, s]),
                Z = i.useCallback(async () => {
                    await E({
                        channel: e,
                        question: s,
                        answers: A,
                        allowMultiSelect: u,
                        duration: d,
                        layout: P.Z.DEFAULT,
                        onClose: t,
                        scheduledTimestamp: g,
                    });
                }, [s, A, u, d, g, E, e, t]),
                Q = i.useCallback(() => {
                    !I && X() && Z();
                }, [Z, I, X]);
            return {
                answers: r,
                question: s,
                setQuestion: c,
                allowMultiSelect: u,
                setAllowMultiSelect: m,
                duration: d,
                setDuration: f,
                scheduledTimestamp: g,
                setScheduledTimestamp: h,
                canPost: w,
                canAddMoreAnswers: O,
                canRemoveMoreAnswers: Y,
                handleQuestionChange: q,
                handleAnswerTextChange: G,
                handleGifSelect: H,
                handleEmojiSelect: V,
                handleCustomUpload: M,
                handleAddAnswer: W,
                handleRemoveAnswer: $,
                handleRemoveAnswerImage: F,
                fieldErrors: C,
                createPoll: Z,
                handleSubmitPoll: Q,
                submitting: I,
                createPollError: x,
                shouldFocusOnInvalidField: R,
                setShouldFocusOnInvalidField: p,
            };
        })(
            l,
            u,
            i.useCallback((e) => {
                let { indexToRemove: t, numberOfAnswers: n } = e;
                2 === n ? H.current?.focus() : B.current[t === n - 1 ? t - 1 : t + 1]?.focusDeleteButton();
            }, []),
            { initialQuestion: m, initialAnswers: O, initialDuration: G },
        ),
        { trackPollCreationCancelled: ep } = {
            trackPollCreationCancelled: i.useCallback(() => {
                let e = 0,
                    t = 0,
                    n = 0;
                (M.forEach((l) => {
                    let a = l.image;
                    null != a &&
                        (null != a.emoji
                            ? (t += 1)
                            : null != a.stickerId
                              ? (n += 1)
                              : null != a.mediaAttachmentState && (e += 1));
                }),
                    Y.Ay.trackWithMetadata(q.HAw.POLL_CREATION_CANCELLED, {
                        answers_count: M.length,
                        attachments_count: e,
                        emojis_count: t,
                        stickers_count: n,
                        allow_multiselect: F,
                        layout_type: P.Z.DEFAULT,
                    }));
            }, [M, F]),
        },
        eA = i.useRef(M.length),
        ej = i.useCallback(() => {
            (ep(), u());
        }, [u, ep]),
        ew = i.useCallback(() => {
            (0, k.Wn)(V, M)
                ? ej()
                : j.A.show({
                      title: U.intl.string(U.t.HMrgcp),
                      body: U.intl.string(U.t["Wxa/j8"]),
                      confirmText: U.intl.string(U.t.TzJA4g),
                      confirmVariant: "critical-primary",
                      cancelText: U.intl.string(U.t["2BR5R2"]),
                      onConfirm: () => {
                          ej();
                      },
                  });
        }, [ej, M, V]);
    (i.useEffect(() => {
        (0, d.zb)(N.sm, (e) => (0, a.jsx)(eh, { ...e, channel: l }), ew);
    }, [ew, l]),
        i.useEffect(() => {
            (M.length > eA.current && B.current[M.length - 1]?.focusInput(), (eA.current = M.length));
        }, [M.length]),
        i.useEffect(() => {
            if (eb) {
                if (ec?.question != null) z.current?.focus();
                else {
                    let e = M.findIndex((e) => !!ec[`answer-${e.localCreationAnswerId}`]);
                    -1 !== e && B.current[e]?.focusInput();
                }
                eR(!1);
            }
        }, [ec, M, eb, eR, B]));
    let eE = i.useCallback(() => {
            r === f.ip.ENTERED && es();
        }, [es, r]),
        ex = i.useCallback(
            () =>
                (0, I.e0)({
                    channel: l,
                    defaultValue: null != Z ? o()(Z) : void 0,
                    onSubmit: Q,
                    onClear: null != Z ? () => Q(void 0) : void 0,
                    entryPoint: x.t.POLL_CREATION,
                    isEditing: null != Z,
                }),
            [l, Z, Q],
        ),
        eI =
            ((t = { disabled: eC, onSubmit: eE }),
            (n = i.useRef(t)),
            i.useEffect(() => {
                n.current = t;
            }, [t]),
            i.useCallback((e) => {
                let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    l = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
                    { disabled: a = !1, onSubmit: i } = n.current;
                "enter" === e.key.toLowerCase() && ("macos" === (0, E.R0)() ? l : t) && !a && (e.preventDefault(), i());
            }, [])),
        ek = i.useMemo(
            () => [
                {
                    variant: null != Z ? "active" : "secondary",
                    icon: g.CalendarPlusIcon,
                    text: void 0,
                    fullWidth: !1,
                    "aria-label":
                        null != Z
                            ? U.intl.formatToPlainString(U.t.ZN3tIx, { timestamp: new Date(Z).valueOf() })
                            : U.intl.string(U.t.rlf0tb),
                    onClick: ex,
                    disabled: eC,
                },
                { variant: "primary", onClick: eE, submitting: eC, text: U.intl.string(U.t.JOj8Zk), autoFocus: !1 },
            ],
            [eE, eC, Z, ex],
        );
    return (0, a.jsx)(c.a, {
        transitionState: r,
        onClose: u,
        title: U.intl.string(U.t["GD/8X8"]),
        actions: ek,
        actionBarInput: (0, a.jsx)(h.S, { checked: F, onChange: (e) => W(e), label: U.intl.string(U.t["Ux+iQU"]) }),
        children: (0, a.jsxs)("div", {
            className: ed.Qs,
            onKeyDown: eI,
            children: [
                null != eo && (0, a.jsx)(C.w, { type: "critical", message: eo.getAnyErrorMessage(), role: "alert" }),
                (0, a.jsx)(ef, { question: V, onChange: J, error: ec?.question, inputRef: z }),
                (0, a.jsx)(b.h, { size: 26 }),
                (0, a.jsxs)(R.D, {
                    role: "group",
                    label: U.intl.string(U.t.oMBfeS),
                    children: [
                        M.map((e, t) =>
                            (0, a.jsx)(
                                eu,
                                {
                                    answer: e,
                                    channelId: l.id,
                                    index: t,
                                    isLastAnswer: t === M.length - 1,
                                    onEmojiSelect: et,
                                    onEmojiRemove: el,
                                    onAnswerTextChange: ee,
                                    onRemoveAnswer: er,
                                    addAnswer: ei,
                                    submitPoll: eE,
                                    answerRowRefs: B,
                                    error: ec?.[`answer-${e.localCreationAnswerId}`],
                                    canRemoveAnswer: ea,
                                    ref: (e) => {
                                        B.current[t] = e;
                                    },
                                },
                                e.localCreationAnswerId,
                            ),
                        ),
                        en &&
                            (0, a.jsx)("div", {
                                className: ed.Ox,
                                children: (0, a.jsx)(p.$, {
                                    icon: A.PlusSmallIcon,
                                    variant: "secondary",
                                    onClick: ei,
                                    "aria-label": U.intl.string(U.t.B2Uvme),
                                    buttonRef: H,
                                    text: U.intl.string(U.t.B2Uvme),
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)(b.h, { size: 18 }),
                (0, a.jsx)(eg, { selectedDuration: $, onSelect: X }),
            ],
        }),
    });
}
