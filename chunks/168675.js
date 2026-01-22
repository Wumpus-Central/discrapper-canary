n.d(t, { A: () => q }), n(733351), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(465532),
    u = n(414798),
    d = n(579872),
    f = n(147192),
    p = n(738876),
    h = n(775602),
    b = n(793574),
    g = n(688810),
    m = n(355622),
    A = n(408018),
    y = n(133343),
    O = n(171593),
    j = n(915089),
    v = n(314307),
    x = n(58736),
    E = n(636922),
    _ = n(931664),
    C = n(631576),
    S = n(253932),
    I = n(734057),
    N = n(31717),
    T = n(320501),
    P = n(576705),
    w = n(522602),
    R = n(234320),
    D = n(460350),
    M = n(518960),
    L = n(710640),
    G = n(393309),
    k = n(474078),
    U = n(747926),
    V = n(965601),
    F = n(55294),
    H = n(652215),
    B = n(985018),
    K = n(770587),
    W = n(790687);
function z(e) {
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
let Y = m.oU.THREAD_CREATION;
function q(e) {
    let { parentChannelId: t, parentMessageId: n, location: l } = e,
        i = (0, s.bG)([I.A], () => I.A.getChannel(t)),
        { analyticsLocations: a } = (0, g.Ay)(b.A.CREATE_THREAD);
    return null == i
        ? null
        : (0, r.jsx)(g.f5, {
              value: a,
              children: (0, r.jsx)(R.Ah, {
                  children: (0, r.jsxs)("section", {
                      "aria-label": B.intl.string(B.t.rBIGBL),
                      className: K.kL,
                      children: [
                          (0, r.jsx)(p.A, {
                              channel: i,
                              draftType: N.C.FirstThreadMessage,
                          }),
                          (0, r.jsx)(X, { parentChannelId: t }),
                          (0, r.jsx)(J, {
                              parentChannel: i,
                              parentMessageId: n,
                              location: l,
                          }),
                      ],
                  }),
              }),
          });
}
function X(e) {
    let { parentChannelId: t } = e,
        n = l.useCallback(() => {
            let e = N.A.getThreadSettings(t),
                n = N.A.getDraft(t, N.C.FirstThreadMessage).trim(),
                r = w.A.getUploads(t, N.C.FirstThreadMessage);
            ((null == e ? void 0 : e.name) != null && (null == e ? void 0 : e.name) !== "") ||
            0 !== n.length ||
            0 !== r.length
                ? d.A.show({
                      title: B.intl.string(B.t["6kDZh1"]),
                      body: B.intl.string(B.t.NgS9jX),
                      confirmText: B.intl.string(B.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: B.intl.string(B.t["olcKd/"]),
                      onConfirm: () => {
                          (0, U.bA)(t);
                      },
                  })
                : (0, U.bA)(t);
        }, [t]);
    return (0, r.jsxs)(x.Ay, {
        toolbar: (0, r.jsx)(x.Ay.Icon, {
            icon: o.PGe,
            tooltip: B.intl.string(B.t.cpT0Cq),
            onClick: n,
        }),
        children: [
            (0, r.jsx)(x.Ay.Icon, {
                icon: o.ysw,
                disabled: !0,
                "aria-label": B.intl.string(B.t["7Xm5QI"]),
            }),
            (0, r.jsx)(x.Ay.Title, { children: B.intl.string(B.t["4WNcpu"]) }),
        ],
    });
}
function J(e) {
    let t,
        { parentChannel: n, parentMessageId: i, location: u } = e,
        d = (0, s.bG)([h.A], () => h.A.messageGroupSpacing),
        p =
            ((t = l.useContext(R.EH)),
            l.useCallback(() => {
                t.bumpDispatchPriority();
            }, [t])),
        {
            threadSettings: b,
            setThreadSettings: g,
            updateThreadSettings: m,
        } = (function (e, t) {
            let n = (0, s.bG)([N.A], () => {
                    var t;
                    return null != (t = N.A.getThreadSettings(e.id)) ? t : {};
                }, [e.id]),
                [r, i] = l.useState(n),
                a = l.useCallback(
                    (n) => {
                        var r, l;
                        i((e) => z({}, e, n)),
                            c.A.changeThreadSettings(
                                e.id,
                                ((r = z({}, n)),
                                (l = l = { parentMessageId: t }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                r),
                            );
                    },
                    [e.id, t],
                );
            return {
                threadSettings: r,
                setThreadSettings: i,
                updateThreadSettings: a,
            };
        })(n, i),
        { textAreaState: y, setTextAreaState: O } = (function (e, t) {
            let [n, r] = l.useState((0, A.N3)());
            return (
                l.useEffect(() => {
                    function n(n) {
                        var l;
                        let i = N.A.getDraft(e.id, N.C.FirstThreadMessage);
                        (0 === i.length || !0 === n) && r((0, A.ur)(i)),
                            t(null != (l = N.A.getThreadSettings(e.id)) ? l : {});
                    }
                    return (
                        n(!0),
                        N.A.addChangeListener(n),
                        () => {
                            N.A.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                {
                    textAreaState: n,
                    setTextAreaState: r,
                }
            );
        })(n, g),
        j = (0, G.EN)(n),
        {
            isGeneratingAI: x,
            enableAIFeatures: E,
            getThreadNameInputAccessory: S,
        } = (0, V.C)({
            parentChannel: n,
            parentMessageId: i,
            updateThreadSettings: m,
            threadSettings: b,
            textAreaState: y,
        }),
        {
            nameError: I,
            messageError: T,
            submit: P,
            submitting: M,
        } = (function (e) {
            let {
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: r,
                    privateThreadMode: i,
                    textAreaState: a,
                    location: s,
                    enableAIFeatures: o,
                } = e,
                [c, u] = l.useState(null),
                [d, f] = l.useState(null),
                [p, h] = l.useState(!1),
                b = (0, F.A)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: r,
                    privateThreadMode: i,
                    location: s,
                    onThreadCreated: U.JA,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: c,
                messageError: d,
                submit: l.useCallback(
                    async (e, l, i) => {
                        var s, c, d;
                        if (p)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !1,
                            };
                        h(!0),
                            null == e && (e = a.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l =
                                    null == (c = _.A.getStickerPreview(t.id, Y.drafts.type))
                                        ? void 0
                                        : c.map((e) => e.id)),
                            (null == i || 0 === i.length) && (i = w.A.getUploads(t.id, N.C.FirstThreadMessage));
                        let g = null != (s = r.name) ? s : "",
                            m = (o || null == n) && 0 === g.length,
                            A = "" === e && (null == l || 0 === l.length) && 0 === i.length;
                        if ((u(m ? (0, L.uW)() : null), f(A ? (0, L.fo)() : null), m || A))
                            return (
                                h(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0,
                                }
                            );
                        let { valid: y } = await (0, D.i)({
                            content: e,
                            stickers: l,
                            uploads: i,
                            type: Y,
                            channel: null == n ? t : null,
                        });
                        if (!y)
                            return (
                                h(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0,
                                }
                            );
                        try {
                            await b(e, l, i);
                        } catch (e) {
                            return (
                                (null == (d = e.body) ? void 0 : d.code) === H.t02.AUTOMOD_TITLE_BLOCKED &&
                                    u((0, L.z0)(e.body, t)),
                                h(!1),
                                {
                                    shouldClear: !1,
                                    shouldRefocus: !0,
                                }
                            );
                        }
                        return (
                            (0, C.x5)(t.id, Y.drafts.type),
                            h(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1,
                            }
                        );
                    },
                    [b, a.textValue, r.name, n, t, p, o],
                ),
                submitting: p,
            };
        })({
            parentChannel: n,
            parentMessageId: i,
            threadSettings: b,
            privateThreadMode: j,
            textAreaState: y,
            location: u,
            enableAIFeatures: E,
        }),
        k = (0, G.Iy)(b, j) ? o.tn0 : o.ysw;
    return (0, r.jsx)("div", {
        className: K.TE,
        onMouseDown: p,
        onFocus: p,
        children: (0, r.jsx)("div", {
            className: a()(K.Og, "group-spacing-".concat(d)),
            children: (0, r.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), P();
                },
                className: K.Zd,
                children: [
                    (0, r.jsx)(o.HOs, {
                        className: K.XG,
                        fade: !0,
                        children: (0, r.jsxs)("div", {
                            className: K.bv,
                            children: [
                                (0, r.jsxs)(v.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: a()(W.P0, K.P0),
                                            children: (0, r.jsx)(k, { className: W.Kk }),
                                        }),
                                        (0, r.jsxs)(o.nVY, {
                                            children: [
                                                (0, r.jsx)(Z, {
                                                    parentChannel: n,
                                                    parentMessageId: i,
                                                    threadSettings: b,
                                                    updateThreadSettings: m,
                                                    error: I,
                                                    disabled: M,
                                                    isGeneratingAI: x,
                                                    enableAIFeatures: E,
                                                    getThreadNameInputAccessory: S,
                                                }),
                                                n.type === H.rbe.GUILD_TEXT
                                                    ? (0, r.jsx)(Q, {
                                                          startedFromMessage: null != i,
                                                          threadSettings: b,
                                                          updateThreadSettings: m,
                                                          privateThreadMode: j,
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(ee, {
                                    parentChannel: n,
                                    parentMessageId: i,
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: K.Eh,
                        children: [
                            (0, r.jsx)($, {
                                parentChannel: n,
                                textAreaState: y,
                                setTextAreaState: O,
                                submit: P,
                                error: T,
                            }),
                            (0, r.jsx)(f.Ay, {
                                channel: n,
                                isThreadCreation: !0,
                                className: K.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function Q(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: l, privateThreadMode: i } = e,
        a = (0, G.Iy)(n, i),
        s = (0, r.jsx)(o.Checkbox, {
            disabled: i === G.jk.PrivateOnly,
            checked: a,
            onChange: (e) => l({ isPrivate: e }),
            label: B.intl.string(B.t.TRPp3g),
        });
    return t || i === G.jk.Disabled
        ? null
        : (0, r.jsx)(o.D0$, {
              label: B.intl.string(B.t.F1zyvU),
              helperText: a ? B.intl.string(B.t.EWXycz) : void 0,
              children: s,
          });
}
function Z(e) {
    var t;
    let {
            parentChannel: n,
            parentMessageId: l,
            threadSettings: i,
            updateThreadSettings: a,
            error: s,
            disabled: c,
            isGeneratingAI: d,
            enableAIFeatures: f,
            getThreadNameInputAccessory: p,
        } = e,
        h = null != (t = i.name) ? t : "",
        b = (0, L.vr)(s, { content: h }),
        g = (0, G.l1)(n, l),
        m = null != l && !f,
        A = (0, j.GV)(),
        y = f ? B.intl.string(B.t["Nb2/RE"]) : "" !== g ? g : B.intl.string(B.t["Nb2/RE"]);
    return (0, r.jsx)(o.ksK, {
        label: B.intl.string(m ? B.t.JPvIiL : B.t.j3XWjD),
        trailing: p(c),
        value: h,
        id: A,
        placeholder: y,
        maxLength: H.Ign,
        onChange: (e) => {
            a({ name: (0, k.A)(e, !1) }), "" !== e ? u.A.startTyping(n.id) : u.A.stopTyping(n.id);
        },
        onBlur: () => {
            let e = (0, k.A)(h, !0);
            e !== h && a({ name: e });
        },
        error: b,
        disabled: c || d,
    });
}
function $(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: i, submit: d, error: f } = e,
        [p, h] = l.useState(!0),
        b = l.useCallback(() => h(!0), []),
        g = l.useCallback(() => h(!1), []),
        m = l.useCallback(
            (e, n, r) => {
                c.A.saveDraft(t.id, n, N.C.FirstThreadMessage),
                    i(
                        (e) => (
                            "" !== n && e.textValue !== n ? u.A.startTyping(t.id) : "" === n && u.A.stopTyping(t.id),
                            {
                                textValue: n,
                                richValue: r,
                            }
                        ),
                    );
            },
            [t.id, i],
        ),
        A = l.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: r } = e;
                return d(t, r, n);
            },
            [d],
        );
    (0, R.Vo)({
        event: H.jej.TEXTAREA_FOCUS,
        handler: b,
    }),
        (0, R.Vo)({
            event: H.jej.TEXTAREA_BLUR,
            handler: g,
        });
    let j = (0, s.bG)([P.A], () => P.A.can(H.xBc.ATTACH_FILES, t)),
        v = (0, L.vr)(f, { content: n.textValue });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(O.A, {
                channelId: t.id,
                type: Y,
                canAttachFiles: j,
            }),
            (0, r.jsx)("div", {
                className: K.xN,
                children: (0, r.jsx)(o.dzK, { error: v }),
            }),
            (0, r.jsx)(y.Ay, {
                type: Y,
                channel: t,
                placeholder: B.intl.string(B.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: p,
                className: a()(K.gM, K.Yy),
                innerClassName: a()(K.SL, { [K.cr]: null != v }),
                onFocus: b,
                onBlur: g,
                onChange: m,
                onSubmit: A,
                promptToUpload: M.R,
            }),
        ],
    });
}
function ee(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        l = (0, s.bG)([T.A], () => (null == n ? null : T.A.getMessage(t.id, n))),
        i = S.hH.useSetting();
    return null != l
        ? (0, r.jsx)(E.A, {
              className: K.IL,
              message: l,
              channel: t,
              compact: i,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
