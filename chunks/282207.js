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
    f = l(27232),
    h = l(505930),
    x = l(241326),
    p = l(365199),
    v = l(92446),
    g = l(972213),
    j = l(364522),
    C = l(821609),
    b = l(428610),
    y = l(48507),
    w = l(750943),
    N = l(342073),
    E = l(831544),
    k = l(7807),
    A = l(663341),
    L = l(442433),
    R = l(793574),
    I = l(688810),
    M = l(429913),
    T = l(769015),
    D = l(540999),
    S = l(915725),
    O = l(614584),
    P = l(253799),
    _ = l(721610),
    z = l(686320),
    U = l(105009),
    $ = l(645655),
    G = l(352527),
    H = l(635793),
    B = l(362081),
    F = l(503698),
    X = l.n(F),
    V = l(31300),
    W = l(646270),
    Z = l(748562),
    K = l(477155),
    Y = l(939249),
    J = l(417270),
    Q = l(696016),
    q = l(268378),
    ee = l(375708),
    et = l(301187),
    el = l(367454);
let ea = [
    { preset: Q.yz.ORIGINAL, icon: V.k, label: q.default.CujCES },
    { preset: Q.yz.PORTRAIT_9_16, icon: W.u, label: q.default["34PW6m"] },
    { preset: Q.yz.LANDSCAPE_16_9, icon: Z.U, label: q.default.ywAdnD },
];
function en() {
    let { cropPreset: e, setCropPreset: t, setActiveTool: l } = (0, B.T)();
    return (0, a.jsxs)("div", {
        className: et.XV,
        children: [
            (0, a.jsx)("div", {
                className: el.CD,
                children: (0, a.jsx)(C.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: K.r,
                    iconPosition: "start",
                    text: ee.intl.string(q.default["7yBrfD"]),
                    onClick: () => l(H.Y.NONE),
                }),
            }),
            (0, a.jsxs)(j.Ip, {
                className: el.hX,
                children: [
                    (0, a.jsx)(s.E, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: ee.intl.string(q.default["1TOrU3"]),
                    }),
                    (0, a.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(q.default.r15Wrn),
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
                                            className: X()(el.is, o && el.j5),
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
                children: (0, a.jsx)(C.$, {
                    fullWidth: !0,
                    variant: "secondary",
                    icon: J.RetryIcon,
                    iconPosition: "start",
                    text: ee.intl.string(q.default.XdZS9I),
                    onClick: () => t(Q.yz.ORIGINAL),
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
        { value: Q.Hz.NONE, label: q.default.IqUUKg },
        { value: Q.Hz.SMALL, label: q.default.VearyN },
        { value: Q.Hz.MEDIUM, label: q.default.AJsDsD },
        { value: Q.Hz.LARGE, label: q.default.k5w7Jy },
    ],
    em = [0, 0xffffff, 0xfe6e0d, 5793266, 0xff4cd2];
function ef(e) {
    let { track: t } = e,
        { updateImageTrackData: l, pickAndReplaceImage: n, setSelectedTrackId: i, removeTrack: r } = (0, eo.fn)(),
        o = t.data.shadow ?? Q.xy,
        c = t.data.shadowColor ?? Q.pk;
    return (0, a.jsxs)("div", {
        className: et.XV,
        children: [
            (0, a.jsx)("div", {
                className: el.CD,
                children: (0, a.jsx)(C.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: K.r,
                    iconPosition: "start",
                    text: ee.intl.string(q.default["7yBrfD"]),
                    onClick: () => i(null),
                }),
            }),
            (0, a.jsxs)(j.Ip, {
                className: el.hX,
                children: [
                    (0, a.jsx)("div", {
                        className: eu.r5,
                        children: (0, a.jsx)(s.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: ee.intl.string(q.default.S0ODmT),
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
                            (0, a.jsx)(C.$, {
                                variant: "secondary",
                                icon: w.X,
                                iconPosition: "start",
                                fullWidth: !0,
                                text: ee.intl.string(q.default.wR5R9w),
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
                                children: ee.intl.string(q.default["/v2zZ+"]),
                            }),
                            (0, a.jsx)("div", {
                                className: ec.p,
                                children: ed.map((e) => {
                                    let { value: n, label: i } = e,
                                        r = o === n;
                                    return (0, a.jsx)(
                                        Y.D,
                                        {
                                            "aria-pressed": r,
                                            className: X()(el.is, r && el.j5),
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
                    o !== Q.Hz.NONE &&
                        (0, a.jsxs)("div", {
                            className: eu.zo,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(q.default.P5dSl0),
                                }),
                                (0, a.jsx)(er.default, {
                                    defaultColor: (0, es.LX)(Q.pk),
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
                children: (0, a.jsx)(C.$, {
                    size: "md",
                    variant: "secondary",
                    icon: x.TrashIcon,
                    iconPosition: "start",
                    fullWidth: !0,
                    text: ee.intl.string(q.default.ytiENm),
                    onClick: () => r(t.id),
                }),
            }),
        ],
    });
}
var eh = l(95477);
let ex = [
        { value: 0.04, label: q.default.zYVcjp },
        { value: 0.06, label: q.default.LGX80j },
        { value: 0.09, label: q.default.sa6Q0q },
    ],
    ep = [
        { value: Q.UY.NONE, label: q.default["tYuPp+"] },
        { value: Q.UY.SMALL, label: q.default["42Skzz"] },
        { value: Q.UY.MEDIUM, label: q.default["Ujlm+F"] },
        { value: Q.UY.LARGE, label: q.default.lT4Cq2 },
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
                children: (0, a.jsx)(C.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: K.r,
                    iconPosition: "start",
                    text: ee.intl.string(q.default["7yBrfD"]),
                    onClick: () => n(null),
                }),
            }),
            (0, a.jsxs)(j.Ip, {
                className: el.hX,
                children: [
                    (0, a.jsx)("div", {
                        className: eu.r5,
                        children: (0, a.jsx)(s.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: ee.intl.string(q.default.GtvDbf),
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(q.default["R/JN4b"]),
                            }),
                            (0, a.jsx)(eh.k, {
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
                                children: ee.intl.string(q.default["4eAE08"]),
                            }),
                            (0, a.jsx)("div", {
                                className: el.si,
                                children: ex.map((e) => {
                                    let { value: n, label: i } = e,
                                        r = t.data.style.fontSize === n;
                                    return (0, a.jsx)(
                                        Y.D,
                                        {
                                            "aria-pressed": r,
                                            className: X()(el.is, r && el.j5),
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
                                children: ee.intl.string(q.default["9oleCI"]),
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
                                children: ee.intl.string(q.default.huZ6Mm),
                            }),
                            (0, a.jsx)("div", {
                                className: el.si,
                                children: ep.map((e) => {
                                    let { value: n, label: i } = e,
                                        r = t.data.style.strokeWidth === n;
                                    return (0, a.jsx)(
                                        Y.D,
                                        {
                                            "aria-pressed": r,
                                            className: X()(el.is, r && el.j5),
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
                    t.data.style.strokeWidth !== Q.UY.NONE &&
                        (0, a.jsxs)("div", {
                            className: eu.zo,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(q.default.iQZQyA),
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
                children: (0, a.jsx)(C.$, {
                    size: "md",
                    variant: "secondary",
                    icon: x.TrashIcon,
                    iconPosition: "start",
                    fullWidth: !0,
                    text: ee.intl.string(q.default.LYpz7y),
                    onClick: () => i(t.id),
                }),
            }),
        ],
    });
}
let ej = P.I.difference(new Set([P.C.EXPORT_TO_SOUNDBOARD, P.C.FAVORITE, P.C.DELETE, P.C.MAIN_ACTION, P.C.EDIT]));
function eC(e) {
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
function eb(e) {
    let { activeTool: t } = (0, B.T)(),
        { tracks: l, selectedTrackId: n } = (0, eo.fn)(),
        i = l.find((e) => e.id === n);
    if (null != i)
        switch (i.type) {
            case Q.Me.TEXT:
                return (0, a.jsx)(eg, { track: i });
            case Q.Me.IMAGE:
                return (0, a.jsx)(ef, { track: i });
        }
    switch (t) {
        case H.Y.CROP:
            return (0, a.jsx)(en, {});
        case H.Y.NONE:
        default:
            return (0, a.jsx)(ey, { ...e });
    }
}
function ey(e) {
    let { channelId: t, onEdit: o, onClose: c } = e,
        {
            getEditedClip: P,
            voiceAudioEnabled: F,
            setVoiceAudioEnabled: X,
            applicationAudioEnabled: V,
            setApplicationAudioEnabled: W,
            soundboardAudioEnabled: Z,
            setSoundboardAudioEnabled: K,
            pause: Y,
            clip: J,
            editOnly: ea,
            setActiveTool: en,
            audioTracks: es,
        } = (0, B.T)(),
        { analyticsLocations: er } = (0, I.Ay)(R.A.CLIPS_EDITOR),
        { addTextTrack: ec, pickAndAddImageTrack: eu, setSelectedTrackId: ed } = (0, eo.fn)(),
        { isCropEnabled: em, isTextTrackEnabled: ef, isImageTrackEnabled: eh } = (0, eo.As)(),
        ex = J.type === Q.nQ.SCREENSHOT,
        ep = J.type === Q.nQ.VOICE_CLIP,
        ev = (0, M.h)(J.applicationId),
        eg = (0, i.bG)([S.Ay], () => S.Ay.isClipExporting(J.id)),
        { onShareClick: eb } = (0, G.A)(t),
        { picker: ey } = n.useContext(_.$),
        ew = (0, z.$)(ey?.action),
        eN = (0, i.bG)([D.A], () => D.A.isDeveloper),
        eE = n.useMemo(() => es.filter((e) => e.trackName.includes(Q.gC.VOICE)).length, [es]),
        ek = n.useMemo(() => es.filter((e) => e.trackName.includes(Q.gC.SOUNDBOARD)).length, [es]),
        eA = ev?.name ?? J.applicationName ?? ee.intl.string(ee.t.GnQui9);
    async function eL() {
        await (0, U.n)(P(), { channelId: t, analyticsLocations: er });
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
                            text: J.isFavorite ? ee.intl.string(q.default.IZsalP) : ee.intl.string(q.default.ihBfyA),
                            children: (0, a.jsx)(r.K, {
                                onClick: () => (0, O.XK)(J),
                                variant: "icon-only",
                                "aria-label": J.isFavorite
                                    ? ee.intl.string(q.default.IZsalP)
                                    : ee.intl.string(q.default.ihBfyA),
                                icon: J.isFavorite ? f.StarIcon : h.y,
                            }),
                        }),
                        (0, a.jsx)(m.m, {
                            text: ee.intl.string(ee.t.oyYWHE),
                            children: (0, a.jsx)(r.K, {
                                onClick: (e) => (0, $.A)(e, { clips: [J], onAfterDelete: c }),
                                variant: "icon-only",
                                "aria-label": ee.intl.string(ee.t.oyYWHE),
                                icon: x.TrashIcon,
                            }),
                        }),
                        (0, a.jsx)(m.m, {
                            text: ee.intl.string(ee.t.PdRCRg),
                            children: (0, a.jsx)(r.K, {
                                onClick: function (e) {
                                    (Y(),
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
                                                l.e("338601"),
                                                l.e("218489"),
                                                l.e("669006"),
                                                l.e("886456"),
                                                l.e("218307"),
                                                l.e("520342"),
                                                l.e("6896"),
                                            ]).then(l.bind(l, 553075));
                                            return (l) =>
                                                (0, a.jsx)(e, {
                                                    ...l,
                                                    clips: [P()],
                                                    analyticsLocations: er,
                                                    channelId: t,
                                                    onAfterDelete: c,
                                                    displayConfiguration: ej,
                                                });
                                        }));
                                },
                                variant: "icon-only",
                                "aria-label": ee.intl.string(ee.t.PdRCRg),
                                icon: p.MoreHorizontalIcon,
                            }),
                        }),
                        eN &&
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
                                                return (t) => (0, a.jsx)(e, { ...t, clip: J });
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
            (0, a.jsxs)(j.Ip, {
                className: et.Md,
                children: [
                    (0, a.jsxs)("div", {
                        className: el.uW,
                        children: [
                            (0, a.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(q.default.JrcRaE),
                            }),
                            (0, a.jsxs)("div", {
                                className: el.L0,
                                children: [
                                    "" !== J.thumbnail &&
                                        (0, a.jsx)("img", {
                                            className: el.Nf,
                                            src: J.thumbnail,
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
                    !ex &&
                        !ep &&
                        (em || ef || eh) &&
                        (0, a.jsxs)("div", {
                            className: el.uW,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(q.default.FmXxW6),
                                }),
                                em &&
                                    (0, a.jsx)(C.$, {
                                        variant: "secondary",
                                        icon: b.K,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: ee.intl.string(q.default.RiEyiS),
                                        onClick: () => {
                                            (ed(null), en(H.Y.CROP));
                                        },
                                    }),
                                ef &&
                                    (0, a.jsx)(C.$, {
                                        variant: "secondary",
                                        icon: y.x,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: ee.intl.string(q.default.zSN9vp),
                                        onClick: ec,
                                    }),
                                eh &&
                                    (0, a.jsx)(C.$, {
                                        variant: "secondary",
                                        icon: w.X,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: ee.intl.string(q.default.iFo3gj),
                                        onClick: eu,
                                    }),
                            ],
                        }),
                    !ex &&
                        (0, a.jsxs)("div", {
                            className: el.uW,
                            children: [
                                (0, a.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(q.default.KRnA2D),
                                }),
                                (0, a.jsxs)("div", {
                                    className: el.VZ,
                                    children: [
                                        (0, a.jsx)(eC, {
                                            icon:
                                                null != ev
                                                    ? (0, a.jsx)(T.A, { game: ev, size: T.M.XXSMALL })
                                                    : (0, a.jsx)(N.L, { size: "sm", color: "currentColor" }),
                                            label: eA,
                                            enabled: V,
                                            onToggle: W,
                                        }),
                                        (0, a.jsx)(eC, {
                                            icon: (0, a.jsx)(E.MicrophoneIcon, { size: "sm", color: "currentColor" }),
                                            label: ee.intl.string(q.default.ai9fWO),
                                            count: eE,
                                            enabled: F,
                                            disabled: 0 === eE,
                                            onToggle: X,
                                        }),
                                        (0, a.jsx)(eC, {
                                            icon: (0, a.jsx)(k.J, { size: "sm", color: "currentColor" }),
                                            label: ee.intl.string(q.default["/VVQKJ"]),
                                            enabled: Z,
                                            disabled: 0 === ek,
                                            onToggle: K,
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
                        ? (0, a.jsx)(C.$, {
                              loading: eg,
                              disabled: eg,
                              variant: "primary",
                              onClick: () =>
                                  eb({
                                      clips: [P()],
                                      onShareComplete: () => {
                                          (o?.(), c());
                                      },
                                  }),
                              text: ee.intl.string(ee.t["R3BPH+"]),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(C.$, {
                                      loading: eg,
                                      disabled: eg,
                                      variant: "secondary",
                                      icon: A.PlusLargeIcon,
                                      iconPosition: "start",
                                      onClick: eL,
                                      text: ee.intl.string(q.default.HH4Tjj),
                                  }),
                                  (0, a.jsx)(C.$, {
                                      loading: eg,
                                      disabled: eg,
                                      variant: "primary",
                                      icon: ew.icon,
                                      iconPosition: "start",
                                      onClick: null != ey ? () => ey.onPick(P()) : () => eb({ clips: [P()] }),
                                      text: ew.label,
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
