n.d(t, { A: () => z });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(465532),
    c = n(414798),
    u = n(579872),
    h = n(147192),
    A = n(738876),
    g = n(775602),
    m = n(793574),
    p = n(688810),
    _ = n(355622),
    x = n(408018),
    f = n(133343),
    E = n(171593),
    C = n(915089),
    I = n(314307),
    S = n(58736),
    b = n(636922),
    N = n(931664),
    T = n(631576),
    j = n(253932),
    v = n(734057),
    y = n(31717),
    R = n(320501),
    O = n(576705),
    L = n(522602),
    D = n(234320),
    M = n(460350),
    G = n(518960),
    U = n(710640),
    P = n(393309),
    k = n(474078),
    w = n(747926),
    V = n(965601),
    B = n(55294),
    H = n(652215),
    F = n(985018),
    Y = n(770587),
    W = n(790687);
let K = _.oU.THREAD_CREATION;
function z(e) {
    let { parentChannelId: t, parentMessageId: n, location: l } = e,
        s = (0, r.bG)([v.A], () => v.A.getChannel(t)),
        { analyticsLocations: a } = (0, p.Ay)(m.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, i.jsx)(p.f5, {
              value: a,
              children: (0, i.jsx)(D.Ah, {
                  children: (0, i.jsxs)("section", {
                      "aria-label": F.intl.string(F.t.rBIGBL),
                      className: Y.kL,
                      children: [
                          (0, i.jsx)(A.A, { channel: s, draftType: y.C.FirstThreadMessage }),
                          (0, i.jsx)(X, { parentChannelId: t }),
                          (0, i.jsx)(q, { parentChannel: s, parentMessageId: n, location: l }),
                      ],
                  }),
              }),
          });
}
function X(e) {
    let { parentChannelId: t } = e,
        n = l.useCallback(() => {
            let e = y.A.getThreadSettings(t),
                n = y.A.getDraft(t, y.C.FirstThreadMessage).trim(),
                i = L.A.getUploads(t, y.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== n.length || 0 !== i.length
                ? u.A.show({
                      title: F.intl.string(F.t["6kDZh1"]),
                      body: F.intl.string(F.t.NgS9jX),
                      confirmText: F.intl.string(F.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: F.intl.string(F.t["olcKd/"]),
                      onConfirm: () => {
                          (0, w.bA)(t);
                      },
                  })
                : (0, w.bA)(t);
        }, [t]);
    return (0, i.jsxs)(S.Ay, {
        toolbar: (0, i.jsx)(S.Ay.Icon, { icon: o.PGe, tooltip: F.intl.string(F.t.cpT0Cq), onClick: n }),
        children: [
            (0, i.jsx)(S.Ay.Icon, { icon: o.ysw, disabled: !0, "aria-label": F.intl.string(F.t["7Xm5QI"]) }),
            (0, i.jsx)(S.Ay.Title, { children: F.intl.string(F.t["4WNcpu"]) }),
        ],
    });
}
function q(e) {
    let t,
        { parentChannel: n, parentMessageId: s, location: c } = e,
        u = (0, r.bG)([g.A], () => g.A.messageGroupSpacing),
        A =
            ((t = l.useContext(D.EH)),
            l.useCallback(() => {
                t.bumpDispatchPriority();
            }, [t])),
        {
            threadSettings: m,
            setThreadSettings: p,
            updateThreadSettings: _,
        } = (function (e, t) {
            let n = (0, r.bG)([y.A], () => y.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, s] = l.useState(n),
                a = l.useCallback(
                    (n) => {
                        s((e) => ({ ...e, ...n })), d.A.changeThreadSettings(e.id, { ...n, parentMessageId: t });
                    },
                    [e.id, t],
                );
            return { threadSettings: i, setThreadSettings: s, updateThreadSettings: a };
        })(n, s),
        { textAreaState: f, setTextAreaState: E } = (function (e, t) {
            let [n, i] = l.useState((0, x.N3)());
            return (
                l.useEffect(() => {
                    function n(n) {
                        let l = y.A.getDraft(e.id, y.C.FirstThreadMessage);
                        (0 === l.length || !0 === n) && i((0, x.ur)(l)), t(y.A.getThreadSettings(e.id) ?? {});
                    }
                    return (
                        n(!0),
                        y.A.addChangeListener(n),
                        () => {
                            y.A.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                { textAreaState: n, setTextAreaState: i }
            );
        })(n, p),
        C = (0, P.EN)(n),
        {
            isGeneratingAI: S,
            enableAIFeatures: b,
            getThreadNameInputAccessory: j,
        } = (0, V.C)({
            parentChannel: n,
            parentMessageId: s,
            updateThreadSettings: _,
            threadSettings: m,
            textAreaState: f,
        }),
        {
            nameError: v,
            messageError: R,
            submit: O,
            submitting: G,
        } = (function (e) {
            let {
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: s,
                    textAreaState: a,
                    location: r,
                    enableAIFeatures: o,
                } = e,
                [d, c] = l.useState(null),
                [u, h] = l.useState(null),
                [A, g] = l.useState(!1),
                m = (0, B.A)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: s,
                    location: r,
                    onThreadCreated: w.JA,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: d,
                messageError: u,
                submit: l.useCallback(
                    async (e, l, s) => {
                        if (A) return { shouldClear: !1, shouldRefocus: !1 };
                        g(!0),
                            null == e && (e = a.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = N.A.getStickerPreview(t.id, K.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = L.A.getUploads(t.id, y.C.FirstThreadMessage));
                        let r = i.name ?? "",
                            d = (o || null == n) && 0 === r.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if ((c(d ? (0, U.uW)() : null), h(u ? (0, U.fo)() : null), d || u))
                            return g(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: p } = await (0, M.i)({
                            content: e,
                            stickers: l,
                            uploads: s,
                            type: K,
                            channel: null == n ? t : null,
                        });
                        if (!p) return g(!1), { shouldClear: !1, shouldRefocus: !0 };
                        try {
                            await m(e, l, s);
                        } catch (e) {
                            return (
                                e.body?.code === H.t02.AUTOMOD_TITLE_BLOCKED && c((0, U.z0)(e.body, t)),
                                g(!1),
                                { shouldClear: !1, shouldRefocus: !0 }
                            );
                        }
                        return (0, T.x5)(t.id, K.drafts.type), g(!1), { shouldClear: !0, shouldRefocus: !1 };
                    },
                    [m, a.textValue, i.name, n, t, A, o],
                ),
                submitting: A,
            };
        })({
            parentChannel: n,
            parentMessageId: s,
            threadSettings: m,
            privateThreadMode: C,
            textAreaState: f,
            location: c,
            enableAIFeatures: b,
        }),
        k = (0, P.Iy)(m, C) ? o.tn0 : o.ysw;
    return (0, i.jsx)("div", {
        className: Y.TE,
        onMouseDown: A,
        onFocus: A,
        children: (0, i.jsx)("div", {
            className: a()(Y.Og, `group-spacing-${u}`),
            children: (0, i.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), O();
                },
                className: Y.Zd,
                children: [
                    (0, i.jsx)(o.HOs, {
                        className: Y.XG,
                        fade: !0,
                        children: (0, i.jsxs)("div", {
                            className: Y.bv,
                            children: [
                                (0, i.jsxs)(I.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: a()(W.P0, Y.P0),
                                            children: (0, i.jsx)(k, { className: W.Kk }),
                                        }),
                                        (0, i.jsxs)(o.nVY, {
                                            children: [
                                                (0, i.jsx)(Q, {
                                                    parentChannel: n,
                                                    parentMessageId: s,
                                                    threadSettings: m,
                                                    updateThreadSettings: _,
                                                    error: v,
                                                    disabled: G,
                                                    isGeneratingAI: S,
                                                    enableAIFeatures: b,
                                                    getThreadNameInputAccessory: j,
                                                }),
                                                n.type === H.rbe.GUILD_TEXT
                                                    ? (0, i.jsx)(J, {
                                                          startedFromMessage: null != s,
                                                          threadSettings: m,
                                                          updateThreadSettings: _,
                                                          privateThreadMode: C,
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)($, { parentChannel: n, parentMessageId: s }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: Y.Eh,
                        children: [
                            (0, i.jsx)(Z, {
                                parentChannel: n,
                                textAreaState: f,
                                setTextAreaState: E,
                                submit: O,
                                error: R,
                            }),
                            (0, i.jsx)(h.Ay, {
                                channel: n,
                                isThreadCreation: !0,
                                className: Y.RL,
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
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: l, privateThreadMode: s } = e,
        a = (0, P.Iy)(n, s),
        r = (0, i.jsx)(o.Checkbox, {
            disabled: s === P.jk.PrivateOnly,
            checked: a,
            onChange: (e) => l({ isPrivate: e }),
            label: F.intl.string(F.t.TRPp3g),
        });
    return t || s === P.jk.Disabled
        ? null
        : (0, i.jsx)(o.D0$, {
              label: F.intl.string(F.t.F1zyvU),
              helperText: a ? F.intl.string(F.t.EWXycz) : void 0,
              children: r,
          });
}
function Q(e) {
    let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: l,
            updateThreadSettings: s,
            error: a,
            disabled: r,
            isGeneratingAI: d,
            enableAIFeatures: u,
            getThreadNameInputAccessory: h,
        } = e,
        A = l.name ?? "",
        g = (0, U.vr)(a, { content: A }),
        m = (0, P.l1)(t, n),
        p = null != n && !u,
        _ = (0, C.GV)(),
        x = u ? F.intl.string(F.t["Nb2/RE"]) : "" !== m ? m : F.intl.string(F.t["Nb2/RE"]);
    return (0, i.jsx)(o.ksK, {
        label: F.intl.string(p ? F.t.JPvIiL : F.t.j3XWjD),
        trailing: h(r),
        value: A,
        id: _,
        placeholder: x,
        maxLength: H.Ign,
        onChange: (e) => {
            s({ name: (0, k.A)(e, !1) }), "" !== e ? c.A.startTyping(t.id) : c.A.stopTyping(t.id);
        },
        onBlur: () => {
            let e = (0, k.A)(A, !0);
            e !== A && s({ name: e });
        },
        error: g,
        disabled: r || d,
    });
}
function Z(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: s, submit: u, error: h } = e,
        [A, g] = l.useState(!0),
        m = l.useCallback(() => g(!0), []),
        p = l.useCallback(() => g(!1), []),
        _ = l.useCallback(
            (e, n, i) => {
                d.A.saveDraft(t.id, n, y.C.FirstThreadMessage),
                    s(
                        (e) => (
                            "" !== n && e.textValue !== n ? c.A.startTyping(t.id) : "" === n && c.A.stopTyping(t.id),
                            { textValue: n, richValue: i }
                        ),
                    );
            },
            [t.id, s],
        ),
        x = l.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: i } = e;
                return u(t, i, n);
            },
            [u],
        );
    (0, D.Vo)({ event: H.jej.TEXTAREA_FOCUS, handler: m }), (0, D.Vo)({ event: H.jej.TEXTAREA_BLUR, handler: p });
    let C = (0, r.bG)([O.A], () => O.A.can(H.xBc.ATTACH_FILES, t)),
        I = (0, U.vr)(h, { content: n.textValue });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(E.A, { channelId: t.id, type: K, canAttachFiles: C }),
            (0, i.jsx)("div", { className: Y.xN, children: (0, i.jsx)(o.dzK, { error: I }) }),
            (0, i.jsx)(f.Ay, {
                type: K,
                channel: t,
                placeholder: F.intl.string(F.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: A,
                className: a()(Y.gM, Y.Yy),
                innerClassName: a()(Y.SL, { [Y.cr]: null != I }),
                onFocus: m,
                onBlur: p,
                onChange: _,
                onSubmit: x,
                promptToUpload: G.R,
            }),
        ],
    });
}
function $(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        l = (0, r.bG)([R.A], () => (null == n ? null : R.A.getMessage(t.id, n))),
        s = j.hH.useSetting();
    return null != l
        ? (0, i.jsx)(b.A, {
              className: Y.IL,
              message: l,
              channel: t,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
