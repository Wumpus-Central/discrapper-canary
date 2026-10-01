l.d(t, { A: () => ej });
var a = l(477900),
    n = l(582128),
    i = l(17928),
    s = l(834730),
    r = l(408278),
    o = l(983851),
    c = l(358618),
    u = l(192308),
    d = l(825484),
    m = l(866665),
    h = l(27232),
    f = l(505930),
    p = l(241326),
    x = l(365199),
    v = l(92446),
    g = l(972213),
    C = l(364522),
    y = l(821609),
    j = l(428610),
    b = l(48507),
    w = l(750943),
    E = l(342073),
    N = l(831544),
    k = l(7807),
    A = l(663341),
    I = l(442433),
    L = l(793574),
    M = l(688810),
    R = l(429913),
    T = l(769015),
    D = l(540999),
    S = l(915725),
    _ = l(614584),
    O = l(253799),
    P = l(721610),
    G = l(686320),
    U = l(105009),
    B = l(645655),
    K = l(352527),
    z = l(635793),
    $ = l(362081),
    H = l(503698),
    V = l.n(H),
    F = l(31300),
    X = l(646270),
    Z = l(748562),
    W = l(477155),
    q = l(939249),
    Y = l(417270),
    J = l(696016),
    Q = l(268378),
    ee = l(375708),
    et = l(301187),
    el = l(367454);
