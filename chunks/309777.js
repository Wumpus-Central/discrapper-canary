l.d(t, { A: () => Q });
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
    E = l(553270),
    A = l(452027),
    N = l(663341),
    k = l(405433),
    w = l(442433),
    R = l(429913),
    T = l(47167),
    L = l(713654),
    I = l(769015),
    O = l(145497),
    D = l(734057),
    M = l(540999),
    _ = l(71393),
    S = l(287809),
    P = l(58703),
    G = l(403362),
    U = l(274372),
    z = l(372684),
    B = l(430795),
    $ = l(253799),
    H = l(105009),
    V = l(645655),
    F = l(352527),
    K = l(718812),
    Z = l(362081),
    W = l(696016),
    X = l(16590),
    Y = l(375708),
    q = l(567282);
let J = $.I.difference(new Set([$.C.EXPORT_TO_SOUNDBOARD, $.C.FAVORITE, $.C.DELETE, $.C.SHARE, $.C.EDIT]));
function Q(e) {
    let { channelId: t, onEdit: $, onClose: Q } = e,
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
        } = (0, Z.T)(),
        ef = em.type === z.nQ.SCREENSHOT,
        ep = (0, R.h)(em.applicationId),
        ex = (0, i.bG)([U.Ay], () => U.Ay.isClipExporting(em.id)),
        { onShareClick: ev } = (0, F.A)(t),
        eg = (0, i.bG)([M.A], () => M.A.isDeveloper),
        ej = (0, K.h)(em),
        eb = a.useCallback(async () => {
            await (0, B.w7)(em.id), ed(!1);
        }, [em.id, ed]),
        ey = (0, i.yK)([S.default], () => em.users.map(S.default.getUser).filter(G.Vq)),
        eC = (0, i.bG)([_.A], () => (null != em.guildId ? _.A.getGuild(em.guildId) : null)),
        eE = (0, i.bG)([D.A], () => (null != em.channelId ? D.A.getChannel(em.channelId) : null)),
        eA = (0, T.Ay)(eE),
        eN = null != eE ? (0, L.gU)(eE, eC) : null;
    async function ek() {
        await (0, H.n)(ee(), t);
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
                            onClick: () => (0, B.XK)(em),
                            variant: "icon-only",
                            "aria-label": em.isFavorite
                                ? Y.intl.string(X.default.ihBfyA)
                                : Y.intl.string(X.default.IZsalP),
                            icon: em.isFavorite ? u.G : d.y,
                        }),
                        (0, n.jsx)(o.K, {
                            onClick: (e) => (0, V.A)(e, { clips: [em], onAfterDelete: Q }),
                            variant: "icon-only",
                            "aria-label": Y.intl.string(Y.t.oyYWHE),
                            icon: m.u,
                        }),
                        (0, n.jsx)(o.K, {
                            onClick: function (e) {
                                er(),
                                    (0, w.L3)(e, async () => {
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
                                                clips: [ee()],
                                                channelId: t,
                                                onAfterDelete: Q,
                                                displayConfiguration: J,
                                            });
                                    });
                            },
                            variant: "icon-only",
                            "aria-label": Y.intl.string(Y.t.PdRCRg),
                            icon: h.j,
                        }),
                        eg &&
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
                            onClick: Q,
                            icon: p.d,
                            variant: "icon-only",
                            "aria-label": Y.intl.string(Y.t.cpT0Cq),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(x.Ip, {
                className: q.Md,
                children: (0, n.jsxs)(v.n, {
                    children: [
                        eu &&
                            (0, n.jsx)(g.w, {
                                type: "info",
                                children: (0, n.jsxs)(j.B, {
                                    gap: 8,
                                    children: [
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            children: Y.intl.string(Y.t.EkUv4u),
                                        }),
                                        (0, n.jsx)(y.$, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: eb,
                                            text: Y.intl.string(Y.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, n.jsx)(C.k, {
                            label: Y.intl.string(Y.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? eo(void 0) : eo(e);
                            },
                            value: ec,
                            minLength: W.U_,
                            maxLength: W.mk,
                            placeholder: ej,
                        }),
                        !ef &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(E.A, { label: Y.intl.string(Y.t.GnQui9), checked: en, onChange: ea }),
                                    (0, n.jsx)(E.A, { label: Y.intl.string(Y.t["5mVOCb"]), checked: et, onChange: el }),
                                    (0, n.jsx)(E.A, { label: Y.intl.string(Y.t["8K7Ges"]), checked: ei, onChange: es }),
                                ],
                            }),
                        (0, n.jsx)(A.D, {
                            label: Y.intl.string(Y.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, n.jsx)(b.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, P.mk)(new Date(em.createdAt)),
                            }),
                        }),
                        (0, n.jsx)(A.D, {
                            label: Y.intl.string(Y.t.WTozwe),
                            layout: "horizontal",
                            children: (0, n.jsx)(s.A, { users: ey, maxUsers: 10 }),
                        }),
                        null != ep &&
                            (0, n.jsx)(A.D, {
                                label: Y.intl.string(X.default.PACPOV),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: q._c,
                                    children: [
                                        (0, n.jsx)(I.A, { game: ep, size: I.M.XXSMALL, className: q.Z9 }),
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: q.lR,
                                            children: ep?.name ?? em.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != eC &&
                            (0, n.jsx)(A.D, {
                                label: Y.intl.string(Y.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: q._c,
                                    children: [
                                        (0, n.jsx)(O.Ay, { guild: eC, iconSize: 16, className: q.Z9 }),
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: q.lR,
                                            children: eC.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != eE &&
                            null != eN &&
                            (0, n.jsx)(A.D, {
                                label: Y.intl.string(Y.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: q._c,
                                    children: [
                                        (0, n.jsx)(eN, {
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
                        em.version >= 3 &&
                            null != em.activity &&
                            (null != em.activity.state || null != em.activity.details) &&
                            (0, n.jsx)(A.D, {
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
                className: q.G3,
                children: (0, n.jsx)(c.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: eh
                        ? (0, n.jsx)(y.$, {
                              loading: ex,
                              disabled: ex,
                              variant: "primary",
                              onClick: () =>
                                  ev({
                                      clips: [ee()],
                                      onShareComplete: () => {
                                          $?.(), Q();
                                      },
                                  }),
                              text: Y.intl.string(Y.t["R3BPH+"]),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(y.$, {
                                      loading: ex,
                                      disabled: ex,
                                      variant: "secondary",
                                      icon: N.p,
                                      iconPosition: "start",
                                      onClick: ek,
                                      text: Y.intl.string(X.default.HH4Tjj),
                                  }),
                                  (0, n.jsx)(y.$, {
                                      loading: ex,
                                      disabled: ex,
                                      variant: "primary",
                                      icon: k.l,
                                      iconPosition: "start",
                                      onClick: () => ev({ clips: [ee()] }),
                                      text: Y.intl.string(Y.t.RDE0Sc),
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
