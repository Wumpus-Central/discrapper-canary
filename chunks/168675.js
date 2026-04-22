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
    _ = n(775602),
    m = n(793574),
    p = n(688810),
    g = n(355622),
    f = n(408018),
    E = n(133343),
    x = n(171593),
    I = n(915089),
    C = n(314307),
    N = n(58736),
    T = n(636922),
    S = n(931664),
    b = n(631576),
    y = n(253932),
    v = n(734057),
    R = n(31717),
    j = n(320501),
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
    W = n(790158),
    K = n(415296);
let Y = g.oU.THREAD_CREATION;
function z(e) {
    let { parentChannelId: t, parentMessageId: n, location: l } = e,
        s = (0, r.bG)([v.A], () => v.A.getChannel(t)),
        { analyticsLocations: a } = (0, p.Ay)(m.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, i.jsx)(p.f5, {
              value: a,
              children: (0, i.jsx)(M.Ah, {
                  children: (0, i.jsxs)("section", {
                      "aria-label": F.intl.string(F.t.rBIGBL),
                      className: W.kL,
                      children: [
                          (0, i.jsx)(A.A, { channel: s, draftType: R.C.FirstThreadMessage }),
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
            let e = R.A.getThreadSettings(t),
                n = R.A.getDraft(t, R.C.FirstThreadMessage).trim(),
                i = L.A.getUploads(t, R.C.FirstThreadMessage);
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
        { parentChannel: n, parentMessageId: s, location: c } = e,
        u = (0, r.bG)([_.A], () => _.A.messageGroupSpacing),
        A =
            ((t = l.useContext(M.EH)),
            l.useCallback(() => {
                t.bumpDispatchPriority();
            }, [t])),
        {
            threadSettings: m,
            setThreadSettings: p,
            updateThreadSettings: g,
        } = (function (e, t) {
            let n = (0, r.bG)([R.A], () => R.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, s] = l.useState(n),
                a = l.useCallback(
                    (n) => {
                        s((e) => ({ ...e, ...n })), d.A.changeThreadSettings(e.id, { ...n, parentMessageId: t });
                    },
                    [e.id, t],
                );
            return { threadSettings: i, setThreadSettings: s, updateThreadSettings: a };
        })(n, s),
        { textAreaState: E, setTextAreaState: x } = (function (e, t) {
            let [n, i] = l.useState((0, f.N3)());
            return (
                l.useEffect(() => {
                    function n(n) {
                        let l = R.A.getDraft(e.id, R.C.FirstThreadMessage);
                        (0 === l.length || !0 === n) && i((0, f.ur)(l)), t(R.A.getThreadSettings(e.id) ?? {});
                    }
                    return (
                        n(!0),
                        R.A.addChangeListener(n),
                        () => {
                            R.A.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                { textAreaState: n, setTextAreaState: i }
            );
        })(n, p),
        I = (0, P.EN)(n),
        {
            isGeneratingAI: N,
            enableAIFeatures: T,
            getThreadNameInputAccessory: y,
        } = (0, B.C)({
            parentChannel: n,
            parentMessageId: s,
            updateThreadSettings: g,
            threadSettings: m,
            textAreaState: E,
        }),
        {
            nameError: v,
            messageError: j,
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
                [d, c] = l.useState(null),
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
                nameError: d,
                messageError: u,
                submit: l.useCallback(
                    async (e, l, s) => {
                        if (A) return { shouldClear: !1, shouldRefocus: !1 };
                        _(!0),
                            null == e && (e = a.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = S.A.getStickerPreview(t.id, Y.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = L.A.getUploads(t.id, R.C.FirstThreadMessage));
                        let r = (i.name ?? "").trim(),
                            d = (o || null == n) && 0 === r.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if ((c(d ? (0, G.uW)() : null), h(u ? (0, G.fo)() : null), d || u))
                            return _(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: p } = await (0, D.i)({
                            content: e,
                            stickers: l,
                            uploads: s,
                            type: Y,
                            channel: null == n ? t : null,
                        });
                        if (!p) return _(!1), { shouldClear: !1, shouldRefocus: !0 };
                        try {
                            await m(e, l, s);
                        } catch (e) {
                            return (
                                e.body?.code === H.t02.AUTOMOD_TITLE_BLOCKED
                                    ? c((0, G.z0)(e.body, t))
                                    : e.body?.code === H.t02.INVALID_FORM_BODY &&
                                      e.body?.errors?.name != null &&
                                      c((0, G.T4)()),
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
            textAreaState: E,
            location: c,
            enableAIFeatures: T,
        }),
        k = (0, P.Iy)(m, I) ? o.tn0 : o.ysw;
    return (0, i.jsx)("div", {
        className: W.TE,
        onMouseDown: A,
        onFocus: A,
        children: (0, i.jsx)("div", {
            className: a()(W.Og, `group-spacing-${u}`),
            children: (0, i.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), O();
                },
                className: W.Zd,
                children: [
                    (0, i.jsx)(o.HOs, {
                        className: W.XG,
                        fade: !0,
                        children: (0, i.jsxs)("div", {
                            className: W.bv,
                            children: [
                                (0, i.jsxs)(C.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: a()(K.P0, W.P0),
                                            children: (0, i.jsx)(k, { className: K.Kk }),
                                        }),
                                        (0, i.jsxs)(o.nVY, {
                                            children: [
                                                (0, i.jsx)(J, {
                                                    parentChannel: n,
                                                    parentMessageId: s,
                                                    threadSettings: m,
                                                    updateThreadSettings: g,
                                                    error: v,
                                                    disabled: U,
                                                    isGeneratingAI: N,
                                                    enableAIFeatures: T,
                                                    getThreadNameInputAccessory: y,
                                                }),
                                                n.type === H.rbe.GUILD_TEXT
                                                    ? (0, i.jsx)($, {
                                                          startedFromMessage: null != s,
                                                          threadSettings: m,
                                                          updateThreadSettings: g,
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
                        className: W.Eh,
                        children: [
                            (0, i.jsx)(Q, {
                                parentChannel: n,
                                textAreaState: E,
                                setTextAreaState: x,
                                submit: O,
                                error: j,
                            }),
                            (0, i.jsx)(h.Ay, {
                                channel: n,
                                isThreadCreation: !0,
                                className: W.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function $(e) {
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
function J(e) {
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
        _ = (0, G.vr)(a, { content: A }),
        m = (0, P.l1)(t, n),
        p = null != n && !u,
        g = (0, I.GV)(),
        f = u ? F.intl.string(F.t["Nb2/RE"]) : "" !== m ? m : F.intl.string(F.t["Nb2/RE"]);
    return (0, i.jsx)(o.ksK, {
        label: F.intl.string(p ? F.t.JPvIiL : F.t.j3XWjD),
        trailing: h(r),
        value: A,
        id: g,
        placeholder: f,
        maxLength: H.Ign,
        onChange: (e) => {
            s({ name: (0, k.A)(e, !1) }), "" !== e ? c.A.startTyping(t.id) : c.A.stopTyping(t.id);
        },
        onBlur: () => {
            let e = (0, k.A)(A, !0);
            e !== A && s({ name: e });
        },
        error: _,
        disabled: r || d,
    });
}
function Q(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: s, submit: u, error: h } = e,
        [A, _] = l.useState(!0),
        m = l.useRef(null),
        p = l.useCallback((e) => {
            _(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), m.current?.submit());
        }, []),
        g = l.useCallback(() => _(!1), []),
        f = l.useCallback(
            (e, n, i) => {
                d.A.saveDraft(t.id, n, R.C.FirstThreadMessage),
                    s(
                        (e) => (
                            "" !== n && e.textValue !== n ? c.A.startTyping(t.id) : "" === n && c.A.stopTyping(t.id),
                            { textValue: n, richValue: i }
                        ),
                    );
            },
            [t.id, s],
        ),
        I = l.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: i } = e;
                return u(t, i, n);
            },
            [u],
        );
    (0, M.Vo)({ event: H.jej.TEXTAREA_FOCUS, handler: p }), (0, M.Vo)({ event: H.jej.TEXTAREA_BLUR, handler: g });
    let C = (0, r.bG)([O.A], () => O.A.can(H.xBc.ATTACH_FILES, t)),
        N = (0, G.vr)(h, { content: n.textValue });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.A, { channelId: t.id, type: Y, canAttachFiles: C }),
            (0, i.jsx)("div", { className: W.xN, children: (0, i.jsx)(o.dzK, { error: N }) }),
            (0, i.jsx)(E.Ay, {
                type: Y,
                channel: t,
                placeholder: F.intl.string(F.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: A,
                className: a()(W.gM, W.Yy),
                innerClassName: a()(W.SL, { [W.cr]: null != N }),
                onFocus: p,
                onBlur: g,
                onChange: f,
                onSubmit: I,
                promptToUpload: U.R,
                setEditorRef: (e) => {
                    m.current = e;
                },
            }),
        ],
    });
}
function Z(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        l = (0, r.bG)([j.A], () => (null == n ? null : j.A.getMessage(t.id, n))),
        s = y.hH.useSetting();
    return null != l
        ? (0, i.jsx)(T.A, {
              className: W.IL,
              message: l,
              channel: t,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
