l.d(t, { A: () => J });
var n = l(477900);
l(582128);
var a = l(17928),
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
    N = l(405433),
    E = l(442433),
    w = l(793574),
    k = l(688810),
    A = l(429913),
    L = l(47167),
    R = l(174355),
    I = l(769015),
    T = l(145497),
    M = l(734057),
    S = l(540999),
    D = l(71393),
    O = l(287809),
    P = l(58703),
    _ = l(403362),
    z = l(915725),
    U = l(539572),
    $ = l(253799),
    B = l(105009),
    G = l(645655),
    H = l(352527),
    V = l(718812),
    K = l(362081),
    F = l(696016);
l(600253);
var Z = l(711918),
    W = l(375708),
    X = l(954634);
let Y = $.I.difference(new Set([$.C.EXPORT_TO_SOUNDBOARD, $.C.FAVORITE, $.C.DELETE, $.C.SHARE, $.C.EDIT]));
function J(e) {
    let { channelId: t, onEdit: $, onClose: J } = e,
        {
            getEditedClip: Q,
            voiceAudioEnabled: q,
            setVoiceAudioEnabled: ee,
            applicationAudioEnabled: et,
            setApplicationAudioEnabled: el,
            soundboardAudioEnabled: en,
            setSoundboardAudioEnabled: ea,
            pause: ei,
            clipName: es,
            setClipName: er,
            clip: eo,
            editOnly: ec,
        } = (0, K.T)(),
        { analyticsLocations: eu } = (0, k.Ay)(w.A.CLIPS_EDITOR),
        ed = eo.type === F.nQ.SCREENSHOT,
        em = (0, A.h)(eo.applicationId),
        eh = (0, a.bG)([z.Ay], () => z.Ay.isClipExporting(eo.id)),
        { onShareClick: ef } = (0, H.A)(t),
        ex = (0, a.bG)([S.A], () => S.A.isDeveloper),
        ev = (0, V.h)(eo),
        ep = (0, a.yK)([O.default], () => eo.users.map(O.default.getUser).filter(_.Vq)),
        eg = (0, a.bG)([D.A], () => (null != eo.guildId ? D.A.getGuild(eo.guildId) : null)),
        ej = (0, a.bG)([M.A], () => (null != eo.channelId ? M.A.getChannel(eo.channelId) : null)),
        eb = (0, L.Ay)(ej),
        eC = null != ej ? (0, R.gU)(ej, eg) : null;
    async function ey() {
        await (0, B.n)(Q(), { analyticsLocations: eu, channelId: t });
    }
    return (0, n.jsxs)("div", {
        className: X.XV,
        children: [
            (0, n.jsx)("div", {
                className: X.eW,
                children: (0, n.jsxs)(r.e, {
                    wrap: !1,
                    size: "sm",
                    align: "center",
                    justify: "end",
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, n.jsx)(o.K, {
                            onClick: () => (0, U.XK)(eo),
                            variant: "icon-only",
                            "aria-label": eo.isFavorite
                                ? W.intl.string(Z.default.ihBfyA)
                                : W.intl.string(Z.default.IZsalP),
                            icon: eo.isFavorite ? c.StarIcon : u.y,
                        }),
                        (0, n.jsx)(o.K, {
                            onClick: (e) => (0, G.A)(e, { clips: [eo], onAfterDelete: J }),
                            variant: "icon-only",
                            "aria-label": W.intl.string(W.t.oyYWHE),
                            icon: d.TrashIcon,
                        }),
                        (0, n.jsx)(o.K, {
                            onClick: function (e) {
                                ei(),
                                    (0, E.L3)(e, async () => {
                                        let { default: e } = await Promise.all([
                                            l.e("316123"),
                                            l.e("221107"),
                                            l.e("98900"),
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
                                                analyticsLocations: eu,
                                                clips: [Q()],
                                                channelId: t,
                                                onAfterDelete: J,
                                                displayConfiguration: Y,
                                            });
                                    });
                            },
                            variant: "icon-only",
                            "aria-label": W.intl.string(W.t.PdRCRg),
                            icon: m.MoreHorizontalIcon,
                        }),
                        ex &&
                            (0, n.jsx)(o.K, {
                                onClick: function () {
                                    (0, s.openModalLazy)(
                                        async () => {
                                            let { default: e } = await l.e("310000").then(l.bind(l, 224883));
                                            return (t) => (0, n.jsx)(e, { ...t, clip: eo });
                                        },
                                        { stackingBehavior: "stack" },
                                    );
                                },
                                icon: h.BugIcon,
                                variant: "icon-only",
                                "aria-label": "Debug Info",
                            }),
                        (0, n.jsx)(o.K, {
                            onClick: J,
                            icon: f.XLargeIcon,
                            variant: "icon-only",
                            "aria-label": W.intl.string(W.t.cpT0Cq),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(x.Ip, {
                className: X.Md,
                children: (0, n.jsxs)(v.n, {
                    children: [
                        (0, n.jsx)(p.k, {
                            label: W.intl.string(W.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? er(void 0) : er(e);
                            },
                            value: es,
                            minLength: F.U_,
                            maxLength: 200,
                            placeholder: ev,
                        }),
                        !ed &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(g.A, { label: W.intl.string(W.t.GnQui9), checked: et, onChange: el }),
                                    (0, n.jsx)(g.A, { label: W.intl.string(W.t["5mVOCb"]), checked: q, onChange: ee }),
                                    (0, n.jsx)(g.A, { label: W.intl.string(W.t["8K7Ges"]), checked: en, onChange: ea }),
                                ],
                            }),
                        (0, n.jsx)(j.D, {
                            label: W.intl.string(W.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, n.jsx)(b.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, P.mk)(new Date(eo.createdAt)),
                            }),
                        }),
                        (0, n.jsx)(j.D, {
                            label: W.intl.string(W.t.WTozwe),
                            layout: "horizontal",
                            children: (0, n.jsx)(i.A, { users: ep, maxUsers: 10 }),
                        }),
                        null != em &&
                            (0, n.jsx)(j.D, {
                                label: W.intl.string(Z.default.PACPOV),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: X._c,
                                    children: [
                                        (0, n.jsx)(I.A, { game: em, size: I.M.XXSMALL, className: X.Z9 }),
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: X.lR,
                                            children: em?.name ?? eo.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != eg &&
                            (0, n.jsx)(j.D, {
                                label: W.intl.string(W.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: X._c,
                                    children: [
                                        (0, n.jsx)(T.Ay, { guild: eg, iconSize: 16, className: X.Z9 }),
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: X.lR,
                                            children: eg.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != ej &&
                            null != eC &&
                            (0, n.jsx)(j.D, {
                                label: W.intl.string(W.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: X._c,
                                    children: [
                                        (0, n.jsx)(eC, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: X.Z9,
                                        }),
                                        (0, n.jsx)(b.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: X.lR,
                                            children: eb,
                                        }),
                                    ],
                                }),
                            }),
                        null != eo.activity &&
                            (null != eo.activity.state || null != eo.activity.details) &&
                            (0, n.jsx)(j.D, {
                                label: W.intl.string(W.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, n.jsx)(b.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [eo.activity.state, eo.activity.details].filter(Boolean).join(" \u203A "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, n.jsx)("div", {
                className: X.G3,
                children: (0, n.jsx)(r.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: ec
                        ? (0, n.jsx)(C.$, {
                              loading: eh,
                              disabled: eh,
                              variant: "primary",
                              onClick: () =>
                                  ef({
                                      clips: [Q()],
                                      onShareComplete: () => {
                                          $?.(), J();
                                      },
                                  }),
                              text: W.intl.string(W.t["R3BPH+"]),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(C.$, {
                                      loading: eh,
                                      disabled: eh,
                                      variant: "secondary",
                                      icon: y.PlusLargeIcon,
                                      iconPosition: "start",
                                      onClick: ey,
                                      text: W.intl.string(Z.default.HH4Tjj),
                                  }),
                                  (0, n.jsx)(C.$, {
                                      loading: eh,
                                      disabled: eh,
                                      variant: "primary",
                                      icon: N.ShareIcon,
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
