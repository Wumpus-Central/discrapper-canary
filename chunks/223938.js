n.d(t, { A: () => ed }), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(284009),
    o = n.n(r),
    c = n(517738),
    d = n(835245),
    u = n(311907),
    h = n(827734),
    m = n(990078),
    A = n(717421),
    g = n(187322),
    p = n(265872),
    _ = n(821609),
    f = n(834730),
    E = n(559647),
    C = n(163328),
    x = n(861672),
    S = n(477782),
    I = n(241326),
    N = n(81369),
    v = n(939249),
    T = n(750943),
    y = n(608299),
    b = n(155718),
    j = n(565150),
    R = n(775602),
    M = n(793574),
    L = n(688810),
    D = n(861382),
    P = n(875163),
    O = n(224805),
    w = n(598071),
    U = n(101555),
    k = n(834755),
    G = n(703007),
    F = n(2553),
    H = n(946274),
    B = n(135621),
    V = n(406704),
    z = n(253932),
    K = n(31717),
    W = n(638128),
    Y = n(522602),
    J = n(515718),
    q = n(723702),
    $ = n(518960),
    Z = n(486319),
    X = n(355622),
    Q = n(415409),
    ee = n(147025),
    et = n(133343),
    en = n(851023),
    ei = n(171593),
    el = n(652215);
n(827669), n(294920);
var ea = n(478644),
    es = n(985018),
    er = n(59543),
    eo = n(871655);
