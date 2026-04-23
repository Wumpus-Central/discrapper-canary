l.d(t, { A: () => B });
var a = l(627968),
    n = l(64700),
    s = l(311907),
    i = l(342952),
    r = l(192308),
    d = l(534514),
    o = l(408278),
    c = l(92446),
    u = l(573613),
    m = l(270003),
    h = l(683071),
    p = l(331322),
    f = l(834730),
    v = l(821609),
    g = l(292666),
    x = l(553270),
    j = l(452027),
    b = l(825484),
    C = l(405433),
    y = l(365199),
    A = l(442433),
    N = l(429913),
    E = l(47167),
    w = l(713654),
    k = l(769015),
    I = l(145497),
    S = l(734057),
    L = l(540999),
    M = l(71393),
    R = l(287809),
    T = l(405269),
    D = l(403362),
    O = l(274372),
    P = l(372684),
    U = l(399925),
    G = l(718812),
    V = l(794905),
    _ = l(429364),
    z = l(696016),
    H = l(16590),
    $ = l(985018),
    F = l(567282);
function B(e) {
    let { clip: t, channelId: B, onClose: K } = e,
        Z = t.type === P.nQ.SCREENSHOT,
        {
            getEditedClip: Q,
            voiceAudioEnabled: X,
            setVoiceAudioEnabled: Y,
            applicationAudioEnabled: q,
            setApplicationAudioEnabled: W,
            soundboardAudioEnabled: J,
            setSoundboardAudioEnabled: ee,
            pause: et,
            clipName: el,
            setClipName: ea,
            isTemporary: en,
            setIsTemporary: es,
        } = (0, _.T)(),
        ei = (0, N.h)(t.applicationId),
        er = (0, s.bG)([O.A], () => O.A.isClipExporting(t.id)),
        { onShareClick: ed } = (0, V.A)(B),
        eo = (0, s.bG)([L.A], () => L.A.isDeveloper),
        ec = (0, G.h)(t),
        eu = n.useCallback(async () => {
            await (0, U.w7)(t.id), es(!1);
        }, [t.id, es]),
        em = (0, s.yK)([R.default], () => t.users.map(R.default.getUser).filter(D.Vq)),
        eh = (0, s.bG)([M.A], () => (t.version >= 3 && null != t.guildId ? M.A.getGuild(t.guildId) : null)),
        ep = (0, s.bG)([S.A], () => (t.version >= 3 && null != t.channelId ? S.A.getChannel(t.channelId) : null)),
        ef = (0, E.Ay)(ep),
        ev = null != ep ? (0, w.gU)(ep, eh) : null;
    return (0, a.jsxs)("div", {
        className: F.XV,
        children: [
            (0, a.jsxs)("div", {
                className: F.eW,
                children: [
                    (0, a.jsx)("div", {
                        className: F.VW,
                        children: (0, a.jsx)(d.D, {
                            variant: "heading-lg/semibold",
                            color: "text-default",
                            className: F.qd,
                            children: $.intl.string(H.default["snNYS+"]),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: F.Pz,
                        children:
                            eo &&
                            (0, a.jsx)(o.K, {
                                onClick: function () {
                                    (0, r.openModalLazy)(
                                        async () => {
                                            let { default: e } = await l.e("10000").then(l.bind(l, 224883));
                                            return (l) => (0, a.jsx)(e, { ...l, clip: t });
                                        },
                                        { stackingBehavior: "stack" },
                                    );
                                },
                                icon: c.Q,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": "Debug Info",
                            }),
                    }),
                ],
            }),
            (0, a.jsx)(u.Ip, {
                className: F.Md,
                children: (0, a.jsxs)(m.n, {
                    children: [
                        en &&
                            (0, a.jsx)(h.w, {
                                type: "info",
                                children: (0, a.jsxs)(p.B, {
                                    gap: 8,
                                    children: [
                                        (0, a.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            children: $.intl.string($.t.EkUv4u),
                                        }),
                                        (0, a.jsx)(v.$, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: eu,
                                            text: $.intl.string($.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, a.jsx)(g.k, {
                            label: $.intl.string($.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? ea(void 0) : ea(e);
                            },
                            value: el,
                            minLength: z.U_,
                            maxLength: z.mk,
                            placeholder: ec,
                        }),
                        !Z &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(x.A, { label: $.intl.string($.t.GnQui9), checked: q, onChange: W }),
                                    (0, a.jsx)(x.A, { label: $.intl.string($.t["5mVOCb"]), checked: X, onChange: Y }),
                                    (0, a.jsx)(x.A, { label: $.intl.string($.t["8K7Ges"]), checked: J, onChange: ee }),
                                ],
                            }),
                        (0, a.jsx)(j.D, {
                            label: $.intl.string($.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, a.jsx)(f.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, T.mk)(new Date(t.createdAt)),
                            }),
                        }),
                        (0, a.jsx)(j.D, {
                            label: $.intl.string($.t.WTozwe),
                            layout: "horizontal",
                            children: (0, a.jsx)(i.A, { users: em, maxUsers: 10 }),
                        }),
                        null != ei &&
                            (0, a.jsx)(j.D, {
                                label: $.intl.string(H.default.PACPOV),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: F._c,
                                    children: [
                                        (0, a.jsx)(k.A, { game: ei, size: k.M.XXSMALL, className: F.Z9 }),
                                        (0, a.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: F.lR,
                                            children: ei?.name ?? t.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != eh &&
                            (0, a.jsx)(j.D, {
                                label: $.intl.string($.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: F._c,
                                    children: [
                                        (0, a.jsx)(I.Ay, { guild: eh, iconSize: 16, className: F.Z9 }),
                                        (0, a.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: F.lR,
                                            children: eh.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != ep &&
                            null != ev &&
                            (0, a.jsx)(j.D, {
                                label: $.intl.string($.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: F._c,
                                    children: [
                                        (0, a.jsx)(ev, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: F.Z9,
                                        }),
                                        (0, a.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: F.lR,
                                            children: ef,
                                        }),
                                    ],
                                }),
                            }),
                        t.version >= 3 &&
                            null != t.activity &&
                            (null != t.activity.state || null != t.activity.details) &&
                            (0, a.jsx)(j.D, {
                                label: $.intl.string($.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, a.jsx)(f.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [t.activity.state, t.activity.details].filter(Boolean).join(" › "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                className: F.G3,
                children: (0, a.jsxs)(b.e, {
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, a.jsx)(v.$, {
                            loading: er,
                            disabled: er,
                            variant: "primary",
                            icon: C.l,
                            iconPosition: "start",
                            onClick: () => ed({ clips: [Q()] }),
                            text: $.intl.string($.t.RDE0Sc),
                        }),
                        (0, a.jsx)(o.K, {
                            "aria-label": $.intl.string($.t.PdRCRg),
                            loading: er,
                            disabled: er,
                            variant: "secondary",
                            onClick: function (e) {
                                et(),
                                    (0, A.L3)(e, async () => {
                                        let { default: e } = await l.e("80628").then(l.bind(l, 183903));
                                        return (t) =>
                                            (0, a.jsx)(e, { ...t, clips: [Q()], channelId: B, onAfterDelete: K });
                                    });
                            },
                            icon: y.j,
                        }),
                    ],
                }),
            }),
        ],
    });
}
