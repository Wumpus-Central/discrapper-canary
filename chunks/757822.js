t.d(n, { ForwardModal: () => ej });
var l = t(477900),
    a = t(582128),
    i = t(435558),
    s = t(837381),
    r = t(189213),
    o = t(17928),
    u = t(765178),
    c = t(834730),
    d = t(691540),
    h = t(857250),
    m = t(97483),
    g = t(192308),
    f = t(683438),
    x = t(140735),
    C = t(559647),
    p = t(465532),
    A = t(928039),
    w = t(408018),
    b = t(915089),
    y = t(547),
    v = t(135621),
    j = t(378570),
    R = t(446244),
    S = t(151054),
    k = t(734057),
    I = t(31717),
    _ = t(232835),
    E = t(403362),
    M = t(975975),
    P = t.n(M),
    F = t(762230),
    N = t(665260),
    D = t(148494),
    T = t(596720),
    O = t(451909),
    L = t(677413),
    V = t(576705),
    U = t(513480),
    G = t(652215),
    H = t(381941);
let W = {
    async sendForward(e, n, t) {
        let l = k.A.getChannel(n),
            a = k.A.getChannel(e.channel_id),
            i = t?.isICYMIGameContentForwarding ? T.VL : a?.guild_id;
        if (null == a && null == i) throw Error("Unable to find original channel for message");
        if (null == l) throw Error("Unable to find destination channel for message");
        let s = O.Ay.parse(l, ""),
            r = {
                guild_id: i,
                channel_id: e.channel_id,
                message_id: e.id,
                type: F.S.FORWARD,
                forward_only:
                    t?.onlyAttachmentIds != null || t?.onlyEmbedIndices != null
                        ? { attachment_ids: t.onlyAttachmentIds, embed_indices: t.onlyEmbedIndices }
                        : void 0,
            },
            o = 0,
            u = t?.withMessage;
        if (null != u) {
            let [e, n] = (0, L.Ay)(u);
            e && ((u = n), (o = (0, N.UI)(o, G.pr7.SUPPRESS_NOTIFICATIONS)));
        }
        (await D.A.sendMessage(l.id, s, !1, {
            messageReference: r,
            location: H.Hx.FORWARDING,
            eagerDispatch: !1,
            flags: o,
        }),
            null == u ||
                "" === u ||
                (0, U.lP)(l, V.A) ||
                (await D.A.sendMessage(l.id, O.Ay.parse(l, u), !1, { location: H.Hx.FORWARDING, flags: o })));
    },
    sendForwards: (e, n, t) => P()(n.map((n) => W.sendForward(e, n, t))),
};
var B = t(530912),
    Q = t(71393),
    X = t(287809);
function J(e) {
    if (!e.isPrivate()) {
        let n = Q.A.getGuild(e.guild_id);
        return null != n && n.features.has(G.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let n = X.default.getUser(e);
        return null != n && n.isStaff();
    });
}
var K = t(355622),
    Y = t(865107),
    q = t(294454),
    z = t(375708),
    Z = t(837695);
