n.d(t, { Z: () => q }), n(47120), n(566702);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(430742),
    u = n(144144),
    d = n(738619),
    p = n(561472),
    h = n(607070),
    f = n(100527),
    m = n(906732),
    g = n(541716),
    b = n(752305),
    _ = n(893718),
    C = n(303628),
    v = n(313201),
    y = n(540059),
    x = n(967128),
    j = n(665149),
    O = n(294218),
    N = n(913663),
    E = n(268350),
    P = n(695346),
    I = n(592125),
    S = n(703558),
    Z = n(375954),
    T = n(496675),
    A = n(117530),
    w = n(459273),
    R = n(838440),
    k = n(127654),
    M = n(241309),
    L = n(928477),
    D = n(456077),
    W = n(488131),
    U = n(602034),
    B = n(981631),
    F = n(388032),
    H = n(197541),
    G = n(498597);
function V(e) {
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
let z = g.Ie.THREAD_CREATION;
function q(e) {
    let { parentChannelId: t, parentMessageId: n, location: i } = e,
        l = (0, a.e7)([I.Z], () => I.Z.getChannel(t)),
        { analyticsLocations: o } = (0, m.ZP)(f.Z.CREATE_THREAD);
    return null == l
        ? null
        : (0, r.jsx)(m.Gt, {
              value: o,
              children: (0, r.jsx)(w.I3, {
                  children: (0, r.jsxs)('section', {
                      'aria-label': F.NW.string(F.t.rBIGBA),
                      className: H.container,
                      children: [
                          (0, r.jsx)(p.Z, {
                              channel: l,
                              draftType: S.d.FirstThreadMessage
                          }),
                          (0, r.jsxs)(j.ZP, {
                              toolbar: (0, r.jsx)(j.ZP.Icon, {
                                  icon: s.Dio,
                                  tooltip: F.NW.string(F.t.cpT0Cg),
                                  onClick: () => (0, W.NK)(t)
                              }),
                              children: [
                                  (0, r.jsx)(j.ZP.Icon, {
                                      icon: s.or_,
                                      disabled: !0,
                                      'aria-label': F.NW.string(F.t['7Xm5QE'])
                                  }),
                                  (0, r.jsx)(j.ZP.Title, { children: F.NW.string(F.t['4WNcpq']) })
                              ]
                          }),
                          (0, r.jsx)(Y, {
                              parentChannel: l,
                              parentMessageId: n,
                              location: i
                          })
                      ]
                  })
              })
          });
}
function Y(e) {
    let { parentChannel: t, parentMessageId: n, location: l } = e,
        u = (0, a.e7)([h.Z], () => h.Z.messageGroupSpacing),
        p = (function () {
            let e = i.useContext(w.oo);
            return i.useCallback(() => {
                e.bumpDispatchPriority();
            }, [e]);
        })(),
        {
            threadSettings: f,
            setThreadSettings: m,
            updateThreadSettings: g
        } = (function (e, t) {
            let [n, r] = i.useState({}),
                l = i.useCallback(
                    (n) => {
                        var i, l;
                        r((e) => V({}, e, n)),
                            c.Z.changeThreadSettings(
                                e.id,
                                ((i = V({}, n)),
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
                            );
                    },
                    [e.id, t]
                );
            return {
                threadSettings: n,
                setThreadSettings: r,
                updateThreadSettings: l
            };
        })(t, n),
        { textAreaState: _, setTextAreaState: C } = (function (e, t) {
            let [n, r] = i.useState((0, b.H2)());
            return (
                i.useEffect(() => {
                    function n(n) {
                        var i;
                        let l = S.Z.getDraft(e.id, S.d.FirstThreadMessage);
                        (0 === l.length || !0 === n) && r((0, b.eK)(l)), t(null !== (i = S.Z.getThreadSettings(e.id)) && void 0 !== i ? i : {});
                    }
                    return (
                        n(!0),
                        S.Z.addChangeListener(n),
                        () => {
                            S.Z.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                {
                    textAreaState: n,
                    setTextAreaState: r
                }
            );
        })(t, m),
        v = (0, L.vH)(t),
        {
            nameError: j,
            messageError: O,
            submit: P,
            submitting: I
        } = (function (e) {
            let { parentChannel: t, parentMessageId: n, threadSettings: r, privateThreadMode: l, textAreaState: o, location: a } = e,
                [s, c] = i.useState(null),
                [u, d] = i.useState(null),
                [p, h] = i.useState(!1),
                f = (0, U.Z)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: r,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: W.ok,
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
                        h(!0), null == e && (e = o.textValue), (e = e.trim()), (null == i || 0 === i.length) && (i = null === (a = N.Z.getStickerPreview(t.id, z.drafts.type)) || void 0 === a ? void 0 : a.map((e) => e.id)), (null == l || 0 === l.length) && (l = A.Z.getUploads(t.id, S.d.FirstThreadMessage));
                        let m = null !== (s = r.name) && void 0 !== s ? s : '',
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
                                type: z,
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
                                (null === (u = e.body) || void 0 === u ? void 0 : u.code) === B.evJ.AUTOMOD_TITLE_BLOCKED && c((0, M.Gx)(e.body, t)),
                                h(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                }
                            );
                        }
                        return (
                            (0, E.qB)(t.id, z.drafts.type),
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
            threadSettings: f,
            privateThreadMode: v,
            textAreaState: _,
            location: l
        }),
        Z = (0, L.oD)(f, v) ? s.qtY : s.or_,
        T = (0, y.R6)('CreateThreadSidebar');
    return (0, r.jsx)('div', {
        className: H.chat,
        onMouseDown: p,
        onFocus: p,
        children: (0, r.jsx)('div', {
            className: o()(H.messagesWrapper, 'group-spacing-'.concat(u)),
            children: (0, r.jsxs)('form', {
                onSubmit: (e) => {
                    e.preventDefault(), P();
                },
                className: H.form,
                children: [
                    (0, r.jsx)(s.Ttm, {
                        className: H.scroller,
                        fade: !0,
                        children: (0, r.jsxs)('div', {
                            className: H.scrollerInner,
                            children: [
                                (0, r.jsxs)(x.ZP, {
                                    channelId: 'create-thread-null',
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: G.iconWrapper,
                                            children: (0, r.jsx)(Z, { className: G.icon })
                                        }),
                                        (0, r.jsx)(X, {
                                            parentChannel: t,
                                            parentMessageId: n,
                                            threadSettings: f,
                                            updateThreadSettings: g,
                                            error: j,
                                            disabled: I
                                        }),
                                        t.type === B.d4z.GUILD_TEXT
                                            ? (0, r.jsx)(K, {
                                                  startedFromMessage: null != n,
                                                  threadSettings: f,
                                                  updateThreadSettings: g,
                                                  privateThreadMode: v
                                              })
                                            : null
                                    ]
                                }),
                                (0, r.jsx)(Q, {
                                    parentChannel: t,
                                    parentMessageId: n
                                })
                            ]
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: H.submitContainer,
                        children: [
                            (0, r.jsx)(J, {
                                parentChannel: t,
                                textAreaState: _,
                                setTextAreaState: C,
                                submit: P,
                                error: O
                            }),
                            T
                                ? null
                                : (0, r.jsx)(d.Z, {
                                      channel: t,
                                      isThreadCreation: !0
                                  })
                        ]
                    })
                ]
            })
        })
    });
}
function K(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: i, privateThreadMode: l } = e,
        a = (0, L.oD)(n, l),
        c = (0, r.jsx)('div', {
            className: H.privateThreadFormTitle,
            children: (0, r.jsx)('span', {
                className: H.privateThreadFormTitleText,
                children: F.NW.string(F.t.F1zyvb)
            })
        }),
        u = (0, r.jsx)(s.XZJ, {
            className: o()(H.checkbox),
            type: s.XZJ.Types.INVERTED,
            disabled: l === L.Jw.PrivateOnly,
            value: a,
            onChange: (e, t) => i({ isPrivate: t }),
            children: (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'none',
                children: F.NW.string(F.t.TRPp3t)
            })
        });
    return t || l === L.Jw.Disabled
        ? null
        : (0, r.jsxs)(s.hjN, {
              title: c,
              className: H.formSection,
              children: [
                  u,
                  a
                      ? (0, r.jsx)(s.Text, {
                            className: H.privateThreadDescription,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: F.NW.string(F.t.EWXyc3)
                        })
                      : null
              ]
          });
}
function X(e) {
    var t;
    let { parentChannel: n, parentMessageId: i, threadSettings: l, updateThreadSettings: o, error: a, disabled: c } = e,
        d = null !== (t = l.name) && void 0 !== t ? t : '',
        p = (0, M.Op)(a, { content: d }),
        h = (0, L.Od)(n, i),
        f = null != i,
        m = (0, v.Dt)();
    return (0, r.jsx)(s.hjN, {
        tag: 'label',
        htmlFor: m,
        title: F.NW.string(F.t.j3XWjI) + (f ? ' (Optional)' : ''),
        className: H.formSection,
        children: (0, r.jsx)(s.oil, {
            value: d,
            id: m,
            placeholder: '' !== h ? h : F.NW.string(F.t['Nb2/RE']),
            maxLength: B.HN8,
            onChange: (e) => {
                o({ name: (0, D.Z)(e, !1) }), '' !== e ? u.Z.startTyping(n.id) : u.Z.stopTyping(n.id);
            },
            onBlur: () => {
                let e = (0, D.Z)(d, !0);
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
                c.Z.saveDraft(t.id, n, S.d.FirstThreadMessage),
                    l(
                        (e) => (
                            '' !== n && e.textValue !== n ? u.Z.startTyping(t.id) : '' === n && u.Z.stopTyping(t.id),
                            {
                                textValue: n,
                                richValue: r
                            }
                        )
                    );
            },
            [t.id, l]
        ),
        v = i.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: r } = e;
                return d(t, r, n);
            },
            [d]
        );
    (0, w.yp)({
        event: B.CkL.TEXTAREA_FOCUS,
        handler: m
    }),
        (0, w.yp)({
            event: B.CkL.TEXTAREA_BLUR,
            handler: g
        });
    let y = (0, a.e7)([T.Z], () => T.Z.can(B.Plq.ATTACH_FILES, t)),
        x = (0, M.Op)(p, { content: n.textValue });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(C.Z, {
                channelId: t.id,
                type: z,
                canAttachFiles: y
            }),
            (0, r.jsx)('div', {
                className: H.starterMessageError,
                children: (0, r.jsx)(s.pdY, { error: x })
            }),
            (0, r.jsx)(_.Z, {
                type: z,
                channel: t,
                placeholder: F.NW.string(F.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: h,
                className: H.channelTextArea,
                innerClassName: o()(H.channelTextAreaInner, { [H.channelTextAreaInnerError]: null != x }),
                onFocus: m,
                onBlur: g,
                onChange: b,
                onSubmit: v,
                promptToUpload: k.d
            })
        ]
    });
}
function Q(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        i = (0, a.e7)([Z.Z], () => (null == n ? null : Z.Z.getMessage(t.id, n))),
        l = P.jU.useSetting();
    return null != i
        ? (0, r.jsx)(O.Z, {
              className: H.messagePreview,
              message: i,
              channel: t,
              compact: l,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0
          })
        : null;
}
