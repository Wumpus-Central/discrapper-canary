l.d(t, { A: () => q });
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
    N = l(553270),
    E = l(452027),
    k = l(663341),
    w = l(405433),
    A = l(442433),
    L = l(429913),
    R = l(47167),
    T = l(713654),
    M = l(769015),
    I = l(145497),
    D = l(734057),
    S = l(540999),
    O = l(71393),
    P = l(287809),
    _ = l(58703),
    z = l(403362),
    U = l(915725),
    $ = l(372684),
    B = l(430795),
    G = l(253799),
    H = l(105009),
    F = l(645655),
    K = l(352527),
    V = l(718812),
    X = l(362081),
    Z = l(696016),
    W = l(16590),
    Y = l(375708),
    Q = l(954634);
let J = G.I.difference(new Set([G.C.EXPORT_TO_SOUNDBOARD, G.C.FAVORITE, G.C.DELETE, G.C.SHARE, G.C.EDIT]));
function q(e) {
    let { channelId: t, onEdit: G, onClose: q } = e,
        {
            getEditedClip: ee,
            voiceAudioEnabled: et,
            setVoiceAudioEnabled: el,
            applicationAudioEnabled: en,
            setApplicationAudioEnabled: ea,
            soundboardAudioEnabled: ei,
            setSoundboardAudioEnabled: es,
            pause: er,
            clipName: ec,
            setClipName: eo,
            isTemporary: eu,
            setIsTemporary: ed,
            clip: em,
            editOnly: eh,
        } = (0, X.T)(),
        ef = em.type === $.nQ.SCREENSHOT,
        ex = (0, L.h)(em.applicationId),
        ev = (0, i.bG)([U.Ay], () => U.Ay.isClipExporting(em.id)),
        { onShareClick: ep } = (0, K.A)(t),
        ej = (0, i.bG)([S.A], () => S.A.isDeveloper),
        eg = (0, V.h)(em),
        eb = a.useCallback(async () => {
            await (0, B.w7)(em.id), ed(!1);
        }, [em.id, ed]),
        eC = (0, i.yK)([P.default], () => em.users.map(P.default.getUser).filter(z.Vq)),
        ey = (0, i.bG)([O.A], () => (null != em.guildId ? O.A.getGuild(em.guildId) : null)),
        eN = (0, i.bG)([D.A], () => (null != em.channelId ? D.A.getChannel(em.channelId) : null)),
        eE = (0, R.Ay)(eN),
        ek = null != eN ? (0, T.gU)(eN, ey) : null;
    async function ew() {
        await (0, H.n)(ee(), t);
    }
    return (0, n.jsxs)("div", {
        className: Q.XV,
        children: [
            (0, n.jsx)("div", {
                className: Q.eW,
                children: (0, n.jsxs)(c.e, {
                    wrap: !1,
                    size: "sm",
                    align: "center",
                    justify: "end",
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, n.jsx)(o.K, {
                            onClick: () => (0, B.XK)(em),
                            variant: "icon-only",
                            "aria-label": em.isFavorite
                                ? Y.intl.string(W.default.ihBfyA)
                                : Y.intl.string(W.default.IZsalP),
                            icon: em.isFavorite ? u.G : d.y,
                        }),
                        (0, n.jsx)(o.K, {
                            onClick: (e) => (0, F.A)(e, { clips: [em], onAfterDelete: q }),
                            variant: "icon-only",
                            "aria-label": Y.intl.string(Y.t.oyYWHE),
                            icon: m.u,
                        }),
                        (0, n.jsx)(o.K, {
                            onClick: function (e) {
                                er(),
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
                                            l.e("18307"),
                                            l.e("86456"),
                                            l.e("20342"),
                                            l.e("80955"),
                                        ]).then(l.bind(l, 80982));
                                        return (l) =>
                                            (0, n.jsx)(e, {
                                                ...l,
                                                clips: [ee()],
                                                channelId: t,
                                                onAfterDelete: q,
                                                displayConfiguration: J,
                                            });
                                    });
                            },
                            variant: "icon-only",
                            "aria-label": Y.intl.string(Y.t.PdRCRg),
                            icon: h.j,
                        }),
                        ej &&
                            (0, n.jsx)(o.K, {
                                onClick: function () {
                                    (0, r.openModalLazy)(
                                        async () => {
                                            let { default: e } = await l.e("10000").then(l.bind(l, 224883));
                                            return (t) => (0, n.jsx)(e, { ...t, clip: em });
                                        },
                                        { stackingBehavior: "stack" },
                                    );
                                },
                                icon: f.Q,
                                variant: "icon-only",
                                "aria-label": "Debug Info",
                            }),
                        (0, n.jsx)(o.K, {
                            onClick: q,
                            icon: x.d,
                            variant: "icon-only",
                            "aria-label": Y.intl.string(Y.t.cpT0Cq),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(v.Ip, {
                className: Q.Md,
                children: (0, n.jsxs)(p.n, {
                    children: [
                        eu &&
                            (0, n.jsx)(j.w, {
                                type: "info",
                                children: (0, n.jsxs)(g.B, {
                                    gap: 8,
                                    children: [
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            children: Y.intl.string(Y.t.EkUv4u),
                                        }),
                                        (0, n.jsx)(C.$, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: eb,
                                            text: Y.intl.string(Y.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, n.jsx)(y.k, {
                            label: Y.intl.string(Y.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? eo(void 0) : eo(e);
                            },
                            value: ec,
                            minLength: Z.U_,
                            maxLength: Z.mk,
                            placeholder: eg,
                        }),
                        !ef &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(N.A, { label: Y.intl.string(Y.t.GnQui9), checked: en, onChange: ea }),
                                    (0, n.jsx)(N.A, { label: Y.intl.string(Y.t["5mVOCb"]), checked: et, onChange: el }),
                                    (0, n.jsx)(N.A, { label: Y.intl.string(Y.t["8K7Ges"]), checked: ei, onChange: es }),
                                ],
                            }),
                        (0, n.jsx)(E.D, {
                            label: Y.intl.string(Y.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, n.jsx)(b.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, _.mk)(new Date(em.createdAt)),
                            }),
                        }),
                        (0, n.jsx)(E.D, {
                            label: Y.intl.string(Y.t.WTozwe),
                            layout: "horizontal",
                            children: (0, n.jsx)(s.A, { users: eC, maxUsers: 10 }),
                        }),
                        null != ex &&
                            (0, n.jsx)(E.D, {
                                label: Y.intl.string(W.default.PACPOV),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: Q._c,
                                    children: [
                                        (0, n.jsx)(M.A, { game: ex, size: M.M.XXSMALL, className: Q.Z9 }),
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: Q.lR,
                                            children: ex?.name ?? em.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != ey &&
                            (0, n.jsx)(E.D, {
                                label: Y.intl.string(Y.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: Q._c,
                                    children: [
                                        (0, n.jsx)(I.Ay, { guild: ey, iconSize: 16, className: Q.Z9 }),
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: Q.lR,
                                            children: ey.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != eN &&
                            null != ek &&
                            (0, n.jsx)(E.D, {
                                label: Y.intl.string(Y.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: Q._c,
                                    children: [
                                        (0, n.jsx)(ek, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: Q.Z9,
                                        }),
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: Q.lR,
                                            children: eE,
                                        }),
                                    ],
                                }),
                            }),
                        null != em.activity &&
                            (null != em.activity.state || null != em.activity.details) &&
                            (0, n.jsx)(E.D, {
                                label: Y.intl.string(Y.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, n.jsx)(b.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [em.activity.state, em.activity.details].filter(Boolean).join(" \u203A "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, n.jsx)("div", {
                className: Q.G3,
                children: (0, n.jsx)(c.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: eh
                        ? (0, n.jsx)(C.$, {
                              loading: ev,
                              disabled: ev,
                              variant: "primary",
                              onClick: () =>
                                  ep({
                                      clips: [ee()],
                                      onShareComplete: () => {
                                          G?.(), q();
                                      },
                                  }),
                              text: Y.intl.string(Y.t["R3BPH+"]),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(C.$, {
                                      loading: ev,
                                      disabled: ev,
                                      variant: "secondary",
                                      icon: k.p,
                                      iconPosition: "start",
                                      onClick: ew,
                                      text: Y.intl.string(W.default.HH4Tjj),
                                  }),
                                  (0, n.jsx)(C.$, {
                                      loading: ev,
                                      disabled: ev,
                                      variant: "primary",
                                      icon: w.l,
                                      iconPosition: "start",
                                      onClick: () => ep({ clips: [ee()] }),
                                      text: Y.intl.string(Y.t.RDE0Sc),
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
