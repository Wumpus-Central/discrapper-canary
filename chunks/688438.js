(n.d(t, { A: () => n3 }), n(938796));
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
    m = n(922016),
    g = n(568602),
    p = n(707554),
    A = n(140735),
    f = n(192308),
    C = n(465532),
    x = n(148494),
    E = n(414798),
    S = n(608299),
    I = n(119031),
    j = n(820284),
    y = n(955572),
    v = n(775602),
    _ = n(95561),
    b = n(211401),
    N = n(989837),
    T = n(500049),
    M = n(721768),
    R = n(459016),
    D = n(842209),
    L = n(861382),
    k = n(392054),
    P = n(168186),
    O = n(545152),
    G = n(972995),
    U = n(355622),
    w = n(408018);
(n(321073), n(323874), n(14289), n(35956));
var F = n(202091),
    B = n(132500),
    H = n(661531),
    K = n(717421),
    V = n(559106),
    z = n(821609),
    W = n(834730),
    $ = n(559647),
    q = n(163328),
    Z = n(980707),
    J = n(477782),
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
    ed = n(818666),
    eu = n(703007),
    eh = n(2553),
    em = n(946274),
    eg = n(274652),
    ep = n(135621),
    eA = n(406704),
    ef = n(885386),
    eC = n(31717),
    ex = n(638128),
    eE = n(522602),
    eS = n(515718),
    eI = n(723702),
    ej = n(518960),
    ey = n(486319),
    ev = n(719442),
    e_ = n(267102),
    eb = n(655098),
    eN = n(323350),
    eT = n(820066),
    eM = n(683167),
    eR = n(551483);
