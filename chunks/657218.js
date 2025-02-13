n.d(t, { Z: () => W }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
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
    _ = n(752305),
    C = n(893718),
    x = n(303628),
    v = n(313201),
    E = n(540059),
    I = n(967128),
    b = n(665149),
    Z = n(294218),
    N = n(913663),
    T = n(268350),
    S = n(695346),
    j = n(592125),
    y = n(703558),
    A = n(375954),
    P = n(496675),
    R = n(117530),
    M = n(459273),
    L = n(838440),
    k = n(127654),
    O = n(241309),
    D = n(928477),
    w = n(456077),
    U = n(488131),
    B = n(602034),
    F = n(981631),
    H = n(388032),
    G = n(15710),
    V = n(452246);
let z = g.Ie.THREAD_CREATION;
function W(e) {
    let { parentChannelId: t, parentMessageId: n, location: l } = e,
        a = (0, s.e7)([j.Z], () => j.Z.getChannel(t)),
        { analyticsLocations: r } = (0, f.ZP)(m.Z.CREATE_THREAD);
    return null == a
        ? null
        : (0, i.jsx)(f.Gt, {
              value: r,
              children: (0, i.jsx)(M.I3, {
                  children: (0, i.jsxs)('section', {
                      'aria-label': H.intl.string(H.t.rBIGBA),
                      className: G.container,
                      children: [
                          (0, i.jsx)(h.Z, {
                              channel: a,
                              draftType: y.d.FirstThreadMessage
                          }),
                          (0, i.jsxs)(b.ZP, {
                              toolbar: (0, i.jsx)(b.ZP.Icon, {
                                  icon: o.Dio,
                                  tooltip: H.intl.string(H.t.cpT0Cg),
                                  onClick: () => (0, U.NK)(t)
                              }),
                              children: [
                                  (0, i.jsx)(b.ZP.Icon, {
                                      icon: o.or_,
                                      disabled: !0,
                                      'aria-label': H.intl.string(H.t['7Xm5QE'])
                                  }),
                                  (0, i.jsx)(b.ZP.Title, { children: H.intl.string(H.t['4WNcpq']) })
                              ]
                          }),
                          (0, i.jsx)(Y, {
                              parentChannel: a,
                              parentMessageId: n,
                              location: l
                          })
                      ]
                  })
              })
          });
}
function Y(e) {
    let { parentChannel: t, parentMessageId: n, location: a } = e,
        d = (0, s.e7)([p.Z], () => p.Z.messageGroupSpacing),
        h = (function () {
            let e = l.useContext(M.oo);
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
                a = l.useCallback(
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
                updateThreadSettings: a
            };
        })(t, n),
        { textAreaState: C, setTextAreaState: x } = (function (e, t) {
            let [n, i] = l.useState((0, _.H2)());
            return (
                l.useEffect(() => {
                    function n(n) {
                        var l;
                        let a = y.Z.getDraft(e.id, y.d.FirstThreadMessage);
                        (0 === a.length || !0 === n) && i((0, _.eK)(a)), t(null !== (l = y.Z.getThreadSettings(e.id)) && void 0 !== l ? l : {});
                    }
                    return (
                        n(!0),
                        y.Z.addChangeListener(n),
                        () => {
                            y.Z.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                {
                    textAreaState: n,
                    setTextAreaState: i
                }
            );
        })(t, f),
        v = (0, D.vH)(t),
        {
            nameError: b,
            messageError: Z,
            submit: S,
            submitting: j
        } = (function (e) {
            let { parentChannel: t, parentMessageId: n, threadSettings: i, privateThreadMode: a, textAreaState: r, location: s } = e,
                [o, c] = l.useState(null),
                [d, u] = l.useState(null),
                [h, p] = l.useState(!1),
                m = (0, B.Z)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: a,
                    location: s,
                    onThreadCreated: U.ok,
                    useDefaultThreadName: !0
                });
            return {
                nameError: o,
                messageError: d,
                submit: l.useCallback(
                    async (e, l, a) => {
                        var s, o, d;
                        if (h)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !1
                            };
                        p(!0), null == e && (e = r.textValue), (e = e.trim()), (null == l || 0 === l.length) && (l = null === (s = N.Z.getStickerPreview(t.id, z.drafts.type)) || void 0 === s ? void 0 : s.map((e) => e.id)), (null == a || 0 === a.length) && (a = R.Z.getUploads(t.id, y.d.FirstThreadMessage));
                        let f = null !== (o = i.name) && void 0 !== o ? o : '',
                            g = null == n && 0 === f.length,
                            _ = '' === e && (null == l || 0 === l.length) && 0 === a.length;
                        if ((c(g ? (0, O.V_)() : null), u(_ ? (0, O.T4)() : null), g || _))
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
                                uploads: a,
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
                            await m(e, l, a);
                        } catch (e) {
                            return (
                                (null === (d = e.body) || void 0 === d ? void 0 : d.code) === F.evJ.AUTOMOD_TITLE_BLOCKED && c((0, O.Gx)(e.body, t)),
                                p(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                }
                            );
                        }
                        return (
                            (0, T.qB)(t.id, z.drafts.type),
                            p(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    },
                    [m, r.textValue, i.name, n, t, h]
                ),
                submitting: h
            };
        })({
            parentChannel: t,
            parentMessageId: n,
            threadSettings: m,
            privateThreadMode: v,
            textAreaState: C,
            location: a
        }),
        A = (0, D.oD)(m, v) ? o.qtY : o.or_,
        P = (0, E.R6)('CreateThreadSidebar');
    return (0, i.jsx)('div', {
        className: G.chat,
        onMouseDown: h,
        onFocus: h,
        children: (0, i.jsx)('div', {
            className: r()(G.messagesWrapper, 'group-spacing-'.concat(d)),
            children: (0, i.jsxs)('form', {
                onSubmit: (e) => {
                    e.preventDefault(), S();
                },
                className: G.form,
                children: [
                    (0, i.jsx)(o.Ttm, {
                        className: G.scroller,
                        fade: !0,
                        children: (0, i.jsxs)('div', {
                            className: G.scrollerInner,
                            children: [
                                (0, i.jsxs)(I.ZP, {
                                    channelId: 'create-thread-null',
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: V.iconWrapper,
                                            children: (0, i.jsx)(A, { className: V.icon })
                                        }),
                                        (0, i.jsx)(K, {
                                            parentChannel: t,
                                            parentMessageId: n,
                                            threadSettings: m,
                                            updateThreadSettings: g,
                                            error: b,
                                            disabled: j
                                        }),
                                        t.type === F.d4z.GUILD_TEXT
                                            ? (0, i.jsx)(q, {
                                                  startedFromMessage: null != n,
                                                  threadSettings: m,
                                                  updateThreadSettings: g,
                                                  privateThreadMode: v
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
                        className: G.submitContainer,
                        children: [
                            (0, i.jsx)(X, {
                                parentChannel: t,
                                textAreaState: C,
                                setTextAreaState: x,
                                submit: S,
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
function q(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: l, privateThreadMode: a } = e,
        s = (0, D.oD)(n, a),
        c = (0, i.jsx)('div', {
            className: G.privateThreadFormTitle,
            children: (0, i.jsx)('span', {
                className: G.privateThreadFormTitleText,
                children: H.intl.string(H.t.F1zyvb)
            })
        }),
        d = (0, i.jsx)(o.XZJ, {
            className: r()(G.checkbox),
            type: o.XZJ.Types.INVERTED,
            disabled: a === D.Jw.PrivateOnly,
            value: s,
            onChange: (e, t) => l({ isPrivate: t }),
            children: (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'none',
                children: H.intl.string(H.t.TRPp3t)
            })
        });
    return t || a === D.Jw.Disabled
        ? null
        : (0, i.jsxs)(o.hjN, {
              title: c,
              className: G.formSection,
              children: [
                  d,
                  s
                      ? (0, i.jsx)(o.Text, {
                            className: G.privateThreadDescription,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: H.intl.string(H.t.EWXyc3)
                        })
                      : null
              ]
          });
}
function K(e) {
    var t;
    let { parentChannel: n, parentMessageId: l, threadSettings: a, updateThreadSettings: r, error: s, disabled: c } = e,
        u = null !== (t = a.name) && void 0 !== t ? t : '',
        h = (0, O.Op)(s, { content: u }),
        p = (0, D.Od)(n, l),
        m = null != l,
        f = (0, v.Dt)();
    return (0, i.jsx)(o.hjN, {
        tag: 'label',
        htmlFor: f,
        title: H.intl.string(H.t.j3XWjI) + (m ? ' (Optional)' : ''),
        className: G.formSection,
        children: (0, i.jsx)(o.oil, {
            value: u,
            id: f,
            placeholder: '' !== p ? p : H.intl.string(H.t['Nb2/RE']),
            maxLength: F.HN8,
            onChange: (e) => {
                r({ name: (0, w.Z)(e, !1) }), '' !== e ? d.Z.startTyping(n.id) : d.Z.stopTyping(n.id);
            },
            onBlur: () => {
                let e = (0, w.Z)(u, !0);
                e !== u && r({ name: e });
            },
            error: h,
            disabled: c
        })
    });
}
function X(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: a, submit: u, error: h } = e,
        [p, m] = l.useState(!0),
        f = l.useCallback(() => m(!0), []),
        g = l.useCallback(() => m(!1), []),
        _ = l.useCallback(
            (e, n, i) => {
                c.Z.saveDraft(t.id, n, y.d.FirstThreadMessage),
                    a(
                        (e) => (
                            '' !== n && e.textValue !== n ? d.Z.startTyping(t.id) : '' === n && d.Z.stopTyping(t.id),
                            {
                                textValue: n,
                                richValue: i
                            }
                        )
                    );
            },
            [t.id, a]
        ),
        v = l.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: i } = e;
                return u(t, i, n);
            },
            [u]
        );
    (0, M.yp)({
        event: F.CkL.TEXTAREA_FOCUS,
        handler: f
    }),
        (0, M.yp)({
            event: F.CkL.TEXTAREA_BLUR,
            handler: g
        });
    let E = (0, s.e7)([P.Z], () => P.Z.can(F.Plq.ATTACH_FILES, t)),
        I = (0, O.Op)(h, { content: n.textValue });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.Z, {
                channelId: t.id,
                type: z,
                canAttachFiles: E
            }),
            (0, i.jsx)('div', {
                className: G.starterMessageError,
                children: (0, i.jsx)(o.pdY, { error: I })
            }),
            (0, i.jsx)(C.Z, {
                type: z,
                channel: t,
                placeholder: H.intl.string(H.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: p,
                className: G.channelTextArea,
                innerClassName: r()(G.channelTextAreaInner, { [G.channelTextAreaInnerError]: null != I }),
                onFocus: f,
                onBlur: g,
                onChange: _,
                onSubmit: v,
                promptToUpload: k.d
            })
        ]
    });
}
function J(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        l = (0, s.e7)([A.Z], () => (null == n ? null : A.Z.getMessage(t.id, n))),
        a = S.jU.useSetting();
    return null != l
        ? (0, i.jsx)(Z.Z, {
              className: G.messagePreview,
              message: l,
              channel: t,
              compact: a,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0
          })
        : null;
}
