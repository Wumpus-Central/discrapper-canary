n.d(t, { default: () => eA });
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
    p = n(452027),
    A = n(821609),
    R = n(307301),
    j = n(579872),
    w = n(139286),
    E = n(723702),
    x = n(551640),
    k = n(566908),
    v = n(970244),
    I = n(969632);
n(323874), n(14289), n(35956);
var S = n(744593),
    P = n(608461),
    N = n(412136);
function y(e, t) {
    let n = decodeURIComponent(t).split("/").pop() ?? "temp.gif";
    return `${e}-${n}`;
}
var D = (((l = {}).PREPARING = "PREPARING"), (l.READY_TO_UPLOAD = "READY_TO_UPLOAD"), (l.ERROR = "ERROR"), l),
    O = n(608299),
    T = n(565150),
    L = n(31717);
async function _(e, t, n) {
    let l = y(t, n),
        a = await fetch(n);
    return U(e, t, new File([await a.blob()], l, { type: "image/gif" })), n;
}
function U(e, t, n) {
    let l = { id: t, channelId: e, file: n, platform: T.xz.WEB, origin: "unknown:poll_attachment" };
    O.A.addFile({ file: l, channelId: e, draftType: L.C.Poll });
}
async function K(e, t, n) {
    O.A.remove(e, t, L.C.Poll);
}
async function Y(e) {
    O.A.clearAll(e, L.C.Poll);
}
var F = n(180662),
    W = n(375708);
function M(e, t) {
    return { mediaAttachmentState: { status: t, mediaURL: e }, emoji: void 0, stickerId: void 0 };
}
var q = n(95561),
    G = n(652215),
    z = n(503698),
    B = n.n(z),
    H = n(17928),
    V = n(980707),
    $ = n(477782),
    X = n(289873),
    Z = n(460905),
    Q = n(922016),
    J = n(939249),
    ee = n(22231),
    et = n(95477),
    en = n(241326),
    el = n(565645),
    ea = n(267889),
    ei = n(770335),
    er = n(734057),
    eo = n(522602),
    es = n(307731),
    ec = n(698279),
    eu = n(406255);
