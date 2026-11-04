n.d(t, { default: () => eC });
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
    k = n(566908),
    I = n(970244),
    v = n(969632);
(n(323874), n(14289), n(35956));
var P = n(744593),
    N = n(608461),
    S = n(412136);
function y(e, t) {
    let n = decodeURIComponent(t).split("/").pop() ?? "temp.gif";
    return `${e}-${n}`;
}
var D = (((l = {}).PREPARING = "PREPARING"), (l.READY_TO_UPLOAD = "READY_TO_UPLOAD"), (l.ERROR = "ERROR"), l),
    O = n(608299),
    T = n(274652),
    _ = n(31717);
function L(e, t, n) {
    let l = { id: t, channelId: e, file: n, platform: T.x.WEB, origin: "unknown:poll_attachment" };
    O.A.addFile({ file: l, channelId: e, draftType: _.C.Poll });
}
var U = n(180662),
    K = n(792996);
function Y(e, t) {
    return { mediaAttachmentState: { status: t, mediaURL: e }, emoji: void 0, stickerId: void 0 };
}
var q = n(149468),
    G = n(652215),
    z = n(503698),
    B = n.n(z),
    H = n(855986),
    M = n(165862),
    V = n(477782),
    F = n(289873),
    W = n(460905),
    $ = n(265872),
    X = n(939249),
    Z = n(22231),
    Q = n(95477),
    J = n(241326),
    ee = n(565645),
    et = n(920134),
    en = n(770335),
    el = n(734057),
    ea = n(522602),
    ei = n(307731),
    er = n(698279),
    eo = n(406255);
function es(e) {
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
          ? (0, a.jsx)(ee.A, {
                className: o,
                emojiId: r.id,
                emojiName: r.type === en.i.UNICODE ? r.optionallyDiverseSequence : r.name,
                animated: r.animated,
            })
          : s;
}
function ec(e) {
    let { onSelect: t, onEditMedia: n, onDeleteMedia: l, closePopout: i } = e;
    return (0, a.jsx)("div", {
        className: eo.li,
        children: (0, a.jsx)(M.W, {
            "data-menu-migrated-auto": !0,
            navId: "poll-media-edit-menu",
            onClose: i,
            "aria-label": K.intl.string(K.t["cV+h7B"]),
            onSelect: t,
            children: (0, a.jsxs)(V.rX, {
                children: [
                    (0, a.jsx)(V.Dr, { id: "poll-media-replace", label: K.intl.string(K.t.CZeRhU), action: n }),
                    (0, a.jsx)(V.Dr, {
                        id: "poll-media-delete",
                        label: K.intl.string(K.t.IhMxgu),
                        action: l,
                        color: "danger",
                    }),
                ],
            }),
        }),
    });
}
function eu(e) {
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
        f = (0, H.bG)([el.A], () => el.A.getChannel(t)),
        {
            emoji: g,
            isLoadingMedia: h,
            hasUpload: C,
            mediaUrl: b,
            mediaFilename: R,
        } = (function (e) {
            let { channelId: t, localCreationAnswerId: n, image: l } = e,
                a = l?.emoji,
                r = l?.mediaAttachmentState?.status === D.PREPARING,
                o = (0, H.bG)([ea.A], () => ea.A.getUpload(t, n, _.C.Poll)),
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
                    ? K.intl.formatToPlainString(K.t.vcC7Qn, { imageName: (0, v.Kj)(R), answerNumber: s + 1 })
                    : null != g
                      ? K.intl.formatToPlainString(K.t.ncOAha, { emojiName: g.name, answerNumber: s + 1 })
                      : K.intl.formatToPlainString(K.t.emdpNo, { answerNumber: s + 1 }),
            [C, g, s, R],
        ),
        w = i.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, a.jsx)("div", {
                    className: eo.Fb,
                    children: (0, a.jsx)(et.A, {
                        channel: f,
                        pickerIntention: ei.EmojiIntention.POLLS,
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
                return (0, a.jsx)(ec, { onSelect: t, onEditMedia: u, onDeleteMedia: A, closePopout: t });
            },
            [A, u],
        ),
        x = h
            ? (0, a.jsx)(F.y, { className: eo.EC })
            : (0, a.jsx)(es, {
                  hasUpload: C,
                  mediaUrl: b,
                  mediaFilename: R,
                  imageClassName: B()(eo.$_, eo.qX),
                  emoji: g,
                  emojiClassName: B()(eo.$_, eo.qZ),
                  fallback: (0, a.jsx)(W.n, { size: "sm", color: "currentColor", className: eo.vr }),
              }),
        k = B()(er.VQ, eo.GB, { [eo.ZV]: p });
    return (0, a.jsx)($.Y, {
        targetElementRef: m,
        renderPopout: w,
        shouldShow: c,
        onRequestClose: u,
        animation: $.Y.Animation.NONE,
        position: "bottom",
        spacing: 2,
        children: (e) => {
            let { "aria-controls": t, "aria-expanded": n, ...l } = e;
            return (0, a.jsx)($.Y, {
                targetElementRef: d,
                animation: $.Y.Animation.NONE,
                position: "bottom",
                renderPopout: E,
                children: (e) => {
                    let { onClick: l, "aria-controls": i, "aria-expanded": r, ...o } = e;
                    return (0, a.jsxs)(X.D, {
                        innerRef: d,
                        ...o,
                        className: k,
                        onClick: p && !c ? l : u,
                        "aria-label": j,
                        "aria-controls": t ?? i,
                        "aria-expanded": n || r,
                        children: [
                            x,
                            p &&
                                (0, a.jsx)(Z.PencilIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eo.IZ,
                                    "aria-hidden": !0,
                                }),
                        ],
                    });
                },
            });
        },
    });
}
function em(e) {
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
                            ((0, v.ND)(n) || "macos" !== (0, E.R0)() ? t : a) ? (e.stopPropagation(), f()) : d()),
                            C.current[l + 1]?.focusInput());
                        break;
                    case "e":
                        ("macos" === (0, E.R0)() ? a : t) && (e.preventDefault(), e.stopPropagation(), w());
                }
            },
            [d, n, C, l, r, f, w],
        ),
        k = (0, a.jsx)(eu, {
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
        children: (0, a.jsx)(Q.k, {
            error: g,
            leading: { type: "emoji", button: k },
            trailing: u
                ? {
                      "aria-label": K.intl.formatToPlainString(K.t["22fjEc"], { answerNumber: l + 1 }),
                      icon: J.TrashIcon,
                      onClick: () => m(l),
                      buttonRef: R,
                  }
                : void 0,
            "aria-label": K.intl.formatToPlainString(K.t["3+V8G9"], { answerNumber: l + 1 }),
            placeholder: K.intl.string(K.t.NNHVlv),
            value: n.text,
            onChange: (e) => o({ text: e, index: l, localCreationAnswerId: n.localCreationAnswerId }),
            onKeyDown: x,
            maxLength: 55,
            inputRef: p,
        }),
    });
}
var ed = n(412728),
    ef = n(590923);
