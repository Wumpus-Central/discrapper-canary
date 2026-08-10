n.d(e, { default: () => tc, Z: () => tr }), n(321073);
var i,
    l = n(477900),
    s = n(582128),
    r = n(32880),
    a = n(347704),
    o = n(157559),
    c = n(376728),
    d = n(717398),
    u = n(631670),
    p = n(913122),
    g = n(812633),
    m = n(626584),
    x = n(837057),
    h = n(894778),
    b = n(207803),
    j = n(287809),
    C = n(53505),
    v = n(4274),
    f = n(723702),
    E = n(834730),
    N = n(975571),
    y = n(652215),
    S = n(375708);
function w() {
    let t = N.A.getArticleURL(y.MVz.GUILD_GETTING_STARTED);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(E.E, { variant: "text-md/normal", children: S.intl.string(S.t.crKvu5) }),
            (0, l.jsx)(E.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                style: { marginTop: 8 },
                children: S.intl.format(S.t.OtQkd2, { url: t }),
            }),
        ],
    });
}
var A = n(873298),
    k = n(331322),
    D = n(297264),
    O = n(487245),
    P = n(885386),
    R = n(880809);
function T() {
    let t = (function (t) {
            switch (t) {
                case A.NS.COMPACT:
                    return "compact";
                case A.NS.COZY:
                    return "spacious";
                default:
                    return "default";
            }
        })(P.Xi.useSetting()),
        e = s.useMemo(
            () => [
                { value: "compact", label: S.intl.string(S.t["1JNcPS"]), proto: A.NS.COMPACT },
                { value: "default", label: S.intl.string(S.t.Jqj4cZ), proto: A.NS.DEFAULT },
                { value: "spacious", label: S.intl.string(S.t["4cuYHx"]), proto: A.NS.COZY },
            ],
            [],
        ),
        n = s.useCallback(
            (t) => {
                let n = e.find((e) => e.value === t);
                null != n && P.Xi.updateSetting(n.proto);
            },
            [e],
        );
    return (0, l.jsxs)(k.B, {
        gap: 20,
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(D.D, { variant: "heading-md/semibold", children: S.intl.string(S.t.Ksh3ik) }),
                    (0, l.jsx)(E.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: S.intl.string(S.t["mz+/o+"]),
                    }),
                    (0, l.jsx)(O.Ay, {
                        type: O.v0.SETTINGS,
                        children: (0, l.jsx)(k.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            style: { marginTop: 12 },
                            children: (0, l.jsx)(O.t6, { systemSelectorFirst: !1 }),
                        }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(D.D, { variant: "heading-md/semibold", children: S.intl.string(S.t["C/5V0A"]) }),
                    (0, l.jsx)(E.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: S.intl.string(S.t.sBENmo),
                    }),
                    (0, l.jsx)(k.B, {
                        direction: "horizontal",
                        gap: 8,
                        style: { marginTop: 12 },
                        children: e.map((e) =>
                            (0, l.jsx)(
                                "button",
                                {
                                    className: R.mj,
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
var K = n(17928),
    L = n(259678),
    U = n(939249),
    I = n(332461),
    B = n(452027),
    _ = n(95477),
    M = n(260598),
    F = n(252732),
    G = n(290386),
    z = n(486020),
    V = n(339984);
function X(t) {
    let { pendingGlobalName: e, onGlobalNameChange: n, pendingBio: i, onBioChange: r } = t,
        a = (0, K.bG)([j.default], () => j.default.getCurrentUser()),
        o = null != a ? z.Ay.getUserAvatarURL(a, !0, 80) : void 0,
        c = (0, G.U)({ location: "onboarding_profile_slide" }),
        d = s.useCallback(() => {
            (0, F.XD)({ uploadType: V.HL.AVATAR });
        }, []);
    return (0, l.jsxs)("div", {
        className: R.eE,
        children: [
            (0, l.jsx)("div", {
                className: R.Zk,
                children: (0, l.jsx)(L.vN, {
                    children: (0, l.jsxs)(U.D, {
                        className: R.nz,
                        onClick: d,
                        role: "button",
                        "aria-label": S.intl.string(S.t["70lEQe"]),
                        children: [
                            null != o
                                ? (0, l.jsx)("img", { src: o, alt: "", className: R.uV })
                                : (0, l.jsx)("div", {
                                      className: R.GT,
                                      children: (0, l.jsx)(I.x, { size: "md", color: "currentColor" }),
                                  }),
                            (0, l.jsx)("div", {
                                className: R.Nd,
                                children: (0, l.jsx)(I.x, { size: "sm", color: "currentColor" }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, l.jsx)(B.D, {
                label: S.intl.string(S.t["9AjdkD"]),
                children: (0, l.jsx)(_.k, { value: e, onChange: n, placeholder: a?.username, maxLength: 32 }),
            }),
            (0, l.jsx)(M.f, {
                label: S.intl.string(S.t["61W33d"]),
                value: i,
                onChange: r,
                maxLength: c,
                showCharacterCount: !0,
                rows: 3,
            }),
        ],
    });
}
var W = n(998445),
    J = n(836480),
    Z = n(283973),
    q = n(664121),
    Q = n(906471);
function Y(t) {
    let { icon: e, title: n, description: i, onClick: s } = t;
    return (0, l.jsx)(L.vN, {
        children: (0, l.jsxs)("button", {
            className: R.we,
            onClick: s,
            children: [
                (0, l.jsx)("div", { className: R.XM, children: (0, l.jsx)(e, { size: "md", color: "currentColor" }) }),
                (0, l.jsxs)("div", {
                    className: R.ht,
                    children: [
                        (0, l.jsx)(E.E, { variant: "text-md/semibold", children: n }),
                        (0, l.jsx)(E.E, { variant: "text-sm/normal", color: "text-subtle", children: i }),
                    ],
                }),
                (0, l.jsx)("img", { className: R.$O, alt: "", src: Q }),
            ],
        }),
    });
}
function H(t) {
    let { onSelectOption: e, onExplore: n, onCreateServer: i } = t;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(Y, {
                icon: W.L,
                title: S.intl.string(S.t.riOUtB),
                description: S.intl.string(S.t["5u0zvP"]),
                onClick: () => e(tr.JOIN_SERVER),
            }),
            (0, l.jsx)(Y, {
                icon: J.Q,
                title: S.intl.string(S.t.gHNiza),
                description: S.intl.string(S.t.v7xiEA),
                onClick: n,
            }),
            (0, l.jsx)(Y, {
                icon: Z.R,
                title: S.intl.string(S.t.w5uwoI),
                description: S.intl.string(S.t.bgoxKS),
                onClick: () => e(tr.ADD_FRIEND),
            }),
            (0, l.jsx)(Y, {
                icon: q.R,
                title: S.intl.string(S.t.ZLfEo8),
                description: S.intl.string(S.t.z7OAvN),
                onClick: i,
            }),
        ],
    });
}
function $(t) {
    let { inviteLink: e, onInviteLinkChange: n } = t;
    return (0, l.jsx)(B.D, {
        label: S.intl.string(S.t.riOUtB),
        children: (0, l.jsx)(_.k, { value: e, onChange: n, placeholder: S.intl.string(S.t["+9XKWu"]), autoFocus: !0 }),
    });
}
function tt(t) {
    let { friendUsername: e, onFriendUsernameChange: n } = t;
    return (0, l.jsx)(B.D, {
        label: S.intl.string(S.t.w5uwoI),
        children: (0, l.jsx)(_.k, { value: e, onChange: n, placeholder: S.intl.string(S.t.qRaqel), autoFocus: !0 }),
    });
}
var te = n(488995),
    tn = n(324580),
    ti = n(315290),
    tl = n(227143);
let ts = new m.A("NewUserOnboarding");
var tr =
    (((i = {}).WELCOME = "welcome"),
    (i.APPEARANCE = "appearance"),
    (i.DOWNLOAD_DESKTOP = "download-desktop"),
    (i.PROFILE = "profile"),
    (i.NEXT_STEPS = "next-steps"),
    (i.JOIN_SERVER = "join-server"),
    (i.ADD_FRIEND = "add-friend"),
    i);
let ta = {
    welcome: ti.jK.WELCOME,
    appearance: ti.jK.APPEARANCE,
    "download-desktop": ti.jK.DOWNLOAD_DESKTOP,
    profile: ti.jK.PROFILE,
    "next-steps": ti.jK.NEXT_STEPS,
    "join-server": ti.jK.JOIN_SERVER,
    "add-friend": ti.jK.ADD_FRIEND,
};
function to(t) {
    h.A.flowStep(ti.do.ANY, t);
}
function tc(t) {
    let { onClose: e, ...n } = t,
        [i, m] = s.useState("welcome"),
        [h, E] = s.useState(null),
        N = j.default.getCurrentUser()?.isClaimed() === !0,
        [y, A] = s.useState(() => j.default.getCurrentUser()?.globalName ?? ""),
        [k, D] = s.useState(""),
        [O, P] = s.useState(""),
        [R, K] = s.useState("");
    s.useEffect(() => {
        to(ti.jK.WELCOME);
    }, []);
    let L = s.useCallback((t) => {
            to(ta[t]), E(t), m(t);
        }, []),
        U = s.useCallback(
            (t, e) => {
                "next-steps" === t && null != h && E(null);
                let n = ta[t];
                null != n && to(n), m(t);
            },
            [h],
        ),
        I = s.useCallback(async () => {
            let t = j.default.getCurrentUser(),
                e = y.trim(),
                n = t?.globalName ?? "";
            if (t?.isClaimed() === !0 && e.length > 0 && e !== n)
                try {
                    await (0, u._L)({ globalName: e });
                } catch (t) {
                    ts.warn("failed to save globalName", t);
                }
            if (k.trim().length > 0)
                try {
                    await (0, b.gi)({ bio: k.trim() });
                } catch (t) {
                    ts.warn("failed to save bio", t);
                }
        }, [y, k]),
        B = s.useCallback(async () => {
            "next-steps" === i && to(ti.jK.DISMISSED), await I();
        }, [i, I]),
        _ = s.useCallback(async () => {
            let t = O.replace(/^\s*(https?:\/\/)?([\w-]+\.)?(discord\.gg|discord(?:app)?\.com\/invite)\//i, "").trim();
            if (0 === t.length) return !1;
            try {
                return (
                    await c.Ay.acceptInviteAndTransitionToInviteChannel({
                        inviteKey: t,
                        context: { location: "New User Onboarding" },
                    }),
                    !0
                );
            } catch (e) {
                let t = e instanceof p.Wl || e instanceof p.LG ? e.code : void 0;
                return o.A.show({ title: S.intl.string(S.t.R0RpRX), body: (0, v.s)(t) }), !1;
            }
        }, [O]),
        M = s.useCallback(async () => {
            to(ti.jK.EXPLORE),
                await I(),
                await e(),
                (0, x.transitionToGlobalDiscovery)({ tab: te.GlobalDiscoveryTab.SERVERS, entrypoint: tn.J8.UNKNOWN });
        }, [I, e]),
        F = s.useCallback(async () => {
            let t = R.trim();
            if (0 === t.length) return !1;
            try {
                return await d.A.sendRequest({ discordTag: t, context: { location: "New User Onboarding" } }), !0;
            } catch {
                return !1;
            }
        }, [R]),
        G = s.useCallback(async () => {
            to(ti.jK.CREATE_SERVER),
                await I(),
                await e(),
                (0, g.openCreateGuildModal)({ location: "New User Onboarding" });
        }, [I, e]),
        z = s.useCallback(() => {
            window.open((0, C.SU)());
        }, []),
        V = s.useMemo(() => {
            let t = [
                {
                    stepKey: "welcome",
                    modalProps: {
                        graphic: {
                            type: "image",
                            src: "https://cdn.discordapp.com/assets/content/edf526c8e8a6f21f0d754acd1c64198c967ed973de8c737c2abf7748a6f85047.svg",
                        },
                        gradientColor: "purple",
                        title: S.intl.string(S.t.A1Q7a8),
                        subtitle: S.intl.string(S.t.jJZohU),
                    },
                    body: (0, l.jsx)(w, {}),
                    nextButtonProps: { text: S.intl.string(S.t.LhlgY9) },
                },
                {
                    stepKey: "appearance",
                    modalProps: { title: S.intl.string(S.t.mTkQFn), subtitle: S.intl.string(S.t["2b+0N6"]) },
                    hideBackButton: !0,
                    body: (0, l.jsx)(T, {}),
                },
            ];
            return (
                f.isPlatformEmbedded ||
                    t.push({
                        stepKey: "download-desktop",
                        modalProps: {
                            graphic: {
                                type: "image",
                                src: "https://cdn.discordapp.com/assets/content/6a4f00b69af328e30b8855282ec9810a11773b42862ed60e4b4e8ca3f44ac55e.svg",
                            },
                            gradientColor: "purple",
                            title: S.intl.string(S.t.qDbCbw),
                            subtitle: S.intl.string(S.t["5Di7f2"]),
                        },
                        secondaryActionButtonProps: {
                            text: S.intl.format(S.t.JoS1i3, { platform: (0, C.Vf)() }),
                            icon: r.s,
                            onClick: z,
                        },
                        nextButtonProps: { text: S.intl.string(S.t.L5eIZ2) },
                    }),
                N &&
                    t.push({
                        stepKey: "profile",
                        modalProps: { title: S.intl.string(S.t["6A8F1a"]), subtitle: S.intl.string(S.t.sqjmbr) },
                        body: (0, l.jsx)(X, {
                            pendingGlobalName: y,
                            onGlobalNameChange: A,
                            pendingBio: k,
                            onBioChange: D,
                        }),
                    }),
                t.push({
                    stepKey: "next-steps",
                    modalProps: {
                        graphic: { type: "image", src: tl.A },
                        gradientColor: "blue",
                        title: S.intl.string(S.t["++F+ha"]),
                        subtitle: S.intl.string(S.t.yMX0GO),
                    },
                    body: (0, l.jsx)(H, { onSelectOption: L, onExplore: M, onCreateServer: G }),
                    nextButtonProps: { text: S.intl.string(S.t.zcmBTS) },
                }),
                t
            );
        }, [N, y, k, L, M, G, z]),
        W = s.useMemo(() => V.map((t) => t.stepKey), [V]),
        J = s.useMemo(
            () => ({
                "join-server": {
                    stepKey: "join-server",
                    modalProps: { title: S.intl.string(S.t.riOUtB), subtitle: S.intl.string(S.t.cs48bs) },
                    body: (0, l.jsx)($, { inviteLink: O, onInviteLinkChange: P }),
                    nextButtonProps: { text: S.intl.string(S.t["Ts/9Ac"]) },
                    nextEnabled: O.trim().length > 0,
                    onNext: _,
                },
                "add-friend": {
                    stepKey: "add-friend",
                    modalProps: { title: S.intl.string(S.t.w5uwoI), subtitle: S.intl.string(S.t.jy1kln) },
                    body: (0, l.jsx)(tt, { friendUsername: R, onFriendUsernameChange: K }),
                    nextButtonProps: { text: S.intl.string(S.t["PMsq/b"]) },
                    nextEnabled: R.trim().length > 0,
                    onNext: F,
                },
            }),
            [O, R, _, F],
        ),
        Z = s.useMemo(() => (null != h && null != J[h] ? [...V, J[h]] : V), [V, h, J]);
    return (0, l.jsx)(a.t, {
        ...n,
        onClose: e,
        steps: Z,
        numberedSteps: W,
        currentStepKey: i,
        onStepChange: U,
        onComplete: B,
    });
}
