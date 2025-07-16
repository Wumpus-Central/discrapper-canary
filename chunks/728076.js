(n.d(t, { Z: () => b }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(781311));
var r = n(73800),
    a = n(263568),
    l = n(935369),
    i = n(398805),
    o = n(524100),
    c = n(316758),
    s = n(203143),
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
    var O, h;
    let j = e.id,
        [y, w] = r.useState(() => {
            var e, t;
            return null != (t = null == b || null == (e = b.initialAnswers) ? void 0 : e.map((e) => m({}, (0, u.Uu)(), e))) ? t : [(0, u.Uu)(), (0, u.Uu)()];
        }),
        [x, v] = r.useState(null != (O = null == b ? void 0 : b.initialQuestion) ? O : ''),
        [P, C] = r.useState(a.C.DEFAULT),
        [_, A] = r.useState(!1),
        [E, I] = r.useState(null != (h = null == b ? void 0 : b.initialDuration) ? h : d.lc.ONE_DAY),
        [k, S] = r.useState({}),
        [R, D] = r.useState(!1),
        N = y.filter((e) => (0, u.cS)(e, P)),
        L = y.filter((e) => (0, u.uY)(e, P)),
        T = x.length > 0 && N.length >= d.gY && 0 === L.length,
        [B, { error: Z, loading: U }] = (0, l.Z)(s.Z.createPoll),
        W = y.length < d.fw,
        H = y.length > d.gY,
        M = r.useCallback((e) => {
            (S((e) => {
                let t = m({}, e);
                return (delete t.question, t);
            }),
                v(e));
        }, []),
        Y = r.useCallback((e) => {
            let { text: t, index: n, localCreationAnswerId: r } = e;
            (S((e) => {
                let t = m({}, e);
                return (delete t['answer-'.concat(r)], t);
            }),
                w((e) => {
                    let r = [...e];
                    return ((r[n] = p(m({}, r[n]), { text: t })), r);
                }));
        }, []),
        F = r.useCallback((e, t) => {
            w((n) => {
                let r = [...n];
                return ((r[t] = p(m({}, r[t]), { image: e })), r);
            });
        }, []),
        K = r.useCallback(
            (e, t, n) => {
                var r;
                let a = y[t],
                    l = null == (r = a.image) ? void 0 : r.mediaAttachmentState;
                null != l && l.mediaURL !== n && c.P(e, a.localCreationAnswerId, (0, i.Yk)(a.localCreationAnswerId, l.mediaURL));
            },
            [y]
        ),
        z = r.useCallback(
            async (e, t, n) => {
                let r = y[t].localCreationAnswerId;
                if ((K(e, t), F(g(n, o._.PREPARING), t), null == (await c.IV(e, r, n)))) return void F(g(n, o._.ERROR), t);
                F(g(n, o._.READY_TO_UPLOAD), t);
            },
            [y, F, K]
        ),
        q = r.useCallback(
            (e, t, n) => {
                let r = y[t].localCreationAnswerId,
                    a = URL.createObjectURL(n);
                (K(e, t), F(g(a, o._.PREPARING), t), c.fH(e, r, n), F(g(a, o._.READY_TO_UPLOAD), t));
            },
            [y, F, K]
        ),
        G = r.useCallback(
            (e, t) => {
                (K(j, t),
                    F(
                        {
                            emoji: e,
                            stickerId: void 0,
                            mediaAttachmentState: void 0
                        },
                        t
                    ));
            },
            [j, F, K]
        ),
        J = r.useCallback((e) => {
            w((t) => {
                let n = [...t];
                return ((n[e] = p(m({}, n[e]), { image: void 0 })), n);
            });
        }, []),
        X = r.useCallback(() => {
            W && w((e) => [...e, (0, u.Uu)()]);
        }, [W]),
        V = r.useCallback(
            (e) => {
                if (!H) return;
                let t = y.length;
                (K(j, e),
                    w((t) => {
                        let n = [...t];
                        return (n.splice(e, 1), n);
                    }),
                    null == n ||
                        n({
                            indexToRemove: e,
                            numberOfAnswers: t
                        }));
            },
            [y.length, H, j, n, K]
        );
    r.useEffect(
        () => () => {
            c.xt(j);
        },
        [j]
    );
    let Q = r.useCallback(() => {
            let e = !0,
                t = {};
            return (
                0 === x.trim().length && ((e = !1), (t.question = f.intl.string(f.t.gPX3oK))),
                y.filter((e) => (0, u.cS)(e, P)).length < d.gY && ((e = !1), (t['answer-'.concat(y[0].localCreationAnswerId)] = f.intl.string(f.t.fYvzER))),
                y.forEach((n) => {
                    (0, u.uY)(n, P) && ((e = !1), (t['answer-'.concat(n.localCreationAnswerId)] = f.intl.string(f.t['8Qqkc3'])));
                }),
                S(t),
                D(!e),
                e
            );
        }, [y, x, P]),
        $ = r.useCallback(async () => {
            await B({
                channel: e,
                question: x,
                answers: N,
                allowMultiSelect: _,
                duration: E,
                layout: P,
                onClose: t
            });
        }, [x, N, _, E, B, e, P, t]),
        ee = r.useCallback(() => {
            !U && Q() && $();
        }, [$, U, Q]);
    return {
        answers: y,
        question: x,
        setQuestion: v,
        selectedLayoutType: P,
        setSelectedLayoutType: C,
        allowMultiSelect: _,
        setAllowMultiSelect: A,
        duration: E,
        setDuration: I,
        canPost: T,
        canAddMoreAnswers: W,
        canRemoveMoreAnswers: H,
        handleQuestionChange: M,
        handleAnswerTextChange: Y,
        handleGifSelect: z,
        handleEmojiSelect: G,
        handleCustomUpload: q,
        handleAddAnswer: X,
        handleRemoveAnswer: V,
        handleRemoveAnswerImage: J,
        fieldErrors: k,
        createPoll: $,
        handleSubmitPoll: ee,
        submitting: U,
        createPollError: Z,
        shouldFocusOnInvalidField: R,
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
