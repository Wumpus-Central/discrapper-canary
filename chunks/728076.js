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
    var h, j;
    let v = e.id,
        [w, x] = r.useState(() => {
            var e, t;
            return null != (t = null == b || null == (e = b.initialAnswers) ? void 0 : e.map((e) => m({}, (0, u.Uu)(), e))) ? t : [(0, u.Uu)(), (0, u.Uu)()];
        }),
        [O, y] = r.useState(null != (h = null == b ? void 0 : b.initialQuestion) ? h : ''),
        [P, C] = r.useState(!1),
        [_, R] = r.useState(null != (j = null == b ? void 0 : b.initialDuration) ? j : d.lc.ONE_DAY),
        [E, k] = r.useState({}),
        [A, D] = r.useState(!1),
        S = w.filter((e) => (0, u.cS)(e)),
        I = w.filter((e) => (0, u.uY)(e)),
        N = O.length > 0 && S.length >= d.gY && 0 === I.length,
        [T, { error: L, loading: B }] = (0, l.Z)(c.Z.createPoll),
        U = w.length < d.fw,
        Z = w.length > d.gY,
        Y = r.useCallback((e) => {
            (k((e) => {
                let t = m({}, e);
                return (delete t.question, t);
            }),
                y(e));
        }, []),
        K = r.useCallback((e) => {
            let { text: t, index: n, localCreationAnswerId: r } = e;
            (k((e) => {
                let t = m({}, e);
                return (delete t['answer-'.concat(r)], t);
            }),
                x((e) => {
                    let r = [...e];
                    return ((r[n] = p(m({}, r[n]), { text: t })), r);
                }));
        }, []),
        z = r.useCallback((e, t) => {
            x((n) => {
                let r = [...n];
                return ((r[t] = p(m({}, r[t]), { image: e })), r);
            });
        }, []),
        F = r.useCallback(
            (e, t, n) => {
                var r;
                let a = w[t],
                    l = null == (r = a.image) ? void 0 : r.mediaAttachmentState;
                null != l && l.mediaURL !== n && s.P(e, a.localCreationAnswerId, (0, i.Yk)(a.localCreationAnswerId, l.mediaURL));
            },
            [w]
        ),
        M = r.useCallback(
            async (e, t, n) => {
                let r = w[t].localCreationAnswerId;
                if ((F(e, t), z(g(n, o._.PREPARING), t), null == (await s.IV(e, r, n)))) return void z(g(n, o._.ERROR), t);
                z(g(n, o._.READY_TO_UPLOAD), t);
            },
            [w, z, F]
        ),
        W = r.useCallback(
            (e, t, n) => {
                let r = w[t].localCreationAnswerId,
                    a = URL.createObjectURL(n);
                (F(e, t), z(g(a, o._.PREPARING), t), s.fH(e, r, n), z(g(a, o._.READY_TO_UPLOAD), t));
            },
            [w, z, F]
        ),
        q = r.useCallback(
            (e, t) => {
                (F(v, t),
                    z(
                        {
                            emoji: e,
                            stickerId: void 0,
                            mediaAttachmentState: void 0
                        },
                        t
                    ));
            },
            [v, z, F]
        ),
        H = r.useCallback((e) => {
            x((t) => {
                let n = [...t];
                return ((n[e] = p(m({}, n[e]), { image: void 0 })), n);
            });
        }, []),
        G = r.useCallback(() => {
            U && x((e) => [...e, (0, u.Uu)()]);
        }, [U]),
        X = r.useCallback(
            (e) => {
                if (!Z) return;
                let t = w.length;
                (F(v, e),
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
            [w.length, Z, v, n, F]
        );
    r.useEffect(
        () => () => {
            s.xt(v);
        },
        [v]
    );
    let V = r.useCallback(() => {
            let e = !0,
                t = {};
            return (
                0 === O.trim().length && ((e = !1), (t.question = f.intl.string(f.t.gPX3oK))),
                w.filter((e) => (0, u.cS)(e)).length < d.gY && ((e = !1), (t['answer-'.concat(w[0].localCreationAnswerId)] = f.intl.string(f.t.fYvzER))),
                w.forEach((n) => {
                    (0, u.uY)(n) && ((e = !1), (t['answer-'.concat(n.localCreationAnswerId)] = f.intl.string(f.t['8Qqkc3'])));
                }),
                k(t),
                D(!e),
                e
            );
        }, [w, O]),
        J = r.useCallback(async () => {
            await T({
                channel: e,
                question: O,
                answers: S,
                allowMultiSelect: P,
                duration: _,
                layout: a.C.DEFAULT,
                onClose: t
            });
        }, [O, S, P, _, T, e, t]),
        Q = r.useCallback(() => {
            !B && V() && J();
        }, [J, B, V]);
    return {
        answers: w,
        question: O,
        setQuestion: y,
        allowMultiSelect: P,
        setAllowMultiSelect: C,
        duration: _,
        setDuration: R,
        canPost: N,
        canAddMoreAnswers: U,
        canRemoveMoreAnswers: Z,
        handleQuestionChange: Y,
        handleAnswerTextChange: K,
        handleGifSelect: M,
        handleEmojiSelect: q,
        handleCustomUpload: W,
        handleAddAnswer: G,
        handleRemoveAnswer: X,
        handleRemoveAnswerImage: H,
        fieldErrors: E,
        createPoll: J,
        handleSubmitPoll: Q,
        submitting: B,
        createPollError: L,
        shouldFocusOnInvalidField: A,
        setShouldFocusOnInvalidField: D
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
