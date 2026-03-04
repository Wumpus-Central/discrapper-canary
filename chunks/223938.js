n.d(t, { A: () => X }), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(396181),
    d = n(835245),
    u = n(311907),
    h = n(827734),
    m = n(990078),
    A = n(397927),
    g = n(608299),
    p = n(155718),
    f = n(565150),
    _ = n(775602),
    E = n(793574),
    x = n(688810),
    C = n(861382),
    S = n(875163),
    I = n(224805),
    T = n(598071),
    N = n(101555),
    b = n(834755),
    y = n(703007),
    v = n(2553),
    j = n(946274),
    R = n(135621),
    M = n(406704),
    D = n(253932),
    O = n(31717),
    L = n(638128),
    P = n(522602),
    k = n(515718),
    w = n(723702),
    U = n(518960),
    G = n(486319),
    F = n(355622),
    H = n(415409),
    B = n(147025),
    V = n(133343),
    K = n(851023),
    z = n(171593),
    W = n(652215);
n(827669), n(294920);
var Y = n(478644),
    q = n(985018),
    J = n(401376),
    $ = n(111314);
function Z(e, t, n) {
    let i = e.startsWith("attachment://"),
        l = e;
    if (i) {
        let t = e.slice(13);
        l = n ? `attachment://SPOILER_${t}` : e;
    }
    return {
        media: { url: l, proxyUrl: l, loadingState: p.TD.UNKNOWN, flags: 0 },
        description: t ?? void 0,
        spoiler: n,
    };
}
let X = l.memo(
    l.forwardRef(function (e, t) {
        let n,
            {
                textValue: s,
                richValue: r,
                className: d,
                id: h,
                required: m,
                disabled: f,
                accessibilityLabel: N,
                channel: y,
                type: v,
                focused: j,
                onChange: k,
                onResize: U,
                onBlur: K,
                onFocus: Y,
                onKeyDown: X,
                onSubmit: ei,
                promptToUpload: el,
                canMentionRoles: es,
                canMentionChannels: ea,
                maxCharacterCount: er,
                placeholder: eo,
                "aria-describedby": ec,
                "aria-labelledby": ed,
                setEditorRef: eu,
                autoCompletePosition: eh,
                disableThemedBackground: em = !1,
                emojiPickerCloseOnModalOuterClick: eA,
                parentModalKey: eg,
            } = e,
            ep = I.A.useField("channelDrafts")[y.id],
            ef = ep?.title ?? "",
            e_ = ep?.heroFile,
            eE = ep?.publish ?? !0,
            ex = ep?.createThread ?? !0;
        o()(null != v, "chat input type must be set");
        let { analyticsLocations: eC } = (0, x.Ay)(E.A.CHANNEL_TEXT_AREA),
            eS = (0, V.L0)(t),
            eI = l.useRef(null),
            eT = l.useRef(null),
            eN = l.useRef(null),
            eb = l.useRef(null);
        eu?.(eT.current);
        let { activeCommand: ey } = (0, u.cf)([C.A], () => ({
                activeCommand: v.commands?.enabled ? C.A.getActiveCommand(y.id) : null,
                activeCommandSection: v.commands?.enabled ? C.A.getActiveCommandSection(y.id) : null,
            })),
            {
                isLurking: ev,
                isPendingMember: ej,
                disabled: eR,
                canAttachFiles: eM,
                canEveryoneSendMessages: eD,
            } = (0, V.Sk)(y, v, ey, f),
            eO = !D.D_.useSetting() && !(0, w.isAndroidWeb)() && null != window.ResizeObserver,
            eL = !eO || !v.commands?.enabled || !j || "/" !== s,
            eP = (0, R.A)(),
            { fontSize: ek } = (0, u.cf)([_.A], () => ({
                fontSize: _.A.fontSize,
                isSubmitButtonEnabled: _.A.isSubmitButtonEnabled,
            })),
            ew = (0, u.bG)([L.A], () => L.A.isEnabled()),
            eU = (0, M.n)(y);
        (0, V.N_)(v, eR, y.id);
        let { eventEmitter: eG, handleEditorSelectionChanged: eF } = (0, V.ml)(eT, s, r),
            eH = l.useCallback(
                (e) => {
                    let t = (e) => (
                            e.shouldClear && ((0, I.x)(y.id, { title: "", heroFile: null }), eT.current?.blur()), e
                        ),
                        n = [],
                        i =
                            ef.length > 0
                                ? ef
                                : e.value.length > 0
                                  ? e.value.slice(0, 80)
                                  : q.intl.string(q.t["7Xm5QI"]);
                    if (null == e_)
                        return ei({
                            ...e,
                            announcementSendOptions: { createThread: eU && ex, threadName: i, publish: eE },
                        }).then(t);
                    n.push({ type: p.I5.MEDIA_GALLERY, items: [Z(`attachment://${e_.name}`, null, !1)], id: "82733" }),
                        e.value.length > 0 && n.push({ type: p.I5.TEXT_DISPLAY, content: e.value, id: "82744" });
                    let l = P.A.getUploads(y.id, O.C.ChannelMessage),
                        s = l.filter((e) => (e.isImage || e.isVideo) && e.filename !== e_?.name),
                        a = l.filter((e) => !e.isImage && !e.isVideo && e.filename !== e_?.name),
                        r = s.map((e) => Z(`attachment://${e.filename}`, e.description, e.spoiler));
                    return (
                        r.length > 0 && n.push({ type: p.I5.MEDIA_GALLERY, items: r, id: "82755" }),
                        a.forEach((e, t) => {
                            n.push({
                                type: p.I5.FILE,
                                file: Z(`attachment://${e.filename}`, e.description, e.spoiler).media,
                                id: `${82766 + t}`,
                                spoiler: e.spoiler,
                                name: null,
                                size: null,
                            });
                        }),
                        ei({
                            ...e,
                            components: n,
                            announcementSendOptions: { createThread: eU && ex, threadName: i, publish: eE },
                        }).then(t)
                    );
                },
                [ei, ef, e_, y.id, ex, eE, eU],
            ),
            { submit: eB, handleSubmit: eV } = (0, V.Zx)(eH, v, eT, eb, y.id),
            { autocompleteRef: eK, handleMaybeShowAutocomplete: ez, handleHideAutocomplete: eW } = (0, V.v7)(),
            eY = l.useCallback(() => eb?.current?.hide(), []),
            { editorHeight: eq, handleResize: eJ } = (0, V.ck)(U),
            {
                handleTab: e$,
                handleEnter: eZ,
                handleMoveSelection: eX,
            } = ((n = l.useCallback(
                () => !!(!eL && eI.current?.onTabOrEnter(!1)) || eK.current?.onTabOrEnter(!1) || !1,
                [eL],
            )),
            {
                handleTab: n,
                handleEnter: l.useCallback(
                    () => !!(!eL && eI.current?.onTabOrEnter(!0)) || eK.current?.onTabOrEnter(!1) || !1,
                    [eL],
                ),
                handleMoveSelection: l.useCallback(
                    (e) => !!(!eL && eI.current?.onMoveSelection(e)) || eK.current?.onMoveSelection(e) || !1,
                    [eL],
                ),
            }),
            { expressionPickerView: eQ, shouldHideExpressionPicker: e0, handleOuterClick: e1 } = (0, V.MD)(v, eT, y.id),
            { handleAutocompleteVisibilityChange: e2 } = (0, V.uW)(v, y.id),
            e3 = (0, V.NO)(eT),
            e7 = (0, V.Vu)(eB, v, eT),
            e5 = (0, V.C)({ editorRef: eT, disabled: eR, textValue: s, channelId: y.id, chatInputType: v, submit: eH });
        (0, G.R)(eG, y.guild_id, y.id);
        let [e6, e9] = l.useState(!1),
            e4 = j || e6 || s.length > 0 || null != e_ || ef.length > 0,
            { editorHeaderHeight: e8, paddingTop: te } = (0, A.zhh)({
                editorHeaderHeight: 122 * !!e4,
                paddingTop: 16 * !!e4,
                config: { tension: 120, friction: 15, clamp: !0 },
            }),
            tt = l.useRef(null),
            [tn, ti] = l.useState(!1),
            tl = l.useRef(!1),
            ts = l.useCallback(() => {
                tl.current = !0;
                let e = setTimeout(() => {
                    tl.current && ti(!0);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            ta = l.useCallback(() => {
                tl.current = !1;
                let e = setTimeout(() => {
                    tl.current || ti(!1);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tr = l.useCallback(() => {
                if (null == e_) return;
                let e = P.A.getUploads(y.id, v.drafts.type),
                    t = e.find((e) => e.filename === e_.name)?.id;
                null != t && g.A.remove(y.id, t, O.C.ChannelMessage), (0, I.x)(y.id, { heroFile: null });
            }, [y.id, e_, v.drafts.type]);
        return (0, i.jsx)(T.Sv, {
            value: eG,
            children: (0, i.jsxs)(x.f5, {
                value: eC,
                children: [
                    (0, i.jsxs)("div", {
                        ref: eS,
                        className: a()(d, $.gM),
                        onMouseDown: e1,
                        children: [
                            (0, i.jsx)("div", {
                                ref: eN,
                                onScroll: eY,
                                className: a()($.Ui, { [$.k6]: !em }),
                                children: (0, i.jsxs)("div", {
                                    className: a()($.vW, J.vW),
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: J.rf,
                                            children: [
                                                (0, i.jsxs)(c.animated.div, {
                                                    className: J.ov,
                                                    style: { height: e8, paddingTop: te },
                                                    children: [
                                                        null != e_
                                                            ? (0, i.jsx)(ee, { file: e_, onRemoveHeroImage: tr })
                                                            : null,
                                                        null != e_
                                                            ? null
                                                            : (0, i.jsx)(en, {
                                                                  channel: y,
                                                                  onImageUploaded: (e) =>
                                                                      (0, I.x)(y.id, { heroFile: e }),
                                                                  onFocus: () => e9(!0),
                                                              }),
                                                        (0, i.jsx)("input", {
                                                            onFocus: () => e9(!0),
                                                            onBlur: () => e9(!1),
                                                            maxLength: 140,
                                                            className: J.hz,
                                                            placeholder: q.intl.string(q.t.Z8fYjO),
                                                            value: ef,
                                                            onChange: (e) => (0, I.x)(y.id, { title: e.target.value }),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)("div", {
                                                    className: J.I6,
                                                    children: (0, i.jsx)(A.vN3, {
                                                        ringTarget: eS,
                                                        ringClassName: $.Rg,
                                                        children: (0, i.jsx)(H.A, {
                                                            ref: eT,
                                                            id: h,
                                                            focused: j,
                                                            useSlate: eO,
                                                            textValue: s,
                                                            richValue: r,
                                                            disabled: eR,
                                                            placeholder: eo,
                                                            required: m,
                                                            accessibilityLabel: N,
                                                            isPreviewing: (ev || ej) && eD,
                                                            channel: y,
                                                            type: F.oU.CREATE_ANNOUNCEMENT_POST,
                                                            canPasteFiles: eM,
                                                            uploadPromptCharacterCount: W.CS1,
                                                            maxCharacterCount: er ?? eP,
                                                            allowNewLines: !0,
                                                            "aria-describedby": ec,
                                                            onChange: k,
                                                            onResize: eJ,
                                                            onBlur: K,
                                                            onFocus: Y,
                                                            onKeyDown: X,
                                                            onSubmit: eB,
                                                            onTab: e$,
                                                            onEnter: eZ,
                                                            onMoveSelection: eX,
                                                            onSelectionChanged: eF,
                                                            onMaybeShowAutocomplete: ez,
                                                            onHideAutocomplete: eW,
                                                            promptToUpload: el,
                                                            fontSize: ek,
                                                            spellcheckEnabled: ew,
                                                            canOnlyUseTextCommands: !1,
                                                            "aria-labelledby": ed,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)("div", {
                                            className: J.KK,
                                            children: (0, i.jsx)(z.A, {
                                                channelId: y.id,
                                                type: v,
                                                canAttachFiles: eM,
                                                ignoreFile: e_?.name,
                                                smallAttachments: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, i.jsx)("div", { className: J.yF }),
                            (0, i.jsxs)("div", {
                                className: J.qr,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: J.j4,
                                        children: [
                                            (0, i.jsx)(et, { channel: y }),
                                            (0, i.jsx)(B.A, {
                                                type: F.oU.CREATE_ANNOUNCEMENT_POST,
                                                disabled: eR,
                                                channel: y,
                                                handleSubmit: eV,
                                                isEmpty: 0 === s.trim().length,
                                                showAllButtons: !0,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)("div", {
                                        className: J.j4,
                                        children: (0, i.jsx)("div", {
                                            ref: tt,
                                            className: J.Qo,
                                            onMouseEnter: ts,
                                            onMouseLeave: ta,
                                            children: (0, i.jsx)(A.YNO, {
                                                targetElementRef: tt,
                                                renderPopout: () =>
                                                    (0, i.jsx)(Q, { channelId: y.id, canCreateThread: eU }),
                                                shouldShow: tn,
                                                autoInvert: !0,
                                                nudgeAlignIntoViewport: !0,
                                                position: "top",
                                                align: "right",
                                                children: (e) =>
                                                    (0, i.jsx)(A.Button, {
                                                        ...e,
                                                        onClick: () => {
                                                            eB(
                                                                `${
                                                                    ef.length > 0
                                                                        ? `# ${ef}
`
                                                                        : ""
                                                                }${s}`,
                                                            );
                                                        },
                                                        disabled: 0 === s.length && 0 === ef.length,
                                                        size: "sm",
                                                        "aria-label": q.intl.string(q.t.TXNS7S),
                                                        innerClassName: J.jo,
                                                        text: (0, i.jsxs)("div", {
                                                            className: J.f9,
                                                            children: [
                                                                (0, i.jsx)(A.Text, {
                                                                    variant: "text-sm/semibold",
                                                                    color: "always-white",
                                                                    children: q.intl.string(q.t.TXNS7S),
                                                                }),
                                                                (0, i.jsxs)("div", {
                                                                    className: J.pj,
                                                                    children: [
                                                                        (0, i.jsx)(A.lX7, {
                                                                            size: "xs",
                                                                            color: "white",
                                                                        }),
                                                                        eU && ex
                                                                            ? (0, i.jsx)(A.ysw, {
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
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(S.A, {
                                targetRef: eS,
                                ref: eK,
                                channel: y,
                                canMentionRoles: es,
                                canMentionChannels: ea,
                                useNewSlashCommands: eO,
                                canOnlyUseTextCommands: !1,
                                canSendStickers: !0,
                                textValue: s,
                                focused: j,
                                expressionPickerView: eQ,
                                type: v,
                                editorRef: eT,
                                onSendMessage: eB,
                                onSendSticker: () => {},
                                onVisibilityChange: e2,
                                editorHeight: eq,
                                setValue: (e, t) => k?.(null, e, t),
                                position: eh,
                            }),
                        ],
                    }),
                    e0
                        ? null
                        : (0, i.jsx)(b.A, {
                              positionTargetRef: eS,
                              type: v,
                              onSelectGIF: e7,
                              onSelectEmoji: e3,
                              onSelectSticker: e5,
                              channel: y,
                              closeOnModalOuterClick: eA,
                              parentModalKey: eg,
                              position: "top",
                              align: "right",
                              positionLayerClassName: $.BD,
                          }),
                ],
            }),
        });
    }),
);
function Q(e) {
    let { channelId: t, canCreateThread: n } = e,
        l = I.A.useField("channelDrafts")[t],
        s = l?.createThread ?? !0,
        a = l?.publish ?? !0;
    return (0, i.jsxs)(A.W1t, {
        "data-menu-migrated": !0,
        "aria-label": q.intl.string(q.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: W.tEg,
        onSelect: W.tEg,
        children: [
            (0, i.jsx)(A.sLh, {
                id: "create-thread",
                label: q.intl.string(q.t.rBIGBL),
                checked: n && s,
                disabled: !n,
                action: () => {
                    (0, I.x)(t, { createThread: !s });
                },
            }),
            (0, i.jsx)(A.sLh, {
                id: "send-and-publish",
                label: q.intl.string(q.t.MFGE51),
                checked: a,
                action: () => {
                    (0, I.x)(t, { publish: !a });
                },
            }),
        ],
    });
}
function ee(e) {
    let { file: t, onRemoveHeroImage: n } = e,
        [s, a] = l.useState();
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
    let [r, o] = l.useState(!1),
        c = l.useCallback(() => {
            o(!0);
        }, []),
        d = l.useCallback(() => {
            o(!1);
        }, []);
    return null == s
        ? null
        : (0, i.jsxs)("div", {
              onMouseEnter: c,
              onMouseLeave: d,
              className: J.Lb,
              "aria-hidden": !0,
              children: [
                  (0, i.jsx)("img", { src: s, alt: q.intl.string(q.t["2ePvR8"]), className: J.c8 }),
                  r
                      ? (0, i.jsx)(N.Ay, {
                            className: J.jM,
                            children: (0, i.jsx)(K.A, {
                                tooltip: q.intl.string(q.t.VjC21x),
                                onClick: n,
                                dangerous: !0,
                                children: (0, i.jsx)(A.ucK, {}),
                            }),
                        })
                      : null,
              ],
          });
}
function et(e) {
    let { channel: t } = e;
    return (0, i.jsx)(y.A, {
        "aria-label": q.intl.string(q.t["/IBYAq"]),
        className: J.g$,
        size: "icon",
        color: "transparent",
        look: "blank",
        onChange: (e) => {
            (0, U.R)(e.currentTarget.files, t, O.C.ChannelMessage, { requireConfirm: !0, origin: "file_picker" }),
                (e.currentTarget.value = null);
        },
        children: (0, i.jsx)(A.H8$, {
            size: "custom",
            width: 20,
            height: 20,
            color: h.A.colors.INTERACTIVE_TEXT_DEFAULT,
        }),
    });
}
function en(e) {
    let { channel: t, onImageUploaded: n, onFocus: s } = e,
        a = l.useRef(null),
        r = async (e, i) => {
            let l = await (0, k.bX)(e, i.name, i.type),
                s = { id: (0, d.A)(), file: l, platform: f.xz.WEB, isThumbnail: !1, origin: "file_picker" };
            g.A.addFile({ file: s, channelId: t.id, draftType: O.C.ChannelMessage }), n(l);
        },
        [o, c] = l.useState(!1),
        u = l.useCallback(() => {
            c(!0);
        }, []),
        p = l.useCallback(() => {
            c(!1);
        }, []);
    return (0, i.jsx)("div", {
        className: J.qN,
        children: (0, i.jsx)(m.m, {
            asContainer: !0,
            text: q.intl.string(q.t["/IBYAq"]),
            position: "top",
            children: (0, i.jsxs)(A.DUT, {
                className: J.qN,
                onMouseOver: u,
                onMouseOut: p,
                onFocus: s,
                children: [
                    (0, i.jsx)(j.Ay, {
                        ref: a,
                        onChange: r,
                        "aria-hidden": !0,
                        tabIndex: -1,
                        maxFileSizeBytes: Y.j,
                        onFileSizeError: () => (0, v.A)(Y.j),
                    }),
                    (0, i.jsx)(A.XGR, {
                        size: "md",
                        color: o ? h.A.colors.INTERACTIVE_TEXT_ACTIVE : h.A.colors.INTERACTIVE_TEXT_DEFAULT,
                    }),
                ],
            }),
        }),
    });
}
