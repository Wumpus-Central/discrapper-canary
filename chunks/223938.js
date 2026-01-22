n.d(t, { A: () => ee }),
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
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(432022),
    u = n(835245),
    d = n(311907),
    f = n(827734),
    p = n(990078),
    h = n(397927),
    b = n(608299),
    g = n(155718),
    m = n(565150),
    A = n(775602),
    y = n(793574),
    O = n(688810),
    j = n(861382),
    v = n(875163),
    x = n(224805),
    E = n(598071),
    _ = n(101555),
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
    G = n(723702),
    k = n(518960),
    U = n(486319),
    V = n(355622),
    F = n(415409),
    H = n(147025),
    B = n(133343),
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
            loadingState: g.TD.UNKNOWN,
            flags: 0,
        },
        description: null != t ? t : void 0,
        spoiler: n,
    };
}
let ee = l.memo(
    l.forwardRef(function (e, t) {
        var n, i, s, u;
        let f,
            {
                textValue: p,
                richValue: m,
                className: _,
                id: S,
                required: I,
                disabled: N,
                accessibilityLabel: L,
                channel: k,
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
                canMentionChannels: ef,
                maxCharacterCount: ep,
                placeholder: eh,
                "aria-describedby": eb,
                "aria-labelledby": eg,
                setEditorRef: em,
                autoCompletePosition: eA,
                disableThemedBackground: ey = !1,
                emojiPickerCloseOnModalOuterClick: eO,
                parentModalKey: ej,
            } = e,
            ev = x.A.useField("channelDrafts")[k.id],
            ex = null != (n = null == ev ? void 0 : ev.title) ? n : "",
            eE = null == ev ? void 0 : ev.heroFile,
            e_ = null == (i = null == ev ? void 0 : ev.publish) || i,
            eC = null == (s = null == ev ? void 0 : ev.createThread) || s;
        o()(null != K, "chat input type must be set");
        let { analyticsLocations: eS } = (0, O.Ay)(y.A.CHANNEL_TEXT_AREA),
            eI = (0, B.L0)(t),
            eN = l.useRef(null),
            eT = l.useRef(null),
            eP = l.useRef(null),
            ew = l.useRef(null);
        null == em || em(eT.current);
        let { activeCommand: eR } = (0, d.cf)([j.A], () => {
                var e, t;
                return {
                    activeCommand: (null == (e = K.commands) ? void 0 : e.enabled) ? j.A.getActiveCommand(k.id) : null,
                    activeCommandSection: (null == (t = K.commands) ? void 0 : t.enabled)
                        ? j.A.getActiveCommandSection(k.id)
                        : null,
                };
            }),
            {
                isLurking: eD,
                isPendingMember: eM,
                disabled: eL,
                canAttachFiles: eG,
                canEveryoneSendMessages: ek,
            } = (0, B.Sk)(k, K, eR, N),
            eU = !w.D_.useSetting() && !(0, G.isAndroidWeb)() && null != window.ResizeObserver,
            eV = !eU || !(null == (u = K.commands) ? void 0 : u.enabled) || !Y || "/" !== p,
            eF = (0, T.A)(),
            { fontSize: eH } = (0, d.cf)([A.A], () => ({
                fontSize: A.A.fontSize,
                isSubmitButtonEnabled: A.A.isSubmitButtonEnabled,
            })),
            eB = (0, d.bG)([D.A], () => D.A.isEnabled()),
            eK = (0, P.n)(k);
        (0, B.N_)(K, eL, k.id);
        let { eventEmitter: eW, handleEditorSelectionChanged: ez } = (0, B.ml)(eT, p, m),
            eY = l.useCallback(
                (e) => {
                    let t = (e) => {
                            if (e.shouldClear) {
                                var t;
                                (0, x.x)(k.id, {
                                    title: "",
                                    heroFile: null,
                                }),
                                    null == (t = eT.current) || t.blur();
                            }
                            return e;
                        },
                        n = [],
                        r =
                            ex.length > 0
                                ? ex
                                : e.value.length > 0
                                  ? e.value.slice(0, 80)
                                  : q.intl.string(q.t["7Xm5QI"]);
                    if (null == eE)
                        return ec(
                            Z(Q({}, e), {
                                announcementSendOptions: {
                                    createThread: eK && eC,
                                    threadName: r,
                                    publish: e_,
                                },
                            }),
                        ).then(t);
                    n.push({
                        type: g.I5.MEDIA_GALLERY,
                        items: [$("attachment://".concat(eE.name), null, !1)],
                        id: "".concat(82733),
                    }),
                        e.value.length > 0 &&
                            n.push({
                                type: g.I5.TEXT_DISPLAY,
                                content: e.value,
                                id: "".concat(82744),
                            });
                    let l = M.A.getUploads(k.id, R.C.ChannelMessage),
                        i = l.filter((e) => (e.isImage || e.isVideo) && e.filename !== (null == eE ? void 0 : eE.name)),
                        a = l.filter((e) => !e.isImage && !e.isVideo && e.filename !== (null == eE ? void 0 : eE.name)),
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
                            Z(Q({}, e), {
                                components: n,
                                announcementSendOptions: {
                                    createThread: eK && eC,
                                    threadName: r,
                                    publish: e_,
                                },
                            }),
                        ).then(t)
                    );
                },
                [ec, ex, eE, k.id, eC, e_, eK],
            ),
            { submit: eq, handleSubmit: eX } = (0, B.Zx)(eY, K, eT, ew, k.id),
            { autocompleteRef: eJ, handleMaybeShowAutocomplete: eQ, handleHideAutocomplete: eZ } = (0, B.v7)(),
            e$ = l.useCallback(() => {
                var e;
                return null == ew || null == (e = ew.current) ? void 0 : e.hide();
            }, []),
            { editorHeight: e0, handleResize: e1 } = (0, B.ck)(ei),
            {
                handleTab: e2,
                handleEnter: e9,
                handleMoveSelection: e7,
            } = ((f = l.useCallback(() => {
                var e, t;
                return (
                    !!(!eV && (null == (e = eN.current) ? void 0 : e.onTabOrEnter(!1))) ||
                    (null == (t = eJ.current) ? void 0 : t.onTabOrEnter(!1)) ||
                    !1
                );
            }, [eV])),
            {
                handleTab: f,
                handleEnter: l.useCallback(() => {
                    var e, t;
                    return (
                        !!(!eV && (null == (e = eN.current) ? void 0 : e.onTabOrEnter(!0))) ||
                        (null == (t = eJ.current) ? void 0 : t.onTabOrEnter(!1)) ||
                        !1
                    );
                }, [eV]),
                handleMoveSelection: l.useCallback(
                    (e) => {
                        var t, n;
                        return (
                            !!(!eV && (null == (t = eN.current) ? void 0 : t.onMoveSelection(e))) ||
                            (null == (n = eJ.current) ? void 0 : n.onMoveSelection(e)) ||
                            !1
                        );
                    },
                    [eV],
                ),
            }),
            { expressionPickerView: e3, shouldHideExpressionPicker: e6, handleOuterClick: e8 } = (0, B.MD)(K, eT, k.id),
            e5 = (0, B.BX)(p),
            { currentAutocompleteType: e4, handleAutocompleteVisibilityChange: te } = (0, B.uW)(K, k.id),
            tt = (0, B.NO)(eT),
            tn = (0, B.Vu)(eq, K, eT),
            tr = (0, B.C)({
                editorRef: eT,
                disabled: eL,
                textValue: p,
                channelId: k.id,
                chatInputType: K,
                submit: eY,
            });
        (0, U.R)(eW, k.guild_id, k.id);
        let [tl, ti] = l.useState(!1),
            ta = Y || tl || p.length > 0 || null != eE || ex.length > 0,
            { editorHeaderHeight: ts, paddingTop: to } = (0, h.zhh)({
                editorHeaderHeight: 122 * !!ta,
                paddingTop: 16 * !!ta,
                config: {
                    tension: 120,
                    friction: 15,
                    clamp: !0,
                },
            }),
            tc = l.useRef(null),
            [tu, td] = l.useState(!1),
            tf = l.useRef(!1),
            tp = l.useCallback(() => {
                tf.current = !0;
                let e = setTimeout(() => {
                    tf.current && td(!0);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            th = l.useCallback(() => {
                tf.current = !1;
                let e = setTimeout(() => {
                    tf.current || td(!1);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tb = l.useCallback(() => {
                var e;
                if (null == eE) return;
                let t =
                    null == (e = M.A.getUploads(k.id, K.drafts.type).find((e) => e.filename === eE.name))
                        ? void 0
                        : e.id;
                null != t && b.A.remove(k.id, t, R.C.ChannelMessage), (0, x.x)(k.id, { heroFile: null });
            }, [k.id, eE, K.drafts.type]);
        return (0, r.jsx)(E.Sv, {
            value: eW,
            children: (0, r.jsxs)(O.f5, {
                value: eS,
                children: [
                    (0, r.jsxs)("div", {
                        ref: eI,
                        className: a()(_, J.gM),
                        onMouseDown: e8,
                        children: [
                            (0, r.jsx)("div", {
                                ref: eP,
                                onScroll: e$,
                                className: a()(J.Ui, { [J.k6]: !ey }),
                                children: (0, r.jsxs)("div", {
                                    className: a()(J.vW, X.vW),
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: X.rf,
                                            children: [
                                                (0, r.jsxs)(c.animated.div, {
                                                    className: X.ov,
                                                    style: {
                                                        height: ts,
                                                        paddingTop: to,
                                                    },
                                                    children: [
                                                        null != eE
                                                            ? (0, r.jsx)(en, {
                                                                  file: eE,
                                                                  onRemoveHeroImage: tb,
                                                              })
                                                            : null,
                                                        null != eE
                                                            ? null
                                                            : (0, r.jsx)(el, {
                                                                  channel: k,
                                                                  onImageUploaded: (e) =>
                                                                      (0, x.x)(k.id, { heroFile: e }),
                                                                  onFocus: () => ti(!0),
                                                              }),
                                                        (0, r.jsx)("input", {
                                                            onFocus: () => ti(!0),
                                                            onBlur: () => ti(!1),
                                                            maxLength: 140,
                                                            className: X.hz,
                                                            placeholder: q.intl.string(q.t.Z8fYjO),
                                                            value: ex,
                                                            onChange: (e) => (0, x.x)(k.id, { title: e.target.value }),
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)("div", {
                                                    className: X.I6,
                                                    children: (0, r.jsx)(h.vN3, {
                                                        ringTarget: eI,
                                                        ringClassName: J.Rg,
                                                        children: (0, r.jsx)(F.A, {
                                                            ref: eT,
                                                            id: S,
                                                            focused: Y,
                                                            useSlate: eU,
                                                            textValue: p,
                                                            richValue: m,
                                                            disabled: eL,
                                                            placeholder: eh,
                                                            required: I,
                                                            accessibilityLabel: L,
                                                            isPreviewing: (eD || eM) && ek,
                                                            channel: k,
                                                            type: V.oU.CREATE_ANNOUNCEMENT_POST,
                                                            canPasteFiles: eG,
                                                            uploadPromptCharacterCount: z.CS1,
                                                            maxCharacterCount: null != ep ? ep : eF,
                                                            allowNewLines: !0,
                                                            "aria-describedby": eb,
                                                            onChange: ee,
                                                            onResize: e1,
                                                            onBlur: ea,
                                                            onFocus: es,
                                                            onKeyDown: eo,
                                                            onSubmit: eq,
                                                            onTab: e2,
                                                            onEnter: e9,
                                                            onMoveSelection: e7,
                                                            onSelectionChanged: ez,
                                                            onMaybeShowAutocomplete: eQ,
                                                            onHideAutocomplete: eZ,
                                                            promptToUpload: eu,
                                                            fontSize: eH,
                                                            spellcheckEnabled: eB,
                                                            canOnlyUseTextCommands: !1,
                                                            isEditorIdle: e5,
                                                            currentAutocompleteType: e4,
                                                            "aria-labelledby": eg,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            className: X.KK,
                                            children: (0, r.jsx)(W.A, {
                                                channelId: k.id,
                                                type: K,
                                                canAttachFiles: eG,
                                                ignoreFile: null == eE ? void 0 : eE.name,
                                                smallAttachments: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)("div", { className: X.yF }),
                            (0, r.jsxs)("div", {
                                className: X.qr,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: X.j4,
                                        children: [
                                            (0, r.jsx)(er, { channel: k }),
                                            (0, r.jsx)(H.A, {
                                                type: V.oU.CREATE_ANNOUNCEMENT_POST,
                                                disabled: eL,
                                                channel: k,
                                                handleSubmit: eX,
                                                isEmpty: 0 === p.trim().length,
                                                showAllButtons: !0,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: X.j4,
                                        children: (0, r.jsx)("div", {
                                            ref: tc,
                                            className: X.Qo,
                                            onMouseEnter: tp,
                                            onMouseLeave: th,
                                            children: (0, r.jsx)(h.YNO, {
                                                targetElementRef: tc,
                                                renderPopout: () =>
                                                    (0, r.jsx)(et, {
                                                        channelId: k.id,
                                                        canCreateThread: eK,
                                                    }),
                                                shouldShow: tu,
                                                autoInvert: !0,
                                                nudgeAlignIntoViewport: !0,
                                                position: "top",
                                                align: "right",
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        h.Button,
                                                        Z(Q({}, e), {
                                                            onClick: () => {
                                                                eq(
                                                                    ""
                                                                        .concat(
                                                                            ex.length > 0 ? "# ".concat(ex, "\n") : "",
                                                                        )
                                                                        .concat(p),
                                                                );
                                                            },
                                                            disabled: 0 === p.length && 0 === ex.length,
                                                            size: "sm",
                                                            "aria-label": q.intl.string(q.t.TXNS7S),
                                                            innerClassName: X.jo,
                                                            text: (0, r.jsxs)("div", {
                                                                className: X.f9,
                                                                children: [
                                                                    (0, r.jsx)(h.Text, {
                                                                        variant: "text-sm/semibold",
                                                                        color: "always-white",
                                                                        children: q.intl.string(q.t.TXNS7S),
                                                                    }),
                                                                    (0, r.jsxs)("div", {
                                                                        className: X.pj,
                                                                        children: [
                                                                            (0, r.jsx)(h.lX7, {
                                                                                size: "xs",
                                                                                color: "white",
                                                                            }),
                                                                            eK && eC
                                                                                ? (0, r.jsx)(h.ysw, {
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
                            (0, r.jsx)(v.A, {
                                targetRef: eI,
                                ref: eJ,
                                channel: k,
                                canMentionRoles: ed,
                                canMentionChannels: ef,
                                useNewSlashCommands: eU,
                                canOnlyUseTextCommands: !1,
                                canSendStickers: !0,
                                textValue: p,
                                focused: Y,
                                isEditorIdle: e5,
                                expressionPickerView: e3,
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
                    e6
                        ? null
                        : (0, r.jsx)(C.A, {
                              positionTargetRef: eI,
                              type: K,
                              onSelectGIF: tn,
                              onSelectEmoji: tt,
                              onSelectSticker: tr,
                              channel: k,
                              closeOnModalOuterClick: eO,
                              parentModalKey: ej,
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
        a = x.A.useField("channelDrafts")[l],
        s = null == (t = null == a ? void 0 : a.createThread) || t,
        o = null == (n = null == a ? void 0 : a.publish) || n;
    return (0, r.jsxs)(h.W1t, {
        "aria-label": q.intl.string(q.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: z.tEg,
        onSelect: z.tEg,
        children: [
            (0, r.jsx)(h.sLh, {
                id: "create-thread",
                label: q.intl.string(q.t.rBIGBL),
                checked: i && s,
                disabled: !i,
                action: () => {
                    (0, x.x)(l, { createThread: !s });
                },
            }),
            (0, r.jsx)(h.sLh, {
                id: "send-and-publish",
                label: q.intl.string(q.t.MFGE51),
                checked: o,
                action: () => {
                    (0, x.x)(l, { publish: !o });
                },
            }),
        ],
    });
}
function en(e) {
    let { file: t, onRemoveHeroImage: n } = e,
        [i, a] = l.useState();
    l.useEffect(() => {
        if (null == t || !1 === ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(t.type)) return;
        let e = URL.createObjectURL(t);
        return (
            a(e),
            () => {
                a(void 0), URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let [s, o] = l.useState(!1),
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
                  s
                      ? (0, r.jsx)(_.Ay, {
                            className: X.jM,
                            children: (0, r.jsx)(K.A, {
                                tooltip: q.intl.string(q.t.VjC21x),
                                onClick: n,
                                dangerous: !0,
                                children: (0, r.jsx)(h.ucK, {}),
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
            (0, k.R)(e.currentTarget.files, t, R.C.ChannelMessage, {
                requireConfirm: !0,
                origin: "file_picker",
            }),
                (e.currentTarget.value = null);
        },
        children: (0, r.jsx)(h.H8$, {
            size: "custom",
            width: 20,
            height: 20,
            color: f.A.colors.INTERACTIVE_TEXT_DEFAULT,
        }),
    });
}
function el(e) {
    let { channel: t, onImageUploaded: n, onFocus: i } = e,
        a = l.useRef(null),
        s = async (e, r) => {
            let l = await (0, L.bX)(e, r.name, r.type),
                i = {
                    id: (0, u.A)(),
                    file: l,
                    platform: m.xz.WEB,
                    isThumbnail: !1,
                    origin: "file_picker",
                };
            b.A.addFile({
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
        g = l.useCallback(() => {
            c(!1);
        }, []);
    return (0, r.jsx)("div", {
        className: X.qN,
        children: (0, r.jsx)(p.m, {
            asContainer: !0,
            text: q.intl.string(q.t["/IBYAq"]),
            position: "top",
            children: (0, r.jsxs)(h.DUT, {
                className: X.qN,
                onMouseOver: d,
                onMouseOut: g,
                onFocus: i,
                children: [
                    (0, r.jsx)(N.Ay, {
                        ref: a,
                        onChange: s,
                        "aria-hidden": !0,
                        tabIndex: -1,
                        maxFileSizeBytes: Y.j,
                        onFileSizeError: () => (0, I.A)(Y.j),
                    }),
                    (0, r.jsx)(h.XGR, {
                        size: "md",
                        color: o ? f.A.colors.INTERACTIVE_TEXT_ACTIVE : f.A.colors.INTERACTIVE_TEXT_DEFAULT,
                    }),
                ],
            }),
        }),
    });
}
