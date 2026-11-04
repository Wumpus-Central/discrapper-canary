l.d(t, { A: () => eE });
var a = l(477900),
    n = l(582128),
    i = l(855986),
    s = l(834730),
    r = l(408278),
    o = l(983851),
    c = l(358618),
    u = l(192308),
    d = l(825484),
    m = l(866665),
    f = l(27232),
    h = l(505930),
    p = l(241326),
    v = l(365199),
    x = l(92446),
    g = l(972213),
    b = l(95362),
    j = l(821609),
    y = l(428610),
    C = l(48507),
    N = l(750943),
    E = l(342073),
    k = l(831544),
    w = l(7807),
    A = l(663341),
    R = l(442433),
    L = l(793574),
    T = l(688810),
    I = l(429913),
    D = l(769015),
    M = l(540999),
    S = l(419490),
    O = l(489496),
    P = l(253799),
    _ = l(721610),
    z = l(686320),
    U = l(105009),
    $ = l(645655),
    G = l(352527),
    B = l(635793),
    H = l(923904),
    X = l(503698),
    F = l.n(X),
    V = l(31300),
    W = l(646270),
    K = l(748562),
    Z = l(477155),
    Y = l(939249),
    Q = l(417270),
    q = l(696016),
    J = l(683825),
    ee = l(792996),
    et = l(301187),
    el = l(367454);
