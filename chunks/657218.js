n.d(t, {
    Z: function () {
        return W;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(430742),
    d = n(144144),
    u = n(738619),
    h = n(561472),
    p = n(607070),
    m = n(100527),
    f = n(906732),
    g = n(541716),
    C = n(752305),
    x = n(893718),
    v = n(303628),
    _ = n(313201),
    I = n(540059),
    E = n(967128),
    b = n(665149),
    Z = n(294218),
    S = n(913663),
    N = n(268350),
    T = n(695346),
    j = n(592125),
    A = n(703558),
    y = n(375954),
    P = n(496675),
    M = n(117530),
    R = n(459273),
    L = n(838440),
    k = n(127654),
    O = n(241309),
    D = n(928477),
    w = n(456077),
    B = n(488131),
    U = n(602034),
    H = n(981631),
    G = n(388032),
    F = n(51572),
    V = n(678606);
let z = g.Ie.THREAD_CREATION;
function W(e) {
    let { parentChannelId: t, parentMessageId: n, location: l } = e,
        r = (0, s.e7)([j.Z], () => j.Z.getChannel(t)),
        { analyticsLocations: a } = (0, f.ZP)(m.Z.CREATE_THREAD);
    return null == r
        ? null
        : (0, i.jsx)(f.Gt, {
              value: a,
              children: (0, i.jsx)(R.I3, {
                  children: (0, i.jsxs)('section', {
                      'aria-label': G.intl.string(G.t.rBIGBA),
                      className: F.container,
                      children: [
                          (0, i.jsx)(h.Z, {
                              channel: r,
                              draftType: A.d.FirstThreadMessage
                          }),
                          (0, i.jsxs)(b.ZP, {
                              toolbar: (0, i.jsx)(b.ZP.Icon, {
                                  icon: o.XSmallIcon,
                                  tooltip: G.intl.string(G.t.cpT0Cg),
                                  onClick: () => (0, B.NK)(t)
                              }),
                              children: [
                                  (0, i.jsx)(b.ZP.Icon, {
                                      icon: o.ThreadIcon,
                                      disabled: !0,
                                      'aria-label': G.intl.string(G.t['7Xm5QE'])
                                  }),
                                  (0, i.jsx)(b.ZP.Title, { children: G.intl.string(G.t['4WNcpq']) })
                              ]
                          }),
                          (0, i.jsx)(K, {
                              parentChannel: r,
                              parentMessageId: n,
                              location: l
                          })
                      ]
                  })
              })
          });
}
function K(e) {
    let { parentChannel: t, parentMessageId: n, location: r } = e,
        d = (0, s.e7)([p.Z], () => p.Z.messageGroupSpacing),
        h = (function () {
            let e = l.useContext(R.oo);
            return l.useCallback(() => {
                e.bumpDispatchPriority();
            }, [e]);
        })(),
        {
            threadSettings: m,
            setThreadSettings: f,
            updateThreadSettings: g
        } = (function (e, t) {
            let [n, i] = l.useState({}),
                r = l.useCallback(
                    (n) => {
                        i((e) => ({
                            ...e,
                            ...n
                        })),
                            c.Z.changeThreadSettings(e.id, {
                                ...n,
                                parentMessageId: t
                            });
                    },
                    [e.id, t]
                );
            return {
                threadSettings: n,
                setThreadSettings: i,
                updateThreadSettings: r
            };
        })(t, n),
        { textAreaState: x, setTextAreaState: v } = (function (e, t) {
            let [n, i] = l.useState((0, C.H2)());
            return (
                l.useEffect(() => {
                    function n(n) {
                        var l;
                        let r = A.Z.getDraft(e.id, A.d.FirstThreadMessage);
                        (0 === r.length || !0 === n) && i((0, C.eK)(r)), t(null !== (l = A.Z.getThreadSettings(e.id)) && void 0 !== l ? l : {});
                    }
                    return (
                        n(!0),
                        A.Z.addChangeListener(n),
                        () => {
                            A.Z.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                {
                    textAreaState: n,
                    setTextAreaState: i
                }
            );
        })(t, f),
        _ = (0, D.vH)(t),
        {
            nameError: b,
            messageError: Z,
            submit: T,
            submitting: j
        } = (function (e) {
            let { parentChannel: t, parentMessageId: n, threadSettings: i, privateThreadMode: r, textAreaState: a, location: s } = e,
                [o, c] = l.useState(null),
                [d, u] = l.useState(null),
                [h, p] = l.useState(!1),
                m = (0, U.Z)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: r,
                    location: s,
                    onThreadCreated: B.ok,
                    useDefaultThreadName: !0
                });
            return {
                nameError: o,
                messageError: d,
                submit: l.useCallback(
                    async (e, l, r) => {
                        var s, o, d;
                        if (h)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !1
                            };
                        p(!0), null == e && (e = a.textValue), (e = e.trim()), (null == l || 0 === l.length) && (l = null === (s = S.Z.getStickerPreview(t.id, z.drafts.type)) || void 0 === s ? void 0 : s.map((e) => e.id)), (null == r || 0 === r.length) && (r = M.Z.getUploads(t.id, A.d.FirstThreadMessage));
                        let f = null !== (o = i.name) && void 0 !== o ? o : '',
                            g = null == n && 0 === f.length,
                            C = '' === e && (null == l || 0 === l.length) && 0 === r.length;
                        if ((c(g ? (0, O.V_)() : null), u(C ? (0, O.T4)() : null), g || C))
                            return (
                                p(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                }
                            );
                        if (null == n) {
                            let { valid: n } = await (0, L.v)({
                                content: e,
                                stickers: l,
                                uploads: r,
                                type: z,
                                channel: t
                            });
                            if (!n)
                                return (
                                    p(!1),
                                    {
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    }
                                );
                        }
                        try {
                            await m(e, l, r);
                        } catch (e) {
                            return (
                                (null === (d = e.body) || void 0 === d ? void 0 : d.code) === H.evJ.AUTOMOD_TITLE_BLOCKED && c((0, O.Gx)(e.body, t)),
                                p(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                }
                            );
                        }
                        return (
                            (0, N.qB)(t.id, z.drafts.type),
                            p(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    },
                    [m, a.textValue, i.name, n, t, h]
                ),
                submitting: h
            };
        })({
            parentChannel: t,
            parentMessageId: n,
            threadSettings: m,
            privateThreadMode: _,
            textAreaState: x,
            location: r
        }),
        y = (0, D.oD)(m, _) ? o.ThreadLockIcon : o.ThreadIcon,
        P = (0, I.R6)('CreateThreadSidebar');
    return (0, i.jsx)('div', {
        className: F.chat,
        onMouseDown: h,
        onFocus: h,
        children: (0, i.jsx)('div', {
            className: a()(F.messagesWrapper, 'group-spacing-'.concat(d)),
            children: (0, i.jsxs)('form', {
                onSubmit: (e) => {
                    e.preventDefault(), T();
                },
                className: F.form,
                children: [
                    (0, i.jsx)(o.Scroller, {
                        className: F.scroller,
                        fade: !0,
                        children: (0, i.jsxs)('div', {
                            className: F.scrollerInner,
                            children: [
                                (0, i.jsxs)(E.ZP, {
                                    channelId: 'create-thread-null',
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: V.iconWrapper,
                                            children: (0, i.jsx)(y, { className: V.icon })
                                        }),
                                        (0, i.jsx)(q, {
                                            parentChannel: t,
                                            parentMessageId: n,
                                            threadSettings: m,
                                            updateThreadSettings: g,
                                            error: b,
                                            disabled: j
                                        }),
                                        t.type === H.d4z.GUILD_TEXT
                                            ? (0, i.jsx)(Y, {
                                                  startedFromMessage: null != n,
                                                  threadSettings: m,
                                                  updateThreadSettings: g,
                                                  privateThreadMode: _
                                              })
                                            : null
                                    ]
                                }),
                                (0, i.jsx)(J, {
                                    parentChannel: t,
                                    parentMessageId: n
                                })
                            ]
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: F.submitContainer,
                        children: [
                            (0, i.jsx)(X, {
                                parentChannel: t,
                                textAreaState: x,
                                setTextAreaState: v,
                                submit: T,
                                error: Z
                            }),
                            P
                                ? null
                                : (0, i.jsx)(u.Z, {
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
function Y(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: l, privateThreadMode: r } = e,
        s = (0, D.oD)(n, r),
        c = (0, i.jsx)('div', {
            className: F.privateThreadFormTitle,
            children: (0, i.jsx)('span', {
                className: F.privateThreadFormTitleText,
                children: G.intl.string(G.t.F1zyvb)
            })
        }),
        d = (0, i.jsx)(o.Checkbox, {
            className: a()(F.checkbox),
            type: o.Checkbox.Types.INVERTED,
            disabled: r === D.Jw.PrivateOnly,
            value: s,
            onChange: (e, t) => l({ isPrivate: t }),
            children: (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'none',
                children: G.intl.string(G.t.TRPp3t)
            })
        });
    return t || r === D.Jw.Disabled
        ? null
        : (0, i.jsxs)(o.FormSection, {
              title: c,
              className: F.formSection,
              children: [
                  d,
                  s
                      ? (0, i.jsx)(o.Text, {
                            className: F.privateThreadDescription,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: G.intl.string(G.t.EWXyc3)
                        })
                      : null
              ]
          });
}
function q(e) {
    var t;
    let { parentChannel: n, parentMessageId: l, threadSettings: r, updateThreadSettings: a, error: s, disabled: c } = e,
        u = null !== (t = r.name) && void 0 !== t ? t : '',
        h = (0, O.Op)(s, { content: u }),
        p = (0, D.Od)(n, l),
        m = null != l,
        f = (0, _.Dt)();
    return (0, i.jsx)(o.FormSection, {
        tag: 'label',
        htmlFor: f,
        title: G.intl.string(G.t.j3XWjI) + (m ? ' (Optional)' : ''),
        className: F.formSection,
        children: (0, i.jsx)(o.TextInput, {
            value: u,
            id: f,
            placeholder: '' !== p ? p : G.intl.string(G.t['Nb2/RE']),
            maxLength: H.HN8,
            onChange: (e) => {
                a({ name: (0, w.Z)(e, !1) }), '' !== e ? d.Z.startTyping(n.id) : d.Z.stopTyping(n.id);
            },
            onBlur: () => {
                let e = (0, w.Z)(u, !0);
                e !== u && a({ name: e });
            },
            error: h,
            disabled: c
        })
    });
}
function X(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: r, submit: u, error: h } = e,
        [p, m] = l.useState(!0),
        f = l.useCallback(() => m(!0), []),
        g = l.useCallback(() => m(!1), []),
        C = l.useCallback(
            (e, n, i) => {
                c.Z.saveDraft(t.id, n, A.d.FirstThreadMessage),
                    r(
                        (e) => (
                            '' !== n && e.textValue !== n ? d.Z.startTyping(t.id) : '' === n && d.Z.stopTyping(t.id),
                            {
                                textValue: n,
                                richValue: i
                            }
                        )
                    );
            },
            [t.id, r]
        ),
        _ = l.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: i } = e;
                return u(t, i, n);
            },
            [u]
        );
    (0, R.yp)({
        event: H.CkL.TEXTAREA_FOCUS,
        handler: f
    }),
        (0, R.yp)({
            event: H.CkL.TEXTAREA_BLUR,
            handler: g
        });
    let I = (0, s.e7)([P.Z], () => P.Z.can(H.Plq.ATTACH_FILES, t)),
        E = (0, O.Op)(h, { content: n.textValue });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.Z, {
                channelId: t.id,
                type: z,
                canAttachFiles: I
            }),
            (0, i.jsx)('div', {
                className: F.starterMessageError,
                children: (0, i.jsx)(o.InputError, { error: E })
            }),
            (0, i.jsx)(x.Z, {
                type: z,
                channel: t,
                placeholder: G.intl.string(G.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: p,
                className: F.channelTextArea,
                innerClassName: a()(F.channelTextAreaInner, { [F.channelTextAreaInnerError]: null != E }),
                onFocus: f,
                onBlur: g,
                onChange: C,
                onSubmit: _,
                promptToUpload: k.d
            })
        ]
    });
}
function J(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        l = (0, s.e7)([y.Z], () => (null == n ? null : y.Z.getMessage(t.id, n))),
        r = T.jU.useSetting();
    return null != l
        ? (0, i.jsx)(Z.Z, {
              className: F.messagePreview,
              message: l,
              channel: t,
              compact: r,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0
          })
        : null;
}