let ea = [
    { preset: J.yz.ORIGINAL, icon: F.k, label: Q.default.CujCES },
    { preset: J.yz.PORTRAIT_9_16, icon: X.u, label: Q.default["34PW6m"] },
    { preset: J.yz.LANDSCAPE_16_9, icon: Z.U, label: Q.default.ywAdnD },
];
function en() {
    let { cropPreset: e, setCropPreset: t, setActiveTool: l } = (0, $.T)();
    return (0, a.jsxs)("div", {
        className: et.XV,
        children: [
            (0, a.jsx)("div", {
                className: el.CD,
                children: (0, a.jsx)(y.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: W.r,
                    iconPosition: "start",
                    text: ee.intl.string(Q.default["7yBrfD"]),
                    onClick: () => l(z.Y.NONE),
                }),
            }),
            (0, a.jsxs)(C.Ip, {
                className: el.hX,
                children: [
                    (0, a.jsx)(s.E, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: ee.intl.string(Q.default["1TOrU3"]),
                    }),
                    (0, a.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(Q.default.r15Wrn),
                            }),
                            (0, a.jsx)("div", {
                                className: el.si,
                                children: ea.map((l) => {
                                    let { preset: n, icon: i, label: r } = l,
                                        o = e === n;
                                    return (0, a.jsxs)(
                                        q.D,
                                        {
                                            "aria-pressed": o,
                                            className: V()(el.is, o && el.j5),
                                            onClick: () => t(n),
                                            children: [
                                                (0, a.jsx)(i, { size: "md" }),
                                                (0, a.jsx)(s.E, {
                                                    variant: "text-xs/medium",
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
                children: (0, a.jsx)(y.$, {
                    fullWidth: !0,
                    variant: "secondary",
                    icon: Y.RetryIcon,
                    iconPosition: "start",
                    text: ee.intl.string(Q.default.XdZS9I),
                    onClick: () => t(J.yz.ORIGINAL),
                }),
            }),
        ],
    });
}
var ei = l(818433),
    es = l(317097),
    er = l(48736),
    eo = l(245116),
    ec = l(393688),
    eu = l(839578);
let ed = [
        { value: J.Hz.NONE, label: Q.default.IqUUKg },
        { value: J.Hz.SMALL, label: Q.default.VearyN },
        { value: J.Hz.MEDIUM, label: Q.default.AJsDsD },
        { value: J.Hz.LARGE, label: Q.default.k5w7Jy },
    ],
    em = [0, 0xffffff, 0xfe6e0d, 5793266, 0xff4cd2];
function eh(e) {
    let { track: t } = e,
        { updateImageTrackData: l, pickAndReplaceImage: n, setSelectedTrackId: i, removeTrack: r } = (0, eo.fn)(),
        o = t.data.shadow ?? J.xy,
        c = t.data.shadowColor ?? J.pk;
    return (0, a.jsxs)("div", {
        className: et.XV,
        children: [
            (0, a.jsx)("div", {
                className: el.CD,
                children: (0, a.jsx)(y.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: W.r,
                    iconPosition: "start",
                    text: ee.intl.string(Q.default["7yBrfD"]),
                    onClick: () => i(null),
                }),
            }),
            (0, a.jsxs)(C.Ip, {
                className: el.hX,
                children: [
                    (0, a.jsx)("div", {
                        className: eu.r5,
                        children: (0, a.jsx)(s.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: ee.intl.string(Q.default.S0ODmT),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, a.jsxs)("div", {
                                className: el.L0,
                                children: [
                                    (0, a.jsx)("img", { className: ec.Z, src: t.data.src, alt: "", "aria-hidden": !0 }),
                                    (0, a.jsx)(s.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: el.FA,
                                        children: t.data.fileName,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(y.$, {
                                variant: "secondary",
                                icon: w.X,
                                iconPosition: "start",
                                fullWidth: !0,
                                text: ee.intl.string(Q.default.wR5R9w),
                                onClick: () => n(t.id),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(Q.default["/v2zZ+"]),
                            }),
                            (0, a.jsx)("div", {
                                className: ec.p,
                                children: ed.map((e) => {
                                    let { value: n, label: i } = e,
                                        r = o === n;
                                    return (0, a.jsx)(
                                        q.D,
                                        {
                                            "aria-pressed": r,
                                            className: V()(el.is, r && el.j5),
                                            onClick: () => l(t.id, (e) => ({ ...e, shadow: n })),
                                            children: (0, a.jsx)(s.E, {
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
                    o !== J.Hz.NONE &&
                        (0, a.jsxs)("div", {
                            className: eu.zo,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(Q.default.P5dSl0),
                                }),
                                (0, a.jsx)(er.default, {
                                    defaultColor: (0, es.LX)(J.pk),
                                    colors: em,
                                    className: eu.Ei,
                                    colorContainerClassName: eu.oP,
                                    value: (0, es.LX)(c),
                                    onChange: (e) => l(t.id, (t) => ({ ...t, shadowColor: (0, es.Hl)(e) })),
                                    allowBlackCustomColor: !0,
                                }),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)("div", {
                className: et.G3,
                children: (0, a.jsx)(y.$, {
                    size: "md",
                    variant: "secondary",
                    icon: p.TrashIcon,
                    iconPosition: "start",
                    fullWidth: !0,
                    text: ee.intl.string(Q.default.ytiENm),
                    onClick: () => r(t.id),
                }),
            }),
        ],
    });
}
var ef = l(95477);
let ep = [
        { value: 0.04, label: Q.default.zYVcjp },
        { value: 0.06, label: Q.default.LGX80j },
        { value: 0.09, label: Q.default.sa6Q0q },
    ],
    ex = [
        { value: J.UY.NONE, label: Q.default["tYuPp+"] },
        { value: J.UY.SMALL, label: Q.default["42Skzz"] },
        { value: J.UY.MEDIUM, label: Q.default["Ujlm+F"] },
        { value: J.UY.LARGE, label: Q.default.lT4Cq2 },
    ],
    ev = [0xfe6e0d, 0xffe047, 3534206, 5793266, 0xff4cd2];
function eg(e) {
    let { track: t } = e,
        { updateTextTrackData: l, setSelectedTrackId: n, removeTrack: i } = (0, eo.fn)();
    return (0, a.jsxs)("div", {
        className: et.XV,
        children: [
            (0, a.jsx)("div", {
                className: el.CD,
                children: (0, a.jsx)(y.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: W.r,
                    iconPosition: "start",
                    text: ee.intl.string(Q.default["7yBrfD"]),
                    onClick: () => n(null),
                }),
            }),
            (0, a.jsxs)(C.Ip, {
                className: el.hX,
                children: [
                    (0, a.jsx)("div", {
                        className: eu.r5,
                        children: (0, a.jsx)(s.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: ee.intl.string(Q.default.GtvDbf),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(Q.default["R/JN4b"]),
                            }),
                            (0, a.jsx)(ef.k, {
                                value: t.data.text,
                                onChange: (e) => l(t.id, (t) => ({ ...t, text: e })),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(Q.default["4eAE08"]),
                            }),
                            (0, a.jsx)("div", {
                                className: el.si,
                                children: ep.map((e) => {
                                    let { value: n, label: i } = e,
                                        r = t.data.style.fontSize === n;
                                    return (0, a.jsx)(
                                        q.D,
                                        {
                                            "aria-pressed": r,
                                            className: V()(el.is, r && el.j5),
                                            onClick: () =>
                                                l(t.id, (e) => ({ ...e, style: { ...e.style, fontSize: n } })),
                                            children: (0, a.jsx)(s.E, {
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
                        className: eu.zo,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(Q.default["9oleCI"]),
                            }),
                            (0, a.jsx)(er.default, {
                                defaultColor: 0xffffff,
                                colors: ev,
                                className: eu.Ei,
                                colorContainerClassName: eu.oP,
                                value: (0, es.LX)(t.data.style.color),
                                onChange: (e) =>
                                    l(t.id, (t) => ({ ...t, style: { ...t.style, color: (0, es.Hl)(e) } })),
                                allowBlackCustomColor: !0,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(Q.default.huZ6Mm),
                            }),
                            (0, a.jsx)("div", {
                                className: el.si,
                                children: ex.map((e) => {
                                    let { value: n, label: i } = e,
                                        r = t.data.style.strokeWidth === n;
                                    return (0, a.jsx)(
                                        q.D,
                                        {
                                            "aria-pressed": r,
                                            className: V()(el.is, r && el.j5),
                                            onClick: () =>
                                                l(t.id, (e) => ({ ...e, style: { ...e.style, strokeWidth: n } })),
                                            children: (0, a.jsx)(s.E, {
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
                    t.data.style.strokeWidth !== J.UY.NONE &&
                        (0, a.jsxs)("div", {
                            className: eu.zo,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(Q.default.iQZQyA),
                                }),
                                (0, a.jsx)(er.default, {
                                    defaultColor: 0,
                                    colors: ev,
                                    className: eu.Ei,
                                    colorContainerClassName: eu.oP,
                                    value: (0, es.LX)(t.data.style.strokeColor),
                                    onChange: (e) =>
                                        l(t.id, (t) => ({ ...t, style: { ...t.style, strokeColor: (0, es.Hl)(e) } })),
                                    allowBlackCustomColor: !0,
                                }),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)("div", {
                className: et.G3,
                children: (0, a.jsx)(y.$, {
                    size: "md",
                    variant: "secondary",
                    icon: p.TrashIcon,
                    iconPosition: "start",
                    fullWidth: !0,
                    text: ee.intl.string(Q.default.LYpz7y),
                    onClick: () => i(t.id),
                }),
            }),
        ],
    });
}
let eC = O.I.difference(new Set([O.C.EXPORT_TO_SOUNDBOARD, O.C.FAVORITE, O.C.DELETE, O.C.MAIN_ACTION, O.C.EDIT]));
function ey(e) {
    let { icon: t, label: l, count: n, enabled: i, disabled: u = !1, onToggle: d } = e;
    return (0, a.jsxs)("div", {
        className: el.l3,
        children: [
            (0, a.jsx)("div", { className: el.sW, children: t }),
            (0, a.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", className: el.RZ, children: l }),
            null != n &&
                n > 0 &&
                (0, a.jsx)("div", {
                    className: el.Mo,
                    children: (0, a.jsx)(s.E, { variant: "text-xs/medium", color: "text-muted", children: n }),
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
function ej(e) {
    let { activeTool: t } = (0, $.T)(),
        { tracks: l, selectedTrackId: n } = (0, eo.fn)(),
        i = l.find((e) => e.id === n);
    if (null != i)
        switch (i.type) {
            case J.Me.TEXT:
                return (0, a.jsx)(eg, { track: i });
            case J.Me.IMAGE:
                return (0, a.jsx)(eh, { track: i });
        }
    switch (t) {
        case z.Y.CROP:
            return (0, a.jsx)(en, {});
        case z.Y.NONE:
        default:
            return (0, a.jsx)(eb, { ...e });
    }
}
function eb(e) {
    let { channelId: t, onEdit: o, onClose: c } = e,
        {
            getEditedClip: O,
            voiceAudioEnabled: H,
            setVoiceAudioEnabled: V,
            applicationAudioEnabled: F,
            setApplicationAudioEnabled: X,
            soundboardAudioEnabled: Z,
            setSoundboardAudioEnabled: W,
            pause: q,
            clip: Y,
            editOnly: ea,
            setActiveTool: en,
            audioTracks: es,
        } = (0, $.T)(),
        { analyticsLocations: er } = (0, M.Ay)(L.A.CLIPS_EDITOR),
        { addTextTrack: ec, pickAndAddImageTrack: eu, setSelectedTrackId: ed } = (0, eo.fn)(),
        { isCropEnabled: em, isTextTrackEnabled: eh, isImageTrackEnabled: ef } = (0, eo.As)(),
        ep = Y.type === J.nQ.SCREENSHOT,
        ex = Y.type === J.nQ.VOICE_CLIP,
        ev = (0, R.h)(Y.applicationId),
        eg = (0, i.bG)([S.Ay], () => S.Ay.isClipExporting(Y.id)),
        { onShareClick: ej } = (0, K.A)(t),
        { picker: eb } = n.useContext(P.$),
        ew = (0, G.$)(eb?.action),
        eE = (0, i.bG)([D.A], () => D.A.isDeveloper),
        eN = n.useMemo(() => es.filter((e) => e.trackName.includes(J.gC.VOICE)).length, [es]),
        ek = n.useMemo(() => es.filter((e) => e.trackName.includes(J.gC.SOUNDBOARD)).length, [es]),
        eA = ev?.name ?? Y.applicationName ?? ee.intl.string(ee.t.GnQui9);
    async function eI() {
        await (0, U.n)(O(), { channelId: t, analyticsLocations: er });
    }
    return (0, a.jsxs)("div", {
        className: et.XV,
        children: [
            (0, a.jsx)("div", {
                className: et.eW,
                children: (0, a.jsxs)(d.e, {
                    wrap: !1,
                    size: "sm",
                    align: "center",
                    justify: "end",
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, a.jsx)(m.m, {
                            text: Y.isFavorite ? ee.intl.string(Q.default.IZsalP) : ee.intl.string(Q.default.ihBfyA),
                            children: (0, a.jsx)(r.K, {
                                onClick: () => (0, _.XK)(Y),
                                variant: "icon-only",
                                "aria-label": Y.isFavorite
                                    ? ee.intl.string(Q.default.IZsalP)
                                    : ee.intl.string(Q.default.ihBfyA),
                                icon: Y.isFavorite ? h.StarIcon : f.y,
                            }),
                        }),
                        (0, a.jsx)(m.m, {
                            text: ee.intl.string(ee.t.oyYWHE),
                            children: (0, a.jsx)(r.K, {
                                onClick: (e) => (0, B.A)(e, { clips: [Y], onAfterDelete: c }),
                                variant: "icon-only",
                                "aria-label": ee.intl.string(ee.t.oyYWHE),
                                icon: p.TrashIcon,
                            }),
                        }),
                        (0, a.jsx)(m.m, {
                            text: ee.intl.string(ee.t.PdRCRg),
                            children: (0, a.jsx)(r.K, {
                                onClick: function (e) {
                                    (q(),
                                        (0, I.L3)(e, async () => {
                                            let { default: e } = await Promise.all([
                                                l.e("249169"),
                                                l.e("657266"),
                                                l.e("272396"),
                                                l.e("595429"),
                                                l.e("311930"),
                                                l.e("320891"),
                                                l.e("531279"),
                                                l.e("371863"),
                                                l.e("338601"),
                                                l.e("886456"),
                                                l.e("669006"),
                                                l.e("218489"),
                                                l.e("218307"),
                                                l.e("520342"),
                                                l.e("6896"),
                                            ]).then(l.bind(l, 553075));
                                            return (l) =>
                                                (0, a.jsx)(e, {
                                                    ...l,
                                                    clips: [O()],
                                                    analyticsLocations: er,
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
                                text: "Clip Debug",
                                children: (0, a.jsx)(r.K, {
                                    onClick: function () {
                                        (0, u.openModalLazy)(
                                            async () => {
                                                let { default: e } = await Promise.all([
                                                    l.e("860350"),
                                                    l.e("883952"),
                                                    l.e("310000"),
                                                ]).then(l.bind(l, 224883));
                                                return (t) => (0, a.jsx)(e, { ...t, clip: Y });
                                            },
                                            { stackingBehavior: "stack" },
                                        );
                                    },
                                    icon: v.BugIcon,
                                    variant: "icon-only",
                                    "aria-label": "Clip Debug",
                                }),
                            }),
                        (0, a.jsx)(r.K, {
                            onClick: c,
                            icon: g.XLargeIcon,
                            variant: "icon-only",
                            "aria-label": ee.intl.string(ee.t.cpT0Cq),
                        }),
                    ],
                }),
            }),
            (0, a.jsxs)(C.Ip, {
                className: et.Md,
                children: [
                    (0, a.jsxs)("div", {
                        className: el.uW,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(Q.default.JrcRaE),
                            }),
                            (0, a.jsxs)("div", {
                                className: el.L0,
                                children: [
                                    "" !== Y.thumbnail &&
                                        (0, a.jsx)("img", {
                                            className: el.Nf,
                                            src: Y.thumbnail,
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                    (0, a.jsx)(ei.A, {
                                        variant: "text-sm/medium",
                                        className: el.FA,
                                        containerClassName: el.vt,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !ep &&
                        !ex &&
                        (em || eh || ef) &&
                        (0, a.jsxs)("div", {
                            className: el.uW,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(Q.default.FmXxW6),
                                }),
                                em &&
                                    (0, a.jsx)(y.$, {
                                        variant: "secondary",
                                        icon: j.K,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: ee.intl.string(Q.default.RiEyiS),
                                        onClick: () => {
                                            (ed(null), en(z.Y.CROP));
                                        },
                                    }),
                                eh &&
                                    (0, a.jsx)(y.$, {
                                        variant: "secondary",
                                        icon: b.x,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: ee.intl.string(Q.default.zSN9vp),
                                        onClick: ec,
                                    }),
                                ef &&
                                    (0, a.jsx)(y.$, {
                                        variant: "secondary",
                                        icon: w.X,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: ee.intl.string(Q.default.iFo3gj),
                                        onClick: eu,
                                    }),
                            ],
                        }),
                    !ep &&
                        (0, a.jsxs)("div", {
                            className: el.uW,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(Q.default.KRnA2D),
                                }),
                                (0, a.jsxs)("div", {
                                    className: el.VZ,
                                    children: [
                                        (0, a.jsx)(ey, {
                                            icon:
                                                null != ev
                                                    ? (0, a.jsx)(T.A, { game: ev, size: T.M.XXSMALL })
                                                    : (0, a.jsx)(E.L, { size: "sm", color: "currentColor" }),
                                            label: eA,
                                            enabled: F,
                                            onToggle: X,
                                        }),
                                        (0, a.jsx)(ey, {
                                            icon: (0, a.jsx)(N.MicrophoneIcon, { size: "sm", color: "currentColor" }),
                                            label: ee.intl.string(Q.default.ai9fWO),
                                            count: eN,
                                            enabled: H,
                                            disabled: 0 === eN,
                                            onToggle: V,
                                        }),
                                        (0, a.jsx)(ey, {
                                            icon: (0, a.jsx)(k.J, { size: "sm", color: "currentColor" }),
                                            label: ee.intl.string(Q.default["/VVQKJ"]),
                                            enabled: Z,
                                            disabled: 0 === ek,
                                            onToggle: W,
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
                    children: ea
                        ? (0, a.jsx)(y.$, {
                              loading: eg,
                              disabled: eg,
                              variant: "primary",
                              onClick: () =>
                                  ej({
                                      clips: [O()],
                                      onShareComplete: () => {
                                          (o?.(), c());
                                      },
                                  }),
                              text: ee.intl.string(ee.t["R3BPH+"]),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(y.$, {
                                      loading: eg,
                                      disabled: eg,
                                      variant: "secondary",
                                      icon: A.PlusLargeIcon,
                                      iconPosition: "start",
                                      onClick: eI,
                                      text: ee.intl.string(Q.default.HH4Tjj),
                                  }),
                                  (0, a.jsx)(y.$, {
                                      loading: eg,
                                      disabled: eg,
                                      variant: "primary",
                                      icon: ew.icon,
                                      iconPosition: "start",
                                      onClick: null != eb ? () => eb.onPick(O()) : () => ej({ clips: [O()] }),
                                      text: ew.label,
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
