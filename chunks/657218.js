(n.d(t, { Z: () => q }), n(781311), n(388685));
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
    I = n(268350),
    P = n(695346),
    Z = n(592125),
    N = n(703558),
    T = n(375954),
    A = n(496675),
    w = n(117530),
    R = n(459273),
    M = n(838440),
    D = n(127654),
    k = n(241309),
    L = n(928477),
    U = n(456077),
    B = n(488131),
    F = n(602034),
    H = n(981631),
    G = n(388032),
    V = n(776584),
    z = n(128337);
function W(e) {
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
let Y = _.Ie.THREAD_CREATION;
function q(e) {
    let { parentChannelId: t, parentMessageId: n, location: i } = e,
        l = (0, o.e7)([Z.Z], () => Z.Z.getChannel(t)),
        { analyticsLocations: a } = (0, b.ZP)(g.Z.CREATE_THREAD);
    return null == l
        ? null
        : (0, r.jsx)(b.Gt, {
              value: a,
              children: (0, r.jsx)(R.I3, {
                  children: (0, r.jsxs)('section', {
                      'aria-label': G.intl.string(G.t.rBIGBA),
                      className: V.container,
                      children: [
                          (0, r.jsx)(f.Z, {
                              channel: l,
                              draftType: N.d.FirstThreadMessage
                          }),
                          (0, r.jsx)(K, { parentChannelId: t }),
                          (0, r.jsx)(X, {
                              parentChannel: l,
                              parentMessageId: n,
                              location: i
                          })
                      ]
                  })
              })
          });
}
function K(e) {
    let { parentChannelId: t } = e,
        n = i.useCallback(() => {
            let e = N.Z.getThreadSettings(t),
                n = N.Z.getDraft(t, N.d.FirstThreadMessage).trim(),
                r = w.Z.getUploads(t, N.d.FirstThreadMessage);
            if (((null == e ? void 0 : e.name) != null && (null == e ? void 0 : e.name) !== '') || 0 !== n.length || 0 !== r.length)
                return void p.Z.show({
                    title: G.intl.string(G.t['6kDZh4']),
                    body: G.intl.string(G.t.NgS9jY),
                    confirmColor: s.Tt.RED,
                    confirmText: G.intl.string(G.t['7WGI4O']),
                    confirmVariant: 'critical-primary',
                    cancelText: G.intl.string(G.t.olcKd3),
                    onConfirm: () => {
                        (0, B.NK)(t);
                    }
                });
            (0, B.NK)(t);
        }, [t]);
    return (0, r.jsxs)(j.ZP, {
        toolbar: (0, r.jsx)(j.ZP.Icon, {
            icon: c.Dio,
            tooltip: G.intl.string(G.t.cpT0Cg),
            onClick: n
        }),
        children: [
            (0, r.jsx)(j.ZP.Icon, {
                icon: c.or_,
                disabled: !0,
                'aria-label': G.intl.string(G.t['7Xm5QE'])
            }),
            (0, r.jsx)(j.ZP.Title, { children: G.intl.string(G.t['4WNcpq']) })
        ]
    });
}
function X(e) {
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
                        (r((e) => W({}, e, n)),
                            u.Z.changeThreadSettings(
                                e.id,
                                ((i = W({}, n)),
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
        C = (0, L.vH)(t),
        {
            nameError: x,
            messageError: v,
            submit: j,
            submitting: E
        } = (function (e) {
            let { parentChannel: t, parentMessageId: n, threadSettings: r, privateThreadMode: l, textAreaState: a, location: o } = e,
                [s, c] = i.useState(null),
                [u, d] = i.useState(null),
                [p, h] = i.useState(!1),
                f = (0, F.Z)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: r,
                    privateThreadMode: l,
                    location: o,
                    onThreadCreated: B.ok,
                    useDefaultThreadName: !0
                });
            return {
                nameError: s,
                messageError: u,
                submit: i.useCallback(
                    async (e, i, l) => {
                        var o, s, u;
                        if (p)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !1
                            };
                        (h(!0), null == e && (e = a.textValue), (e = e.trim()), (null == i || 0 === i.length) && (i = null == (o = S.Z.getStickerPreview(t.id, Y.drafts.type)) ? void 0 : o.map((e) => e.id)), (null == l || 0 === l.length) && (l = w.Z.getUploads(t.id, N.d.FirstThreadMessage)));
                        let m = null != (s = r.name) ? s : '',
                            g = null == n && 0 === m.length,
                            b = '' === e && (null == i || 0 === i.length) && 0 === l.length;
                        if ((c(g ? (0, k.V_)() : null), d(b ? (0, k.T4)() : null), g || b))
                            return (
                                h(!1),
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
                                type: Y,
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
                                (null == (u = e.body) ? void 0 : u.code) === H.evJ.AUTOMOD_TITLE_BLOCKED && c((0, k.Gx)(e.body, t)),
                                h(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                }
                            );
                        }
                        return (
                            (0, I.qB)(t.id, Y.drafts.type),
                            h(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    },
                    [f, a.textValue, r.name, n, t, p]
                ),
                submitting: p
            };
        })({
            parentChannel: t,
            parentMessageId: n,
            threadSettings: p,
            privateThreadMode: C,
            textAreaState: b,
            location: l
        }),
        P = (0, L.oD)(p, C) ? c.qtY : c.or_;
    return (0, r.jsx)('div', {
        className: V.chat,
        onMouseDown: d,
        onFocus: d,
        children: (0, r.jsx)('div', {
            className: a()(V.messagesWrapper, 'group-spacing-'.concat(s)),
            children: (0, r.jsxs)('form', {
                onSubmit: (e) => {
                    (e.preventDefault(), j());
                },
                className: V.form,
                children: [
                    (0, r.jsx)(c.Ttm, {
                        className: V.scroller,
                        fade: !0,
                        children: (0, r.jsxs)('div', {
                            className: V.scrollerInner,
                            children: [
                                (0, r.jsxs)(O.ZP, {
                                    channelId: 'create-thread-null',
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: z.iconWrapper,
                                            children: (0, r.jsx)(P, { className: z.icon })
                                        }),
                                        (0, r.jsx)(J, {
                                            parentChannel: t,
                                            parentMessageId: n,
                                            threadSettings: p,
                                            updateThreadSettings: g,
                                            error: x,
                                            disabled: E
                                        }),
                                        t.type === H.d4z.GUILD_TEXT
                                            ? (0, r.jsx)(Q, {
                                                  startedFromMessage: null != n,
                                                  threadSettings: p,
                                                  updateThreadSettings: g,
                                                  privateThreadMode: C
                                              })
                                            : null
                                    ]
                                }),
                                (0, r.jsx)(ee, {
                                    parentChannel: t,
                                    parentMessageId: n
                                })
                            ]
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: V.submitContainer,
                        children: [
                            (0, r.jsx)($, {
                                parentChannel: t,
                                textAreaState: b,
                                setTextAreaState: _,
                                submit: j,
                                error: v
                            }),
                            (0, r.jsx)(h.ZP, {
                                channel: t,
                                isThreadCreation: !0,
                                className: V.typingIndicator,
                                isInTextChannel: !0
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function Q(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: i, privateThreadMode: l } = e,
        a = (0, L.oD)(n, l),
        o = (0, r.jsx)('div', {
            className: V.privateThreadFormTitle,
            children: (0, r.jsx)('span', {
                className: V.privateThreadFormTitleText,
                children: G.intl.string(G.t.F1zyvb)
            })
        }),
        s = (0, r.jsx)(c.XZJ, {
            className: V.checkbox,
            type: c.XZJ.Types.INVERTED,
            disabled: l === L.Jw.PrivateOnly,
            value: a,
            onChange: (e, t) => i({ isPrivate: t }),
            children: (0, r.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: 'none',
                children: G.intl.string(G.t.TRPp3t)
            })
        });
    return t || l === L.Jw.Disabled
        ? null
        : (0, r.jsxs)(c.hjN, {
              title: o,
              className: V.formSection,
              children: [
                  s,
                  a
                      ? (0, r.jsx)(c.Text, {
                            className: V.privateThreadDescription,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: G.intl.string(G.t.EWXyc3)
                        })
                      : null
              ]
          });
}
function J(e) {
    var t;
    let { parentChannel: n, parentMessageId: i, threadSettings: l, updateThreadSettings: a, error: o, disabled: s } = e,
        u = null != (t = l.name) ? t : '',
        p = (0, k.Op)(o, { content: u }),
        h = (0, L.Od)(n, i),
        f = null != i,
        m = (0, v.Dt)();
    return (0, r.jsx)(c.hjN, {
        tag: 'label',
        htmlFor: m,
        title: G.intl.string(f ? G.t.JPvIiI : G.t.j3XWjI),
        className: V.formSection,
        children: (0, r.jsx)(c.oil, {
            value: u,
            id: m,
            placeholder: '' !== h ? h : G.intl.string(G.t['Nb2/RE']),
            maxLength: H.HN8,
            onChange: (e) => {
                (a({ name: (0, U.Z)(e, !1) }), '' !== e ? d.Z.startTyping(n.id) : d.Z.stopTyping(n.id));
            },
            onBlur: () => {
                let e = (0, U.Z)(u, !0);
                e !== u && a({ name: e });
            },
            error: p,
            disabled: s
        })
    });
}
function $(e) {
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
        event: H.CkL.TEXTAREA_FOCUS,
        handler: m
    }),
        (0, R.yp)({
            event: H.CkL.TEXTAREA_BLUR,
            handler: g
        }));
    let y = (0, o.e7)([A.Z], () => A.Z.can(H.Plq.ATTACH_FILES, t)),
        v = (0, k.Op)(p, { content: n.textValue });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(x.Z, {
                channelId: t.id,
                type: Y,
                canAttachFiles: y
            }),
            (0, r.jsx)('div', {
                className: V.starterMessageError,
                children: (0, r.jsx)(c.pdY, { error: v })
            }),
            (0, r.jsx)(C.Z, {
                type: Y,
                channel: t,
                placeholder: G.intl.string(G.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: h,
                className: a()(V.channelTextArea, V.channelTextAreaWithTypingIndicator),
                innerClassName: a()(V.channelTextAreaInner, { [V.channelTextAreaInnerError]: null != v }),
                onFocus: m,
                onBlur: g,
                onChange: b,
                onSubmit: _,
                promptToUpload: D.d
            })
        ]
    });
}
function ee(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        i = (0, o.e7)([T.Z], () => (null == n ? null : T.Z.getMessage(t.id, n))),
        l = P.jU.useSetting();
    return null != i
        ? (0, r.jsx)(E.Z, {
              className: V.messagePreview,
              message: i,
              channel: t,
              compact: l,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0
          })
        : null;
}
