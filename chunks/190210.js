n.d(t, { Z: () => ei }),
    n(704826),
    n(35282),
    n(539854),
    n(388685),
    n(781311),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(509442),
    u = n(772848),
    d = n(442837),
    p = n(692547),
    f = n(28664),
    h = n(481060),
    m = n(166459),
    g = n(911969),
    b = n(476326),
    y = n(607070),
    C = n(100527),
    _ = n(906732),
    v = n(998698),
    x = n(326133),
    O = n(507366),
    E = n(570220),
    j = n(951394),
    S = n(805680),
    P = n(374794),
    I = n(884858),
    Z = n(813197),
    T = n(849522),
    N = n(665906),
    A = n(695346),
    w = n(703558),
    M = n(398327),
    R = n(117530),
    D = n(956664),
    L = n(358085),
    k = n(127654),
    U = n(746877),
    F = n(541716),
    V = n(667829),
    B = n(258696),
    H = n(893718),
    G = n(273031),
    W = n(303628),
    z = n(981631),
    q = n(761652),
    Y = n(224837),
    K = n(200299),
    X = n(388032),
    J = n(593514),
    Q = n(564355);
function $(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function ee(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function et(e, t) {
    let n = e.startsWith("attachment://"),
        i = e;
    if (n) {
        let n = e.slice(13);
        i = t ? "attachment://SPOILER_".concat(en(n)) : e;
    }
    return {
        media: {
            url: i,
            proxyUrl: i,
            loadingState: g.f.UNKNOWN,
            flags: 0,
        },
        description: e,
        spoiler: t,
    };
}
function en(e) {
    return null == e ? "unnamed_file" : e.replace(/\s/g, "_");
}
let ei = r.memo(
    r.forwardRef(function (e, t) {
        var n, l, o, u;
        let {
                textValue: p,
                richValue: f,
                className: b,
                id: j,
                required: P,
                disabled: I,
                accessibilityLabel: Z,
                channel: D,
                type: k,
                focused: G,
                onChange: K,
                onResize: ei,
                onBlur: es,
                onFocus: ec,
                onKeyDown: eu,
                onSubmit: ed,
                promptToUpload: ep,
                canMentionRoles: ef,
                canMentionChannels: eh,
                maxCharacterCount: em,
                placeholder: eg,
                "aria-describedby": eb,
                "aria-labelledby": ey,
                setEditorRef: eC,
                autoCompletePosition: e_,
                disableThemedBackground: ev = !1,
                emojiPickerCloseOnModalOuterClick: ex,
                parentModalKey: eO,
            } = e,
            eE = O.Z.useField("channelDrafts")[D.id],
            ej = null != (l = null == eE ? void 0 : eE.title) ? l : "",
            eS = null == eE ? void 0 : eE.heroFile,
            eP = null == (o = null == eE ? void 0 : eE.publish) || o,
            eI = null == (u = null == eE ? void 0 : eE.createThread) || u;
        s()(null != k, "chat input type must be set");
        let { analyticsLocations: eZ } = (0, _.ZP)(C.Z.CHANNEL_TEXT_AREA),
            eT = (0, H.qz)(t),
            eN = r.useRef(null),
            eA = r.useRef(null),
            ew = r.useRef(null),
            eM = r.useRef(null);
        null == eC || eC(eA.current);
        let { activeCommand: eR } = (0, d.cj)([v.Z], () => {
                var e, t;
                return {
                    activeCommand: (null == (e = k.commands) ? void 0 : e.enabled) ? v.Z.getActiveCommand(D.id) : null,
                    activeCommandSection: (null == (t = k.commands) ? void 0 : t.enabled)
                        ? v.Z.getActiveCommandSection(D.id)
                        : null,
                };
            }),
            {
                isLurking: eD,
                isPendingMember: eL,
                disabled: ek,
                canAttachFiles: eU,
                canEveryoneSendMessages: eF,
            } = (0, H.TE)(D, k, eR, I),
            eV = !A.dN.useSetting() && !(0, L.isAndroidWeb)() && null != window.ResizeObserver,
            eB = !eV || !(null == (n = k.commands) ? void 0 : n.enabled) || !G || p !== q.GI,
            eH = (0, T.Z)(),
            { fontSize: eG } = (0, d.cj)([y.Z], () => ({
                fontSize: y.Z.fontSize,
                isSubmitButtonEnabled: y.Z.isSubmitButtonEnabled,
            })),
            eW = (0, d.e7)([M.Z], () => M.Z.isEnabled()),
            ez = (0, N.NE)(D);
        (0, H.hJ)(k, ek);
        let { eventEmitter: eq, handleEditorSelectionChanged: eY } = (0, H.x2)(eA, p, f),
            eK = r.useCallback(
                (e) => {
                    let t = (e) => {
                            if (e.shouldClear) {
                                var t;
                                (0, O.c)(D.id, {
                                    title: "",
                                    heroFile: null,
                                }),
                                    null == (t = eA.current) || t.blur();
                            }
                            return e;
                        },
                        n = [],
                        i =
                            ej.length > 0
                                ? ej
                                : e.value.length > 0
                                  ? e.value.slice(0, 80)
                                  : X.intl.string(X.t["7Xm5QI"]);
                    if (null == eS)
                        return ed(
                            ee($({}, e), {
                                announcementSendOptions: {
                                    createThread: ez && eI,
                                    threadName: i,
                                    publish: eP,
                                },
                            }),
                        ).then(t);
                    n.push({
                        type: g.re.MEDIA_GALLERY,
                        items: [et("attachment://".concat(en(eS.name)), !1)],
                        id: "".concat(Y.Vm),
                    }),
                        e.value.length > 0 &&
                            n.push({
                                type: g.re.TEXT_DISPLAY,
                                content: e.value,
                                id: "".concat(Y.Kb),
                            });
                    let r = R.Z.getUploads(D.id, w.d.ChannelMessage),
                        l = r.filter((e) => (e.isImage || e.isVideo) && e.filename !== (null == eS ? void 0 : eS.name)),
                        a = r.filter((e) => !e.isImage && !e.isVideo && e.filename !== (null == eS ? void 0 : eS.name)),
                        o = l.map((e) => et("attachment://".concat(en(e.filename)), !1));
                    return (
                        o.length > 0 &&
                            n.push({
                                type: g.re.MEDIA_GALLERY,
                                items: o,
                                id: "".concat(Y.m2),
                            }),
                        a.forEach((e, t) => {
                            n.push({
                                type: g.re.FILE,
                                file: et("attachment://".concat(en(e.filename)), !1).media,
                                id: "".concat(Y.kn + t),
                                name: en(e.filename),
                                size: null,
                            });
                        }),
                        ed(
                            ee($({}, e), {
                                components: n,
                                announcementSendOptions: {
                                    createThread: ez && eI,
                                    threadName: i,
                                    publish: eP,
                                },
                            }),
                        ).then(t)
                    );
                },
                [ed, ej, eS, D.id, eI, eP, ez],
            ),
            { submit: eX, handleSubmit: eJ } = (0, H.bL)(eK, k, eA, eM, D.id),
            { autocompleteRef: eQ, handleMaybeShowAutocomplete: e$, handleHideAutocomplete: e0 } = (0, H.jx)(),
            e1 = r.useCallback(() => {
                var e;
                return null == eM || null == (e = eM.current) ? void 0 : e.hide();
            }, []),
            { editorHeight: e2, handleResize: e3 } = (0, H.oR)(ei),
            {
                handleTab: e8,
                handleEnter: e4,
                handleMoveSelection: e6,
            } = (function (e, t, n) {
                let i = r.useCallback(() => {
                    var i, r;
                    return (
                        !!(!n && (null == (i = t.current) ? void 0 : i.onTabOrEnter(!1))) ||
                        (null == (r = e.current) ? void 0 : r.onTabOrEnter(!1)) ||
                        !1
                    );
                }, [n]);
                return {
                    handleTab: i,
                    handleEnter: r.useCallback(() => {
                        var i, r;
                        return (
                            !!(!n && (null == (i = t.current) ? void 0 : i.onTabOrEnter(!0))) ||
                            (null == (r = e.current) ? void 0 : r.onTabOrEnter(!1)) ||
                            !1
                        );
                    }, [n]),
                    handleMoveSelection: r.useCallback(
                        (i) => {
                            var r, l;
                            return (
                                !!(!n && (null == (r = t.current) ? void 0 : r.onMoveSelection(i))) ||
                                (null == (l = e.current) ? void 0 : l.onMoveSelection(i)) ||
                                !1
                            );
                        },
                        [n],
                    ),
                };
            })(eQ, eN, eB),
            { expressionPickerView: e7, shouldHideExpressionPicker: e5, handleOuterClick: e9 } = (0, H.iV)(k, eA),
            te = (0, H.aT)(p),
            { currentAutocompleteType: tt, handleAutocompleteVisibilityChange: tn } = (0, H.vB)(),
            ti = (0, H.ae)(eA),
            tr = (0, H.Sg)(eX, k, eA),
            tl = (0, H.O1)({
                editorRef: eA,
                disabled: ek,
                textValue: p,
                channelId: D.id,
                chatInputType: k,
                submit: eK,
            });
        (0, U.S)(eq, D.guild_id, D.id);
        let [ta, to] = r.useState(!1),
            ts = G || ta || p.length > 0 || null != eS || ej.length > 0,
            { editorHeaderHeight: tc, paddingTop: tu } = (0, h.q_F)({
                editorHeaderHeight: 122 * !!ts,
                paddingTop: 16 * !!ts,
                config: {
                    tension: 120,
                    friction: 15,
                    clamp: !0,
                },
            }),
            td = r.useRef(null),
            [tp, tf] = r.useState(!1),
            th = r.useRef(!1),
            tm = r.useCallback(() => {
                th.current = !0;
                let e = setTimeout(() => {
                    th.current && tf(!0);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tg = r.useCallback(() => {
                th.current = !1;
                let e = setTimeout(() => {
                    th.current || tf(!1);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tb = r.useCallback(() => {
                var e;
                if (null == eS) return;
                let t =
                    null == (e = R.Z.getUploads(D.id, k.drafts.type).find((e) => e.filename === eS.name))
                        ? void 0
                        : e.id;
                null != t && m.Z.remove(D.id, t, w.d.ChannelMessage), (0, O.c)(D.id, { heroFile: null });
            }, [D.id, eS, k.drafts.type]);
        return (0, i.jsx)(E.f6, {
            value: eq,
            children: (0, i.jsxs)(_.Gt, {
                value: eZ,
                children: [
                    (0, i.jsxs)("div", {
                        ref: eT,
                        className: a()(b, Q.channelTextArea),
                        onMouseDown: e9,
                        children: [
                            (0, i.jsx)("div", {
                                ref: ew,
                                onScroll: e1,
                                className: a()(Q.announcementScrollableContainer, { [Q.themedBackground]: !ev }),
                                children: (0, i.jsxs)("div", {
                                    className: a()(Q.inner, J.inner),
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: J.body,
                                            children: [
                                                (0, i.jsxs)(c.animated.div, {
                                                    className: J.headerInput,
                                                    style: {
                                                        height: tc,
                                                        paddingTop: tu,
                                                    },
                                                    children: [
                                                        null != eS
                                                            ? (0, i.jsx)(el, {
                                                                  file: eS,
                                                                  onRemoveHeroImage: tb,
                                                              })
                                                            : null,
                                                        null != eS
                                                            ? null
                                                            : (0, i.jsx)(eo, {
                                                                  channel: D,
                                                                  onImageUploaded: (e) =>
                                                                      (0, O.c)(D.id, { heroFile: e }),
                                                                  onFocus: () => to(!0),
                                                              }),
                                                        (0, i.jsx)("input", {
                                                            onFocus: () => to(!0),
                                                            onBlur: () => to(!1),
                                                            maxLength: 140,
                                                            className: J.titleInput,
                                                            placeholder: X.intl.string(X.t.Z8fYjO),
                                                            value: ej,
                                                            onChange: (e) => (0, O.c)(D.id, { title: e.target.value }),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)("div", {
                                                    className: J.inputWrapper,
                                                    children: (0, i.jsx)(h.tEY, {
                                                        ringTarget: eT,
                                                        ringClassName: Q.focusRing,
                                                        children: (0, i.jsx)(V.Z, {
                                                            ref: eA,
                                                            id: j,
                                                            focused: G,
                                                            useSlate: eV,
                                                            textValue: p,
                                                            richValue: f,
                                                            disabled: ek,
                                                            placeholder: eg,
                                                            required: P,
                                                            accessibilityLabel: Z,
                                                            isPreviewing: (eD || eL) && eF,
                                                            channel: D,
                                                            type: F.Ie.CREATE_ANNOUNCEMENT_POST,
                                                            canPasteFiles: eU,
                                                            uploadPromptCharacterCount: z.en1,
                                                            maxCharacterCount: null != em ? em : eH,
                                                            allowNewLines: !0,
                                                            "aria-describedby": eb,
                                                            onChange: K,
                                                            onResize: e3,
                                                            onBlur: es,
                                                            onFocus: ec,
                                                            onKeyDown: eu,
                                                            onSubmit: eX,
                                                            onTab: e8,
                                                            onEnter: e4,
                                                            onMoveSelection: e6,
                                                            onSelectionChanged: eY,
                                                            onMaybeShowAutocomplete: e$,
                                                            onHideAutocomplete: e0,
                                                            promptToUpload: ep,
                                                            fontSize: eG,
                                                            spellcheckEnabled: eW,
                                                            canOnlyUseTextCommands: !1,
                                                            isEditorIdle: te,
                                                            currentAutocompleteType: tt,
                                                            "aria-labelledby": ey,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)("div", {
                                            className: J.attachmentsContainer,
                                            children: (0, i.jsx)(W.Z, {
                                                channelId: D.id,
                                                type: k,
                                                canAttachFiles: eU,
                                                ignoreFile: null == eS ? void 0 : eS.name,
                                                smallAttachments: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, i.jsx)("div", { className: J.divider }),
                            (0, i.jsxs)("div", {
                                className: J.footer,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: J.footerPart,
                                        children: [
                                            (0, i.jsx)(ea, { channel: D }),
                                            (0, i.jsx)(B.Z, {
                                                type: F.Ie.CREATE_ANNOUNCEMENT_POST,
                                                disabled: ek,
                                                channel: D,
                                                handleSubmit: eJ,
                                                isEmpty: 0 === p.trim().length,
                                                showAllButtons: !0,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)("div", {
                                        className: J.footerPart,
                                        children: (0, i.jsx)("div", {
                                            ref: td,
                                            className: J.sendButtonContainer,
                                            onMouseEnter: tm,
                                            onMouseLeave: tg,
                                            children: (0, i.jsx)(h.yRy, {
                                                targetElementRef: td,
                                                renderPopout: () =>
                                                    (0, i.jsx)(er, {
                                                        channelId: D.id,
                                                        canCreateThread: ez,
                                                    }),
                                                shouldShow: tp,
                                                autoInvert: !0,
                                                nudgeAlignIntoViewport: !0,
                                                position: "top",
                                                align: "right",
                                                children: (e) =>
                                                    (0, i.jsx)(
                                                        h.Button,
                                                        ee($({}, e), {
                                                            onClick: () => {
                                                                eX(
                                                                    ""
                                                                        .concat(
                                                                            ej.length > 0 ? "# ".concat(ej, "\n") : "",
                                                                        )
                                                                        .concat(p),
                                                                );
                                                            },
                                                            disabled: 0 === p.length && 0 === ej.length,
                                                            size: "sm",
                                                            "aria-label": X.intl.string(X.t.TXNS7S),
                                                            innerClassName: J.sendButton,
                                                            text: (0, i.jsxs)("div", {
                                                                className: J.sendButtonContents,
                                                                children: [
                                                                    (0, i.jsx)(h.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "always-white",
                                                                        children: X.intl.string(X.t.TXNS7S),
                                                                    }),
                                                                    (0, i.jsxs)("div", {
                                                                        className: J.sendButtonIcons,
                                                                        children: [
                                                                            (0, i.jsx)(h.Uuj, {
                                                                                size: "xs",
                                                                                color: "white",
                                                                            }),
                                                                            ez && eI
                                                                                ? (0, i.jsx)(h.or_, {
                                                                                      size: "xxs",
                                                                                      color: "white",
                                                                                      className: J.subIcon,
                                                                                  })
                                                                                : null,
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    ),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(x.Z, {
                                targetRef: eT,
                                ref: eQ,
                                channel: D,
                                canMentionRoles: ef,
                                canMentionChannels: eh,
                                useNewSlashCommands: eV,
                                canOnlyUseTextCommands: !1,
                                canSendStickers: !0,
                                textValue: p,
                                focused: G,
                                isEditorIdle: te,
                                expressionPickerView: e7,
                                type: k,
                                editorRef: eA,
                                onSendMessage: eX,
                                onSendSticker: () => {},
                                onVisibilityChange: tn,
                                editorHeight: e2,
                                setValue: (e, t) => (null == K ? void 0 : K(null, e, t)),
                                position: e_,
                            }),
                        ],
                    }),
                    e5
                        ? null
                        : (0, i.jsx)(S.Z, {
                              positionTargetRef: eT,
                              type: k,
                              onSelectGIF: tr,
                              onSelectEmoji: ti,
                              onSelectSticker: tl,
                              channel: D,
                              closeOnModalOuterClick: ex,
                              parentModalKey: eO,
                              position: "top",
                              align: "right",
                              positionLayerClassName: Q.expressionPickerPositionLayer,
                          }),
                ],
            }),
        });
    }),
);
function er(e) {
    var t, n;
    let { channelId: r, canCreateThread: l } = e,
        a = O.Z.useField("channelDrafts")[r],
        o = null == (t = null == a ? void 0 : a.createThread) || t,
        s = null == (n = null == a ? void 0 : a.publish) || n;
    return (0, i.jsxs)(h.v2r, {
        "aria-label": X.intl.string(X.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: z.dG4,
        onSelect: z.dG4,
        children: [
            (0, i.jsx)(h.S89, {
                id: "create-thread",
                label: X.intl.string(X.t.rBIGBL),
                checked: l && o,
                disabled: !l,
                action: () => {
                    (0, O.c)(r, { createThread: !o });
                },
            }),
            (0, i.jsx)(h.S89, {
                id: "send-and-publish",
                label: X.intl.string(X.t.MFGE51),
                checked: s,
                action: () => {
                    (0, O.c)(r, { publish: !s });
                },
            }),
        ],
    });
}
function el(e) {
    let { file: t, onRemoveHeroImage: n } = e,
        [l, a] = r.useState();
    r.useEffect(() => {
        if (null == t || !1 === ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(t.type)) return;
        let e = URL.createObjectURL(t);
        return (
            a(e),
            () => {
                a(void 0), URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let [o, s] = r.useState(!1),
        c = r.useCallback(() => {
            s(!0);
        }, []),
        u = r.useCallback(() => {
            s(!1);
        }, []);
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              onMouseEnter: c,
              onMouseLeave: u,
              className: J.heroImageWrapper,
              "aria-hidden": !0,
              children: [
                  (0, i.jsx)("img", {
                      src: l,
                      alt: X.intl.string(X.t["2ePvR8"]),
                      className: J.heroImage,
                  }),
                  o
                      ? (0, i.jsx)(j.ZP, {
                            className: J.heroOverlay,
                            children: (0, i.jsx)(G.Z, {
                                tooltip: X.intl.string(X.t.VjC21x),
                                onClick: n,
                                dangerous: !0,
                                children: (0, i.jsx)(h.XHJ, {}),
                            }),
                        })
                      : null,
              ],
          });
}
function ea(e) {
    let { channel: t } = e;
    return (0, i.jsx)(P.Z, {
        "aria-label": X.intl.string(X.t["/IBYAq"]),
        className: J.attachButton,
        size: "icon",
        color: "transparent",
        look: "blank",
        onChange: (e) => {
            (0, k.d)(e.currentTarget.files, t, w.d.ChannelMessage, {
                requireConfirm: !0,
                origin: "file_picker",
            }),
                (e.currentTarget.value = null);
        },
        children: (0, i.jsx)(h.xD0, {
            size: "custom",
            width: 20,
            height: 20,
            color: p.Z.colors.INTERACTIVE_NORMAL,
        }),
    });
}
function eo(e) {
    let { channel: t, onImageUploaded: n, onFocus: l } = e,
        a = r.useRef(null),
        o = async (e, i) => {
            let r = await (0, D.Bo)(e, i.name, i.type),
                l = {
                    id: (0, u.Z)(),
                    file: r,
                    platform: b.ow.WEB,
                    isThumbnail: !1,
                    origin: "file_picker",
                };
            m.Z.addFile({
                file: l,
                channelId: t.id,
                draftType: w.d.ChannelMessage,
            }),
                n(r);
        },
        [s, c] = r.useState(!1),
        d = r.useCallback(() => {
            c(!0);
        }, []),
        g = r.useCallback(() => {
            c(!1);
        }, []);
    return (0, i.jsx)("div", {
        className: J.heroImageButton,
        children: (0, i.jsx)(f.u, {
            asContainer: !0,
            text: X.intl.string(X.t["/IBYAq"]),
            position: "top",
            children: (0, i.jsxs)(h.P3F, {
                className: J.heroImageButton,
                onMouseOver: d,
                onMouseOut: g,
                onFocus: l,
                children: [
                    (0, i.jsx)(Z.ZP, {
                        ref: a,
                        onChange: o,
                        "aria-hidden": !0,
                        tabIndex: -1,
                        maxFileSizeBytes: K.B,
                        onFileSizeError: () => (0, I.Z)(K.B),
                    }),
                    (0, i.jsx)(h.FmF, {
                        size: "md",
                        color: s ? p.Z.colors.INTERACTIVE_ACTIVE : p.Z.colors.INTERACTIVE_NORMAL,
                    }),
                ],
            }),
        }),
    });
}
