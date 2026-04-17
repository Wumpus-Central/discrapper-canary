l.d(t, { A: () => L });
var n = l(627968),
    a = l(64700),
    i = l(311907),
    s = l(342952),
    r = l(397927),
    d = l(442433),
    o = l(429913),
    c = l(47167),
    u = l(713654),
    m = l(769015),
    h = l(145497),
    p = l(734057),
    x = l(540999),
    g = l(71393),
    f = l(287809),
    v = l(405269),
    j = l(403362),
    b = l(274372),
    C = l(372684),
    y = l(399925),
    A = l(718812),
    N = l(794905),
    E = l(429364),
    k = l(696016),
    I = l(16590),
    S = l(985018),
    w = l(567282);
function L(e) {
    let { clip: t, channelId: L, onClose: M } = e,
        T = t.type === C.nQ.SCREENSHOT,
        {
            getEditedClip: R,
            voiceAudioEnabled: D,
            setVoiceAudioEnabled: O,
            applicationAudioEnabled: P,
            setApplicationAudioEnabled: U,
            soundboardAudioEnabled: G,
            setSoundboardAudioEnabled: V,
            pause: z,
            clipName: H,
            setClipName: $,
            isTemporary: _,
            setIsTemporary: K,
        } = (0, E.T)(),
        B = (0, o.h)(t.applicationId),
        F = (0, i.bG)([b.A], () => b.A.isClipExporting(t.id)),
        { onShareClick: X } = (0, N.A)(L),
        Y = (0, i.bG)([x.A], () => x.A.isDeveloper),
        Q = (0, A.h)(t),
        q = a.useCallback(async () => {
            await (0, y.w7)(t.id), K(!1);
        }, [t.id, K]),
        W = (0, i.yK)([f.default], () => t.users.map(f.default.getUser).filter(j.Vq)),
        Z = (0, i.bG)([g.A], () => (t.version >= 3 && null != t.guildId ? g.A.getGuild(t.guildId) : null)),
        J = (0, i.bG)([p.A], () => (t.version >= 3 && null != t.channelId ? p.A.getChannel(t.channelId) : null)),
        ee = (0, c.Ay)(J),
        et = null != J ? (0, u.gU)(J, Z) : null;
    return (0, n.jsxs)("div", {
        className: w.XV,
        children: [
            (0, n.jsxs)("div", {
                className: w.eW,
                children: [
                    (0, n.jsx)("div", {
                        className: w.VW,
                        children: (0, n.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            color: "text-default",
                            className: w.qd,
                            children: S.intl.string(I.default["snNYS+"]),
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: w.Pz,
                        children:
                            Y &&
                            (0, n.jsx)(r.K0, {
                                onClick: function () {
                                    (0, r.mMO)(
                                        async () => {
                                            let { default: e } = await l.e("10000").then(l.bind(l, 224883));
                                            return (l) => (0, n.jsx)(e, { ...l, clip: t });
                                        },
                                        { stackingBehavior: "stack" },
                                    );
                                },
                                icon: r.Q5O,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": "Debug Info",
                            }),
                    }),
                ],
            }),
            (0, n.jsx)(r.IpV, {
                className: w.Md,
                children: (0, n.jsxs)(r.nVY, {
                    children: [
                        _ &&
                            (0, n.jsx)(r.wx6, {
                                type: "info",
                                children: (0, n.jsxs)(r.BJc, {
                                    gap: 8,
                                    children: [
                                        (0, n.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            children: S.intl.string(S.t.EkUv4u),
                                        }),
                                        (0, n.jsx)(r.Button, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: q,
                                            text: S.intl.string(S.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, n.jsx)(r.ksK, {
                            label: S.intl.string(S.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? $(void 0) : $(e);
                            },
                            value: H,
                            minLength: k.U_,
                            maxLength: k.mk,
                            placeholder: Q,
                        }),
                        !T &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(r.Ad5, { label: S.intl.string(S.t.GnQui9), checked: P, onChange: U }),
                                    (0, n.jsx)(r.Ad5, { label: S.intl.string(S.t["5mVOCb"]), checked: D, onChange: O }),
                                    (0, n.jsx)(r.Ad5, { label: S.intl.string(S.t["8K7Ges"]), checked: G, onChange: V }),
                                ],
                            }),
                        (0, n.jsx)(r.D0$, {
                            label: S.intl.string(S.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, n.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, v.mk)(new Date(t.createdAt)),
                            }),
                        }),
                        (0, n.jsx)(r.D0$, {
                            label: S.intl.string(S.t.WTozwe),
                            layout: "horizontal",
                            children: (0, n.jsx)(s.A, { users: W, maxUsers: 10 }),
                        }),
                        null != B &&
                            (0, n.jsx)(r.D0$, {
                                label: S.intl.string(I.default.PACPOV),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: w._c,
                                    children: [
                                        (0, n.jsx)(m.A, { game: B, size: m.M.XXSMALL, className: w.Z9 }),
                                        (0, n.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: w.lR,
                                            children: B?.name ?? t.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != Z &&
                            (0, n.jsx)(r.D0$, {
                                label: S.intl.string(S.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: w._c,
                                    children: [
                                        (0, n.jsx)(h.Ay, { guild: Z, iconSize: 16, className: w.Z9 }),
                                        (0, n.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: w.lR,
                                            children: Z.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != J &&
                            null != et &&
                            (0, n.jsx)(r.D0$, {
                                label: S.intl.string(S.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, n.jsxs)("div", {
                                    className: w._c,
                                    children: [
                                        (0, n.jsx)(et, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: w.Z9,
                                        }),
                                        (0, n.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: w.lR,
                                            children: ee,
                                        }),
                                    ],
                                }),
                            }),
                        t.version >= 3 &&
                            null != t.activity &&
                            (null != t.activity.state || null != t.activity.details) &&
                            (0, n.jsx)(r.D0$, {
                                label: S.intl.string(S.t.aTpwmw),
                                layout: "horizontal",
                                children: (0, n.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: [t.activity.state, t.activity.details].filter(Boolean).join(" › "),
                                }),
                            }),
                    ],
                }),
            }),
            (0, n.jsx)("div", {
                className: w.G3,
                children: (0, n.jsxs)(r.ButtonGroup, {
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, n.jsx)(r.Button, {
                            loading: F,
                            disabled: F,
                            variant: "primary",
                            icon: r.liv,
                            iconPosition: "start",
                            onClick: () => X({ clips: [R()] }),
                            text: S.intl.string(S.t.RDE0Sc),
                        }),
                        (0, n.jsx)(r.K0, {
                            "aria-label": S.intl.string(S.t.PdRCRg),
                            loading: F,
                            disabled: F,
                            variant: "secondary",
                            onClick: function (e) {
                                z(),
                                    (0, d.L3)(e, async () => {
                                        let { default: e } = await l.e("80628").then(l.bind(l, 183903));
                                        return (t) =>
                                            (0, n.jsx)(e, { ...t, clips: [R()], channelId: L, onAfterDelete: M });
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
