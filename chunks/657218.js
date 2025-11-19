n.d(t, { Z: () => q }), n(781311), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(430742),
    d = n(144144),
    u = n(240872),
    p = n(738619),
    h = n(561472),
    f = n(607070),
    g = n(100527),
    m = n(906732),
    b = n(541716),
    _ = n(752305),
    y = n(893718),
    O = n(303628),
    j = n(313201),
    x = n(967128),
    v = n(665149),
    C = n(294218),
    I = n(913663),
    S = n(268350),
    E = n(695346),
    Z = n(592125),
    P = n(703558),
    T = n(375954),
    N = n(496675),
    R = n(117530),
    w = n(459273),
    A = n(838440),
    D = n(127654),
    L = n(241309),
    M = n(928477),
    k = n(543855),
    U = n(488131),
    G = n(842332),
    H = n(602034),
    F = n(981631),
    B = n(388032),
    V = n(757212),
    z = n(149623);
function W(e) {
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
let Y = b.Ie.THREAD_CREATION;
function q(e) {
    let { parentChannelId: t, parentMessageId: n, location: i } = e,
        l = (0, s.e7)([Z.Z], () => Z.Z.getChannel(t)),
        { analyticsLocations: a } = (0, m.ZP)(g.Z.CREATE_THREAD);
    return null == l
        ? null
        : (0, r.jsx)(m.Gt, {
              value: a,
              children: (0, r.jsx)(w.I3, {
                  children: (0, r.jsxs)("section", {
                      "aria-label": B.intl.string(B.t.rBIGBL),
                      className: V.container,
                      children: [
                          (0, r.jsx)(h.Z, {
                              channel: l,
                              draftType: P.d.FirstThreadMessage,
                          }),
                          (0, r.jsx)(K, { parentChannelId: t }),
                          (0, r.jsx)(Q, {
                              parentChannel: l,
                              parentMessageId: n,
                              location: i,
                          }),
                      ],
                  }),
              }),
          });
}
function K(e) {
    let { parentChannelId: t } = e,
        n = i.useCallback(() => {
            let e = P.Z.getThreadSettings(t),
                n = P.Z.getDraft(t, P.d.FirstThreadMessage).trim(),
                r = R.Z.getUploads(t, P.d.FirstThreadMessage);
            if (
                ((null == e ? void 0 : e.name) != null && (null == e ? void 0 : e.name) !== "") ||
                0 !== n.length ||
                0 !== r.length
            )
                return void u.Z.show({
                    title: B.intl.string(B.t["6kDZh1"]),
                    body: B.intl.string(B.t.NgS9jX),
                    confirmText: B.intl.string(B.t["7WGI4H"]),
                    confirmVariant: "critical-primary",
                    cancelText: B.intl.string(B.t["olcKd/"]),
                    onConfirm: () => {
                        (0, U.NK)(t);
                    },
                });
            (0, U.NK)(t);
        }, [t]);
    return (0, r.jsxs)(v.ZP, {
        toolbar: (0, r.jsx)(v.ZP.Icon, {
            icon: o.Dio,
            tooltip: B.intl.string(B.t.cpT0Cq),
            onClick: n,
        }),
        children: [
            (0, r.jsx)(v.ZP.Icon, {
                icon: o.or_,
                disabled: !0,
                "aria-label": B.intl.string(B.t["7Xm5QI"]),
            }),
            (0, r.jsx)(v.ZP.Title, { children: B.intl.string(B.t["4WNcpu"]) }),
        ],
    });
}
function Q(e) {
    let { parentChannel: t, parentMessageId: n, location: l } = e,
        d = (0, s.e7)([f.Z], () => f.Z.messageGroupSpacing),
        u = (function () {
            let e = i.useContext(w.oo);
            return i.useCallback(() => {
                e.bumpDispatchPriority();
            }, [e]);
        })(),
        {
            threadSettings: h,
            setThreadSettings: g,
            updateThreadSettings: m,
        } = (function (e, t) {
            let n = (0, s.e7)([P.Z], () => {
                    var t;
                    return null != (t = P.Z.getThreadSettings(e.id)) ? t : {};
                }, [e.id]),
                [r, l] = i.useState(n),
                a = i.useCallback(
                    (n) => {
                        var r, i;
                        l((e) => W({}, e, n)),
                            c.Z.changeThreadSettings(
                                e.id,
                                ((r = W({}, n)),
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
        { textAreaState: b, setTextAreaState: y } = (function (e, t) {
            let [n, r] = i.useState((0, _.H2)());
            return (
                i.useEffect(() => {
                    function n(n) {
                        var i;
                        let l = P.Z.getDraft(e.id, P.d.FirstThreadMessage);
                        (0 === l.length || !0 === n) && r((0, _.eK)(l)),
                            t(null != (i = P.Z.getThreadSettings(e.id)) ? i : {});
                    }
                    return (
                        n(!0),
                        P.Z.addChangeListener(n),
                        () => {
                            P.Z.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                {
                    textAreaState: n,
                    setTextAreaState: r,
                }
            );
        })(t, g),
        O = (0, M.vH)(t),
        {
            isGeneratingAI: j,
            enableAIFeatures: v,
            getThreadNameInputAccessory: C,
        } = (0, G.U)({
            parentChannel: t,
            parentMessageId: n,
            updateThreadSettings: m,
            threadSettings: h,
            textAreaState: b,
        }),
        {
            nameError: E,
            messageError: Z,
            submit: T,
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
                g = (0, H.Z)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: r,
                    privateThreadMode: l,
                    location: s,
                    onThreadCreated: U.ok,
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
                                    null == (s = I.Z.getStickerPreview(t.id, Y.drafts.type))
                                        ? void 0
                                        : s.map((e) => e.id)),
                            (null == l || 0 === l.length) && (l = R.Z.getUploads(t.id, P.d.FirstThreadMessage));
                        let m = null != (c = r.name) ? c : "",
                            b = (o || null == n) && 0 === m.length,
                            _ = "" === e && (null == i || 0 === i.length) && 0 === l.length;
                        if ((d(b ? (0, L.V_)() : null), p(_ ? (0, L.T4)() : null), b || _))
                            return (
                                f(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0,
                                }
                            );
                        let { valid: y } = await (0, A.v)({
                            content: e,
                            stickers: i,
                            uploads: l,
                            type: Y,
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
                                (null == (u = e.body) ? void 0 : u.code) === F.evJ.AUTOMOD_TITLE_BLOCKED &&
                                    d((0, L.Gx)(e.body, t)),
                                f(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0,
                                }
                            );
                        }
                        return (
                            (0, S.qB)(t.id, Y.drafts.type),
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
            threadSettings: h,
            privateThreadMode: O,
            textAreaState: b,
            location: l,
            enableAIFeatures: v,
        }),
        D = (0, M.oD)(h, O) ? o.qtY : o.or_;
    return (0, r.jsx)("div", {
        className: V.chat,
        onMouseDown: u,
        onFocus: u,
        children: (0, r.jsx)("div", {
            className: a()(V.messagesWrapper, "group-spacing-".concat(d)),
            children: (0, r.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), T();
                },
                className: V.form,
                children: [
                    (0, r.jsx)(o.Ttm, {
                        className: V.scroller,
                        fade: !0,
                        children: (0, r.jsxs)("div", {
                            className: V.scrollerInner,
                            children: [
                                (0, r.jsxs)(x.ZP, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: a()(z.iconWrapper, V.iconWrapper),
                                            children: (0, r.jsx)(D, { className: z.icon }),
                                        }),
                                        (0, r.jsxs)(o.C3N, {
                                            children: [
                                                (0, r.jsx)(J, {
                                                    parentChannel: t,
                                                    parentMessageId: n,
                                                    threadSettings: h,
                                                    updateThreadSettings: m,
                                                    error: E,
                                                    disabled: N,
                                                    isGeneratingAI: j,
                                                    enableAIFeatures: v,
                                                    getThreadNameInputAccessory: C,
                                                }),
                                                t.type === F.d4z.GUILD_TEXT
                                                    ? (0, r.jsx)(X, {
                                                          startedFromMessage: null != n,
                                                          threadSettings: h,
                                                          updateThreadSettings: m,
                                                          privateThreadMode: O,
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(ee, {
                                    parentChannel: t,
                                    parentMessageId: n,
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: V.submitContainer,
                        children: [
                            (0, r.jsx)($, {
                                parentChannel: t,
                                textAreaState: b,
                                setTextAreaState: y,
                                submit: T,
                                error: Z,
                            }),
                            (0, r.jsx)(p.ZP, {
                                channel: t,
                                isThreadCreation: !0,
                                className: V.typingIndicator,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function X(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: i, privateThreadMode: l } = e,
        a = (0, M.oD)(n, l),
        s = (0, r.jsx)(o.Checkbox, {
            disabled: l === M.Jw.PrivateOnly,
            checked: a,
            onChange: (e) => i({ isPrivate: e }),
            label: B.intl.string(B.t.TRPp3g),
        });
    return t || l === M.Jw.Disabled
        ? null
        : (0, r.jsx)(o.gNt, {
              label: B.intl.string(B.t.F1zyvU),
              helperText: a ? B.intl.string(B.t.EWXycz) : void 0,
              children: s,
          });
}
function J(e) {
    var t;
    let {
            parentChannel: n,
            parentMessageId: i,
            threadSettings: l,
            updateThreadSettings: a,
            error: s,
            disabled: c,
            isGeneratingAI: u,
            enableAIFeatures: p,
            getThreadNameInputAccessory: h,
        } = e,
        f = null != (t = l.name) ? t : "",
        g = (0, L.Op)(s, { content: f }),
        m = (0, M.Od)(n, i),
        b = null != i && !p,
        _ = (0, j.Dt)(),
        y = p ? B.intl.string(B.t["Nb2/RE"]) : "" !== m ? m : B.intl.string(B.t["Nb2/RE"]);
    return (0, r.jsx)(o.oil, {
        label: B.intl.string(b ? B.t.JPvIiL : B.t.j3XWjD),
        trailing: h(c),
        value: f,
        id: _,
        placeholder: y,
        maxLength: F.HN8,
        onChange: (e) => {
            a({ name: (0, k.Z)(e, !1) }), "" !== e ? d.Z.startTyping(n.id) : d.Z.stopTyping(n.id);
        },
        onBlur: () => {
            let e = (0, k.Z)(f, !0);
            e !== f && a({ name: e });
        },
        error: g,
        disabled: c || u,
    });
}
function $(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: l, submit: u, error: p } = e,
        [h, f] = i.useState(!0),
        g = i.useCallback(() => f(!0), []),
        m = i.useCallback(() => f(!1), []),
        b = i.useCallback(
            (e, n, r) => {
                c.Z.saveDraft(t.id, n, P.d.FirstThreadMessage),
                    l(
                        (e) => (
                            "" !== n && e.textValue !== n ? d.Z.startTyping(t.id) : "" === n && d.Z.stopTyping(t.id),
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
                return u(t, r, n);
            },
            [u],
        );
    (0, w.yp)({
        event: F.CkL.TEXTAREA_FOCUS,
        handler: g,
    }),
        (0, w.yp)({
            event: F.CkL.TEXTAREA_BLUR,
            handler: m,
        });
    let j = (0, s.e7)([N.Z], () => N.Z.can(F.Plq.ATTACH_FILES, t)),
        x = (0, L.Op)(p, { content: n.textValue });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(O.Z, {
                channelId: t.id,
                type: Y,
                canAttachFiles: j,
            }),
            (0, r.jsx)("div", {
                className: V.starterMessageError,
                children: (0, r.jsx)(o.pdY, { error: x }),
            }),
            (0, r.jsx)(y.ZP, {
                type: Y,
                channel: t,
                placeholder: B.intl.string(B.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: h,
                className: a()(V.channelTextArea, V.channelTextAreaWithTypingIndicator),
                innerClassName: a()(V.channelTextAreaInner, { [V.channelTextAreaInnerError]: null != x }),
                onFocus: g,
                onBlur: m,
                onChange: b,
                onSubmit: _,
                promptToUpload: D.d,
            }),
        ],
    });
}
function ee(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        i = (0, s.e7)([T.Z], () => (null == n ? null : T.Z.getMessage(t.id, n))),
        l = E.jU.useSetting();
    return null != i
        ? (0, r.jsx)(C.Z, {
              className: V.messagePreview,
              message: i,
              channel: t,
              compact: l,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
