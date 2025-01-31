n.d(t, { Z: () => f }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
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
        [p, _] = a.useState(''),
        [C, b] = a.useState(l.C.DEFAULT),
        [v, j] = a.useState(!1),
        [w, A] = a.useState(d.lc.ONE_DAY),
        [I, N] = a.useState({}),
        [E, R] = a.useState(!1),
        k = x.filter((e) => (0, u.cS)(e, C)),
        P = x.filter((e) => (0, u.uY)(e, C)),
        y = p.length > 0 && k.length >= d.gY && 0 === P.length,
        [D, { error: S, loading: O }] = (0, r.Z)(c.Z.createPoll),
        T = x.length < d.fw,
        L = x.length > d.gY,
        B = a.useCallback((e) => {
            N((e) => {
                let t = { ...e };
                return delete t.question, t;
            }),
                _(e);
        }, []),
        Z = a.useCallback((e) => {
            let { text: t, index: n, localCreationAnswerId: a } = e;
            N((e) => {
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
        U = a.useCallback((e, t) => {
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
        M = a.useCallback(
            (e, t, n) => {
                var a;
                let l = x[t],
                    r = null === (a = l.image) || void 0 === a ? void 0 : a.mediaAttachmentState;
                null != r && r.mediaURL !== n && s.P(e, l.localCreationAnswerId, (0, i.Yk)(l.localCreationAnswerId, r.mediaURL));
            },
            [x]
        ),
        z = a.useCallback(
            async (e, t, n) => {
                let a = x[t].localCreationAnswerId;
                if ((M(e, t), U(h(n, o._.PREPARING), t), null == (await s.IV(e, a, n)))) {
                    U(h(n, o._.ERROR), t);
                    return;
                }
                U(h(n, o._.READY_TO_UPLOAD), t);
            },
            [x, U, M]
        ),
        W = a.useCallback(
            (e, t, n) => {
                let a = x[t].localCreationAnswerId,
                    l = URL.createObjectURL(n);
                M(e, t), U(h(l, o._.PREPARING), t), s.fH(e, a, n), U(h(l, o._.READY_TO_UPLOAD), t);
            },
            [x, U, M]
        ),
        H = a.useCallback(
            (e, t) => {
                M(f, t),
                    U(
                        {
                            emoji: e,
                            stickerId: void 0,
                            mediaAttachmentState: void 0
                        },
                        t
                    );
            },
            [f, U, M]
        ),
        F = a.useCallback((e) => {
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
        Y = a.useCallback(() => {
            T && g((e) => [...e, (0, u.Uu)()]);
        }, [T]),
        K = a.useCallback(
            (e) => {
                if (!L) return;
                let t = x.length;
                M(f, e),
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
            [x.length, L, f, n, M]
        );
    a.useEffect(
        () => () => {
            s.xt(f);
        },
        [f]
    );
    let q = a.useCallback(() => {
            let e = !0,
                t = {};
            return (
                0 === p.trim().length && ((e = !1), (t.question = m.intl.string(m.t.gPX3oK))),
                x.filter((e) => (0, u.cS)(e, C)).length < d.gY && ((e = !1), (t['answer-'.concat(x[0].localCreationAnswerId)] = m.intl.string(m.t.fYvzER))),
                x.forEach((n) => {
                    (0, u.uY)(n, C) && ((e = !1), (t['answer-'.concat(n.localCreationAnswerId)] = m.intl.string(m.t['8Qqkc3'])));
                }),
                N(t),
                R(!e),
                e
            );
        }, [x, p, C]),
        X = a.useCallback(async () => {
            await D({
                channel: e,
                question: p,
                answers: k,
                allowMultiSelect: v,
                duration: w,
                layout: C,
                onClose: t
            });
        }, [p, k, v, w, D, e, C, t]),
        J = a.useCallback(() => {
            !O && q() && X();
        }, [X, O, q]);
    return {
        answers: x,
        question: p,
        setQuestion: _,
        selectedLayoutType: C,
        setSelectedLayoutType: b,
        allowMultiSelect: v,
        setAllowMultiSelect: j,
        duration: w,
        setDuration: A,
        canPost: y,
        canAddMoreAnswers: T,
        canRemoveMoreAnswers: L,
        handleQuestionChange: B,
        handleAnswerTextChange: Z,
        handleGifSelect: z,
        handleEmojiSelect: H,
        handleCustomUpload: W,
        handleAddAnswer: Y,
        handleRemoveAnswer: K,
        handleRemoveAnswerImage: F,
        fieldErrors: I,
        createPoll: X,
        handleSubmitPoll: J,
        submitting: O,
        createPollError: S,
        shouldFocusOnInvalidField: E,
        setShouldFocusOnInvalidField: R
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
