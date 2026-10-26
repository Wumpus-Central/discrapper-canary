t.d(n, { ForwardModal: () => eN });
var l = t(477900),
    a = t(582128),
    i = t(435558),
    s = t(837381),
    r = t(17928),
    o = t(189213),
    u = t(765178),
    c = t(834730),
    d = t(858899),
    h = t(292801),
    m = t(661531),
    g = t(192308),
    f = t(683438),
    x = t(140735),
    C = t(559647),
    A = t(465532),
    p = t(928039),
    w = t(408018),
    v = t(915089),
    j = t(547),
    b = t(135621),
    y = t(378570),
    S = t(446244),
    k = t(151054),
    _ = t(734057),
    R = t(31717),
    I = t(232835),
    E = t(403362),
    N = t(975975),
    P = t.n(N),
    M = t(762230),
    F = t(665260),
    D = t(148494),
    O = t(596720),
    T = t(451909),
    V = t(677413),
    L = t(576705),
    G = t(473511),
    U = t(652215),
    H = t(381941);
let B = {
    async sendForward(e, n, t) {
        let l = _.A.getChannel(n),
            a = _.A.getChannel(e.channel_id),
            i = t?.isICYMIGameContentForwarding ? O.VL : a?.guild_id;
        if (null == a && null == i) throw Error("Unable to find original channel for message");
        if (null == l) throw Error("Unable to find destination channel for message");
        let s = T.Ay.parse(l, ""),
            r = {
                guild_id: i,
                channel_id: e.channel_id,
                message_id: e.id,
                type: M.S.FORWARD,
                forward_only:
                    t?.onlyAttachmentIds != null || t?.onlyEmbedIndices != null
                        ? { attachment_ids: t.onlyAttachmentIds, embed_indices: t.onlyEmbedIndices }
                        : void 0,
            },
            o = 0,
            u = t?.withMessage;
        if (null != u) {
            let [e, n] = (0, V.Ay)(u);
            e && ((u = n), (o = (0, F.UI)(o, U.pr7.SUPPRESS_NOTIFICATIONS)));
        }
        (await D.A.sendMessage(l.id, s, !1, {
            messageReference: r,
            location: H.Hx.FORWARDING,
            eagerDispatch: !1,
            flags: o,
        }),
            null == u ||
                "" === u ||
                (0, G.lP)(l, L.A) ||
                (await D.A.sendMessage(l.id, T.Ay.parse(l, u), !1, { location: H.Hx.FORWARDING, flags: o })));
    },
    sendForwards: (e, n, t) => P()(n.map((n) => B.sendForward(e, n, t))),
};
var W = t(530912),
    Q = t(71393),
    K = t(287809);
function X(e) {
    if (!e.isPrivate()) {
        let n = Q.A.getGuild(e.guild_id);
        return null != n && n.features.has(U.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let n = K.default.getUser(e);
        return null != n && n.isStaff();
    });
}
var Y = t(355622),
    z = t(845207),
    J = t(294454),
    q = t(105292),
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
        c = (0, b.A)(),
        d = (0, G.QK)(i),
        h = (0, W.VF)(),
        { textValue: m, richValue: g } = o,
        [f, x] = a.useState(!1),
        C = a.useCallback(() => x(!0), []),
        p = a.useCallback(() => x(!1), []),
        w = a.useCallback(
            (e, t, l) => {
                (u({ textValue: t, richValue: l }),
                    null != n && (A.A.saveDraft(n.channel_id, t, R.C.ForwardContextMessage), h(n.channel_id, n.id)));
            },
            [h, n, u],
        ),
        v = a.useCallback(() => {
            (null != n && A.A.clearDraft(n.channel_id, R.C.ForwardContextMessage), r(m));
        }, [n, r, m]),
        j = a.useCallback(
            () => (s || !t || m.length > c || v(), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
            [v, m, c, t, s],
        );
    return (0, l.jsx)(z.Ay, {
        innerClassName: Z.OG,
        onChange: w,
        placeholder: q.intl.string(q.t.ZroO3G),
        channel: d,
        textValue: m,
        richValue: g,
        type: Y.oU.FORWARD_MESSAGE_INPUT,
        onBlur: p,
        onFocus: C,
        focused: f,
        onSubmit: j,
        parentModalKey: J.aU,
        autoCompletePosition: "bottom",
        emojiPickerCloseOnModalOuterClick: !0,
        disableThemedBackground: !0,
    });
}
var ee = t(503698),
    en = t.n(ee),
    et = t(477262),
    el = t(65154),
    ea = t(191023),
    ei = t(588975),
    es = t(819648),
    er = t(602853),
    eo = t(606348),
    eu = t(957806);
