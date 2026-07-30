l.d(t, { A: () => et });
var n = l(477900),
    a = l(582128),
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
    x = l(972213),
    v = l(364522),
    p = l(270003),
    j = l(683071),
    g = l(331322),
    b = l(834730),
    C = l(821609),
    y = l(292666),
    E = l(553270),
    N = l(452027),
    k = l(663341),
    w = l(405433),
    A = l(442433),
    L = l(793574),
    R = l(688810),
    T = l(429913),
    I = l(47167),
    M = l(713654),
    D = l(769015),
    S = l(145497),
    O = l(734057),
    P = l(540999),
    _ = l(71393),
    z = l(287809),
    U = l(58703),
    $ = l(403362),
    B = l(915725),
    G = l(372684),
    H = l(430795),
    F = l(253799),
    K = l(105009),
    V = l(645655),
    X = l(352527),
    Z = l(718812),
    W = l(362081),
    Y = l(696016),
    Q = l(16590),
    J = l(375708),
    q = l(954634);
let ee = F.I.difference(new Set([F.C.EXPORT_TO_SOUNDBOARD, F.C.FAVORITE, F.C.DELETE, F.C.SHARE, F.C.EDIT]));
function et(e) {
    let { channelId: t, onEdit: F, onClose: et } = e,
        {
            getEditedClip: el,
            voiceAudioEnabled: en,
            setVoiceAudioEnabled: ea,
            applicationAudioEnabled: ei,
            setApplicationAudioEnabled: es,
            soundboardAudioEnabled: er,
            setSoundboardAudioEnabled: ec,
            pause: eo,
            clipName: eu,
            setClipName: ed,
            isTemporary: em,
            setIsTemporary: eh,
            clip: ef,
            editOnly: ex,
        } = (0, W.T)(),
        { analyticsLocations: ev } = (0, R.Ay)(L.A.CLIPS_EDITOR),
        ep = ef.type === G.nQ.SCREENSHOT,
        ej = (0, T.h)(ef.applicationId),
        eg = (0, i.bG)([B.Ay], () => B.Ay.isClipExporting(ef.id)),
        { onShareClick: eb } = (0, X.A)(t),
        eC = (0, i.bG)([P.A], () => P.A.isDeveloper),
        ey = (0, Z.h)(ef),
        eE = a.useCallback(async () => {
            await (0, H.w7)(ef.id), eh(!1);
        }, [ef.id, eh]),
        eN = (0, i.yK)([z.default], () => ef.users.map(z.default.getUser).filter($.Vq)),
        ek = (0, i.bG)([_.A], () => (null != ef.guildId ? _.A.getGuild(ef.guildId) : null)),
        ew = (0, i.bG)([O.A], () => (null != ef.channelId ? O.A.getChannel(ef.channelId) : null)),
        eA = (0, I.Ay)(ew),
        eL = null != ew ? (0, M.gU)(ew, ek) : null;
    async function eR() {
        await (0, K.n)(el(), { analyticsLocations: ev, channelId: t });
    }
    return (0, n.jsxs)("div", {
        className: q.XV,
        children: [
            (0, n.jsx)("div", {
                className: q.eW,
                children: (0, n.jsxs)(c.e, {
                    wrap: !1,
                    size: "sm",
                    align: "center",
                    justify: "end",
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, n.jsx)(o.K, {
                            onClick: () => (0, H.XK)(ef),
                            variant: "icon-only",
                            "aria-label": ef.isFavorite
                                ? J.intl.string(Q.default.ihBfyA)
                                : J.intl.string(Q.default.IZsalP),
                            icon: ef.isFavorite ? u.G : d.y,
                        }),
                        (0, n.jsx)(o.K, {
                            onClick: (e) => (0, V.A)(e, { clips: [ef], onAfterDelete: et }),
                            variant: "icon-only",
                            "aria-label": J.intl.string(J.t.oyYWHE),
                            icon: m.u,
                        }),
                        (0, n.jsx)(o.K, {
                            onClick: function (e) {
                                eo(),
                                    (0, A.L3)(e, async () => {
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
                                                analyticsLocations: ev,
                                                clips: [el()],
                                                channelId: t,
                                                onAfterDelete: et,
                                                displayConfiguration: ee,
                                            });
                                    });
                            },
                            variant: "icon-only",
                            "aria-label": J.intl.string(J.t.PdRCRg),
                            icon: h.j,
                        }),
                        eC &&
                            (0, n.jsx)(o.K, {
                                onClick: function () {
                                    (0, r.openModalLazy)(
                                        async () => {
                                            let { default: e } = await l.e("10000").then(l.bind(l, 224883));
                                            return (t) => (0, n.jsx)(e, { ...t, clip: ef });
                                        },
                                        { stackingBehavior: "stack" },
                                    );
                                },
                                icon: f.Q,
                                variant: "icon-only",
                                "aria-label": "Debug Info",
                            }),
                        (0, n.jsx)(o.K, {
                            onClick: et,
                            icon: x.d,
                            variant: "icon-only",
                            "aria-label": J.intl.string(J.t.cpT0Cq),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(v.Ip, {
                className: q.Md,
                children: (0, n.jsxs)(p.n, {
                    children: [
                        em &&
                            (0, n.jsx)(j.w, {
                                type: "info",
                                children: (0, n.jsxs)(g.B, {
                                    gap: 8,
                                    children: [
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            children: J.intl.string(J.t.EkUv4u),
                                        }),
                                        (0, n.jsx)(C.$, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: eE,
                                            text: J.intl.string(J.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, n.jsx)(y.k, {
                            label: J.intl.string(J.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? ed(void 0) : ed(e);
                            },
                            value: eu,
                            minLength: Y.U_,
                            maxLength: Y.mk,
                            placeholder: ey,
                        }),
                        !ep &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(E.A, { label: J.intl.string(J.t.GnQui9), checked: ei, onChange: es }),
                                    (0, n.jsx)(E.A, { label: J.intl.string(J.t["5mVOCb"]), checked: en, onChange: ea }),
                                    (0, n.jsx)(E.A, { label: J.intl.string(J.t["8K7Ges"]), checked: er, onChange: ec }),
                                ],
                            }),
                        (0, n.jsx)(N.D, {
                            label: J.intl.string(J.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, n.jsx)(b.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, U.mk)(new Date(ef.createdAt)),
                            }),
                        }),
                        (0, n.jsx)(N.D, {
                            label: J.intl.string(J.t.WTozwe),
                            layout: "horizontal",
                            children: (0, n.jsx)(s.A, { users: eN, maxUsers: 10 }),
                        }),
                        null != ej &&
                            (0, n.jsx)(N.D, {
                                label: J.intl.string(Q.default.PACPOV),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: q._c,
                                    children: [
                                        (0, n.jsx)(D.A, { game: ej, size: D.M.XXSMALL, className: q.Z9 }),
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: q.lR,
                                            children: ej?.name ?? ef.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != ek &&
                            (0, n.jsx)(N.D, {
                                label: J.intl.string(J.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: q._c,
                                    children: [
                                        (0, n.jsx)(S.Ay, { guild: ek, iconSize: 16, className: q.Z9 }),
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: q.lR,
                                            children: ek.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != ew &&
                            null != eL &&
                            (0, n.jsx)(N.D, {
                                label: J.intl.string(J.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: q._c,
                                    children: [
                                        (0, n.jsx)(eL, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: q.Z9,
                                        }),
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: q.lR,
                                            children: eA,
                                        }),
                                    ],
                                }),
                            }),
                        null != ef.activity &&
                            (null != ef.activity.state || null != ef.activity.details) &&
                            (0, n.jsx)(N.D, {
                                label: J.intl.string(J.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, n.jsx)(b.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [ef.activity.state, ef.activity.details].filter(Boolean).join(" \u203A "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, n.jsx)("div", {
                className: q.G3,
                children: (0, n.jsx)(c.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: ex
                        ? (0, n.jsx)(C.$, {
                              loading: eg,
                              disabled: eg,
                              variant: "primary",
                              onClick: () =>
                                  eb({
                                      clips: [el()],
                                      onShareComplete: () => {
                                          F?.(), et();
                                      },
                                  }),
                              text: J.intl.string(J.t["R3BPH+"]),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(C.$, {
                                      loading: eg,
                                      disabled: eg,
                                      variant: "secondary",
                                      icon: k.p,
                                      iconPosition: "start",
                                      onClick: eR,
                                      text: J.intl.string(Q.default.HH4Tjj),
                                  }),
                                  (0, n.jsx)(C.$, {
                                      loading: eg,
                                      disabled: eg,
                                      variant: "primary",
                                      icon: w.l,
                                      iconPosition: "start",
                                      onClick: () => eb({ clips: [el()] }),
                                      text: J.intl.string(J.t.RDE0Sc),
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
