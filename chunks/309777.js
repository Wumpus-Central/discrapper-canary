l.d(t, { A: () => ee });
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
    f = l(365199),
    h = l(92446),
    x = l(972213),
    v = l(364522),
    p = l(270003),
    g = l(683071),
    j = l(331322),
    C = l(834730),
    b = l(821609),
    y = l(95477),
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
    G = l(693117),
    H = l(253799),
    V = l(105009),
    K = l(645655),
    F = l(352527),
    W = l(718812),
    X = l(362081),
    Z = l(696016),
    Y = l(16590),
    Q = l(375708),
    J = l(954634);
let q = H.I.difference(new Set([H.C.EXPORT_TO_SOUNDBOARD, H.C.FAVORITE, H.C.DELETE, H.C.SHARE, H.C.EDIT]));
function ee(e) {
    let { channelId: t, onEdit: H, onClose: ee } = e,
        {
            getEditedClip: et,
            voiceAudioEnabled: el,
            setVoiceAudioEnabled: en,
            applicationAudioEnabled: ea,
            setApplicationAudioEnabled: ei,
            soundboardAudioEnabled: es,
            setSoundboardAudioEnabled: er,
            pause: ec,
            clipName: eo,
            setClipName: eu,
            isTemporary: ed,
            setIsTemporary: em,
            clip: ef,
            editOnly: eh,
        } = (0, X.T)(),
        { analyticsLocations: ex } = (0, R.Ay)(L.A.CLIPS_EDITOR),
        ev = ef.type === Z.nQ.SCREENSHOT,
        ep = (0, T.h)(ef.applicationId),
        eg = (0, i.bG)([B.Ay], () => B.Ay.isClipExporting(ef.id)),
        { onShareClick: ej } = (0, F.A)(t),
        eC = (0, i.bG)([P.A], () => P.A.isDeveloper),
        eb = (0, W.h)(ef),
        ey = a.useCallback(async () => {
            await (0, G.w7)(ef.id), em(!1);
        }, [ef.id, em]),
        eE = (0, i.yK)([z.default], () => ef.users.map(z.default.getUser).filter($.Vq)),
        eN = (0, i.bG)([_.A], () => (null != ef.guildId ? _.A.getGuild(ef.guildId) : null)),
        ek = (0, i.bG)([O.A], () => (null != ef.channelId ? O.A.getChannel(ef.channelId) : null)),
        ew = (0, I.Ay)(ek),
        eA = null != ek ? (0, M.gU)(ek, eN) : null;
    async function eL() {
        await (0, V.n)(et(), { analyticsLocations: ex, channelId: t });
    }
    return (0, n.jsxs)("div", {
        className: J.XV,
        children: [
            (0, n.jsx)("div", {
                className: J.eW,
                children: (0, n.jsxs)(c.e, {
                    wrap: !1,
                    size: "sm",
                    align: "center",
                    justify: "end",
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, n.jsx)(o.K, {
                            onClick: () => (0, G.XK)(ef),
                            variant: "icon-only",
                            "aria-label": ef.isFavorite
                                ? Q.intl.string(Y.default.ihBfyA)
                                : Q.intl.string(Y.default.IZsalP),
                            icon: ef.isFavorite ? u.G : d.y,
                        }),
                        (0, n.jsx)(o.K, {
                            onClick: (e) => (0, K.A)(e, { clips: [ef], onAfterDelete: ee }),
                            variant: "icon-only",
                            "aria-label": Q.intl.string(Q.t.oyYWHE),
                            icon: m.u,
                        }),
                        (0, n.jsx)(o.K, {
                            onClick: function (e) {
                                ec(),
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
                                                analyticsLocations: ex,
                                                clips: [et()],
                                                channelId: t,
                                                onAfterDelete: ee,
                                                displayConfiguration: q,
                                            });
                                    });
                            },
                            variant: "icon-only",
                            "aria-label": Q.intl.string(Q.t.PdRCRg),
                            icon: f.j,
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
                                icon: h.Q,
                                variant: "icon-only",
                                "aria-label": "Debug Info",
                            }),
                        (0, n.jsx)(o.K, {
                            onClick: ee,
                            icon: x.d,
                            variant: "icon-only",
                            "aria-label": Q.intl.string(Q.t.cpT0Cq),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(v.Ip, {
                className: J.Md,
                children: (0, n.jsxs)(p.n, {
                    children: [
                        ed &&
                            (0, n.jsx)(g.w, {
                                type: "info",
                                children: (0, n.jsxs)(j.B, {
                                    gap: 8,
                                    children: [
                                        (0, n.jsx)(C.E, {
                                            variant: "text-sm/normal",
                                            children: Q.intl.string(Q.t.EkUv4u),
                                        }),
                                        (0, n.jsx)(b.$, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: ey,
                                            text: Q.intl.string(Q.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, n.jsx)(y.k, {
                            label: Q.intl.string(Q.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? eu(void 0) : eu(e);
                            },
                            value: eo,
                            minLength: Z.U_,
                            maxLength: Z.mk,
                            placeholder: eb,
                        }),
                        !ev &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(E.A, { label: Q.intl.string(Q.t.GnQui9), checked: ea, onChange: ei }),
                                    (0, n.jsx)(E.A, { label: Q.intl.string(Q.t["5mVOCb"]), checked: el, onChange: en }),
                                    (0, n.jsx)(E.A, { label: Q.intl.string(Q.t["8K7Ges"]), checked: es, onChange: er }),
                                ],
                            }),
                        (0, n.jsx)(N.D, {
                            label: Q.intl.string(Q.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, n.jsx)(C.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, U.mk)(new Date(ef.createdAt)),
                            }),
                        }),
                        (0, n.jsx)(N.D, {
                            label: Q.intl.string(Q.t.WTozwe),
                            layout: "horizontal",
                            children: (0, n.jsx)(s.A, { users: eE, maxUsers: 10 }),
                        }),
                        null != ep &&
                            (0, n.jsx)(N.D, {
                                label: Q.intl.string(Y.default.PACPOV),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: J._c,
                                    children: [
                                        (0, n.jsx)(D.A, { game: ep, size: D.M.XXSMALL, className: J.Z9 }),
                                        (0, n.jsx)(C.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: J.lR,
                                            children: ep?.name ?? ef.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != eN &&
                            (0, n.jsx)(N.D, {
                                label: Q.intl.string(Q.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: J._c,
                                    children: [
                                        (0, n.jsx)(S.Ay, { guild: eN, iconSize: 16, className: J.Z9 }),
                                        (0, n.jsx)(C.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: J.lR,
                                            children: eN.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != ek &&
                            null != eA &&
                            (0, n.jsx)(N.D, {
                                label: Q.intl.string(Q.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: J._c,
                                    children: [
                                        (0, n.jsx)(eA, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: J.Z9,
                                        }),
                                        (0, n.jsx)(C.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: J.lR,
                                            children: ew,
                                        }),
                                    ],
                                }),
                            }),
                        null != ef.activity &&
                            (null != ef.activity.state || null != ef.activity.details) &&
                            (0, n.jsx)(N.D, {
                                label: Q.intl.string(Q.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, n.jsx)(C.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [ef.activity.state, ef.activity.details].filter(Boolean).join(" \u203A "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, n.jsx)("div", {
                className: J.G3,
                children: (0, n.jsx)(c.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: eh
                        ? (0, n.jsx)(b.$, {
                              loading: eg,
                              disabled: eg,
                              variant: "primary",
                              onClick: () =>
                                  ej({
                                      clips: [et()],
                                      onShareComplete: () => {
                                          H?.(), ee();
                                      },
                                  }),
                              text: Q.intl.string(Q.t["R3BPH+"]),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(b.$, {
                                      loading: eg,
                                      disabled: eg,
                                      variant: "secondary",
                                      icon: k.p,
                                      iconPosition: "start",
                                      onClick: eL,
                                      text: Q.intl.string(Y.default.HH4Tjj),
                                  }),
                                  (0, n.jsx)(b.$, {
                                      loading: eg,
                                      disabled: eg,
                                      variant: "primary",
                                      icon: w.l,
                                      iconPosition: "start",
                                      onClick: () => ej({ clips: [et()] }),
                                      text: Q.intl.string(Q.t.RDE0Sc),
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