function ec(e) {
    let { checkpointData: n } = e,
        t = n.cardId ?? 0,
        a = (0, er.r)(eo.f[t].primaryColor).hex();
    return (0, l.jsx)("img", { alt: "", style: { backgroundColor: a }, width: 56, height: 56, src: (0, eu.OW)(t) });
}
var ed = t(366056),
    eh = t(627369),
    em = t(142617),
    eg = t(259204),
    ef = t(663302);
function ex(e) {
    let { checkpointData: n } = e,
        t = (0, em.Hd)("Checkpoint2026ForwardPreview"),
        { character: a } = n,
        { secondaryBackgroundColor: i } = (0, eh.j)(a);
    return t
        ? (0, l.jsx)("div", {
              className: ef.V,
              style: { backgroundColor: i },
              children:
                  null != a
                      ? (0, l.jsx)(eg.A, { character: a, size: 56, className: ef.G })
                      : (0, l.jsx)(ed.M, { color: m.A.colors.ICON_OVERLAY_DARK }),
          })
        : null;
}
var eC = t(309913);
function eA(e) {
    let { checkpointData: n } = e;
    switch (n.version) {
        case eC.wk.V2025:
            return (0, l.jsx)(ec, { checkpointData: n });
        case eC.wk.V2026:
            return (0, l.jsx)(ex, { checkpointData: n });
        default:
            return null;
    }
}
var ep = t(573435),
    ew = t(619517),
    ev = t(127038),
    ej = t(521981),
    eb = t(438729),
    ey = t(885386),
    eS = t(659674),
    ek = t(739126);
