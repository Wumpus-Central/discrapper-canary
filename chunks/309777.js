l.d(t, { A: () => q });
var a = l(627968),
    n = l(64700),
    i = l(17928),
    r = l(342952),
    s = l(192308),
    o = l(825484),
    u = l(408278),
    c = l(27232),
    d = l(505930),
    m = l(241326),
    f = l(365199),
    h = l(92446),
    p = l(972213),
    v = l(364522),
    x = l(270003),
    g = l(683071),
    b = l(331322),
    j = l(834730),
    y = l(821609),
    C = l(292666),
    E = l(553270),
    k = l(452027),
    A = l(663341),
    N = l(405433),
    w = l(442433),
    R = l(429913),
    T = l(47167),
    L = l(713654),
    I = l(137177),
    M = l(145497),
    D = l(734057),
    O = l(540999),
    _ = l(71393),
    S = l(287809),
    P = l(58703),
    U = l(403362),
    B = l(274372),
    $ = l(372684),
    z = l(607814),
    F = l(253799),
    G = l(105009),
    H = l(645655),
    V = l(352527),
    K = l(718812),
    Z = l(429364),
    W = l(696016),
    X = l(16590),
    J = l(375708),
    Q = l(567282);
let Y = F.I.difference(new Set([F.C.EXPORT_TO_SOUNDBOARD, F.C.FAVORITE, F.C.DELETE, F.C.SHARE, F.C.EDIT]));
function q(e) {
    let { channelId: t, onEdit: F, onClose: q } = e,
        {
            getEditedClip: ee,
            voiceAudioEnabled: et,
            setVoiceAudioEnabled: el,
            applicationAudioEnabled: ea,
            setApplicationAudioEnabled: en,
            soundboardAudioEnabled: ei,
            setSoundboardAudioEnabled: er,
            pause: es,
            clipName: eo,
            setClipName: eu,
            isTemporary: ec,
            setIsTemporary: ed,
            clip: em,
            editOnly: ef,
        } = (0, Z.T)(),
        eh = em.type === $.nQ.SCREENSHOT,
        ep = (0, R.h)(em.applicationId),
        ev = (0, i.bG)([B.A], () => B.A.isClipExporting(em.id)),
        { onShareClick: ex } = (0, V.A)(t),
        eg = (0, i.bG)([O.A], () => O.A.isDeveloper),
        eb = (0, K.h)(em),
        ej = n.useCallback(async () => {
            await (0, z.w7)(em.id), ed(!1);
        }, [em.id, ed]),
        ey = (0, i.yK)([S.default], () => em.users.map(S.default.getUser).filter(U.Vq)),
        eC = (0, i.bG)([_.A], () => (null != em.guildId ? _.A.getGuild(em.guildId) : null)),
        eE = (0, i.bG)([D.A], () => (null != em.channelId ? D.A.getChannel(em.channelId) : null)),
        ek = (0, T.Ay)(eE),
        eA = null != eE ? (0, L.gU)(eE, eC) : null;
    async function eN() {
        await (0, G.n)(ee(), t);
    }
    return (0, a.jsxs)("div", {
        className: Q.XV,
        children: [
            (0, a.jsx)("div", {
                className: Q.eW,
                children: (0, a.jsxs)(o.e, {
                    wrap: !1,
                    size: "sm",
                    align: "center",
                    justify: "end",
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, a.jsx)(u.K, {
                            onClick: () => (0, z.XK)(em),
                            variant: "icon-only",
                            "aria-label": em.isFavorite
                                ? J.intl.string(X.default.ihBfyA)
                                : J.intl.string(X.default.IZsalP),
                            icon: em.isFavorite ? c.G : d.y,
                        }),
                        (0, a.jsx)(u.K, {
                            onClick: (e) => (0, H.A)(e, { clips: [em], onAfterDelete: q }),
                            variant: "icon-only",
                            "aria-label": J.intl.string(J.t.oyYWHE),
                            icon: m.u,
                        }),
                        (0, a.jsx)(u.K, {
                            onClick: function (e) {
                                es(),
                                    (0, w.L3)(e, async () => {
                                        let { default: e } = await Promise.all([
                                            l.e("616"),
                                            l.e("6619"),
                                            l.e("95429"),
                                            l.e("91211"),
                                            l.e("38601"),
                                            l.e("18489"),
                                            l.e("69006"),
                                            l.e("18307"),
                                            l.e("86456"),
                                            l.e("20342"),
                                            l.e("24043"),
                                        ]).then(l.bind(l, 197126));
                                        return (l) =>
                                            (0, a.jsx)(e, {
                                                ...l,
                                                clips: [ee()],
                                                channelId: t,
                                                onAfterDelete: q,
                                                displayConfiguration: Y,
                                            });
                                    });
                            },
                            variant: "icon-only",
                            "aria-label": J.intl.string(J.t.PdRCRg),
                            icon: f.j,
                        }),
                        eg &&
                            (0, a.jsx)(u.K, {
                                onClick: function () {
                                    (0, s.openModalLazy)(
                                        async () => {
                                            let { default: e } = await l.e("10000").then(l.bind(l, 224883));
                                            return (t) => (0, a.jsx)(e, { ...t, clip: em });
                                        },
                                        { stackingBehavior: "stack" },
                                    );
                                },
                                icon: h.Q,
                                variant: "icon-only",
                                "aria-label": "Debug Info",
                            }),
                        (0, a.jsx)(u.K, {
                            onClick: q,
                            icon: p.d,
                            variant: "icon-only",
                            "aria-label": J.intl.string(J.t.cpT0Cq),
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(v.Ip, {
                className: Q.Md,
                children: (0, a.jsxs)(x.n, {
                    children: [
                        ec &&
                            (0, a.jsx)(g.w, {
                                type: "info",
                                children: (0, a.jsxs)(b.B, {
                                    gap: 8,
                                    children: [
                                        (0, a.jsx)(j.E, {
                                            variant: "text-sm/normal",
                                            children: J.intl.string(J.t.EkUv4u),
                                        }),
                                        (0, a.jsx)(y.$, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: ej,
                                            text: J.intl.string(J.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, a.jsx)(C.k, {
                            label: J.intl.string(J.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? eu(void 0) : eu(e);
                            },
                            value: eo,
                            minLength: W.U_,
                            maxLength: W.mk,
                            placeholder: eb,
                        }),
                        !eh &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(E.A, { label: J.intl.string(J.t.GnQui9), checked: ea, onChange: en }),
                                    (0, a.jsx)(E.A, { label: J.intl.string(J.t["5mVOCb"]), checked: et, onChange: el }),
                                    (0, a.jsx)(E.A, { label: J.intl.string(J.t["8K7Ges"]), checked: ei, onChange: er }),
                                ],
                            }),
                        (0, a.jsx)(k.D, {
                            label: J.intl.string(J.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, a.jsx)(j.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, P.mk)(new Date(em.createdAt)),
                            }),
                        }),
                        (0, a.jsx)(k.D, {
                            label: J.intl.string(J.t.WTozwe),
                            layout: "horizontal",
                            children: (0, a.jsx)(r.A, { users: ey, maxUsers: 10 }),
                        }),
                        null != ep &&
                            (0, a.jsx)(k.D, {
                                label: J.intl.string(X.default.PACPOV),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: Q._c,
                                    children: [
                                        (0, a.jsx)(I.A, { game: ep, size: I.M.XXSMALL, className: Q.Z9 }),
                                        (0, a.jsx)(j.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: Q.lR,
                                            children: ep?.name ?? em.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != eC &&
                            (0, a.jsx)(k.D, {
                                label: J.intl.string(J.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: Q._c,
                                    children: [
                                        (0, a.jsx)(M.Ay, { guild: eC, iconSize: 16, className: Q.Z9 }),
                                        (0, a.jsx)(j.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: Q.lR,
                                            children: eC.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != eE &&
                            null != eA &&
                            (0, a.jsx)(k.D, {
                                label: J.intl.string(J.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: Q._c,
                                    children: [
                                        (0, a.jsx)(eA, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: Q.Z9,
                                        }),
                                        (0, a.jsx)(j.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: Q.lR,
                                            children: ek,
                                        }),
                                    ],
                                }),
                            }),
                        em.version >= 3 &&
                            null != em.activity &&
                            (null != em.activity.state || null != em.activity.details) &&
                            (0, a.jsx)(k.D, {
                                label: J.intl.string(J.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, a.jsx)(j.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [em.activity.state, em.activity.details].filter(Boolean).join(" \u203A "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                className: Q.G3,
                children: (0, a.jsx)(o.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: ef
                        ? (0, a.jsx)(y.$, {
                              loading: ev,
                              disabled: ev,
                              variant: "primary",
                              onClick: () =>
                                  ex({
                                      clips: [ee()],
                                      onShareComplete: () => {
                                          F?.(), q();
                                      },
                                  }),
                              text: J.intl.string(J.t["R3BPH+"]),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(y.$, {
                                      loading: ev,
                                      disabled: ev,
                                      variant: "secondary",
                                      icon: A.p,
                                      iconPosition: "start",
                                      onClick: eN,
                                      text: J.intl.string(X.default.HH4Tjj),
                                  }),
                                  (0, a.jsx)(y.$, {
                                      loading: ev,
                                      disabled: ev,
                                      variant: "primary",
                                      icon: N.l,
                                      iconPosition: "start",
                                      onClick: () => ex({ clips: [ee()] }),
                                      text: J.intl.string(J.t.RDE0Sc),
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
