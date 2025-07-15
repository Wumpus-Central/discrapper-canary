(n.d(t, { Z: () => b }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(781311));
var r = n(73800),
    a = n(263568),
    l = n(935369),
    i = n(398805),
    o = n(524100),
    s = n(316758),
    c = n(203143),
    u = n(79390),
    d = n(489887),
    f = n(388032);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t, n, b) {
    var h, O;
    let j = e.id,
        [y, x] = r.useState(() => {
            var e, t;
            return null != (t = null == b || null == (e = b.initialAnswers) ? void 0 : e.map((e) => m({}, (0, u.Uu)(), e))) ? t : [(0, u.Uu)(), (0, u.Uu)()];
        }),
        [w, v] = r.useState(null != (h = null == b ? void 0 : b.initialQuestion) ? h : ''),
        [_, P] = r.useState(a.C.DEFAULT),
        [C, A] = r.useState(!1),
        [E, I] = r.useState(null != (O = null == b ? void 0 : b.initialDuration) ? O : d.lc.ONE_DAY),
        [k, S] = r.useState({}),
        [D, R] = r.useState(!1),
        N = y.filter((e) => (0, u.cS)(e, _)),
        T = y.filter((e) => (0, u.uY)(e, _)),
        L = w.length > 0 && N.length >= d.gY && 0 === T.length,
        [B, { error: Z, loading: U }] = (0, l.Z)(c.Z.createPoll),
        M = y.length < d.fw,
        z = y.length > d.gY,
        W = r.useCallback((e) => {
            (S((e) => {
                let t = m({}, e);
                return (delete t.question, t);
            }),
                v(e));
        }, []),
        H = r.useCallback((e) => {
            let { text: t, index: n, localCreationAnswerId: r } = e;
            (S((e) => {
                let t = m({}, e);
                return (delete t['answer-'.concat(r)], t);
            }),
                x((e) => {
                    let r = [...e];
                    return ((r[n] = p(m({}, r[n]), { text: t })), r);
                }));
        }, []),
        Y = r.useCallback((e, t) => {
            x((n) => {
                let r = [...n];
                return ((r[t] = p(m({}, r[t]), { image: e })), r);
            });
        }, []),
        F = r.useCallback(
            (e, t, n) => {
                var r;
                let a = y[t],
                    l = null == (r = a.image) ? void 0 : r.mediaAttachmentState;
                null != l && l.mediaURL !== n && s.P(e, a.localCreationAnswerId, (0, i.Yk)(a.localCreationAnswerId, l.mediaURL));
            },
            [y]
        ),
        K = r.useCallback(
            async (e, t, n) => {
                let r = y[t].localCreationAnswerId;
                if ((F(e, t), Y(g(n, o._.PREPARING), t), null == (await s.IV(e, r, n)))) return void Y(g(n, o._.ERROR), t);
                Y(g(n, o._.READY_TO_UPLOAD), t);
            },
            [y, Y, F]
        ),
        q = r.useCallback(
            (e, t, n) => {
                let r = y[t].localCreationAnswerId,
                    a = URL.createObjectURL(n);
                (F(e, t), Y(g(a, o._.PREPARING), t), s.fH(e, r, n), Y(g(a, o._.READY_TO_UPLOAD), t));
            },
            [y, Y, F]
        ),
        X = r.useCallback(
            (e, t) => {
                (F(j, t),
                    Y(
                        {
                            emoji: e,
                            stickerId: void 0,
                            mediaAttachmentState: void 0
                        },
                        t
                    ));
            },
            [j, Y, F]
        ),
        G = r.useCallback((e) => {
            x((t) => {
                let n = [...t];
                return ((n[e] = p(m({}, n[e]), { image: void 0 })), n);
            });
        }, []),
        J = r.useCallback(() => {
            M && x((e) => [...e, (0, u.Uu)()]);
        }, [M]),
        Q = r.useCallback(
            (e) => {
                if (!z) return;
                let t = y.length;
                (F(j, e),
                    x((t) => {
                        let n = [...t];
                        return (n.splice(e, 1), n);
                    }),
                    null == n ||
                        n({
                            indexToRemove: e,
                            numberOfAnswers: t
                        }));
            },
            [y.length, z, j, n, F]
        );
    r.useEffect(
        () => () => {
            s.xt(j);
        },
        [j]
    );
    let V = r.useCallback(() => {
            let e = !0,
                t = {};
            return (
                0 === w.trim().length && ((e = !1), (t.question = f.intl.string(f.t.gPX3oK))),
                y.filter((e) => (0, u.cS)(e, _)).length < d.gY && ((e = !1), (t['answer-'.concat(y[0].localCreationAnswerId)] = f.intl.string(f.t.fYvzER))),
                y.forEach((n) => {
                    (0, u.uY)(n, _) && ((e = !1), (t['answer-'.concat(n.localCreationAnswerId)] = f.intl.string(f.t['8Qqkc3'])));
                }),
                S(t),
                R(!e),
                e
            );
        }, [y, w, _]),
        $ = r.useCallback(async () => {
            await B({
                channel: e,
                question: w,
                answers: N,
                allowMultiSelect: C,
                duration: E,
                layout: _,
                onClose: t
            });
        }, [w, N, C, E, B, e, _, t]),
        ee = r.useCallback(() => {
            !U && V() && $();
        }, [$, U, V]);
    return {
        answers: y,
        question: w,
        setQuestion: v,
        selectedLayoutType: _,
        setSelectedLayoutType: P,
        allowMultiSelect: C,
        setAllowMultiSelect: A,
        duration: E,
        setDuration: I,
        canPost: L,
        canAddMoreAnswers: M,
        canRemoveMoreAnswers: z,
        handleQuestionChange: W,
        handleAnswerTextChange: H,
        handleGifSelect: K,
        handleEmojiSelect: X,
        handleCustomUpload: q,
        handleAddAnswer: J,
        handleRemoveAnswer: Q,
        handleRemoveAnswerImage: G,
        fieldErrors: k,
        createPoll: $,
        handleSubmitPoll: ee,
        submitting: U,
        createPollError: Z,
        shouldFocusOnInvalidField: D,
        setShouldFocusOnInvalidField: R
    };
}
function g(e, t) {
    return {
        mediaAttachmentState: {
            status: t,
            mediaURL: e
        },
        emoji: void 0,
        stickerId: void 0
    };
}
