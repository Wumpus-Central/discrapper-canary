n.d(t, { Z: () => b }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(781311);
var r = n(73800),
    a = n(263568),
    l = n(935369),
    o = n(398805),
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
        [h, O] = r.useState(() => [(0, u.Uu)(), (0, u.Uu)()]),
        [j, y] = r.useState(''),
        [x, w] = r.useState(a.C.DEFAULT),
        [v, _] = r.useState(!1),
        [P, C] = r.useState(d.lc.ONE_DAY),
        [E, A] = r.useState({}),
        [k, I] = r.useState(!1),
        S = h.filter((e) => (0, u.cS)(e, x)),
        D = h.filter((e) => (0, u.uY)(e, x)),
        N = j.length > 0 && S.length >= d.gY && 0 === D.length,
        [R, { error: T, loading: L }] = (0, l.Z)(c.Z.createPoll),
        B = h.length < d.fw,
        Z = h.length > d.gY,
        U = r.useCallback((e) => {
            A((e) => {
                let t = m({}, e);
                return delete t.question, t;
            }),
                y(e);
        }, []),
        M = r.useCallback((e) => {
            let { text: t, index: n, localCreationAnswerId: r } = e;
            A((e) => {
                let t = m({}, e);
                return delete t['answer-'.concat(r)], t;
            }),
                O((e) => {
                    let r = [...e];
                    return (r[n] = p(m({}, r[n]), { text: t })), r;
                });
        }, []),
        z = r.useCallback((e, t) => {
            O((n) => {
                let r = [...n];
                return (r[t] = p(m({}, r[t]), { image: e })), r;
            });
        }, []),
        W = r.useCallback(
            (e, t, n) => {
                var r;
                let a = h[t],
                    l = null == (r = a.image) ? void 0 : r.mediaAttachmentState;
                null != l && l.mediaURL !== n && s.P(e, a.localCreationAnswerId, (0, o.Yk)(a.localCreationAnswerId, l.mediaURL));
            },
            [h]
        ),
        H = r.useCallback(
            async (e, t, n) => {
                let r = h[t].localCreationAnswerId;
                if ((W(e, t), z(g(n, i._.PREPARING), t), null == (await s.IV(e, r, n)))) return void z(g(n, i._.ERROR), t);
                z(g(n, i._.READY_TO_UPLOAD), t);
            },
            [h, z, W]
        ),
        Y = r.useCallback(
            (e, t, n) => {
                let r = h[t].localCreationAnswerId,
                    a = URL.createObjectURL(n);
                W(e, t), z(g(a, i._.PREPARING), t), s.fH(e, r, n), z(g(a, i._.READY_TO_UPLOAD), t);
            },
            [h, z, W]
        ),
        K = r.useCallback(
            (e, t) => {
                W(b, t),
                    z(
                        {
                            emoji: e,
                            stickerId: void 0,
                            mediaAttachmentState: void 0
                        },
                        t
                    );
            },
            [b, z, W]
        ),
        F = r.useCallback((e) => {
            O((t) => {
                let n = [...t];
                return (n[e] = p(m({}, n[e]), { image: void 0 })), n;
            });
        }, []),
        q = r.useCallback(() => {
            B && O((e) => [...e, (0, u.Uu)()]);
        }, [B]),
        X = r.useCallback(
            (e) => {
                if (!Z) return;
                let t = h.length;
                W(b, e),
                    O((t) => {
                        let n = [...t];
                        return n.splice(e, 1), n;
                    }),
                    null == n ||
                        n({
                            indexToRemove: e,
                            numberOfAnswers: t
                        });
            },
            [h.length, Z, b, n, W]
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
                0 === j.trim().length && ((e = !1), (t.question = f.intl.string(f.t.gPX3oK))),
                h.filter((e) => (0, u.cS)(e, x)).length < d.gY && ((e = !1), (t['answer-'.concat(h[0].localCreationAnswerId)] = f.intl.string(f.t.fYvzER))),
                h.forEach((n) => {
                    (0, u.uY)(n, x) && ((e = !1), (t['answer-'.concat(n.localCreationAnswerId)] = f.intl.string(f.t['8Qqkc3'])));
                }),
                A(t),
                I(!e),
                e
            );
        }, [h, j, x]),
        G = r.useCallback(async () => {
            await R({
                channel: e,
                question: j,
                answers: S,
                allowMultiSelect: v,
                duration: P,
                layout: x,
                onClose: t
            });
        }, [j, S, v, P, R, e, x, t]),
        Q = r.useCallback(() => {
            !L && J() && G();
        }, [G, L, J]);
    return {
        answers: h,
        question: j,
        setQuestion: y,
        selectedLayoutType: x,
        setSelectedLayoutType: w,
        allowMultiSelect: v,
        setAllowMultiSelect: _,
        duration: P,
        setDuration: C,
        canPost: N,
        canAddMoreAnswers: B,
        canRemoveMoreAnswers: Z,
        handleQuestionChange: U,
        handleAnswerTextChange: M,
        handleGifSelect: H,
        handleEmojiSelect: K,
        handleCustomUpload: Y,
        handleAddAnswer: q,
        handleRemoveAnswer: X,
        handleRemoveAnswerImage: F,
        fieldErrors: E,
        createPoll: G,
        handleSubmitPoll: Q,
        submitting: L,
        createPollError: T,
        shouldFocusOnInvalidField: k,
        setShouldFocusOnInvalidField: I
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
