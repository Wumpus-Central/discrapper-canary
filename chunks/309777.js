l.d(t, { A: () => J });
var a = l(477900);
l(582128);
var n = l(17928),
    i = l(342952),
    s = l(192308),
    r = l(825484),
    o = l(408278),
    c = l(27232),
    u = l(505930),
    d = l(241326),
    m = l(365199),
    h = l(92446),
    f = l(972213),
    x = l(364522),
    v = l(270003),
    p = l(95477),
    g = l(553270),
    j = l(452027),
    b = l(834730),
    C = l(821609),
    y = l(663341),
    w = l(405433),
    N = l(442433),
    E = l(793574),
    k = l(688810),
    A = l(429913),
    L = l(47167),
    R = l(713654),
    I = l(769015),
    M = l(145497),
    T = l(734057),
    D = l(540999),
    S = l(71393),
    O = l(287809),
    P = l(58703),
    z = l(403362),
    _ = l(915725),
    $ = l(614584),
    U = l(253799),
    G = l(105009),
    H = l(645655),
    B = l(352527),
    X = l(718812),
    F = l(362081),
    V = l(696016);
l(600253);
var K = l(268378),
    W = l(375708),
    Z = l(301187);
let Y = U.I.difference(new Set([U.C.EXPORT_TO_SOUNDBOARD, U.C.FAVORITE, U.C.DELETE, U.C.SHARE, U.C.EDIT]));
function J(e) {
    let { channelId: t, onEdit: U, onClose: J } = e,
        {
            getEditedClip: Q,
            voiceAudioEnabled: q,
            setVoiceAudioEnabled: ee,
            applicationAudioEnabled: et,
            setApplicationAudioEnabled: el,
            soundboardAudioEnabled: ea,
            setSoundboardAudioEnabled: en,
            pause: ei,
            clipName: es,
            setClipName: er,
            clip: eo,
            editOnly: ec,
        } = (0, F.T)(),
        { analyticsLocations: eu } = (0, k.Ay)(E.A.CLIPS_EDITOR),
        ed = eo.type === V.nQ.SCREENSHOT,
        em = (0, A.h)(eo.applicationId),
        eh = (0, n.bG)([_.Ay], () => _.Ay.isClipExporting(eo.id)),
        { onShareClick: ef } = (0, B.A)(t),
        ex = (0, n.bG)([D.A], () => D.A.isDeveloper),
        ev = (0, X.h)(eo),
        ep = (0, n.yK)([O.default], () => eo.users.map(O.default.getUser).filter(z.Vq)),
        eg = (0, n.bG)([S.A], () => (null != eo.guildId ? S.A.getGuild(eo.guildId) : null)),
        ej = (0, n.bG)([T.A], () => (null != eo.channelId ? T.A.getChannel(eo.channelId) : null)),
        eb = (0, L.Ay)(ej),
        eC = null != ej ? (0, R.gU)(ej, eg) : null;
    async function ey() {
        await (0, G.n)(Q(), { analyticsLocations: eu, channelId: t });
    }
    return (0, a.jsxs)("div", {
        className: Z.XV,
        children: [
            (0, a.jsx)("div", {
                className: Z.eW,
                children: (0, a.jsxs)(r.e, {
                    wrap: !1,
                    size: "sm",
                    align: "center",
                    justify: "end",
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, a.jsx)(o.K, {
                            onClick: () => (0, $.XK)(eo),
                            variant: "icon-only",
                            "aria-label": eo.isFavorite
                                ? W.intl.string(K.default.ihBfyA)
                                : W.intl.string(K.default.IZsalP),
                            icon: eo.isFavorite ? c.StarIcon : u.y,
                        }),
                        (0, a.jsx)(o.K, {
                            onClick: (e) => (0, H.A)(e, { clips: [eo], onAfterDelete: J }),
                            variant: "icon-only",
                            "aria-label": W.intl.string(W.t.oyYWHE),
                            icon: d.TrashIcon,
                        }),
                        (0, a.jsx)(o.K, {
                            onClick: function (e) {
                                (ei(),
                                    (0, N.L3)(e, async () => {
                                        let { default: e } = await Promise.all([
                                            l.e("249169"),
                                            l.e("657266"),
                                            l.e("591114"),
                                            l.e("595429"),
                                            l.e("311930"),
                                            l.e("320891"),
                                            l.e("531279"),
                                            l.e("371863"),
                                            l.e("338601"),
                                            l.e("218489"),
                                            l.e("669006"),
                                            l.e("886456"),
                                            l.e("218307"),
                                            l.e("520342"),
                                            l.e("869370"),
                                        ]).then(l.bind(l, 621953));
                                        return (l) =>
                                            (0, a.jsx)(e, {
                                                ...l,
                                                analyticsLocations: eu,
                                                clips: [Q()],
                                                channelId: t,
                                                onAfterDelete: J,
                                                displayConfiguration: Y,
                                            });
                                    }));
                            },
                            variant: "icon-only",
                            "aria-label": W.intl.string(W.t.PdRCRg),
                            icon: m.MoreHorizontalIcon,
                        }),
                        ex &&
                            (0, a.jsx)(o.K, {
                                onClick: function () {
                                    (0, s.openModalLazy)(
                                        async () => {
                                            let { default: e } = await l.e("310000").then(l.bind(l, 224883));
                                            return (t) => (0, a.jsx)(e, { ...t, clip: eo });
                                        },
                                        { stackingBehavior: "stack" },
                                    );
                                },
                                icon: h.BugIcon,
                                variant: "icon-only",
                                "aria-label": "Debug Info",
                            }),
                        (0, a.jsx)(o.K, {
                            onClick: J,
                            icon: f.XLargeIcon,
                            variant: "icon-only",
                            "aria-label": W.intl.string(W.t.cpT0Cq),
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(x.Ip, {
                className: Z.Md,
                children: (0, a.jsxs)(v.n, {
                    children: [
                        (0, a.jsx)(p.k, {
                            label: W.intl.string(W.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? er(void 0) : er(e);
                            },
                            value: es,
                            minLength: V.U_,
                            maxLength: 200,
                            placeholder: ev,
                        }),
                        !ed &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(g.A, { label: W.intl.string(W.t.GnQui9), checked: et, onChange: el }),
                                    (0, a.jsx)(g.A, { label: W.intl.string(W.t["5mVOCb"]), checked: q, onChange: ee }),
                                    (0, a.jsx)(g.A, { label: W.intl.string(W.t["8K7Ges"]), checked: ea, onChange: en }),
                                ],
                            }),
                        (0, a.jsx)(j.D, {
                            label: W.intl.string(W.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, a.jsx)(b.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, P.mk)(new Date(eo.createdAt)),
                            }),
                        }),
                        (0, a.jsx)(j.D, {
                            label: W.intl.string(W.t.WTozwe),
                            layout: "horizontal",
                            children: (0, a.jsx)(i.A, { users: ep, maxUsers: 10 }),
                        }),
                        null != em &&
                            (0, a.jsx)(j.D, {
                                label: W.intl.string(K.default.PACPOV),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: Z._c,
                                    children: [
                                        (0, a.jsx)(I.A, { game: em, size: I.M.XXSMALL, className: Z.Z9 }),
                                        (0, a.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: Z.lR,
                                            children: em?.name ?? eo.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != eg &&
                            (0, a.jsx)(j.D, {
                                label: W.intl.string(W.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: Z._c,
                                    children: [
                                        (0, a.jsx)(M.Ay, { guild: eg, iconSize: 16, className: Z.Z9 }),
                                        (0, a.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: Z.lR,
                                            children: eg.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != ej &&
                            null != eC &&
                            (0, a.jsx)(j.D, {
                                label: W.intl.string(W.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: Z._c,
                                    children: [
                                        (0, a.jsx)(eC, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: Z.Z9,
                                        }),
                                        (0, a.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: Z.lR,
                                            children: eb,
                                        }),
                                    ],
                                }),
                            }),
                        null != eo.activity &&
                            (null != eo.activity.state || null != eo.activity.details) &&
                            (0, a.jsx)(j.D, {
                                label: W.intl.string(W.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, a.jsx)(b.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [eo.activity.state, eo.activity.details].filter(Boolean).join(" \u203A "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                className: Z.G3,
                children: (0, a.jsx)(r.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: ec
                        ? (0, a.jsx)(C.$, {
                              loading: eh,
                              disabled: eh,
                              variant: "primary",
                              onClick: () =>
                                  ef({
                                      clips: [Q()],
                                      onShareComplete: () => {
                                          (U?.(), J());
                                      },
                                  }),
                              text: W.intl.string(W.t["R3BPH+"]),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(C.$, {
                                      loading: eh,
                                      disabled: eh,
                                      variant: "secondary",
                                      icon: y.PlusLargeIcon,
                                      iconPosition: "start",
                                      onClick: ey,
                                      text: W.intl.string(K.default.HH4Tjj),
                                  }),
                                  (0, a.jsx)(C.$, {
                                      loading: eh,
                                      disabled: eh,
                                      variant: "primary",
                                      icon: w.ShareIcon,
                                      iconPosition: "start",
                                      onClick: () => ef({ clips: [Q()] }),
                                      text: W.intl.string(W.t.RDE0Sc),
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
