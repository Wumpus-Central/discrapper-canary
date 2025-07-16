(n.d(t, { Z: () => K }), n(781311), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(430742),
    d = n(144144),
    p = n(240872),
    h = n(738619),
    f = n(561472),
    m = n(607070),
    g = n(100527),
    b = n(906732),
    _ = n(541716),
    y = n(752305),
    C = n(893718),
    x = n(303628),
    v = n(313201),
    O = n(967128),
    j = n(665149),
    E = n(294218),
    S = n(913663),
    P = n(268350),
    I = n(695346),
    Z = n(592125),
    N = n(703558),
    T = n(375954),
    A = n(496675),
    w = n(117530),
    R = n(459273),
    M = n(838440),
    D = n(127654),
    L = n(241309),
    k = n(928477),
    U = n(456077),
    B = n(488131),
    F = n(842332),
    H = n(602034),
    G = n(981631),
    V = n(388032),
    z = n(776584),
    W = n(128337);
function Y(e) {
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
let q = _.Ie.THREAD_CREATION;
function K(e) {
    let { parentChannelId: t, parentMessageId: n, location: i } = e,
        l = (0, o.e7)([Z.Z], () => Z.Z.getChannel(t)),
        { analyticsLocations: a } = (0, b.ZP)(g.Z.CREATE_THREAD);
    return null == l
        ? null
        : (0, r.jsx)(b.Gt, {
              value: a,
              children: (0, r.jsx)(R.I3, {
                  children: (0, r.jsxs)('section', {
                      'aria-label': V.intl.string(V.t.rBIGBA),
                      className: z.container,
                      children: [
                          (0, r.jsx)(f.Z, {
                              channel: l,
                              draftType: N.d.FirstThreadMessage
                          }),
                          (0, r.jsx)(X, { parentChannelId: t }),
                          (0, r.jsx)(Q, {
                              parentChannel: l,
                              parentMessageId: n,
                              location: i
                          })
                      ]
                  })
              })
          });
}
function X(e) {
    let { parentChannelId: t } = e,
        n = i.useCallback(() => {
            let e = N.Z.getThreadSettings(t),
                n = N.Z.getDraft(t, N.d.FirstThreadMessage).trim(),
                r = w.Z.getUploads(t, N.d.FirstThreadMessage);
            if (((null == e ? void 0 : e.name) != null && (null == e ? void 0 : e.name) !== '') || 0 !== n.length || 0 !== r.length)
                return void p.Z.show({
                    title: V.intl.string(V.t['6kDZh4']),
                    body: V.intl.string(V.t.NgS9jY),
                    confirmColor: s.Tt.RED,
                    confirmText: V.intl.string(V.t['7WGI4O']),
                    confirmVariant: 'critical-primary',
                    cancelText: V.intl.string(V.t.olcKd3),
                    onConfirm: () => {
                        (0, B.NK)(t);
                    }
                });
            (0, B.NK)(t);
        }, [t]);
    return (0, r.jsxs)(j.ZP, {
        toolbar: (0, r.jsx)(j.ZP.Icon, {
            icon: c.Dio,
            tooltip: V.intl.string(V.t.cpT0Cg),
            onClick: n
        }),
        children: [
            (0, r.jsx)(j.ZP.Icon, {
                icon: c.or_,
                disabled: !0,
                'aria-label': V.intl.string(V.t['7Xm5QE'])
            }),
            (0, r.jsx)(j.ZP.Title, { children: V.intl.string(V.t['4WNcpq']) })
        ]
    });
}
function Q(e) {
    let { parentChannel: t, parentMessageId: n, location: l } = e,
        s = (0, o.e7)([m.Z], () => m.Z.messageGroupSpacing),
        d = (function () {
            let e = i.useContext(R.oo);
            return i.useCallback(() => {
                e.bumpDispatchPriority();
            }, [e]);
        })(),
        {
            threadSettings: p,
            setThreadSettings: f,
            updateThreadSettings: g
        } = (function (e, t) {
            let [n, r] = i.useState({}),
                l = i.useCallback(
                    (n) => {
                        var i, l;
                        (r((e) => Y({}, e, n)),
                            u.Z.changeThreadSettings(
                                e.id,
                                ((i = Y({}, n)),
                                (l = l = { parentMessageId: t }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                i)
                            ));
                    },
                    [e.id, t]
                );
            return {
                threadSettings: n,
                setThreadSettings: r,
                updateThreadSettings: l
            };
        })(t, n),
        { textAreaState: b, setTextAreaState: _ } = (function (e, t) {
            let [n, r] = i.useState((0, y.H2)());
            return (
                i.useEffect(() => {
                    function n(n) {
                        var i;
                        let l = N.Z.getDraft(e.id, N.d.FirstThreadMessage);
                        ((0 === l.length || !0 === n) && r((0, y.eK)(l)), t(null != (i = N.Z.getThreadSettings(e.id)) ? i : {}));
                    }
                    return (
                        n(!0),
                        N.Z.addChangeListener(n),
                        () => {
                            N.Z.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                {
                    textAreaState: n,
                    setTextAreaState: r
                }
            );
        })(t, f),
        C = (0, k.vH)(t),
        {
            isGeneratingAI: x,
            enableAIFeatures: v,
            renderAiGenerateButton: j
        } = (0, F.U)({
            parentChannel: t,
            parentMessageId: n,
            updateThreadSettings: g,
            threadSettings: p,
            textAreaState: b
        }),
        {
            nameError: E,
            messageError: I,
            submit: Z,
            submitting: T
        } = (function (e) {
            let { parentChannel: t, parentMessageId: n, threadSettings: r, privateThreadMode: l, textAreaState: a, location: o, enableAIFeatures: s } = e,
                [c, u] = i.useState(null),
                [d, p] = i.useState(null),
                [h, f] = i.useState(!1),
                m = (0, H.Z)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: r,
                    privateThreadMode: l,
                    location: o,
                    onThreadCreated: B.ok,
                    useDefaultThreadName: !0
                });
            return {
                nameError: c,
                messageError: d,
                submit: i.useCallback(
                    async (e, i, l) => {
                        var o, c, d;
                        if (h)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !1
                            };
                        (f(!0), null == e && (e = a.textValue), (e = e.trim()), (null == i || 0 === i.length) && (i = null == (o = S.Z.getStickerPreview(t.id, q.drafts.type)) ? void 0 : o.map((e) => e.id)), (null == l || 0 === l.length) && (l = w.Z.getUploads(t.id, N.d.FirstThreadMessage)));
                        let g = null != (c = r.name) ? c : '',
                            b = (s || null == n) && 0 === g.length,
                            _ = '' === e && (null == i || 0 === i.length) && 0 === l.length;
                        if ((u(b ? (0, L.V_)() : null), p(_ ? (0, L.T4)() : null), b || _))
                            return (
                                f(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                }
                            );
                        if (null == n) {
                            let { valid: n } = await (0, M.v)({
                                content: e,
                                stickers: i,
                                uploads: l,
                                type: q,
                                channel: t
                            });
                            if (!n)
                                return (
                                    f(!1),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    }
                                );
                        }
                        try {
                            await m(e, i, l);
                        } catch (e) {
                            return (
                                (null == (d = e.body) ? void 0 : d.code) === G.evJ.AUTOMOD_TITLE_BLOCKED && u((0, L.Gx)(e.body, t)),
                                f(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                }
                            );
                        }
                        return (
                            (0, P.qB)(t.id, q.drafts.type),
                            f(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    },
                    [m, a.textValue, r.name, n, t, h, s]
                ),
                submitting: h
            };
        })({
            parentChannel: t,
            parentMessageId: n,
            threadSettings: p,
            privateThreadMode: C,
            textAreaState: b,
            location: l,
            enableAIFeatures: v
        }),
        A = (0, k.oD)(p, C) ? c.qtY : c.or_;
    return (0, r.jsx)('div', {
        className: z.chat,
        onMouseDown: d,
        onFocus: d,
        children: (0, r.jsx)('div', {
            className: a()(z.messagesWrapper, 'group-spacing-'.concat(s)),
            children: (0, r.jsxs)('form', {
                onSubmit: (e) => {
                    (e.preventDefault(), Z());
                },
                className: z.form,
                children: [
                    (0, r.jsx)(c.Ttm, {
                        className: z.scroller,
                        fade: !0,
                        children: (0, r.jsxs)('div', {
                            className: z.scrollerInner,
                            children: [
                                (0, r.jsxs)(O.ZP, {
                                    channelId: 'create-thread-null',
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: W.iconWrapper,
                                            children: (0, r.jsx)(A, { className: W.icon })
                                        }),
                                        (0, r.jsx)($, {
                                            parentChannel: t,
                                            parentMessageId: n,
                                            threadSettings: p,
                                            updateThreadSettings: g,
                                            error: E,
                                            disabled: T,
                                            isGeneratingAI: x,
                                            enableAIFeatures: v,
                                            renderAiGenerateButton: j
                                        }),
                                        t.type === G.d4z.GUILD_TEXT
                                            ? (0, r.jsx)(J, {
                                                  startedFromMessage: null != n,
                                                  threadSettings: p,
                                                  updateThreadSettings: g,
                                                  privateThreadMode: C
                                              })
                                            : null
                                    ]
                                }),
                                (0, r.jsx)(et, {
                                    parentChannel: t,
                                    parentMessageId: n
                                })
                            ]
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: z.submitContainer,
                        children: [
                            (0, r.jsx)(ee, {
                                parentChannel: t,
                                textAreaState: b,
                                setTextAreaState: _,
                                submit: Z,
                                error: I
                            }),
                            (0, r.jsx)(h.ZP, {
                                channel: t,
                                isThreadCreation: !0,
                                className: z.typingIndicator,
                                isInTextChannel: !0
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function J(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: i, privateThreadMode: l } = e,
        a = (0, k.oD)(n, l),
        o = (0, r.jsx)('div', {
            className: z.privateThreadFormTitle,
            children: (0, r.jsx)('span', {
                className: z.privateThreadFormTitleText,
                children: V.intl.string(V.t.F1zyvb)
            })
        }),
        s = (0, r.jsx)(c.XZJ, {
            className: z.checkbox,
            type: c.XZJ.Types.INVERTED,
            disabled: l === k.Jw.PrivateOnly,
            value: a,
            onChange: (e, t) => i({ isPrivate: t }),
            children: (0, r.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: 'none',
                children: V.intl.string(V.t.TRPp3t)
            })
        });
    return t || l === k.Jw.Disabled
        ? null
        : (0, r.jsxs)(c.hjN, {
              title: o,
              className: z.formSection,
              children: [
                  s,
                  a
                      ? (0, r.jsx)(c.Text, {
                            className: z.privateThreadDescription,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: V.intl.string(V.t.EWXyc3)
                        })
                      : null
              ]
          });
}
function $(e) {
    var t;
    let { parentChannel: n, parentMessageId: i, threadSettings: l, updateThreadSettings: o, error: s, disabled: u, isGeneratingAI: p, enableAIFeatures: h, renderAiGenerateButton: f } = e,
        m = null != (t = l.name) ? t : '',
        g = (0, L.Op)(s, { content: m }),
        b = (0, k.Od)(n, i),
        _ = null != i && !h,
        y = (0, v.Dt)(),
        C = h ? V.intl.string(V.t['Nb2/RE']) : '' !== b ? b : V.intl.string(V.t['Nb2/RE']);
    return (0, r.jsx)(c.hjN, {
        tag: 'label',
        htmlFor: y,
        title: V.intl.string(_ ? V.t.JPvIiI : V.t.j3XWjI),
        className: z.formSection,
        children: (0, r.jsxs)('div', {
            className: z.threadNameContainer,
            children: [
                (0, r.jsx)(c.oil, {
                    value: m,
                    id: y,
                    placeholder: C,
                    maxLength: G.HN8,
                    onChange: (e) => {
                        (o({ name: (0, U.Z)(e, !1) }), '' !== e ? d.Z.startTyping(n.id) : d.Z.stopTyping(n.id));
                    },
                    onBlur: () => {
                        let e = (0, U.Z)(m, !0);
                        e !== m && o({ name: e });
                    },
                    error: g,
                    disabled: u || p,
                    inputClassName: a()({ [z.threadNameInputWithAI]: h })
                }),
                f(u)
            ]
        })
    });
}
function ee(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: l, submit: s, error: p } = e,
        [h, f] = i.useState(!0),
        m = i.useCallback(() => f(!0), []),
        g = i.useCallback(() => f(!1), []),
        b = i.useCallback(
            (e, n, r) => {
                (u.Z.saveDraft(t.id, n, N.d.FirstThreadMessage),
                    l(
                        (e) => (
                            '' !== n && e.textValue !== n ? d.Z.startTyping(t.id) : '' === n && d.Z.stopTyping(t.id),
                            {
                                textValue: n,
                                richValue: r
                            }
                        )
                    ));
            },
            [t.id, l]
        ),
        _ = i.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: r } = e;
                return s(t, r, n);
            },
            [s]
        );
    ((0, R.yp)({
        event: G.CkL.TEXTAREA_FOCUS,
        handler: m
    }),
        (0, R.yp)({
            event: G.CkL.TEXTAREA_BLUR,
            handler: g
        }));
    let y = (0, o.e7)([A.Z], () => A.Z.can(G.Plq.ATTACH_FILES, t)),
        v = (0, L.Op)(p, { content: n.textValue });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(x.Z, {
                channelId: t.id,
                type: q,
                canAttachFiles: y
            }),
            (0, r.jsx)('div', {
                className: z.starterMessageError,
                children: (0, r.jsx)(c.pdY, { error: v })
            }),
            (0, r.jsx)(C.Z, {
                type: q,
                channel: t,
                placeholder: V.intl.string(V.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: h,
                className: a()(z.channelTextArea, z.channelTextAreaWithTypingIndicator),
                innerClassName: a()(z.channelTextAreaInner, { [z.channelTextAreaInnerError]: null != v }),
                onFocus: m,
                onBlur: g,
                onChange: b,
                onSubmit: _,
                promptToUpload: D.d
            })
        ]
    });
}
function et(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        i = (0, o.e7)([T.Z], () => (null == n ? null : T.Z.getMessage(t.id, n))),
        l = I.jU.useSetting();
    return null != i
        ? (0, r.jsx)(E.Z, {
              className: z.messagePreview,
              message: i,
              channel: t,
              compact: l,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0
          })
        : null;
}
