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
    h = n(17928),
    m = n(265872),
    g = n(568602),
    p = n(707554),
    A = n(140735),
    f = n(192308),
    C = n(465532),
    x = n(148494),
    E = n(414798),
    S = n(608299),
    I = n(119031),
    y = n(820284),
    _ = n(955572),
    j = n(775602),
    v = n(666860),
    b = n(211401),
    N = n(989837),
    T = n(500049),
    M = n(721768),
    R = n(459016),
    D = n(842209),
    k = n(861382),
    L = n(392054),
    P = n(168186),
    O = n(545152),
    G = n(972995),
    U = n(355622),
    w = n(408018);
(n(321073), n(323874), n(14289), n(35956));
var F = n(941143),
    H = n(132500),
    B = n(661531),
    K = n(717421),
    V = n(559106),
    z = n(821609),
    W = n(834730),
    $ = n(559647),
    q = n(163328),
    J = n(980707),
    Z = n(477782),
    Y = n(241326),
    X = n(81369),
    Q = n(866665),
    ee = n(939249),
    et = n(750943),
    en = n(155718),
    el = n(793574),
    ei = n(688810),
    es = n(305070);
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
    ed = n(731325),
    eu = n(703007),
    eh = n(2553),
    em = n(946274),
    eg = n(274652),
    ep = n(135621),
    eA = n(406704),
    ef = n(253932),
    eC = n(31717),
    ex = n(638128),
    eE = n(522602),
    eS = n(515718),
    eI = n(723702),
    ey = n(518960),
    e_ = n(486319),
    ej = n(719442),
    ev = n(267102),
    eb = n(655098),
    eN = n(323350),
    eT = n(820066),
    eM = n(683167),
    eR = n(551483);