let ea = [
    { preset: q.yz.ORIGINAL, icon: V.k, label: J.default.CujCES },
    { preset: q.yz.PORTRAIT_9_16, icon: W.u, label: J.default["34PW6m"] },
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
                    icon: Z.r,
                    iconPosition: "start",
                    text: ee.intl.string(J.default["7yBrfD"]),
                    onClick: () => l(B.Y.NONE),
                }),
            }),
            (0, a.jsxs)(b.Ip, {
                className: el.hX,
                children: [
                    (0, a.jsx)(s.E, {
                        variant: "body-md/semibold",
                        color: "text-default",
                        children: ee.intl.string(J.default["1TOrU3"]),
                    }),
                    (0, a.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "body-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(J.default.r15Wrn),
                            }),
                            (0, a.jsx)("div", {
                                className: el.si,
                                children: ea.map((l) => {
                                    let { preset: n, icon: i, label: r } = l,
                                        o = e === n;
                                    return (0, a.jsxs)(
                                        Y.D,
                                        {
                                            "aria-pressed": o,
                                            className: F()(el.is, o && el.j5),
                                            onClick: () => t(n),
                                            children: [
                                                (0, a.jsx)(i, { size: "md" }),
                                                (0, a.jsx)(s.E, {
                                                    variant: "body-xs/medium",
                                                    children: ee.intl.string(r),
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
    es = l(22231),
    er = l(718812);
l(600253);
var eo = l(880275);
function ec(e) {
    let { variant: t, className: l, containerClassName: i } = e,
        { clip: r, clipName: o, setClipName: c } = (0, H.T)(),
        u = (0, er.h)(r),
        [d, m] = n.useState(!1);
    if (d)
        return (0, a.jsx)(ei.k, {
            autoFocus: !0,
            value: o,
            placeholder: u,
            minLength: 0,
            maxLength: 200,
            onChange: (e) => c("" === e ? void 0 : e),
            onBlur: () => m(!1),
            onKeyDown: (e) => {
                ("Enter" === e.key || "Escape" === e.key) && (e.stopPropagation(), e.currentTarget.blur());
            },
        });
    let f = null != o && "" !== o ? o : u;
    return (0, a.jsxs)(Y.D, {
        className: F()(eo.x, i),
        onClick: () => m(!0),
        children: [
            (0, a.jsx)(s.E, { variant: t, color: "text-default", className: l, children: f }),
            (0, a.jsx)(es.PencilIcon, { className: eo.I, size: "xs", color: "currentColor" }),
        ],
    });
}
var eu = l(317097),
    ed = l(48736),
    em = l(663357),
    ef = l(393688),
    eh = l(839578);
let ep = [
        { value: q.Hz.NONE, label: J.default.IqUUKg },
        { value: q.Hz.SMALL, label: J.default.VearyN },
        { value: q.Hz.MEDIUM, label: J.default.AJsDsD },
        { value: q.Hz.LARGE, label: J.default.k5w7Jy },
    ],
    ev = [0, 0xffffff, 0xfe6e0d, 5793266, 0xff4cd2];
function ex(e) {
    let { track: t } = e,
        { updateImageTrackData: l, pickAndReplaceImage: n, setSelectedTrackId: i, removeTrack: r } = (0, em.fn)(),
        o = t.data.shadow ?? "none",
        c = t.data.shadowColor ?? q.pk;
    return (0, a.jsxs)("div", {
        className: et.XV,
        children: [
            (0, a.jsx)("div", {
                className: el.CD,
                children: (0, a.jsx)(j.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: Z.r,
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
                        children: (0, a.jsx)(s.E, {
                            variant: "body-md/semibold",
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
                                    (0, a.jsx)(s.E, {
                                        variant: "body-sm/medium",
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
                            (0, a.jsx)(s.E, {
                                variant: "body-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(J.default["/v2zZ+"]),
                            }),
                            (0, a.jsx)("div", {
                                className: ef.p,
                                children: ep.map((e) => {
                                    let { value: n, label: i } = e,
                                        r = o === n;
                                    return (0, a.jsx)(
                                        Y.D,
                                        {
                                            "aria-pressed": r,
                                            className: F()(el.is, r && el.j5),
                                            onClick: () => l(t.id, (e) => ({ ...e, shadow: n })),
                                            children: (0, a.jsx)(s.E, {
                                                variant: "body-sm/medium",
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
                                (0, a.jsx)(s.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(J.default.P5dSl0),
                                }),
                                (0, a.jsx)(ed.default, {
                                    defaultColor: (0, eu.LX)(q.pk),
                                    colors: ev,
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
                    onClick: () => r(t.id),
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
        { updateTextTrackData: l, setSelectedTrackId: i, removeTrack: r, textTrackIdToFocus: o } = (0, em.fn)(),
        c = n.useRef(null);
    return (
        n.useEffect(() => {
            o === t.id && (c.current?.focus(), c.current?.select());
        }, [o, t.id]),
        (0, a.jsxs)("div", {
            className: et.XV,
            children: [
                (0, a.jsx)("div", {
                    className: el.CD,
                    children: (0, a.jsx)(j.$, {
                        size: "sm",
                        variant: "secondary",
                        icon: Z.r,
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
                            children: (0, a.jsx)(s.E, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                children: ee.intl.string(J.default.GtvDbf),
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: el.Ln,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(J.default["R/JN4b"]),
                                }),
                                (0, a.jsx)(ei.k, {
                                    inputRef: c,
                                    "aria-label": ee.intl.string(J.default["R/JN4b"]),
                                    value: t.data.text,
                                    onChange: (e) => l(t.id, (t) => ({ ...t, text: e })),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: el.Ln,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(J.default["4eAE08"]),
                                }),
                                (0, a.jsx)("div", {
                                    className: el.si,
                                    children: eg.map((e) => {
                                        let { value: n, label: i } = e,
                                            r = t.data.style.fontSize === n;
                                        return (0, a.jsx)(
                                            Y.D,
                                            {
                                                "aria-pressed": r,
                                                className: F()(el.is, r && el.j5),
                                                onClick: () =>
                                                    l(t.id, (e) => ({ ...e, style: { ...e.style, fontSize: n } })),
                                                children: (0, a.jsx)(s.E, {
                                                    variant: "body-sm/medium",
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
                                (0, a.jsx)(s.E, {
                                    variant: "body-sm/semibold",
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
                                (0, a.jsx)(s.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(J.default.huZ6Mm),
                                }),
                                (0, a.jsx)("div", {
                                    className: el.si,
                                    children: eb.map((e) => {
                                        let { value: n, label: i } = e,
                                            r = t.data.style.strokeWidth === n;
                                        return (0, a.jsx)(
                                            Y.D,
                                            {
                                                "aria-pressed": r,
                                                className: F()(el.is, r && el.j5),
                                                onClick: () =>
                                                    l(t.id, (e) => ({ ...e, style: { ...e.style, strokeWidth: n } })),
                                                children: (0, a.jsx)(s.E, {
                                                    variant: "body-sm/medium",
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
                                    (0, a.jsx)(s.E, {
                                        variant: "body-sm/semibold",
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
                                            l(t.id, (t) => ({
                                                ...t,
                                                style: { ...t.style, strokeColor: (0, eu.Hl)(e) },
                                            })),
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
                        onClick: () => r(t.id),
                    }),
                }),
            ],
        })
    );
}
let eC = P.I.difference(new Set([P.C.EXPORT_TO_SOUNDBOARD, P.C.FAVORITE, P.C.DELETE, P.C.MAIN_ACTION, P.C.EDIT]));
function eN(e) {
    let { icon: t, label: l, count: n, enabled: i, disabled: u = !1, onToggle: d } = e;
    return (0, a.jsxs)("div", {
        className: el.l3,
        children: [
            (0, a.jsx)("div", { className: el.sW, children: t }),
            (0, a.jsx)(s.E, { variant: "body-sm/normal", color: "text-default", className: el.RZ, children: l }),
            null != n &&
                n > 0 &&
                (0, a.jsx)("div", {
                    className: el.Mo,
                    children: (0, a.jsx)(s.E, { variant: "body-xs/medium", color: "text-muted", children: n }),
                }),
            (0, a.jsx)("div", {
                className: el.To,
                children: (0, a.jsx)(r.K, {
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
function eE(e) {
    let { activeTool: t } = (0, H.T)(),
        { tracks: l, selectedTrackId: n } = (0, em.fn)(),
        i = l.find((e) => e.id === n);
    if (null != i)
        switch (i.type) {
            case q.Me.TEXT:
                return (0, a.jsx)(ey, { track: i });
            case q.Me.IMAGE:
                return (0, a.jsx)(ex, { track: i });
        }
    switch (t) {
        case B.Y.CROP:
            return (0, a.jsx)(en, {});
        case B.Y.NONE:
        default:
            return (0, a.jsx)(ek, { ...e });
    }
}
function ek(e) {
    let { channelId: t, onEdit: o, onClose: c, onExit: P } = e,
        {
            getEditedClip: X,
            voiceAudioEnabled: F,
            setVoiceAudioEnabled: V,
            applicationAudioEnabled: W,
            setApplicationAudioEnabled: K,
            soundboardAudioEnabled: Z,
            setSoundboardAudioEnabled: Y,
            pause: Q,
            clip: ea,
            editOnly: en,
            setActiveTool: ei,
            audioTracks: es,
        } = (0, H.T)(),
        { analyticsLocations: er } = (0, T.Ay)(L.A.CLIPS_EDITOR),
        { addTextTrack: eo, pickAndAddImageTrack: eu, setSelectedTrackId: ed } = (0, em.fn)(),
        { isCropEnabled: ef, isTextTrackEnabled: eh, isImageTrackEnabled: ep } = (0, em.As)(),
        ev = ea.type === q.nQ.SCREENSHOT,
        ex = ea.type === q.nQ.VOICE_CLIP,
        eg = (0, I.h)(ea.applicationId),
        eb = (0, i.bG)([S.Ay], () => S.Ay.isClipExporting(ea.id)),
        { onShareClick: ej } = (0, G.A)(t),
        { picker: ey } = n.useContext(_.$),
        eE = (0, z.$)(ey?.action),
        ek = (0, i.bG)([M.A], () => M.A.isDeveloper),
        ew = n.useMemo(() => es.filter((e) => e.trackName.includes(q.gC.VOICE)).length, [es]),
        eA = n.useMemo(() => es.filter((e) => e.trackName.includes(q.gC.SOUNDBOARD)).length, [es]),
        eR = eg?.name ?? ea.applicationName ?? ee.intl.string(ee.t.GnQui9);
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
                                children: (0, a.jsx)(r.K, {
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
                                children: (0, a.jsx)(r.K, {
                                    onClick: (e) => (0, $.A)(e, { clips: [ea], onAfterDelete: c }),
                                    variant: "icon-only",
                                    "aria-label": ee.intl.string(ee.t.oyYWHE),
                                    icon: p.TrashIcon,
                                }),
                            }),
                            (0, a.jsx)(m.m, {
                                position: "bottom",
                                text: ee.intl.string(ee.t.PdRCRg),
                                children: (0, a.jsx)(r.K, {
                                    onClick: function (e) {
                                        (Q(),
                                            (0, R.L3)(e, async () => {
                                                let { default: e } = await Promise.all([
                                                    l.e(249169),
                                                    l.e(657266),
                                                    l.e(339467),
                                                    l.e(595429),
                                                    l.e(115472),
                                                    l.e(320891),
                                                    l.e(531279),
                                                    l.e(371863),
                                                    l.e(398793),
                                                    l.e(338601),
                                                    l.e(4328),
                                                    l.e(886456),
                                                    l.e(218489),
                                                    l.e(218307),
                                                    l.e(520342),
                                                    l.e(401343),
                                                ]).then(l.bind(l, 590146));
                                                return (l) =>
                                                    (0, a.jsx)(e, {
                                                        ...l,
                                                        clips: [X()],
                                                        analyticsLocations: er,
                                                        channelId: t,
                                                        onAfterDelete: c,
                                                        displayConfiguration: eC,
                                                    });
                                            }));
                                    },
                                    variant: "icon-only",
                                    "aria-label": ee.intl.string(ee.t.PdRCRg),
                                    icon: v.MoreHorizontalIcon,
                                }),
                            }),
                            ek &&
                                (0, a.jsx)(m.m, {
                                    position: "bottom",
                                    text: "Clip Debug",
                                    children: (0, a.jsx)(r.K, {
                                        onClick: function () {
                                            (0, u.mM)(
                                                async () => {
                                                    let { default: e } = await Promise.all([
                                                        l.e(860350),
                                                        l.e(848625),
                                                        l.e(883952),
                                                        l.e(31e4),
                                                    ]).then(l.bind(l, 224883));
                                                    return (t) => (0, a.jsx)(e, { ...t, clip: ea });
                                                },
                                                { stackingBehavior: "stack" },
                                            );
                                        },
                                        icon: x.BugIcon,
                                        variant: "icon-only",
                                        "aria-label": "Clip Debug",
                                    }),
                                }),
                        ],
                    }),
                    (0, a.jsx)(m.m, {
                        position: "bottom",
                        text: ee.intl.string(ee.t.cpT0Cq),
                        children: (0, a.jsx)(r.K, {
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
                            (0, a.jsx)(s.E, {
                                variant: "body-sm/semibold",
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
                                        variant: "body-sm/medium",
                                        className: el.FA,
                                        containerClassName: el.vt,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !ev &&
                        !ex &&
                        (ef || eh || ep) &&
                        (0, a.jsxs)("div", {
                            className: el.uW,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "body-sm/semibold",
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
                    !ev &&
                        (0, a.jsxs)("div", {
                            className: el.uW,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(J.default.KRnA2D),
                                }),
                                (0, a.jsxs)("div", {
                                    className: el.VZ,
                                    children: [
                                        (0, a.jsx)(eN, {
                                            icon:
                                                null != eg
                                                    ? (0, a.jsx)(D.A, { game: eg, size: D.M.XXSMALL })
                                                    : (0, a.jsx)(E.L, { size: "sm", color: "currentColor" }),
                                            label: eR,
                                            enabled: W,
                                            onToggle: K,
                                        }),
                                        (0, a.jsx)(eN, {
                                            icon: (0, a.jsx)(k.MicrophoneIcon, { size: "sm", color: "currentColor" }),
                                            label: ee.intl.string(J.default.ai9fWO),
                                            count: ew,
                                            enabled: F,
                                            disabled: 0 === ew,
                                            onToggle: V,
                                        }),
                                        (0, a.jsx)(eN, {
                                            icon: (0, a.jsx)(w.J, { size: "sm", color: "currentColor" }),
                                            label: ee.intl.string(J.default["/VVQKJ"]),
                                            enabled: Z,
                                            disabled: 0 === eA,
                                            onToggle: Y,
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
                                      onClick: async function () {
                                          await (0, U.n)(X(), { channelId: t, analyticsLocations: er });
                                      },
                                      text: ee.intl.string(J.default.HH4Tjj),
                                  }),
                                  (0, a.jsx)(j.$, {
                                      loading: eb,
                                      disabled: eb,
                                      variant: "primary",
                                      icon: eE.icon,
                                      iconPosition: "start",
                                      onClick: null != ey ? () => ey.onPick(X()) : () => ej({ clips: [X()] }),
                                      text: eE.label,
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
