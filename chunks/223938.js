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
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(92674),
    u = n(835245),
    d = n(311907),
    h = n(827734),
    p = n(990078),
    f = n(397927),
    m = n(608299),
    g = n(155718),
    A = n(565150),
    b = n(775602),
    _ = n(793574),
    y = n(688810),
    v = n(861382),
    E = n(875163),
    O = n(224805),
    C = n(598071),
    S = n(101555),
    x = n(834755),
    j = n(703007),
    I = n(2553),
    T = n(946274),
    N = n(135621),
    P = n(406704),
    w = n(253932),
    R = n(31717),
    D = n(638128),
    M = n(522602),
    k = n(515718),
    L = n(723702),
    U = n(518960),
    G = n(486319),
    F = n(355622),
    H = n(415409),
    B = n(147025),
    V = n(133343),
    K = n(851023),
    W = n(171593),
    z = n(652215);
n(827669), n(294920);
var Y = n(478644),
    q = n(985018),
    J = n(401376),
    Z = n(111314);

function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function $(e, t, n) {
    let l = e.startsWith("attachment://"),
        r = e;
    if (l) {
        let t = e.slice(13);
        r = n ? "attachment://SPOILER_".concat(t) : e;
    }
    return {
        media: {
            url: r,
            proxyUrl: r,
            loadingState: g.TD.UNKNOWN,
            flags: 0,
        },
        description: null != t ? t : void 0,
        spoiler: n,
    };
}
let ee = r.memo(
    r.forwardRef(function (e, t) {
        var n, i, s, u;
        let h,
            {
                textValue: p,
                richValue: A,
                className: S,
                id: j,
                required: I,
                disabled: T,
                accessibilityLabel: k,
                channel: U,
                type: K,
                focused: Y,
                onChange: ee,
                onResize: ei,
                onBlur: ea,
                onFocus: es,
                onKeyDown: eo,
                onSubmit: ec,
                promptToUpload: eu,
                canMentionRoles: ed,
                canMentionChannels: eh,
                maxCharacterCount: ep,
                placeholder: ef,
                "aria-describedby": em,
                "aria-labelledby": eg,
                setEditorRef: eA,
                autoCompletePosition: eb,
                disableThemedBackground: e_ = !1,
                emojiPickerCloseOnModalOuterClick: ey,
                parentModalKey: ev,
            } = e,
            eE = O.A.useField("channelDrafts")[U.id],
            eO = null != (n = null == eE ? void 0 : eE.title) ? n : "",
            eC = null == eE ? void 0 : eE.heroFile,
            eS = null == (i = null == eE ? void 0 : eE.publish) || i,
            ex = null == (s = null == eE ? void 0 : eE.createThread) || s;
        o()(null != K, "chat input type must be set");
        let { analyticsLocations: ej } = (0, y.Ay)(_.A.CHANNEL_TEXT_AREA),
            eI = (0, V.L0)(t),
            eT = r.useRef(null),
            eN = r.useRef(null),
            eP = r.useRef(null),
            ew = r.useRef(null);
        null == eA || eA(eN.current);
        let { activeCommand: eR } = (0, d.cf)([v.A], () => {
                var e, t;
                return {
                    activeCommand: (null == (e = K.commands) ? void 0 : e.enabled) ? v.A.getActiveCommand(U.id) : null,
                    activeCommandSection: (null == (t = K.commands) ? void 0 : t.enabled)
                        ? v.A.getActiveCommandSection(U.id)
                        : null,
                };
            }),
            {
                isLurking: eD,
                isPendingMember: eM,
                disabled: ek,
                canAttachFiles: eL,
                canEveryoneSendMessages: eU,
            } = (0, V.Sk)(U, K, eR, T),
            eG = !w.D_.useSetting() && !(0, L.isAndroidWeb)() && null != window.ResizeObserver,
            eF = !eG || !(null == (u = K.commands) ? void 0 : u.enabled) || !Y || "/" !== p,
            eH = (0, N.A)(),
            { fontSize: eB } = (0, d.cf)([b.A], () => ({
                fontSize: b.A.fontSize,
                isSubmitButtonEnabled: b.A.isSubmitButtonEnabled,
            })),
            eV = (0, d.bG)([D.A], () => D.A.isEnabled()),
            eK = (0, P.n)(U);
        (0, V.N_)(K, ek, U.id);
        let { eventEmitter: eW, handleEditorSelectionChanged: ez } = (0, V.ml)(eN, p, A),
            eY = r.useCallback(
                (e) => {
                    let t = (e) => {
                            if (e.shouldClear) {
                                var t;
                                (0, O.x)(U.id, {
                                    title: "",
                                    heroFile: null,
                                }),
                                    null == (t = eN.current) || t.blur();
                            }
                            return e;
                        },
                        n = [],
                        l =
                            eO.length > 0
                                ? eO
                                : e.value.length > 0
                                  ? e.value.slice(0, 80)
                                  : q.intl.string(q.t["7Xm5QI"]);
                    if (null == eC)
                        return ec(
                            Q(X({}, e), {
                                announcementSendOptions: {
                                    createThread: eK && ex,
                                    threadName: l,
                                    publish: eS,
                                },
                            }),
                        ).then(t);
                    n.push({
                        type: g.I5.MEDIA_GALLERY,
                        items: [$("attachment://".concat(eC.name), null, !1)],
                        id: "".concat(82733),
                    }),
                        e.value.length > 0 &&
                            n.push({
                                type: g.I5.TEXT_DISPLAY,
                                content: e.value,
                                id: "".concat(82744),
                            });
                    let r = M.A.getUploads(U.id, R.C.ChannelMessage),
                        i = r.filter((e) => (e.isImage || e.isVideo) && e.filename !== (null == eC ? void 0 : eC.name)),
                        a = r.filter((e) => !e.isImage && !e.isVideo && e.filename !== (null == eC ? void 0 : eC.name)),
                        s = i.map((e) => $("attachment://".concat(e.filename), e.description, e.spoiler));
                    return (
                        s.length > 0 &&
                            n.push({
                                type: g.I5.MEDIA_GALLERY,
                                items: s,
                                id: "".concat(82755),
                            }),
                        a.forEach((e, t) => {
                            n.push({
                                type: g.I5.FILE,
                                file: $("attachment://".concat(e.filename), e.description, e.spoiler).media,
                                id: "".concat(82766 + t),
                                spoiler: e.spoiler,
                                name: null,
                                size: null,
                            });
                        }),
                        ec(
                            Q(X({}, e), {
                                components: n,
                                announcementSendOptions: {
                                    createThread: eK && ex,
                                    threadName: l,
                                    publish: eS,
                                },
                            }),
                        ).then(t)
                    );
                },
                [ec, eO, eC, U.id, ex, eS, eK],
            ),
            { submit: eq, handleSubmit: eJ } = (0, V.Zx)(eY, K, eN, ew, U.id),
            { autocompleteRef: eZ, handleMaybeShowAutocomplete: eX, handleHideAutocomplete: eQ } = (0, V.v7)(),
            e$ = r.useCallback(() => {
                var e;
                return null == ew || null == (e = ew.current) ? void 0 : e.hide();
            }, []),
            { editorHeight: e0, handleResize: e1 } = (0, V.ck)(ei),
            {
                handleTab: e2,
                handleEnter: e7,
                handleMoveSelection: e3,
            } = ((h = r.useCallback(() => {
                var e, t;
                return (
                    !!(!eF && (null == (e = eT.current) ? void 0 : e.onTabOrEnter(!1))) ||
                    (null == (t = eZ.current) ? void 0 : t.onTabOrEnter(!1)) ||
                    !1
                );
            }, [eF])),
            {
                handleTab: h,
                handleEnter: r.useCallback(() => {
                    var e, t;
                    return (
                        !!(!eF && (null == (e = eT.current) ? void 0 : e.onTabOrEnter(!0))) ||
                        (null == (t = eZ.current) ? void 0 : t.onTabOrEnter(!1)) ||
                        !1
                    );
                }, [eF]),
                handleMoveSelection: r.useCallback(
                    (e) => {
                        var t, n;
                        return (
                            !!(!eF && (null == (t = eT.current) ? void 0 : t.onMoveSelection(e))) ||
                            (null == (n = eZ.current) ? void 0 : n.onMoveSelection(e)) ||
                            !1
                        );
                    },
                    [eF],
                ),
            }),
            { expressionPickerView: e6, shouldHideExpressionPicker: e5, handleOuterClick: e9 } = (0, V.MD)(K, eN, U.id),
            e8 = (0, V.BX)(p),
            { currentAutocompleteType: e4, handleAutocompleteVisibilityChange: te } = (0, V.uW)(K, U.id),
            tt = (0, V.NO)(eN),
            tn = (0, V.Vu)(eq, K, eN),
            tl = (0, V.C)({
                editorRef: eN,
                disabled: ek,
                textValue: p,
                channelId: U.id,
                chatInputType: K,
                submit: eY,
            });
        (0, G.R)(eW, U.guild_id, U.id);
        let [tr, ti] = r.useState(!1),
            ta = Y || tr || p.length > 0 || null != eC || eO.length > 0,
            { editorHeaderHeight: ts, paddingTop: to } = (0, f.zhh)({
                editorHeaderHeight: 122 * !!ta,
                paddingTop: 16 * !!ta,
                config: {
                    tension: 120,
                    friction: 15,
                    clamp: !0,
                },
            }),
            tc = r.useRef(null),
            [tu, td] = r.useState(!1),
            th = r.useRef(!1),
            tp = r.useCallback(() => {
                th.current = !0;
                let e = setTimeout(() => {
                    th.current && td(!0);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tf = r.useCallback(() => {
                th.current = !1;
                let e = setTimeout(() => {
                    th.current || td(!1);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tm = r.useCallback(() => {
                var e;
                if (null == eC) return;
                let t =
                    null == (e = M.A.getUploads(U.id, K.drafts.type).find((e) => e.filename === eC.name))
                        ? void 0
                        : e.id;
                null != t && m.A.remove(U.id, t, R.C.ChannelMessage),
                    (0, O.x)(U.id, {
                        heroFile: null,
                    });
            }, [U.id, eC, K.drafts.type]);
        return (0, l.jsx)(C.Sv, {
            value: eW,
            children: (0, l.jsxs)(y.f5, {
                value: ej,
                children: [
                    (0, l.jsxs)("div", {
                        ref: eI,
                        className: a()(S, Z.gM),
                        onMouseDown: e9,
                        children: [
                            (0, l.jsx)("div", {
                                ref: eP,
                                onScroll: e$,
                                className: a()(Z.Ui, {
                                    [Z.k6]: !e_,
                                }),
                                children: (0, l.jsxs)("div", {
                                    className: a()(Z.vW, J.vW),
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: J.rf,
                                            children: [
                                                (0, l.jsxs)(c.animated.div, {
                                                    className: J.ov,
                                                    style: {
                                                        height: ts,
                                                        paddingTop: to,
                                                    },
                                                    children: [
                                                        null != eC
                                                            ? (0, l.jsx)(en, {
                                                                  file: eC,
                                                                  onRemoveHeroImage: tm,
                                                              })
                                                            : null,
                                                        null != eC
                                                            ? null
                                                            : (0, l.jsx)(er, {
                                                                  channel: U,
                                                                  onImageUploaded: (e) =>
                                                                      (0, O.x)(U.id, {
                                                                          heroFile: e,
                                                                      }),
                                                                  onFocus: () => ti(!0),
                                                              }),
                                                        (0, l.jsx)("input", {
                                                            onFocus: () => ti(!0),
                                                            onBlur: () => ti(!1),
                                                            maxLength: 140,
                                                            className: J.hz,
                                                            placeholder: q.intl.string(q.t.Z8fYjO),
                                                            value: eO,
                                                            onChange: (e) =>
                                                                (0, O.x)(U.id, {
                                                                    title: e.target.value,
                                                                }),
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: J.I6,
                                                    children: (0, l.jsx)(f.vN3, {
                                                        ringTarget: eI,
                                                        ringClassName: Z.Rg,
                                                        children: (0, l.jsx)(H.A, {
                                                            ref: eN,
                                                            id: j,
                                                            focused: Y,
                                                            useSlate: eG,
                                                            textValue: p,
                                                            richValue: A,
                                                            disabled: ek,
                                                            placeholder: ef,
                                                            required: I,
                                                            accessibilityLabel: k,
                                                            isPreviewing: (eD || eM) && eU,
                                                            channel: U,
                                                            type: F.oU.CREATE_ANNOUNCEMENT_POST,
                                                            canPasteFiles: eL,
                                                            uploadPromptCharacterCount: z.CS1,
                                                            maxCharacterCount: null != ep ? ep : eH,
                                                            allowNewLines: !0,
                                                            "aria-describedby": em,
                                                            onChange: ee,
                                                            onResize: e1,
                                                            onBlur: ea,
                                                            onFocus: es,
                                                            onKeyDown: eo,
                                                            onSubmit: eq,
                                                            onTab: e2,
                                                            onEnter: e7,
                                                            onMoveSelection: e3,
                                                            onSelectionChanged: ez,
                                                            onMaybeShowAutocomplete: eX,
                                                            onHideAutocomplete: eQ,
                                                            promptToUpload: eu,
                                                            fontSize: eB,
                                                            spellcheckEnabled: eV,
                                                            canOnlyUseTextCommands: !1,
                                                            isEditorIdle: e8,
                                                            currentAutocompleteType: e4,
                                                            "aria-labelledby": eg,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, l.jsx)("div", {
                                            className: J.KK,
                                            children: (0, l.jsx)(W.A, {
                                                channelId: U.id,
                                                type: K,
                                                canAttachFiles: eL,
                                                ignoreFile: null == eC ? void 0 : eC.name,
                                                smallAttachments: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: J.yF,
                            }),
                            (0, l.jsxs)("div", {
                                className: J.qr,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: J.j4,
                                        children: [
                                            (0, l.jsx)(el, {
                                                channel: U,
                                            }),
                                            (0, l.jsx)(B.A, {
                                                type: F.oU.CREATE_ANNOUNCEMENT_POST,
                                                disabled: ek,
                                                channel: U,
                                                handleSubmit: eJ,
                                                isEmpty: 0 === p.trim().length,
                                                showAllButtons: !0,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: J.j4,
                                        children: (0, l.jsx)("div", {
                                            ref: tc,
                                            className: J.Qo,
                                            onMouseEnter: tp,
                                            onMouseLeave: tf,
                                            children: (0, l.jsx)(f.YNO, {
                                                targetElementRef: tc,
                                                renderPopout: () =>
                                                    (0, l.jsx)(et, {
                                                        channelId: U.id,
                                                        canCreateThread: eK,
                                                    }),
                                                shouldShow: tu,
                                                autoInvert: !0,
                                                nudgeAlignIntoViewport: !0,
                                                position: "top",
                                                align: "right",
                                                children: (e) =>
                                                    (0, l.jsx)(
                                                        f.Button,
                                                        Q(X({}, e), {
                                                            onClick: () => {
                                                                eq(
                                                                    ""
                                                                        .concat(
                                                                            eO.length > 0 ? "# ".concat(eO, "\n") : "",
                                                                        )
                                                                        .concat(p),
                                                                );
                                                            },
                                                            disabled: 0 === p.length && 0 === eO.length,
                                                            size: "sm",
                                                            "aria-label": q.intl.string(q.t.TXNS7S),
                                                            innerClassName: J.jo,
                                                            text: (0, l.jsxs)("div", {
                                                                className: J.f9,
                                                                children: [
                                                                    (0, l.jsx)(f.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "always-white",
                                                                        children: q.intl.string(q.t.TXNS7S),
                                                                    }),
                                                                    (0, l.jsxs)("div", {
                                                                        className: J.pj,
                                                                        children: [
                                                                            (0, l.jsx)(f.lX7, {
                                                                                size: "xs",
                                                                                color: "white",
                                                                            }),
                                                                            eK && ex
                                                                                ? (0, l.jsx)(f.ysw, {
                                                                                      size: "xxs",
                                                                                      color: "white",
                                                                                      className: J.Q5,
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
                            (0, l.jsx)(E.A, {
                                targetRef: eI,
                                ref: eZ,
                                channel: U,
                                canMentionRoles: ed,
                                canMentionChannels: eh,
                                useNewSlashCommands: eG,
                                canOnlyUseTextCommands: !1,
                                canSendStickers: !0,
                                textValue: p,
                                focused: Y,
                                isEditorIdle: e8,
                                expressionPickerView: e6,
                                type: K,
                                editorRef: eN,
                                onSendMessage: eq,
                                onSendSticker: () => {},
                                onVisibilityChange: te,
                                editorHeight: e0,
                                setValue: (e, t) => (null == ee ? void 0 : ee(null, e, t)),
                                position: eb,
                            }),
                        ],
                    }),
                    e5
                        ? null
                        : (0, l.jsx)(x.A, {
                              positionTargetRef: eI,
                              type: K,
                              onSelectGIF: tn,
                              onSelectEmoji: tt,
                              onSelectSticker: tl,
                              channel: U,
                              closeOnModalOuterClick: ey,
                              parentModalKey: ev,
                              position: "top",
                              align: "right",
                              positionLayerClassName: Z.BD,
                          }),
                ],
            }),
        });
    }),
);

function et(e) {
    var t, n;
    let { channelId: r, canCreateThread: i } = e,
        a = O.A.useField("channelDrafts")[r],
        s = null == (t = null == a ? void 0 : a.createThread) || t,
        o = null == (n = null == a ? void 0 : a.publish) || n;
    return (0, l.jsxs)(f.W1t, {
        "data-menu-migrated": !0,
        "aria-label": q.intl.string(q.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: z.tEg,
        onSelect: z.tEg,
        children: [
            (0, l.jsx)(f.sLh, {
                id: "create-thread",
                label: q.intl.string(q.t.rBIGBL),
                checked: i && s,
                disabled: !i,
                action: () => {
                    (0, O.x)(r, {
                        createThread: !s,
                    });
                },
            }),
            (0, l.jsx)(f.sLh, {
                id: "send-and-publish",
                label: q.intl.string(q.t.MFGE51),
                checked: o,
                action: () => {
                    (0, O.x)(r, {
                        publish: !o,
                    });
                },
            }),
        ],
    });
}

function en(e) {
    let { file: t, onRemoveHeroImage: n } = e,
        [i, a] = r.useState();
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
    let [s, o] = r.useState(!1),
        c = r.useCallback(() => {
            o(!0);
        }, []),
        u = r.useCallback(() => {
            o(!1);
        }, []);
    return null == i
        ? null
        : (0, l.jsxs)("div", {
              onMouseEnter: c,
              onMouseLeave: u,
              className: J.Lb,
              "aria-hidden": !0,
              children: [
                  (0, l.jsx)("img", {
                      src: i,
                      alt: q.intl.string(q.t["2ePvR8"]),
                      className: J.c8,
                  }),
                  s
                      ? (0, l.jsx)(S.Ay, {
                            className: J.jM,
                            children: (0, l.jsx)(K.A, {
                                tooltip: q.intl.string(q.t.VjC21x),
                                onClick: n,
                                dangerous: !0,
                                children: (0, l.jsx)(f.ucK, {}),
                            }),
                        })
                      : null,
              ],
          });
}

function el(e) {
    let { channel: t } = e;
    return (0, l.jsx)(j.A, {
        "aria-label": q.intl.string(q.t["/IBYAq"]),
        className: J.g$,
        size: "icon",
        color: "transparent",
        look: "blank",
        onChange: (e) => {
            (0, U.R)(e.currentTarget.files, t, R.C.ChannelMessage, {
                requireConfirm: !0,
                origin: "file_picker",
            }),
                (e.currentTarget.value = null);
        },
        children: (0, l.jsx)(f.H8$, {
            size: "custom",
            width: 20,
            height: 20,
            color: h.A.colors.INTERACTIVE_TEXT_DEFAULT,
        }),
    });
}

function er(e) {
    let { channel: t, onImageUploaded: n, onFocus: i } = e,
        a = r.useRef(null),
        s = async (e, l) => {
            let r = await (0, k.bX)(e, l.name, l.type),
                i = {
                    id: (0, u.A)(),
                    file: r,
                    platform: A.xz.WEB,
                    isThumbnail: !1,
                    origin: "file_picker",
                };
            m.A.addFile({
                file: i,
                channelId: t.id,
                draftType: R.C.ChannelMessage,
            }),
                n(r);
        },
        [o, c] = r.useState(!1),
        d = r.useCallback(() => {
            c(!0);
        }, []),
        g = r.useCallback(() => {
            c(!1);
        }, []);
    return (0, l.jsx)("div", {
        className: J.qN,
        children: (0, l.jsx)(p.m, {
            asContainer: !0,
            text: q.intl.string(q.t["/IBYAq"]),
            position: "top",
            children: (0, l.jsxs)(f.DUT, {
                className: J.qN,
                onMouseOver: d,
                onMouseOut: g,
                onFocus: i,
                children: [
                    (0, l.jsx)(T.Ay, {
                        ref: a,
                        onChange: s,
                        "aria-hidden": !0,
                        tabIndex: -1,
                        maxFileSizeBytes: Y.j,
                        onFileSizeError: () => (0, I.A)(Y.j),
                    }),
                    (0, l.jsx)(f.XGR, {
                        size: "md",
                        color: o ? h.A.colors.INTERACTIVE_TEXT_ACTIVE : h.A.colors.INTERACTIVE_TEXT_DEFAULT,
                    }),
                ],
            }),
        }),
    });
}