function em(e) {
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
          ? (0, a.jsx)(el.A, {
                className: o,
                emojiId: r.id,
                emojiName: r.type === ei.i.UNICODE ? r.optionallyDiverseSequence : r.name,
                animated: r.animated,
            })
          : s;
}
function ed(e) {
    let { onSelect: t, onEditMedia: n, onDeleteMedia: l, closePopout: i } = e;
    return (0, a.jsx)("div", {
        className: eu.li,
        children: (0, a.jsx)(V.W, {
            "data-menu-migrated-auto": !0,
            navId: "poll-media-edit-menu",
            onClose: i,
            "aria-label": W.intl.string(W.t["cV+h7B"]),
            onSelect: t,
            children: (0, a.jsxs)($.rX, {
                children: [
                    (0, a.jsx)($.Dr, { id: "poll-media-replace", label: W.intl.string(W.t.CZeRhU), action: n }),
                    (0, a.jsx)($.Dr, {
                        id: "poll-media-delete",
                        label: W.intl.string(W.t.IhMxgu),
                        action: l,
                        color: "danger",
                    }),
                ],
            }),
        }),
    });
}
function ef(e) {
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
        f = (0, H.bG)([er.A], () => er.A.getChannel(t)),
        {
            emoji: g,
            isLoadingMedia: h,
            hasUpload: C,
            mediaUrl: b,
            mediaFilename: p,
        } = (function (e) {
            let { channelId: t, localCreationAnswerId: n, image: l } = e,
                a = l?.emoji,
                r = l?.mediaAttachmentState?.status === D.PREPARING,
                o = (0, H.bG)([eo.A], () => eo.A.getUpload(t, n, L.C.Poll)),
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
        A = C || null != g,
        R = i.useCallback(() => {
            o(s);
        }, [o, s]),
        j = i.useMemo(
            () =>
                C
                    ? W.intl.formatToPlainString(W.t.vcC7Qn, { imageName: (0, I.Kj)(p), answerNumber: s + 1 })
                    : null != g
                      ? W.intl.formatToPlainString(W.t.ncOAha, { emojiName: g.name, answerNumber: s + 1 })
                      : W.intl.formatToPlainString(W.t.emdpNo, { answerNumber: s + 1 }),
            [C, g, s, p],
        ),
        w = i.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, a.jsx)("div", {
                    className: eu.Fb,
                    children: (0, a.jsx)(ea.A, {
                        channel: f,
                        pickerIntention: es.EmojiIntention.POLLS,
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
        E = i.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, a.jsx)(ed, { onSelect: t, onEditMedia: u, onDeleteMedia: R, closePopout: t });
            },
            [R, u],
        ),
        x = h
            ? (0, a.jsx)(X.y, { className: eu.EC })
            : (0, a.jsx)(em, {
                  hasUpload: C,
                  mediaUrl: b,
                  mediaFilename: p,
                  imageClassName: B()(eu.$_, eu.qX),
                  emoji: g,
                  emojiClassName: B()(eu.$_, eu.qZ),
                  fallback: (0, a.jsx)(Z.n, { size: "sm", color: "currentColor", className: eu.vr }),
              }),
        k = B()(ec.VQ, eu.GB, { [eu.ZV]: A });
    return (0, a.jsx)(Q.Y, {
        targetElementRef: m,
        renderPopout: w,
        shouldShow: c,
        onRequestClose: u,
        animation: Q.Y.Animation.NONE,
        position: "bottom",
        spacing: 2,
        children: (e) => {
            let { "aria-controls": t, "aria-expanded": n, ...l } = e;
            return (0, a.jsx)(Q.Y, {
                targetElementRef: d,
                animation: Q.Y.Animation.NONE,
                position: "bottom",
                renderPopout: E,
                children: (e) => {
                    let { onClick: l, "aria-controls": i, "aria-expanded": r, ...o } = e;
                    return (0, a.jsxs)(J.D, {
                        innerRef: d,
                        ...o,
                        className: k,
                        onClick: A && !c ? l : u,
                        "aria-label": j,
                        "aria-controls": t ?? i,
                        "aria-expanded": n || r,
                        children: [
                            x,
                            A &&
                                (0, a.jsx)(ee.PencilIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eu.IZ,
                                    "aria-hidden": !0,
                                }),
                        ],
                    });
                },
            });
        },
    });
}
function eg(e) {
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
        p = i.useRef(null),
        A = i.useRef(null);
    i.useImperativeHandle(h, () => ({
        focusDeleteButton: () => p.current?.focus(),
        focusInput: () => A.current?.focus(),
    }));
    let [R, j] = i.useState(!1),
        w = i.useCallback(() => {
            j((e) => !e);
        }, []),
        x = i.useCallback(
            (e) => {
                let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    a = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
                switch (e.key.toLowerCase()) {
                    case "enter":
                        r &&
                            (e.preventDefault(),
                            ((0, I.ND)(n) || "macos" !== (0, E.getOS)() ? t : a) ? (e.stopPropagation(), f()) : d()),
                            C.current[l + 1]?.focusInput();
                        break;
                    case "e":
                        ("macos" === (0, E.getOS)() ? a : t) && (e.preventDefault(), e.stopPropagation(), w());
                }
            },
            [d, n, C, l, r, f, w],
        ),
        k = (0, a.jsx)(ef, {
            containerRef: b,
            channelId: t,
            buttonImage: n.image,
            onEmojiSelect: s,
            onEmojiRemove: c,
            localCreationAnswerId: n.localCreationAnswerId,
            answerIndex: l,
            shouldShowEmojiPicker: R,
            toggleEmojiPicker: w,
        });
    return (0, a.jsx)("div", {
        ref: b,
        children: (0, a.jsx)(et.k, {
            error: g,
            leading: { type: "emoji", button: k },
            trailing: u
                ? {
                      "aria-label": W.intl.formatToPlainString(W.t["22fjEc"], { answerNumber: l + 1 }),
                      icon: en.TrashIcon,
                      onClick: () => m(l),
                      buttonRef: p,
                  }
                : void 0,
            "aria-label": W.intl.formatToPlainString(W.t["3+V8G9"], { answerNumber: l + 1 }),
            placeholder: W.intl.string(W.t.NNHVlv),
            value: n.text,
            onChange: (e) => o({ text: e, index: l, localCreationAnswerId: n.localCreationAnswerId }),
            onKeyDown: x,
            maxLength: N.dv,
            inputRef: A,
        }),
    });
}
var eh = n(412728),
    eC = n(590923);
function eb(e) {
    let { question: t, onChange: n, error: l, inputRef: i } = e;
    return (0, a.jsx)(u.f, {
        label: W.intl.string(W.t.WBiKnI),
        inputRef: i,
        placeholder: W.intl.string(W.t["/uQqJW"]),
        value: t,
        onChange: n,
        maxLength: N.jD,
        error: l,
        rows: 1,
        autosize: !0,
        autoFocus: !0,
        showCharacterCount: !0,
    });
}
function ep(e) {
    let { selectedDuration: t, onSelect: n } = e,
        l = Object.freeze({
            [N.fT.ONE_HOUR]: W.intl.formatToPlainString(W.t["b/mgtw"], { num: 1 }),
            [N.fT.FOUR_HOURS]: W.intl.formatToPlainString(W.t["b/mgtw"], { num: 4 }),
            [N.fT.EIGHT_HOURS]: W.intl.formatToPlainString(W.t["b/mgtw"], { num: 8 }),
            [N.fT.ONE_DAY]: W.intl.formatToPlainString(W.t["b/mgtw"], { num: 24 }),
            [N.fT.THREE_DAYS]: W.intl.string(W.t.Xn5rX3),
            [N.fT.SEVEN_DAYS]: W.intl.string(W.t["Lmq+rj"]),
            [N.fT.FOURTEEN_DAYS]: W.intl.string(W.t["mb8A/O"]),
        }),
        i = l[t];
    return (0, a.jsx)("div", {
        className: eC.p0,
        children: (0, a.jsx)(m.l, {
            label: W.intl.string(W.t.bGHzxb),
            "aria-label": W.intl.formatToPlainString(W.t.nXNHNJ, { duration: i }),
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
function eA(e) {
    var t;
    let n,
        { channel: l, transitionState: r, onClose: u, initialQuestion: m, initialAnswers: O, initialDuration: T } = e;
    (0, w.A)({ type: eh.z.MODAL, name: s.IJ.POLL_EDITOR_VIEWED });
    let L = i.useRef(null),
        z = i.useRef([]),
        B = i.useRef(null),
        {
            answers: H,
            question: V,
            allowMultiSelect: $,
            setAllowMultiSelect: X,
            duration: Z,
            setDuration: Q,
            scheduledTimestamp: J,
            setScheduledTimestamp: ee,
            handleQuestionChange: et,
            handleAnswerTextChange: en,
            handleEmojiSelect: el,
            canAddMoreAnswers: ea,
            handleRemoveAnswerImage: ei,
            canRemoveMoreAnswers: er,
            handleAddAnswer: eo,
            handleRemoveAnswer: es,
            createPollError: ec,
            handleSubmitPoll: eu,
            fieldErrors: em,
            submitting: ed,
            shouldFocusOnInvalidField: ef,
            setShouldFocusOnInvalidField: eR,
        } = (function (e, t, n, l) {
            let a = e.id,
                [r, o] = i.useState(
                    () => l?.initialAnswers?.map((e) => ({ ...(0, I.YP)(), ...e })) ?? [(0, I.YP)(), (0, I.YP)()],
                ),
                [s, c] = i.useState(l?.initialQuestion ?? ""),
                [u, m] = i.useState(!1),
                [d, f] = i.useState(l?.initialDuration ?? N.fT.ONE_DAY),
                [g, h] = i.useState(),
                [C, b] = i.useState({}),
                [p, A] = i.useState(!1),
                R = r.filter((e) => (0, I.ND)(e)),
                j = r.filter((e) => (0, I.VD)(e)),
                w = s.length > 0 && R.length >= N.FW && 0 === j.length,
                [E, { error: x, loading: k }] = (0, P.A)(F.A.createPoll),
                v = r.length < N.Lu,
                O = r.length > N.FW,
                T = i.useCallback((e) => {
                    b((e) => {
                        let t = { ...e };
                        return delete t.question, t;
                    }),
                        c(e);
                }, []),
                L = i.useCallback((e) => {
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
                q = i.useCallback((e, t) => {
                    o((n) => {
                        let l = [...n];
                        return (l[t] = { ...l[t], image: e }), l;
                    });
                }, []),
                G = i.useCallback(
                    (e, t, n) => {
                        let l = r[t],
                            a = l.image?.mediaAttachmentState;
                        null != a &&
                            a.mediaURL !== n &&
                            K(e, l.localCreationAnswerId, y(l.localCreationAnswerId, a.mediaURL));
                    },
                    [r],
                ),
                z = i.useCallback(
                    async (e, t, n) => {
                        let l = r[t].localCreationAnswerId;
                        (G(e, t), q(M(n, D.PREPARING), t), null == (await _(e, l, n)))
                            ? q(M(n, D.ERROR), t)
                            : q(M(n, D.READY_TO_UPLOAD), t);
                    },
                    [r, q, G],
                ),
                B = i.useCallback(
                    (e, t, n) => {
                        let l = r[t].localCreationAnswerId,
                            a = URL.createObjectURL(n);
                        G(e, t), q(M(a, D.PREPARING), t), U(e, l, n), q(M(a, D.READY_TO_UPLOAD), t);
                    },
                    [r, q, G],
                ),
                H = i.useCallback(
                    (e, t) => {
                        G(a, t), q({ emoji: e, stickerId: void 0, mediaAttachmentState: void 0 }, t);
                    },
                    [a, q, G],
                ),
                V = i.useCallback((e) => {
                    o((t) => {
                        let n = [...t];
                        return (n[e] = { ...n[e], image: void 0 }), n;
                    });
                }, []),
                $ = i.useCallback(() => {
                    v && o((e) => [...e, (0, I.YP)()]);
                }, [v]),
                X = i.useCallback(
                    (e) => {
                        if (!O) return;
                        let t = r.length;
                        G(a, e),
                            o((t) => {
                                let n = [...t];
                                return n.splice(e, 1), n;
                            }),
                            n?.({ indexToRemove: e, numberOfAnswers: t });
                    },
                    [r.length, O, a, n, G],
                );
            i.useEffect(
                () => () => {
                    Y(a);
                },
                [a],
            );
            let Z = i.useCallback(() => {
                    let e = !0,
                        t = {};
                    return (
                        0 === s.trim().length && ((e = !1), (t.question = W.intl.string(W.t.gPX3oI))),
                        r.filter((e) => (0, I.ND)(e)).length < N.FW &&
                            ((e = !1), (t[`answer-${r[0].localCreationAnswerId}`] = W.intl.string(W.t.fYvzEX))),
                        r.forEach((n) => {
                            (0, I.VD)(n) &&
                                ((e = !1), (t[`answer-${n.localCreationAnswerId}`] = W.intl.string(W.t["8Qqkc+"])));
                        }),
                        b(t),
                        A(!e),
                        e
                    );
                }, [r, s]),
                Q = i.useCallback(async () => {
                    await E({
                        channel: e,
                        question: s,
                        answers: R,
                        allowMultiSelect: u,
                        duration: d,
                        layout: S.Z.DEFAULT,
                        onClose: t,
                        scheduledTimestamp: g,
                    });
                }, [s, R, u, d, g, E, e, t]),
                J = i.useCallback(() => {
                    !k && Z() && Q();
                }, [Q, k, Z]);
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
                canAddMoreAnswers: v,
                canRemoveMoreAnswers: O,
                handleQuestionChange: T,
                handleAnswerTextChange: L,
                handleGifSelect: z,
                handleEmojiSelect: H,
                handleCustomUpload: B,
                handleAddAnswer: $,
                handleRemoveAnswer: X,
                handleRemoveAnswerImage: V,
                fieldErrors: C,
                createPoll: Q,
                handleSubmitPoll: J,
                submitting: k,
                createPollError: x,
                shouldFocusOnInvalidField: p,
                setShouldFocusOnInvalidField: A,
            };
        })(
            l,
            u,
            i.useCallback((e) => {
                let { indexToRemove: t, numberOfAnswers: n } = e;
                n === N.FW + 1 ? B.current?.focus() : z.current[t === n - 1 ? t - 1 : t + 1]?.focusDeleteButton();
            }, []),
            { initialQuestion: m, initialAnswers: O, initialDuration: T },
        ),
        { trackPollCreationCancelled: ej } = {
            trackPollCreationCancelled: i.useCallback(() => {
                let e = 0,
                    t = 0,
                    n = 0;
                H.forEach((l) => {
                    let a = l.image;
                    null != a &&
                        (null != a.emoji
                            ? (t += 1)
                            : null != a.stickerId
                              ? (n += 1)
                              : null != a.mediaAttachmentState && (e += 1));
                }),
                    q.Ay.trackWithMetadata(G.HAw.POLL_CREATION_CANCELLED, {
                        answers_count: H.length,
                        attachments_count: e,
                        emojis_count: t,
                        stickers_count: n,
                        allow_multiselect: $,
                        layout_type: S.Z.DEFAULT,
                    });
            }, [H, $]),
        },
        ew = (0, k.Sc)(),
        eE = i.useRef(H.length),
        ex = i.useCallback(() => {
            ej(), u();
        }, [u, ej]),
        ek = i.useCallback(() => {
            (0, I.Wn)(V, H)
                ? ex()
                : j.A.show({
                      title: W.intl.string(W.t.HMrgcp),
                      body: W.intl.string(W.t["Wxa/j8"]),
                      confirmText: W.intl.string(W.t.TzJA4g),
                      confirmVariant: "critical-primary",
                      cancelText: W.intl.string(W.t["2BR5R2"]),
                      onConfirm: () => {
                          ex();
                      },
                  });
        }, [ex, H, V]);
    i.useEffect(() => {
        (0, d.updateModal)(N.sm, (e) => (0, a.jsx)(eA, { ...e, channel: l }), ek);
    }, [ek, l]),
        i.useEffect(() => {
            H.length > eE.current && z.current[H.length - 1]?.focusInput(), (eE.current = H.length);
        }, [H.length]),
        i.useEffect(() => {
            if (ef) {
                if (em?.question != null) L.current?.focus();
                else {
                    let e = H.findIndex((e) => !!em[`answer-${e.localCreationAnswerId}`]);
                    -1 !== e && z.current[e]?.focusInput();
                }
                eR(!1);
            }
        }, [em, H, ef, eR, z]);
    let ev = i.useCallback(() => {
            r === f.ip.ENTERED && eu();
        }, [eu, r]),
        eI = i.useCallback(
            () =>
                (0, v.e0)({
                    channel: l,
                    defaultValue: null != J ? o()(J) : void 0,
                    onSubmit: ee,
                    onClear: null != J ? () => ee(void 0) : void 0,
                    entryPoint: x.t.POLL_CREATION,
                    isEditing: null != J,
                }),
            [l, J, ee],
        ),
        eS =
            ((t = { disabled: ed, onSubmit: ev }),
            (n = i.useRef(t)),
            i.useEffect(() => {
                n.current = t;
            }, [t]),
            i.useCallback((e) => {
                let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    l = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
                    { disabled: a = !1, onSubmit: i } = n.current;
                "enter" === e.key.toLowerCase() &&
                    ("macos" === (0, E.getOS)() ? l : t) &&
                    !a &&
                    (e.preventDefault(), i());
            }, [])),
        eP = i.useMemo(
            () => [
                ...(ew
                    ? [
                          {
                              variant: null != J ? "active" : "secondary",
                              icon: g.U,
                              text: void 0,
                              fullWidth: !1,
                              "aria-label":
                                  null != J
                                      ? W.intl.formatToPlainString(W.t.ZN3tIx, { timestamp: new Date(J).valueOf() })
                                      : W.intl.string(W.t.rlf0tb),
                              onClick: eI,
                              disabled: ed,
                          },
                      ]
                    : []),
                { variant: "primary", onClick: ev, submitting: ed, text: W.intl.string(W.t.JOj8Zk), autoFocus: !1 },
            ],
            [ev, ed, ew, J, eI],
        );
    return (0, a.jsx)(c.Modal, {
        transitionState: r,
        onClose: u,
        title: W.intl.string(W.t["GD/8X8"]),
        actions: eP,
        actionBarInput: (0, a.jsx)(h.S, { checked: $, onChange: (e) => X(e), label: W.intl.string(W.t["Ux+iQU"]) }),
        children: (0, a.jsxs)("div", {
            className: eC.Qs,
            onKeyDown: eS,
            children: [
                null != ec && (0, a.jsx)(C.w, { type: "critical", children: ec.getAnyErrorMessage() }),
                (0, a.jsx)(eb, { question: V, onChange: et, error: em?.question, inputRef: L }),
                (0, a.jsx)(b.h, { size: 26 }),
                (0, a.jsxs)(p.D, {
                    role: "group",
                    label: W.intl.string(W.t.oMBfeS),
                    children: [
                        H.map((e, t) =>
                            (0, a.jsx)(
                                eg,
                                {
                                    answer: e,
                                    channelId: l.id,
                                    index: t,
                                    isLastAnswer: t === H.length - 1,
                                    onEmojiSelect: el,
                                    onEmojiRemove: ei,
                                    onAnswerTextChange: en,
                                    onRemoveAnswer: es,
                                    addAnswer: eo,
                                    submitPoll: ev,
                                    answerRowRefs: z,
                                    error: em?.[`answer-${e.localCreationAnswerId}`],
                                    canRemoveAnswer: er,
                                    ref: (e) => {
                                        z.current[t] = e;
                                    },
                                },
                                e.localCreationAnswerId,
                            ),
                        ),
                        ea &&
                            (0, a.jsx)("div", {
                                className: eC.Ox,
                                children: (0, a.jsx)(A.$, {
                                    icon: R.j,
                                    variant: "secondary",
                                    onClick: eo,
                                    "aria-label": W.intl.string(W.t.B2Uvme),
                                    buttonRef: B,
                                    text: W.intl.string(W.t.B2Uvme),
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)(b.h, { size: 18 }),
                (0, a.jsx)(ep, { selectedDuration: Z, onSelect: Q }),
            ],
        }),
    });
}
