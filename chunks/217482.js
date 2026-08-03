l.d(t, { A: () => ep });
var n = l(477900),
    a = l(582128),
    i = l(17928),
    s = l(834730),
    r = l(408278),
    c = l(983851),
    o = l(358618),
    u = l(192308),
    d = l(825484),
    m = l(866665),
    f = l(27232),
    h = l(505930),
    x = l(241326),
    v = l(365199),
    p = l(92446),
    g = l(972213),
    j = l(364522),
    C = l(683071),
    b = l(331322),
    y = l(821609),
    E = l(428610),
    N = l(48507),
    k = l(342073),
    w = l(831544),
    A = l(7807),
    L = l(663341),
    R = l(405433),
    T = l(442433),
    I = l(793574),
    M = l(688810),
    D = l(429913),
    S = l(769015),
    O = l(540999),
    P = l(915725),
    _ = l(430795),
    z = l(253799),
    U = l(105009),
    $ = l(645655),
    B = l(352527),
    G = l(635793),
    H = l(362081),
    V = l(503698),
    K = l.n(V),
    F = l(31300),
    X = l(646270),
    Z = l(748562),
    W = l(477155),
    Y = l(939249),
    Q = l(417270),
    J = l(696016),
    q = l(16590),
    ee = l(375708),
    et = l(954634),
    el = l(363261);
