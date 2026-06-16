n.d(e, { default: () => tt, Z: () => $ }), n(321073);
var i,
    l = n(627968),
    s = n(64700),
    a = n(32880),
    r = n(347704),
    o = n(376728),
    c = n(717398),
    d = n(631670),
    u = n(812633),
    g = n(626584),
    p = n(837057),
    m = n(207803),
    x = n(287809),
    b = n(53505),
    h = n(723702),
    v = n(834730),
    j = n(975571),
    C = n(652215),
    f = n(375708);
function N() {
    let t = j.A.getArticleURL(C.MVz.GUILD_GETTING_STARTED);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(v.E, { variant: "text-md/normal", children: f.intl.string(f.t.crKvu5) }),
            (0, l.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                style: { marginTop: 8 },
                children: f.intl.format(f.t.OtQkd2, { url: t }),
            }),
        ],
    });
}
var y = n(873298),
    k = n(331322),
    w = n(534514),
    E = n(487245),
    S = n(885386),
    A = n(578673);
function T() {
    let t = (function (t) {
            switch (t) {
                case y.NS.COMPACT:
                    return "compact";
                case y.NS.COZY:
                    return "spacious";
                default:
                    return "default";
            }
        })(S.Xi.useSetting()),
        e = s.useMemo(
            () => [
                { value: "compact", label: f.intl.string(f.t["1JNcPS"]), proto: y.NS.COMPACT },
                { value: "default", label: f.intl.string(f.t.Jqj4cZ), proto: y.NS.DEFAULT },
                { value: "spacious", label: f.intl.string(f.t["4cuYHx"]), proto: y.NS.COZY },
            ],
            [],
        ),
        n = s.useCallback(
            (t) => {
                let n = e.find((e) => e.value === t);
                null != n && S.Xi.updateSetting(n.proto);
            },
            [e],
        );
    return (0, l.jsxs)(k.B, {
        gap: 20,
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(w.D, { variant: "heading-md/semibold", children: f.intl.string(f.t.Ksh3ik) }),
                    (0, l.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: f.intl.string(f.t["mz+/o+"]),
                    }),
                    (0, l.jsx)(E.Ay, {
                        type: E.v0.SETTINGS,
                        children: (0, l.jsx)(k.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            style: { marginTop: 12 },
                            children: (0, l.jsx)(E.t6, { systemSelectorFirst: !1 }),
                        }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(w.D, { variant: "heading-md/semibold", children: f.intl.string(f.t["C/5V0A"]) }),
                    (0, l.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: f.intl.string(f.t.sBENmo),
                    }),
                    (0, l.jsx)(k.B, {
                        direction: "horizontal",
                        gap: 8,
                        style: { marginTop: 12 },
                        children: e.map((e) =>
                            (0, l.jsx)(
                                "button",
                                {
                                    className: A.mj,
                                    "data-selected": t === e.value || void 0,
                                    onClick: () => n(e.value),
                                    "aria-pressed": t === e.value,
                                    type: "button",
                                    children: e.label,
                                },
                                e.value,
                            ),
                        ),
                    }),
                ],
            }),
        ],
    });
}
var D = n(17928),
    O = n(187322),
    P = n(939249),
    U = n(332461),
    B = n(452027),
    R = n(292666),
    L = n(260598),
    K = n(252732),
    I = n(486020),
    F = n(339984);
