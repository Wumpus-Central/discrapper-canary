(n.d(t, { A: () => n$ }), n(938796));
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
    G = n(972995),
    U = n(355622),
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
    eG = n(851023),
    eU = n(102077),
    ew = n(159467),
    eF = n(652215);
(n(827669), n(294920));
var eH = n(478644),
    eB = n(792996),
    eK = n(806686),
    eV = n(495088);
function ez(e, t, n) {
    return {
        media: { url: e, proxyUrl: e, loadingState: en.TD.UNKNOWN, flags: 0 },
        description: t ?? void 0,
        spoiler: n,
    };
}
let eW = i.memo(function (e) {
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
        e_ = (0, ew.A)(ey),
        ej = i.useRef(null),
        ev = i.useRef(null),
        eT = i.useRef(X);
    G?.(ey.current);
    let { activeCommand: eN } = (0, h.cf)([k.A], () => ({
            activeCommand: E.commands?.enabled ? k.A.getActiveCommand(C.id) : null,
            activeCommandSection: E.commands?.enabled ? k.A.getActiveCommandSection(C.id) : null,
        })),
        {
            isLurking: eM,
            isPendingMember: eR,
            disabled: eD,
            canAttachFiles: eG,
            canEveryoneSendMessages: eF,
        } = (0, eO.Sk)(C, E, eN, A),
        eH = !ef.D_.useSetting() && !(0, eS.Ct)() && null != window.ResizeObserver,
        eW = !eH || !E.commands?.enabled || !x || "/" !== c,
        eX = (0, ep.A)(),
        { fontSize: eY } = (0, h.cf)([_.Ay], () => ({
            fontSize: _.Ay.fontSize,
            isSubmitButtonEnabled: _.Ay.isSubmitButtonEnabled,
        })),
        eQ = (0, h.bG)([eE.A], () => eE.A.isEnabled());
    i.useEffect(() => {
        eH || (eT.current = X);
    }, [X, eH]);
    let e0 = i.useCallback((e) => er(C.id, { title: e }), [C.id]),
        e1 = i.useCallback((e) => {
            eT.current = e;
        }, []),
        e2 = i.useCallback(() => ey.current?.focus(), []),
        e3 = (0, eA.n)(C);
    (0, eO.N_)(E, eD, C.id);
    let { eventEmitter: e4, handleEditorSelectionChanged: e5 } = (0, eO.ml)(ey, c, d),
        e7 = i.useCallback(
            (e) => {
                function t(e) {
                    return (
                        e.shouldClear &&
                            (er(C.id, { title: "", heroUploadId: null }), (eT.current = ""), ey.current?.blur()),
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
                        eT.current.length > 0
                            ? eT.current
                            : e.value.length > 0
                              ? e.value
                              : eB.intl.string(eB.t["7Xm5QI"])
                    ).slice(0, 100),
                    s = ex.A.getUploads(C.id, eC.C.ChannelMessage),
                    a = s.find((e) => e.id === Y);
                if (null == a)
                    return T({
                        ...e,
                        value: l,
                        announcementSendOptions: { createThread: e3 && eu, threadName: i, publish: ec },
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
                        items: [ez(`attachment://${a.filename}`, null, !1)],
                        id: "82733",
                    }),
                    l.length > 0 && n.push({ type: en.I5.TEXT_DISPLAY, content: l, id: "82744" }));
                let r = s.filter((e) => e !== a),
                    o = r.filter((e) => e.isImage || e.isVideo),
                    c = r.filter((e) => !e.isImage && !e.isVideo),
                    d = o.map((e) => ez(`attachment://${e.filename}`, e.description, e.spoiler));
                return (
                    d.length > 0 && n.push({ type: en.I5.MEDIA_GALLERY, items: d, id: "82755" }),
                    c.forEach((e, t) => {
                        n.push({
                            type: en.I5.FILE,
                            file: ez(`attachment://${e.filename}`, e.description, e.spoiler).media,
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
                        announcementSendOptions: { createThread: e3 && eu, threadName: i, publish: ec },
                    }).then(t)
                );
            },
            [T, X, Y, C.id, eu, ec, e3],
        ),
        { submit: e8, handleSubmit: e6 } = (0, eO.Zx)(e7, E, ey, ev, C.id),
        { autocompleteRef: e9, handleMaybeShowAutocomplete: te, handleHideAutocomplete: tt } = (0, eO.v7)(),
        tn = i.useCallback(() => ev?.current?.hide(), []),
        { editorHeight: tl, handleResize: ti } = (0, eO.ck)(y),
        {
            handleTab: ts,
            handleEnter: ta,
            handleSpace: tr,
            handleMoveSelection: to,
        } = ((t = i.useCallback(
            () => !!(!eW && eI.current?.onTabOrEnter(!1)) || e9.current?.onTabOrEnter(!1) || !1,
            [eW],
        )),
        (n = i.useCallback(() => !!(!eW && eI.current?.onTabOrEnter(!0)) || e9.current?.onTabOrEnter(!1) || !1, [eW])),
        {
            handleTab: t,
            handleEnter: n,
            handleSpace: i.useCallback(() => e9.current?.onSpace() || !1, [e9]),
            handleMoveSelection: i.useCallback(
                (e) => !!(!eW && eI.current?.onMoveSelection(e)) || e9.current?.onMoveSelection(e) || !1,
                [eW],
            ),
        }),
        { expressionPickerView: tc, shouldHideExpressionPicker: td, handleOuterClick: tu } = (0, eO.MD)(E, ey, C.id),
        { handleAutocompleteVisibilityChange: th } = (0, eO.uW)(E, C.id),
        tm = (0, eO.NO)(ey, E, C.id),
        tg = (0, eO.Vu)(e8, E, ey, C.id),
        tp = (0, eO.C)({ editorRef: ey, disabled: eD, textValue: c, channelId: C.id, chatInputType: E, submit: e7 });
    (0, eb.R)(e4, C.guild_id, C.id);
    let [tA, tf] = i.useState(!1),
        tC = i.useCallback(() => {
            (tu(), tf(!0));
        }, [tu]),
        tE = tA || c.length > 0 || null != Q || X.length > 0,
        { editorHeaderHeight: tx, paddingTop: tI } = (0, K.z)({
            editorHeaderHeight: 122 * !!tE,
            paddingTop: 16 * !!tE,
            config: { tension: 120, friction: 15, clamp: !0 },
        }),
        tS = i.useRef(null),
        [ty, tb] = i.useState(!1),
        t_ = i.useRef(!1),
        tj = i.useCallback(() => {
            t_.current = !0;
            let e = setTimeout(() => {
                t_.current && tb(!0);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        tv = i.useCallback(() => {
            t_.current = !1;
            let e = setTimeout(() => {
                t_.current || tb(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        tT = i.useCallback(() => {
            (null != Y && I.A.remove(C.id, Y, eC.C.ChannelMessage), er(C.id, { heroUploadId: null }));
        }, [C.id, Y]);
    return (0, l.jsx)(eo.Sv, {
        value: e4,
        children: (0, l.jsxs)(ei.f5, {
            value: eh,
            children: [
                (0, l.jsxs)("div", {
                    ref: em,
                    className: a()(u, eV.gM),
                    onMouseDown: tC,
                    children: [
                        (0, l.jsx)("div", {
                            ref: ej,
                            onScroll: tn,
                            className: a()(eV.Ui, { [eV.k6]: !H }),
                            children: (0, l.jsxs)("div", {
                                className: a()(eV.vW, eK.vW),
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: eK.rf,
                                        children: [
                                            (0, l.jsxs)(F.animated.div, {
                                                className: eK.ov,
                                                style: { height: tx, paddingTop: tI },
                                                children: [
                                                    null != Q
                                                        ? (0, l.jsx)(eq, { file: et, onRemoveHeroImage: tT })
                                                        : null,
                                                    null != Q
                                                        ? null
                                                        : (0, l.jsx)(eJ, {
                                                              channel: C,
                                                              onImageUploaded: (e) => er(C.id, { heroUploadId: e }),
                                                              onFocus: () => tf(!0),
                                                          }),
                                                    eH
                                                        ? (0, l.jsx)(
                                                              ek,
                                                              {
                                                                  channel: C,
                                                                  className: eK.A$,
                                                                  containerClassName: eK.Py,
                                                                  placeholder: eB.intl.string(eB.t.Z8fYjO),
                                                                  spellCheck: eQ,
                                                                  title: X,
                                                                  onChange: e0,
                                                                  onPlainTextChange: e1,
                                                                  onEnter: e2,
                                                              },
                                                              C.id,
                                                          )
                                                        : (0, l.jsx)("input", {
                                                              maxLength: 140,
                                                              className: eK.hz,
                                                              placeholder: eB.intl.string(eB.t.Z8fYjO),
                                                              value: X,
                                                              onChange: (e) => er(C.id, { title: e.target.value }),
                                                          }),
                                                ],
                                            }),
                                            (0, l.jsx)("div", {
                                                className: eK.I6,
                                                children: (0, l.jsx)(V.vN, {
                                                    ringTarget: em,
                                                    ringClassName: eV.Rg,
                                                    children: (0, l.jsx)(eL.A, {
                                                        ref: ey,
                                                        id: g,
                                                        focused: x,
                                                        useSlate: eH,
                                                        textValue: c,
                                                        richValue: d,
                                                        disabled: eD,
                                                        placeholder: L,
                                                        required: p,
                                                        accessibilityLabel: f,
                                                        isPreviewing: (eM || eR) && eF,
                                                        channel: C,
                                                        type: U.oU.CREATE_ANNOUNCEMENT_POST,
                                                        canPasteFiles: eG,
                                                        uploadPromptCharacterCount: 4e3,
                                                        maxCharacterCount: D ?? eX,
                                                        allowNewLines: !0,
                                                        "aria-describedby": P,
                                                        onChange: S,
                                                        onResize: ti,
                                                        onBlur: b,
                                                        onFocus: j,
                                                        onKeyDown: v,
                                                        onSubmit: e8,
                                                        onTab: ts,
                                                        onEnter: ta,
                                                        onSpace: tr,
                                                        onMoveSelection: to,
                                                        onSelectionChanged: e5,
                                                        onMaybeShowAutocomplete: te,
                                                        onHideAutocomplete: tt,
                                                        promptToUpload: N,
                                                        fontSize: eY,
                                                        spellcheckEnabled: eQ,
                                                        canOnlyUseTextCommands: !1,
                                                        "aria-labelledby": O,
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: eK.KK,
                                        children: (0, l.jsx)(eU.A, {
                                            channelId: C.id,
                                            type: E,
                                            canAttachFiles: eG,
                                            ignoreUploadId: Y,
                                            smallAttachments: !0,
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, l.jsx)("div", { className: eK.yF }),
                        (0, l.jsxs)("div", {
                            className: eK.qr,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: eK.j4,
                                    children: [
                                        (0, l.jsx)(eZ, { channel: C }),
                                        (0, l.jsx)(eP.A, {
                                            type: U.oU.CREATE_ANNOUNCEMENT_POST,
                                            disabled: eD,
                                            channel: C,
                                            handleSubmit: e6,
                                            isEmpty: 0 === c.trim().length,
                                            showAllButtons: !0,
                                            expressionButtonsHidden: !1,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: eK.j4,
                                    children: (0, l.jsx)("div", {
                                        ref: tS,
                                        className: eK.Qo,
                                        onMouseEnter: tj,
                                        onMouseLeave: tv,
                                        children: (0, l.jsx)(m.Y, {
                                            targetElementRef: tS,
                                            renderPopout: () =>
                                                (0, l.jsx)(e$, { channelId: C.id, canCreateThread: e3 }),
                                            shouldShow: ty,
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
                                                    disabled: 0 === c.length && 0 === X.length,
                                                    size: "sm",
                                                    "aria-label": eB.intl.string(eB.t.TXNS7S),
                                                    innerClassName: eK.jo,
                                                    text: (0, l.jsxs)("div", {
                                                        className: eK.f9,
                                                        children: [
                                                            (0, l.jsx)(W.E, {
                                                                variant: "body-sm/semibold",
                                                                color: "text-overlay-light",
                                                                children: eB.intl.string(eB.t.TXNS7S),
                                                            }),
                                                            (0, l.jsxs)("div", {
                                                                className: eK.pj,
                                                                children: [
                                                                    (0, l.jsx)($.SendMessageIcon, {
                                                                        size: "xs",
                                                                        color: "white",
                                                                    }),
                                                                    e3 && eu
                                                                        ? (0, l.jsx)(q.ThreadIcon, {
                                                                              size: "xxs",
                                                                              color: "white",
                                                                              className: eK.Q5,
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
                            ref: e9,
                            channel: C,
                            canMentionRoles: M,
                            canMentionChannels: R,
                            useNewSlashCommands: eH,
                            canOnlyUseTextCommands: !1,
                            canSendStickers: !0,
                            textValue: c,
                            focused: x,
                            expressionPickerView: tc,
                            type: E,
                            editorRef: ey,
                            onSendMessage: e8,
                            onSendSticker: () => {},
                            onVisibilityChange: th,
                            editorHeight: tl,
                            setValue: (e, t) => S?.(null, e, t),
                            position: w,
                        }),
                    ],
                }),
                td
                    ? null
                    : (0, l.jsx)(ed.A, {
                          returnRef: e_,
                          positionTargetRef: em,
                          type: E,
                          onSelectGIF: tg,
                          onSelectEmoji: tm,
                          onSelectSticker: tp,
                          channel: C,
                          closeOnModalOuterClick: B,
                          parentModalKey: Z,
                          position: "top",
                          align: "right",
                          positionLayerClassName: eV.BD,
                      }),
            ],
        }),
    });
});
function e$(e) {
    let { channelId: t, canCreateThread: n } = e,
        i = ea.useField("channelDrafts")[t],
        s = i?.createThread ?? !0,
        a = i?.publish ?? !0;
    return (0, l.jsxs)(Z.W, {
        "data-menu-migrated": !0,
        "aria-label": eB.intl.string(eB.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: eF.tEg,
        onSelect: eF.tEg,
        children: [
            (0, l.jsx)(J.sL, {
                id: "create-thread",
                label: eB.intl.string(eB.t.rBIGBL),
                checked: n && s,
                disabled: !n,
                action: () => {
                    er(t, { createThread: !s });
                },
            }),
            (0, l.jsx)(J.sL, {
                id: "send-and-publish",
                label: eB.intl.string(eB.t.MFGE51),
                checked: a,
                action: () => {
                    er(t, { publish: !a });
                },
            }),
        ],
    });
}
function eq(e) {
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
              className: eK.Lb,
              "aria-hidden": !0,
              children: [
                  (0, l.jsx)("img", { src: s, alt: eB.intl.string(eB.t["2ePvR8"]), className: eK.c8 }),
                  r
                      ? (0, l.jsx)(ec.Ay, {
                            className: eK.jM,
                            children: (0, l.jsx)(eG.A, {
                                tooltip: eB.intl.string(eB.t.VjC21x),
                                onClick: n,
                                dangerous: !0,
                                children: (0, l.jsx)(X.TrashIcon, {}),
                            }),
                        })
                      : null,
              ],
          });
}
function eZ(e) {
    let { channel: t } = e;
    return (0, l.jsx)(eu.A, {
        "aria-label": eB.intl.string(eB.t["/IBYAq"]),
        className: eK.g$,
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
function eJ(e) {
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
        className: eK.qN,
        children: (0, l.jsx)(Q.m, {
            asContainer: !0,
            text: eB.intl.string(eB.t["/IBYAq"]),
            position: "top",
            children: (0, l.jsxs)(ee.D, {
                className: eK.qN,
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
                        maxFileSizeBytes: eH.j,
                        onFileSizeError: () => (0, eh.A)(eH.j),
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
var eX = n(664929),
    eY = n(742287);
let eQ = i.memo(function (e) {
    let { className: t, channel: n, section: i } = e,
        s = null != i ? (0, eX.Rg)(i) : null,
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
var e0 = n(316576),
    e1 = n(35277);
let e2 = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-announcement-composer",
    defaultConfig: { announcementComposer: !1 },
    variations: { 1: { announcementComposer: !0 } },
});
var e3 = n(319365),
    e4 = n(151271),
    e5 = n(407278),
    e7 = n(81400),
    e8 = n(353182),
    e6 = n(727875);
function e9(e) {
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
        className: a()(e6.Ew, o),
        children: [
            (0, l.jsxs)("div", {
                className: a()(e6.lt, s),
                children: [
                    null != t && ("string" == typeof t ? (0, l.jsx)("img", { src: t, alt: "", className: e6.q3 }) : t),
                    (0, l.jsxs)("div", {
                        className: e6._M,
                        children: [
                            (0, l.jsx)("div", { className: a()(e6.U_, r), children: n }),
                            null != i && (0, l.jsx)("div", { className: e6.mi, children: i }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: e6.uu, children: c }),
        ],
    });
}
var te = n(206835),
    tt = n(46653),
    tn = n(696451),
    tl = n(229527),
    ti = n(340837),
    ts = n(355097),
    ta = n(364634);
function tr(e) {
    let { guild: t } = e,
        n = (0, te.A)({ scrollPosition: ts._F.GUILD_TAG });
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(e9, {
            bannerIcon: (0, l.jsx)(e8.ChatXIcon, { size: "lg", color: "currentColor", className: ta.q3 }),
            bannerHeader: eB.intl.format(eB.t.GgMwjk, { guildName: t?.name ?? "" }),
            bannerSubtext: eB.intl.string(eB.t.ONjwD5),
            textStyles: ta.cI,
            headerStyles: ta.U_,
            children: (0, l.jsx)(z.$, {
                variant: "primary",
                size: "sm",
                text: eB.intl.string(eB.t.Viksoo),
                onClick: () => n(),
            }),
        }),
    });
}
function to(e) {
    let { guild: t } = e,
        { analyticsLocations: n } = (0, ei.Ay)(el.A.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [i, s] = (0, e7.j8)({ guildId: t?.id ?? "", analyticsLocations: n }),
        a = s ? eB.intl.string(eB.t["9ph2v7"]) : eB.intl.string(eB.t.ldh9Cg),
        r = s ? eB.intl.string(eB.t["/PGQf0"]) : eB.intl.string(eB.t.WikgZ1);
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(e9, {
            bannerIcon: (0, l.jsx)(e8.ChatXIcon, { size: "lg", color: "currentColor", className: ta.q3 }),
            bannerHeader: eB.intl.format(eB.t.kcYdTq, { guildName: t?.name ?? "" }),
            bannerSubtext: a,
            textStyles: ta.cI,
            headerStyles: ta.U_,
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
function tc(e) {
    let { guild: t } = e,
        n = (0, h.bG)(
            [tt.default, tn.Ay],
            () => {
                if (null == t) return new Set();
                let e = tt.default.getId();
                return (0, tl.wj)(tn.Ay.getMember(t.id, e));
            },
            [t],
        );
    return n.has(ti.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(ti.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, l.jsx)(to, { guild: t })
        : n.has(ti.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, l.jsx)(tr, { guild: t })
          : (0, l.jsx)(to, { guild: t });
}
var td = n(316031),
    tu = n(870136),
    th = n(60270),
    tm = n(576470),
    tg = n(496431),
    tp = n(592713),
    tA = n(264388),
    tf = n(534514),
    tC = n(542290);
function tE(e) {
    let { onClose: t, guildName: n } = e;
    return (0, l.jsxs)("div", {
        className: tC.kL,
        children: [
            (0, l.jsx)("div", {
                className: tC.zc,
                children: (0, l.jsx)(th.ClockWarningIcon, {
                    size: "custom",
                    color: "currentColor",
                    className: tC.Kk,
                    width: 20,
                    height: 20,
                }),
            }),
            (0, l.jsxs)("div", {
                className: tC.wx,
                children: [
                    (0, l.jsx)(tf.D, {
                        variant: "heading-sm/semibold",
                        className: tC.TK,
                        children: eB.intl.string(eB.t.LIIyeE),
                    }),
                    (0, l.jsx)(W.E, {
                        variant: "body-sm/normal",
                        children: eB.intl.format(eB.t["4/6vQh"], { guildName: n }),
                    }),
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tC.x6,
                        children: (0, l.jsx)(z.$, {
                            variant: "primary",
                            text: eB.intl.string(eB.t.BddRzS),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var tx = n(200700),
    tI = n(481161);
function tS(e) {
    let { guild: t, disabledUntil: n } = e,
        [s, a] = (0, tA.n)(t.id);
    return (
        !(function (e) {
            let { communicationDisabledUntil: t, userId: n, guildId: l } = e ?? {},
                s = (0, tg.A)(null != t ? Date.parse(t) : Date.now()).seconds,
                a = (0, i.useRef)(null);
            (0, i.useEffect)(
                () =>
                    null == e || null == l || null == n
                        ? void clearTimeout(a.current)
                        : (s <= 0 &&
                              null == a.current &&
                              (a.current = setTimeout(() => {
                                  tp.A.clearGuildMemberTimeout(l, n);
                              }, 1e3)),
                          () => {
                              null != a.current && (clearTimeout(a.current), (a.current = null));
                          }),
                [l, n, s, t, e],
            );
        })((0, h.bG)([tn.Ay, tt.default], () => tn.Ay.getMember(t.id, tt.default.getId()), [t.id])),
        (0, l.jsxs)("div", {
            children: [
                s ? (0, l.jsx)(tE, { onClose: () => a(t.id), guildName: t.name }) : null,
                (0, l.jsx)(e9, {
                    bannerIcon: (0, l.jsx)(th.ClockWarningIcon, {
                        size: "md",
                        color: "currentColor",
                        className: tI.q3,
                    }),
                    bannerHeader: eB.intl.string(eB.t["9UoK6Y"]),
                    bannerSubtext: eB.intl.format(eB.t["4ZwD5G"], { link: tx.MO }),
                    textStyles: tI.cI,
                    headerStyles: tI.U_,
                    children: (0, l.jsx)(W.E, {
                        variant: "body-sm/semibold",
                        children: (0, l.jsx)(tm.A, { deadline: new Date(n), showUnits: !0, stopAtOneSec: !0 }),
                    }),
                }),
            ],
        })
    );
}
var ty = n(885071),
    tb = n(39738),
    t_ = n(513609),
    tj = n(176781),
    tv = n(683825),
    tT = n(273692);
function tN() {
    return (0, l.jsx)(e9, {
        textStyles: tT.U,
        bannerIcon: (0, l.jsx)(tj.ClipsIcon, { size: "lg" }),
        bannerHeader: eB.intl.string(tv.default.unC18Z),
        bannerSubtext: eB.intl.string(tv.default["7mR8Bv"]),
    });
}
var tM = n(458914),
    tR = n(959698),
    tD = n(521427),
    tk = n(751258),
    tL = n(451909),
    tP = n(926262),
    tO = n(891522),
    tG = n(537174),
    tU = n(973196),
    tw = n(361729),
    tF = n(308718);
function tH() {
    return (0, l.jsx)(e9, {
        containerStyles: tF.k,
        bannerHeader: eB.intl.string(tw.default.e7ydX0),
        bannerSubtext: eB.intl.string(tw.default.POfugg),
    });
}
var tB = n(591563),
    tK = n(3137),
    tV = n(559908);
n(142703);
var tz = n(765671),
    tW = n(741961),
    t$ = n(459793),
    tq = n(103640);
function tZ(e, t) {
    return e === t || (e?.channelId === t?.channelId && e?.value === t?.value && e?.multiplier === t?.multiplier);
}
var tJ = n(93219);
let tX = i.memo(function (e) {
        let { channelId: t, width: n } = e,
            s = (0, h.bG)([_.Ay], () => _.Ay.useReducedMotion),
            a = (0, h.bG)([tV.Ay], () => tV.Ay.getMostRecentMessageCombo(t), [t]),
            [r, o] = i.useState(!1);
        i.useEffect(() => {
            if (a?.displayed) return;
            (o(!1),
                setImmediate(() => {
                    o((null != a ? (0, tq.RL)(a.combo) : 0) > 0);
                }));
            let e = setTimeout(() => {
                (o(!1), null != a && (0, tB.Nu)(a));
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
                children: (0, l.jsx)(W.E, {
                    className: tJ.fX,
                    variant: "body-sm/semibold",
                    children: (0, tq.RL)(a.combo),
                }),
            })
        );
    }),
    tY = i.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: s, square: r, flair: o } = i.useMemo(() => (0, tq.HN)(n), [n]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(W.E, { className: tJ.iR, variant: "body-sm/semibold", children: t }),
                (0, l.jsxs)("div", {
                    className: tJ._Z,
                    style: { color: s },
                    children: [
                        (0, l.jsx)(W.E, {
                            className: tJ.On,
                            style: { color: s },
                            variant: "body-sm/semibold",
                            children: eB.intl.format(eB.t["6bgVlq"], { multiplier: n }),
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
                                        children: (0, l.jsx)(t$.A, { width: 24, height: 24 }),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: a()(tJ.ox, tJ.pG),
                                        children: (0, l.jsx)(t$.A, { width: 24, height: 24 }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, l.jsx)(W.E, {
                                className: tJ.uN,
                                variant: "body-sm/semibold",
                                children: eB.intl.string(eB.t.b5Cpof),
                            }),
                    ],
                }),
            ],
        });
    }),
    tQ = i.memo(function (e) {
        let t,
            { channelId: n } = e,
            s = (0, h.bG)([tt.default], () => tt.default.getId()),
            a = (0, h.bG)([tW.A], () => tW.A.isTyping(n, s), [n, s]),
            r = (0, h.bG)([tK.A], () => tK.A.isEnabled()),
            o = (0, h.bG)([tV.Ay], () => tV.Ay.isComboing(s, n), [n, s]),
            { ref: c, width: d = 0 } = (0, tz.Ay)(),
            [u, m] = i.useState(!1),
            g =
                ((t = (0, h.bG)([tK.A], () => !!tK.A.isEnabled() && tK.A.combosEnabled)),
                (0, h.bG)(
                    [tV.Ay, tt.default],
                    () => (t ? tV.Ay.getUserCombo(tt.default.getId(), n) : void 0),
                    [n, t],
                    tZ,
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
                (0, l.jsx)(tX, { channelId: n, width: d }),
                (0, l.jsx)(F.animated.div, {
                    ref: c,
                    className: tJ.p_,
                    style: A,
                    children: (0, l.jsx)(tY, { value: x, multiplier: E }),
                }),
            ],
        });
    });
var t0 = n(208343),
    t1 = n(31408),
    t2 = n(810685),
    t3 = n(806621),
    t4 = n(596344);
let t5 = function (e, t) {
    let n = (0, t3.r)(t),
        l = (0, h.bG)([t4.A], () => t4.A.getMessages(t.id).length > 0, [t]);
    return null != e && e.hasFlag(eF.nhx.QUARANTINED) && n && !l;
};
var t7 = n(831502);
let t8 = function () {
    return (0, l.jsx)(e9, {
        bannerIcon: (0, l.jsx)(t2.M, { alt: "", width: 80, height: 40 }),
        bannerHeader: eB.intl.string(eB.t.EouHwv),
        bannerSubtext: eB.intl.format(eB.t.PThBel, { appealLink: t7.q }),
    });
};
var t6 = n(118517),
    t9 = n(853145),
    ne = n(226698),
    nt = n(307805),
    nn = n(985632);
let nl = function (e) {
    let { channelId: t } = e,
        n = i.useCallback(() => {
            ne.A.reopenModReport(t);
        }, [t]);
    return (0, l.jsx)(e9, {
        bannerHeader: (0, l.jsx)(W.E, {
            variant: "body-md/medium",
            color: "text-muted",
            children: eB.intl.string(nt.default["0eUUeF"]),
        }),
        headerStyles: nn.U,
        containerStyles: nn.c,
        children: (0, l.jsx)(z.$, {
            variant: "secondary",
            size: "sm",
            text: eB.intl.string(nt.default["6quCi9"]),
            onClick: n,
        }),
    });
};
var ni = n(631576),
    ns = n(728321),
    na = n(799704),
    nr = n(580745),
    no = n(576705),
    nc = n(994500),
    nd = n(309010),
    nu = n(287809),
    nh = n(129230),
    nm = n(147036),
    ng = n(234320),
    np = n(188567),
    nA = n(811091),
    nf = n(710272),
    nC = n(382287),
    nE = n(137577),
    nx = n(47167),
    nI = n(480870),
    nS = n(390756),
    ny = n(178653),
    nb = n(626977),
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
var nv = n(544990),
    nT = n(678655),
    nN = n(858899),
    nM = n(336590),
    nR = n(190857),
    nD = n(378570),
    nk = n(138298),
    nL = n(260771);
function nP(e) {
    let { channel: t } = e,
        n = (0, nM.k)(),
        s = (0, h.bG)([nu.default], () => nu.default.getUser(t.getRecipientId())),
        a = i.useCallback(() => {
            (0, nN.P0)({ text: eB.intl.string(eB.t["EDYbS+"]), variant: "critical" });
        }, []),
        r = i.useCallback(() => {
            nk.A.closeChannelSidebar(na.fe);
        }, []),
        o = i.useCallback(() => {
            (nk.A.closeChannelSidebar(na.fe), n && (0, nD.iN)(t.id));
        }, [t.id, n]),
        {
            acceptMessageRequest: c,
            rejectMessageRequest: d,
            isAcceptLoading: u,
            isRejectLoading: m,
            isUserProfileLoading: g,
            isOptimisticAccepted: p,
            isOptimisticRejected: A,
        } = (0, nR.t)({ user: s, onAcceptSuccess: o, onRejectSuccess: r, onError: a }),
        f = u || m || g || p || A;
    return (0, l.jsxs)("div", {
        className: nL.kL,
        children: [
            (0, l.jsx)(W.E, {
                className: nL.VA,
                variant: "body-md/medium",
                color: "text-muted",
                children: eB.intl.string(eB.t.YQ0uUE),
            }),
            (0, l.jsxs)("div", {
                className: nL.o1,
                children: [
                    (0, l.jsx)(z.$, {
                        variant: "secondary",
                        size: "sm",
                        text: eB.intl.string(eB.t.BVN4pL),
                        onClick: () => d(t.id),
                        disabled: f,
                        loading: m || A,
                    }),
                    (0, l.jsx)(z.$, {
                        variant: "primary",
                        size: "sm",
                        text: eB.intl.string(eB.t.Kz8Pwr),
                        onClick: () => c(t.id),
                        disabled: f,
                        loading: u || g || p,
                    }),
                ],
            }),
        ],
    });
}
var nO = n(698279),
    nG = n(381941),
    nU = n(650583),
    nw = n(999900);
function nF(e) {
    e.preventDefault();
}
let nH = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function nB(e) {
    let { isSidebar: t, ...n } = e;
    return t ? (0, l.jsx)("section", { ...n, role: "complementary" }) : (0, l.jsx)("main", { ...n });
}
function nK(e) {
    let { ref: t, ...n } = e;
    return (0, l.jsx)(nV, { ...n, ref: t });
}
nK.displayName = "ChannelTextAreaForm";
class nV extends i.PureComponent {
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
        t.textValue.length < 2e3 && l.length >= 2e3 && nh.default.track(eF.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {});
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
                        ? np._.dispatchToLastSubscribed(eF.jej.FOCUS_ATTACHMENT_AREA)
                        : np._.dispatchToLastSubscribed(eF.jej.FOCUS_MESSAGES, { atEnd: !0 });
                else {
                    let { channel: e } = this.props,
                        t = t4.A.getLastChatCommandMessage(e.id),
                        n = t4.A.getLastEditableMessage(e.id);
                    null != t && null != n
                        ? nA.default.compare(n.id, t.id) > 0
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
            l = tt.default.getId(),
            i = tV.Ay.getUserCombo(l, n),
            s = (i?.value ?? 0) + 1;
        (0, tB.oG)({ channelId: n, userId: l, value: null != e ? e.length : s, multiplier: t });
    };
    handleTextareaChange = (e, t, n) => {
        let {
            keyboardModeEnabled: l,
            chatInputType: i,
            channel: { id: s },
        } = this.props;
        if (i === U.oU.NORMAL && s !== nd.Ay.getChannelId()) return;
        C.A.changeDraft(s, t, eC.C.ChannelMessage);
        let a = "" !== t && n !== this.state.richValue,
            r = a && !nH.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
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
                    np._.dispatch(eF.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
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
                    l = e === L.iw.APPLICATION_LAUNCHER ? T.A.lastShownEntrypoint() : N.s4.TEXT,
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
        return (0, nf.i)({
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
                        np._.dispatch(eF.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                        np._.dispatch(eF.jej.EMPHASIZE_SLOWMODE_COOLDOWN),
                        { shouldClear: !1, shouldRefocus: !0 }
                    );
                else return { shouldClear: !1, shouldRefocus: !1 };
            let f = (0, tk.S)(t, { channel: h, isEdit: !1 });
            null != f && (null != f.content && (t = f.content), null != f.tts && (p = f.tts));
            let x = tL.Ay.parse(h, t);
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
                location: nG.Hx.CHAT_INPUT,
            };
            if (
                (null != c && (S.announcementSendOptions = c),
                null != r && (S.gifMetadata = r),
                null != o && (S.flags = (0, u.UI)(S.flags ?? 0, eF.pr7.IS_COMPONENTS_V2)),
                a)
            )
                return (E.A.sendMessage(h.id, x, void 0, S), (0, t6.Jx)(h.id), { shouldClear: !1, shouldRefocus: !0 });
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
                let e = (0, nC.LJ)(n);
                if ((0, nC.fJ)({ files: e, guildId: d?.id }))
                    return ((0, ey.V)(h, e), { shouldClear: !1, shouldRefocus: !1 });
                ((S.eagerDispatch = !1),
                    (S.attachmentsToUpload = n),
                    (S.onAttachmentUploadError = (e, t, n) => {
                        (0, tM.k)({ file: e, guildId: h.getGuildId(), analyticsLocations: [], code: t, reason: n }) &&
                            y();
                    }),
                    I.A.clearAll(h.id, eC.C.ChannelMessage));
            }
            return (
                E.A.sendMessage(h.id, x, void 0, S).catch((e) => {
                    throw ((null != S.scheduledTimestamp || !1 === S.eagerDispatch) && y(), e);
                }),
                this.setState((0, w.N3)()),
                (0, t6.Jx)(h.id),
                (0, ni.x5)(h.id, g.drafts.type),
                { shouldClear: !0, shouldRefocus: !0 }
            );
        });
    };
    handleSetValue = (e) => {
        let t = this.editorRef?.getSlateEditor();
        null != t && (e1.b.select(t, []), t.insertText(e), this.editorRef?.focus());
    };
    renderAttachButton = (e, t) =>
        (0, l.jsx)(e0.A, {
            className: t,
            channel: this.props.channel,
            draftType: eC.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: this.handleSetValue,
            canOnlyUseTextCommands: e,
            chatInputType: this.props.chatInputType,
        });
    renderApplicationCommandIcon = (e, t, n) =>
        (0, l.jsx)(eQ, { className: n, command: e, section: t, channel: this.props.channel });
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
                    ? (0, l.jsx)(eW, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: nw.gM,
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
                          className: nw.gM,
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
                    (0, l.jsx)(tP.A, { onClose: t, ...C })
                );
            },
            children: () =>
                p ? (0, l.jsx)(g.b, { isShaking: h > 0, intensity: h, className: nw.Xn, children: E }) : E,
        });
    }
}
class nz extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: l } = t;
        return n.id !== l
            ? { textAreaFocused: null != n && !c.Fr && no.A.can(eF.xBc.SEND_MESSAGES, n), currentChannelId: n.id }
            : null;
    }
    containerDomRef = i.createRef();
    refToChannelTextAreaFormComponent = i.createRef();
    inputFormRef = i.createRef();
    state = { textAreaFocused: !1, textAreaHighlighted: !1, currentChannelId: this.props.channel.id };
    dispatchGroupRef = i.createRef();
    componentDidMount() {
        np._.subscribe(eF.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        np._.unsubscribe(eF.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
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
                    n === U.oU.SIDEBAR &&
                        np._.dispatch(eF.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: nd.Ay.getChannelId() });
                    return;
                case nU.dh.ARROW_RIGHT:
                    n === U.oU.NORMAL &&
                        np._.dispatch(eF.jej.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: na.Ay.getCurrentSidebarChannelId(l.id),
                        });
            }
    };
    handleOpenExpressionPicker = (e) => {
        let { activeView: t } = e;
        (0, e4.bf)(t, this.props.chatInputType, this.props.channel.id);
    };
    openEmojiPacks = (e) => {
        let { channel: t, chatInputType: n, announcementComposerEnabled: l } = this.props,
            i = t.type === eF.rbe.GUILD_ANNOUNCEMENT && l ? U.oU.CREATE_ANNOUNCEMENT_POST : n;
        (0, e4.bf)(nO.kx.EMOJI, i, t.id, { showSelectedEmojiPackId: e });
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
            ? (0, l.jsx)(tN, {})
            : this.props.restrictedPreview && t.type === eF.rbe.DM
              ? (0, l.jsx)(nP, { channel: t })
              : t.type === eF.rbe.DM && n
                ? (0, l.jsx)(t8, {})
                : t.isModeratorReportChannel() && t.isArchivedThread()
                  ? (0, l.jsx)(nl, { channelId: t.id })
                  : null != s && (0, td.n)(s) && null != i && !no.A.can(eF.xBc.ADMINISTRATOR, i)
                    ? (0, l.jsx)(tS, { guild: i, disabledUntil: s })
                    : a
                      ? (0, l.jsx)(tc, { guild: i })
                      : this.props.isOverlayTextEntryDisabled
                        ? (0, l.jsx)(tH, {})
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
                ? eB.t.pnnyFZ
                : T && t.type === eF.rbe.GUILD_STAGE_VOICE
                  ? eB.t.YInSkq
                  : d.k.THREADS.has(t.type)
                    ? eB.t["OkzL+Q"]
                    : eB.t.UbNmGc;
        let N = (0, l.jsx)("div", { className: nw.li, children: (0, l.jsx)(nj, {}) }),
            M = (0, l.jsx)("div", {
                className: nw.li,
                children: (0, l.jsx)(ns.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    disabled: null == n,
                    children: (0, l.jsx)(nK, {
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
            D = (0, nx.m1)(t, nu.default, nc.A);
        return (0, l.jsx)(
            y.A,
            {
                page: (0, nm.DJ)(this.props.channel),
                children: (0, l.jsx)(t_.di, {
                    children: (0, l.jsx)(tb.X, {
                        children: (0, l.jsxs)(ng.Ah, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, l.jsx)(ng.EG, { event: eF.jej.TEXTAREA_FOCUS, handler: this.handleInputFocus }),
                                (0, l.jsx)(ng.EG, { event: eF.jej.TEXTAREA_BLUR, handler: this.handleInputBlur }),
                                (0, l.jsx)(ng.EG, {
                                    event: eF.jej.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, l.jsx)(ng.EG, {
                                    event: eF.jej.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, l.jsxs)(nB, {
                                    isSidebar: T,
                                    className: nw.q2,
                                    "aria-label": eB.intl.formatToPlainString(e, { channelName: D }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: this.props.guildOfficialMessageStyle,
                                    children: [
                                        (0, l.jsx)(nb.A, { channel: t, guild: n, narrow: T }),
                                        (0, l.jsxs)(p.F, {
                                            component: (0, l.jsx)(A.A, {
                                                children: (0, l.jsx)(p.H, {
                                                    children: eB.intl.format(eB.t.eTzKkx, { channelName: D }),
                                                }),
                                            }),
                                            children: [
                                                (0, l.jsxs)(e3.h1, {
                                                    channelId: t.id,
                                                    children: [
                                                        (0, l.jsx)(ny.A.Provider, {
                                                            value: this.openEmojiPacks,
                                                            children: (0, l.jsx)(tO.A, {
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
                                                                  onSubmit: nF,
                                                                  className: a()(nw.Zd, { [nw.Mf]: !b }),
                                                                  children: [
                                                                      C && (0, l.jsx)(tQ, { channelId: t.id }),
                                                                      t.isPrivate()
                                                                          ? (0, l.jsx)(nv.A, {
                                                                                channel: t,
                                                                                children: R,
                                                                            })
                                                                          : (0, l.jsx)(nT.A, {
                                                                                channel: t,
                                                                                children: R,
                                                                            }),
                                                                      (0, l.jsx)(nW, { channel: t }),
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
function nW(e) {
    let { channel: t } = e,
        { isFocused: n } = (0, e3.D7)();
    return n ? null : (0, l.jsx)(S.Ay, { channel: t, isInTextChannel: !0 });
}
let n$ = i.memo(function (e) {
    var t, n;
    let i,
        s,
        { channel: a, guild: r, chatInputType: o, filterAfterTimestamp: c } = e,
        { placeholder: d, accessibilityLabel: u } = (0, nI.A)({ channel: a }),
        m = (0, tU.A)(),
        g = t5(nu.default.getCurrentUser(), a),
        [p] = (0, tu.c)(r?.id),
        A = (0, e7.uZ)(r?.id),
        C = (0, h.bG)([nu.default], () => nu.default.getCurrentUser()),
        E = (0, h.bG)([tn.Ay], () => null != C && (tn.Ay.getMember(r?.id ?? "", C?.id)?.isPending ?? !1)),
        x = (0, h.bG)([tK.A], () => tK.A.isEnabled()),
        I =
            ((t = a.id),
            (i = (0, t0.A)(t1.uD.CHAT_INPUT)),
            (s = (0, h.bG)([tK.A], () => tK.A.isEnabled({ shakeLocation: t1.uD.CHAT_INPUT }))),
            (0, h.bG)([tW.A, tV.Ay, tt.default], () =>
                s && tW.A.isTyping(t, tt.default.getId())
                    ? tV.Ay.getUserComboShakeIntensity(tt.default.getId(), t, i)
                    : 0,
            )),
        y = (0, ty.A)(a.id),
        b = ((n = a.id), (0, h.bG)([eC.A], () => eC.A.getScheduledMessage(n))),
        j = (0, h.bG)([tV.Ay, tt.default], () => tV.Ay.getUserCombo(tt.default.getId(), a.id)),
        v = (0, S.rj)(a),
        T = (0, S.aW)(a),
        N = (0, e5.L)(a.id),
        M = v.length > 0 || a.rateLimitPerUser > 0 || null != j || null != T || N,
        { showLinkedLobbyApplicationLoadingIndicator: R } = (0, nE.A)(a.linkedLobby),
        D = e2.useConfig({ location: "ChannelChat" }).announcementComposer,
        k = (0, tG.A)((0, tD.GP)(r, "ChannelChat") ? (r?.officialMessageColor ?? nG.aj) : null),
        L = (0, tR.U)();
    return (0, l.jsx)(nz, {
        channel: a,
        restrictedPreview: L,
        guildOfficialMessageStyle: k,
        isEditing: null != (0, h.bG)([nr.A], () => nr.A.getEditingMessageId(a.id)),
        hasModalOpen: (0, f.re)(f.DX),
        guild: r,
        keyboardModeEnabled: (0, h.bG)([_.Ay], () => _.Ay.keyboardModeEnabled),
        pendingReply: (0, h.bG)([t9.A], () => t9.A.getPendingReply(a.id)),
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