let eD = {
    ...U.oU.GENERIC_RICH_TEXTAREA,
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
        h = i.useContext(ev.Ay),
        m = i.useRef(o),
        [g] = i.useState(() => {
            let e = (0, ej.ie)();
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
                            (0, eN.WO)(eT.VW.richValue(e), { mode: "raw" }).length -
                                (null != e.selection && ej.Q6.isExpanded(e.selection)
                                    ? (0, eN.WO)(eT.VW.richValue(e), { mode: "raw", range: e.selection }).length
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
    return (0, l.jsx)(eb.A, {
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
var eL = n(919327),
    eP = n(795541),
    eO = n(845207),
    eG = n(851023),
    eU = n(822610),
    ew = n(652215);
(n(827669), n(294920));
var eF = n(478644),
    eH = n(105292),
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
            type: x,
            focused: E,
            onChange: I,
            onResize: y,
            onBlur: _,
            onFocus: v,
            onKeyDown: b,
            onSubmit: N,
            promptToUpload: T,
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
            parentModalKey: J,
        } = r,
        Z = ea.useField("channelDrafts")[C.id],
        Y = Z?.title ?? "",
        X = Z?.heroUploadId,
        Q = (0, h.bG)([eE.A], () => (null != X ? eE.A.getUpload(C.id, X, eC.C.ChannelMessage) : null)),
        ee = Q?.item,
        et = null != ee && ee.platform === eg.x.WEB ? ee.file : null,
        ec = Z?.publish ?? !0,
        eu = Z?.createThread ?? !0;
    o()(null != x, "chat input type must be set");
    let { analyticsLocations: eh } = (0, ei.Ay)(el.A.CHANNEL_TEXT_AREA),
        em = (0, eO.L0)(s),
        eS = i.useRef(null),
        ey = i.useRef(null),
        ej = i.useRef(null),
        ev = i.useRef(null),
        eb = i.useRef(Y);
    G?.(ey.current);
    let { activeCommand: eN } = (0, h.cf)([k.A], () => ({
            activeCommand: x.commands?.enabled ? k.A.getActiveCommand(C.id) : null,
            activeCommandSection: x.commands?.enabled ? k.A.getActiveCommandSection(C.id) : null,
        })),
        {
            isLurking: eT,
            isPendingMember: eM,
            disabled: eR,
            canAttachFiles: eD,
            canEveryoneSendMessages: eG,
        } = (0, eO.Sk)(C, x, eN, A),
        eF = !ef.D_.useSetting() && !(0, eI.isAndroidWeb)() && null != window.ResizeObserver,
        ez = !eF || !x.commands?.enabled || !E || "/" !== c,
        eZ = (0, ep.A)(),
        { fontSize: eY } = (0, h.cf)([j.Ay], () => ({
            fontSize: j.Ay.fontSize,
            isSubmitButtonEnabled: j.Ay.isSubmitButtonEnabled,
        })),
        eX = (0, h.bG)([ex.A], () => ex.A.isEnabled());
    i.useEffect(() => {
        eF || (eb.current = Y);
    }, [Y, eF]);
    let eQ = i.useCallback((e) => er(C.id, { title: e }), [C.id]),
        e0 = i.useCallback((e) => {
            eb.current = e;
        }, []),
        e1 = i.useCallback(() => ey.current?.focus(), []),
        e2 = (0, eA.n)(C);
    (0, eO.N_)(x, eR, C.id);
    let { eventEmitter: e3, handleEditorSelectionChanged: e4 } = (0, eO.ml)(ey, c, d),
        e7 = i.useCallback(
            (e) => {
                function t(e) {
                    return (
                        e.shouldClear &&
                            (er(C.id, { title: "", heroUploadId: null }), (eb.current = ""), ey.current?.blur()),
                        e
                    );
                }
                let n = [],
                    l = `${
                        Y.length > 0
                            ? `# ${Y}
`
                            : ""
                    }${e.value}`,
                    i = (
                        eb.current.length > 0
                            ? eb.current
                            : e.value.length > 0
                              ? e.value
                              : eH.intl.string(eH.t["7Xm5QI"])
                    ).slice(0, ew.Ign),
                    s = eE.A.getUploads(C.id, eC.C.ChannelMessage),
                    a = s.find((e) => e.id === X);
                if (null == a)
                    return N({
                        ...e,
                        value: l,
                        announcementSendOptions: { createThread: e2 && eu, threadName: i, publish: ec },
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
                        (n.add(c), l.add(c), S.A.update(e, i.id, eC.C.ChannelMessage, { filename: c }));
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
                    N({
                        ...e,
                        value: l,
                        components: n,
                        announcementSendOptions: { createThread: e2 && eu, threadName: i, publish: ec },
                    }).then(t)
                );
            },
            [N, Y, X, C.id, eu, ec, e2],
        ),
        { submit: e8, handleSubmit: e5 } = (0, eO.Zx)(e7, x, ey, ev, C.id),
        { autocompleteRef: e6, handleMaybeShowAutocomplete: e9, handleHideAutocomplete: te } = (0, eO.v7)(),
        tt = i.useCallback(() => ev?.current?.hide(), []),
        { editorHeight: tn, handleResize: tl } = (0, eO.ck)(y),
        {
            handleTab: ti,
            handleEnter: ts,
            handleSpace: ta,
            handleMoveSelection: tr,
        } = ((t = i.useCallback(
            () => !!(!ez && eS.current?.onTabOrEnter(!1)) || e6.current?.onTabOrEnter(!1) || !1,
            [ez],
        )),
        (n = i.useCallback(() => !!(!ez && eS.current?.onTabOrEnter(!0)) || e6.current?.onTabOrEnter(!1) || !1, [ez])),
        {
            handleTab: t,
            handleEnter: n,
            handleSpace: i.useCallback(() => e6.current?.onSpace() || !1, [e6]),
            handleMoveSelection: i.useCallback(
                (e) => !!(!ez && eS.current?.onMoveSelection(e)) || e6.current?.onMoveSelection(e) || !1,
                [ez],
            ),
        }),
        { expressionPickerView: to, shouldHideExpressionPicker: tc, handleOuterClick: td } = (0, eO.MD)(x, ey, C.id),
        { handleAutocompleteVisibilityChange: tu } = (0, eO.uW)(x, C.id),
        th = (0, eO.NO)(ey),
        tm = (0, eO.Vu)(e8, x, ey),
        tg = (0, eO.C)({ editorRef: ey, disabled: eR, textValue: c, channelId: C.id, chatInputType: x, submit: e7 });
    (0, e_.R)(e3, C.guild_id, C.id);
    let [tp, tA] = i.useState(!1),
        tf = i.useCallback(() => {
            (td(), tA(!0));
        }, [td]),
        tC = tp || c.length > 0 || null != Q || Y.length > 0,
        { editorHeaderHeight: tx, paddingTop: tE } = (0, K.z)({
            editorHeaderHeight: 122 * !!tC,
            paddingTop: 16 * !!tC,
            config: { tension: 120, friction: 15, clamp: !0 },
        }),
        tS = i.useRef(null),
        [tI, ty] = i.useState(!1),
        t_ = i.useRef(!1),
        tj = i.useCallback(() => {
            t_.current = !0;
            let e = setTimeout(() => {
                t_.current && ty(!0);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        tv = i.useCallback(() => {
            t_.current = !1;
            let e = setTimeout(() => {
                t_.current || ty(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        tb = i.useCallback(() => {
            (null != X && S.A.remove(C.id, X, eC.C.ChannelMessage), er(C.id, { heroUploadId: null }));
        }, [C.id, X]);
    return (0, l.jsx)(eo.Sv, {
        value: e3,
        children: (0, l.jsxs)(ei.f5, {
            value: eh,
            children: [
                (0, l.jsxs)("div", {
                    ref: em,
                    className: a()(u, eK.gM),
                    onMouseDown: tf,
                    children: [
                        (0, l.jsx)("div", {
                            ref: ej,
                            onScroll: tt,
                            className: a()(eK.Ui, { [eK.k6]: !H }),
                            children: (0, l.jsxs)("div", {
                                className: a()(eK.vW, eB.vW),
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: eB.rf,
                                        children: [
                                            (0, l.jsxs)(F.animated.div, {
                                                className: eB.ov,
                                                style: { height: tx, paddingTop: tE },
                                                children: [
                                                    null != Q
                                                        ? (0, l.jsx)(e$, { file: et, onRemoveHeroImage: tb })
                                                        : null,
                                                    null != Q
                                                        ? null
                                                        : (0, l.jsx)(eJ, {
                                                              channel: C,
                                                              onImageUploaded: (e) => er(C.id, { heroUploadId: e }),
                                                              onFocus: () => tA(!0),
                                                          }),
                                                    eF
                                                        ? (0, l.jsx)(
                                                              ek,
                                                              {
                                                                  channel: C,
                                                                  className: eB.A$,
                                                                  containerClassName: eB.Py,
                                                                  placeholder: eH.intl.string(eH.t.Z8fYjO),
                                                                  spellCheck: eX,
                                                                  title: Y,
                                                                  onChange: eQ,
                                                                  onPlainTextChange: e0,
                                                                  onEnter: e1,
                                                              },
                                                              C.id,
                                                          )
                                                        : (0, l.jsx)("input", {
                                                              maxLength: 140,
                                                              className: eB.hz,
                                                              placeholder: eH.intl.string(eH.t.Z8fYjO),
                                                              value: Y,
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
                                                        focused: E,
                                                        useSlate: eF,
                                                        textValue: c,
                                                        richValue: d,
                                                        disabled: eR,
                                                        placeholder: L,
                                                        required: p,
                                                        accessibilityLabel: f,
                                                        isPreviewing: (eT || eM) && eG,
                                                        channel: C,
                                                        type: U.oU.CREATE_ANNOUNCEMENT_POST,
                                                        canPasteFiles: eD,
                                                        uploadPromptCharacterCount: ew.CS1,
                                                        maxCharacterCount: D ?? eZ,
                                                        allowNewLines: !0,
                                                        "aria-describedby": P,
                                                        onChange: I,
                                                        onResize: tl,
                                                        onBlur: _,
                                                        onFocus: v,
                                                        onKeyDown: b,
                                                        onSubmit: e8,
                                                        onTab: ti,
                                                        onEnter: ts,
                                                        onSpace: ta,
                                                        onMoveSelection: tr,
                                                        onSelectionChanged: e4,
                                                        onMaybeShowAutocomplete: e9,
                                                        onHideAutocomplete: te,
                                                        promptToUpload: T,
                                                        fontSize: eY,
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
                                        children: (0, l.jsx)(eU.A, {
                                            channelId: C.id,
                                            type: x,
                                            canAttachFiles: eD,
                                            ignoreUploadId: X,
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
                                            type: U.oU.CREATE_ANNOUNCEMENT_POST,
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
                                        ref: tS,
                                        className: eB.Qo,
                                        onMouseEnter: tj,
                                        onMouseLeave: tv,
                                        children: (0, l.jsx)(m.Y, {
                                            targetElementRef: tS,
                                            renderPopout: () =>
                                                (0, l.jsx)(eW, { channelId: C.id, canCreateThread: e2 }),
                                            shouldShow: tI,
                                            autoInvert: !0,
                                            nudgeAlignIntoViewport: !0,
                                            position: "top",
                                            align: "right",
                                            children: (e) =>
                                                (0, l.jsx)(z.$, {
                                                    ...e,
                                                    onClick: () => {
                                                        e8(c);
                                                    },
                                                    disabled: 0 === c.length && 0 === Y.length,
                                                    size: "sm",
                                                    "aria-label": eH.intl.string(eH.t.TXNS7S),
                                                    innerClassName: eB.jo,
                                                    text: (0, l.jsxs)("div", {
                                                        className: eB.f9,
                                                        children: [
                                                            (0, l.jsx)(W.E, {
                                                                variant: "text-sm/semibold",
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
                                                                    e2 && eu
                                                                        ? (0, l.jsx)(q.y, {
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
                            ref: e6,
                            channel: C,
                            canMentionRoles: M,
                            canMentionChannels: R,
                            useNewSlashCommands: eF,
                            canOnlyUseTextCommands: !1,
                            canSendStickers: !0,
                            textValue: c,
                            focused: E,
                            expressionPickerView: to,
                            type: x,
                            editorRef: ey,
                            onSendMessage: e8,
                            onSendSticker: () => {},
                            onVisibilityChange: tu,
                            editorHeight: tn,
                            setValue: (e, t) => I?.(null, e, t),
                            position: w,
                        }),
                    ],
                }),
                tc
                    ? null
                    : (0, l.jsx)(ed.A, {
                          positionTargetRef: em,
                          type: x,
                          onSelectGIF: tm,
                          onSelectEmoji: th,
                          onSelectSticker: tg,
                          channel: C,
                          closeOnModalOuterClick: B,
                          parentModalKey: J,
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
    return (0, l.jsxs)(J.W, {
        "data-menu-migrated": !0,
        "aria-label": eH.intl.string(eH.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: ew.tEg,
        onSelect: ew.tEg,
        children: [
            (0, l.jsx)(Z.sL, {
                id: "create-thread",
                label: eH.intl.string(eH.t.rBIGBL),
                checked: n && s,
                disabled: !n,
                action: () => {
                    er(t, { createThread: !s });
                },
            }),
            (0, l.jsx)(Z.sL, {
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
                            children: (0, l.jsx)(eG.A, {
                                tooltip: eH.intl.string(eH.t.VjC21x),
                                onClick: n,
                                dangerous: !0,
                                children: (0, l.jsx)(Y.TrashIcon, {}),
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
        children: (0, l.jsx)(X.H, {
            size: "custom",
            width: 20,
            height: 20,
            color: B.A.colors.INTERACTIVE_TEXT_DEFAULT,
        }),
    });
}
function eJ(e) {
    let { channel: t, onImageUploaded: n, onFocus: s } = e,
        a = i.useRef(null);
    async function r(e, l) {
        let i = await (0, eS.bX)(e, l.name, l.type),
            s = (0, H.A)(),
            a = { id: s, file: i, platform: eg.x.WEB, isThumbnail: !1, origin: "file_picker" };
        (S.A.addFile({ file: a, channelId: t.id, draftType: eC.C.ChannelMessage }), n(s));
    }
    let [o, c] = i.useState(!1),
        d = i.useCallback(() => {
            c(!0);
        }, []),
        u = i.useCallback(() => {
            c(!1);
        }, []);
    return (0, l.jsx)("div", {
        className: eB.qN,
        children: (0, l.jsx)(Q.m, {
            asContainer: !0,
            text: eH.intl.string(eH.t["/IBYAq"]),
            position: "top",
            children: (0, l.jsxs)(ee.D, {
                className: eB.qN,
                onMouseOver: d,
                onMouseOut: u,
                onFocus: s,
                children: [
                    (0, l.jsx)(em.Ay, {
                        ref: a,
                        onChange: r,
                        "aria-hidden": !0,
                        tabIndex: -1,
                        maxFileSizeBytes: eF.j,
                        onFileSizeError: () => (0, eh.A)(eF.j),
                    }),
                    (0, l.jsx)(et.X, {
                        size: "md",
                        color: o ? B.A.colors.INTERACTIVE_TEXT_ACTIVE : B.A.colors.INTERACTIVE_TEXT_DEFAULT,
                    }),
                ],
            }),
        }),
    });
}
var eZ = n(664929),
    eY = n(742287);
let eX = i.memo(function (e) {
    let { className: t, channel: n, section: i } = e,
        s = null != i ? (0, eZ.Rg)(i) : null,
        r =
            null != s
                ? (0, l.jsx)(Q.m, {
                      __unsupportedReactNodeAsText: i?.name ?? "",
                      position: "top",
                      children: (0, l.jsx)(s, { channel: n, section: i, width: 24, height: 24 }),
                  })
                : null;
    return (0, l.jsx)("div", {
        className: a()(t, eY.i),
        children: (0, l.jsx)("div", { className: eY.K, children: r }),
    });
});
var eQ = n(588158),
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
    e8 = n(353182),
    e5 = n(727875);
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
        className: a()(e5.Ew, o),
        children: [
            (0, l.jsxs)("div", {
                className: a()(e5.lt, s),
                children: [
                    null != t && ("string" == typeof t ? (0, l.jsx)("img", { src: t, alt: "", className: e5.q3 }) : t),
                    (0, l.jsxs)("div", {
                        className: e5._M,
                        children: [
                            (0, l.jsx)("div", { className: a()(e5.U_, r), children: n }),
                            null != i && (0, l.jsx)("div", { className: e5.mi, children: i }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: e5.uu, children: c }),
        ],
    });
}
var e9 = n(206835),
    te = n(280450),
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
            bannerIcon: (0, l.jsx)(e8._, { size: "lg", color: "currentColor", className: ts.q3 }),
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
        [i, s] = (0, e7.j8)({ guildId: t?.id ?? ew.dJq, analyticsLocations: n }),
        a = s ? eH.intl.string(eH.t["9ph2v7"]) : eH.intl.string(eH.t.ldh9Cg),
        r = s ? eH.intl.string(eH.t["/PGQf0"]) : eH.intl.string(eH.t.WikgZ1);
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(e6, {
            bannerIcon: (0, l.jsx)(e8._, { size: "lg", color: "currentColor", className: ts.q3 }),
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
    tA = n(297264),
    tf = n(542290);
function tC(e) {
    let { onClose: t, guildName: n } = e;
    return (0, l.jsxs)("div", {
        className: tf.kL,
        children: [
            (0, l.jsx)("div", {
                className: tf.zc,
                children: (0, l.jsx)(tu.g, {
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
                        variant: "heading-md/semibold",
                        className: tf.TK,
                        children: eH.intl.string(eH.t.LIIyeE),
                    }),
                    (0, l.jsx)(W.E, {
                        variant: "text-sm/normal",
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
var tx = n(200700),
    tE = n(481161);
function tS(e) {
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
                    bannerIcon: (0, l.jsx)(tu.g, { size: "md", color: "currentColor", className: tE.q3 }),
                    bannerHeader: eH.intl.string(eH.t["9UoK6Y"]),
                    bannerSubtext: eH.intl.format(eH.t["4ZwD5G"], { link: tx.MO }),
                    textStyles: tE.cI,
                    headerStyles: tE.U_,
                    children: (0, l.jsx)(W.E, {
                        variant: "text-sm/semibold",
                        children: (0, l.jsx)(th.A, { deadline: new Date(n), showUnits: !0, stopAtOneSec: !0 }),
                    }),
                }),
            ],
        })
    );
}
var tI = n(429933),
    ty = n(868132),
    t_ = n(513609),
    tj = n(176781),
    tv = n(507216),
    tb = n(273692);
function tN() {
    return (0, l.jsx)(e6, {
        textStyles: tb.U,
        bannerIcon: (0, l.jsx)(tj.x, { size: "lg" }),
        bannerHeader: eH.intl.string(tv.default.unC18Z),
        bannerSubtext: eH.intl.string(tv.default["7mR8Bv"]),
    });
}
var tT = n(823099),
    tM = n(959698),
    tR = n(521427),
    tD = n(751258),
    tk = n(451909),
    tL = n(926262),
    tP = n(471533),
    tO = n(537174),
    tG = n(973196),
    tU = n(184748),
    tw = n(308718);
function tF() {
    return (0, l.jsx)(e6, {
        containerStyles: tw.k,
        bannerHeader: eH.intl.string(tU.default.e7ydX0),
        bannerSubtext: eH.intl.string(tU.default.POfugg),
    });
}
var tH = n(512599),
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
var tJ = n(93219);
let tZ = i.memo(function (e) {
        let { channelId: t, width: n } = e,
            s = (0, h.bG)([j.Ay], () => j.Ay.useReducedMotion),
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
                className: tJ.Gi,
                style: d,
                children: (0, l.jsx)(W.E, { className: tJ.fX, variant: "text-sm/bold", children: (0, t$.RL)(a.combo) }),
            })
        );
    }),
    tY = i.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: s, square: r, flair: o } = i.useMemo(() => (0, t$.HN)(n), [n]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(W.E, { className: tJ.iR, variant: "text-sm/bold", children: t }),
                (0, l.jsxs)("div", {
                    className: tJ._Z,
                    style: { color: s },
                    children: [
                        (0, l.jsx)(W.E, {
                            className: tJ.On,
                            style: { color: s },
                            variant: "text-sm/bold",
                            children: eH.intl.format(eH.t["6bgVlq"], { multiplier: n }),
                        }),
                        r &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", { className: a()(tJ.QA, tJ.kb), style: { backgroundColor: s } }),
                                    (0, l.jsx)("div", { className: a()(tJ.QA, tJ.pG), style: { backgroundColor: s } }),
                                ],
                            }),
                        o &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", {
                                        className: a()(tJ.ox, tJ.kb),
                                        children: (0, l.jsx)(tW.A, { width: 24, height: 24 }),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: a()(tJ.ox, tJ.pG),
                                        children: (0, l.jsx)(tW.A, { width: 24, height: 24 }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, l.jsx)(W.E, {
                                className: tJ.uN,
                                variant: "text-sm/bold",
                                children: eH.intl.string(eH.t.b5Cpof),
                            }),
                    ],
                }),
            ],
        });
    }),
    tX = i.memo(function (e) {
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
        let { multiplier: x, value: E } = i.useMemo(
            () => ({ value: p ? f.value : C.current.value, multiplier: p ? f.multiplier : C.current.multiplier }),
            [p, f, C],
        );
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tZ, { channelId: n, width: d }),
                (0, l.jsx)(F.animated.div, {
                    ref: c,
                    className: tJ.p_,
                    style: A,
                    children: (0, l.jsx)(tY, { value: E, multiplier: x }),
                }),
            ],
        });
    });
var tQ = n(208343),
    t0 = n(31408),
    t1 = n(810685),
    t2 = n(806621),
    t3 = n(232835);
let t4 = function (e, t) {
    let n = (0, t2.r)(t),
        l = (0, h.bG)([t3.A], () => t3.A.getMessages(t.id).length > 0, [t]);
    return null != e && e.hasFlag(ew.nhx.QUARANTINED) && n && !l;
};
var t7 = n(831502);
let t8 = function () {
    return (0, l.jsx)(e6, {
        bannerIcon: (0, l.jsx)(t1.M, { alt: "", width: 80, height: 40 }),
        bannerHeader: eH.intl.string(eH.t.EouHwv),
        bannerSubtext: eH.intl.format(eH.t.PThBel, { appealLink: t7.q }),
    });
};
var t5 = n(118517),
    t6 = n(853145),
    t9 = n(226698),
    ne = n(812676),
    nt = n(985632);
let nn = function (e) {
    let { channelId: t } = e,
        n = i.useCallback(() => {
            t9.A.reopenModReport(t);
        }, [t]);
    return (0, l.jsx)(e6, {
        bannerHeader: (0, l.jsx)(W.E, {
            variant: "text-md/medium",
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
    ns = n(358047),
    na = n(580745),
    nr = n(576705),
    no = n(994500),
    nc = n(309010),
    nd = n(287809),
    nu = n(174459),
    nh = n(147036),
    nm = n(234320),
    ng = n(625494),
    np = n(935208),
    nA = n(806150),
    nf = n(382287),
    nC = n(137577),
    nx = n(47167),
    nE = n(480870),
    nS = n(390756),
    nI = n(178653),
    ny = n(128783),
    n_ = n(549400);
function nj() {
    return (0, l.jsxs)("div", {
        className: n_.kL,
        children: [
            (0, l.jsx)("div", { className: a()(n_.v9, n_.KJ) }),
            (0, l.jsx)("div", { className: a()(n_.v9, n_.rx) }),
        ],
    });
}
var nv = n(578434),
    nb = n(80683),
    nN = n(858899),
    nT = n(336590),
    nM = n(92650),
    nR = n(378570),
    nD = n(138298),
    nk = n(260771);
function nL(e) {
    let { channel: t } = e,
        n = (0, nT.k)(),
        s = (0, h.bG)([nd.default], () => nd.default.getUser(t.getRecipientId())),
        a = i.useCallback(() => {
            (0, nN.P0)({ text: eH.intl.string(eH.t["EDYbS+"]), variant: "critical" });
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
                variant: "text-md/medium",
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
    nG = n(650583),
    nU = n(999900);
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
        t.textValue.length < ew.uvi && l.length >= ew.uvi && nu.default.track(ew.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {});
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
            case nG.dh.DELETE:
            case nG.dh.BACKSPACE:
                return void this.handleIncrementCombo("", 1);
            case nG.dh.ARROW_UP:
                if (i || s) return;
                if ((e.preventDefault(), t))
                    eE.A.getUploadCount(l.id, eC.C.ChannelMessage) > 0
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
            case nG.dh.ESCAPE:
                if (i || e.target !== e.currentTarget) return;
                if ((e.preventDefault(), t)) return void (0, _.Bm)();
                if (eE.A.getUploadCount(l.id, eC.C.ChannelMessage) > 0)
                    return void S.A.clearAll(l.id, eC.C.ChannelMessage);
        }
        n?.(e, s);
    };
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        (x.A.startEditMessageRecord(t.id, e), v.Ay.trackWithMetadata(ew.HAw.MESSAGE_EDIT_UP_ARROW));
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
                initialValues: (0, R.getInitialValuesFromInteractionOptions)(i, l ?? []),
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
        if (i === U.oU.NORMAL && s !== nc.Ay.getChannelId()) return;
        C.A.changeDraft(s, t, eC.C.ChannelMessage);
        let a = "" !== t && n !== this.state.richValue,
            r = a && !nF.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
        ((this.isFirstChange = !1),
            r && this.state.textValue.length < t.length && this.handleIncrementCombo(),
            r ? E.A.startTyping(s) : "" === t && E.A.stopTyping(s),
            a && l && (0, _.Bm)(),
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
                let { isAuthorized: e } = await (0, G.q)({
                    applicationId: i.applicationId,
                    channel: h,
                    commandIntegrationTypes: i.integration_types,
                });
                if (!e) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
            } else if (e === L.iw.APPLICATION_LAUNCHER || e === L.iw.IMAGE_RECS_MENU || e === L.iw.IMAGE_RECS_SUBMENU) {
                let { location: t, sectionName: n } = (0, nS.bV)(i) ?? {},
                    l = e === L.iw.APPLICATION_LAUNCHER ? N.A.lastShownEntrypoint() : T.s4.TEXT,
                    { isAuthorized: s } = await (0, G.q)({
                        applicationId: i.applicationId,
                        channel: h,
                        commandIntegrationTypes: i.integration_types,
                        appLauncherContext: { location: t, sectionName: n, entrypoint: l },
                    });
                if (!s) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
                (0, nS.My)(i);
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
            let E = tk.Ay.parse(h, t);
            ((E.tts = E.tts || p), null != o && ((E.content = ""), (E.components = o)));
            let I = {
                ...x.A.getSendMessageOptions({
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
                (null != c && (I.announcementSendOptions = c),
                null != r && (I.gifMetadata = r),
                null != o && (I.flags = (0, u.UI)(I.flags ?? 0, ew.pr7.IS_COMPONENTS_V2)),
                a)
            )
                return (x.A.sendMessage(h.id, E, void 0, I), (0, t5.Jx)(h.id), { shouldClear: !1, shouldRefocus: !0 });
            function y() {
                ("" !== t &&
                    "" === eC.A.getDraft(h.id, eC.C.ChannelMessage) &&
                    C.A.saveDraft(h.id, t, eC.C.ChannelMessage),
                    null != n &&
                        n.length > 0 &&
                        0 === eE.A.getUploadCount(h.id, eC.C.ChannelMessage) &&
                        S.A.setUploads({ channelId: h.id, uploads: n, draftType: eC.C.ChannelMessage }));
            }
            if (null != n && n.length > 0) {
                let e = (0, nf.LJ)(n);
                if ((0, nf.fJ)({ files: e, guildId: d?.id }))
                    return ((0, ey.V)(h, e), { shouldClear: !1, shouldRefocus: !1 });
                ((I.eagerDispatch = !1),
                    (I.attachmentsToUpload = n),
                    (I.onAttachmentUploadError = (e, t, n) => {
                        (0, tT.k)({ file: e, guildId: h.getGuildId(), analyticsLocations: [], code: t, reason: n }) &&
                            y();
                    }),
                    S.A.clearAll(h.id, eC.C.ChannelMessage));
            }
            return (
                x.A.sendMessage(h.id, E, void 0, I).catch((e) => {
                    throw ((null != I.scheduledTimestamp || !1 === I.eagerDispatch) && y(), e);
                }),
                this.setState((0, w.N3)()),
                (0, t5.Jx)(h.id),
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
        (0, l.jsx)(eX, { className: n, command: e, section: t, channel: this.props.channel });
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
            x =
                e.type === ew.rbe.GUILD_ANNOUNCEMENT && f
                    ? (0, l.jsx)(ez, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: nU.gM,
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
                          promptToUpload: ey.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, l.jsx)(eO.Ay, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: nU.gM,
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
                p ? (0, l.jsx)(g.b, { isShaking: h > 0, intensity: h, className: nU.Xn, children: x }) : x,
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
                case nG.dh.ARROW_LEFT:
                    n === U.oU.SIDEBAR &&
                        ng._.dispatch(ew.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: nc.Ay.getChannelId() });
                    return;
                case nG.dh.ARROW_RIGHT:
                    n === U.oU.NORMAL &&
                        ng._.dispatch(ew.jej.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: ns.Ay.getCurrentSidebarChannelId(l.id),
                        });
            }
    };
    handleOpenExpressionPicker = (e) => {
        let { activeView: t } = e;
        (0, e3.bf)(t, this.props.chatInputType, this.props.channel.id);
    };
    openEmojiPacks = () => {
        let { channel: e, chatInputType: t, announcementComposerEnabled: n } = this.props,
            l = e.type === ew.rbe.GUILD_ANNOUNCEMENT && n ? U.oU.CREATE_ANNOUNCEMENT_POST : t;
        (0, e3.bf)(nP.kx.EMOJI, l, e.id, { showEmojiPacks: !0 });
    };
    handleOpenAppLauncher = (e) => {
        let { applicationId: t } = e;
        return b.R(T.s4.TEXT, this.props.chatInputType, { applicationId: t }, this.props.channel.id);
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
            ? (0, l.jsx)(tN, {})
            : this.props.restrictedPreview && t.type === ew.rbe.DM
              ? (0, l.jsx)(nL, { channel: t })
              : t.type === ew.rbe.DM && n
                ? (0, l.jsx)(t8, {})
                : t.isModeratorReportChannel() && t.isArchivedThread()
                  ? (0, l.jsx)(nn, { channelId: t.id })
                  : null != s && (0, tc.n)(s) && null != i && !nr.A.can(ew.xBc.ADMINISTRATOR, i)
                    ? (0, l.jsx)(tS, { guild: i, disabledUntil: s })
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
                isSelectedResourceChannel: x,
                showAutomodUserProfileChatBlocker: E,
                scheduledMessageDraft: S,
                messagesTypingGradient: I,
                showLinkedLobbyApplicationLoadingIndicator: _,
                announcementComposerEnabled: j,
            } = this.props,
            { textAreaFocused: v, textAreaHighlighted: b } = this.state,
            N = o === U.oU.SIDEBAR;
        e =
            N && t.type === ew.rbe.GUILD_VOICE
                ? eH.t.pnnyFZ
                : N && t.type === ew.rbe.GUILD_STAGE_VOICE
                  ? eH.t.YInSkq
                  : d.k.THREADS.has(t.type)
                    ? eH.t["OkzL+Q"]
                    : eH.t.UbNmGc;
        let T = (0, l.jsx)("div", { className: nU.li, children: (0, l.jsx)(nj, {}) }),
            M = (0, l.jsx)("div", {
                className: nU.li,
                children: (0, l.jsx)(ni.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    disabled: null == n,
                    children: (0, l.jsx)(nB, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: v,
                        highlighted: b,
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
                        scheduledMessageDraft: S,
                        announcementComposerEnabled: j,
                    }),
                }),
            }),
            R = _ ? T : M,
            D = (0, nx.m1)(t, nd.default, no.A);
        return (0, l.jsx)(
            y.A,
            {
                page: (0, nh.DJ)(this.props.channel),
                children: (0, l.jsx)(t_.di, {
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
                                    isSidebar: N,
                                    className: nU.q2,
                                    "aria-label": eH.intl.formatToPlainString(e, { channelName: D }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: this.props.guildOfficialMessageStyle,
                                    children: [
                                        (0, l.jsx)(ny.A, { channel: t, guild: n, narrow: N }),
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
                                                        (0, l.jsx)(nI.A.Provider, {
                                                            value: this.openEmojiPacks,
                                                            children: (0, l.jsx)(tP.A, {
                                                                channel: t,
                                                                forceCozy: x,
                                                                filterAfterTimestamp: m,
                                                                showingQuarantineBanner: h,
                                                                typingGradient: I,
                                                                hideSummaries: o === U.oU.OVERLAY,
                                                            }),
                                                        }),
                                                        x
                                                            ? null
                                                            : (this.renderMessageBanner({
                                                                  channel: t,
                                                                  showQuarantinedUserBanner: h,
                                                                  guild: n,
                                                                  communicationDisabledUntil: g,
                                                                  showAutomodUserProfileChatBlocker: E,
                                                              }) ??
                                                              (0, l.jsxs)("form", {
                                                                  ref: this.inputFormRef,
                                                                  onSubmit: nw,
                                                                  className: a()(nU.Zd, { [nU.Mf]: !_ }),
                                                                  children: [
                                                                      C && (0, l.jsx)(tX, { channelId: t.id }),
                                                                      t.isPrivate()
                                                                          ? (0, l.jsx)(nv.A, {
                                                                                channel: t,
                                                                                children: R,
                                                                            })
                                                                          : (0, l.jsx)(nb.A, {
                                                                                channel: t,
                                                                                children: R,
                                                                            }),
                                                                      (0, l.jsx)(nz, { channel: t }),
                                                                  ],
                                                              })),
                                                    ],
                                                }),
                                                (0, l.jsx)(t_.lr, {}),
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
    return n ? null : (0, l.jsx)(I.Ay, { channel: t, isInTextChannel: !0 });
}
let nW = i.memo(function (e) {
    var t, n;
    let i,
        s,
        { channel: a, guild: r, chatInputType: o, filterAfterTimestamp: c } = e,
        { placeholder: d, accessibilityLabel: u } = (0, nE.A)({ channel: a }),
        m = (0, tG.A)(),
        g = t4(nd.default.getCurrentUser(), a),
        [p] = (0, td.c)(r?.id),
        A = (0, e7.uZ)(r?.id),
        C = (0, h.bG)([nd.default], () => nd.default.getCurrentUser()),
        x = (0, h.bG)([tt.Ay], () => null != C && (tt.Ay.getMember(r?.id ?? ew.dJq, C?.id)?.isPending ?? !1)),
        E = (0, h.bG)([tB.A], () => tB.A.isEnabled()),
        S =
            ((t = a.id),
            (i = (0, tQ.A)(t0.uD.CHAT_INPUT)),
            (s = (0, h.bG)([tB.A], () => tB.A.isEnabled({ shakeLocation: t0.uD.CHAT_INPUT }))),
            (0, h.bG)([tz.A, tK.Ay, te.default], () =>
                s && tz.A.isTyping(t, te.default.getId())
                    ? tK.Ay.getUserComboShakeIntensity(te.default.getId(), t, i)
                    : 0,
            )),
        y = (0, tI.A)(a.id),
        _ = ((n = a.id), (0, h.bG)([eC.A], () => eC.A.getScheduledMessage(n))),
        v = (0, h.bG)([tK.Ay, te.default], () => tK.Ay.getUserCombo(te.default.getId(), a.id)),
        b = (0, I.rj)(a),
        N = (0, I.aW)(a),
        T = (0, e4.L)(a.id),
        M = b.length > 0 || a.rateLimitPerUser > 0 || null != v || null != N || T,
        { showLinkedLobbyApplicationLoadingIndicator: R } = (0, nC.A)(a.linkedLobby),
        D = e1.useConfig({ location: "ChannelChat" }).announcementComposer,
        k = (0, tO.A)((0, tR.GP)(r, "ChannelChat") ? (r?.officialMessageColor ?? nO.aj) : null),
        L = (0, tM.U)();
    return (0, l.jsx)(nV, {
        channel: a,
        restrictedPreview: L,
        guildOfficialMessageStyle: k,
        isEditing: null != (0, h.bG)([na.A], () => na.A.getEditingMessageId(a.id)),
        hasModalOpen: (0, f.useModalsStore)(f.hasAnyModalOpenSelector),
        guild: r,
        keyboardModeEnabled: (0, h.bG)([j.Ay], () => j.Ay.keyboardModeEnabled),
        pendingReply: (0, h.bG)([t6.A], () => t6.A.getPendingReply(a.id)),
        chatInputType: o,
        isOverlayTextEntryDisabled: m,
        placeholder: d,
        accessibilityLabel: u,
        filterAfterTimestamp: c,
        showQuarantinedUserBanner: g,
        communicationDisabledUntil: p,
        shakeIntensity: S,
        poggermodeEnabled: E,
        isSelectedResourceChannel: y,
        showAutomodUserProfileChatBlocker: A && !x,
        scheduledMessageDraft: _,
        messagesTypingGradient: M,
        showLinkedLobbyApplicationLoadingIndicator: R,
        announcementComposerEnabled: D,
    });
});