function eg(e) {
    let { question: t, onChange: n, error: l, inputRef: i } = e;
    return (0, a.jsx)(u.f, {
        label: K.intl.string(K.t.WBiKnI),
        inputRef: i,
        placeholder: K.intl.string(K.t["/uQqJW"]),
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
function eh(e) {
    let { selectedDuration: t, onSelect: n } = e,
        l = Object.freeze({
            [S.fT.ONE_HOUR]: K.intl.formatToPlainString(K.t["b/mgtw"], { num: 1 }),
            [S.fT.FOUR_HOURS]: K.intl.formatToPlainString(K.t["b/mgtw"], { num: 4 }),
            [S.fT.EIGHT_HOURS]: K.intl.formatToPlainString(K.t["b/mgtw"], { num: 8 }),
            [S.fT.ONE_DAY]: K.intl.formatToPlainString(K.t["b/mgtw"], { num: 24 }),
            [S.fT.THREE_DAYS]: K.intl.string(K.t.Xn5rX3),
            [S.fT.SEVEN_DAYS]: K.intl.string(K.t["Lmq+rj"]),
            [S.fT.FOURTEEN_DAYS]: K.intl.string(K.t["mb8A/O"]),
        }),
        i = l[t];
    return (0, a.jsx)("div", {
        className: ef.p0,
        children: (0, a.jsx)(m.l, {
            label: K.intl.string(K.t.bGHzxb),
            "aria-label": K.intl.formatToPlainString(K.t.nXNHNJ, { duration: i }),
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
function eC(e) {
    var t;
    let n,
        { channel: l, transitionState: r, onClose: u, initialQuestion: m, initialAnswers: T, initialDuration: z } = e;
    (0, w.A)({ type: ed.z.MODAL, name: s.IJ.POLL_EDITOR_VIEWED });
    let B = i.useRef(null),
        H = i.useRef([]),
        M = i.useRef(null),
        {
            answers: V,
            question: F,
            allowMultiSelect: W,
            setAllowMultiSelect: $,
            duration: X,
            setDuration: Z,
            scheduledTimestamp: Q,
            setScheduledTimestamp: J,
            handleQuestionChange: ee,
            handleAnswerTextChange: et,
            handleEmojiSelect: en,
            canAddMoreAnswers: el,
            handleRemoveAnswerImage: ea,
            canRemoveMoreAnswers: ei,
            handleAddAnswer: er,
            handleRemoveAnswer: eo,
            createPollError: es,
            handleSubmitPoll: ec,
            fieldErrors: eu,
            submitting: eb,
            shouldFocusOnInvalidField: eR,
            setShouldFocusOnInvalidField: ep,
        } = (function (e, t, n, l) {
            let a = e.id,
                [r, o] = i.useState(
                    () => l?.initialAnswers?.map((e) => ({ ...(0, v.YP)(), ...e })) ?? [(0, v.YP)(), (0, v.YP)()],
                ),
                [s, c] = i.useState(l?.initialQuestion ?? ""),
                [u, m] = i.useState(!1),
                [d, f] = i.useState(l?.initialDuration ?? S.fT.ONE_DAY),
                [g, h] = i.useState(),
                [C, b] = i.useState({}),
                [R, p] = i.useState(!1),
                A = r.filter((e) => (0, v.ND)(e)),
                j = r.filter((e) => (0, v.VD)(e)),
                w = s.length > 0 && A.length >= 1 && 0 === j.length,
                [E, { error: x, loading: k }] = (0, N.A)(U.A.createPoll),
                I = r.length < 10,
                T = r.length > 1,
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
                                O.A.remove(e, t, _.C.Poll);
                            })(e, l.localCreationAnswerId, y(l.localCreationAnswerId, a.mediaURL));
                    },
                    [r],
                ),
                H = i.useCallback(
                    async (e, t, n) => {
                        let l = r[t].localCreationAnswerId;
                        (B(e, t),
                        z(Y(n, D.PREPARING), t),
                        null ==
                            (await (async function (e, t, n) {
                                let l = y(t, n),
                                    a = await fetch(n);
                                return (L(e, t, new File([await a.blob()], l, { type: "image/gif" })), n);
                            })(e, l, n)))
                            ? z(Y(n, D.ERROR), t)
                            : z(Y(n, D.READY_TO_UPLOAD), t);
                    },
                    [r, z, B],
                ),
                M = i.useCallback(
                    (e, t, n) => {
                        let l = r[t].localCreationAnswerId,
                            a = URL.createObjectURL(n);
                        (B(e, t), z(Y(a, D.PREPARING), t), L(e, l, n), z(Y(a, D.READY_TO_UPLOAD), t));
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
                    I && o((e) => [...e, (0, v.YP)()]);
                }, [I]),
                $ = i.useCallback(
                    (e) => {
                        if (!T) return;
                        let t = r.length;
                        (B(a, e),
                            o((t) => {
                                let n = [...t];
                                return (n.splice(e, 1), n);
                            }),
                            n?.({ indexToRemove: e, numberOfAnswers: t }));
                    },
                    [r.length, T, a, n, B],
                );
            i.useEffect(
                () => () => {
                    !(async function (e) {
                        O.A.clearAll(e, _.C.Poll);
                    })(a);
                },
                [a],
            );
            let X = i.useCallback(() => {
                    let e = !0,
                        t = {};
                    return (
                        0 === s.trim().length && ((e = !1), (t.question = K.intl.string(K.t.gPX3oI))),
                        r.filter((e) => (0, v.ND)(e)).length < 1 &&
                            ((e = !1), (t[`answer-${r[0].localCreationAnswerId}`] = K.intl.string(K.t.fYvzEX))),
                        r.forEach((n) => {
                            (0, v.VD)(n) &&
                                ((e = !1), (t[`answer-${n.localCreationAnswerId}`] = K.intl.string(K.t["8Qqkc+"])));
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
                    !k && X() && Z();
                }, [Z, k, X]);
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
                canAddMoreAnswers: I,
                canRemoveMoreAnswers: T,
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
                submitting: k,
                createPollError: x,
                shouldFocusOnInvalidField: R,
                setShouldFocusOnInvalidField: p,
            };
        })(
            l,
            u,
            i.useCallback((e) => {
                let { indexToRemove: t, numberOfAnswers: n } = e;
                2 === n ? M.current?.focus() : H.current[t === n - 1 ? t - 1 : t + 1]?.focusDeleteButton();
            }, []),
            { initialQuestion: m, initialAnswers: T, initialDuration: z },
        ),
        { trackPollCreationCancelled: eA } = {
            trackPollCreationCancelled: i.useCallback(() => {
                let e = 0,
                    t = 0,
                    n = 0;
                (V.forEach((l) => {
                    let a = l.image;
                    null != a &&
                        (null != a.emoji
                            ? (t += 1)
                            : null != a.stickerId
                              ? (n += 1)
                              : null != a.mediaAttachmentState && (e += 1));
                }),
                    q.Ay.trackWithMetadata(G.HAw.POLL_CREATION_CANCELLED, {
                        answers_count: V.length,
                        attachments_count: e,
                        emojis_count: t,
                        stickers_count: n,
                        allow_multiselect: W,
                        layout_type: P.Z.DEFAULT,
                    }));
            }, [V, W]),
        },
        ej = (0, k.Sc)(),
        ew = i.useRef(V.length),
        eE = i.useCallback(() => {
            (eA(), u());
        }, [u, eA]),
        ex = i.useCallback(() => {
            (0, v.Wn)(F, V)
                ? eE()
                : j.A.show({
                      title: K.intl.string(K.t.HMrgcp),
                      body: K.intl.string(K.t["Wxa/j8"]),
                      confirmText: K.intl.string(K.t.TzJA4g),
                      confirmVariant: "critical-primary",
                      cancelText: K.intl.string(K.t["2BR5R2"]),
                      onConfirm: () => {
                          eE();
                      },
                  });
        }, [eE, V, F]);
    (i.useEffect(() => {
        (0, d.zb)(S.sm, (e) => (0, a.jsx)(eC, { ...e, channel: l }), ex);
    }, [ex, l]),
        i.useEffect(() => {
            (V.length > ew.current && H.current[V.length - 1]?.focusInput(), (ew.current = V.length));
        }, [V.length]),
        i.useEffect(() => {
            if (eR) {
                if (eu?.question != null) B.current?.focus();
                else {
                    let e = V.findIndex((e) => !!eu[`answer-${e.localCreationAnswerId}`]);
                    -1 !== e && H.current[e]?.focusInput();
                }
                ep(!1);
            }
        }, [eu, V, eR, ep, H]));
    let ek = i.useCallback(() => {
            r === f.ip.ENTERED && ec();
        }, [ec, r]),
        eI = i.useCallback(
            () =>
                (0, I.e0)({
                    channel: l,
                    defaultValue: null != Q ? o()(Q) : void 0,
                    onSubmit: J,
                    onClear: null != Q ? () => J(void 0) : void 0,
                    entryPoint: x.t.POLL_CREATION,
                    isEditing: null != Q,
                }),
            [l, Q, J],
        ),
        ev =
            ((t = { disabled: eb, onSubmit: ek }),
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
        eP = i.useMemo(
            () => [
                ...(ej
                    ? [
                          {
                              variant: null != Q ? "active" : "secondary",
                              icon: g.U,
                              text: void 0,
                              fullWidth: !1,
                              "aria-label":
                                  null != Q
                                      ? K.intl.formatToPlainString(K.t.ZN3tIx, { timestamp: new Date(Q).valueOf() })
                                      : K.intl.string(K.t.rlf0tb),
                              onClick: eI,
                              disabled: eb,
                          },
                      ]
                    : []),
                { variant: "primary", onClick: ek, submitting: eb, text: K.intl.string(K.t.JOj8Zk), autoFocus: !1 },
            ],
            [ek, eb, ej, Q, eI],
        );
    return (0, a.jsx)(c.a, {
        transitionState: r,
        onClose: u,
        title: K.intl.string(K.t["GD/8X8"]),
        actions: eP,
        actionBarInput: (0, a.jsx)(h.S, { checked: W, onChange: (e) => $(e), label: K.intl.string(K.t["Ux+iQU"]) }),
        children: (0, a.jsxs)("div", {
            className: ef.Qs,
            onKeyDown: ev,
            children: [
                null != es && (0, a.jsx)(C.w, { type: "critical", message: es.getAnyErrorMessage(), role: "alert" }),
                (0, a.jsx)(eg, { question: F, onChange: ee, error: eu?.question, inputRef: B }),
                (0, a.jsx)(b.h, { size: 26 }),
                (0, a.jsxs)(R.D, {
                    role: "group",
                    label: K.intl.string(K.t.oMBfeS),
                    children: [
                        V.map((e, t) =>
                            (0, a.jsx)(
                                em,
                                {
                                    answer: e,
                                    channelId: l.id,
                                    index: t,
                                    isLastAnswer: t === V.length - 1,
                                    onEmojiSelect: en,
                                    onEmojiRemove: ea,
                                    onAnswerTextChange: et,
                                    onRemoveAnswer: eo,
                                    addAnswer: er,
                                    submitPoll: ek,
                                    answerRowRefs: H,
                                    error: eu?.[`answer-${e.localCreationAnswerId}`],
                                    canRemoveAnswer: ei,
                                    ref: (e) => {
                                        H.current[t] = e;
                                    },
                                },
                                e.localCreationAnswerId,
                            ),
                        ),
                        el &&
                            (0, a.jsx)("div", {
                                className: ef.Ox,
                                children: (0, a.jsx)(p.$, {
                                    icon: A.j,
                                    variant: "secondary",
                                    onClick: er,
                                    "aria-label": K.intl.string(K.t.B2Uvme),
                                    buttonRef: M,
                                    text: K.intl.string(K.t.B2Uvme),
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)(b.h, { size: 18 }),
                (0, a.jsx)(eh, { selectedDuration: X, onSelect: Z }),
            ],
        }),
    });
}
