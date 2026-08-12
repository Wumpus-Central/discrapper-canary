l.d(t, { A: () => Q });
var n = l(477900);
l(582128);
var a = l(17928),
    i = l(342952),
    s = l(192308),
    r = l(825484),
    c = l(408278),
    o = l(27232),
    u = l(505930),
    d = l(241326),
    m = l(365199),
    f = l(92446),
    h = l(972213),
    x = l(364522),
    v = l(270003),
    p = l(95477),
    g = l(553270),
    j = l(452027),
    C = l(834730),
    b = l(821609),
    y = l(663341),
    N = l(405433),
    E = l(442433),
    k = l(793574),
    w = l(688810),
    A = l(429913),
    R = l(47167),
    L = l(713654),
    T = l(769015),
    I = l(145497),
    M = l(734057),
    D = l(540999),
    S = l(71393),
    O = l(287809),
    P = l(58703),
    _ = l(403362),
    z = l(915725),
    U = l(539572),
    $ = l(253799),
    G = l(105009),
    B = l(645655),
    H = l(352527),
    V = l(718812),
    K = l(362081),
    F = l(696016);
l(600253);
var W = l(16590),
    X = l(375708),
    Z = l(954634);
let Y = $.I.difference(new Set([$.C.EXPORT_TO_SOUNDBOARD, $.C.FAVORITE, $.C.DELETE, $.C.SHARE, $.C.EDIT]));
function Q(e) {
    let { channelId: t, onEdit: $, onClose: Q } = e,
        {
            getEditedClip: J,
            voiceAudioEnabled: q,
            setVoiceAudioEnabled: ee,
            applicationAudioEnabled: et,
            setApplicationAudioEnabled: el,
            soundboardAudioEnabled: en,
            setSoundboardAudioEnabled: ea,
            pause: ei,
            clipName: es,
            setClipName: er,
            clip: ec,
            editOnly: eo,
        } = (0, K.T)(),
        { analyticsLocations: eu } = (0, w.Ay)(k.A.CLIPS_EDITOR),
        ed = ec.type === F.nQ.SCREENSHOT,
        em = (0, A.h)(ec.applicationId),
        ef = (0, a.bG)([z.Ay], () => z.Ay.isClipExporting(ec.id)),
        { onShareClick: eh } = (0, H.A)(t),
        ex = (0, a.bG)([D.A], () => D.A.isDeveloper),
        ev = (0, V.h)(ec),
        ep = (0, a.yK)([O.default], () => ec.users.map(O.default.getUser).filter(_.Vq)),
        eg = (0, a.bG)([S.A], () => (null != ec.guildId ? S.A.getGuild(ec.guildId) : null)),
        ej = (0, a.bG)([M.A], () => (null != ec.channelId ? M.A.getChannel(ec.channelId) : null)),
        eC = (0, R.Ay)(ej),
        eb = null != ej ? (0, L.gU)(ej, eg) : null;
    async function ey() {
        await (0, G.n)(J(), { analyticsLocations: eu, channelId: t });
    }
    return (0, n.jsxs)("div", {
        className: Z.XV,
        children: [
            (0, n.jsx)("div", {
                className: Z.eW,
                children: (0, n.jsxs)(r.e, {
                    wrap: !1,
                    size: "sm",
                    align: "center",
                    justify: "end",
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, n.jsx)(c.K, {
                            onClick: () => (0, U.XK)(ec),
                            variant: "icon-only",
                            "aria-label": ec.isFavorite
                                ? X.intl.string(W.default.ihBfyA)
                                : X.intl.string(W.default.IZsalP),
                            icon: ec.isFavorite ? o.G : u.y,
                        }),
                        (0, n.jsx)(c.K, {
                            onClick: (e) => (0, B.A)(e, { clips: [ec], onAfterDelete: Q }),
                            variant: "icon-only",
                            "aria-label": X.intl.string(X.t.oyYWHE),
                            icon: d.u,
                        }),
                        (0, n.jsx)(c.K, {
                            onClick: function (e) {
                                ei(),
                                    (0, E.L3)(e, async () => {
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
                                            l.e("69370"),
                                        ]).then(l.bind(l, 621953));
                                        return (l) =>
                                            (0, n.jsx)(e, {
                                                ...l,
                                                analyticsLocations: eu,
                                                clips: [J()],
                                                channelId: t,
                                                onAfterDelete: Q,
                                                displayConfiguration: Y,
                                            });
                                    });
                            },
                            variant: "icon-only",
                            "aria-label": X.intl.string(X.t.PdRCRg),
                            icon: m.j,
                        }),
                        ex &&
                            (0, n.jsx)(c.K, {
                                onClick: function () {
                                    (0, s.openModalLazy)(
                                        async () => {
                                            let { default: e } = await l.e("10000").then(l.bind(l, 224883));
                                            return (t) => (0, n.jsx)(e, { ...t, clip: ec });
                                        },
                                        { stackingBehavior: "stack" },
                                    );
                                },
                                icon: f.Q,
                                variant: "icon-only",
                                "aria-label": "Debug Info",
                            }),
                        (0, n.jsx)(c.K, {
                            onClick: Q,
                            icon: h.d,
                            variant: "icon-only",
                            "aria-label": X.intl.string(X.t.cpT0Cq),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)(x.Ip, {
                className: Z.Md,
                children: (0, n.jsxs)(v.n, {
                    children: [
                        (0, n.jsx)(p.k, {
                            label: X.intl.string(X.t.SJKc5n),
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
                                    (0, n.jsx)(g.A, { label: X.intl.string(X.t.GnQui9), checked: et, onChange: el }),
                                    (0, n.jsx)(g.A, { label: X.intl.string(X.t["5mVOCb"]), checked: q, onChange: ee }),
                                    (0, n.jsx)(g.A, { label: X.intl.string(X.t["8K7Ges"]), checked: en, onChange: ea }),
                                ],
                            }),
                        (0, n.jsx)(j.D, {
                            label: X.intl.string(X.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, n.jsx)(C.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, P.mk)(new Date(ec.createdAt)),
                            }),
                        }),
                        (0, n.jsx)(j.D, {
                            label: X.intl.string(X.t.WTozwe),
                            layout: "horizontal",
                            children: (0, n.jsx)(i.A, { users: ep, maxUsers: 10 }),
                        }),
                        null != em &&
                            (0, n.jsx)(j.D, {
                                label: X.intl.string(W.default.PACPOV),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: Z._c,
                                    children: [
                                        (0, n.jsx)(T.A, { game: em, size: T.M.XXSMALL, className: Z.Z9 }),
                                        (0, n.jsx)(C.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: Z.lR,
                                            children: em?.name ?? ec.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != eg &&
                            (0, n.jsx)(j.D, {
                                label: X.intl.string(X.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: Z._c,
                                    children: [
                                        (0, n.jsx)(I.Ay, { guild: eg, iconSize: 16, className: Z.Z9 }),
                                        (0, n.jsx)(C.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: Z.lR,
                                            children: eg.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != ej &&
                            null != eb &&
                            (0, n.jsx)(j.D, {
                                label: X.intl.string(X.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: Z._c,
                                    children: [
                                        (0, n.jsx)(eb, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: Z.Z9,
                                        }),
                                        (0, n.jsx)(C.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: Z.lR,
                                            children: eC,
                                        }),
                                    ],
                                }),
                            }),
                        null != ec.activity &&
                            (null != ec.activity.state || null != ec.activity.details) &&
                            (0, n.jsx)(j.D, {
                                label: X.intl.string(X.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, n.jsx)(C.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [ec.activity.state, ec.activity.details].filter(Boolean).join(" \u203A "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, n.jsx)("div", {
                className: Z.G3,
                children: (0, n.jsx)(r.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: eo
                        ? (0, n.jsx)(b.$, {
                              loading: ef,
                              disabled: ef,
                              variant: "primary",
                              onClick: () =>
                                  eh({
                                      clips: [J()],
                                      onShareComplete: () => {
                                          $?.(), Q();
                                      },
                                  }),
                              text: X.intl.string(X.t["R3BPH+"]),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(b.$, {
                                      loading: ef,
                                      disabled: ef,
                                      variant: "secondary",
                                      icon: y.p,
                                      iconPosition: "start",
                                      onClick: ey,
                                      text: X.intl.string(W.default.HH4Tjj),
                                  }),
                                  (0, n.jsx)(b.$, {
                                      loading: ef,
                                      disabled: ef,
                                      variant: "primary",
                                      icon: N.l,
                                      iconPosition: "start",
                                      onClick: () => eh({ clips: [J()] }),
                                      text: X.intl.string(X.t.RDE0Sc),
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
