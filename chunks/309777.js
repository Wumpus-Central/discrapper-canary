l.d(t, { A: () => M });
var a = l(627968),
    n = l(64700),
    i = l(311907),
    s = l(342952),
    r = l(397927),
    o = l(442433),
    d = l(429913),
    c = l(47167),
    u = l(713654),
    m = l(769015),
    h = l(145497),
    p = l(734057),
    x = l(540999),
    f = l(71393),
    g = l(287809),
    v = l(405269),
    j = l(403362),
    b = l(661191),
    C = l(274372),
    y = l(372684),
    N = l(399925),
    A = l(718812),
    E = l(794905),
    k = l(429364),
    I = l(696016),
    S = l(965623),
    w = l(985018),
    L = l(233442);
function M(e) {
    let { clip: t, channelId: M, onClose: T } = e,
        R = t.type === y.nQ.SCREENSHOT,
        {
            getEditedClip: D,
            voiceAudioEnabled: O,
            setVoiceAudioEnabled: P,
            applicationAudioEnabled: U,
            setApplicationAudioEnabled: G,
            soundboardAudioEnabled: V,
            setSoundboardAudioEnabled: H,
            pause: $,
            clipName: z,
            setClipName: _,
            isTemporary: K,
            setIsTemporary: F,
        } = (0, k.T)(),
        B = (0, d.h)(t.applicationId),
        Y = (0, i.bG)([C.A], () => C.A.isClipExporting(t.id)),
        { onShareClick: X } = (0, E.A)(M),
        Q = (0, i.bG)([x.A], () => x.A.isDeveloper),
        q = (0, A.h)(t),
        Z = n.useCallback(async () => {
            await (0, N.w7)(t.id), F(!1);
        }, [t.id, F]),
        W = (0, i.yK)([g.default], () => t.users.map(g.default.getUser).filter(j.Vq)),
        J = n.useMemo(() => new Date(b.default.extractTimestamp(t.id)), [t.id]),
        ee = (0, i.bG)([f.A], () => (t.version >= 3 && null != t.guildId ? f.A.getGuild(t.guildId) : null)),
        et = (0, i.bG)([p.A], () => (t.version >= 3 && null != t.channelId ? p.A.getChannel(t.channelId) : null)),
        el = (0, c.Ay)(et),
        ea = null != et ? (0, u.gU)(et, ee) : null;
    return (0, a.jsxs)("div", {
        className: L.XV,
        children: [
            (0, a.jsxs)("div", {
                className: L.eW,
                children: [
                    (0, a.jsx)("div", {
                        className: L.VW,
                        children: (0, a.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            color: "text-default",
                            className: L.qd,
                            children: w.intl.string(S.default["snNYS+"]),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: L.Pz,
                        children:
                            Q &&
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
                    }),
                ],
            }),
            (0, a.jsx)(r.IpV, {
                className: L.Md,
                children: (0, a.jsxs)(r.nVY, {
                    children: [
                        K &&
                            (0, a.jsx)(r.wx6, {
                                type: "info",
                                children: (0, a.jsxs)(r.BJc, {
                                    gap: 8,
                                    children: [
                                        (0, a.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            children: w.intl.string(w.t.EkUv4u),
                                        }),
                                        (0, a.jsx)(r.Button, {
                                            size: "sm",
                                            variant: "primary",
                                            onClick: Z,
                                            text: w.intl.string(w.t["BfLmm+"]),
                                        }),
                                    ],
                                }),
                            }),
                        (0, a.jsx)(r.ksK, {
                            label: w.intl.string(w.t.SJKc5n),
                            onChange: (e) => {
                                "" === e ? _(void 0) : _(e);
                            },
                            value: z,
                            minLength: I.U_,
                            maxLength: I.mk,
                            placeholder: q,
                        }),
                        !R &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(r.Ad5, { label: w.intl.string(w.t.GnQui9), checked: U, onChange: G }),
                                    (0, a.jsx)(r.Ad5, { label: w.intl.string(w.t["5mVOCb"]), checked: O, onChange: P }),
                                    (0, a.jsx)(r.Ad5, { label: w.intl.string(w.t["8K7Ges"]), checked: V, onChange: H }),
                                ],
                            }),
                        (0, a.jsx)(r.D0$, {
                            label: w.intl.string(w.t.g8pDeY),
                            layout: "horizontal",
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: (0, v.mk)(J),
                            }),
                        }),
                        (0, a.jsx)(r.D0$, {
                            label: w.intl.string(w.t.WTozwe),
                            layout: "horizontal",
                            children: (0, a.jsx)(s.A, { users: W, maxUsers: 10 }),
                        }),
                        null != B &&
                            (0, a.jsx)(r.D0$, {
                                label: w.intl.string(S.default.PACPOV),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: L._c,
                                    children: [
                                        (0, a.jsx)(m.A, { game: B, size: m.M.XXSMALL, className: L.Z9 }),
                                        (0, a.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: L.lR,
                                            children: B?.name ?? t.applicationName,
                                        }),
                                    ],
                                }),
                            }),
                        null != ee &&
                            (0, a.jsx)(r.D0$, {
                                label: w.intl.string(w.t.vVKqVh),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: L._c,
                                    children: [
                                        (0, a.jsx)(h.Ay, { guild: ee, iconSize: 16, className: L.Z9 }),
                                        (0, a.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: L.lR,
                                            children: ee.name,
                                        }),
                                    ],
                                }),
                            }),
                        null != et &&
                            null != ea &&
                            (0, a.jsx)(r.D0$, {
                                label: w.intl.string(w.t.GPxI1G),
                                layout: "horizontal",
                                children: (0, a.jsxs)("div", {
                                    className: L._c,
                                    children: [
                                        (0, a.jsx)(ea, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: L.Z9,
                                        }),
                                        (0, a.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            className: L.lR,
                                            children: el,
                                        }),
                                    ],
                                }),
                            }),
                        t.version >= 3 &&
                            null != t.activity &&
                            (null != t.activity.state || null != t.activity.details) &&
                            (0, a.jsx)(r.D0$, {
                                label: w.intl.string(w.t.aTpwmw),
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
                className: L.G3,
                children: (0, a.jsxs)(r.ButtonGroup, {
                    direction: "horizontal",
                    fullWidth: !0,
                    children: [
                        (0, a.jsx)(r.Button, {
                            loading: Y,
                            disabled: Y,
                            variant: "primary",
                            icon: r.liv,
                            iconPosition: "start",
                            onClick: () => X({ clips: [D()] }),
                            text: w.intl.string(w.t.RDE0Sc),
                        }),
                        (0, a.jsx)(r.K0, {
                            "aria-label": w.intl.string(w.t.PdRCRg),
                            loading: Y,
                            disabled: Y,
                            variant: "secondary",
                            onClick: function (e) {
                                $(),
                                    (0, o.L3)(e, async () => {
                                        let { default: e } = await l.e("80628").then(l.bind(l, 183903));
                                        return (t) =>
                                            (0, a.jsx)(e, { ...t, clips: [D()], channelId: M, onAfterDelete: T });
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
