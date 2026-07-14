l.d(t, { A: () => em });
var n = l(627968),
    a = l(64700),
    i = l(17928),
    s = l(342952),
    r = l(192308),
    c = l(825484),
    o = l(408278),
    u = l(27232),
    d = l(505930),
    m = l(241326),
    h = l(365199),
    f = l(92446),
    p = l(972213),
    x = l(364522),
    v = l(270003),
    g = l(683071),
    j = l(331322),
    b = l(834730),
    y = l(821609),
    C = l(292666),
    E = l(428610),
    A = l(553270),
    N = l(452027),
    k = l(663341),
    w = l(405433),
    R = l(442433),
    T = l(429913),
    L = l(47167),
    I = l(713654),
    O = l(769015),
    D = l(145497),
    M = l(734057),
    _ = l(540999),
    S = l(71393),
    P = l(287809),
    G = l(58703),
    U = l(403362),
    z = l(915725),
    B = l(372684),
    $ = l(430795),
    H = l(253799),
    V = l(105009),
    F = l(645655),
    K = l(352527),
    Z = l(718812),
    W = l(858174),
    X = l(503698),
    Y = l.n(X),
    q = l(31300),
    J = l(646270),
    Q = l(748562),
    ee = l(477155),
    et = l(939249),
    el = l(417270),
    en = l(362081),
    ea = l(16590),
    ei = l(375708),
    es = l(567282),
    er = l(733102);
