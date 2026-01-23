n.d(t, {
    A: () => ee,
}),
    n(321073),
    n(228524),
    n(896048),
    n(733351),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    c = n(108531),
    u = n(835245),
    d = n(311907),
    p = n(827734),
    h = n(990078),
    f = n(397927),
    g = n(608299),
    m = n(155718),
    b = n(565150),
    A = n(775602),
    y = n(793574),
    _ = n(688810),
    O = n(861382),
    j = n(875163),
    v = n(224805),
    x = n(598071),
    E = n(101555),
    C = n(834755),
    S = n(703007),
    I = n(2553),
    N = n(946274),
    T = n(135621),
    P = n(406704),
    w = n(253932),
    R = n(31717),
    D = n(638128),
    M = n(522602),
    L = n(515718),
    k = n(723702),
    G = n(518960),
    U = n(486319),
    B = n(355622),
    V = n(415409),
    F = n(147025),
    H = n(133343),
    K = n(851023),
    W = n(171593),
    z = n(652215);
n(827669), n(294920);
var Y = n(478644),
    q = n(985018),
    X = n(401376),
    J = n(111314);

function Q(e) {
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

function Z(e, t) {
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

function $(e, t, n) {
    let r = e.startsWith("attachment://"),
        l = e;
    if (r) {
        let t = e.slice(13);
        l = n ? "attachment://SPOILER_".concat(t) : e;
    }
    return {
        media: {
            url: l,
            proxyUrl: l,
            loadingState: m.TD.UNKNOWN,
            flags: 0,
        },
        description: null != t ? t : void 0,
        spoiler: n,
    };
}
let ee = l.memo(
    l.forwardRef(function (e, t) {
        var n, i, a, u;
        let p,
            {
                textValue: h,
                richValue: b,
                className: E,
                id: S,
                required: I,
                disabled: N,
                accessibilityLabel: L,
                channel: G,
                type: K,
                focused: Y,
                onChange: ee,
                onResize: ei,
                onBlur: es,
                onFocus: ea,
                onKeyDown: eo,
                onSubmit: ec,
                promptToUpload: eu,
                canMentionRoles: ed,
                canMentionChannels: ep,
                maxCharacterCount: eh,
                placeholder: ef,
                "aria-describedby": eg,
                "aria-labelledby": em,
                setEditorRef: eb,
                autoCompletePosition: eA,
                disableThemedBackground: ey = !1,
                emojiPickerCloseOnModalOuterClick: e_,
                parentModalKey: eO,
            } = e,
            ej = v.A.useField("channelDrafts")[G.id],
            ev = null != (n = null == ej ? void 0 : ej.title) ? n : "",
            ex = null == ej ? void 0 : ej.heroFile,
            eE = null == (i = null == ej ? void 0 : ej.publish) || i,
            eC = null == (a = null == ej ? void 0 : ej.createThread) || a;
        o()(null != K, "chat input type must be set");
        let { analyticsLocations: eS } = (0, _.Ay)(y.A.CHANNEL_TEXT_AREA),
            eI = (0, H.L0)(t),
            eN = l.useRef(null),
            eT = l.useRef(null),
            eP = l.useRef(null),
            ew = l.useRef(null);
        null == eb || eb(eT.current);
        let { activeCommand: eR } = (0, d.cf)([O.A], () => {
                var e, t;
                return {
                    activeCommand: (null == (e = K.commands) ? void 0 : e.enabled) ? O.A.getActiveCommand(G.id) : null,
                    activeCommandSection: (null == (t = K.commands) ? void 0 : t.enabled)
                        ? O.A.getActiveCommandSection(G.id)
                        : null,
                };
            }),
            {
                isLurking: eD,
                isPendingMember: eM,
                disabled: eL,
                canAttachFiles: ek,
                canEveryoneSendMessages: eG,
            } = (0, H.Sk)(G, K, eR, N),
            eU = !w.D_.useSetting() && !(0, k.isAndroidWeb)() && null != window.ResizeObserver,
            eB = !eU || !(null == (u = K.commands) ? void 0 : u.enabled) || !Y || "/" !== h,
            eV = (0, T.A)(),
            { fontSize: eF } = (0, d.cf)([A.A], () => ({
                fontSize: A.A.fontSize,
                isSubmitButtonEnabled: A.A.isSubmitButtonEnabled,
            })),
            eH = (0, d.bG)([D.A], () => D.A.isEnabled()),
            eK = (0, P.n)(G);
        (0, H.N_)(K, eL, G.id);
        let { eventEmitter: eW, handleEditorSelectionChanged: ez } = (0, H.ml)(eT, h, b),
            eY = l.useCallback(
                (e) => {
                    let t = (e) => {
                            if (e.shouldClear) {
                                var t;
                                (0, v.x)(G.id, {
                                    title: "",
                                    heroFile: null,
                                }),
                                    null == (t = eT.current) || t.blur();
                            }
                            return e;
                        },
                        n = [],
                        r =
                            ev.length > 0
                                ? ev
                                : e.value.length > 0
                                  ? e.value.slice(0, 80)
                                  : q.intl.string(q.t["7Xm5QI"]);
                    if (null == ex)
                        return ec(
                            Z(Q({}, e), {
                                announcementSendOptions: {
                                    createThread: eK && eC,
                                    threadName: r,
                                    publish: eE,
                                },
                            }),
                        ).then(t);
                    n.push({
                        type: m.I5.MEDIA_GALLERY,
                        items: [$("attachment://".concat(ex.name), null, !1)],
                        id: "".concat(82733),
                    }),
                        e.value.length > 0 &&
                            n.push({
                                type: m.I5.TEXT_DISPLAY,
                                content: e.value,
                                id: "".concat(82744),
                            });
                    let l = M.A.getUploads(G.id, R.C.ChannelMessage),
                        i = l.filter((e) => (e.isImage || e.isVideo) && e.filename !== (null == ex ? void 0 : ex.name)),
                        s = l.filter((e) => !e.isImage && !e.isVideo && e.filename !== (null == ex ? void 0 : ex.name)),
                        a = i.map((e) => $("attachment://".concat(e.filename), e.description, e.spoiler));
                    return (
                        a.length > 0 &&
                            n.push({
                                type: m.I5.MEDIA_GALLERY,
                                items: a,
                                id: "".concat(82755),
                            }),
                        s.forEach((e, t) => {
                            n.push({
                                type: m.I5.FILE,
                                file: $("attachment://".concat(e.filename), e.description, e.spoiler).media,
                                id: "".concat(82766 + t),
                                spoiler: e.spoiler,
                                name: null,
                                size: null,
                            });
                        }),
                        ec(
                            Z(Q({}, e), {
                                components: n,
                                announcementSendOptions: {
                                    createThread: eK && eC,
                                    threadName: r,
                                    publish: eE,
                                },
                            }),
                        ).then(t)
                    );
                },
                [ec, ev, ex, G.id, eC, eE, eK],
            ),
            { submit: eq, handleSubmit: eX } = (0, H.Zx)(eY, K, eT, ew, G.id),
            { autocompleteRef: eJ, handleMaybeShowAutocomplete: eQ, handleHideAutocomplete: eZ } = (0, H.v7)(),
            e$ = l.useCallback(() => {
                var e;
                return null == ew || null == (e = ew.current) ? void 0 : e.hide();
            }, []),
            { editorHeight: e0, handleResize: e1 } = (0, H.ck)(ei),
            {
                handleTab: e9,
                handleEnter: e7,
                handleMoveSelection: e2,
            } = ((p = l.useCallback(() => {
                var e, t;
                return (
                    !!(!eB && (null == (e = eN.current) ? void 0 : e.onTabOrEnter(!1))) ||
                    (null == (t = eJ.current) ? void 0 : t.onTabOrEnter(!1)) ||
                    !1
                );
            }, [eB])),
            {
                handleTab: p,
                handleEnter: l.useCallback(() => {
                    var e, t;
                    return (
                        !!(!eB && (null == (e = eN.current) ? void 0 : e.onTabOrEnter(!0))) ||
                        (null == (t = eJ.current) ? void 0 : t.onTabOrEnter(!1)) ||
                        !1
                    );
                }, [eB]),
                handleMoveSelection: l.useCallback(
                    (e) => {
                        var t, n;
                        return (
                            !!(!eB && (null == (t = eN.current) ? void 0 : t.onMoveSelection(e))) ||
                            (null == (n = eJ.current) ? void 0 : n.onMoveSelection(e)) ||
                            !1
                        );
                    },
                    [eB],
                ),
            }),
            { expressionPickerView: e6, shouldHideExpressionPicker: e3, handleOuterClick: e5 } = (0, H.MD)(K, eT, G.id),
            e8 = (0, H.BX)(h),
            { currentAutocompleteType: e4, handleAutocompleteVisibilityChange: te } = (0, H.uW)(K, G.id),
            tt = (0, H.NO)(eT),
            tn = (0, H.Vu)(eq, K, eT),
            tr = (0, H.C)({
                editorRef: eT,
                disabled: eL,
                textValue: h,
                channelId: G.id,
                chatInputType: K,
                submit: eY,
            });
        (0, U.R)(eW, G.guild_id, G.id);
        let [tl, ti] = l.useState(!1),
            ts = Y || tl || h.length > 0 || null != ex || ev.length > 0,
            { editorHeaderHeight: ta, paddingTop: to } = (0, f.zhh)({
                editorHeaderHeight: 122 * !!ts,
                paddingTop: 16 * !!ts,
                config: {
                    tension: 120,
                    friction: 15,
                    clamp: !0,
                },
            }),
            tc = l.useRef(null),
            [tu, td] = l.useState(!1),
            tp = l.useRef(!1),
            th = l.useCallback(() => {
                tp.current = !0;
                let e = setTimeout(() => {
                    tp.current && td(!0);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tf = l.useCallback(() => {
                tp.current = !1;
                let e = setTimeout(() => {
                    tp.current || td(!1);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tg = l.useCallback(() => {
                var e;
                if (null == ex) return;
                let t =
                    null == (e = M.A.getUploads(G.id, K.drafts.type).find((e) => e.filename === ex.name))
                        ? void 0
                        : e.id;
                null != t && g.A.remove(G.id, t, R.C.ChannelMessage),
                    (0, v.x)(G.id, {
                        heroFile: null,
                    });
            }, [G.id, ex, K.drafts.type]);
        return (0, r.jsx)(x.Sv, {
            value: eW,
            children: (0, r.jsxs)(_.f5, {
                value: eS,
                children: [
                    (0, r.jsxs)("div", {
                        ref: eI,
                        className: s()(E, J.gM),
                        onMouseDown: e5,
                        children: [
                            (0, r.jsx)("div", {
                                ref: eP,
                                onScroll: e$,
                                className: s()(J.Ui, {
                                    [J.k6]: !ey,
                                }),
                                children: (0, r.jsxs)("div", {
                                    className: s()(J.vW, X.vW),
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: X.rf,
                                            children: [
                                                (0, r.jsxs)(c.animated.div, {
                                                    className: X.ov,
                                                    style: {
                                                        height: ta,
                                                        paddingTop: to,
                                                    },
                                                    children: [
                                                        null != ex
                                                            ? (0, r.jsx)(en, {
                                                                  file: ex,
                                                                  onRemoveHeroImage: tg,
                                                              })
                                                            : null,
                                                        null != ex
                                                            ? null
                                                            : (0, r.jsx)(el, {
                                                                  channel: G,
                                                                  onImageUploaded: (e) =>
                                                                      (0, v.x)(G.id, {
                                                                          heroFile: e,
                                                                      }),
                                                                  onFocus: () => ti(!0),
                                                              }),
                                                        (0, r.jsx)("input", {
                                                            onFocus: () => ti(!0),
                                                            onBlur: () => ti(!1),
                                                            maxLength: 140,
                                                            className: X.hz,
                                                            placeholder: q.intl.string(q.t.Z8fYjO),
                                                            value: ev,
                                                            onChange: (e) =>
                                                                (0, v.x)(G.id, {
                                                                    title: e.target.value,
                                                                }),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)("div", {
                                                    className: X.I6,
                                                    children: (0, r.jsx)(f.vN3, {
                                                        ringTarget: eI,
                                                        ringClassName: J.Rg,
                                                        children: (0, r.jsx)(V.A, {
                                                            ref: eT,
                                                            id: S,
                                                            focused: Y,
                                                            useSlate: eU,
                                                            textValue: h,
                                                            richValue: b,
                                                            disabled: eL,
                                                            placeholder: ef,
                                                            required: I,
                                                            accessibilityLabel: L,
                                                            isPreviewing: (eD || eM) && eG,
                                                            channel: G,
                                                            type: B.oU.CREATE_ANNOUNCEMENT_POST,
                                                            canPasteFiles: ek,
                                                            uploadPromptCharacterCount: z.CS1,
                                                            maxCharacterCount: null != eh ? eh : eV,
                                                            allowNewLines: !0,
                                                            "aria-describedby": eg,
                                                            onChange: ee,
                                                            onResize: e1,
                                                            onBlur: es,
                                                            onFocus: ea,
                                                            onKeyDown: eo,
                                                            onSubmit: eq,
                                                            onTab: e9,
                                                            onEnter: e7,
                                                            onMoveSelection: e2,
                                                            onSelectionChanged: ez,
                                                            onMaybeShowAutocomplete: eQ,
                                                            onHideAutocomplete: eZ,
                                                            promptToUpload: eu,
                                                            fontSize: eF,
                                                            spellcheckEnabled: eH,
                                                            canOnlyUseTextCommands: !1,
                                                            isEditorIdle: e8,
                                                            currentAutocompleteType: e4,
                                                            "aria-labelledby": em,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            className: X.KK,
                                            children: (0, r.jsx)(W.A, {
                                                channelId: G.id,
                                                type: K,
                                                canAttachFiles: ek,
                                                ignoreFile: null == ex ? void 0 : ex.name,
                                                smallAttachments: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: X.yF,
                            }),
                            (0, r.jsxs)("div", {
                                className: X.qr,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: X.j4,
                                        children: [
                                            (0, r.jsx)(er, {
                                                channel: G,
                                            }),
                                            (0, r.jsx)(F.A, {
                                                type: B.oU.CREATE_ANNOUNCEMENT_POST,
                                                disabled: eL,
                                                channel: G,
                                                handleSubmit: eX,
                                                isEmpty: 0 === h.trim().length,
                                                showAllButtons: !0,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: X.j4,
                                        children: (0, r.jsx)("div", {
                                            ref: tc,
                                            className: X.Qo,
                                            onMouseEnter: th,
                                            onMouseLeave: tf,
                                            children: (0, r.jsx)(f.YNO, {
                                                targetElementRef: tc,
                                                renderPopout: () =>
                                                    (0, r.jsx)(et, {
                                                        channelId: G.id,
                                                        canCreateThread: eK,
                                                    }),
                                                shouldShow: tu,
                                                autoInvert: !0,
                                                nudgeAlignIntoViewport: !0,
                                                position: "top",
                                                align: "right",
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        f.Button,
                                                        Z(Q({}, e), {
                                                            onClick: () => {
                                                                eq(
                                                                    ""
                                                                        .concat(
                                                                            ev.length > 0 ? "# ".concat(ev, "\n") : "",
                                                                        )
                                                                        .concat(h),
                                                                );
                                                            },
                                                            disabled: 0 === h.length && 0 === ev.length,
                                                            size: "sm",
                                                            "aria-label": q.intl.string(q.t.TXNS7S),
                                                            innerClassName: X.jo,
                                                            text: (0, r.jsxs)("div", {
                                                                className: X.f9,
                                                                children: [
                                                                    (0, r.jsx)(f.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "always-white",
                                                                        children: q.intl.string(q.t.TXNS7S),
                                                                    }),
                                                                    (0, r.jsxs)("div", {
                                                                        className: X.pj,
                                                                        children: [
                                                                            (0, r.jsx)(f.lX7, {
                                                                                size: "xs",
                                                                                color: "white",
                                                                            }),
                                                                            eK && eC
                                                                                ? (0, r.jsx)(f.ysw, {
                                                                                      size: "xxs",
                                                                                      color: "white",
                                                                                      className: X.Q5,
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
                            (0, r.jsx)(j.A, {
                                targetRef: eI,
                                ref: eJ,
                                channel: G,
                                canMentionRoles: ed,
                                canMentionChannels: ep,
                                useNewSlashCommands: eU,
                                canOnlyUseTextCommands: !1,
                                canSendStickers: !0,
                                textValue: h,
                                focused: Y,
                                isEditorIdle: e8,
                                expressionPickerView: e6,
                                type: K,
                                editorRef: eT,
                                onSendMessage: eq,
                                onSendSticker: () => {},
                                onVisibilityChange: te,
                                editorHeight: e0,
                                setValue: (e, t) => (null == ee ? void 0 : ee(null, e, t)),
                                position: eA,
                            }),
                        ],
                    }),
                    e3
                        ? null
                        : (0, r.jsx)(C.A, {
                              positionTargetRef: eI,
                              type: K,
                              onSelectGIF: tn,
                              onSelectEmoji: tt,
                              onSelectSticker: tr,
                              channel: G,
                              closeOnModalOuterClick: e_,
                              parentModalKey: eO,
                              position: "top",
                              align: "right",
                              positionLayerClassName: J.BD,
                          }),
                ],
            }),
        });
    }),
);

function et(e) {
    var t, n;
    let { channelId: l, canCreateThread: i } = e,
        s = v.A.useField("channelDrafts")[l],
        a = null == (t = null == s ? void 0 : s.createThread) || t,
        o = null == (n = null == s ? void 0 : s.publish) || n;
    return (0, r.jsxs)(f.W1t, {
        "data-menu-migration-ready": !0,
        "aria-label": q.intl.string(q.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: z.tEg,
        onSelect: z.tEg,
        children: [
            (0, r.jsx)(f.sLh, {
                id: "create-thread",
                label: q.intl.string(q.t.rBIGBL),
                checked: i && a,
                disabled: !i,
                action: () => {
                    (0, v.x)(l, {
                        createThread: !a,
                    });
                },
            }),
            (0, r.jsx)(f.sLh, {
                id: "send-and-publish",
                label: q.intl.string(q.t.MFGE51),
                checked: o,
                action: () => {
                    (0, v.x)(l, {
                        publish: !o,
                    });
                },
            }),
        ],
    });
}

function en(e) {
    let { file: t, onRemoveHeroImage: n } = e,
        [i, s] = l.useState();
    l.useEffect(() => {
        if (null == t || !1 === ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(t.type)) return;
        let e = URL.createObjectURL(t);
        return (
            s(e),
            () => {
                s(void 0), URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let [a, o] = l.useState(!1),
        c = l.useCallback(() => {
            o(!0);
        }, []),
        u = l.useCallback(() => {
            o(!1);
        }, []);
    return null == i
        ? null
        : (0, r.jsxs)("div", {
              onMouseEnter: c,
              onMouseLeave: u,
              className: X.Lb,
              "aria-hidden": !0,
              children: [
                  (0, r.jsx)("img", {
                      src: i,
                      alt: q.intl.string(q.t["2ePvR8"]),
                      className: X.c8,
                  }),
                  a
                      ? (0, r.jsx)(E.Ay, {
                            className: X.jM,
                            children: (0, r.jsx)(K.A, {
                                tooltip: q.intl.string(q.t.VjC21x),
                                onClick: n,
                                dangerous: !0,
                                children: (0, r.jsx)(f.ucK, {}),
                            }),
                        })
                      : null,
              ],
          });
}

function er(e) {
    let { channel: t } = e;
    return (0, r.jsx)(S.A, {
        "aria-label": q.intl.string(q.t["/IBYAq"]),
        className: X.g$,
        size: "icon",
        color: "transparent",
        look: "blank",
        onChange: (e) => {
            (0, G.R)(e.currentTarget.files, t, R.C.ChannelMessage, {
                requireConfirm: !0,
                origin: "file_picker",
            }),
                (e.currentTarget.value = null);
        },
        children: (0, r.jsx)(f.H8$, {
            size: "custom",
            width: 20,
            height: 20,
            color: p.A.colors.INTERACTIVE_TEXT_DEFAULT,
        }),
    });
}

function el(e) {
    let { channel: t, onImageUploaded: n, onFocus: i } = e,
        s = l.useRef(null),
        a = async (e, r) => {
            let l = await (0, L.bX)(e, r.name, r.type),
                i = {
                    id: (0, u.A)(),
                    file: l,
                    platform: b.xz.WEB,
                    isThumbnail: !1,
                    origin: "file_picker",
                };
            g.A.addFile({
                file: i,
                channelId: t.id,
                draftType: R.C.ChannelMessage,
            }),
                n(l);
        },
        [o, c] = l.useState(!1),
        d = l.useCallback(() => {
            c(!0);
        }, []),
        m = l.useCallback(() => {
            c(!1);
        }, []);
    return (0, r.jsx)("div", {
        className: X.qN,
        children: (0, r.jsx)(h.m, {
            asContainer: !0,
            text: q.intl.string(q.t["/IBYAq"]),
            position: "top",
            children: (0, r.jsxs)(f.DUT, {
                className: X.qN,
                onMouseOver: d,
                onMouseOut: m,
                onFocus: i,
                children: [
                    (0, r.jsx)(N.Ay, {
                        ref: s,
                        onChange: a,
                        "aria-hidden": !0,
                        tabIndex: -1,
                        maxFileSizeBytes: Y.j,
                        onFileSizeError: () => (0, I.A)(Y.j),
                    }),
                    (0, r.jsx)(f.XGR, {
                        size: "md",
                        color: o ? p.A.colors.INTERACTIVE_TEXT_ACTIVE : p.A.colors.INTERACTIVE_TEXT_DEFAULT,
                    }),
                ],
            }),
        }),
    });
}