let eD = {
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
        h = i.useContext(e_.Ay),
        m = i.useRef(o),
        [g] = i.useState(() => {
            let e = (0, ev.ie)();
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
                                (null != e.selection && ev.Q6.isExpanded(e.selection)
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
var ek = n(392553),
    eP = n(123583),
    eO = n(479909),
    eG = n(851023),
    eU = n(822610),
    ew = n(652215);
(n(827669), n(294920));
var eF = n(478644),
    eB = n(375708),
    eH = n(806686),
    eK = n(495088);
function eV(e, t, n) {
    return {
        media: { url: e, proxyUrl: e, loadingState: en.TD.UNKNOWN, flags: 0 },
        description: t ?? void 0,
        spoiler: n,
    };
}
let ez = i.memo(
    i.forwardRef(function (e, t) {
        let n,
            s,
            {
                textValue: r,
                richValue: c,
                className: d,
                id: u,
                required: g,
                disabled: p,
                accessibilityLabel: A,
                channel: f,
                type: C,
                focused: x,
                onChange: E,
                onResize: I,
                onBlur: j,
                onFocus: y,
                onKeyDown: _,
                onSubmit: b,
                promptToUpload: N,
                canMentionRoles: T,
                canMentionChannels: M,
                maxCharacterCount: R,
                placeholder: D,
                "aria-describedby": k,
                "aria-labelledby": P,
                setEditorRef: O,
                autoCompletePosition: G,
                disableThemedBackground: w = !1,
                emojiPickerCloseOnModalOuterClick: B,
                parentModalKey: H,
            } = e,
            Z = ea.useField("channelDrafts")[f.id],
            J = Z?.title ?? "",
            Y = Z?.heroUploadId,
            X = (0, h.bG)([eE.A], () => (null != Y ? eE.A.getUpload(f.id, Y, eC.C.ChannelMessage) : null)),
            Q = X?.item,
            ee = null != Q && Q.platform === eg.x.WEB ? Q.file : null,
            et = Z?.publish ?? !0,
            ec = Z?.createThread ?? !0;
        o()(null != C, "chat input type must be set");
        let { analyticsLocations: eu } = (0, ei.Ay)(el.A.CHANNEL_TEXT_AREA),
            eh = (0, eO.L0)(t),
            em = i.useRef(null),
            eS = i.useRef(null),
            ej = i.useRef(null),
            ev = i.useRef(null),
            e_ = i.useRef(J);
        O?.(eS.current);
        let { activeCommand: eb } = (0, h.cf)([L.A], () => ({
                activeCommand: C.commands?.enabled ? L.A.getActiveCommand(f.id) : null,
                activeCommandSection: C.commands?.enabled ? L.A.getActiveCommandSection(f.id) : null,
            })),
            {
                isLurking: eN,
                isPendingMember: eT,
                disabled: eM,
                canAttachFiles: eR,
                canEveryoneSendMessages: eD,
            } = (0, eO.Sk)(f, C, eb, p),
            eG = !ef.D_.useSetting() && !(0, eI.isAndroidWeb)() && null != window.ResizeObserver,
            eF = !eG || !C.commands?.enabled || !x || "/" !== r,
            ez = (0, ep.A)(),
            { fontSize: eJ } = (0, h.cf)([v.Ay], () => ({
                fontSize: v.Ay.fontSize,
                isSubmitButtonEnabled: v.Ay.isSubmitButtonEnabled,
            })),
            eY = (0, h.bG)([ex.A], () => ex.A.isEnabled());
        i.useEffect(() => {
            eG || (e_.current = J);
        }, [J, eG]);
        let eX = i.useCallback((e) => er(f.id, { title: e }), [f.id]),
            eQ = i.useCallback((e) => {
                e_.current = e;
            }, []),
            e0 = i.useCallback(() => eS.current?.focus(), []),
            e1 = (0, eA.n)(f);
        (0, eO.N_)(C, eM, f.id);
        let { eventEmitter: e2, handleEditorSelectionChanged: e3 } = (0, eO.ml)(eS, r, c),
            e4 = i.useCallback(
                (e) => {
                    function t(e) {
                        return (
                            e.shouldClear &&
                                (er(f.id, { title: "", heroUploadId: null }), (e_.current = ""), eS.current?.blur()),
                            e
                        );
                    }
                    let n = [],
                        l = `${
                            J.length > 0
                                ? `# ${J}
`
                                : ""
                        }${e.value}`,
                        i = (
                            e_.current.length > 0
                                ? e_.current
                                : e.value.length > 0
                                  ? e.value
                                  : eB.intl.string(eB.t["7Xm5QI"])
                        ).slice(0, ew.Ign),
                        s = eE.A.getUploads(f.id, eC.C.ChannelMessage),
                        a = s.find((e) => e.id === Y);
                    if (null == a)
                        return b({
                            ...e,
                            value: l,
                            announcementSendOptions: { createThread: e1 && ec, threadName: i, publish: et },
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
                    })(f.id, s),
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
                        b({
                            ...e,
                            value: l,
                            components: n,
                            announcementSendOptions: { createThread: e1 && ec, threadName: i, publish: et },
                        }).then(t)
                    );
                },
                [b, J, Y, f.id, ec, et, e1],
            ),
            { submit: e7, handleSubmit: e8 } = (0, eO.Zx)(e4, C, eS, ev, f.id),
            { autocompleteRef: e5, handleMaybeShowAutocomplete: e6, handleHideAutocomplete: e9 } = (0, eO.v7)(),
            te = i.useCallback(() => ev?.current?.hide(), []),
            { editorHeight: tt, handleResize: tn } = (0, eO.ck)(I),
            {
                handleTab: tl,
                handleEnter: ti,
                handleSpace: ts,
                handleMoveSelection: ta,
            } = ((n = i.useCallback(
                () => !!(!eF && em.current?.onTabOrEnter(!1)) || e5.current?.onTabOrEnter(!1) || !1,
                [eF],
            )),
            (s = i.useCallback(
                () => !!(!eF && em.current?.onTabOrEnter(!0)) || e5.current?.onTabOrEnter(!1) || !1,
                [eF],
            )),
            {
                handleTab: n,
                handleEnter: s,
                handleSpace: i.useCallback(() => e5.current?.onSpace() || !1, [e5]),
                handleMoveSelection: i.useCallback(
                    (e) => !!(!eF && em.current?.onMoveSelection(e)) || e5.current?.onMoveSelection(e) || !1,
                    [eF],
                ),
            }),
            {
                expressionPickerView: tr,
                shouldHideExpressionPicker: to,
                handleOuterClick: tc,
            } = (0, eO.MD)(C, eS, f.id),
            { handleAutocompleteVisibilityChange: td } = (0, eO.uW)(C, f.id),
            tu = (0, eO.NO)(eS),
            th = (0, eO.Vu)(e7, C, eS),
            tm = (0, eO.C)({
                editorRef: eS,
                disabled: eM,
                textValue: r,
                channelId: f.id,
                chatInputType: C,
                submit: e4,
            });
        (0, ey.R)(e2, f.guild_id, f.id);
        let [tg, tp] = i.useState(!1),
            tA = i.useCallback(() => {
                (tc(), tp(!0));
            }, [tc]),
            tf = tg || r.length > 0 || null != X || J.length > 0,
            { editorHeaderHeight: tC, paddingTop: tx } = (0, K.z)({
                editorHeaderHeight: 122 * !!tf,
                paddingTop: 16 * !!tf,
                config: { tension: 120, friction: 15, clamp: !0 },
            }),
            tE = i.useRef(null),
            [tS, tI] = i.useState(!1),
            tj = i.useRef(!1),
            ty = i.useCallback(() => {
                tj.current = !0;
                let e = setTimeout(() => {
                    tj.current && tI(!0);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tv = i.useCallback(() => {
                tj.current = !1;
                let e = setTimeout(() => {
                    tj.current || tI(!1);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            t_ = i.useCallback(() => {
                (null != Y && S.A.remove(f.id, Y, eC.C.ChannelMessage), er(f.id, { heroUploadId: null }));
            }, [f.id, Y]);
        return (0, l.jsx)(eo.Sv, {
            value: e2,
            children: (0, l.jsxs)(ei.f5, {
                value: eu,
                children: [
                    (0, l.jsxs)("div", {
                        ref: eh,
                        className: a()(d, eK.gM),
                        onMouseDown: tA,
                        children: [
                            (0, l.jsx)("div", {
                                ref: ej,
                                onScroll: te,
                                className: a()(eK.Ui, { [eK.k6]: !w }),
                                children: (0, l.jsxs)("div", {
                                    className: a()(eK.vW, eH.vW),
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: eH.rf,
                                            children: [
                                                (0, l.jsxs)(F.animated.div, {
                                                    className: eH.ov,
                                                    style: { height: tC, paddingTop: tx },
                                                    children: [
                                                        null != X
                                                            ? (0, l.jsx)(e$, { file: ee, onRemoveHeroImage: t_ })
                                                            : null,
                                                        null != X
                                                            ? null
                                                            : (0, l.jsx)(eZ, {
                                                                  channel: f,
                                                                  onImageUploaded: (e) => er(f.id, { heroUploadId: e }),
                                                                  onFocus: () => tp(!0),
                                                              }),
                                                        eG
                                                            ? (0, l.jsx)(
                                                                  eL,
                                                                  {
                                                                      channel: f,
                                                                      className: eH.A$,
                                                                      containerClassName: eH.Py,
                                                                      placeholder: eB.intl.string(eB.t.Z8fYjO),
                                                                      spellCheck: eY,
                                                                      title: J,
                                                                      onChange: eX,
                                                                      onPlainTextChange: eQ,
                                                                      onEnter: e0,
                                                                  },
                                                                  f.id,
                                                              )
                                                            : (0, l.jsx)("input", {
                                                                  maxLength: 140,
                                                                  className: eH.hz,
                                                                  placeholder: eB.intl.string(eB.t.Z8fYjO),
                                                                  value: J,
                                                                  onChange: (e) => er(f.id, { title: e.target.value }),
                                                              }),
                                                    ],
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: eH.I6,
                                                    children: (0, l.jsx)(V.vN, {
                                                        ringTarget: eh,
                                                        ringClassName: eK.Rg,
                                                        children: (0, l.jsx)(ek.A, {
                                                            ref: eS,
                                                            id: u,
                                                            focused: x,
                                                            useSlate: eG,
                                                            textValue: r,
                                                            richValue: c,
                                                            disabled: eM,
                                                            placeholder: D,
                                                            required: g,
                                                            accessibilityLabel: A,
                                                            isPreviewing: (eN || eT) && eD,
                                                            channel: f,
                                                            type: U.oU.CREATE_ANNOUNCEMENT_POST,
                                                            canPasteFiles: eR,
                                                            uploadPromptCharacterCount: ew.CS1,
                                                            maxCharacterCount: R ?? ez,
                                                            allowNewLines: !0,
                                                            "aria-describedby": k,
                                                            onChange: E,
                                                            onResize: tn,
                                                            onBlur: j,
                                                            onFocus: y,
                                                            onKeyDown: _,
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
                                                            spellcheckEnabled: eY,
                                                            canOnlyUseTextCommands: !1,
                                                            "aria-labelledby": P,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, l.jsx)("div", {
                                            className: eH.KK,
                                            children: (0, l.jsx)(eU.A, {
                                                channelId: f.id,
                                                type: C,
                                                canAttachFiles: eR,
                                                ignoreUploadId: Y,
                                                smallAttachments: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, l.jsx)("div", { className: eH.yF }),
                            (0, l.jsxs)("div", {
                                className: eH.qr,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: eH.j4,
                                        children: [
                                            (0, l.jsx)(eq, { channel: f }),
                                            (0, l.jsx)(eP.A, {
                                                type: U.oU.CREATE_ANNOUNCEMENT_POST,
                                                disabled: eM,
                                                channel: f,
                                                handleSubmit: e8,
                                                isEmpty: 0 === r.trim().length,
                                                showAllButtons: !0,
                                                expressionButtonsHidden: !1,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: eH.j4,
                                        children: (0, l.jsx)("div", {
                                            ref: tE,
                                            className: eH.Qo,
                                            onMouseEnter: ty,
                                            onMouseLeave: tv,
                                            children: (0, l.jsx)(m.Y, {
                                                targetElementRef: tE,
                                                renderPopout: () =>
                                                    (0, l.jsx)(eW, { channelId: f.id, canCreateThread: e1 }),
                                                shouldShow: tS,
                                                autoInvert: !0,
                                                nudgeAlignIntoViewport: !0,
                                                position: "top",
                                                align: "right",
                                                children: (e) =>
                                                    (0, l.jsx)(z.$, {
                                                        ...e,
                                                        onClick: () => {
                                                            e7(r);
                                                        },
                                                        disabled: 0 === r.length && 0 === J.length,
                                                        size: "sm",
                                                        "aria-label": eB.intl.string(eB.t.TXNS7S),
                                                        innerClassName: eH.jo,
                                                        text: (0, l.jsxs)("div", {
                                                            className: eH.f9,
                                                            children: [
                                                                (0, l.jsx)(W.E, {
                                                                    variant: "text-sm/semibold",
                                                                    color: "text-overlay-light",
                                                                    children: eB.intl.string(eB.t.TXNS7S),
                                                                }),
                                                                (0, l.jsxs)("div", {
                                                                    className: eH.pj,
                                                                    children: [
                                                                        (0, l.jsx)($.SendMessageIcon, {
                                                                            size: "xs",
                                                                            color: "white",
                                                                        }),
                                                                        e1 && ec
                                                                            ? (0, l.jsx)(q.y, {
                                                                                  size: "xxs",
                                                                                  color: "white",
                                                                                  className: eH.Q5,
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
                                targetRef: eh,
                                ref: e5,
                                channel: f,
                                canMentionRoles: T,
                                canMentionChannels: M,
                                useNewSlashCommands: eG,
                                canOnlyUseTextCommands: !1,
                                canSendStickers: !0,
                                textValue: r,
                                focused: x,
                                expressionPickerView: tr,
                                type: C,
                                editorRef: eS,
                                onSendMessage: e7,
                                onSendSticker: () => {},
                                onVisibilityChange: td,
                                editorHeight: tt,
                                setValue: (e, t) => E?.(null, e, t),
                                position: G,
                            }),
                        ],
                    }),
                    to
                        ? null
                        : (0, l.jsx)(ed.A, {
                              positionTargetRef: eh,
                              type: C,
                              onSelectGIF: th,
                              onSelectEmoji: tu,
                              onSelectSticker: tm,
                              channel: f,
                              closeOnModalOuterClick: B,
                              parentModalKey: H,
                              position: "top",
                              align: "right",
                              positionLayerClassName: eK.BD,
                          }),
                ],
            }),
        });
    }),
);
function eW(e) {
    let { channelId: t, canCreateThread: n } = e,
        i = ea.useField("channelDrafts")[t],
        s = i?.createThread ?? !0,
        a = i?.publish ?? !0;
    return (0, l.jsxs)(Z.W, {
        "data-menu-migrated": !0,
        "aria-label": eB.intl.string(eB.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: ew.tEg,
        onSelect: ew.tEg,
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
              className: eH.Lb,
              "aria-hidden": !0,
              children: [
                  (0, l.jsx)("img", { src: s, alt: eB.intl.string(eB.t["2ePvR8"]), className: eH.c8 }),
                  r
                      ? (0, l.jsx)(ec.Ay, {
                            className: eH.jM,
                            children: (0, l.jsx)(eG.A, {
                                tooltip: eB.intl.string(eB.t.VjC21x),
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
        "aria-label": eB.intl.string(eB.t["/IBYAq"]),
        className: eH.g$,
        size: "icon",
        color: "transparent",
        look: "blank",
        onChange: function (e) {
            ((0, ej.R)(e.currentTarget.files, t, eC.C.ChannelMessage, { requireConfirm: !0, origin: "file_picker" }),
                (e.currentTarget.value = null));
        },
        children: (0, l.jsx)(X.H, {
            size: "custom",
            width: 20,
            height: 20,
            color: H.A.colors.INTERACTIVE_TEXT_DEFAULT,
        }),
    });
}
function eZ(e) {
    let { channel: t, onImageUploaded: n, onFocus: s } = e,
        a = i.useRef(null);
    async function r(e, l) {
        let i = await (0, eS.bX)(e, l.name, l.type),
            s = (0, B.A)(),
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
        className: eH.qN,
        children: (0, l.jsx)(Q.m, {
            asContainer: !0,
            text: eB.intl.string(eB.t["/IBYAq"]),
            position: "top",
            children: (0, l.jsxs)(ee.D, {
                className: eH.qN,
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
                        color: o ? H.A.colors.INTERACTIVE_TEXT_ACTIVE : H.A.colors.INTERACTIVE_TEXT_DEFAULT,
                    }),
                ],
            }),
        }),
    });
}
var eJ = n(664929),
    eY = n(742287);
let eX = i.memo(function (e) {
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
            bannerHeader: eB.intl.format(eB.t.GgMwjk, { guildName: t?.name ?? "" }),
            bannerSubtext: eB.intl.string(eB.t.ONjwD5),
            textStyles: ts.cI,
            headerStyles: ts.U_,
            children: (0, l.jsx)(z.$, {
                variant: "primary",
                size: "sm",
                text: eB.intl.string(eB.t.Viksoo),
                onClick: () => n(),
            }),
        }),
    });
}
function tr(e) {
    let { guild: t } = e,
        { analyticsLocations: n } = (0, ei.Ay)(el.A.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [i, s] = (0, e7.j8)({ guildId: t?.id ?? ew.dJq, analyticsLocations: n }),
        a = s ? eB.intl.string(eB.t["9ph2v7"]) : eB.intl.string(eB.t.ldh9Cg),
        r = s ? eB.intl.string(eB.t["/PGQf0"]) : eB.intl.string(eB.t.WikgZ1);
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(e6, {
            bannerIcon: (0, l.jsx)(e8._, { size: "lg", color: "currentColor", className: ts.q3 }),
            bannerHeader: eB.intl.format(eB.t.kcYdTq, { guildName: t?.name ?? "" }),
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
var tc = n(554146),
    td = n(131607),
    tu = n(153488),
    th = n(776096),
    tm = n(498642),
    tg = n(71393),
    tp = n(232835),
    tA = n(576705),
    tf = n(927813),
    tC = n(935208),
    tx = n(342220);
let tE = 90 * tf.A.Millis.DAY,
    tS = 14 * tf.A.Millis.DAY;
var tI = n(49999),
    tj = n(316031),
    ty = n(870136),
    tv = n(60270),
    t_ = n(576470),
    tb = n(496431),
    tN = n(592713),
    tT = n(264388),
    tM = n(297264),
    tR = n(542290);
function tD(e) {
    let { onClose: t, guildName: n } = e;
    return (0, l.jsxs)("div", {
        className: tR.kL,
        children: [
            (0, l.jsx)("div", {
                className: tR.zc,
                children: (0, l.jsx)(tv.g, {
                    size: "custom",
                    color: "currentColor",
                    className: tR.Kk,
                    width: 20,
                    height: 20,
                }),
            }),
            (0, l.jsxs)("div", {
                className: tR.wx,
                children: [
                    (0, l.jsx)(tM.D, {
                        variant: "heading-md/semibold",
                        className: tR.TK,
                        children: eB.intl.string(eB.t.LIIyeE),
                    }),
                    (0, l.jsx)(W.E, {
                        variant: "text-sm/normal",
                        children: eB.intl.format(eB.t["4/6vQh"], { guildName: n }),
                    }),
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tR.x6,
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
var tL = n(200700),
    tk = n(481161);
function tP(e) {
    let { guild: t, disabledUntil: n } = e,
        [s, a] = (0, tT.n)(t.id);
    return (
        !(function (e) {
            let { communicationDisabledUntil: t, userId: n, guildId: l } = e ?? {},
                s = (0, tb.A)(null != t ? Date.parse(t) : Date.now()).seconds,
                a = (0, i.useRef)(null);
            (0, i.useEffect)(
                () =>
                    null == e || null == l || null == n
                        ? void clearTimeout(a.current)
                        : (s <= 0 &&
                              null == a.current &&
                              (a.current = setTimeout(() => {
                                  tN.A.clearGuildMemberTimeout(l, n);
                              }, 1e3)),
                          () => {
                              null != a.current && (clearTimeout(a.current), (a.current = null));
                          }),
                [l, n, s, t, e],
            );
        })((0, h.bG)([tt.Ay, te.default], () => tt.Ay.getMember(t.id, te.default.getId()), [t.id])),
        (0, l.jsxs)("div", {
            children: [
                s ? (0, l.jsx)(tD, { onClose: () => a(t.id), guildName: t.name }) : null,
                (0, l.jsx)(e6, {
                    bannerIcon: (0, l.jsx)(tv.g, { size: "md", color: "currentColor", className: tk.q3 }),
                    bannerHeader: eB.intl.string(eB.t["9UoK6Y"]),
                    bannerSubtext: eB.intl.format(eB.t["4ZwD5G"], { link: tL.MO }),
                    textStyles: tk.cI,
                    headerStyles: tk.U_,
                    children: (0, l.jsx)(W.E, {
                        variant: "text-sm/semibold",
                        children: (0, l.jsx)(t_.A, { deadline: new Date(n), showUnits: !0, stopAtOneSec: !0 }),
                    }),
                }),
            ],
        })
    );
}
var tO = n(429933),
    tG = n(868132),
    tU = n(513609),
    tw = n(176781),
    tF = n(268378),
    tB = n(273692);
function tH() {
    return (0, l.jsx)(e6, {
        textStyles: tB.U,
        bannerIcon: (0, l.jsx)(tw.x, { size: "lg" }),
        bannerHeader: eB.intl.string(tF.default.unC18Z),
        bannerSubtext: eB.intl.string(tF.default["7mR8Bv"]),
    });
}
var tK = n(823099),
    tV = n(959698),
    tz = n(521427),
    tW = n(751258),
    t$ = n(451909),
    tq = n(926262),
    tZ = n(891496),
    tJ = n(537174),
    tY = n(973196),
    tX = n(671210),
    tQ = n(308718);
function t0() {
    return (0, l.jsx)(e6, {
        containerStyles: tQ.k,
        bannerHeader: eB.intl.string(tX.default.e7ydX0),
        bannerSubtext: eB.intl.string(tX.default.POfugg),
    });
}
var t1 = n(512599),
    t2 = n(3137),
    t3 = n(559908);
n(142703);
var t4 = n(765671),
    t7 = n(741961),
    t8 = n(459793),
    t5 = n(103640);
function t6(e, t) {
    return e === t || (e?.channelId === t?.channelId && e?.value === t?.value && e?.multiplier === t?.multiplier);
}
var t9 = n(93219);
let ne = i.memo(function (e) {
        let { channelId: t, width: n } = e,
            s = (0, h.bG)([v.Ay], () => v.Ay.useReducedMotion),
            a = (0, h.bG)([t3.Ay], () => t3.Ay.getMostRecentMessageCombo(t), [t]),
            [r, o] = i.useState(!1);
        i.useEffect(() => {
            if (a?.displayed) return;
            (o(!1),
                setImmediate(() => {
                    o((null != a ? (0, t5.RL)(a.combo) : 0) > 0);
                }));
            let e = setTimeout(() => {
                (o(!1), null != a && (0, t1.Nu)(a));
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
                className: t9.Gi,
                style: d,
                children: (0, l.jsx)(W.E, { className: t9.fX, variant: "text-sm/bold", children: (0, t5.RL)(a.combo) }),
            })
        );
    }),
    nt = i.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: s, square: r, flair: o } = i.useMemo(() => (0, t5.HN)(n), [n]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(W.E, { className: t9.iR, variant: "text-sm/bold", children: t }),
                (0, l.jsxs)("div", {
                    className: t9._Z,
                    style: { color: s },
                    children: [
                        (0, l.jsx)(W.E, {
                            className: t9.On,
                            style: { color: s },
                            variant: "text-sm/bold",
                            children: eB.intl.format(eB.t["6bgVlq"], { multiplier: n }),
                        }),
                        r &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", { className: a()(t9.QA, t9.kb), style: { backgroundColor: s } }),
                                    (0, l.jsx)("div", { className: a()(t9.QA, t9.pG), style: { backgroundColor: s } }),
                                ],
                            }),
                        o &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", {
                                        className: a()(t9.ox, t9.kb),
                                        children: (0, l.jsx)(t8.A, { width: 24, height: 24 }),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: a()(t9.ox, t9.pG),
                                        children: (0, l.jsx)(t8.A, { width: 24, height: 24 }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, l.jsx)(W.E, {
                                className: t9.uN,
                                variant: "text-sm/bold",
                                children: eB.intl.string(eB.t.b5Cpof),
                            }),
                    ],
                }),
            ],
        });
    }),
    nn = i.memo(function (e) {
        let t,
            { channelId: n } = e,
            s = (0, h.bG)([te.default], () => te.default.getId()),
            a = (0, h.bG)([t7.A], () => t7.A.isTyping(n, s), [n, s]),
            r = (0, h.bG)([t2.A], () => t2.A.isEnabled()),
            o = (0, h.bG)([t3.Ay], () => t3.Ay.isComboing(s, n), [n, s]),
            { ref: c, width: d = 0 } = (0, t4.Ay)(),
            [u, m] = i.useState(!1),
            g =
                ((t = (0, h.bG)([t2.A], () => !!t2.A.isEnabled() && t2.A.combosEnabled)),
                (0, h.bG)(
                    [t3.Ay, te.default],
                    () => (t ? t3.Ay.getUserCombo(te.default.getId(), n) : void 0),
                    [n, t],
                    t6,
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
                (0, l.jsx)(ne, { channelId: n, width: d }),
                (0, l.jsx)(F.animated.div, {
                    ref: c,
                    className: t9.p_,
                    style: A,
                    children: (0, l.jsx)(nt, { value: E, multiplier: x }),
                }),
            ],
        });
    });
var nl = n(208343),
    ni = n(31408),
    ns = n(810685),
    na = n(806621);
let nr = function (e, t) {
    let n = (0, na.r)(t),
        l = (0, h.bG)([tp.A], () => tp.A.getMessages(t.id).length > 0, [t]);
    return null != e && e.hasFlag(ew.nhx.QUARANTINED) && n && !l;
};
var no = n(831502);
let nc = function () {
    return (0, l.jsx)(e6, {
        bannerIcon: (0, l.jsx)(ns.M, { alt: "", width: 80, height: 40 }),
        bannerHeader: eB.intl.string(eB.t.EouHwv),
        bannerSubtext: eB.intl.format(eB.t.PThBel, { appealLink: no.q }),
    });
};
var nd = n(118517),
    nu = n(853145),
    nh = n(226698),
    nm = n(39470),
    ng = n(985632);
let np = function (e) {
    let { channelId: t } = e,
        n = i.useCallback(() => {
            nh.A.reopenModReport(t);
        }, [t]);
    return (0, l.jsx)(e6, {
        bannerHeader: (0, l.jsx)(W.E, {
            variant: "text-md/medium",
            color: "text-muted",
            children: eB.intl.string(nm.default["0eUUeF"]),
        }),
        headerStyles: ng.U,
        containerStyles: ng.c,
        children: (0, l.jsx)(z.$, {
            variant: "secondary",
            size: "sm",
            text: eB.intl.string(nm.default["6quCi9"]),
            onClick: n,
        }),
    });
};
var nA = n(631576),
    nf = n(728321),
    nC = n(761640),
    nx = n(580745),
    nE = n(994500),
    nS = n(309010),
    nI = n(287809),
    nj = n(174459),
    ny = n(147036),
    nv = n(234320),
    n_ = n(625494),
    nb = n(806150),
    nN = n(382287),
    nT = n(137577),
    nM = n(47167),
    nR = n(480870),
    nD = n(390756),
    nL = n(128783),
    nk = n(549400);
function nP() {
    return (0, l.jsxs)("div", {
        className: nk.kL,
        children: [
            (0, l.jsx)("div", { className: a()(nk.v9, nk.KJ) }),
            (0, l.jsx)("div", { className: a()(nk.v9, nk.rx) }),
        ],
    });
}
var nO = n(578434),
    nG = n(80683),
    nU = n(739187),
    nw = n(857250),
    nF = n(97483),
    nB = n(336590),
    nH = n(92650),
    nK = n(378570),
    nV = n(138298),
    nz = n(260771);
function nW(e) {
    let { channel: t } = e,
        n = (0, nB.k)(),
        s = (0, h.bG)([nI.default], () => nI.default.getUser(t.getRecipientId())),
        a = i.useCallback(() => {
            (0, nU.P)((0, nw.o)(eB.intl.string(eB.t["EDYbS+"]), nF.Ck.FAILURE));
        }, []),
        r = i.useCallback(() => {
            nV.A.closeChannelSidebar(nC.fe);
        }, []),
        o = i.useCallback(() => {
            (nV.A.closeChannelSidebar(nC.fe), n && (0, nK.iN)(t.id));
        }, [t.id, n]),
        {
            acceptMessageRequest: c,
            rejectMessageRequest: d,
            isAcceptLoading: u,
            isRejectLoading: m,
            isUserProfileLoading: g,
            isOptimisticAccepted: p,
            isOptimisticRejected: A,
        } = (0, nH.t)({ user: s, onAcceptSuccess: o, onRejectSuccess: r, onError: a }),
        f = u || m || g || p || A;
    return (0, l.jsxs)("div", {
        className: nz.kL,
        children: [
            (0, l.jsx)(W.E, {
                className: nz.VA,
                variant: "text-md/medium",
                color: "text-muted",
                children: eB.intl.string(eB.t.YQ0uUE),
            }),
            (0, l.jsxs)("div", {
                className: nz.o1,
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
var n$ = n(381941),
    nq = n(650583),
    nZ = n(999900);
function nJ(e) {
    e.preventDefault();
}
let nY = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function nX(e) {
    let { isSidebar: t, ...n } = e;
    return t ? (0, l.jsx)("section", { ...n, role: "complementary" }) : (0, l.jsx)("main", { ...n });
}
let nQ = i.forwardRef((e, t) => (0, l.jsx)(n0, { ...e, ref: t }));
nQ.displayName = "ChannelTextAreaForm";
class n0 extends i.PureComponent {
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
        t.textValue.length < ew.uvi && l.length >= ew.uvi && nj.default.track(ew.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {});
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
            case nq.dh.DELETE:
            case nq.dh.BACKSPACE:
                return void this.handleIncrementCombo("", 1);
            case nq.dh.ARROW_UP:
                if (i || s) return;
                if ((e.preventDefault(), t))
                    eE.A.getUploadCount(l.id, eC.C.ChannelMessage) > 0
                        ? n_._.dispatchToLastSubscribed(ew.jej.FOCUS_ATTACHMENT_AREA)
                        : n_._.dispatchToLastSubscribed(ew.jej.FOCUS_MESSAGES, { atEnd: !0 });
                else {
                    let { channel: e } = this.props,
                        t = tp.A.getLastChatCommandMessage(e.id),
                        n = tp.A.getLastEditableMessage(e.id);
                    null != t && null != n
                        ? tC.default.compare(n.id, t.id) > 0
                            ? this.handleEditLastMessage(n)
                            : this.handleRecallLastCommand(t)
                        : null != t
                          ? this.handleRecallLastCommand(t)
                          : null != n && this.handleEditLastMessage(n);
                }
                return;
            case nq.dh.ESCAPE:
                if (i || e.target !== e.currentTarget) return;
                if ((e.preventDefault(), t)) return void (0, y.Bm)();
                if (eE.A.getUploadCount(l.id, eC.C.ChannelMessage) > 0)
                    return void S.A.clearAll(l.id, eC.C.ChannelMessage);
        }
        n?.(e, s);
    };
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        (x.A.startEditMessageRecord(t.id, e), _.Ay.trackWithMetadata(ew.HAw.MESSAGE_EDIT_UP_ARROW));
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
                          type: k.Hf.APPLICATION,
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
                location: k.Oh.RECALL,
                initialValues: (0, R.getInitialValuesFromInteractionOptions)(i, l ?? []),
                commandOrigin: k.iw.CHAT,
            });
        }
    }
    handleIncrementCombo = (e, t) => {
        if (!this.props.poggermodeEnabled) return;
        let n = this.props.channel.id,
            l = te.default.getId(),
            i = t3.Ay.getUserCombo(l, n),
            s = (i?.value ?? 0) + 1;
        (0, t1.oG)({ channelId: n, userId: l, value: null != e ? e.length : s, multiplier: t });
    };
    handleTextareaChange = (e, t, n) => {
        let {
            keyboardModeEnabled: l,
            chatInputType: i,
            channel: { id: s },
        } = this.props;
        if (i === U.oU.NORMAL && s !== nS.Ay.getChannelId()) return;
        C.A.changeDraft(s, t, eC.C.ChannelMessage);
        let a = "" !== t && n !== this.state.richValue,
            r = a && !nY.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
        ((this.isFirstChange = !1),
            r && this.state.textValue.length < t.length && this.handleIncrementCombo(),
            r ? E.A.startTyping(s) : "" === t && E.A.stopTyping(s),
            a && l && (0, y.Bm)(),
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
            if (i.inputType === k.y$.BUILT_IN_INTEGRATION)
                return (
                    n_._.dispatch(ew.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                    Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                );
            let e = L.A.getCommandOrigin(h.id);
            if (null == e || e === k.iw.CHAT) {
                let { isAuthorized: e } = await (0, G.q)({
                    applicationId: i.applicationId,
                    channel: h,
                    commandIntegrationTypes: i.integration_types,
                });
                if (!e) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
            } else if (e === k.iw.APPLICATION_LAUNCHER || e === k.iw.IMAGE_RECS_MENU || e === k.iw.IMAGE_RECS_SUBMENU) {
                let { location: t, sectionName: n } = (0, nD.bV)(i) ?? {},
                    l = e === k.iw.APPLICATION_LAUNCHER ? N.A.lastShownEntrypoint() : T.s4.TEXT,
                    { isAuthorized: s } = await (0, G.q)({
                        applicationId: i.applicationId,
                        channel: h,
                        commandIntegrationTypes: i.integration_types,
                        appLauncherContext: { location: t, sectionName: n, entrypoint: l },
                    });
                if (!s) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
                (0, nD.My)(i);
            }
            let n = await (0, O.A)({ command: i, optionValues: s ?? {}, context: { guild: d, channel: h } });
            if (i.inputType !== k.y$.BUILT_IN_TEXT) return Promise.resolve({ shouldClear: !0, shouldRefocus: !0 });
            null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (p = !0 === n.tts));
        }
        return (0, nb.i)({
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
                        n_._.dispatch(ew.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                        n_._.dispatch(ew.jej.EMPHASIZE_SLOWMODE_COOLDOWN),
                        { shouldClear: !1, shouldRefocus: !0 }
                    );
                else return { shouldClear: !1, shouldRefocus: !1 };
            let f = (0, tW.S)(t, { channel: h, isEdit: !1 });
            null != f && (null != f.content && (t = f.content), null != f.tts && (p = f.tts));
            let E = t$.Ay.parse(h, t);
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
                location: n$.Hx.CHAT_INPUT,
            };
            if (
                (null != c && (I.announcementSendOptions = c),
                null != r && (I.gifMetadata = r),
                null != o && (I.flags = (0, u.UI)(I.flags ?? 0, ew.pr7.IS_COMPONENTS_V2)),
                a)
            )
                return (x.A.sendMessage(h.id, E, void 0, I), (0, nd.Jx)(h.id), { shouldClear: !1, shouldRefocus: !0 });
            function j() {
                ("" !== t &&
                    "" === eC.A.getDraft(h.id, eC.C.ChannelMessage) &&
                    C.A.saveDraft(h.id, t, eC.C.ChannelMessage),
                    null != n &&
                        n.length > 0 &&
                        0 === eE.A.getUploadCount(h.id, eC.C.ChannelMessage) &&
                        S.A.setUploads({ channelId: h.id, uploads: n, draftType: eC.C.ChannelMessage }));
            }
            if (null != n && n.length > 0) {
                let e = (0, nN.LJ)(n);
                if ((0, nN.fJ)({ files: e, guildId: d?.id }))
                    return ((0, ej.V)(h, e), { shouldClear: !1, shouldRefocus: !1 });
                ((I.eagerDispatch = !1),
                    (I.attachmentsToUpload = n),
                    (I.onAttachmentUploadError = (e, t, n) => {
                        (0, tK.k)({ file: e, guildId: h.getGuildId(), analyticsLocations: [], code: t, reason: n }) &&
                            j();
                    }),
                    S.A.clearAll(h.id, eC.C.ChannelMessage));
            }
            return (
                x.A.sendMessage(h.id, E, void 0, I).catch((e) => {
                    throw ((null != I.scheduledTimestamp || !1 === I.eagerDispatch) && j(), e);
                }),
                this.setState((0, w.N3)()),
                (0, nd.Jx)(h.id),
                (0, nA.x5)(h.id, g.drafts.type),
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
                          className: nZ.gM,
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
                          promptToUpload: ej.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, l.jsx)(eO.Ay, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: nZ.gM,
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
                          promptToUpload: ej.R,
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
                    (0, l.jsx)(tq.A, { onClose: t, ...C })
                );
            },
            children: () =>
                p ? (0, l.jsx)(g.b, { isShaking: h > 0, intensity: h, className: nZ.Xn, children: x }) : x,
        });
    }
}
class n1 extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: l } = t;
        return n.id !== l
            ? { textAreaFocused: null != n && !c.Fr && tA.A.can(ew.xBc.SEND_MESSAGES, n), currentChannelId: n.id }
            : null;
    }
    containerDomRef = i.createRef();
    refToChannelTextAreaFormComponent = i.createRef();
    inputFormRef = i.createRef();
    state = { textAreaFocused: !1, textAreaHighlighted: !1, currentChannelId: this.props.channel.id };
    dispatchGroupRef = i.createRef();
    componentDidMount() {
        n_._.subscribe(ew.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        n_._.unsubscribe(ew.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
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
                case nq.dh.ARROW_LEFT:
                    n === U.oU.SIDEBAR &&
                        n_._.dispatch(ew.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: nS.Ay.getChannelId() });
                    return;
                case nq.dh.ARROW_RIGHT:
                    n === U.oU.NORMAL &&
                        n_._.dispatch(ew.jej.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: nC.Ay.getCurrentSidebarChannelId(l.id),
                        });
            }
    };
    handleOpenExpressionPicker = (e) => {
        let { activeView: t } = e;
        (0, e3.bf)(t, this.props.chatInputType, this.props.channel.id);
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
            ? (0, l.jsx)(tH, {})
            : this.props.restrictedPreview && t.type === ew.rbe.DM
              ? (0, l.jsx)(nW, { channel: t })
              : t.type === ew.rbe.DM && n
                ? (0, l.jsx)(nc, {})
                : t.isModeratorReportChannel() && t.isArchivedThread()
                  ? (0, l.jsx)(np, { channelId: t.id })
                  : null != s && (0, tj.n)(s) && null != i && !tA.A.can(ew.xBc.ADMINISTRATOR, i)
                    ? (0, l.jsx)(tP, { guild: i, disabledUntil: s })
                    : a
                      ? (0, l.jsx)(to, { guild: i })
                      : this.props.isOverlayTextEntryDisabled
                        ? (0, l.jsx)(t0, {})
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
                showLinkedLobbyApplicationLoadingIndicator: y,
                announcementComposerEnabled: v,
            } = this.props,
            { textAreaFocused: _, textAreaHighlighted: b } = this.state,
            N = o === U.oU.SIDEBAR;
        e =
            N && t.type === ew.rbe.GUILD_VOICE
                ? eB.t.pnnyFZ
                : N && t.type === ew.rbe.GUILD_STAGE_VOICE
                  ? eB.t.YInSkq
                  : d.k.THREADS.has(t.type)
                    ? eB.t["OkzL+Q"]
                    : eB.t.UbNmGc;
        let T = (0, l.jsx)("div", { className: nZ.li, children: (0, l.jsx)(nP, {}) }),
            M = (0, l.jsx)("div", {
                className: nZ.li,
                children: (0, l.jsx)(nf.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    disabled: null == n,
                    children: (0, l.jsx)(nQ, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: _,
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
                        announcementComposerEnabled: v,
                    }),
                }),
            }),
            R = y ? T : M,
            D = (0, nM.m1)(t, nI.default, nE.A);
        return (0, l.jsx)(
            j.A,
            {
                page: (0, ny.DJ)(this.props.channel),
                children: (0, l.jsx)(tU.di, {
                    children: (0, l.jsx)(tG.X, {
                        children: (0, l.jsxs)(nv.Ah, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, l.jsx)(nv.EG, { event: ew.jej.TEXTAREA_FOCUS, handler: this.handleInputFocus }),
                                (0, l.jsx)(nv.EG, { event: ew.jej.TEXTAREA_BLUR, handler: this.handleInputBlur }),
                                (0, l.jsx)(nv.EG, {
                                    event: ew.jej.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, l.jsx)(nv.EG, {
                                    event: ew.jej.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, l.jsxs)(nX, {
                                    isSidebar: N,
                                    className: nZ.q2,
                                    "aria-label": eB.intl.formatToPlainString(e, { channelName: D }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: this.props.guildOfficialMessageStyle,
                                    children: [
                                        (0, l.jsx)(nL.A, { channel: t, guild: n, narrow: N }),
                                        (0, l.jsxs)(p.F, {
                                            component: (0, l.jsx)(A.A, {
                                                children: (0, l.jsx)(p.H, {
                                                    children: eB.intl.format(eB.t.eTzKkx, { channelName: D }),
                                                }),
                                            }),
                                            children: [
                                                (0, l.jsxs)(e2.h1, {
                                                    children: [
                                                        (0, l.jsx)(tZ.A, {
                                                            channel: t,
                                                            forceCozy: x,
                                                            filterAfterTimestamp: m,
                                                            showingQuarantineBanner: h,
                                                            typingGradient: I,
                                                            hideSummaries: o === U.oU.OVERLAY,
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
                                                                  onSubmit: nJ,
                                                                  className: a()(nZ.Zd, { [nZ.Mf]: !y }),
                                                                  children: [
                                                                      C && (0, l.jsx)(nn, { channelId: t.id }),
                                                                      t.isPrivate()
                                                                          ? (0, l.jsx)(nO.A, {
                                                                                channel: t,
                                                                                children: R,
                                                                            })
                                                                          : (0, l.jsx)(nG.A, {
                                                                                channel: t,
                                                                                children: R,
                                                                            }),
                                                                      (0, l.jsx)(n2, { channel: t }),
                                                                  ],
                                                              })),
                                                    ],
                                                }),
                                                (0, l.jsx)(tU.lr, {}),
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
function n2(e) {
    let { channel: t } = e,
        { isFocused: n } = (0, e2.D7)();
    return n ? null : (0, l.jsx)(I.Ay, { channel: t, isInTextChannel: !0 });
}
let n3 = i.memo(function (e) {
    var t, n;
    let s,
        a,
        { channel: r, guild: o, chatInputType: c, filterAfterTimestamp: d } = e,
        { placeholder: u, accessibilityLabel: m } = (0, nR.A)({ channel: r }),
        g = (0, tY.A)(),
        p = nr(nI.default.getCurrentUser(), r),
        [A] = (0, ty.c)(o?.id),
        C = (0, e7.uZ)(o?.id),
        E = (0, h.bG)([nI.default], () => nI.default.getCurrentUser()),
        S = (0, h.bG)([tt.Ay], () => null != E && (tt.Ay.getMember(o?.id ?? ew.dJq, E?.id)?.isPending ?? !1)),
        j = (0, h.bG)([t2.A], () => t2.A.isEnabled()),
        y =
            ((t = r.id),
            (s = (0, nl.A)(ni.uD.CHAT_INPUT)),
            (a = (0, h.bG)([t2.A], () => t2.A.isEnabled({ shakeLocation: ni.uD.CHAT_INPUT }))),
            (0, h.bG)([t7.A, t3.Ay, te.default], () =>
                a && t7.A.isTyping(t, te.default.getId())
                    ? t3.Ay.getUserComboShakeIntensity(te.default.getId(), t, s)
                    : 0,
            )),
        _ = (0, tO.A)(r.id),
        b = ((n = r.id), (0, h.bG)([eC.A], () => eC.A.getScheduledMessage(n))),
        N = (0, h.bG)([t3.Ay, te.default], () => t3.Ay.getUserCombo(te.default.getId(), r.id)),
        T = (0, I.rj)(r),
        M = (0, I.aW)(r),
        R = (0, e4.L)(r.id),
        D = T.length > 0 || r.rateLimitPerUser > 0 || null != N || null != M || R,
        { showLinkedLobbyApplicationLoadingIndicator: L } = (0, nT.A)(r.linkedLobby),
        k = e1.useConfig({ location: "ChannelChat" }).announcementComposer,
        P = (0, tJ.A)((0, tz.GP)(o, "ChannelChat") ? (o?.officialMessageColor ?? n$.aj) : null);
    !(function (e) {
        let [t, n] = (function (e) {
                let t = (0, h.bG)([tp.A], () => tp.A.isReady(e.id), [e.id]),
                    n = [],
                    l = (0, h.bG)([tg.A], () => tg.A.getGuild(e.guild_id)),
                    s = (function (e) {
                        let t = (0, h.bG)([tg.A], () => tg.A.getGuild(e.guild_id)),
                            n = (0, h.bG)([tm.A], () => tm.A.getMemberCount(t?.id) ?? 0),
                            l = (0, h.bG)([tp.A], () => tp.A.getLastMessage(e.id)),
                            s = (0, h.bG)([tA.A], () => null != t && tA.A.can(ew.xBc.ADMINISTRATOR, t)),
                            a = (0, h.bG)([th.A], () => th.A.getGuildAffinity(e.guild_id)?.score),
                            r = (0, h.bG)([tu.A], () => tu.A.hasConsented(ew.YAq.PERSONALIZATION)),
                            o = (0, tx.A)(),
                            c = i.useMemo(
                                () =>
                                    !(
                                        !r ||
                                        null == a ||
                                        a <= 17.06 ||
                                        e.type !== ew.rbe.GUILD_TEXT ||
                                        null == t ||
                                        tC.default.age(t.id) < tE ||
                                        null == t.premiumSubscriberCount ||
                                        0 !== t.premiumSubscriberCount ||
                                        n < 10 ||
                                        l?.id == null ||
                                        tC.default.age(l.id) > tS
                                    ) &&
                                    (s || o),
                                [r, e.type, t, n, a, l?.id, s, o],
                            ),
                            [d, u] = i.useState(() => new Set());
                        c && !d.has(e.id) && u(new Set(d).add(e.id));
                        let m = c || d.has(e.id),
                            [g] = (0, td.Wl)(m ? tc.M.FIRST_BOOSTER_UPSELL_OVERSEER : null, {
                                cooldownDurationMs: 0,
                                numTimesToRecur: 3,
                            });
                        return g === tc.M.FIRST_BOOSTER_UPSELL_OVERSEER;
                    })(e);
                t && s && n.push(tc.M.FIRST_BOOSTER_UPSELL);
                let [a, r] = (0, td.ww)(n, l?.id ?? ew.eGj);
                return [a, r];
            })(e),
            l = i.useRef(null);
        i.useEffect(() => {
            null == t ||
                ((null == l.current || l.current.visibleContent !== t || l.current.channelId !== e.id) &&
                    (t === tc.M.FIRST_BOOSTER_UPSELL &&
                        x.A.sendGuildBoostUpsellSystemMessage(e.id, { guildBoostUpsellType: en.Mk.FIRST_BOOSTER }),
                    (l.current = { visibleContent: t, channelId: e.id }),
                    n(tI.i.AUTO_DISMISS)));
        }, [t, e.id, n]);
    })(r);
    let O = (0, tV.U)();
    return (0, l.jsx)(n1, {
        channel: r,
        restrictedPreview: O,
        guildOfficialMessageStyle: P,
        isEditing: null != (0, h.bG)([nx.A], () => nx.A.getEditingMessageId(r.id)),
        hasModalOpen: (0, f.useModalsStore)(f.hasAnyModalOpenSelector),
        guild: o,
        keyboardModeEnabled: (0, h.bG)([v.Ay], () => v.Ay.keyboardModeEnabled),
        pendingReply: (0, h.bG)([nu.A], () => nu.A.getPendingReply(r.id)),
        chatInputType: c,
        isOverlayTextEntryDisabled: g,
        placeholder: u,
        accessibilityLabel: m,
        filterAfterTimestamp: d,
        showQuarantinedUserBanner: p,
        communicationDisabledUntil: A,
        shakeIntensity: y,
        poggermodeEnabled: j,
        isSelectedResourceChannel: _,
        showAutomodUserProfileChatBlocker: C && !S,
        scheduledMessageDraft: b,
        messagesTypingGradient: D,
        showLinkedLobbyApplicationLoadingIndicator: L,
        announcementComposerEnabled: k,
    });
});
