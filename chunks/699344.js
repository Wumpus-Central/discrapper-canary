(n.d(t, { A: () => nW }), n(938796));
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
    S = n(620014),
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
    U = n(972995),
    G = n(355622),
    w = n(408018);
(n(321073), n(323874), n(14289), n(35956));
var F = n(120692),
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
    es = n(133746);
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
    ed = n(357354),
    eu = n(703007),
    eh = n(2553),
    em = n(946274),
    eg = n(274652),
    ep = n(135621),
    eA = n(406704),
    ef = n(253932),
    eC = n(31717),
    eE = n(638128),
    ex = n(522602),
    eI = n(515718),
    eS = n(723702),
    ey = n(518960),
    eb = n(486319),
    e_ = n(719442),
    ej = n(267102),
    ev = n(787564),
    eT = n(323350),
    eN = n(339200),
    eM = n(68059),
    eR = n(551483);
let eD = {
    ...G.oU.GENERIC_RICH_TEXTAREA,
    markdown: { disableBlockQuotes: !0, disableCodeBlocks: !0, disableInlineCode: !0 },
};
function ek(e) {
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
        h = i.useContext(ej.Ay),
        m = i.useRef(o),
        [g] = i.useState(() => {
            let e = (0, e_.ie)();
            return (
                (e.children = (0, w.x7)(o)),
                (e.selection = { anchor: eR.K, focus: eR.K }),
                (0, eM.a)({
                    editor: e,
                    chatInputType: eD,
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
                            (0, eT.WO)(eN.VW.richValue(e), { mode: "raw" }).length -
                                (null != e.selection && e_.Q6.isExpanded(e.selection)
                                    ? (0, eT.WO)(eN.VW.richValue(e), { mode: "raw", range: e.selection }).length
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
                (g.selection = { anchor: eR.K, focus: eR.K }),
                g.onChange());
        }, [g, o]));
    let p = i.useCallback(
            (e) => {
                let t = (0, eT.WO)(e, { mode: "raw" }),
                    n = (0, eT.WO)(e, { mode: "plain" }),
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
    return (0, l.jsx)(ev.A, {
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
var eL = n(84046),
    eP = n(4025),
    eO = n(989161),
    eU = n(851023),
    eG = n(102077),
    ew = n(652215);
(n(827669), n(294920));
var eF = n(478644),
    eH = n(792996),
    eB = n(806686),
    eK = n(495088);
function eV(e, t, n) {
    return {
        media: { url: e, proxyUrl: e, loadingState: en.TD.UNKNOWN, flags: 0 },
        description: t ?? void 0,
        spoiler: n,
    };
}
let ez = i.memo(function (e) {
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
            setEditorRef: U,
            autoCompletePosition: w,
            disableThemedBackground: H = !1,
            emojiPickerCloseOnModalOuterClick: B,
            parentModalKey: Z,
        } = r,
        J = ea.useField("channelDrafts")[C.id],
        X = J?.title ?? "",
        Y = J?.heroUploadId,
        Q = (0, h.bG)([ex.A], () => (null != Y ? ex.A.getUpload(C.id, Y, eC.C.ChannelMessage) : null)),
        ee = Q?.item,
        et = null != ee && ee.platform === eg.x.WEB ? ee.file : null,
        ec = J?.publish ?? !0,
        eu = J?.createThread ?? !0;
    o()(null != E, "chat input type must be set");
    let { analyticsLocations: eh } = (0, ei.Ay)(el.A.CHANNEL_TEXT_AREA),
        em = (0, eO.L0)(s),
        eI = i.useRef(null),
        ey = i.useRef(null),
        e_ = i.useRef(null),
        ej = i.useRef(null),
        ev = i.useRef(X);
    U?.(ey.current);
    let { activeCommand: eT } = (0, h.cf)([k.A], () => ({
            activeCommand: E.commands?.enabled ? k.A.getActiveCommand(C.id) : null,
            activeCommandSection: E.commands?.enabled ? k.A.getActiveCommandSection(C.id) : null,
        })),
        {
            isLurking: eN,
            isPendingMember: eM,
            disabled: eR,
            canAttachFiles: eD,
            canEveryoneSendMessages: eU,
        } = (0, eO.Sk)(C, E, eT, A),
        ew = !ef.D_.useSetting() && !(0, eS.Ct)() && null != window.ResizeObserver,
        eF = !ew || !E.commands?.enabled || !x || "/" !== c,
        ez = (0, ep.A)(),
        { fontSize: eJ } = (0, h.cf)([_.Ay], () => ({
            fontSize: _.Ay.fontSize,
            isSubmitButtonEnabled: _.Ay.isSubmitButtonEnabled,
        })),
        eX = (0, h.bG)([eE.A], () => eE.A.isEnabled());
    i.useEffect(() => {
        ew || (ev.current = X);
    }, [X, ew]);
    let eY = i.useCallback((e) => er(C.id, { title: e }), [C.id]),
        eQ = i.useCallback((e) => {
            ev.current = e;
        }, []),
        e0 = i.useCallback(() => ey.current?.focus(), []),
        e1 = (0, eA.n)(C);
    (0, eO.N_)(E, eR, C.id);
    let { eventEmitter: e2, handleEditorSelectionChanged: e3 } = (0, eO.ml)(ey, c, d),
        e4 = i.useCallback(
            (e) => {
                function t(e) {
                    return (
                        e.shouldClear &&
                            (er(C.id, { title: "", heroUploadId: null }), (ev.current = ""), ey.current?.blur()),
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
                        ev.current.length > 0
                            ? ev.current
                            : e.value.length > 0
                              ? e.value
                              : eH.intl.string(eH.t["7Xm5QI"])
                    ).slice(0, 100),
                    s = ex.A.getUploads(C.id, eC.C.ChannelMessage),
                    a = s.find((e) => e.id === Y);
                if (null == a)
                    return T({
                        ...e,
                        value: l,
                        announcementSendOptions: { createThread: e1 && eu, threadName: i, publish: ec },
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
                        (n.add(c), l.add(c), I.A.update(e, i.id, eC.C.ChannelMessage, { filename: c }));
                    }
                })(C.id, s),
                    n.push({
                        type: en.I5.MEDIA_GALLERY,
                        items: [eV(`attachment://${a.filename}`, null, !1)],
                        id: "82733",
                    }),
                    l.length > 0 && n.push({ type: en.I5.TEXT_DISPLAY, content: l, id: "82744" }));
                let r = s.filter((e) => e !== a),
                    o = r.filter((e) => e.isImage || e.isVideo),
                    c = r.filter((e) => !e.isImage && !e.isVideo),
                    d = o.map((e) => eV(`attachment://${e.filename}`, e.description, e.spoiler));
                return (
                    d.length > 0 && n.push({ type: en.I5.MEDIA_GALLERY, items: d, id: "82755" }),
                    c.forEach((e, t) => {
                        n.push({
                            type: en.I5.FILE,
                            file: eV(`attachment://${e.filename}`, e.description, e.spoiler).media,
                            id: `${82766 + t}`,
                            spoiler: e.spoiler,
                            name: null,
                            size: null,
                        });
                    }),
                    T({
                        ...e,
                        value: l,
                        components: n,
                        announcementSendOptions: { createThread: e1 && eu, threadName: i, publish: ec },
                    }).then(t)
                );
            },
            [T, X, Y, C.id, eu, ec, e1],
        ),
        { submit: e7, handleSubmit: e5 } = (0, eO.Zx)(e4, E, ey, ej, C.id),
        { autocompleteRef: e8, handleMaybeShowAutocomplete: e6, handleHideAutocomplete: e9 } = (0, eO.v7)(),
        te = i.useCallback(() => ej?.current?.hide(), []),
        { editorHeight: tt, handleResize: tn } = (0, eO.ck)(y),
        {
            handleTab: tl,
            handleEnter: ti,
            handleSpace: ts,
            handleMoveSelection: ta,
        } = ((t = i.useCallback(
            () => !!(!eF && eI.current?.onTabOrEnter(!1)) || e8.current?.onTabOrEnter(!1) || !1,
            [eF],
        )),
        (n = i.useCallback(() => !!(!eF && eI.current?.onTabOrEnter(!0)) || e8.current?.onTabOrEnter(!1) || !1, [eF])),
        {
            handleTab: t,
            handleEnter: n,
            handleSpace: i.useCallback(() => e8.current?.onSpace() || !1, [e8]),
            handleMoveSelection: i.useCallback(
                (e) => !!(!eF && eI.current?.onMoveSelection(e)) || e8.current?.onMoveSelection(e) || !1,
                [eF],
            ),
        }),
        { expressionPickerView: tr, shouldHideExpressionPicker: to, handleOuterClick: tc } = (0, eO.MD)(E, ey, C.id),
        { handleAutocompleteVisibilityChange: td } = (0, eO.uW)(E, C.id),
        tu = (0, eO.NO)(ey),
        th = (0, eO.Vu)(e7, E, ey),
        tm = (0, eO.C)({ editorRef: ey, disabled: eR, textValue: c, channelId: C.id, chatInputType: E, submit: e4 });
    (0, eb.R)(e2, C.guild_id, C.id);
    let [tg, tp] = i.useState(!1),
        tA = i.useCallback(() => {
            (tc(), tp(!0));
        }, [tc]),
        tf = tg || c.length > 0 || null != Q || X.length > 0,
        { editorHeaderHeight: tC, paddingTop: tE } = (0, K.z)({
            editorHeaderHeight: 122 * !!tf,
            paddingTop: 16 * !!tf,
            config: { tension: 120, friction: 15, clamp: !0 },
        }),
        tx = i.useRef(null),
        [tI, tS] = i.useState(!1),
        ty = i.useRef(!1),
        tb = i.useCallback(() => {
            ty.current = !0;
            let e = setTimeout(() => {
                ty.current && tS(!0);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        t_ = i.useCallback(() => {
            ty.current = !1;
            let e = setTimeout(() => {
                ty.current || tS(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        tj = i.useCallback(() => {
            (null != Y && I.A.remove(C.id, Y, eC.C.ChannelMessage), er(C.id, { heroUploadId: null }));
        }, [C.id, Y]);
    return (0, l.jsx)(eo.Sv, {
        value: e2,
        children: (0, l.jsxs)(ei.f5, {
            value: eh,
            children: [
                (0, l.jsxs)("div", {
                    ref: em,
                    className: a()(u, eK.gM),
                    onMouseDown: tA,
                    children: [
                        (0, l.jsx)("div", {
                            ref: e_,
                            onScroll: te,
                            className: a()(eK.Ui, { [eK.k6]: !H }),
                            children: (0, l.jsxs)("div", {
                                className: a()(eK.vW, eB.vW),
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: eB.rf,
                                        children: [
                                            (0, l.jsxs)(F.animated.div, {
                                                className: eB.ov,
                                                style: { height: tC, paddingTop: tE },
                                                children: [
                                                    null != Q
                                                        ? (0, l.jsx)(e$, { file: et, onRemoveHeroImage: tj })
                                                        : null,
                                                    null != Q
                                                        ? null
                                                        : (0, l.jsx)(eZ, {
                                                              channel: C,
                                                              onImageUploaded: (e) => er(C.id, { heroUploadId: e }),
                                                              onFocus: () => tp(!0),
                                                          }),
                                                    ew
                                                        ? (0, l.jsx)(
                                                              ek,
                                                              {
                                                                  channel: C,
                                                                  className: eB.A$,
                                                                  containerClassName: eB.Py,
                                                                  placeholder: eH.intl.string(eH.t.Z8fYjO),
                                                                  spellCheck: eX,
                                                                  title: X,
                                                                  onChange: eY,
                                                                  onPlainTextChange: eQ,
                                                                  onEnter: e0,
                                                              },
                                                              C.id,
                                                          )
                                                        : (0, l.jsx)("input", {
                                                              maxLength: 140,
                                                              className: eB.hz,
                                                              placeholder: eH.intl.string(eH.t.Z8fYjO),
                                                              value: X,
                                                              onChange: (e) => er(C.id, { title: e.target.value }),
                                                          }),
                                                ],
                                            }),
                                            (0, l.jsx)("div", {
                                                className: eB.I6,
                                                children: (0, l.jsx)(V.vN, {
                                                    ringTarget: em,
                                                    ringClassName: eK.Rg,
                                                    children: (0, l.jsx)(eL.A, {
                                                        ref: ey,
                                                        id: g,
                                                        focused: x,
                                                        useSlate: ew,
                                                        textValue: c,
                                                        richValue: d,
                                                        disabled: eR,
                                                        placeholder: L,
                                                        required: p,
                                                        accessibilityLabel: f,
                                                        isPreviewing: (eN || eM) && eU,
                                                        channel: C,
                                                        type: G.oU.CREATE_ANNOUNCEMENT_POST,
                                                        canPasteFiles: eD,
                                                        uploadPromptCharacterCount: 4e3,
                                                        maxCharacterCount: D ?? ez,
                                                        allowNewLines: !0,
                                                        "aria-describedby": P,
                                                        onChange: S,
                                                        onResize: tn,
                                                        onBlur: b,
                                                        onFocus: j,
                                                        onKeyDown: v,
                                                        onSubmit: e7,
                                                        onTab: tl,
                                                        onEnter: ti,
                                                        onSpace: ts,
                                                        onMoveSelection: ta,
                                                        onSelectionChanged: e3,
                                                        onMaybeShowAutocomplete: e6,
                                                        onHideAutocomplete: e9,
                                                        promptToUpload: N,
                                                        fontSize: eJ,
                                                        spellcheckEnabled: eX,
                                                        canOnlyUseTextCommands: !1,
                                                        "aria-labelledby": O,
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: eB.KK,
                                        children: (0, l.jsx)(eG.A, {
                                            channelId: C.id,
                                            type: E,
                                            canAttachFiles: eD,
                                            ignoreUploadId: Y,
                                            smallAttachments: !0,
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, l.jsx)("div", { className: eB.yF }),
                        (0, l.jsxs)("div", {
                            className: eB.qr,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: eB.j4,
                                    children: [
                                        (0, l.jsx)(eq, { channel: C }),
                                        (0, l.jsx)(eP.A, {
                                            type: G.oU.CREATE_ANNOUNCEMENT_POST,
                                            disabled: eR,
                                            channel: C,
                                            handleSubmit: e5,
                                            isEmpty: 0 === c.trim().length,
                                            showAllButtons: !0,
                                            expressionButtonsHidden: !1,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: eB.j4,
                                    children: (0, l.jsx)("div", {
                                        ref: tx,
                                        className: eB.Qo,
                                        onMouseEnter: tb,
                                        onMouseLeave: t_,
                                        children: (0, l.jsx)(m.Y, {
                                            targetElementRef: tx,
                                            renderPopout: () =>
                                                (0, l.jsx)(eW, { channelId: C.id, canCreateThread: e1 }),
                                            shouldShow: tI,
                                            autoInvert: !0,
                                            nudgeAlignIntoViewport: !0,
                                            position: "top",
                                            align: "right",
                                            children: (e) =>
                                                (0, l.jsx)(z.$, {
                                                    ...e,
                                                    onClick: () => {
                                                        e7(c);
                                                    },
                                                    disabled: 0 === c.length && 0 === X.length,
                                                    size: "sm",
                                                    "aria-label": eH.intl.string(eH.t.TXNS7S),
                                                    innerClassName: eB.jo,
                                                    text: (0, l.jsxs)("div", {
                                                        className: eB.f9,
                                                        children: [
                                                            (0, l.jsx)(W.E, {
                                                                variant: "body-sm/semibold",
                                                                color: "text-overlay-light",
                                                                children: eH.intl.string(eH.t.TXNS7S),
                                                            }),
                                                            (0, l.jsxs)("div", {
                                                                className: eB.pj,
                                                                children: [
                                                                    (0, l.jsx)($.SendMessageIcon, {
                                                                        size: "xs",
                                                                        color: "white",
                                                                    }),
                                                                    e1 && eu
                                                                        ? (0, l.jsx)(q.ThreadIcon, {
                                                                              size: "xxs",
                                                                              color: "white",
                                                                              className: eB.Q5,
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
                            ref: e8,
                            channel: C,
                            canMentionRoles: M,
                            canMentionChannels: R,
                            useNewSlashCommands: ew,
                            canOnlyUseTextCommands: !1,
                            canSendStickers: !0,
                            textValue: c,
                            focused: x,
                            expressionPickerView: tr,
                            type: E,
                            editorRef: ey,
                            onSendMessage: e7,
                            onSendSticker: () => {},
                            onVisibilityChange: td,
                            editorHeight: tt,
                            setValue: (e, t) => S?.(null, e, t),
                            position: w,
                        }),
                    ],
                }),
                to
                    ? null
                    : (0, l.jsx)(ed.A, {
                          positionTargetRef: em,
                          type: E,
                          onSelectGIF: th,
                          onSelectEmoji: tu,
                          onSelectSticker: tm,
                          channel: C,
                          closeOnModalOuterClick: B,
                          parentModalKey: Z,
                          position: "top",
                          align: "right",
                          positionLayerClassName: eK.BD,
                      }),
            ],
        }),
    });
});
function eW(e) {
    let { channelId: t, canCreateThread: n } = e,
        i = ea.useField("channelDrafts")[t],
        s = i?.createThread ?? !0,
        a = i?.publish ?? !0;
    return (0, l.jsxs)(Z.W, {
        "data-menu-migrated": !0,
        "aria-label": eH.intl.string(eH.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: ew.tEg,
        onSelect: ew.tEg,
        children: [
            (0, l.jsx)(J.sL, {
                id: "create-thread",
                label: eH.intl.string(eH.t.rBIGBL),
                checked: n && s,
                disabled: !n,
                action: () => {
                    er(t, { createThread: !s });
                },
            }),
            (0, l.jsx)(J.sL, {
                id: "send-and-publish",
                label: eH.intl.string(eH.t.MFGE51),
                checked: a,
                action: () => {
                    er(t, { publish: !a });
                },
            }),
        ],
    });
}
function e$(e) {
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
              className: eB.Lb,
              "aria-hidden": !0,
              children: [
                  (0, l.jsx)("img", { src: s, alt: eH.intl.string(eH.t["2ePvR8"]), className: eB.c8 }),
                  r
                      ? (0, l.jsx)(ec.Ay, {
                            className: eB.jM,
                            children: (0, l.jsx)(eU.A, {
                                tooltip: eH.intl.string(eH.t.VjC21x),
                                onClick: n,
                                dangerous: !0,
                                children: (0, l.jsx)(X.TrashIcon, {}),
                            }),
                        })
                      : null,
              ],
          });
}
function eq(e) {
    let { channel: t } = e;
    return (0, l.jsx)(eu.A, {
        "aria-label": eH.intl.string(eH.t["/IBYAq"]),
        className: eB.g$,
        size: "icon",
        color: "transparent",
        look: "blank",
        onChange: function (e) {
            let { files: n } = e.currentTarget;
            (null != n && (0, ey.R)(n, t, eC.C.ChannelMessage, { requireConfirm: !0, origin: "file_picker" }),
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
function eZ(e) {
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
        className: eB.qN,
        children: (0, l.jsx)(Q.m, {
            asContainer: !0,
            text: eH.intl.string(eH.t["/IBYAq"]),
            position: "top",
            children: (0, l.jsxs)(ee.D, {
                className: eB.qN,
                onMouseOver: c,
                onMouseOut: d,
                onFocus: s,
                children: [
                    (0, l.jsx)(em.Ay, {
                        ref: a,
                        onChange: async function (e, l) {
                            let i = await (0, eI.bX)(e, l.name, l.type),
                                s = (0, H.A)(),
                                a = { id: s, file: i, platform: eg.x.WEB, isThumbnail: !1, origin: "file_picker" };
                            (I.A.addFile({ file: a, channelId: t.id, draftType: eC.C.ChannelMessage }), n(s));
                        },
                        "aria-hidden": !0,
                        tabIndex: -1,
                        maxFileSizeBytes: eF.j,
                        onFileSizeError: () => (0, eh.A)(eF.j),
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
var eJ = n(664929),
    eX = n(742287);
let eY = i.memo(function (e) {
    let { className: t, channel: n, section: i } = e,
        s = null != i ? (0, eJ.Rg)(i) : null,
        r =
            null != s
                ? (0, l.jsx)(Q.m, {
                      __unsupportedReactNodeAsText: i?.name ?? "",
                      position: "top",
                      children: (0, l.jsx)(s, { channel: n, section: i, width: 24, height: 24 }),
                  })
                : null;
    return (0, l.jsx)("div", {
        className: a()(t, eX.i),
        children: (0, l.jsx)("div", { className: eX.K, children: r }),
    });
});
var eQ = n(316576),
    e0 = n(35277);
let e1 = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-announcement-composer",
    defaultConfig: { announcementComposer: !1 },
    variations: { 1: { announcementComposer: !0 } },
});
var e2 = n(319365),
    e3 = n(151271),
    e4 = n(407278),
    e7 = n(81400),
    e5 = n(353182),
    e8 = n(727875);
function e6(e) {
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
        className: a()(e8.Ew, o),
        children: [
            (0, l.jsxs)("div", {
                className: a()(e8.lt, s),
                children: [
                    null != t && ("string" == typeof t ? (0, l.jsx)("img", { src: t, alt: "", className: e8.q3 }) : t),
                    (0, l.jsxs)("div", {
                        className: e8._M,
                        children: [
                            (0, l.jsx)("div", { className: a()(e8.U_, r), children: n }),
                            null != i && (0, l.jsx)("div", { className: e8.mi, children: i }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: e8.uu, children: c }),
        ],
    });
}
var e9 = n(206835),
    te = n(46653),
    tt = n(696451),
    tn = n(229527),
    tl = n(340837),
    ti = n(355097),
    ts = n(364634);
function ta(e) {
    let { guild: t } = e,
        n = (0, e9.A)({ scrollPosition: ti._F.GUILD_TAG });
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(e6, {
            bannerIcon: (0, l.jsx)(e5.ChatXIcon, { size: "lg", color: "currentColor", className: ts.q3 }),
            bannerHeader: eH.intl.format(eH.t.GgMwjk, { guildName: t?.name ?? "" }),
            bannerSubtext: eH.intl.string(eH.t.ONjwD5),
            textStyles: ts.cI,
            headerStyles: ts.U_,
            children: (0, l.jsx)(z.$, {
                variant: "primary",
                size: "sm",
                text: eH.intl.string(eH.t.Viksoo),
                onClick: () => n(),
            }),
        }),
    });
}
function tr(e) {
    let { guild: t } = e,
        { analyticsLocations: n } = (0, ei.Ay)(el.A.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [i, s] = (0, e7.j8)({ guildId: t?.id ?? "", analyticsLocations: n }),
        a = s ? eH.intl.string(eH.t["9ph2v7"]) : eH.intl.string(eH.t.ldh9Cg),
        r = s ? eH.intl.string(eH.t["/PGQf0"]) : eH.intl.string(eH.t.WikgZ1);
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(e6, {
            bannerIcon: (0, l.jsx)(e5.ChatXIcon, { size: "lg", color: "currentColor", className: ts.q3 }),
            bannerHeader: eH.intl.format(eH.t.kcYdTq, { guildName: t?.name ?? "" }),
            bannerSubtext: a,
            textStyles: ts.cI,
            headerStyles: ts.U_,
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
function to(e) {
    let { guild: t } = e,
        n = (0, h.bG)(
            [te.default, tt.Ay],
            () => {
                if (null == t) return new Set();
                let e = te.default.getId();
                return (0, tn.wj)(tt.Ay.getMember(t.id, e));
            },
            [t],
        );
    return n.has(tl.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(tl.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, l.jsx)(tr, { guild: t })
        : n.has(tl.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, l.jsx)(ta, { guild: t })
          : (0, l.jsx)(tr, { guild: t });
}
var tc = n(316031),
    td = n(870136),
    tu = n(60270),
    th = n(576470),
    tm = n(496431),
    tg = n(592713),
    tp = n(264388),
    tA = n(534514),
    tf = n(542290);
function tC(e) {
    let { onClose: t, guildName: n } = e;
    return (0, l.jsxs)("div", {
        className: tf.kL,
        children: [
            (0, l.jsx)("div", {
                className: tf.zc,
                children: (0, l.jsx)(tu.ClockWarningIcon, {
                    size: "custom",
                    color: "currentColor",
                    className: tf.Kk,
                    width: 20,
                    height: 20,
                }),
            }),
            (0, l.jsxs)("div", {
                className: tf.wx,
                children: [
                    (0, l.jsx)(tA.D, {
                        variant: "heading-sm/semibold",
                        className: tf.TK,
                        children: eH.intl.string(eH.t.LIIyeE),
                    }),
                    (0, l.jsx)(W.E, {
                        variant: "body-sm/normal",
                        children: eH.intl.format(eH.t["4/6vQh"], { guildName: n }),
                    }),
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tf.x6,
                        children: (0, l.jsx)(z.$, {
                            variant: "primary",
                            text: eH.intl.string(eH.t.BddRzS),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var tE = n(200700),
    tx = n(481161);
function tI(e) {
    let { guild: t, disabledUntil: n } = e,
        [s, a] = (0, tp.n)(t.id);
    return (
        !(function (e) {
            let { communicationDisabledUntil: t, userId: n, guildId: l } = e ?? {},
                s = (0, tm.A)(null != t ? Date.parse(t) : Date.now()).seconds,
                a = (0, i.useRef)(null);
            (0, i.useEffect)(
                () =>
                    null == e || null == l || null == n
                        ? void clearTimeout(a.current)
                        : (s <= 0 &&
                              null == a.current &&
                              (a.current = setTimeout(() => {
                                  tg.A.clearGuildMemberTimeout(l, n);
                              }, 1e3)),
                          () => {
                              null != a.current && (clearTimeout(a.current), (a.current = null));
                          }),
                [l, n, s, t, e],
            );
        })((0, h.bG)([tt.Ay, te.default], () => tt.Ay.getMember(t.id, te.default.getId()), [t.id])),
        (0, l.jsxs)("div", {
            children: [
                s ? (0, l.jsx)(tC, { onClose: () => a(t.id), guildName: t.name }) : null,
                (0, l.jsx)(e6, {
                    bannerIcon: (0, l.jsx)(tu.ClockWarningIcon, {
                        size: "md",
                        color: "currentColor",
                        className: tx.q3,
                    }),
                    bannerHeader: eH.intl.string(eH.t["9UoK6Y"]),
                    bannerSubtext: eH.intl.format(eH.t["4ZwD5G"], { link: tE.MO }),
                    textStyles: tx.cI,
                    headerStyles: tx.U_,
                    children: (0, l.jsx)(W.E, {
                        variant: "body-sm/semibold",
                        children: (0, l.jsx)(th.A, { deadline: new Date(n), showUnits: !0, stopAtOneSec: !0 }),
                    }),
                }),
            ],
        })
    );
}
var tS = n(885071),
    ty = n(39738),
    tb = n(513609),
    t_ = n(176781),
    tj = n(683825),
    tv = n(273692);
function tT() {
    return (0, l.jsx)(e6, {
        textStyles: tv.U,
        bannerIcon: (0, l.jsx)(t_.ClipsIcon, { size: "lg" }),
        bannerHeader: eH.intl.string(tj.default.unC18Z),
        bannerSubtext: eH.intl.string(tj.default["7mR8Bv"]),
    });
}
var tN = n(458914),
    tM = n(959698),
    tR = n(521427),
    tD = n(751258),
    tk = n(451909),
    tL = n(926262),
    tP = n(567008),
    tO = n(537174),
    tU = n(973196),
    tG = n(361729),
    tw = n(308718);
function tF() {
    return (0, l.jsx)(e6, {
        containerStyles: tw.k,
        bannerHeader: eH.intl.string(tG.default.e7ydX0),
        bannerSubtext: eH.intl.string(tG.default.POfugg),
    });
}
var tH = n(591563),
    tB = n(3137),
    tK = n(559908);
n(142703);
var tV = n(765671),
    tz = n(741961),
    tW = n(459793),
    t$ = n(103640);
function tq(e, t) {
    return e === t || (e?.channelId === t?.channelId && e?.value === t?.value && e?.multiplier === t?.multiplier);
}
var tZ = n(93219);
let tJ = i.memo(function (e) {
        let { channelId: t, width: n } = e,
            s = (0, h.bG)([_.Ay], () => _.Ay.useReducedMotion),
            a = (0, h.bG)([tK.Ay], () => tK.Ay.getMostRecentMessageCombo(t), [t]),
            [r, o] = i.useState(!1);
        i.useEffect(() => {
            if (a?.displayed) return;
            (o(!1),
                setImmediate(() => {
                    o((null != a ? (0, t$.RL)(a.combo) : 0) > 0);
                }));
            let e = setTimeout(() => {
                (o(!1), null != a && (0, tH.Nu)(a));
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
                className: tZ.Gi,
                style: d,
                children: (0, l.jsx)(W.E, {
                    className: tZ.fX,
                    variant: "body-sm/semibold",
                    children: (0, t$.RL)(a.combo),
                }),
            })
        );
    }),
    tX = i.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: s, square: r, flair: o } = i.useMemo(() => (0, t$.HN)(n), [n]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(W.E, { className: tZ.iR, variant: "body-sm/semibold", children: t }),
                (0, l.jsxs)("div", {
                    className: tZ._Z,
                    style: { color: s },
                    children: [
                        (0, l.jsx)(W.E, {
                            className: tZ.On,
                            style: { color: s },
                            variant: "body-sm/semibold",
                            children: eH.intl.format(eH.t["6bgVlq"], { multiplier: n }),
                        }),
                        r &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", { className: a()(tZ.QA, tZ.kb), style: { backgroundColor: s } }),
                                    (0, l.jsx)("div", { className: a()(tZ.QA, tZ.pG), style: { backgroundColor: s } }),
                                ],
                            }),
                        o &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", {
                                        className: a()(tZ.ox, tZ.kb),
                                        children: (0, l.jsx)(tW.A, { width: 24, height: 24 }),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: a()(tZ.ox, tZ.pG),
                                        children: (0, l.jsx)(tW.A, { width: 24, height: 24 }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, l.jsx)(W.E, {
                                className: tZ.uN,
                                variant: "body-sm/semibold",
                                children: eH.intl.string(eH.t.b5Cpof),
                            }),
                    ],
                }),
            ],
        });
    }),
    tY = i.memo(function (e) {
        let t,
            { channelId: n } = e,
            s = (0, h.bG)([te.default], () => te.default.getId()),
            a = (0, h.bG)([tz.A], () => tz.A.isTyping(n, s), [n, s]),
            r = (0, h.bG)([tB.A], () => tB.A.isEnabled()),
            o = (0, h.bG)([tK.Ay], () => tK.Ay.isComboing(s, n), [n, s]),
            { ref: c, width: d = 0 } = (0, tV.Ay)(),
            [u, m] = i.useState(!1),
            g =
                ((t = (0, h.bG)([tB.A], () => !!tB.A.isEnabled() && tB.A.combosEnabled)),
                (0, h.bG)(
                    [tK.Ay, te.default],
                    () => (t ? tK.Ay.getUserCombo(te.default.getId(), n) : void 0),
                    [n, t],
                    tq,
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
                (0, l.jsx)(tJ, { channelId: n, width: d }),
                (0, l.jsx)(F.animated.div, {
                    ref: c,
                    className: tZ.p_,
                    style: A,
                    children: (0, l.jsx)(tX, { value: x, multiplier: E }),
                }),
            ],
        });
    });
var tQ = n(208343),
    t0 = n(31408),
    t1 = n(810685),
    t2 = n(806621),
    t3 = n(596344);
let t4 = function (e, t) {
    let n = (0, t2.r)(t),
        l = (0, h.bG)([t3.A], () => t3.A.getMessages(t.id).length > 0, [t]);
    return null != e && e.hasFlag(ew.nhx.QUARANTINED) && n && !l;
};
var t7 = n(831502);
let t5 = function () {
    return (0, l.jsx)(e6, {
        bannerIcon: (0, l.jsx)(t1.M, { alt: "", width: 80, height: 40 }),
        bannerHeader: eH.intl.string(eH.t.EouHwv),
        bannerSubtext: eH.intl.format(eH.t.PThBel, { appealLink: t7.q }),
    });
};
var t8 = n(118517),
    t6 = n(853145),
    t9 = n(226698),
    ne = n(307805),
    nt = n(985632);
let nn = function (e) {
    let { channelId: t } = e,
        n = i.useCallback(() => {
            t9.A.reopenModReport(t);
        }, [t]);
    return (0, l.jsx)(e6, {
        bannerHeader: (0, l.jsx)(W.E, {
            variant: "body-md/medium",
            color: "text-muted",
            children: eH.intl.string(ne.default["0eUUeF"]),
        }),
        headerStyles: nt.U,
        containerStyles: nt.c,
        children: (0, l.jsx)(z.$, {
            variant: "secondary",
            size: "sm",
            text: eH.intl.string(ne.default["6quCi9"]),
            onClick: n,
        }),
    });
};
var nl = n(631576),
    ni = n(728321),
    ns = n(799704),
    na = n(580745),
    nr = n(576705),
    no = n(994500),
    nc = n(309010),
    nd = n(287809),
    nu = n(129230),
    nh = n(147036),
    nm = n(234320),
    ng = n(188567),
    np = n(811091),
    nA = n(710272),
    nf = n(382287),
    nC = n(137577),
    nE = n(47167),
    nx = n(480870),
    nI = n(390756),
    nS = n(178653),
    ny = n(626977),
    nb = n(549400);
function n_() {
    return (0, l.jsxs)("div", {
        className: nb.kL,
        children: [
            (0, l.jsx)("div", { className: a()(nb.v9, nb.KJ) }),
            (0, l.jsx)("div", { className: a()(nb.v9, nb.rx) }),
        ],
    });
}
var nj = n(544990),
    nv = n(678655),
    nT = n(858899),
    nN = n(336590),
    nM = n(190857),
    nR = n(378570),
    nD = n(138298),
    nk = n(260771);
function nL(e) {
    let { channel: t } = e,
        n = (0, nN.k)(),
        s = (0, h.bG)([nd.default], () => nd.default.getUser(t.getRecipientId())),
        a = i.useCallback(() => {
            (0, nT.P0)({ text: eH.intl.string(eH.t["EDYbS+"]), variant: "critical" });
        }, []),
        r = i.useCallback(() => {
            nD.A.closeChannelSidebar(ns.fe);
        }, []),
        o = i.useCallback(() => {
            (nD.A.closeChannelSidebar(ns.fe), n && (0, nR.iN)(t.id));
        }, [t.id, n]),
        {
            acceptMessageRequest: c,
            rejectMessageRequest: d,
            isAcceptLoading: u,
            isRejectLoading: m,
            isUserProfileLoading: g,
            isOptimisticAccepted: p,
            isOptimisticRejected: A,
        } = (0, nM.t)({ user: s, onAcceptSuccess: o, onRejectSuccess: r, onError: a }),
        f = u || m || g || p || A;
    return (0, l.jsxs)("div", {
        className: nk.kL,
        children: [
            (0, l.jsx)(W.E, {
                className: nk.VA,
                variant: "body-md/medium",
                color: "text-muted",
                children: eH.intl.string(eH.t.YQ0uUE),
            }),
            (0, l.jsxs)("div", {
                className: nk.o1,
                children: [
                    (0, l.jsx)(z.$, {
                        variant: "secondary",
                        size: "sm",
                        text: eH.intl.string(eH.t.BVN4pL),
                        onClick: () => d(t.id),
                        disabled: f,
                        loading: m || A,
                    }),
                    (0, l.jsx)(z.$, {
                        variant: "primary",
                        size: "sm",
                        text: eH.intl.string(eH.t.Kz8Pwr),
                        onClick: () => c(t.id),
                        disabled: f,
                        loading: u || g || p,
                    }),
                ],
            }),
        ],
    });
}
var nP = n(698279),
    nO = n(381941),
    nU = n(650583),
    nG = n(999900);
function nw(e) {
    e.preventDefault();
}
let nF = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function nH(e) {
    let { isSidebar: t, ...n } = e;
    return t ? (0, l.jsx)("section", { ...n, role: "complementary" }) : (0, l.jsx)("main", { ...n });
}
function nB(e) {
    let { ref: t, ...n } = e;
    return (0, l.jsx)(nK, { ...n, ref: t });
}
nB.displayName = "ChannelTextAreaForm";
class nK extends i.PureComponent {
    focusEditor() {
        this.editorRef?.focus();
    }
    submit() {
        this.editorRef?.submit();
    }
    isFirstChange = !0;
    editorRef = null;
    state = { ...(0, w.ur)(eC.A.getDraft(this.props.channel.id, eC.C.ChannelMessage)), contentWarningProps: null };
    componentDidMount() {
        eC.A.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eC.A.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: l } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eC.A.getDraft(n.id, eC.C.ChannelMessage);
            e !== l && this.setState((0, w.ur)(e));
        }
        t.textValue.length < 2e3 && l.length >= 2e3 && nu.default.track(ew.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    draftDidChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                { textValue: n } = e.state,
                l = eC.A.getDraft(t.channel.id, eC.C.ChannelMessage);
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
            case nU.dh.DELETE:
            case nU.dh.BACKSPACE:
                return void this.handleIncrementCombo("", 1);
            case nU.dh.ARROW_UP:
                if (i || s) return;
                if ((e.preventDefault(), t))
                    ex.A.getUploadCount(l.id, eC.C.ChannelMessage) > 0
                        ? ng._.dispatchToLastSubscribed(ew.jej.FOCUS_ATTACHMENT_AREA)
                        : ng._.dispatchToLastSubscribed(ew.jej.FOCUS_MESSAGES, { atEnd: !0 });
                else {
                    let { channel: e } = this.props,
                        t = t3.A.getLastChatCommandMessage(e.id),
                        n = t3.A.getLastEditableMessage(e.id);
                    null != t && null != n
                        ? np.default.compare(n.id, t.id) > 0
                            ? this.handleEditLastMessage(n)
                            : this.handleRecallLastCommand(t)
                        : null != t
                          ? this.handleRecallLastCommand(t)
                          : null != n && this.handleEditLastMessage(n);
                }
                return;
            case nU.dh.ESCAPE:
                if (i || e.target !== e.currentTarget) return;
                if ((e.preventDefault(), t)) return void (0, b.Bm)();
                if (ex.A.getUploadCount(l.id, eC.C.ChannelMessage) > 0)
                    return void I.A.clearAll(l.id, eC.C.ChannelMessage);
        }
        n?.(e, s);
    };
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        (E.A.startEditMessageRecord(t.id, e), j.Ay.trackWithMetadata(ew.HAw.MESSAGE_EDIT_UP_ARROW));
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
            l = te.default.getId(),
            i = tK.Ay.getUserCombo(l, n),
            s = (i?.value ?? 0) + 1;
        (0, tH.oG)({ channelId: n, userId: l, value: null != e ? e.length : s, multiplier: t });
    };
    handleTextareaChange = (e, t, n) => {
        let {
            keyboardModeEnabled: l,
            chatInputType: i,
            channel: { id: s },
        } = this.props;
        if (i === G.oU.NORMAL && s !== nc.Ay.getChannelId()) return;
        C.A.changeDraft(s, t, eC.C.ChannelMessage);
        let a = "" !== t && n !== this.state.richValue,
            r = a && !nF.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
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
                    ng._.dispatch(ew.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                    Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                );
            let e = k.A.getCommandOrigin(h.id);
            if (null == e || e === L.iw.CHAT) {
                let { isAuthorized: e } = await (0, U.q)({
                    applicationId: i.applicationId,
                    channel: h,
                    commandIntegrationTypes: i.integration_types,
                });
                if (!e) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
            } else if (e === L.iw.APPLICATION_LAUNCHER || e === L.iw.IMAGE_RECS_MENU || e === L.iw.IMAGE_RECS_SUBMENU) {
                let { location: t, sectionName: n } = (0, nI.bV)(i) ?? {},
                    l = e === L.iw.APPLICATION_LAUNCHER ? T.A.lastShownEntrypoint() : N.s4.TEXT,
                    { isAuthorized: s } = await (0, U.q)({
                        applicationId: i.applicationId,
                        channel: h,
                        commandIntegrationTypes: i.integration_types,
                        appLauncherContext: { location: t, sectionName: n, entrypoint: l },
                    });
                if (!s) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
                (0, nI.My)(i);
            }
            let n = await (0, O.A)({ command: i, optionValues: s ?? {}, context: { guild: d, channel: h } });
            if (i.inputType !== L.y$.BUILT_IN_TEXT) return Promise.resolve({ shouldClear: !0, shouldRefocus: !0 });
            null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (p = !0 === n.tts));
        }
        return (0, nA.i)({
            openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
            type: this.props.chatInputType,
            content: t,
            hasStickers: null != l && l.length > 0,
            hasAttachments: null != n && n.length > 0,
            channel: h,
        }).then((e) => {
            let { valid: s, failureReason: A } = e;
            if (!s)
                if (A === ew.X8x.SLOWMODE_COOLDOWN)
                    return (
                        ng._.dispatch(ew.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                        ng._.dispatch(ew.jej.EMPHASIZE_SLOWMODE_COOLDOWN),
                        { shouldClear: !1, shouldRefocus: !0 }
                    );
                else return { shouldClear: !1, shouldRefocus: !1 };
            let f = (0, tD.S)(t, { channel: h, isEdit: !1 });
            null != f && (null != f.content && (t = f.content), null != f.tts && (p = f.tts));
            let x = tk.Ay.parse(h, t);
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
                location: nO.Hx.CHAT_INPUT,
            };
            if (
                (null != c && (S.announcementSendOptions = c),
                null != r && (S.gifMetadata = r),
                null != o && (S.flags = (0, u.UI)(S.flags ?? 0, ew.pr7.IS_COMPONENTS_V2)),
                a)
            )
                return (E.A.sendMessage(h.id, x, void 0, S), (0, t8.Jx)(h.id), { shouldClear: !1, shouldRefocus: !0 });
            function y() {
                ("" !== t &&
                    "" === eC.A.getDraft(h.id, eC.C.ChannelMessage) &&
                    C.A.saveDraft(h.id, t, eC.C.ChannelMessage),
                    null != n &&
                        n.length > 0 &&
                        0 === ex.A.getUploadCount(h.id, eC.C.ChannelMessage) &&
                        I.A.setUploads({ channelId: h.id, uploads: n, draftType: eC.C.ChannelMessage }));
            }
            if (null != n && n.length > 0) {
                let e = (0, nf.LJ)(n);
                if ((0, nf.fJ)({ files: e, guildId: d?.id }))
                    return ((0, ey.V)(h, e), { shouldClear: !1, shouldRefocus: !1 });
                ((S.eagerDispatch = !1),
                    (S.attachmentsToUpload = n),
                    (S.onAttachmentUploadError = (e, t, n) => {
                        (0, tN.k)({ file: e, guildId: h.getGuildId(), analyticsLocations: [], code: t, reason: n }) &&
                            y();
                    }),
                    I.A.clearAll(h.id, eC.C.ChannelMessage));
            }
            return (
                E.A.sendMessage(h.id, x, void 0, S).catch((e) => {
                    throw ((null != S.scheduledTimestamp || !1 === S.eagerDispatch) && y(), e);
                }),
                this.setState((0, w.N3)()),
                (0, t8.Jx)(h.id),
                (0, nl.x5)(h.id, g.drafts.type),
                { shouldClear: !0, shouldRefocus: !0 }
            );
        });
    };
    handleSetValue = (e) => {
        let t = this.editorRef?.getSlateEditor();
        null != t && (e0.b.select(t, []), t.insertText(e), this.editorRef?.focus());
    };
    renderAttachButton = (e, t) =>
        (0, l.jsx)(eQ.A, {
            className: t,
            channel: this.props.channel,
            draftType: eC.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: this.handleSetValue,
            canOnlyUseTextCommands: e,
            chatInputType: this.props.chatInputType,
        });
    renderApplicationCommandIcon = (e, t, n) =>
        (0, l.jsx)(eY, { className: n, command: e, section: t, channel: this.props.channel });
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
                e.type === ew.rbe.GUILD_ANNOUNCEMENT && f
                    ? (0, l.jsx)(ez, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: nG.gM,
                          channel: e,
                          placeholder: d,
                          accessibilityLabel: u,
                          pendingReply: r,
                          type: G.oU.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: s,
                          onFocus: i,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: ey.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, l.jsx)(eO.Ay, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: nG.gM,
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
                          promptToUpload: ey.R,
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
                    (0, l.jsx)(tL.A, { onClose: t, ...C })
                );
            },
            children: () =>
                p ? (0, l.jsx)(g.b, { isShaking: h > 0, intensity: h, className: nG.Xn, children: E }) : E,
        });
    }
}
class nV extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: l } = t;
        return n.id !== l
            ? { textAreaFocused: null != n && !c.Fr && nr.A.can(ew.xBc.SEND_MESSAGES, n), currentChannelId: n.id }
            : null;
    }
    containerDomRef = i.createRef();
    refToChannelTextAreaFormComponent = i.createRef();
    inputFormRef = i.createRef();
    state = { textAreaFocused: !1, textAreaHighlighted: !1, currentChannelId: this.props.channel.id };
    dispatchGroupRef = i.createRef();
    componentDidMount() {
        ng._.subscribe(ew.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        ng._.unsubscribe(ew.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
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
                case nU.dh.ARROW_LEFT:
                    n === G.oU.SIDEBAR &&
                        ng._.dispatch(ew.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: nc.Ay.getChannelId() });
                    return;
                case nU.dh.ARROW_RIGHT:
                    n === G.oU.NORMAL &&
                        ng._.dispatch(ew.jej.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: ns.Ay.getCurrentSidebarChannelId(l.id),
                        });
            }
    };
    handleOpenExpressionPicker = (e) => {
        let { activeView: t } = e;
        (0, e3.bf)(t, this.props.chatInputType, this.props.channel.id);
    };
    openEmojiPacks = (e) => {
        let { channel: t, chatInputType: n, announcementComposerEnabled: l } = this.props,
            i = t.type === ew.rbe.GUILD_ANNOUNCEMENT && l ? G.oU.CREATE_ANNOUNCEMENT_POST : n;
        (0, e3.bf)(nP.kx.EMOJI, i, t.id, { showSelectedEmojiPackId: e });
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
            ? (0, l.jsx)(tT, {})
            : this.props.restrictedPreview && t.type === ew.rbe.DM
              ? (0, l.jsx)(nL, { channel: t })
              : t.type === ew.rbe.DM && n
                ? (0, l.jsx)(t5, {})
                : t.isModeratorReportChannel() && t.isArchivedThread()
                  ? (0, l.jsx)(nn, { channelId: t.id })
                  : null != s && (0, tc.n)(s) && null != i && !nr.A.can(ew.xBc.ADMINISTRATOR, i)
                    ? (0, l.jsx)(tI, { guild: i, disabledUntil: s })
                    : a
                      ? (0, l.jsx)(to, { guild: i })
                      : this.props.isOverlayTextEntryDisabled
                        ? (0, l.jsx)(tF, {})
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
            T = o === G.oU.SIDEBAR;
        e =
            T && t.type === ew.rbe.GUILD_VOICE
                ? eH.t.pnnyFZ
                : T && t.type === ew.rbe.GUILD_STAGE_VOICE
                  ? eH.t.YInSkq
                  : d.k.THREADS.has(t.type)
                    ? eH.t["OkzL+Q"]
                    : eH.t.UbNmGc;
        let N = (0, l.jsx)("div", { className: nG.li, children: (0, l.jsx)(n_, {}) }),
            M = (0, l.jsx)("div", {
                className: nG.li,
                children: (0, l.jsx)(ni.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    disabled: null == n,
                    children: (0, l.jsx)(nB, {
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
            D = (0, nE.m1)(t, nd.default, no.A);
        return (0, l.jsx)(
            y.A,
            {
                page: (0, nh.DJ)(this.props.channel),
                children: (0, l.jsx)(tb.di, {
                    children: (0, l.jsx)(ty.X, {
                        children: (0, l.jsxs)(nm.Ah, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, l.jsx)(nm.EG, { event: ew.jej.TEXTAREA_FOCUS, handler: this.handleInputFocus }),
                                (0, l.jsx)(nm.EG, { event: ew.jej.TEXTAREA_BLUR, handler: this.handleInputBlur }),
                                (0, l.jsx)(nm.EG, {
                                    event: ew.jej.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, l.jsx)(nm.EG, {
                                    event: ew.jej.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, l.jsxs)(nH, {
                                    isSidebar: T,
                                    className: nG.q2,
                                    "aria-label": eH.intl.formatToPlainString(e, { channelName: D }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: this.props.guildOfficialMessageStyle,
                                    children: [
                                        (0, l.jsx)(ny.A, { channel: t, guild: n, narrow: T }),
                                        (0, l.jsxs)(p.F, {
                                            component: (0, l.jsx)(A.A, {
                                                children: (0, l.jsx)(p.H, {
                                                    children: eH.intl.format(eH.t.eTzKkx, { channelName: D }),
                                                }),
                                            }),
                                            children: [
                                                (0, l.jsxs)(e2.h1, {
                                                    channelId: t.id,
                                                    children: [
                                                        (0, l.jsx)(nS.A.Provider, {
                                                            value: this.openEmojiPacks,
                                                            children: (0, l.jsx)(tP.A, {
                                                                channel: t,
                                                                forceCozy: E,
                                                                filterAfterTimestamp: m,
                                                                showingQuarantineBanner: h,
                                                                typingGradient: S,
                                                                hideSummaries: o === G.oU.OVERLAY,
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
                                                                  onSubmit: nw,
                                                                  className: a()(nG.Zd, { [nG.Mf]: !b }),
                                                                  children: [
                                                                      C && (0, l.jsx)(tY, { channelId: t.id }),
                                                                      t.isPrivate()
                                                                          ? (0, l.jsx)(nj.A, {
                                                                                channel: t,
                                                                                children: R,
                                                                            })
                                                                          : (0, l.jsx)(nv.A, {
                                                                                channel: t,
                                                                                children: R,
                                                                            }),
                                                                      (0, l.jsx)(nz, { channel: t }),
                                                                  ],
                                                              })),
                                                    ],
                                                }),
                                                (0, l.jsx)(tb.lr, {}),
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
function nz(e) {
    let { channel: t } = e,
        { isFocused: n } = (0, e2.D7)();
    return n ? null : (0, l.jsx)(S.Ay, { channel: t, isInTextChannel: !0 });
}
let nW = i.memo(function (e) {
    var t, n;
    let i,
        s,
        { channel: a, guild: r, chatInputType: o, filterAfterTimestamp: c } = e,
        { placeholder: d, accessibilityLabel: u } = (0, nx.A)({ channel: a }),
        m = (0, tU.A)(),
        g = t4(nd.default.getCurrentUser(), a),
        [p] = (0, td.c)(r?.id),
        A = (0, e7.uZ)(r?.id),
        C = (0, h.bG)([nd.default], () => nd.default.getCurrentUser()),
        E = (0, h.bG)([tt.Ay], () => null != C && (tt.Ay.getMember(r?.id ?? "", C?.id)?.isPending ?? !1)),
        x = (0, h.bG)([tB.A], () => tB.A.isEnabled()),
        I =
            ((t = a.id),
            (i = (0, tQ.A)(t0.uD.CHAT_INPUT)),
            (s = (0, h.bG)([tB.A], () => tB.A.isEnabled({ shakeLocation: t0.uD.CHAT_INPUT }))),
            (0, h.bG)([tz.A, tK.Ay, te.default], () =>
                s && tz.A.isTyping(t, te.default.getId())
                    ? tK.Ay.getUserComboShakeIntensity(te.default.getId(), t, i)
                    : 0,
            )),
        y = (0, tS.A)(a.id),
        b = ((n = a.id), (0, h.bG)([eC.A], () => eC.A.getScheduledMessage(n))),
        j = (0, h.bG)([tK.Ay, te.default], () => tK.Ay.getUserCombo(te.default.getId(), a.id)),
        v = (0, S.rj)(a),
        T = (0, S.aW)(a),
        N = (0, e4.L)(a.id),
        M = v.length > 0 || a.rateLimitPerUser > 0 || null != j || null != T || N,
        { showLinkedLobbyApplicationLoadingIndicator: R } = (0, nC.A)(a.linkedLobby),
        D = e1.useConfig({ location: "ChannelChat" }).announcementComposer,
        k = (0, tO.A)((0, tR.GP)(r, "ChannelChat") ? (r?.officialMessageColor ?? nO.aj) : null),
        L = (0, tM.U)();
    return (0, l.jsx)(nV, {
        channel: a,
        restrictedPreview: L,
        guildOfficialMessageStyle: k,
        isEditing: null != (0, h.bG)([na.A], () => na.A.getEditingMessageId(a.id)),
        hasModalOpen: (0, f.re)(f.DX),
        guild: r,
        keyboardModeEnabled: (0, h.bG)([_.Ay], () => _.Ay.keyboardModeEnabled),
        pendingReply: (0, h.bG)([t6.A], () => t6.A.getPendingReply(a.id)),
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
    });
});
