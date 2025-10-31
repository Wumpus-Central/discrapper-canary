n.d(t, { Z: () => er }),
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
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(13941),
    u = n(772848),
    d = n(442837),
    p = n(692547),
    f = n(28664),
    h = n(481060),
    m = n(166459),
    g = n(911969),
    b = n(476326),
    _ = n(607070),
    y = n(100527),
    C = n(906732),
    v = n(998698),
    O = n(326133),
    x = n(507366),
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
    B = n(541716),
    F = n(667829),
    V = n(258696),
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
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
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
        r = e;
    if (n) {
        let n = e.slice(13);
        r = t ? "attachment://SPOILER_".concat(en(n)) : e;
    }
    return {
        media: {
            url: r,
            proxyUrl: r,
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
let er = i.memo(
    i.forwardRef(function (e, t) {
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
                onResize: er,
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
                "aria-labelledby": e_,
                setEditorRef: ey,
                autoCompletePosition: eC,
                children: ev,
                disableThemedBackground: eO = !1,
                emojiPickerCloseOnModalOuterClick: ex,
                parentModalKey: eE,
            } = e,
            ej = x.Z.useField("channelDrafts")[D.id],
            eS = null != (l = null == ej ? void 0 : ej.title) ? l : "",
            eP = null == ej ? void 0 : ej.heroFile,
            eI = null == (o = null == ej ? void 0 : ej.publish) || o,
            eZ = null == (u = null == ej ? void 0 : ej.createThread) || u;
        s()(null != k, "chat input type must be set");
        let { analyticsLocations: eT } = (0, C.ZP)(y.Z.CHANNEL_TEXT_AREA),
            eN = (0, H.qz)(t),
            eA = i.useRef(null),
            ew = i.useRef(null),
            eM = i.useRef(null),
            eR = i.useRef(null);
        null == ey || ey(ew.current);
        let { activeCommand: eD } = (0, d.cj)([v.Z], () => {
                var e, t;
                return {
                    activeCommand: (null == (e = k.commands) ? void 0 : e.enabled) ? v.Z.getActiveCommand(D.id) : null,
                    activeCommandSection: (null == (t = k.commands) ? void 0 : t.enabled)
                        ? v.Z.getActiveCommandSection(D.id)
                        : null,
                };
            }),
            {
                isLurking: eL,
                isPendingMember: ek,
                disabled: eU,
                canAttachFiles: eB,
                canEveryoneSendMessages: eF,
            } = (0, H.TE)(D, k, eD, I),
            eV = !A.dN.useSetting() && !(0, L.isAndroidWeb)() && null != window.ResizeObserver,
            eH = !eV || !(null == (n = k.commands) ? void 0 : n.enabled) || !G || p !== q.GI,
            eG = (0, T.Z)(),
            { fontSize: eW } = (0, d.cj)([_.Z], () => ({
                fontSize: _.Z.fontSize,
                isSubmitButtonEnabled: _.Z.isSubmitButtonEnabled,
            })),
            ez = (0, d.e7)([M.Z], () => M.Z.isEnabled()),
            eq = (0, N.NE)(D);
        (0, H.hJ)(k, eU);
        let { eventEmitter: eY, handleEditorSelectionChanged: eK } = (0, H.x2)(ew, p, f),
            eX = i.useCallback(
                (e) => {
                    let t = (e) => {
                            if (e.shouldClear) {
                                var t;
                                (0, x.c)(D.id, {
                                    title: "",
                                    heroFile: null,
                                }),
                                    null == (t = ew.current) || t.blur();
                            }
                            return e;
                        },
                        n = [],
                        r =
                            eS.length > 0
                                ? eS
                                : e.value.length > 0
                                  ? e.value.slice(0, 80)
                                  : X.intl.string(X.t["7Xm5QI"]);
                    if (null == eP)
                        return ed(
                            ee($({}, e), {
                                announcementSendOptions: {
                                    createThread: eq && eZ,
                                    threadName: r,
                                    publish: eI,
                                },
                            }),
                        ).then(t);
                    n.push({
                        type: g.re.MEDIA_GALLERY,
                        items: [et("attachment://".concat(en(eP.name)), !1)],
                        id: "".concat(Y.Vm),
                    }),
                        e.value.length > 0 &&
                            n.push({
                                type: g.re.TEXT_DISPLAY,
                                content: e.value,
                                id: "".concat(Y.Kb),
                            });
                    let i = R.Z.getUploads(D.id, w.d.ChannelMessage),
                        l = i.filter((e) => (e.isImage || e.isVideo) && e.filename !== (null == eP ? void 0 : eP.name)),
                        a = i.filter((e) => !e.isImage && !e.isVideo && e.filename !== (null == eP ? void 0 : eP.name)),
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
                                    createThread: eq && eZ,
                                    threadName: r,
                                    publish: eI,
                                },
                            }),
                        ).then(t)
                    );
                },
                [ed, eS, eP, D.id, eZ, eI, eq],
            ),
            { submit: eJ, handleSubmit: eQ } = (0, H.bL)(eX, k, ew, eR, D.id),
            { autocompleteRef: e$, handleMaybeShowAutocomplete: e0, handleHideAutocomplete: e1 } = (0, H.jx)(),
            e2 = i.useCallback(() => {
                var e;
                return null == eR || null == (e = eR.current) ? void 0 : e.hide();
            }, []),
            { editorHeight: e3, handleResize: e8 } = (0, H.oR)(er),
            {
                handleTab: e4,
                handleEnter: e7,
                handleMoveSelection: e6,
            } = (function (e, t, n) {
                let r = i.useCallback(() => {
                    var r, i;
                    return (
                        !!(!n && (null == (r = t.current) ? void 0 : r.onTabOrEnter(!1))) ||
                        (null == (i = e.current) ? void 0 : i.onTabOrEnter(!1)) ||
                        !1
                    );
                }, [n]);
                return {
                    handleTab: r,
                    handleEnter: i.useCallback(() => {
                        var r, i;
                        return (
                            !!(!n && (null == (r = t.current) ? void 0 : r.onTabOrEnter(!0))) ||
                            (null == (i = e.current) ? void 0 : i.onTabOrEnter(!1)) ||
                            !1
                        );
                    }, [n]),
                    handleMoveSelection: i.useCallback(
                        (r) => {
                            var i, l;
                            return (
                                !!(!n && (null == (i = t.current) ? void 0 : i.onMoveSelection(r))) ||
                                (null == (l = e.current) ? void 0 : l.onMoveSelection(r)) ||
                                !1
                            );
                        },
                        [n],
                    ),
                };
            })(e$, eA, eH),
            { expressionPickerView: e5, shouldHideExpressionPicker: e9, handleOuterClick: te } = (0, H.iV)(k, ew),
            tt = (0, H.aT)(p),
            { currentAutocompleteType: tn, handleAutocompleteVisibilityChange: tr } = (0, H.vB)(),
            ti = (0, H.ae)(ew),
            tl = (0, H.Sg)(eJ, k, ew),
            ta = (0, H.O1)({
                editorRef: ew,
                disabled: eU,
                textValue: p,
                channelId: D.id,
                chatInputType: k,
                submit: eX,
            });
        (0, U.S)(eY, D.guild_id, D.id);
        let [to, ts] = i.useState(!1),
            tc = G || to || p.length > 0 || null != eP || eS.length > 0,
            { editorHeaderHeight: tu, paddingTop: td } = (0, h.q_F)({
                editorHeaderHeight: 122 * !!tc,
                paddingTop: 16 * !!tc,
                config: {
                    tension: 120,
                    friction: 15,
                    clamp: !0,
                },
            }),
            tp = i.useRef(null),
            [tf, th] = i.useState(!1),
            tm = i.useRef(!1),
            tg = i.useCallback(() => {
                tm.current = !0;
                let e = setTimeout(() => {
                    tm.current && th(!0);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tb = i.useCallback(() => {
                tm.current = !1;
                let e = setTimeout(() => {
                    tm.current || th(!1);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            t_ = i.useCallback(() => {
                var e;
                if (null == eP) return;
                let t =
                    null == (e = R.Z.getUploads(D.id, k.drafts.type).find((e) => e.filename === eP.name))
                        ? void 0
                        : e.id;
                null != t && m.Z.remove(D.id, t, w.d.ChannelMessage), (0, x.c)(D.id, { heroFile: null });
            }, [D.id, eP, k.drafts.type]);
        return (0, r.jsx)(E.f6, {
            value: eY,
            children: (0, r.jsxs)(C.Gt, {
                value: eT,
                children: [
                    (0, r.jsxs)("div", {
                        ref: eN,
                        className: a()(b, Q.channelTextArea),
                        onMouseDown: te,
                        children: [
                            (0, r.jsx)("div", {
                                ref: eM,
                                onScroll: e2,
                                className: a()(Q.announcementScrollableContainer, { [Q.themedBackground]: !eO }),
                                children: (0, r.jsxs)("div", {
                                    className: a()(Q.inner, J.inner),
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: J.body,
                                            children: [
                                                (0, r.jsxs)(c.animated.div, {
                                                    className: J.headerInput,
                                                    style: {
                                                        height: tu,
                                                        paddingTop: td,
                                                    },
                                                    children: [
                                                        null != eP
                                                            ? (0, r.jsx)(el, {
                                                                  file: eP,
                                                                  onRemoveHeroImage: t_,
                                                              })
                                                            : null,
                                                        null != eP
                                                            ? null
                                                            : (0, r.jsx)(eo, {
                                                                  channel: D,
                                                                  onImageUploaded: (e) =>
                                                                      (0, x.c)(D.id, { heroFile: e }),
                                                                  onFocus: () => ts(!0),
                                                              }),
                                                        (0, r.jsx)("input", {
                                                            onFocus: () => ts(!0),
                                                            onBlur: () => ts(!1),
                                                            maxLength: 140,
                                                            className: J.titleInput,
                                                            placeholder: X.intl.string(X.t.Z8fYjO),
                                                            value: eS,
                                                            onChange: (e) => (0, x.c)(D.id, { title: e.target.value }),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)("div", {
                                                    className: J.inputWrapper,
                                                    children: (0, r.jsx)(h.tEY, {
                                                        ringTarget: eN,
                                                        ringClassName: Q.focusRing,
                                                        children: (0, r.jsx)(F.Z, {
                                                            ref: ew,
                                                            id: j,
                                                            focused: G,
                                                            useSlate: eV,
                                                            textValue: p,
                                                            richValue: f,
                                                            disabled: eU,
                                                            placeholder: eg,
                                                            required: P,
                                                            accessibilityLabel: Z,
                                                            isPreviewing: (eL || ek) && eF,
                                                            channel: D,
                                                            type: B.Ie.CREATE_ANNOUNCEMENT_POST,
                                                            canPasteFiles: eB,
                                                            uploadPromptCharacterCount: z.en1,
                                                            maxCharacterCount: null != em ? em : eG,
                                                            allowNewLines: !0,
                                                            "aria-describedby": eb,
                                                            onChange: K,
                                                            onResize: e8,
                                                            onBlur: es,
                                                            onFocus: ec,
                                                            onKeyDown: eu,
                                                            onSubmit: eJ,
                                                            onTab: e4,
                                                            onEnter: e7,
                                                            onMoveSelection: e6,
                                                            onSelectionChanged: eK,
                                                            onMaybeShowAutocomplete: e0,
                                                            onHideAutocomplete: e1,
                                                            promptToUpload: ep,
                                                            fontSize: eW,
                                                            spellcheckEnabled: ez,
                                                            canOnlyUseTextCommands: !1,
                                                            isEditorIdle: tt,
                                                            currentAutocompleteType: tn,
                                                            "aria-labelledby": e_,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            className: J.attachmentsContainer,
                                            children: (0, r.jsx)(W.Z, {
                                                channelId: D.id,
                                                type: k,
                                                canAttachFiles: eB,
                                                ignoreFile: null == eP ? void 0 : eP.name,
                                                smallAttachments: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)("div", { className: J.divider }),
                            (0, r.jsxs)("div", {
                                className: J.footer,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: J.footerPart,
                                        children: [
                                            (0, r.jsx)(ea, { channel: D }),
                                            (0, r.jsx)(V.Z, {
                                                type: B.Ie.CREATE_ANNOUNCEMENT_POST,
                                                disabled: eU,
                                                channel: D,
                                                handleSubmit: eQ,
                                                isEmpty: 0 === p.trim().length,
                                                showAllButtons: !0,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: J.footerPart,
                                        children: (0, r.jsx)("div", {
                                            ref: tp,
                                            className: J.sendButtonContainer,
                                            onMouseEnter: tg,
                                            onMouseLeave: tb,
                                            children: (0, r.jsx)(h.yRy, {
                                                targetElementRef: tp,
                                                renderPopout: () =>
                                                    (0, r.jsx)(ei, {
                                                        channelId: D.id,
                                                        canCreateThread: eq,
                                                    }),
                                                shouldShow: tf,
                                                autoInvert: !0,
                                                nudgeAlignIntoViewport: !0,
                                                position: "top",
                                                align: "right",
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        h.Button,
                                                        ee($({}, e), {
                                                            onClick: () => {
                                                                eJ(
                                                                    ""
                                                                        .concat(
                                                                            eS.length > 0 ? "# ".concat(eS, "\n") : "",
                                                                        )
                                                                        .concat(p),
                                                                );
                                                            },
                                                            disabled: 0 === p.length && 0 === eS.length,
                                                            size: "sm",
                                                            "aria-label": X.intl.string(X.t.TXNS7S),
                                                            innerClassName: J.sendButton,
                                                            text: (0, r.jsxs)("div", {
                                                                className: J.sendButtonContents,
                                                                children: [
                                                                    (0, r.jsx)(h.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "always-white",
                                                                        children: X.intl.string(X.t.TXNS7S),
                                                                    }),
                                                                    (0, r.jsxs)("div", {
                                                                        className: J.sendButtonIcons,
                                                                        children: [
                                                                            (0, r.jsx)(h.Uuj, {
                                                                                size: "xs",
                                                                                color: "white",
                                                                            }),
                                                                            eq && eZ
                                                                                ? (0, r.jsx)(h.or_, {
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
                            (0, r.jsx)(O.Z, {
                                targetRef: eN,
                                ref: e$,
                                channel: D,
                                canMentionRoles: ef,
                                canMentionChannels: eh,
                                useNewSlashCommands: eV,
                                canOnlyUseTextCommands: !1,
                                canSendStickers: !0,
                                textValue: p,
                                focused: G,
                                isEditorIdle: tt,
                                expressionPickerView: e5,
                                type: k,
                                editorRef: ew,
                                onSendMessage: eJ,
                                onSendSticker: () => {},
                                onVisibilityChange: tr,
                                editorHeight: e3,
                                setValue: (e, t) => (null == K ? void 0 : K(null, e, t)),
                                position: eC,
                            }),
                            ev,
                        ],
                    }),
                    e9
                        ? null
                        : (0, r.jsx)(S.Z, {
                              positionTargetRef: eN,
                              type: k,
                              onSelectGIF: tl,
                              onSelectEmoji: ti,
                              onSelectSticker: ta,
                              channel: D,
                              closeOnModalOuterClick: ex,
                              parentModalKey: eE,
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
    let { channelId: i, canCreateThread: l } = e,
        a = x.Z.useField("channelDrafts")[i],
        o = null == (t = null == a ? void 0 : a.createThread) || t,
        s = null == (n = null == a ? void 0 : a.publish) || n;
    return (0, r.jsxs)(h.v2r, {
        "aria-label": X.intl.string(X.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: z.dG4,
        onSelect: z.dG4,
        children: [
            (0, r.jsx)(h.S89, {
                id: "create-thread",
                label: X.intl.string(X.t.rBIGBL),
                checked: l && o,
                disabled: !l,
                action: () => {
                    (0, x.c)(i, { createThread: !o });
                },
            }),
            (0, r.jsx)(h.S89, {
                id: "send-and-publish",
                label: X.intl.string(X.t.MFGE51),
                checked: s,
                action: () => {
                    (0, x.c)(i, { publish: !s });
                },
            }),
        ],
    });
}
function el(e) {
    let { file: t, onRemoveHeroImage: n } = e,
        [l, a] = i.useState();
    i.useEffect(() => {
        if (null == t || !1 === ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(t.type)) return;
        let e = URL.createObjectURL(t);
        return (
            a(e),
            () => {
                a(void 0), URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let [o, s] = i.useState(!1),
        c = i.useCallback(() => {
            s(!0);
        }, []),
        u = i.useCallback(() => {
            s(!1);
        }, []);
    return null == l
        ? null
        : (0, r.jsxs)("div", {
              onMouseEnter: c,
              onMouseLeave: u,
              className: J.heroImageWrapper,
              "aria-hidden": !0,
              children: [
                  (0, r.jsx)("img", {
                      src: l,
                      alt: X.intl.string(X.t["2ePvR8"]),
                      className: J.heroImage,
                  }),
                  o
                      ? (0, r.jsx)(j.ZP, {
                            className: J.heroOverlay,
                            children: (0, r.jsx)(G.Z, {
                                tooltip: X.intl.string(X.t.VjC21x),
                                onClick: n,
                                dangerous: !0,
                                children: (0, r.jsx)(h.XHJ, {}),
                            }),
                        })
                      : null,
              ],
          });
}
function ea(e) {
    let { channel: t } = e;
    return (0, r.jsx)(P.Z, {
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
        children: (0, r.jsx)(h.xD0, {
            size: "custom",
            width: 20,
            height: 20,
            color: p.Z.colors.INTERACTIVE_NORMAL,
        }),
    });
}
function eo(e) {
    let { channel: t, onImageUploaded: n, onFocus: l } = e,
        a = i.useRef(null),
        o = async (e, r) => {
            let i = await (0, D.Bo)(e, r.name, r.type),
                l = {
                    id: (0, u.Z)(),
                    file: i,
                    platform: b.ow.WEB,
                    isThumbnail: !1,
                    origin: "file_picker",
                };
            m.Z.addFile({
                file: l,
                channelId: t.id,
                draftType: w.d.ChannelMessage,
            }),
                n(i);
        },
        [s, c] = i.useState(!1),
        d = i.useCallback(() => {
            c(!0);
        }, []),
        g = i.useCallback(() => {
            c(!1);
        }, []);
    return (0, r.jsx)("div", {
        className: J.heroImageButton,
        children: (0, r.jsx)(f.u, {
            asContainer: !0,
            text: X.intl.string(X.t["/IBYAq"]),
            position: "top",
            children: (0, r.jsxs)(h.P3F, {
                className: J.heroImageButton,
                onMouseOver: d,
                onMouseOut: g,
                onFocus: l,
                children: [
                    (0, r.jsx)(Z.ZP, {
                        ref: a,
                        onChange: o,
                        "aria-hidden": !0,
                        tabIndex: -1,
                        maxFileSizeBytes: K.B,
                        onFileSizeError: () => (0, I.Z)(K.B),
                    }),
                    (0, r.jsx)(h.FmF, {
                        size: "md",
                        color: s ? p.Z.colors.INTERACTIVE_ACTIVE : p.Z.colors.INTERACTIVE_NORMAL,
                    }),
                ],
            }),
        }),
    });
}
