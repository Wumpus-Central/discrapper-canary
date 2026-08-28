n.d(t, { default: () => ep });
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
    x = n(674470),
    k = n(970244),
    v = n(969632);
n(323874), n(14289), n(35956);
var S = n(744593),
    I = n(608461),
    N = n(412136);
function P(e, t) {
    let n = decodeURIComponent(t).split("/").pop() ?? "temp.gif";
    return `${e}-${n}`;
}
var y = (((l = {}).PREPARING = "PREPARING"), (l.READY_TO_UPLOAD = "READY_TO_UPLOAD"), (l.ERROR = "ERROR"), l),
    D = n(608299),
    O = n(565150),
    T = n(31717);
async function U(e, t, n) {
    let l = P(t, n),
        a = await fetch(n);
    return _(e, t, new File([await a.blob()], l, { type: "image/gif" })), n;
}
function _(e, t, n) {
    let l = { id: t, channelId: e, file: n, platform: O.xz.WEB, origin: "unknown:poll_attachment" };
    D.A.addFile({ file: l, channelId: e, draftType: T.C.Poll });
}
async function L(e, t, n) {
    D.A.remove(e, t, T.C.Poll);
}
async function K(e) {
    D.A.clearAll(e, T.C.Poll);
}
var Y = n(180662),
    F = n(375708);
function W(e, t) {
    return { mediaAttachmentState: { status: t, mediaURL: e }, emoji: void 0, stickerId: void 0 };
}
var M = n(95561),
    q = n(652215),
    G = n(503698),
    z = n.n(G),
    B = n(17928),
    H = n(980707),
    V = n(477782),
    $ = n(289873),
    X = n(460905),
    Z = n(922016),
    Q = n(939249),
    J = n(22231),
    ee = n(95477),
    et = n(241326),
    en = n(565645),
    el = n(267889),
    ea = n(770335),
    ei = n(734057),
    er = n(522602),
    eo = n(307731),
    es = n(698279),
    ec = n(406255);