function ec(e, t, n) {
    let i = e.startsWith("attachment://"),
        l = e;
    if (i) {
        let t = e.slice(13);
        l = n ? `attachment://SPOILER_${t}` : e;
    }
    return {
        media: { url: l, proxyUrl: l, loadingState: b.TD.UNKNOWN, flags: 0 },
        description: t ?? void 0,
        spoiler: n,
    };
}
let ed = l.memo(
    l.forwardRef(function (e, t) {
        let n,
            {
                textValue: a,
                richValue: r,
                className: d,
                id: h,
                required: m,
                disabled: x,
                accessibilityLabel: S,
                channel: I,
                type: N,
                focused: v,
                onChange: T,
                onResize: j,
                onBlur: U,
                onFocus: G,
                onKeyDown: F,
                onSubmit: H,
                promptToUpload: J,
                canMentionRoles: $,
                canMentionChannels: en,
                maxCharacterCount: ea,
                placeholder: ed,
                "aria-describedby": eg,
                "aria-labelledby": ep,
                setEditorRef: e_,
                autoCompletePosition: ef,
                disableThemedBackground: eE = !1,
                emojiPickerCloseOnModalOuterClick: eC,
                parentModalKey: ex,
            } = e,
            eS = O.A.useField("channelDrafts")[I.id],
            eI = eS?.title ?? "",
            eN = eS?.heroFile,
            ev = eS?.publish ?? !0,
            eT = eS?.createThread ?? !0;
        o()(null != N, "chat input type must be set");
        let { analyticsLocations: ey } = (0, L.Ay)(M.A.CHANNEL_TEXT_AREA),
            eb = (0, et.L0)(t),
            ej = l.useRef(null),
            eR = l.useRef(null),
            eM = l.useRef(null),
            eL = l.useRef(null);
        e_?.(eR.current);
        let { activeCommand: eD } = (0, u.cf)([D.A], () => ({
                activeCommand: N.commands?.enabled ? D.A.getActiveCommand(I.id) : null,
                activeCommandSection: N.commands?.enabled ? D.A.getActiveCommandSection(I.id) : null,
            })),
            {
                isLurking: eP,
                isPendingMember: eO,
                disabled: ew,
                canAttachFiles: eU,
                canEveryoneSendMessages: ek,
            } = (0, et.Sk)(I, N, eD, x),
            eG = !z.D_.useSetting() && !(0, q.isAndroidWeb)() && null != window.ResizeObserver,
            eF = !eG || !N.commands?.enabled || !v || "/" !== a,
            eH = (0, B.A)(),
            { fontSize: eB } = (0, u.cf)([R.A], () => ({
                fontSize: R.A.fontSize,
                isSubmitButtonEnabled: R.A.isSubmitButtonEnabled,
            })),
            eV = (0, u.bG)([W.A], () => W.A.isEnabled()),
            ez = (0, V.n)(I);
        (0, et.N_)(N, ew, I.id);
        let { eventEmitter: eK, handleEditorSelectionChanged: eW } = (0, et.ml)(eR, a, r),
            eY = l.useCallback(
                (e) => {
                    let t = (e) => (
                            e.shouldClear && ((0, O.x)(I.id, { title: "", heroFile: null }), eR.current?.blur()), e
                        ),
                        n = [],
                        i = (eI.length > 0 ? eI : e.value.length > 0 ? e.value : es.intl.string(es.t["7Xm5QI"])).slice(
                            0,
                            el.Ign,
                        );
                    if (null == eN)
                        return H({
                            ...e,
                            announcementSendOptions: { createThread: ez && eT, threadName: i, publish: ev },
                        }).then(t);
                    n.push({ type: b.I5.MEDIA_GALLERY, items: [ec(`attachment://${eN.name}`, null, !1)], id: "82733" }),
                        e.value.length > 0 && n.push({ type: b.I5.TEXT_DISPLAY, content: e.value, id: "82744" });
                    let l = Y.A.getUploads(I.id, K.C.ChannelMessage),
                        a = l.filter((e) => (e.isImage || e.isVideo) && e.filename !== eN?.name),
                        s = l.filter((e) => !e.isImage && !e.isVideo && e.filename !== eN?.name),
                        r = a.map((e) => ec(`attachment://${e.filename}`, e.description, e.spoiler));
                    return (
                        r.length > 0 && n.push({ type: b.I5.MEDIA_GALLERY, items: r, id: "82755" }),
                        s.forEach((e, t) => {
                            n.push({
                                type: b.I5.FILE,
                                file: ec(`attachment://${e.filename}`, e.description, e.spoiler).media,
                                id: `${82766 + t}`,
                                spoiler: e.spoiler,
                                name: null,
                                size: null,
                            });
                        }),
                        H({
                            ...e,
                            components: n,
                            announcementSendOptions: { createThread: ez && eT, threadName: i, publish: ev },
                        }).then(t)
                    );
                },
                [H, eI, eN, I.id, eT, ev, ez],
            ),
            { submit: eJ, handleSubmit: eq } = (0, et.Zx)(eY, N, eR, eL, I.id),
            { autocompleteRef: e$, handleMaybeShowAutocomplete: eZ, handleHideAutocomplete: eX } = (0, et.v7)(),
            eQ = l.useCallback(() => eL?.current?.hide(), []),
            { editorHeight: e0, handleResize: e1 } = (0, et.ck)(j),
            {
                handleTab: e2,
                handleEnter: e3,
                handleMoveSelection: e7,
            } = ((n = l.useCallback(
                () => !!(!eF && ej.current?.onTabOrEnter(!1)) || e$.current?.onTabOrEnter(!1) || !1,
                [eF],
            )),
            {
                handleTab: n,
                handleEnter: l.useCallback(
                    () => !!(!eF && ej.current?.onTabOrEnter(!0)) || e$.current?.onTabOrEnter(!1) || !1,
                    [eF],
                ),
                handleMoveSelection: l.useCallback(
                    (e) => !!(!eF && ej.current?.onMoveSelection(e)) || e$.current?.onMoveSelection(e) || !1,
                    [eF],
                ),
            }),
            {
                expressionPickerView: e9,
                shouldHideExpressionPicker: e6,
                handleOuterClick: e4,
            } = (0, et.MD)(N, eR, I.id),
            { handleAutocompleteVisibilityChange: e5 } = (0, et.uW)(N, I.id),
            e8 = (0, et.NO)(eR),
            te = (0, et.Vu)(eJ, N, eR),
            tt = (0, et.HG)(eR),
            tn = (0, et.C)({
                editorRef: eR,
                disabled: ew,
                textValue: a,
                channelId: I.id,
                chatInputType: N,
                submit: eY,
            });
        (0, Z.R)(eK, I.guild_id, I.id);
        let [ti, tl] = l.useState(!1),
            ta = l.useCallback(() => {
                e4(), tl(!0);
            }, [e4]),
            ts = ti || a.length > 0 || null != eN || eI.length > 0,
            { editorHeaderHeight: tr, paddingTop: to } = (0, A.z)({
                editorHeaderHeight: 122 * !!ts,
                paddingTop: 16 * !!ts,
                config: { tension: 120, friction: 15, clamp: !0 },
            }),
            tc = l.useRef(null),
            [td, tu] = l.useState(!1),
            th = l.useRef(!1),
            tm = l.useCallback(() => {
                th.current = !0;
                let e = setTimeout(() => {
                    th.current && tu(!0);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tA = l.useCallback(() => {
                th.current = !1;
                let e = setTimeout(() => {
                    th.current || tu(!1);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tg = l.useCallback(() => {
                if (null == eN) return;
                let e = Y.A.getUploads(I.id, N.drafts.type),
                    t = e.find((e) => e.filename === eN.name)?.id;
                null != t && y.A.remove(I.id, t, K.C.ChannelMessage), (0, O.x)(I.id, { heroFile: null });
            }, [I.id, eN, N.drafts.type]);
        return (0, i.jsx)(w.Sv, {
            value: eK,
            children: (0, i.jsxs)(L.f5, {
                value: ey,
                children: [
                    (0, i.jsxs)("div", {
                        ref: eb,
                        className: s()(d, eo.gM),
                        onMouseDown: ta,
                        children: [
                            (0, i.jsx)("div", {
                                ref: eM,
                                onScroll: eQ,
                                className: s()(eo.Ui, { [eo.k6]: !eE }),
                                children: (0, i.jsxs)("div", {
                                    className: s()(eo.vW, er.vW),
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: er.rf,
                                            children: [
                                                (0, i.jsxs)(c.animated.div, {
                                                    className: er.ov,
                                                    style: { height: tr, paddingTop: to },
                                                    children: [
                                                        null != eN
                                                            ? (0, i.jsx)(eh, { file: eN, onRemoveHeroImage: tg })
                                                            : null,
                                                        null != eN
                                                            ? null
                                                            : (0, i.jsx)(eA, {
                                                                  channel: I,
                                                                  onImageUploaded: (e) =>
                                                                      (0, O.x)(I.id, { heroFile: e }),
                                                                  onFocus: () => tl(!0),
                                                              }),
                                                        (0, i.jsx)("input", {
                                                            maxLength: 140,
                                                            className: er.hz,
                                                            placeholder: es.intl.string(es.t.Z8fYjO),
                                                            value: eI,
                                                            onChange: (e) => (0, O.x)(I.id, { title: e.target.value }),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)("div", {
                                                    className: er.I6,
                                                    children: (0, i.jsx)(g.vN, {
                                                        ringTarget: eb,
                                                        ringClassName: eo.Rg,
                                                        children: (0, i.jsx)(Q.A, {
                                                            ref: eR,
                                                            id: h,
                                                            focused: v,
                                                            useSlate: eG,
                                                            textValue: a,
                                                            richValue: r,
                                                            disabled: ew,
                                                            placeholder: ed,
                                                            required: m,
                                                            accessibilityLabel: S,
                                                            isPreviewing: (eP || eO) && ek,
                                                            channel: I,
                                                            type: X.oU.CREATE_ANNOUNCEMENT_POST,
                                                            canPasteFiles: eU,
                                                            uploadPromptCharacterCount: el.CS1,
                                                            maxCharacterCount: ea ?? eH,
                                                            allowNewLines: !0,
                                                            "aria-describedby": eg,
                                                            onChange: T,
                                                            onResize: e1,
                                                            onBlur: U,
                                                            onFocus: G,
                                                            onKeyDown: F,
                                                            onSubmit: eJ,
                                                            onTab: e2,
                                                            onEnter: e3,
                                                            onMoveSelection: e7,
                                                            onSelectionChanged: eW,
                                                            onMaybeShowAutocomplete: eZ,
                                                            onHideAutocomplete: eX,
                                                            promptToUpload: J,
                                                            fontSize: eB,
                                                            spellcheckEnabled: eV,
                                                            canOnlyUseTextCommands: !1,
                                                            "aria-labelledby": ep,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)("div", {
                                            className: er.KK,
                                            children: (0, i.jsx)(ei.A, {
                                                channelId: I.id,
                                                type: N,
                                                canAttachFiles: eU,
                                                ignoreFile: eN?.name,
                                                smallAttachments: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, i.jsx)("div", { className: er.yF }),
                            (0, i.jsxs)("div", {
                                className: er.qr,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: er.j4,
                                        children: [
                                            (0, i.jsx)(em, { channel: I }),
                                            (0, i.jsx)(ee.A, {
                                                type: X.oU.CREATE_ANNOUNCEMENT_POST,
                                                disabled: ew,
                                                channel: I,
                                                handleSubmit: eq,
                                                isEmpty: 0 === a.trim().length,
                                                showAllButtons: !0,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)("div", {
                                        className: er.j4,
                                        children: (0, i.jsx)("div", {
                                            ref: tc,
                                            className: er.Qo,
                                            onMouseEnter: tm,
                                            onMouseLeave: tA,
                                            children: (0, i.jsx)(p.Y, {
                                                targetElementRef: tc,
                                                renderPopout: () =>
                                                    (0, i.jsx)(eu, { channelId: I.id, canCreateThread: ez }),
                                                shouldShow: td,
                                                autoInvert: !0,
                                                nudgeAlignIntoViewport: !0,
                                                position: "top",
                                                align: "right",
                                                children: (e) =>
                                                    (0, i.jsx)(_.$, {
                                                        ...e,
                                                        onClick: () => {
                                                            eJ(
                                                                `${
                                                                    eI.length > 0
                                                                        ? `# ${eI}
`
                                                                        : ""
                                                                }${a}`,
                                                            );
                                                        },
                                                        disabled: 0 === a.length && 0 === eI.length,
                                                        size: "sm",
                                                        "aria-label": es.intl.string(es.t.TXNS7S),
                                                        innerClassName: er.jo,
                                                        text: (0, i.jsxs)("div", {
                                                            className: er.f9,
                                                            children: [
                                                                (0, i.jsx)(f.E, {
                                                                    variant: "text-sm/semibold",
                                                                    color: "always-white",
                                                                    children: es.intl.string(es.t.TXNS7S),
                                                                }),
                                                                (0, i.jsxs)("div", {
                                                                    className: er.pj,
                                                                    children: [
                                                                        (0, i.jsx)(E.l, { size: "xs", color: "white" }),
                                                                        ez && eT
                                                                            ? (0, i.jsx)(C.y, {
                                                                                  size: "xxs",
                                                                                  color: "white",
                                                                                  className: er.Q5,
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
                            (0, i.jsx)(P.A, {
                                targetRef: eb,
                                ref: e$,
                                channel: I,
                                canMentionRoles: $,
                                canMentionChannels: en,
                                useNewSlashCommands: eG,
                                canOnlyUseTextCommands: !1,
                                canSendStickers: !0,
                                textValue: a,
                                focused: v,
                                expressionPickerView: e9,
                                type: N,
                                editorRef: eR,
                                onSendMessage: eJ,
                                onSendSticker: () => {},
                                onVisibilityChange: e5,
                                editorHeight: e0,
                                setValue: (e, t) => T?.(null, e, t),
                                position: ef,
                            }),
                        ],
                    }),
                    e6
                        ? null
                        : (0, i.jsx)(k.A, {
                              positionTargetRef: eb,
                              type: N,
                              onSelectGIF: te,
                              onSelectEmoji: e8,
                              onSelectKaomoji: tt,
                              onSelectSticker: tn,
                              channel: I,
                              closeOnModalOuterClick: eC,
                              parentModalKey: ex,
                              position: "top",
                              align: "right",
                              positionLayerClassName: eo.BD,
                          }),
                ],
            }),
        });
    }),
);
function eu(e) {
    let { channelId: t, canCreateThread: n } = e,
        l = O.A.useField("channelDrafts")[t],
        a = l?.createThread ?? !0,
        s = l?.publish ?? !0;
    return (0, i.jsxs)(x.W, {
        "data-menu-migrated": !0,
        "aria-label": es.intl.string(es.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: el.tEg,
        onSelect: el.tEg,
        children: [
            (0, i.jsx)(S.sL, {
                id: "create-thread",
                label: es.intl.string(es.t.rBIGBL),
                checked: n && a,
                disabled: !n,
                action: () => {
                    (0, O.x)(t, { createThread: !a });
                },
            }),
            (0, i.jsx)(S.sL, {
                id: "send-and-publish",
                label: es.intl.string(es.t.MFGE51),
                checked: s,
                action: () => {
                    (0, O.x)(t, { publish: !s });
                },
            }),
        ],
    });
}
function eh(e) {
    let { file: t, onRemoveHeroImage: n } = e,
        [a, s] = l.useState();
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
    let [r, o] = l.useState(!1),
        c = l.useCallback(() => {
            o(!0);
        }, []),
        d = l.useCallback(() => {
            o(!1);
        }, []);
    return null == a
        ? null
        : (0, i.jsxs)("div", {
              onMouseEnter: c,
              onMouseLeave: d,
              className: er.Lb,
              "aria-hidden": !0,
              children: [
                  (0, i.jsx)("img", { src: a, alt: es.intl.string(es.t["2ePvR8"]), className: er.c8 }),
                  r
                      ? (0, i.jsx)(U.Ay, {
                            className: er.jM,
                            children: (0, i.jsx)(en.A, {
                                tooltip: es.intl.string(es.t.VjC21x),
                                onClick: n,
                                dangerous: !0,
                                children: (0, i.jsx)(I.u, {}),
                            }),
                        })
                      : null,
              ],
          });
}
function em(e) {
    let { channel: t } = e;
    return (0, i.jsx)(G.A, {
        "aria-label": es.intl.string(es.t["/IBYAq"]),
        className: er.g$,
        size: "icon",
        color: "transparent",
        look: "blank",
        onChange: (e) => {
            (0, $.R)(e.currentTarget.files, t, K.C.ChannelMessage, { requireConfirm: !0, origin: "file_picker" }),
                (e.currentTarget.value = null);
        },
        children: (0, i.jsx)(N.H, {
            size: "custom",
            width: 20,
            height: 20,
            color: h.A.colors.INTERACTIVE_TEXT_DEFAULT,
        }),
    });
}
function eA(e) {
    let { channel: t, onImageUploaded: n, onFocus: a } = e,
        s = l.useRef(null),
        r = async (e, i) => {
            let l = await (0, J.bX)(e, i.name, i.type),
                a = { id: (0, d.A)(), file: l, platform: j.xz.WEB, isThumbnail: !1, origin: "file_picker" };
            y.A.addFile({ file: a, channelId: t.id, draftType: K.C.ChannelMessage }), n(l);
        },
        [o, c] = l.useState(!1),
        u = l.useCallback(() => {
            c(!0);
        }, []),
        A = l.useCallback(() => {
            c(!1);
        }, []);
    return (0, i.jsx)("div", {
        className: er.qN,
        children: (0, i.jsx)(m.m, {
            asContainer: !0,
            text: es.intl.string(es.t["/IBYAq"]),
            position: "top",
            children: (0, i.jsxs)(v.D, {
                className: er.qN,
                onMouseOver: u,
                onMouseOut: A,
                onFocus: a,
                children: [
                    (0, i.jsx)(H.Ay, {
                        ref: s,
                        onChange: r,
                        "aria-hidden": !0,
                        tabIndex: -1,
                        maxFileSizeBytes: ea.j,
                        onFileSizeError: () => (0, F.A)(ea.j),
                    }),
                    (0, i.jsx)(T.X, {
                        size: "md",
                        color: o ? h.A.colors.INTERACTIVE_TEXT_ACTIVE : h.A.colors.INTERACTIVE_TEXT_DEFAULT,
                    }),
                ],
            }),
        }),
    });
}
