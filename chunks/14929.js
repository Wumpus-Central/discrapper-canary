l.d(t, { A: () => eP });
var n = l(477900),
    a = l(582128),
    i = l(855986),
    r = l(192308),
    s = l(825484),
    o = l(866665),
    c = l(408278),
    u = l(27232),
    d = l(505930),
    m = l(241326),
    f = l(365199),
    h = l(92446),
    p = l(972213),
    v = l(95362),
    x = l(834730),
    g = l(821609),
    b = l(428610),
    j = l(48507),
    y = l(750943),
    C = l(342073),
    k = l(831544),
    N = l(7807),
    E = l(663341),
    w = l(442433),
    A = l(793574),
    I = l(688810),
    R = l(429913),
    S = l(769015),
    L = l(540999),
    T = l(419490),
    M = l(489496),
    D = l(253799),
    O = l(721610),
    P = l(686320),
    _ = l(105009),
    z = l(645655),
    $ = l(352527),
    U = l(635793),
    G = l(923904),
    V = l(876798),
    B = l(358618),
    X = l(983851),
    H = l(893007),
    F = l(265872),
    W = l(305866),
    K = l(683825),
    Y = l(792996),
    Z = l(367454);
function Q(e) {
    let { label: t, enabled: l, disabled: a = !1, onToggle: i } = e;
    return (0, n.jsx)(V.k, {
        size: "sm",
        variant: "icon-only",
        disabled: a,
        icon: B.VoiceXIcon,
        selectedIcon: X.VoiceNormalIcon,
        pressed: l,
        onClick: () => i(!l),
        "aria-label": t,
    });
}
function q(e) {
    let { volume: t, label: l, disabled: i, onCommit: r } = e,
        [s, o] = a.useState(null),
        c = a.useRef(null);
    return (
        null != s && (s.source !== t || i) && o(null),
        a.useLayoutEffect(() => {
            c.current = null;
        }, [t, i]),
        (0, n.jsx)(H.A, {
            "aria-label": l,
            value: s?.source === t ? s.value : t,
            minValue: 0,
            maxValue: 200,
            defaultMark: 100,
            disabled: i,
            formatValue: (e) => `${e}%`,
            onChange: (e) => {
                ((c.current = { source: t, value: e }), o(c.current));
            },
            onChangeEnd: (e) => {
                let l = c.current;
                ((c.current = null), o(null), i || l?.source !== t || r(e));
            },
        })
    );
}
function J(e) {
    let { label: t, volume: l, disabled: i, muted: r = !1, title: s, onCommit: o, children: c } = e,
        u = a.useRef(null);
    return (0, n.jsx)(F.Y, {
        targetElementRef: u,
        position: "top",
        align: "center",
        renderPopout: (e) => {
            let { setPopoutRef: a } = e;
            return (0, n.jsx)(W.l, {
                ref: a,
                className: Z.Gl,
                "aria-label": t,
                children: (0, n.jsx)(q, { label: t, volume: l, disabled: i, onCommit: o }),
            });
        },
        children: (e) =>
            (0, n.jsx)("button", {
                ...e,
                ref: u,
                type: "button",
                className: Z.zN,
                disabled: i,
                "data-muted": r,
                title: s,
                "aria-haspopup": "dialog",
                "aria-label": t,
                children: c,
            }),
    });
}
function ee(e) {
    let { icon: t, label: l, count: a, enabled: i, disabled: r = !1, onToggle: s, countToggle: o, volume: c } = e,
        u = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("div", { className: Z.sW, children: t }),
                (0, n.jsx)(x.E, { variant: "body-sm/normal", color: "text-default", className: Z.RZ, children: l }),
            ],
        });
    return (0, n.jsxs)("div", {
        className: Z.l3,
        children: [
            null != c
                ? (0, n.jsx)(J, {
                      label: Y.intl.formatToPlainString(K.default.lBmQau, { name: l }),
                      volume: c.value,
                      disabled: r || !i,
                      onCommit: c.onCommit,
                      children: u,
                  })
                : u,
            null != a &&
                a > 0 &&
                (null != o
                    ? (0, n.jsx)("button", {
                          type: "button",
                          className: `${Z.Mo} ${Z.KH}`,
                          disabled: o.disabled,
                          "aria-label": o.label,
                          "aria-controls": o.disabled ? void 0 : o.controlsId,
                          "aria-expanded": !o.disabled && o.expanded,
                          onClick: o.onClick,
                          children: (0, n.jsx)(x.E, { variant: "body-xs/medium", color: "text-muted", children: a }),
                      })
                    : (0, n.jsx)("div", {
                          className: Z.Mo,
                          children: (0, n.jsx)(x.E, { variant: "body-xs/medium", color: "text-muted", children: a }),
                      })),
            (0, n.jsx)("div", {
                className: Z.To,
                children: (0, n.jsx)(Q, { label: l, enabled: i, disabled: r, onToggle: s }),
            }),
        ],
    });
}
var et = l(503698),
    el = l.n(et),
    en = l(31300),
    ea = l(646270),
    ei = l(748562),
    er = l(477155),
    es = l(939249),
    eo = l(417270),
    ec = l(696016),
    eu = l(301187);
