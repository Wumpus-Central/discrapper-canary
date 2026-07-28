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
    N = l(428610),
    E = l(48507),
    k = l(342073),
    w = l(831544),
    A = l(7807),
    L = l(663341),
    R = l(405433),
    T = l(442433),
    M = l(429913),
    I = l(769015),
    D = l(540999),
    S = l(915725),
    O = l(372684),
    P = l(430795),
    _ = l(253799),
    z = l(105009),
    U = l(645655),
    $ = l(352527),
    B = l(635793),
    G = l(362081),
    H = l(328820),
    F = l(503698),
    K = l.n(F),
    V = l(31300),
    X = l(646270),
    Z = l(748562),
    W = l(477155),
    Y = l(939249),
    Q = l(417270),
    J = l(16590),
    q = l(375708),
    ee = l(954634),
    et = l(363261);
let el = [
    { preset: O.yz.ORIGINAL, icon: V.k, label: J.default.CujCES },
    { preset: O.yz.PORTRAIT_9_16, icon: X.u, label: J.default["34PW6m"] },
    { preset: O.yz.LANDSCAPE_16_9, icon: Z.U, label: J.default.ywAdnD },
];
function en() {
    let { cropPreset: e, setCropPreset: t, setActiveTool: l } = (0, G.T)();
    return (0, n.jsxs)("div", {
        className: ee.XV,
        children: [
            (0, n.jsx)("div", {
                className: et.CD,
                children: (0, n.jsx)(y.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: W.r,
                    iconPosition: "start",
                    text: q.intl.string(J.default["7yBrfD"]),
                    onClick: () => l(B.Y.NONE),
                }),
            }),
            (0, n.jsxs)(g.Ip, {
                className: et.hX,
                children: [
                    (0, n.jsx)(s.E, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: q.intl.string(J.default["1TOrU3"]),
                    }),
                    (0, n.jsxs)("div", {
                        className: et.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: q.intl.string(J.default.r15Wrn),
                            }),
                            (0, n.jsx)("div", {
                                className: et.si,
                                children: el.map((l) => {
                                    let { preset: a, icon: i, label: r } = l,
                                        c = e === a;
                                    return (0, n.jsxs)(
                                        Y.D,
                                        {
                                            "aria-pressed": c,
                                            className: K()(et.is, c && et.j5),
                                            onClick: () => t(a),
                                            children: [
                                                (0, n.jsx)(i, { size: "md" }),
                                                (0, n.jsx)(s.E, {
                                                    variant: "text-sm/medium",
                                                    children: q.intl.string(r),
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
                className: ee.G3,
                children: (0, n.jsx)(y.$, {
                    fullWidth: !0,
                    variant: "secondary",
                    icon: Q.m,
                    iconPosition: "start",
                    text: q.intl.string(J.default.XdZS9I),
                    onClick: () => t(O.yz.ORIGINAL),
                }),
            }),
        ],
    });
}
var ea = l(818433),
    ei = l(317097),
    es = l(292666),
    er = l(48736),
    ec = l(853073),
    eo = l(143461);
let eu = [
        { value: 24, label: J.default.zYVcjp },
        { value: 32, label: J.default.LGX80j },
        { value: 48, label: J.default.sa6Q0q },
    ],
    ed = [
        { value: H.UY.NONE, label: J.default["tYuPp+"] },
        { value: H.UY.SMALL, label: J.default["42Skzz"] },
        { value: H.UY.MEDIUM, label: J.default["Ujlm+F"] },
        { value: H.UY.LARGE, label: J.default.lT4Cq2 },
    ],
    em = [0xfe6e0d, 0xffe047, 3534206, 5793266, 0xff4cd2];
function eh(e) {
    let { track: t } = e,
        { updateTextTrackData: l, setSelectedTrackId: a, removeTrack: i } = (0, ec.j)();
    return (0, n.jsxs)("div", {
        className: ee.XV,
        children: [
            (0, n.jsx)("div", {
                className: et.CD,
                children: (0, n.jsx)(y.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: W.r,
                    iconPosition: "start",
                    text: q.intl.string(J.default["7yBrfD"]),
                    onClick: () => a(null),
                }),
            }),
            (0, n.jsxs)(g.Ip, {
                className: et.hX,
                children: [
                    (0, n.jsx)("div", {
                        className: eo.r5,
                        children: (0, n.jsx)(s.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: q.intl.string(J.default.GtvDbf),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: et.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: q.intl.string(J.default["R/JN4b"]),
                            }),
                            (0, n.jsx)(es.k, {
                                value: t.data.text,
                                onChange: (e) => l(t.id, (t) => ({ ...t, text: e })),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: et.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: q.intl.string(J.default["4eAE08"]),
                            }),
                            (0, n.jsx)("div", {
                                className: et.si,
                                children: eu.map((e) => {
                                    let { value: a, label: i } = e,
                                        r = t.data.style.fontSize === a;
                                    return (0, n.jsx)(
                                        Y.D,
                                        {
                                            "aria-pressed": r,
                                            className: K()(et.is, r && et.j5),
                                            onClick: () =>
                                                l(t.id, (e) => ({ ...e, style: { ...e.style, fontSize: a } })),
                                            children: (0, n.jsx)(s.E, {
                                                variant: "text-sm/medium",
                                                children: q.intl.string(i),
                                            }),
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: eo.zo,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: q.intl.string(J.default["9oleCI"]),
                            }),
                            (0, n.jsx)(er.default, {
                                defaultColor: 0xffffff,
                                colors: em,
                                className: eo.Ei,
                                colorContainerClassName: eo.oP,
                                value: (0, ei.LX)(t.data.style.color),
                                onChange: (e) =>
                                    l(t.id, (t) => ({ ...t, style: { ...t.style, color: (0, ei.Hl)(e) } })),
                                allowBlackCustomColor: !0,
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: et.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: q.intl.string(J.default.huZ6Mm),
                            }),
                            (0, n.jsx)("div", {
                                className: et.si,
                                children: ed.map((e) => {
                                    let { value: a, label: i } = e,
                                        r = t.data.style.strokeWidth === a;
                                    return (0, n.jsx)(
                                        Y.D,
                                        {
                                            "aria-pressed": r,
                                            className: K()(et.is, r && et.j5),
                                            onClick: () =>
                                                l(t.id, (e) => ({ ...e, style: { ...e.style, strokeWidth: a } })),
                                            children: (0, n.jsx)(s.E, {
                                                variant: "text-sm/medium",
                                                children: q.intl.string(i),
                                            }),
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    }),
                    t.data.style.strokeWidth !== H.UY.NONE &&
                        (0, n.jsxs)("div", {
                            className: eo.zo,
                            children: [
                                (0, n.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    children: q.intl.string(J.default.iQZQyA),
                                }),
                                (0, n.jsx)(er.default, {
                                    defaultColor: 0,
                                    colors: em,
                                    className: eo.Ei,
                                    colorContainerClassName: eo.oP,
                                    value: (0, ei.LX)(t.data.style.strokeColor),
                                    onChange: (e) =>
                                        l(t.id, (t) => ({ ...t, style: { ...t.style, strokeColor: (0, ei.Hl)(e) } })),
                                    allowBlackCustomColor: !0,
                                }),
                            ],
                        }),
                    (0, n.jsx)("div", {
                        className: eo.DT,
                        children: (0, n.jsx)(y.$, {
                            size: "md",
                            variant: "secondary",
                            icon: x.u,
                            iconPosition: "start",
                            fullWidth: !0,
                            text: q.intl.string(J.default.LYpz7y),
                            onClick: () => i(t.id),
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ef = l(696016);
let ex = _.I.difference(new Set([_.C.EXPORT_TO_SOUNDBOARD, _.C.FAVORITE, _.C.DELETE, _.C.SHARE, _.C.EDIT]));
function ev(e) {
    let { icon: t, label: l, count: a, enabled: i, disabled: u = !1, onToggle: d } = e;
    return (0, n.jsxs)("div", {
        className: et.l3,
        children: [
            (0, n.jsx)("div", { className: et.sW, children: t }),
            (0, n.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", className: et.RZ, children: l }),
            null != a &&
                a > 0 &&
                (0, n.jsx)("div", {
                    className: et.Mo,
                    children: (0, n.jsx)(s.E, { variant: "text-xs/medium", color: "text-muted", children: a }),
                }),
            (0, n.jsx)("div", {
                className: et.To,
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
    let { activeTool: t } = (0, G.T)(),
        { tracks: l, selectedTrackId: a } = (0, ec.j)(),
        i = l.find((e) => e.id === a);
    if (null != i)
        if (i.type === H.Me.TEXT) return (0, n.jsx)(eh, { track: i });
        else i.type;
    switch (t) {
        case B.Y.CROP:
            return (0, n.jsx)(en, {});
        case B.Y.NONE:
        default:
            return (0, n.jsx)(ej, { ...e });
    }
}
function ej(e) {
    let { channelId: t, onEdit: c, onClose: o } = e,
        {
            getEditedClip: _,
            voiceAudioEnabled: H,
            setVoiceAudioEnabled: F,
            applicationAudioEnabled: K,
            setApplicationAudioEnabled: V,
            soundboardAudioEnabled: X,
            setSoundboardAudioEnabled: Z,
            pause: W,
            isTemporary: Y,
            setIsTemporary: Q,
            clip: el,
            editOnly: en,
            setActiveTool: ei,
            audioTracks: es,
        } = (0, G.T)(),
        { addTextTrack: er, setSelectedTrackId: eo } = (0, ec.j)(),
        eu = el.type === O.nQ.SCREENSHOT,
        ed = el.type === O.nQ.VOICE_CLIP,
        em = (0, M.h)(el.applicationId),
        eh = (0, i.bG)([S.Ay], () => S.Ay.isClipExporting(el.id)),
        { onShareClick: ep } = (0, $.A)(t),
        ej = (0, i.bG)([D.A], () => D.A.isDeveloper),
        eg = a.useCallback(async () => {
            await (0, P.w7)(el.id), Q(!1);
        }, [el.id, Q]),
        eb = a.useMemo(() => es.filter((e) => e.trackName.includes(ef.gC.VOICE)).length, [es]),
        eC = a.useMemo(() => es.filter((e) => e.trackName.includes(ef.gC.SOUNDBOARD)).length, [es]),
        ey = em?.name ?? el.applicationName ?? q.intl.string(q.t.GnQui9);
    async function eN() {
        await (0, z.n)(_(), t);
    }
    return (0, n.jsxs)("div", {
        className: ee.XV,
        children: [
            (0, n.jsx)("div", {
                className: ee.eW,
                children: (0, n.jsxs)(d.e, {
                    wrap: !1,
                    size: "sm",
                    align: "center",
                    justify: "end",
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, n.jsx)(m.m, {
                            text: el.isFavorite ? q.intl.string(J.default.IZsalP) : q.intl.string(J.default.ihBfyA),
                            children: (0, n.jsx)(r.K, {
                                onClick: () => (0, P.XK)(el),
                                variant: "icon-only",
                                "aria-label": el.isFavorite
                                    ? q.intl.string(J.default.IZsalP)
                                    : q.intl.string(J.default.ihBfyA),
                                icon: el.isFavorite ? h.G : f.y,
                            }),
                        }),
                        (0, n.jsx)(m.m, {
                            text: q.intl.string(q.t.oyYWHE),
                            children: (0, n.jsx)(r.K, {
                                onClick: (e) => (0, U.A)(e, { clips: [el], onAfterDelete: o }),
                                variant: "icon-only",
                                "aria-label": q.intl.string(q.t.oyYWHE),
                                icon: x.u,
                            }),
                        }),
                        (0, n.jsx)(m.m, {
                            text: q.intl.string(q.t.PdRCRg),
                            children: (0, n.jsx)(r.K, {
                                onClick: function (e) {
                                    W(),
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
                                                l.e("18307"),
                                                l.e("86456"),
                                                l.e("20342"),
                                                l.e("80955"),
                                            ]).then(l.bind(l, 80982));
                                            return (l) =>
                                                (0, n.jsx)(e, {
                                                    ...l,
                                                    clips: [_()],
                                                    channelId: t,
                                                    onAfterDelete: o,
                                                    displayConfiguration: ex,
                                                });
                                        });
                                },
                                variant: "icon-only",
                                "aria-label": q.intl.string(q.t.PdRCRg),
                                icon: v.j,
                            }),
                        }),
                        ej &&
                            (0, n.jsx)(m.m, {
                                text: "Clip Debug",
                                children: (0, n.jsx)(r.K, {
                                    onClick: function () {
                                        (0, u.openModalLazy)(
                                            async () => {
                                                let { default: e } = await l.e("10000").then(l.bind(l, 224883));
                                                return (t) => (0, n.jsx)(e, { ...t, clip: el });
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
                            "aria-label": q.intl.string(q.t.cpT0Cq),
                        }),
                    ],
                }),
            }),
            (0, n.jsxs)(g.Ip, {
                className: ee.Md,
                children: [
                    Y &&
                        (0, n.jsx)("div", {
                            className: et.hL,
                            children: (0, n.jsx)(b.w, {
                                type: "warning",
                                children: (0, n.jsxs)(C.B, {
                                    gap: 8,
                                    children: [
                                        (0, n.jsx)(s.E, {
                                            variant: "text-sm/normal",
                                            children: q.intl.string(q.t.EkUv4u),
                                        }),
                                        (0, n.jsx)(y.$, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: eg,
                                            text: q.intl.string(q.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    (0, n.jsxs)("div", {
                        className: et.uW,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: q.intl.string(J.default.JrcRaE),
                            }),
                            (0, n.jsxs)("div", {
                                className: et.L0,
                                children: [
                                    "" !== el.thumbnail &&
                                        (0, n.jsx)("img", {
                                            className: et.Nf,
                                            src: el.thumbnail,
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                    (0, n.jsx)(ea.A, {
                                        variant: "text-sm/medium",
                                        className: et.FA,
                                        containerClassName: et.vt,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !eu &&
                        !ed &&
                        (0, n.jsxs)("div", {
                            className: et.uW,
                            children: [
                                (0, n.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    children: q.intl.string(J.default.FmXxW6),
                                }),
                                (0, n.jsx)(y.$, {
                                    variant: "secondary",
                                    icon: N.K,
                                    iconPosition: "start",
                                    fullWidth: !0,
                                    text: q.intl.string(J.default.RiEyiS),
                                    onClick: () => {
                                        eo(null), ei(B.Y.CROP);
                                    },
                                }),
                                (0, n.jsx)(y.$, {
                                    variant: "secondary",
                                    icon: E.x,
                                    iconPosition: "start",
                                    fullWidth: !0,
                                    text: q.intl.string(J.default.zSN9vp),
                                    onClick: er,
                                }),
                            ],
                        }),
                    !eu &&
                        (0, n.jsxs)("div", {
                            className: et.uW,
                            children: [
                                (0, n.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    children: q.intl.string(J.default.KRnA2D),
                                }),
                                (0, n.jsxs)("div", {
                                    className: et.VZ,
                                    children: [
                                        (0, n.jsx)(ev, {
                                            icon:
                                                null != em
                                                    ? (0, n.jsx)(I.A, { game: em, size: I.M.XXSMALL })
                                                    : (0, n.jsx)(k.L, { size: "sm", color: "currentColor" }),
                                            label: ey,
                                            enabled: K,
                                            onToggle: V,
                                        }),
                                        (0, n.jsx)(ev, {
                                            icon: (0, n.jsx)(w.c, { size: "sm", color: "currentColor" }),
                                            label: q.intl.string(J.default.ai9fWO),
                                            count: eb,
                                            enabled: H,
                                            disabled: 0 === eb,
                                            onToggle: F,
                                        }),
                                        (0, n.jsx)(ev, {
                                            icon: (0, n.jsx)(A.J, { size: "sm", color: "currentColor" }),
                                            label: q.intl.string(J.default["/VVQKJ"]),
                                            enabled: X,
                                            disabled: 0 === eC,
                                            onToggle: Z,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: ee.G3,
                children: (0, n.jsx)(d.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: en
                        ? (0, n.jsx)(y.$, {
                              loading: eh,
                              disabled: eh,
                              variant: "primary",
                              onClick: () =>
                                  ep({
                                      clips: [_()],
                                      onShareComplete: () => {
                                          c?.(), o();
                                      },
                                  }),
                              text: q.intl.string(q.t["R3BPH+"]),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(y.$, {
                                      loading: eh,
                                      disabled: eh,
                                      variant: "secondary",
                                      icon: L.p,
                                      iconPosition: "start",
                                      onClick: eN,
                                      text: q.intl.string(J.default.HH4Tjj),
                                  }),
                                  (0, n.jsx)(y.$, {
                                      loading: eh,
                                      disabled: eh,
                                      variant: "primary",
                                      icon: R.l,
                                      iconPosition: "start",
                                      onClick: () => ep({ clips: [_()] }),
                                      text: q.intl.string(q.t.RDE0Sc),
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
