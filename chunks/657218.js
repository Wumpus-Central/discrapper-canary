n.d(t, { Z: () => K }), n(781311), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(430742),
    u = n(144144),
    p = n(240872),
    h = n(738619),
    f = n(561472),
    g = n(607070),
    m = n(100527),
    b = n(906732),
    _ = n(541716),
    y = n(752305),
    x = n(893718),
    O = n(303628),
    j = n(313201),
    v = n(967128),
    C = n(665149),
    I = n(294218),
    S = n(913663),
    E = n(268350),
    Z = n(695346),
    P = n(592125),
    T = n(703558),
    N = n(375954),
    R = n(496675),
    w = n(117530),
    A = n(459273),
    D = n(838440),
    L = n(127654),
    M = n(241309),
    k = n(928477),
    U = n(456077),
    G = n(488131),
    H = n(842332),
    F = n(602034),
    B = n(981631),
    V = n(388032),
    z = n(757212),
    W = n(149623);
function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let q = _.Ie.THREAD_CREATION;
function K(e) {
    let { parentChannelId: t, parentMessageId: n, location: i } = e,
        l = (0, s.e7)([P.Z], () => P.Z.getChannel(t)),
        { analyticsLocations: a } = (0, b.ZP)(m.Z.CREATE_THREAD);
    return null == l
        ? null
        : (0, r.jsx)(b.Gt, {
              value: a,
              children: (0, r.jsx)(A.I3, {
                  children: (0, r.jsxs)("section", {
                      "aria-label": V.intl.string(V.t.rBIGBL),
                      className: z.container,
                      children: [
                          (0, r.jsx)(f.Z, {
                              channel: l,
                              draftType: T.d.FirstThreadMessage,
                          }),
                          (0, r.jsx)(Q, { parentChannelId: t }),
                          (0, r.jsx)(X, {
                              parentChannel: l,
                              parentMessageId: n,
                              location: i,
                          }),
                      ],
                  }),
              }),
          });
}
function Q(e) {
    let { parentChannelId: t } = e,
        n = i.useCallback(() => {
            let e = T.Z.getThreadSettings(t),
                n = T.Z.getDraft(t, T.d.FirstThreadMessage).trim(),
                r = w.Z.getUploads(t, T.d.FirstThreadMessage);
            if (
                ((null == e ? void 0 : e.name) != null && (null == e ? void 0 : e.name) !== "") ||
                0 !== n.length ||
                0 !== r.length
            )
                return void p.Z.show({
                    title: V.intl.string(V.t["6kDZh1"]),
                    body: V.intl.string(V.t.NgS9jX),
                    confirmColor: o.Tt.RED,
                    confirmText: V.intl.string(V.t["7WGI4H"]),
                    confirmVariant: "critical-primary",
                    cancelText: V.intl.string(V.t["olcKd/"]),
                    onConfirm: () => {
                        (0, G.NK)(t);
                    },
                });
            (0, G.NK)(t);
        }, [t]);
    return (0, r.jsxs)(C.ZP, {
        toolbar: (0, r.jsx)(C.ZP.Icon, {
            icon: c.Dio,
            tooltip: V.intl.string(V.t.cpT0Cq),
            onClick: n,
        }),
        children: [
            (0, r.jsx)(C.ZP.Icon, {
                icon: c.or_,
                disabled: !0,
                "aria-label": V.intl.string(V.t["7Xm5QI"]),
            }),
            (0, r.jsx)(C.ZP.Title, { children: V.intl.string(V.t["4WNcpu"]) }),
        ],
    });
}
function X(e) {
    let { parentChannel: t, parentMessageId: n, location: l } = e,
        o = (0, s.e7)([g.Z], () => g.Z.messageGroupSpacing),
        u = (function () {
            let e = i.useContext(A.oo);
            return i.useCallback(() => {
                e.bumpDispatchPriority();
            }, [e]);
        })(),
        {
            threadSettings: p,
            setThreadSettings: f,
            updateThreadSettings: m,
        } = (function (e, t) {
            let n = (0, s.e7)([T.Z], () => {
                    var t;
                    return null != (t = T.Z.getThreadSettings(e.id)) ? t : {};
                }, [e.id]),
                [r, l] = i.useState(n),
                a = i.useCallback(
                    (n) => {
                        var r, i;
                        l((e) => Y({}, e, n)),
                            d.Z.changeThreadSettings(
                                e.id,
                                ((r = Y({}, n)),
                                (i = i = { parentMessageId: t }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                r),
                            );
                    },
                    [e.id, t],
                );
            return {
                threadSettings: r,
                setThreadSettings: l,
                updateThreadSettings: a,
            };
        })(t, n),
        { textAreaState: b, setTextAreaState: _ } = (function (e, t) {
            let [n, r] = i.useState((0, y.H2)());
            return (
                i.useEffect(() => {
                    function n(n) {
                        var i;
                        let l = T.Z.getDraft(e.id, T.d.FirstThreadMessage);
                        (0 === l.length || !0 === n) && r((0, y.eK)(l)),
                            t(null != (i = T.Z.getThreadSettings(e.id)) ? i : {});
                    }
                    return (
                        n(!0),
                        T.Z.addChangeListener(n),
                        () => {
                            T.Z.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                {
                    textAreaState: n,
                    setTextAreaState: r,
                }
            );
        })(t, f),
        x = (0, k.vH)(t),
        {
            isGeneratingAI: O,
            enableAIFeatures: j,
            getThreadNameInputAccessory: C,
        } = (0, H.U)({
            parentChannel: t,
            parentMessageId: n,
            updateThreadSettings: m,
            threadSettings: p,
            textAreaState: b,
        }),
        {
            nameError: I,
            messageError: Z,
            submit: P,
            submitting: N,
        } = (function (e) {
            let {
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: r,
                    privateThreadMode: l,
                    textAreaState: a,
                    location: s,
                    enableAIFeatures: o,
                } = e,
                [c, d] = i.useState(null),
                [u, p] = i.useState(null),
                [h, f] = i.useState(!1),
                g = (0, F.Z)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: r,
                    privateThreadMode: l,
                    location: s,
                    onThreadCreated: G.ok,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: c,
                messageError: u,
                submit: i.useCallback(
                    async (e, i, l) => {
                        var s, c, u;
                        if (h)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !1,
                            };
                        f(!0),
                            null == e && (e = a.textValue),
                            (e = e.trim()),
                            (null == i || 0 === i.length) &&
                                (i =
                                    null == (s = S.Z.getStickerPreview(t.id, q.drafts.type))
                                        ? void 0
                                        : s.map((e) => e.id)),
                            (null == l || 0 === l.length) && (l = w.Z.getUploads(t.id, T.d.FirstThreadMessage));
                        let m = null != (c = r.name) ? c : "",
                            b = (o || null == n) && 0 === m.length,
                            _ = "" === e && (null == i || 0 === i.length) && 0 === l.length;
                        if ((d(b ? (0, M.V_)() : null), p(_ ? (0, M.T4)() : null), b || _))
                            return (
                                f(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0,
                                }
                            );
                        let { valid: y } = await (0, D.v)({
                            content: e,
                            stickers: i,
                            uploads: l,
                            type: q,
                            channel: null == n ? t : null,
                        });
                        if (!y)
                            return (
                                f(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0,
                                }
                            );
                        try {
                            await g(e, i, l);
                        } catch (e) {
                            return (
                                (null == (u = e.body) ? void 0 : u.code) === B.evJ.AUTOMOD_TITLE_BLOCKED &&
                                    d((0, M.Gx)(e.body, t)),
                                f(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0,
                                }
                            );
                        }
                        return (
                            (0, E.qB)(t.id, q.drafts.type),
                            f(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1,
                            }
                        );
                    },
                    [g, a.textValue, r.name, n, t, h, o],
                ),
                submitting: h,
            };
        })({
            parentChannel: t,
            parentMessageId: n,
            threadSettings: p,
            privateThreadMode: x,
            textAreaState: b,
            location: l,
            enableAIFeatures: j,
        }),
        R = (0, k.oD)(p, x) ? c.qtY : c.or_;
    return (0, r.jsx)("div", {
        className: z.chat,
        onMouseDown: u,
        onFocus: u,
        children: (0, r.jsx)("div", {
            className: a()(z.messagesWrapper, "group-spacing-".concat(o)),
            children: (0, r.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), P();
                },
                className: z.form,
                children: [
                    (0, r.jsx)(c.Ttm, {
                        className: z.scroller,
                        fade: !0,
                        children: (0, r.jsxs)("div", {
                            className: z.scrollerInner,
                            children: [
                                (0, r.jsxs)(v.ZP, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: a()(W.iconWrapper, z.iconWrapper),
                                            children: (0, r.jsx)(R, { className: W.icon }),
                                        }),
                                        (0, r.jsxs)(c.C3N, {
                                            children: [
                                                (0, r.jsx)($, {
                                                    parentChannel: t,
                                                    parentMessageId: n,
                                                    threadSettings: p,
                                                    updateThreadSettings: m,
                                                    error: I,
                                                    disabled: N,
                                                    isGeneratingAI: O,
                                                    enableAIFeatures: j,
                                                    getThreadNameInputAccessory: C,
                                                }),
                                                t.type === B.d4z.GUILD_TEXT
                                                    ? (0, r.jsx)(J, {
                                                          startedFromMessage: null != n,
                                                          threadSettings: p,
                                                          updateThreadSettings: m,
                                                          privateThreadMode: x,
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(et, {
                                    parentChannel: t,
                                    parentMessageId: n,
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: z.submitContainer,
                        children: [
                            (0, r.jsx)(ee, {
                                parentChannel: t,
                                textAreaState: b,
                                setTextAreaState: _,
                                submit: P,
                                error: Z,
                            }),
                            (0, r.jsx)(h.ZP, {
                                channel: t,
                                isThreadCreation: !0,
                                className: z.typingIndicator,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function J(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: i, privateThreadMode: l } = e,
        a = (0, k.oD)(n, l),
        s = (0, r.jsx)(c.Checkbox, {
            disabled: l === k.Jw.PrivateOnly,
            checked: a,
            onChange: (e) => i({ isPrivate: e }),
            label: V.intl.string(V.t.TRPp3g),
        });
    return t || l === k.Jw.Disabled
        ? null
        : (0, r.jsx)(c.gNt, {
              label: V.intl.string(V.t.F1zyvU),
              helperText: a ? V.intl.string(V.t.EWXycz) : void 0,
              children: s,
          });
}
function $(e) {
    var t;
    let {
            parentChannel: n,
            parentMessageId: i,
            threadSettings: l,
            updateThreadSettings: a,
            error: s,
            disabled: o,
            isGeneratingAI: d,
            enableAIFeatures: p,
            getThreadNameInputAccessory: h,
        } = e,
        f = null != (t = l.name) ? t : "",
        g = (0, M.Op)(s, { content: f }),
        m = (0, k.Od)(n, i),
        b = null != i && !p,
        _ = (0, j.Dt)(),
        y = p ? V.intl.string(V.t["Nb2/RE"]) : "" !== m ? m : V.intl.string(V.t["Nb2/RE"]);
    return (0, r.jsx)(c.oil, {
        label: V.intl.string(b ? V.t.JPvIiL : V.t.j3XWjD),
        trailing: h(o),
        value: f,
        id: _,
        placeholder: y,
        maxLength: B.HN8,
        onChange: (e) => {
            a({ name: (0, U.Z)(e, !1) }), "" !== e ? u.Z.startTyping(n.id) : u.Z.stopTyping(n.id);
        },
        onBlur: () => {
            let e = (0, U.Z)(f, !0);
            e !== f && a({ name: e });
        },
        error: g,
        disabled: o || d,
    });
}
function ee(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: l, submit: o, error: p } = e,
        [h, f] = i.useState(!0),
        g = i.useCallback(() => f(!0), []),
        m = i.useCallback(() => f(!1), []),
        b = i.useCallback(
            (e, n, r) => {
                d.Z.saveDraft(t.id, n, T.d.FirstThreadMessage),
                    l(
                        (e) => (
                            "" !== n && e.textValue !== n ? u.Z.startTyping(t.id) : "" === n && u.Z.stopTyping(t.id),
                            {
                                textValue: n,
                                richValue: r,
                            }
                        ),
                    );
            },
            [t.id, l],
        ),
        _ = i.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: r } = e;
                return o(t, r, n);
            },
            [o],
        );
    (0, A.yp)({
        event: B.CkL.TEXTAREA_FOCUS,
        handler: g,
    }),
        (0, A.yp)({
            event: B.CkL.TEXTAREA_BLUR,
            handler: m,
        });
    let y = (0, s.e7)([R.Z], () => R.Z.can(B.Plq.ATTACH_FILES, t)),
        j = (0, M.Op)(p, { content: n.textValue });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(O.Z, {
                channelId: t.id,
                type: q,
                canAttachFiles: y,
            }),
            (0, r.jsx)("div", {
                className: z.starterMessageError,
                children: (0, r.jsx)(c.pdY, { error: j }),
            }),
            (0, r.jsx)(x.ZP, {
                type: q,
                channel: t,
                placeholder: V.intl.string(V.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: h,
                className: a()(z.channelTextArea, z.channelTextAreaWithTypingIndicator),
                innerClassName: a()(z.channelTextAreaInner, { [z.channelTextAreaInnerError]: null != j }),
                onFocus: g,
                onBlur: m,
                onChange: b,
                onSubmit: _,
                promptToUpload: L.d,
            }),
        ],
    });
}
function et(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        i = (0, s.e7)([N.Z], () => (null == n ? null : N.Z.getMessage(t.id, n))),
        l = Z.jU.useSetting();
    return null != i
        ? (0, r.jsx)(I.Z, {
              className: z.messagePreview,
              message: i,
              channel: t,
              compact: l,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
