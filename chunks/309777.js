l.d(t, { A: () => w });
var a = l(627968),
    n = l(64700),
    s = l(311907),
    i = l(342952),
    r = l(397927),
    o = l(442433),
    u = l(429913),
    c = l(713654),
    d = l(769015),
    m = l(145497),
    h = l(734057),
    p = l(540999),
    f = l(71393),
    g = l(287809),
    v = l(405269),
    x = l(403362),
    b = l(661191),
    j = l(274372),
    C = l(372684),
    N = l(399925),
    k = l(718812),
    y = l(794905),
    E = l(429364),
    A = l(696016),
    S = l(985018),
    I = l(919753);
function w(e) {
    let { clip: t, channelId: w, onClose: T } = e,
        L = t.type === C.nQ.SCREENSHOT,
        {
            getEditedClip: R,
            voiceAudioEnabled: M,
            setVoiceAudioEnabled: O,
            applicationAudioEnabled: U,
            setApplicationAudioEnabled: D,
            soundboardAudioEnabled: $,
            setSoundboardAudioEnabled: P,
            pause: z,
            clipName: G,
            setClipName: B,
            isTemporary: _,
            setIsTemporary: K,
        } = (0, E.T)(),
        V = (0, u.h)(t.applicationId),
        F = (0, s.bG)([j.A], () => j.A.isClipExporting(t.id)),
        { onShareClick: W } = (0, y.A)(w),
        H = (0, s.bG)([p.A], () => p.A.isDeveloper),
        J = (0, k.h)(t),
        X = n.useCallback(async () => {
            await (0, N.w7)(t.id), K(!1);
        }, [t.id, K]),
        q = (0, s.yK)([g.default], () => t.users.map(g.default.getUser).filter(x.Vq)),
        Q = n.useMemo(() => new Date(b.default.extractTimestamp(t.id)), [t.id]),
        Y = (0, s.bG)([f.A], () => (t.version >= 3 && null != t.guildId ? f.A.getGuild(t.guildId) : null)),
        Z = (0, s.bG)([h.A], () => (t.version >= 3 && null != t.channelId ? h.A.getChannel(t.channelId) : null)),
        ee = null != Z ? (0, c.gU)(Z, Y) : null;
    return (0, a.jsxs)("div", {
        className: I.XV,
        children: [
            (0, a.jsxs)("div", {
                className: I.eW,
                children: [
                    (0, a.jsxs)("div", {
                        className: I.VW,
                        children: [
                            (0, a.jsx)(d.A, { game: V, size: d.M.XSMALL }),
                            (0, a.jsx)(r.Heading, {
                                variant: "heading-md/medium",
                                color: "text-default",
                                className: I.qd,
                                children: V?.name ?? t.applicationName,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: I.Pz,
                        children: [
                            H &&
                                (0, a.jsx)(r.K0, {
                                    onClick: function () {
                                        (0, r.mMO)(
                                            async () => {
                                                let { default: e } = await l.e("10000").then(l.bind(l, 224883));
                                                return (l) => (0, a.jsx)(e, { ...l, clip: t });
                                            },
                                            { stackingBehavior: "stack" },
                                        );
                                    },
                                    icon: r.Q5O,
                                    size: "sm",
                                    variant: "icon-only",
                                    "aria-label": "Debug Info",
                                }),
                            (0, a.jsx)(r.K0, {
                                onClick: T,
                                icon: r.d$L,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": S.intl.string(S.t.cpT0Cq),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(r.IpV, {
                className: I.Md,
                children: (0, a.jsxs)(r.nVY, {
                    children: [
                        _ &&
                            (0, a.jsx)(r.wx6, {
                                type: "info",
                                children: (0, a.jsxs)(r.BJc, {
                                    gap: 8,
                                    children: [
                                        (0, a.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            children: S.intl.string(S.t.EkUv4u),
                                        }),
                                        (0, a.jsx)(r.Button, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: X,
                                            text: S.intl.string(S.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, a.jsx)(r.ksK, {
                            label: S.intl.string(S.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? B(void 0) : B(e);
                            },
                            value: G,
                            minLength: A.U_,
                            maxLength: A.mk,
                            placeholder: J,
                        }),
                        !L &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(r.Ad5, { label: S.intl.string(S.t.GnQui9), checked: U, onChange: D }),
                                    (0, a.jsx)(r.Ad5, { label: S.intl.string(S.t["5mVOCb"]), checked: M, onChange: O }),
                                    (0, a.jsx)(r.Ad5, { label: S.intl.string(S.t["8K7Ges"]), checked: $, onChange: P }),
                                ],
                            }),
                        (0, a.jsx)(r.D0$, {
                            label: S.intl.string(S.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, v.mk)(Q),
                            }),
                        }),
                        (0, a.jsx)(r.D0$, {
                            label: S.intl.string(S.t.WTozwe),
                            layout: "horizontal",
                            children: (0, a.jsx)(i.A, { users: q, maxUsers: 10 }),
                        }),
                        null != Y &&
                            (0, a.jsx)(r.D0$, {
                                label: S.intl.string(S.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: I._c,
                                    children: [
                                        (0, a.jsx)(m.Ay, { guild: Y, iconSize: 16 }),
                                        (0, a.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: Y.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != Z &&
                            null != ee &&
                            (0, a.jsx)(r.D0$, {
                                label: S.intl.string(S.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: I._c,
                                    children: [
                                        (0, a.jsx)(ee, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                        }),
                                        (0, a.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: Z.name,
                                        }),
                                    ],
                                }),
                            }),
                        t.version >= 3 &&
                            null != t.activity &&
                            (null != t.activity.state || null != t.activity.details) &&
                            (0, a.jsx)(r.D0$, {
                                label: S.intl.string(S.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [t.activity.state, t.activity.details].filter(Boolean).join(" › "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                className: I.G3,
                children: (0, a.jsxs)(r.ButtonGroup, {
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, a.jsx)(r.Button, {
                            loading: F,
                            disabled: F,
                            variant: "primary",
                            icon: r.liv,
                            iconPosition: "start",
                            onClick: () => W({ clips: [R()] }),
                            text: S.intl.string(S.t.RDE0Sc),
                        }),
                        (0, a.jsx)(r.K0, {
                            "aria-label": S.intl.string(S.t.PdRCRg),
                            loading: F,
                            disabled: F,
                            variant: "secondary",
                            onClick: function (e) {
                                z(),
                                    (0, o.L3)(e, async () => {
                                        let { default: e } = await l.e("80628").then(l.bind(l, 183903));
                                        return (t) =>
                                            (0, a.jsx)(e, { ...t, clips: [R()], channelId: w, onAfterDelete: T });
                                    });
                            },
                            icon: r.jNK,
                        }),
                    ],
                }),
            }),
        ],
    });
}
