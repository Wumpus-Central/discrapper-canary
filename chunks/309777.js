l.d(t, { A: () => F });
var n = l(627968),
    a = l(64700),
    i = l(311907),
    s = l(342952),
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
    z = l(794905),
    V = l(429364),
    _ = l(696016),
    H = l(16590),
    $ = l(985018),
    B = l(567282);
function F(e) {
    let { clip: t, channelId: F, onClose: K } = e,
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
            setClipName: en,
            isTemporary: ea,
            setIsTemporary: ei,
        } = (0, V.T)(),
        es = (0, N.h)(t.applicationId),
        er = (0, i.bG)([O.A], () => O.A.isClipExporting(t.id)),
        { onShareClick: ed } = (0, z.A)(F),
        eo = (0, i.bG)([L.A], () => L.A.isDeveloper),
        ec = (0, G.h)(t),
        eu = a.useCallback(async () => {
            await (0, U.w7)(t.id), ei(!1);
        }, [t.id, ei]),
        em = (0, i.yK)([R.default], () => t.users.map(R.default.getUser).filter(D.Vq)),
        eh = (0, i.bG)([M.A], () => (t.version >= 3 && null != t.guildId ? M.A.getGuild(t.guildId) : null)),
        ep = (0, i.bG)([S.A], () => (t.version >= 3 && null != t.channelId ? S.A.getChannel(t.channelId) : null)),
        ef = (0, E.Ay)(ep),
        ev = null != ep ? (0, w.gU)(ep, eh) : null;
    return (0, n.jsxs)("div", {
        className: B.XV,
        children: [
            (0, n.jsxs)("div", {
                className: B.eW,
                children: [
                    (0, n.jsx)("div", {
                        className: B.VW,
                        children: (0, n.jsx)(d.D, {
                            variant: "heading-lg/semibold",
                            color: "text-default",
                            className: B.qd,
                            children: $.intl.string(H.default["snNYS+"]),
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: B.Pz,
                        children:
                            eo &&
                            (0, n.jsx)(o.K, {
                                onClick: function () {
                                    (0, r.openModalLazy)(
                                        async () => {
                                            let { default: e } = await l.e("10000").then(l.bind(l, 224883));
                                            return (l) => (0, n.jsx)(e, { ...l, clip: t });
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
            (0, n.jsx)(u.Ip, {
                className: B.Md,
                children: (0, n.jsxs)(m.n, {
                    children: [
                        ea &&
                            (0, n.jsx)(h.w, {
                                type: "info",
                                children: (0, n.jsxs)(p.B, {
                                    gap: 8,
                                    children: [
                                        (0, n.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            children: $.intl.string($.t.EkUv4u),
                                        }),
                                        (0, n.jsx)(v.$, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: eu,
                                            text: $.intl.string($.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, n.jsx)(g.k, {
                            label: $.intl.string($.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? en(void 0) : en(e);
                            },
                            value: el,
                            minLength: _.U_,
                            maxLength: _.mk,
                            placeholder: ec,
                        }),
                        !Z &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(x.A, { label: $.intl.string($.t.GnQui9), checked: q, onChange: W }),
                                    (0, n.jsx)(x.A, { label: $.intl.string($.t["5mVOCb"]), checked: X, onChange: Y }),
                                    (0, n.jsx)(x.A, { label: $.intl.string($.t["8K7Ges"]), checked: J, onChange: ee }),
                                ],
                            }),
                        (0, n.jsx)(j.D, {
                            label: $.intl.string($.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, n.jsx)(f.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, T.mk)(new Date(t.createdAt)),
                            }),
                        }),
                        (0, n.jsx)(j.D, {
                            label: $.intl.string($.t.WTozwe),
                            layout: "horizontal",
                            children: (0, n.jsx)(s.A, { users: em, maxUsers: 10 }),
                        }),
                        null != es &&
                            (0, n.jsx)(j.D, {
                                label: $.intl.string(H.default.PACPOV),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: B._c,
                                    children: [
                                        (0, n.jsx)(k.A, { game: es, size: k.M.XXSMALL, className: B.Z9 }),
                                        (0, n.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: B.lR,
                                            children: es?.name ?? t.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != eh &&
                            (0, n.jsx)(j.D, {
                                label: $.intl.string($.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: B._c,
                                    children: [
                                        (0, n.jsx)(I.Ay, { guild: eh, iconSize: 16, className: B.Z9 }),
                                        (0, n.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: B.lR,
                                            children: eh.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != ep &&
                            null != ev &&
                            (0, n.jsx)(j.D, {
                                label: $.intl.string($.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: B._c,
                                    children: [
                                        (0, n.jsx)(ev, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: B.Z9,
                                        }),
                                        (0, n.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: B.lR,
                                            children: ef,
                                        }),
                                    ],
                                }),
                            }),
                        t.version >= 3 &&
                            null != t.activity &&
                            (null != t.activity.state || null != t.activity.details) &&
                            (0, n.jsx)(j.D, {
                                label: $.intl.string($.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, n.jsx)(f.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [t.activity.state, t.activity.details].filter(Boolean).join(" › "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, n.jsx)("div", {
                className: B.G3,
                children: (0, n.jsxs)(b.e, {
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, n.jsx)(v.$, {
                            loading: er,
                            disabled: er,
                            variant: "primary",
                            icon: C.l,
                            iconPosition: "start",
                            onClick: () => ed({ clips: [Q()] }),
                            text: $.intl.string($.t.RDE0Sc),
                        }),
                        (0, n.jsx)(o.K, {
                            "aria-label": $.intl.string($.t.PdRCRg),
                            loading: er,
                            disabled: er,
                            variant: "secondary",
                            onClick: function (e) {
                                et(),
                                    (0, A.L3)(e, async () => {
                                        let { default: e } = await l.e("80628").then(l.bind(l, 183903));
                                        return (t) =>
                                            (0, n.jsx)(e, { ...t, clips: [Q()], channelId: F, onAfterDelete: K });
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
