(n.d(t, { A: () => nJ }), n(938796));
var l = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(607399),
    d = n(478437),
    u = n(665260),
    h = n(855986),
    m = n(265872),
    g = n(568602),
    p = n(707554),
    A = n(140735),
    f = n(192308),
    C = n(465532),
    E = n(138399),
    x = n(414798),
    I = n(608299),
    S = n(134357),
    y = n(820284),
    b = n(955572),
    _ = n(775602),
    j = n(149468),
    v = n(211401),
    T = n(989837),
    N = n(500049),
    M = n(721768),
    R = n(151596),
    D = n(842209),
    k = n(861382),
    L = n(392054),
    P = n(168186),
    O = n(545152),
    G = n(972995),
    U = n(355622),
    w = n(408018);
(n(321073), n(323874), n(14289), n(35956));
var F = n(156150),
    H = n(115560),
    B = n(646514),
    K = n(717421),
    V = n(559106),
    z = n(821609),
    W = n(834730),
    $ = n(559647),
    q = n(163328),
    Z = n(165862),
    J = n(477782),
    X = n(241326),
    Y = n(81369),
    Q = n(866665),
    ee = n(939249),
    et = n(750943),
    en = n(155718),
    el = n(793574),
    ei = n(688810),
    es = n(152210);
let ea = (0, n(839214).D)(() => ({ channelDrafts: {} }));
function er(e, t) {
    ea.setState((n) => {
        let l = n.channelDrafts[e];
        return {
            channelDrafts: {
                ...n.channelDrafts,
                [e]: { heroUploadId: null, title: "", publish: !0, createThread: !0, ...l, ...t },
            },
        };
    });
}
var eo = n(598071),
    ec = n(101555),
    ed = n(759521),
    eu = n(703007),
    eh = n(2553),
    em = n(946274),
    eg = n(489414),
    ep = n(274652),
    eA = n(135621),
    ef = n(406704),
    eC = n(253932),
    eE = n(31717),
    ex = n(638128),
    eI = n(522602),
    eS = n(515718),
    ey = n(723702),
    eb = n(518960),
    e_ = n(486319),
    ej = n(719442),
    ev = n(267102),
    eT = n(787564),
    eN = n(323350),
    eM = n(339200),
    eR = n(68059),
    eD = n(551483);
let ek = {
    ...U.oU.GENERIC_RICH_TEXTAREA,
    markdown: { disableBlockQuotes: !0, disableCodeBlocks: !0, disableInlineCode: !0 },
};
function eL(e) {
    let {
            channel: t,
            className: n,
            containerClassName: s,
            placeholder: a,
            spellCheck: r,
            title: o,
            onChange: c,
            onPlainTextChange: d,
            onEnter: u,
        } = e,
        h = i.useContext(ev.Ay),
        m = i.useRef(o),
        [g] = i.useState(() => {
            let e = (0, ej.ie)();
            return (
                (e.children = (0, w.x7)(o)),
                (e.selection = { anchor: eD.K, focus: eD.K }),
                (0, eR.a)({
                    editor: e,
                    chatInputType: ek,
                    channel: t,
                    windowContext: h,
                    previewMarkdown: !0,
                    updateState: (e, t, n) => {
                        let { value: l, selection: i } = n;
                        (void 0 !== l && (e.children = l), null != i && (e.selection = i), e.onChange());
                    },
                }),
                !(function (e) {
                    let { insertText: t } = e;
                    ((e.insertBreak = () => {}),
                        (e.insertSoftBreak = () => {}),
                        (e.insertText = (n) => {
                            let l = n.replace(/\r\n|\r|\n/g, " ");
                            (0, eN.WO)(eM.VW.richValue(e), { mode: "raw" }).length -
                                (null != e.selection && ej.Q6.isExpanded(e.selection)
                                    ? (0, eN.WO)(eM.VW.richValue(e), { mode: "raw", range: e.selection }).length
                                    : 0) +
                                l.length <=
                                140 && t(l);
                        }));
                })(e),
                e
            );
        });
    (i.useLayoutEffect(() => {
        g.onChange();
    }, [g]),
        i.useEffect(() => {
            o !== m.current &&
                ((m.current = o),
                (g.children = (0, w.x7)(o)),
                (g.selection = { anchor: eD.K, focus: eD.K }),
                g.onChange());
        }, [g, o]));
    let p = i.useCallback(
            (e) => {
                let t = (0, eN.WO)(e, { mode: "raw" }),
                    n = (0, eN.WO)(e, { mode: "plain" }),
                    l = t !== m.current;
                ((m.current = t), d(n), l && c(t));
            },
            [c, d],
        ),
        A = i.useCallback(
            (e) => {
                "Enter" === e.key && (e.preventDefault(), e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || u());
            },
            [u],
        );
    return (0, l.jsx)(eT.A, {
        editor: g,
        channelId: t.id,
        guildId: t.guild_id,
        className: n,
        containerClassName: s,
        placeholder: a,
        spellCheck: r,
        "aria-multiline": !1,
        onChange: p,
        onKeyDown: A,
    });
}
var eP = n(84046),
    eO = n(12764),
    eG = n(989161),
    eU = n(851023),
    ew = n(102077),
    eF = n(652215);
n(827669);
var eH = n(294920),
    eB = n(478644),
    eK = n(792996),
    eV = n(806686),
    ez = n(495088);
