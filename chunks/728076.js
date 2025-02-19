n.d(t, { Z: () => b }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(566702);
var r = n(192379),
    a = n(263568),
    o = n(935369),
    l = n(398805),
    i = n(524100),
    s = n(316758),
    c = n(203143),
    u = n(79390),
    d = n(489887),
    f = n(388032);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
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
function b(e, t, n) {
    let b = e.id,
        [h, j] = r.useState(() => [(0, u.Uu)(), (0, u.Uu)()]),
        [O, y] = r.useState(''),
        [x, v] = r.useState(a.C.DEFAULT),
        [w, _] = r.useState(!1),
        [P, C] = r.useState(d.lc.ONE_DAY),
        [N, A] = r.useState({}),
        [E, k] = r.useState(!1),
        I = h.filter((e) => (0, u.cS)(e, x)),
        S = h.filter((e) => (0, u.uY)(e, x)),
        D = O.length > 0 && I.length >= d.gY && 0 === S.length,
        [R, { error: W, loading: T }] = (0, o.Z)(c.Z.createPoll),
        L = h.length < d.fw,
        B = h.length > d.gY,
        Z = r.useCallback((e) => {
            A((e) => {
                let t = m({}, e);
                return delete t.question, t;
            }),
                y(e);
        }, []),
        U = r.useCallback((e) => {
            let { text: t, index: n, localCreationAnswerId: r } = e;
            A((e) => {
                let t = m({}, e);
                return delete t['answer-'.concat(r)], t;
            }),
                j((e) => {
                    let r = [...e];
                    return (r[n] = p(m({}, r[n]), { text: t })), r;
                });
        }, []),
        M = r.useCallback((e, t) => {
            j((n) => {
                let r = [...n];
                return (r[t] = p(m({}, r[t]), { image: e })), r;
            });
        }, []),
        z = r.useCallback(
            (e, t, n) => {
                var r;
                let a = h[t],
                    o = null === (r = a.image) || void 0 === r ? void 0 : r.mediaAttachmentState;
                null != o && o.mediaURL !== n && s.P(e, a.localCreationAnswerId, (0, l.Yk)(a.localCreationAnswerId, o.mediaURL));
            },
            [h]
        ),
        H = r.useCallback(
            async (e, t, n) => {
                let r = h[t].localCreationAnswerId;
                if ((z(e, t), M(g(n, i._.PREPARING), t), null == (await s.IV(e, r, n)))) {
                    M(g(n, i._.ERROR), t);
                    return;
                }
                M(g(n, i._.READY_TO_UPLOAD), t);
            },
            [h, M, z]
        ),
        F = r.useCallback(
            (e, t, n) => {
                let r = h[t].localCreationAnswerId,
                    a = URL.createObjectURL(n);
                z(e, t), M(g(a, i._.PREPARING), t), s.fH(e, r, n), M(g(a, i._.READY_TO_UPLOAD), t);
            },
            [h, M, z]
        ),
        Y = r.useCallback(
            (e, t) => {
                z(b, t),
                    M(
                        {
                            emoji: e,
                            stickerId: void 0,
                            mediaAttachmentState: void 0
                        },
                        t
                    );
            },
            [b, M, z]
        ),
        K = r.useCallback((e) => {
            j((t) => {
                let n = [...t];
                return (n[e] = p(m({}, n[e]), { image: void 0 })), n;
            });
        }, []),
        q = r.useCallback(() => {
            L && j((e) => [...e, (0, u.Uu)()]);
        }, [L]),
        X = r.useCallback(
            (e) => {
                if (!B) return;
                let t = h.length;
                z(b, e),
                    j((t) => {
                        let n = [...t];
                        return n.splice(e, 1), n;
                    }),
                    null == n ||
                        n({
                            indexToRemove: e,
                            numberOfAnswers: t
                        });
            },
            [h.length, B, b, n, z]
        );
    r.useEffect(
        () => () => {
            s.xt(b);
        },
        [b]
    );
    let J = r.useCallback(() => {
            let e = !0,
                t = {};
            return (
                0 === O.trim().length && ((e = !1), (t.question = f.NW.string(f.t.gPX3oK))),
                h.filter((e) => (0, u.cS)(e, x)).length < d.gY && ((e = !1), (t['answer-'.concat(h[0].localCreationAnswerId)] = f.NW.string(f.t.fYvzER))),
                h.forEach((n) => {
                    (0, u.uY)(n, x) && ((e = !1), (t['answer-'.concat(n.localCreationAnswerId)] = f.NW.string(f.t['8Qqkc3'])));
                }),
                A(t),
                k(!e),
                e
            );
        }, [h, O, x]),
        G = r.useCallback(async () => {
            await R({
                channel: e,
                question: O,
                answers: I,
                allowMultiSelect: w,
                duration: P,
                layout: x,
                onClose: t
            });
        }, [O, I, w, P, R, e, x, t]),
        Q = r.useCallback(() => {
            !T && J() && G();
        }, [G, T, J]);
    return {
        answers: h,
        question: O,
        setQuestion: y,
        selectedLayoutType: x,
        setSelectedLayoutType: v,
        allowMultiSelect: w,
        setAllowMultiSelect: _,
        duration: P,
        setDuration: C,
        canPost: D,
        canAddMoreAnswers: L,
        canRemoveMoreAnswers: B,
        handleQuestionChange: Z,
        handleAnswerTextChange: U,
        handleGifSelect: H,
        handleEmojiSelect: Y,
        handleCustomUpload: F,
        handleAddAnswer: q,
        handleRemoveAnswer: X,
        handleRemoveAnswerImage: K,
        fieldErrors: N,
        createPoll: G,
        handleSubmitPoll: Q,
        submitting: T,
        createPollError: W,
        shouldFocusOnInvalidField: E,
        setShouldFocusOnInvalidField: k
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