let ed = [
    { preset: ec.yz.ORIGINAL, icon: en.ScreenIcon, label: K.default.CujCES },
    { preset: ec.yz.PORTRAIT_9_16, icon: ea.MobilePhoneIcon, label: K.default["34PW6m"] },
    { preset: ec.yz.LANDSCAPE_16_9, icon: ei.TvIcon, label: K.default.ywAdnD },
];
function em() {
    let { cropPreset: e, setCropPreset: t, setActiveTool: l } = (0, G.T)();
    return (0, n.jsxs)("div", {
        className: eu.XV,
        children: [
            (0, n.jsx)("div", {
                className: Z.CD,
                children: (0, n.jsx)(g.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: er.ArrowSmallLeftIcon,
                    iconPosition: "start",
                    text: Y.intl.string(K.default["7yBrfD"]),
                    onClick: () => l(U.Y.NONE),
                }),
            }),
            (0, n.jsxs)(v.Ip, {
                className: Z.hX,
                children: [
                    (0, n.jsx)(x.E, {
                        variant: "body-md/semibold",
                        color: "text-default",
                        children: Y.intl.string(K.default["1TOrU3"]),
                    }),
                    (0, n.jsxs)("div", {
                        className: Z.Ln,
                        children: [
                            (0, n.jsx)(x.E, {
                                variant: "body-sm/semibold",
                                color: "text-subtle",
                                children: Y.intl.string(K.default.r15Wrn),
                            }),
                            (0, n.jsx)("div", {
                                className: Z.si,
                                children: ed.map((l) => {
                                    let { preset: a, icon: i, label: r } = l,
                                        s = e === a;
                                    return (0, n.jsxs)(
                                        es.D,
                                        {
                                            "aria-pressed": s,
                                            className: el()(Z.is, s && Z.j5),
                                            onClick: () => t(a),
                                            children: [
                                                (0, n.jsx)(i, { size: "md" }),
                                                (0, n.jsx)(x.E, {
                                                    variant: "body-xs/medium",
                                                    children: Y.intl.string(r),
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
            (0, n.jsx)(v.Ip, {
                className: eu.G3,
                children: (0, n.jsx)(g.$, {
                    fullWidth: !0,
                    variant: "secondary",
                    icon: eo.RetryIcon,
                    iconPosition: "start",
                    text: Y.intl.string(K.default.XdZS9I),
                    onClick: () => t(ec.yz.ORIGINAL),
                }),
            }),
        ],
    });
}
var ef = l(818433),
    eh = l(317097),
    ep = l(48736),
    ev = l(1093),
    ex = l(393688),
    eg = l(839578);
let eb = [
        { value: ec.Hz.NONE, label: K.default.IqUUKg },
        { value: ec.Hz.SMALL, label: K.default.VearyN },
        { value: ec.Hz.MEDIUM, label: K.default.AJsDsD },
        { value: ec.Hz.LARGE, label: K.default.k5w7Jy },
    ],
    ej = [0, 0xffffff, 0xfe6e0d, 5793266, 0xff4cd2];
function ey(e) {
    let { track: t } = e,
        { updateImageTrackData: l, pickAndReplaceImage: a, setSelectedTrackId: i, removeTrack: r } = (0, ev.fn)(),
        s = t.data.shadow ?? "none",
        o = t.data.shadowColor ?? ec.pk;
    return (0, n.jsxs)("div", {
        className: eu.XV,
        children: [
            (0, n.jsx)("div", {
                className: Z.CD,
                children: (0, n.jsx)(g.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: er.ArrowSmallLeftIcon,
                    iconPosition: "start",
                    text: Y.intl.string(K.default["7yBrfD"]),
                    onClick: () => i(null),
                }),
            }),
            (0, n.jsxs)(v.Ip, {
                className: Z.hX,
                children: [
                    (0, n.jsx)("div", {
                        className: eg.r5,
                        children: (0, n.jsx)(x.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: Y.intl.string(K.default.S0ODmT),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: Z.Ln,
                        children: [
                            (0, n.jsxs)("div", {
                                className: Z.L0,
                                children: [
                                    (0, n.jsx)("img", { className: ex.Z, src: t.data.src, alt: "", "aria-hidden": !0 }),
                                    (0, n.jsx)(x.E, {
                                        variant: "body-sm/medium",
                                        color: "text-default",
                                        className: Z.FA,
                                        children: t.data.fileName,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(g.$, {
                                variant: "secondary",
                                icon: y.ImagePlusIcon,
                                iconPosition: "start",
                                fullWidth: !0,
                                text: Y.intl.string(K.default.wR5R9w),
                                onClick: () => a(t.id),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: Z.Ln,
                        children: [
                            (0, n.jsx)(x.E, {
                                variant: "body-sm/semibold",
                                color: "text-subtle",
                                children: Y.intl.string(K.default["/v2zZ+"]),
                            }),
                            (0, n.jsx)("div", {
                                className: ex.p,
                                children: eb.map((e) => {
                                    let { value: a, label: i } = e,
                                        r = s === a;
                                    return (0, n.jsx)(
                                        es.D,
                                        {
                                            "aria-pressed": r,
                                            className: el()(Z.is, r && Z.j5),
                                            onClick: () => l(t.id, (e) => ({ ...e, shadow: a })),
                                            children: (0, n.jsx)(x.E, {
                                                variant: "body-sm/medium",
                                                children: Y.intl.string(i),
                                            }),
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    }),
                    s !== ec.Hz.NONE &&
                        (0, n.jsxs)("div", {
                            className: eg.zo,
                            children: [
                                (0, n.jsx)(x.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: Y.intl.string(K.default.P5dSl0),
                                }),
                                (0, n.jsx)(ep.default, {
                                    defaultColor: (0, eh.LX)(ec.pk),
                                    colors: ej,
                                    className: eg.Ei,
                                    colorContainerClassName: eg.oP,
                                    value: (0, eh.LX)(o),
                                    onChange: (e) => l(t.id, (t) => ({ ...t, shadowColor: (0, eh.Hl)(e) })),
                                    allowBlackCustomColor: !0,
                                }),
                            ],
                        }),
                ],
            }),
            (0, n.jsx)(v.Ip, {
                className: eu.G3,
                children: (0, n.jsx)(g.$, {
                    size: "md",
                    variant: "secondary",
                    icon: m.TrashIcon,
                    iconPosition: "start",
                    fullWidth: !0,
                    text: Y.intl.string(K.default.ytiENm),
                    onClick: () => r(t.id),
                }),
            }),
        ],
    });
}
var eC = l(915089),
    ek = l(734057),
    eN = l(696451),
    eE = l(994500),
    ew = l(287809),
    eA = l(562153),
    eI = l(706409);
function eR() {
    let {
            audioTracks: e,
            clip: t,
            voiceAudioEnabled: l,
            setVoiceAudioEnabled: r,
            mutedSpeakerIds: s,
            setSpeakerMuted: o,
            speakerVolumes: c,
            setSpeakerVolume: u,
            speakerVolumeSupported: d,
        } = (0, G.T)(),
        [m, f] = a.useState(!1),
        h = (0, eC.GV)(),
        p = a.useMemo(() => (0, eI.O)(e), [e]),
        v = (0, i.yK)([ew.default], () => p.map((e) => ew.default.getUser(e)), [p]),
        g = (0, i.yK)(
            [ew.default, eN.Ay, ek.A, eE.A],
            () =>
                p.map((e) => {
                    let l = ew.default.getUser(e);
                    return null != l
                        ? (0, eA.mG)(t.guildId, t.channelId, l)
                        : `${Y.intl.string(Y.t["30mdIx"])} ${e.slice(-4)}`;
                }),
            [p, t.guildId, t.channelId],
        ),
        b = a.useMemo(
            () =>
                p
                    .map((e, t) => ({ userId: e, user: v[t], name: g[t] }))
                    .sort((e, t) => {
                        let l = e.name.localeCompare(t.name);
                        return 0 !== l ? l : e.userId.localeCompare(t.userId);
                    }),
            [p, v, g],
        ),
        j = p.length > 0,
        y = j ? p.length : e.filter((e) => e.trackName.includes(ec.gC.VOICE)).length;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ee, {
                icon: (0, n.jsx)(k.MicrophoneIcon, { size: "sm", color: "currentColor" }),
                label: Y.intl.string(K.default.ai9fWO),
                count: y,
                countToggle: {
                    label: Y.intl.formatToPlainString(K.default.cb30Fe, { count: y }),
                    expanded: m,
                    disabled: !j,
                    controlsId: h,
                    onClick: () => f((e) => !e),
                },
                enabled: l,
                disabled: 0 === y,
                onToggle: r,
            }),
            j &&
                (0, n.jsx)("div", {
                    id: h,
                    className: Z.BN,
                    hidden: !m,
                    children: b.map((e) => {
                        let { userId: a, user: i, name: r } = e;
                        return (0, n.jsxs)(
                            "div",
                            {
                                className: Z.g_,
                                role: "group",
                                "aria-label": r,
                                children: [
                                    (0, n.jsxs)(J, {
                                        label: Y.intl.formatToPlainString(K.default.lBmQau, { name: r }),
                                        volume: c[a] ?? 100,
                                        disabled: !l || s.includes(a) || !d,
                                        muted: !l || s.includes(a),
                                        title: r,
                                        onCommit: (e) => u(a, e),
                                        children: [
                                            null != i
                                                ? (0, n.jsx)("img", {
                                                      className: Z.vg,
                                                      src: i.getAvatarURL(t.guildId, 24, !1),
                                                      alt: "",
                                                  })
                                                : (0, n.jsx)("div", {
                                                      className: Z.eQ,
                                                      "aria-hidden": !0,
                                                      children: "?",
                                                  }),
                                            (0, n.jsx)(x.E, {
                                                variant: "body-sm/normal",
                                                className: Z.$P,
                                                color: "text-default",
                                                children: r,
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(Q, {
                                        label: Y.intl.formatToPlainString(K.default.CBCjab, { name: r }),
                                        enabled: !s.includes(a),
                                        disabled: !l,
                                        onToggle: (e) => o(a, !e),
                                    }),
                                ],
                            },
                            a,
                        );
                    }),
                }),
        ],
    });
}
var eS = l(95477);
let eL = [
        { value: 0.04, label: K.default.zYVcjp },
        { value: 0.06, label: K.default.LGX80j },
        { value: 0.09, label: K.default.sa6Q0q },
    ],
    eT = [
        { value: ec.UY.NONE, label: K.default["tYuPp+"] },
        { value: ec.UY.SMALL, label: K.default["42Skzz"] },
        { value: ec.UY.MEDIUM, label: K.default["Ujlm+F"] },
        { value: ec.UY.LARGE, label: K.default.lT4Cq2 },
    ],
    eM = [0xfe6e0d, 0xffe047, 3534206, 5793266, 0xff4cd2];
function eD(e) {
    let { track: t } = e,
        { updateTextTrackData: l, setSelectedTrackId: i, removeTrack: r, textTrackIdToFocus: s } = (0, ev.fn)(),
        o = a.useRef(null);
    return (
        a.useEffect(() => {
            s === t.id && (o.current?.focus(), o.current?.select());
        }, [s, t.id]),
        (0, n.jsxs)("div", {
            className: eu.XV,
            children: [
                (0, n.jsx)("div", {
                    className: Z.CD,
                    children: (0, n.jsx)(g.$, {
                        size: "sm",
                        variant: "secondary",
                        icon: er.ArrowSmallLeftIcon,
                        iconPosition: "start",
                        text: Y.intl.string(K.default["7yBrfD"]),
                        onClick: () => i(null),
                    }),
                }),
                (0, n.jsxs)(v.Ip, {
                    className: Z.hX,
                    children: [
                        (0, n.jsx)("div", {
                            className: eg.r5,
                            children: (0, n.jsx)(x.E, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                children: Y.intl.string(K.default.GtvDbf),
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: Z.Ln,
                            children: [
                                (0, n.jsx)(x.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: Y.intl.string(K.default["R/JN4b"]),
                                }),
                                (0, n.jsx)(eS.k, {
                                    inputRef: o,
                                    "aria-label": Y.intl.string(K.default["R/JN4b"]),
                                    value: t.data.text,
                                    onChange: (e) => l(t.id, (t) => ({ ...t, text: e })),
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: Z.Ln,
                            children: [
                                (0, n.jsx)(x.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: Y.intl.string(K.default["4eAE08"]),
                                }),
                                (0, n.jsx)("div", {
                                    className: Z.si,
                                    children: eL.map((e) => {
                                        let { value: a, label: i } = e,
                                            r = t.data.style.fontSize === a;
                                        return (0, n.jsx)(
                                            es.D,
                                            {
                                                "aria-pressed": r,
                                                className: el()(Z.is, r && Z.j5),
                                                onClick: () =>
                                                    l(t.id, (e) => ({ ...e, style: { ...e.style, fontSize: a } })),
                                                children: (0, n.jsx)(x.E, {
                                                    variant: "body-sm/medium",
                                                    children: Y.intl.string(i),
                                                }),
                                            },
                                            a,
                                        );
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: eg.zo,
                            children: [
                                (0, n.jsx)(x.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: Y.intl.string(K.default["9oleCI"]),
                                }),
                                (0, n.jsx)(ep.default, {
                                    defaultColor: 0xffffff,
                                    colors: eM,
                                    className: eg.Ei,
                                    colorContainerClassName: eg.oP,
                                    value: (0, eh.LX)(t.data.style.color),
                                    onChange: (e) =>
                                        l(t.id, (t) => ({ ...t, style: { ...t.style, color: (0, eh.Hl)(e) } })),
                                    allowBlackCustomColor: !0,
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: Z.Ln,
                            children: [
                                (0, n.jsx)(x.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: Y.intl.string(K.default.huZ6Mm),
                                }),
                                (0, n.jsx)("div", {
                                    className: Z.si,
                                    children: eT.map((e) => {
                                        let { value: a, label: i } = e,
                                            r = t.data.style.strokeWidth === a;
                                        return (0, n.jsx)(
                                            es.D,
                                            {
                                                "aria-pressed": r,
                                                className: el()(Z.is, r && Z.j5),
                                                onClick: () =>
                                                    l(t.id, (e) => ({ ...e, style: { ...e.style, strokeWidth: a } })),
                                                children: (0, n.jsx)(x.E, {
                                                    variant: "body-sm/medium",
                                                    children: Y.intl.string(i),
                                                }),
                                            },
                                            a,
                                        );
                                    }),
                                }),
                            ],
                        }),
                        t.data.style.strokeWidth !== ec.UY.NONE &&
                            (0, n.jsxs)("div", {
                                className: eg.zo,
                                children: [
                                    (0, n.jsx)(x.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-subtle",
                                        children: Y.intl.string(K.default.iQZQyA),
                                    }),
                                    (0, n.jsx)(ep.default, {
                                        defaultColor: 0,
                                        colors: eM,
                                        className: eg.Ei,
                                        colorContainerClassName: eg.oP,
                                        value: (0, eh.LX)(t.data.style.strokeColor),
                                        onChange: (e) =>
                                            l(t.id, (t) => ({
                                                ...t,
                                                style: { ...t.style, strokeColor: (0, eh.Hl)(e) },
                                            })),
                                        allowBlackCustomColor: !0,
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, n.jsx)(v.Ip, {
                    className: eu.G3,
                    children: (0, n.jsx)(g.$, {
                        size: "md",
                        variant: "secondary",
                        icon: m.TrashIcon,
                        iconPosition: "start",
                        fullWidth: !0,
                        text: Y.intl.string(K.default.LYpz7y),
                        onClick: () => r(t.id),
                    }),
                }),
            ],
        })
    );
}
let eO = D.I.difference(new Set([D.C.EXPORT_TO_SOUNDBOARD, D.C.FAVORITE, D.C.DELETE, D.C.MAIN_ACTION, D.C.EDIT]));
function eP(e) {
    let { activeTool: t } = (0, G.T)(),
        { tracks: l, selectedTrackId: a } = (0, ev.fn)(),
        i = l.find((e) => e.id === a);
    if (null != i)
        switch (i.type) {
            case ec.Me.TEXT:
                return (0, n.jsx)(eD, { track: i });
            case ec.Me.IMAGE:
                return (0, n.jsx)(ey, { track: i });
        }
    switch (t) {
        case U.Y.CROP:
            return (0, n.jsx)(em, {});
        case U.Y.NONE:
        default:
            return (0, n.jsx)(e_, { ...e });
    }
}
function e_(e) {
    let { channelId: t, onEdit: D, onClose: V, onExit: B } = e,
        {
            getEditedClip: X,
            voiceAudioEnabled: H,
            setVoiceAudioEnabled: F,
            applicationAudioEnabled: W,
            setApplicationAudioEnabled: Q,
            soundboardAudioEnabled: q,
            setSoundboardAudioEnabled: J,
            pause: et,
            clip: el,
            editOnly: en,
            setActiveTool: ea,
            audioTracks: ei,
            speakerMuteSupported: er,
            speakerVolumeSupported: es,
            applicationVolume: eo,
            setApplicationVolume: ed,
            soundboardVolume: em,
            setSoundboardVolume: eh,
        } = (0, G.T)(),
        { analyticsLocations: ep } = (0, I.Ay)(A.A.CLIPS_EDITOR),
        { addTextTrack: ex, pickAndAddImageTrack: eg, setSelectedTrackId: eb } = (0, ev.fn)(),
        { isCropEnabled: ej } = (0, ev.As)(),
        ey = el.type === ec.nQ.SCREENSHOT,
        eC = el.type === ec.nQ.VOICE_CLIP,
        ek = (0, R.h)(el.applicationId),
        eN = (0, i.bG)([T.Ay], () => T.Ay.isClipExporting(el.id)),
        { onShareClick: eE } = (0, $.A)(t),
        { picker: ew } = a.useContext(O.$),
        eA = (0, P.$)(ew?.action),
        eI = (0, i.bG)([L.A], () => L.A.isDeveloper),
        eS = a.useMemo(() => ei.filter((e) => e.trackName.includes(ec.gC.VOICE)).length, [ei]),
        eL = a.useMemo(() => ei.filter((e) => e.trackName.includes(ec.gC.SOUNDBOARD)).length, [ei]),
        eT = ek?.name ?? el.applicationName ?? Y.intl.string(Y.t.GnQui9);
    return (0, n.jsxs)("div", {
        className: eu.XV,
        children: [
            (0, n.jsxs)("div", {
                className: eu.eW,
                children: [
                    (0, n.jsxs)(s.e, {
                        wrap: !1,
                        size: "sm",
                        align: "center",
                        justify: "start",
                        direction: "horizontal",
                        children: [
                            (0, n.jsx)(o.m, {
                                position: "bottom",
                                text: el.isFavorite ? Y.intl.string(K.default.IZsalP) : Y.intl.string(K.default.ihBfyA),
                                children: (0, n.jsx)(c.K, {
                                    onClick: () => (0, M.XK)(el),
                                    variant: "icon-only",
                                    "aria-label": el.isFavorite
                                        ? Y.intl.string(K.default.IZsalP)
                                        : Y.intl.string(K.default.ihBfyA),
                                    icon: el.isFavorite ? u.StarIcon : d.StarOutlineIcon,
                                }),
                            }),
                            (0, n.jsx)(o.m, {
                                position: "bottom",
                                text: Y.intl.string(Y.t.oyYWHE),
                                children: (0, n.jsx)(c.K, {
                                    onClick: (e) => (0, z.A)(e, { clips: [el], onAfterDelete: V }),
                                    variant: "icon-only",
                                    "aria-label": Y.intl.string(Y.t.oyYWHE),
                                    icon: m.TrashIcon,
                                }),
                            }),
                            (0, n.jsx)(o.m, {
                                position: "bottom",
                                text: Y.intl.string(Y.t.PdRCRg),
                                children: (0, n.jsx)(c.K, {
                                    onClick: function (e) {
                                        (et(),
                                            (0, w.L3)(e, async () => {
                                                let { default: e } = await Promise.all([
                                                    l.e(249169),
                                                    l.e(657266),
                                                    l.e(715867),
                                                    l.e(595429),
                                                    l.e(115472),
                                                    l.e(320891),
                                                    l.e(531279),
                                                    l.e(371863),
                                                    l.e(398793),
                                                    l.e(338601),
                                                    l.e(218489),
                                                    l.e(4328),
                                                    l.e(886456),
                                                    l.e(218307),
                                                    l.e(520342),
                                                    l.e(401343),
                                                ]).then(l.bind(l, 590146));
                                                return (l) =>
                                                    (0, n.jsx)(e, {
                                                        ...l,
                                                        clips: [X()],
                                                        analyticsLocations: ep,
                                                        channelId: t,
                                                        onAfterDelete: V,
                                                        displayConfiguration: eO,
                                                    });
                                            }));
                                    },
                                    variant: "icon-only",
                                    "aria-label": Y.intl.string(Y.t.PdRCRg),
                                    icon: f.MoreHorizontalIcon,
                                }),
                            }),
                            eI &&
                                (0, n.jsx)(o.m, {
                                    position: "bottom",
                                    text: "Clip Debug",
                                    children: (0, n.jsx)(c.K, {
                                        onClick: function () {
                                            (0, r.mM)(
                                                async () => {
                                                    let { default: e } = await Promise.all([
                                                        l.e(860350),
                                                        l.e(848625),
                                                        l.e(883952),
                                                        l.e(31e4),
                                                    ]).then(l.bind(l, 224883));
                                                    return (t) => (0, n.jsx)(e, { ...t, clip: el });
                                                },
                                                { stackingBehavior: "stack" },
                                            );
                                        },
                                        icon: h.BugIcon,
                                        variant: "icon-only",
                                        "aria-label": "Clip Debug",
                                    }),
                                }),
                        ],
                    }),
                    (0, n.jsx)(o.m, {
                        position: "bottom",
                        text: Y.intl.string(Y.t.cpT0Cq),
                        children: (0, n.jsx)(c.K, {
                            onClick: B ?? V,
                            icon: p.XLargeIcon,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": Y.intl.string(Y.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
            (0, n.jsxs)(v.Ip, {
                className: eu.Md,
                children: [
                    (0, n.jsxs)("div", {
                        className: Z.uW,
                        children: [
                            (0, n.jsx)(x.E, {
                                variant: "body-sm/semibold",
                                color: "text-subtle",
                                children: Y.intl.string(K.default.JrcRaE),
                            }),
                            (0, n.jsxs)("div", {
                                className: Z.L0,
                                children: [
                                    "" !== el.thumbnail &&
                                        (0, n.jsx)("img", {
                                            className: Z.Nf,
                                            src: el.thumbnail,
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                    (0, n.jsx)(ef.A, {
                                        variant: "body-sm/medium",
                                        className: Z.FA,
                                        containerClassName: Z.vt,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !ey &&
                        !eC &&
                        (0, n.jsxs)("div", {
                            className: Z.uW,
                            children: [
                                (0, n.jsx)(x.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: Y.intl.string(K.default.FmXxW6),
                                }),
                                ej &&
                                    (0, n.jsx)(g.$, {
                                        variant: "secondary",
                                        icon: b.CropIcon,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: Y.intl.string(K.default.RiEyiS),
                                        onClick: () => {
                                            (eb(null), ea(U.Y.CROP));
                                        },
                                    }),
                                (0, n.jsx)(g.$, {
                                    variant: "secondary",
                                    icon: j.LettersIcon,
                                    iconPosition: "start",
                                    fullWidth: !0,
                                    text: Y.intl.string(K.default.zSN9vp),
                                    onClick: ex,
                                }),
                                (0, n.jsx)(g.$, {
                                    variant: "secondary",
                                    icon: y.ImagePlusIcon,
                                    iconPosition: "start",
                                    fullWidth: !0,
                                    text: Y.intl.string(K.default.iFo3gj),
                                    onClick: eg,
                                }),
                            ],
                        }),
                    !ey &&
                        (0, n.jsxs)("div", {
                            className: Z.uW,
                            children: [
                                (0, n.jsx)(x.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: Y.intl.string(K.default.KRnA2D),
                                }),
                                (0, n.jsxs)("div", {
                                    className: Z.VZ,
                                    children: [
                                        (0, n.jsx)(ee, {
                                            icon:
                                                null != ek
                                                    ? (0, n.jsx)(S.A, { game: ek, size: S.M.XXSMALL })
                                                    : (0, n.jsx)(C.WaveformIcon, { size: "sm", color: "currentColor" }),
                                            label: eT,
                                            enabled: W,
                                            onToggle: Q,
                                            volume: es ? { value: eo, onCommit: ed } : void 0,
                                        }),
                                        er
                                            ? (0, n.jsx)(eR, {})
                                            : (0, n.jsx)(ee, {
                                                  icon: (0, n.jsx)(k.MicrophoneIcon, {
                                                      size: "sm",
                                                      color: "currentColor",
                                                  }),
                                                  label: Y.intl.string(K.default.ai9fWO),
                                                  count: eS,
                                                  enabled: H,
                                                  disabled: 0 === eS,
                                                  onToggle: F,
                                              }),
                                        (0, n.jsx)(ee, {
                                            icon: (0, n.jsx)(N.SoundboardIcon, { size: "sm", color: "currentColor" }),
                                            label: Y.intl.string(K.default["/VVQKJ"]),
                                            enabled: q,
                                            disabled: 0 === eL,
                                            onToggle: J,
                                            volume: es ? { value: em, onCommit: eh } : void 0,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
            (0, n.jsx)(v.Ip, {
                className: eu.G3,
                children: (0, n.jsx)(s.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: en
                        ? (0, n.jsx)(g.$, {
                              loading: eN,
                              disabled: eN,
                              variant: "primary",
                              onClick: () =>
                                  eE({
                                      clips: [X()],
                                      onShareComplete: () => {
                                          (D?.(), V());
                                      },
                                  }),
                              text: Y.intl.string(Y.t["R3BPH+"]),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(g.$, {
                                      loading: eN,
                                      disabled: eN,
                                      variant: "secondary",
                                      icon: E.PlusLargeIcon,
                                      iconPosition: "start",
                                      onClick: async function () {
                                          await (0, _.n)(X(), { channelId: t, analyticsLocations: ep });
                                      },
                                      text: Y.intl.string(K.default.HH4Tjj),
                                  }),
                                  (0, n.jsx)(g.$, {
                                      loading: eN,
                                      disabled: eN,
                                      variant: "primary",
                                      icon: eA.icon,
                                      iconPosition: "start",
                                      onClick: null != ew ? () => ew.onPick(X()) : () => eE({ clips: [X()] }),
                                      text: eA.label,
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