function eu(e) {
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
          ? (0, a.jsx)(en.A, {
                className: o,
                emojiId: r.id,
                emojiName: r.type === ea.i.UNICODE ? r.optionallyDiverseSequence : r.name,
                animated: r.animated,
            })
          : s;
}
function em(e) {
    let { onSelect: t, onEditMedia: n, onDeleteMedia: l, closePopout: i } = e;
    return (0, a.jsx)("div", {
        className: ec.li,
        children: (0, a.jsx)(H.W, {
            "data-menu-migrated-auto": !0,
            navId: "poll-media-edit-menu",
            onClose: i,
            "aria-label": F.intl.string(F.t["cV+h7B"]),
            onSelect: t,
            children: (0, a.jsxs)(V.rX, {
                children: [
                    (0, a.jsx)(V.Dr, { id: "poll-media-replace", label: F.intl.string(F.t.CZeRhU), action: n }),
                    (0, a.jsx)(V.Dr, {
                        id: "poll-media-delete",
                        label: F.intl.string(F.t.IhMxgu),
                        action: l,
                        color: "danger",
                    }),
                ],
            }),
        }),
    });
}
function ed(e) {
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
        f = (0, B.bG)([ei.A], () => ei.A.getChannel(t)),
        {
            emoji: g,
            isLoadingMedia: h,
            hasUpload: C,
            mediaUrl: b,
            mediaFilename: p,
        } = (function (e) {
            let { channelId: t, localCreationAnswerId: n, image: l } = e,
                a = l?.emoji,
                r = l?.mediaAttachmentState?.status === y.PREPARING,
                o = (0, B.bG)([er.A], () => er.A.getUpload(t, n, T.C.Poll)),
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
                    ? F.intl.formatToPlainString(F.t.vcC7Qn, { imageName: (0, v.Kj)(p), answerNumber: s + 1 })
                    : null != g
                      ? F.intl.formatToPlainString(F.t.ncOAha, { emojiName: g.name, answerNumber: s + 1 })
                      : F.intl.formatToPlainString(F.t.emdpNo, { answerNumber: s + 1 }),
            [C, g, s, p],
        ),
        w = i.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, a.jsx)("div", {
                    className: ec.Fb,
                    children: (0, a.jsx)(el.A, {
                        channel: f,
                        pickerIntention: eo.EmojiIntention.POLLS,
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
                return (0, a.jsx)(em, { onSelect: t, onEditMedia: u, onDeleteMedia: R, closePopout: t });
            },
            [R, u],
        ),
        x = h
            ? (0, a.jsx)($.y, { className: ec.EC })
            : (0, a.jsx)(eu, {
                  hasUpload: C,
                  mediaUrl: b,
                  mediaFilename: p,
                  imageClassName: z()(ec.$_, ec.qX),
                  emoji: g,
                  emojiClassName: z()(ec.$_, ec.qZ),
                  fallback: (0, a.jsx)(X.n, { size: "sm", color: "currentColor", className: ec.vr }),
              }),
        k = z()(es.VQ, ec.GB, { [ec.ZV]: A });
    return (0, a.jsx)(Z.Y, {
        targetElementRef: m,
        renderPopout: w,
        shouldShow: c,
        onRequestClose: u,
        animation: Z.Y.Animation.NONE,
        position: "bottom",
        spacing: 2,
        children: (e) => {
            let { "aria-controls": t, "aria-expanded": n, ...l } = e;
            return (0, a.jsx)(Z.Y, {
                targetElementRef: d,
                animation: Z.Y.Animation.NONE,
                position: "bottom",
                renderPopout: E,
                children: (e) => {
                    let { onClick: l, "aria-controls": i, "aria-expanded": r, ...o } = e;
                    return (0, a.jsxs)(Q.D, {
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
                                (0, a.jsx)(J.PencilIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ec.IZ,
                                    "aria-hidden": !0,
                                }),
                        ],
                    });
                },
            });
        },
    });
}
function ef(e) {
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
                            ((0, v.ND)(n) || "macos" !== (0, E.getOS)() ? t : a) ? (e.stopPropagation(), f()) : d()),
                            C.current[l + 1]?.focusInput();
                        break;
                    case "e":
                        ("macos" === (0, E.getOS)() ? a : t) && (e.preventDefault(), e.stopPropagation(), w());
                }
            },
            [d, n, C, l, r, f, w],
        ),
        k = (0, a.jsx)(ed, {
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
        children: (0, a.jsx)(ee.k, {
            error: g,
            leading: { type: "emoji", button: k },
            trailing: u
                ? {
                      "aria-label": F.intl.formatToPlainString(F.t["22fjEc"], { answerNumber: l + 1 }),
                      icon: et.TrashIcon,
                      onClick: () => m(l),
                      buttonRef: p,
                  }
                : void 0,
            "aria-label": F.intl.formatToPlainString(F.t["3+V8G9"], { answerNumber: l + 1 }),
            placeholder: F.intl.string(F.t.NNHVlv),
            value: n.text,
            onChange: (e) => o({ text: e, index: l, localCreationAnswerId: n.localCreationAnswerId }),
            onKeyDown: x,
            maxLength: N.dv,
            inputRef: A,
        }),
    });
}
var eg = n(412728),
    eh = n(590923);
