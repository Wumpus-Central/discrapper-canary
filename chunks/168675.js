n.d(t, { A: () => et });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(789645),
    d = n(163328),
    c = n(425557),
    u = n(573613),
    h = n(270003),
    A = n(150934),
    _ = n(452027),
    m = n(292666),
    g = n(511274),
    p = n(465532),
    f = n(414798),
    E = n(579872),
    x = n(147192),
    I = n(738876),
    C = n(775602),
    b = n(793574),
    N = n(688810),
    S = n(355622),
    v = n(408018),
    T = n(133343),
    y = n(171593),
    j = n(915089),
    R = n(314307),
    L = n(58736),
    O = n(636922),
    G = n(931664),
    M = n(631576),
    D = n(253932),
    U = n(734057),
    P = n(31717),
    w = n(320501),
    k = n(576705),
    V = n(522602),
    B = n(234320),
    H = n(460350),
    F = n(518960),
    W = n(710640),
    Y = n(393309),
    K = n(474078),
    z = n(747926),
    q = n(965601),
    X = n(55294),
    Q = n(652215),
    Z = n(985018),
    J = n(790158),
    $ = n(415296);
let ee = S.oU.THREAD_CREATION;
function et(e) {
    let { parentChannelId: t, parentMessageId: n, location: l } = e,
        s = (0, r.bG)([U.A], () => U.A.getChannel(t)),
        { analyticsLocations: a } = (0, N.Ay)(b.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, i.jsx)(N.f5, {
              value: a,
              children: (0, i.jsx)(B.Ah, {
                  children: (0, i.jsxs)("section", {
                      "aria-label": Z.intl.string(Z.t.rBIGBL),
                      className: J.kL,
                      children: [
                          (0, i.jsx)(I.A, { channel: s, draftType: P.C.FirstThreadMessage }),
                          (0, i.jsx)(en, { parentChannelId: t }),
                          (0, i.jsx)(ei, { parentChannel: s, parentMessageId: n, location: l }),
                      ],
                  }),
              }),
          });
}
function en(e) {
    let { parentChannelId: t } = e,
        n = l.useCallback(() => {
            let e = P.A.getThreadSettings(t),
                n = P.A.getDraft(t, P.C.FirstThreadMessage).trim(),
                i = V.A.getUploads(t, P.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== n.length || 0 !== i.length
                ? E.A.show({
                      title: Z.intl.string(Z.t["6kDZh1"]),
                      body: Z.intl.string(Z.t.NgS9jX),
                      confirmText: Z.intl.string(Z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: Z.intl.string(Z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, z.bA)(t);
                      },
                  })
                : (0, z.bA)(t);
        }, [t]);
    return (0, i.jsxs)(L.Ay, {
        toolbar: (0, i.jsx)(L.Ay.Icon, { icon: o.P, tooltip: Z.intl.string(Z.t.cpT0Cq), onClick: n }),
        children: [
            (0, i.jsx)(L.Ay.Icon, { icon: d.y, disabled: !0, "aria-label": Z.intl.string(Z.t["7Xm5QI"]) }),
            (0, i.jsx)(L.Ay.Title, { children: Z.intl.string(Z.t["4WNcpu"]) }),
        ],
    });
}
function ei(e) {
    let t,
        { parentChannel: n, parentMessageId: s, location: o } = e,
        A = (0, r.bG)([C.A], () => C.A.messageGroupSpacing),
        _ =
            ((t = l.useContext(B.EH)),
            l.useCallback(() => {
                t.bumpDispatchPriority();
            }, [t])),
        {
            threadSettings: m,
            setThreadSettings: g,
            updateThreadSettings: f,
        } = (function (e, t) {
            let n = (0, r.bG)([P.A], () => P.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, s] = l.useState(n),
                a = l.useCallback(
                    (n) => {
                        s((e) => ({ ...e, ...n })), p.A.changeThreadSettings(e.id, { ...n, parentMessageId: t });
                    },
                    [e.id, t],
                );
            return { threadSettings: i, setThreadSettings: s, updateThreadSettings: a };
        })(n, s),
        { textAreaState: E, setTextAreaState: I } = (function (e, t) {
            let [n, i] = l.useState((0, v.N3)());
            return (
                l.useEffect(() => {
                    function n(n) {
                        let l = P.A.getDraft(e.id, P.C.FirstThreadMessage);
                        (0 === l.length || !0 === n) && i((0, v.ur)(l)), t(P.A.getThreadSettings(e.id) ?? {});
                    }
                    return (
                        n(!0),
                        P.A.addChangeListener(n),
                        () => {
                            P.A.removeChangeListener(n);
                        }
                    );
                }, [e.id, t]),
                { textAreaState: n, setTextAreaState: i }
            );
        })(n, g),
        b = (0, Y.EN)(n),
        {
            isGeneratingAI: N,
            enableAIFeatures: S,
            getThreadNameInputAccessory: T,
        } = (0, q.C)({
            parentChannel: n,
            parentMessageId: s,
            updateThreadSettings: f,
            threadSettings: m,
            textAreaState: E,
        }),
        {
            nameError: y,
            messageError: j,
            submit: L,
            submitting: O,
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
                m = (0, X.A)({
                    parentChannel: t,
                    parentMessageId: n,
                    threadSettings: i,
                    privateThreadMode: s,
                    location: r,
                    onThreadCreated: z.JA,
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
                                (l = G.A.getStickerPreview(t.id, ee.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = V.A.getUploads(t.id, P.C.FirstThreadMessage));
                        let r = (i.name ?? "").trim(),
                            d = (o || null == n) && 0 === r.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if ((c(d ? (0, W.uW)() : null), h(u ? (0, W.fo)() : null), d || u))
                            return _(!1), { shouldClear: !1, shouldRefocus: !0 };
                        let { valid: g } = await (0, H.i)({
                            content: e,
                            stickers: l,
                            uploads: s,
                            type: ee,
                            channel: null == n ? t : null,
                        });
                        if (!g) return _(!1), { shouldClear: !1, shouldRefocus: !0 };
                        try {
                            await m(e, l, s);
                        } catch (e) {
                            return (
                                e.body?.code === Q.t02.AUTOMOD_TITLE_BLOCKED
                                    ? c((0, W.z0)(e.body, t))
                                    : e.body?.code === Q.t02.INVALID_FORM_BODY &&
                                      e.body?.errors?.name != null &&
                                      c((0, W.T4)()),
                                _(!1),
                                { shouldClear: !1, shouldRefocus: !0 }
                            );
                        }
                        return (0, M.x5)(t.id, ee.drafts.type), _(!1), { shouldClear: !0, shouldRefocus: !1 };
                    },
                    [m, a.textValue, i.name, n, t, A, o],
                ),
                submitting: A,
            };
        })({
            parentChannel: n,
            parentMessageId: s,
            threadSettings: m,
            privateThreadMode: b,
            textAreaState: E,
            location: o,
            enableAIFeatures: S,
        }),
        D = (0, Y.Iy)(m, b) ? c.t : d.y;
    return (0, i.jsx)("div", {
        className: J.TE,
        onMouseDown: _,
        onFocus: _,
        children: (0, i.jsx)("div", {
            className: a()(J.Og, `group-spacing-${A}`),
            children: (0, i.jsxs)("form", {
                onSubmit: (e) => {
                    e.preventDefault(), L();
                },
                className: J.Zd,
                children: [
                    (0, i.jsx)(u.Ip, {
                        className: J.XG,
                        fade: !0,
                        children: (0, i.jsxs)("div", {
                            className: J.bv,
                            children: [
                                (0, i.jsxs)(R.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: a()($.P0, J.P0),
                                            children: (0, i.jsx)(D, { className: $.Kk }),
                                        }),
                                        (0, i.jsxs)(h.n, {
                                            children: [
                                                (0, i.jsx)(es, {
                                                    parentChannel: n,
                                                    parentMessageId: s,
                                                    threadSettings: m,
                                                    updateThreadSettings: f,
                                                    error: y,
                                                    disabled: O,
                                                    isGeneratingAI: N,
                                                    enableAIFeatures: S,
                                                    getThreadNameInputAccessory: T,
                                                }),
                                                n.type === Q.rbe.GUILD_TEXT
                                                    ? (0, i.jsx)(el, {
                                                          startedFromMessage: null != s,
                                                          threadSettings: m,
                                                          updateThreadSettings: f,
                                                          privateThreadMode: b,
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(er, { parentChannel: n, parentMessageId: s }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: J.Eh,
                        children: [
                            (0, i.jsx)(ea, {
                                parentChannel: n,
                                textAreaState: E,
                                setTextAreaState: I,
                                submit: L,
                                error: j,
                            }),
                            (0, i.jsx)(x.Ay, {
                                channel: n,
                                isThreadCreation: !0,
                                className: J.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function el(e) {
    let { startedFromMessage: t, threadSettings: n, updateThreadSettings: l, privateThreadMode: s } = e,
        a = (0, Y.Iy)(n, s),
        r = (0, i.jsx)(A.S, {
            disabled: s === Y.jk.PrivateOnly,
            checked: a,
            onChange: (e) => l({ isPrivate: e }),
            label: Z.intl.string(Z.t.TRPp3g),
        });
    return t || s === Y.jk.Disabled
        ? null
        : (0, i.jsx)(_.D, {
              label: Z.intl.string(Z.t.F1zyvU),
              helperText: a ? Z.intl.string(Z.t.EWXycz) : void 0,
              children: r,
          });
}
function es(e) {
    let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: l,
            updateThreadSettings: s,
            error: a,
            disabled: r,
            isGeneratingAI: o,
            enableAIFeatures: d,
            getThreadNameInputAccessory: c,
        } = e,
        u = l.name ?? "",
        h = (0, W.vr)(a, { content: u }),
        A = (0, Y.l1)(t, n),
        _ = null != n && !d,
        g = (0, j.GV)(),
        p = d ? Z.intl.string(Z.t["Nb2/RE"]) : "" !== A ? A : Z.intl.string(Z.t["Nb2/RE"]);
    return (0, i.jsx)(m.k, {
        label: Z.intl.string(_ ? Z.t.JPvIiL : Z.t.j3XWjD),
        trailing: c(r),
        value: u,
        id: g,
        placeholder: p,
        maxLength: Q.Ign,
        onChange: (e) => {
            s({ name: (0, K.A)(e, !1) }), "" !== e ? f.A.startTyping(t.id) : f.A.stopTyping(t.id);
        },
        onBlur: () => {
            let e = (0, K.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: r || o,
    });
}
function ea(e) {
    let { parentChannel: t, textAreaState: n, setTextAreaState: s, submit: o, error: d } = e,
        [c, u] = l.useState(!0),
        h = l.useRef(null),
        A = l.useCallback((e) => {
            u(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), h.current?.submit());
        }, []),
        _ = l.useCallback(() => u(!1), []),
        m = l.useCallback(
            (e, n, i) => {
                p.A.saveDraft(t.id, n, P.C.FirstThreadMessage),
                    s(
                        (e) => (
                            "" !== n && e.textValue !== n ? f.A.startTyping(t.id) : "" === n && f.A.stopTyping(t.id),
                            { textValue: n, richValue: i }
                        ),
                    );
            },
            [t.id, s],
        ),
        E = l.useCallback(
            (e) => {
                let { value: t, uploads: n, stickers: i } = e;
                return o(t, i, n);
            },
            [o],
        );
    (0, B.Vo)({ event: Q.jej.TEXTAREA_FOCUS, handler: A }), (0, B.Vo)({ event: Q.jej.TEXTAREA_BLUR, handler: _ });
    let x = (0, r.bG)([k.A], () => k.A.can(Q.xBc.ATTACH_FILES, t)),
        I = (0, W.vr)(d, { content: n.textValue });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(y.A, { channelId: t.id, type: ee, canAttachFiles: x }),
            (0, i.jsx)("div", { className: J.xN, children: (0, i.jsx)(g.U, { error: I }) }),
            (0, i.jsx)(T.Ay, {
                type: ee,
                channel: t,
                placeholder: Z.intl.string(Z.t.taZfIC),
                textValue: n.textValue,
                richValue: n.richValue,
                focused: c,
                className: a()(J.gM, J.Yy),
                innerClassName: a()(J.SL, { [J.cr]: null != I }),
                onFocus: A,
                onBlur: _,
                onChange: m,
                onSubmit: E,
                promptToUpload: F.R,
                setEditorRef: (e) => {
                    h.current = e;
                },
            }),
        ],
    });
}
function er(e) {
    let { parentChannel: t, parentMessageId: n } = e,
        l = (0, r.bG)([w.A], () => (null == n ? null : w.A.getMessage(t.id, n))),
        s = D.hH.useSetting();
    return null != l
        ? (0, i.jsx)(O.A, {
              className: J.IL,
              message: l,
              channel: t,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