let ec = [
    { preset: B.yz.ORIGINAL, icon: q.k, label: ea.default.CujCES },
    { preset: B.yz.PORTRAIT_9_16, icon: J.u, label: ea.default["34PW6m"] },
    { preset: B.yz.LANDSCAPE_16_9, icon: Q.U, label: ea.default.ywAdnD },
];
function eo() {
    let { cropPreset: e, setCropPreset: t, setActiveTool: l } = (0, en.T)();
    return (0, n.jsxs)("div", {
        className: es.XV,
        children: [
            (0, n.jsx)("div", {
                className: er.CD,
                children: (0, n.jsx)(y.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: ee.r,
                    iconPosition: "start",
                    text: ei.intl.string(ea.default["7yBrfD"]),
                    onClick: () => l(W.Y.NONE),
                }),
            }),
            (0, n.jsxs)(x.Ip, {
                className: er.hX,
                children: [
                    (0, n.jsx)(b.E, {
                        variant: "text-md/semibold",
                        color: "text-default",
                        children: ei.intl.string(ea.default["1TOrU3"]),
                    }),
                    (0, n.jsxs)("div", {
                        className: er.Ln,
                        children: [
                            (0, n.jsx)(b.E, {
                                variant: "eyebrow",
                                color: "text-muted",
                                children: ei.intl.string(ea.default.r15Wrn),
                            }),
                            (0, n.jsx)("div", {
                                className: er.si,
                                children: ec.map((l) => {
                                    let { preset: a, icon: i, label: s } = l,
                                        r = e === a;
                                    return (0, n.jsxs)(
                                        et.D,
                                        {
                                            "aria-pressed": r,
                                            className: Y()(er.is, r && er.j5),
                                            onClick: () => t(a),
                                            children: [
                                                (0, n.jsx)(i, { size: "md" }),
                                                (0, n.jsx)(b.E, {
                                                    variant: "text-sm/medium",
                                                    children: ei.intl.string(s),
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
                className: es.G3,
                children: (0, n.jsx)(y.$, {
                    fullWidth: !0,
                    variant: "secondary",
                    icon: el.m,
                    iconPosition: "start",
                    text: ei.intl.string(ea.default.XdZS9I),
                    onClick: () => t(B.yz.ORIGINAL),
                }),
            }),
        ],
    });
}
var eu = l(696016);
let ed = H.I.difference(new Set([H.C.EXPORT_TO_SOUNDBOARD, H.C.FAVORITE, H.C.DELETE, H.C.SHARE, H.C.EDIT]));
function em(e) {
    let { activeTool: t } = (0, en.T)();
    switch (t) {
        case W.Y.CROP:
            return (0, n.jsx)(eo, {});
        case W.Y.NONE:
        default:
            return (0, n.jsx)(eh, { ...e });
    }
}
function eh(e) {
    let { channelId: t, onEdit: H, onClose: X } = e,
        {
            getEditedClip: Y,
            voiceAudioEnabled: q,
            setVoiceAudioEnabled: J,
            applicationAudioEnabled: Q,
            setApplicationAudioEnabled: ee,
            soundboardAudioEnabled: et,
            setSoundboardAudioEnabled: el,
            pause: ec,
            clipName: eo,
            setClipName: em,
            isTemporary: eh,
            setIsTemporary: ef,
            clip: ep,
            editOnly: ex,
            setActiveTool: ev,
        } = (0, en.T)(),
        eg = ep.type === B.nQ.SCREENSHOT,
        ej = ep.type === B.nQ.VOICE_CLIP,
        eb = (0, T.h)(ep.applicationId),
        ey = (0, i.bG)([z.Ay], () => z.Ay.isClipExporting(ep.id)),
        { onShareClick: eC } = (0, K.A)(t),
        eE = (0, i.bG)([_.A], () => _.A.isDeveloper),
        eA = (0, Z.h)(ep),
        eN = a.useCallback(async () => {
            await (0, $.w7)(ep.id), ef(!1);
        }, [ep.id, ef]),
        ek = (0, i.yK)([P.default], () => ep.users.map(P.default.getUser).filter(U.Vq)),
        ew = (0, i.bG)([S.A], () => (null != ep.guildId ? S.A.getGuild(ep.guildId) : null)),
        eR = (0, i.bG)([M.A], () => (null != ep.channelId ? M.A.getChannel(ep.channelId) : null)),
        eT = (0, L.Ay)(eR),
        eL = null != eR ? (0, I.gU)(eR, ew) : null;
    async function eI() {
        await (0, V.n)(Y(), t);
    }
    return (0, n.jsxs)("div", {
        className: es.XV,
        children: [
            (0, n.jsx)("div", {
                className: es.eW,
                children: (0, n.jsxs)(c.e, {
                    wrap: !1,
                    size: "sm",
                    align: "center",
                    justify: "end",
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, n.jsx)(o.K, {
                            onClick: () => (0, $.XK)(ep),
                            variant: "icon-only",
                            "aria-label": ep.isFavorite
                                ? ei.intl.string(ea.default.ihBfyA)
                                : ei.intl.string(ea.default.IZsalP),
                            icon: ep.isFavorite ? u.G : d.y,
                        }),
                        (0, n.jsx)(o.K, {
                            onClick: (e) => (0, F.A)(e, { clips: [ep], onAfterDelete: X }),
                            variant: "icon-only",
                            "aria-label": ei.intl.string(ei.t.oyYWHE),
                            icon: m.u,
                        }),
                        (0, n.jsx)(o.K, {
                            onClick: function (e) {
                                ec(),
                                    (0, R.L3)(e, async () => {
                                        let { default: e } = await Promise.all([
                                            l.e("64379"),
                                            l.e("6619"),
                                            l.e("93020"),
                                            l.e("95429"),
                                            l.e("91211"),
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
                                                clips: [Y()],
                                                channelId: t,
                                                onAfterDelete: X,
                                                displayConfiguration: ed,
                                            });
                                    });
                            },
                            variant: "icon-only",
                            "aria-label": ei.intl.string(ei.t.PdRCRg),
                            icon: h.j,
                        }),
                        eE &&
                            (0, n.jsx)(o.K, {
                                onClick: function () {
                                    (0, r.openModalLazy)(
                                        async () => {
                                            let { default: e } = await l.e("10000").then(l.bind(l, 224883));
                                            return (t) => (0, n.jsx)(e, { ...t, clip: ep });
                                        },
                                        { stackingBehavior: "stack" },
                                    );
                                },
                                icon: f.Q,
                                variant: "icon-only",
                                "aria-label": "Debug Info",
                            }),
                        (0, n.jsx)(o.K, {
                            onClick: X,
                            icon: p.d,
                            variant: "icon-only",
                            "aria-label": ei.intl.string(ei.t.cpT0Cq),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(x.Ip, {
                className: es.Md,
                children: (0, n.jsxs)(v.n, {
                    children: [
                        eh &&
                            (0, n.jsx)(g.w, {
                                type: "info",
                                children: (0, n.jsxs)(j.B, {
                                    gap: 8,
                                    children: [
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            children: ei.intl.string(ei.t.EkUv4u),
                                        }),
                                        (0, n.jsx)(y.$, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: eN,
                                            text: ei.intl.string(ei.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, n.jsx)(C.k, {
                            label: ei.intl.string(ei.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? em(void 0) : em(e);
                            },
                            value: eo,
                            minLength: eu.U_,
                            maxLength: eu.mk,
                            placeholder: eA,
                        }),
                        !eg &&
                            !ej &&
                            (0, n.jsxs)("div", {
                                className: er.xb,
                                children: [
                                    (0, n.jsx)(b.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        children: ei.intl.string(ea.default.FmXxW6),
                                    }),
                                    (0, n.jsx)(y.$, {
                                        variant: "secondary",
                                        icon: E.K,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: ei.intl.string(ea.default.RiEyiS),
                                        onClick: () => ev(W.Y.CROP),
                                    }),
                                ],
                            }),
                        !eg &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(A.A, { label: ei.intl.string(ei.t.GnQui9), checked: Q, onChange: ee }),
                                    (0, n.jsx)(A.A, { label: ei.intl.string(ei.t["5mVOCb"]), checked: q, onChange: J }),
                                    (0, n.jsx)(A.A, {
                                        label: ei.intl.string(ei.t["8K7Ges"]),
                                        checked: et,
                                        onChange: el,
                                    }),
                                ],
                            }),
                        (0, n.jsx)(N.D, {
                            label: ei.intl.string(ei.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, n.jsx)(b.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, G.mk)(new Date(ep.createdAt)),
                            }),
                        }),
                        (0, n.jsx)(N.D, {
                            label: ei.intl.string(ei.t.WTozwe),
                            layout: "horizontal",
                            children: (0, n.jsx)(s.A, { users: ek, maxUsers: 10 }),
                        }),
                        null != eb &&
                            (0, n.jsx)(N.D, {
                                label: ei.intl.string(ea.default.PACPOV),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: es._c,
                                    children: [
                                        (0, n.jsx)(O.A, { game: eb, size: O.M.XXSMALL, className: es.Z9 }),
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: es.lR,
                                            children: eb?.name ?? ep.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != ew &&
                            (0, n.jsx)(N.D, {
                                label: ei.intl.string(ei.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: es._c,
                                    children: [
                                        (0, n.jsx)(D.Ay, { guild: ew, iconSize: 16, className: es.Z9 }),
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: es.lR,
                                            children: ew.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != eR &&
                            null != eL &&
                            (0, n.jsx)(N.D, {
                                label: ei.intl.string(ei.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: es._c,
                                    children: [
                                        (0, n.jsx)(eL, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: es.Z9,
                                        }),
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: es.lR,
                                            children: eT,
                                        }),
                                    ],
                                }),
                            }),
                        null != ep.activity &&
                            (null != ep.activity.state || null != ep.activity.details) &&
                            (0, n.jsx)(N.D, {
                                label: ei.intl.string(ei.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, n.jsx)(b.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [ep.activity.state, ep.activity.details].filter(Boolean).join(" \u203A "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, n.jsx)("div", {
                className: es.G3,
                children: (0, n.jsx)(c.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: ex
                        ? (0, n.jsx)(y.$, {
                              loading: ey,
                              disabled: ey,
                              variant: "primary",
                              onClick: () =>
                                  eC({
                                      clips: [Y()],
                                      onShareComplete: () => {
                                          H?.(), X();
                                      },
                                  }),
                              text: ei.intl.string(ei.t["R3BPH+"]),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(y.$, {
                                      loading: ey,
                                      disabled: ey,
                                      variant: "secondary",
                                      icon: k.p,
                                      iconPosition: "start",
                                      onClick: eI,
                                      text: ei.intl.string(ea.default.HH4Tjj),
                                  }),
                                  (0, n.jsx)(y.$, {
                                      loading: ey,
                                      disabled: ey,
                                      variant: "primary",
                                      icon: w.l,
                                      iconPosition: "start",
                                      onClick: () => eC({ clips: [Y()] }),
                                      text: ei.intl.string(ei.t.RDE0Sc),
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
