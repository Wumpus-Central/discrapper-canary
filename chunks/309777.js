l.d(t, { A: () => K });
var a = l(627968),
    n = l(64700),
    s = l(17928),
    i = l(342952),
    r = l(192308),
    c = l(534514),
    u = l(408278),
    o = l(92446),
    d = l(364522),
    m = l(270003),
    h = l(683071),
    f = l(331322),
    p = l(834730),
    v = l(821609),
    x = l(292666),
    g = l(553270),
    j = l(452027),
    b = l(825484),
    N = l(405433),
    C = l(365199),
    E = l(442433),
    k = l(429913),
    y = l(47167),
    A = l(713654),
    w = l(137177),
    R = l(145497),
    T = l(734057),
    L = l(540999),
    I = l(71393),
    S = l(287809),
    M = l(58703),
    O = l(403362),
    D = l(274372),
    U = l(372684),
    z = l(607814),
    P = l(718812),
    G = l(794905),
    $ = l(429364),
    _ = l(696016),
    B = l(16590),
    V = l(375708),
    F = l(567282);
function K(e) {
    let { channelId: t, onEdit: K, onClose: H } = e,
        {
            getEditedClip: Z,
            voiceAudioEnabled: J,
            setVoiceAudioEnabled: W,
            applicationAudioEnabled: X,
            setApplicationAudioEnabled: Q,
            soundboardAudioEnabled: q,
            setSoundboardAudioEnabled: Y,
            pause: ee,
            clipName: et,
            setClipName: el,
            isTemporary: ea,
            setIsTemporary: en,
            clip: es,
            editOnly: ei,
        } = (0, $.T)(),
        er = es.type === U.nQ.SCREENSHOT,
        ec = (0, k.h)(es.applicationId),
        eu = (0, s.bG)([D.A], () => D.A.isClipExporting(es.id)),
        { onShareClick: eo } = (0, G.A)(t),
        ed = (0, s.bG)([L.A], () => L.A.isDeveloper),
        em = (0, P.h)(es),
        eh = n.useCallback(async () => {
            await (0, z.w7)(es.id), en(!1);
        }, [es.id, en]),
        ef = (0, s.yK)([S.default], () => es.users.map(S.default.getUser).filter(O.Vq)),
        ep = (0, s.bG)([I.A], () => (es.version >= 3 && null != es.guildId ? I.A.getGuild(es.guildId) : null)),
        ev = (0, s.bG)([T.A], () => (es.version >= 3 && null != es.channelId ? T.A.getChannel(es.channelId) : null)),
        ex = (0, y.Ay)(ev),
        eg = null != ev ? (0, A.gU)(ev, ep) : null;
    return (0, a.jsxs)("div", {
        className: F.XV,
        children: [
            (0, a.jsxs)("div", {
                className: F.eW,
                children: [
                    (0, a.jsx)("div", {
                        className: F.VW,
                        children: (0, a.jsx)(c.D, {
                            variant: "heading-lg/semibold",
                            color: "text-default",
                            className: F.qd,
                            children: V.intl.string(B.default["snNYS+"]),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: F.Pz,
                        children:
                            ed &&
                            (0, a.jsx)(u.K, {
                                onClick: function () {
                                    (0, r.openModalLazy)(
                                        async () => {
                                            let { default: e } = await l.e("10000").then(l.bind(l, 224883));
                                            return (t) => (0, a.jsx)(e, { ...t, clip: es });
                                        },
                                        { stackingBehavior: "stack" },
                                    );
                                },
                                icon: o.Q,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": "Debug Info",
                            }),
                    }),
                ],
            }),
            (0, a.jsx)(d.Ip, {
                className: F.Md,
                children: (0, a.jsxs)(m.n, {
                    children: [
                        ea &&
                            (0, a.jsx)(h.w, {
                                type: "info",
                                children: (0, a.jsxs)(f.B, {
                                    gap: 8,
                                    children: [
                                        (0, a.jsx)(p.E, {
                                            variant: "text-sm/normal",
                                            children: V.intl.string(V.t.EkUv4u),
                                        }),
                                        (0, a.jsx)(v.$, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: eh,
                                            text: V.intl.string(V.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, a.jsx)(x.k, {
                            label: V.intl.string(V.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? el(void 0) : el(e);
                            },
                            value: et,
                            minLength: _.U_,
                            maxLength: _.mk,
                            placeholder: em,
                        }),
                        !er &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(g.A, { label: V.intl.string(V.t.GnQui9), checked: X, onChange: Q }),
                                    (0, a.jsx)(g.A, { label: V.intl.string(V.t["5mVOCb"]), checked: J, onChange: W }),
                                    (0, a.jsx)(g.A, { label: V.intl.string(V.t["8K7Ges"]), checked: q, onChange: Y }),
                                ],
                            }),
                        (0, a.jsx)(j.D, {
                            label: V.intl.string(V.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, a.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, M.mk)(new Date(es.createdAt)),
                            }),
                        }),
                        (0, a.jsx)(j.D, {
                            label: V.intl.string(V.t.WTozwe),
                            layout: "horizontal",
                            children: (0, a.jsx)(i.A, { users: ef, maxUsers: 10 }),
                        }),
                        null != ec &&
                            (0, a.jsx)(j.D, {
                                label: V.intl.string(B.default.PACPOV),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: F._c,
                                    children: [
                                        (0, a.jsx)(w.A, { game: ec, size: w.M.XXSMALL, className: F.Z9 }),
                                        (0, a.jsx)(p.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: F.lR,
                                            children: ec?.name ?? es.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != ep &&
                            (0, a.jsx)(j.D, {
                                label: V.intl.string(V.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: F._c,
                                    children: [
                                        (0, a.jsx)(R.Ay, { guild: ep, iconSize: 16, className: F.Z9 }),
                                        (0, a.jsx)(p.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: F.lR,
                                            children: ep.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != ev &&
                            null != eg &&
                            (0, a.jsx)(j.D, {
                                label: V.intl.string(V.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: F._c,
                                    children: [
                                        (0, a.jsx)(eg, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: F.Z9,
                                        }),
                                        (0, a.jsx)(p.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: F.lR,
                                            children: ex,
                                        }),
                                    ],
                                }),
                            }),
                        es.version >= 3 &&
                            null != es.activity &&
                            (null != es.activity.state || null != es.activity.details) &&
                            (0, a.jsx)(j.D, {
                                label: V.intl.string(V.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, a.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [es.activity.state, es.activity.details].filter(Boolean).join(" \u203A "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                className: F.G3,
                children: (0, a.jsx)(b.e, {
                    direction: "horizontal",
                    fullWidth: !0,
                    children: ei
                        ? (0, a.jsx)(v.$, {
                              loading: eu,
                              disabled: eu,
                              variant: "primary",
                              onClick: () =>
                                  eo({
                                      clips: [Z()],
                                      onShareComplete: () => {
                                          K?.(), H();
                                      },
                                  }),
                              text: V.intl.string(V.t["R3BPH+"]),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(v.$, {
                                      loading: eu,
                                      disabled: eu,
                                      variant: "primary",
                                      icon: N.l,
                                      iconPosition: "start",
                                      onClick: () => eo({ clips: [Z()] }),
                                      text: V.intl.string(V.t.RDE0Sc),
                                  }),
                                  (0, a.jsx)(u.K, {
                                      "aria-label": V.intl.string(V.t.PdRCRg),
                                      loading: eu,
                                      disabled: eu,
                                      variant: "secondary",
                                      onClick: function (e) {
                                          ee(),
                                              (0, E.L3)(e, async () => {
                                                  let { default: e } = await Promise.all([
                                                      l.e("66900"),
                                                      l.e("98793"),
                                                      l.e("73500"),
                                                      l.e("18489"),
                                                      l.e("36926"),
                                                      l.e("69006"),
                                                      l.e("20342"),
                                                      l.e("80628"),
                                                  ]).then(l.bind(l, 183903));
                                                  return (l) =>
                                                      (0, a.jsx)(e, {
                                                          ...l,
                                                          clips: [Z()],
                                                          channelId: t,
                                                          onAfterDelete: H,
                                                      });
                                              });
                                      },
                                      icon: C.j,
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
