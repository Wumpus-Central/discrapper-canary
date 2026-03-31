n.d(t, { A: () => z });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(465532),
    d = n(414798),
    u = n(579872),
    h = n(147192),
    A = n(738876),
    _ = n(775602),
    m = n(793574),
    g = n(688810),
    p = n(355622),
    f = n(408018),
    x = n(133343),
    E = n(171593),
    I = n(915089),
    C = n(314307),
    N = n(58736),
    T = n(636922),
    S = n(931664),
    b = n(631576),
    y = n(253932),
    v = n(734057),
    j = n(31717),
    R = n(320501),
    O = n(576705),
    L = n(522602),
    M = n(234320),
    D = n(460350),
    U = n(518960),
    G = n(710640),
    P = n(393309),
    k = n(474078),
    w = n(747926),
    B = n(965601),
    V = n(55294),
    H = n(652215),
    F = n(985018),
    K = n(822334),
    W = n(756304);
let Y = p.oU.THREAD_CREATION;
function z(e) {
    let { parentChannelId: t, parentMessageId: n, location: l } = e,
        s = (0, r.bG)([v.A], () => v.A.getChannel(t)),
        { analyticsLocations: a } = (0, g.Ay)(m.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, i.jsx)(g.f5, {
              value: a,
              children: (0, i.jsx)(M.Ah, {
                  children: (0, i.jsxs)("section", {
                      "aria-label": F.intl.string(F.t.rBIGBL),
                      className: K.kL,
                      children: [
                          (0, i.jsx)(A.A, { channel: s, draftType: j.C.FirstThreadMessage }),
                          (0, i.jsx)(q, { parentChannelId: t }),
                          (0, i.jsx)(X, { parentChannel: s, parentMessageId: n, location: l }),
                      ],
                  }),
              }),
          });
}
function q(e) {
    let { parentChannelId: t } = e,
        n = l.useCallback(() => {
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
                          (0, w.bA)(t);
                      },
                  })
                : (0, w.bA)(t);
        }, [t]);
    return (0, i.jsxs)(N.Ay, {
        toolbar: (0, i.jsx)(N.Ay.Icon, { icon: o.PGe, tooltip: F.intl.string(F.t.cpT0Cq), onClick: n }),
        children: [
            (0, i.jsx)(N.Ay.Icon, { icon: o.ysw, disabled: !0, "aria-label": F.intl.string(F.t["7Xm5QI"]) }),
            (0, i.jsx)(N.Ay.Title, { children: F.intl.string(F.t["4WNcpu"]) }),
        ],
    });
}
function X(e) {
    let t,
        { parentChannel: n, parentMessageId: s, location: d } = e,
        u = (0, r.bG)([_.A], () => _.A.messageGroupSpacing),
        A =
            ((t = l.useContext(M.EH)),
            l.useCallback(() => {
                t.bumpDispatchPriority();
            }, [t])),
        {
            threadSettings: m,
            setThreadSettings: g,
            updateThreadSettings: p,
        } = (function (e, t) {
            let n = (0, r.bG)([j.A], () => j.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, s] = l.useState(n),
                a = l.useCallback(
                    (n) => {
                        s((e) => ({ ...e, ...n })), c.A.changeThreadSettings(e.id, { ...n, parentMessageId: t });
                    },
                    [e.id, t],
                );
            return { threadSettings: i, setThreadSettings: s, updateThreadSettings: a };
        })(n, s),
        { textAreaState: x, setTextAreaState: E } = (function (e, t) {
            let [n, i] = l.useState((0, f.N3)());
            return (
                l.useEffect(() => {
                    function n(n) {
                        let l = j.A.getDraft(e.id, j.C.FirstThreadMessage);
                        (0 === l.length || !0 === n) && i((0, f.ur)(l)), t(j.A.getThreadSettings(e.id) ?? {});
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
        })(n, g),
        I = (0, P.EN)(n),
        {
            isGeneratingAI: N,
            enableAIFeatures: T,
            getThreadNameInputAccessory: y,
        } = (0, B.C)({
            parentChannel: n,
            parentMessageId: s,
            updateThreadSettings: p,
            threadSettings: m,
            textAreaState: x,
        }),
        {
            nameError: v,
            messageError: R,
            submit: O,
            submitting: U,
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
                [c, d] = l.useState(null),
                [u, h] = l.useState(null),
                [A, _] = l.useState(!1),
                m = (0, V.A)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: s,
                    location: r,
                    onThreadCreated: w.JA,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: c,
                messageError: u,
                submit: l.useCallback(
                    async (e, l, s) => {
                        if (A) return { shouldClear: !1, shouldRefocus: !1 };
                        _(!0),
                            null == e && (e = a.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = S.A.getStickerPreview(t.id, Y.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = L.A.getUploads(t.id, j.C.FirstThreadMessage));
                        let r = (i.name ?? "").trim(),
                            c = (o || null == n) && 0 === r.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if ((d(c ? (0, G.uW)() : null), h(u ? (0, G.fo)() : null), c || u))
                            return _(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: g } = await (0, D.i)({
                            content: e,
                            stickers: l,
                            uploads: s,
                            type: Y,
                            channel: null == n ? t : null,
                        });
                        if (!g) return _(!1), { shouldClear: !1, shouldRefocus: !0 };
                        try {
                            await m(e, l, s);
                        } catch (e) {
                            return (
                                e.body?.code === H.t02.AUTOMOD_TITLE_BLOCKED
                                    ? d((0, G.z0)(e.body, t))
                                    : e.body?.code === H.t02.INVALID_FORM_BODY &&
                                      e.body?.errors?.name != null &&
                                      d((0, G.T4)()),
                                _(!1),
                                { shouldClear: !1, shouldRefocus: !0 }
                            );
                        }
                        return (0, b.x5)(t.id, Y.drafts.type), _(!1), { shouldClear: !0, shouldRefocus: !1 };
                    },
                    [m, a.textValue, i.name, n, t, A, o],
                ),
                submitting: A,
            };
        })({
            parentChannel: n,
            parentMessageId: s,
            threadSettings: m,
            privateThreadMode: I,
            textAreaState: x,
            location: d,
            enableAIFeatures: T,
        }),
        k = (0, P.Iy)(m, I) ? o.tn0 : o.ysw;
    return (0, i.jsx)("div", {
        className: K.TE,
        onMouseDown: A,
        onFocus: A,
        children: (0, i.jsx)("div", {
            className: a()(K.Og, `group-spacing-${u}`),
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
                                (0, i.jsxs)(C.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: a()(W.P0, K.P0),
                                            children: (0, i.jsx)(k, { className: W.Kk }),
                                        }),
                                        (0, i.jsxs)(o.nVY, {
                                            children: [
                                                (0, i.jsx)(Q, {
                                                    parentChannel: n,
                                                    parentMessageId: s,
                                                    threadSettings: m,
                                                    updateThreadSettings: p,
                                                    error: v,
                                                    disabled: U,
                                                    isGeneratingAI: N,
                                                    enableAIFeatures: T,
                                                    getThreadNameInputAccessory: y,
                                                }),
                                                n.type === H.rbe.GUILD_TEXT
                                                    ? (0, i.jsx)(J, {
                                                          startedFromMessage: null != s,
                                                          threadSettings: m,
                                                          updateThreadSettings: p,
                                                          privateThreadMode: I,
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(Z, { parentChannel: n, parentMessageId: s }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: K.Eh,
                        children: [
                            (0, i.jsx)($, {
                                parentChannel: n,
                                textAreaState: x,
                                setTextAreaState: E,
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
            isGeneratingAI: c,
            enableAIFeatures: u,
            getThreadNameInputAccessory: h,
        } = e,
        A = l.name ?? "",
        _ = (0, G.vr)(a, { content: A }),
        m = (0, P.l1)(t, n),
        g = null != n && !u,
        p = (0, I.GV)(),
        f = u ? F.intl.string(F.t["Nb2/RE"]) : "" !== m ? m : F.intl.string(F.t["Nb2/RE"]);
    return (0, i.jsx)(o.ksK, {
        label: F.intl.string(g ? F.t.JPvIiL : F.t.j3XWjD),
        trailing: h(r),
        value: A,
        id: p,
        placeholder: f,
        maxLength: H.Ign,
        onChange: (e) => {
            s({ name: (0, k.A)(e, !1) }), "" !== e ? d.A.startTyping(t.id) : d.A.stopTyping(t.id);
        },
        onBlur: () => {
            let e = (0, k.A)(A, !0);
            e !== A && s({ name: e });
        },
        error: _,
        disabled: r || c,
    });
}
function $(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: s, submit: u, error: h } = e,
        [A, _] = l.useState(!0),
        m = l.useCallback(() => _(!0), []),
        g = l.useCallback(() => _(!1), []),
        p = l.useCallback(
            (e, n, i) => {
                c.A.saveDraft(t.id, n, j.C.FirstThreadMessage),
                    s(
                        (e) => (
                            "" !== n && e.textValue !== n ? d.A.startTyping(t.id) : "" === n && d.A.stopTyping(t.id),
                            { textValue: n, richValue: i }
                        ),
                    );
            },
            [t.id, s],
        ),
        f = l.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: i } = e;
                return u(t, i, n);
            },
            [u],
        );
    (0, M.Vo)({ event: H.jej.TEXTAREA_FOCUS, handler: m }), (0, M.Vo)({ event: H.jej.TEXTAREA_BLUR, handler: g });
    let I = (0, r.bG)([O.A], () => O.A.can(H.xBc.ATTACH_FILES, t)),
        C = (0, G.vr)(h, { content: n.textValue });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(E.A, { channelId: t.id, type: Y, canAttachFiles: I }),
            (0, i.jsx)("div", { className: K.xN, children: (0, i.jsx)(o.dzK, { error: C }) }),
            (0, i.jsx)(x.Ay, {
                type: Y,
                channel: t,
                placeholder: F.intl.string(F.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: A,
                className: a()(K.gM, K.Yy),
                innerClassName: a()(K.SL, { [K.cr]: null != C }),
                onFocus: m,
                onBlur: g,
                onChange: p,
                onSubmit: f,
                promptToUpload: U.R,
            }),
        ],
    });
}
function Z(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        l = (0, r.bG)([R.A], () => (null == n ? null : R.A.getMessage(t.id, n))),
        s = y.hH.useSetting();
    return null != l
        ? (0, i.jsx)(T.A, {
              className: K.IL,
              message: l,
              channel: t,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