function M(t) {
    let { pendingGlobalName: e, onGlobalNameChange: n, pendingBio: i, onBioChange: a } = t,
        r = (0, D.bG)([x.default], () => x.default.getCurrentUser()),
        o = null != r ? I.Ay.getUserAvatarURL(r, !0, 80) : void 0,
        c = s.useCallback(() => {
            (0, K.XD)({ uploadType: F.HL.AVATAR });
        }, []);
    return (0, l.jsxs)("div", {
        className: A.eE,
        children: [
            (0, l.jsx)("div", {
                className: A.Zk,
                children: (0, l.jsx)(O.vN, {
                    children: (0, l.jsxs)(P.D, {
                        className: A.nz,
                        onClick: c,
                        role: "button",
                        "aria-label": f.intl.string(f.t["70lEQe"]),
                        children: [
                            null != o
                                ? (0, l.jsx)("img", { src: o, alt: "", className: A.uV })
                                : (0, l.jsx)("div", {
                                      className: A.GT,
                                      children: (0, l.jsx)(U.x, { size: "md", color: "currentColor" }),
                                  }),
                            (0, l.jsx)("div", {
                                className: A.Nd,
                                children: (0, l.jsx)(U.x, { size: "sm", color: "currentColor" }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, l.jsx)(B.D, {
                label: f.intl.string(f.t["9AjdkD"]),
                children: (0, l.jsx)(R.k, { value: e, onChange: n, placeholder: r?.username, maxLength: 32 }),
            }),
            (0, l.jsx)(L.f, {
                label: f.intl.string(f.t["61W33d"]),
                value: i,
                onChange: a,
                maxLength: C.NA2,
                showCharacterCount: !0,
                rows: 3,
            }),
        ],
    });
}
var z = n(998445),
    G = n(836480),
    _ = n(283973),
    V = n(664121),
    Z = n(906471);
function q(t) {
    let { icon: e, title: n, description: i, onClick: s } = t;
    return (0, l.jsx)(O.vN, {
        children: (0, l.jsxs)("button", {
            className: A.we,
            onClick: s,
            children: [
                (0, l.jsx)("div", { className: A.XM, children: (0, l.jsx)(e, { size: "md", color: "currentColor" }) }),
                (0, l.jsxs)("div", {
                    className: A.ht,
                    children: [
                        (0, l.jsx)(v.E, { variant: "text-md/semibold", children: n }),
                        (0, l.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: i }),
                    ],
                }),
                (0, l.jsx)("img", { className: A.$O, alt: "", src: Z }),
            ],
        }),
    });
}
function J(t) {
    let { onSelectOption: e, onExplore: n, onCreateServer: i } = t;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(q, {
                icon: z.L,
                title: f.intl.string(f.t.riOUtB),
                description: f.intl.string(f.t["5u0zvP"]),
                onClick: () => e($.JOIN_SERVER),
            }),
            (0, l.jsx)(q, {
                icon: G.Q,
                title: f.intl.string(f.t.gHNiza),
                description: f.intl.string(f.t.v7xiEA),
                onClick: n,
            }),
            (0, l.jsx)(q, {
                icon: _.R,
                title: f.intl.string(f.t.w5uwoI),
                description: f.intl.string(f.t.bgoxKS),
                onClick: () => e($.ADD_FRIEND),
            }),
            (0, l.jsx)(q, {
                icon: V.R,
                title: f.intl.string(f.t.ZLfEo8),
                description: f.intl.string(f.t.z7OAvN),
                onClick: i,
            }),
        ],
    });
}
function X(t) {
    let { inviteLink: e, onInviteLinkChange: n } = t;
    return (0, l.jsx)(B.D, {
        label: f.intl.string(f.t.riOUtB),
        children: (0, l.jsx)(R.k, { value: e, onChange: n, placeholder: f.intl.string(f.t["+9XKWu"]), autoFocus: !0 }),
    });
}
function Q(t) {
    let { friendUsername: e, onFriendUsernameChange: n } = t;
    return (0, l.jsx)(B.D, {
        label: f.intl.string(f.t.w5uwoI),
        children: (0, l.jsx)(R.k, { value: e, onChange: n, placeholder: f.intl.string(f.t.qRaqel), autoFocus: !0 }),
    });
}
var W = n(488995),
    Y = n(324580);
let H = new g.A("NewUserOnboarding");
var $ =
    (((i = {}).WELCOME = "welcome"),
    (i.APPEARANCE = "appearance"),
    (i.DOWNLOAD_DESKTOP = "download-desktop"),
    (i.PROFILE = "profile"),
    (i.NEXT_STEPS = "next-steps"),
    (i.JOIN_SERVER = "join-server"),
    (i.ADD_FRIEND = "add-friend"),
    i);
function tt(t) {
    let { onClose: e, ...n } = t,
        [i, g] = s.useState("welcome"),
        [v, j] = s.useState(null),
        C = x.default.getCurrentUser()?.isClaimed() === !0,
        [y, k] = s.useState(() => x.default.getCurrentUser()?.globalName ?? ""),
        [w, E] = s.useState(""),
        [S, A] = s.useState(""),
        [D, O] = s.useState(""),
        P = s.useCallback((t) => {
            j(t), g(t);
        }, []),
        U = s.useCallback(
            (t, e) => {
                "next-steps" === t && null != v && j(null), g(t);
            },
            [v],
        ),
        B = s.useCallback(async () => {
            let t = x.default.getCurrentUser(),
                e = y.trim(),
                n = t?.globalName ?? "";
            if (t?.isClaimed() === !0 && e.length > 0 && e !== n)
                try {
                    await (0, d._L)({ globalName: e });
                } catch (t) {
                    H.warn("failed to save globalName", t);
                }
            if (w.trim().length > 0)
                try {
                    await (0, m.gi)({ bio: w.trim() });
                } catch (t) {
                    H.warn("failed to save bio", t);
                }
        }, [y, w]),
        R = s.useCallback(async () => (await B(), !0), [B]),
        L = s.useCallback(async () => {
            let t = S.trim().replace(/^(https?:\/\/)?(discord\.gg\/|discord\.com\/invite\/)/, "");
            return (
                0 !== t.length &&
                (await o.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: { location: "New User Onboarding" },
                }),
                !0)
            );
        }, [S]),
        K = s.useCallback(async () => {
            await B(),
                await e(),
                (0, p.transitionToGlobalDiscovery)({ tab: W.GlobalDiscoveryTab.SERVERS, entrypoint: Y.J8.UNKNOWN });
        }, [B, e]),
        I = s.useCallback(async () => {
            let t = D.trim();
            return (
                0 !== t.length &&
                (await c.A.sendRequest({ discordTag: t, context: { location: "New User Onboarding" } }), !0)
            );
        }, [D]),
        F = s.useCallback(async () => {
            await B(), await e(), (0, u.openCreateGuildModal)({ location: "New User Onboarding" });
        }, [B, e]),
        z = s.useCallback(() => {
            window.open((0, b.SU)());
        }, []),
        G = s.useMemo(() => {
            let t = [
                {
                    stepKey: "welcome",
                    modalProps: {
                        graphic: {
                            type: "image",
                            src: "https://cdn.discordapp.com/assets/content/edf526c8e8a6f21f0d754acd1c64198c967ed973de8c737c2abf7748a6f85047.svg",
                        },
                        gradientColor: "purple",
                        title: f.intl.string(f.t.A1Q7a8),
                        subtitle: f.intl.string(f.t.jJZohU),
                    },
                    body: (0, l.jsx)(N, {}),
                    nextButtonProps: { text: f.intl.string(f.t.LhlgY9) },
                },
                {
                    stepKey: "appearance",
                    modalProps: { title: f.intl.string(f.t.mTkQFn), subtitle: f.intl.string(f.t["2b+0N6"]) },
                    hideBackButton: !0,
                    body: (0, l.jsx)(T, {}),
                },
            ];
            return (
                h.isPlatformEmbedded ||
                    t.push({
                        stepKey: "download-desktop",
                        modalProps: {
                            graphic: {
                                type: "image",
                                src: "https://cdn.discordapp.com/assets/content/6a4f00b69af328e30b8855282ec9810a11773b42862ed60e4b4e8ca3f44ac55e.svg",
                            },
                            gradientColor: "purple",
                            title: f.intl.string(f.t.qDbCbw),
                            subtitle: f.intl.string(f.t["5Di7f2"]),
                        },
                        secondaryActionButtonProps: {
                            text: f.intl.format(f.t.JoS1i3, { platform: (0, b.Vf)() }),
                            icon: a.s,
                            onClick: z,
                        },
                        nextButtonProps: { text: f.intl.string(f.t.L5eIZ2) },
                    }),
                C &&
                    t.push({
                        stepKey: "profile",
                        modalProps: { title: f.intl.string(f.t["6A8F1a"]), subtitle: f.intl.string(f.t.sqjmbr) },
                        body: (0, l.jsx)(M, {
                            pendingGlobalName: y,
                            onGlobalNameChange: k,
                            pendingBio: w,
                            onBioChange: E,
                        }),
                        onNext: R,
                    }),
                t.push({
                    stepKey: "next-steps",
                    modalProps: {
                        graphic: {
                            type: "image",
                            src: "https://cdn.discordapp.com/assets/content/26b00f3a0a613458bd81c6c028e1113ff24c3fdfeef473f6969b51987e85f0cf.svg",
                        },
                        gradientColor: "blue",
                        title: f.intl.string(f.t["++F+ha"]),
                        subtitle: f.intl.string(f.t.yMX0GO),
                    },
                    body: (0, l.jsx)(J, { onSelectOption: P, onExplore: K, onCreateServer: F }),
                    nextButtonProps: { text: f.intl.string(f.t.zcmBTS) },
                }),
                t
            );
        }, [C, y, w, R, P, K, F, z]),
        _ = s.useMemo(() => G.map((t) => t.stepKey), [G]),
        V = s.useMemo(
            () => ({
                "join-server": {
                    stepKey: "join-server",
                    modalProps: { title: f.intl.string(f.t.riOUtB), subtitle: f.intl.string(f.t.cs48bs) },
                    body: (0, l.jsx)(X, { inviteLink: S, onInviteLinkChange: A }),
                    nextButtonProps: { text: f.intl.string(f.t["Ts/9Ac"]) },
                    nextEnabled: S.trim().length > 0,
                    onNext: L,
                },
                "add-friend": {
                    stepKey: "add-friend",
                    modalProps: { title: f.intl.string(f.t.w5uwoI), subtitle: f.intl.string(f.t.jy1kln) },
                    body: (0, l.jsx)(Q, { friendUsername: D, onFriendUsernameChange: O }),
                    nextButtonProps: { text: f.intl.string(f.t["PMsq/b"]) },
                    nextEnabled: D.trim().length > 0,
                    onNext: I,
                },
            }),
            [S, D, L, I],
        ),
        Z = s.useMemo(() => (null != v && null != V[v] ? [...G, V[v]] : G), [G, v, V]);
    return (0, l.jsx)(r.t, {
        ...n,
        onClose: e,
        steps: Z,
        numberedSteps: _,
        currentStepKey: i,
        onStepChange: U,
        onComplete: B,
    });
}
