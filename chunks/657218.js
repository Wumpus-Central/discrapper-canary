(n.d(t, { Z: () => Y }), n(781311), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(430742),
    u = n(144144),
    d = n(240872),
    p = n(738619),
    h = n(561472),
    f = n(607070),
    m = n(100527),
    g = n(906732),
    b = n(541716),
    _ = n(752305),
    y = n(893718),
    C = n(303628),
    x = n(313201),
    v = n(967128),
    j = n(665149),
    O = n(294218),
    E = n(913663),
    S = n(268350),
    I = n(695346),
    P = n(592125),
    Z = n(703558),
    N = n(375954),
    T = n(496675),
    A = n(117530),
    w = n(459273),
    R = n(838440),
    k = n(127654),
    M = n(241309),
    D = n(928477),
    L = n(456077),
    U = n(488131),
    B = n(602034),
    F = n(981631),
    H = n(388032),
    G = n(776584),
    V = n(128337);
function z(e) {
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
let W = b.Ie.THREAD_CREATION;
function Y(e) {
    let { parentChannelId: t, parentMessageId: n, location: i } = e,
        l = (0, a.e7)([P.Z], () => P.Z.getChannel(t)),
        { analyticsLocations: o } = (0, g.ZP)(m.Z.CREATE_THREAD);
    return null == l
        ? null
        : (0, r.jsx)(g.Gt, {
              value: o,
              children: (0, r.jsx)(w.I3, {
                  children: (0, r.jsxs)('section', {
                      'aria-label': H.intl.string(H.t.rBIGBA),
                      className: G.container,
                      children: [
                          (0, r.jsx)(h.Z, {
                              channel: l,
                              draftType: Z.d.FirstThreadMessage
                          }),
                          (0, r.jsx)(q, { parentChannelId: t }),
                          (0, r.jsx)(K, {
                              parentChannel: l,
                              parentMessageId: n,
                              location: i
                          })
                      ]
                  })
              })
          });
}
function q(e) {
    let { parentChannelId: t } = e,
        n = i.useCallback(() => {
            let e = Z.Z.getThreadSettings(t),
                n = Z.Z.getDraft(t, Z.d.FirstThreadMessage).trim(),
                r = A.Z.getUploads(t, Z.d.FirstThreadMessage);
            if (((null == e ? void 0 : e.name) != null && (null == e ? void 0 : e.name) !== '') || 0 !== n.length || 0 !== r.length)
                return void d.Z.show({
                    title: H.intl.string(H.t['6kDZh4']),
                    body: H.intl.string(H.t.NgS9jY),
                    confirmColor: s.Ttl.RED,
                    confirmText: H.intl.string(H.t['7WGI4O']),
                    confirmVariant: 'critical-primary',
                    cancelText: H.intl.string(H.t.olcKd3),
                    onConfirm: () => {
                        (0, U.NK)(t);
                    }
                });
            (0, U.NK)(t);
        }, [t]);
    return (0, r.jsxs)(j.ZP, {
        toolbar: (0, r.jsx)(j.ZP.Icon, {
            icon: s.Dio,
            tooltip: H.intl.string(H.t.cpT0Cg),
            onClick: n
        }),
        children: [
            (0, r.jsx)(j.ZP.Icon, {
                icon: s.or_,
                disabled: !0,
                'aria-label': H.intl.string(H.t['7Xm5QE'])
            }),
            (0, r.jsx)(j.ZP.Title, { children: H.intl.string(H.t['4WNcpq']) })
        ]
    });
}
function K(e) {
    let { parentChannel: t, parentMessageId: n, location: l } = e,
        u = (0, a.e7)([f.Z], () => f.Z.messageGroupSpacing),
        d = (function () {
            let e = i.useContext(w.oo);
            return i.useCallback(() => {
                e.bumpDispatchPriority();
            }, [e]);
        })(),
        {
            threadSettings: h,
            setThreadSettings: m,
            updateThreadSettings: g
        } = (function (e, t) {
            let [n, r] = i.useState({}),
                l = i.useCallback(
                    (n) => {
                        var i, l;
                        (r((e) => z({}, e, n)),
                            c.Z.changeThreadSettings(
                                e.id,
                                ((i = z({}, n)),
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
        { textAreaState: b, setTextAreaState: y } = (function (e, t) {
            let [n, r] = i.useState((0, _.H2)());
            return (
                i.useEffect(() => {
                    function n(n) {
                        var i;
                        let l = Z.Z.getDraft(e.id, Z.d.FirstThreadMessage);
                        ((0 === l.length || !0 === n) && r((0, _.eK)(l)), t(null != (i = Z.Z.getThreadSettings(e.id)) ? i : {}));
                    }
                    return (
                        n(!0),
                        Z.Z.addChangeListener(n),
                        () => {
                            Z.Z.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                {
                    textAreaState: n,
                    setTextAreaState: r
                }
            );
        })(t, m),
        C = (0, D.vH)(t),
        {
            nameError: x,
            messageError: j,
            submit: O,
            submitting: I
        } = (function (e) {
            let { parentChannel: t, parentMessageId: n, threadSettings: r, privateThreadMode: l, textAreaState: o, location: a } = e,
                [s, c] = i.useState(null),
                [u, d] = i.useState(null),
                [p, h] = i.useState(!1),
                f = (0, B.Z)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: r,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: U.ok,
                    useDefaultThreadName: !0
                });
            return {
                nameError: s,
                messageError: u,
                submit: i.useCallback(
                    async (e, i, l) => {
                        var a, s, u;
                        if (p)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !1
                            };
                        (h(!0), null == e && (e = o.textValue), (e = e.trim()), (null == i || 0 === i.length) && (i = null == (a = E.Z.getStickerPreview(t.id, W.drafts.type)) ? void 0 : a.map((e) => e.id)), (null == l || 0 === l.length) && (l = A.Z.getUploads(t.id, Z.d.FirstThreadMessage)));
                        let m = null != (s = r.name) ? s : '',
                            g = null == n && 0 === m.length,
                            b = '' === e && (null == i || 0 === i.length) && 0 === l.length;
                        if ((c(g ? (0, M.V_)() : null), d(b ? (0, M.T4)() : null), g || b))
                            return (
                                h(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                }
                            );
                        if (null == n) {
                            let { valid: n } = await (0, R.v)({
                                content: e,
                                stickers: i,
                                uploads: l,
                                type: W,
                                channel: t
                            });
                            if (!n)
                                return (
                                    h(!1),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    }
                                );
                        }
                        try {
                            await f(e, i, l);
                        } catch (e) {
                            return (
                                (null == (u = e.body) ? void 0 : u.code) === F.evJ.AUTOMOD_TITLE_BLOCKED && c((0, M.Gx)(e.body, t)),
                                h(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                }
                            );
                        }
                        return (
                            (0, S.qB)(t.id, W.drafts.type),
                            h(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    },
                    [f, o.textValue, r.name, n, t, p]
                ),
                submitting: p
            };
        })({
            parentChannel: t,
            parentMessageId: n,
            threadSettings: h,
            privateThreadMode: C,
            textAreaState: b,
            location: l
        }),
        P = (0, D.oD)(h, C) ? s.qtY : s.or_;
    return (0, r.jsx)('div', {
        className: G.chat,
        onMouseDown: d,
        onFocus: d,
        children: (0, r.jsx)('div', {
            className: o()(G.messagesWrapper, 'group-spacing-'.concat(u)),
            children: (0, r.jsxs)('form', {
                onSubmit: (e) => {
                    (e.preventDefault(), O());
                },
                className: G.form,
                children: [
                    (0, r.jsx)(s.Ttm, {
                        className: G.scroller,
                        fade: !0,
                        children: (0, r.jsxs)('div', {
                            className: G.scrollerInner,
                            children: [
                                (0, r.jsxs)(v.ZP, {
                                    channelId: 'create-thread-null',
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: V.iconWrapper,
                                            children: (0, r.jsx)(P, { className: V.icon })
                                        }),
                                        (0, r.jsx)(Q, {
                                            parentChannel: t,
                                            parentMessageId: n,
                                            threadSettings: h,
                                            updateThreadSettings: g,
                                            error: x,
                                            disabled: I
                                        }),
                                        t.type === F.d4z.GUILD_TEXT
                                            ? (0, r.jsx)(X, {
                                                  startedFromMessage: null != n,
                                                  threadSettings: h,
                                                  updateThreadSettings: g,
                                                  privateThreadMode: C
                                              })
                                            : null
                                    ]
                                }),
                                (0, r.jsx)($, {
                                    parentChannel: t,
                                    parentMessageId: n
                                })
                            ]
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: G.submitContainer,
                        children: [
                            (0, r.jsx)(J, {
                                parentChannel: t,
                                textAreaState: b,
                                setTextAreaState: y,
                                submit: O,
                                error: j
                            }),
                            (0, r.jsx)(p.ZP, {
                                channel: t,
                                isThreadCreation: !0,
                                className: G.typingIndicator,
                                isInTextChannel: !0
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function X(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: i, privateThreadMode: l } = e,
        o = (0, D.oD)(n, l),
        a = (0, r.jsx)('div', {
            className: G.privateThreadFormTitle,
            children: (0, r.jsx)('span', {
                className: G.privateThreadFormTitleText,
                children: H.intl.string(H.t.F1zyvb)
            })
        }),
        c = (0, r.jsx)(s.XZJ, {
            className: G.checkbox,
            type: s.XZJ.Types.INVERTED,
            disabled: l === D.Jw.PrivateOnly,
            value: o,
            onChange: (e, t) => i({ isPrivate: t }),
            children: (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'none',
                children: H.intl.string(H.t.TRPp3t)
            })
        });
    return t || l === D.Jw.Disabled
        ? null
        : (0, r.jsxs)(s.hjN, {
              title: a,
              className: G.formSection,
              children: [
                  c,
                  o
                      ? (0, r.jsx)(s.Text, {
                            className: G.privateThreadDescription,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: H.intl.string(H.t.EWXyc3)
                        })
                      : null
              ]
          });
}
function Q(e) {
    var t;
    let { parentChannel: n, parentMessageId: i, threadSettings: l, updateThreadSettings: o, error: a, disabled: c } = e,
        d = null != (t = l.name) ? t : '',
        p = (0, M.Op)(a, { content: d }),
        h = (0, D.Od)(n, i),
        f = null != i,
        m = (0, x.Dt)();
    return (0, r.jsx)(s.hjN, {
        tag: 'label',
        htmlFor: m,
        title: H.intl.string(f ? H.t.JPvIiI : H.t.j3XWjI),
        className: G.formSection,
        children: (0, r.jsx)(s.oil, {
            value: d,
            id: m,
            placeholder: '' !== h ? h : H.intl.string(H.t['Nb2/RE']),
            maxLength: F.HN8,
            onChange: (e) => {
                (o({ name: (0, L.Z)(e, !1) }), '' !== e ? u.Z.startTyping(n.id) : u.Z.stopTyping(n.id));
            },
            onBlur: () => {
                let e = (0, L.Z)(d, !0);
                e !== d && o({ name: e });
            },
            error: p,
            disabled: c
        })
    });
}
function J(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: l, submit: d, error: p } = e,
        [h, f] = i.useState(!0),
        m = i.useCallback(() => f(!0), []),
        g = i.useCallback(() => f(!1), []),
        b = i.useCallback(
            (e, n, r) => {
                (c.Z.saveDraft(t.id, n, Z.d.FirstThreadMessage),
                    l(
                        (e) => (
                            '' !== n && e.textValue !== n ? u.Z.startTyping(t.id) : '' === n && u.Z.stopTyping(t.id),
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
                return d(t, r, n);
            },
            [d]
        );
    ((0, w.yp)({
        event: F.CkL.TEXTAREA_FOCUS,
        handler: m
    }),
        (0, w.yp)({
            event: F.CkL.TEXTAREA_BLUR,
            handler: g
        }));
    let x = (0, a.e7)([T.Z], () => T.Z.can(F.Plq.ATTACH_FILES, t)),
        v = (0, M.Op)(p, { content: n.textValue });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(C.Z, {
                channelId: t.id,
                type: W,
                canAttachFiles: x
            }),
            (0, r.jsx)('div', {
                className: G.starterMessageError,
                children: (0, r.jsx)(s.pdY, { error: v })
            }),
            (0, r.jsx)(y.Z, {
                type: W,
                channel: t,
                placeholder: H.intl.string(H.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: h,
                className: o()(G.channelTextArea, G.channelTextAreaWithTypingIndicator),
                innerClassName: o()(G.channelTextAreaInner, { [G.channelTextAreaInnerError]: null != v }),
                onFocus: m,
                onBlur: g,
                onChange: b,
                onSubmit: _,
                promptToUpload: k.d
            })
        ]
    });
}
function $(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        i = (0, a.e7)([N.Z], () => (null == n ? null : N.Z.getMessage(t.id, n))),
        l = I.jU.useSetting();
    return null != i
        ? (0, r.jsx)(O.Z, {
              className: G.messagePreview,
              message: i,
              channel: t,
              compact: l,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0
          })
        : null;
}
