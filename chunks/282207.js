l.d(t, { A: () => eb });
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
    x = l(241326),
    v = l(365199),
    p = l(92446),
    g = l(972213),
    j = l(364522),
    b = l(821609),
    C = l(428610),
    y = l(48507),
    w = l(750943),
    N = l(342073),
    E = l(831544),
    k = l(7807),
    A = l(663341),
    L = l(405433),
    R = l(442433),
    I = l(793574),
    M = l(688810),
    T = l(429913),
    D = l(769015),
    S = l(540999),
    O = l(915725),
    P = l(614584),
    z = l(253799),
    _ = l(105009),
    $ = l(645655),
    U = l(352527),
    G = l(635793),
    H = l(362081),
    B = l(503698),
    X = l.n(B),
    F = l(31300),
    V = l(646270),
    K = l(748562),
    W = l(477155),
    Z = l(939249),
    Y = l(417270),
    J = l(696016),
    Q = l(268378),
    q = l(375708),
    ee = l(301187),
    et = l(367454);
let el = [
    { preset: J.yz.ORIGINAL, icon: F.k, label: Q.default.CujCES },
    { preset: J.yz.PORTRAIT_9_16, icon: V.u, label: Q.default["34PW6m"] },
    { preset: J.yz.LANDSCAPE_16_9, icon: K.U, label: Q.default.ywAdnD },
];
function ea() {
    let { cropPreset: e, setCropPreset: t, setActiveTool: l } = (0, H.T)();
    return (0, a.jsxs)("div", {
        className: ee.XV,
        children: [
            (0, a.jsx)("div", {
                className: et.CD,
                children: (0, a.jsx)(b.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: W.r,
                    iconPosition: "start",
                    text: q.intl.string(Q.default["7yBrfD"]),
                    onClick: () => l(G.Y.NONE),
                }),
            }),
            (0, a.jsxs)(j.Ip, {
                className: et.hX,
                children: [
                    (0, a.jsx)(s.E, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: q.intl.string(Q.default["1TOrU3"]),
                    }),
                    (0, a.jsxs)("div", {
                        className: et.Ln,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: q.intl.string(Q.default.r15Wrn),
                            }),
                            (0, a.jsx)("div", {
                                className: et.si,
                                children: el.map((l) => {
                                    let { preset: n, icon: i, label: r } = l,
                                        o = e === n;
                                    return (0, a.jsxs)(
                                        Z.D,
                                        {
                                            "aria-pressed": o,
                                            className: X()(et.is, o && et.j5),
                                            onClick: () => t(n),
                                            children: [
                                                (0, a.jsx)(i, { size: "md" }),
                                                (0, a.jsx)(s.E, {
                                                    variant: "text-xs/medium",
                                                    children: q.intl.string(r),
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
                className: ee.G3,
                children: (0, a.jsx)(b.$, {
                    fullWidth: !0,
                    variant: "secondary",
                    icon: Y.RetryIcon,
                    iconPosition: "start",
                    text: q.intl.string(Q.default.XdZS9I),
                    onClick: () => t(J.yz.ORIGINAL),
                }),
            }),
        ],
    });
}
var en = l(818433),
    ei = l(317097),
    es = l(48736),
    er = l(699269),
    eo = l(393688),
    ec = l(839578);
let eu = [
        { value: J.Hz.NONE, label: Q.default.IqUUKg },
        { value: J.Hz.SMALL, label: Q.default.VearyN },
        { value: J.Hz.MEDIUM, label: Q.default.AJsDsD },
        { value: J.Hz.LARGE, label: Q.default.k5w7Jy },
    ],
    ed = [0, 0xffffff, 0xfe6e0d, 5793266, 0xff4cd2];
function em(e) {
    let { track: t } = e,
        { updateImageTrackData: l, pickAndReplaceImage: n, setSelectedTrackId: i, removeTrack: r } = (0, er.fn)(),
        o = t.data.shadow ?? J.xy,
        c = t.data.shadowColor ?? J.pk;
    return (0, a.jsxs)("div", {
        className: ee.XV,
        children: [
            (0, a.jsx)("div", {
                className: et.CD,
                children: (0, a.jsx)(b.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: W.r,
                    iconPosition: "start",
                    text: q.intl.string(Q.default["7yBrfD"]),
                    onClick: () => i(null),
                }),
            }),
            (0, a.jsxs)(j.Ip, {
                className: et.hX,
                children: [
                    (0, a.jsx)("div", {
                        className: ec.r5,
                        children: (0, a.jsx)(s.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: q.intl.string(Q.default.S0ODmT),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: et.Ln,
                        children: [
                            (0, a.jsxs)("div", {
                                className: et.L0,
                                children: [
                                    (0, a.jsx)("img", { className: eo.Z, src: t.data.src, alt: "", "aria-hidden": !0 }),
                                    (0, a.jsx)(s.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: et.FA,
                                        children: t.data.fileName,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(b.$, {
                                variant: "secondary",
                                icon: w.X,
                                iconPosition: "start",
                                fullWidth: !0,
                                text: q.intl.string(Q.default.wR5R9w),
                                onClick: () => n(t.id),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: et.Ln,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: q.intl.string(Q.default["/v2zZ+"]),
                            }),
                            (0, a.jsx)("div", {
                                className: eo.p,
                                children: eu.map((e) => {
                                    let { value: n, label: i } = e,
                                        r = o === n;
                                    return (0, a.jsx)(
                                        Z.D,
                                        {
                                            "aria-pressed": r,
                                            className: X()(et.is, r && et.j5),
                                            onClick: () => l(t.id, (e) => ({ ...e, shadow: n })),
                                            children: (0, a.jsx)(s.E, {
                                                variant: "text-sm/medium",
                                                children: q.intl.string(i),
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
                            className: ec.zo,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: q.intl.string(Q.default.P5dSl0),
                                }),
                                (0, a.jsx)(es.default, {
                                    defaultColor: (0, ei.LX)(J.pk),
                                    colors: ed,
                                    className: ec.Ei,
                                    colorContainerClassName: ec.oP,
                                    value: (0, ei.LX)(c),
                                    onChange: (e) => l(t.id, (t) => ({ ...t, shadowColor: (0, ei.Hl)(e) })),
                                    allowBlackCustomColor: !0,
                                }),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ee.G3,
                children: (0, a.jsx)(b.$, {
                    size: "md",
                    variant: "secondary",
                    icon: x.TrashIcon,
                    iconPosition: "start",
                    fullWidth: !0,
                    text: q.intl.string(Q.default.ytiENm),
                    onClick: () => r(t.id),
                }),
            }),
        ],
    });
}
var eh = l(95477);
let ef = [
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
function ep(e) {
    let { track: t } = e,
        { updateTextTrackData: l, setSelectedTrackId: n, removeTrack: i } = (0, er.fn)();
    return (0, a.jsxs)("div", {
        className: ee.XV,
        children: [
            (0, a.jsx)("div", {
                className: et.CD,
                children: (0, a.jsx)(b.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: W.r,
                    iconPosition: "start",
                    text: q.intl.string(Q.default["7yBrfD"]),
                    onClick: () => n(null),
                }),
            }),
            (0, a.jsxs)(j.Ip, {
                className: et.hX,
                children: [
                    (0, a.jsx)("div", {
                        className: ec.r5,
                        children: (0, a.jsx)(s.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: q.intl.string(Q.default.GtvDbf),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: et.Ln,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: q.intl.string(Q.default["R/JN4b"]),
                            }),
                            (0, a.jsx)(eh.k, {
                                value: t.data.text,
                                onChange: (e) => l(t.id, (t) => ({ ...t, text: e })),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: et.Ln,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: q.intl.string(Q.default["4eAE08"]),
                            }),
                            (0, a.jsx)("div", {
                                className: et.si,
                                children: ef.map((e) => {
                                    let { value: n, label: i } = e,
                                        r = t.data.style.fontSize === n;
                                    return (0, a.jsx)(
                                        Z.D,
                                        {
                                            "aria-pressed": r,
                                            className: X()(et.is, r && et.j5),
                                            onClick: () =>
                                                l(t.id, (e) => ({ ...e, style: { ...e.style, fontSize: n } })),
                                            children: (0, a.jsx)(s.E, {
                                                variant: "text-sm/medium",
                                                children: q.intl.string(i),
                                            }),
                                        },
                                        n,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: ec.zo,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: q.intl.string(Q.default["9oleCI"]),
                            }),
                            (0, a.jsx)(es.default, {
                                defaultColor: 0xffffff,
                                colors: ev,
                                className: ec.Ei,
                                colorContainerClassName: ec.oP,
                                value: (0, ei.LX)(t.data.style.color),
                                onChange: (e) =>
                                    l(t.id, (t) => ({ ...t, style: { ...t.style, color: (0, ei.Hl)(e) } })),
                                allowBlackCustomColor: !0,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: et.Ln,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: q.intl.string(Q.default.huZ6Mm),
                            }),
                            (0, a.jsx)("div", {
                                className: et.si,
                                children: ex.map((e) => {
                                    let { value: n, label: i } = e,
                                        r = t.data.style.strokeWidth === n;
                                    return (0, a.jsx)(
                                        Z.D,
                                        {
                                            "aria-pressed": r,
                                            className: X()(et.is, r && et.j5),
                                            onClick: () =>
                                                l(t.id, (e) => ({ ...e, style: { ...e.style, strokeWidth: n } })),
                                            children: (0, a.jsx)(s.E, {
                                                variant: "text-sm/medium",
                                                children: q.intl.string(i),
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
                            className: ec.zo,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: q.intl.string(Q.default.iQZQyA),
                                }),
                                (0, a.jsx)(es.default, {
                                    defaultColor: 0,
                                    colors: ev,
                                    className: ec.Ei,
                                    colorContainerClassName: ec.oP,
                                    value: (0, ei.LX)(t.data.style.strokeColor),
                                    onChange: (e) =>
                                        l(t.id, (t) => ({ ...t, style: { ...t.style, strokeColor: (0, ei.Hl)(e) } })),
                                    allowBlackCustomColor: !0,
                                }),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ee.G3,
                children: (0, a.jsx)(b.$, {
                    size: "md",
                    variant: "secondary",
                    icon: x.TrashIcon,
                    iconPosition: "start",
                    fullWidth: !0,
                    text: q.intl.string(Q.default.LYpz7y),
                    onClick: () => i(t.id),
                }),
            }),
        ],
    });
}
let eg = z.I.difference(new Set([z.C.EXPORT_TO_SOUNDBOARD, z.C.FAVORITE, z.C.DELETE, z.C.SHARE, z.C.EDIT]));
function ej(e) {
    let { icon: t, label: l, count: n, enabled: i, disabled: u = !1, onToggle: d } = e;
    return (0, a.jsxs)("div", {
        className: et.l3,
        children: [
            (0, a.jsx)("div", { className: et.sW, children: t }),
            (0, a.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", className: et.RZ, children: l }),
            null != n &&
                n > 0 &&
                (0, a.jsx)("div", {
                    className: et.Mo,
                    children: (0, a.jsx)(s.E, { variant: "text-xs/medium", color: "text-muted", children: n }),
                }),
            (0, a.jsx)("div", {
                className: et.To,
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
function eb(e) {
    let { activeTool: t } = (0, H.T)(),
        { tracks: l, selectedTrackId: n } = (0, er.fn)(),
        i = l.find((e) => e.id === n);
    if (null != i)
        switch (i.type) {
            case J.Me.TEXT:
                return (0, a.jsx)(ep, { track: i });
            case J.Me.IMAGE:
                return (0, a.jsx)(em, { track: i });
        }
    switch (t) {
        case G.Y.CROP:
            return (0, a.jsx)(ea, {});
        case G.Y.NONE:
        default:
            return (0, a.jsx)(eC, { ...e });
    }
}
function eC(e) {
    let { channelId: t, onEdit: o, onClose: c } = e,
        {
            getEditedClip: z,
            voiceAudioEnabled: B,
            setVoiceAudioEnabled: X,
            applicationAudioEnabled: F,
            setApplicationAudioEnabled: V,
            soundboardAudioEnabled: K,
            setSoundboardAudioEnabled: W,
            pause: Z,
            clip: Y,
            editOnly: el,
            setActiveTool: ea,
            audioTracks: ei,
        } = (0, H.T)(),
        { analyticsLocations: es } = (0, M.Ay)(I.A.CLIPS_EDITOR),
        { addTextTrack: eo, pickAndAddImageTrack: ec, setSelectedTrackId: eu } = (0, er.fn)(),
        { isCropEnabled: ed, isTextTrackEnabled: em, isImageTrackEnabled: eh } = (0, er.As)(),
        ef = Y.type === J.nQ.SCREENSHOT,
        ex = Y.type === J.nQ.VOICE_CLIP,
        ev = (0, T.h)(Y.applicationId),
        ep = (0, i.bG)([O.Ay], () => O.Ay.isClipExporting(Y.id)),
        { onShareClick: eb } = (0, U.A)(t),
        eC = (0, i.bG)([S.A], () => S.A.isDeveloper),
        ey = n.useMemo(() => ei.filter((e) => e.trackName.includes(J.gC.VOICE)).length, [ei]),
        ew = n.useMemo(() => ei.filter((e) => e.trackName.includes(J.gC.SOUNDBOARD)).length, [ei]),
        eN = ev?.name ?? Y.applicationName ?? q.intl.string(q.t.GnQui9);
    async function eE() {
        await (0, _.n)(z(), { channelId: t, analyticsLocations: es });
    }
    return (0, a.jsxs)("div", {
        className: ee.XV,
        children: [
            (0, a.jsx)("div", {
                className: ee.eW,
                children: (0, a.jsxs)(d.e, {
                    wrap: !1,
                    size: "sm",
                    align: "center",
                    justify: "end",
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, a.jsx)(m.m, {
                            text: Y.isFavorite ? q.intl.string(Q.default.IZsalP) : q.intl.string(Q.default.ihBfyA),
                            children: (0, a.jsx)(r.K, {
                                onClick: () => (0, P.XK)(Y),
                                variant: "icon-only",
                                "aria-label": Y.isFavorite
                                    ? q.intl.string(Q.default.IZsalP)
                                    : q.intl.string(Q.default.ihBfyA),
                                icon: Y.isFavorite ? h.StarIcon : f.y,
                            }),
                        }),
                        (0, a.jsx)(m.m, {
                            text: q.intl.string(q.t.oyYWHE),
                            children: (0, a.jsx)(r.K, {
                                onClick: (e) => (0, $.A)(e, { clips: [Y], onAfterDelete: c }),
                                variant: "icon-only",
                                "aria-label": q.intl.string(q.t.oyYWHE),
                                icon: x.TrashIcon,
                            }),
                        }),
                        (0, a.jsx)(m.m, {
                            text: q.intl.string(q.t.PdRCRg),
                            children: (0, a.jsx)(r.K, {
                                onClick: function (e) {
                                    (Z(),
                                        (0, R.L3)(e, async () => {
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
                                                l.e("218489"),
                                                l.e("669006"),
                                                l.e("886456"),
                                                l.e("218307"),
                                                l.e("520342"),
                                                l.e("869370"),
                                            ]).then(l.bind(l, 621953));
                                            return (l) =>
                                                (0, a.jsx)(e, {
                                                    ...l,
                                                    clips: [z()],
                                                    analyticsLocations: es,
                                                    channelId: t,
                                                    onAfterDelete: c,
                                                    displayConfiguration: eg,
                                                });
                                        }));
                                },
                                variant: "icon-only",
                                "aria-label": q.intl.string(q.t.PdRCRg),
                                icon: v.MoreHorizontalIcon,
                            }),
                        }),
                        eC &&
                            (0, a.jsx)(m.m, {
                                text: "Clip Debug",
                                children: (0, a.jsx)(r.K, {
                                    onClick: function () {
                                        (0, u.openModalLazy)(
                                            async () => {
                                                let { default: e } = await l.e("310000").then(l.bind(l, 224883));
                                                return (t) => (0, a.jsx)(e, { ...t, clip: Y });
                                            },
                                            { stackingBehavior: "stack" },
                                        );
                                    },
                                    icon: p.BugIcon,
                                    variant: "icon-only",
                                    "aria-label": "Clip Debug",
                                }),
                            }),
                        (0, a.jsx)(r.K, {
                            onClick: c,
                            icon: g.XLargeIcon,
                            variant: "icon-only",
                            "aria-label": q.intl.string(q.t.cpT0Cq),
                        }),
                    ],
                }),
            }),
            (0, a.jsxs)(j.Ip, {
                className: ee.Md,
                children: [
                    (0, a.jsxs)("div", {
                        className: et.uW,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: q.intl.string(Q.default.JrcRaE),
                            }),
                            (0, a.jsxs)("div", {
                                className: et.L0,
                                children: [
                                    "" !== Y.thumbnail &&
                                        (0, a.jsx)("img", {
                                            className: et.Nf,
                                            src: Y.thumbnail,
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                    (0, a.jsx)(en.A, {
                                        variant: "text-sm/medium",
                                        className: et.FA,
                                        containerClassName: et.vt,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !ef &&
                        !ex &&
                        (ed || em || eh) &&
                        (0, a.jsxs)("div", {
                            className: et.uW,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: q.intl.string(Q.default.FmXxW6),
                                }),
                                ed &&
                                    (0, a.jsx)(b.$, {
                                        variant: "secondary",
                                        icon: C.K,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: q.intl.string(Q.default.RiEyiS),
                                        onClick: () => {
                                            (eu(null), ea(G.Y.CROP));
                                        },
                                    }),
                                em &&
                                    (0, a.jsx)(b.$, {
                                        variant: "secondary",
                                        icon: y.x,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: q.intl.string(Q.default.zSN9vp),
                                        onClick: eo,
                                    }),
                                eh &&
                                    (0, a.jsx)(b.$, {
                                        variant: "secondary",
                                        icon: w.X,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: q.intl.string(Q.default.iFo3gj),
                                        onClick: ec,
                                    }),
                            ],
                        }),
                    !ef &&
                        (0, a.jsxs)("div", {
                            className: et.uW,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: q.intl.string(Q.default.KRnA2D),
                                }),
                                (0, a.jsxs)("div", {
                                    className: et.VZ,
                                    children: [
                                        (0, a.jsx)(ej, {
                                            icon:
                                                null != ev
                                                    ? (0, a.jsx)(D.A, { game: ev, size: D.M.XXSMALL })
                                                    : (0, a.jsx)(N.L, { size: "sm", color: "currentColor" }),
                                            label: eN,
                                            enabled: F,
                                            onToggle: V,
                                        }),
                                        (0, a.jsx)(ej, {
                                            icon: (0, a.jsx)(E.MicrophoneIcon, { size: "sm", color: "currentColor" }),
                                            label: q.intl.string(Q.default.ai9fWO),
                                            count: ey,
                                            enabled: B,
                                            disabled: 0 === ey,
                                            onToggle: X,
                                        }),
                                        (0, a.jsx)(ej, {
                                            icon: (0, a.jsx)(k.J, { size: "sm", color: "currentColor" }),
                                            label: q.intl.string(Q.default["/VVQKJ"]),
                                            enabled: K,
                                            disabled: 0 === ew,
                                            onToggle: W,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ee.G3,
                children: (0, a.jsx)(d.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: el
                        ? (0, a.jsx)(b.$, {
                              loading: ep,
                              disabled: ep,
                              variant: "primary",
                              onClick: () =>
                                  eb({
                                      clips: [z()],
                                      onShareComplete: () => {
                                          (o?.(), c());
                                      },
                                  }),
                              text: q.intl.string(q.t["R3BPH+"]),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(b.$, {
                                      loading: ep,
                                      disabled: ep,
                                      variant: "secondary",
                                      icon: A.PlusLargeIcon,
                                      iconPosition: "start",
                                      onClick: eE,
                                      text: q.intl.string(Q.default.HH4Tjj),
                                  }),
                                  (0, a.jsx)(b.$, {
                                      loading: ep,
                                      disabled: ep,
                                      variant: "primary",
                                      icon: L.ShareIcon,
                                      iconPosition: "start",
                                      onClick: () => eb({ clips: [z()] }),
                                      text: q.intl.string(q.t.RDE0Sc),
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
