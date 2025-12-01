n.d(t, { Z: () => en }),
    n(539854),
    n(388685),
    n(781311),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(666917),
    u = n(772848),
    d = n(442837),
    p = n(692547),
    h = n(28664),
    f = n(481060),
    m = n(166459),
    g = n(911969),
    b = n(476326),
    y = n(607070),
    C = n(100527),
    v = n(906732),
    _ = n(998698),
    O = n(326133),
    x = n(507366),
    j = n(570220),
    E = n(951394),
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
    L = n(956664),
    D = n(358085),
    k = n(127654),
    U = n(746877),
    F = n(541716),
    B = n(667829),
    H = n(258696),
    V = n(893718),
    G = n(273031),
    z = n(303628),
    W = n(981631),
    q = n(761652),
    K = n(224837),
    Y = n(200299),
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
        i = t ? "attachment://SPOILER_".concat(n) : e;
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
let en = r.memo(
    r.forwardRef(function (e, t) {
        var n, l, o, u;
        let {
                textValue: p,
                richValue: h,
                className: b,
                id: E,
                required: P,
                disabled: I,
                accessibilityLabel: Z,
                channel: L,
                type: k,
                focused: G,
                onChange: Y,
                onResize: en,
                onBlur: eo,
                onFocus: es,
                onKeyDown: ec,
                onSubmit: eu,
                promptToUpload: ed,
                canMentionRoles: ep,
                canMentionChannels: eh,
                maxCharacterCount: ef,
                placeholder: em,
                "aria-describedby": eg,
                "aria-labelledby": eb,
                setEditorRef: ey,
                autoCompletePosition: eC,
                disableThemedBackground: ev = !1,
                emojiPickerCloseOnModalOuterClick: e_,
                parentModalKey: eO,
            } = e,
            ex = x.Z.useField("channelDrafts")[L.id],
            ej = null != (l = null == ex ? void 0 : ex.title) ? l : "",
            eE = null == ex ? void 0 : ex.heroFile,
            eS = null == (o = null == ex ? void 0 : ex.publish) || o,
            eP = null == (u = null == ex ? void 0 : ex.createThread) || u;
        s()(null != k, "chat input type must be set");
        let { analyticsLocations: eI } = (0, v.ZP)(C.Z.CHANNEL_TEXT_AREA),
            eZ = (0, V.qz)(t),
            eT = r.useRef(null),
            eN = r.useRef(null),
            eA = r.useRef(null),
            ew = r.useRef(null);
        null == ey || ey(eN.current);
        let { activeCommand: eM } = (0, d.cj)([_.Z], () => {
                var e, t;
                return {
                    activeCommand: (null == (e = k.commands) ? void 0 : e.enabled) ? _.Z.getActiveCommand(L.id) : null,
                    activeCommandSection: (null == (t = k.commands) ? void 0 : t.enabled)
                        ? _.Z.getActiveCommandSection(L.id)
                        : null,
                };
            }),
            {
                isLurking: eR,
                isPendingMember: eL,
                disabled: eD,
                canAttachFiles: ek,
                canEveryoneSendMessages: eU,
            } = (0, V.TE)(L, k, eM, I),
            eF = !A.dN.useSetting() && !(0, D.isAndroidWeb)() && null != window.ResizeObserver,
            eB = !eF || !(null == (n = k.commands) ? void 0 : n.enabled) || !G || p !== q.GI,
            eH = (0, T.Z)(),
            { fontSize: eV } = (0, d.cj)([y.Z], () => ({
                fontSize: y.Z.fontSize,
                isSubmitButtonEnabled: y.Z.isSubmitButtonEnabled,
            })),
            eG = (0, d.e7)([M.Z], () => M.Z.isEnabled()),
            ez = (0, N.NE)(L);
        (0, V.hJ)(k, eD);
        let { eventEmitter: eW, handleEditorSelectionChanged: eq } = (0, V.x2)(eN, p, h),
            eK = r.useCallback(
                (e) => {
                    let t = (e) => {
                            if (e.shouldClear) {
                                var t;
                                (0, x.c)(L.id, {
                                    title: "",
                                    heroFile: null,
                                }),
                                    null == (t = eN.current) || t.blur();
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
                    if (null == eE)
                        return eu(
                            ee($({}, e), {
                                announcementSendOptions: {
                                    createThread: ez && eP,
                                    threadName: i,
                                    publish: eS,
                                },
                            }),
                        ).then(t);
                    n.push({
                        type: g.re.MEDIA_GALLERY,
                        items: [et("attachment://".concat(eE.name), !1)],
                        id: "".concat(K.Vm),
                    }),
                        e.value.length > 0 &&
                            n.push({
                                type: g.re.TEXT_DISPLAY,
                                content: e.value,
                                id: "".concat(K.Kb),
                            });
                    let r = R.Z.getUploads(L.id, w.d.ChannelMessage),
                        l = r.filter((e) => (e.isImage || e.isVideo) && e.filename !== (null == eE ? void 0 : eE.name)),
                        a = r.filter((e) => !e.isImage && !e.isVideo && e.filename !== (null == eE ? void 0 : eE.name)),
                        o = l.map((e) => et("attachment://".concat(e.filename), !1));
                    return (
                        o.length > 0 &&
                            n.push({
                                type: g.re.MEDIA_GALLERY,
                                items: o,
                                id: "".concat(K.m2),
                            }),
                        a.forEach((e, t) => {
                            n.push({
                                type: g.re.FILE,
                                file: et("attachment://".concat(e.filename), !1).media,
                                id: "".concat(K.kn + t),
                                name: null,
                                size: null,
                            });
                        }),
                        eu(
                            ee($({}, e), {
                                components: n,
                                announcementSendOptions: {
                                    createThread: ez && eP,
                                    threadName: i,
                                    publish: eS,
                                },
                            }),
                        ).then(t)
                    );
                },
                [eu, ej, eE, L.id, eP, eS, ez],
            ),
            { submit: eY, handleSubmit: eX } = (0, V.bL)(eK, k, eN, ew, L.id),
            { autocompleteRef: eJ, handleMaybeShowAutocomplete: eQ, handleHideAutocomplete: e$ } = (0, V.jx)(),
            e0 = r.useCallback(() => {
                var e;
                return null == ew || null == (e = ew.current) ? void 0 : e.hide();
            }, []),
            { editorHeight: e1, handleResize: e2 } = (0, V.oR)(en),
            {
                handleTab: e3,
                handleEnter: e4,
                handleMoveSelection: e7,
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
            })(eJ, eT, eB),
            { expressionPickerView: e8, shouldHideExpressionPicker: e5, handleOuterClick: e6 } = (0, V.iV)(k, eN),
            e9 = (0, V.aT)(p),
            { currentAutocompleteType: te, handleAutocompleteVisibilityChange: tt } = (0, V.vB)(),
            tn = (0, V.ae)(eN),
            ti = (0, V.Sg)(eY, k, eN),
            tr = (0, V.O1)({
                editorRef: eN,
                disabled: eD,
                textValue: p,
                channelId: L.id,
                chatInputType: k,
                submit: eK,
            });
        (0, U.S)(eW, L.guild_id, L.id);
        let [tl, ta] = r.useState(!1),
            to = G || tl || p.length > 0 || null != eE || ej.length > 0,
            { editorHeaderHeight: ts, paddingTop: tc } = (0, f.q_F)({
                editorHeaderHeight: 122 * !!to,
                paddingTop: 16 * !!to,
                config: {
                    tension: 120,
                    friction: 15,
                    clamp: !0,
                },
            }),
            tu = r.useRef(null),
            [td, tp] = r.useState(!1),
            th = r.useRef(!1),
            tf = r.useCallback(() => {
                th.current = !0;
                let e = setTimeout(() => {
                    th.current && tp(!0);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tm = r.useCallback(() => {
                th.current = !1;
                let e = setTimeout(() => {
                    th.current || tp(!1);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tg = r.useCallback(() => {
                var e;
                if (null == eE) return;
                let t =
                    null == (e = R.Z.getUploads(L.id, k.drafts.type).find((e) => e.filename === eE.name))
                        ? void 0
                        : e.id;
                null != t && m.Z.remove(L.id, t, w.d.ChannelMessage), (0, x.c)(L.id, { heroFile: null });
            }, [L.id, eE, k.drafts.type]);
        return (0, i.jsx)(j.f6, {
            value: eW,
            children: (0, i.jsxs)(v.Gt, {
                value: eI,
                children: [
                    (0, i.jsxs)("div", {
                        ref: eZ,
                        className: a()(b, Q.channelTextArea),
                        onMouseDown: e6,
                        children: [
                            (0, i.jsx)("div", {
                                ref: eA,
                                onScroll: e0,
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
                                                        height: ts,
                                                        paddingTop: tc,
                                                    },
                                                    children: [
                                                        null != eE
                                                            ? (0, i.jsx)(er, {
                                                                  file: eE,
                                                                  onRemoveHeroImage: tg,
                                                              })
                                                            : null,
                                                        null != eE
                                                            ? null
                                                            : (0, i.jsx)(ea, {
                                                                  channel: L,
                                                                  onImageUploaded: (e) =>
                                                                      (0, x.c)(L.id, { heroFile: e }),
                                                                  onFocus: () => ta(!0),
                                                              }),
                                                        (0, i.jsx)("input", {
                                                            onFocus: () => ta(!0),
                                                            onBlur: () => ta(!1),
                                                            maxLength: 140,
                                                            className: J.titleInput,
                                                            placeholder: X.intl.string(X.t.Z8fYjO),
                                                            value: ej,
                                                            onChange: (e) => (0, x.c)(L.id, { title: e.target.value }),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)("div", {
                                                    className: J.inputWrapper,
                                                    children: (0, i.jsx)(f.tEY, {
                                                        ringTarget: eZ,
                                                        ringClassName: Q.focusRing,
                                                        children: (0, i.jsx)(B.Z, {
                                                            ref: eN,
                                                            id: E,
                                                            focused: G,
                                                            useSlate: eF,
                                                            textValue: p,
                                                            richValue: h,
                                                            disabled: eD,
                                                            placeholder: em,
                                                            required: P,
                                                            accessibilityLabel: Z,
                                                            isPreviewing: (eR || eL) && eU,
                                                            channel: L,
                                                            type: F.Ie.CREATE_ANNOUNCEMENT_POST,
                                                            canPasteFiles: ek,
                                                            uploadPromptCharacterCount: W.en1,
                                                            maxCharacterCount: null != ef ? ef : eH,
                                                            allowNewLines: !0,
                                                            "aria-describedby": eg,
                                                            onChange: Y,
                                                            onResize: e2,
                                                            onBlur: eo,
                                                            onFocus: es,
                                                            onKeyDown: ec,
                                                            onSubmit: eY,
                                                            onTab: e3,
                                                            onEnter: e4,
                                                            onMoveSelection: e7,
                                                            onSelectionChanged: eq,
                                                            onMaybeShowAutocomplete: eQ,
                                                            onHideAutocomplete: e$,
                                                            promptToUpload: ed,
                                                            fontSize: eV,
                                                            spellcheckEnabled: eG,
                                                            canOnlyUseTextCommands: !1,
                                                            isEditorIdle: e9,
                                                            currentAutocompleteType: te,
                                                            "aria-labelledby": eb,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)("div", {
                                            className: J.attachmentsContainer,
                                            children: (0, i.jsx)(z.Z, {
                                                channelId: L.id,
                                                type: k,
                                                canAttachFiles: ek,
                                                ignoreFile: null == eE ? void 0 : eE.name,
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
                                            (0, i.jsx)(el, { channel: L }),
                                            (0, i.jsx)(H.Z, {
                                                type: F.Ie.CREATE_ANNOUNCEMENT_POST,
                                                disabled: eD,
                                                channel: L,
                                                handleSubmit: eX,
                                                isEmpty: 0 === p.trim().length,
                                                showAllButtons: !0,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)("div", {
                                        className: J.footerPart,
                                        children: (0, i.jsx)("div", {
                                            ref: tu,
                                            className: J.sendButtonContainer,
                                            onMouseEnter: tf,
                                            onMouseLeave: tm,
                                            children: (0, i.jsx)(f.yRy, {
                                                targetElementRef: tu,
                                                renderPopout: () =>
                                                    (0, i.jsx)(ei, {
                                                        channelId: L.id,
                                                        canCreateThread: ez,
                                                    }),
                                                shouldShow: td,
                                                autoInvert: !0,
                                                nudgeAlignIntoViewport: !0,
                                                position: "top",
                                                align: "right",
                                                children: (e) =>
                                                    (0, i.jsx)(
                                                        f.Button,
                                                        ee($({}, e), {
                                                            onClick: () => {
                                                                eY(
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
                                                                    (0, i.jsx)(f.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "always-white",
                                                                        children: X.intl.string(X.t.TXNS7S),
                                                                    }),
                                                                    (0, i.jsxs)("div", {
                                                                        className: J.sendButtonIcons,
                                                                        children: [
                                                                            (0, i.jsx)(f.Uuj, {
                                                                                size: "xs",
                                                                                color: "white",
                                                                            }),
                                                                            ez && eP
                                                                                ? (0, i.jsx)(f.or_, {
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
                            (0, i.jsx)(O.Z, {
                                targetRef: eZ,
                                ref: eJ,
                                channel: L,
                                canMentionRoles: ep,
                                canMentionChannels: eh,
                                useNewSlashCommands: eF,
                                canOnlyUseTextCommands: !1,
                                canSendStickers: !0,
                                textValue: p,
                                focused: G,
                                isEditorIdle: e9,
                                expressionPickerView: e8,
                                type: k,
                                editorRef: eN,
                                onSendMessage: eY,
                                onSendSticker: () => {},
                                onVisibilityChange: tt,
                                editorHeight: e1,
                                setValue: (e, t) => (null == Y ? void 0 : Y(null, e, t)),
                                position: eC,
                            }),
                        ],
                    }),
                    e5
                        ? null
                        : (0, i.jsx)(S.Z, {
                              positionTargetRef: eZ,
                              type: k,
                              onSelectGIF: ti,
                              onSelectEmoji: tn,
                              onSelectSticker: tr,
                              channel: L,
                              closeOnModalOuterClick: e_,
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
function ei(e) {
    var t, n;
    let { channelId: r, canCreateThread: l } = e,
        a = x.Z.useField("channelDrafts")[r],
        o = null == (t = null == a ? void 0 : a.createThread) || t,
        s = null == (n = null == a ? void 0 : a.publish) || n;
    return (0, i.jsxs)(f.v2r, {
        "aria-label": X.intl.string(X.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: W.dG4,
        onSelect: W.dG4,
        children: [
            (0, i.jsx)(f.S89, {
                id: "create-thread",
                label: X.intl.string(X.t.rBIGBL),
                checked: l && o,
                disabled: !l,
                action: () => {
                    (0, x.c)(r, { createThread: !o });
                },
            }),
            (0, i.jsx)(f.S89, {
                id: "send-and-publish",
                label: X.intl.string(X.t.MFGE51),
                checked: s,
                action: () => {
                    (0, x.c)(r, { publish: !s });
                },
            }),
        ],
    });
}
function er(e) {
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
                      ? (0, i.jsx)(E.ZP, {
                            className: J.heroOverlay,
                            children: (0, i.jsx)(G.Z, {
                                tooltip: X.intl.string(X.t.VjC21x),
                                onClick: n,
                                dangerous: !0,
                                children: (0, i.jsx)(f.XHJ, {}),
                            }),
                        })
                      : null,
              ],
          });
}
function el(e) {
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
        children: (0, i.jsx)(f.xD0, {
            size: "custom",
            width: 20,
            height: 20,
            color: p.Z.colors.INTERACTIVE_NORMAL,
        }),
    });
}
function ea(e) {
    let { channel: t, onImageUploaded: n, onFocus: l } = e,
        a = r.useRef(null),
        o = async (e, i) => {
            let r = await (0, L.Bo)(e, i.name, i.type),
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
        children: (0, i.jsx)(h.u, {
            asContainer: !0,
            text: X.intl.string(X.t["/IBYAq"]),
            position: "top",
            children: (0, i.jsxs)(f.P3F, {
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
                        maxFileSizeBytes: Y.B,
                        onFileSizeError: () => (0, I.Z)(Y.B),
                    }),
                    (0, i.jsx)(f.FmF, {
                        size: "md",
                        color: s ? p.Z.colors.INTERACTIVE_ACTIVE : p.Z.colors.INTERACTIVE_NORMAL,
                    }),
                ],
            }),
        }),
    });
}
