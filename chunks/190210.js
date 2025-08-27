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
    c = n(202841),
    u = n(772848),
    d = n(442837),
    p = n(692547),
    h = n(28664),
    f = n(481060),
    m = n(166459),
    g = n(911969),
    b = n(476326),
    y = n(607070),
    _ = n(100527),
    C = n(906732),
    v = n(998698),
    x = n(326133),
    O = n(507366),
    j = n(570220),
    E = n(951394),
    S = n(805680),
    I = n(374794),
    P = n(884858),
    Z = n(813197),
    T = n(849522),
    N = n(665906),
    A = n(695346),
    w = n(703558),
    R = n(398327),
    M = n(117530),
    D = n(956664),
    L = n(358085),
    k = n(127654),
    U = n(746877),
    B = n(541716),
    F = n(667829),
    H = n(258696),
    G = n(893718),
    V = n(273031),
    z = n(303628),
    W = n(981631),
    q = n(761652),
    Y = n(224837),
    K = n(200299),
    X = n(388032),
    Q = n(593514),
    J = n(564355);
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
                richValue: h,
                className: b,
                id: E,
                required: I,
                disabled: P,
                accessibilityLabel: Z,
                channel: D,
                type: k,
                focused: V,
                onChange: K,
                onResize: er,
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
                "aria-labelledby": ey,
                setEditorRef: e_,
                autoCompletePosition: eC,
                children: ev,
                disableThemedBackground: ex = !1,
                emojiPickerCloseOnModalOuterClick: eO,
                parentModalKey: ej,
            } = e,
            eE = O.Z.useField("channelDrafts")[D.id],
            eS = null != (l = null == eE ? void 0 : eE.title) ? l : "",
            eI = null == eE ? void 0 : eE.heroFile,
            eP = null == (o = null == eE ? void 0 : eE.publish) || o,
            eZ = null == (u = null == eE ? void 0 : eE.createThread) || u;
        s()(null != k, "chat input type must be set");
        let { analyticsLocations: eT } = (0, C.ZP)(_.Z.CHANNEL_TEXT_AREA),
            eN = (0, G.qz)(t),
            eA = i.useRef(null),
            ew = i.useRef(null),
            eR = i.useRef(null),
            eM = i.useRef(null);
        null == e_ || e_(ew.current);
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
            } = (0, G.TE)(D, k, eD, P),
            eH = !A.dN.useSetting() && !(0, L.isAndroidWeb)() && null != window.ResizeObserver,
            eG = !eH || !(null == (n = k.commands) ? void 0 : n.enabled) || !V || p !== q.GI,
            eV = (0, T.Z)(),
            { fontSize: ez } = (0, d.cj)([y.Z], () => ({
                fontSize: y.Z.fontSize,
                isSubmitButtonEnabled: y.Z.isSubmitButtonEnabled,
            })),
            eW = (0, d.e7)([R.Z], () => R.Z.isEnabled()),
            eq = (0, N.NE)(D);
        (0, G.hJ)(k, eU);
        let { eventEmitter: eY, handleEditorSelectionChanged: eK } = (0, G.x2)(ew, p, h),
            eX = i.useCallback(
                (e) => {
                    let t = (e) => {
                            if (e.shouldClear) {
                                var t;
                                (0, O.c)(D.id, {
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
                                  : X.intl.string(X.t["7Xm5QE"]);
                    if (null == eI)
                        return ed(
                            ee($({}, e), {
                                announcementSendOptions: {
                                    createThread: eq && eZ,
                                    threadName: r,
                                    publish: eP,
                                },
                            }),
                        ).then(t);
                    n.push({
                        type: g.re.MEDIA_GALLERY,
                        items: [et("attachment://".concat(en(eI.name)), !1)],
                        id: "".concat(Y.Vm),
                    }),
                        e.value.length > 0 &&
                            n.push({
                                type: g.re.TEXT_DISPLAY,
                                content: e.value,
                                id: "".concat(Y.Kb),
                            });
                    let i = M.Z.getUploads(D.id, w.d.ChannelMessage),
                        l = i.filter((e) => (e.isImage || e.isVideo) && e.filename !== (null == eI ? void 0 : eI.name)),
                        a = i.filter((e) => !e.isImage && !e.isVideo && e.filename !== (null == eI ? void 0 : eI.name)),
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
                                    publish: eP,
                                },
                            }),
                        ).then(t)
                    );
                },
                [ed, eS, eI, D.id, eZ, eP, eq],
            ),
            { submit: eQ, handleSubmit: eJ } = (0, G.bL)(eX, k, ew, eM, D.id),
            { autocompleteRef: e$, handleMaybeShowAutocomplete: e0, handleHideAutocomplete: e1 } = (0, G.jx)(),
            e2 = i.useCallback(() => {
                var e;
                return null == eM || null == (e = eM.current) ? void 0 : e.hide();
            }, []),
            { editorHeight: e8, handleResize: e3 } = (0, G.oR)(er),
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
            })(e$, eA, eG),
            {
                expressionPickerView: e5,
                shouldHideExpressionPicker: e9,
                handleAutocompleteVisibilityChange: te,
                handleOuterClick: tt,
            } = (0, G.iV)(k, eY, ew),
            tn = (0, G.ae)(ew),
            tr = (0, G.Sg)(eQ, k, ew),
            ti = (0, G.O1)({
                editorRef: ew,
                disabled: eU,
                textValue: p,
                channelId: D.id,
                chatInputType: k,
                submit: eX,
            });
        (0, U.S)(eY, D.guild_id, D.id);
        let [tl, ta] = i.useState(!1),
            to = V || tl || p.length > 0 || null != eI || eS.length > 0,
            { editorHeaderHeight: ts, paddingTop: tc } = (0, f.q_F)({
                editorHeaderHeight: 122 * !!to,
                paddingTop: 16 * !!to,
                config: {
                    tension: 120,
                    friction: 15,
                    clamp: !0,
                },
            }),
            tu = i.useRef(null),
            [td, tp] = i.useState(!1),
            th = i.useRef(!1),
            tf = i.useCallback(() => {
                th.current = !0;
                let e = setTimeout(() => {
                    th.current && tp(!0);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tm = i.useCallback(() => {
                th.current = !1;
                let e = setTimeout(() => {
                    th.current || tp(!1);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tg = i.useCallback(() => {
                var e;
                if (null == eI) return;
                let t =
                    null == (e = M.Z.getUploads(D.id, k.drafts.type).find((e) => e.filename === eI.name))
                        ? void 0
                        : e.id;
                null != t && m.Z.remove(D.id, t, w.d.ChannelMessage), (0, O.c)(D.id, { heroFile: null });
            }, [D.id, eI, k.drafts.type]);
        return (0, r.jsx)(j.f6, {
            value: eY,
            children: (0, r.jsxs)(C.Gt, {
                value: eT,
                children: [
                    (0, r.jsxs)("div", {
                        ref: eN,
                        className: a()(b, J.channelTextArea),
                        onMouseDown: tt,
                        children: [
                            (0, r.jsx)("div", {
                                ref: eR,
                                onScroll: e2,
                                className: a()(J.announcementScrollableContainer, { [J.themedBackground]: !ex }),
                                children: (0, r.jsxs)("div", {
                                    className: a()(J.inner, Q.inner),
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: Q.body,
                                            children: [
                                                (0, r.jsxs)(c.animated.div, {
                                                    className: Q.headerInput,
                                                    style: {
                                                        height: ts,
                                                        paddingTop: tc,
                                                    },
                                                    children: [
                                                        null != eI
                                                            ? (0, r.jsx)(el, {
                                                                  file: eI,
                                                                  onRemoveHeroImage: tg,
                                                              })
                                                            : null,
                                                        null != eI
                                                            ? null
                                                            : (0, r.jsx)(eo, {
                                                                  channel: D,
                                                                  onImageUploaded: (e) =>
                                                                      (0, O.c)(D.id, { heroFile: e }),
                                                                  onFocus: () => ta(!0),
                                                              }),
                                                        (0, r.jsx)("input", {
                                                            onFocus: () => ta(!0),
                                                            onBlur: () => ta(!1),
                                                            maxLength: 140,
                                                            className: Q.titleInput,
                                                            placeholder: X.intl.string(X.t.Z8fYjI),
                                                            value: eS,
                                                            onChange: (e) => (0, O.c)(D.id, { title: e.target.value }),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)("div", {
                                                    className: Q.inputWrapper,
                                                    children: (0, r.jsx)(f.tEY, {
                                                        ringTarget: eN,
                                                        ringClassName: J.focusRing,
                                                        children: (0, r.jsx)(F.Z, {
                                                            ref: ew,
                                                            id: E,
                                                            focused: V,
                                                            useSlate: eH,
                                                            textValue: p,
                                                            richValue: h,
                                                            disabled: eU,
                                                            placeholder: eg,
                                                            required: I,
                                                            accessibilityLabel: Z,
                                                            isPreviewing: (eL || ek) && eF,
                                                            channel: D,
                                                            type: B.Ie.CREATE_ANNOUNCEMENT_POST,
                                                            canPasteFiles: eB,
                                                            uploadPromptCharacterCount: W.en1,
                                                            maxCharacterCount: null != em ? em : eV,
                                                            allowNewLines: !0,
                                                            "aria-describedby": eb,
                                                            onChange: K,
                                                            onResize: e3,
                                                            onBlur: es,
                                                            onFocus: ec,
                                                            onKeyDown: eu,
                                                            onSubmit: eQ,
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
                                                            "aria-labelledby": ey,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            className: Q.attachmentsContainer,
                                            children: (0, r.jsx)(z.Z, {
                                                channelId: D.id,
                                                type: k,
                                                canAttachFiles: eB,
                                                ignoreFile: null == eI ? void 0 : eI.name,
                                                smallAttachments: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)("div", { className: Q.divider }),
                            (0, r.jsxs)("div", {
                                className: Q.footer,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: Q.footerPart,
                                        children: [
                                            (0, r.jsx)(ea, { channel: D }),
                                            (0, r.jsx)(H.Z, {
                                                type: B.Ie.CREATE_ANNOUNCEMENT_POST,
                                                disabled: eU,
                                                channel: D,
                                                handleSubmit: eJ,
                                                isEmpty: 0 === p.trim().length,
                                                showAllButtons: !0,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: Q.footerPart,
                                        children: (0, r.jsx)("div", {
                                            ref: tu,
                                            className: Q.sendButtonContainer,
                                            onMouseEnter: tf,
                                            onMouseLeave: tm,
                                            children: (0, r.jsx)(f.yRy, {
                                                targetElementRef: tu,
                                                renderPopout: () =>
                                                    (0, r.jsx)(ei, {
                                                        channelId: D.id,
                                                        canCreateThread: eq,
                                                    }),
                                                shouldShow: td,
                                                autoInvert: !0,
                                                nudgeAlignIntoViewport: !0,
                                                position: "top",
                                                align: "right",
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        f.zxk,
                                                        ee($({}, e), {
                                                            onClick: () => {
                                                                eQ(
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
                                                            innerClassName: Q.sendButton,
                                                            text: (0, r.jsxs)("div", {
                                                                className: Q.sendButtonContents,
                                                                children: [
                                                                    (0, r.jsx)(f.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "always-white",
                                                                        children: X.intl.string(X.t.TXNS7e),
                                                                    }),
                                                                    (0, r.jsxs)("div", {
                                                                        className: Q.sendButtonIcons,
                                                                        children: [
                                                                            (0, r.jsx)(f.Uuj, {
                                                                                size: "xs",
                                                                                color: "white",
                                                                            }),
                                                                            eq && eZ
                                                                                ? (0, r.jsx)(f.or_, {
                                                                                      size: "xxs",
                                                                                      color: "white",
                                                                                      className: Q.subIcon,
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
                            (0, r.jsx)(x.Z, {
                                targetRef: eN,
                                ref: e$,
                                channel: D,
                                canMentionRoles: eh,
                                canMentionChannels: ef,
                                useNewSlashCommands: eH,
                                canOnlyUseTextCommands: !1,
                                canSendStickers: !0,
                                textValue: p,
                                focused: V,
                                expressionPickerView: e5,
                                type: k,
                                editorRef: ew,
                                onSendMessage: eQ,
                                onSendSticker: () => {},
                                onVisibilityChange: te,
                                editorHeight: e8,
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
                              onSelectGIF: tr,
                              onSelectEmoji: tn,
                              onSelectSticker: ti,
                              channel: D,
                              closeOnModalOuterClick: eO,
                              parentModalKey: ej,
                              position: "top",
                              align: "right",
                              positionLayerClassName: J.expressionPickerPositionLayer,
                          }),
                ],
            }),
        });
    }),
);
function ei(e) {
    var t, n;
    let { channelId: i, canCreateThread: l } = e,
        a = O.Z.useField("channelDrafts")[i],
        o = null == (t = null == a ? void 0 : a.createThread) || t,
        s = null == (n = null == a ? void 0 : a.publish) || n;
    return (0, r.jsxs)(f.v2r, {
        "aria-label": X.intl.string(X.t["9WnJys"]),
        navId: "send-announcement-options",
        onClose: W.dG4,
        onSelect: W.dG4,
        children: [
            (0, r.jsx)(f.S89, {
                id: "create-thread",
                label: X.intl.string(X.t.rBIGBA),
                checked: l && o,
                disabled: !l,
                action: () => {
                    (0, O.c)(i, { createThread: !o });
                },
            }),
            (0, r.jsx)(f.S89, {
                id: "send-and-publish",
                label: X.intl.string(X.t["MFGE5+"]),
                checked: s,
                action: () => {
                    (0, O.c)(i, { publish: !s });
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
              className: Q.heroImageWrapper,
              "aria-hidden": !0,
              children: [
                  (0, r.jsx)("img", {
                      src: l,
                      alt: X.intl.string(X.t["2ePvR0"]),
                      className: Q.heroImage,
                  }),
                  o
                      ? (0, r.jsx)(E.ZP, {
                            className: Q.heroOverlay,
                            children: (0, r.jsx)(V.Z, {
                                tooltip: X.intl.string(X.t.VjC219),
                                onClick: n,
                                dangerous: !0,
                                children: (0, r.jsx)(f.XHJ, {}),
                            }),
                        })
                      : null,
              ],
          });
}
function ea(e) {
    let { channel: t } = e;
    return (0, r.jsx)(I.Z, {
        "aria-label": X.intl.string(X.t["/IBYAg"]),
        className: Q.attachButton,
        size: "icon",
        color: "transparent",
        look: "blank",
        onChange: (e) => {
            (0, k.d5)(e.currentTarget.files, t, w.d.ChannelMessage, {
                requireConfirm: !0,
                origin: "file_picker",
            }),
                (e.currentTarget.value = null);
        },
        children: (0, r.jsx)(f.xD0, {
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
    return (0, r.jsx)(h.u, {
        asContainer: !0,
        text: X.intl.string(X.t["/IBYAg"]),
        position: "top",
        children: (0, r.jsxs)(f.P3F, {
            className: Q.heroImageButton,
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
                    onFileSizeError: () => (0, P.Z)(K.B),
                }),
                (0, r.jsx)(f.FmF, {
                    size: "md",
                    color: s ? p.Z.colors.INTERACTIVE_ACTIVE : p.Z.colors.INTERACTIVE_NORMAL,
                }),
            ],
        }),
    });
}