function eW(e, t, n) {
    return {
        media: { url: e, proxyUrl: e, loadingState: en.TD.UNKNOWN, flags: 0 },
        description: t ?? void 0,
        spoiler: n,
    };
}
let e$ = i.memo(function (e) {
    let t,
        n,
        { ref: s, ...r } = e,
        {
            textValue: c,
            richValue: d,
            className: u,
            id: g,
            required: p,
            disabled: A,
            accessibilityLabel: f,
            channel: C,
            type: E,
            focused: x,
            onChange: S,
            onResize: y,
            onBlur: b,
            onFocus: j,
            onKeyDown: v,
            onSubmit: T,
            promptToUpload: N,
            canMentionRoles: M,
            canMentionChannels: R,
            maxCharacterCount: D,
            placeholder: L,
            "aria-describedby": P,
            "aria-labelledby": O,
            setEditorRef: G,
            autoCompletePosition: w,
            disableThemedBackground: H = !1,
            emojiPickerCloseOnModalOuterClick: B,
            parentModalKey: Z,
        } = r,
        J = ea.useField("channelDrafts")[C.id],
        X = J?.title ?? "",
        Y = J?.heroUploadId,
        Q = (0, h.bG)([eI.A], () => (null != Y ? eI.A.getUpload(C.id, Y, eE.C.ChannelMessage) : null)),
        ee = Q?.item,
        et = null != ee && ee.platform === ep.x.WEB ? ee.file : null,
        ec = J?.publish ?? !0,
        eu = J?.createThread ?? !0;
    o()(null != E, "chat input type must be set");
    let { analyticsLocations: eh } = (0, ei.Ay)(el.A.CHANNEL_TEXT_AREA),
        em = (0, eG.L0)(s),
        eS = i.useRef(null),
        eb = i.useRef(null),
        ej = (0, eG.Wh)(em, eb),
        ev = i.useRef(null),
        eT = i.useRef(null),
        eN = i.useRef(X);
    G?.(eb.current);
    let { activeCommand: eM } = (0, h.cf)([k.A], () => ({
            activeCommand: E.commands?.enabled ? k.A.getActiveCommand(C.id) : null,
            activeCommandSection: E.commands?.enabled ? k.A.getActiveCommandSection(C.id) : null,
        })),
        {
            isLurking: eR,
            isPendingMember: eD,
            disabled: ek,
            canAttachFiles: eU,
            canEveryoneSendMessages: eF,
        } = (0, eG.Sk)(C, E, eM, A),
        eB = !eC.D_.useSetting() && !(0, ey.Ct)() && null != window.ResizeObserver,
        e$ = !eB || !E.commands?.enabled || !x || "/" !== c,
        eY = (0, eA.A)(),
        { fontSize: eQ } = (0, h.cf)([_.Ay], () => ({
            fontSize: _.Ay.fontSize,
            isSubmitButtonEnabled: _.Ay.isSubmitButtonEnabled,
        })),
        e0 = (0, h.bG)([ex.A], () => ex.A.isEnabled());
    i.useEffect(() => {
        eB || (eN.current = X);
    }, [X, eB]);
    let e1 = i.useCallback((e) => er(C.id, { title: e }), [C.id]),
        e2 = i.useCallback((e) => {
            eN.current = e;
        }, []),
        e3 = i.useCallback(() => eb.current?.focus(), []),
        e4 = (0, ef.n)(C);
    (0, eG.N_)(E, ek, C.id);
    let { eventEmitter: e7, handleEditorSelectionChanged: e5 } = (0, eG.ml)(eb, c, d),
        e8 = i.useCallback(
            (e) => {
                function t(e) {
                    return (
                        e.shouldClear &&
                            (er(C.id, { title: "", heroUploadId: null }), (eN.current = ""), eb.current?.blur()),
                        e
                    );
                }
                let n = [],
                    l = `${
                        X.length > 0
                            ? `# ${X}
`
                            : ""
                    }${e.value}`,
                    i = (
                        eN.current.length > 0
                            ? eN.current
                            : e.value.length > 0
                              ? e.value
                              : eK.intl.string(eK.t["7Xm5QI"])
                    ).slice(0, 100),
                    s = eI.A.getUploads(C.id, eE.C.ChannelMessage),
                    a = s.find((e) => e.id === Y);
                if (null == a)
                    return T({
                        ...e,
                        value: l,
                        announcementSendOptions: { createThread: e4 && eu, threadName: i, publish: ec },
                    }).then(t);
                (!(function (e, t) {
                    let n = new Set(t.map((e) => e.filename ?? "")),
                        l = new Set();
                    for (let i of t) {
                        let t = i.filename ?? "";
                        if (!l.has(t)) {
                            l.add(t);
                            continue;
                        }
                        let s = t.lastIndexOf("."),
                            a = s > 0 ? t.slice(0, s) : t,
                            r = s > 0 ? t.slice(s) : "",
                            o = 1,
                            c = `${a}_${o}${r}`;
                        for (; n.has(c);) ((o += 1), (c = `${a}_${o}${r}`));
                        (n.add(c), l.add(c), I.A.update(e, i.id, eE.C.ChannelMessage, { filename: c }));
                    }
                })(C.id, s),
                    n.push({
                        type: en.I5.MEDIA_GALLERY,
                        items: [eW(`attachment://${a.filename}`, null, !1)],
                        id: eH.PX,
                    }),
                    l.length > 0 && n.push({ type: en.I5.TEXT_DISPLAY, content: l, id: eH.sm }));
                let r = s.filter((e) => e !== a),
                    o = r.filter((e) => e.isImage || e.isVideo),
                    c = r.filter((e) => !e.isImage && !e.isVideo),
                    d = o.map((e) => eW(`attachment://${e.filename}`, e.description, e.spoiler));
                return (
                    d.length > 0 && n.push({ type: en.I5.MEDIA_GALLERY, items: d, id: eH.AI }),
                    c.forEach((e, t) => {
                        n.push({
                            type: en.I5.FILE,
                            file: eW(`attachment://${e.filename}`, e.description, e.spoiler).media,
                            id: (0, eg.X1)(82766 + t),
                            spoiler: e.spoiler,
                            name: null,
                            size: null,
                        });
                    }),
                    T({
                        ...e,
                        value: l,
                        components: n,
                        announcementSendOptions: { createThread: e4 && eu, threadName: i, publish: ec },
                    }).then(t)
                );
            },
            [T, X, Y, C.id, eu, ec, e4],
        ),
        { submit: e6, handleSubmit: e9 } = (0, eG.Zx)(e8, E, eb, eT, C.id),
        { autocompleteRef: te, handleMaybeShowAutocomplete: tt, handleHideAutocomplete: tn } = (0, eG.v7)(),
        tl = i.useCallback(() => eT?.current?.hide(), []),
        { editorHeight: ti, handleResize: ts } = (0, eG.ck)(y),
        {
            handleTab: ta,
            handleEnter: tr,
            handleSpace: to,
            handleMoveSelection: tc,
        } = ((t = i.useCallback(
            () => !!(!e$ && eS.current?.onTabOrEnter(!1)) || te.current?.onTabOrEnter(!1) || !1,
            [e$],
        )),
        (n = i.useCallback(() => !!(!e$ && eS.current?.onTabOrEnter(!0)) || te.current?.onTabOrEnter(!1) || !1, [e$])),
        {
            handleTab: t,
            handleEnter: n,
            handleSpace: i.useCallback(() => te.current?.onSpace() || !1, [te]),
            handleMoveSelection: i.useCallback(
                (e) => !!(!e$ && eS.current?.onMoveSelection(e)) || te.current?.onMoveSelection(e) || !1,
                [e$],
            ),
        }),
        { expressionPickerView: td, shouldHideExpressionPicker: tu, handleOuterClick: th } = (0, eG.MD)(E, eb, C.id),
        { handleAutocompleteVisibilityChange: tm } = (0, eG.uW)(E, C.id),
        tg = (0, eG.NO)(eb),
        tp = (0, eG.Vu)(e6, E, eb),
        tA = (0, eG.C)({ editorRef: eb, disabled: ek, textValue: c, channelId: C.id, chatInputType: E, submit: e8 });
    (0, e_.R)(e7, C.guild_id, C.id);
    let [tf, tC] = i.useState(!1),
        tE = i.useCallback(() => {
            (th(), tC(!0));
        }, [th]),
        tx = tf || c.length > 0 || null != Q || X.length > 0,
        { editorHeaderHeight: tI, paddingTop: tS } = (0, K.z)({
            editorHeaderHeight: 122 * !!tx,
            paddingTop: 16 * !!tx,
            config: { tension: 120, friction: 15, clamp: !0 },
        }),
        ty = i.useRef(null),
        [tb, t_] = i.useState(!1),
        tj = i.useRef(!1),
        tv = i.useCallback(() => {
            tj.current = !0;
            let e = setTimeout(() => {
                tj.current && t_(!0);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        tT = i.useCallback(() => {
            tj.current = !1;
            let e = setTimeout(() => {
                tj.current || t_(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        tN = i.useCallback(() => {
            (null != Y && I.A.remove(C.id, Y, eE.C.ChannelMessage), er(C.id, { heroUploadId: null }));
        }, [C.id, Y]);
    return (0, l.jsx)(eo.Sv, {
        value: e7,
        children: (0, l.jsxs)(ei.f5, {
            value: eh,
            children: [
                (0, l.jsxs)("div", {
                    ref: em,
                    className: a()(u, ez.gM),
                    onMouseDown: tE,
                    children: [
                        (0, l.jsx)("div", {
                            ref: ev,
                            onScroll: tl,
                            className: a()(ez.Ui, { [ez.k6]: !H }),
                            children: (0, l.jsxs)("div", {
                                className: a()(ez.vW, eV.vW),
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: eV.rf,
                                        children: [
                                            (0, l.jsxs)(F.animated.div, {
                                                className: eV.ov,
                                                style: { height: tI, paddingTop: tS },
                                                children: [
                                                    null != Q
                                                        ? (0, l.jsx)(eZ, { file: et, onRemoveHeroImage: tN })
                                                        : null,
                                                    null != Q
                                                        ? null
                                                        : (0, l.jsx)(eX, {
                                                              channel: C,
                                                              onImageUploaded: (e) => er(C.id, { heroUploadId: e }),
                                                              onFocus: () => tC(!0),
                                                          }),
                                                    eB
                                                        ? (0, l.jsx)(
                                                              eL,
                                                              {
                                                                  channel: C,
                                                                  className: eV.A$,
                                                                  containerClassName: eV.Py,
                                                                  placeholder: eK.intl.string(eK.t.Z8fYjO),
                                                                  spellCheck: e0,
                                                                  title: X,
                                                                  onChange: e1,
                                                                  onPlainTextChange: e2,
                                                                  onEnter: e3,
                                                              },
                                                              C.id,
                                                          )
                                                        : (0, l.jsx)("input", {
                                                              maxLength: 140,
                                                              className: eV.hz,
                                                              placeholder: eK.intl.string(eK.t.Z8fYjO),
                                                              value: X,
                                                              onChange: (e) => er(C.id, { title: e.target.value }),
                                                          }),
                                                ],
                                            }),
                                            (0, l.jsx)("div", {
                                                className: eV.I6,
                                                children: (0, l.jsx)(V.vN, {
                                                    ringTarget: em,
                                                    ringClassName: ez.Rg,
                                                    children: (0, l.jsx)(eP.A, {
                                                        ref: eb,
                                                        id: g,
                                                        focused: x,
                                                        useSlate: eB,
                                                        textValue: c,
                                                        richValue: d,
                                                        disabled: ek,
                                                        placeholder: L,
                                                        required: p,
                                                        accessibilityLabel: f,
                                                        isPreviewing: (eR || eD) && eF,
                                                        channel: C,
                                                        type: U.oU.CREATE_ANNOUNCEMENT_POST,
                                                        canPasteFiles: eU,
                                                        uploadPromptCharacterCount: 4e3,
                                                        maxCharacterCount: D ?? eY,
                                                        allowNewLines: !0,
                                                        "aria-describedby": P,
                                                        onChange: S,
                                                        onResize: ts,
                                                        onBlur: b,
                                                        onFocus: j,
                                                        onKeyDown: v,
                                                        onSubmit: e6,
                                                        onTab: ta,
                                                        onEnter: tr,
                                                        onSpace: to,
                                                        onMoveSelection: tc,
                                                        onSelectionChanged: e5,
                                                        onMaybeShowAutocomplete: tt,
                                                        onHideAutocomplete: tn,
                                                        promptToUpload: N,
                                                        fontSize: eQ,
                                                        spellcheckEnabled: e0,
                                                        canOnlyUseTextCommands: !1,
                                                        "aria-labelledby": O,
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: eV.KK,
                                        children: (0, l.jsx)(ew.A, {
                                            channelId: C.id,
                                            type: E,
                                            canAttachFiles: eU,
                                            ignoreUploadId: Y,
                                            smallAttachments: !0,
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, l.jsx)("div", { className: eV.yF }),
                        (0, l.jsxs)("div", {
                            className: eV.qr,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: eV.j4,
                                    children: [
                                        (0, l.jsx)(eJ, { channel: C }),
                                        (0, l.jsx)(eO.A, {
                                            type: U.oU.CREATE_ANNOUNCEMENT_POST,
                                            disabled: ek,
                                            channel: C,
                                            handleSubmit: e9,
                                            isEmpty: 0 === c.trim().length,
                                            showAllButtons: !0,
                                            expressionButtonsHidden: !1,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: eV.j4,
                                    children: (0, l.jsx)("div", {
                                        ref: ty,
                                        className: eV.Qo,
                                        onMouseEnter: tv,
                                        onMouseLeave: tT,
                                        children: (0, l.jsx)(m.Y, {
                                            targetElementRef: ty,
                                            renderPopout: () =>
                                                (0, l.jsx)(eq, { channelId: C.id, canCreateThread: e4 }),
                                            shouldShow: tb,
                                            autoInvert: !0,
                                            nudgeAlignIntoViewport: !0,
                                            position: "top",
                                            align: "right",
                                            children: (e) =>
                                                (0, l.jsx)(z.$, {
                                                    ...e,
                                                    onClick: () => {
                                                        e6(c);
                                                    },
                                                    disabled: 0 === c.length && 0 === X.length,
                                                    size: "sm",
                                                    "aria-label": eK.intl.string(eK.t.TXNS7S),
                                                    innerClassName: eV.jo,
                                                    text: (0, l.jsxs)("div", {
                                                        className: eV.f9,
                                                        children: [
                                                            (0, l.jsx)(W.E, {
                                                                variant: "body-sm/semibold",
                                                                color: "text-overlay-light",
                                                                children: eK.intl.string(eK.t.TXNS7S),
                                                            }),
                                                            (0, l.jsxs)("div", {
                                                                className: eV.pj,
                                                                children: [
                                                                    (0, l.jsx)($.SendMessageIcon, {
                                                                        size: "xs",
                                                                        color: "white",
                                                                    }),
                                                                    e4 && eu
                                                                        ? (0, l.jsx)(q.ThreadIcon, {
                                                                              size: "xxs",
                                                                              color: "white",
                                                                              className: eV.Q5,
                                                                          })
                                                                        : null,
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(es.A, {
                            targetRef: em,
                            ref: te,
                            channel: C,
                            canMentionRoles: M,
                            canMentionChannels: R,
                            useNewSlashCommands: eB,
                            canOnlyUseTextCommands: !1,
                            canSendStickers: !0,
                            textValue: c,
                            focused: x,
                            expressionPickerView: td,
                            type: E,
                            editorRef: eb,
                            onSendMessage: e6,
                            onSendSticker: () => {},
                            onVisibilityChange: tm,
                            editorHeight: ti,
                            setValue: (e, t) => S?.(null, e, t),
                            position: w,
                        }),
                    ],
                }),
                tu
                    ? null
                    : (0, l.jsx)(ed.A, {
                          returnRef: ej,
                          positionTargetRef: em,
                          type: E,
                          onSelectGIF: tp,
                          onSelectEmoji: tg,
                          onSelectSticker: tA,
                          channel: C,
                          closeOnModalOuterClick: B,
                          parentModalKey: Z,
                          position: "top",
                          align: "right",
                          positionLayerClassName: ez.BD,
                      }),
            ],
        }),
    });
});
function eq(e) {
    let { channelId: t, canCreateThread: n } = e,
        i = ea.useField("channelDrafts")[t],
        s = i?.createThread ?? !0,
        a = i?.publish ?? !0;
    return (0, l.jsxs)(Z.W, {
        "data-menu-migrated": !0,
        "aria-label": eK.intl.string(eK.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: eF.tEg,
        onSelect: eF.tEg,
        children: [
            (0, l.jsx)(J.sL, {
                id: "create-thread",
                label: eK.intl.string(eK.t.rBIGBL),
                checked: n && s,
                disabled: !n,
                action: () => {
                    er(t, { createThread: !s });
                },
            }),
            (0, l.jsx)(J.sL, {
                id: "send-and-publish",
                label: eK.intl.string(eK.t.MFGE51),
                checked: a,
                action: () => {
                    er(t, { publish: !a });
                },
            }),
        ],
    });
}
function eZ(e) {
    let { file: t, onRemoveHeroImage: n } = e,
        [s, a] = i.useState();
    i.useEffect(() => {
        if (null == t || !1 === ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(t.type)) return;
        let e = URL.createObjectURL(t);
        return (
            a(e),
            () => {
                (a(void 0), URL.revokeObjectURL(e));
            }
        );
    }, [t]);
    let [r, o] = i.useState(!1),
        c = i.useCallback(() => {
            o(!0);
        }, []),
        d = i.useCallback(() => {
            o(!1);
        }, []);
    return null == s
        ? null
        : (0, l.jsxs)("div", {
              onMouseEnter: c,
              onMouseLeave: d,
              className: eV.Lb,
              "aria-hidden": !0,
              children: [
                  (0, l.jsx)("img", { src: s, alt: eK.intl.string(eK.t["2ePvR8"]), className: eV.c8 }),
                  r
                      ? (0, l.jsx)(ec.Ay, {
                            className: eV.jM,
                            children: (0, l.jsx)(eU.A, {
                                tooltip: eK.intl.string(eK.t.VjC21x),
                                onClick: n,
                                dangerous: !0,
                                children: (0, l.jsx)(X.TrashIcon, {}),
                            }),
                        })
                      : null,
              ],
          });
}
function eJ(e) {
    let { channel: t } = e;
    return (0, l.jsx)(eu.A, {
        "aria-label": eK.intl.string(eK.t["/IBYAq"]),
        className: eV.g$,
        size: "icon",
        color: "transparent",
        look: "blank",
        onChange: function (e) {
            let { files: n } = e.currentTarget;
            (null != n && (0, eb.R)(n, t, eE.C.ChannelMessage, { requireConfirm: !0, origin: "file_picker" }),
                (e.currentTarget.value = ""));
        },
        children: (0, l.jsx)(Y.FileUpIcon, {
            size: "custom",
            width: 20,
            height: 20,
            color: B.A.colors.INTERACTIVE_TEXT_DEFAULT,
        }),
    });
}
function eX(e) {
    let { channel: t, onImageUploaded: n, onFocus: s } = e,
        a = i.useRef(null),
        [r, o] = i.useState(!1),
        c = i.useCallback(() => {
            o(!0);
        }, []),
        d = i.useCallback(() => {
            o(!1);
        }, []);
    return (0, l.jsx)("div", {
        className: eV.qN,
        children: (0, l.jsx)(Q.m, {
            asContainer: !0,
            text: eK.intl.string(eK.t["/IBYAq"]),
            position: "top",
            children: (0, l.jsxs)(ee.D, {
                className: eV.qN,
                onMouseOver: c,
                onMouseOut: d,
                onFocus: s,
                children: [
                    (0, l.jsx)(em.Ay, {
                        ref: a,
                        onChange: async function (e, l) {
                            let i = await (0, eS.bX)(e, l.name, l.type),
                                s = (0, H.A)(),
                                a = { id: s, file: i, platform: ep.x.WEB, isThumbnail: !1, origin: "file_picker" };
                            (I.A.addFile({ file: a, channelId: t.id, draftType: eE.C.ChannelMessage }), n(s));
                        },
                        "aria-hidden": !0,
                        tabIndex: -1,
                        maxFileSizeBytes: eB.j,
                        onFileSizeError: () => (0, eh.A)(eB.j),
                    }),
                    (0, l.jsx)(et.ImagePlusIcon, {
                        size: "md",
                        color: r ? B.A.colors.INTERACTIVE_TEXT_ACTIVE : B.A.colors.INTERACTIVE_TEXT_DEFAULT,
                    }),
                ],
            }),
        }),
    });
}
var eY = n(664929),
    eQ = n(742287);
let e0 = i.memo(function (e) {
    let { className: t, channel: n, section: i } = e,
        s = null != i ? (0, eY.Rg)(i) : null,
        r =
            null != s
                ? (0, l.jsx)(Q.m, {
                      __unsupportedReactNodeAsText: i?.name ?? "",
                      position: "top",
                      children: (0, l.jsx)(s, { channel: n, section: i, width: 24, height: 24 }),
                  })
                : null;
    return (0, l.jsx)("div", {
        className: a()(t, eQ.i),
        children: (0, l.jsx)("div", { className: eQ.K, children: r }),
    });
});
var e1 = n(316576),
    e2 = n(35277);
let e3 = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-announcement-composer",
    defaultConfig: { announcementComposer: !1 },
    variations: { 1: { announcementComposer: !0 } },
});
var e4 = n(319365),
    e7 = n(151271),
    e5 = n(407278),
    e8 = n(81400),
    e6 = n(353182),
    e9 = n(727875);
function te(e) {
    let {
        bannerIcon: t,
        bannerHeader: n,
        bannerSubtext: i,
        textStyles: s,
        headerStyles: r,
        containerStyles: o,
        children: c,
    } = e;
    return (0, l.jsxs)("div", {
        className: a()(e9.Ew, o),
        children: [
            (0, l.jsxs)("div", {
                className: a()(e9.lt, s),
                children: [
                    null != t && ("string" == typeof t ? (0, l.jsx)("img", { src: t, alt: "", className: e9.q3 }) : t),
                    (0, l.jsxs)("div", {
                        className: e9._M,
                        children: [
                            (0, l.jsx)("div", { className: a()(e9.U_, r), children: n }),
                            null != i && (0, l.jsx)("div", { className: e9.mi, children: i }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: e9.uu, children: c }),
        ],
    });
}
var tt = n(206835),
    tn = n(46653),
    tl = n(696451),
    ti = n(229527),
    ts = n(340837),
    ta = n(355097),
    tr = n(364634);
function to(e) {
    let { guild: t } = e,
        n = (0, tt.A)({ scrollPosition: ta._F.GUILD_TAG });
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(te, {
            bannerIcon: (0, l.jsx)(e6.ChatXIcon, { size: "lg", color: "currentColor", className: tr.q3 }),
            bannerHeader: eK.intl.format(eK.t.GgMwjk, { guildName: t?.name ?? "" }),
            bannerSubtext: eK.intl.string(eK.t.ONjwD5),
            textStyles: tr.cI,
            headerStyles: tr.U_,
            children: (0, l.jsx)(z.$, {
                variant: "primary",
                size: "sm",
                text: eK.intl.string(eK.t.Viksoo),
                onClick: () => n(),
            }),
        }),
    });
}
function tc(e) {
    let { guild: t } = e,
        { analyticsLocations: n } = (0, ei.Ay)(el.A.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [i, s] = (0, e8.j8)({ guildId: t?.id ?? "", analyticsLocations: n }),
        a = s ? eK.intl.string(eK.t["9ph2v7"]) : eK.intl.string(eK.t.ldh9Cg),
        r = s ? eK.intl.string(eK.t["/PGQf0"]) : eK.intl.string(eK.t.WikgZ1);
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(te, {
            bannerIcon: (0, l.jsx)(e6.ChatXIcon, { size: "lg", color: "currentColor", className: tr.q3 }),
            bannerHeader: eK.intl.format(eK.t.kcYdTq, { guildName: t?.name ?? "" }),
            bannerSubtext: a,
            textStyles: tr.cI,
            headerStyles: tr.U_,
            children: (0, l.jsx)(z.$, {
                variant: "primary",
                size: "sm",
                text: r,
                onClick: function () {
                    i();
                },
            }),
        }),
    });
}
function td(e) {
    let { guild: t } = e,
        n = (0, h.bG)(
            [tn.default, tl.Ay],
            () => {
                if (null == t) return new Set();
                let e = tn.default.getId();
                return (0, ti.wj)(tl.Ay.getMember(t.id, e));
            },
            [t],
        );
    return n.has(ts.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(ts.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, l.jsx)(tc, { guild: t })
        : n.has(ts.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, l.jsx)(to, { guild: t })
          : (0, l.jsx)(tc, { guild: t });
}
var tu = n(316031),
    th = n(870136),
    tm = n(60270),
    tg = n(576470),
    tp = n(496431),
    tA = n(592713),
    tf = n(264388),
    tC = n(534514),
    tE = n(542290);
function tx(e) {
    let { onClose: t, guildName: n } = e;
    return (0, l.jsxs)("div", {
        className: tE.kL,
        children: [
            (0, l.jsx)("div", {
                className: tE.zc,
                children: (0, l.jsx)(tm.ClockWarningIcon, {
                    size: "custom",
                    color: "currentColor",
                    className: tE.Kk,
                    width: 20,
                    height: 20,
                }),
            }),
            (0, l.jsxs)("div", {
                className: tE.wx,
                children: [
                    (0, l.jsx)(tC.D, {
                        variant: "heading-sm/semibold",
                        className: tE.TK,
                        children: eK.intl.string(eK.t.LIIyeE),
                    }),
                    (0, l.jsx)(W.E, {
                        variant: "body-sm/normal",
                        children: eK.intl.format(eK.t["4/6vQh"], { guildName: n }),
                    }),
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tE.x6,
                        children: (0, l.jsx)(z.$, {
                            variant: "primary",
                            text: eK.intl.string(eK.t.BddRzS),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var tI = n(200700),
    tS = n(481161);
function ty(e) {
    let { guild: t, disabledUntil: n } = e,
        [s, a] = (0, tf.n)(t.id);
    return (
        !(function (e) {
            let { communicationDisabledUntil: t, userId: n, guildId: l } = e ?? {},
                s = (0, tp.A)(null != t ? Date.parse(t) : Date.now()).seconds,
                a = (0, i.useRef)(null);
            (0, i.useEffect)(
                () =>
                    null == e || null == l || null == n
                        ? void clearTimeout(a.current)
                        : (s <= 0 &&
                              null == a.current &&
                              (a.current = setTimeout(() => {
                                  tA.A.clearGuildMemberTimeout(l, n);
                              }, 1e3)),
                          () => {
                              null != a.current && (clearTimeout(a.current), (a.current = null));
                          }),
                [l, n, s, t, e],
            );
        })((0, h.bG)([tl.Ay, tn.default], () => tl.Ay.getMember(t.id, tn.default.getId()), [t.id])),
        (0, l.jsxs)("div", {
            children: [
                s ? (0, l.jsx)(tx, { onClose: () => a(t.id), guildName: t.name }) : null,
                (0, l.jsx)(te, {
                    bannerIcon: (0, l.jsx)(tm.ClockWarningIcon, {
                        size: "md",
                        color: "currentColor",
                        className: tS.q3,
                    }),
                    bannerHeader: eK.intl.string(eK.t["9UoK6Y"]),
                    bannerSubtext: eK.intl.format(eK.t["4ZwD5G"], { link: tI.MO }),
                    textStyles: tS.cI,
                    headerStyles: tS.U_,
                    children: (0, l.jsx)(W.E, {
                        variant: "body-sm/semibold",
                        children: (0, l.jsx)(tg.A, { deadline: new Date(n), showUnits: !0, stopAtOneSec: !0 }),
                    }),
                }),
            ],
        })
    );
}
var tb = n(885071),
    t_ = n(39738),
    tj = n(513609),
    tv = n(176781),
    tT = n(683825),
    tN = n(273692);
function tM() {
    return (0, l.jsx)(te, {
        textStyles: tN.U,
        bannerIcon: (0, l.jsx)(tv.ClipsIcon, { size: "lg" }),
        bannerHeader: eK.intl.string(tT.default.unC18Z),
        bannerSubtext: eK.intl.string(tT.default["7mR8Bv"]),
    });
}
var tR = n(982024),
    tD = n(458914),
    tk = n(382287),
    tL = n(959698),
    tP = n(521427),
    tO = n(751258),
    tG = n(451909),
    tU = n(926262),
    tw = n(730276),
    tF = n(537174),
    tH = n(973196),
    tB = n(361729),
    tK = n(308718);
function tV() {
    return (0, l.jsx)(te, {
        containerStyles: tK.k,
        bannerHeader: eK.intl.string(tB.default.e7ydX0),
        bannerSubtext: eK.intl.string(tB.default.POfugg),
    });
}
var tz = n(591563),
    tW = n(3137),
    t$ = n(559908);
n(142703);
var tq = n(765671),
    tZ = n(741961),
    tJ = n(459793),
    tX = n(103640);
function tY(e, t) {
    return e === t || (e?.channelId === t?.channelId && e?.value === t?.value && e?.multiplier === t?.multiplier);
}
var tQ = n(93219);
let t0 = i.memo(function (e) {
        let { channelId: t, width: n } = e,
            s = (0, h.bG)([_.Ay], () => _.Ay.useReducedMotion),
            a = (0, h.bG)([t$.Ay], () => t$.Ay.getMostRecentMessageCombo(t), [t]),
            [r, o] = i.useState(!1);
        i.useEffect(() => {
            if (a?.displayed) return;
            (o(!1),
                setImmediate(() => {
                    o((null != a ? (0, tX.RL)(a.combo) : 0) > 0);
                }));
            let e = setTimeout(() => {
                (o(!1), null != a && (0, tz.Nu)(a));
            }, 2e3);
            return () => clearTimeout(e);
        }, [a]);
        let c = null != a ? "100%" : "200%",
            d = (0, K.z)(
                {
                    opacity: +!!r,
                    translateY: r ? "0" : c,
                    pointerEvents: "none",
                    width: n,
                    config: s ? F.config.stiff : F.config.slow,
                },
                "animate-always",
            );
        return (
            null != a &&
            (0, l.jsx)(F.animated.div, {
                className: tQ.Gi,
                style: d,
                children: (0, l.jsx)(W.E, {
                    className: tQ.fX,
                    variant: "body-sm/semibold",
                    children: (0, tX.RL)(a.combo),
                }),
            })
        );
    }),
    t1 = i.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: s, square: r, flair: o } = i.useMemo(() => (0, tX.HN)(n), [n]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(W.E, { className: tQ.iR, variant: "body-sm/semibold", children: t }),
                (0, l.jsxs)("div", {
                    className: tQ._Z,
                    style: { color: s },
                    children: [
                        (0, l.jsx)(W.E, {
                            className: tQ.On,
                            style: { color: s },
                            variant: "body-sm/semibold",
                            children: eK.intl.format(eK.t["6bgVlq"], { multiplier: n }),
                        }),
                        r &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", { className: a()(tQ.QA, tQ.kb), style: { backgroundColor: s } }),
                                    (0, l.jsx)("div", { className: a()(tQ.QA, tQ.pG), style: { backgroundColor: s } }),
                                ],
                            }),
                        o &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", {
                                        className: a()(tQ.ox, tQ.kb),
                                        children: (0, l.jsx)(tJ.A, { width: 24, height: 24 }),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: a()(tQ.ox, tQ.pG),
                                        children: (0, l.jsx)(tJ.A, { width: 24, height: 24 }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, l.jsx)(W.E, {
                                className: tQ.uN,
                                variant: "body-sm/semibold",
                                children: eK.intl.string(eK.t.b5Cpof),
                            }),
                    ],
                }),
            ],
        });
    }),
    t2 = i.memo(function (e) {
        let t,
            { channelId: n } = e,
            s = (0, h.bG)([tn.default], () => tn.default.getId()),
            a = (0, h.bG)([tZ.A], () => tZ.A.isTyping(n, s), [n, s]),
            r = (0, h.bG)([tW.A], () => tW.A.isEnabled()),
            o = (0, h.bG)([t$.Ay], () => t$.Ay.isComboing(s, n), [n, s]),
            { ref: c, width: d = 0 } = (0, tq.Ay)(),
            [u, m] = i.useState(!1),
            g =
                ((t = (0, h.bG)([tW.A], () => !!tW.A.isEnabled() && tW.A.combosEnabled)),
                (0, h.bG)(
                    [t$.Ay, tn.default],
                    () => (t ? t$.Ay.getUserCombo(tn.default.getId(), n) : void 0),
                    [n, t],
                    tY,
                )),
            p = r && o && a;
        i.useEffect(() => {
            p && m(!0);
            let e = setTimeout(() => m(p), 1e3);
            return () => clearTimeout(e);
        }, [p]);
        let A = (0, K.z)({
                opacity: +!!u,
                transform: u ? "translateY(0)" : "translateY(100%)",
                pointerEvents: "none",
                config: F.config.stiff,
            }),
            f = i.useMemo(() => g ?? { value: 0, multiplier: 1 }, [g]),
            C = i.useRef(f);
        i.useEffect(() => {
            (f.multiplier > 1 || f.value > 0) && (C.current = f);
        }, [f]);
        let { multiplier: E, value: x } = i.useMemo(
            () => ({ value: p ? f.value : C.current.value, multiplier: p ? f.multiplier : C.current.multiplier }),
            [p, f, C],
        );
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(t0, { channelId: n, width: d }),
                (0, l.jsx)(F.animated.div, {
                    ref: c,
                    className: tQ.p_,
                    style: A,
                    children: (0, l.jsx)(t1, { value: x, multiplier: E }),
                }),
            ],
        });
    });
var t3 = n(208343),
    t4 = n(31408),
    t7 = n(810685),
    t5 = n(806621),
    t8 = n(596344);
let t6 = function (e, t) {
    let n = (0, t5.r)(t),
        l = (0, h.bG)([t8.A], () => t8.A.getMessages(t.id).length > 0, [t]);
    return null != e && e.hasFlag(eF.nhx.QUARANTINED) && n && !l;
};
var t9 = n(831502);
let ne = function () {
    return (0, l.jsx)(te, {
        bannerIcon: (0, l.jsx)(t7.M, { alt: "", width: 80, height: 40 }),
        bannerHeader: eK.intl.string(eK.t.EouHwv),
        bannerSubtext: eK.intl.format(eK.t.PThBel, { appealLink: t9.q }),
    });
};
var nt = n(118517),
    nn = n(853145),
    nl = n(226698),
    ni = n(307805),
    ns = n(985632);
let na = function (e) {
    let { channelId: t } = e,
        n = i.useCallback(() => {
            nl.A.reopenModReport(t);
        }, [t]);
    return (0, l.jsx)(te, {
        bannerHeader: (0, l.jsx)(W.E, {
            variant: "body-md/medium",
            color: "text-muted",
            children: eK.intl.string(ni.default["0eUUeF"]),
        }),
        headerStyles: ns.U,
        containerStyles: ns.c,
        children: (0, l.jsx)(z.$, {
            variant: "secondary",
            size: "sm",
            text: eK.intl.string(ni.default["6quCi9"]),
            onClick: n,
        }),
    });
};
var nr = n(631576),
    no = n(728321),
    nc = n(799704),
    nd = n(580745),
    nu = n(576705),
    nh = n(994500),
    nm = n(309010),
    ng = n(287809),
    np = n(129230),
    nA = n(147036),
    nf = n(234320),
    nC = n(188567),
    nE = n(661191),
    nx = n(710272),
    nI = n(137577),
    nS = n(47167),
    ny = n(480870),
    nb = n(390756),
    n_ = n(178653),
    nj = n(626977),
    nv = n(549400);
function nT() {
    return (0, l.jsxs)("div", {
        className: nv.kL,
        children: [
            (0, l.jsx)("div", { className: a()(nv.v9, nv.KJ) }),
            (0, l.jsx)("div", { className: a()(nv.v9, nv.rx) }),
        ],
    });
}
var nN = n(374846),
    nM = n(544990),
    nR = n(678655),
    nD = n(858899),
    nk = n(336590),
    nL = n(190857),
    nP = n(378570),
    nO = n(138298),
    nG = n(260771);
function nU(e) {
    let { channel: t } = e,
        n = (0, nk.k)(),
        s = (0, h.bG)([ng.default], () => ng.default.getUser(t.getRecipientId())),
        a = i.useCallback(() => {
            (0, nD.P0)({ text: eK.intl.string(eK.t["EDYbS+"]), variant: "critical" });
        }, []),
        r = i.useCallback(() => {
            nO.A.closeChannelSidebar(nc.fe);
        }, []),
        o = i.useCallback(() => {
            (nO.A.closeChannelSidebar(nc.fe), n && (0, nP.iN)(t.id));
        }, [t.id, n]),
        {
            acceptMessageRequest: c,
            rejectMessageRequest: d,
            isAcceptLoading: u,
            isRejectLoading: m,
            isUserProfileLoading: g,
            isOptimisticAccepted: p,
            isOptimisticRejected: A,
        } = (0, nL.t)({ user: s, onAcceptSuccess: o, onRejectSuccess: r, onError: a }),
        f = u || m || g || p || A;
    return (0, l.jsxs)("div", {
        className: nG.kL,
        children: [
            (0, l.jsx)(W.E, {
                className: nG.VA,
                variant: "body-md/medium",
                color: "text-muted",
                children: eK.intl.string(eK.t.YQ0uUE),
            }),
            (0, l.jsxs)("div", {
                className: nG.o1,
                children: [
                    (0, l.jsx)(z.$, {
                        variant: "secondary",
                        size: "sm",
                        text: eK.intl.string(eK.t.BVN4pL),
                        onClick: () => d(t.id),
                        disabled: f,
                        loading: m || A,
                    }),
                    (0, l.jsx)(z.$, {
                        variant: "primary",
                        size: "sm",
                        text: eK.intl.string(eK.t.Kz8Pwr),
                        onClick: () => c(t.id),
                        disabled: f,
                        loading: u || g || p,
                    }),
                ],
            }),
        ],
    });
}
var nw = n(698279),
    nF = n(381941),
    nH = n(650583),
    nB = n(999900);
function nK(e) {
    e.preventDefault();
}
let nV = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function nz(e) {
    let { isSidebar: t, ...n } = e;
    return t ? (0, l.jsx)("section", { ...n, role: "complementary" }) : (0, l.jsx)("main", { ...n });
}
function nW(e) {
    let { ref: t, ...n } = e;
    return (0, l.jsx)(n$, { ...n, ref: t });
}
nW.displayName = "ChannelTextAreaForm";
class n$ extends i.PureComponent {
    focusEditor() {
        this.editorRef?.focus();
    }
    submit() {
        this.editorRef?.submit();
    }
    isFirstChange = !0;
    editorRef = null;
    state = { ...(0, w.ur)(eE.A.getDraft(this.props.channel.id, eE.C.ChannelMessage)), contentWarningProps: null };
    componentDidMount() {
        eE.A.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eE.A.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: l } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eE.A.getDraft(n.id, eE.C.ChannelMessage);
            e !== l && this.setState((0, w.ur)(e));
        }
        t.textValue.length < 2e3 && l.length >= 2e3 && np.default.track(eF.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    draftDidChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                { textValue: n } = e.state,
                l = eE.A.getDraft(t.channel.id, eE.C.ChannelMessage);
            n !== l &&
                ("" === l || "" === n) &&
                e.setState((0, w.ur)(l), () => {
                    if (n !== l) {
                        let { onFocus: t } = e.props;
                        t?.();
                    }
                });
        };
    })();
    handleKeyDown = (e) => {
        let { keyboardModeEnabled: t, onKeyDown: n, channel: l } = this.props,
            i = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
            s = 0 !== this.state.textValue.length;
        switch (e.key) {
            case nH.dh.DELETE:
            case nH.dh.BACKSPACE:
                return void this.handleIncrementCombo("", 1);
            case nH.dh.ARROW_UP:
                if (i || s) return;
                if ((e.preventDefault(), t))
                    eI.A.getUploadCount(l.id, eE.C.ChannelMessage) > 0
                        ? nC._.dispatchToLastSubscribed(eF.jej.FOCUS_ATTACHMENT_AREA)
                        : nC._.dispatchToLastSubscribed(eF.jej.FOCUS_MESSAGES, { atEnd: !0 });
                else {
                    let { channel: e } = this.props,
                        t = t8.A.getLastChatCommandMessage(e.id),
                        n = t8.A.getLastEditableMessage(e.id);
                    null != t && null != n
                        ? nE.default.compare(n.id, t.id) > 0
                            ? this.handleEditLastMessage(n)
                            : this.handleRecallLastCommand(t)
                        : null != t
                          ? this.handleRecallLastCommand(t)
                          : null != n && this.handleEditLastMessage(n);
                }
                return;
            case nH.dh.ESCAPE:
                if (i || e.target !== e.currentTarget) return;
                if ((e.preventDefault(), t)) return void (0, b.Bm)();
                if (eI.A.getUploadCount(l.id, eE.C.ChannelMessage) > 0)
                    return void I.A.clearAll(l.id, eE.C.ChannelMessage);
        }
        n?.(e, s);
    };
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        (E.A.startEditMessageRecord(t.id, e), j.Ay.trackWithMetadata(eF.HAw.MESSAGE_EDIT_UP_ARROW));
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: l } = (0, P.Ez)(e.interactionData),
            { command: i, application: s } = D.EW({ channel: t, type: "channel" }, n);
        if (null != i) {
            let e =
                null != s
                    ? {
                          type: L.Hf.APPLICATION,
                          id: s.id,
                          icon: s.icon,
                          name: s?.bot?.username ?? s.name,
                          application: s,
                      }
                    : null;
            M.Gf({
                channelId: t.id,
                command: i,
                section: e,
                location: L.Oh.RECALL,
                initialValues: (0, R.DB)(i, l ?? []),
                commandOrigin: L.iw.CHAT,
            });
        }
    }
    handleIncrementCombo = (e, t) => {
        if (!this.props.poggermodeEnabled) return;
        let n = this.props.channel.id,
            l = tn.default.getId(),
            i = t$.Ay.getUserCombo(l, n),
            s = (i?.value ?? 0) + 1;
        (0, tz.oG)({ channelId: n, userId: l, value: null != e ? e.length : s, multiplier: t });
    };
    handleTextareaChange = (e, t, n) => {
        let {
            keyboardModeEnabled: l,
            chatInputType: i,
            channel: { id: s },
        } = this.props;
        if (i === U.oU.NORMAL && s !== nm.Ay.getChannelId()) return;
        C.A.changeDraft(s, t, eE.C.ChannelMessage);
        let a = "" !== t && n !== this.state.richValue,
            r = a && !nV.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
        ((this.isFirstChange = !1),
            r && this.state.textValue.length < t.length && this.handleIncrementCombo(),
            r ? x.A.startTyping(s) : "" === t && x.A.stopTyping(s),
            a && l && (0, b.Bm)(),
            this.setState({ textValue: t, richValue: n }));
    };
    handleSendMessage = async (e) => {
        let {
            value: t,
            uploads: n,
            stickers: l,
            command: i,
            commandOptionValues: s,
            isGif: a,
            gifMetadata: r,
            components: o,
            announcementSendOptions: c,
        } = e;
        if (0 === (t = t.trim()).length && (null == l || 0 === l.length) && (null == n || 0 === n.length))
            return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
        let { guild: d, channel: h, pendingReply: m, chatInputType: g } = this.props,
            p = !1;
        if (null != i) {
            if (i.inputType === L.y$.BUILT_IN_INTEGRATION)
                return (
                    nC._.dispatch(eF.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                    Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                );
            let e = k.A.getCommandOrigin(h.id);
            if (null == e || e === L.iw.CHAT) {
                let { isAuthorized: e } = await (0, G.q)({
                    applicationId: i.applicationId,
                    channel: h,
                    commandIntegrationTypes: i.integration_types,
                });
                if (!e) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
            } else if (e === L.iw.APPLICATION_LAUNCHER || e === L.iw.IMAGE_RECS_MENU || e === L.iw.IMAGE_RECS_SUBMENU) {
                let { location: t, sectionName: n } = (0, nb.bV)(i) ?? {},
                    l = e === L.iw.APPLICATION_LAUNCHER ? T.A.lastShownEntrypoint() : N.s4.TEXT,
                    { isAuthorized: s } = await (0, G.q)({
                        applicationId: i.applicationId,
                        channel: h,
                        commandIntegrationTypes: i.integration_types,
                        appLauncherContext: { location: t, sectionName: n, entrypoint: l },
                    });
                if (!s) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
                (0, nb.My)(i);
            }
            let n = await (0, O.A)({ command: i, optionValues: s ?? {}, context: { guild: d, channel: h } });
            if (i.inputType !== L.y$.BUILT_IN_TEXT) return Promise.resolve({ shouldClear: !0, shouldRefocus: !0 });
            null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (p = !0 === n.tts));
        }
        return (0, nx.i)({
            openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
            type: this.props.chatInputType,
            content: t,
            hasStickers: null != l && l.length > 0,
            hasAttachments: null != n && n.length > 0,
            channel: h,
        }).then((e) => {
            let { valid: s, failureReason: A } = e;
            if (!s)
                if (A === eF.X8x.SLOWMODE_COOLDOWN)
                    return (
                        nC._.dispatch(eF.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                        nC._.dispatch(eF.jej.EMPHASIZE_SLOWMODE_COOLDOWN),
                        { shouldClear: !1, shouldRefocus: !0 }
                    );
                else return { shouldClear: !1, shouldRefocus: !1 };
            let f = (0, tO.S)(t, { channel: h, isEdit: !1 });
            null != f && (null != f.content && (t = f.content), null != f.tts && (p = f.tts));
            let x = tG.Ay.parse(h, t);
            ((x.tts = x.tts || p), null != o && ((x.content = ""), (x.components = o)));
            let S = {
                ...E.A.getSendMessageOptions({
                    content: t,
                    channelId: h.id,
                    uploads: n,
                    stickers: l,
                    command: i,
                    isGif: a,
                    pendingReply: m,
                    scheduledTimestamp: this.props.scheduledMessageDraft?.scheduledTimestamp,
                }),
                location: nF.Hx.CHAT_INPUT,
            };
            if (
                (null != c && (S.announcementSendOptions = c),
                null != r && (S.gifMetadata = r),
                null != o && (S.flags = (0, u.UI)(S.flags ?? 0, eF.pr7.IS_COMPONENTS_V2)),
                a)
            )
                return (E.A.sendMessage(h.id, x, void 0, S), (0, nt.Jx)(h.id), { shouldClear: !1, shouldRefocus: !0 });
            function y() {
                ("" !== t &&
                    "" === eE.A.getDraft(h.id, eE.C.ChannelMessage) &&
                    C.A.saveDraft(h.id, t, eE.C.ChannelMessage),
                    null != n &&
                        n.length > 0 &&
                        0 === eI.A.getUploadCount(h.id, eE.C.ChannelMessage) &&
                        I.A.setUploads({ channelId: h.id, uploads: n, draftType: eE.C.ChannelMessage }));
            }
            let b = !1;
            if (null != n && n.length > 0) {
                let e = (0, tk.LJ)(n);
                if ((0, tk.fJ)({ files: e, guildId: d?.id }))
                    return ((0, eb.V)(h, e), { shouldClear: !1, shouldRefocus: !1 });
                ((S.eagerDispatch = !1),
                    (S.attachmentsToUpload = n),
                    (S.onAttachmentUploadError = (e, t, n) => {
                        (0, tD.k)({ file: e, guildId: h.getGuildId(), analyticsLocations: [], code: t, reason: n }) &&
                            y();
                    }),
                    n.some((e) => e.isPreparing) &&
                        ((b = !0),
                        (0, tR.bH)({
                            message: {
                                channelId: h.id,
                                content: x.content,
                                tts: x.tts,
                                messageReference: S.messageReference,
                            },
                            items: n,
                            send: (e) => {
                                let { nonce: t, uploader: n } = e;
                                return (async function (e) {
                                    let { channel: t, message: n, options: l, nonce: i, pendingUploadId: s } = e,
                                        a = (0, tk.LJ)(l.attachmentsToUpload ?? []);
                                    if ((0, tk.fJ)({ files: a, guildId: t.getGuildId() }))
                                        throw ((0, eb.V)(t, a), new tR.MV("Prepared attachments exceed upload limits"));
                                    let r = { failed: !1, explained: !1 };
                                    if (
                                        (await E.A.sendMessage(t.id, n, void 0, {
                                            ...l,
                                            nonce: i,
                                            pendingUploadId: s,
                                            onAttachmentUploadError: (e, n, l) => {
                                                ((r.failed = !0),
                                                    (r.explained = (0, tD.k)({
                                                        file: e,
                                                        guildId: t.getGuildId(),
                                                        analyticsLocations: [],
                                                        code: n,
                                                        reason: l,
                                                    })));
                                            },
                                        }),
                                        r.explained)
                                    )
                                        throw new tR.MV("Attachment upload failed");
                                    if (r.failed) throw Error("Attachment upload failed");
                                })({ channel: h, message: x, options: S, nonce: t, pendingUploadId: n.id });
                            },
                        })),
                    I.A.clearAll(h.id, eE.C.ChannelMessage));
            }
            return (
                b ||
                    E.A.sendMessage(h.id, x, void 0, S).catch((e) => {
                        throw ((null != S.scheduledTimestamp || !1 === S.eagerDispatch) && y(), e);
                    }),
                this.setState((0, w.N3)()),
                (0, nt.Jx)(h.id),
                (0, nr.x5)(h.id, g.drafts.type),
                { shouldClear: !0, shouldRefocus: !0 }
            );
        });
    };
    handleSetValue = (e) => {
        let t = this.editorRef?.getSlateEditor();
        null != t && (e2.b.select(t, []), t.insertText(e), this.editorRef?.focus());
    };
    renderAttachButton = (e, t) =>
        (0, l.jsx)(e1.A, {
            className: t,
            channel: this.props.channel,
            draftType: eE.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: this.handleSetValue,
            canOnlyUseTextCommands: e,
            chatInputType: this.props.chatInputType,
        });
    renderApplicationCommandIcon = (e, t, n) =>
        (0, l.jsx)(e0, { className: n, command: e, section: t, channel: this.props.channel });
    render() {
        let {
                channel: e,
                focused: t,
                onBlur: n,
                onFocus: i,
                onResize: s,
                highlighted: a,
                pendingReply: r,
                chatInputType: c,
                placeholder: d,
                accessibilityLabel: u,
                shakeIntensity: h,
                poggermodeEnabled: p,
                scheduledMessageDraft: A,
                announcementComposerEnabled: f,
            } = this.props,
            { contentWarningProps: C } = this.state,
            E =
                e.type === eF.rbe.GUILD_ANNOUNCEMENT && f
                    ? (0, l.jsx)(e$, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: nB.gM,
                          channel: e,
                          placeholder: d,
                          accessibilityLabel: u,
                          pendingReply: r,
                          type: U.oU.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: s,
                          onFocus: i,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eb.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, l.jsx)(eG.Ay, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: nB.gM,
                          channel: e,
                          placeholder: d,
                          accessibilityLabel: u,
                          pendingReply: r,
                          type: c,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: s,
                          onFocus: i,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eb.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                          scheduledMessageDraft: A,
                      });
        return (0, l.jsx)(m.Y, {
            targetElementRef: this.props.refInstance,
            position: "top",
            onRequestClose: () => {
                (C?.onCancel?.(), this.setState({ contentWarningProps: null }));
            },
            shouldShow: null != C,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    o()(null != C, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"),
                    (0, l.jsx)(tU.A, { onClose: t, ...C })
                );
            },
            children: () =>
                p ? (0, l.jsx)(g.b, { isShaking: h > 0, intensity: h, className: nB.Xn, children: E }) : E,
        });
    }
}
class nq extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: l } = t;
        return n.id !== l
            ? { textAreaFocused: null != n && !c.Fr && nu.A.can(eF.xBc.SEND_MESSAGES, n), currentChannelId: n.id }
            : null;
    }
    containerDomRef = i.createRef();
    refToChannelTextAreaFormComponent = i.createRef();
    inputFormRef = i.createRef();
    state = { textAreaFocused: !1, textAreaHighlighted: !1, currentChannelId: this.props.channel.id };
    dispatchGroupRef = i.createRef();
    componentDidMount() {
        nC._.subscribe(eF.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        nC._.unsubscribe(eF.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    handleRequestFocus = (e) => {
        e.channelId === this.props.channel.id &&
            (this.state.textAreaFocused
                ? this.refToChannelTextAreaFormComponent.current?.focusEditor()
                : this.setState({ textAreaFocused: !0 }));
    };
    handleInputFocus = (e) => {
        (this.dispatchGroupRef.current?.bumpDispatchPriority(),
            e?.highlight != null
                ? this.setState({ textAreaFocused: !0, textAreaHighlighted: e?.highlight })
                : this.setState({ textAreaFocused: !0 }),
            e?.wasEnterPressed &&
                (e?.event?.preventDefault(), this.refToChannelTextAreaFormComponent.current?.submit()));
    };
    handleInputBlur = () => {
        (document.hasFocus() || this.props.hasModalOpen) &&
            this.setState({ textAreaFocused: !1, textAreaHighlighted: !1 });
    };
    handleInputKeyDown = (e, t) => {
        (this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), t || this._handleMoveToPane(e));
    };
    handleKeyDown = (e) => {
        this.inputFormRef.current?.contains(e.target) || this._handleMoveToPane(e);
    };
    _handleMoveToPane = (e) => {
        let { keyboardModeEnabled: t, chatInputType: n, channel: l } = this.props;
        if (t)
            switch (e.key) {
                case nH.dh.ARROW_LEFT:
                    n === U.oU.SIDEBAR &&
                        nC._.dispatch(eF.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: nm.Ay.getChannelId() });
                    return;
                case nH.dh.ARROW_RIGHT:
                    n === U.oU.NORMAL &&
                        nC._.dispatch(eF.jej.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: nc.Ay.getCurrentSidebarChannelId(l.id),
                        });
            }
    };
    handleOpenExpressionPicker = (e) => {
        let { activeView: t } = e;
        (0, e7.bf)(t, this.props.chatInputType, this.props.channel.id);
    };
    openEmojiPacks = (e) => {
        let { channel: t, chatInputType: n, announcementComposerEnabled: l } = this.props,
            i = t.type === eF.rbe.GUILD_ANNOUNCEMENT && l ? U.oU.CREATE_ANNOUNCEMENT_POST : n;
        (0, e7.bf)(nw.kx.EMOJI, i, t.id, { showSelectedEmojiPackId: e });
    };
    handleOpenAppLauncher = (e) => {
        let { applicationId: t } = e;
        return v.R(N.s4.TEXT, this.props.chatInputType, { applicationId: t }, this.props.channel.id);
    };
    handleChatInteract = () => {
        this.dispatchGroupRef.current?.bumpDispatchPriority();
    };
    renderMessageBanner = (e) => {
        let {
            channel: t,
            showQuarantinedUserBanner: n,
            guild: i,
            communicationDisabledUntil: s,
            showAutomodUserProfileChatBlocker: a,
        } = e;
        return t.isMediaThread()
            ? (0, l.jsx)(tM, {})
            : this.props.restrictedPreview && t.type === eF.rbe.DM
              ? (0, l.jsx)(nU, { channel: t })
              : t.type === eF.rbe.DM && n
                ? (0, l.jsx)(ne, {})
                : t.isModeratorReportChannel() && t.isArchivedThread()
                  ? (0, l.jsx)(na, { channelId: t.id })
                  : null != s && (0, tu.n)(s) && null != i && !nu.A.can(eF.xBc.ADMINISTRATOR, i)
                    ? (0, l.jsx)(ty, { guild: i, disabledUntil: s })
                    : a
                      ? (0, l.jsx)(td, { guild: i })
                      : this.props.isOverlayTextEntryDisabled
                        ? (0, l.jsx)(tV, {})
                        : null;
    };
    render() {
        let e,
            {
                channel: t,
                guild: n,
                keyboardModeEnabled: i,
                hasModalOpen: s,
                pendingReply: r,
                chatInputType: o,
                placeholder: c,
                accessibilityLabel: u,
                showQuarantinedUserBanner: h,
                filterAfterTimestamp: m,
                communicationDisabledUntil: g,
                shakeIntensity: f,
                poggermodeEnabled: C,
                isSelectedResourceChannel: E,
                showAutomodUserProfileChatBlocker: x,
                scheduledMessageDraft: I,
                messagesTypingGradient: S,
                showLinkedLobbyApplicationLoadingIndicator: b,
                announcementComposerEnabled: _,
            } = this.props,
            { textAreaFocused: j, textAreaHighlighted: v } = this.state,
            T = o === U.oU.SIDEBAR;
        e =
            T && t.type === eF.rbe.GUILD_VOICE
                ? eK.t.pnnyFZ
                : T && t.type === eF.rbe.GUILD_STAGE_VOICE
                  ? eK.t.YInSkq
                  : d.k.THREADS.has(t.type)
                    ? eK.t["OkzL+Q"]
                    : eK.t.UbNmGc;
        let N = (0, l.jsx)("div", { className: nB.li, children: (0, l.jsx)(nT, {}) }),
            M = (0, l.jsx)("div", {
                className: nB.li,
                children: (0, l.jsx)(no.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    disabled: null == n,
                    children: (0, l.jsx)(nW, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: j,
                        highlighted: v,
                        channel: t,
                        guild: n,
                        keyboardModeEnabled: i,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onKeyDown: this.handleInputKeyDown,
                        hasModalOpen: s,
                        pendingReply: r,
                        chatInputType: o,
                        placeholder: c,
                        accessibilityLabel: u,
                        shakeIntensity: f,
                        poggermodeEnabled: C,
                        scheduledMessageDraft: I,
                        announcementComposerEnabled: _,
                    }),
                }),
            }),
            R = b ? N : M,
            D = (0, nS.m1)(t, ng.default, nh.A);
        return (0, l.jsx)(
            y.A,
            {
                page: (0, nA.DJ)(this.props.channel),
                children: (0, l.jsx)(tj.di, {
                    children: (0, l.jsx)(t_.X, {
                        children: (0, l.jsxs)(nf.Ah, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, l.jsx)(nf.EG, { event: eF.jej.TEXTAREA_FOCUS, handler: this.handleInputFocus }),
                                (0, l.jsx)(nf.EG, { event: eF.jej.TEXTAREA_BLUR, handler: this.handleInputBlur }),
                                (0, l.jsx)(nf.EG, {
                                    event: eF.jej.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, l.jsx)(nf.EG, {
                                    event: eF.jej.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, l.jsxs)(nz, {
                                    isSidebar: T,
                                    className: nB.q2,
                                    "aria-label": eK.intl.formatToPlainString(e, { channelName: D }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: this.props.guildOfficialMessageStyle,
                                    children: [
                                        (0, l.jsx)(nj.A, { channel: t, guild: n, narrow: T }),
                                        (0, l.jsxs)(p.F, {
                                            component: (0, l.jsx)(A.A, {
                                                children: (0, l.jsx)(p.H, {
                                                    children: eK.intl.format(eK.t.eTzKkx, { channelName: D }),
                                                }),
                                            }),
                                            children: [
                                                (0, l.jsxs)(e4.h1, {
                                                    channelId: t.id,
                                                    children: [
                                                        (0, l.jsx)(n_.A.Provider, {
                                                            value: this.openEmojiPacks,
                                                            children: (0, l.jsx)(tw.A, {
                                                                channel: t,
                                                                forceCozy: E,
                                                                filterAfterTimestamp: m,
                                                                showingQuarantineBanner: h,
                                                                typingGradient: S,
                                                                hideSummaries: o === U.oU.OVERLAY,
                                                            }),
                                                        }),
                                                        E
                                                            ? null
                                                            : (this.renderMessageBanner({
                                                                  channel: t,
                                                                  showQuarantinedUserBanner: h,
                                                                  guild: n,
                                                                  communicationDisabledUntil: g,
                                                                  showAutomodUserProfileChatBlocker: x,
                                                              }) ??
                                                              (0, l.jsxs)("form", {
                                                                  ref: this.inputFormRef,
                                                                  onSubmit: nK,
                                                                  className: a()(nB.Zd, { [nB.Mf]: !b }),
                                                                  children: [
                                                                      C && (0, l.jsx)(t2, { channelId: t.id }),
                                                                      t.isPrivate()
                                                                          ? (0, l.jsx)(nM.A, {
                                                                                channel: t,
                                                                                children: R,
                                                                            })
                                                                          : (0, l.jsx)(nR.A, {
                                                                                channel: t,
                                                                                children: R,
                                                                            }),
                                                                      (0, l.jsx)(nZ, { channel: t }),
                                                                  ],
                                                              })),
                                                    ],
                                                }),
                                                (0, l.jsx)(tj.lr, {}),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            },
            `messages-${t.id}`,
        );
    }
}
function nZ(e) {
    let { channel: t } = e,
        { conversationFocus: n } = (0, e4.D7)();
    return null != n ? null : (0, l.jsx)(S.Ay, { channel: t, isInTextChannel: !0 });
}
let nJ = i.memo(function (e) {
    var t, n;
    let i,
        s,
        { channel: a, guild: r, chatInputType: o, filterAfterTimestamp: c } = e,
        { placeholder: d, accessibilityLabel: u } = (0, ny.A)({ channel: a }),
        m = (0, tH.A)(),
        g = t6(ng.default.getCurrentUser(), a),
        [p] = (0, th.c)(r?.id),
        A = (0, e8.uZ)(r?.id),
        C = (0, h.bG)([ng.default], () => ng.default.getCurrentUser()),
        E = (0, h.bG)([tl.Ay], () => null != C && (tl.Ay.getMember(r?.id ?? "", C?.id)?.isPending ?? !1)),
        x = (0, h.bG)([tW.A], () => tW.A.isEnabled()),
        I =
            ((t = a.id),
            (i = (0, t3.A)(t4.uD.CHAT_INPUT)),
            (s = (0, h.bG)([tW.A], () => tW.A.isEnabled({ shakeLocation: t4.uD.CHAT_INPUT }))),
            (0, h.bG)([tZ.A, t$.Ay, tn.default], () =>
                s && tZ.A.isTyping(t, tn.default.getId())
                    ? t$.Ay.getUserComboShakeIntensity(tn.default.getId(), t, i)
                    : 0,
            )),
        y = (0, tb.A)(a.id),
        b = ((n = a.id), (0, h.bG)([eE.A], () => eE.A.getScheduledMessage(n))),
        j = (0, h.bG)([t$.Ay, tn.default], () => t$.Ay.getUserCombo(tn.default.getId(), a.id)),
        v = (0, S.rj)(a),
        T = (0, S.aW)(a),
        N = (0, e5.L)(a.id),
        M = v.length > 0 || a.rateLimitPerUser > 0 || null != j || null != T || N,
        { showLinkedLobbyApplicationLoadingIndicator: R } = (0, nI.A)(a.linkedLobby),
        D = e3.useConfig({ location: "ChannelChat" }).announcementComposer,
        k = (0, tF.A)((0, tP.GP)(r, "ChannelChat") ? (r?.officialMessageColor ?? nF.aj) : null),
        L = (0, tL.U)();
    return (0, l.jsx)(nN.j.Provider, {
        value: a.id,
        children: (0, l.jsx)(nq, {
            channel: a,
            restrictedPreview: L,
            guildOfficialMessageStyle: k,
            isEditing: null != (0, h.bG)([nd.A], () => nd.A.getEditingMessageId(a.id)),
            hasModalOpen: (0, f.re)(f.DX),
            guild: r,
            keyboardModeEnabled: (0, h.bG)([_.Ay], () => _.Ay.keyboardModeEnabled),
            pendingReply: (0, h.bG)([nn.A], () => nn.A.getPendingReply(a.id)),
            chatInputType: o,
            isOverlayTextEntryDisabled: m,
            placeholder: d,
            accessibilityLabel: u,
            filterAfterTimestamp: c,
            showQuarantinedUserBanner: g,
            communicationDisabledUntil: p,
            shakeIntensity: I,
            poggermodeEnabled: x,
            isSelectedResourceChannel: y,
            showAutomodUserProfileChatBlocker: A && !E,
            scheduledMessageDraft: b,
            messagesTypingGradient: M,
            showLinkedLobbyApplicationLoadingIndicator: R,
            announcementComposerEnabled: D,
        }),
    });
});
