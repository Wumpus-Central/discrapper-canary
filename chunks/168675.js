"use strict";
n.d(t, { A: () => z });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(465532),
    d = n(414798),
    u = n(579872),
    h = n(147192),
    A = n(738876),
    p = n(775602),
    g = n(793574),
    m = n(688810),
    _ = n(355622),
    f = n(408018),
    x = n(133343),
    C = n(171593),
    E = n(915089),
    I = n(314307),
    b = n(58736),
    N = n(636922),
    S = n(931664),
    T = n(631576),
    v = n(253932),
    y = n(734057),
    j = n(31717),
    R = n(320501),
    O = n(576705),
    L = n(522602),
    M = n(234320),
    D = n(460350),
    G = n(518960),
    U = n(710640),
    P = n(393309),
    w = n(474078),
    k = n(747926),
    V = n(965601),
    B = n(55294),
    H = n(652215),
    F = n(985018),
    K = n(770587),
    W = n(790687);
let Y = _.oU.THREAD_CREATION;
function z(e) {
    let { parentChannelId: t, parentMessageId: n, location: s } = e,
        l = (0, a.bG)([y.A], () => y.A.getChannel(t)),
        { analyticsLocations: r } = (0, m.Ay)(g.A.CREATE_THREAD);
    return null == l
        ? null
        : (0, i.jsx)(m.f5, {
              value: r,
              children: (0, i.jsx)(M.Ah, {
                  children: (0, i.jsxs)("section", {
                      "aria-label": F.intl.string(F.t.rBIGBL),
                      className: K.kL,
                      children: [
                          (0, i.jsx)(A.A, { channel: l, draftType: j.C.FirstThreadMessage }),
                          (0, i.jsx)(X, { parentChannelId: t }),
                          (0, i.jsx)(q, { parentChannel: l, parentMessageId: n, location: s }),
                      ],
                  }),
              }),
          });
}
function X(e) {
    let { parentChannelId: t } = e,
        n = s.useCallback(() => {
            let e = j.A.getThreadSettings(t),
                n = j.A.getDraft(t, j.C.FirstThreadMessage).trim(),
                i = L.A.getUploads(t, j.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== n.length || 0 !== i.length
                ? u.A.show({
                      title: F.intl.string(F.t["6kDZh1"]),
                      body: F.intl.string(F.t.NgS9jX),
                      confirmText: F.intl.string(F.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: F.intl.string(F.t["olcKd/"]),
                      onConfirm: () => {
                          (0, k.bA)(t);
                      },
                  })
                : (0, k.bA)(t);
        }, [t]);
    return (0, i.jsxs)(b.Ay, {
        toolbar: (0, i.jsx)(b.Ay.Icon, { icon: o.PGe, tooltip: F.intl.string(F.t.cpT0Cq), onClick: n }),
        children: [
            (0, i.jsx)(b.Ay.Icon, { icon: o.ysw, disabled: !0, "aria-label": F.intl.string(F.t["7Xm5QI"]) }),
            (0, i.jsx)(b.Ay.Title, { children: F.intl.string(F.t["4WNcpu"]) }),
        ],
    });
}
function q(e) {
    let t,
        { parentChannel: n, parentMessageId: l, location: d } = e,
        u = (0, a.bG)([p.A], () => p.A.messageGroupSpacing),
        A =
            ((t = s.useContext(M.EH)),
            s.useCallback(() => {
                t.bumpDispatchPriority();
            }, [t])),
        {
            threadSettings: g,
            setThreadSettings: m,
            updateThreadSettings: _,
        } = (function (e, t) {
            let n = (0, a.bG)([j.A], () => j.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(n),
                r = s.useCallback(
                    (n) => {
                        l((e) => ({ ...e, ...n })), c.A.changeThreadSettings(e.id, { ...n, parentMessageId: t });
                    },
                    [e.id, t],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(n, l),
        { textAreaState: x, setTextAreaState: C } = (function (e, t) {
            let [n, i] = s.useState((0, f.N3)());
            return (
                s.useEffect(() => {
                    function n(n) {
                        let s = j.A.getDraft(e.id, j.C.FirstThreadMessage);
                        (0 === s.length || !0 === n) && i((0, f.ur)(s)), t(j.A.getThreadSettings(e.id) ?? {});
                    }
                    return (
                        n(!0),
                        j.A.addChangeListener(n),
                        () => {
                            j.A.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                { textAreaState: n, setTextAreaState: i }
            );
        })(n, m),
        E = (0, P.EN)(n),
        {
            isGeneratingAI: b,
            enableAIFeatures: N,
            getThreadNameInputAccessory: v,
        } = (0, V.C)({
            parentChannel: n,
            parentMessageId: l,
            updateThreadSettings: _,
            threadSettings: g,
            textAreaState: x,
        }),
        {
            nameError: y,
            messageError: R,
            submit: O,
            submitting: G,
        } = (function (e) {
            let {
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    textAreaState: r,
                    location: a,
                    enableAIFeatures: o,
                } = e,
                [c, d] = s.useState(null),
                [u, h] = s.useState(null),
                [A, p] = s.useState(!1),
                g = (0, B.A)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: k.JA,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: c,
                messageError: u,
                submit: s.useCallback(
                    async (e, s, l) => {
                        if (A) return { shouldClear: !1, shouldRefocus: !1 };
                        p(!0),
                            null == e && (e = r.textValue),
                            (e = e.trim()),
                            (null == s || 0 === s.length) &&
                                (s = S.A.getStickerPreview(t.id, Y.drafts.type)?.map((e) => e.id)),
                            (null == l || 0 === l.length) && (l = L.A.getUploads(t.id, j.C.FirstThreadMessage));
                        let a = i.name ?? "",
                            c = (o || null == n) && 0 === a.length,
                            u = "" === e && (null == s || 0 === s.length) && 0 === l.length;
                        if ((d(c ? (0, U.uW)() : null), h(u ? (0, U.fo)() : null), c || u))
                            return p(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: m } = await (0, D.i)({
                            content: e,
                            stickers: s,
                            uploads: l,
                            type: Y,
                            channel: null == n ? t : null,
                        });
                        if (!m) return p(!1), { shouldClear: !1, shouldRefocus: !0 };
                        try {
                            await g(e, s, l);
                        } catch (e) {
                            return (
                                e.body?.code === H.t02.AUTOMOD_TITLE_BLOCKED && d((0, U.z0)(e.body, t)),
                                p(!1),
                                { shouldClear: !1, shouldRefocus: !0 }
                            );
                        }
                        return (0, T.x5)(t.id, Y.drafts.type), p(!1), { shouldClear: !0, shouldRefocus: !1 };
                    },
                    [g, r.textValue, i.name, n, t, A, o],
                ),
                submitting: A,
            };
        })({
            parentChannel: n,
            parentMessageId: l,
            threadSettings: g,
            privateThreadMode: E,
            textAreaState: x,
            location: d,
            enableAIFeatures: N,
        }),
        w = (0, P.Iy)(g, E) ? o.tn0 : o.ysw;
    return (0, i.jsx)("div", {
        className: K.TE,
        onMouseDown: A,
        onFocus: A,
        children: (0, i.jsx)("div", {
            className: r()(K.Og, `group-spacing-${u}`),
            children: (0, i.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), O();
                },
                className: K.Zd,
                children: [
                    (0, i.jsx)(o.HOs, {
                        className: K.XG,
                        fade: !0,
                        children: (0, i.jsxs)("div", {
                            className: K.bv,
                            children: [
                                (0, i.jsxs)(I.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: r()(W.P0, K.P0),
                                            children: (0, i.jsx)(w, { className: W.Kk }),
                                        }),
                                        (0, i.jsxs)(o.nVY, {
                                            children: [
                                                (0, i.jsx)(Q, {
                                                    parentChannel: n,
                                                    parentMessageId: l,
                                                    threadSettings: g,
                                                    updateThreadSettings: _,
                                                    error: y,
                                                    disabled: G,
                                                    isGeneratingAI: b,
                                                    enableAIFeatures: N,
                                                    getThreadNameInputAccessory: v,
                                                }),
                                                n.type === H.rbe.GUILD_TEXT
                                                    ? (0, i.jsx)(J, {
                                                          startedFromMessage: null != l,
                                                          threadSettings: g,
                                                          updateThreadSettings: _,
                                                          privateThreadMode: E,
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(Z, { parentChannel: n, parentMessageId: l }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: K.Eh,
                        children: [
                            (0, i.jsx)($, {
                                parentChannel: n,
                                textAreaState: x,
                                setTextAreaState: C,
                                submit: O,
                                error: R,
                            }),
                            (0, i.jsx)(h.Ay, {
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
function J(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: s, privateThreadMode: l } = e,
        r = (0, P.Iy)(n, l),
        a = (0, i.jsx)(o.Checkbox, {
            disabled: l === P.jk.PrivateOnly,
            checked: r,
            onChange: (e) => s({ isPrivate: e }),
            label: F.intl.string(F.t.TRPp3g),
        });
    return t || l === P.jk.Disabled
        ? null
        : (0, i.jsx)(o.D0$, {
              label: F.intl.string(F.t.F1zyvU),
              helperText: r ? F.intl.string(F.t.EWXycz) : void 0,
              children: a,
          });
}
function Q(e) {
    let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: s,
            updateThreadSettings: l,
            error: r,
            disabled: a,
            isGeneratingAI: c,
            enableAIFeatures: u,
            getThreadNameInputAccessory: h,
        } = e,
        A = s.name ?? "",
        p = (0, U.vr)(r, { content: A }),
        g = (0, P.l1)(t, n),
        m = null != n && !u,
        _ = (0, E.GV)(),
        f = u ? F.intl.string(F.t["Nb2/RE"]) : "" !== g ? g : F.intl.string(F.t["Nb2/RE"]);
    return (0, i.jsx)(o.ksK, {
        label: F.intl.string(m ? F.t.JPvIiL : F.t.j3XWjD),
        trailing: h(a),
        value: A,
        id: _,
        placeholder: f,
        maxLength: H.Ign,
        onChange: (e) => {
            l({ name: (0, w.A)(e, !1) }), "" !== e ? d.A.startTyping(t.id) : d.A.stopTyping(t.id);
        },
        onBlur: () => {
            let e = (0, w.A)(A, !0);
            e !== A && l({ name: e });
        },
        error: p,
        disabled: a || c,
    });
}
function $(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: l, submit: u, error: h } = e,
        [A, p] = s.useState(!0),
        g = s.useCallback(() => p(!0), []),
        m = s.useCallback(() => p(!1), []),
        _ = s.useCallback(
            (e, n, i) => {
                c.A.saveDraft(t.id, n, j.C.FirstThreadMessage),
                    l(
                        (e) => (
                            "" !== n && e.textValue !== n ? d.A.startTyping(t.id) : "" === n && d.A.stopTyping(t.id),
                            { textValue: n, richValue: i }
                        ),
                    );
            },
            [t.id, l],
        ),
        f = s.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: i } = e;
                return u(t, i, n);
            },
            [u],
        );
    (0, M.Vo)({ event: H.jej.TEXTAREA_FOCUS, handler: g }), (0, M.Vo)({ event: H.jej.TEXTAREA_BLUR, handler: m });
    let E = (0, a.bG)([O.A], () => O.A.can(H.xBc.ATTACH_FILES, t)),
        I = (0, U.vr)(h, { content: n.textValue });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C.A, { channelId: t.id, type: Y, canAttachFiles: E }),
            (0, i.jsx)("div", { className: K.xN, children: (0, i.jsx)(o.dzK, { error: I }) }),
            (0, i.jsx)(x.Ay, {
                type: Y,
                channel: t,
                placeholder: F.intl.string(F.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: A,
                className: r()(K.gM, K.Yy),
                innerClassName: r()(K.SL, { [K.cr]: null != I }),
                onFocus: g,
                onBlur: m,
                onChange: _,
                onSubmit: f,
                promptToUpload: G.R,
            }),
        ],
    });
}
function Z(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        s = (0, a.bG)([R.A], () => (null == n ? null : R.A.getMessage(t.id, n))),
        l = v.hH.useSetting();
    return null != s
        ? (0, i.jsx)(N.A, {
              className: K.IL,
              message: s,
              channel: t,
              compact: l,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
