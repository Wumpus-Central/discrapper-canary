l.d(t, { A: () => q });
var a = l(627968),
    n = l(64700),
    i = l(17928),
    s = l(342952),
    r = l(192308),
    o = l(825484),
    c = l(408278),
    u = l(27232),
    d = l(505930),
    m = l(241326),
    h = l(365199),
    f = l(92446),
    p = l(972213),
    v = l(364522),
    x = l(270003),
    g = l(683071),
    j = l(331322),
    b = l(834730),
    C = l(821609),
    E = l(292666),
    N = l(553270),
    y = l(452027),
    A = l(663341),
    k = l(405433),
    w = l(442433),
    R = l(429913),
    T = l(47167),
    I = l(713654),
    L = l(137177),
    O = l(145497),
    S = l(734057),
    _ = l(540999),
    M = l(71393),
    D = l(287809),
    P = l(58703),
    U = l(403362),
    G = l(274372),
    z = l(372684),
    B = l(607814),
    $ = l(253799),
    F = l(105009),
    V = l(645655),
    H = l(352527),
    K = l(718812),
    Z = l(429364),
    W = l(696016),
    X = l(16590),
    J = l(375708),
    Y = l(567282);
let Q = $.I.difference(new Set([$.C.EXPORT_TO_SOUNDBOARD, $.C.FAVORITE, $.C.DELETE, $.C.SHARE, $.C.EDIT]));
function q(e) {
    let { channelId: t, onEdit: $, onClose: q } = e,
        {
            getEditedClip: ee,
            voiceAudioEnabled: et,
            setVoiceAudioEnabled: el,
            applicationAudioEnabled: ea,
            setApplicationAudioEnabled: en,
            soundboardAudioEnabled: ei,
            setSoundboardAudioEnabled: es,
            pause: er,
            clipName: eo,
            setClipName: ec,
            isTemporary: eu,
            setIsTemporary: ed,
            clip: em,
            editOnly: eh,
        } = (0, Z.T)(),
        ef = em.type === z.nQ.SCREENSHOT,
        ep = (0, R.h)(em.applicationId),
        ev = (0, i.bG)([G.A], () => G.A.isClipExporting(em.id)),
        { onShareClick: ex } = (0, H.A)(t),
        eg = (0, i.bG)([_.A], () => _.A.isDeveloper),
        ej = (0, K.h)(em),
        eb = n.useCallback(async () => {
            await (0, B.w7)(em.id), ed(!1);
        }, [em.id, ed]),
        eC = (0, i.yK)([D.default], () => em.users.map(D.default.getUser).filter(U.Vq)),
        eE = (0, i.bG)([M.A], () => (null != em.guildId ? M.A.getGuild(em.guildId) : null)),
        eN = (0, i.bG)([S.A], () => (null != em.channelId ? S.A.getChannel(em.channelId) : null)),
        ey = (0, T.Ay)(eN),
        eA = null != eN ? (0, I.gU)(eN, eE) : null;
    async function ek() {
        await (0, F.n)(ee(), t);
    }
    return (0, a.jsxs)("div", {
        className: Y.XV,
        children: [
            (0, a.jsx)("div", {
                className: Y.eW,
                children: (0, a.jsxs)(o.e, {
                    wrap: !1,
                    size: "sm",
                    align: "center",
                    justify: "end",
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, a.jsx)(c.K, {
                            onClick: () => (0, B.XK)(em),
                            variant: "icon-only",
                            "aria-label": em.isFavorite
                                ? J.intl.string(X.default.ihBfyA)
                                : J.intl.string(X.default.IZsalP),
                            icon: em.isFavorite ? u.G : d.y,
                        }),
                        (0, a.jsx)(c.K, {
                            onClick: (e) => (0, V.A)(e, { clips: [em], onAfterDelete: q }),
                            variant: "icon-only",
                            "aria-label": J.intl.string(J.t.oyYWHE),
                            icon: m.u,
                        }),
                        (0, a.jsx)(c.K, {
                            onClick: function (e) {
                                er(),
                                    (0, w.L3)(e, async () => {
                                        let { default: e } = await Promise.all([
                                            l.e("74974"),
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
                                                displayConfiguration: Q,
                                            });
                                    });
                            },
                            variant: "icon-only",
                            "aria-label": J.intl.string(J.t.PdRCRg),
                            icon: h.j,
                        }),
                        eg &&
                            (0, a.jsx)(c.K, {
                                onClick: function () {
                                    (0, r.openModalLazy)(
                                        async () => {
                                            let { default: e } = await l.e("10000").then(l.bind(l, 224883));
                                            return (t) => (0, a.jsx)(e, { ...t, clip: em });
                                        },
                                        { stackingBehavior: "stack" },
                                    );
                                },
                                icon: f.Q,
                                variant: "icon-only",
                                "aria-label": "Debug Info",
                            }),
                        (0, a.jsx)(c.K, {
                            onClick: q,
                            icon: p.d,
                            variant: "icon-only",
                            "aria-label": J.intl.string(J.t.cpT0Cq),
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(v.Ip, {
                className: Y.Md,
                children: (0, a.jsxs)(x.n, {
                    children: [
                        eu &&
                            (0, a.jsx)(g.w, {
                                type: "info",
                                children: (0, a.jsxs)(j.B, {
                                    gap: 8,
                                    children: [
                                        (0, a.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            children: J.intl.string(J.t.EkUv4u),
                                        }),
                                        (0, a.jsx)(C.$, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: eb,
                                            text: J.intl.string(J.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, a.jsx)(E.k, {
                            label: J.intl.string(J.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? ec(void 0) : ec(e);
                            },
                            value: eo,
                            minLength: W.U_,
                            maxLength: W.mk,
                            placeholder: ej,
                        }),
                        !ef &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(N.A, { label: J.intl.string(J.t.GnQui9), checked: ea, onChange: en }),
                                    (0, a.jsx)(N.A, { label: J.intl.string(J.t["5mVOCb"]), checked: et, onChange: el }),
                                    (0, a.jsx)(N.A, { label: J.intl.string(J.t["8K7Ges"]), checked: ei, onChange: es }),
                                ],
                            }),
                        (0, a.jsx)(y.D, {
                            label: J.intl.string(J.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, a.jsx)(b.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, P.mk)(new Date(em.createdAt)),
                            }),
                        }),
                        (0, a.jsx)(y.D, {
                            label: J.intl.string(J.t.WTozwe),
                            layout: "horizontal",
                            children: (0, a.jsx)(s.A, { users: eC, maxUsers: 10 }),
                        }),
                        null != ep &&
                            (0, a.jsx)(y.D, {
                                label: J.intl.string(X.default.PACPOV),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: Y._c,
                                    children: [
                                        (0, a.jsx)(L.A, { game: ep, size: L.M.XXSMALL, className: Y.Z9 }),
                                        (0, a.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: Y.lR,
                                            children: ep?.name ?? em.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != eE &&
                            (0, a.jsx)(y.D, {
                                label: J.intl.string(J.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: Y._c,
                                    children: [
                                        (0, a.jsx)(O.Ay, { guild: eE, iconSize: 16, className: Y.Z9 }),
                                        (0, a.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: Y.lR,
                                            children: eE.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != eN &&
                            null != eA &&
                            (0, a.jsx)(y.D, {
                                label: J.intl.string(J.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: Y._c,
                                    children: [
                                        (0, a.jsx)(eA, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: Y.Z9,
                                        }),
                                        (0, a.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: Y.lR,
                                            children: ey,
                                        }),
                                    ],
                                }),
                            }),
                        em.version >= 3 &&
                            null != em.activity &&
                            (null != em.activity.state || null != em.activity.details) &&
                            (0, a.jsx)(y.D, {
                                label: J.intl.string(J.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, a.jsx)(b.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [em.activity.state, em.activity.details].filter(Boolean).join(" \u203A "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                className: Y.G3,
                children: (0, a.jsx)(o.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: eh
                        ? (0, a.jsx)(C.$, {
                              loading: ev,
                              disabled: ev,
                              variant: "primary",
                              onClick: () =>
                                  ex({
                                      clips: [ee()],
                                      onShareComplete: () => {
                                          $?.(), q();
                                      },
                                  }),
                              text: J.intl.string(J.t["R3BPH+"]),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(C.$, {
                                      loading: ev,
                                      disabled: ev,
                                      variant: "secondary",
                                      icon: A.p,
                                      iconPosition: "start",
                                      onClick: ek,
                                      text: J.intl.string(X.default.HH4Tjj),
                                  }),
                                  (0, a.jsx)(C.$, {
                                      loading: ev,
                                      disabled: ev,
                                      variant: "primary",
                                      icon: k.l,
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