function eC(e) {
    let { question: t, onChange: n, error: l, inputRef: i } = e;
    return (0, a.jsx)(u.f, {
        label: F.intl.string(F.t.WBiKnI),
        inputRef: i,
        placeholder: F.intl.string(F.t["/uQqJW"]),
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
function eb(e) {
    let { selectedDuration: t, onSelect: n } = e,
        l = Object.freeze({
            [N.fT.ONE_HOUR]: F.intl.formatToPlainString(F.t["b/mgtw"], { num: 1 }),
            [N.fT.FOUR_HOURS]: F.intl.formatToPlainString(F.t["b/mgtw"], { num: 4 }),
            [N.fT.EIGHT_HOURS]: F.intl.formatToPlainString(F.t["b/mgtw"], { num: 8 }),
            [N.fT.ONE_DAY]: F.intl.formatToPlainString(F.t["b/mgtw"], { num: 24 }),
            [N.fT.THREE_DAYS]: F.intl.string(F.t.Xn5rX3),
            [N.fT.SEVEN_DAYS]: F.intl.string(F.t["Lmq+rj"]),
            [N.fT.FOURTEEN_DAYS]: F.intl.string(F.t["mb8A/O"]),
        }),
        i = l[t];
    return (0, a.jsx)("div", {
        className: eh.p0,
        children: (0, a.jsx)(m.l, {
            label: F.intl.string(F.t.bGHzxb),
            "aria-label": F.intl.formatToPlainString(F.t.nXNHNJ, { duration: i }),
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
function ep(e) {
    var t;
    let n,
        { channel: l, transitionState: r, onClose: u, initialQuestion: m, initialAnswers: D, initialDuration: O } = e;
    (0, w.A)({ type: eg.z.MODAL, name: s.IJ.POLL_EDITOR_VIEWED });
    let T = i.useRef(null),
        G = i.useRef([]),
        z = i.useRef(null),
        {
            answers: B,
            question: H,
            allowMultiSelect: V,
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
            submitting: em,
            shouldFocusOnInvalidField: ed,
            setShouldFocusOnInvalidField: eA,
        } = (function (e, t, n, l) {
            let a = e.id,
                [r, o] = i.useState(
                    () => l?.initialAnswers?.map((e) => ({ ...(0, v.YP)(), ...e })) ?? [(0, v.YP)(), (0, v.YP)()],
                ),
                [s, c] = i.useState(l?.initialQuestion ?? ""),
                [u, m] = i.useState(!1),
                [d, f] = i.useState(l?.initialDuration ?? N.fT.ONE_DAY),
                [g, h] = i.useState(),
                [C, b] = i.useState({}),
                [p, A] = i.useState(!1),
                R = r.filter((e) => (0, v.ND)(e)),
                j = r.filter((e) => (0, v.VD)(e)),
                w = s.length > 0 && R.length >= N.FW && 0 === j.length,
                [E, { error: x, loading: k }] = (0, I.A)(Y.A.createPoll),
                D = r.length < N.Lu,
                O = r.length > N.FW,
                T = i.useCallback((e) => {
                    b((e) => {
                        let t = { ...e };
                        return delete t.question, t;
                    }),
                        c(e);
                }, []),
                M = i.useCallback((e) => {
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
                            L(e, l.localCreationAnswerId, P(l.localCreationAnswerId, a.mediaURL));
                    },
                    [r],
                ),
                z = i.useCallback(
                    async (e, t, n) => {
                        let l = r[t].localCreationAnswerId;
                        (G(e, t), q(W(n, y.PREPARING), t), null == (await U(e, l, n)))
                            ? q(W(n, y.ERROR), t)
                            : q(W(n, y.READY_TO_UPLOAD), t);
                    },
                    [r, q, G],
                ),
                B = i.useCallback(
                    (e, t, n) => {
                        let l = r[t].localCreationAnswerId,
                            a = URL.createObjectURL(n);
                        G(e, t), q(W(a, y.PREPARING), t), _(e, l, n), q(W(a, y.READY_TO_UPLOAD), t);
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
                    D && o((e) => [...e, (0, v.YP)()]);
                }, [D]),
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
                    K(a);
                },
                [a],
            );
            let Z = i.useCallback(() => {
                    let e = !0,
                        t = {};
                    return (
                        0 === s.trim().length && ((e = !1), (t.question = F.intl.string(F.t.gPX3oI))),
                        r.filter((e) => (0, v.ND)(e)).length < N.FW &&
                            ((e = !1), (t[`answer-${r[0].localCreationAnswerId}`] = F.intl.string(F.t.fYvzEX))),
                        r.forEach((n) => {
                            (0, v.VD)(n) &&
                                ((e = !1), (t[`answer-${n.localCreationAnswerId}`] = F.intl.string(F.t["8Qqkc+"])));
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
                canAddMoreAnswers: D,
                canRemoveMoreAnswers: O,
                handleQuestionChange: T,
                handleAnswerTextChange: M,
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
                n === N.FW + 1 ? z.current?.focus() : G.current[t === n - 1 ? t - 1 : t + 1]?.focusDeleteButton();
            }, []),
            { initialQuestion: m, initialAnswers: D, initialDuration: O },
        ),
        { trackPollCreationCancelled: eR } = {
            trackPollCreationCancelled: i.useCallback(() => {
                let e = 0,
                    t = 0,
                    n = 0;
                B.forEach((l) => {
                    let a = l.image;
                    null != a &&
                        (null != a.emoji
                            ? (t += 1)
                            : null != a.stickerId
                              ? (n += 1)
                              : null != a.mediaAttachmentState && (e += 1));
                }),
                    M.Ay.trackWithMetadata(q.HAw.POLL_CREATION_CANCELLED, {
                        answers_count: B.length,
                        attachments_count: e,
                        emojis_count: t,
                        stickers_count: n,
                        allow_multiselect: V,
                        layout_type: S.Z.DEFAULT,
                    });
            }, [B, V]),
        },
        ej = (0, x.Sc)(),
        ew = i.useRef(B.length),
        eE = i.useCallback(() => {
            eR(), u();
        }, [u, eR]),
        ex = i.useCallback(() => {
            (0, v.Wn)(H, B)
                ? eE()
                : j.A.show({
                      title: F.intl.string(F.t.HMrgcp),
                      body: F.intl.string(F.t["Wxa/j8"]),
                      confirmText: F.intl.string(F.t.TzJA4g),
                      confirmVariant: "critical-primary",
                      cancelText: F.intl.string(F.t["2BR5R2"]),
                      onConfirm: () => {
                          eE();
                      },
                  });
        }, [eE, B, H]);
    i.useEffect(() => {
        (0, d.updateModal)(N.sm, (e) => (0, a.jsx)(ep, { ...e, channel: l }), ex);
    }, [ex, l]),
        i.useEffect(() => {
            B.length > ew.current && G.current[B.length - 1]?.focusInput(), (ew.current = B.length);
        }, [B.length]),
        i.useEffect(() => {
            if (ed) {
                if (eu?.question != null) T.current?.focus();
                else {
                    let e = B.findIndex((e) => !!eu[`answer-${e.localCreationAnswerId}`]);
                    -1 !== e && G.current[e]?.focusInput();
                }
                eA(!1);
            }
        }, [eu, B, ed, eA, G]);
    let ek = i.useCallback(() => {
            r === f.ip.ENTERED && ec();
        }, [ec, r]),
        ev = i.useCallback(
            () =>
                (0, k.e0)({
                    channel: l,
                    defaultValue: null != Q ? o()(Q) : void 0,
                    onSubmit: J,
                    onClear: null != Q ? () => J(void 0) : void 0,
                }),
            [l, Q, J],
        ),
        eS =
            ((t = { disabled: em, onSubmit: ek }),
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
        eI = i.useMemo(
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
                                      ? F.intl.formatToPlainString(F.t.ZN3tIx, { timestamp: new Date(Q).valueOf() })
                                      : F.intl.string(F.t.rlf0tb),
                              onClick: ev,
                              disabled: em,
                          },
                      ]
                    : []),
                { variant: "primary", onClick: ek, submitting: em, text: F.intl.string(F.t.JOj8Zk), autoFocus: !1 },
            ],
            [ek, em, ej, Q, ev],
        );
    return (0, a.jsx)(c.Modal, {
        transitionState: r,
        onClose: u,
        title: F.intl.string(F.t["GD/8X8"]),
        actions: eI,
        actionBarInput: (0, a.jsx)(h.S, { checked: V, onChange: (e) => $(e), label: F.intl.string(F.t["Ux+iQU"]) }),
        children: (0, a.jsxs)("div", {
            className: eh.Qs,
            onKeyDown: eS,
            children: [
                null != es && (0, a.jsx)(C.w, { type: "critical", children: es.getAnyErrorMessage() }),
                (0, a.jsx)(eC, { question: H, onChange: ee, error: eu?.question, inputRef: T }),
                (0, a.jsx)(b.h, { size: 26 }),
                (0, a.jsxs)(p.D, {
                    role: "group",
                    label: F.intl.string(F.t.oMBfeS),
                    children: [
                        B.map((e, t) =>
                            (0, a.jsx)(
                                ef,
                                {
                                    answer: e,
                                    channelId: l.id,
                                    index: t,
                                    isLastAnswer: t === B.length - 1,
                                    onEmojiSelect: en,
                                    onEmojiRemove: ea,
                                    onAnswerTextChange: et,
                                    onRemoveAnswer: eo,
                                    addAnswer: er,
                                    submitPoll: ek,
                                    answerRowRefs: G,
                                    error: eu?.[`answer-${e.localCreationAnswerId}`],
                                    canRemoveAnswer: ei,
                                    ref: (e) => {
                                        G.current[t] = e;
                                    },
                                },
                                e.localCreationAnswerId,
                            ),
                        ),
                        el &&
                            (0, a.jsx)("div", {
                                className: eh.Ox,
                                children: (0, a.jsx)(A.$, {
                                    icon: R.j,
                                    variant: "secondary",
                                    onClick: er,
                                    "aria-label": F.intl.string(F.t.B2Uvme),
                                    buttonRef: z,
                                    text: F.intl.string(F.t.B2Uvme),
                                }),
                            }),
                    ],
                }),
                (0, a.jsx)(b.h, { size: 18 }),
                (0, a.jsx)(eb, { selectedDuration: X, onSelect: Z }),
            ],
        }),
    });
}
