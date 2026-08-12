l.d(t, { A: () => ex });
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
    C = l(821609),
    b = l(428610),
    y = l(48507),
    N = l(342073),
    E = l(831544),
    k = l(7807),
    w = l(663341),
    A = l(405433),
    R = l(442433),
    L = l(793574),
    T = l(688810),
    I = l(429913),
    M = l(769015),
    D = l(540999),
    S = l(915725),
    O = l(539572),
    P = l(253799),
    _ = l(105009),
    z = l(645655),
    U = l(352527),
    $ = l(635793),
    G = l(362081),
    B = l(503698),
    H = l.n(B),
    V = l(31300),
    K = l(646270),
    F = l(748562),
    W = l(477155),
    X = l(939249),
    Z = l(417270),
    Y = l(696016),
    Q = l(16590),
    J = l(375708),
    q = l(954634),
    ee = l(363261);
let et = [
    { preset: Y.yz.ORIGINAL, icon: V.k, label: Q.default.CujCES },
    { preset: Y.yz.PORTRAIT_9_16, icon: K.u, label: Q.default["34PW6m"] },
    { preset: Y.yz.LANDSCAPE_16_9, icon: F.U, label: Q.default.ywAdnD },
];
function el() {
    let { cropPreset: e, setCropPreset: t, setActiveTool: l } = (0, G.T)();
    return (0, n.jsxs)("div", {
        className: q.XV,
        children: [
            (0, n.jsx)("div", {
                className: ee.CD,
                children: (0, n.jsx)(C.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: W.r,
                    iconPosition: "start",
                    text: J.intl.string(Q.default["7yBrfD"]),
                    onClick: () => l($.Y.NONE),
                }),
            }),
            (0, n.jsxs)(j.Ip, {
                className: ee.hX,
                children: [
                    (0, n.jsx)(s.E, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: J.intl.string(Q.default["1TOrU3"]),
                    }),
                    (0, n.jsxs)("div", {
                        className: ee.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: J.intl.string(Q.default.r15Wrn),
                            }),
                            (0, n.jsx)("div", {
                                className: ee.si,
                                children: et.map((l) => {
                                    let { preset: a, icon: i, label: r } = l,
                                        c = e === a;
                                    return (0, n.jsxs)(
                                        X.D,
                                        {
                                            "aria-pressed": c,
                                            className: H()(ee.is, c && ee.j5),
                                            onClick: () => t(a),
                                            children: [
                                                (0, n.jsx)(i, { size: "md" }),
                                                (0, n.jsx)(s.E, {
                                                    variant: "text-sm/medium",
                                                    children: J.intl.string(r),
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
                className: q.G3,
                children: (0, n.jsx)(C.$, {
                    fullWidth: !0,
                    variant: "secondary",
                    icon: Z.m,
                    iconPosition: "start",
                    text: J.intl.string(Q.default.XdZS9I),
                    onClick: () => t(Y.yz.ORIGINAL),
                }),
            }),
        ],
    });
}
var en = l(818433),
    ea = l(317097),
    ei = l(95477),
    es = l(48736),
    er = l(801835),
    ec = l(143461);
let eo = [
        { value: 0.04, label: Q.default.zYVcjp },
        { value: 0.06, label: Q.default.LGX80j },
        { value: 0.09, label: Q.default.sa6Q0q },
    ],
    eu = [
        { value: Y.UY.NONE, label: Q.default["tYuPp+"] },
        { value: Y.UY.SMALL, label: Q.default["42Skzz"] },
        { value: Y.UY.MEDIUM, label: Q.default["Ujlm+F"] },
        { value: Y.UY.LARGE, label: Q.default.lT4Cq2 },
    ],
    ed = [0xfe6e0d, 0xffe047, 3534206, 5793266, 0xff4cd2];
function em(e) {
    let { track: t } = e,
        { updateTextTrackData: l, setSelectedTrackId: a, removeTrack: i } = (0, er.fn)();
    return (0, n.jsxs)("div", {
        className: q.XV,
        children: [
            (0, n.jsx)("div", {
                className: ee.CD,
                children: (0, n.jsx)(C.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: W.r,
                    iconPosition: "start",
                    text: J.intl.string(Q.default["7yBrfD"]),
                    onClick: () => a(null),
                }),
            }),
            (0, n.jsxs)(j.Ip, {
                className: ee.hX,
                children: [
                    (0, n.jsx)("div", {
                        className: ec.r5,
                        children: (0, n.jsx)(s.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: J.intl.string(Q.default.GtvDbf),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: ee.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: J.intl.string(Q.default["R/JN4b"]),
                            }),
                            (0, n.jsx)(ei.k, {
                                value: t.data.text,
                                onChange: (e) => l(t.id, (t) => ({ ...t, text: e })),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: ee.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: J.intl.string(Q.default["4eAE08"]),
                            }),
                            (0, n.jsx)("div", {
                                className: ee.si,
                                children: eo.map((e) => {
                                    let { value: a, label: i } = e,
                                        r = t.data.style.fontSize === a;
                                    return (0, n.jsx)(
                                        X.D,
                                        {
                                            "aria-pressed": r,
                                            className: H()(ee.is, r && ee.j5),
                                            onClick: () =>
                                                l(t.id, (e) => ({ ...e, style: { ...e.style, fontSize: a } })),
                                            children: (0, n.jsx)(s.E, {
                                                variant: "text-sm/medium",
                                                children: J.intl.string(i),
                                            }),
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: ec.zo,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: J.intl.string(Q.default["9oleCI"]),
                            }),
                            (0, n.jsx)(es.default, {
                                defaultColor: 0xffffff,
                                colors: ed,
                                className: ec.Ei,
                                colorContainerClassName: ec.oP,
                                value: (0, ea.LX)(t.data.style.color),
                                onChange: (e) =>
                                    l(t.id, (t) => ({ ...t, style: { ...t.style, color: (0, ea.Hl)(e) } })),
                                allowBlackCustomColor: !0,
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: ee.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: J.intl.string(Q.default.huZ6Mm),
                            }),
                            (0, n.jsx)("div", {
                                className: ee.si,
                                children: eu.map((e) => {
                                    let { value: a, label: i } = e,
                                        r = t.data.style.strokeWidth === a;
                                    return (0, n.jsx)(
                                        X.D,
                                        {
                                            "aria-pressed": r,
                                            className: H()(ee.is, r && ee.j5),
                                            onClick: () =>
                                                l(t.id, (e) => ({ ...e, style: { ...e.style, strokeWidth: a } })),
                                            children: (0, n.jsx)(s.E, {
                                                variant: "text-sm/medium",
                                                children: J.intl.string(i),
                                            }),
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    }),
                    t.data.style.strokeWidth !== Y.UY.NONE &&
                        (0, n.jsxs)("div", {
                            className: ec.zo,
                            children: [
                                (0, n.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    children: J.intl.string(Q.default.iQZQyA),
                                }),
                                (0, n.jsx)(es.default, {
                                    defaultColor: 0,
                                    colors: ed,
                                    className: ec.Ei,
                                    colorContainerClassName: ec.oP,
                                    value: (0, ea.LX)(t.data.style.strokeColor),
                                    onChange: (e) =>
                                        l(t.id, (t) => ({ ...t, style: { ...t.style, strokeColor: (0, ea.Hl)(e) } })),
                                    allowBlackCustomColor: !0,
                                }),
                            ],
                        }),
                    (0, n.jsx)("div", {
                        className: ec.DT,
                        children: (0, n.jsx)(C.$, {
                            size: "md",
                            variant: "secondary",
                            icon: x.u,
                            iconPosition: "start",
                            fullWidth: !0,
                            text: J.intl.string(Q.default.LYpz7y),
                            onClick: () => i(t.id),
                        }),
                    }),
                ],
            }),
        ],
    });
}
let ef = P.I.difference(new Set([P.C.EXPORT_TO_SOUNDBOARD, P.C.FAVORITE, P.C.DELETE, P.C.SHARE, P.C.EDIT]));
function eh(e) {
    let { icon: t, label: l, count: a, enabled: i, disabled: u = !1, onToggle: d } = e;
    return (0, n.jsxs)("div", {
        className: ee.l3,
        children: [
            (0, n.jsx)("div", { className: ee.sW, children: t }),
            (0, n.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", className: ee.RZ, children: l }),
            null != a &&
                a > 0 &&
                (0, n.jsx)("div", {
                    className: ee.Mo,
                    children: (0, n.jsx)(s.E, { variant: "text-xs/medium", color: "text-muted", children: a }),
                }),
            (0, n.jsx)("div", {
                className: ee.To,
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
function ex(e) {
    let { activeTool: t } = (0, G.T)(),
        { tracks: l, selectedTrackId: a } = (0, er.fn)(),
        i = l.find((e) => e.id === a);
    if (null != i)
        if (i.type === Y.Me.TEXT) return (0, n.jsx)(em, { track: i });
        else i.type;
    switch (t) {
        case $.Y.CROP:
            return (0, n.jsx)(el, {});
        case $.Y.NONE:
        default:
            return (0, n.jsx)(ev, { ...e });
    }
}
function ev(e) {
    let { channelId: t, onEdit: c, onClose: o } = e,
        {
            getEditedClip: P,
            voiceAudioEnabled: B,
            setVoiceAudioEnabled: H,
            applicationAudioEnabled: V,
            setApplicationAudioEnabled: K,
            soundboardAudioEnabled: F,
            setSoundboardAudioEnabled: W,
            pause: X,
            clip: Z,
            editOnly: et,
            setActiveTool: el,
            audioTracks: ea,
        } = (0, G.T)(),
        { analyticsLocations: ei } = (0, T.Ay)(L.A.CLIPS_EDITOR),
        { addTextTrack: es, setSelectedTrackId: ec } = (0, er.fn)(),
        { isCropEnabled: eo, isTextTrackEnabled: eu } = (0, er.As)(),
        ed = Z.type === Y.nQ.SCREENSHOT,
        em = Z.type === Y.nQ.VOICE_CLIP,
        ex = (0, I.h)(Z.applicationId),
        ev = (0, i.bG)([S.Ay], () => S.Ay.isClipExporting(Z.id)),
        { onShareClick: ep } = (0, U.A)(t),
        eg = (0, i.bG)([D.A], () => D.A.isDeveloper),
        ej = a.useMemo(() => ea.filter((e) => e.trackName.includes(Y.gC.VOICE)).length, [ea]),
        eC = a.useMemo(() => ea.filter((e) => e.trackName.includes(Y.gC.SOUNDBOARD)).length, [ea]),
        eb = ex?.name ?? Z.applicationName ?? J.intl.string(J.t.GnQui9);
    async function ey() {
        await (0, _.n)(P(), { channelId: t, analyticsLocations: ei });
    }
    return (0, n.jsxs)("div", {
        className: q.XV,
        children: [
            (0, n.jsx)("div", {
                className: q.eW,
                children: (0, n.jsxs)(d.e, {
                    wrap: !1,
                    size: "sm",
                    align: "center",
                    justify: "end",
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, n.jsx)(m.m, {
                            text: Z.isFavorite ? J.intl.string(Q.default.IZsalP) : J.intl.string(Q.default.ihBfyA),
                            children: (0, n.jsx)(r.K, {
                                onClick: () => (0, O.XK)(Z),
                                variant: "icon-only",
                                "aria-label": Z.isFavorite
                                    ? J.intl.string(Q.default.IZsalP)
                                    : J.intl.string(Q.default.ihBfyA),
                                icon: Z.isFavorite ? f.G : h.y,
                            }),
                        }),
                        (0, n.jsx)(m.m, {
                            text: J.intl.string(J.t.oyYWHE),
                            children: (0, n.jsx)(r.K, {
                                onClick: (e) => (0, z.A)(e, { clips: [Z], onAfterDelete: o }),
                                variant: "icon-only",
                                "aria-label": J.intl.string(J.t.oyYWHE),
                                icon: x.u,
                            }),
                        }),
                        (0, n.jsx)(m.m, {
                            text: J.intl.string(J.t.PdRCRg),
                            children: (0, n.jsx)(r.K, {
                                onClick: function (e) {
                                    X(),
                                        (0, R.L3)(e, async () => {
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
                                                l.e("69370"),
                                            ]).then(l.bind(l, 621953));
                                            return (l) =>
                                                (0, n.jsx)(e, {
                                                    ...l,
                                                    clips: [P()],
                                                    analyticsLocations: ei,
                                                    channelId: t,
                                                    onAfterDelete: o,
                                                    displayConfiguration: ef,
                                                });
                                        });
                                },
                                variant: "icon-only",
                                "aria-label": J.intl.string(J.t.PdRCRg),
                                icon: v.j,
                            }),
                        }),
                        eg &&
                            (0, n.jsx)(m.m, {
                                text: "Clip Debug",
                                children: (0, n.jsx)(r.K, {
                                    onClick: function () {
                                        (0, u.openModalLazy)(
                                            async () => {
                                                let { default: e } = await l.e("10000").then(l.bind(l, 224883));
                                                return (t) => (0, n.jsx)(e, { ...t, clip: Z });
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
                            "aria-label": J.intl.string(J.t.cpT0Cq),
                        }),
                    ],
                }),
            }),
            (0, n.jsxs)(j.Ip, {
                className: q.Md,
                children: [
                    (0, n.jsxs)("div", {
                        className: ee.uW,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                children: J.intl.string(Q.default.JrcRaE),
                            }),
                            (0, n.jsxs)("div", {
                                className: ee.L0,
                                children: [
                                    "" !== Z.thumbnail &&
                                        (0, n.jsx)("img", {
                                            className: ee.Nf,
                                            src: Z.thumbnail,
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                    (0, n.jsx)(en.A, {
                                        variant: "text-sm/medium",
                                        className: ee.FA,
                                        containerClassName: ee.vt,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !ed &&
                        !em &&
                        (eo || eu) &&
                        (0, n.jsxs)("div", {
                            className: ee.uW,
                            children: [
                                (0, n.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    children: J.intl.string(Q.default.FmXxW6),
                                }),
                                eo &&
                                    (0, n.jsx)(C.$, {
                                        variant: "secondary",
                                        icon: b.K,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: J.intl.string(Q.default.RiEyiS),
                                        onClick: () => {
                                            ec(null), el($.Y.CROP);
                                        },
                                    }),
                                eu &&
                                    (0, n.jsx)(C.$, {
                                        variant: "secondary",
                                        icon: y.x,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: J.intl.string(Q.default.zSN9vp),
                                        onClick: es,
                                    }),
                            ],
                        }),
                    !ed &&
                        (0, n.jsxs)("div", {
                            className: ee.uW,
                            children: [
                                (0, n.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-muted",
                                    children: J.intl.string(Q.default.KRnA2D),
                                }),
                                (0, n.jsxs)("div", {
                                    className: ee.VZ,
                                    children: [
                                        (0, n.jsx)(eh, {
                                            icon:
                                                null != ex
                                                    ? (0, n.jsx)(M.A, { game: ex, size: M.M.XXSMALL })
                                                    : (0, n.jsx)(N.L, { size: "sm", color: "currentColor" }),
                                            label: eb,
                                            enabled: V,
                                            onToggle: K,
                                        }),
                                        (0, n.jsx)(eh, {
                                            icon: (0, n.jsx)(E.c, { size: "sm", color: "currentColor" }),
                                            label: J.intl.string(Q.default.ai9fWO),
                                            count: ej,
                                            enabled: B,
                                            disabled: 0 === ej,
                                            onToggle: H,
                                        }),
                                        (0, n.jsx)(eh, {
                                            icon: (0, n.jsx)(k.J, { size: "sm", color: "currentColor" }),
                                            label: J.intl.string(Q.default["/VVQKJ"]),
                                            enabled: F,
                                            disabled: 0 === eC,
                                            onToggle: W,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: q.G3,
                children: (0, n.jsx)(d.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: et
                        ? (0, n.jsx)(C.$, {
                              loading: ev,
                              disabled: ev,
                              variant: "primary",
                              onClick: () =>
                                  ep({
                                      clips: [P()],
                                      onShareComplete: () => {
                                          c?.(), o();
                                      },
                                  }),
                              text: J.intl.string(J.t["R3BPH+"]),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(C.$, {
                                      loading: ev,
                                      disabled: ev,
                                      variant: "secondary",
                                      icon: w.p,
                                      iconPosition: "start",
                                      onClick: ey,
                                      text: J.intl.string(Q.default.HH4Tjj),
                                  }),
                                  (0, n.jsx)(C.$, {
                                      loading: ev,
                                      disabled: ev,
                                      variant: "primary",
                                      icon: A.l,
                                      iconPosition: "start",
                                      onClick: () => ep({ clips: [P()] }),
                                      text: J.intl.string(J.t.RDE0Sc),
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