let en = [
    { preset: J.yz.ORIGINAL, icon: F.k, label: q.default.CujCES },
    { preset: J.yz.PORTRAIT_9_16, icon: X.u, label: q.default["34PW6m"] },
    { preset: J.yz.LANDSCAPE_16_9, icon: Z.U, label: q.default.ywAdnD },
];
function ea() {
    let { cropPreset: e, setCropPreset: t, setActiveTool: l } = (0, H.T)();
    return (0, n.jsxs)("div", {
        className: et.XV,
        children: [
            (0, n.jsx)("div", {
                className: el.CD,
                children: (0, n.jsx)(y.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: W.r,
                    iconPosition: "start",
                    text: ee.intl.string(q.default["7yBrfD"]),
                    onClick: () => l(G.Y.NONE),
                }),
            }),
            (0, n.jsxs)(j.Ip, {
                className: el.hX,
                children: [
                    (0, n.jsx)(s.E, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: ee.intl.string(q.default["1TOrU3"]),
                    }),
                    (0, n.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: ee.intl.string(q.default.r15Wrn),
                            }),
                            (0, n.jsx)("div", {
                                className: el.si,
                                children: en.map((l) => {
                                    let { preset: a, icon: i, label: r } = l,
                                        c = e === a;
                                    return (0, n.jsxs)(
                                        Y.D,
                                        {
                                            "aria-pressed": c,
                                            className: K()(el.is, c && el.j5),
                                            onClick: () => t(a),
                                            children: [
                                                (0, n.jsx)(i, { size: "md" }),
                                                (0, n.jsx)(s.E, {
                                                    variant: "text-sm/medium",
                                                    children: ee.intl.string(r),
                                                }),
                                            ],
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: et.G3,
                children: (0, n.jsx)(y.$, {
                    fullWidth: !0,
                    variant: "secondary",
                    icon: Q.m,
                    iconPosition: "start",
                    text: ee.intl.string(q.default.XdZS9I),
                    onClick: () => t(J.yz.ORIGINAL),
                }),
            }),
        ],
    });
}
var ei = l(818433),
    es = l(317097),
    er = l(292666),
    ec = l(48736),
    eo = l(801835),
    eu = l(143461);
let ed = [
        { value: 24, label: q.default.zYVcjp },
        { value: 32, label: q.default.LGX80j },
        { value: 48, label: q.default.sa6Q0q },
    ],
    em = [
        { value: J.UY.NONE, label: q.default["tYuPp+"] },
        { value: J.UY.SMALL, label: q.default["42Skzz"] },
        { value: J.UY.MEDIUM, label: q.default["Ujlm+F"] },
        { value: J.UY.LARGE, label: q.default.lT4Cq2 },
    ],
    ef = [0xfe6e0d, 0xffe047, 3534206, 5793266, 0xff4cd2];
function eh(e) {
    let { track: t } = e,
        { updateTextTrackData: l, setSelectedTrackId: a, removeTrack: i } = (0, eo.fn)();
    return (0, n.jsxs)("div", {
        className: et.XV,
        children: [
            (0, n.jsx)("div", {
                className: el.CD,
                children: (0, n.jsx)(y.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: W.r,
                    iconPosition: "start",
                    text: ee.intl.string(q.default["7yBrfD"]),
                    onClick: () => a(null),
                }),
            }),
            (0, n.jsxs)(j.Ip, {
                className: el.hX,
                children: [
                    (0, n.jsx)("div", {
                        className: eu.r5,
                        children: (0, n.jsx)(s.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: ee.intl.string(q.default.GtvDbf),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: ee.intl.string(q.default["R/JN4b"]),
                            }),
                            (0, n.jsx)(er.k, {
                                value: t.data.text,
                                onChange: (e) => l(t.id, (t) => ({ ...t, text: e })),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: ee.intl.string(q.default["4eAE08"]),
                            }),
                            (0, n.jsx)("div", {
                                className: el.si,
                                children: ed.map((e) => {
                                    let { value: a, label: i } = e,
                                        r = t.data.style.fontSize === a;
                                    return (0, n.jsx)(
                                        Y.D,
                                        {
                                            "aria-pressed": r,
                                            className: K()(el.is, r && el.j5),
                                            onClick: () =>
                                                l(t.id, (e) => ({ ...e, style: { ...e.style, fontSize: a } })),
                                            children: (0, n.jsx)(s.E, {
                                                variant: "text-sm/medium",
                                                children: ee.intl.string(i),
                                            }),
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: eu.zo,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: ee.intl.string(q.default["9oleCI"]),
                            }),
                            (0, n.jsx)(ec.default, {
                                defaultColor: 0xffffff,
                                colors: ef,
                                className: eu.Ei,
                                colorContainerClassName: eu.oP,
                                value: (0, es.LX)(t.data.style.color),
                                onChange: (e) =>
                                    l(t.id, (t) => ({ ...t, style: { ...t.style, color: (0, es.Hl)(e) } })),
                                allowBlackCustomColor: !0,
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: ee.intl.string(q.default.huZ6Mm),
                            }),
                            (0, n.jsx)("div", {
                                className: el.si,
                                children: em.map((e) => {
                                    let { value: a, label: i } = e,
                                        r = t.data.style.strokeWidth === a;
                                    return (0, n.jsx)(
                                        Y.D,
                                        {
                                            "aria-pressed": r,
                                            className: K()(el.is, r && el.j5),
                                            onClick: () =>
                                                l(t.id, (e) => ({ ...e, style: { ...e.style, strokeWidth: a } })),
                                            children: (0, n.jsx)(s.E, {
                                                variant: "text-sm/medium",
                                                children: ee.intl.string(i),
                                            }),
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    }),
                    t.data.style.strokeWidth !== J.UY.NONE &&
                        (0, n.jsxs)("div", {
                            className: eu.zo,
                            children: [
                                (0, n.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    children: ee.intl.string(q.default.iQZQyA),
                                }),
                                (0, n.jsx)(ec.default, {
                                    defaultColor: 0,
                                    colors: ef,
                                    className: eu.Ei,
                                    colorContainerClassName: eu.oP,
                                    value: (0, es.LX)(t.data.style.strokeColor),
                                    onChange: (e) =>
                                        l(t.id, (t) => ({ ...t, style: { ...t.style, strokeColor: (0, es.Hl)(e) } })),
                                    allowBlackCustomColor: !0,
                                }),
                            ],
                        }),
                    (0, n.jsx)("div", {
                        className: eu.DT,
                        children: (0, n.jsx)(y.$, {
                            size: "md",
                            variant: "secondary",
                            icon: x.u,
                            iconPosition: "start",
                            fullWidth: !0,
                            text: ee.intl.string(q.default.LYpz7y),
                            onClick: () => i(t.id),
                        }),
                    }),
                ],
            }),
        ],
    });
}
let ex = z.I.difference(new Set([z.C.EXPORT_TO_SOUNDBOARD, z.C.FAVORITE, z.C.DELETE, z.C.SHARE, z.C.EDIT]));
function ev(e) {
    let { icon: t, label: l, count: a, enabled: i, disabled: u = !1, onToggle: d } = e;
    return (0, n.jsxs)("div", {
        className: el.l3,
        children: [
            (0, n.jsx)("div", { className: el.sW, children: t }),
            (0, n.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", className: el.RZ, children: l }),
            null != a &&
                a > 0 &&
                (0, n.jsx)("div", {
                    className: el.Mo,
                    children: (0, n.jsx)(s.E, { variant: "text-xs/medium", color: "text-muted", children: a }),
                }),
            (0, n.jsx)("div", {
                className: el.To,
                children: (0, n.jsx)(r.K, {
                    size: "sm",
                    variant: "icon-only",
                    disabled: u,
                    icon: i ? c.H : o._,
                    onClick: () => d(!i),
                    "aria-label": l,
                    "aria-pressed": i,
                }),
            }),
        ],
    });
}
function ep(e) {
    let { activeTool: t } = (0, H.T)(),
        { tracks: l, selectedTrackId: a } = (0, eo.fn)(),
        i = l.find((e) => e.id === a);
    if (null != i)
        if (i.type === J.Me.TEXT) return (0, n.jsx)(eh, { track: i });
        else i.type;
    switch (t) {
        case G.Y.CROP:
            return (0, n.jsx)(ea, {});
        case G.Y.NONE:
        default:
            return (0, n.jsx)(eg, { ...e });
    }
}
function eg(e) {
    let { channelId: t, onEdit: c, onClose: o } = e,
        {
            getEditedClip: z,
            voiceAudioEnabled: V,
            setVoiceAudioEnabled: K,
            applicationAudioEnabled: F,
            setApplicationAudioEnabled: X,
            soundboardAudioEnabled: Z,
            setSoundboardAudioEnabled: W,
            pause: Y,
            isTemporary: Q,
            setIsTemporary: en,
            clip: ea,
            editOnly: es,
            setActiveTool: er,
            audioTracks: ec,
        } = (0, H.T)(),
        { analyticsLocations: eu } = (0, M.Ay)(I.A.CLIPS_EDITOR),
        { addTextTrack: ed, setSelectedTrackId: em } = (0, eo.fn)(),
        { isCropEnabled: ef, isTextTrackEnabled: eh } = (0, eo.As)(),
        ep = ea.type === J.nQ.SCREENSHOT,
        eg = ea.type === J.nQ.VOICE_CLIP,
        ej = (0, D.h)(ea.applicationId),
        eC = (0, i.bG)([P.Ay], () => P.Ay.isClipExporting(ea.id)),
        { onShareClick: eb } = (0, B.A)(t),
        ey = (0, i.bG)([O.A], () => O.A.isDeveloper),
        eE = a.useCallback(async () => {
            await (0, _.w7)(ea.id), en(!1);
        }, [ea.id, en]),
        eN = a.useMemo(() => ec.filter((e) => e.trackName.includes(J.gC.VOICE)).length, [ec]),
        ek = a.useMemo(() => ec.filter((e) => e.trackName.includes(J.gC.SOUNDBOARD)).length, [ec]),
        ew = ej?.name ?? ea.applicationName ?? ee.intl.string(ee.t.GnQui9);
    async function eA() {
        await (0, U.n)(z(), { channelId: t, analyticsLocations: eu });
    }
    return (0, n.jsxs)("div", {
        className: et.XV,
        children: [
            (0, n.jsx)("div", {
                className: et.eW,
                children: (0, n.jsxs)(d.e, {
                    wrap: !1,
                    size: "sm",
                    align: "center",
                    justify: "end",
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, n.jsx)(m.m, {
                            text: ea.isFavorite ? ee.intl.string(q.default.IZsalP) : ee.intl.string(q.default.ihBfyA),
                            children: (0, n.jsx)(r.K, {
                                onClick: () => (0, _.XK)(ea),
                                variant: "icon-only",
                                "aria-label": ea.isFavorite
                                    ? ee.intl.string(q.default.IZsalP)
                                    : ee.intl.string(q.default.ihBfyA),
                                icon: ea.isFavorite ? f.G : h.y,
                            }),
                        }),
                        (0, n.jsx)(m.m, {
                            text: ee.intl.string(ee.t.oyYWHE),
                            children: (0, n.jsx)(r.K, {
                                onClick: (e) => (0, $.A)(e, { clips: [ea], onAfterDelete: o }),
                                variant: "icon-only",
                                "aria-label": ee.intl.string(ee.t.oyYWHE),
                                icon: x.u,
                            }),
                        }),
                        (0, n.jsx)(m.m, {
                            text: ee.intl.string(ee.t.PdRCRg),
                            children: (0, n.jsx)(r.K, {
                                onClick: function (e) {
                                    Y(),
                                        (0, T.L3)(e, async () => {
                                            let { default: e } = await Promise.all([
                                                l.e("16123"),
                                                l.e("21107"),
                                                l.e("98900"),
                                                l.e("95429"),
                                                l.e("11930"),
                                                l.e("20891"),
                                                l.e("31279"),
                                                l.e("71863"),
                                                l.e("38601"),
                                                l.e("18489"),
                                                l.e("69006"),
                                                l.e("40688"),
                                                l.e("86456"),
                                                l.e("20342"),
                                                l.e("80955"),
                                            ]).then(l.bind(l, 80982));
                                            return (l) =>
                                                (0, n.jsx)(e, {
                                                    ...l,
                                                    clips: [z()],
                                                    analyticsLocations: eu,
                                                    channelId: t,
                                                    onAfterDelete: o,
                                                    displayConfiguration: ex,
                                                });
                                        });
                                },
                                variant: "icon-only",
                                "aria-label": ee.intl.string(ee.t.PdRCRg),
                                icon: v.j,
                            }),
                        }),
                        ey &&
                            (0, n.jsx)(m.m, {
                                text: "Clip Debug",
                                children: (0, n.jsx)(r.K, {
                                    onClick: function () {
                                        (0, u.openModalLazy)(
                                            async () => {
                                                let { default: e } = await l.e("10000").then(l.bind(l, 224883));
                                                return (t) => (0, n.jsx)(e, { ...t, clip: ea });
                                            },
                                            { stackingBehavior: "stack" },
                                        );
                                    },
                                    icon: p.Q,
                                    variant: "icon-only",
                                    "aria-label": "Clip Debug",
                                }),
                            }),
                        (0, n.jsx)(r.K, {
                            onClick: o,
                            icon: g.d,
                            variant: "icon-only",
                            "aria-label": ee.intl.string(ee.t.cpT0Cq),
                        }),
                    ],
                }),
            }),
            (0, n.jsxs)(j.Ip, {
                className: et.Md,
                children: [
                    Q &&
                        (0, n.jsx)("div", {
                            className: el.hL,
                            children: (0, n.jsx)(C.w, {
                                type: "warning",
                                children: (0, n.jsxs)(b.B, {
                                    gap: 8,
                                    children: [
                                        (0, n.jsx)(s.E, {
                                            variant: "text-sm/normal",
                                            children: ee.intl.string(ee.t.EkUv4u),
                                        }),
                                        (0, n.jsx)(y.$, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: eE,
                                            text: ee.intl.string(ee.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    (0, n.jsxs)("div", {
                        className: el.uW,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: ee.intl.string(q.default.JrcRaE),
                            }),
                            (0, n.jsxs)("div", {
                                className: el.L0,
                                children: [
                                    "" !== ea.thumbnail &&
                                        (0, n.jsx)("img", {
                                            className: el.Nf,
                                            src: ea.thumbnail,
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                    (0, n.jsx)(ei.A, {
                                        variant: "text-sm/medium",
                                        className: el.FA,
                                        containerClassName: el.vt,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !ep &&
                        !eg &&
                        (ef || eh) &&
                        (0, n.jsxs)("div", {
                            className: el.uW,
                            children: [
                                (0, n.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    children: ee.intl.string(q.default.FmXxW6),
                                }),
                                ef &&
                                    (0, n.jsx)(y.$, {
                                        variant: "secondary",
                                        icon: E.K,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: ee.intl.string(q.default.RiEyiS),
                                        onClick: () => {
                                            em(null), er(G.Y.CROP);
                                        },
                                    }),
                                eh &&
                                    (0, n.jsx)(y.$, {
                                        variant: "secondary",
                                        icon: N.x,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: ee.intl.string(q.default.zSN9vp),
                                        onClick: ed,
                                    }),
                            ],
                        }),
                    !ep &&
                        (0, n.jsxs)("div", {
                            className: el.uW,
                            children: [
                                (0, n.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    children: ee.intl.string(q.default.KRnA2D),
                                }),
                                (0, n.jsxs)("div", {
                                    className: el.VZ,
                                    children: [
                                        (0, n.jsx)(ev, {
                                            icon:
                                                null != ej
                                                    ? (0, n.jsx)(S.A, { game: ej, size: S.M.XXSMALL })
                                                    : (0, n.jsx)(k.L, { size: "sm", color: "currentColor" }),
                                            label: ew,
                                            enabled: F,
                                            onToggle: X,
                                        }),
                                        (0, n.jsx)(ev, {
                                            icon: (0, n.jsx)(w.c, { size: "sm", color: "currentColor" }),
                                            label: ee.intl.string(q.default.ai9fWO),
                                            count: eN,
                                            enabled: V,
                                            disabled: 0 === eN,
                                            onToggle: K,
                                        }),
                                        (0, n.jsx)(ev, {
                                            icon: (0, n.jsx)(A.J, { size: "sm", color: "currentColor" }),
                                            label: ee.intl.string(q.default["/VVQKJ"]),
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
            (0, n.jsx)("div", {
                className: et.G3,
                children: (0, n.jsx)(d.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: es
                        ? (0, n.jsx)(y.$, {
                              loading: eC,
                              disabled: eC,
                              variant: "primary",
                              onClick: () =>
                                  eb({
                                      clips: [z()],
                                      onShareComplete: () => {
                                          c?.(), o();
                                      },
                                  }),
                              text: ee.intl.string(ee.t["R3BPH+"]),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(y.$, {
                                      loading: eC,
                                      disabled: eC,
                                      variant: "secondary",
                                      icon: L.p,
                                      iconPosition: "start",
                                      onClick: eA,
                                      text: ee.intl.string(q.default.HH4Tjj),
                                  }),
                                  (0, n.jsx)(y.$, {
                                      loading: eC,
                                      disabled: eC,
                                      variant: "primary",
                                      icon: R.l,
                                      iconPosition: "start",
                                      onClick: () => eb({ clips: [z()] }),
                                      text: ee.intl.string(ee.t.RDE0Sc),
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
