l.d(t, { A: () => eg });
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
    h = l(27232),
    f = l(505930),
    x = l(241326),
    v = l(365199),
    p = l(92446),
    j = l(972213),
    g = l(364522),
    b = l(683071),
    C = l(331322),
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
    _ = l(372684),
    z = l(430795),
    U = l(253799),
    $ = l(105009),
    B = l(645655),
    G = l(352527),
    H = l(635793),
    F = l(362081),
    K = l(328820),
    V = l(503698),
    X = l.n(V),
    Z = l(31300),
    W = l(646270),
    Y = l(748562),
    Q = l(477155),
    J = l(939249),
    q = l(417270),
    ee = l(16590),
    et = l(375708),
    el = l(954634),
    en = l(363261);
let ea = [
    { preset: _.yz.ORIGINAL, icon: Z.k, label: ee.default.CujCES },
    { preset: _.yz.PORTRAIT_9_16, icon: W.u, label: ee.default["34PW6m"] },
    { preset: _.yz.LANDSCAPE_16_9, icon: Y.U, label: ee.default.ywAdnD },
];
function ei() {
    let { cropPreset: e, setCropPreset: t, setActiveTool: l } = (0, F.T)();
    return (0, n.jsxs)("div", {
        className: el.XV,
        children: [
            (0, n.jsx)("div", {
                className: en.CD,
                children: (0, n.jsx)(y.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: Q.r,
                    iconPosition: "start",
                    text: et.intl.string(ee.default["7yBrfD"]),
                    onClick: () => l(H.Y.NONE),
                }),
            }),
            (0, n.jsxs)(g.Ip, {
                className: en.hX,
                children: [
                    (0, n.jsx)(s.E, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: et.intl.string(ee.default["1TOrU3"]),
                    }),
                    (0, n.jsxs)("div", {
                        className: en.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: et.intl.string(ee.default.r15Wrn),
                            }),
                            (0, n.jsx)("div", {
                                className: en.si,
                                children: ea.map((l) => {
                                    let { preset: a, icon: i, label: r } = l,
                                        c = e === a;
                                    return (0, n.jsxs)(
                                        J.D,
                                        {
                                            "aria-pressed": c,
                                            className: X()(en.is, c && en.j5),
                                            onClick: () => t(a),
                                            children: [
                                                (0, n.jsx)(i, { size: "md" }),
                                                (0, n.jsx)(s.E, {
                                                    variant: "text-sm/medium",
                                                    children: et.intl.string(r),
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
                className: el.G3,
                children: (0, n.jsx)(y.$, {
                    fullWidth: !0,
                    variant: "secondary",
                    icon: q.m,
                    iconPosition: "start",
                    text: et.intl.string(ee.default.XdZS9I),
                    onClick: () => t(_.yz.ORIGINAL),
                }),
            }),
        ],
    });
}
var es = l(818433),
    er = l(317097),
    ec = l(292666),
    eo = l(48736),
    eu = l(853073),
    ed = l(143461);
let em = [
        { value: 24, label: ee.default.zYVcjp },
        { value: 32, label: ee.default.LGX80j },
        { value: 48, label: ee.default.sa6Q0q },
    ],
    eh = [
        { value: K.UY.NONE, label: ee.default["tYuPp+"] },
        { value: K.UY.SMALL, label: ee.default["42Skzz"] },
        { value: K.UY.MEDIUM, label: ee.default["Ujlm+F"] },
        { value: K.UY.LARGE, label: ee.default.lT4Cq2 },
    ],
    ef = [0xfe6e0d, 0xffe047, 3534206, 5793266, 0xff4cd2];
function ex(e) {
    let { track: t } = e,
        { updateTextTrackData: l, setSelectedTrackId: a, removeTrack: i } = (0, eu.j)();
    return (0, n.jsxs)("div", {
        className: el.XV,
        children: [
            (0, n.jsx)("div", {
                className: en.CD,
                children: (0, n.jsx)(y.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: Q.r,
                    iconPosition: "start",
                    text: et.intl.string(ee.default["7yBrfD"]),
                    onClick: () => a(null),
                }),
            }),
            (0, n.jsxs)(g.Ip, {
                className: en.hX,
                children: [
                    (0, n.jsx)("div", {
                        className: ed.r5,
                        children: (0, n.jsx)(s.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: et.intl.string(ee.default.GtvDbf),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: en.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: et.intl.string(ee.default["R/JN4b"]),
                            }),
                            (0, n.jsx)(ec.k, {
                                value: t.data.text,
                                onChange: (e) => l(t.id, (t) => ({ ...t, text: e })),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: en.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: et.intl.string(ee.default["4eAE08"]),
                            }),
                            (0, n.jsx)("div", {
                                className: en.si,
                                children: em.map((e) => {
                                    let { value: a, label: i } = e,
                                        r = t.data.style.fontSize === a;
                                    return (0, n.jsx)(
                                        J.D,
                                        {
                                            "aria-pressed": r,
                                            className: X()(en.is, r && en.j5),
                                            onClick: () =>
                                                l(t.id, (e) => ({ ...e, style: { ...e.style, fontSize: a } })),
                                            children: (0, n.jsx)(s.E, {
                                                variant: "text-sm/medium",
                                                children: et.intl.string(i),
                                            }),
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: ed.zo,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: et.intl.string(ee.default["9oleCI"]),
                            }),
                            (0, n.jsx)(eo.default, {
                                defaultColor: 0xffffff,
                                colors: ef,
                                className: ed.Ei,
                                colorContainerClassName: ed.oP,
                                value: (0, er.LX)(t.data.style.color),
                                onChange: (e) =>
                                    l(t.id, (t) => ({ ...t, style: { ...t.style, color: (0, er.Hl)(e) } })),
                                allowBlackCustomColor: !0,
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: en.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: et.intl.string(ee.default.huZ6Mm),
                            }),
                            (0, n.jsx)("div", {
                                className: en.si,
                                children: eh.map((e) => {
                                    let { value: a, label: i } = e,
                                        r = t.data.style.strokeWidth === a;
                                    return (0, n.jsx)(
                                        J.D,
                                        {
                                            "aria-pressed": r,
                                            className: X()(en.is, r && en.j5),
                                            onClick: () =>
                                                l(t.id, (e) => ({ ...e, style: { ...e.style, strokeWidth: a } })),
                                            children: (0, n.jsx)(s.E, {
                                                variant: "text-sm/medium",
                                                children: et.intl.string(i),
                                            }),
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    }),
                    t.data.style.strokeWidth !== K.UY.NONE &&
                        (0, n.jsxs)("div", {
                            className: ed.zo,
                            children: [
                                (0, n.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    children: et.intl.string(ee.default.iQZQyA),
                                }),
                                (0, n.jsx)(eo.default, {
                                    defaultColor: 0,
                                    colors: ef,
                                    className: ed.Ei,
                                    colorContainerClassName: ed.oP,
                                    value: (0, er.LX)(t.data.style.strokeColor),
                                    onChange: (e) =>
                                        l(t.id, (t) => ({ ...t, style: { ...t.style, strokeColor: (0, er.Hl)(e) } })),
                                    allowBlackCustomColor: !0,
                                }),
                            ],
                        }),
                    (0, n.jsx)("div", {
                        className: ed.DT,
                        children: (0, n.jsx)(y.$, {
                            size: "md",
                            variant: "secondary",
                            icon: x.u,
                            iconPosition: "start",
                            fullWidth: !0,
                            text: et.intl.string(ee.default.LYpz7y),
                            onClick: () => i(t.id),
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ev = l(696016);
let ep = U.I.difference(new Set([U.C.EXPORT_TO_SOUNDBOARD, U.C.FAVORITE, U.C.DELETE, U.C.SHARE, U.C.EDIT]));
function ej(e) {
    let { icon: t, label: l, count: a, enabled: i, disabled: u = !1, onToggle: d } = e;
    return (0, n.jsxs)("div", {
        className: en.l3,
        children: [
            (0, n.jsx)("div", { className: en.sW, children: t }),
            (0, n.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", className: en.RZ, children: l }),
            null != a &&
                a > 0 &&
                (0, n.jsx)("div", {
                    className: en.Mo,
                    children: (0, n.jsx)(s.E, { variant: "text-xs/medium", color: "text-muted", children: a }),
                }),
            (0, n.jsx)("div", {
                className: en.To,
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
function eg(e) {
    let { activeTool: t } = (0, F.T)(),
        { tracks: l, selectedTrackId: a } = (0, eu.j)(),
        i = l.find((e) => e.id === a);
    if (null != i)
        if (i.type === K.Me.TEXT) return (0, n.jsx)(ex, { track: i });
        else i.type;
    switch (t) {
        case H.Y.CROP:
            return (0, n.jsx)(ei, {});
        case H.Y.NONE:
        default:
            return (0, n.jsx)(eb, { ...e });
    }
}
function eb(e) {
    let { channelId: t, onEdit: c, onClose: o } = e,
        {
            getEditedClip: U,
            voiceAudioEnabled: K,
            setVoiceAudioEnabled: V,
            applicationAudioEnabled: X,
            setApplicationAudioEnabled: Z,
            soundboardAudioEnabled: W,
            setSoundboardAudioEnabled: Y,
            pause: Q,
            isTemporary: J,
            setIsTemporary: q,
            clip: ea,
            editOnly: ei,
            setActiveTool: er,
            audioTracks: ec,
        } = (0, F.T)(),
        { analyticsLocations: eo } = (0, M.Ay)(I.A.CLIPS_EDITOR),
        { addTextTrack: ed, setSelectedTrackId: em } = (0, eu.j)(),
        eh = ea.type === _.nQ.SCREENSHOT,
        ef = ea.type === _.nQ.VOICE_CLIP,
        ex = (0, D.h)(ea.applicationId),
        eg = (0, i.bG)([P.Ay], () => P.Ay.isClipExporting(ea.id)),
        { onShareClick: eb } = (0, G.A)(t),
        eC = (0, i.bG)([O.A], () => O.A.isDeveloper),
        ey = a.useCallback(async () => {
            await (0, z.w7)(ea.id), q(!1);
        }, [ea.id, q]),
        eE = a.useMemo(() => ec.filter((e) => e.trackName.includes(ev.gC.VOICE)).length, [ec]),
        eN = a.useMemo(() => ec.filter((e) => e.trackName.includes(ev.gC.SOUNDBOARD)).length, [ec]),
        ek = ex?.name ?? ea.applicationName ?? et.intl.string(et.t.GnQui9);
    async function ew() {
        await (0, $.n)(U(), { channelId: t, analyticsLocations: eo });
    }
    return (0, n.jsxs)("div", {
        className: el.XV,
        children: [
            (0, n.jsx)("div", {
                className: el.eW,
                children: (0, n.jsxs)(d.e, {
                    wrap: !1,
                    size: "sm",
                    align: "center",
                    justify: "end",
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, n.jsx)(m.m, {
                            text: ea.isFavorite ? et.intl.string(ee.default.IZsalP) : et.intl.string(ee.default.ihBfyA),
                            children: (0, n.jsx)(r.K, {
                                onClick: () => (0, z.XK)(ea),
                                variant: "icon-only",
                                "aria-label": ea.isFavorite
                                    ? et.intl.string(ee.default.IZsalP)
                                    : et.intl.string(ee.default.ihBfyA),
                                icon: ea.isFavorite ? h.G : f.y,
                            }),
                        }),
                        (0, n.jsx)(m.m, {
                            text: et.intl.string(et.t.oyYWHE),
                            children: (0, n.jsx)(r.K, {
                                onClick: (e) => (0, B.A)(e, { clips: [ea], onAfterDelete: o }),
                                variant: "icon-only",
                                "aria-label": et.intl.string(et.t.oyYWHE),
                                icon: x.u,
                            }),
                        }),
                        (0, n.jsx)(m.m, {
                            text: et.intl.string(et.t.PdRCRg),
                            children: (0, n.jsx)(r.K, {
                                onClick: function (e) {
                                    Q(),
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
                                                    clips: [U()],
                                                    analyticsLocations: eo,
                                                    channelId: t,
                                                    onAfterDelete: o,
                                                    displayConfiguration: ep,
                                                });
                                        });
                                },
                                variant: "icon-only",
                                "aria-label": et.intl.string(et.t.PdRCRg),
                                icon: v.j,
                            }),
                        }),
                        eC &&
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
                            icon: j.d,
                            variant: "icon-only",
                            "aria-label": et.intl.string(et.t.cpT0Cq),
                        }),
                    ],
                }),
            }),
            (0, n.jsxs)(g.Ip, {
                className: el.Md,
                children: [
                    J &&
                        (0, n.jsx)("div", {
                            className: en.hL,
                            children: (0, n.jsx)(b.w, {
                                type: "warning",
                                children: (0, n.jsxs)(C.B, {
                                    gap: 8,
                                    children: [
                                        (0, n.jsx)(s.E, {
                                            variant: "text-sm/normal",
                                            children: et.intl.string(et.t.EkUv4u),
                                        }),
                                        (0, n.jsx)(y.$, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: ey,
                                            text: et.intl.string(et.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    (0, n.jsxs)("div", {
                        className: en.uW,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: et.intl.string(ee.default.JrcRaE),
                            }),
                            (0, n.jsxs)("div", {
                                className: en.L0,
                                children: [
                                    "" !== ea.thumbnail &&
                                        (0, n.jsx)("img", {
                                            className: en.Nf,
                                            src: ea.thumbnail,
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                    (0, n.jsx)(es.A, {
                                        variant: "text-sm/medium",
                                        className: en.FA,
                                        containerClassName: en.vt,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !eh &&
                        !ef &&
                        (0, n.jsxs)("div", {
                            className: en.uW,
                            children: [
                                (0, n.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    children: et.intl.string(ee.default.FmXxW6),
                                }),
                                (0, n.jsx)(y.$, {
                                    variant: "secondary",
                                    icon: E.K,
                                    iconPosition: "start",
                                    fullWidth: !0,
                                    text: et.intl.string(ee.default.RiEyiS),
                                    onClick: () => {
                                        em(null), er(H.Y.CROP);
                                    },
                                }),
                                (0, n.jsx)(y.$, {
                                    variant: "secondary",
                                    icon: N.x,
                                    iconPosition: "start",
                                    fullWidth: !0,
                                    text: et.intl.string(ee.default.zSN9vp),
                                    onClick: ed,
                                }),
                            ],
                        }),
                    !eh &&
                        (0, n.jsxs)("div", {
                            className: en.uW,
                            children: [
                                (0, n.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    children: et.intl.string(ee.default.KRnA2D),
                                }),
                                (0, n.jsxs)("div", {
                                    className: en.VZ,
                                    children: [
                                        (0, n.jsx)(ej, {
                                            icon:
                                                null != ex
                                                    ? (0, n.jsx)(S.A, { game: ex, size: S.M.XXSMALL })
                                                    : (0, n.jsx)(k.L, { size: "sm", color: "currentColor" }),
                                            label: ek,
                                            enabled: X,
                                            onToggle: Z,
                                        }),
                                        (0, n.jsx)(ej, {
                                            icon: (0, n.jsx)(w.c, { size: "sm", color: "currentColor" }),
                                            label: et.intl.string(ee.default.ai9fWO),
                                            count: eE,
                                            enabled: K,
                                            disabled: 0 === eE,
                                            onToggle: V,
                                        }),
                                        (0, n.jsx)(ej, {
                                            icon: (0, n.jsx)(A.J, { size: "sm", color: "currentColor" }),
                                            label: et.intl.string(ee.default["/VVQKJ"]),
                                            enabled: W,
                                            disabled: 0 === eN,
                                            onToggle: Y,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: el.G3,
                children: (0, n.jsx)(d.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: ei
                        ? (0, n.jsx)(y.$, {
                              loading: eg,
                              disabled: eg,
                              variant: "primary",
                              onClick: () =>
                                  eb({
                                      clips: [U()],
                                      onShareComplete: () => {
                                          c?.(), o();
                                      },
                                  }),
                              text: et.intl.string(et.t["R3BPH+"]),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(y.$, {
                                      loading: eg,
                                      disabled: eg,
                                      variant: "secondary",
                                      icon: L.p,
                                      iconPosition: "start",
                                      onClick: ew,
                                      text: et.intl.string(ee.default.HH4Tjj),
                                  }),
                                  (0, n.jsx)(y.$, {
                                      loading: eg,
                                      disabled: eg,
                                      variant: "primary",
                                      icon: R.l,
                                      iconPosition: "start",
                                      onClick: () => eb({ clips: [U()] }),
                                      text: et.intl.string(et.t.RDE0Sc),
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