function e_(e) {
    let { message: n, forwardOptions: t, channel: s } = e,
        o = ey.hH.useSetting(),
        {
            attachments: u,
            embeds: d,
            hasContent: h,
            contentMessage: g,
        } = (function (e) {
            let { message: n, channel: t, forwardOptions: l } = e,
                a = l?.onlyAttachmentIds,
                i = l?.onlyEmbedIndices,
                s = n.messageSnapshots[0]?.message ?? n,
                o = s.attachments;
            null != a ? (o = s.attachments.filter((e) => a.includes(e.id))) : null != i && (o = []);
            let u = [];
            return (
                (0, r.bG)([L.A], () => null != t && !(0, eS.fS)(t, L.A) && (0, eS.ax)(n)) ||
                    ((u = s.embeds),
                    null != i ? (u = s.embeds.filter((e, n) => i.includes(n))) : null != a && (u = [])),
                (null != i || ("" === s.content && u.length > 0)) &&
                    (s = s.set("content", u.map((e) => e.url).join("\n"))),
                "" === s.content &&
                    s.embeds[0]?.rawDescription != null &&
                    (s = s.set("content", s.embeds[0].rawDescription)),
                { attachments: o, embeds: u, hasContent: "" !== s.content && null == a, contentMessage: s }
            );
        })({ message: n, channel: s, forwardOptions: t }),
        f = (0, es._S)(g),
        x = a.useMemo(
            () =>
                h
                    ? (0, ej.Ay)(n, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          allowGameMentions: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: g,
                      }).content
                    : null,
            [g, h, n],
        ),
        C = u.length,
        A = null,
        p = null,
        w = null;
    if (C > 0 || d.length > 0) {
        let e = (0, i.countBy)(u, (e) => (0, ev.NI)(e, !0)),
            n = e.IMAGE ?? 0,
            t = e.VIDEO ?? 0;
        (n > 0 && t > 0
            ? ((A = q.intl.formatToPlainString(q.t.Lr0Top, { image_count: n, video_count: t })), (p = et.s))
            : t > 0
              ? ((A = q.intl.formatToPlainString(q.t.SJ6pPX, { count: t })), (p = el.S))
              : n > 0
                ? ((A = q.intl.formatToPlainString(q.t.h4pFfU, { count: n })), (p = 1 === n ? ea.ImageIcon : et.s))
                : ((A = q.intl.formatToPlainString(q.t["89ihS8"], { count: C })), (p = ei.P)),
            t > 0 && C === t
                ? (w = (0, l.jsxs)("div", {
                      className: en()(ek.cR, ek.JZ),
                      children: [
                          (0, l.jsx)(ew.Ay, { className: ek.xn, src: u[0].proxy_url, width: 56, height: 56 }),
                          (0, l.jsx)(el.S, { className: ek.uZ, size: "md", color: "white" }),
                      ],
                  }))
                : C > 0
                  ? (w = (0, l.jsx)("div", {
                        className: ek.cR,
                        children: (0, l.jsx)(ew.Ay, { src: u[0].proxy_url, width: 56, height: 56 }),
                    }))
                  : d[0]?.thumbnail?.proxyURL != null &&
                    (w = (0, l.jsx)("div", {
                        className: ek.cR,
                        children: (0, l.jsx)(ew.Ay, { src: d[0].thumbnail.proxyURL, width: 56, height: 56 }),
                    })));
    }
    return (
        C > 1 &&
            null != w &&
            (w = (0, l.jsxs)("div", {
                className: ek.EW,
                children: [
                    (0, l.jsx)(ep.Ay, {
                        mask: ep.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: w,
                    }),
                    (0, l.jsxs)(c.E, {
                        className: ek.mB,
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: ["+", C - 1],
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: ek.sq,
            children: [
                (0, l.jsxs)("div", {
                    className: ek.FG,
                    children: [
                        null != f && (0, l.jsx)(c.E, { variant: "text-md/medium", children: (0, es.b5)(f) }),
                        h &&
                            (0, l.jsx)(eb.Ay, {
                                className: en()(ek.vp, C > 0 && ek.NL),
                                message: n,
                                content: x,
                                compact: o,
                            }),
                        C > 0 &&
                            (0, l.jsxs)("div", {
                                className: ek.kp,
                                children: [
                                    null != p &&
                                        (0, l.jsx)(p, {
                                            size: "custom",
                                            width: h ? 18 : 20,
                                            color: m.A.colors.TEXT_MUTED,
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
                w,
                null != f && (0, l.jsx)("div", { className: ek.cR, children: (0, l.jsx)(eA, { checkpointData: f }) }),
            ],
        })
    );
}
var eR = t(61916);
let eI = (0, v.Ld)();
function eE() {
    return (0, l.jsx)("div", {
        className: Z.wV,
        children: (0, l.jsx)(c.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: q.intl.string(q.t.V6nAfF),
        }),
    });
}
function eN(e) {
    let {
            message: n,
            initialSelectedDestinations: v = [],
            forwardOptions: N,
            onClose: P,
            onRequestSent: M,
            customTitle: F,
            customSubtitle: D,
            customPreview: O,
            customSendHandler: T,
            customValidateDestination: V,
            additionalActions: L,
            channelFilter: U,
            source: H,
            ...Q
        } = e,
        Y = n?.channel_id,
        z = n?.id,
        ee = a.useMemo(() => (null != Y ? (0, S._5)(Y) : void 0), [Y]),
        [en, et] = a.useState(!1),
        el = (0, r.bG)(
            [I.A],
            () => ("checkpoint" === H ? n : null != n ? (I.A.getMessage(n.channel_id, n.id) ?? n) : void 0),
            [n, H],
        ),
        ea = (0, r.bG)([_.A], () => (null != Y ? _.A.getChannel(Y) : void 0), [Y]),
        ei = (0, W.Jf)(),
        es = (0, W.nL)(),
        er = a.useRef(0),
        eo = a.useRef(0),
        [eu, ec] = a.useState(v),
        ed = eu.length,
        eh = ed >= 5,
        em = (0, G.QK)(eu),
        eg = (0, G.l2)(eu),
        ef = (0, r.bG)([R.A], () => (null != el ? R.A.getDraft(el.channel_id, R.C.ForwardContextMessage) : "")),
        [ex, eC] = a.useState(() => (0, w.ur)(ef)),
        eA = (0, G.M6)(eu),
        ep = (0, b.A)(),
        [ew, ev] = a.useState(""),
        { results: ej, updateSearchText: eb } = (0, k.R)({
            selectedDestinations: eu,
            originDestination: ee,
            includeMissingDMs: !0,
            channelFilter: U,
        }),
        ey = a.useCallback(
            (e) => {
                (ev(e), eb(e));
            },
            [eb],
        ),
        eS = a.useCallback(
            (e) => {
                (ey(e), (eo.current += 1), "" !== e && null != Y && null != z && es(Y, z));
            },
            [Y, z, es, ey],
        ),
        ek = a.useCallback(() => {
            ey("");
        }, [ey]),
        eN = a.useCallback(async () => {
            (null != Y &&
                null != z &&
                (0, W.hH)({
                    channelId: Y,
                    messageId: z,
                    numDestinationChanges: er.current,
                    numQueryChanges: eo.current,
                }),
                await P());
        }, [Y, z, P]),
        eP = a.useRef(null);
    a.useEffect(() => {
        "" === ew && eP.current?.focus();
    }, [ew]);
    let eM = a.useMemo(
            () =>
                (0, i.throttle)(
                    () => {
                        (0, d.P0)({
                            text: q.intl.string(q.t.kwmYkt),
                            icon: h.t,
                            iconColor: m.A.colors.ICON_FEEDBACK_POSITIVE,
                        });
                    },
                    3e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        eF = a.useCallback(
            (e, n) => {
                null != Y && null != z && ei(Y, z, "" !== ew);
                let t = !eu.some((n) => {
                    let { type: t, id: l } = n;
                    return t === e.type && l === e.id;
                });
                if (!t || !eh) {
                    if (null != n) {
                        let e = t ? q.t.u2qHzE : q.t["+yF0ds"];
                        u.O.announce(q.intl.formatToPlainString(e, { name: n, count: t ? ed + 1 : ed - 1 }), "polite");
                    }
                    ((er.current += 1),
                        t && ey(""),
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
            [Y, ed, eh, z, ew, eu, ey, ei],
        ),
        eD = a.useCallback(
            async function (e) {
                let {
                    withMessage: a,
                    transitionToDestination: i,
                    closeAfterSend: s,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null != T)
                    return void (await T(e, { withMessage: a, transitionToDestination: i, closeAfterSend: s }, et));
                if (null == Y || null == z)
                    return void (0, d.P0)({ text: q.intl.string(q.t.R0RpRX), variant: "critical" });
                let r = I.A.getMessage(Y, z) ?? n;
                if (null == r) return void (0, d.P0)({ text: q.intl.string(q.t.R0RpRX), variant: "critical" });
                et(!0);
                let o = (await Promise.all(e.map(S.pk))).filter(E.Vq);
                if (
                    (function (e, n) {
                        if (!K.default.getCurrentUser()?.isStaff()) return !1;
                        let t = _.A.getChannel(e.channel_id);
                        return (
                            null != t &&
                            !!X(t) &&
                            n.some((e) => {
                                let n = _.A.getChannel(e);
                                return !(null == n || n.isPrivate()) && !X(n);
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
                (s && (0, J.Be)(),
                    M?.(),
                    i &&
                        (await j.A.fetchMessages({ channelId: o[0] }),
                        (0, y.iN)(o[0], { openTextInVoiceIfVoiceChannel: !0 })));
                let u = await B.sendForwards(r, o, { ...N, withMessage: a }),
                    c = o.some((e) => {
                        let n = _.A.getChannel(e);
                        return null != n && n.rateLimitPerUser > 0;
                    });
                if (
                    u.every((e) => {
                        let { status: n } = e;
                        return "fulfilled" === n;
                    })
                ) {
                    ((0, W.TA)({
                        channelId: Y,
                        messageId: z,
                        hasError: !1,
                        hasContextMessage: null != a && "" !== a,
                        numDestinations: o.length,
                        numDestinationChanges: er.current,
                        numQueryChanges: eo.current,
                        anyDestinationHasSlowmode: c,
                    }),
                        eM());
                    return;
                }
                (0, W.TA)({
                    channelId: Y,
                    messageId: z,
                    hasError: !0,
                    hasContextMessage: null != a && "" !== a,
                    numDestinations: o.length,
                    numDestinationChanges: er.current,
                    numQueryChanges: eo.current,
                    anyDestinationHasSlowmode: c,
                });
                let h = e.filter((e, n) => "rejected" === u[n].status);
                (0, J.vK)({ message: r, failedDestinations: h, forwardOptions: N });
            },
            [Y, N, z, n, M, eM, T],
        ),
        eO = a.useCallback(
            (e) => {
                eD(eu, { withMessage: e, transitionToDestination: 1 === eu.length, closeAfterSend: !0 });
            },
            [eD, eu],
        ),
        eT = a.useCallback(() => {
            (null != el && A.A.clearDraft(el.channel_id, R.C.ForwardContextMessage), eO(ex.textValue));
        }, [el, ex.textValue, eO]),
        eV = (0, eR.s)({
            rowData: ej,
            message: el,
            originChannel: ea,
            selectedDestinations: eu,
            handleToggleDestination: eF,
            disableSelection: eh,
            validateDestination: V,
        }),
        eL = a.useRef(null),
        eG = (0, p.A)("forward-modal", eL),
        eU = a.useMemo(
            () =>
                ej.length > 0
                    ? eV
                    : { sections: [1], sectionHeight: 0, renderRow: () => (0, l.jsx)(eE, {}), rowHeight: 72 },
            [ej, eV],
        ),
        eH = ed <= 1 ? q.intl.string(q.t.TXNS7S) : q.intl.formatToPlainString(q.t.jWtYUm, { count: ed });
    return (0, l.jsx)(s.hD, {
        navigator: eG,
        children: (0, l.jsx)(s.PR, {
            children: (e) => {
                let { ref: n, ...t } = e;
                return (0, l.jsx)(o.a, {
                    ...Q,
                    onClose: eN,
                    title: F ?? q.intl.string(q.t["+SkRRj"]),
                    subtitle:
                        D ??
                        (eh ? q.intl.formatToPlainString(q.t["3Fbkir"], { count: 5 }) : q.intl.string(q.t["VA+btJ"])),
                    input: (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(f.I, {
                                ref: eP,
                                query: ew,
                                onChange: eS,
                                onClear: ek,
                                placeholder: q.intl.string(q.t["5h0QOP"]),
                                "aria-label": q.intl.string(q.t["5h0QOP"]),
                                autoFocus: !0,
                            }),
                            eg.length > 0 &&
                                (0, l.jsx)(x.A, {
                                    id: eI,
                                    children: q.intl.formatToPlainString(q.t["5X5Oe2"], { names: eg.join(", ") }),
                                }),
                        ],
                    }),
                    preview:
                        O ??
                        (null != el &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(e_, { message: el, forwardOptions: N, channel: em }),
                                    eA.length > 0 &&
                                        ex.textValue.length > 0 &&
                                        (0, l.jsx)(c.E, {
                                            className: Z.Lt,
                                            variant: "text-sm/normal",
                                            color: "text-feedback-warning",
                                            children: q.intl.format(q.t.xJFpij, {
                                                count: eA.length,
                                                channelNames: eA.join(", "),
                                            }),
                                        }),
                                ],
                            })),
                    actionBarInput: (0, l.jsx)($, {
                        message: el,
                        canSend: ed > 0,
                        selectedDestinations: eu,
                        isSending: en,
                        onSend: eO,
                        inputValue: ex,
                        setInputValue: eC,
                    }),
                    actions: [
                        ...(L ?? []),
                        {
                            variant: "primary",
                            text: eH,
                            "aria-describedby": eg.length > 0 ? eI : void 0,
                            onClick: eT,
                            disabled: ed <= 0 || ex.textValue.length > ep,
                            loading: en,
                            icon: C.SendMessageIcon,
                            iconPosition: "end",
                        },
                    ],
                    actionBarInputLayout: "chat-input",
                    listProps: {
                        ...eU,
                        ...t,
                        innerRole: void 0,
                        ref: (e) => {
                            ((eL.current = e), (n.current = e?.getScrollerNode() ?? null));
                        },
                    },
                });
            },
        }),
    });
}
