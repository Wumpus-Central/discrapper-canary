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
    c = n(137317),
    u = n(772848),
    d = n(442837),
    p = n(692547),
    h = n(28664),
    f = n(481060),
    m = n(166459),
    g = n(911969),
    b = n(476326),
    C = n(607070),
    y = n(100527),
    _ = n(906732),
    v = n(998698),
    x = n(326133),
    O = n(507366),
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
    k = n(956664),
    L = n(358085),
    D = n(127654),
    U = n(746877),
    B = n(541716),
    H = n(667829),
    V = n(258696),
    F = n(893718),
    G = n(273031),
    z = n(303628),
    W = n(981631),
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
                richValue: h,
                className: b,
                id: E,
                required: P,
                disabled: I,
                accessibilityLabel: Z,
                channel: k,
                type: D,
                focused: G,
                onChange: K,
                onResize: ei,
                onBlur: es,
                onFocus: ec,
                onKeyDown: eu,
                onSubmit: ed,
                promptToUpload: ep,
                canMentionRoles: eh,
                canMentionChannels: ef,
                maxCharacterCount: em,
                placeholder: eg,
                "aria-describedby": eb,
                "aria-labelledby": eC,
                setEditorRef: ey,
                autoCompletePosition: e_,
                children: ev,
                disableThemedBackground: ex = !1,
                emojiPickerCloseOnModalOuterClick: eO,
                parentModalKey: ej,
            } = e,
            eE = O.Z.useField("channelDrafts")[k.id],
            eS = null != (l = null == eE ? void 0 : eE.title) ? l : "",
            eP = null == eE ? void 0 : eE.heroFile,
            eI = null == (o = null == eE ? void 0 : eE.publish) || o,
            eZ = null == (u = null == eE ? void 0 : eE.createThread) || u;
        s()(null != D, "chat input type must be set");
        let { analyticsLocations: eT } = (0, _.ZP)(y.Z.CHANNEL_TEXT_AREA),
            eN = (0, F.qz)(t),
            eA = r.useRef(null),
            ew = r.useRef(null),
            eM = r.useRef(null),
            eR = r.useRef(null);
        null == ey || ey(ew.current);
        let { activeCommand: ek } = (0, d.cj)([v.Z], () => {
                var e, t;
                return {
                    activeCommand: (null == (e = D.commands) ? void 0 : e.enabled) ? v.Z.getActiveCommand(k.id) : null,
                    activeCommandSection: (null == (t = D.commands) ? void 0 : t.enabled)
                        ? v.Z.getActiveCommandSection(k.id)
                        : null,
                };
            }),
            {
                isLurking: eL,
                isPendingMember: eD,
                disabled: eU,
                canAttachFiles: eB,
                canEveryoneSendMessages: eH,
            } = (0, F.TE)(k, D, ek, I),
            eV = !A.dN.useSetting() && !(0, L.isAndroidWeb)() && null != window.ResizeObserver,
            eF = !eV || !(null == (n = D.commands) ? void 0 : n.enabled) || !G || p !== q.GI,
            eG = (0, T.Z)(),
            { fontSize: ez } = (0, d.cj)([C.Z], () => ({
                fontSize: C.Z.fontSize,
                isSubmitButtonEnabled: C.Z.isSubmitButtonEnabled,
            })),
            eW = (0, d.e7)([M.Z], () => M.Z.isEnabled()),
            eq = (0, N.NE)(k);
        (0, F.hJ)(D, eU);
        let { eventEmitter: eY, handleEditorSelectionChanged: eK } = (0, F.x2)(ew, p, h),
            eX = r.useCallback(
                (e) => {
                    let t = (e) => {
                            if (e.shouldClear) {
                                var t;
                                (0, O.c)(k.id, {
                                    title: "",
                                    heroFile: null,
                                }),
                                    null == (t = ew.current) || t.blur();
                            }
                            return e;
                        },
                        n = [],
                        i =
                            eS.length > 0
                                ? eS
                                : e.value.length > 0
                                  ? e.value.slice(0, 80)
                                  : X.intl.string(X.t["7Xm5QE"]);
                    if (null == eP)
                        return ed(
                            ee($({}, e), {
                                announcementSendOptions: {
                                    createThread: eq && eZ,
                                    threadName: i,
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
                    let r = R.Z.getUploads(k.id, w.d.ChannelMessage),
                        l = r.filter((e) => (e.isImage || e.isVideo) && e.filename !== (null == eP ? void 0 : eP.name)),
                        a = r.filter((e) => !e.isImage && !e.isVideo && e.filename !== (null == eP ? void 0 : eP.name)),
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
                                    threadName: i,
                                    publish: eI,
                                },
                            }),
                        ).then(t)
                    );
                },
                [ed, eS, eP, k.id, eZ, eI, eq],
            ),
            { submit: eJ, handleSubmit: eQ } = (0, F.bL)(eX, D, ew, eR, k.id),
            { autocompleteRef: e$, handleMaybeShowAutocomplete: e0, handleHideAutocomplete: e1 } = (0, F.jx)(),
            e2 = r.useCallback(() => {
                var e;
                return null == eR || null == (e = eR.current) ? void 0 : e.hide();
            }, []),
            { editorHeight: e3, handleResize: e8 } = (0, F.oR)(ei),
            {
                handleTab: e4,
                handleEnter: e7,
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
            })(e$, eA, eF),
            { expressionPickerView: e5, shouldHideExpressionPicker: e9, handleOuterClick: te } = (0, F.iV)(D, ew),
            tt = (0, F.aT)(p),
            { currentAutocompleteType: tn, handleAutocompleteVisibilityChange: ti } = (0, F.vB)(),
            tr = (0, F.ae)(ew),
            tl = (0, F.Sg)(eJ, D, ew),
            ta = (0, F.O1)({
                editorRef: ew,
                disabled: eU,
                textValue: p,
                channelId: k.id,
                chatInputType: D,
                submit: eX,
            });
        (0, U.S)(eY, k.guild_id, k.id);
        let [to, ts] = r.useState(!1),
            tc = G || to || p.length > 0 || null != eP || eS.length > 0,
            { editorHeaderHeight: tu, paddingTop: td } = (0, f.q_F)({
                editorHeaderHeight: 122 * !!tc,
                paddingTop: 16 * !!tc,
                config: {
                    tension: 120,
                    friction: 15,
                    clamp: !0,
                },
            }),
            tp = r.useRef(null),
            [th, tf] = r.useState(!1),
            tm = r.useRef(!1),
            tg = r.useCallback(() => {
                tm.current = !0;
                let e = setTimeout(() => {
                    tm.current && tf(!0);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tb = r.useCallback(() => {
                tm.current = !1;
                let e = setTimeout(() => {
                    tm.current || tf(!1);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tC = r.useCallback(() => {
                var e;
                if (null == eP) return;
                let t =
                    null == (e = R.Z.getUploads(k.id, D.drafts.type).find((e) => e.filename === eP.name))
                        ? void 0
                        : e.id;
                null != t && m.Z.remove(k.id, t, w.d.ChannelMessage), (0, O.c)(k.id, { heroFile: null });
            }, [k.id, eP, D.drafts.type]);
        return (0, i.jsx)(j.f6, {
            value: eY,
            children: (0, i.jsxs)(_.Gt, {
                value: eT,
                children: [
                    (0, i.jsxs)("div", {
                        ref: eN,
                        className: a()(b, Q.channelTextArea),
                        onMouseDown: te,
                        children: [
                            (0, i.jsx)("div", {
                                ref: eM,
                                onScroll: e2,
                                className: a()(Q.announcementScrollableContainer, { [Q.themedBackground]: !ex }),
                                children: (0, i.jsxs)("div", {
                                    className: a()(Q.inner, J.inner),
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: J.body,
                                            children: [
                                                (0, i.jsxs)(c.animated.div, {
                                                    className: J.headerInput,
                                                    style: {
                                                        height: tu,
                                                        paddingTop: td,
                                                    },
                                                    children: [
                                                        null != eP
                                                            ? (0, i.jsx)(el, {
                                                                  file: eP,
                                                                  onRemoveHeroImage: tC,
                                                              })
                                                            : null,
                                                        null != eP
                                                            ? null
                                                            : (0, i.jsx)(eo, {
                                                                  channel: k,
                                                                  onImageUploaded: (e) =>
                                                                      (0, O.c)(k.id, { heroFile: e }),
                                                                  onFocus: () => ts(!0),
                                                              }),
                                                        (0, i.jsx)("input", {
                                                            onFocus: () => ts(!0),
                                                            onBlur: () => ts(!1),
                                                            maxLength: 140,
                                                            className: J.titleInput,
                                                            placeholder: X.intl.string(X.t.Z8fYjI),
                                                            value: eS,
                                                            onChange: (e) => (0, O.c)(k.id, { title: e.target.value }),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)("div", {
                                                    className: J.inputWrapper,
                                                    children: (0, i.jsx)(f.tEY, {
                                                        ringTarget: eN,
                                                        ringClassName: Q.focusRing,
                                                        children: (0, i.jsx)(H.Z, {
                                                            ref: ew,
                                                            id: E,
                                                            focused: G,
                                                            useSlate: eV,
                                                            textValue: p,
                                                            richValue: h,
                                                            disabled: eU,
                                                            placeholder: eg,
                                                            required: P,
                                                            accessibilityLabel: Z,
                                                            isPreviewing: (eL || eD) && eH,
                                                            channel: k,
                                                            type: B.Ie.CREATE_ANNOUNCEMENT_POST,
                                                            canPasteFiles: eB,
                                                            uploadPromptCharacterCount: W.en1,
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
                                                            fontSize: ez,
                                                            spellcheckEnabled: eW,
                                                            canOnlyUseTextCommands: !1,
                                                            isEditorIdle: tt,
                                                            currentAutocompleteType: tn,
                                                            "aria-labelledby": eC,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)("div", {
                                            className: J.attachmentsContainer,
                                            children: (0, i.jsx)(z.Z, {
                                                channelId: k.id,
                                                type: D,
                                                canAttachFiles: eB,
                                                ignoreFile: null == eP ? void 0 : eP.name,
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
                                            (0, i.jsx)(ea, { channel: k }),
                                            (0, i.jsx)(V.Z, {
                                                type: B.Ie.CREATE_ANNOUNCEMENT_POST,
                                                disabled: eU,
                                                channel: k,
                                                handleSubmit: eQ,
                                                isEmpty: 0 === p.trim().length,
                                                showAllButtons: !0,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)("div", {
                                        className: J.footerPart,
                                        children: (0, i.jsx)("div", {
                                            ref: tp,
                                            className: J.sendButtonContainer,
                                            onMouseEnter: tg,
                                            onMouseLeave: tb,
                                            children: (0, i.jsx)(f.yRy, {
                                                targetElementRef: tp,
                                                renderPopout: () =>
                                                    (0, i.jsx)(er, {
                                                        channelId: k.id,
                                                        canCreateThread: eq,
                                                    }),
                                                shouldShow: th,
                                                autoInvert: !0,
                                                nudgeAlignIntoViewport: !0,
                                                position: "top",
                                                align: "right",
                                                children: (e) =>
                                                    (0, i.jsx)(
                                                        f.zxk,
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
                                                            "aria-label": X.intl.string(X.t.TXNS7e),
                                                            innerClassName: J.sendButton,
                                                            text: (0, i.jsxs)("div", {
                                                                className: J.sendButtonContents,
                                                                children: [
                                                                    (0, i.jsx)(f.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "always-white",
                                                                        children: X.intl.string(X.t.TXNS7e),
                                                                    }),
                                                                    (0, i.jsxs)("div", {
                                                                        className: J.sendButtonIcons,
                                                                        children: [
                                                                            (0, i.jsx)(f.Uuj, {
                                                                                size: "xs",
                                                                                color: "white",
                                                                            }),
                                                                            eq && eZ
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
                            (0, i.jsx)(x.Z, {
                                targetRef: eN,
                                ref: e$,
                                channel: k,
                                canMentionRoles: eh,
                                canMentionChannels: ef,
                                useNewSlashCommands: eV,
                                canOnlyUseTextCommands: !1,
                                canSendStickers: !0,
                                textValue: p,
                                focused: G,
                                isEditorIdle: tt,
                                expressionPickerView: e5,
                                type: D,
                                editorRef: ew,
                                onSendMessage: eJ,
                                onSendSticker: () => {},
                                onVisibilityChange: ti,
                                editorHeight: e3,
                                setValue: (e, t) => (null == K ? void 0 : K(null, e, t)),
                                position: e_,
                            }),
                            ev,
                        ],
                    }),
                    e9
                        ? null
                        : (0, i.jsx)(S.Z, {
                              positionTargetRef: eN,
                              type: D,
                              onSelectGIF: tl,
                              onSelectEmoji: tr,
                              onSelectSticker: ta,
                              channel: k,
                              closeOnModalOuterClick: eO,
                              parentModalKey: ej,
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
    return (0, i.jsxs)(f.v2r, {
        "aria-label": X.intl.string(X.t["9WnJys"]),
        navId: "send-announcement-options",
        onClose: W.dG4,
        onSelect: W.dG4,
        children: [
            (0, i.jsx)(f.S89, {
                id: "create-thread",
                label: X.intl.string(X.t.rBIGBA),
                checked: l && o,
                disabled: !l,
                action: () => {
                    (0, O.c)(r, { createThread: !o });
                },
            }),
            (0, i.jsx)(f.S89, {
                id: "send-and-publish",
                label: X.intl.string(X.t["MFGE5+"]),
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
                      alt: X.intl.string(X.t["2ePvR0"]),
                      className: J.heroImage,
                  }),
                  o
                      ? (0, i.jsx)(E.ZP, {
                            className: J.heroOverlay,
                            children: (0, i.jsx)(G.Z, {
                                tooltip: X.intl.string(X.t.VjC219),
                                onClick: n,
                                dangerous: !0,
                                children: (0, i.jsx)(f.XHJ, {}),
                            }),
                        })
                      : null,
              ],
          });
}
function ea(e) {
    let { channel: t } = e;
    return (0, i.jsx)(P.Z, {
        "aria-label": X.intl.string(X.t["/IBYAg"]),
        className: J.attachButton,
        size: "icon",
        color: "transparent",
        look: "blank",
        onChange: (e) => {
            (0, D.d)(e.currentTarget.files, t, w.d.ChannelMessage, {
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
function eo(e) {
    let { channel: t, onImageUploaded: n, onFocus: l } = e,
        a = r.useRef(null),
        o = async (e, i) => {
            let r = await (0, k.Bo)(e, i.name, i.type),
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
            text: X.intl.string(X.t["/IBYAg"]),
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
                        maxFileSizeBytes: K.B,
                        onFileSizeError: () => (0, I.Z)(K.B),
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
