n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var a = n(192379),
    l = n(263568),
    r = n(935369),
    i = n(398805),
    o = n(524100),
    s = n(316758),
    c = n(203143),
    u = n(79390),
    d = n(489887),
    m = n(388032);
function f(e, t, n) {
    let f = e.id,
        [x, g] = a.useState(() => [(0, u.Uu)(), (0, u.Uu)()]),
        [p, C] = a.useState(''),
        [v, j] = a.useState(l.C.DEFAULT),
        [I, w] = a.useState(!1),
        [_, b] = a.useState(d.lc.ONE_DAY),
        [A, k] = a.useState({}),
        [N, E] = a.useState(!1),
        R = x.filter((e) => (0, u.cS)(e, v)),
        P = x.filter((e) => (0, u.uY)(e, v)),
        S = p.length > 0 && R.length >= d.gY && 0 === P.length,
        [T, { error: y, loading: D }] = (0, r.Z)(c.Z.createPoll),
        O = x.length < d.fw,
        L = x.length > d.gY,
        B = a.useCallback((e) => {
            k((e) => {
                let t = { ...e };
                return delete t.question, t;
            }),
                C(e);
        }, []),
        M = a.useCallback((e) => {
            let { text: t, index: n, localCreationAnswerId: a } = e;
            k((e) => {
                let t = { ...e };
                return delete t['answer-'.concat(a)], t;
            }),
                g((e) => {
                    let a = [...e];
                    return (
                        (a[n] = {
                            ...a[n],
                            text: t
                        }),
                        a
                    );
                });
        }, []),
        Z = a.useCallback((e, t) => {
            g((n) => {
                let a = [...n];
                return (
                    (a[t] = {
                        ...a[t],
                        image: e
                    }),
                    a
                );
            });
        }, []),
        U = a.useCallback(
            (e, t, n) => {
                var a;
                let l = x[t],
                    r = null === (a = l.image) || void 0 === a ? void 0 : a.mediaAttachmentState;
                null != r && r.mediaURL !== n && s.P(e, l.localCreationAnswerId, (0, i.Yk)(l.localCreationAnswerId, r.mediaURL));
            },
            [x]
        ),
        H = a.useCallback(
            async (e, t, n) => {
                let a = x[t].localCreationAnswerId;
                if ((U(e, t), Z(h(n, o._.PREPARING), t), null == (await s.IV(e, a, n)))) {
                    Z(h(n, o._.ERROR), t);
                    return;
                }
                Z(h(n, o._.READY_TO_UPLOAD), t);
            },
            [x, Z, U]
        ),
        F = a.useCallback(
            (e, t, n) => {
                let a = x[t].localCreationAnswerId,
                    l = URL.createObjectURL(n);
                U(e, t), Z(h(l, o._.PREPARING), t), s.fH(e, a, n), Z(h(l, o._.READY_TO_UPLOAD), t);
            },
            [x, Z, U]
        ),
        z = a.useCallback(
            (e, t) => {
                U(f, t),
                    Z(
                        {
                            emoji: e,
                            stickerId: void 0,
                            mediaAttachmentState: void 0
                        },
                        t
                    );
            },
            [f, Z, U]
        ),
        W = a.useCallback((e) => {
            g((t) => {
                let n = [...t];
                return (
                    (n[e] = {
                        ...n[e],
                        image: void 0
                    }),
                    n
                );
            });
        }, []),
        K = a.useCallback(() => {
            if (!!O) g((e) => [...e, (0, u.Uu)()]);
        }, [O]),
        Y = a.useCallback(
            (e) => {
                if (!L) return;
                let t = x.length;
                U(f, e),
                    g((t) => {
                        let n = [...t];
                        return n.splice(e, 1), n;
                    }),
                    null == n ||
                        n({
                            indexToRemove: e,
                            numberOfAnswers: t
                        });
            },
            [x.length, L, f, n, U]
        );
    a.useEffect(
        () => () => {
            s.xt(f);
        },
        [f]
    );
    let G = a.useCallback(() => {
            let e = !0,
                t = {};
            return (
                0 === p.trim().length && ((e = !1), (t.question = m.intl.string(m.t.gPX3oK))),
                x.filter((e) => (0, u.cS)(e, v)).length < d.gY && ((e = !1), (t['answer-'.concat(x[0].localCreationAnswerId)] = m.intl.string(m.t.fYvzER))),
                x.forEach((n) => {
                    (0, u.uY)(n, v) && ((e = !1), (t['answer-'.concat(n.localCreationAnswerId)] = m.intl.string(m.t['8Qqkc3'])));
                }),
                k(t),
                E(!e),
                e
            );
        }, [x, p, v]),
        q = a.useCallback(async () => {
            await T({
                channel: e,
                question: p,
                answers: R,
                allowMultiSelect: I,
                duration: _,
                layout: v,
                onClose: t
            });
        }, [p, R, I, _, T, e, v, t]),
        V = a.useCallback(() => {
            !D && G() && q();
        }, [q, D, G]);
    return {
        answers: x,
        question: p,
        setQuestion: C,
        selectedLayoutType: v,
        setSelectedLayoutType: j,
        allowMultiSelect: I,
        setAllowMultiSelect: w,
        duration: _,
        setDuration: b,
        canPost: S,
        canAddMoreAnswers: O,
        canRemoveMoreAnswers: L,
        handleQuestionChange: B,
        handleAnswerTextChange: M,
        handleGifSelect: H,
        handleEmojiSelect: z,
        handleCustomUpload: F,
        handleAddAnswer: K,
        handleRemoveAnswer: Y,
        handleRemoveAnswerImage: W,
        fieldErrors: A,
        createPoll: q,
        handleSubmitPoll: V,
        submitting: D,
        createPollError: y,
        shouldFocusOnInvalidField: N,
        setShouldFocusOnInvalidField: E
    };
}
function h(e, t) {
    return {
        mediaAttachmentState: {
            status: t,
            mediaURL: e
        },
        emoji: void 0,
        stickerId: void 0
    };
}