function $(e) {
    let {
            message: n,
            canSend: t,
            selectedDestinations: i,
            isSending: s,
            onSend: r,
            inputValue: o,
            setInputValue: u,
        } = e,
        c = (0, v.A)(),
        d = (0, U.QK)(i),
        h = (0, B.VF)(),
        { textValue: m, richValue: g } = o,
        [f, x] = a.useState(!1),
        C = a.useCallback(() => x(!0), []),
        A = a.useCallback(() => x(!1), []),
        w = a.useCallback(
            (e, t, l) => {
                (u({ textValue: t, richValue: l }),
                    null != n && (p.A.saveDraft(n.channel_id, t, I.C.ForwardContextMessage), h(n.channel_id, n.id)));
            },
            [h, n, u],
        ),
        b = a.useCallback(() => {
            (null != n && p.A.clearDraft(n.channel_id, I.C.ForwardContextMessage), r(m));
        }, [n, r, m]),
        y = a.useCallback(
            () => (s || !t || m.length > c || b(), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [b, m, c, t, s],
        );
    return (0, l.jsx)(Y.Ay, {
        innerClassName: Z.OG,
        onChange: w,
        placeholder: z.intl.string(z.t.ZroO3G),
        channel: d,
        textValue: m,
        richValue: g,
        type: K.oU.FORWARD_MESSAGE_INPUT,
        onBlur: A,
        onFocus: C,
        focused: f,
        onSubmit: y,
        parentModalKey: q.aU,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
}
var ee = t(503698),
    en = t.n(ee),
    et = t(602853),
    el = t(477262),
    ea = t(65154),
    ei = t(191023),
    es = t(588975),
    er = t(661531),
    eo = t(155718),
    eu = t(222713),
    ec = t(783465),
    ed = t(573435),
    eh = t(619517),
    em = t(448381),
    eg = t(521981),
    ef = t(438729),
    ex = t(885386),
    eC = t(659674),
    ep = t(922704),
    eA = t(739126);
function ew(e) {
    let { message: n, forwardOptions: t, channel: s } = e,
        r = ex.hH.useSetting(),
        {
            attachments: u,
            embeds: d,
            hasContent: h,
            contentMessage: m,
        } = (function (e) {
            let { message: n, channel: t, forwardOptions: l } = e,
                a = l?.onlyAttachmentIds,
                i = l?.onlyEmbedIndices,
                s = n.messageSnapshots[0]?.message ?? n,
                r = s.attachments;
            null != a ? (r = s.attachments.filter((e) => a.includes(e.id))) : null != i && (r = []);
            let u = [];
            return (
                (0, o.bG)([V.A], () => null != t && !(0, eC.fS)(t, V.A) && (0, eC.ax)(n)) ||
                    ((u = s.embeds),
                    null != i ? (u = s.embeds.filter((e, n) => i.includes(n))) : null != a && (u = [])),
                (null != i || ("" === s.content && u.length > 0)) &&
                    (s = s.set("content", u.map((e) => e.url).join("\n"))),
                "" === s.content &&
                    s.embeds[0]?.rawDescription != null &&
                    (s = s.set("content", s.embeds[0].rawDescription)),
                { attachments: r, embeds: u, hasContent: "" !== s.content && null == a, contentMessage: s }
            );
        })({ message: n, channel: s, forwardOptions: t }),
        g =
            m.components.length > 0 && m.components[0].type === eo.I5.CHECKPOINT_CARD
                ? m.components[0].checkpointData
                : null,
        f = eu.f[g?.cardId ?? 0],
        x = (0, et.r)(f.primaryColor).hex(),
        C = a.useMemo(
            () =>
                h
                    ? (0, eg.Ay)(n, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: m,
                      }).content
                    : null,
            [m, h, n],
        ),
        p = u.length,
        A = null,
        w = null,
        b = null;
    if (p > 0 || d.length > 0) {
        let e = (0, i.countBy)(u, (e) => (0, em.NI)(e, !0)),
            n = e.IMAGE ?? 0,
            t = e.VIDEO ?? 0;
        (n > 0 && t > 0
            ? ((A = z.intl.formatToPlainString(z.t.Lr0Top, { image_count: n, video_count: t })), (w = el.s))
            : t > 0
              ? ((A = z.intl.formatToPlainString(z.t.SJ6pPX, { count: t })), (w = ea.S))
              : n > 0
                ? ((A = z.intl.formatToPlainString(z.t.h4pFfU, { count: n })), (w = 1 === n ? ei.ImageIcon : el.s))
                : ((A = z.intl.formatToPlainString(z.t["89ihS8"], { count: p })), (w = es.P)),
            t > 0 && p === t
                ? (b = (0, l.jsxs)("div", {
                      className: en()(eA.cR, eA.JZ),
                      children: [
                          (0, l.jsx)(eh.Ay, { className: eA.xn, src: u[0].proxy_url, width: 56, height: 56 }),
                          (0, l.jsx)(ea.S, { className: eA.uZ, size: "md", color: "white" }),
                      ],
                  }))
                : p > 0
                  ? (b = (0, l.jsx)("div", {
                        className: eA.cR,
                        children: (0, l.jsx)(eh.Ay, { src: u[0].proxy_url, width: 56, height: 56 }),
                    }))
                  : d[0]?.thumbnail?.proxyURL != null &&
                    (b = (0, l.jsx)("div", {
                        className: eA.cR,
                        children: (0, l.jsx)(eh.Ay, { src: d[0].thumbnail.proxyURL, width: 56, height: 56 }),
                    })));
    }
    return (
        p > 1 &&
            null != b &&
            (b = (0, l.jsxs)("div", {
                className: eA.EW,
                children: [
                    (0, l.jsx)(ed.Ay, {
                        mask: ed.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: b,
                    }),
                    (0, l.jsxs)(c.E, {
                        className: eA.mB,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", p - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: eA.sq,
            children: [
                (0, l.jsxs)("div", {
                    className: eA.FG,
                    children: [
                        null != g &&
                            (0, l.jsx)(c.E, { variant: "text-md/medium", children: z.intl.string(ep.default.goiR2u) }),
                        h &&
                            (0, l.jsx)(ef.Ay, {
                                className: en()(eA.vp, p > 0 && eA.NL),
                                message: n,
                                content: C,
                                compact: r,
                            }),
                        p > 0 &&
                            (0, l.jsxs)("div", {
                                className: eA.kp,
                                children: [
                                    null != w &&
                                        (0, l.jsx)(w, {
                                            size: "custom",
                                            width: h ? 18 : 20,
                                            color: er.A.colors.TEXT_MUTED,
                                        }),
                                    null != A &&
                                        (0, l.jsx)(c.E, {
                                            variant: h ? "text-sm/medium" : "text-md/medium",
                                            color: "text-muted",
                                            children: A,
                                        }),
                                ],
                            }),
                    ],
                }),
                b,
                null != g &&
                    (0, l.jsx)("div", {
                        className: eA.cR,
                        children: (0, l.jsx)("img", {
                            alt: "",
                            style: { backgroundColor: x },
                            width: 56,
                            height: 56,
                            src: (0, ec.OW)(g.cardId ?? 0),
                        }),
                    }),
            ],
        })
    );
}
var eb = t(61916);
let ey = (0, b.Ld)();
function ev() {
    return (0, l.jsx)("div", {
        className: Z.wV,
        children: (0, l.jsx)(c.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: z.intl.string(z.t.V6nAfF),
        }),
    });
}
function ej(e) {
    let {
            message: n,
            initialSelectedDestinations: b = [],
            forwardOptions: M,
            onClose: P,
            onRequestSent: F,
            customTitle: N,
            customSubtitle: D,
            customPreview: T,
            customSendHandler: O,
            customValidateDestination: L,
            additionalActions: V,
            channelFilter: G,
            source: H,
            ...Q
        } = e,
        K = n?.channel_id,
        Y = n?.id,
        ee = a.useMemo(() => (null != K ? (0, R._5)(K) : void 0), [K]),
        [en, et] = a.useState(!1),
        el = (0, o.bG)(
            [_.A],
            () => ("checkpoint" === H ? n : null != n ? (_.A.getMessage(n.channel_id, n.id) ?? n) : void 0),
            [n, H],
        ),
        ea = (0, o.bG)([k.A], () => (null != K ? k.A.getChannel(K) : void 0), [K]),
        ei = (0, B.Jf)(),
        es = (0, B.nL)(),
        er = a.useRef(0),
        eo = a.useRef(0),
        [eu, ec] = a.useState(b),
        ed = eu.length,
        eh = ed >= 5,
        em = (0, U.QK)(eu),
        eg = (0, U.l2)(eu),
        ef = (0, o.bG)([I.A], () => (null != el ? I.A.getDraft(el.channel_id, I.C.ForwardContextMessage) : "")),
        [ex, eC] = a.useState(() => (0, w.ur)(ef)),
        ep = (0, U.M6)(eu),
        eA = (0, v.A)(),
        [ej, eR] = a.useState(""),
        { results: eS, updateSearchText: ek } = (0, S.R)({
            selectedDestinations: eu,
            originDestination: ee,
            includeMissingDMs: !0,
            channelFilter: G,
        }),
        eI = a.useCallback(
            (e) => {
                (eR(e), ek(e));
            },
            [ek],
        ),
        e_ = a.useCallback(
            (e) => {
                (eI(e), (eo.current += 1), "" !== e && null != K && null != Y && es(K, Y));
            },
            [K, Y, es, eI],
        ),
        eE = a.useCallback(() => {
            eI("");
        }, [eI]),
        eM = a.useCallback(async () => {
            (null != K &&
                null != Y &&
                (0, B.hH)({
                    channelId: K,
                    messageId: Y,
                    numDestinationChanges: er.current,
                    numQueryChanges: eo.current,
                }),
                await P());
        }, [K, Y, P]),
        eP = a.useRef(null);
    a.useEffect(() => {
        "" === ej && eP.current?.focus();
    }, [ej]);
    let eF = a.useMemo(
            () =>
                (0, i.throttle)(
                    () => {
                        (0, d.P0)((0, h.o)(z.intl.string(z.t.kwmYkt), m.Ck.FORWARD));
                    },
                    3e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        eN = a.useCallback(
            (e, n) => {
                null != K && null != Y && ei(K, Y, "" !== ej);
                let t = !eu.some((n) => {
                    let { type: t, id: l } = n;
                    return t === e.type && l === e.id;
                });
                if (!t || !eh) {
                    if (null != n) {
                        let e = t ? z.t.u2qHzE : z.t["+yF0ds"];
                        u.O.announce(z.intl.formatToPlainString(e, { name: n, count: t ? ed + 1 : ed - 1 }), "polite");
                    }
                    ((er.current += 1),
                        t && eI(""),
                        ec((n) => {
                            let t = n.findIndex((n) => {
                                let { type: t, id: l } = n;
                                return t === e.type && l === e.id;
                            });
                            if (-1 === t) return [e, ...n];
                            let l = [...n];
                            return (l.splice(t, 1), l);
                        }));
                }
            },
            [K, ed, eh, Y, ej, eu, eI, ei],
        ),
        eD = a.useCallback(
            async function (e) {
                let {
                    withMessage: a,
                    transitionToDestination: i,
                    closeAfterSend: s,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null != O)
                    return void (await O(e, { withMessage: a, transitionToDestination: i, closeAfterSend: s }, et));
                if (null == K || null == Y) return void (0, d.P0)((0, h.o)(z.intl.string(z.t.R0RpRX), m.Ck.FAILURE));
                let r = _.A.getMessage(K, Y) ?? n;
                if (null == r) return void (0, d.P0)((0, h.o)(z.intl.string(z.t.R0RpRX), m.Ck.FAILURE));
                et(!0);
                let o = (await Promise.all(e.map(R.pk))).filter(E.Vq);
                if (
                    (function (e, n) {
                        if (!X.default.getCurrentUser()?.isStaff()) return !1;
                        let t = k.A.getChannel(e.channel_id);
                        return (
                            null != t &&
                            !!J(t) &&
                            n.some((e) => {
                                let n = k.A.getChannel(e);
                                return !(null == n || n.isPrivate()) && !J(n);
                            })
                        );
                    })(r, o) &&
                    !(await new Promise((e) => {
                        (0, g.openModalLazy)(async () => {
                            let { default: n } = await t.e("351954").then(t.bind(t, 156073));
                            return (t) => (0, l.jsx)(n, { ...t, onConfirm: () => e(!0), onBack: () => e(!1) });
                        });
                    }))
                )
                    return void et(!1);
                (s && (0, q.Be)(),
                    F?.(),
                    i &&
                        (await y.A.fetchMessages({ channelId: o[0] }),
                        (0, j.iN)(o[0], { openTextInVoiceIfVoiceChannel: !0 })));
                let u = await W.sendForwards(r, o, { ...M, withMessage: a }),
                    c = o.some((e) => {
                        let n = k.A.getChannel(e);
                        return null != n && n.rateLimitPerUser > 0;
                    });
                if (
                    u.every((e) => {
                        let { status: n } = e;
                        return "fulfilled" === n;
                    })
                ) {
                    ((0, B.TA)({
                        channelId: K,
                        messageId: Y,
                        hasError: !1,
                        hasContextMessage: null != a && "" !== a,
                        numDestinations: o.length,
                        numDestinationChanges: er.current,
                        numQueryChanges: eo.current,
                        anyDestinationHasSlowmode: c,
                    }),
                        eF());
                    return;
                }
                (0, B.TA)({
                    channelId: K,
                    messageId: Y,
                    hasError: !0,
                    hasContextMessage: null != a && "" !== a,
                    numDestinations: o.length,
                    numDestinationChanges: er.current,
                    numQueryChanges: eo.current,
                    anyDestinationHasSlowmode: c,
                });
                let f = e.filter((e, n) => "rejected" === u[n].status);
                (0, q.vK)({ message: r, failedDestinations: f, forwardOptions: M });
            },
            [K, M, Y, n, F, eF, O],
        ),
        eT = a.useCallback(
            (e) => {
                eD(eu, { withMessage: e, transitionToDestination: 1 === eu.length, closeAfterSend: !0 });
            },
            [eD, eu],
        ),
        eO = a.useCallback(() => {
            (null != el && p.A.clearDraft(el.channel_id, I.C.ForwardContextMessage), eT(ex.textValue));
        }, [el, ex.textValue, eT]),
        eL = (0, eb.s)({
            rowData: eS,
            message: el,
            originChannel: ea,
            selectedDestinations: eu,
            handleToggleDestination: eN,
            disableSelection: eh,
            validateDestination: L,
        }),
        eV = a.useRef(null),
        eU = (0, A.A)("forward-modal", eV),
        eG = a.useMemo(
            () =>
                eS.length > 0
                    ? eL
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, l.jsx)(ev, {}), rowHeight: 72 },
            [eS, eL],
        ),
        eH = ed <= 1 ? z.intl.string(z.t.TXNS7S) : z.intl.formatToPlainString(z.t.jWtYUm, { count: ed });
    return (0, l.jsx)(s.hD, {
        navigator: eU,
        children: (0, l.jsx)(s.PR, {
            children: (e) => {
                let { ref: n, ...t } = e;
                return (0, l.jsx)(r.Modal, {
                    ...Q,
                    onClose: eM,
                    title: N ?? z.intl.string(z.t["+SkRRj"]),
                    subtitle:
                        D ??
                        (eh ? z.intl.formatToPlainString(z.t["3Fbkir"], { count: 5 }) : z.intl.string(z.t["VA+btJ"])),
                    input: (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(f.I, {
                                ref: eP,
                                query: ej,
                                onChange: e_,
                                onClear: eE,
                                placeholder: z.intl.string(z.t["5h0QOP"]),
                                "aria-label": z.intl.string(z.t["5h0QOP"]),
                                autoFocus: !0,
                            }),
                            eg.length > 0 &&
                                (0, l.jsx)(x.A, {
                                    id: ey,
                                    children: z.intl.formatToPlainString(z.t["5X5Oe2"], { names: eg.join(", ") }),
                                }),
                        ],
                    }),
                    preview:
                        T ??
                        (null != el &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(ew, { message: el, forwardOptions: M, channel: em }),
                                    ep.length > 0 &&
                                        ex.textValue.length > 0 &&
                                        (0, l.jsx)(c.E, {
                                            className: Z.Lt,
                                            variant: "text-sm/normal",
                                            color: "text-feedback-warning",
                                            children: z.intl.format(z.t.xJFpij, {
                                                count: ep.length,
                                                channelNames: ep.join(", "),
                                            }),
                                        }),
                                ],
                            })),
                    actionBarInput: (0, l.jsx)($, {
                        message: el,
                        canSend: ed > 0,
                        selectedDestinations: eu,
                        isSending: en,
                        onSend: eT,
                        inputValue: ex,
                        setInputValue: eC,
                    }),
                    actions: [
                        ...(V ?? []),
                        {
                            variant: "primary",
                            text: eH,
                            "aria-describedby": eg.length > 0 ? ey : void 0,
                            onClick: eO,
                            disabled: ed <= 0 || ex.textValue.length > eA,
                            loading: en,
                            icon: C.SendMessageIcon,
                            iconPosition: "end",
                        },
                    ],
                    actionBarInputLayout: "chat-input",
                    listProps: {
                        ...eG,
                        ...t,
                        innerRole: void 0,
                        ref: (e) => {
                            ((eV.current = e), (n.current = e?.getScrollerNode() ?? null));
                        },
                    },
                });
            },
        }),
    });
}
