l.d(t, { A: () => ew });
var a = l(477900),
    n = l(582128),
    i = l(17928),
    r = l(834730),
    s = l(408278),
    o = l(983851),
    c = l(358618),
    u = l(192308),
    d = l(825484),
    m = l(866665),
    f = l(27232),
    h = l(505930),
    p = l(241326),
    x = l(365199),
    v = l(92446),
    g = l(972213),
    b = l(364522),
    j = l(821609),
    y = l(428610),
    C = l(48507),
    N = l(750943),
    w = l(342073),
    E = l(831544),
    k = l(7807),
    A = l(663341),
    L = l(442433),
    R = l(793574),
    T = l(688810),
    I = l(429913),
    M = l(769015),
    D = l(540999),
    S = l(915725),
    O = l(614584),
    P = l(253799),
    _ = l(721610),
    z = l(686320),
    $ = l(105009),
    U = l(645655),
    G = l(352527),
    B = l(635793),
    H = l(758262),
    X = l(503698),
    F = l.n(X),
    W = l(31300),
    V = l(646270),
    K = l(748562),
    Y = l(477155),
    Z = l(939249),
    Q = l(417270),
    q = l(696016),
    J = l(507216),
    ee = l(105292),
    et = l(301187),
    el = l(367454);
let ea = [
    { preset: q.yz.ORIGINAL, icon: W.k, label: J.default.CujCES },
    { preset: q.yz.PORTRAIT_9_16, icon: V.u, label: J.default["34PW6m"] },
    { preset: q.yz.LANDSCAPE_16_9, icon: K.U, label: J.default.ywAdnD },
];
function en() {
    let { cropPreset: e, setCropPreset: t, setActiveTool: l } = (0, H.T)();
    return (0, a.jsxs)("div", {
        className: et.XV,
        children: [
            (0, a.jsx)("div", {
                className: el.CD,
                children: (0, a.jsx)(j.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: Y.r,
                    iconPosition: "start",
                    text: ee.intl.string(J.default["7yBrfD"]),
                    onClick: () => l(B.Y.NONE),
                }),
            }),
            (0, a.jsxs)(b.Ip, {
                className: el.hX,
                children: [
                    (0, a.jsx)(r.E, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: ee.intl.string(J.default["1TOrU3"]),
                    }),
                    (0, a.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, a.jsx)(r.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(J.default.r15Wrn),
                            }),
                            (0, a.jsx)("div", {
                                className: el.si,
                                children: ea.map((l) => {
                                    let { preset: n, icon: i, label: s } = l,
                                        o = e === n;
                                    return (0, a.jsxs)(
                                        Z.D,
                                        {
                                            "aria-pressed": o,
                                            className: F()(el.is, o && el.j5),
                                            onClick: () => t(n),
                                            children: [
                                                (0, a.jsx)(i, { size: "md" }),
                                                (0, a.jsx)(r.E, {
                                                    variant: "text-xs/medium",
                                                    children: ee.intl.string(s),
                                                }),
                                            ],
                                        },
                                        n,
                                    );
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: et.G3,
                children: (0, a.jsx)(j.$, {
                    fullWidth: !0,
                    variant: "secondary",
                    icon: Q.RetryIcon,
                    iconPosition: "start",
                    text: ee.intl.string(J.default.XdZS9I),
                    onClick: () => t(q.yz.ORIGINAL),
                }),
            }),
        ],
    });
}
var ei = l(95477),
    er = l(22231),
    es = l(718812);
l(600253);
var eo = l(880275);
function ec(e) {
    let { variant: t, className: l, containerClassName: i } = e,
        { clip: s, clipName: o, setClipName: c } = (0, H.T)(),
        u = (0, es.h)(s),
        [d, m] = n.useState(!1);
    if (d)
        return (0, a.jsx)(ei.k, {
            autoFocus: !0,
            value: o,
            placeholder: u,
            minLength: q.U_,
            maxLength: 200,
            onChange: (e) => c("" === e ? void 0 : e),
            onBlur: () => m(!1),
            onKeyDown: (e) => {
                ("Enter" === e.key || "Escape" === e.key) && (e.stopPropagation(), e.currentTarget.blur());
            },
        });
    let f = null != o && "" !== o ? o : u;
    return (0, a.jsxs)(Z.D, {
        className: F()(eo.x, i),
        onClick: () => m(!0),
        children: [
            (0, a.jsx)(r.E, { variant: t, color: "text-default", className: l, children: f }),
            (0, a.jsx)(er.PencilIcon, { className: eo.I, size: "xs", color: "currentColor" }),
        ],
    });
}
var eu = l(317097),
    ed = l(48736),
    em = l(245116),
    ef = l(393688),
    eh = l(839578);
let ep = [
        { value: q.Hz.NONE, label: J.default.IqUUKg },
        { value: q.Hz.SMALL, label: J.default.VearyN },
        { value: q.Hz.MEDIUM, label: J.default.AJsDsD },
        { value: q.Hz.LARGE, label: J.default.k5w7Jy },
    ],
    ex = [0, 0xffffff, 0xfe6e0d, 5793266, 0xff4cd2];
function ev(e) {
    let { track: t } = e,
        { updateImageTrackData: l, pickAndReplaceImage: n, setSelectedTrackId: i, removeTrack: s } = (0, em.fn)(),
        o = t.data.shadow ?? q.xy,
        c = t.data.shadowColor ?? q.pk;
    return (0, a.jsxs)("div", {
        className: et.XV,
        children: [
            (0, a.jsx)("div", {
                className: el.CD,
                children: (0, a.jsx)(j.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: Y.r,
                    iconPosition: "start",
                    text: ee.intl.string(J.default["7yBrfD"]),
                    onClick: () => i(null),
                }),
            }),
            (0, a.jsxs)(b.Ip, {
                className: el.hX,
                children: [
                    (0, a.jsx)("div", {
                        className: eh.r5,
                        children: (0, a.jsx)(r.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: ee.intl.string(J.default.S0ODmT),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, a.jsxs)("div", {
                                className: el.L0,
                                children: [
                                    (0, a.jsx)("img", { className: ef.Z, src: t.data.src, alt: "", "aria-hidden": !0 }),
                                    (0, a.jsx)(r.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: el.FA,
                                        children: t.data.fileName,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(j.$, {
                                variant: "secondary",
                                icon: N.X,
                                iconPosition: "start",
                                fullWidth: !0,
                                text: ee.intl.string(J.default.wR5R9w),
                                onClick: () => n(t.id),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, a.jsx)(r.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(J.default["/v2zZ+"]),
                            }),
                            (0, a.jsx)("div", {
                                className: ef.p,
                                children: ep.map((e) => {
                                    let { value: n, label: i } = e,
                                        s = o === n;
                                    return (0, a.jsx)(
                                        Z.D,
                                        {
                                            "aria-pressed": s,
                                            className: F()(el.is, s && el.j5),
                                            onClick: () => l(t.id, (e) => ({ ...e, shadow: n })),
                                            children: (0, a.jsx)(r.E, {
                                                variant: "text-sm/medium",
                                                children: ee.intl.string(i),
                                            }),
                                        },
                                        n,
                                    );
                                }),
                            }),
                        ],
                    }),
                    o !== q.Hz.NONE &&
                        (0, a.jsxs)("div", {
                            className: eh.zo,
                            children: [
                                (0, a.jsx)(r.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(J.default.P5dSl0),
                                }),
                                (0, a.jsx)(ed.default, {
                                    defaultColor: (0, eu.LX)(q.pk),
                                    colors: ex,
                                    className: eh.Ei,
                                    colorContainerClassName: eh.oP,
                                    value: (0, eu.LX)(c),
                                    onChange: (e) => l(t.id, (t) => ({ ...t, shadowColor: (0, eu.Hl)(e) })),
                                    allowBlackCustomColor: !0,
                                }),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)("div", {
                className: et.G3,
                children: (0, a.jsx)(j.$, {
                    size: "md",
                    variant: "secondary",
                    icon: p.TrashIcon,
                    iconPosition: "start",
                    fullWidth: !0,
                    text: ee.intl.string(J.default.ytiENm),
                    onClick: () => s(t.id),
                }),
            }),
        ],
    });
}
let eg = [
        { value: 0.04, label: J.default.zYVcjp },
        { value: 0.06, label: J.default.LGX80j },
        { value: 0.09, label: J.default.sa6Q0q },
    ],
    eb = [
        { value: q.UY.NONE, label: J.default["tYuPp+"] },
        { value: q.UY.SMALL, label: J.default["42Skzz"] },
        { value: q.UY.MEDIUM, label: J.default["Ujlm+F"] },
        { value: q.UY.LARGE, label: J.default.lT4Cq2 },
    ],
    ej = [0xfe6e0d, 0xffe047, 3534206, 5793266, 0xff4cd2];
function ey(e) {
    let { track: t } = e,
        { updateTextTrackData: l, setSelectedTrackId: n, removeTrack: i } = (0, em.fn)();
    return (0, a.jsxs)("div", {
        className: et.XV,
        children: [
            (0, a.jsx)("div", {
                className: el.CD,
                children: (0, a.jsx)(j.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: Y.r,
                    iconPosition: "start",
                    text: ee.intl.string(J.default["7yBrfD"]),
                    onClick: () => n(null),
                }),
            }),
            (0, a.jsxs)(b.Ip, {
                className: el.hX,
                children: [
                    (0, a.jsx)("div", {
                        className: eh.r5,
                        children: (0, a.jsx)(r.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: ee.intl.string(J.default.GtvDbf),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, a.jsx)(r.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(J.default["R/JN4b"]),
                            }),
                            (0, a.jsx)(ei.k, {
                                value: t.data.text,
                                onChange: (e) => l(t.id, (t) => ({ ...t, text: e })),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, a.jsx)(r.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(J.default["4eAE08"]),
                            }),
                            (0, a.jsx)("div", {
                                className: el.si,
                                children: eg.map((e) => {
                                    let { value: n, label: i } = e,
                                        s = t.data.style.fontSize === n;
                                    return (0, a.jsx)(
                                        Z.D,
                                        {
                                            "aria-pressed": s,
                                            className: F()(el.is, s && el.j5),
                                            onClick: () =>
                                                l(t.id, (e) => ({ ...e, style: { ...e.style, fontSize: n } })),
                                            children: (0, a.jsx)(r.E, {
                                                variant: "text-sm/medium",
                                                children: ee.intl.string(i),
                                            }),
                                        },
                                        n,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: eh.zo,
                        children: [
                            (0, a.jsx)(r.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(J.default["9oleCI"]),
                            }),
                            (0, a.jsx)(ed.default, {
                                defaultColor: 0xffffff,
                                colors: ej,
                                className: eh.Ei,
                                colorContainerClassName: eh.oP,
                                value: (0, eu.LX)(t.data.style.color),
                                onChange: (e) =>
                                    l(t.id, (t) => ({ ...t, style: { ...t.style, color: (0, eu.Hl)(e) } })),
                                allowBlackCustomColor: !0,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, a.jsx)(r.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(J.default.huZ6Mm),
                            }),
                            (0, a.jsx)("div", {
                                className: el.si,
                                children: eb.map((e) => {
                                    let { value: n, label: i } = e,
                                        s = t.data.style.strokeWidth === n;
                                    return (0, a.jsx)(
                                        Z.D,
                                        {
                                            "aria-pressed": s,
                                            className: F()(el.is, s && el.j5),
                                            onClick: () =>
                                                l(t.id, (e) => ({ ...e, style: { ...e.style, strokeWidth: n } })),
                                            children: (0, a.jsx)(r.E, {
                                                variant: "text-sm/medium",
                                                children: ee.intl.string(i),
                                            }),
                                        },
                                        n,
                                    );
                                }),
                            }),
                        ],
                    }),
                    t.data.style.strokeWidth !== q.UY.NONE &&
                        (0, a.jsxs)("div", {
                            className: eh.zo,
                            children: [
                                (0, a.jsx)(r.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(J.default.iQZQyA),
                                }),
                                (0, a.jsx)(ed.default, {
                                    defaultColor: 0,
                                    colors: ej,
                                    className: eh.Ei,
                                    colorContainerClassName: eh.oP,
                                    value: (0, eu.LX)(t.data.style.strokeColor),
                                    onChange: (e) =>
                                        l(t.id, (t) => ({ ...t, style: { ...t.style, strokeColor: (0, eu.Hl)(e) } })),
                                    allowBlackCustomColor: !0,
                                }),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)("div", {
                className: et.G3,
                children: (0, a.jsx)(j.$, {
                    size: "md",
                    variant: "secondary",
                    icon: p.TrashIcon,
                    iconPosition: "start",
                    fullWidth: !0,
                    text: ee.intl.string(J.default.LYpz7y),
                    onClick: () => i(t.id),
                }),
            }),
        ],
    });
}
let eC = P.I.difference(new Set([P.C.EXPORT_TO_SOUNDBOARD, P.C.FAVORITE, P.C.DELETE, P.C.MAIN_ACTION, P.C.EDIT]));
function eN(e) {
    let { icon: t, label: l, count: n, enabled: i, disabled: u = !1, onToggle: d } = e;
    return (0, a.jsxs)("div", {
        className: el.l3,
        children: [
            (0, a.jsx)("div", { className: el.sW, children: t }),
            (0, a.jsx)(r.E, { variant: "text-sm/normal", color: "text-default", className: el.RZ, children: l }),
            null != n &&
                n > 0 &&
                (0, a.jsx)("div", {
                    className: el.Mo,
                    children: (0, a.jsx)(r.E, { variant: "text-xs/medium", color: "text-muted", children: n }),
                }),
            (0, a.jsx)("div", {
                className: el.To,
                children: (0, a.jsx)(s.K, {
                    size: "sm",
                    variant: "icon-only",
                    disabled: u,
                    icon: i ? o.H : c._,
                    onClick: () => d(!i),
                    "aria-label": l,
                    "aria-pressed": i,
                }),
            }),
        ],
    });
}
function ew(e) {
    let { activeTool: t } = (0, H.T)(),
        { tracks: l, selectedTrackId: n } = (0, em.fn)(),
        i = l.find((e) => e.id === n);
    if (null != i)
        switch (i.type) {
            case q.Me.TEXT:
                return (0, a.jsx)(ey, { track: i });
            case q.Me.IMAGE:
                return (0, a.jsx)(ev, { track: i });
        }
    switch (t) {
        case B.Y.CROP:
            return (0, a.jsx)(en, {});
        case B.Y.NONE:
        default:
            return (0, a.jsx)(eE, { ...e });
    }
}
function eE(e) {
    let { channelId: t, onEdit: o, onClose: c, onExit: P } = e,
        {
            getEditedClip: X,
            voiceAudioEnabled: F,
            setVoiceAudioEnabled: W,
            applicationAudioEnabled: V,
            setApplicationAudioEnabled: K,
            soundboardAudioEnabled: Y,
            setSoundboardAudioEnabled: Z,
            pause: Q,
            clip: ea,
            editOnly: en,
            setActiveTool: ei,
            audioTracks: er,
        } = (0, H.T)(),
        { analyticsLocations: es } = (0, T.Ay)(R.A.CLIPS_EDITOR),
        { addTextTrack: eo, pickAndAddImageTrack: eu, setSelectedTrackId: ed } = (0, em.fn)(),
        { isCropEnabled: ef, isTextTrackEnabled: eh, isImageTrackEnabled: ep } = (0, em.As)(),
        ex = ea.type === q.nQ.SCREENSHOT,
        ev = ea.type === q.nQ.VOICE_CLIP,
        eg = (0, I.h)(ea.applicationId),
        eb = (0, i.bG)([S.Ay], () => S.Ay.isClipExporting(ea.id)),
        { onShareClick: ej } = (0, G.A)(t),
        { picker: ey } = n.useContext(_.$),
        ew = (0, z.$)(ey?.action),
        eE = (0, i.bG)([D.A], () => D.A.isDeveloper),
        ek = n.useMemo(() => er.filter((e) => e.trackName.includes(q.gC.VOICE)).length, [er]),
        eA = n.useMemo(() => er.filter((e) => e.trackName.includes(q.gC.SOUNDBOARD)).length, [er]),
        eL = eg?.name ?? ea.applicationName ?? ee.intl.string(ee.t.GnQui9);
    async function eR() {
        await (0, $.n)(X(), { channelId: t, analyticsLocations: es });
    }
    return (0, a.jsxs)("div", {
        className: et.XV,
        children: [
            (0, a.jsxs)("div", {
                className: et.eW,
                children: [
                    (0, a.jsxs)(d.e, {
                        wrap: !1,
                        size: "sm",
                        align: "center",
                        justify: "start",
                        direction: "horizontal",
                        children: [
                            (0, a.jsx)(m.m, {
                                position: "bottom",
                                text: ea.isFavorite
                                    ? ee.intl.string(J.default.IZsalP)
                                    : ee.intl.string(J.default.ihBfyA),
                                children: (0, a.jsx)(s.K, {
                                    onClick: () => (0, O.XK)(ea),
                                    variant: "icon-only",
                                    "aria-label": ea.isFavorite
                                        ? ee.intl.string(J.default.IZsalP)
                                        : ee.intl.string(J.default.ihBfyA),
                                    icon: ea.isFavorite ? f.StarIcon : h.y,
                                }),
                            }),
                            (0, a.jsx)(m.m, {
                                position: "bottom",
                                text: ee.intl.string(ee.t.oyYWHE),
                                children: (0, a.jsx)(s.K, {
                                    onClick: (e) => (0, U.A)(e, { clips: [ea], onAfterDelete: c }),
                                    variant: "icon-only",
                                    "aria-label": ee.intl.string(ee.t.oyYWHE),
                                    icon: p.TrashIcon,
                                }),
                            }),
                            (0, a.jsx)(m.m, {
                                position: "bottom",
                                text: ee.intl.string(ee.t.PdRCRg),
                                children: (0, a.jsx)(s.K, {
                                    onClick: function (e) {
                                        (Q(),
                                            (0, L.L3)(e, async () => {
                                                let { default: e } = await Promise.all([
                                                    l.e("249169"),
                                                    l.e("657266"),
                                                    l.e("272396"),
                                                    l.e("595429"),
                                                    l.e("311930"),
                                                    l.e("320891"),
                                                    l.e("531279"),
                                                    l.e("371863"),
                                                    l.e("398793"),
                                                    l.e("338601"),
                                                    l.e("669006"),
                                                    l.e("886456"),
                                                    l.e("218489"),
                                                    l.e("218307"),
                                                    l.e("520342"),
                                                    l.e("6896"),
                                                ]).then(l.bind(l, 553075));
                                                return (l) =>
                                                    (0, a.jsx)(e, {
                                                        ...l,
                                                        clips: [X()],
                                                        analyticsLocations: es,
                                                        channelId: t,
                                                        onAfterDelete: c,
                                                        displayConfiguration: eC,
                                                    });
                                            }));
                                    },
                                    variant: "icon-only",
                                    "aria-label": ee.intl.string(ee.t.PdRCRg),
                                    icon: x.MoreHorizontalIcon,
                                }),
                            }),
                            eE &&
                                (0, a.jsx)(m.m, {
                                    position: "bottom",
                                    text: "Clip Debug",
                                    children: (0, a.jsx)(s.K, {
                                        onClick: function () {
                                            (0, u.openModalLazy)(
                                                async () => {
                                                    let { default: e } = await Promise.all([
                                                        l.e("860350"),
                                                        l.e("848625"),
                                                        l.e("883952"),
                                                        l.e("310000"),
                                                    ]).then(l.bind(l, 224883));
                                                    return (t) => (0, a.jsx)(e, { ...t, clip: ea });
                                                },
                                                { stackingBehavior: "stack" },
                                            );
                                        },
                                        icon: v.BugIcon,
                                        variant: "icon-only",
                                        "aria-label": "Clip Debug",
                                    }),
                                }),
                        ],
                    }),
                    (0, a.jsx)(m.m, {
                        position: "bottom",
                        text: ee.intl.string(ee.t.cpT0Cq),
                        children: (0, a.jsx)(s.K, {
                            onClick: P ?? c,
                            icon: g.XLargeIcon,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": ee.intl.string(ee.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)(b.Ip, {
                className: et.Md,
                children: [
                    (0, a.jsxs)("div", {
                        className: el.uW,
                        children: [
                            (0, a.jsx)(r.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(J.default.JrcRaE),
                            }),
                            (0, a.jsxs)("div", {
                                className: el.L0,
                                children: [
                                    "" !== ea.thumbnail &&
                                        (0, a.jsx)("img", {
                                            className: el.Nf,
                                            src: ea.thumbnail,
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                    (0, a.jsx)(ec, {
                                        variant: "text-sm/medium",
                                        className: el.FA,
                                        containerClassName: el.vt,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !ex &&
                        !ev &&
                        (ef || eh || ep) &&
                        (0, a.jsxs)("div", {
                            className: el.uW,
                            children: [
                                (0, a.jsx)(r.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(J.default.FmXxW6),
                                }),
                                ef &&
                                    (0, a.jsx)(j.$, {
                                        variant: "secondary",
                                        icon: y.K,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: ee.intl.string(J.default.RiEyiS),
                                        onClick: () => {
                                            (ed(null), ei(B.Y.CROP));
                                        },
                                    }),
                                eh &&
                                    (0, a.jsx)(j.$, {
                                        variant: "secondary",
                                        icon: C.x,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: ee.intl.string(J.default.zSN9vp),
                                        onClick: eo,
                                    }),
                                ep &&
                                    (0, a.jsx)(j.$, {
                                        variant: "secondary",
                                        icon: N.X,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: ee.intl.string(J.default.iFo3gj),
                                        onClick: eu,
                                    }),
                            ],
                        }),
                    !ex &&
                        (0, a.jsxs)("div", {
                            className: el.uW,
                            children: [
                                (0, a.jsx)(r.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(J.default.KRnA2D),
                                }),
                                (0, a.jsxs)("div", {
                                    className: el.VZ,
                                    children: [
                                        (0, a.jsx)(eN, {
                                            icon:
                                                null != eg
                                                    ? (0, a.jsx)(M.A, { game: eg, size: M.M.XXSMALL })
                                                    : (0, a.jsx)(w.L, { size: "sm", color: "currentColor" }),
                                            label: eL,
                                            enabled: V,
                                            onToggle: K,
                                        }),
                                        (0, a.jsx)(eN, {
                                            icon: (0, a.jsx)(E.MicrophoneIcon, { size: "sm", color: "currentColor" }),
                                            label: ee.intl.string(J.default.ai9fWO),
                                            count: ek,
                                            enabled: F,
                                            disabled: 0 === ek,
                                            onToggle: W,
                                        }),
                                        (0, a.jsx)(eN, {
                                            icon: (0, a.jsx)(k.J, { size: "sm", color: "currentColor" }),
                                            label: ee.intl.string(J.default["/VVQKJ"]),
                                            enabled: Y,
                                            disabled: 0 === eA,
                                            onToggle: Z,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)("div", {
                className: et.G3,
                children: (0, a.jsx)(d.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: en
                        ? (0, a.jsx)(j.$, {
                              loading: eb,
                              disabled: eb,
                              variant: "primary",
                              onClick: () =>
                                  ej({
                                      clips: [X()],
                                      onShareComplete: () => {
                                          (o?.(), c());
                                      },
                                  }),
                              text: ee.intl.string(ee.t["R3BPH+"]),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(j.$, {
                                      loading: eb,
                                      disabled: eb,
                                      variant: "secondary",
                                      icon: A.PlusLargeIcon,
                                      iconPosition: "start",
                                      onClick: eR,
                                      text: ee.intl.string(J.default.HH4Tjj),
                                  }),
                                  (0, a.jsx)(j.$, {
                                      loading: eb,
                                      disabled: eb,
                                      variant: "primary",
                                      icon: ew.icon,
                                      iconPosition: "start",
                                      onClick: null != ey ? () => ey.onPick(X()) : () => ej({ clips: [X()] }),
                                      text: ew.label,
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
