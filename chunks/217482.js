l.d(t, { A: () => ex });
var n = l(477900),
    a = l(582128),
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
    N = l(342073),
    E = l(831544),
    w = l(7807),
    k = l(663341),
    A = l(405433),
    L = l(442433),
    R = l(793574),
    I = l(688810),
    T = l(429913),
    M = l(769015),
    S = l(540999),
    D = l(915725),
    O = l(539572),
    P = l(253799),
    _ = l(105009),
    z = l(645655),
    U = l(352527),
    $ = l(635793),
    B = l(362081),
    G = l(503698),
    H = l.n(G),
    V = l(31300),
    K = l(646270),
    F = l(748562),
    Z = l(477155),
    W = l(939249),
    X = l(417270),
    Y = l(696016),
    J = l(16590),
    Q = l(375708),
    q = l(954634),
    ee = l(363261);
let et = [
    { preset: Y.yz.ORIGINAL, icon: V.k, label: J.default.CujCES },
    { preset: Y.yz.PORTRAIT_9_16, icon: K.u, label: J.default["34PW6m"] },
    { preset: Y.yz.LANDSCAPE_16_9, icon: F.U, label: J.default.ywAdnD },
];
function el() {
    let { cropPreset: e, setCropPreset: t, setActiveTool: l } = (0, B.T)();
    return (0, n.jsxs)("div", {
        className: q.XV,
        children: [
            (0, n.jsx)("div", {
                className: ee.CD,
                children: (0, n.jsx)(b.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: Z.r,
                    iconPosition: "start",
                    text: Q.intl.string(J.default["7yBrfD"]),
                    onClick: () => l($.Y.NONE),
                }),
            }),
            (0, n.jsxs)(j.Ip, {
                className: ee.hX,
                children: [
                    (0, n.jsx)(s.E, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: Q.intl.string(J.default["1TOrU3"]),
                    }),
                    (0, n.jsxs)("div", {
                        className: ee.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: Q.intl.string(J.default.r15Wrn),
                            }),
                            (0, n.jsx)("div", {
                                className: ee.si,
                                children: et.map((l) => {
                                    let { preset: a, icon: i, label: r } = l,
                                        o = e === a;
                                    return (0, n.jsxs)(
                                        W.D,
                                        {
                                            "aria-pressed": o,
                                            className: H()(ee.is, o && ee.j5),
                                            onClick: () => t(a),
                                            children: [
                                                (0, n.jsx)(i, { size: "md" }),
                                                (0, n.jsx)(s.E, {
                                                    variant: "text-xs/medium",
                                                    children: Q.intl.string(r),
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
                children: (0, n.jsx)(b.$, {
                    fullWidth: !0,
                    variant: "secondary",
                    icon: X.RetryIcon,
                    iconPosition: "start",
                    text: Q.intl.string(J.default.XdZS9I),
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
    eo = l(143461);
let ec = [
        { value: 0.04, label: J.default.zYVcjp },
        { value: 0.06, label: J.default.LGX80j },
        { value: 0.09, label: J.default.sa6Q0q },
    ],
    eu = [
        { value: Y.UY.NONE, label: J.default["tYuPp+"] },
        { value: Y.UY.SMALL, label: J.default["42Skzz"] },
        { value: Y.UY.MEDIUM, label: J.default["Ujlm+F"] },
        { value: Y.UY.LARGE, label: J.default.lT4Cq2 },
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
                children: (0, n.jsx)(b.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: Z.r,
                    iconPosition: "start",
                    text: Q.intl.string(J.default["7yBrfD"]),
                    onClick: () => a(null),
                }),
            }),
            (0, n.jsxs)(j.Ip, {
                className: ee.hX,
                children: [
                    (0, n.jsx)("div", {
                        className: eo.r5,
                        children: (0, n.jsx)(s.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: Q.intl.string(J.default.GtvDbf),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: ee.Ln,
                        children: [
                            (0, n.jsx)(s.E, {
                                variant: "text-sm/semibold",
                                color: "text-subtle",
                                children: Q.intl.string(J.default["R/JN4b"]),
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
                                color: "text-subtle",
                                children: Q.intl.string(J.default["4eAE08"]),
                            }),
                            (0, n.jsx)("div", {
                                className: ee.si,
                                children: ec.map((e) => {
                                    let { value: a, label: i } = e,
                                        r = t.data.style.fontSize === a;
                                    return (0, n.jsx)(
                                        W.D,
                                        {
                                            "aria-pressed": r,
                                            className: H()(ee.is, r && ee.j5),
                                            onClick: () =>
                                                l(t.id, (e) => ({ ...e, style: { ...e.style, fontSize: a } })),
                                            children: (0, n.jsx)(s.E, {
                                                variant: "text-sm/medium",
                                                children: Q.intl.string(i),
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
                                color: "text-subtle",
                                children: Q.intl.string(J.default["9oleCI"]),
                            }),
                            (0, n.jsx)(es.default, {
                                defaultColor: 0xffffff,
                                colors: ed,
                                className: eo.Ei,
                                colorContainerClassName: eo.oP,
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
                                color: "text-subtle",
                                children: Q.intl.string(J.default.huZ6Mm),
                            }),
                            (0, n.jsx)("div", {
                                className: ee.si,
                                children: eu.map((e) => {
                                    let { value: a, label: i } = e,
                                        r = t.data.style.strokeWidth === a;
                                    return (0, n.jsx)(
                                        W.D,
                                        {
                                            "aria-pressed": r,
                                            className: H()(ee.is, r && ee.j5),
                                            onClick: () =>
                                                l(t.id, (e) => ({ ...e, style: { ...e.style, strokeWidth: a } })),
                                            children: (0, n.jsx)(s.E, {
                                                variant: "text-sm/medium",
                                                children: Q.intl.string(i),
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
                            className: eo.zo,
                            children: [
                                (0, n.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: Q.intl.string(J.default.iQZQyA),
                                }),
                                (0, n.jsx)(es.default, {
                                    defaultColor: 0,
                                    colors: ed,
                                    className: eo.Ei,
                                    colorContainerClassName: eo.oP,
                                    value: (0, ea.LX)(t.data.style.strokeColor),
                                    onChange: (e) =>
                                        l(t.id, (t) => ({ ...t, style: { ...t.style, strokeColor: (0, ea.Hl)(e) } })),
                                    allowBlackCustomColor: !0,
                                }),
                            ],
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                className: q.G3,
                children: (0, n.jsx)(b.$, {
                    size: "md",
                    variant: "secondary",
                    icon: x.TrashIcon,
                    iconPosition: "start",
                    fullWidth: !0,
                    text: Q.intl.string(J.default.LYpz7y),
                    onClick: () => i(t.id),
                }),
            }),
        ],
    });
}
let eh = P.I.difference(new Set([P.C.EXPORT_TO_SOUNDBOARD, P.C.FAVORITE, P.C.DELETE, P.C.SHARE, P.C.EDIT]));
function ef(e) {
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
                    icon: i ? o.H : c._,
                    onClick: () => d(!i),
                    "aria-label": l,
                    "aria-pressed": i,
                }),
            }),
        ],
    });
}
function ex(e) {
    let { activeTool: t } = (0, B.T)(),
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
    let { channelId: t, onEdit: o, onClose: c } = e,
        {
            getEditedClip: P,
            voiceAudioEnabled: G,
            setVoiceAudioEnabled: H,
            applicationAudioEnabled: V,
            setApplicationAudioEnabled: K,
            soundboardAudioEnabled: F,
            setSoundboardAudioEnabled: Z,
            pause: W,
            clip: X,
            editOnly: et,
            setActiveTool: el,
            audioTracks: ea,
        } = (0, B.T)(),
        { analyticsLocations: ei } = (0, I.Ay)(R.A.CLIPS_EDITOR),
        { addTextTrack: es, setSelectedTrackId: eo } = (0, er.fn)(),
        { isCropEnabled: ec, isTextTrackEnabled: eu } = (0, er.As)(),
        ed = X.type === Y.nQ.SCREENSHOT,
        em = X.type === Y.nQ.VOICE_CLIP,
        ex = (0, T.h)(X.applicationId),
        ev = (0, i.bG)([D.Ay], () => D.Ay.isClipExporting(X.id)),
        { onShareClick: ep } = (0, U.A)(t),
        eg = (0, i.bG)([S.A], () => S.A.isDeveloper),
        ej = a.useMemo(() => ea.filter((e) => e.trackName.includes(Y.gC.VOICE)).length, [ea]),
        eb = a.useMemo(() => ea.filter((e) => e.trackName.includes(Y.gC.SOUNDBOARD)).length, [ea]),
        eC = ex?.name ?? X.applicationName ?? Q.intl.string(Q.t.GnQui9);
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
                            text: X.isFavorite ? Q.intl.string(J.default.IZsalP) : Q.intl.string(J.default.ihBfyA),
                            children: (0, n.jsx)(r.K, {
                                onClick: () => (0, O.XK)(X),
                                variant: "icon-only",
                                "aria-label": X.isFavorite
                                    ? Q.intl.string(J.default.IZsalP)
                                    : Q.intl.string(J.default.ihBfyA),
                                icon: X.isFavorite ? h.StarIcon : f.y,
                            }),
                        }),
                        (0, n.jsx)(m.m, {
                            text: Q.intl.string(Q.t.oyYWHE),
                            children: (0, n.jsx)(r.K, {
                                onClick: (e) => (0, z.A)(e, { clips: [X], onAfterDelete: c }),
                                variant: "icon-only",
                                "aria-label": Q.intl.string(Q.t.oyYWHE),
                                icon: x.TrashIcon,
                            }),
                        }),
                        (0, n.jsx)(m.m, {
                            text: Q.intl.string(Q.t.PdRCRg),
                            children: (0, n.jsx)(r.K, {
                                onClick: function (e) {
                                    W(),
                                        (0, L.L3)(e, async () => {
                                            let { default: e } = await Promise.all([
                                                l.e("316123"),
                                                l.e("221107"),
                                                l.e("190914"),
                                                l.e("595429"),
                                                l.e("311930"),
                                                l.e("320891"),
                                                l.e("531279"),
                                                l.e("371863"),
                                                l.e("338601"),
                                                l.e("218489"),
                                                l.e("669006"),
                                                l.e("440688"),
                                                l.e("886456"),
                                                l.e("520342"),
                                                l.e("869370"),
                                            ]).then(l.bind(l, 621953));
                                            return (l) =>
                                                (0, n.jsx)(e, {
                                                    ...l,
                                                    clips: [P()],
                                                    analyticsLocations: ei,
                                                    channelId: t,
                                                    onAfterDelete: c,
                                                    displayConfiguration: eh,
                                                });
                                        });
                                },
                                variant: "icon-only",
                                "aria-label": Q.intl.string(Q.t.PdRCRg),
                                icon: v.MoreHorizontalIcon,
                            }),
                        }),
                        eg &&
                            (0, n.jsx)(m.m, {
                                text: "Clip Debug",
                                children: (0, n.jsx)(r.K, {
                                    onClick: function () {
                                        (0, u.openModalLazy)(
                                            async () => {
                                                let { default: e } = await l.e("310000").then(l.bind(l, 224883));
                                                return (t) => (0, n.jsx)(e, { ...t, clip: X });
                                            },
                                            { stackingBehavior: "stack" },
                                        );
                                    },
                                    icon: p.BugIcon,
                                    variant: "icon-only",
                                    "aria-label": "Clip Debug",
                                }),
                            }),
                        (0, n.jsx)(r.K, {
                            onClick: c,
                            icon: g.XLargeIcon,
                            variant: "icon-only",
                            "aria-label": Q.intl.string(Q.t.cpT0Cq),
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
                                color: "text-subtle",
                                children: Q.intl.string(J.default.JrcRaE),
                            }),
                            (0, n.jsxs)("div", {
                                className: ee.L0,
                                children: [
                                    "" !== X.thumbnail &&
                                        (0, n.jsx)("img", {
                                            className: ee.Nf,
                                            src: X.thumbnail,
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
                        (ec || eu) &&
                        (0, n.jsxs)("div", {
                            className: ee.uW,
                            children: [
                                (0, n.jsx)(s.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-subtle",
                                    children: Q.intl.string(J.default.FmXxW6),
                                }),
                                ec &&
                                    (0, n.jsx)(b.$, {
                                        variant: "secondary",
                                        icon: C.K,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: Q.intl.string(J.default.RiEyiS),
                                        onClick: () => {
                                            eo(null), el($.Y.CROP);
                                        },
                                    }),
                                eu &&
                                    (0, n.jsx)(b.$, {
                                        variant: "secondary",
                                        icon: y.x,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: Q.intl.string(J.default.zSN9vp),
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
                                    color: "text-subtle",
                                    children: Q.intl.string(J.default.KRnA2D),
                                }),
                                (0, n.jsxs)("div", {
                                    className: ee.VZ,
                                    children: [
                                        (0, n.jsx)(ef, {
                                            icon:
                                                null != ex
                                                    ? (0, n.jsx)(M.A, { game: ex, size: M.M.XXSMALL })
                                                    : (0, n.jsx)(N.L, { size: "sm", color: "currentColor" }),
                                            label: eC,
                                            enabled: V,
                                            onToggle: K,
                                        }),
                                        (0, n.jsx)(ef, {
                                            icon: (0, n.jsx)(E.MicrophoneIcon, { size: "sm", color: "currentColor" }),
                                            label: Q.intl.string(J.default.ai9fWO),
                                            count: ej,
                                            enabled: G,
                                            disabled: 0 === ej,
                                            onToggle: H,
                                        }),
                                        (0, n.jsx)(ef, {
                                            icon: (0, n.jsx)(w.J, { size: "sm", color: "currentColor" }),
                                            label: Q.intl.string(J.default["/VVQKJ"]),
                                            enabled: F,
                                            disabled: 0 === eb,
                                            onToggle: Z,
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
                        ? (0, n.jsx)(b.$, {
                              loading: ev,
                              disabled: ev,
                              variant: "primary",
                              onClick: () =>
                                  ep({
                                      clips: [P()],
                                      onShareComplete: () => {
                                          o?.(), c();
                                      },
                                  }),
                              text: Q.intl.string(Q.t["R3BPH+"]),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(b.$, {
                                      loading: ev,
                                      disabled: ev,
                                      variant: "secondary",
                                      icon: k.PlusLargeIcon,
                                      iconPosition: "start",
                                      onClick: ey,
                                      text: Q.intl.string(J.default.HH4Tjj),
                                  }),
                                  (0, n.jsx)(b.$, {
                                      loading: ev,
                                      disabled: ev,
                                      variant: "primary",
                                      icon: A.ShareIcon,
                                      iconPosition: "start",
                                      onClick: () => ep({ clips: [P()] }),
                                      text: Q.intl.string(Q.t.RDE0Sc),
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
