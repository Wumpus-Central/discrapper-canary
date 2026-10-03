(n.r(t), n.d(t, { default: () => u7 }), n(321073));
var l,
    a = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    o = n(536637),
    u = n.n(o),
    d = n(478104),
    c = n(17928),
    m = n(314116),
    f = n(534890),
    h = n(646270),
    p = n(31300),
    g = n(739187),
    x = n(857250),
    b = n(97483),
    v = n(834730),
    j = n(323384),
    y = n(939249),
    w = n(866665),
    k = n(140735),
    A = n(289873),
    N = n(821609),
    C = n(604525),
    S = n(92446),
    E = n(625903),
    I = n(297264),
    T = n(97893),
    P = n(364522),
    M = n(103557),
    _ = n(150934),
    R = n(691885),
    D = n(789645),
    L = n(152367),
    F = n(661531),
    O = n(442433),
    z = n(627363),
    G = n(47167),
    B = n(713654),
    $ = n(625180),
    q = n(672929),
    U = n(775946),
    V = n(742589),
    H = n(976860),
    K = n(402860),
    W = n(885386),
    Y = n(734057),
    X = n(696451),
    Q = n(71393),
    Z = n(576705),
    J = n(486020),
    ee = n(277977),
    et = n(50617),
    en = n(375708),
    el = n(673724),
    ea = n(948230),
    ei = n(637708),
    es = n(936494);
function er(e, t, n) {
    return t?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : n;
}
async function eo(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, ea.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var eu = n(208137),
    ed = n(993396),
    ec = n(972786),
    em = n(598748),
    ef = n(294323),
    eh = n(25451),
    ep = n(280450);
let eg = ["frame", "widget", "bot"],
    ex = { frame: et.default.TI6dfu, widget: et.default.zshJSX, bot: et.default.bBkuBd };
function eb(e) {
    return en.intl.string(ex[e]);
}
function ev(e) {
    return `vibegrations-preview-mode-panel-${e}`;
}
let ej = { frame: (e) => e.hasFrame, widget: (e) => e.hasProfileWidget, bot: (e) => !0 === e.hasBotDm };
function ey(e) {
    let t = e.widgetTop && e.widgetBottom,
        n = e.miniProfile;
    return { hasMainCard: t, hasPopoutCard: n, hasAny: t || n };
}
function ew(e) {
    let { installScope: t, previewReady: n, integrationInstalled: l, botPermissionsChanged: a } = e;
    return !!n && null != l && (!!a || ("user" !== t && !l));
}
var ek = n(287809),
    eA = n(427262),
    eN = n(783791),
    eC = n(803306);
let eS = new Set(),
    eE = new Map();
function eI(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
function eT(e) {
    if (null == e || eS.has(e) || null != ek.default.getUser(e)) return;
    let t = eE.get(e) ?? 0;
    t >= 3 ||
        (eE.set(e, t + 1),
        eS.add(e),
        eC
            .wz(e)
            .finally(() => eS.delete(e))
            .catch(() => {}));
}
var eP = n(459514),
    eM = n(73153),
    e_ = n(587895),
    eR = n(321191),
    eD = n(808728),
    eL = n(927899),
    eF = n(933294),
    eO = n(683180),
    ez = n(308528),
    eG = n(345942),
    eB = n(652215),
    e$ = n(165610),
    eq = n(522250);
function eU(e) {
    let { installScope: t, status: n, integrationStatus: l, guildName: a, appChannelName: i } = e;
    if (null == n) return null;
    let s = n.surface;
    if ("unpublished" === n.state && null == s && l?.preview_ready !== !0) return null;
    let r =
            null == s
                ? null
                : "user" === t
                  ? (function (e) {
                        switch (e) {
                            case "bot":
                                return {
                                    update: en.intl.string(et.default.o046LG),
                                    open: en.intl.string(et.default.BceUWe),
                                    destination: "dm",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: en.intl.string(et.default["91710b"]),
                                    open: en.intl.string(et.default.c4LI5t),
                                    destination: "launch",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return {
                                    update: en.intl.string(et.default["S+XFJ2"]),
                                    open: en.intl.string(et.default.wK3FYl),
                                    destination: "profile",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !0,
                                };
                            case "automod":
                                return null;
                        }
                    })(s)
                  : (function (e, t, n) {
                        if (null == t) return null;
                        let l = en.intl.formatToPlainString(et.default.jnwfvk, { server: t });
                        switch (e) {
                            case "bot":
                                return {
                                    update: en.intl.string(et.default.o046LG),
                                    open: l,
                                    destination: "guild",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: en.intl.string(et.default["91710b"]),
                                    open:
                                        null == n ? l : en.intl.formatToPlainString(et.default.Nfs5wk, { channel: n }),
                                    destination: "channel",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "automod":
                                return {
                                    update: en.intl.string(et.default.Qn0VCU),
                                    open: en.intl.string(et.default.j8541Y),
                                    destination: "automod",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return null;
                        }
                    })(s, a, i),
        o = (function (e) {
            let { installScope: t, status: n, appChannelName: l, appChannelPending: a, botInGuild: i } = e;
            return (
                "guild" === t &&
                null != n &&
                "unpublished" !== n.state &&
                ("activity" === n.surface ? null == l && !0 !== a : "bot" === n.surface && !1 === i)
            );
        })(e);
    if (null != r && "up_to_date" === n.state && !o)
        return {
            label: r.open,
            intent: "open",
            action: "open",
            destination: r.destination,
            navigatesOnPublish: !1,
            upToDate: !0,
            isUpdate: !1,
            disabledReason: null,
        };
    let u = (function (e) {
            let {
                installScope: t,
                guildName: n,
                canManageGuild: l,
                canManageChannels: a,
                usesNativeAppChannels: i,
            } = e;
            if ("guild" !== t) return null;
            let s = !1 === l,
                r = i && !1 === a,
                o = { server: n ?? "" };
            return s && r
                ? en.intl.formatToPlainString(et.default.qG1SMK, o)
                : s
                  ? en.intl.formatToPlainString(et.default.x71ku3, o)
                  : r
                    ? en.intl.formatToPlainString(et.default["53xiNu"], o)
                    : null;
        })(e),
        d = ew({
            installScope: t,
            previewReady: l?.preview_ready === !0,
            integrationInstalled: l?.integration_installed ?? null,
            botPermissionsChanged: l?.bot_permissions_changed === !0,
        }),
        c = "changes" === n.state && !o,
        m = {
            intent: d ? "consent_then_publish" : "publish",
            destination: r?.destination ?? null,
            upToDate: !1,
            isUpdate: c,
            disabledReason: u,
        },
        f = null != r && (c ? r.navigatesOnUpdate : r.navigatesOnFirstPublish);
    if (d && l?.bot_permissions_changed === !0)
        return { ...m, label: en.intl.string(et.default.zFcLHP), action: "review_permissions", navigatesOnPublish: f };
    let h = r?.update ?? en.intl.string(et.default["91710b"]);
    return { ...m, label: c ? h : en.intl.string(et.default["5gU57O"]), action: "publish", navigatesOnPublish: f };
}
var eV = (((l = {}).NO_PREVIEW = "no-preview"), (l.PERMISSIONS = "permissions"), l);
let eH = i.createContext(null);
function eK(e) {
    return e_.A.getApplication(e.application_id)?.bot?.id ?? e.application_id;
}
function eW(e, t) {
    let n = ec.Ay.getProject(e);
    if (null == n) return null;
    let l = "user" === n.install_scope ? null : (n.guild_id ?? t),
        a = null == l ? null : (0, eO.SH)(l, n.application_id),
        i = null == l ? null : Q.A.getGuild(l);
    return {
        project: n,
        guildId: l,
        appChannelId: a,
        input: {
            installScope: n.install_scope,
            status: ec.Ay.getPublishStatus(e),
            integrationStatus: ec.Ay.getIntegrationStatus(e),
            guildName: i?.name ?? null,
            appChannelName: null == a ? null : (Y.A.getChannel(a)?.name ?? null),
            appChannelPending: ec.Ay.isAppChannelPending(e),
            canManageGuild: null == i ? null : Z.A.can(eB.xBc.MANAGE_GUILD, i),
            canManageChannels: null == i ? null : Z.A.can(eB.xBc.MANAGE_CHANNELS, i),
            usesNativeAppChannels: (0, el.KQ)(n),
            botInGuild: (function (e, t) {
                if (null == t) return null;
                let n = eR.A.getMutualGuilds(eK(e));
                return null == n
                    ? null
                    : n.some((e) => {
                          let { guild: n } = e;
                          return n.id === t;
                      });
            })(n, l),
        },
    };
}
function eY(e, t, n) {
    return (function (e, t) {
        let n,
            { applicationId: l, guildId: a, appChannelId: i, openProfile: s, openAutomodSettings: r } = t;
        switch (e) {
            case "launch":
                if ((0, eh.X)(e_.A.getApplication(l)))
                    return ($.A.launchFrame({ applicationId: l, surface: e$.sd }).catch(() => {}), Promise.resolve());
                break;
            case "profile": {
                let e = ek.default.getCurrentUser()?.id;
                if (null != e) return (s(e), Promise.resolve());
                break;
            }
            case "channel":
                if (null != a && null != i) return ((0, H.pX)(eB.BVt.CHANNEL(a, i)), Promise.resolve());
                break;
            case "automod":
                if (null != a && null != r) return (r(a), Promise.resolve());
        }
        if ("dm" !== e && null != a) {
            let e;
            return (
                null != (e = eD.Ay.getDefaultChannel(a)?.id) ? (0, H.pX)(eB.BVt.CHANNEL(a, e)) : (0, eG.u)(a),
                Promise.resolve()
            );
        }
        return ((n = e_.A.getApplication(l)?.bot?.id ?? l), ez.A.openPrivateChannel({ recipientIds: n }));
    })(t, {
        applicationId: e.project.application_id,
        guildId: e.guildId,
        appChannelId: e.appChannelId,
        openProfile: n.openProfile,
        openAutomodSettings: n.openAutomodSettings,
    });
}
async function eX(e, t) {
    let n = ec.Ay.getProject(e),
        l = n?.preview_application_id;
    if (null == n || null == l) return;
    let a = er(n, ec.Ay.getIntegrationStatus(e), t);
    (null == e_.A.getApplication(l) && (await (0, z.TA)(l).catch(() => {})),
        await new Promise((e) => {
            eF.A.openVibegrationsAppInstallModal({
                applicationId: l,
                application: e_.A.getApplication(l) ?? null,
                guildId: a,
                onClose: e,
            });
        }),
        await eo(n, a).catch(() => {}),
        await (0, ea.U1)(e).catch(() => {}));
}
let eQ = new Set(["dm", "guild", "channel"]);
function eZ(e, t, n) {
    let { project: l } = e,
        { platform: a, guildId: i } = n,
        s = l.id,
        r = t.navigatesOnPublish ? t.destination : null,
        o = "user" === l.install_scope || null != r ? null : (0, ee.$C)(s);
    (o?.catch(() => {}), "channel" === r && eJ(s, !0));
    let u = (0, ee.TV)(s).then((e) => {
            if (!0 !== e.ok) {
                let t;
                throw Error(
                    null != (t = e.detail?.trim()) && "" !== t
                        ? en.intl.formatToPlainString(et.default.xTlB8O, { reason: t })
                        : en.intl.string(et.default.fNP6Cd),
                );
            }
            return e;
        }),
        d = u.then(
            () =>
                (0, ea.tZ)(s, { isPreview: !1 }).catch((e) => {
                    console.error("[vibegrations] post-publish refresh failed", s, e);
                }),
            () => {},
        );
    if (
        (u.then(
            () => {
                (null != e.guildId && e2(l),
                    null != r &&
                        (eQ.has(r) && (0, eq.cP)(s),
                        d
                            .then(() => ("channel" === r ? e0(s, i) : void 0))
                            .finally(() => eJ(s, !1))
                            .then(() => eY(eW(s, i) ?? e, r, a))
                            .catch(() => {})));
            },
            (e) => {
                (eJ(s, !1), a.showError(e instanceof Error ? e.message : en.intl.string(et.default.fNP6Cd)));
            },
        ),
        null != o && null != e.guildId)
    ) {
        let t = u.then(() => {});
        (t.catch(() => {}),
            a.openPublishNotes({
                projectId: s,
                guildId: e.guildId,
                applicationId: l.application_id,
                projectName: l.name,
                publish: t,
                initialDraft: o,
            }));
    }
}
function eJ(e, t) {
    eM.h.dispatch({ type: "VIBEGRATIONS_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function e0(e, t) {
    let n = Date.now() + 5e3;
    for (; eW(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function e2(e) {
    (0, eC.eO)(eK(e), { withMutualGuilds: !0 }).catch(() => {});
}
let e1 = new Set();
async function e6(e, t, n) {
    let { guildId: l, platform: a } = n;
    if (!0 === n.busy || e1.has(e)) return;
    let i = eW(e, l);
    if (null == i || ec.Ay.isProjectPublishing(e)) return;
    let s = eU(i.input);
    if (null != s) {
        if (
            ((0, eL.Ar)(e, {
                entryPoint: t,
                publishState: i.input.status?.state ?? null,
                surface: i.input.status?.surface ?? null,
                installScope: i.project.install_scope,
                action: s.action,
            }),
            "open" === s.intent)
        ) {
            null != s.destination && eY(i, s.destination, a).catch(() => {});
            return;
        }
        if (null == s.disabledReason) {
            if (i.input.integrationStatus?.preview_ready !== !0) return void a.showPublishBlocked(eV.NO_PREVIEW);
            if ("consent_then_publish" === s.intent) {
                e1.add(e);
                try {
                    await (a.requestConsent ?? ((e) => eX(e, l)))(e);
                } finally {
                    e1.delete(e);
                }
                if (ec.Ay.isProjectPublishing(e)) return;
                let t = eW(e, l),
                    i = t?.input.integrationStatus ?? null;
                if (
                    null == t ||
                    ew({
                        installScope: t.project.install_scope,
                        previewReady: i?.preview_ready === !0,
                        integrationInstalled: i?.integration_installed ?? null,
                        botPermissionsChanged: i?.bot_permissions_changed === !0,
                    })
                )
                    return;
                eZ(t, s, n);
                return;
            }
            eZ(i, s, n);
        }
    }
}
function e9(e, t) {
    let n = i.useContext(eH),
        l = t ?? n,
        a = l?.guildId ?? null,
        {
            canPublish: s,
            publishing: r,
            project: o,
            guildId: u,
            appChannelId: d,
            installScope: m,
            status: f,
            integrationStatus: h,
            guildName: p,
            appChannelName: g,
            appChannelPending: x,
            canManageGuild: b,
            canManageChannels: v,
            usesNativeAppChannels: j,
            botInGuild: y,
        } = (0, c.cf)(
            [ec.Ay, Q.A, eD.Ay, Y.A, Z.A, eR.A, e_.A],
            () => {
                let t = null == e || null == a ? null : eW(e, a);
                return {
                    canPublish: null != t && (0, ec.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing: null != e && ec.Ay.isProjectPublishing(e),
                    installScope: t?.input.installScope ?? null,
                    status: t?.input.status ?? null,
                    integrationStatus: t?.input.integrationStatus ?? null,
                    guildName: t?.input.guildName ?? null,
                    appChannelName: t?.input.appChannelName ?? null,
                    appChannelPending: t?.input.appChannelPending ?? !1,
                    canManageGuild: t?.input.canManageGuild ?? null,
                    canManageChannels: t?.input.canManageChannels ?? null,
                    usesNativeAppChannels: t?.input.usesNativeAppChannels ?? !1,
                    botInGuild: t?.input.botInGuild ?? null,
                };
            },
            [e, a],
        ),
        w = i.useMemo(
            () =>
                null == o
                    ? null
                    : {
                          installScope: m,
                          status: f,
                          integrationStatus: h,
                          guildName: p,
                          appChannelName: g,
                          appChannelPending: x,
                          canManageGuild: b,
                          canManageChannels: v,
                          usesNativeAppChannels: j,
                          botInGuild: y,
                      },
            [o, m, f, h, p, g, x, b, v, j, y],
        ),
        k = w?.status?.state ?? null,
        A = w?.installScope === "guild" && w.status?.surface === "bot";
    i.useEffect(() => {
        null != o && null != u && A && null != k && "unpublished" !== k && e2(o);
    }, [o?.id, u, A, k]);
    let N = i.useMemo(() => (null == w ? null : eU(w)), [w]),
        C = i.useCallback(
            (t) => {
                null != e &&
                    null != l &&
                    e6(e, t, l).catch((t) => {
                        console.error("[vibegrations] publish action failed", e, t);
                    });
            },
            [e, l],
        );
    return null != l && s && null != N
        ? {
              ...N,
              status: w?.status ?? null,
              guildId: u,
              appChannelId: d,
              publishing: r,
              disabled: r || !0 === l.busy || null != N.disabledReason,
              run: C,
          }
        : null;
}
let e3 = Object.freeze({ x: 0.5, y: 0.5 });
function e4(e) {
    return "" !== e.trim();
}
function e7(e) {
    let t = e.name.trim(),
        n = (function (e) {
            switch (e.role) {
                case "button":
                    return "Button";
                case "link":
                    return "Link";
                case "heading":
                    return "Heading";
                case "textbox":
                    return "Input";
                case "checkbox":
                    return "Checkbox";
                case "radio":
                    return "Radio";
                case "combobox":
                    return "Dropdown";
                case "slider":
                    return "Slider";
                case "switch":
                    return "Toggle";
                case "img":
                    return "Image";
                case "list":
                    return "List";
                case "listitem":
                    return "List item";
                case "tab":
                    return "Tab";
                case "menuitem":
                    return "Menu item";
                case "dialog":
                    return "Dialog";
                case "progressbar":
                    return "Progress bar";
                case "separator":
                    return "Divider";
                case "label":
                    return "Label";
            }
            switch (e.tag) {
                case "img":
                case "picture":
                    return "Image";
                case "svg":
                    return "Icon";
                case "video":
                    return "Video";
                case "canvas":
                    return "Canvas";
                case "p":
                case "span":
                case "strong":
                case "em":
                case "small":
                case "blockquote":
                case "code":
                case "li":
                    return "Text";
                case "form":
                    return "Form";
                case "ul":
                case "ol":
                    return "List";
                case "table":
                    return "Table";
                case "header":
                    return "Header";
                case "footer":
                    return "Footer";
                case "nav":
                    return "Navigation";
                case "section":
                case "article":
                case "main":
                case "aside":
                case "figure":
                    return "Section";
                case "div":
                    return "Container";
            }
            return null;
        })(e);
    return null == n
        ? "" === t
            ? { kind: "" !== e.role ? e.role : e.tag, name: "" }
            : { kind: "", name: t }
        : { kind: n, name: t };
}
function e8(e) {
    let { kind: t, name: n } = e7(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function e5(e) {
    let t = [`<${e.tag}>`];
    "" !== e.role && t.push(`role=${e.role}`);
    let n = e.name.trim();
    return (
        "" !== n && t.push(`name="${n}"`),
        null != e.value && "" !== e.value && t.push(`value="${e.value}"`),
        null != e.path && "" !== e.path && t.push(`path="${e.path}"`),
        t.push(`at x=${e.rect.x} y=${e.rect.y}`),
        t.push(`size ${e.rect.width}x${e.rect.height}`),
        t.push(`ref=${e.ref}`),
        t.join(" ")
    );
}
let te = "[vibegrations:selected] ",
    tt = " \u2014 ";
function tn(e) {
    if (!e.startsWith(te)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        a = n.slice(te.length),
        i = a.indexOf(tt),
        s = (-1 === i ? a : a.slice(0, i)).trim();
    return "" === s ? null : { label: s, body: l };
}
let tl = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    ta = new Map(),
    ti = new Set();
function ts(e) {
    return ta.get(e) ?? tl;
}
function tr(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? ta.set(e, t) : ta.delete(e), [...ti]))
        try {
            n();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function to(e) {
    ta.has(e) && tr(e, tl);
}
function tu(e, t) {
    let n = ts(e);
    n.active && tr(e, { ...n, context: t });
}
function td(e, t) {
    return null != t && e.authorId === t;
}
function tc(e) {
    return (
        ti.add(e),
        () => {
            ti.delete(e);
        }
    );
}
function tm(e) {
    let t = i.useCallback(() => (null == e ? tl : ts(e)), [e]);
    return i.useSyncExternalStore(tc, t, t);
}
var tf = n(559676),
    th = n(84442),
    tp = n(805332);
function tg(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var tx = n(991690),
    tb = n(58736),
    tv = n(580954),
    tj = n(343030),
    ty = n(91242),
    tw = n(317608),
    tk = n(206600),
    tA = n(869146),
    tN = n(742023),
    tC = n(697744),
    tS = n(296167);
function tE(e) {
    let t = (0, tC.c)(),
        { events: n, getDuration: l } = t;
    return (
        i.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function a() {
                    ((e = null), null != l()) ? n.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(a));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [n, l]),
        i.useEffect(() => {
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e]),
        t
    );
}
function tI(e) {
    let { className: t } = e,
        { Component: n, events: l } = tE(3e4);
    return (0, a.jsxs)("div", {
        className: t,
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: tS.o,
                children: en.intl.string(et.default.jTuX7C),
            }),
        ],
    });
}
var tT = n(328284);
function tP(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: r()(tT.Bf, l && tT.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: tT.Ux,
                children: [
                    (0, a.jsx)(I.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var tM = n(963691);
function t_(e) {
    let { applicationId: t, surface: n, frameOverlay: l } = e,
        { frame: s, state: r } = (0, tk.A)({ applicationId: t, surface: n }),
        o = (0, e$.VA)(t, n);
    switch (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = ty.A.getFrame(e);
                    if (null == t || tA.A.getWindowOpen(eB.MLl.ACTIVITY_POPOUT)) return;
                    let n = ty.A.getMainFrame()?.id === e;
                    t.intent === e$.sV.MAIN
                        ? (n || $.A.promoteFrame(e), $.A.resetFrameLayoutModes(e))
                        : n && $.A.clearMainFrameSlot();
                })(o),
                () => {
                    let e;
                    null != (e = ty.A.getFrame(o)) &&
                        ((0, e$.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        tN.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === e$.sV.INLINE && $.A.promoteFrame(o),
                              $.A.updateFrameLayoutMode({ frameId: o, layoutMode: e$.y0.PIP }))
                            : e.intent === e$.sV.MAIN && $.A.demoteMainFrame(o));
                }
            ),
            [o],
        ),
        r)
    ) {
        case tk.n.Launched:
            return (0, a.jsx)(tw.A, { frameId: s.id, level: tj.A.WithinAppContent, className: tM.Z7, overlay: l });
        case tk.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: tM.qs,
                children: (0, a.jsx)(tP, {
                    title: en.intl.string(et.default["4f6Vkr"]),
                    body: en.intl.string(et.default.LJ2q1H),
                }),
            });
        case tk.n.NoApplication:
            return (0, a.jsx)(tI, { className: tM.qs });
        case tk.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: tM.qs,
                children: (0, a.jsx)(tP, {
                    title: en.intl.string(et.default.FHOJiH),
                    body: en.intl.string(et.default["1yLQoV"]),
                }),
            });
        case tk.n.Error:
            return (0, a.jsxs)("div", {
                className: tM.qs,
                children: [
                    (0, a.jsx)(I.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: en.intl.string(et.default.MeLWCr),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: tM.tj,
                        children: en.intl.string(et.default["1RCbQT"]),
                    }),
                ],
            });
        case tk.n.AwaitingLaunch:
        case tk.n.Loading:
            return (0, a.jsx)("div", { className: tM.qs, children: (0, a.jsx)(A.y, {}) });
    }
}
var tR = n(334738),
    tD = n(688438),
    tL = n(355622),
    tF = n(531685),
    tO = n(365971),
    tz = n(362417);
function tG(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: tz.f,
        children: [
            (0, a.jsx)(j.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function tB() {
    return (0, a.jsx)("div", { className: tz.f, children: (0, a.jsx)(A.y, {}) });
}
function t$(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: s, isLoading: r } = (0, z.YY)(l),
        o = s?.bot?.id ?? null,
        u = (0, c.bG)([Y.A], () => {
            if (null == o) return null;
            let e = Y.A.getDMFromUserId(o);
            return null != e ? Y.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        i.useEffect(() => {
            null != t && ez.A.preload(eB.ME, t);
        }, [t]),
        (n = (0, c.bG)([tF.A], () => tF.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, tO.Xg)();
            return (
                (0, tR.yl)(t, e),
                () => {
                    (0, tR.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, m] = i.useState(null),
        f = null != o && d === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            ez.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || m(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    r)
        ? (0, a.jsx)(tB, {})
        : null == o || f
          ? (0, a.jsx)(tG, { message: en.intl.string(et.default.bl4eBc) })
          : null == u
            ? (0, a.jsx)(tB, {})
            : (0, a.jsx)("div", {
                  className: tz.g,
                  children: (0, a.jsx)(tD.A, { channel: u, guild: null, chatInputType: tL.oU.SIDEBAR }, u.id),
              });
}
var tq = n(887909),
    tU = n(570962),
    tV = n(590744);
function tH(e) {
    let {
        label: t,
        title: n,
        subtitle: l,
        header: i,
        body: s,
        actions: o,
        nextStep: u,
        appDetails: d,
        hasContentBackground: c,
        noPadding: m,
        obscured: f,
    } = (0, tq.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: tV.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: tV.rf,
                children: (0, a.jsx)(tU.A, {
                    obscured: !0 === f,
                    children: (0, a.jsxs)("div", {
                        className: tV.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: tV.z3,
                                      children: [
                                          (0, a.jsx)(I.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: n,
                                          }),
                                          null != l
                                              ? (0, a.jsx)(v.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: l,
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            i,
                            (0, a.jsxs)("div", {
                                className: r()(tV.Qs, c ? tV.cw : null, m ? tV.pN : null),
                                children: [s, null == u ? d : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != o && o.length > 0
                ? (0, a.jsx)("div", {
                      className: tV.o1,
                      children: o.map((e, t) => (0, a.jsx)(N.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var tK = n(486610),
    tW = n(531913),
    tY = n(633075),
    tX = n(946356),
    tQ = n(139730),
    tZ = n(58216),
    tJ = n(71495);
function t0(e) {
    let { applicationId: t } = e,
        n = (0, c.bG)([ek.default], () => ek.default.getCurrentUser());
    return null == n ? null : (0, a.jsx)(t2, { applicationId: t, user: n });
}
function t2(e) {
    let { applicationId: t, user: n } = e,
        l = (0, c.bG)([e_.A], () => e_.A.getApplication(t)),
        s = i.useMemo(() => new tY.R({ applicationId: t }), [t]),
        r = (0, tW.A)(n.id, t),
        o = r.surfaceConfigs,
        u = ey({
            widgetTop: null != o[em.m.WIDGET_TOP],
            widgetBottom: null != o[em.m.WIDGET_BOTTOM],
            miniProfile: null != o[em.m.MINI_PROFILE],
        });
    return u.hasAny
        ? (0, a.jsx)("div", {
              className: tJ.$C,
              children: (0, a.jsxs)("div", {
                  className: tJ.PV,
                  children: [
                      u.hasMainCard
                          ? (0, a.jsx)("div", {
                                className: tJ.a9,
                                children: (0, a.jsx)(tX.A.Overlay, {
                                    className: tJ.Qb,
                                    children: (0, a.jsx)(tZ.A, {
                                        user: n,
                                        widget: s,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      u.hasPopoutCard && null != l
                          ? (0, a.jsx)("div", {
                                className: tJ.ql,
                                children: (0, a.jsx)(tQ.A, { application: l, rendererProps: r, renderText: tK.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var t1 = n(976102);
function t6(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            previewReady: s,
            previewGate: r,
            availability: o,
            activeMode: u,
            widgetApplicationId: d,
            frameOverlay: c,
        } = e,
        m = (0, q.A)(t, l),
        { data: f, isLoading: h } = (0, z.YY)(t ?? void 0);
    if (
        (i.useEffect(() => {
            r?.type === "permissions" && null != m && (0, tv.A)().leaveFrame(m.id);
        }, [m, r?.type]),
        r?.type === "checking")
    )
        return (0, a.jsx)("div", { className: t1.q, children: (0, a.jsx)(A.y, {}) });
    if (r?.type === "permissions")
        return (0, a.jsx)("div", {
            className: t1.q,
            children: null == r.authorizeProps ? (0, a.jsx)(A.y, {}) : (0, a.jsx)(tH, { ...r.authorizeProps }),
        });
    if (!s) return (0, a.jsx)(tI, { className: t1.q });
    if (null == t) return null;
    if (h && null == f) return (0, a.jsx)("div", { className: t1.q, children: (0, a.jsx)(A.y, {}) });
    let p = o.showModeSwitch && null != u ? { role: "tabpanel", id: ev(u), "aria-label": eb(u) } : {};
    return (0, a.jsxs)("div", {
        className: t1.R,
        ...p,
        children: [
            ("frame" === u && o.modes.includes("frame")) || 0 === o.modes.length
                ? (0, a.jsx)(t_, { applicationId: t, surface: l, frameOverlay: c })
                : null,
            "widget" === u && null != d
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, a.jsx)("div", {
                          className: t1.q,
                          children: (0, a.jsx)(tP, {
                              wide: !0,
                              title: en.intl.string(et.default.SGHO9K),
                              body: en.intl.string(et.default["pV/rS2"]),
                          }),
                      })
                    : (0, a.jsx)(t0, { applicationId: d })
                : null,
            "bot" === u && null != n ? (0, a.jsx)(t$, { previewApplicationId: n }) : null,
        ],
    });
}
var t9 = n(689175),
    t3 = n(65593),
    t4 = n(903586);
function t7(e) {
    return !(0, eN.BL)(e) && !0 !== e.stopRequested;
}
var t8 = n(935208),
    t5 = n(435558),
    ne = n.n(t5),
    nt = n(506774);
let nn = "VibegrationsComposerDrafts";
function nl() {
    return nt.w.get(nn) ?? {};
}
let na = new Map(),
    ni = ne().throttle(() => {
        if (0 === na.size) return;
        let e = nl();
        for (let [t, n] of na) "" === n ? delete e[t] : (e[t] = n);
        (na.clear(), nt.w.set(nn, e));
    }, 1e3);
class ns extends c.Ay.Store {
    getDraft(e) {
        let t = na.get(e);
        return null != t ? t : (nl()[e] ?? "");
    }
}
let nr = new ns(eM.h, {
    LOGOUT: function () {
        return (na.clear(), ni.cancel(), nt.w.remove(nn), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (na.set(t, n), ni(), "" === n && ni.flush(), !1);
    },
});
function no(e) {
    return "" !== nr.getDraft(e).trim();
}
(n(323874), n(14289), n(35956));
var nu = n(839214);
let nd = [],
    nc = 1,
    nm = (0, nu.D)(() => ({ draftsByProject: {} }));
function nf(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? nd;
}
function nh(e, t) {
    return nf(nm.getState(), e, t);
}
function np(e, t, n) {
    let { draftsByProject: l } = nm.getState();
    nm.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function ng(e, t, n, l) {
    let a = nh(e, t);
    return (
        !!a.some((e) => e.localId === n) &&
        (np(
            e,
            t,
            a.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function nx(e, t) {
    (0, ee.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function nb(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && nx(e, t.ref.id));
}
function nv(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = nm.getState(),
        a = l[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let l of t ?? nd) n ? nb(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: i, ...s } = l;
    nm.setState({ draftsByProject: s });
}
function nj(e, t) {
    let n = nh(e, t);
    if (0 !== n.length) {
        for (let t of n) nb(e, t);
        np(e, t, nd);
    }
}
function ny(e, t) {
    let n = nh(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (np(e, t, nd), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function nw(e, t) {
    let { clarificationAnswers: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = nh(e, "chat"),
        a = l.length > 0 && l.every((e) => "ready" === e.status) ? ny(e, "chat") : [];
    (0, ee.dv)(e, t, a, { clarificationAnswers: n });
}
(eM.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(nm.getState().draftsByProject)) nv(e, { deleteFromWorker: !0 });
}),
    eM.h.subscribe("VIBEGRATIONS_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        nv(t, { deleteFromWorker: !1 });
    }));
var nk = n(717447),
    nA = n(29080),
    nN = n(46054),
    nC = n(76275);
function nS(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : en.intl.string(et.default.MdXWEK);
}
function nE(e) {
    var t;
    let n,
        l,
        { steps: a, content: i, hasProposal: s, hasAttachments: r } = e,
        o = (0, t4.B4)(a),
        u = o.filter((e) => "message" === e.type).at(-1),
        d =
            !s &&
            null != u &&
            ((t = u.content),
            (n = t.trim()),
            (l = i.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? u
                : null,
        c = o.filter((e) => e !== d),
        m = c.filter((e) => "message" === e.type).at(-1),
        f = !s && "" !== i.trim();
    return {
        streamed: c,
        lastStreamedMessage: m,
        replyKey: d?.key,
        showsClosingMessage: f,
        closingContent: f ? i.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: r, showsClosingMessage: f, endsOnStreamedMessage: (0, t4.Lf)(a) }),
    };
}
(n(134528), n(947204));
var nI = n(478016),
    nT = n(331322),
    nP = n(34136);
function nM(e) {
    let { title: t, trailing: n, children: l, className: i, headerClassName: s, ...o } = e;
    return (0, a.jsxs)("section", {
        className: r()(nP.Nr, i),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: r()(nP.wx, null != n && nP.o5, s),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var n_ = n(113757);
function nR(e) {
    let { idea: t, selected: n, onPick: l } = e,
        s = i.useId(),
        o = null == l;
    return (0, a.jsxs)(y.D, {
        className: r()(n_.nM, { [n_.f1]: o, [n_.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": en.intl.formatToPlainString(et.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: n_.jo,
                children: [
                    n
                        ? (0, a.jsx)(nI.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: n_.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: n_.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      id: s,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function nD(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [s, r] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (r((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(nM, {
        title: en.intl.string(et.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                nR,
                { idea: e, selected: s.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function nL(e) {
    let { onAsk: t } = e;
    return (0, a.jsx)(nT.B, {
        align: "start",
        "data-vibegrations-ideas-offer": !0,
        children: (0, a.jsx)(N.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: en.intl.string(et.default.cwTe5o),
        }),
    });
}
var nF = n(435619),
    nO = n(885574),
    nz = n(231483),
    nG = n(430392),
    nB = n(632015),
    n$ = n(256905),
    nq = n(847374),
    nU = n(320448),
    nV = n(289906);
function nH(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nK(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: s,
            hideLabel: o,
            bodyClassName: u,
            beforeBody: d,
            children: c,
            ...m
        } = e,
        f = i.useId(),
        [h, p] = i.useState(!l),
        [g, x] = i.useState(l);
    g !== l && (x(l), p(!l));
    let b = i.useCallback(() => p((e) => !e), []),
        v = h ? nq.a : nU._,
        j = null != n || l;
    return (0, a.jsxs)(nM, {
        ...m,
        title: t,
        trailing: j
            ? (0, a.jsxs)("span", {
                  className: nV.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(y.D, {
                                className: nV.L$,
                                onClick: b,
                                "aria-expanded": h,
                                "aria-controls": f,
                                "aria-label": h ? o : s,
                                children: (0, a.jsx)(v, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : nV.RG,
        "data-superseded": l ? "true" : void 0,
        children: [d, (0, a.jsx)("div", { id: f, className: r()(nV.rf, u), hidden: !h, children: c })],
    });
}
var nW = n(782603),
    nY = n(628284),
    nX = n(97808),
    nQ = n(778712),
    nZ = n(809115),
    nJ = n(200700);
let n0 = {
        alert: { label: () => en.intl.string(et.default.EVMdYA), blockedStyle: !1 },
        block: { label: () => en.intl.string(et.default.OlKZgi), blockedStyle: !0 },
        timeout: { label: () => en.intl.string(et.default["mtBG+G"]), blockedStyle: !0 },
        allow: { label: () => en.intl.string(et.default.DLAXIs), blockedStyle: !1 },
    },
    n2 = {
        blocked: { label: () => en.intl.string(et.default.OlKZgi), tone: "red" },
        alert: { label: () => en.intl.string(et.default["5hI77G"]), tone: "blurple" },
        allowed: { label: () => en.intl.string(et.default.DLAXIs), tone: "green" },
    },
    n1 = ["blocked", "alert", "allowed"],
    n6 = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var n9 = n(979087),
    n3 = n(13673);
let n4 = { blocked: nz.ShieldIcon, alert: nW.BellIcon, allowed: nY.y },
    n7 = {
        blurple: { text: "text-brand", icon: F.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: F.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: F.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function n8(e) {
    var t, n;
    let l,
        i,
        { example: s } = e,
        r =
            "" ===
            (i = [
                "timeout" !== (t = s).outcome || null == t.timeout_seconds
                    ? null
                    : en.intl.formatToPlainString(en.t["3LYql6"], {
                          duration:
                              ((n = t.timeout_seconds),
                              null != (l = (0, nJ.getFriendlyDurationString)(n))
                                  ? l
                                  : n % 604800 == 0
                                    ? en.intl.formatToPlainString(en.t.EmoBD2, { weeks: n / 604800 })
                                    : n % 86400 == 0
                                      ? en.intl.formatToPlainString(en.t["k2UNz+"], { days: n / 86400 })
                                      : n % 3600 == 0
                                        ? en.intl.formatToPlainString(en.t.xCjYxK, { hours: n / 3600 })
                                        : n % 60 == 0
                                          ? en.intl.formatToPlainString(en.t.opVZ9q, { mins: n / 60 })
                                          : en.intl.formatToPlainString(en.t["4zv/jq"], { secs: n })),
                      }),
                s.reason,
            ]
                .filter((e) => null != e && "" !== e)
                .join(" "))
                ? null
                : i;
    return null == r
        ? null
        : (0, a.jsx)(v.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: r,
          });
}
function n5(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: i } = n0[n.outcome];
    return (0, a.jsxs)("li", {
        className: r()(n9.nM, { [r()(n9.HV, n3.DX)]: i }),
        children: [
            (0, a.jsx)(k.A, { children: `${l()}: ` }),
            (0, a.jsx)("span", {
                className: n9.my,
                children: (0, a.jsx)(nX.eu, {
                    src: (0, J.AE)(void 0, void 0),
                    size: nQ._3.SIZE_24,
                    "aria-label": en.intl.string(et.default.HMhHBG),
                }),
            }),
            (0, a.jsxs)("div", {
                className: n9.fw,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), nN.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, a.jsx)(n8, { example: n }),
                ],
            }),
        ],
    });
}
function le(e) {
    let { group: t } = e,
        n = i.useId(),
        l = n2[t.section],
        s = n4[t.section],
        r = n7[l.tone];
    return (0, a.jsxs)("div", {
        className: n9.uW,
        children: [
            (0, a.jsxs)("div", {
                className: n9.bV,
                children: [
                    (0, a.jsx)(s, { size: "xs", color: r.icon, "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, {
                        id: n,
                        variant: "text-xs/semibold",
                        color: r.text,
                        className: n9.a9,
                        children: l.label(),
                    }),
                ],
            }),
            (0, a.jsx)("ul", {
                className: n9.Ge,
                "aria-labelledby": n,
                children: t.examples.map((e, t) => (0, a.jsx)(n5, { example: e }, t)),
            }),
        ],
    });
}
function lt() {
    let { avatarSrc: e, eventHandlers: t } = (0, nZ.a)(!0);
    return (0, a.jsx)("span", {
        className: n9.Gy,
        ...t,
        children: (0, a.jsx)(nX.eu, { src: e, size: nQ._3.SIZE_16, "aria-label": en.intl.string(en.t.hG1StD) }),
    });
}
function ln(e) {
    var t;
    let { automod: n } = e;
    return (0, a.jsx)("div", {
        className: n9.K1,
        children: ((t = n.examples),
        n1
            .map((e) => ({ section: e, examples: t.filter((t) => n6[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, a.jsx)(le, { group: e }, e.section)),
    });
}
var ll = n(824757);
function la(e) {
    let { label: t, icon: n, info: l, children: i } = e;
    return (0, a.jsxs)("section", {
        className: ll.uW,
        children: [
            (0, a.jsxs)("span", {
                className: ll.a9,
                children: [
                    n,
                    (0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            i,
        ],
    });
}
function li(e) {
    let { text: t, label: n } = e;
    return (0, a.jsx)(w.m, {
        text: t,
        children: (0, a.jsx)(y.D, {
            className: ll.bk,
            "aria-label": n,
            children: (0, a.jsx)(nO.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function ls(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(la, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: ll.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: ll.jw,
                              children: (0, a.jsx)(v.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  tag: "span",
                                  children: e
                                      .split("_")
                                      .map((e) => (0 === e.length ? e : e[0] + e.slice(1).toLowerCase()))
                                      .join(" "),
                              }),
                          },
                          e,
                      ),
                  ),
              }),
          });
}
function lr() {
    return (0, a.jsxs)("span", {
        className: ll.L6,
        children: [
            (0, a.jsx)(nz.ShieldIcon, {
                size: "custom",
                width: 16,
                height: 16,
                color: "currentColor",
                "aria-hidden": !0,
            }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                tag: "span",
                children: en.intl.string(et.default.Iz8bsB),
            }),
        ],
    });
}
function lo(e) {
    let { isActivity: t, hasWidget: n } = e,
        l = t ? j.k : nG.RobotIcon;
    return (0, a.jsxs)("span", {
        className: ll.K2,
        children: [
            n
                ? (0, a.jsxs)("span", {
                      className: ll.L6,
                      children: [
                          (0, a.jsx)(nB.f, {
                              size: "custom",
                              width: 16,
                              height: 16,
                              color: "currentColor",
                              "aria-hidden": !0,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: en.intl.string(et.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("span", {
                className: ll.L6,
                children: [
                    (0, a.jsx)(l, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: en.intl.string(t ? en.t.IC5Ann : et.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function lu(e) {
    let { projectId: t, design: n } = e,
        { id: l } = n,
        {
            src: s,
            gone: r,
            handleError: o,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                [a, s] = i.useState(!1),
                [r, o] = i.useState(0);
            return (
                i.useEffect(() => {
                    let n = !1;
                    return (
                        (0, ee.PK)(e, t).then(
                            (e) => {
                                n || l(e);
                            },
                            () => {
                                n || (0 === r ? o(1) : s(!0));
                            },
                        ),
                        () => {
                            n = !0;
                        }
                    );
                }, [e, t, r]),
                {
                    src: n,
                    gone: a,
                    handleError: i.useCallback(() => {
                        (l(null),
                            (0, ee.n6)(e, t).then(
                                (e) => {
                                    e && 0 === r ? o(1) : s(!0);
                                },
                                () => s(!0),
                            ));
                    }, [e, t, r]),
                }
            );
        })(t, l),
        u = en.intl.string(et.default.FW8UcU),
        d = i.useCallback(() => {
            (0, ee.PK)(t, l).then(
                (e) => {
                    (0, n$.R)({
                        items: [{ type: "IMAGE", url: e, alt: u }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, l, u]);
    return r
        ? null
        : (0, a.jsx)(la, {
              label: en.intl.string(et.default["9W8SbY"]),
              info: (0, a.jsx)(li, {
                  text: en.intl.string(et.default.DXe2dP),
                  label: en.intl.string(et.default.Y6y4nQ),
              }),
              children: (0, a.jsx)(y.D, {
                  className: ll.xX,
                  onClick: d,
                  "aria-label": en.intl.string(et.default.CBrpNv),
                  children: null != s ? (0, a.jsx)("img", { src: s, alt: u, className: ll.sN, onError: o }) : null,
              }),
          });
}
function ld(e) {
    let { projectId: t, proposal: n, version: l, onApprove: i } = e,
        { automod: s } = n,
        r = l?.superseded === !0,
        o = n.what_changed?.trim() ?? "";
    return (0, a.jsxs)(nK, {
        title:
            r && null != l
                ? en.intl.formatToPlainString(et.default.KdZinO, { version: l.version })
                : en.intl.string(et.default["60htw+"]),
        meta: r
            ? (0, a.jsx)(nH, { children: en.intl.string(et.default.o2zmBB) })
            : null != s
              ? (0, a.jsx)(lr, {})
              : (0, a.jsx)(lo, { isActivity: !0 === n.is_activity, hasWidget: null != n.widget_config }),
        superseded: r,
        showLabel: en.intl.string(et.default["1AKkZ2"]),
        hideLabel: en.intl.string(et.default.dm6fQ8),
        bodyClassName: ll.rf,
        "data-vibegrations-plan-card": !0,
        children: [
            "" !== o
                ? (0, a.jsx)(la, {
                      label: en.intl.string(et.default.ucdH2a),
                      children: (0, a.jsx)(v.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: o,
                      }),
                  })
                : null,
            (0, a.jsx)(v.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: n.summary,
            }),
            null != s && s.examples.length > 0
                ? (0, a.jsx)(la, {
                      label: en.intl.string(et.default.xzy7Ie),
                      icon: (0, a.jsx)(lt, {}),
                      info: (0, a.jsx)(li, {
                          text: en.intl.string(et.default.CJRQat),
                          label: en.intl.string(et.default.Uw7rNo),
                      }),
                      children: (0, a.jsx)(ln, { automod: s }),
                  })
                : null,
            null == s && null != n.design_image ? (0, a.jsx)(lu, { projectId: t, design: n.design_image }) : null,
            n.changes.length > 0
                ? (0, a.jsx)(la, {
                      label: en.intl.string(et.default.KLyB8Y),
                      children: (0, a.jsx)("ul", {
                          className: ll.p_,
                          children: n.changes.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: ll.Aw,
                                      children: (0, a.jsx)(v.E, {
                                          variant: "experimental/body-md/normal",
                                          color: "text-default",
                                          tag: "span",
                                          selectable: !0,
                                          children: e,
                                      }),
                                  },
                                  t,
                              ),
                          ),
                      }),
                  })
                : null,
            n.commands.length > 0
                ? (0, a.jsx)(la, {
                      label: en.intl.string(en.t["0hKkS+"]),
                      children: (0, a.jsx)("ul", {
                          className: ll.p_,
                          children: n.commands.map((e, t) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: ll.uX,
                                      children: [
                                          (0, a.jsxs)(v.E, {
                                              variant: "experimental/body-md/medium",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children: [
                                                  "launch" === e.kind || 4 === e.type
                                                      ? "\u21EA /"
                                                      : 2 === e.type || 3 === e.type
                                                        ? ""
                                                        : "/",
                                                  e.name,
                                              ],
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "experimental/body-md/normal",
                                              color: "text-muted",
                                              tag: "span",
                                              selectable: !0,
                                              children: e.description,
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      }),
                  })
                : null,
            (0, a.jsx)(ls, { label: en.intl.string(et.default.ieqTtP), names: n.bot_permissions ?? [] }),
            (0, a.jsx)(ls, { label: en.intl.string(et.default.Cn9qix), names: n.privileged_intents ?? [] }),
            null == i || r
                ? null
                : (0, a.jsxs)("div", {
                      className: ll.o1,
                      children: [
                          (0, a.jsx)(N.$, {
                              variant: "primary",
                              size: "sm",
                              text: en.intl.string(et.default["hG0Y0+"]),
                              onClick: i,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: en.intl.string(et.default.Vl3IL0),
                          }),
                      ],
                  }),
        ],
    });
}
var lc = n(548118);
function lm(e) {
    return null != e && e.status?.state === "unpublished";
}
function lf(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, c.bG)([Q.A], () => (null == n ? null : Q.A.getGuild(n)));
    return (0, a.jsx)(nT.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(nT.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, a.jsx)(w.m, {
                    text: t.disabledReason,
                    asContainer: !0,
                    children: (0, a.jsx)(N.$, {
                        variant: "primary",
                        size: "sm",
                        loading: t.publishing,
                        disabled: t.disabled,
                        onClick: () => t.run("card"),
                        text: t.label,
                    }),
                }),
                null != l
                    ? (0, a.jsxs)(nT.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: en.intl.string(et.default.FLbAwN),
                              }),
                              (0, a.jsx)(lc.Ay, { guild: l, size: lc.Ay.Sizes.SMOL }),
                              (0, a.jsx)(v.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  lineClamp: 1,
                                  children: (function (e) {
                                      let t = Array.from(e);
                                      if (t.length <= 24) return e;
                                      let n = t.slice(0, 23).join("");
                                      return `${n.trimEnd()}\u{2026}`;
                                  })(l.name),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
function lh(e) {
    let { projectId: t } = e,
        n = e9(t);
    return null != n && lm(n) ? (0, a.jsx)(lf, { publish: n }) : null;
}
var lp = n(406810),
    lg = n(381849),
    lx = n(977628);
function lb(e) {
    let t = Date.parse(e);
    return Number.isNaN(t)
        ? { relative: null, absolute: null }
        : {
              relative: (0, lg.WR)({ seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)), getFormatter: lg._e }),
              absolute: new Date(t).toLocaleString(),
          };
}
function lv(e) {
    return (0, m.A)({
        title: en.intl.string(et.default.qOUOPE),
        subtitle: en.intl.string(et.default.k2JBj5),
        confirmText: en.intl.string(et.default["+sRK16"]),
        variant: "critical",
        onConfirm: e,
    });
}
function lj(e) {
    let t,
        { projectId: n, onClose: l, onRestore: s } = e,
        [r, o] = i.useState({ status: "loading" });
    return (
        i.useEffect(() => {
            let e = !1;
            return (
                (0, ee.ST)(n)
                    .then((t) => {
                        e || o({ status: "loaded", entries: t });
                    })
                    .catch(() => {
                        e || o({ status: "failed" });
                    }),
                () => {
                    e = !0;
                }
            );
        }, [n]),
        (t =
            "loading" === r.status
                ? (0, a.jsx)("div", { className: lx.E8, children: (0, a.jsx)(A.y, {}) })
                : "failed" === r.status
                  ? (0, a.jsx)("div", {
                        className: lx.E8,
                        role: "alert",
                        children: (0, a.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: en.intl.string(et.default["mSJn+K"]),
                        }),
                    })
                  : 0 === r.entries.length
                    ? (0, a.jsx)("div", {
                          className: lx.E8,
                          children: (0, a.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: en.intl.string(et.default.TOmYPT),
                          }),
                      })
                    : (0, a.jsx)(P.Ip, {
                          className: lx.p_,
                          children: (0, a.jsx)("div", {
                              className: lx.jO,
                              children: r.entries.map((e) => {
                                  let t = lb(e.authoredAt);
                                  return (0, a.jsxs)(
                                      y.D,
                                      {
                                          className: lx.f_,
                                          onClick: () =>
                                              lv(() => {
                                                  (l(), s(e));
                                              }),
                                          children: [
                                              (0, a.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: lx.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != t.relative &&
                                                  (0, a.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: t.absolute ?? void 0,
                                                      children: t.relative,
                                                  }),
                                          ],
                                      },
                                      e.sha,
                                  );
                              }),
                          }),
                      })),
        (0, a.jsxs)("section", {
            className: lx.nd,
            "aria-label": en.intl.string(et.default.jAWwzi),
            children: [
                (0, a.jsxs)(tb.Ay, {
                    "aria-label": en.intl.string(et.default.jAWwzi),
                    toolbar: (0, a.jsx)(tb.Ay.Icon, { icon: D.P, tooltip: en.intl.string(en.t.cpT0Cq), onClick: l }),
                    children: [
                        (0, a.jsx)(tb.Ay.ChannelIcon, { icon: lp.ClockIcon, "aria-hidden": !0 }),
                        (0, a.jsx)(tb.Ay.Title, { children: en.intl.string(et.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: lx.rf, children: t }),
            ],
        })
    );
}
var ly = n(584698);
function lw(e) {
    let { proposal: t, onRestore: n } = e,
        l = lb(t.authored_at);
    return (0, a.jsx)(nM, {
        title: en.intl.string(et.default.khdMoL),
        children: (0, a.jsxs)("div", {
            className: ly.r,
            children: [
                (0, a.jsxs)("div", {
                    className: ly.z,
                    children: [
                        (0, a.jsx)(v.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(N.$, {
                          variant: "secondary",
                          size: "sm",
                          text: en.intl.string(et.default.eSDVDt),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var lk = n(530557),
    lA = n(872162);
function lN(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var lC = n(192308),
    lS = n(479191);
function lE(e) {
    let { projectId: t, cardId: l, request: s, status: o, awaiting: u } = e,
        d = i.useCallback(() => {
            (0, lC.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: s });
            });
        }, [t, s]),
        c = i.useMemo(() => s.fields.map((e) => ({ id: e.name, label: e.label, icon: lk.R })), [s.fields]),
        m = (function (e, t) {
            let [n, l] = i.useState(() => lN(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(lN(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, o),
        f = r()(lS.Lo, { [lS.jY]: m });
    return "superseded" === o
        ? (0, a.jsx)(
              "article",
              {
                  className: f,
                  children: (0, a.jsx)(v.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: en.intl.string(et.default["XvX+Pj"]),
                  }),
              },
              o,
          )
        : "inactive" === o
          ? (0, a.jsxs)(
                "article",
                {
                    className: f,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: en.intl.string(et.default["/e28TK"]),
                        }),
                        (0, a.jsx)(lA.C, { label: en.intl.string(et.default["/e28TK"]), size: "xs", items: c }),
                    ],
                },
                o,
            )
          : "pending" === o
            ? (0, a.jsx)(
                  "article",
                  {
                      className: lS.Lo,
                      children: (0, a.jsx)(lA.C, { label: en.intl.string(et.default["/e28TK"]), size: "xs", items: c }),
                  },
                  o,
              )
            : "received" === o
              ? (0, a.jsxs)(
                    "article",
                    {
                        className: f,
                        children: [
                            (0, a.jsxs)("div", {
                                className: lS.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: lS.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(nY.y, {
                                            size: "xs",
                                            color: F.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(v.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: en.intl.string(et.default.stFB6A),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(lA.C, { label: en.intl.string(et.default.stFB6A), size: "xs", items: c }),
                        ],
                    },
                    o,
                )
              : (0, a.jsxs)("article", {
                    className: lS.Lo,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: en.intl.string(null != u ? et.default.sKNh1M : et.default["/e28TK"]),
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != s.note && "" !== s.note ? s.note : en.intl.string(et.default.jxvtin),
                        }),
                        (0, a.jsx)(lA.C, { label: en.intl.string(et.default["/e28TK"]), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: lS.sq,
                            children: (0, a.jsx)(N.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: d,
                                text: en.intl.string(et.default["gVV+HX"]),
                            }),
                        }),
                    ],
                });
}
var lI = n(349735),
    lT = n(450112),
    lP = n(973e3);
function lM(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        i = null != n.note && "" !== n.note ? n.note : en.intl.string(et.default["V+DBhs"]);
    return (0, a.jsx)(lI.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: s, submit: o } = e;
            function u(e) {
                (e.preventDefault(), o());
            }
            let d = (0, a.jsx)(N.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: s,
                disabled: !n,
                text: en.intl.string(et.default.Tuz9vw),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: lP.Mk,
                      onSubmit: u,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: en.intl.string(et.default.wgDhiQ),
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: i,
                          }),
                          t,
                          (0, a.jsx)("div", { className: lP.p0, children: d }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: r()(lT.nd, lT.jx),
                      "aria-label": en.intl.string(et.default.wgDhiQ),
                      onSubmit: u,
                      children: [
                          (0, a.jsxs)("div", {
                              className: lT.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: lT.TK,
                                      children: en.intl.string(et.default.wgDhiQ),
                                  }),
                                  (0, a.jsx)(y.D, {
                                      className: r()(lT.gb, lT.Q7),
                                      onClick: l,
                                      "aria-label": en.intl.string(et.default["6UTDHm"]),
                                      children: (0, a.jsx)(D.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: lP.DQ,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: i,
                                  }),
                                  t,
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: lT.qr,
                              children: (0, a.jsx)("div", { className: lT.zt, children: d }),
                          }),
                      ],
                  });
        },
    });
}
var l_ = n(196582);
let lR = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    lD = {
        snail: () => et.default["2l3AEQ"],
        goat: () => et.default["+FPL+I"],
        frog: () => et.default.w4GOfR,
        bunny: () => et.default.XmZT9M,
        cat: () => et.default.NnydwQ,
        caterpillar: () => et.default["4iXcNT"],
        butterfly: () => et.default.DoTGt5,
        dog: () => et.default["9zxqmP"],
        spider: () => et.default.HF0T3L,
        bee: () => et.default.XTzDga,
        bot: () => et.default.abtC2b,
    },
    lL = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: s, height: s },
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        goat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: s, height: s },
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        frog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: s, height: s },
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        bunny: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: s, height: s },
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        cat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: s, height: s },
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        caterpillar: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: s, height: s },
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        butterfly: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: s, height: s },
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
        dog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: s, height: s },
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        spider: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: s, height: s },
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        bee: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: s, height: s },
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
                return (0, a.jsx)("img", {
                    style: { width: s, height: s },
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: i ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function lF(e) {
    return { ...lL[e], name: en.intl.string(lD[e]()) };
}
function lO(e) {
    return lR.includes(e) ? lF(e) : void 0;
}
function lz(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % lR.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, lR[(t + n) % lR.length]);
            }),
            l
        );
    })(e))
        t.set(n, lF(l));
    return t;
}
var lG = n(683063),
    lB = n(705754),
    l$ = n(883455),
    lq = n(13699);
function lU(e) {
    let { projectId: t, lane: n, Illocon: l, tint: i, name: s, connectsDown: r } = e,
        o = n.task,
        u = "running" === o.status,
        d = (0, t4.SY)(n.steps),
        c = u
            ? null != d
                ? (0, t4.WQ)(d)
                : nS(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(nS(e));
                  switch (e.status) {
                      case "failed":
                          return en.intl.formatToPlainString(et.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return en.intl.formatToPlainString(et.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return en.intl.formatToPlainString(et.default.vuv9bT, {
                                  task: t,
                                  duration: (0, nC.MB)(e.durationMs),
                              });
                          return en.intl.formatToPlainString(et.default.KS49RN, { task: t });
                      default:
                          return en.intl.formatToPlainString(et.default.KS49RN, { task: t });
                  }
              })(o),
        m = u ? d : void 0,
        f =
            o.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: lq.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            l$.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === d },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, a.jsx)(
                                  "div",
                                  {
                                      className: lq.iq,
                                      children: (0, a.jsx)(lB.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(l_.A, {
        glyph: (0, a.jsx)(lG.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: s,
            body: nS(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: lq.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: u,
        settled: !u,
        tint: i,
        detail: f,
        connected: !0,
        connectsDown: r,
    });
}
var lV = n(329456);
let lH = [];
function lK(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: r()(lV.xL, {
            [lV.Vb]: "in_progress" === t,
            [lV.cT]: "completed" === t,
            [lV.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return en.intl.string(et.default.TkPGOH);
                case "in_progress":
                    return en.intl.string(et.default["oK+fmd"]);
                case "unfinished":
                    return en.intl.string(et.default["1ley3g"]);
                default:
                    return en.intl.string(et.default.d7lieu);
            }
        })(t),
        children: [
            (0, a.jsx)(A.y, {
                type: A.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: lV.Qd,
                itemClassName: lV.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: lV.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: lV.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function lW(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : lH), [n, t]),
        s = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        r = l.map((e) => e.key).join("\0"),
        [o, u] = i.useState(l),
        [d, c] = i.useState(r),
        [m, f] = i.useState(!1);
    d !== r && (c(r), u([...l, ...o.filter((e) => !s.has(e.key))]), 0 === l.length && f(!1));
    let h = o.some((e) => !s.has(e.key));
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, l, n]),
        i.useEffect(() => {
            if (!n || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => f(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [n, o.length]),
        0 === o.length)
    )
        return null;
    let p = o.slice(0, 3),
        g = o.length - p.length;
    return (0, a.jsxs)("span", {
        className: lV.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: r } = n;
                return (0, a.jsx)(
                    lG.u,
                    {
                        asset: (0, a.jsx)(r, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: lV.MA,
                            "data-leaving": s.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(r, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            g > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: lV.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function lY(e) {
    let t,
        { todos: n, provisional: l, agents: s, live: o = !0 } = e,
        u = (function (e) {
            let t = e.join("\0"),
                [n, l] = i.useState(() => new Set(e)),
                [a, s] = i.useState(t),
                [r, o] = i.useState(() => new Set());
            return (
                a !== t && (s(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                i.useEffect(() => {
                    if (0 === r.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [r]),
                r
            );
        })(i.useMemo(() => n.map((e) => e.id), [n])),
        d =
            ((t = (s ?? lH).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of s ?? lH) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: lV.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || o ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: r()(lV.AS, { [lV.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(lK, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: lV.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: lV.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(lW, { agents: d.get(e.id) ?? lH, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: lV.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(lK, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: lV.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: lV.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function lX(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: i = !0, live: s = !0, superseded: r = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let d = en.intl.formatToPlainString(et.default.bQvqly, { completed: o, total: u }),
        c = en.intl.formatToPlainString(et.default["QG/EiF"], { completed: o, total: u });
    return (0, a.jsx)(nK, {
        title: en.intl.string(et.default.qCRC6c),
        meta: (0, a.jsx)(nH, { children: d }),
        superseded: r,
        showLabel: en.intl.string(et.default.SVhXLT),
        hideLabel: en.intl.string(et.default.fIBJas),
        className: lV.Nr,
        bodyClassName: lV.rf,
        beforeBody: i && !r ? (0, a.jsx)(k.A, { role: "status", "aria-live": "polite", children: c }) : null,
        "data-vibegrations-todo-card": !0,
        children: (0, a.jsx)(lY, { todos: t, provisional: n, agents: l, live: s }),
    });
}
var lQ = n(744239),
    lZ = n(229775),
    lJ = n(165648);
function l0(e) {
    let t = lz(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? lO(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: nS(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function l2(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            turnActive: s = l,
            checklistSuperseded: r = !1,
            durationMs: o,
            interrupted: u = !1,
            todos: d,
            provisionalTodo: c,
            segment: m,
            hostsChecklist: f = !0,
            reportsDuration: h = !0,
            closed: p = !1,
            segmentDurationMs: g,
        } = e,
        x = i.useMemo(() => (0, t4.GO)(n, { turnActive: l }), [n, l]),
        b = i.useMemo(
            () =>
                null == m
                    ? x
                    : {
                          ...x,
                          steps: x.steps.filter((e) => e.segment === m),
                          tasks: x.tasks.filter((e) => e.task.segment === m),
                      },
            [x, m],
        );
    if (u)
        return (0, a.jsx)("ol", {
            className: lq.pj,
            "data-live": !1,
            children: (0, a.jsx)(l_.A, {
                glyph: (0, a.jsx)(nA.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: en.intl.string(et.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let v = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        j = f ? ((0, t4.lt)(n) ?? d ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === b.steps.length && 0 === b.tasks.length && !y) return null;
    let w = b.tasks,
        k = lz(w.map((e) => e.taskId)),
        A = !p && (l || w.some((e) => "running" === e.task.status)),
        N = l0(w);
    return (0, a.jsx)(l_.l.Provider, {
        value: w.length,
        children: (0, a.jsxs)("ol", {
            className: lq.pj,
            "data-live": A,
            children: [
                (0, a.jsx)(nk.A, {
                    projectId: t,
                    steps: b.steps,
                    fallbackLabel: w.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: l,
                    closed: p,
                    durationMs: v,
                    connectsDown: w.length > 0,
                    tier: x.turn?.tier,
                }),
                w.map((e, n) => {
                    let l = null != e.task.helperMark ? lO(e.task.helperMark) : void 0,
                        i = l ?? k.get(e.taskId);
                    return null == i
                        ? null
                        : (0, a.jsx)(
                              lU,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: i.Illocon,
                                  tint: i.tint,
                                  name: null != l && null != e.task.helperName ? e.task.helperName : i.name,
                                  connectsDown: n < w.length - 1,
                              },
                              e.taskId,
                          );
                }),
                y
                    ? (0, a.jsx)("li", {
                          className: lq.YO,
                          children: (0, a.jsx)(lX, { todos: j, provisional: c, agents: N, live: s, superseded: r }),
                      })
                    : null,
            ],
        }),
    });
}
function l1(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: s,
            planVersion: o,
            ideas: u,
            attachments: d,
            secretRequest: c,
            secretRequestId: m,
            secretRequestAwaiting: f,
            secretRequestStatus: h = "open",
            settingsRequest: p,
            publishCta: g,
            onPickIdea: x,
            pickedIdeaIds: b,
            onApprovePlan: j,
            sideReply: y = !1,
            sideReplyAcknowledges: w,
            hoistedProse: k = !1,
            hoistedAttachmentsHost: A,
            restoreProposal: N,
            onRestoreProposal: C,
        } = e,
        S = i.useMemo(
            () => nE({ steps: n, content: l, hasProposal: null != s, hasAttachments: null != d && d.length > 0 }),
            [n, l, s, d],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: T, closingContent: P } = S,
        M = (k ? A : void 0) ?? S.attachmentsHost,
        _ = T && !k,
        R = null == d ? null : (0, a.jsx)(nF.A, { projectId: t, attachments: d }),
        D = null == R ? null : (0, a.jsx)("div", { className: lq.MT, children: R }),
        L = y
            ? (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return en.intl.string(et.default.I9TkzD);
                          case "queued":
                              return en.intl.string(et.default.gbjY6o);
                          case "restarting":
                              return en.intl.string(et.default["1Q4Cs2"]);
                          default:
                              return en.intl.string(et.default.OAjkIT);
                      }
                  })(w),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: lq.ue,
        children: [
            E.length > 0 && !k
                ? (0, a.jsx)("ol", {
                      className: lq.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: lq.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: lJ.PT,
                                          children: nN.A.parse(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === M && e === I ? D : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != s
                ? (0, a.jsx)(ld, { projectId: t, proposal: s, version: o, onApprove: j })
                : _
                  ? (0, a.jsxs)("div", {
                        className: r()(lq.ky, lZ.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: r()(lJ.PT, lq.cW),
                                children: nN.A.parse(P, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === M ? D : null,
                            L,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: r()(lq.ky, lZ.XR, { [lQ.O]: null != f && "open" === h }),
                      children: (0, a.jsx)(lE, {
                          projectId: t,
                          cardId: m ?? "",
                          request: c,
                          status: h,
                          awaiting: "open" === h ? f : void 0,
                      }),
                  })
                : null,
            null != p
                ? (0, a.jsx)("div", {
                      className: r()(lq.ky, lZ.XR),
                      children: (0, a.jsx)(lM, { projectId: t, request: p }),
                  })
                : null,
            "standalone" !== M && ("closing" !== M || _) ? null : R,
            null != g ? (0, a.jsx)(lh, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, a.jsx)(nD, { ideas: u, pickedIdeaIds: b, onPick: x }) : null,
            null != N ? (0, a.jsx)(lw, { proposal: N, onRestore: C }) : null,
            _ ? null : L,
        ],
    });
}
var l6 = n(864970),
    l9 = n(146806),
    l3 = n(475358),
    l4 = n(81369),
    l7 = n(922016),
    l8 = n(980707),
    l5 = n(477782),
    ae = n(717400),
    at = n(663341),
    an = n(826745),
    al = n(783977),
    aa = n(559647),
    ai = n(775602),
    as = n(234320),
    ar = n(900797),
    ao = n(107698),
    au = n(704855),
    ad = n(98115),
    ac = n(856795),
    am = n(752065);
function af(e) {
    let [t, n] = i.useState(e),
        [l, a] = i.useState(!1),
        [s, r] = i.useState(e);
    return (
        s !== e && (r(e), e ? n(!0) : a(!1)),
        i.useEffect(() => {
            if (e || !t) return;
            let l = setTimeout(() => n(!1), 150);
            return () => clearTimeout(l);
        }, [e, t]),
        i.useEffect(() => {
            if (!t || !e) return;
            let n = 0,
                l = requestAnimationFrame(() => {
                    n = requestAnimationFrame(() => a(!0));
                });
            return () => {
                (cancelAnimationFrame(l), cancelAnimationFrame(n));
            };
        }, [t, e]),
        { mounted: t, entered: l }
    );
}
function ah(e) {
    let { settings: t, tiers: n, choices: l, disabled: s, onChange: o, placement: u, open: d, entered: c } = e,
        [m, f] = i.useState(!1),
        h = af(m),
        p = el.ks.indexOf(t.tier),
        g = m ? ar.t : nU._,
        x = el.ks.map(ao.eQ),
        b = (0, ao.is)(t.tier),
        { text: j, phase: y } = (0, ac.Q)(b);
    return (0, a.jsx)("div", {
        className: am.qd,
        "data-placement": u ?? void 0,
        children: (0, a.jsxs)("div", {
            className: r()(am.t$, { [am.Zr]: d && c, [am.GF]: !d }),
            role: "dialog",
            "aria-label": en.intl.string(et.default["2NWMqY"]),
            children: [
                h.mounted
                    ? (0, a.jsx)("div", {
                          className: r()(am.Nr, am.uO, { [am.Zr]: m && h.entered, [am.GF]: !m }),
                          children: (0, a.jsx)(ad.u1, { settings: t, tiers: n, choices: l, disabled: s, onChange: o }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${am.Nr} ${am.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: am.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: am.y6,
                                    "aria-expanded": m,
                                    "aria-label": en.intl.string(et.default.IaLFoX),
                                    onClick: () => f((e) => !e),
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: en.intl.string(et.default.GDs9Vq),
                                        }),
                                        (0, a.jsx)(g, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: am.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: r()(am.Z, { [am.xQ]: "exit" === y, [am.lm]: "enter" === y }),
                                    children: j,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: am.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: am.Nb,
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: en.intl.string(et.default["5DOL2g"]),
                                        }),
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: en.intl.string(et.default.OJIfkn),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(au.A, {
                                    activeIndex: p,
                                    stops: x,
                                    ariaLabel: en.intl.string(et.default.GDs9Vq),
                                    disabled: s,
                                    onSelect: function (e) {
                                        let n = el.ks[e];
                                        null != n && n !== t.tier && o((0, ao.zy)((0, ao.gc)(t, n)));
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function ap(e) {
    let { settings: t, tiers: n, choices: l, disabled: s, onChange: r, className: o, icon: u } = e,
        d = i.useRef(null),
        [c, m] = (0, ad.kn)(t, r),
        [f, h] = i.useState(!1),
        { mounted: p, entered: g } = af(f);
    return (0, a.jsx)(l7.Y, {
        targetElementRef: d,
        position: "top",
        align: "right",
        shouldShow: p,
        onRequestClose: () => h(!1),
        animation: l7.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(ah, {
                settings: c,
                tiers: n ?? null,
                choices: l,
                disabled: s,
                onChange: m,
                placement: t,
                open: f,
                entered: g,
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, a.jsx)(w.m, {
                text: en.intl.string(et.default.GoSNDN),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(y.D, {
                    innerRef: d,
                    className: o ?? am.hZ,
                    "aria-label": en.intl.string(et.default.GoSNDN),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(al.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var ag = n(285796),
    ax = n(590380),
    ab = n(298668);
let av = el.Is;
function aj(e, t, n, l) {
    let a = nh(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: nc++ }, upload: n };
        });
        for (let { draft: n, upload: a } of (np(e, t, [
            ...nh(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            a?.().then(
                (l) => {
                    "errorText" in l
                        ? ng(e, t, n.localId, { status: "error", errorText: l.errorText })
                        : ng(e, t, n.localId, { status: "ready", ref: l })
                          ? setTimeout(
                                () =>
                                    ng(e, t, n.localId, {
                                        status: "error",
                                        errorText: en.intl.string(et.default.HL9CT6),
                                    }),
                                el.$f - 3e5,
                            )
                          : nx(e, l.id);
                },
                (l) => {
                    (console.error("[vibegrations] attachment upload failed", l),
                        ng(e, t, n.localId, { status: "error", errorText: en.intl.string(et.default.GwEHvn) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (a++ >= av)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: en.intl.formatToPlainString(et.default.DlX57a, { count: av }),
                    },
                };
            if (!(0, el.x5)(e.size, t))
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: en.intl.formatToPlainString(et.default.cI7t94, { size: (0, el.ZJ)((0, el.yr)(t)) }),
                    },
                };
            let i = el.Wb.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: i }, upload: () => l(e) };
        }),
    );
}
function ay(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        a = nm.useState((e) => nf(e, t, n)),
        s = i.useCallback((e) => aj(t, n, e, l), [t, n, l]),
        r = i.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), s(t));
            },
            [s],
        ),
        o = i.useCallback(
            (e) => {
                let l, a;
                null != (a = (l = nh(t, n)).find((t) => t.localId === e)) &&
                    (nb(t, a),
                    np(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => ny(t, n), [t, n]);
    return {
        drafts: a,
        addFiles: s,
        pasteFiles: r,
        removeDraft: o,
        settled: a.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function aw(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(ax.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(A.y, { type: A.t.SPINNING_CIRCLE_SIMPLE, className: ab.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: ab.o1,
                onClick: () => n(t.localId),
                "aria-label": en.intl.string(et.default["3HWvgk"]),
                children: (0, a.jsx)(ag.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var ak = n(789438);
let aA = "text-md/normal",
    aN = null;
function aC(e) {
    let { text: t, offering: n, typed: l } = e,
        [s, o] = i.useState(t),
        u = i.useRef(null),
        d = i.useRef(null),
        m = i.useRef(0),
        [f, h] = i.useState(0),
        [p, g] = i.useState(0),
        [x, b] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = m.current;
        function l() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = d.current;
            if (null == l) return;
            let a = parseFloat(getComputedStyle(t).columnGap),
                i = Number.isNaN(a) ? 0 : a,
                s = e.offsetWidth,
                r = l.offsetWidth + i;
            (g(s + i), h(r));
            let o = r + s,
                c = Math.max(n, l.offsetWidth) + i + s,
                m = 0 === c ? 1 : r / c,
                f = 0 === c ? 1 : o / c;
            b({
                frontFrom: 1e3 * (0, l9._R)(m),
                frontTo: 1e3 * (0, l9._R)(f),
                backFrom: 1e3 * (0, l9.T)(m),
                backTo: 1e3 * (0, l9.T)(f),
            });
        }
        let a = new ResizeObserver(l);
        return (l(), a.observe(e), a.observe(t), null != d.current && a.observe(d.current), () => a.disconnect());
    }, [t]),
        i.useEffect(() => {
            m.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [j, y] = i.useState(0),
        [w, k] = i.useState(null),
        A = i.useRef(!1),
        N = i.useCallback(() => {
            (k(A.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        A.current = n;
    }, [n, t]);
    let C = "in" === w ? x.backFrom : x.frontFrom,
        S = "out" === w ? x.frontTo : x.backTo,
        E = (0, c.bG)([ai.Ay], () => ai.Ay.useReducedMotion),
        I = t === en.intl.string(et.default.Jj8Ftb),
        T = s === t && I;
    function P(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: r()(ak.VT, { [ak.qk]: l }),
            style: l
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${C}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, S - C)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && j > 0 && null != w ? j % 2 : void 0,
            "data-wipe-kind": l ? (w ?? void 0) : void 0,
            children: (0, a.jsx)(l3.e, { shortcut: "tab", className: ak.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l6.o, {
                text: t,
                variant: aA,
                delay: null,
                duration: 1e3,
                trailingWidth: p,
                className: r()(ak.xM, { [ak.s2]: l }),
                onStart: N,
                onComplete: () => o(t),
            }),
            P(ak.IS, n || (!E && "out" === w), u),
            (0, a.jsx)("span", {
                ref: d,
                className: ak.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: aA, tag: "span", children: t }),
            }),
            T
                ? (0, a.jsxs)("span", {
                      className: ak.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: aA, tag: "span", className: ak.xM, children: t }),
                          P(ak.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function aS(e) {
    let {
            projectId: t,
            canSend: n,
            stopped: l,
            running: s,
            restoring: r = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: d,
            onApprove: m,
            onImport: f,
            suggestion: h,
            questionOpen: p = !1,
            hasPendingContext: g = !1,
            onDraftHasTextChange: x,
            modelSettings: b,
            onModelSettingsChange: v,
        } = e,
        [j, y] = i.useState(() => nr.getDraft(t)),
        A = i.useCallback(
            (e) => {
                ((0, ea.I$)(t, e), y(e));
            },
            [t],
        ),
        N = "" !== j.trim();
    i.useEffect(() => x?.(N), [N, x]);
    let [C, S] = i.useState(t);
    C !== t && (S(t), y(nr.getDraft(t)));
    let E = (0, c.bG)([ai.Ay], () => ai.Ay.isSubmitButtonEnabled),
        [I, T] = i.useState(!1);
    i.useEffect(() => {
        s || T(!1);
    }, [s]);
    let P = i.useRef(null),
        {
            drafts: M,
            addFiles: _,
            pasteFiles: R,
            removeDraft: D,
            settled: L,
            takeRefs: F,
        } = ay({ projectId: t, surface: "chat", onUploadFile: d }),
        O = "" !== j.trim() || M.length > 0 || g,
        z = n && O && L,
        [G, B] = i.useState(null);
    i.useEffect(() => {
        if (null == G) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => B(null));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [G]);
    let $ = i.useCallback(() => {
            if (!z) return;
            let e = F();
            o(j, e.length > 0 ? e : void 0);
            let t = (function (e, t, n) {
                let l,
                    a,
                    i = n.split("\n", 1)[0] ?? "";
                if (null == e || "" === i) return i;
                null == aN && (aN = document.createElement("canvas").getContext("2d"));
                let s = aN;
                if (null == s) return i;
                let r = getComputedStyle(e);
                s.font = "" !== r.font ? r.font : `${r.fontWeight} ${r.fontSize} ${r.fontFamily}`;
                let o =
                    t > 0
                        ? t
                        : ((l = parseFloat(r.paddingInlineStart)),
                          (a = parseFloat(r.paddingInlineEnd)),
                          e.clientWidth - (Number.isNaN(l) ? 0 : l) - (Number.isNaN(a) ? 0 : a));
                if (o <= 0 || s.measureText(i).width <= o) return i;
                let u = 0,
                    d = i.length;
                for (; u < d;) {
                    let e = Math.ceil((u + d) / 2);
                    s.measureText(i.slice(0, e)).width <= o ? (u = e) : (d = e - 1);
                }
                let c = i.slice(0, u),
                    m = c.lastIndexOf(" ");
                return (m > 0 ? c.slice(0, m) : c).trimEnd();
            })(Y.current?.querySelector("textarea") ?? null, er.current, j);
            ("" !== t && B(t), A(""));
        }, [z, j, o, F, A]),
        q = i.useCallback(
            (e) => {
                (e.preventDefault(), $());
            },
            [$],
        ),
        U = i.useCallback(() => {
            null == u || I || (T(!0), u());
        }, [u, I]),
        V = null == h || "" !== j || !n || l || r || g ? null : h,
        H = i.useCallback(
            (e) => {
                if ("Escape" === e.key && s && null != u && !I) {
                    (e.preventDefault(), e.stopPropagation(), U());
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != V) {
                    (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), A(V));
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != m && (e.preventDefault(), m());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), $());
            },
            [$, m, s, u, I, U, V, A],
        ),
        K = i.useCallback(
            (e) => {
                n && R(e);
            },
            [n, R],
        );
    (0, as.Vo)({
        event: eB.jej.GLOBAL_CLIPBOARD_PASTE,
        handler: (e) => {
            let { event: t } = e;
            return K(t);
        },
    });
    let W = i.useCallback(
            (e) => {
                (_(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [_],
        ),
        Y = i.useRef(null),
        X = i.useRef(null),
        [Q, Z] = i.useState(0),
        [J, ee] = i.useState(!1);
    i.useEffect(() => {
        if (0 === j.length) return void ee(!1);
        let e = Y.current?.querySelector("textarea");
        if (null != e) {
            let t = aT(e);
            null != t && Z(t);
        }
        ee(!0);
        let t = setTimeout(() => ee(!1), aE);
        return () => clearTimeout(t);
    }, [j]);
    let el = i.useMemo(() => ({ "--custom-glow-x": `${Q}px` }), [Q]),
        ei = J ? ` ${ak.EB}` : "",
        es = r
            ? en.intl.string(et.default.pGFXZ0)
            : l
              ? en.intl.string(et.default.JeM47J)
              : n
                ? g
                    ? en.intl.string(et.default.Bs7bUv)
                    : p
                      ? en.intl.string(et.default.M3ovXY)
                      : en.intl.string(s ? et.default["67PpcP"] : et.default.ahRdoJ)
                : en.intl.string(et.default.nm4w9P),
        er = i.useRef(0),
        eo = i.useRef(null),
        eu = i.useCallback((e) => {
            if ((eo.current?.disconnect(), null == e)) return;
            er.current = e.clientWidth;
            let t = new ResizeObserver(() => {
                er.current = e.clientWidth;
            });
            (t.observe(e), (eo.current = t));
        }, []),
        ed = i.useId(),
        ec = null != V,
        em = G ?? V ?? es,
        ef = "" === j && "" !== em;
    return (0, a.jsxs)("form", {
        onSubmit: q,
        className: ak.DA,
        children: [
            M.length > 0
                ? (0, a.jsx)("div", {
                      className: ak.lN,
                      children: M.map((e) => (0, a.jsx)(aw, { draft: e, onRemove: D }, e.localId)),
                  })
                : null,
            (0, a.jsx)("span", { className: `${ak.wg} ${ak.LP}${ei}`, style: el, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${ak.wg} ${ak.L3}${ei}`, style: el, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: ak.VA,
                ref: Y,
                children: [
                    (0, a.jsx)("input", {
                        ref: P,
                        type: "file",
                        multiple: !0,
                        onChange: W,
                        className: ak.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == f
                        ? (0, a.jsx)(w.m, {
                              text: en.intl.string(et.default.d6Rqlu),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  ref: X,
                                  type: "button",
                                  className: `${ak.Y0} ${ak.nu}`,
                                  disabled: !n,
                                  onClick: () => P.current?.click(),
                                  "aria-label": en.intl.string(et.default.d6Rqlu),
                                  children: (0, a.jsx)(l4.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: ak.Qu,
                                  }),
                              }),
                          })
                        : (0, a.jsx)(l7.Y, {
                              targetElementRef: X,
                              position: "top",
                              align: "left",
                              animation: l7.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, a.jsx)(l8.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": en.intl.string(en.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, a.jsxs)(l5.rX, {
                                          children: [
                                              (0, a.jsx)(l5.Dr, {
                                                  id: "upload-file",
                                                  label: en.intl.string(en.t["d3+iYs"]),
                                                  iconLeft: l4.H,
                                                  leadingAccessory: { type: "icon", icon: l4.H },
                                                  action: () => P.current?.click(),
                                              }),
                                              null != f
                                                  ? (0, a.jsx)(l5.Dr, {
                                                        id: "import-project",
                                                        label: en.intl.string(et.default.edKajy),
                                                        iconLeft: ae.q,
                                                        leadingAccessory: { type: "icon", icon: ae.q },
                                                        action: f,
                                                    })
                                                  : null,
                                          ],
                                      }),
                                  });
                              },
                              children: (e, t) => {
                                  let { isShown: l } = t;
                                  return (0, a.jsx)("button", {
                                      ...e,
                                      ref: X,
                                      type: "button",
                                      className: `${ak.Y0} ${ak.nu}`,
                                      disabled: !n,
                                      "aria-label": en.intl.string(en.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": l,
                                      children: (0, a.jsx)(at.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: ak.Qu,
                                      }),
                                  });
                              },
                          }),
                    ef
                        ? (0, a.jsx)("div", {
                              ref: eu,
                              className: ak.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(aC, { text: em, offering: ec && null == G, typed: null != G }),
                          })
                        : null,
                    (0, a.jsx)(an.y, {
                        value: j,
                        onChange: (e) => A(e.currentTarget.value),
                        onKeyDown: H,
                        onPaste: K,
                        placeholder: ef ? "" : es,
                        disabled: !n,
                        "aria-label": en.intl.string(et.default.OPr66w),
                        "aria-describedby": ef ? ed : void 0,
                        rows: 1,
                        className: ak.jp,
                    }),
                    ef ? (0, a.jsx)(k.A, { id: ed, children: es }) : null,
                    (0, a.jsx)("div", {
                        className: ak.Sz,
                        children:
                            s && null != u
                                ? (0, a.jsx)(w.m, {
                                      text: en.intl.string(et.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${ak.Y0} ${ak.$E}`,
                                          disabled: I,
                                          onClick: U,
                                          "aria-label": en.intl.string(et.default.KdgI4k),
                                          children: (0, a.jsx)(nA.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : b?.tierSettings != null && null != v
                                  ? (0, a.jsx)(ap, {
                                        settings: b.tierSettings,
                                        tiers: b.tiers,
                                        choices: b.choices,
                                        disabled: !n,
                                        onChange: v,
                                        className: `${ak.Y0} ${ak.$E}`,
                                        icon: (0, a.jsx)(al.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    E
                        ? (0, a.jsxs)("div", {
                              className: ak.fF,
                              children: [
                                  (0, a.jsx)("div", { className: ak.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: ak.rt,
                                      disabled: !z,
                                      "aria-label": en.intl.string(et.default["22GHMt"]),
                                      children: (0, a.jsx)(aa.SendMessageIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
let aE = 1500,
    aI = [
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "letter-spacing",
        "word-spacing",
        "line-height",
        "text-indent",
        "text-transform",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border-top-width",
        "border-right-width",
        "border-bottom-width",
        "border-left-width",
    ];
function aT(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = aT.mirror;
            if (null != e) return e;
            let t = document.createElement("div");
            return (
                t.setAttribute("aria-hidden", "true"),
                (t.style.position = "absolute"),
                (t.style.top = "0"),
                (t.style.left = "-9999px"),
                (t.style.visibility = "hidden"),
                (t.style.boxSizing = "border-box"),
                (t.style.whiteSpace = "pre-wrap"),
                (t.style.overflowWrap = "break-word"),
                document.body.appendChild(t),
                (aT.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of aI) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let a = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
aT.mirror = null;
var aP = n(335385);
let aM = [6e4, 18e4, 6e5],
    a_ = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: aM,
            clock: "persistent",
            eligible: (e) => {
                var t;
                let { publish: n, draftTyped: l } = e;
                return !l && null != (t = n) && t.isUpdate && null == t.disabledReason && !0 !== t.publishing;
            },
        },
        {
            key: "ideas",
            priority: 1,
            idleDelayMs: 6e4,
            clock: "visit",
            eligible: (e) => {
                var t;
                let { turn: n, publish: l, draftHasText: a } = e;
                return (
                    !a &&
                    l?.publishing !== !0 &&
                    "plan_implemented" === (t = n).kind &&
                    (0, eN.BL)(t) &&
                    !(null != n.publishCta && lm(l))
                );
            },
        },
    ];
function aR(e, t) {
    return {
        ...e,
        now: t,
        visitStartedAt: t,
        draftTyped: !1,
        lastActivityAt: null,
        lastMessageAt: null == e.messageAt ? null : Math.min(e.messageAt, t),
        seenAt: null,
        unseen: !1,
        hiddenAt: e.visible ? null : t,
        outdatedShown: !1,
        outdatedBackoff: 0,
    };
}
let aD = new Map();
var aL = n(320095),
    aF = n(963852),
    aO = n(521981),
    az = n(763754),
    aG = n(491182),
    aB = n(438729),
    a$ = n(622868),
    aq = n(448368),
    aU = n(837528),
    aV = n(439762),
    aH = n(715628),
    aK = n(752636),
    aW = n(9842),
    aY = n(589022),
    aX = n(95701),
    aQ = n(994500),
    aZ = n(967198);
let aJ = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function a0(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function a2(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function a1(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let a = a2(e, t),
        i = e.codePointAt(t);
    if (
        (null != i &&
            (8205 === i ||
                (i >= 65024 && i <= 65039) ||
                (i >= 127995 && i <= 127999) ||
                (i >= 768 && i <= 879) ||
                (i >= 8400 && i <= 8447) ||
                (i >= 65056 && i <= 65071) ||
                (i >= 917536 && i <= 917631))) ||
        8205 === a
    )
        return !0;
    if (a0(a) && a0(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && a0(a2(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function a6(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([ai.Ay], () => ai.Ay.useReducedMotion),
        a = n && !l,
        [s, r] = i.useState(() => ({ target: e, length: e.length })),
        o = s;
    (o.target !== e &&
        (o = {
            target: e,
            length: a
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let a = Math.min(l, t.length),
                          i = 0;
                      for (; i < a && e.charCodeAt(i) === t.charCodeAt(i);) i++;
                      for (; i > 0 && a1(t, i);) i--;
                      return i;
                  })(o.target, e, o.length)
                : e.length,
        }),
        a || o.length === e.length || (o = { target: e, length: e.length }),
        o !== s && r(o));
    let u = a && o.length < e.length,
        d = i.useRef(o);
    i.useLayoutEffect(() => {
        d.current = o;
    });
    let m = i.useRef(0),
        f = i.useRef(0);
    (i.useEffect(() => {
        if (u)
            return (
                (f.current = 0),
                (m.current = requestAnimationFrame(function e(t) {
                    let n = 0 === f.current ? 32 : t - f.current;
                    if (n >= 32) {
                        f.current = t;
                        let e = d.current,
                            l = (function (e) {
                                let { target: t, revealed: n, elapsedMs: l } = e,
                                    a = Math.min(Math.max(n, 0), t.length),
                                    i = t.length - a;
                                if (i <= 0) return a;
                                if (i > 900) return t.length;
                                let s = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, i / 280) * Math.max(l, 0))),
                                );
                                var r = (function (e, t, n) {
                                    if (n >= e.length) return n;
                                    let l = n;
                                    for (; l > t + 1 && n - l < 12 && aJ.has(e.charAt(l - 1));) l--;
                                    return aJ.has(e.charAt(l - 1)) ? n : l;
                                })(t, a, Math.min(t.length, a + s));
                                let o = r;
                                for (; o < t.length && o - r < 32 && a1(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && r({ target: e.target, length: l });
                    }
                    m.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(m.current)
            );
    }, [u]),
        i.useEffect(() => {
            if (u)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                r({ target: e, length: e.length });
            }
        }, [u]));
    let h = Math.min(o.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: a && h < e.length };
}
var a9 = n(7584),
    a3 = n(565645),
    a4 = n(842766);
function a7(e) {
    let { emoji: t, label: n } = e;
    return (0, a.jsx)("div", {
        className: a4.H,
        children: (0, a.jsx)(a3.A, { emojiName: t, alt: n, size: "reaction" }),
    });
}
var a8 = n(365199),
    a5 = n(194085),
    ie = n(734495),
    it = n(441136);
function il(e) {
    let { message: t, onClose: n } = e,
        l = (0, ie.A)(t);
    return (0, a.jsx)(l8.W, {
        navId: "vibegrations-message-actions",
        "aria-label": en.intl.string(en.t.Lv7LxN),
        onClose: n,
        onSelect: n,
        children: (0, a.jsx)(l5.rX, { children: l }),
    });
}
function ia(e) {
    let { groupStart: t, renderMenu: n } = e,
        [l, s] = i.useState(!1),
        o = i.useRef(null),
        u = i.useCallback(() => s((e) => !e), []),
        d = i.useCallback(() => s(!1), []);
    return (0, a.jsx)("div", {
        className: r()(it.QE, { [it.Rn]: t, [it.vg]: l }),
        children: (0, a.jsx)(a5.Ay, {
            children: (0, a.jsx)(l7.Y, {
                targetElementRef: o,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return n(t);
                },
                shouldShow: l,
                onRequestClose: d,
                position: "left",
                align: "top",
                animation: l7.Y.Animation.NONE,
                children: (e, t) => {
                    let { onClick: n, ...l } = e,
                        { isShown: i } = t;
                    return (0, a.jsx)(a5.qv, {
                        ref: o,
                        label: en.intl.string(en.t["UKOtz+"]),
                        icon: a8.MoreHorizontalIcon,
                        selected: i,
                        onClick: u,
                        ...l,
                    });
                },
            }),
        }),
    });
}
function ii(e) {
    let { message: t, groupStart: n } = e,
        l = i.useCallback((e) => (0, a.jsx)(il, { message: t, onClose: e }), [t]);
    return null == (0, ie.A)(t) ? null : (0, a.jsx)(ia, { groupStart: n, renderMenu: l });
}
let is = (0, aX.createChannelRecord)({ id: "vibegrations-builder", type: eB.rbe.DM }),
    ir = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function io(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: r()(it.Yq, { [it.x1]: t }), children: e });
}
function iu(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function id(e, t, n) {
    let { content: l } = (0, aV.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        s = i.useMemo(() => ({ message: e, channel: is, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(aB.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, aH.A)(s, l);
}
function ic(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        s = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        r = (0, aU.m)(e, is, t.usernameProfile, l),
        o = (0, aU.Jo)(t.avatarProfile, l),
        u = (0, c.bG)([aZ.A], () => aZ.A.getGuildId()),
        d = (0, c.bG)([ek.default], () => ek.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = ek.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(aY.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
            },
            [d, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: r,
        onPopoutRequestClose: s,
        renderPopout: m,
        guildId: u ?? void 0,
    };
}
function im(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: s } = e,
        r = i.useMemo(() => {
            let e = "" !== n.content ? (0, aO.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: it.GV,
                              children: [
                                  (0, a.jsx)(C.x, {
                                      className: it.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                  }),
                                  l,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [n, l]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, c.cf)(
            [aQ.A],
            () => ({
                isReplyAuthorBlocked: aQ.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: aQ.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, az.X4)(n),
        m = (0, az.X4)(t),
        f = ic(n);
    return (0, a.jsx)(aq.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: is,
        referencedMessage: { state: aW.a.LOADED, message: n },
        content: r,
        compact: !1,
        isReplyAuthorBlocked: o,
        isReplyAuthorIgnored: u,
        isReplySpineClickable: null != s,
        showReplySpine: !0,
        renderPopout: f.renderPopout,
        showAvatarPopout: f.showAvatarPopout,
        showUsernamePopout: f.showUsernamePopout,
        onClickAvatar: f.onClickAvatar,
        onClickUsername: f.onClickUsername,
        onClickReply: s,
        onPopoutRequestClose: f.onPopoutRequestClose,
    });
}
function ih(e) {
    let { message: t, author: n } = e,
        l = ic(t);
    return (0, a.jsx)(a$.Ay, {
        message: t,
        channel: is,
        author: n,
        guildId: l.guildId,
        subscribeToGroupId: t.id,
        renderPopout: l.renderPopout,
        showAvatarPopout: l.showAvatarPopout,
        showUsernamePopout: l.showUsernamePopout,
        onClickAvatar: l.onClickAvatar,
        onClickUsername: l.onClickUsername,
        onPopoutRequestClose: l.onPopoutRequestClose,
    });
}
function ip(e) {
    let { content: t, createdAt: n, userId: l, accessories: s, agentReaction: r, groupStart: o } = e;
    i.useEffect(() => eT(l), [l]);
    let u = (0, c.bG)(
            [ek.default],
            () => eI(l, null != l ? ek.default.getUser(l) : null, ek.default.getCurrentUser()),
            [l],
        ),
        d = i.useMemo(() => (0, az.FT)(u, null), [u]),
        m = i.useMemo(() => tn(t), [t]),
        f = m?.body ?? t,
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, aF.Ay)({ channelId: is.id, content: f, author: u });
            return (0, aL.rh)({ ...e, timestamp: iu(n, e.timestamp), state: eB.cmJ.SENT });
        }, [f, u, n]),
        p = (function (e) {
            if (null == e || "" === e) return null;
            let t = a9.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : en.intl.formatToPlainString(et.default.DrSoFn, { emojiName: t });
        })(r);
    return null == h
        ? null
        : (0, a.jsx)(ig, {
              message: h,
              author: d,
              content: f,
              selected: m?.label,
              accessories:
                  null != r && null != p
                      ? (0, a.jsxs)(a.Fragment, { children: [s, (0, a.jsx)(a7, { emoji: r, label: p })] })
                      : s,
              groupStart: o,
          });
}
function ig(e) {
    let { message: t, author: n, content: l, selected: i, accessories: s, groupStart: r = !0 } = e,
        o = id(t, l);
    return (0, a.jsx)(aG.A, {
        className: it.yE,
        author: n,
        childrenHeader: r ? (0, a.jsx)(ih, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == i
                ? o
                : (0, a.jsxs)("div", {
                      className: it.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: it.GV,
                              children: [
                                  (0, a.jsx)(C.x, {
                                      className: it.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  i,
                              ],
                          }),
                          (0, a.jsx)("span", { className: it.WO, children: o }),
                      ],
                  }),
        childrenAccessories: io(s, "" !== l),
        childrenButtons: (0, a.jsx)(ii, { message: t, groupStart: r }),
    });
}
function ix(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: s,
            onJumpToReplied: r,
            groupStart: o = !0,
            streaming: u = !1,
            buttons: d,
        } = e,
        { text: m, revealing: f } = a6(t, { streaming: u }),
        h = i.useMemo(() => (0, az.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = s?.userId,
        x = (0, c.bG)(
            [ek.default],
            () => eI(g, null != g ? ek.default.getUser(g) : null, ek.default.getCurrentUser()),
            [g],
        ),
        b = i.useMemo(() => (null == s ? null : tn(s.content)), [s]),
        v = i.useMemo(() => {
            if (null == s || null == x) return null;
            let e = (0, aF.Ay)({ channelId: is.id, content: b?.body ?? s.content, author: x });
            return (0, aL.rh)({ ...e, id: s.id, timestamp: iu(s.createdAt, e.timestamp), state: eB.cmJ.SENT });
        }, [s, b, x]),
        y = i.useMemo(() => (null == s ? void 0 : { channel_id: is.id, message_id: s.id }), [s]),
        w = i.useMemo(() => {
            let e = (0, aF.Ay)({ channelId: is.id, content: m, author: ir });
            return (0, aL.rh)({
                ...e,
                timestamp: iu(n, e.timestamp),
                state: eB.cmJ.SENT,
                ...(null != y ? { type: eB.lAJ.REPLY, message_reference: y } : {}),
            });
        }, [m, n, y]),
        k = id(w, m, it.OS);
    return (0, a.jsxs)("div", {
        className: it.$4,
        "data-replying": null != v ? "true" : void 0,
        "data-vibegrations-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(aG.A, {
                className: it.yE,
                author: p,
                childrenRepliedMessage:
                    null == v
                        ? null
                        : (0, a.jsx)(im, { baseMessage: w, referenced: v, selected: b?.label, onJumpToReplied: r }),
                childrenHeader: (0, aK.A)({ message: w, channel: is, author: p, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: k,
                childrenAccessories: io(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            o
                ? (0, a.jsx)("span", {
                      className: it.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(j.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let ib = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
function iv(e) {
    let { projectId: t, notice: n } = e;
    return "outdated" === n ? (0, a.jsx)(iy, { projectId: t }) : (0, a.jsx)(ij, { projectId: t, notice: n });
}
function ij(e) {
    let { projectId: t, notice: n } = e,
        l = i.useContext(eH),
        s = (0, c.bG)([ec.Ay, e_.A], () => {
            let e = ec.Ay.getProject(t);
            return null == e ? "" : (e_.A.getApplication(e.application_id)?.name ?? e.name);
        }),
        r = i.useCallback(() => {
            null != l &&
                (function (e, t) {
                    let n = eW(e, t.guildId);
                    if (null == n) return;
                    let l = eU({
                        ...n.input,
                        status: null == n.input.status ? null : { ...n.input.status, state: "up_to_date" },
                    })?.destination;
                    null != l && eY(n, l, t.platform).catch(() => {});
                })(t, l);
        }, [l, t]);
    return (0, a.jsx)(v.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: en.intl.format(
            (function (e) {
                if (!e.update) return et.default.ogEl54;
                switch (e.surface) {
                    case "bot":
                        return et.default.ncJb2S;
                    case "widget":
                        return et.default.gSpqdm;
                    case "automod":
                        return et.default.M3cBMT;
                    case "activity":
                    case null:
                        return et.default.tg9fgb;
                }
            })(n),
            { name: s, onOpen: r },
        ),
    });
}
function iy(e) {
    let { projectId: t } = e,
        n = e9(t);
    return null == n
        ? null
        : (0, a.jsx)(v.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: en.intl.format(et.default.AcWS6c, {
                  action: n.label,
                  onUpdate: () => {
                      (aD.get(t)?.forEach((e) => e()), n.run("outdated_notice"));
                  },
              }),
          });
}
var iw = n(556616);
function ik(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function iA(e) {
    let { reminder: t, renderReminder: n } = e,
        l = (function (e) {
            let t,
                [n, l] = i.useState([]);
            (n.find((e) => !e.leaving)?.key ?? null) !== e &&
                l(
                    ((t = n.filter((t) => t.key !== e).map((e) => ({ ...e, leaving: !0 }))),
                    null != e ? [...t, { key: e, leaving: !1 }] : t),
                );
            let a = n.some((e) => e.leaving);
            return (
                i.useEffect(() => {
                    if (!a) return;
                    let e = setTimeout(() => l((e) => e.filter((e) => !e.leaving)), 180);
                    return () => clearTimeout(e);
                }, [a, n]),
                n
            );
        })(t),
        s = l.find((e) => !e.leaving)?.key ?? null,
        o = null == s && l.length > 0,
        u = i.useRef(null),
        d = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = u.current;
            if (null == e || o) return;
            e.getBoundingClientRect();
            let t = d.current;
            if (null == t) {
                e.style.height = "0px";
                return;
            }
            ik(e, t);
            let n = new ResizeObserver(() => ik(e, t));
            return (n.observe(t), () => n.disconnect());
        }, [s, o]),
        (0, a.jsx)("div", {
            ref: u,
            className: r()(iw.NI, { [iw.Jg]: null == s }),
            "aria-live": "polite",
            children: (0, a.jsx)("div", {
                className: iw.t$,
                children: l.map((e) =>
                    (0, a.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : d,
                            "aria-hidden": e.leaving || void 0,
                            className: r()(iw.qd, e.leaving ? iw.cu : iw.We),
                            children: n(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var iN = n(744898);
function iC(e) {
    let { onSelect: t, onClose: n = O.Z_, onRestoreVersion: l } = e;
    return (0, a.jsx)(l8.W, {
        "data-menu-migrated": !0,
        navId: "vibegrations-turn-context",
        onClose: n,
        "aria-label": en.intl.string(en.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsx)(l5.rX, {
            children: (0, a.jsx)(l5.Dr, {
                id: "restore-version",
                label: en.intl.string(et.default.eSDVDt),
                icon: iN.e,
                action: l,
            }),
        }),
    });
}
var iS = n(375068);
function iE(e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            ref: s,
            onPickIdea: o,
            onAskForIdeas: u,
            draftHasText: d,
            onApprovePlan: m,
            floatingSettingsMessageId: f,
            onRestoreVersion: h,
        } = e,
        p = i.useRef(null),
        g = i.useCallback(
            (e) => {
                ((p.current = e), "function" == typeof s ? s(e) : null != s && (s.current = e));
            },
            [s],
        ),
        [x, b] = i.useState(null),
        j = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(j.current), []);
    let y = i.useCallback((e) => {
            let t = p.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            (t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                b(e),
                window.clearTimeout(j.current),
                (j.current = window.setTimeout(() => b(null), 1600)));
        }, []),
        w = (0, c.bG)([ec.Ay], () => ec.Ay.getPublishStatus(t)?.state ?? null),
        k = i.useMemo(() => {
            let e;
            return (function (e) {
                let t = [],
                    n = (function (e) {
                        let t = new Set(),
                            n = !1;
                        for (let l = e.length - 1; l >= 0; l--) {
                            let a = e[l];
                            null != a &&
                                null !=
                                    (function (e) {
                                        if ("assistant" !== e.role) return null;
                                        let t = (0, t4.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(a) &&
                                (n && t.add(a.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                function l(e, n) {
                    t.push({ row: e, groupable: { key: e.key, ...n } });
                }
                for (let t of e) {
                    if ("user" === t.role) {
                        l(
                            { kind: "user", key: t.render_id, message: t, groupStart: !1 },
                            { actor: "user", authorId: t.user_id, boundary: void 0 },
                        );
                        continue;
                    }
                    if ("publish_notice" === t.kind) {
                        let e = `${t.render_id}:publish`;
                        l(
                            { kind: "publishNotice", key: e, message: t, groupStart: !1 },
                            { actor: "assistant", boundary: e },
                        );
                        continue;
                    }
                    let e = !(0, eN.BL)(t),
                        a = nE({
                            steps: t.steps,
                            content: t.content,
                            hasProposal: null != t.proposal,
                            hasAttachments: (t.attachments?.length ?? 0) > 0,
                        }),
                        i = a.lastStreamedMessage?.key,
                        s = (0, t4.C6)(t.steps, { turnActive: e }),
                        { lastWork: r, open: o } = (0, t4.CT)(s, { turnActive: e }),
                        u = s.at(-1)?.index,
                        d = !1;
                    for (let c of s) {
                        if (null != c.prose && ib.test(c.prose.content)) d = !0;
                        else if (null != c.prose && c.prose.key !== a.replyKey) {
                            let n = `${t.render_id}:${c.key}`;
                            l(
                                {
                                    kind: "prose",
                                    key: n,
                                    message: t,
                                    groupStart: !1,
                                    content: c.prose.content,
                                    hostsAttachments:
                                        "streamed" === a.attachmentsHost && c.prose.key === i && null != t.attachments,
                                    streaming: e && c.index === u && !c.hasWork,
                                },
                                { actor: "assistant", boundary: n },
                            );
                        }
                        (c.hasWork || c.hasTodos) &&
                            l(
                                {
                                    kind: "activity",
                                    key: `${t.render_id}:work-${c.index}`,
                                    message: t,
                                    groupStart: !1,
                                    segment: c.index,
                                    active: c.index === o,
                                    closed: c.index !== o,
                                    ...(null != c.durationMs ? { segmentDurationMs: c.durationMs } : {}),
                                    reportsDuration: c.index === r,
                                    hostsChecklist: c.hasTodos,
                                    turnActive: t7(t),
                                    checklistSuperseded: c.hasTodos && n.has(t.render_id),
                                },
                                { actor: null, boundary: void 0 },
                            );
                    }
                    let c = ib.test(t.content ?? "");
                    if (
                        (!0 === t.interrupted || d || c
                            ? l(
                                  {
                                      kind: "interrupted",
                                      key: `${t.render_id}:interrupted`,
                                      message: t,
                                      groupStart: !1,
                                  },
                                  { actor: null, boundary: void 0 },
                              )
                            : s.every((e) => !e.hasTodos) &&
                              (t.todos?.length ?? 0) > 0 &&
                              l(
                                  {
                                      kind: "legacyTodos",
                                      key: `${t.render_id}:todos`,
                                      message: t,
                                      groupStart: !1,
                                      checklistSuperseded: n.has(t.render_id),
                                  },
                                  { actor: null, boundary: void 0 },
                              ),
                        (a.showsClosingMessage && !c) ||
                            null != t.proposal ||
                            null != t.clarification ||
                            null != t.restoreProposal ||
                            (!e &&
                                (null != t.ideas ||
                                    null != t.publishCta ||
                                    null != t.secretRequest ||
                                    null != t.settingsRequest)) ||
                            "standalone" === a.attachmentsHost)
                    ) {
                        let n = `${t.render_id}:closing`;
                        l(
                            {
                                kind: "closing",
                                key: n,
                                message: t,
                                groupStart: !1,
                                active: e,
                                attachmentsHost: a.attachmentsHost,
                                content: a.closingContent,
                                sideReply: "side_reply" === t.kind,
                            },
                            {
                                actor: "assistant",
                                boundary: n,
                                separate: null != t.proposal || null != t.clarification || "side_reply" === t.kind,
                            },
                        );
                    }
                }
                let a = (function (e) {
                    let t,
                        n,
                        l = [],
                        a = null,
                        i = !1,
                        s = !1;
                    for (let r of e) {
                        if (null == r.actor) {
                            (l.push(!1), (a = null), (t = void 0), (i = !1), (s = !1), (n = void 0));
                            continue;
                        }
                        let e = !i || a !== r.actor || t !== r.authorId || r.boundary !== n || !0 === r.separate || s;
                        (e && ((a = r.actor), (t = r.authorId), (i = !0), (s = !0 === r.separate), (n = r.boundary)),
                            l.push(e));
                    }
                    return l;
                })(t.map((e) => e.groupable));
                return t.map((e, t) => ({ ...e.row, groupStart: a[t] ?? !0 }));
            })(
                ((e = (function (e, t) {
                    if ("unpublished" !== t) return null;
                    for (let t = e.length - 1; t >= 0; t--) if (null != e[t].publishCta) return e[t].id;
                    return null;
                })(n, w)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => (null == t.publishCta || t.id === e ? t : { ...t, publishCta: null }))),
            );
        }, [n, w]),
        N = n.at(-1),
        C = (function (e, t, n) {
            var l;
            let a = e9(e),
                s = (0, aP.A)(),
                r = (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("publish_notice" !== n.kind) {
                            if ("user" === n.role) return null;
                            if ((0, eN.BL)(n)) return n;
                            if (!(0, eN.B0)(e, t)) break;
                        }
                    }
                    return null;
                })(t),
                o = t.at(-1),
                u = {
                    projectId: e,
                    draftHasText: n,
                    publishing: a?.publishing === !0,
                    drift: a?.status?.state === "changes",
                    messageAt: null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                    visible: s,
                },
                [d, c] = i.useState(() => aR(u, Date.now())),
                m = (function (e, t, n) {
                    if (e.projectId !== t.projectId) return aR(t, n());
                    if (
                        e.draftHasText === t.draftHasText &&
                        e.publishing === t.publishing &&
                        e.drift === t.drift &&
                        e.messageAt === t.messageAt &&
                        e.visible === t.visible
                    )
                        return e;
                    let l = n(),
                        a = { ...e, now: l };
                    if (
                        (e.draftHasText !== t.draftHasText &&
                            (a = { ...a, draftHasText: t.draftHasText, draftTyped: t.draftHasText, lastActivityAt: l }),
                        e.publishing !== t.publishing &&
                            (a = {
                                ...a,
                                publishing: t.publishing,
                                lastActivityAt: l,
                                outdatedShown: !1,
                                outdatedBackoff: 0,
                            }),
                        e.drift !== t.drift &&
                            ((a = { ...a, drift: t.drift }),
                            t.drift || (a = { ...a, outdatedShown: !1, outdatedBackoff: 0 })),
                        e.messageAt !== t.messageAt)
                    ) {
                        let n = null == t.messageAt ? null : Math.min(t.messageAt, l);
                        ((a = (function (e) {
                            if (!e.outdatedShown || e.publishing) return e;
                            let t = Math.min(e.outdatedBackoff + 1, aM.length - 1);
                            return { ...e, outdatedShown: !1, outdatedBackoff: t };
                        })({ ...a, messageAt: t.messageAt, lastMessageAt: n })),
                            t.visible || null == e.messageAt || (a = { ...a, unseen: !0 }));
                    }
                    return (
                        e.visible !== t.visible &&
                            ((a = { ...a, visible: t.visible }),
                            t.visible
                                ? (l - (e.hiddenAt ?? l) >= 6e5
                                      ? (a = { ...a, visitStartedAt: l })
                                      : a.unseen && (a = { ...a, seenAt: l }),
                                  (a = { ...a, hiddenAt: null, unseen: !1 }))
                                : (a = { ...a, hiddenAt: l, unseen: !1 })),
                        a
                    );
                })(d, u, Date.now),
                f =
                    null == r ||
                    null != (l = r).awaitingUser ||
                    null != l.secretRequest ||
                    null != l.settingsRequest ||
                    (l.intake?.questions.length ?? 0) > 0
                        ? null
                        : { turn: r, publish: a, draftHasText: n, draftTyped: m.draftTyped && n },
                { shown: h, nextDueAt: p } = (function (e, t) {
                    var n;
                    let l;
                    if (t.unseen) return { shown: null, nextDueAt: null };
                    let a = e.filter((e) => e.eligible).sort((e, t) => t.priority - e.priority)[0];
                    if (null == a) return { shown: null, nextDueAt: null };
                    let i =
                        ((l = Math.max(
                            0,
                            t.now -
                                ((n = a.clock),
                                Math.max(
                                    t.lastMessageAt ?? -1 / 0,
                                    t.lastActivityAt ?? -1 / 0,
                                    t.seenAt ?? -1 / 0,
                                    "visit" === n ? t.visitStartedAt : -1 / 0,
                                )),
                        )),
                        t.now + Math.max(0, a.idleDelayMs - l));
                    return i <= t.now ? { shown: a.key, nextDueAt: null } : { shown: null, nextDueAt: i };
                })(
                    a_.map((e) => ({
                        ...e,
                        idleDelayMs: e.backoffDelaysMs?.[m.outdatedBackoff] ?? e.idleDelayMs,
                        eligible: null != f && e.eligible(f),
                    })),
                    m,
                );
            return (
                "outdated" !== h || m.outdatedShown ? m !== d && c(m) : c({ ...m, outdatedShown: !0 }),
                i.useEffect(() => {
                    function t() {
                        let e = Date.now();
                        c((t) => ({ ...t, now: e, lastActivityAt: e }));
                    }
                    let n = aD.get(e) ?? new Set();
                    return (
                        aD.set(e, n),
                        n.add(t),
                        () => {
                            (n.delete(t), 0 === n.size && aD.delete(e));
                        }
                    );
                }, [e]),
                i.useEffect(() => {
                    if (null == p) return;
                    let e = setTimeout(() => c((e) => ({ ...e, now: Date.now() })), Math.max(0, p - Date.now()));
                    return () => clearTimeout(e);
                }, [p, m.now]),
                h
            );
        })(t, n, !0 === d),
        S = i.useCallback(
            (e) => {
                switch (e) {
                    case "outdated":
                        return (0, a.jsx)(ix, {
                            groupStart: !1,
                            content: "",
                            accessories: (0, a.jsx)(iv, { projectId: t, notice: "outdated" }),
                        });
                    case "ideas":
                        return (0, a.jsx)("div", {
                            className: iS.u$,
                            children: (0, a.jsx)(ix, {
                                content: en.intl.string(et.default.tG5PBo),
                                accessories: (0, a.jsx)(nL, { onAsk: u }),
                            }),
                        });
                }
            },
            [t, u],
        ),
        E = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, eN.BL)(n) || "plan_implemented" === n.kind) return null;
                            if (null != n.proposal) return n.render_id;
                        }
                    }
                    return null;
                })(n),
            [n],
        ),
        I = i.useMemo(
            () =>
                (function (e) {
                    let t = new Map(),
                        n = null,
                        l = 0;
                    for (let a of e)
                        if ("assistant" === a.role) {
                            if ("plan_implemented" === a.kind) {
                                ((n = null), (l = 0));
                                continue;
                            }
                            null != a.proposal &&
                                (null != n && t.set(n, { version: l, superseded: !0 }),
                                (l += 1),
                                t.set(a.render_id, { version: l, superseded: !1 }),
                                (n = a.render_id));
                        }
                    return t;
                })(n),
            [n],
        ),
        T =
            (N?.role !== "assistant" || null == N.awaitingUser || null == N.secretRequest
                ? null
                : (0, eN.BL)(N)
                  ? N.awaitingUser
                  : null) ?? void 0,
        P = (0, c.bG)([ee.Ay], () => ee.Ay.getSettings(t)?.secrets, [t]),
        M = i.useMemo(
            () =>
                (function (e, t) {
                    let n = null != t ? new Set(t.filter((e) => e.set).map((e) => e.name)) : null,
                        l = new Map(),
                        a = new Set(),
                        i = !1,
                        s = !1;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let r = e[t];
                        if (null == r) continue;
                        if ("user" === r.role) {
                            s =
                                s ||
                                (function (e) {
                                    let t = e.content.trim();
                                    return (
                                        t === en.intl.string(et.default.lM98yZ) ||
                                        t === en.intl.string(et.default.pu8e3p)
                                    );
                                })(r);
                            continue;
                        }
                        let o = r.secretRequest?.fields ?? [];
                        if (0 === o.length || !(0, eN.BL)(r)) continue;
                        let u = s;
                        for (let e of (u && null == n
                            ? l.set(r.render_id, "pending")
                            : u && null != n && o.every((e) => n.has(e.name))
                              ? l.set(r.render_id, "received")
                              : i
                                ? l.set(r.render_id, o.some((e) => a.has(e.name)) ? "superseded" : "inactive")
                                : l.set(r.render_id, "open"),
                        o))
                            a.add(e.name);
                        ((i = !0), (s = !1));
                    }
                    return l;
                })(n, P),
            [n, P],
        );
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                ref: s,
                className: r()(iS.x7, iS.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: iS.Ub, children: (0, a.jsx)(A.y, {}) }),
            });
        let e = "unavailable" === l ? et.default.s4oxNv : et.default.khZEUv;
        return (0, a.jsx)("ol", {
            ref: s,
            className: iS.x7,
            children: (0, a.jsx)(iI, { role: "assistant", children: (0, a.jsx)(ix, { content: en.intl.string(e) }) }),
        });
    }
    return (0, a.jsxs)("ol", {
        ref: g,
        className: iS.x7,
        children: [
            k.map((e) => {
                let l = e.message;
                switch (e.kind) {
                    case "user": {
                        let n = null != l.attachments && l.attachments.length > 0 ? l.attachments : null;
                        return (0, a.jsx)(
                            iI,
                            {
                                role: "user",
                                anchorId: l.id,
                                highlighted: x === l.id,
                                continuation: !e.groupStart,
                                children: (0, a.jsx)(ip, {
                                    groupStart: e.groupStart,
                                    content: l.content,
                                    createdAt: l.created_at,
                                    userId: l.user_id,
                                    agentReaction: l.agentReaction,
                                    accessories:
                                        null != n ? (0, a.jsx)(nF.A, { projectId: t, attachments: n }) : void 0,
                                }),
                            },
                            e.key,
                        );
                    }
                    case "prose":
                        return (0, a.jsx)(
                            iI,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, a.jsx)(ix, {
                                    groupStart: e.groupStart,
                                    content: e.content,
                                    streaming: e.streaming,
                                    createdAt: l.created_at,
                                    accessories:
                                        e.hostsAttachments && null != l.attachments
                                            ? (0, a.jsx)(nF.A, { projectId: t, attachments: l.attachments })
                                            : void 0,
                                }),
                            },
                            e.key,
                        );
                    case "activity":
                        return (0, a.jsx)(
                            iI,
                            {
                                role: "assistant",
                                children: (0, a.jsx)(l2, {
                                    projectId: t,
                                    steps: l.steps,
                                    segment: e.segment,
                                    active: e.active,
                                    closed: e.closed,
                                    segmentDurationMs: e.segmentDurationMs,
                                    reportsDuration: e.reportsDuration,
                                    hostsChecklist: e.hostsChecklist,
                                    turnActive: e.turnActive,
                                    checklistSuperseded: e.checklistSuperseded,
                                    durationMs: null != l.finished_at ? l.finished_at - l.created_at : void 0,
                                    todos: l.todos,
                                    provisionalTodo: l.provisionalTodo,
                                }),
                            },
                            e.key,
                        );
                    case "publishNotice":
                        return (0, a.jsx)(
                            iI,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, a.jsx)(ix, {
                                    groupStart: e.groupStart,
                                    content: null == l.publishNotice ? l.content : "",
                                    createdAt: l.created_at,
                                    accessories:
                                        null == l.publishNotice
                                            ? void 0
                                            : (0, a.jsx)(iv, { projectId: t, notice: l.publishNotice }),
                                }),
                            },
                            e.key,
                        );
                    case "interrupted":
                        return (0, a.jsx)(
                            iI,
                            {
                                role: "assistant",
                                children: (0, a.jsx)(l2, { projectId: t, interrupted: !0, steps: l.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, a.jsx)(
                            iI,
                            {
                                role: "assistant",
                                children: (0, a.jsx)(l2, {
                                    projectId: t,
                                    steps: [],
                                    active: !1,
                                    checklistSuperseded: e.checklistSuperseded,
                                    todos: l.todos,
                                    provisionalTodo: l.provisionalTodo,
                                }),
                            },
                            e.key,
                        );
                    case "closing": {
                        let i =
                                null != h
                                    ? "assistant" !== l.role || null == l.sourceSha
                                        ? null
                                        : {
                                              sha: l.sourceSha,
                                              authorName: "",
                                              authorEmail: "",
                                              authoredAt: new Date(l.created_at).toISOString(),
                                              subject: l.content,
                                          }
                                    : null,
                            s =
                                null != i && null != h
                                    ? () => {
                                          lv(() => h(i));
                                      }
                                    : void 0,
                            r = l.restoreProposal;
                        return (0, a.jsx)(
                            iI,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                onContextMenu:
                                    null != s
                                        ? (e) => {
                                              (0, O.jA)(e, (e) => (0, a.jsx)(iC, { ...e, onRestoreVersion: s }));
                                          }
                                        : void 0,
                                children: (0, a.jsx)(ix, {
                                    groupStart: e.groupStart,
                                    buttons:
                                        null != s
                                            ? (0, a.jsx)(ia, {
                                                  groupStart: e.groupStart,
                                                  renderMenu: (e) =>
                                                      (0, a.jsx)(iC, { onClose: e, onSelect: e, onRestoreVersion: s }),
                                              })
                                            : void 0,
                                    content: e.content,
                                    createdAt: l.created_at,
                                    replyTo: (function (e, t) {
                                        if (null == t) return;
                                        let n = e.find((e) => e.id === t && "user" === e.role);
                                        if (null != n)
                                            return {
                                                id: n.id,
                                                content: n.content,
                                                ...(null != n.user_id ? { userId: n.user_id } : {}),
                                                createdAt: n.created_at,
                                            };
                                    })(n, l.in_reply_to),
                                    onJumpToReplied: null != l.in_reply_to ? () => y(l.in_reply_to) : void 0,
                                    accessories: (0, a.jsx)(l1, {
                                        projectId: t,
                                        steps: l.steps,
                                        content: "",
                                        proposal: l.proposal,
                                        planVersion: I.get(l.render_id),
                                        interrupted: !0 === l.interrupted,
                                        hoistedProse: !0,
                                        hoistedAttachmentsHost: e.attachmentsHost,
                                        sideReply: e.sideReply,
                                        sideReplyAcknowledges: l.acknowledges,
                                        active: e.active,
                                        ideas: e.active ? void 0 : l.ideas,
                                        pickedIdeaIds:
                                            null == l.ideas
                                                ? void 0
                                                : (function (e, t, n) {
                                                      let l = new Set();
                                                      for (let a = e.indexOf(t) + 1; a > 0 && a < e.length; a++) {
                                                          let t = e[a];
                                                          if ("user" === t.role)
                                                              for (let e of n)
                                                                  e.implementation_prompt.trim() === t.content.trim() &&
                                                                      l.add(e.id);
                                                      }
                                                      return l;
                                                  })(n, l, l.ideas),
                                        attachments: l.attachments,
                                        secretRequest: e.active ? void 0 : l.secretRequest,
                                        secretRequestId: l.render_id,
                                        secretRequestAwaiting: l === N ? T : void 0,
                                        secretRequestStatus: M.get(l.render_id),
                                        settingsRequest: e.active || l.id === f ? void 0 : l.settingsRequest,
                                        publishCta: e.active ? null : l.publishCta,
                                        onPickIdea: o,
                                        onApprovePlan: l.render_id === E ? m : void 0,
                                        restoreProposal: r,
                                        onRestoreProposal:
                                            null != r && null != h && l === N
                                                ? () => {
                                                      var e;
                                                      return (
                                                          (e = {
                                                              sha: r.sha,
                                                              authorName: "",
                                                              authorEmail: "",
                                                              authoredAt: r.authored_at,
                                                              subject: r.subject,
                                                          }),
                                                          void lv(() => h(e))
                                                      );
                                                  }
                                                : void 0,
                                    }),
                                }),
                            },
                            e.key,
                        );
                    }
                }
            }),
            null != T
                ? (0, a.jsx)(iI, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, a.jsx)(ix, {
                          groupStart: !1,
                          content: "",
                          accessories: (0, a.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: en.intl.string(et.default["1LEnd8"]),
                          }),
                      }),
                  })
                : null,
            (0, a.jsx)("li", {
                role: "none",
                className: iS.q3,
                children: (0, a.jsx)(iA, { reminder: C, renderReminder: S }),
            }),
        ],
    });
}
function iI(e) {
    let { role: t, children: n, anchorId: l, highlighted: i = !1, continuation: s = !1, onContextMenu: o } = e;
    return (0, a.jsx)("li", {
        onContextMenu: o,
        "data-role": t,
        "data-vibegrations-message": l,
        className: r()(iS.xk, { [iS.Qo]: i, [iS.q3]: s }),
        children: n,
    });
}
let iT = [et.default.krnkPq, et.default["8oUm/J"], et.default["6Ea4dF"], et.default.fQx5qC, et.default["phXeK/"]];
function iP(e) {
    return iT.some((t) => en.intl.string(t) === e);
}
function iM(e) {
    switch (e) {
        case "connecting":
            return en.intl.string(et.default.W7oyuf);
        case "closed":
            return en.intl.string(et.default["yBmS+I"]);
        case "failed":
            return en.intl.string(et.default.eE60xI);
    }
}
var i_ = n(823376),
    iR = n(495557);
function iD(e) {
    let { activity: t, id: n } = e,
        { text: l, revealing: s } = a6(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [l]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: iR.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(t9.Ch, {
                ref: o,
                className: iR.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: r()(lJ.PT, iR.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: nN.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var iL = n(921461);
function iF(e) {
    let {
            activity: t,
            compacting: n = !1,
            restoring: l = !1,
            recalling: s = !1,
            controlling: o = !1,
            spoken: u,
            onSpokenChange: d,
        } = e,
        c = i.useRef(null),
        m = i.useId(),
        [f, h] = i.useState(null),
        p = (function (e) {
            let { activity: t, compacting: n = !1, restoring: l = !1, recalling: a = !1, controlling: i = !1 } = e,
                s = null != t && "end" !== t.phase;
            return i
                ? et.default.ivvYHP
                : l
                  ? et.default.aFffp2
                  : a
                    ? iT[0]
                    : n
                      ? et.default["0vH/5G"]
                      : s
                        ? et.default.Ly7F7x
                        : et.default.QDGuNS;
        })({ activity: t, compacting: n, restoring: l, recalling: s, controlling: o }),
        g = en.intl.string(p),
        x = p === iT["0"],
        [b, v] = i.useState(u ?? g),
        j = i.useRef(g);
    (i.useEffect(() => {
        j.current = g;
    }, [g]),
        i.useEffect(() => {
            d?.(b);
        }, [b, d]));
    let w = i.useRef(null),
        k = i.useRef(b);
    i.useEffect(() => {
        k.current = b;
    }, [b]);
    let A = i.useRef(x),
        N = i.useRef(0);
    (i.useEffect(() => {
        ((A.current = x), !x && iP(k.current) && v(j.current));
    }, [x]),
        i.useEffect(() => {
            let e = 0,
                t = 0;
            function n() {
                if (A.current) {
                    var e;
                    ((N.current = iP(k.current) ? N.current + 1 : 0),
                        v(((e = N.current), en.intl.string(iT[e % iT.length]))));
                } else j.current !== k.current ? v(j.current) : w.current?.play();
            }
            function l() {
                (window.clearTimeout(e), window.clearInterval(t), (e = 0), (t = 0));
            }
            function a() {
                (l(),
                    (e = window.setTimeout(() => {
                        (n(), (t = window.setInterval(n, 2400)));
                    }, 1800)));
            }
            function i() {
                (w.current?.stop(), a());
            }
            return (
                ("u" < typeof document || document.hasFocus()) && a(),
                window.addEventListener("focus", i),
                window.addEventListener("blur", l),
                () => {
                    (l(), window.removeEventListener("focus", i), window.removeEventListener("blur", l));
                }
            );
        }, []));
    let C = null != t && "" !== t.text,
        S = t?.session ?? null,
        E = C && null != S && f === S,
        I = i.useCallback(() => {
            C && null != S && h((e) => (e === S ? null : S));
        }, [C, S]),
        T = i.useCallback(() => h(null), []);
    return (0, a.jsx)(l7.Y, {
        targetElementRef: c,
        position: "top",
        align: "left",
        shouldShow: E,
        onRequestClose: T,
        renderPopout: () => (0, a.jsx)(iD, { id: m, activity: t }),
        children: () =>
            (0, a.jsxs)(y.D, {
                innerRef: c,
                className: r()(iL.hF, C && iL.Xd),
                "aria-label": en.intl.string(l ? et.default.pGFXZ0 : x ? iT["0"] : et.default.SzdX35),
                "aria-expanded": E,
                "aria-describedby": E ? m : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": en.intl.string(p),
                onClick: I,
                children: [
                    (0, a.jsx)("span", {
                        className: iL.bl,
                        children: (0, a.jsx)(i_.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: iL.xu,
                        "aria-hidden": !!o || !!x || void 0,
                        children: (0, a.jsx)(l6.o, {
                            ref: w,
                            text: b,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: iL.yE,
                        }),
                    }),
                ],
            }),
    });
}
let iO = { second: 1e3, minute: 6e4 };
function iz(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let a = iO[t];
            return (
                !(function t() {
                    let i = Date.now();
                    (l(i), (n = setTimeout(t, a - ((((i - e) % a) + a) % a))));
                })(),
                () => clearTimeout(n)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, n - e)
    );
}
var iG = n(979148);
function iB(e) {
    let { startedAt: t } = e,
        n = iz(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: iG.$,
        "data-vibegrations-turn-timer": !0,
        children: (0, nC.C7)(n),
    });
}
function i$(e) {
    let { startedAt: t } = e,
        n = iz(t, "minute");
    return (0, a.jsx)(k.A, { role: "timer", children: (0, nC.Us)(n) });
}
var iq = n(280894);
function iU(e) {
    return e.toLocaleString();
}
function iV(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: iq.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: iq.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [iU((0, el.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    iU(n.input_tokens),
                    " in \xb7 ",
                    iU(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${iU(n.cache_creation_input_tokens)} cache write \xb7 ${iU(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function iH(e) {
    let { project: t } = e,
        n = (0, el.wU)(t.compaction),
        l = (0, el.wU)(t.classifier),
        i = (0, el.wV)(t.orchestrator, t.codegen),
        s = (0, el.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: iq.si,
        role: "dialog",
        "aria-label": en.intl.string(et.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: iq.Q$,
                children: (0, a.jsxs)("div", {
                    className: iq.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [iU((0, el.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(iV, { label: en.intl.string(et.default.R9aduM), usage: i }),
            (0, a.jsx)(iV, { label: en.intl.string(et.default.Tj6b30), usage: n }),
            (0, a.jsx)(iV, { label: en.intl.string(et.default.vVUMwj), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: iq.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: en.intl.string(et.default["kILb+R"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, el.sj)(s) ? "\u2014" : `${Math.round(100 * (0, el.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function iK(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(l7.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(iH, { project: t }),
        children: (e) =>
            (0, a.jsx)(y.D, {
                innerRef: n,
                className: iq.Y$,
                "aria-label": en.intl.string(et.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(nO.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var iW = n(258216);
function iY(e) {
    let t,
        {
            projectId: n,
            thinking: l,
            turnStartedAt: s,
            restoring: r = !1,
            recalling: o = !1,
            thinkingActivity: u,
            compacting: d,
            projectUsage: c,
            connState: m,
        } = e,
        f = (0, tf.o4)(n),
        [h, p] = i.useState(null),
        g = i.useCallback((e) => p(iP(e) ? null : e), []),
        x =
            null == c
                ? null
                : ((t = (0, el.a7)(c.cost_usd)),
                  {
                      text: en.intl.formatToPlainString(et.default["4PFO2p"], { runes: t.toLocaleString() }),
                      aria: en.intl.formatToPlainString(et.default["7SZZvj"], { runes: t, turns: c.turns }),
                  }),
        b = l && null != s;
    return (0, a.jsxs)("div", {
        className: iW.jf,
        children: [
            (0, a.jsxs)("div", {
                className: iW.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: [
                    l || r || o || f
                        ? (0, a.jsx)(iF, {
                              activity: u,
                              compacting: d,
                              restoring: r,
                              recalling: o,
                              controlling: f,
                              spoken: h,
                              onSpokenChange: g,
                          })
                        : null,
                    b ? (0, a.jsx)(iB, { startedAt: s }) : null,
                ],
            }),
            b ? (0, a.jsx)(i$, { startedAt: s }) : null,
            null == c || null == x
                ? null
                : (0, a.jsxs)("span", {
                      className: iW.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": x.aria,
                              children: x.text,
                          }),
                          (0, a.jsx)(iK, { project: c }),
                      ],
                  }),
            "open" === m
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === m ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": en.intl.formatToPlainString(et.default.eDDdhB, { status: iM(m) }),
                      "data-vibegrations-conn": !0,
                      "data-state": m,
                      className: iW.XF,
                      children: iM(m),
                  }),
        ],
    });
}
var iX = n(621466),
    iQ = n(658675),
    iZ = n(22231),
    iJ = n(408278),
    i0 = n(123292);
function i2(e, t, n) {
    return n < e.questions.length - 1
        ? n + 1
        : (function (e, t, n) {
              let { questions: l } = e;
              for (let e = 1; e <= l.length; e++) {
                  let a = (n + e) % l.length,
                      i = t[l[a].id];
                  if (null == i || "" === i.text.trim()) return a;
              }
              return null;
          })(e, t, n);
}
var i1 = n(424110);
function i6(e) {
    let { option: t, position: n, disabled: l, onPick: s, reachable: o = !0, selected: u } = e,
        d = i.useId(),
        c = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(y.D, {
        className: r()(i1.uK, { [i1.ue]: l, [i1.h4]: !0 === u }),
        onClick: l ? void 0 : () => s(t),
        "aria-label": en.intl.formatToPlainString(c ? et.default.aL1BKQ : et.default.k7lEgj, { answer: t.label }),
        "aria-describedby": m ? d : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != u
                ? (0, a.jsx)("span", { className: i1.dy, children: (0, a.jsx)(iQ.P, { checked: u, disabled: l }) })
                : (0, a.jsx)("span", { className: i1.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: i1.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: i1.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: i1.ed,
                            children: t.label,
                        }),
                    }),
                    m
                        ? (0, a.jsx)(v.E, {
                              tag: "span",
                              id: d,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            c
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: i1.rM,
                      children: en.intl.string(et.default.OXRWyV),
                  })
                : null,
        ],
    });
}
let i9 = [];
function i3(e) {
    let { question: t, draft: n, selected: l, direction: i, disabled: s } = e,
        o = "" === n.trim() ? null : n,
        u = !0 === t.multi_select;
    return (0, a.jsxs)("div", {
        className: r()(i1.Ge, i1.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            u
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: i1.aK,
                      children: en.intl.string(et.default.jt5JBA),
                  })
                : null,
            t.options.map((e, t) =>
                (0, a.jsx)(
                    i6,
                    {
                        option: e,
                        position: t + 1,
                        disabled: s,
                        selected: u ? l.includes(e.id) : void 0,
                        onPick: () => void 0,
                        reachable: !1,
                    },
                    e.id,
                ),
            ),
            (0, a.jsxs)("div", {
                className: i1.Xy,
                children: [
                    (0, a.jsx)("span", {
                        className: i1.Gy,
                        "aria-hidden": !0,
                        children: (0, a.jsx)(iZ.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == o ? null : (0, a.jsx)("span", { className: r()(i1.Pu, i1.es), children: o }),
                ],
            }),
        ],
    });
}
function i4(e) {
    let { clarification: t, onSubmit: n, onDismiss: l } = e,
        [s, o] = i.useState({}),
        [u, d] = i.useState({}),
        [c, m] = i.useState({}),
        [f, h] = i.useState(0),
        [p, g] = i.useState(null),
        [x, b] = i.useState(null),
        [j, k] = i.useState(null),
        [A, C] = i.useState(!1),
        S = i.useRef(null),
        [E, I] = i.useState(null),
        T = i.useRef(null),
        P = i.useRef(0),
        M = null == n,
        _ = t.questions.length,
        R = Math.min(f, _ - 1),
        L = t.questions[R],
        [F, O] = i.useState({ id: L.id, expanded: !1 }),
        z = F.id === L.id && F.expanded,
        [G, B] = i.useState(null),
        $ = u[L.id] ?? "",
        q = !0 === L.multi_select,
        U = c[L.id] ?? i9,
        { text: V, phase: H } = (0, ac.Q)(L.question),
        K = V === L.question,
        W = K && G?.id === L.id && G.truncated;
    i.useLayoutEffect(() => {
        if (null == E || z || !K) return;
        function e() {
            if (null == E) return;
            let e = E.scrollHeight > E.clientHeight + 1;
            B((t) => (t?.id === L.id && t.truncated === e ? t : { id: L.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(E), () => t.disconnect());
    }, [K, E, L.id, z]);
    let Y = en.intl.string(z ? en.t.iTcuma : en.t.dcl9MQ),
        X = i.useCallback(
            (e) => {
                if (null == n) return;
                let l = t.questions
                    .map((t, n) => ({ question: t, index: n, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: n, answer: l } = e;
                        return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
                    })
                    .join("\n");
                if ("" !== l) {
                    let a;
                    n(
                        l,
                        (a = t.questions.flatMap((t) => {
                            let n = e[t.id];
                            if (null == n || "" === n.text.trim()) return [];
                            let l = "option" === n.kind ? [n.optionId] : "multi" === n.kind ? n.optionIds : [],
                                a = "custom" === n.kind ? n.text.trim() : "multi" === n.kind ? n.custom : void 0;
                            return [
                                { question_id: t.id, option_ids: l, ...(null != a && "" !== a ? { custom: a } : {}) },
                            ];
                        })).length > 0
                            ? { clarification_id: t.id, answers: a }
                            : null,
                    );
                }
            },
            [t, n],
        ),
        Q = i.useCallback(
            (e, t) => {
                P.current += 1;
                let n = P.current;
                (g({ direction: t, moves: n }),
                    b({ question: L, draft: $, selected: U, direction: t, moves: n }),
                    C(!0),
                    h(e));
            },
            [$, L, U],
        ),
        Z = i.useCallback(() => {
            let e = S.current,
                t = T.current;
            null != e && null != t && k({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = S.current,
            t = T.current;
        if (null == e || null == t) return;
        Z();
        let n = new ResizeObserver(Z);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [Z]);
    let J = p?.moves;
    i.useEffect(() => {
        if (null == J) return;
        let e = setTimeout(() => b(null), 400),
            t = setTimeout(() => C(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [J]);
    let ee = i.useCallback(
            (e) => {
                if (M) return;
                let n = { ...s, [L.id]: e };
                o(n);
                let l = i2(t, n, R);
                null == l ? X(n) : Q(l, l < R ? "back" : "forward");
            },
            [s, t, M, R, L.id, X, Q],
        ),
        el = i.useCallback(() => {
            M || 0 === R || Q(R - 1, "back");
        }, [M, R, Q]),
        ea = R > 0 && !M,
        ei = i.useCallback(
            (e) => {
                (d((e) => ({ ...e, [L.id]: "" })), ee({ kind: "option", optionId: e.id, text: e.label }));
            },
            [L.id, ee],
        ),
        es = i.useMemo(() => {
            let e, t;
            return q
                ? ((e = $.trim()),
                  (t = L.options.filter((e) => U.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: U,
                      ...("" === e ? {} : { custom: e }),
                      text: [...t, ...("" === e ? [] : [e])].join(", "),
                  })
                : null;
        }, [$, q, L, U]),
        er = i.useCallback(() => {
            if (null != es) {
                "" !== es.text && ee(es);
                return;
            }
            let e = $.trim();
            "" !== e && ee({ kind: "custom", text: e });
        }, [$, es, ee]),
        [eo, eu] = i.useState(!1),
        [ed, ec] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eu(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let em = i.useCallback(() => {
            null != l && (ec(!0), setTimeout(l, 150));
        }, [l]),
        ef = i.useMemo(
            () =>
                null != es
                    ? "" !== es.text
                        ? es
                        : null
                    : "" !== $.trim()
                      ? { kind: "custom", text: $.trim() }
                      : (s[L.id] ?? null),
            [s, $, es, L.id],
        ),
        eh = null != ef && !M,
        ep = null == i2(t, null != ef ? { ...s, [L.id]: ef } : s, R),
        eg = i.useCallback(() => {
            null == ef || M || ee(ef);
        }, [M, ef, ee]),
        ex = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (!((0, iX.vq)(e.target, HTMLTextAreaElement) || (0, iX.vq)(e.target, HTMLInputElement)) &&
                        ("ArrowLeft" === e.key && ea
                            ? (e.preventDefault(), el())
                            : "ArrowRight" === e.key && eh && (e.preventDefault(), eg())));
            },
            [ea, eh, el, eg],
        );
    return (0, a.jsxs)("section", {
        className: r()(i1.$O, { [i1.fI]: eo && !ed, [i1.Oh]: ed }),
        role: "dialog",
        "aria-label": L.question,
        "data-vibegrations-clarification": t.id,
        "data-state": M ? "inert" : "open",
        "data-question-expanded": z ? "true" : void 0,
        "data-step": R,
        tabIndex: -1,
        onKeyDown: ex,
        children: [
            (0, a.jsxs)("div", {
                className: i1.rf,
                style: null == j ? void 0 : { height: j.heading + j.rows },
                "data-moving": A ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: S,
                        className: i1.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: I,
                                tag: "span",
                                id: `${L.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: z ? void 0 : 5,
                                className: r()(lT.TK, i1.R_, { [i1.TB]: "exit" === H, [i1.JU]: "enter" === H }),
                                children: V,
                            }),
                            W || z
                                ? (0, a.jsx)("div", {
                                      className: lT.Q7,
                                      children: (0, a.jsx)(w.m, {
                                          text: Y,
                                          children: (0, a.jsx)(iJ.K, {
                                              icon: z ? ar.t : nq.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => O({ id: L.id, expanded: !z }),
                                              "aria-label": Y,
                                              "aria-controls": `${L.id}-label`,
                                              "aria-expanded": z,
                                          }),
                                      }),
                                  })
                                : null,
                            null == l
                                ? null
                                : (0, a.jsx)(y.D, {
                                      className: r()(lT.gb, lT.Q7),
                                      onClick: em,
                                      "aria-label": en.intl.string(et.default.fMdUNR),
                                      "data-vibegrations-clarification-close": !0,
                                      children: (0, a.jsx)(D.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: i1.Cg,
                        style: null == j ? void 0 : { insetBlockStart: j.heading },
                        children: (0, a.jsxs)("div", {
                            className: i1.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: T,
                                    className: i1.Ge,
                                    role: "group",
                                    "aria-labelledby": `${L.id}-label`,
                                    "data-direction": p?.direction,
                                    "data-parity": null == p ? void 0 : p.moves % 2,
                                    children: [
                                        q
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: i1.aK,
                                                  children: en.intl.string(et.default.jt5JBA),
                                              })
                                            : null,
                                        L.options.map((e, t) =>
                                            (0, a.jsx)(
                                                i6,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: M,
                                                    selected: q ? U.includes(e.id) : void 0,
                                                    onPick: (e) =>
                                                        q
                                                            ? m((t) => {
                                                                  var n, l;
                                                                  let a;
                                                                  return {
                                                                      ...t,
                                                                      [L.id]:
                                                                          ((n = t[L.id] ?? i9),
                                                                          (l = e.id),
                                                                          (a = n.includes(l)
                                                                              ? n.filter((e) => e !== l)
                                                                              : [...n, l]),
                                                                          L.options
                                                                              .filter((e) => a.includes(e.id))
                                                                              .map((e) => e.id)),
                                                                  };
                                                              })
                                                            : ei(e),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, a.jsxs)("div", {
                                            className: i1.Xy,
                                            children: [
                                                (0, a.jsx)("span", {
                                                    className: i1.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, a.jsx)(iZ.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, a.jsx)(an.y, {
                                                    value: $,
                                                    onChange: (e) => {
                                                        let { value: t } = e.currentTarget;
                                                        d((e) => ({ ...e, [L.id]: t }));
                                                    },
                                                    onKeyDown: (e) => {
                                                        "Enter" !== e.key ||
                                                            e.shiftKey ||
                                                            e.nativeEvent.isComposing ||
                                                            (e.preventDefault(), er());
                                                    },
                                                    placeholder: en.intl.string(et.default.qifsdL),
                                                    "aria-label": en.intl.formatToPlainString(et.default.XHESTL, {
                                                        question: L.question,
                                                    }),
                                                    disabled: M,
                                                    rows: 1,
                                                    className: i1.Pu,
                                                    "data-vibegrations-clarification-other": L.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == x
                                    ? null
                                    : (0, a.jsx)(
                                          i3,
                                          {
                                              question: x.question,
                                              draft: x.draft,
                                              selected: x.selected,
                                              direction: x.direction,
                                              disabled: M,
                                          },
                                          x.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            _ > 1 || q
                ? (0, a.jsxs)("div", {
                      className: lT.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children:
                                  _ > 1
                                      ? en.intl.formatToPlainString(et.default["7bypa+"], { index: R + 1, total: _ })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: lT.zt,
                              children: [
                                  ea
                                      ? (0, a.jsx)(i0.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: en.intl.string(et.default.yKdgqw),
                                            onClick: el,
                                            "data-vibegrations-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(N.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: en.intl.string(ep ? en.t.geKm7t : et.default.S7Sa6j),
                                      disabled: !eh,
                                      onClick: eg,
                                      "data-vibegrations-clarification-next": !0,
                                      "data-submits": ep ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var i7 = n(643278),
    i8 = n(191521),
    i5 = n(405189);
function se(e) {
    let { line: t, placement: n, todos: l, todosLive: s = !0, provisionalTodo: o, agents: u, onJumpToActivity: d } = e,
        c = null != n,
        [m, f] = i.useState(n ?? "top"),
        [h, p] = i.useState(c),
        [g, x] = i.useState(!1),
        [b, v] = i.useState(!1),
        [j, k] = i.useState(c);
    (j !== c && (k(c), null != n ? (f(n), p(!0)) : (x(!1), v(!1))),
        i.useEffect(() => {
            if (c || !h) return;
            let e = setTimeout(() => p(!1), 150);
            return () => clearTimeout(e);
        }, [c, h]),
        i.useEffect(() => {
            if (!h || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [h, c]));
    let [A, N] = i.useState(!1),
        [C, S] = i.useState(!1),
        [E, I] = i.useState(b);
    (E !== b && (I(b), b ? N(!0) : S(!1)),
        i.useEffect(() => {
            if (b || !A) return;
            let e = setTimeout(() => N(!1), 150);
            return () => clearTimeout(e);
        }, [b, A]),
        i.useEffect(() => {
            if (!A || !b) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => S(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [A, b]));
    let T = null != l && l.length > 0,
        P = i.useCallback(() => v((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: i5.qd,
              "data-placement": m,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: r()(i5.vK, { [i5.ho]: g && c, [i5.ET]: !c }),
                      children: [
                          null == d
                              ? (0, a.jsx)("ol", {
                                    className: r()(i5.Rk, lq.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(l_.A, {
                                        glyph: (0, a.jsx)(i8.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(y.D, {
                                    className: i5.pZ,
                                    onClick: d,
                                    "aria-label": en.intl.string(et.default.tYjQFG),
                                    children: (0, a.jsx)("ol", {
                                        className: r()(i5.Rk, lq.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(l_.A, {
                                            glyph: (0, a.jsx)(i8.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          T
                              ? (0, a.jsx)(w.m, {
                                    text: en.intl.string(et.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(y.D, {
                                        className: i5.BO,
                                        onClick: P,
                                        "aria-expanded": b,
                                        "aria-label": en.intl.string(et.default.qCRC6c),
                                        children: (0, a.jsx)(i7.ClipboardListIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  A && T
                      ? (0, a.jsx)("div", {
                            className: r()(i5.vB, { [i5.pg]: b && C, [i5.ui]: !b }),
                            children: (0, a.jsx)(lX, {
                                todos: l,
                                provisional: o,
                                agents: u,
                                live: s,
                                announceProgress: !1,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
var st = n(106430),
    sn = n(670455),
    sl = n(698638),
    sa = n(348800);
let si = [
    en.intl.string(et.default["E+Q26x"]),
    en.intl.string(et.default["06/jqP"]),
    en.intl.string(et.default["3gSfUa"]),
];
function ss(e) {
    var t;
    let { projectId: l, restoreState: s, onRestoreVersion: r } = e,
        o = (0, c.bG)([eN.Ay], () => eN.Ay.getMessages(l), [l]),
        u = (0, c.bG)([ee.Ay], () => ee.Ay.getConnState(l), [l]),
        d = (0, c.bG)([ee.Ay], () => ee.Ay.isChatStopped(l), [l]),
        m = (0, c.bG)([eN.Ay], () => eN.Ay.getProjectUsage(l), [l]),
        f = (0, c.bG)([eN.Ay], () => eN.Ay.getThinkingActivity(l), [l]),
        h = (0, c.bG)([eN.Ay], () => eN.Ay.isCompacting(l), [l]),
        p = (0, c.bG)([ee.Ay], () => ee.Ay.getModelSettings(l), [l]),
        g = i.useRef(null),
        x = i.useRef(null),
        b = i.useRef(null),
        j = i.useRef(!0),
        [y, w] = i.useState(!0);
    i.useEffect(() => {
        j.current && x.current?.scrollToBottom();
    }, [o]);
    let k = i.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                n = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                l = t ?? n[n.length - 1];
            if (null == l) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            l.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        A = i.useCallback(() => {
            let e = x.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            j.current = t < 32;
            let n = t > 1;
            w((e) => (!n === e ? e : !n));
        }, []);
    (i.useLayoutEffect(() => {
        let e = g.current,
            t = b.current;
        if (null == e) return;
        let n = x.current?.getScrollerNode(),
            l = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            i = n?.getBoundingClientRect().height,
            s = null;
        function r() {
            j.current &&
                (null != s && cancelAnimationFrame(s), (s = requestAnimationFrame(() => x.current?.scrollToBottom())));
        }
        let o = new ResizeObserver((t) => {
            for (let s of t)
                if (s.target === e) {
                    let e = s.contentRect.width;
                    if (e === l) continue;
                    ((l = e), r());
                } else if (s.target === n) {
                    let e = s.contentRect.height;
                    if (e === i) continue;
                    ((i = e), r());
                } else {
                    let e = s.contentRect.height;
                    if (e === a) continue;
                    ((a = e), r());
                }
        });
        return (
            o.observe(e),
            null != n && o.observe(n),
            null != t && o.observe(t),
            () => {
                (o.disconnect(), null != s && cancelAnimationFrame(s));
            }
        );
    }, []),
        i.useEffect(() => {
            (0, ee.Hc)(l);
        }, [l]),
        (0, th.v6)(l),
        i.useEffect(
            () => () =>
                (function (e) {
                    if ((0, eq.jb)(e)) return;
                    let t = (0, eq.hl)(e);
                    t < eq.qu ||
                        (0, eq.Xi)(e) ||
                        st.A.possiblyShowFeedbackModal(sn.MW.VIBEGRATIONS, () => {
                            ((0, eq.AH)(e),
                                (0, lC.openModalLazy)(async () => {
                                    let { default: l } = await Promise.all([
                                        n.e("312513"),
                                        n.e("218413"),
                                        n.e("137381"),
                                        n.e("847004"),
                                        n.e("341676"),
                                    ]).then(n.bind(n, 580711));
                                    return (n) => (0, a.jsx)(l, { ...n, projectId: e, promptCount: t });
                                }));
                        });
                })(l),
            [l],
        ));
    let C = tm(l),
        S = i.useCallback(
            (e, t) => {
                (0, ee.dv)(l, e, t);
            },
            [l],
        ),
        E = i.useCallback(
            (e, t) => {
                0 === C.annotations.length
                    ? S(e, t)
                    : (S(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  a = t.filter((e) => e4(e.comment)),
                                  i = [];
                              if (
                                  (i.push(
                                      `My design feedback: ${1 === a.length ? "1 comment" : `${a.length} comments`} on the app.`,
                                  ),
                                  null != l)
                              ) {
                                  let e = l.title.trim(),
                                      t = "" !== e ? `${e} (${l.url})` : l.url;
                                  (i.push(`Page: ${t}, viewport ${l.viewport.width}x${l.viewport.height}.`),
                                      i.push(
                                          "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                                      ));
                              }
                              a.forEach((e, t) => {
                                  let n;
                                  (i.push(""),
                                      i.push(`${t + 1}. ${e5(e.target)}`),
                                      i.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let s = n.trim();
                              return ("" !== s && (i.push(""), i.push(`Note for the whole batch: ${s}`)), i.join("\n"));
                          })({ annotations: C.annotations, metaComment: e, context: C.context }),
                          t,
                      ),
                      to(l));
            },
            [C, S, l],
        ),
        I = i.useCallback(() => (0, ee.fu)(l), [l]),
        T = i.useCallback((e) => nw(l, e.implementation_prompt), [l]),
        [P, M] = (function (e) {
            let [t, n] = i.useState(() => no(e)),
                [l, a] = i.useState(e),
                s = l !== e,
                r = s ? no(e) : t;
            return (s && (a(e), n(r)), [r, n]);
        })(l),
        _ = i.useCallback(() => S(en.intl.string(et.default["3sTTBu"])), [S]),
        R = i.useCallback((e, t) => nw(l, e, { clarificationAnswers: t }), [l]),
        D = i.useCallback((e) => (0, ee.XZ)(l, e), [l]),
        L = i.useCallback((e) => (0, ee.vX)(l, e), [l]),
        F = i.useCallback((e) => aj(l, "chat", Array.from(e), L), [l, L]),
        O = i.useCallback(() => nw(l, en.intl.string(et.default.Jj8Ftb)), [l]),
        z = s?.status === "restoring",
        G = "open" === u && !d && !z,
        B = o[o.length - 1],
        $ = null != B && "assistant" === B.role && null != B.proposal,
        [q, U] = i.useState(null),
        V = B?.clarification != null && B.clarification.id !== q ? B.clarification : null,
        H = i.useCallback(() => {
            null != V && U(V.id);
        }, [V]),
        K = (0, c.bG)([ee.Ay], () => ee.Ay.getSettings(l), [l]),
        [W, Y] = i.useState(null),
        X =
            null != B &&
            "assistant" === B.role &&
            null != B.settingsRequest &&
            (0, eN.BL)(B) &&
            B.id !== W &&
            ((t = B.settingsRequest),
            null != K &&
                (t.keys ?? []).some((e) => {
                    let t = K.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return K.secrets.find((t) => t.name === e)?.set !== !0;
                    let n = K.values[e];
                    return null == n || "" === n;
                }))
                ? B
                : null,
        Q = X?.settingsRequest ?? null,
        Z = i.useCallback(() => {
            null != X && Y(X.id);
        }, [X]),
        J = null != Q,
        el = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, c.bG)([eN.Ay], () => eN.Ay.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, c.bG)([eN.Ay], () => eN.Ay.isHistoryUnavailable(l), [l]),
            connState: u,
        }),
        ea = "loading" === el && 0 === o.length,
        ei = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return si[e % si.length];
        }, [l]),
        es = $ ? en.intl.string(et.default.Jj8Ftb) : "greeting" === el && 0 === o.length ? ei : null,
        er = i.useMemo(() => {
            for (let e = o.length - 1; e >= 0; e--) {
                let t = o[e];
                if ("assistant" === t.role && !(0, eN.BL)(t)) return t;
            }
        }, [o]),
        eo = null != er,
        eu =
            null != er
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = t8.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(er)
                : void 0,
        ed = $ && G ? O : void 0,
        ec = i.useCallback(() => nw(l, en.intl.string(et.default.ga8too)), [l]),
        [em, ef] = i.useState(null),
        [eh, ep] = i.useState(eo);
    (eh !== eo && (ep(eo), eo || ef(null)),
        i.useEffect(() => {
            if (!eo) return;
            let e = x.current?.getScrollerNode(),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? ef(null)
                        : ef(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [eo, er?.steps]));
    let eg = i.useMemo(() => (null != er ? (0, nk.b)(er.steps) : ""), [er]),
        ex = i.useMemo(() => (null != er ? ((0, t4.lt)(er.steps) ?? er.todos) : void 0), [er]),
        eb = er?.provisionalTodo,
        ev = null != er && t7(er),
        ej = i.useMemo(() => {
            var e;
            return null != er ? ((e = er.steps), l0((0, t4.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [er]);
    return (0, a.jsxs)("section", {
        ref: g,
        "data-vibegrations-chat": !0,
        className: sa.TE,
        children: [
            G
                ? (0, a.jsx)(t3.A, {
                      title: en.intl.string(et.default.UazRD1),
                      description: en.intl.string(et.default["O4r42+"]),
                      icons: sl.ir,
                      onDrop: F,
                  })
                : null,
            (0, a.jsx)(se, {
                onJumpToActivity: k,
                line: eg,
                placement: eo && "top" === em ? "top" : null,
                todos: ex,
                todosLive: ev,
                provisionalTodo: eb,
                agents: ej,
            }),
            (0, a.jsxs)("div", {
                className: sa.JX,
                children: [
                    (0, a.jsx)(t9.Ch, {
                        ref: x,
                        onScroll: A,
                        scrollbarGutter: ea ? "both-edges" : "stable",
                        className: [sa.N$, y ? null : sa.hB, J ? sa.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(iE, {
                            ref: b,
                            projectId: l,
                            messages: o,
                            emptyState: el,
                            floatingSettingsMessageId: X?.id,
                            onPickIdea: G ? T : void 0,
                            onAskForIdeas: G ? _ : void 0,
                            draftHasText: P,
                            onApprovePlan: G ? ec : void 0,
                            onRestoreVersion: z || eo ? void 0 : r,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: sa.NJ,
                        children: (0, a.jsx)(iY, {
                            projectId: l,
                            thinking: eo,
                            turnStartedAt: eu,
                            restoring: z,
                            recalling: ea,
                            thinkingActivity: f,
                            compacting: h,
                            projectUsage: m,
                            connState: u,
                        }),
                    }),
                    null == V
                        ? null
                        : (0, a.jsx)("div", {
                              className: J ? `${sa.B5} ${sa.J9}` : sa.B5,
                              children: (0, a.jsx)(
                                  i4,
                                  { clarification: V, onSubmit: G ? R : void 0, onDismiss: H },
                                  V.id,
                              ),
                          }),
                    null == Q
                        ? null
                        : (0, a.jsx)("div", {
                              className: sa.B5,
                              children: (0, a.jsx)(lM, { projectId: l, request: Q, onDismiss: Z }, X?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: sa.Jx,
                children: [
                    (0, a.jsx)(se, {
                        onJumpToActivity: k,
                        line: eg,
                        placement: eo && "bottom" === em ? "bottom" : null,
                        todos: ex,
                        todosLive: ev,
                        provisionalTodo: eb,
                        agents: ej,
                    }),
                    0 === C.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: sa.g0,
                              "data-testid": "vibegrations-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: en.intl.formatToPlainString(et.default.Lkx0Kk, {
                                          count: C.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: en.intl.string(et.default.fh6kQv),
                                  }),
                                  (0, a.jsx)(N.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: en.intl.string(et.default.B0YARo),
                                      onClick: () => to(l),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(aS, {
                        projectId: l,
                        canSend: G,
                        stopped: d,
                        running: eo,
                        restoring: z,
                        onSend: E,
                        hasPendingContext: C.annotations.length > 0,
                        onInterrupt: G ? I : void 0,
                        onUploadFile: L,
                        onApprove: ed,
                        suggestion: es,
                        questionOpen: null != V || null != Q,
                        modelSettings: p,
                        onModelSettingsChange: D,
                        onDraftHasTextChange: M,
                    }),
                ],
            }),
        ],
    });
}
var sr = n(602853),
    so = n(517461),
    su = n(761929),
    sd = n(927506);
function sc(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: s } = e,
        r = (0, sr.r)(F.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, d] = (0, so.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = i.useState(u ?? 460),
        f = (0, t5.clamp)(c, 360, n);
    i.useLayoutEffect(() => {
        l(t ? f + r : 0);
    }, [f, t, r, l]);
    let h = (0, su.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: su.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        p = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, a.jsxs)("div", {
        className: sd.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: sd.Di, onPointerDown: p }),
            (0, a.jsx)("div", { ref: o, className: sd.kL, style: { width: f }, children: s }),
        ],
    });
}
var sm = n(624479),
    sf = n(761508),
    sh = n(540999),
    sp = n(957565);
let sg = [],
    sx = new Map(),
    sb = new Map(),
    sv = new Map(),
    sj = new Map(),
    sy = new Map(),
    sw = new Map(),
    sk = new Map();
class sA extends c.Ay.Store {
    getStatus(e) {
        return sx.get(e) ?? null;
    }
    getFetchState(e) {
        return sb.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return sj.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return sw.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return sy.get(e) ?? null;
    }
    getModelCalls(e) {
        return sk.get(e) ?? sg;
    }
    getForceCompactionState(e) {
        return sv.get(e) ?? "idle";
    }
}
let sN = new sA(eM.h, {
    LOGOUT: function () {
        if (
            0 === sx.size &&
            0 === sb.size &&
            0 === sv.size &&
            0 === sj.size &&
            0 === sy.size &&
            0 === sw.size &&
            0 === sk.size
        )
            return !1;
        (sx.clear(), sb.clear(), sv.clear(), sj.clear(), sy.clear(), sw.clear(), sk.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        sb.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("open" === n) return !1;
        let l = "pending" === sv.get(t);
        l &&
            sv.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === sb.get(t);
        if ((a && sb.set(t, "failed"), !l && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: n, failed: l } = e;
        l || null == n ? sb.set(t, "failed") : (sx.set(t, n), sb.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        sj.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        sy.set(e.projectId, {
            promptCeiling: e.promptCeiling,
            threshold: e.threshold,
            projected: e.projected,
            headroom: e.headroom,
            retainedMessages: e.retainedMessages,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_REQUESTED: function (e) {
        let { projectId: t } = e;
        sv.set(t, "pending");
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        sv.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = sk.get(e.projectId);
        if (null != t && t.some((t) => t.id === e.id)) return !1;
        let n = {
                id: e.id,
                role: e.role,
                model: e.model,
                stopReason: e.stopReason,
                durationMs: e.durationMs,
                inputTokens: e.inputTokens,
                outputTokens: e.outputTokens,
                cacheReadTokens: e.cacheReadTokens,
                cacheWriteTokens: e.cacheWriteTokens,
                taskId: e.taskId,
                observedAt: e.observedAt,
            },
            l = null == t ? [n] : t.concat(n);
        sk.set(e.projectId, l.length > 200 ? l.slice(-200) : l);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: n } = e;
        if (0 === (0, el.aM)(n.total)) return !1;
        sw.set(t, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (sx.delete(t), sb.delete(t), sv.delete(t), sj.delete(t), sy.delete(t), sw.delete(t), sk.delete(t));
    },
});
function sC(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function sS(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function sE(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function sI(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = String(t.getHours()).padStart(2, "0"),
        l = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${n}:${l}:${a}`;
}
function sT(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function sP(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function sM(e) {
    return en.intl.string("preview" === e ? et.default["+m8XM6"] : et.default.kiOVnt);
}
let s_ = ["all", "preview", "stable", "web"],
    sR = new Set(["error", "aborted", "length"]);
function sD(e) {
    switch (e.reason) {
        case "local":
            return en.intl.string(et.default.M7Vn6y);
        case "unconfigured":
            return en.intl.string(et.default.QirpMl);
        case "unauthorized":
            return en.intl.string(et.default.QZ1e4l);
        default:
            return null != e.detail
                ? en.intl.formatToPlainString(et.default.zUTHf7, { detail: e.detail })
                : en.intl.string(et.default.WIAQes);
    }
}
function sL(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : en.intl.formatToPlainString(et.default.SBkDIZ, {
              p50: sC(e.memory_p50_bytes ?? 0),
              p999: sC(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let sF = {
    db: () => et.default.r6cciE,
    db_preview: () => et.default.JmIyL8,
    runtime: () => et.default.bzNyv8,
    runtime_preview: () => et.default["LONZ/8"],
    bot: () => et.default.jdpw3A,
    bot_preview: () => et.default["/g6wUz"],
};
var sO = n(69985);
function sz(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: sO.KE,
        children: [
            (0, a.jsx)("div", {
                className: sO.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(A.y, { type: A.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: en.intl.string(et.default["K+FvtM"]),
                            })
                          : null != t
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: en.intl.formatToPlainString(et.default["4NpaEk"], { time: sT(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(N.$, { variant: "secondary", size: "sm", text: en.intl.string(et.default.aw0IJm), onClick: l }),
        ],
    });
}
function sG(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: sO.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: sO.Gf, children: t }),
            n,
        ],
    });
}
function sB(e) {
    let { label: t, value: n, hint: l, critical: i = !1 } = e;
    return (0, a.jsxs)("div", {
        className: sO.N8,
        children: [
            (0, a.jsxs)("div", {
                className: sO.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: i ? "text-feedback-critical" : "text-default",
                        children: n,
                    }),
                ],
            }),
            null != l && (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function s$(e) {
    let { label: t, used: n, max: l, formatValue: i } = e,
        s = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        r = s >= 0.9;
    return (0, a.jsxs)("div", {
        className: sO.N8,
        children: [
            (0, a.jsxs)("div", {
                className: sO.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: r ? "text-feedback-critical" : "text-default",
                        children: `${i(n)} / ${i(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: sO.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": l,
                "aria-valuenow": Math.min(n, l),
                "aria-valuetext": `${i(n)} of ${i(l)}`,
                children: (0, a.jsx)("div", {
                    className: r ? sO.aV : sO.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(s) },
                }),
            }),
        ],
    });
}
function sq(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(sB, {
            label: en.intl.string(et.default.H6PMwW),
            value: en.intl.string(et.default.TLOZ8J),
            hint: sD(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(sB, {
            label: en.intl.string(et.default.H6PMwW),
            value: "\u2014",
            hint: en.intl.string(et.default.uAzxdh),
        });
    let l = sL(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sB, { label: en.intl.string(et.default.awAqRi), value: sS(n.cpu_ms) }),
            null != l && (0, a.jsx)(sB, { label: en.intl.string(et.default.WdGviA), value: l }),
        ],
    });
}
function sU(e) {
    let { analytics: t } = e,
        n = en.intl.string(et.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, a.jsx)(sG, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: sD(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? sF[t] : null) ? en.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(sG, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: en.intl.string(et.default.uAzxdh),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          sB,
                          {
                              label: n,
                              value: en.intl.formatToPlainString(et.default.AnRynJ, { cpu: sS(t.cpu_ms) }),
                              hint: sL(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var sV = n(522652);
let sH = [];
function sK(e) {
    let t,
        { call: n } = e,
        { text: l, bad: i } =
            ((t = null != n.stopReason && sR.has(n.stopReason)),
            {
                text: [
                    null != n.durationMs ? sS(n.durationMs) : null,
                    `${sE(n.inputTokens + n.cacheReadTokens + n.cacheWriteTokens)} \u{2192} ${sE(n.outputTokens)}`,
                    t ? n.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, a.jsxs)("div", {
        className: sV.p5,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sV.Q5,
                children: sI(n.observedAt),
            }),
            (0, a.jsxs)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: sV.qN,
                children: [n.role, " \xb7 ", n.model],
            }),
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/medium",
                color: i ? "text-feedback-critical" : "text-muted",
                children: l,
            }),
        ],
    });
}
function sW(e, t) {
    return (0, a.jsx)(sB, {
        label: e,
        value: en.intl.formatToPlainString(et.default.U98VaN, { count: sE((0, el.aM)(t)) }),
        hint: `${sE(t.input_tokens)} in \xb7 ${sE(t.output_tokens)} out \xb7 ${sE(t.cache_read_input_tokens)} cache read`,
    });
}
function sY(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: s, traceVisible: r = !1 } = e,
        o = (0, c.bG)([sN], () => sN.getLastTurnUsage(t), [t]),
        u = (0, c.bG)([sN], () => sN.getLastCompaction(t), [t]),
        d = (0, c.bG)([sN], () => sN.getLastCompactionDecline(t), [t]),
        m = (0, c.bG)([sN], () => sN.getForceCompactionState(t), [t]),
        f = i.useCallback(() => (0, ee.Lj)(t), [t]),
        h = i.useCallback(() => (0, ee.Lj)(t, !0), [t]),
        p = (0, c.bG)([sN], () => (r ? sH : sN.getModelCalls(t)), [t, r]),
        g = n?.agent?.lifetime ?? null,
        x = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        j = u?.promptCeiling ?? x?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: sV.Mf,
        children: [
            (0, a.jsx)(sz, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: s }),
            (0, a.jsx)(sG, {
                title: en.intl.string(et.default.IYpHtT),
                children:
                    null == g
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: en.intl.string(et.default.gPabB9),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(sB, {
                                      label: en.intl.string(et.default["8MSJDH"]),
                                      value: sE((0, el.a7)(g.cost_usd)),
                                      hint: en.intl.formatToPlainString(et.default["6Z2KhK"], { count: sE(g.turns) }),
                                  }),
                                  sW(en.intl.string(et.default.hk4jJr), g.orchestrator),
                                  sW(en.intl.string(et.default.R9aduM), g.codegen),
                                  sW(en.intl.string(et.default.Tj6b30), (0, el.wU)(g.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(sB, {
                                          label: en.intl.string(et.default.Q2OlgI),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${sE(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(sG, {
                title: en.intl.string(et.default.lo4mY6),
                children:
                    null == o
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: en.intl.string(et.default.uyPveL),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  sW(en.intl.string(et.default["VwF+oY"]), o.total),
                                  (0, a.jsx)(sB, {
                                      label: en.intl.string(et.default["kILb+R"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, el.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(sG, {
                title: en.intl.string(et.default.mn8279),
                children: [
                    null != u && null != j
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(s$, {
                                      label: en.intl.string(et.default.dKFhCg),
                                      used: u.tokensAfter,
                                      max: j,
                                      formatValue: sE,
                                  }),
                                  (0, a.jsx)(sB, {
                                      label: en.intl.string(et.default.ntZb8d),
                                      value: `${sE(u.tokensBefore)} \u{2192} ${sE(u.tokensAfter)}`,
                                      hint: en.intl.formatToPlainString(et.default.jA05ru, {
                                          count: sE(u.retainedMessages),
                                          time: sT(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? en.intl.formatToPlainString(et.default.LKGmsP, { ceiling: sE(j) })
                                      : en.intl.string(et.default.gPabB9),
                          }),
                    null != d &&
                        (0, a.jsx)(sB, {
                            label: en.intl.string(et.default["se+2ls"]),
                            value: `${sE(d.projected)} / ${sE(d.threshold)}`,
                            critical: !0,
                            hint: en.intl.formatToPlainString(et.default.KHK44U, { time: sT(d.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: sV.Lj,
                        children: [
                            (0, a.jsx)(N.$, {
                                variant: "secondary",
                                size: "sm",
                                text: en.intl.string(et.default.B0KV7p),
                                disabled: "pending" === m,
                                onClick: f,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof m && "compacted" !== m.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return en.intl.string(et.default.wBng42);
                                    if ("pending" === e) return en.intl.string(et.default["0tgo31"]);
                                    let t = sT(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return en.intl.formatToPlainString(et.default["eL8+rZ"], { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? et.default["9vZuG6"]
                                            : "busy" === e.outcome
                                              ? et.default.GV4sdd
                                              : et.default["Y+0nUb"];
                                    return en.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(m),
                            }),
                            "object" == typeof m &&
                                !0 === m.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(N.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: en.intl.string(et.default["044+ju"]),
                                            onClick: h,
                                        }),
                                        (0, a.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: en.intl.string(et.default["8D32H6"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !r &&
                (0, a.jsx)(sG, {
                    title: en.intl.string(et.default.F5eP7e),
                    children:
                        0 === p.length
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: en.intl.string(et.default.j8NMgl),
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      p
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, a.jsx)(sK, { call: e }, e.id)),
                                      p.length > 30 &&
                                          (0, a.jsx)(v.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: en.intl.formatToPlainString(et.default["3hYhpp"], {
                                                  shown: 30,
                                                  total: p.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(sG, {
                    title: en.intl.string(et.default.ZRxAPD),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(sB, {
                                        label: en.intl.string(et.default["wt5X/o"]),
                                        value: sT(b.instance_since),
                                        hint: en.intl.string(et.default.QX2UQC),
                                    }),
                                    (0, a.jsx)(sB, {
                                        label: en.intl.string(et.default["4lgurx"]),
                                        value: sE(b.sockets),
                                    }),
                                    (0, a.jsx)(sB, {
                                        label: en.intl.string(et.default["a/LXBt"]),
                                        value: b.turn_inflight
                                            ? en.intl.string(et.default["9KlveJ"])
                                            : en.intl.string(et.default["4tYZVa"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(sB, {
                                            label: en.intl.string(et.default["/hOBkc"]),
                                            value: sE(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(sq, { analytics: n.analytics }),
                    ],
                }),
            null != x &&
                (0, a.jsxs)(sG, {
                    title: en.intl.string(et.default["EmSF+A"]),
                    children: [
                        (0, a.jsx)(sB, {
                            label: en.intl.string(et.default.Rb6m3E),
                            value: sE(x.max_subagent_iterations),
                        }),
                        (0, a.jsx)(sB, {
                            label: en.intl.string(et.default.WQ9pMe),
                            value: en.intl.formatToPlainString(et.default.U98VaN, {
                                count: sE(x.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(sB, {
                            label: en.intl.string(et.default.iEAvzu),
                            value: en.intl.formatToPlainString(et.default.U98VaN, {
                                count: sE(x.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(sB, {
                            label: en.intl.string(et.default["jbhs+f"]),
                            value: sE(x.max_user_message_chars),
                        }),
                        (0, a.jsx)(sB, { label: en.intl.string(et.default.TOQnq4), value: sE(x.max_build_attempts) }),
                        (0, a.jsx)(sB, { label: en.intl.string(et.default.RIDc6D), value: sE(x.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var sX = n(629584),
    sQ = n(683438),
    sZ = n(849363);
function sJ(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: sZ.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: en.intl.string(et.default.TV42NS),
              }),
          });
}
function s0(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: sZ.qf,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: en.intl.string(et.default.TV42NS),
                  }),
                  (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: en.intl.string(et.default["+2AMt1"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: sZ.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function s2(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: sZ.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: en.intl.string(et.default["U/qDX9"]),
              }),
          })
        : null;
}
var s1 = n(417397);
let s6 = i.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [s, r] = i.useState(!1),
        o = i.useId(),
        u = i.useMemo(
            () =>
                (function (e) {
                    let t;
                    if (e.length > 16e3) return null;
                    let n = e.indexOf("{"),
                        l = e.indexOf("["),
                        a = -1 === n ? l : -1 === l ? n : Math.min(n, l);
                    if (-1 === a) return null;
                    let i = e.slice(a).trim();
                    if (i.length < 2) return null;
                    try {
                        t = JSON.parse(i);
                    } catch {
                        return null;
                    }
                    if ("object" != typeof t || null == t) return null;
                    let s = e.slice(0, a).trim(),
                        r = JSON.stringify(t, null, 2);
                    return Array.isArray(t)
                        ? { prefix: s, pretty: r, marker: "[\u2026]", size: t.length }
                        : { prefix: s, pretty: r, marker: "{\u2026}", size: Object.keys(t).length };
                })(n.message),
            [n.message],
        ),
        d = "error" === n.level ? "text-feedback-critical" : "text-default";
    return (0, a.jsxs)("div", {
        className: s1.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: s1.Mt,
                selectable: !0,
                children: sI(n.ts),
            }),
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: s1.dm,
                children: n.level,
            }),
            (0, a.jsxs)("span", {
                className: s1.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-subtle",
                            className: s1.Cq,
                            children: n.source,
                        }),
                    null != n.kind &&
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-feedback-critical",
                            className: s1.Cq,
                            title: n.build ?? void 0,
                            children: en.intl.string(et.default.GO6JcR),
                        }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, a.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: d,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(y.D, {
                                      className: s1.Pq,
                                      "aria-expanded": s,
                                      "aria-controls": o,
                                      "aria-label": en.intl.string(et.default.ehmgbH),
                                      onClick: () => r((e) => !e),
                                      children: [
                                          s
                                              ? (0, a.jsx)(nq.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(nU._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  en.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? et.default.lXkB6Z : et.default.wkbYxG,
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  s &&
                                      (0, a.jsx)(v.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: d,
                                          className: s1.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: d,
                              selectable: !0,
                              children: n.message,
                          }),
                ],
            }),
        ],
    });
});
function s9(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([ec.Ay], () => ec.Ay.getLogs(t), [t]),
        l = (0, c.bG)([ec.Ay], () => ec.Ay.getHistoryState(t, "logs")),
        [s, r] = i.useState("all"),
        [o, u] = i.useState(""),
        d = i.useMemo(() => {
            let e = o.trim().toLowerCase();
            return n.filter((t) => {
                var n, l;
                return (
                    "string" == typeof (n = t.log).message &&
                    "string" == typeof n.level &&
                    "string" == typeof n.ts &&
                    ("all" === s ||
                        ("preview" === (l = t.log.source) || "stable" === l || "web" === l ? l : "other") === s) &&
                    ("" === e ||
                        t.log.message.toLowerCase().includes(e) ||
                        t.log.level.includes(e) ||
                        (t.log.source?.toLowerCase().includes(e) ?? !1))
                );
            });
        }, [n, s, o]),
        m = i.useRef(null),
        f = i.useRef(!0);
    i.useEffect(() => {
        f.current && m.current?.scrollToBottom();
    }, [d]);
    let h = i.useCallback(() => {
            let e = m.current;
            null != e && (f.current = 32 > e.getDistanceFromBottom());
        }, []),
        p = i.useMemo(
            () =>
                s_.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return sM(e);
                            case "web":
                                return en.intl.string(et.default.J2TPCe);
                            default:
                                return en.intl.string(et.default.humq1B);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: s1.$F,
        children: [
            (0, a.jsxs)("div", {
                className: s1.y4,
                children: [
                    (0, a.jsx)(sX.I, {
                        look: "pill",
                        "aria-label": en.intl.string(et.default.fhnXnM),
                        options: p,
                        value: s,
                        onChange: (e) => r(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: s1.KT,
                        children: (0, a.jsx)(sQ.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: en.intl.string(et.default["MX4vr/"]),
                            "aria-label": en.intl.string(et.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(sJ, { state: l }),
            (0, a.jsxs)(t9.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: s1.sx,
                children: [
                    (0, a.jsx)(s2, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(s0, {
                              state: l,
                              emptyTitle: en.intl.string(et.default.mcFyYc),
                              emptyBody: en.intl.string(et.default.RNN8pX),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: en.intl.string(et.default.oIJbFa),
                            })
                          : d.map((e) => (0, a.jsx)(s6, { entry: e.log, showSource: "all" === s }, e.key)),
                ],
            }),
        ],
    });
}
function s3(e) {
    let { title: t, preview: n, stable: l, renderEnv: s } = e,
        r = [];
    return (
        null != n && r.push((0, a.jsx)(i.Fragment, { children: s("preview", n) }, "preview")),
        null != l && r.push((0, a.jsx)(i.Fragment, { children: s("stable", l) }, "stable")),
        (0, a.jsx)(sG, {
            title: t,
            children:
                r.length > 0
                    ? r
                    : (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: en.intl.string(et.default.W4hcKL),
                      }),
        })
    );
}
function s4(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(sB, {
                      label: en.intl.formatToPlainString(et.default.f8ix3w, { env: sM(n) }),
                      value: ((t = l.connected), en.intl.string(t ? et.default["9KlveJ"] : et.default["4tYZVa"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(sB, {
                      label: en.intl.string(et.default["0AB7l3"]),
                      value: sE(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${sT(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(sB, { label: en.intl.string(et.default.ElaQ0A), value: sE(l.guild_count) }),
                  (0, a.jsx)(sB, {
                      label: en.intl.string(et.default.SJtBTN),
                      value: sE(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? en.intl.formatToPlainString(et.default.bSzLue, {
                                    code: l.last_close_code,
                                    time: sT(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(sB, {
                          label: en.intl.string(et.default.N4l504),
                          value: sE(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(sB, { label: sM(n), value: en.intl.string(et.default.C6xjtD) });
}
function s7(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(sB, {
        label: sM(t),
        value: en.intl.formatToPlainString(et.default.Yur5Zm, { requests: sE(n.requests), failures: sE(l + n.errors) }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? en.intl.formatToPlainString(et.default["0ayoy+"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: sT(n.last_failure.at),
                  })
                : en.intl.formatToPlainString(et.default["1PdrB1"], { time: sT(n.since) }),
    });
}
function s8(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sB, {
                label: en.intl.formatToPlainString(et.default.BVORfc, { env: sM(t) }),
                value: sE(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    sB,
                    {
                        label: en.intl.formatToPlainString(et.default.NQxkhU, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? en.intl.formatToPlainString(et.default.P8lBrO, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? en.intl.formatToPlainString(et.default["7ecbr3"], { time: sT(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function s5(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(sB, {
        label: sM(t),
        value: en.intl.formatToPlainString(et.default.voXL2a, { calls: sE(n.calls), errors: sE(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function re(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(sG, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: en.intl.string(et.default["v/fbnv"]),
            }),
        });
    let i = n.cpu_ms_total / n.requests,
        s = n.cpu_ms_total > 0;
    return (0, a.jsxs)(sG, {
        title: t,
        children: [
            (0, a.jsx)(sB, {
                label: en.intl.string(et.default.KOnL3g),
                value: sE(n.requests),
                hint: en.intl.formatToPlainString(et.default["1PdrB1"], { time: sT(n.since) }),
            }),
            (0, a.jsx)(sB, { label: en.intl.string(et.default.CjPhyY), value: sE(n.errors), critical: n.errors > 0 }),
            s
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(s$, {
                              label: en.intl.string(et.default["V/nNbs"]),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: sS,
                          }),
                          (0, a.jsx)(sB, {
                              label: en.intl.string(et.default["+rYPHD"]),
                              value: sS(i),
                              hint: en.intl.formatToPlainString(et.default["+LxC7W"], {
                                  total: sS(n.cpu_ms_total),
                                  wall: sS(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(sB, {
                      label: en.intl.string(et.default["V/nNbs"]),
                      value: en.intl.string(et.default.YKWIxp),
                      hint: en.intl.string(et.default["8GAiDk"]),
                  }),
            !s &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(sB, { label: en.intl.string(et.default.ueEMPa), value: sS(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(sB, { label: en.intl.string(et.default.vM2krr), value: sE(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(sB, {
                label: en.intl.string(et.default.g1O88C),
                value: sE(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: en.intl.formatToPlainString(et.default["5iALNP"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(sB, { label: en.intl.string(et.default.JUZs7g), value: sP(n.build) }),
        ],
    });
}
function rt(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: s } = t.storage,
        r = t.worker.limits,
        o = s
            ? [{ key: "shared", label: en.intl.string(et.default.Vrh0rD), metrics: n }]
            : [
                  { key: "preview", label: en.intl.string(et.default["+m8XM6"]), metrics: l },
                  { key: "stable", label: en.intl.string(et.default.kiOVnt), metrics: n },
              ];
    return (0, a.jsx)(sG, {
        title: en.intl.string(et.default.i91625),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(sB, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(sB, {
                                  label: en.intl.formatToPlainString(et.default["9TpIQg"], { env: n }),
                                  value: sC(l.r2_bytes),
                                  hint: en.intl.formatToPlainString(
                                      l.r2_truncated ? et.default.o45MMA : et.default.S7o3vV,
                                      { count: sE(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(s$, {
                                      label: en.intl.formatToPlainString(et.default["0OIswI"], { env: n }),
                                      used: l.db_bytes,
                                      max: r.db_bytes,
                                      formatValue: sC,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function rn(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: sV.Mf,
        children: [
            (0, a.jsx)(sz, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(re, {
                            title: en.intl.string(et.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(re, {
                            title: en.intl.string(et.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(rt, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(s3, {
                                title: en.intl.string(et.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(s4, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(s3, {
                                title: en.intl.string(et.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(s7, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(s3, {
                                title: en.intl.string(et.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(s8, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(s3, {
                                title: en.intl.string(et.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(s5, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(sU, { analytics: t.analytics }),
                        (0, a.jsxs)(sG, {
                            title: en.intl.string(et.default["HHe+8E"]),
                            children: [
                                (0, a.jsx)(sB, {
                                    label: en.intl.string(et.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? sP(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(sB, {
                                    label: en.intl.string(et.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? sP(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function rl(e, t) {
    return String(e).padStart(t, "0");
}
function ra(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        a = `${rl(l.getHours(), 2)}:${rl(l.getMinutes(), 2)}:${rl(l.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${rl(l.getMilliseconds(), 3)}` : a;
}
var ri = n(977129);
let rs = new Map(),
    rr = new Map(),
    ro = 0,
    ru = 0;
async function rd(e, t, n) {
    let l = ro,
        a = rs.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < ru) return { status: "forbidden" };
    let i = rr.get(t);
    if (null != i) return i;
    let s = (async () => {
        try {
            let a,
                { ticket: i, baseUrl: s } = await (0, ri.d)(e),
                r = await fetch(
                    ((a = new URL(`${s}/agent/trace-detail`)).searchParams.set("ticket", i),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === r.status) return ((ru = Date.now() + 6e4), { status: "forbidden" });
            if (!r.ok) return { status: "failed" };
            let o = await r.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (l !== ro) return { status: "failed" };
            var n = o.rich;
            for (rs.set(t, n); rs.size > 100;) {
                let e = rs.keys().next();
                if (!0 === e.done) break;
                rs.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    rr.set(t, s);
    let r = await s;
    return (rr.get(t) === s && rr.delete(t), n?.aborted === !0 ? { status: "failed" } : r);
}
function rc() {
    ((ro += 1), rs.clear(), rr.clear(), (ru = 0));
}
function rm(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function rf(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function rh(e) {
    switch (e) {
        case "subagent":
            return en.intl.string(et.default["EoY7D+"]);
        case "context":
            return en.intl.string(et.default.KVFrD3);
        case "tool":
            return en.intl.string(et.default["/N6ZU9"]);
        case "delegated":
            return en.intl.string(et.default.HcEbf2);
        default:
            return en.intl.string(et.default.AhOqQs);
    }
}
function rp(e) {
    return "model" === e.kind
        ? "compaction" === e.agent
            ? "context"
            : "subagent" === e.agent
              ? "subagent"
              : "model"
        : "subagent" === e.agent
          ? "delegated"
          : "tool";
}
let rg = ["model", "tool", "subagent", "delegated", "context"];
function rx(e, t) {
    let n = t.trim().toLowerCase();
    return "" === n
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(rp(e)),
              t.join(" ").toLowerCase()).includes(n);
          });
}
function rb(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let rv = ["arguments", "result", "usage", "diagnostics"];
var rj = n(40715);
let ry = { started: rj.Vf, ok: rj.mo, error: rj.Sr };
function rw(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: `${rj.Om} ${ry[t] ?? rj.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return en.intl.string(et.default.HpKDyl);
                case "error":
                    return en.intl.string(et.default["5T4Dd0"]);
                default:
                    return en.intl.string(et.default.VbEmf0);
            }
        })(t),
    });
}
let rk = { model: rj.WI, subagent: rj.uM, context: rj.eH, tool: rj.pw, delegated: rj.C8 };
function rA(e) {
    let { label: t, value: n } = e;
    return (0, a.jsxs)("div", {
        className: rj.wV,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", className: rj.D6, children: t }),
            (0, a.jsx)("div", { className: rj.zL, children: n }),
        ],
    });
}
function rN(e) {
    let { label: t, value: n } = e;
    return (0, a.jsx)(rA, {
        label: t,
        value: (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: n }),
    });
}
function rC(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: rj.WA, children: t });
}
function rS(e) {
    let { title: t, children: n } = e,
        l = i.useId();
    return (0, a.jsxs)("section", {
        "aria-labelledby": l,
        className: rj.xd,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: l,
                className: rj.Hm,
                children: t,
            }),
            n,
        ],
    });
}
function rE(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("details", {
        className: rj.XK,
        children: [
            (0, a.jsxs)("summary", {
                className: rj.p8,
                children: [
                    (0, a.jsx)(nU._, { className: rj.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, a.jsx)("div", { className: rj.bG, children: n }),
        ],
    });
}
function rI(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, a.jsx)(rA, {
            label: t.key,
            value: (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-default",
                selectable: !0,
                children: t.value,
            }),
        });
    let n =
        null != t.chars
            ? en.intl.formatToPlainString(et.default.DdXP0P, { count: t.chars })
            : null != t.items
              ? en.intl.formatToPlainString(et.default.OB8Qvn, { count: t.items })
              : null;
    return (0, a.jsx)(rA, {
        label: t.key,
        value: (0, a.jsxs)("div", {
            className: rj.Kv,
            children: [
                (0, a.jsx)(v.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return en.intl.string(et.default.xO6bcQ);
                            case "content":
                                return en.intl.string(et.default.gpBZRr);
                            default:
                                return en.intl.string(et.default.OZvPXt);
                        }
                    })(t.omitted ?? "content"),
                }),
                null == n
                    ? null
                    : (0, a.jsx)(v.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          tabularNumbers: !0,
                          children: n,
                      }),
            ],
        }),
    });
}
function rT(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)("div", {
                      className: rj.QR,
                      children: (0, a.jsx)(v.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: rj.uh,
                          children: en.intl.string(et.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, a.jsx)(
                          rA,
                          {
                              label: e.key,
                              value: (0, a.jsxs)("div", {
                                  className: rj.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: rj.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: en.intl.string(et.default.PkIUHD),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? en.intl.string(et.default["1kBG9Z"])
                                                        : en.intl.formatToPlainString(et.default.VGSwo4, {
                                                              count: e.chars,
                                                          }),
                                            }),
                                  ],
                              }),
                          },
                          e.key,
                      ),
                  ),
              ],
          });
}
function rP(e) {
    let { detail: t } = e,
        n =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : en.intl.string(
                      "loading" === t.status
                          ? et.default["vBF/0G"]
                          : "unavailable" === t.status
                            ? et.default.jEQTot
                            : et.default.fj5wM8,
                  );
    return null == n
        ? null
        : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", className: rj.E7, children: n });
}
function rM(e) {
    let { projectId: t, entry: n, onClose: l, parent: s, onSelect: r, childCount: o } = e,
        u = (function (e) {
            let { childCount: t = 0, hasParent: n = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                l = new Set();
            if ("tool" === e.kind)
                (((null != e.fields && e.fields.length > 0) || null != e.detailId) && l.add("arguments"),
                    "started" !== e.status && l.add("result"));
            else
                (null != e.promptTokens ||
                    null != e.inputTokens ||
                    null != e.outputTokens ||
                    null != e.cacheReadTokens ||
                    null != e.costUsd ||
                    null != e.stopReason) &&
                    l.add("usage");
            return (
                (n || t > 0 || null != e.turnId || "" !== e.startedAt || "" !== e.id) && l.add("diagnostics"),
                rv.filter((e) => l.has(e))
            );
        })(n, { childCount: o, hasParent: null != s }),
        d = (function (e, t) {
            let [n, l] = i.useState(null);
            if (
                (i.useEffect(() => {
                    if (null == t || null != rs.get(t)) return;
                    let n = new AbortController();
                    return (
                        rd(e, t, n.signal).then((e) => {
                            n.signal.aborted || l({ detailId: t, detail: e });
                        }),
                        () => n.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let a = rs.get(t);
            return null != a ? { status: "loaded", rich: a } : n?.detailId === t ? n.detail : { status: "loading" };
        })(t, "tool" === n.kind ? n.detailId : void 0),
        c = "model" === n.kind ? n.model : n.tool,
        m = ra(n.startedAt, "millis"),
        f = rp(n),
        h = i.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), l());
            },
            [l],
        );
    return (0, a.jsxs)(t9.Ch, {
        className: rj._0,
        onKeyDown: h,
        role: "region",
        "aria-label": en.intl.formatToPlainString(et.default.TlpZKP, { name: c }),
        children: [
            (0, a.jsx)("div", {
                className: rj.sy,
                children: (0, a.jsxs)("div", {
                    className: rj.HI,
                    children: [
                        (0, a.jsx)(rw, { status: n.status }),
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${rj.PY} ${rk[f]}`,
                            children: rh(f),
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: rj.kc,
                            children: c,
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: rj.l5,
                            children: null == n.durationMs ? en.intl.string(et.default.HpKDyl) : rm(n.durationMs),
                        }),
                    ],
                }),
            }),
            null == n.error
                ? null
                : (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: rj.Um,
                      selectable: !0,
                      children: n.error,
                  }),
            u.includes("arguments") && "tool" === n.kind
                ? (0, a.jsxs)(rS, {
                      title: en.intl.string(et.default.jXY3mm),
                      children: [
                          (n.fields ?? []).map((e) => (0, a.jsx)(rI, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, a.jsx)(rT, { entries: d.rich.args })
                              : null,
                          (0, a.jsx)(rP, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === n.kind
                ? (0, a.jsxs)(rS, {
                      title: en.intl.string(et.default.KXrf5F),
                      children: [
                          (0, a.jsx)(rN, {
                              label: en.intl.string(et.default["2Aii2k"]),
                              value: en.intl.formatToPlainString(et.default.DdXP0P, { count: n.resultChars ?? 0 }),
                          }),
                          null == n.resultAdded
                              ? null
                              : (0, a.jsx)(rN, {
                                    label: en.intl.string(et.default.hpGFzS),
                                    value: `+${n.resultAdded} \u{2212}${n.resultRemoved ?? 0}`,
                                }),
                          !0 !== n.resultTruncated
                              ? null
                              : (0, a.jsx)(rA, {
                                    label: en.intl.string(et.default["UV2R1/"]),
                                    value: (0, a.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: en.intl.string(et.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, a.jsx)(rT, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === n.kind
                ? (0, a.jsxs)(rS, {
                      title: en.intl.string(et.default["W+4BVk"]),
                      children: [
                          (0, a.jsxs)(rC, {
                              children: [
                                  null == n.promptTokens
                                      ? null
                                      : (0, a.jsx)(rN, {
                                            label: en.intl.string(et.default.Ran4BY),
                                            value: en.intl.formatToPlainString(et.default["PYO+Jv"], {
                                                tokens: rf(n.promptTokens),
                                            }),
                                        }),
                                  null == n.systemTokens
                                      ? null
                                      : (0, a.jsx)(rN, {
                                            label: en.intl.string(et.default.vPIcyv),
                                            value: en.intl.formatToPlainString(et.default.Qy2iTq, {
                                                system: rf(n.systemTokens),
                                                tools: rf(n.toolsTokens ?? 0),
                                                toolCount: n.tools ?? 0,
                                                messages: rf(n.messagesTokens ?? 0),
                                                messageCount: n.messages ?? 0,
                                            }),
                                        }),
                                  null == n.inputTokens
                                      ? null
                                      : (0, a.jsx)(rN, {
                                            label: en.intl.string(et.default["/703Yk"]),
                                            value: String(n.inputTokens),
                                        }),
                                  null == n.outputTokens
                                      ? null
                                      : (0, a.jsx)(rN, {
                                            label: en.intl.string(et.default["6+W0dJ"]),
                                            value: String(n.outputTokens),
                                        }),
                                  null == n.cacheReadTokens
                                      ? null
                                      : (0, a.jsx)(rN, {
                                            label: en.intl.string(et.default.VyAl6j),
                                            value: en.intl.formatToPlainString(et.default.lkMc23, {
                                                read: n.cacheReadTokens,
                                                write: n.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == n.costUsd
                                      ? null
                                      : (0, a.jsx)(rN, {
                                            label: en.intl.string(et.default.l9YFEQ),
                                            value: `$${n.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: rj.E7,
                              children: en.intl.string(et.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: rj.E7,
                      children: en.intl.string(et.default["ppv+97"]),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, a.jsx)(rE, {
                      title: en.intl.string(et.default.T7SFyZ),
                      children: (0, a.jsxs)(rC, {
                          children: [
                              null == s
                                  ? null
                                  : (0, a.jsx)(rA, {
                                        label: en.intl.string(et.default.NnBqcd),
                                        value: (0, a.jsx)(y.D, {
                                            tag: "div",
                                            className: rj.mi,
                                            onClick: () => r(s.id),
                                            children: (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-link",
                                                children: "model" === s.kind ? s.model : s.tool,
                                            }),
                                        }),
                                    }),
                              0 === o
                                  ? null
                                  : (0, a.jsx)(rN, {
                                        label: en.intl.string(et.default.fI6mzD),
                                        value: en.intl.formatToPlainString(et.default.hO8FYp, { count: o }),
                                    }),
                              null == n.turnId
                                  ? null
                                  : (0, a.jsx)(rN, { label: en.intl.string(et.default.I7cJP0), value: n.turnId }),
                              (0, a.jsx)(rN, { label: en.intl.string(et.default["XVTP/S"]), value: n.id }),
                              null == m ? null : (0, a.jsx)(rN, { label: en.intl.string(et.default.rD7bm0), value: m }),
                              "model" !== n.kind || null == n.stopReason
                                  ? null
                                  : (0, a.jsx)(rN, { label: en.intl.string(et.default.rxmzYT), value: n.stopReason }),
                              "tool" !== n.kind || null == n.schema || 0 === n.schema.length
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(v.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: rj.Hm,
                                                children: en.intl.string(et.default["6oILKx"]),
                                            }),
                                            n.schema.map((e) =>
                                                (0, a.jsx)(
                                                    rN,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? en.intl.formatToPlainString(et.default["6QoPmP"], {
                                                                  type: e.type,
                                                              })
                                                            : en.intl.formatToPlainString(et.default["/L6GFe"], {
                                                                  type: e.type,
                                                              }),
                                                    },
                                                    e.name,
                                                ),
                                            ),
                                        ],
                                    }),
                          ],
                      }),
                  })
                : null,
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: rj.E7,
                children: en.intl.string(et.default.khAjR0),
            }),
        ],
    });
}
let r_ = { model: rj.WI, subagent: rj.uM, context: rj.eH, tool: rj.pw, delegated: rj.C8 };
function rR(e) {
    let { entries: t } = e,
        n = i.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        n = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let l of e) {
                        let e = rp(l);
                        ((t[e] += l.durationMs ?? 0), (n[e] += 1));
                    }
                    return rg.map((e) => ({ category: e, ms: t[e], calls: n[e] }));
                })(t),
            [t],
        ),
        l = n.reduce((e, t) => e + t.ms, 0);
    return (0, a.jsxs)("div", {
        className: rj.M0,
        children: [
            (0, a.jsx)("div", {
                className: rj.pZ,
                "aria-hidden": !0,
                children:
                    0 === l
                        ? null
                        : n.map((e) => {
                              let { category: t, ms: n } = e;
                              return 0 === n
                                  ? null
                                  : (0, a.jsx)(
                                        "div",
                                        {
                                            className: `${rj.dL} ${r_[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(n) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, a.jsx)("div", {
                className: rj.z4,
                role: "group",
                "aria-label": en.intl.string(et.default.UZ1OlR),
                children: rg.map((e) => {
                    let t = n.find((t) => t.category === e),
                        i = t?.ms ?? 0,
                        s = t?.calls ?? 0,
                        r = 0 === l ? 0 : Math.round((i / l) * 100);
                    return (0, a.jsxs)(
                        "div",
                        {
                            className: rj.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${rj.A9} ${r_[e]}`, "aria-hidden": !0 }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: rh(e) }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: en.intl.formatToPlainString(et.default.UffawN, { percent: r }),
                                }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: en.intl.formatToPlainString(et.default.w8vPbe, { count: s }),
                                }),
                                0 === i
                                    ? null
                                    : (0, a.jsx)(v.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: rm(i),
                                      }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
let rD = { model: rj.WI, subagent: rj.uM, context: rj.eH, tool: rj.pw, delegated: rj.C8 };
function rL(e) {
    let { entry: t, selected: n, tabbable: l, onSelect: i, onKeyDown: s, nested: r } = e,
        o = rp(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? en.intl.formatToPlainString(et.default["PYO+Jv"], { tokens: rf(t.promptTokens) })
                : null != t.durationMs
                  ? rm(t.durationMs)
                  : null;
    return (0, a.jsxs)(y.D, {
        tag: "div",
        role: "option",
        "aria-selected": n,
        tabIndex: l ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${rj.nM} ${r ? rj.A5 : ""} ${"error" === t.status ? rj.Cr : ""} ${n ? rj.CZ : ""}`,
        onKeyDown: s,
        onClick: () => i(t.id),
        children: [
            (0, a.jsxs)("div", {
                className: rj.sU,
                children: [
                    (0, a.jsx)(rw, { status: t.status }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${rj.PY} ${rD[o]}`,
                        children: rh(o),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: rj.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, a.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: rj.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: rj.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: rj.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function rF(e) {
    var t;
    let { projectId: n, query: l } = e,
        s = (0, c.yK)([ec.Ay], () => ec.Ay.getTrace(n), [n]),
        r = (0, c.bG)([ec.Ay], () => ec.Ay.getHistoryState(n, "trace"));
    i.useEffect(() => rc, [n]);
    let [o, u] = i.useState(null),
        [d, m] = i.useState(40),
        [f, h] = i.useState(!1),
        p = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(null),
        b = i.useRef(null),
        j = i.useId(),
        y = i.useCallback((e) => {
            null != e && document.getElementById(`trace-${e}`)?.focus();
        }, []),
        w = i.useCallback((e) => u((t) => (t === e ? null : e)), []),
        k = i.useCallback((e) => {
            let t = p.current?.offsetHeight ?? 0;
            return 0 === t ? 40 : (0, t5.clamp)((e / t) * 100, 25, 75);
        }, []),
        A = i.useCallback((e) => {
            let t = p.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, t5.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        N = (0, su.A)({
            resizableDomNodeRef: g,
            orientation: su.R.VERTICAL_TOP,
            getClampedValue: A,
            onElementResize: (e) => m(k(e)),
            onElementResizeStart: () => h(!0),
            onElementResizeEnd: () => h(!1),
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        C = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), N(e));
            },
            [N],
        ),
        S = i.useCallback((e) => {
            let t =
                "ArrowUp" === e.key
                    ? 5
                    : "ArrowDown" === e.key
                      ? -5
                      : "Home" === e.key
                        ? 75
                        : "End" === e.key
                          ? -75
                          : null;
            null != t && (e.preventDefault(), m((e) => (0, t5.clamp)(e + t, 25, 75)));
        }, []),
        E = i.useCallback(() => {
            (u(null), y(o));
        }, [o, y]),
        I = i.useMemo(() => rx(s, l), [s, l]),
        T = i.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = null;
                    for (let l of e) {
                        let e = l.turnId ?? null;
                        ((null == n || n.turnId !== e) &&
                            ((n = { turnId: e, entries: [] }),
                            t.push({ turnId: e, entries: n.entries, startedAt: l.startedAt, spanMs: null })),
                            n.entries.push(l));
                    }
                    return t.map((e) => ({
                        ...e,
                        spanMs: (function (e) {
                            let t = 1 / 0,
                                n = -1 / 0;
                            for (let l of e) {
                                let e = Date.parse(l.startedAt);
                                Number.isNaN(e) ||
                                    ((t = Math.min(t, e)), null != l.durationMs && (n = Math.max(n, e + l.durationMs)));
                            }
                            return Number.isFinite(t) && Number.isFinite(n) ? Math.max(0, n - t) : null;
                        })(e.entries),
                    }));
                })(s)
                    .map((e, t) => ({ ...e, index: t, entries: rx(e.entries, l) }))
                    .filter((e) => e.entries.length > 0),
            [s, l],
        ),
        P = rb(I, o),
        M = P?.kind === "tool" ? rb(s, P.parentId ?? null) : null,
        _ = null == P ? 0 : ((t = P.id), s.filter((e) => "tool" === e.kind && e.parentId === t)).length,
        R = I[I.length - 1];
    i.useLayoutEffect(() => {
        if (null != o) return;
        let e = x.current?.getScrollerNode();
        null != e && (e.scrollTop = e.scrollHeight);
    }, [R, o]);
    let D = i.useCallback(
        (e) => {
            if (0 === I.length) return;
            let t = I.findIndex((e) => e.id === o);
            function n(t) {
                e.preventDefault();
                let n = Math.max(0, Math.min(I.length - 1, t));
                (u(I[n].id), document.getElementById(`trace-${I[n].id}`)?.scrollIntoView({ block: "nearest" }));
            }
            "ArrowDown" === e.key
                ? n(t + 1)
                : "ArrowUp" === e.key
                  ? n(-1 === t ? I.length - 1 : t - 1)
                  : "Home" === e.key
                    ? n(0)
                    : "End" === e.key
                      ? n(I.length - 1)
                      : "Escape" === e.key && null != o && (e.preventDefault(), u(null), y(o));
        },
        [I, o, y],
    );
    return 0 === s.length
        ? (0, a.jsx)("div", {
              className: rj.uP,
              ref: p,
              children: (0, a.jsx)(s0, {
                  state: r,
                  emptyTitle: en.intl.string(et.default.Iyt8OJ),
                  emptyBody: en.intl.string(et.default["8pdPx5"]),
              }),
          })
        : (0, a.jsxs)("div", {
              className: `${rj.uP} ${f ? rj.F4 : ""}`,
              ref: p,
              children: [
                  (0, a.jsxs)("div", {
                      className: rj.DK,
                      children: [
                          (0, a.jsx)(rR, { entries: s }),
                          (0, a.jsx)(sJ, { state: r }),
                          0 === I.length
                              ? (0, a.jsx)("div", {
                                    className: rj.Ie,
                                    children: (0, a.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: en.intl.string(et.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, a.jsxs)(t9.Ch, {
                                    ref: x,
                                    className: rj.Ns,
                                    children: [
                                        (0, a.jsx)(s2, { state: r }),
                                        (0, a.jsx)("div", {
                                            ref: b,
                                            id: j,
                                            role: "listbox",
                                            "aria-label": en.intl.string(et.default["QATZ+A"]),
                                            className: rj.p_,
                                            children: T.map((e) => {
                                                let t = ra(e.startedAt),
                                                    n = en.intl.formatToPlainString(et.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, a.jsxs)("div", {
                                                                className: rj.mf,
                                                                children: [
                                                                    (0, a.jsx)(v.E, {
                                                                        variant: "text-xs/semibold",
                                                                        color: "text-muted",
                                                                        children: n,
                                                                    }),
                                                                    (0, a.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-subtle",
                                                                        tabularNumbers: !0,
                                                                        children: t ?? "",
                                                                    }),
                                                                    null == e.spanMs
                                                                        ? null
                                                                        : (0, a.jsx)(v.E, {
                                                                              variant: "text-xs/normal",
                                                                              color: "text-subtle",
                                                                              tabularNumbers: !0,
                                                                              children: rm(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, a.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": n,
                                                                className: rj.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, a.jsx)(
                                                                        rL,
                                                                        {
                                                                            entry: e,
                                                                            selected: e.id === o,
                                                                            tabbable: e.id === (o ?? I[0]?.id),
                                                                            onSelect: w,
                                                                            onKeyDown: D,
                                                                            nested:
                                                                                "tool" === e.kind && null != e.parentId,
                                                                        },
                                                                        e.id,
                                                                    ),
                                                                ),
                                                            }),
                                                        ],
                                                    },
                                                    e.turnId ?? `ungrouped-${e.index}`,
                                                );
                                            }),
                                        }),
                                    ],
                                }),
                      ],
                  }),
                  null == P
                      ? null
                      : (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)("div", {
                                    role: "separator",
                                    "aria-orientation": "horizontal",
                                    "aria-label": en.intl.string(et.default.I8sr5Y),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: rj.b1,
                                    onPointerDown: C,
                                    onKeyDown: S,
                                }),
                                (0, a.jsx)("div", {
                                    ref: g,
                                    className: rj.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, a.jsx)(rM, {
                                        projectId: n,
                                        entry: P,
                                        parent: M,
                                        childCount: _,
                                        onSelect: u,
                                        onClose: E,
                                    }),
                                }),
                            ],
                        }),
              ],
          });
}
var rO = n(77729),
    rz = n(723702),
    rG = n(264572).Buffer;
async function rB(e, t) {
    if (rz.isPlatformEmbedded) {
        let n = rG.from(await e.arrayBuffer());
        if ("function" == typeof rO.A.fileManager.saveWithDialog2) await rO.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await rO.A.fileManager.saveWithDialog(n, t);
            } catch {}
        return;
    }
    let n = URL.createObjectURL(e);
    try {
        let e = document.createElement("a");
        ((e.href = n), (e.download = t), (e.rel = "noopener"), e.click());
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(n), 0);
    }
}
function r$(e) {
    let { projectId: t, query: n, onQueryChange: l } = e,
        s = (0, c.yK)([ec.Ay], () => ec.Ay.getTrace(t), [t]),
        r = i.useRef(null),
        o = i.useCallback(() => {
            rB(
                new Blob(
                    [
                        JSON.stringify(
                            {
                                kind: "vibegrations.trace",
                                version: 1,
                                project_id: t,
                                exported_at: new Date().toISOString(),
                                note: 'Redacted developer trace. Tool arguments, results and prompts are reported as sizes and allowlisted technical values only; token counts marked "estimated" are a chars/4 heuristic measured before sending.',
                                entries: s,
                            },
                            null,
                            2,
                        ),
                    ],
                    { type: "application/json" },
                ),
                `vibegrations-trace-${t}.json`,
            ).catch((e) => {
                console.error("[vibegrations] trace export failed", t, e);
            });
        }, [s, t]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: rj.ED,
                children: (0, a.jsx)(sQ.I, {
                    query: n,
                    onChange: l,
                    onClear: () => l(""),
                    size: "sm",
                    placeholder: en.intl.string(et.default.NfncNw),
                    "aria-label": en.intl.string(et.default.NfncNw),
                }),
            }),
            (0, a.jsx)(l7.Y, {
                targetElementRef: r,
                position: "bottom",
                align: "right",
                animation: l7.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(l8.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": en.intl.string(en.t.ogxXGq),
                        onClose: n,
                        onSelect: n,
                        children: (0, a.jsx)(l5.rX, {
                            children: (0, a.jsx)(l5.Dr, {
                                id: "export",
                                label: en.intl.string(et.default.A3Z3ar),
                                disabled: 0 === s.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: n } = t;
                    return (0, a.jsx)(iJ.K, {
                        ...e,
                        buttonRef: r,
                        icon: a8.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": en.intl.string(en.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": n,
                    });
                },
            }),
        ],
    });
}
var rq = n(497243);
function rU(e) {
    let { projectId: t, onClose: n } = e,
        [l, s] = i.useState("logs"),
        [r, o] = i.useState(""),
        u = (0, c.bG)([sh.A], () => sh.A.isDeveloper),
        d = (0, c.bG)([sN], () => sN.getStatus(t), [t]),
        m = (0, c.bG)([sN], () => sN.getFetchState(t), [t]);
    i.useEffect(() => {
        (0, ee.R7)(t);
    }, [t]);
    let f = i.useCallback(() => (0, ee.R7)(t), [t]),
        h = i.useCallback(() => {
            (0, sp.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: sN.getStatus(t),
                        last_turn_usage: sN.getLastTurnUsage(t),
                        last_compaction: sN.getLastCompaction(t),
                        last_compaction_decline: sN.getLastCompactionDecline(t),
                        model_calls: sN.getModelCalls(t),
                        logs: ec.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, g.P)((0, x.o)(en.intl.string(et.default.sDSDiO), b.Ck.SUCCESS)),
            );
        }, [t]),
        p = en.intl.string(et.default.KampIf);
    return (0, a.jsxs)("section", {
        className: rq.nd,
        "aria-label": p,
        children: [
            (0, a.jsxs)(tb.Ay, {
                "aria-label": p,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(tb.Ay.Icon, {
                            icon: sm.CopyIcon,
                            tooltip: en.intl.string(et.default["21ipY1"]),
                            onClick: h,
                        }),
                        (0, a.jsx)(tb.Ay.Icon, { icon: D.P, tooltip: en.intl.string(en.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(tb.Ay.ChannelIcon, { icon: S.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(tb.Ay.Title, { children: p }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: rq.rf,
                children: [
                    (0, a.jsxs)(sf.V, {
                        selectedItem: l,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": en.intl.string(et.default.uNyR86),
                        className: rq.vR,
                        children: [
                            (0, a.jsx)(sf.V.Item, { id: "logs", children: en.intl.string(et.default["1mpzdJ"]) }),
                            (0, a.jsx)(sf.V.Item, { id: "worker", children: en.intl.string(et.default.whGHLD) }),
                            (0, a.jsx)(sf.V.Item, { id: "agent", children: en.intl.string(et.default.cK3AvL) }),
                            u
                                ? (0, a.jsx)(sf.V.Item, { id: "trace", children: en.intl.string(et.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === l
                        ? (0, a.jsx)(s9, { projectId: t })
                        : "worker" === l
                          ? (0, a.jsx)(rn, { status: d, fetchState: m, onRefresh: f })
                          : "trace" === l && u
                            ? (0, a.jsxs)("div", {
                                  className: rq.uP,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: rq.XH,
                                          children: (0, a.jsx)(r$, { projectId: t, query: r, onQueryChange: o }),
                                      }),
                                      (0, a.jsx)(rF, { projectId: t, query: r }),
                                  ],
                              })
                            : (0, a.jsx)(sY, { projectId: t, status: d, fetchState: m, onRefresh: f, traceVisible: u }),
                ],
            }),
        ],
    });
}
var rV = n(333007),
    rH = n(365912),
    rK = n(775121),
    rW = n(277437);
function rY(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: s,
            value: o,
            onChange: u,
            onSubmit: d,
            onDismiss: c,
            canSubmit: m,
            closing: f,
            onUploadFile: h,
        } = e,
        {
            drafts: p,
            addFiles: g,
            pasteFiles: x,
            removeDraft: b,
            settled: v,
            takeRefs: j,
        } = ay({ projectId: t, surface: "design", onUploadFile: h }),
        y = i.useRef(null),
        k = (m || p.length > 0) && v && !f,
        A = i.useCallback(() => {
            if (!k) return;
            let e = j();
            d(e.length > 0 ? e : void 0);
        }, [k, j, d]),
        [N, C] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => C(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let S = i.useRef(null),
        [E, I] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = S.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => I({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let T = E?.height ?? 44,
        P = l.left + 8,
        M = l.top + 8,
        _ = Math.max(n.x, P),
        R = Math.min(Math.max(n.y + 32 + 4, M), Math.max(M, l.top + l.height - T - 8));
    return (0, a.jsxs)("div", {
        ref: S,
        className: r()(rW.M0, { [rW.ho]: N && !f, [rW.ET]: f }),
        style: { left: _, top: R },
        "data-testid": "vibegrations-design-compose-bar",
        children: [
            (0, a.jsx)("input", {
                ref: y,
                type: "file",
                multiple: !0,
                className: rW.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (g(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, a.jsx)(w.m, {
                position: "bottom",
                text: en.intl.string(et.default.d6Rqlu),
                ariaHidden: !0,
                children: (0, a.jsx)("button", {
                    type: "button",
                    className: rW.tY,
                    onClick: () => y.current?.click(),
                    "aria-label": en.intl.string(et.default.d6Rqlu),
                    children: (0, a.jsx)(l4.H, { size: "custom", color: "currentColor", className: rW.WW }),
                }),
            }),
            (0, a.jsx)(an.y, {
                autoFocus: !0,
                rows: 1,
                className: rW.hF,
                value: o,
                placeholder: "" === s ? en.intl.string(et.default.FK09JH) : `Edit ${s}`,
                "aria-label": en.intl.string(et.default["qR+sGX"]),
                onChange: (e) => u(e.target.value),
                onPaste: f ? void 0 : x,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), A());
                },
            }),
            p.length > 0
                ? (0, a.jsx)("div", {
                      className: rW.ZO,
                      children: p.map((e) => (0, a.jsx)(aw, { draft: e, onRemove: b }, e.localId)),
                  })
                : null,
        ],
    });
}
var rX = n(320510);
function rQ(e) {
    if (null == e || "string" != typeof e.ref || "string" != typeof e.tag) return null;
    let t = e.rect;
    if (
        null == t ||
        "number" != typeof t.x ||
        "number" != typeof t.y ||
        "number" != typeof t.width ||
        "number" != typeof t.height
    )
        return null;
    let n = {
        ref: e.ref,
        role: "string" == typeof e.role ? e.role : "",
        name: "string" == typeof e.name ? e.name : "",
        tag: e.tag,
        rect: { x: t.x, y: t.y, width: t.width, height: t.height },
    };
    return (
        "string" == typeof e.value && (n.value = e.value),
        "string" == typeof e.path && "" !== e.path && (n.path = e.path),
        n
    );
}
function rZ(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = rQ(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
n(762399);
var rJ = n(940107),
    r0 = n(42843);
let r2 = { x: 25, y: 21 };
function r1(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function r6(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function r9(e, t, n, l) {
    let a = r6(e, n, l);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function r3(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function r4(e) {
    let t = e.snapshot ?? e.results.find((e) => null != e.snapshot)?.snapshot;
    if (null == t || !Array.isArray(t.elements)) return null;
    let n = t.viewport?.width,
        l = t.viewport?.height;
    return "number" != typeof n || "number" != typeof l || n < 1
        ? null
        : {
              elements: t.elements,
              viewport: { width: n, height: l },
              url: "string" == typeof t.url ? t.url : "",
              title: "string" == typeof t.title ? t.title : "",
          };
}
function r7(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: s, toggleRef: r } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: d } = tm(o),
        m = (0, tf.o4)(o),
        f = (0, lC.useHasAnyModalOpen)(),
        h = (0, c.bG)([ek.default], () => ek.default.getCurrentUser()),
        p = h?.id ?? null,
        [g, x] = i.useState(null),
        [b, j] = i.useState(null),
        [y, w] = i.useState(!1),
        [k, A] = i.useState(!1),
        [C, S] = i.useState(null),
        [E, I] = i.useState(!1),
        T = i.useRef(null),
        P = i.useRef(null),
        _ = i.useRef(null),
        [R, D] = i.useState(null),
        [L, F] = i.useState(!1),
        [O, z] = i.useState(null),
        [G, B] = i.useState(null),
        $ = i.useRef(!1),
        [q, U] = i.useState(!1),
        [V, H] = i.useState(null),
        K = u && !m && !f;
    null == O || (K && O.projectId === o) || z(null);
    let W = O?.projectId ?? null;
    (i.useEffect(() => {
        if (null != W) return () => nj(W, "design");
    }, [W]),
        i.useEffect(() => {
            if (!K) return;
            function e() {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.getBoundingClientRect();
                    return t.width < 1 || t.height < 1
                        ? null
                        : { left: t.left, top: t.top, width: t.width, height: t.height };
                })(s());
                x((t) => (r1(t, e) ? t : e));
            }
            e();
            let t = window.setInterval(e, 250);
            return (
                window.addEventListener("resize", e),
                () => {
                    (window.clearInterval(t), window.removeEventListener("resize", e));
                }
            );
        }, [K, s]),
        i.useEffect(() => {
            if (!K || null == o) return;
            let e = !0,
                t = s();
            if (null == t) return void A(!0);
            (w(!0), A(!1));
            let n = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, rX.S)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        w(!1);
                        let n = "completed" === t.status ? r4(t.response) : null;
                        null == n ? A(!0) : (j(n), tu(o, { url: n.url, title: n.title, viewport: n.viewport }));
                    },
                    () => {
                        e && (w(!1), A(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [K, s, o]));
    let Y = i.useRef(null);
    (i.useEffect(() => {
        if (!K || null == g || null == o) return;
        if (null == b) {
            Y.current = g;
            return;
        }
        if (r1(Y.current, g)) return;
        let e = window.setTimeout(() => {
            let e = s();
            if (null == e) return;
            Y.current = g;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, rX.S)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !J.current) return;
                        let l = r4(e.response);
                        null != l && (j(l), tu(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let a = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let i = rQ(e.element);
                            null != i && a.set(l.id, i);
                        }),
                            (n = ts(o)).active &&
                                0 !== a.size &&
                                tr(o, {
                                    ...n,
                                    annotations: n.annotations.map((e) => {
                                        let t = a.get(e.id);
                                        return null == t ? e : { ...e, target: t };
                                    }),
                                }));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [K, g, b, d, o, s]),
        i.useEffect(() => {
            if (!K)
                return () => {
                    (S(null), z(null), H(null), j(null));
                };
        }, [K]));
    let X = i.useRef(null),
        Q = i.useRef(null),
        Z = i.useRef(!1),
        J = i.useRef(!1);
    i.useEffect(() => {
        ((J.current = K), K || ((X.current = null), (Q.current = null), (_.current = null), I(!1)));
    }, [K]);
    let el = i.useCallback(
            function e() {
                if (Z.current) return;
                let t = X.current;
                if (null == t) return;
                X.current = null;
                let n = s();
                null != n &&
                    ((Z.current = !0),
                    (0, rJ.W)(
                        n,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(rZ, () => ({ status: "failed" }))
                        .then((t) => {
                            if (((Z.current = !1), J.current)) {
                                if ("picked" !== t.status || ol(t.target, eo.current.rect, eo.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? S(null)
                                        : "unsupported" === t.status && F(!0);
                                else {
                                    let e = e7(t.target);
                                    (D((t) => (on(t, e) ? t : e)),
                                        S((e) => {
                                            var n;
                                            return ((n = t.target),
                                            null == e || null == n
                                                ? e === n
                                                : e.ref === n.ref &&
                                                  e.rect.x === n.rect.x &&
                                                  e.rect.y === n.rect.y &&
                                                  e.rect.width === n.rect.width &&
                                                  e.rect.height === n.rect.height)
                                                ? e
                                                : t.target;
                                        }));
                                }
                                e();
                            }
                        }));
            },
            [s],
        ),
        ea = i.useCallback(() => {
            if (null == O) return;
            let e = !$.current;
            (B({ at: O.at, label: O.label, draft: O.draft, instant: e }), U(e), z(null));
        }, [O]);
    (i.useEffect(() => {
        if (!q) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => U(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [q]),
        i.useEffect(() => {
            if (null == G) return;
            let e = setTimeout(() => B(null), oe);
            return () => clearTimeout(e);
        }, [G]));
    let ei = null == b || null == g || b.viewport.width < 1 ? 1 : g.width / b.viewport.width,
        es = null != b || k,
        er = i.useMemo(() => b?.elements ?? [], [b]),
        eo = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        eo.current = { rect: g, scale: ei };
    }, [g, ei]);
    let eu = i.useCallback(
            (e, t, n) => {
                null != o &&
                    (nj(o, "design"),
                    H(null),
                    ($.current = !1),
                    z({ projectId: o, target: e, anchor: t, draft: "", at: n, label: e7(e) }));
            },
            [o],
        ),
        ed = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / ei, y: (e.clientY - t.top) / ei }), [ei]),
        ec = i.useCallback(() => {
            let e = _.current;
            if (null == e) return;
            let t = T.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = P.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ec);
    let em = i.useCallback(
            (e) => {
                if (null == g || null != V) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), ec(), I(!0), null != O)) {
                    (Math.abs(e.clientX - O.at.x) > ot || Math.abs(e.clientY - O.at.y) > ot) && ($.current = !0);
                    return;
                }
                if (!es) return void S(null);
                let t = ed(e, g);
                if (L) {
                    let e = (function (e, t, n) {
                            let l = null,
                                a = 1 / 0;
                            for (let i of e) {
                                let { x: e, y: s, width: r, height: o } = i.rect;
                                if (r < 1 || o < 1 || t < e || n < s || t > e + r || n > s + o) continue;
                                let u = r * o;
                                u < a && ((l = i), (a = u));
                            }
                            return l;
                        })(er, t.x, t.y),
                        n = null != e && ol(e, g, ei) ? null : e;
                    if (null != n) {
                        let e = e7(n);
                        D((t) => (on(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = Q.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((Q.current = n), (X.current = n), el());
            },
            [g, ei, es, ed, L, er, O, V, ec, el],
        ),
        ef = i.useCallback(() => {
            (I(!1), S(null), (Q.current = null), (X.current = null));
        }, []);
    i.useEffect(() => {
        if (!K || !E || !es || L || null != O || null != V) return;
        let e = _.current,
            { rect: t, scale: n } = eo.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((Q.current = l), (X.current = l), el());
    }, [K, E, es, L, O, V, el]);
    let eh = i.useCallback(
            (e) => {
                if (null != O || null != V) {
                    (ea(), H(null));
                    return;
                }
                if (null == C || null == g) return;
                let t = ed(e, g);
                eu(
                    C,
                    (function (e, t, n) {
                        let { x: l, y: a, width: i, height: s } = e.rect;
                        return i < 1 || s < 1
                            ? e3
                            : { x: Math.min(1, Math.max(0, (t - l) / i)), y: Math.min(1, Math.max(0, (n - a) / s)) };
                    })(C, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [C, g, ed, O, V, eu, ea],
        ),
        ep = i.useCallback(() => {
            null != o && (S(null), to(o));
        }, [o]),
        eg = i.useCallback(() => {
            null != o &&
                (null != O
                    ? ea()
                    : V?.confirmingRemove === !0
                      ? H({ ...V, confirmingRemove: !1 })
                      : null != V
                        ? H(null)
                        : ep());
        }, [o, O, V, ea, ep]),
        ex = i.useRef(eg),
        eb = i.useRef(ep);
    i.useLayoutEffect(() => {
        ((ex.current = eg), (eb.current = ep));
    });
    let ev = i.useRef(null);
    i.useEffect(() => {
        if (K)
            return (
                rK.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rK.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ex.current());
        }
        function t(e) {
            let t = e.target;
            (0, iX.vq)(t) &&
                ev.current?.contains(t) !== !0 &&
                r?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, rH.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                eb.current();
        }
    }, [K, r]);
    let ej = i.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eg());
                    return;
                }
                if (null != O || null != V || 0 === er.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == C ? -1 : er.findIndex((e) => e.ref === C.ref);
                    S(er[(n + (t ? 1 : -1) + er.length) % er.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != C &&
                    (e.preventDefault(),
                    eu(C, e3, { x: (g?.left ?? 0) + C.rect.x * ei, y: (g?.top ?? 0) + C.rect.y * ei }));
            },
            [o, O, V, er, C, eu, eg, g, ei],
        ),
        ey = i.useCallback(
            (e) => {
                null == o ||
                    null == O ||
                    ((e4(O.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, ee.dv)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = e7(e),
                                    a = [n, l].filter((e) => "" !== e).join(": ");
                                return `${te}${a}${tt}${e5(e)}
${t.trim()}`;
                            })(O.target, O.draft),
                            e,
                        ),
                        ea(),
                        S(null)));
            },
            [o, O, ea],
        ),
        ew = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, ee.vX)(o, e)), [o]),
        eA = i.useCallback(() => {
            if (null != o && null != V && null != p && e4(V.draft)) {
                var e, t;
                let n, l;
                ((e = V.id),
                    (t = V.draft.trim()),
                    null != (l = (n = ts(o)).annotations.find((t) => t.id === e)) &&
                        td(l, p) &&
                        tr(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    H({ ...V, editing: !1 }));
            }
        }, [o, V, p]),
        eN = i.useCallback(() => {
            if (null != o && null != V && null != p) {
                var e;
                let t, n;
                ((e = V.id),
                    null != (n = (t = ts(o)).annotations.find((t) => t.id === e)) &&
                        td(n, p) &&
                        tr(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    H(null));
            }
        }, [o, V, p]),
        eC = u
            ? y
                ? en.intl.string(et.default.jQQ8i2)
                : k
                  ? en.intl.string(et.default.zvU2QH)
                  : en.intl.formatToPlainString(et.default.A4HDMU, { count: d.length })
            : "",
        eS = K && null != g,
        eE = E && null == V,
        eI = null == V ? null : d.find((e) => e.id === V.id),
        eT = O?.target ?? eI?.target ?? null,
        eP = O ?? G,
        eM = O ?? (G?.instant === !0 ? null : G),
        e_ =
            null != eI && null != g
                ? (function (e, t) {
                      let { left: n, top: l } = r3(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(r9(eI.target, eI.anchor, g, ei), g)
                : null;
    return (0, rV.createPortal)(
        (0, a.jsxs)("div", {
            ref: ev,
            className: r0.Li,
            children: [
                (0, a.jsx)("div", {
                    className: r0.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: eC,
                }),
                eS
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: r0.MT,
                                  style: { left: g.left, top: g.top, width: g.width, height: g.height },
                                  "data-plain-cursor": eE ? void 0 : "",
                                  "data-testid": "vibegrations-design-surface",
                                  role: "application",
                                  "aria-label": en.intl.string(et.default["2Wn1kr"]),
                                  tabIndex: 0,
                                  onMouseMove: em,
                                  onMouseLeave: ef,
                                  onClick: eh,
                                  onKeyDown: ej,
                              }),
                              null != C && null == O && null == V ? (0, a.jsx)(oa, { box: r6(C, g, ei) }) : null,
                              (0, a.jsx)("div", {
                                  ref: T,
                                  className: r0.aZ,
                                  children: (0, a.jsx)("div", {
                                      className: r0.xz,
                                      "data-shown": null != C && null == V && null == O ? "" : void 0,
                                      "data-instant": q ? "" : void 0,
                                      children: (0, a.jsxs)(v.E, {
                                          variant: "text-xs/medium",
                                          className: r0.Ux,
                                          children: [
                                              null == R
                                                  ? null
                                                  : (0, a.jsx)("span", { className: r0.Tl, children: R.kind }),
                                              null == R || "" === R.name
                                                  ? null
                                                  : (0, a.jsxs)("span", { className: r0.kh, children: [" ", R.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, a.jsx)("div", {
                                  ref: P,
                                  className: r0.Y,
                                  children: eE ? (0, a.jsx)("div", { className: r0.u }) : null,
                              }),
                              null == eM
                                  ? null
                                  : (0, a.jsx)("div", {
                                        className: r0.aZ,
                                        style: { transform: `translate3d(${eM.at.x + 20}px, ${eM.at.y + 20}px, 0)` },
                                        children: (0, a.jsx)("div", {
                                            className: r0.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == O ? "" : void 0,
                                            children: (0, a.jsxs)(v.E, {
                                                variant: "text-xs/medium",
                                                className: r0.Ux,
                                                children: [
                                                    (0, a.jsx)("span", { className: r0.Tl, children: eM.label.kind }),
                                                    "" === eM.label.name
                                                        ? null
                                                        : (0, a.jsxs)("span", {
                                                              className: r0.kh,
                                                              children: [" ", eM.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eT
                                  ? (0, a.jsx)("div", { className: r0.D0, style: r6(eT, g, ei), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let n = r9(e.target, e.anchor, g, ei),
                                      l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, a.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: r0.xL,
                                          style: { ...r3(n, g), width: 24, height: 24 },
                                          "aria-label": en.intl.formatToPlainString(et.default.zicHlU, {
                                              index: t + 1,
                                              target: e8(e.target),
                                          }),
                                          "aria-expanded": V?.id === e.id,
                                          "data-testid": "vibegrations-design-marker",
                                          onMouseEnter: () => {
                                              null == O && H(l);
                                          },
                                          onFocus: () => {
                                              null == O && H(l);
                                          },
                                          onClick: (e) => {
                                              (e.stopPropagation(), ea(), H(l));
                                          },
                                          children: (0, a.jsx)(r8, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eP || null == o
                                  ? null
                                  : (0, a.jsx)(rY, {
                                        projectId: o,
                                        at: { x: eP.at.x + 20, y: eP.at.y + 20 },
                                        bounds: g,
                                        kind: eP.label.kind,
                                        value: eP.draft,
                                        canSubmit: null != O && e4(eP.draft),
                                        onChange: (e) => {
                                            null != O && z({ ...O, draft: e });
                                        },
                                        onSubmit: ey,
                                        onDismiss: ea,
                                        onUploadFile: ew,
                                        closing: null == O,
                                    }),
                              null != eI && null != V && null != e_
                                  ? (0, a.jsxs)(r5, {
                                        point: e_,
                                        frame: g,
                                        authorId: eI.authorId,
                                        title: e8(eI.target),
                                        testId: "vibegrations-design-popout",
                                        onDismiss: () => {
                                            V.confirmingRemove ? H({ ...V, confirmingRemove: !1 }) : H(null);
                                        },
                                        onMouseLeave: () => {
                                            V.editing || V.confirmingRemove || H(null);
                                        },
                                        children: [
                                            V.editing
                                                ? (0, a.jsx)(M.f, {
                                                      autoFocus: !0,
                                                      label: en.intl.string(et.default["qR+sGX"]),
                                                      hideLabel: !0,
                                                      value: V.draft,
                                                      maxLength: 1e3,
                                                      rows: 3,
                                                      onChange: (e) => H({ ...V, draft: e }),
                                                      onKeyDown: (e) => {
                                                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eA());
                                                      },
                                                  })
                                                : (0, a.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      className: r0.aC,
                                                      children: eI.comment,
                                                  }),
                                            td(eI, p)
                                                ? (0, a.jsx)("div", {
                                                      className: r0.eB,
                                                      children: V.confirmingRemove
                                                          ? (0, a.jsxs)(a.Fragment, {
                                                                children: [
                                                                    (0, a.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: r0.nv,
                                                                        children: en.intl.string(et.default["IMrOF/"]),
                                                                    }),
                                                                    (0, a.jsx)(N.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: en.intl.string(et.default.cLsnYH),
                                                                        onClick: () =>
                                                                            H({ ...V, confirmingRemove: !1 }),
                                                                    }),
                                                                    (0, a.jsx)(N.$, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: en.intl.string(et.default.ncz32j),
                                                                        "data-testid":
                                                                            "vibegrations-design-remove-confirm",
                                                                        onClick: eN,
                                                                    }),
                                                                ],
                                                            })
                                                          : (0, a.jsxs)(a.Fragment, {
                                                                children: [
                                                                    (0, a.jsx)(N.$, {
                                                                        variant: "critical-secondary",
                                                                        size: "sm",
                                                                        text: en.intl.string(et.default.ncz32j),
                                                                        onClick: () =>
                                                                            H({
                                                                                ...V,
                                                                                editing: !1,
                                                                                confirmingRemove: !0,
                                                                            }),
                                                                    }),
                                                                    V.editing
                                                                        ? (0, a.jsx)(N.$, {
                                                                              variant: "primary",
                                                                              size: "sm",
                                                                              disabled: !e4(V.draft),
                                                                              text: en.intl.string(et.default.wIeFN0),
                                                                              onClick: eA,
                                                                          })
                                                                        : (0, a.jsx)(N.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: en.intl.string(et.default.DKZggU),
                                                                              onClick: () =>
                                                                                  H({
                                                                                      ...V,
                                                                                      editing: !0,
                                                                                      draft: eI.comment,
                                                                                  }),
                                                                          }),
                                                                ],
                                                            }),
                                                  })
                                                : null,
                                        ],
                                    })
                                  : null,
                          ],
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
function r8(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([ek.default], () => ek.default.getUser(t), [t]);
    return (0, a.jsx)(nX.eu, {
        src: null == n ? null : J.Ay.getUserAvatarURL(n),
        size: nQ._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function r5(e) {
    let t,
        n,
        l,
        s,
        r,
        o,
        { point: u, frame: d, authorId: c, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = i.useRef(null),
        b = i.useRef(null),
        [j, y] = i.useState(r2);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = b.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: w,
            top: k,
            originX: A,
            originY: N,
        } = ((n = Math.max((t = d.left + 8), d.left + d.width - 300 - 8)),
        (s = Math.max((l = d.top + 8), d.top + d.height - 160 - 8)),
        (r = Math.min(Math.max(u.x - j.x, t), n)),
        { left: r, top: (o = Math.min(Math.max(u.y - j.y, l), s)), originX: u.x - r, originY: u.y - o }),
        C = {
            left: w,
            top: k,
            "--custom-vibegrations-card-origin-x": `${A}px`,
            "--custom-vibegrations-card-origin-y": `${N}px`,
        };
    return (0, a.jsxs)("div", {
        ref: x,
        className: r0.Nr,
        style: C,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: r0.MY,
                children: [
                    (0, a.jsx)("span", { ref: b, className: r0.ip, children: (0, a.jsx)(r8, { authorId: c }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: r0.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: r0.zI, children: g }),
        ],
    });
}
let oe = 300,
    ot = 2;
function on(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function ol(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        a = t.height / n;
    return !(l < 1) && !(a < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * a;
}
function oa(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: r0.Zt, style: t, "data-testid": "vibegrations-design-highlight" });
}
var oi = n(11055),
    os = n(716248),
    or = n(421690),
    oo = n(120426),
    ou = n(480845);
function od(e) {
    let { progress: t } = e,
        { Component: n } = tE(1500),
        l = W.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: ou.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: ou.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function oc(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: s } = e,
        r = null != t && null != n && n === l,
        o = (0, c.bG)([or.A], () => (r ? or.A.getLiveReload(t) : null), [r, t]),
        u = (0, q.A)(n, s)?.id ?? null,
        d = o?.phase ?? null,
        m = (function (e, t) {
            let n = (0, os.dv)(e),
                [l, a] = i.useState(null),
                [s, r] = i.useState(n);
            s !== n && (r(n), a(null == n ? (0, os.QP)(e, s) : null));
            let o = (0, c.bG)(
                    [ty.A],
                    () => {
                        let e = ty.A.getFrame(t);
                        return (0, e$.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [t],
                ),
                u = i.useRef(o),
                d = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((u.current = o), o && (d.current = !0));
                }, [o]),
                i.useEffect(() => {
                    if (null == l) return;
                    function e() {
                        return a(null);
                    }
                    function n(n) {
                        null != n.target && n.target === (0, oo.F)(null, t) && e();
                    }
                    ((d.current = u.current), document.addEventListener("load", n, !0));
                    let i = window.setTimeout(() => {
                            d.current || e();
                        }, 4e3),
                        s = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", n, !0), window.clearTimeout(i), window.clearTimeout(s));
                    };
                }, [l, t]),
                l
            );
        })(d, u),
        f = (0, os.h_)(d, o?.step ?? null, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(k.A, { tag: "div", role: "status", "aria-live": "polite", children: f?.title ?? "" }),
            null != f
                ? (0, a.jsx)("div", {
                      className: ou.Lw,
                      "data-testid": "vibegrations-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(od, { progress: f }),
                  })
                : null,
        ],
    });
}
var om = n(175841),
    of = n(872768),
    oh = n(475815);
function op(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function og(e) {
    let t;
    return (
        null != e &&
        ((t =
            document.fullscreenElement ??
            document.webkitFullscreenElement ??
            document.mozFullScreenElement ??
            document.msFullscreenElement ??
            null),
        ((0, iX.vq)(t, Element) ? t.getAttribute("data-frame-id") : null) === e)
    );
}
function ox(e) {
    return (0, oh.a3)(document, e);
}
function ob(e) {
    return i.useSyncExternalStore(ox, () => og(e));
}
var ov = n(342667);
function oj(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function oy(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function ow(e) {
    let { phase: t, projectId: n, onOpenPublishedApp: l, compact: s } = e,
        { stop: o, stopping: u } = (function (e) {
            let t = (0, c.bG)([eN.Ay], () => null != e && eN.Ay.isThinking(e)),
                [n, l] = i.useState(!1),
                [a, s] = i.useState(t);
            (t !== a && (s(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let r = i.useCallback(() => {
                null != e && (l(!0), (0, ee.fu)(e));
            }, [e]);
            return { stop: t ? r : null, stopping: n };
        })(n),
        d = "controlling" === t,
        m = en.intl.string(d ? et.default.ydhvN1 : et.default["7U6tIB"]),
        f =
            null != l
                ? (0, a.jsx)(N.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: en.intl.string(et.default.kj5epw),
                      onClick: l,
                  })
                : null,
        h =
            null != o
                ? (0, a.jsx)(N.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: en.intl.string(et.default["2HalWx"]),
                      loading: u,
                      onClick: o,
                      "data-testid": "vibegrations-control-stop",
                  })
                : null;
    return s
        ? (0, a.jsxs)("div", {
              className: r()(ov.M0, ov.oE),
              "data-phase": t,
              "data-testid": "vibegrations-control-notice",
              children: [
                  d
                      ? (0, a.jsx)(i_.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(om.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: ov.ID, children: m }),
                  d ? (0, a.jsx)(k.A, { children: en.intl.string(et.default.NldIIG) }) : null,
                  d ? (0, a.jsxs)("div", { className: ov.lC, children: [f, h] }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: ov.M0,
              "data-phase": t,
              "data-testid": "vibegrations-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: ov.sp,
                      children: [
                          (0, a.jsx)(om.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, a.jsx)(i_.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: ov.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: ov.w9,
                                      children: m,
                                  }),
                                  d
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: ov.Rb,
                                            children: en.intl.string(et.default.NldIIG),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, a.jsxs)("div", { className: ov.lC, children: [f, h] }) : null,
              ],
          });
}
function ok(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            resolveIframe: s,
            frameId: r,
            onOpenPublishedApp: o = null,
        } = e,
        u = (0, tf.o4)(null != n && n === l ? t : null),
        d = (function (e) {
            let [t, n] = i.useState(e),
                [l, a] = i.useState(!1);
            return (e !== t && (n(e), a(!e)),
            i.useEffect(() => {
                if (!l) return;
                let e = setTimeout(() => a(!1), 2400);
                return () => clearTimeout(e);
            }, [l]),
            e)
                ? "controlling"
                : l
                  ? "handoff"
                  : "idle";
        })(u),
        c = (0, lC.useHasAnyModalOpen)(),
        m = ob(r);
    i.useEffect(() => {
        u &&
            m &&
            null != r &&
            (function (e) {
                if (!og(e)) return;
                let t = op(e);
                null != t && (0, oh.sP)(t);
            })(r);
    }, [u, m, r]);
    let [f, h] = i.useState(null),
        [p, g] = i.useState(null),
        [x, b] = i.useState(null),
        v = "idle" !== d;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = oj(s());
            h((t) => (oy(t, e) ? t : e));
            let t = null == p ? null : oj(p);
            (b((e) => (oy(e, t) ? e : t)), null != p && (0, of.t)(p.getBoundingClientRect().height));
        }
        e();
        let t = window.setInterval(e, 250);
        window.addEventListener("resize", e);
        let n = null == p ? null : new ResizeObserver(e);
        return (
            null != p && n?.observe(p),
            () => {
                (window.clearInterval(t),
                    window.removeEventListener("resize", e),
                    n?.disconnect(),
                    null != p && (0, of.t)(0));
            }
        );
    }, [v, s, p]);
    let j = "idle" !== d && null != f,
        y = j && "controlling" === d && !c,
        w = null != f && f.width < 420,
        k = null == f ? void 0 : { left: f.left, top: f.top, width: f.width, height: f.height },
        A =
            null == f
                ? void 0
                : (function (e, t) {
                      if (null == t) return { left: e.left, top: e.top, width: e.width, height: e.height };
                      let n = Math.min(e.left, t.left),
                          l = Math.min(e.top, t.top);
                      return {
                          left: n,
                          top: l,
                          width: Math.max(e.left + e.width, t.left + t.width) - n,
                          height: Math.max(e.top + e.height, t.top + t.height) - l,
                      };
                  })(f, x);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            j
                ? (0, a.jsx)("div", {
                      ref: g,
                      className: ov.D,
                      "data-phase": d,
                      children: (0, a.jsx)("div", {
                          className: ov.QF,
                          children: (0, a.jsx)(ow, { phase: d, projectId: t, onOpenPublishedApp: o, compact: w }),
                      }),
                  })
                : null,
            (0, rV.createPortal)(
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("div", {
                            className: ov.y4,
                            role: "status",
                            "aria-live": "polite",
                            "data-testid": "vibegrations-control-announcer",
                            children:
                                "controlling" === d
                                    ? en.intl.string(et.default.dIE9zO)
                                    : "handoff" === d
                                      ? en.intl.string(et.default["7U6tIB"])
                                      : "",
                        }),
                        y
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: ov.ys,
                                          style: A,
                                          "data-testid": "vibegrations-control-glow",
                                          "aria-hidden": !0,
                                      }),
                                      (0, a.jsx)("div", {
                                          className: ov.om,
                                          style: k,
                                          "data-testid": "vibegrations-control-block",
                                          "aria-hidden": !0,
                                      }),
                                  ],
                              })
                            : null,
                    ],
                }),
                document.body,
            ),
        ],
    });
}
var oA = n(237528),
    oN = n(664121),
    oC = n(95477),
    oS = n(724401);
function oE(e) {
    let t = new Date(e);
    function n(e) {
        return String(e).padStart(2, "0");
    }
    return `${t.getFullYear()}-${n(t.getMonth() + 1)}-${n(t.getDate())}T${n(t.getHours())}:${n(t.getMinutes())}`;
}
function oI(e) {
    let t,
        { projectId: n, installScope: l, onClose: s } = e,
        r = "user" === l ? ["stable"] : ["preview", "stable"],
        [o, u] = i.useState(r[0] ?? "stable"),
        [d, c] = i.useState({ status: "loading" }),
        [f, h] = i.useState(""),
        [p, g] = i.useState(""),
        [x, b] = i.useState({ phase: "idle" }),
        j = "busy" === x.phase,
        [w, k] = i.useState(0),
        C = i.useCallback(() => k((e) => e + 1), []);
    i.useEffect(() => {
        let e = !1,
            t = `${n}|${o}`;
        return (
            Promise.all([(0, ee.DM)(n, o), (0, ee.ms)(n, o)])
                .then((n) => {
                    let [l, a] = n;
                    e || c({ status: "loaded", key: t, points: l, window: a, nowMs: Date.now() });
                })
                .catch(() => {
                    e || c({ status: "failed", key: t });
                }),
            () => {
                e = !0;
            }
        );
    }, [n, o, w]);
    let S = "loading" !== d.status && d.key === `${n}|${o}` ? d : { status: "loading" },
        E = i.useCallback(
            (e, t) => {
                (0, m.A)({
                    title: en.intl.string(et.default.S3WHxG),
                    subtitle:
                        1 === r.length
                            ? en.intl.formatToPlainString(et.default["0lt6bH"], { target: e })
                            : en.intl.formatToPlainString(et.default.zVcDfj, {
                                  environment: en.intl.string(
                                      "preview" === o ? et.default["/kYdZe"] : et.default["1/CVzo"],
                                  ),
                                  target: e,
                              }),
                    confirmText: en.intl.string(et.default.ZlKerR),
                    variant: "critical",
                    onConfirm: () => {
                        (b({ phase: "busy", environment: o, kind: "restore" }),
                            t()
                                .then((e) => {
                                    e.ok
                                        ? (b({
                                              phase: "settled",
                                              environment: o,
                                              tone: "positive",
                                              text: en.intl.string(et.default.kIWqXR),
                                          }),
                                          C())
                                        : "expired" === e.code
                                          ? (b({
                                                phase: "settled",
                                                environment: o,
                                                tone: "danger",
                                                text: en.intl.formatToPlainString(et.default.PeVYaC, { days: 30 }),
                                            }),
                                            C())
                                          : "unconfirmed" === e.code
                                            ? (b({
                                                  phase: "settled",
                                                  environment: o,
                                                  tone: "danger",
                                                  text: en.intl.string(et.default["2xSPXh"]),
                                              }),
                                              C())
                                            : b({
                                                  phase: "settled",
                                                  environment: o,
                                                  tone: "danger",
                                                  text: en.intl.string(et.default.kXofol),
                                              });
                                })
                                .catch(() => {
                                    b({
                                        phase: "settled",
                                        environment: o,
                                        tone: "danger",
                                        text: en.intl.string(et.default.kXofol),
                                    });
                                }));
                    },
                });
            },
            [o, r, C],
        ),
        I = i.useCallback(() => {
            (b({ phase: "busy", environment: o, kind: "create" }),
                (0, ee._m)(n, o, f)
                    .then(() => {
                        (h(""),
                            b({
                                phase: "settled",
                                environment: o,
                                tone: "positive",
                                text: en.intl.string(et.default.mfAoFT),
                            }),
                            C());
                    })
                    .catch(() => {
                        b({
                            phase: "settled",
                            environment: o,
                            tone: "danger",
                            text: en.intl.string(et.default.uhhqP3),
                        });
                    }));
        }, [n, o, f, C]),
        T = "loaded" === S.status ? S.window : null,
        M = "loaded" === S.status ? S.nowMs : 0,
        _ = T?.earliestRestoreTimestampMs ?? M - 2592e6,
        R = "" === p ? null : new Date(p).getTime(),
        L = null != R && !Number.isNaN(R) && R >= _ && R <= M,
        F =
            "busy" === x.phase
                ? "restore" === x.kind && x.environment === o
                    ? { kind: "pending" }
                    : { kind: "none" }
                : "settled" === x.phase && x.environment === o
                  ? { kind: "notice", tone: x.tone, text: x.text }
                  : { kind: "none" };
    return (
        (t =
            "loading" === S.status
                ? (0, a.jsx)("div", { className: oS.E8, children: (0, a.jsx)(A.y, {}) })
                : "failed" === S.status
                  ? (0, a.jsx)("div", {
                        className: oS.E8,
                        role: "alert",
                        children: (0, a.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: en.intl.string(et.default.pwFaXc),
                        }),
                    })
                  : 0 === S.points.length
                    ? (0, a.jsx)("div", {
                          className: oS.E8,
                          children: (0, a.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: en.intl.string(et.default["7hBXn4"]),
                          }),
                      })
                    : (0, a.jsx)(P.Ip, {
                          className: oS.p_,
                          children: (0, a.jsx)("div", {
                              className: oS.jO,
                              children: S.points.map((e) => {
                                  let t,
                                      l = Number.isNaN((t = Date.parse(e.createdAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, lg.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: lg._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            },
                                      i = (0, a.jsxs)("div", {
                                          className: oS.KW,
                                          children: [
                                              (0, a.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  children: (function (e) {
                                                      switch (e) {
                                                          case "auto_deploy":
                                                              return en.intl.string(et.default.h4zhWL);
                                                          case "undo":
                                                              return en.intl.string(et.default["c/tNny"]);
                                                          default:
                                                              return en.intl.string(et.default["jViU+0"]);
                                                      }
                                                  })(e.origin),
                                              }),
                                              null != l.relative &&
                                                  (0, a.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: l.absolute ?? void 0,
                                                      children: l.relative,
                                                  }),
                                              e.expired &&
                                                  (0, a.jsx)(oA.v, {
                                                      text: en.intl.string(et.default.TtQOSW),
                                                      variant: "redLight",
                                                  }),
                                          ],
                                      });
                                  return e.expired
                                      ? (0, a.jsxs)(
                                            "div",
                                            {
                                                className: oS.AD,
                                                title: en.intl.formatToPlainString(et.default.PeVYaC, { days: 30 }),
                                                children: [
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        className: oS.Pf,
                                                        children: e.label,
                                                    }),
                                                    i,
                                                ],
                                            },
                                            e.id,
                                        )
                                      : (0, a.jsxs)(
                                            y.D,
                                            {
                                                className: oS.f_,
                                                "aria-disabled": j,
                                                onClick: j
                                                    ? void 0
                                                    : () =>
                                                          E(`${e.label} (${l.absolute ?? e.createdAt})`, () =>
                                                              (0, ee.$D)(n, e.id),
                                                          ),
                                                children: [
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        className: oS.Pf,
                                                        children: e.label,
                                                    }),
                                                    i,
                                                ],
                                            },
                                            e.id,
                                        );
                              }),
                          }),
                      })),
        (0, a.jsxs)("section", {
            className: oS.nd,
            "aria-label": en.intl.string(et.default.FRjicO),
            children: [
                (0, a.jsxs)(tb.Ay, {
                    "aria-label": en.intl.string(et.default.FRjicO),
                    toolbar: (0, a.jsx)(tb.Ay.Icon, { icon: D.P, tooltip: en.intl.string(en.t.cpT0Cq), onClick: s }),
                    children: [
                        (0, a.jsx)(tb.Ay.ChannelIcon, { icon: oN.R, "aria-hidden": !0 }),
                        (0, a.jsx)(tb.Ay.Title, { children: en.intl.string(et.default.FRjicO) }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: oS.rf,
                    children: [
                        (0, a.jsxs)("div", {
                            className: oS.ne,
                            children: [
                                r.length > 1 &&
                                    (0, a.jsxs)(sf.V, {
                                        selectedItem: o,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (u(e), k(0));
                                        },
                                        "aria-label": en.intl.string(et.default.CNvRyJ),
                                        className: oS.vR,
                                        children: [
                                            (0, a.jsx)(sf.V.Item, {
                                                id: "preview",
                                                children: en.intl.string(et.default["/kYdZe"]),
                                            }),
                                            (0, a.jsx)(sf.V.Item, {
                                                id: "stable",
                                                children: en.intl.string(et.default["1/CVzo"]),
                                            }),
                                        ],
                                    }),
                                (0, a.jsxs)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        en.intl.formatToPlainString(et.default.l07ism, { days: 30 }),
                                        null != T
                                            ? ` ${new Date(T.earliestRestoreTimestampMs).toLocaleString()} \u{2192}`
                                            : "",
                                    ],
                                }),
                                "pending" === F.kind
                                    ? (0, a.jsxs)("div", {
                                          className: oS.lm,
                                          role: "status",
                                          children: [
                                              (0, a.jsx)(A.y, { type: A.t.PULSING_ELLIPSIS }),
                                              (0, a.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  children: en.intl.string(et.default.xMAiew),
                                              }),
                                          ],
                                      })
                                    : "notice" === F.kind
                                      ? (0, a.jsx)("div", {
                                            className: oS.lm,
                                            role: "danger" === F.tone ? "alert" : "status",
                                            children: (0, a.jsx)(v.E, {
                                                variant: "text-sm/normal",
                                                color:
                                                    "danger" === F.tone
                                                        ? "text-feedback-critical"
                                                        : "text-feedback-positive",
                                                children: F.text,
                                            }),
                                        })
                                      : null,
                            ],
                        }),
                        t,
                        (0, a.jsxs)("div", {
                            className: oS.qr,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: oS.Rv,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: oS.Fv,
                                            children: (0, a.jsx)(oC.k, {
                                                label: en.intl.string(et.default.hJb78b),
                                                value: f,
                                                onChange: h,
                                                maxLength: 200,
                                                disabled: j,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, a.jsx)(N.$, {
                                            variant: "secondary",
                                            size: "md",
                                            text: en.intl.string(et.default["14UarN"]),
                                            onClick: I,
                                            disabled: j,
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: oS._A,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: oS.kv,
                                            children: (0, a.jsx)(oC.k, {
                                                label: en.intl.string(et.default.rI7mpv),
                                                type: "datetime-local",
                                                value: p,
                                                min: oE(_),
                                                max: oE(M),
                                                disabled: j || null == T,
                                                onChange: g,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, a.jsx)(N.$, {
                                            variant: "critical-primary",
                                            size: "md",
                                            text: en.intl.string(et.default["3D/vYN"]),
                                            disabled: j || !L,
                                            onClick: () => {
                                                null != R && E(new Date(R).toLocaleString(), () => (0, ee.dz)(n, o, R));
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var oT = n(873727),
    oP = n(147248),
    oM = n(418842),
    o_ = n(363195),
    oR = n(171936),
    oD = n(796036),
    oL = n(462702);
function oF(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: s,
            surface: o,
            header: u,
            mainClassName: d,
            content: m,
            sidebar: f,
            onOpenPublishedApp: h,
        } = e,
        [p, g] = i.useState(null),
        x = (0, q.A)(l, o),
        b = x?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([o_.A], () => (0, oT.x4)(o_.A.theme)),
            l = (0, c.bG)([oP.A], () => oP.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: s,
                highContrast: r,
                forcedColors: o,
                underlineLinks: u,
            } = (0, c.cf)([ai.Ay], () => ({
                reducedMotion: ai.Ay.useReducedMotion,
                fontScale: (0, oT.U0)(),
                highContrast: ai.Ay.isHighContrastModeEnabled,
                forcedColors: ai.Ay.useForcedColors,
                underlineLinks: ai.Ay.alwaysShowLinkDecorations,
            })),
            d = W.hH.useSetting(),
            m = (0, oM.C)(),
            f = i.useRef(!1),
            h = i.useRef(!1),
            p = i.useRef(0),
            g = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, oo.F)(e, t);
                if (null == l) return;
                g.current = l;
                let i = {
                    revision: ++p.current,
                    baseTheme: n,
                    customTheme: (0, oT.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: s,
                    reducedMotion: a,
                    highContrast: r,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, rJ.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, s, t, r, d, e, a, m, u]),
            b = i.useRef(x);
        i.useLayoutEffect(() => {
            b.current = x;
        });
        let v = i.useCallback(() => {
            f.current ||
                ((f.current = !0),
                queueMicrotask(() => {
                    ((f.current = !1), h.current || b.current());
                }));
        }, []);
        (i.useEffect(
            () => (
                (h.current = !1),
                () => {
                    h.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                v();
            }, [l, v]),
            i.useLayoutEffect(() => {
                (x(), v());
            }, [v, x]),
            i.useLayoutEffect(() => {
                let n = (0, oo.F)(e, t);
                null != n && n !== g.current && v();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, oo.F)(e, t) && ((g.current = null), v());
                }
                return (document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0));
            }, [t, e, v]),
            i.useEffect(() => {
                let e = new MutationObserver(v);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [v]));
    })(p, b),
        i.useEffect(() => {
            if (null != t) return (0, oR.mn)(t, () => (0, oo.F)(p, b));
        }, [t, p, b]));
    let v = i.useCallback(() => (0, oo.F)(p, b), [p, b]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: r()(oL.Mh, d),
                children: [
                    u,
                    (0, a.jsx)(ok, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: s,
                        resolveIframe: v,
                        frameId: b,
                        onOpenPublishedApp: h,
                    }),
                    (0, a.jsx)("div", { ref: g, className: oL.fm, children: m }),
                ],
            }),
            f,
            (0, a.jsx)(r7, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: s,
                resolveIframe: v,
                toggleRef: n,
            }),
        ],
    });
}
function oO(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: s,
            surface: o,
            header: u,
            chatOpen: d,
            onCloseChat: c,
            chatHeaderAction: m,
            versionHistoryOpen: f = !1,
            restorePointsOpen: h = !1,
            onCloseRestorePoints: p,
            installScope: g = null,
            onCloseVersionHistory: x,
            onRestoreVersion: b,
            debugOpen: v = !1,
            onCloseDebug: j,
            restoreState: y,
            previewReady: w,
            previewGate: k,
            availability: A,
            activeMode: N,
            widgetApplicationId: C,
            onOpenPublishedApp: S = null,
        } = e,
        E = i.useRef(null),
        [I, T] = i.useState(0);
    (i.useLayoutEffect(() => {
        if (o.type === tx.U.MAIN) return ((0, ea.HV)(l), () => (0, ea.HV)(null));
    }, [l, o.type]),
        i.useEffect(() => {
            null != t && ((0, ee.Hc)(t), (0, oD.s)());
        }, [t]),
        i.useLayoutEffect(() => {
            let e = E.current;
            if (null == e) return;
            function t() {
                null != e && T(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []),
        i.useLayoutEffect(() => () => (0, ea.Zq)(0), []));
    let P = Math.max(360, I - 320),
        M = d || o.type === tx.U.MAIN;
    return (0, a.jsx)("div", {
        ref: E,
        className: oL.LB,
        children: (0, a.jsx)(oF, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: s,
            surface: o,
            header: u,
            onOpenPublishedApp: S,
            mainClassName: null == u ? void 0 : r()(oL.ez, { [oL.zt]: d }),
            content: (0, a.jsx)(t6, {
                applicationId: l,
                previewApplicationId: s,
                surface: o,
                previewReady: w,
                previewGate: k,
                availability: A,
                activeMode: N,
                widgetApplicationId: C,
                frameOverlay: (0, a.jsx)(oc, { projectId: t, applicationId: l, previewApplicationId: s, surface: o }),
            }),
            sidebar:
                null != t && M
                    ? (0, a.jsx)(sc, {
                          open: d,
                          maxWidth: P,
                          onWidthChange: ea.Zq,
                          children: (0, a.jsx)("div", {
                              className: oL.cO,
                              children: v
                                  ? (0, a.jsx)(rU, { projectId: t, onClose: j ?? (() => {}) }, t)
                                  : f
                                    ? (0, a.jsx)(
                                          lj,
                                          { projectId: t, onClose: x ?? (() => {}), onRestore: b ?? (() => {}) },
                                          t,
                                      )
                                    : h
                                      ? (0, a.jsx)(oI, { projectId: t, installScope: g, onClose: p ?? (() => {}) }, t)
                                      : (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(oi.A, { projectId: t }),
                                                (0, a.jsx)(tb.Ay, {
                                                    "aria-label": en.intl.string(en.t["/VQax8"]),
                                                    toolbar: (0, a.jsxs)(a.Fragment, {
                                                        children: [
                                                            m,
                                                            null == c
                                                                ? null
                                                                : (0, a.jsx)(tb.Ay.Icon, {
                                                                      icon: D.P,
                                                                      tooltip: en.intl.string(et.default.YdgE0j),
                                                                      onClick: c,
                                                                  }),
                                                        ],
                                                    }),
                                                    children: (0, a.jsx)(tb.Ay.Title, {
                                                        children: en.intl.string(en.t["/VQax8"]),
                                                    }),
                                                }),
                                                (0, a.jsx)("div", {
                                                    className: oL.cb,
                                                    children: (0, a.jsx)(
                                                        ss,
                                                        { projectId: t, restoreState: y, onRestoreVersion: b },
                                                        t,
                                                    ),
                                                }),
                                            ],
                                        }),
                          }),
                      })
                    : null,
        }),
    });
}
var oz = n(58703),
    oG = n(127181);
function oB() {
    (0, lC.openModalLazy)(
        async () => {
            let { default: e } = await n.e("978132").then(n.bind(n, 75199));
            return (t) => (0, a.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var o$ = n(413927);
function oq() {
    let e = (0, oG.TH)("desktop");
    if (0 === e.length) return null;
    let t = en.intl.string(et.default.x07mpp);
    return (0, a.jsxs)("section", {
        className: o$.rN,
        "aria-label": t,
        children: [
            (0, a.jsxs)("div", {
                className: o$.bZ,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: en.intl.string(et.default.h5CwHI),
                    }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: o$.V,
                children: e.map((e) =>
                    (0, a.jsxs)(
                        "li",
                        {
                            className: o$.S3,
                            children: [
                                (0, a.jsxs)(v.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: o$.VO,
                                    children: [
                                        (0, oz.i$)(u()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, oG.MZ)(e) ? ` \xb7 ${en.intl.string(et.default.vvxuUI)}` : null,
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: e.summary,
                                }),
                            ],
                        },
                        `${e.date}-${e.summary}`,
                    ),
                ),
            }),
            (0, oG.B)("desktop")
                ? (0, a.jsx)(N.$, {
                      variant: "secondary",
                      size: "sm",
                      text: en.intl.string(et.default.YWxThz),
                      onClick: oB,
                  })
                : null,
        ],
    });
}
function oU(e) {
    let { className: t, ariaLabel: n, disabled: l, onClick: i, children: s } = e;
    return (0, a.jsx)(y.D, { "aria-disabled": l, "aria-label": n, className: t, onClick: l ? void 0 : i, children: s });
}
var oV = n(865665),
    oH = n(568190);
let oK = { x: 5, y: 7 },
    oW = { x: 5, y: 4 };
function oY(e) {
    let { listClassName: t, radius: n, children: l } = e,
        [s, r] = i.useState(!1);
    return (0, a.jsxs)("div", {
        className: oH.n,
        onMouseEnter: () => r(!0),
        onMouseLeave: () => r(!1),
        children: [
            (0, a.jsx)("ol", { className: t, children: l }),
            s ? (0, a.jsx)(oV.C, { area: 64, radius: n, color: F.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var oX = n(86147),
    oQ = n(729475);
function oZ(e) {
    let { frame: t, controlProjectId: n } = e,
        l = ob(t?.id ?? null),
        i = (0, tf.o4)(n),
        s = (0, c.bG)(
            [tA.A, ty.A],
            () => null != t && tA.A.getWindowOpen(eB.MLl.ACTIVITY_POPOUT) && ty.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, e$.x1)(t) || s || i) return null;
    let r = op(t.id);
    if (null == r || !(0, oh.Ub)(r)) return null;
    let o = en.intl.string(l ? en.t.Z7MyNB : en.t.OIDkcp);
    return (0, a.jsx)(V.A.Icon, {
        tooltip: o,
        icon: l ? oX.z : oQ.T,
        "aria-label": o,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => {
            var e;
            let n;
            null != (n = op((e = t.id))) && (0, oh.Ub)(n) && (og(e) ? (0, oh.sP)(n) : (0, oh.tl)(n));
        },
    });
}
var oJ = n(707554),
    o0 = n(770178),
    o2 = n(765548),
    o1 = n(595528),
    o6 = n(885576),
    o9 = n(236730);
let o3 = "heading-xxl/semibold",
    o4 = !1;
function o7() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        l = (0, o2.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        s = (0, o0.w)(l, [], { fireOnMount: !0 }),
        r = (0, c.bG)([o1.A], () => o1.A.isConnected());
    i.useEffect(() => {
        if (!r || !t || o4) return;
        let n = !1,
            l = 0;
        function a() {
            n ||
                (l = window.setTimeout(() => {
                    ((o4 = !0), e.current?.play());
                }, 400));
        }
        let i = document.fonts;
        return (
            null == i ? a() : i.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(a, a),
            () => {
                ((n = !0), window.clearTimeout(l));
            }
        );
    }, [r, t]);
    let o = (0, c.bG)([o6.A], () => o6.A.isIdle()),
        u = i.useRef(o);
    i.useEffect(() => {
        let t = u.current && !o;
        ((u.current = o), t && o4 && (e.current?.stop(), e.current?.play()));
    }, [o]);
    let d = en.intl.string(et.default["2tYpRK"]);
    return (0, a.jsx)("div", {
        ref: s,
        className: o9.x,
        children: t
            ? (0, a.jsx)(oJ.H, { children: (0, a.jsx)(l6.o, { ref: e, text: d, variant: o3, delay: null }) })
            : (0, a.jsx)(I.D, { variant: o3, children: d }),
    });
}
async function o8(e, t, n) {
    (0, ee.Hc)(e);
    let l = await (0, ee.vX)(e, t);
    (0, ee.dv)(e, n, [l]);
}
function o5(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, el.x5)(e.size, t)
        ? null
        : en.intl.formatToPlainString(et.default.AzziHF, { size: (0, el.ZJ)((0, el.yr)(t)) });
}
async function ue(e, t) {
    let n,
        l =
            ((n = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === n ? "vibegration" : n}.zip`),
        a = await (0, ee.cS)(e, l);
    await rB(a, l);
}
function ut(e) {
    let t = i.useRef(null),
        n = i.useCallback(
            (t) => {
                let n = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != n && e(n));
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, a.jsx)("input", {
            ref: t,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.tar.bz2,.tar.xz,application/zip,application/gzip,application/x-tar,application/x-bzip2,application/x-xz",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: n,
        }),
    };
}
var un = n(950305);
let ul = [
    { value: "user", icon: un.UserIcon, nameMessage: et.default.iqXIRN },
    { value: "guild", icon: oN.R, nameMessage: et.default.LdgKdI },
];
function ua(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        s = ut(i.useCallback((e) => n(e, "user"), [n])),
        r = ut(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: s.open, guild: r.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(l7.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: l7.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(l8.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": en.intl.string(et.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(l5.rX, {
                            label: en.intl.string(et.default.MLg0S8),
                            children: ul
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: en.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        l5.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: i } = n;
                    return (0, a.jsx)(N.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: l4.H,
                        text: en.intl.string(et.default["NHP2+t"]),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": i,
                    });
                },
            }),
            s.input,
            r.input,
        ],
    });
}
var ui = n(491920);
function us(e) {
    let { modes: t, mode: n, onChange: l, className: s } = e,
        o = i.useMemo(() => t.map((e) => ({ value: e, name: eb(e), "aria-controls": ev(e) })), [t]),
        u = i.useCallback(
            (e) => {
                l(e.value);
            },
            [l],
        );
    return null == n
        ? null
        : (0, a.jsx)(sX.I, {
              role: "tablist",
              look: "pill",
              className: r()(ui.b, s),
              optionClassName: ui.u,
              options: o,
              value: n,
              onChange: u,
          });
}
var ur = n(780338),
    uo = n(663417),
    uu = n(70688),
    ud = n(173936),
    uc = n(473935),
    um = n(7437),
    uf = n(147036),
    uh = n(123917),
    up = n(557875);
let ug = new Set();
var ux = n(313007),
    ub = n(976814),
    uv = n(746080),
    uj = n(793712);
let uy = [];
function uw(e) {
    (0, g.P)((0, x.o)(e, b.Ck.FAILURE));
}
function uk(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: s,
            isOwner: r,
            canRemix: o,
            onExport: u,
            onImport: d,
            onRemix: f,
            onConnectTool: h,
            onVersionHistory: p,
            onRestorePoints: v,
            onRefresh: j,
            isRefreshing: y = !1,
            onClose: w,
            refreshApplicationId: k,
            previewProjectId: A,
            onCloseMenu: N,
        } = e,
        C = (0, ux.$s)(t),
        { pending: S, refresh: I } = (0, um.A)(k ?? null),
        { pending: T, connect: P } = (function (e, t) {
            let [n, l] = i.useState(ug),
                a = i.useRef(ug),
                s = i.useCallback((e) => {
                    ((a.current = (0, up.Q6)(a.current, e)), l(a.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, up.K9)(a.current, n.type);
                        async function r() {
                            let l = await (0, ee.JI)(e, n.type);
                            (s(n.type), "url" === l.type)
                                ? (0, uh.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, up.rq)(l.error)
                                          ? en.intl.string(et.default.avu1u4)
                                          : en.intl.string(et.default["5fwOcF"]),
                                  );
                        }
                        null != i && ((a.current = i), l(i), r().catch(() => s(n.type)));
                    },
                    [t, e, s],
                ),
            };
        })(A ?? null, uw),
        M = (0, c.bG)([ee.Ay], () => (null == A ? uy : ee.Ay.getDeclaredConnections(A))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: a } = e,
                i = [];
            for (let { connection: e, offer: s } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: en.intl.string(et.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: en.intl.formatToPlainString(et.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: en.intl.formatToPlainString(et.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != k,
            refreshPending: S,
            offers: i.useMemo(() => (0, up.Xl)(M), [M]),
            connectPending: T,
        }),
        R = i.useMemo(() => new Map(M.map((e) => [e.type, e])), [M]),
        D = null != f && o,
        L = r && null != d,
        F = D || null != u || L || null != h || null != p || null != v,
        O = sp.p5 && null != l,
        z = sp.p5,
        G = C ? nW.BellIcon : ur.BellSlashIcon;
    return (0, a.jsxs)(l8.W, {
        "data-menu-migrated": !0,
        navId: `vibegrations-project-actions-${t}`,
        "aria-label": en.intl.string(en.t.ogxXGq),
        onClose: N,
        onSelect: N,
        children: [
            null != j || null != w
                ? (0, a.jsxs)(l5.rX, {
                      children: [
                          null != j
                              ? (0, a.jsx)(l5.Dr, {
                                    id: "refresh",
                                    icon: uo.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: uo.RefreshIcon },
                                    label: en.intl.string(et.default.xKexN1),
                                    disabled: y,
                                    action: j,
                                })
                              : null,
                          null != w
                              ? (0, a.jsx)(l5.Dr, {
                                    id: "close",
                                    icon: uu.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: uu.DoorExitIcon },
                                    label: en.intl.string(et.default.Ea0Wrr),
                                    action: w,
                                })
                              : null,
                      ],
                  })
                : null,
            _.length > 0
                ? (0, a.jsx)(l5.rX, {
                      children: _.map((e) =>
                          (0, a.jsx)(
                              l5.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void I();
                                      let t = null == e.connectionType ? null : R.get(e.connectionType);
                                      null != t && P(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(l5.rX, {
                children: (0, a.jsx)(l5.Dr, {
                    id: "mute",
                    label: en.intl.string(C ? et.default.ZTkrp3 : et.default.fwSfWU),
                    icon: G,
                    leadingAccessory: { type: "icon", icon: G },
                    action: () => (0, ux.qQ)(t, !C),
                }),
            }),
            F
                ? (0, a.jsxs)(l5.rX, {
                      children: [
                          D
                              ? (0, a.jsx)(l5.Dr, { id: "remix", label: en.intl.string(et.default.vPI794), action: f })
                              : null,
                          null != u
                              ? (0, a.jsx)(l5.Dr, {
                                    id: "export",
                                    label: en.intl.string(et.default["7iamDC"]),
                                    action: u,
                                })
                              : null,
                          L
                              ? (0, a.jsx)(l5.Dr, { id: "import", label: en.intl.string(et.default.lf8HqE), action: d })
                              : null,
                          null != h
                              ? (0, a.jsx)(l5.Dr, {
                                    id: "connect-tool",
                                    label: en.intl.string(et.default["3qelzD"]),
                                    action: h,
                                })
                              : null,
                          null != p
                              ? (0, a.jsx)(l5.Dr, {
                                    id: "version-history",
                                    label: en.intl.string(et.default.jAWwzi),
                                    action: p,
                                })
                              : null,
                          null != v
                              ? (0, a.jsx)(l5.Dr, {
                                    id: "restore-points",
                                    label: en.intl.string(et.default.FRjicO),
                                    action: v,
                                })
                              : null,
                      ],
                  })
                : null,
            z
                ? (0, a.jsxs)(l5.rX, {
                      children: [
                          O
                              ? (0, a.jsx)(l5.Dr, {
                                    id: "copy-link",
                                    label: en.intl.string(en.t.WqhZss),
                                    icon: ud.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: ud.LinkIcon },
                                    action: () =>
                                        (0, sp.C)((0, uf.n)(l, uv.VV.VIBEGRATIONS, t), () =>
                                            (0, g.P)((0, x.o)(en.intl.string(en.t["L/PwZf"]), b.Ck.SUCCESS)),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(l5.Dr, {
                              id: "copy-project-id",
                              label: en.intl.string(et.default.b4TqpT),
                              icon: uc.L,
                              leadingAccessory: { type: "icon", icon: uc.L },
                              action: () =>
                                  (0, sp.C)(t, () =>
                                      (0, g.P)((0, x.o)(en.intl.string(et.default.WOKsTg), b.Ck.SUCCESS)),
                                  ),
                          }),
                      ],
                  })
                : null,
            r
                ? (0, a.jsxs)(l5.rX, {
                      children: [
                          (0, a.jsx)(l5.Dr, {
                              id: "settings",
                              label: en.intl.string(et.default["xhcY+n"]),
                              icon: E.SettingsIcon,
                              leadingAccessory: { type: "icon", icon: E.SettingsIcon },
                              action: () => (0, ub.A)(t, { guildId: s ?? l, initialTab: "project", isPreview: !0 }),
                          }),
                          (0, a.jsx)(l5.Dr, {
                              id: "delete",
                              label: en.intl.string(en.t.oyYWHE),
                              color: "danger",
                              action: () => {
                                  (0, m.A)({
                                      title: en.intl.formatToPlainString(et.default.ZokHVz, { name: n }),
                                      subtitle: en.intl.string(et.default.NmF939),
                                      confirmText: en.intl.string(en.t.oyYWHE),
                                      variant: "critical",
                                      onConfirm: () => {
                                          (0, ea.K)(t, () =>
                                              (0, g.P)((0, x.o)(en.intl.string(et.default.tqKZCi), b.Ck.FAILURE)),
                                          );
                                      },
                                  });
                              },
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function uA(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(l7.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: l7.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(uk, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: i } = e,
                { isShown: s } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: uj.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(w.m, {
                              text: en.intl.string(en.t["UKOtz+"]),
                              children: (0, a.jsx)(iJ.K, {
                                  icon: a8.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": en.intl.string(en.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": s,
                                  onClick: i,
                              }),
                          })
                        : (0, a.jsx)(V.A.Icon, {
                              icon: a8.MoreHorizontalIcon,
                              tooltip: en.intl.string(en.t["UKOtz+"]),
                              "aria-label": en.intl.string(en.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": s,
                              selected: s,
                              onClick: i,
                          }),
            });
        },
    });
}
var uN = n(104171),
    uC = n(889227),
    uS = n(350086);
let uE = nQ._3.SIZE_16;
function uI(e) {
    return e instanceof uC.A
        ? (0, a.jsx)(nX.eu, { src: e.getAvatarURL(void 0, (0, nQ.FT)(uE)), size: uE, "aria-hidden": !0 })
        : null;
}
function uT(e) {
    let { creator: t, className: n } = e,
        l = [t.creator, ...t.collaborators],
        i = l.length - 3;
    return (0, a.jsxs)("div", {
        className: r()(uS.c, n),
        "aria-hidden": !0,
        children: [
            (0, a.jsx)(uN.Ay, { users: l.slice(0, 3), max: 3, size: uN.DN.SIZE_16, renderUser: uI }),
            i > 0 ? (0, a.jsxs)(v.E, { variant: "text-xs/medium", color: "text-subtle", children: ["+", i] }) : null,
        ],
    });
}
var uP = n(769979);
function uM(e) {
    let { title: t, actions: n, breadcrumb: l } = e;
    return (0, a.jsx)(V.A, {
        hideSearch: !0,
        toolbar: n,
        className: uP.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: uP.QF,
            children: [
                (0, a.jsx)(L.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: F.A.colors.TEXT_STRONG,
                    className: uP.Kk,
                }),
                null != l
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(V.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, a.jsx)(V.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, a.jsx)(V.A.Title, { className: uP.Qw, wrapperClassName: uP.DD, children: t }),
            ],
        }),
    });
}
var u_ = n(683071);
let uR = "conjuring-help";
var uD = n(107148);
function uL() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, c.cf)([ek.default, Q.A, eD.Ay, aQ.A], () => {
                let e = ek.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of Q.A.getGuildsArray()) {
                    if (!t.features.has(eB.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = eD.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, G.m1)(t, ek.default, aQ.A) === uR;
                    });
                    if (null != n) return { isStaff: e, guildId: t.id, channelId: n.channel.id };
                }
                return { isStaff: e, guildId: null, channelId: null };
            });
            return e
                ? null != t && null != n
                    ? { kind: "channel", guildId: t, channelId: n }
                    : { kind: "url", url: "https://i.dis.gd/conjuring-access" }
                : null;
        })(),
        t = i.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, H.pX)(eB.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, uh.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, a.jsx)("div", {
              className: uD.l,
              children: (0, a.jsx)(u_.w, {
                  type: "info",
                  iconAlign: "center",
                  children: en.intl.format(et.default["4BsHmp"], { channel: uR, onNavigate: t }),
              }),
          });
}
var uF = n(321593),
    uO = n(227189),
    uz = n(189213);
function uG(e) {
    let { reason: t, transitionState: n, onClose: l } = e,
        i = t === eV.PERMISSIONS;
    return (0, a.jsx)(uz.a, {
        transitionState: n,
        onClose: l,
        title: en.intl.string(i ? et.default.Rtlv25 : et.default["+UouPe"]),
        subtitle: en.intl.string(i ? et.default["nDQB/b"] : et.default["E0QD++"]),
        size: "sm",
        actions: [{ text: en.intl.string(i ? en.t.BddRzS : et.default["+Zh4FA"]), variant: "primary", onClick: l }],
    });
}
var uB = n(480007),
    u$ = n(584936);
let uq = "user",
    uU = "user",
    uV = "no-server",
    uH = new Map();
function uK(e) {
    return uH.get(e) ?? null;
}
function uW(e) {
    switch (e) {
        case "all":
        case uU:
        case uV:
            return null;
        default:
            return e;
    }
}
function uY(e, t) {
    switch (t) {
        case "all":
            return !0;
        case uU:
            return "user" === e.install_scope;
        case uV:
            return null == (0, ei.HC)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
let uX = "VibegrationsProjectsPanelOpen";
function uQ() {
    return nt.w.get(uX) ?? null;
}
function uZ(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var uJ = n(352978);
function u0(e) {
    return (0, a.jsx)(f.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function u2(e) {
    return (0, a.jsx)(h.u, { ...e, size: "custom", width: 20, height: 20 });
}
function u1(e) {
    return (0, a.jsx)(p.k, { ...e, size: "custom", width: 20, height: 20 });
}
let u6 = {
    showPublishBlocked: function (e) {
        (0, lC.openModal)((t) => (0, a.jsx)(uG, { ...t, reason: e }));
    },
    openPublishNotes: uB.A,
    showError: (e) => (0, g.P)((0, x.o)(e, b.Ck.FAILURE)),
    openProfile: (e) => {
        (0, K.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(n.bind(n, 468689))
            .then((t) => {
                let { default: n } = t;
                return n.open(e, eB.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function u9(e) {
    var t;
    let n,
        l,
        s,
        o,
        f,
        h,
        p,
        N,
        C,
        S,
        { project: E, guildId: I, onSelect: T, onRemix: P, shared: M = !1 } = e,
        _ =
            ((n = E.id),
            (l = E.name),
            (s = i.useRef(!1)),
            (o = i.useCallback(() => {
                s.current ||
                    ((s.current = !0),
                    (0, g.P)((0, x.o)(en.intl.formatToPlainString(et.default.u9TapG, { name: l }), b.Ck.MESSAGE)),
                    ue(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", n, e),
                                (0, g.P)(
                                    (0, x.o)(
                                        409 === (t = e instanceof ee._v ? e.status : null)
                                            ? en.intl.string(et.default.uB40Hz)
                                            : 404 === t
                                              ? en.intl.string(et.default.wCq2jC)
                                              : en.intl.string(et.default.G2GqyP),
                                        b.Ck.FAILURE,
                                    ),
                                ));
                        })
                        .finally(() => {
                            s.current = !1;
                        }));
            }, [n, l])),
            {
                onExport: o,
                onImport: (f = ut(
                    i.useCallback(
                        (e) => {
                            let t = o5(e);
                            null != t
                                ? (0, g.P)((0, x.o)(t, b.Ck.FAILURE))
                                : (0, m.A)({
                                      title: en.intl.formatToPlainString(et.default.XYZqZK, { name: l }),
                                      subtitle: en.intl.string(et.default["6syXoH"]),
                                      confirmText: en.intl.string(et.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, H.pX)(eB.BVt.CHANNEL(I, uv.VV.VIBEGRATIONS, n));
                                          try {
                                              await o8(n, e, en.intl.string(et.default.C7GU2r));
                                          } catch {
                                              (0, g.P)((0, x.o)(en.intl.string(et.default["02GpNr"]), b.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [n, l, I],
                    ),
                )).open,
                importInput: f.input,
            }),
        R = E.preview_application_id ?? E.application_id,
        { data: D } = (0, z.YY)(R),
        L = D?.icon == null ? null : J.Ay.getApplicationIconURL({ id: R, icon: D.icon, size: 40 }),
        F =
            null == E.updated_at
                ? null
                : en.intl.formatToPlainString(et.default.oMDaqr, { time: u()(E.updated_at).fromNow() }),
        G = (0, ei.HC)(E),
        B =
            (0, c.bG)([Q.A], () => (null == G ? null : (Q.A.getGuild(G)?.name ?? null)), [G]) ??
            en.intl.string(et.default["qqH+iN"]),
        $ = (0, c.bG)([ec.Ay], () => ec.Ay.isProjectDeleting(E.id), [E.id]),
        q =
            ((t = M ? E : null),
            (h = t?.id),
            (p = t?.owner_user_id),
            (N = (0, c.yK)(
                [eN.Ay],
                () =>
                    null == h
                        ? []
                        : [
                              ...new Set(
                                  eN.Ay.getMessages(h)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== p ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [h, p],
            )),
            i.useEffect(() => {
                null != p && (eT(p), N.forEach(eT));
            }, [p, N]),
            (C = (0, c.bG)([ek.default], () => (null == p ? null : ek.default.getUser(p)), [p])),
            (S = (0, c.yK)([ek.default], () => N.map((e) => ek.default.getUser(e)).filter((e) => null != e), [N])),
            i.useMemo(
                () =>
                    null == C
                        ? null
                        : {
                              creator: C,
                              collaborators: S,
                              label: (function (e, t) {
                                  let n;
                                  return 0 === t.length
                                      ? en.intl.formatToPlainString(et.default.TwgkQe, { creator: e })
                                      : en.intl.formatToPlainString(et.default.yZ9HPM, {
                                            creator: e,
                                            collaborators:
                                                0 === (n = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === n
                                                      ? en.intl.formatToPlainString(en.t["8s9z8P"], { first: t[0] })
                                                      : 2 === n
                                                        ? en.intl.formatToPlainString(en.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === n
                                                          ? en.intl.formatToPlainString(en.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : en.intl.formatToPlainString(en.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: n - 3,
                                                            }),
                                        });
                              })(
                                  (0, eA.mG)(C),
                                  S.map((e) => (0, eA.mG)(e)),
                              ),
                          },
                [C, S],
            )),
        V = i.useId(),
        K = (0, a.jsx)(v.E, { variant: "text-md/semibold", color: "text-strong", className: uJ.j1, children: E.name }),
        W =
            null == L
                ? (0, a.jsx)("div", {
                      className: uJ.a8,
                      "aria-hidden": !0,
                      children: (0, a.jsx)(j.k, { size: "custom", width: 20, height: 20, color: "var(--icon-muted)" }),
                  })
                : (0, a.jsx)("img", { alt: "", src: L, className: uJ.VJ }),
        Y = (0, th.lE)(E.id),
        X = {
            projectId: E.id,
            projectName: E.name,
            guildId: I,
            projectGuildId: E.guild_id,
            isOwner: (0, ec.PV)(E),
            canRemix: (0, ec.H_)(E),
            onRemix: P,
            onExport: _.onExport,
            onImport: _.onImport,
        };
    return (0, a.jsxs)("div", {
        className: r()(uJ.OY, { [uJ.Wy]: $ }),
        "aria-busy": $,
        children: [
            (0, a.jsx)(uF.Ay, { projectId: E.id }),
            null == Y || $ ? null : (0, a.jsx)("div", { className: uJ.SB, "aria-hidden": !0 }),
            (0, a.jsxs)(y.D, {
                className: uJ.W6,
                onClick: $ ? void 0 : T,
                onContextMenu: function (e) {
                    $ || (0, O.jA)(e, () => (0, a.jsx)(uk, { ...X, onCloseMenu: O.Z_ }));
                },
                tabIndex: $ ? -1 : void 0,
                "aria-describedby": null != q ? V : void 0,
                children: [
                    W,
                    (0, a.jsxs)("div", {
                        className: uJ.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: uJ.Ub,
                                children: [
                                    null != q ? (0, a.jsx)(w.m, { text: q.label, ariaHidden: !0, children: K }) : K,
                                    null == q || $ ? null : (0, a.jsx)(uT, { creator: q, className: uJ.rb }),
                                    Y !== d.I.NEEDS_INPUT || $
                                        ? null
                                        : (0, a.jsxs)("div", {
                                              className: uJ.fs,
                                              children: [
                                                  (0, a.jsx)(U.A, { mentionsCount: 1 }),
                                                  (0, a.jsx)(k.A, { children: en.intl.string(et.default.V3e2Yd) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: uJ.h3,
                                children: [
                                    (0, a.jsx)(v.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: uJ.Wb,
                                        children: $ ? en.intl.string(et.default.EwXXks) : B,
                                    }),
                                    null == F || $
                                        ? null
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("span", {
                                                      className: uJ.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, a.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: uJ.zM,
                                                      children: F,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != q ? (0, a.jsx)(k.A, { id: V, children: q.label }) : null,
            (0, a.jsx)("div", {
                className: uJ.M2,
                children: $
                    ? (0, a.jsx)(A.y, { type: A.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: uJ.Pl,
                          children: [(0, a.jsx)(uA, { ...X, trigger: "iconButton" }), _.importInput],
                      }),
            }),
        ],
    });
}
function u3(e) {
    var t;
    let { project: l, projectsLoaded: s, onBack: r, guildId: o } = e,
        [u, d] = i.useState(!0),
        [f, h] = i.useState(!1),
        [p, j] = i.useState(!1),
        [y, k] = i.useState(!1),
        A = W.Q_.useSetting(),
        [T, P] = i.useState(null),
        [M, _] = i.useState(null),
        R = l?.id ?? null,
        D = i.useRef(R),
        L = i.useRef(!0),
        F = i.useRef(!1),
        O = i.useRef(null);
    ((D.current = R),
        i.useEffect(
            () => (
                (L.current = !0),
                () => {
                    L.current = !1;
                }
            ),
            [],
        ));
    let U = (0, c.bG)([ec.Ay], () => (null == R ? null : ec.Ay.getIntegrationStatus(R)), [R]),
        { data: K, isLoading: X } = (0, z.YY)(l?.preview_application_id ?? void 0),
        Q = null != R && M !== R,
        Z = U?.preview_ready === !0,
        J = U?.has_activity === !0,
        {
            availability: el,
            activeMode: ei,
            setMode: es,
            widgetApplicationId: eu,
        } = (function (e) {
            var t;
            let n,
                {
                    applicationId: l,
                    previewApplicationId: a,
                    declaredActivity: s,
                    installScope: r,
                    ownerAuthorizationRevoked: o,
                    mainCardOnly: u = !1,
                } = e,
                [d, m] = i.useState(null),
                [f, h] = i.useState(l);
            f !== l && (h(l), m(null));
            let p = null != a && a === l ? a : null,
                g = (0, c.bG)([ep.default], () => ep.default.getId()),
                { applicationWidgetConfig: x } = (0, ef.A)(g, p ?? void 0),
                b = x?.surfaces,
                v = ey({
                    widgetTop: b?.[em.m.WIDGET_TOP] != null,
                    widgetBottom: b?.[em.m.WIDGET_BOTTOM] != null,
                    miniProfile: b?.[em.m.MINI_PROFILE] != null,
                }),
                j = null != p && (u ? v.hasMainCard : v.hasAny),
                { data: y } = (0, z.YY)(a ?? void 0),
                w = null != a && y?.bot?.id != null,
                { data: k, isLoading: A } = (0, z.YY)(l ?? void 0),
                N = s || (0, eh.X)(k),
                C = null != l && A && null == k,
                S =
                    ((t = {
                        installScope: r,
                        hasFrame: N,
                        hasProfileWidget: j,
                        hasBotDm: w,
                        ownerAuthorizationRevoked: o,
                    }),
                    {
                        modes: (n = eg.filter((e) => ej[e](t))),
                        defaultMode: n[0] ?? null,
                        showModeSwitch: n.length > 1,
                        profileState: (function (e) {
                            let { installScope: t, ownerAuthorizationRevoked: n } = e;
                            return "user" === t && !0 === n ? "unavailable-authorization-revoked" : "available";
                        })(t),
                    });
            return {
                availability: S,
                isResolving: C,
                activeMode: C ? null : null != d && S.modes.includes(d) ? d : S.defaultMode,
                setMode: m,
                widgetApplicationId: p,
            };
        })({
            applicationId: l?.preview_application_id ?? null,
            previewApplicationId: l?.preview_application_id ?? null,
            declaredActivity: J,
            installScope: l?.install_scope ?? null,
            ownerAuthorizationRevoked: U?.owner_authorization_revoked === !0,
        }),
        ed = ew({
            installScope: l?.install_scope ?? null,
            previewReady: Z,
            integrationInstalled: U?.integration_installed ?? null,
            botPermissionsChanged: U?.bot_permissions_changed === !0,
        }),
        ex = u && !y && !f && !p,
        eb = en.intl.string(ex ? et.default.YdgE0j : et.default.aWVf4j),
        ev = i.useCallback(() => {
            if (y || f || p) {
                (k(!1), h(!1), j(!1), d(!0));
                return;
            }
            d((e) => !e);
        }, [y, f, p]),
        ek = i.useCallback(() => d(!1), []),
        { active: eA } = tm(R),
        eN = i.useRef(null),
        eC = (0, tf.o4)(R),
        eS = en.intl.string(eC ? et.default.bfQ4Ki : eA ? et.default.rfNEHn : et.default.lXcEa2),
        eE = i.useCallback(() => {
            if (null != R) {
                let e;
                if (eA) return void to(R);
                (k(!1), h(!1), j(!1), d(!0), (e = ts(R)).active || tr(R, { ...e, active: !0 }));
            }
        }, [R, eA]),
        eI = i.useCallback(() => {
            k((e) => !e && (d(!0), h(!1), j(!1), !0));
        }, []),
        eT = i.useCallback(() => k(!1), []),
        eP = i.useCallback(
            (e) => {
                if (null == l || F.current) return;
                let t = l.id;
                function n() {
                    return L.current && D.current === t;
                }
                ((F.current = !0),
                    h(!1),
                    d(!0),
                    P({ entry: e, status: "restoring" }),
                    (0, ee.oB)(t, e.sha)
                        .then(
                            () => {
                                n() && P({ entry: e, status: "restored" });
                            },
                            (l) => {
                                n() &&
                                    (P({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, l),
                                    (0, g.P)((0, x.o)(en.intl.string(et.default.q6iZ84), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            n() && (F.current = !1);
                        }));
            },
            [l],
        ),
        eM = (0, c.bG)([tp.A], () => tp.A.isBuilderPreviewMobile()),
        e_ = en.intl.string(eM ? et.default["3uCc8U"] : et.default["+nzCxZ"]),
        eR = i.useCallback(() => (0, ea.GG)(!eM), [eM]),
        eL = (0, q.A)(l?.preview_application_id ?? null, e$.sd),
        eF = (0, e$.x1)(eL) && eL.data.proxyTicketRefreshing,
        ez = i.useCallback(() => {
            null == eL || eF || $.A.refreshProxyTicket(eL.id);
        }, [eL, eF]),
        eG = i.useCallback(() => {
            var e, t;
            (null != l && ((e = l.id), (t = eL?.id), (0, ee.Bn)(e), (0, tv.A)().leaveFrame(t)), r());
        }, [l, eL?.id, r]),
        eq = i.useCallback(() => {
            null != l && (d(!0), (0, ee.dv)(l.id, en.intl.string(et.default["2ejwtJ"])));
        }, [l]),
        eU = ut(
            i.useCallback(
                (e) => {
                    if (null == l) return;
                    let t = l.id,
                        n = o5(e);
                    null != n
                        ? (0, g.P)((0, x.o)(n, b.Ck.FAILURE))
                        : (0, m.A)({
                              title: en.intl.formatToPlainString(et.default.XYZqZK, { name: l.name }),
                              subtitle: en.intl.string(et.default["6syXoH"]),
                              confirmText: en.intl.string(et.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  d(!0);
                                  try {
                                      await o8(t, e, en.intl.string(et.default.C7GU2r));
                                  } catch {
                                      (0, g.P)((0, x.o)(en.intl.string(et.default["02GpNr"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [l],
            ),
        ),
        eV = i.useCallback(() => {
            null != l && (0, u$.A)(l, o);
        }, [l, o]),
        eK = i.useCallback(async () => {
            if (null == R || D.current !== R) return;
            O.current?.abort();
            let e = new AbortController();
            ((O.current = e), _(null));
            try {
                await (0, ea.U1)(R, e.signal);
            } catch {
            } finally {
                e.signal.aborted || O.current !== e || D.current !== R || _(R);
            }
        }, [R]);
    i.useEffect(
        () => (
            eK(),
            () => {
                (O.current?.abort(), (O.current = null));
            }
        ),
        [eK],
    );
    let eW = er(l ?? null, U ?? null, o),
        eY = ((t = l?.application_id ?? null), (0, c.bG)([eD.Ay], () => (null == t ? null : (0, eO.SH)(o, t)), [o, t])),
        eX = i.useMemo(() => (null == eY ? null : () => (0, H.pX)(eB.BVt.CHANNEL(o, eY))), [o, eY]),
        eQ = i.useCallback(async () => {
            null != l && (await eo(l, eW));
        }, [eW, l]),
        eZ = i.useCallback(async () => {
            try {
                await eQ();
            } catch {}
            await eK();
        }, [eK, eQ]),
        eJ = i.useMemo(() => {
            let e = l?.preview_application_id;
            return null == e || X || Q
                ? null
                : {
                      ...(0, uO.p)({ applicationId: e, application: K ?? null, guildId: eW }),
                      onClose: () => {
                          eZ();
                      },
                  };
        }, [Q, eZ, eW, X, K, l?.preview_application_id]),
        e0 = ed ? { type: "permissions", authorizeProps: eJ } : Q && null == U ? { type: "checking" } : void 0,
        e2 = (0, c.bG)([ec.Ay], () => null != R && ec.Ay.isProjectDeleting(R), [R]);
    i.useEffect(() => {
        ((null == l && s) || e2) && (0, H.bG)(eB.BVt.CHANNEL(o, uv.VV.VIBEGRATIONS));
    }, [o, l, s, e2]);
    let e1 = i.useMemo(() => ({ guildId: o, platform: u6, busy: Q || X }), [o, Q, X]),
        e6 = e9(R, e1),
        e3 = e6?.intent === "open" && "channel" === e6.destination ? e6.appChannelId : null,
        e4 = (0, c.bG)([Y.A], () => (null == e3 ? null : Y.A.getChannel(e3)), [e3]),
        e7 = (0, G.Ay)(e4),
        e8 = (0, B.gU)(e4),
        e5 =
            null != e7 && null != e8
                ? en.intl.format(et.default.W95rrI, {
                      channel: e7,
                      channelIconHook: (e, t) =>
                          (0, a.jsx)(e8, { size: "xs", color: "currentColor", className: uJ.Y2 }, t),
                  })
                : e6?.label,
        te = e6?.upToDate === !0 ? en.intl.string(et.default["5U1fkv"]) : (e6?.disabledReason ?? null),
        tt =
            null == e6
                ? null
                : (0, a.jsx)("div", {
                      className: uJ.As,
                      children: (0, a.jsx)(w.m, {
                          text: te,
                          asContainer: !0,
                          children: (0, a.jsx)(N.$, {
                              size: "sm",
                              variant: e6.upToDate ? "secondary" : "primary",
                              loading: e6.publishing,
                              disabled: e6.disabled,
                              onClick: () => e6.run("header"),
                              text: e5,
                          }),
                      }),
                  }),
        tn = (0, a.jsx)(uM, {
            title: l?.name ?? en.intl.string(et.default.F2dRba),
            breadcrumb: { title: en.intl.string(et.default.Xmvb23), onClick: r },
            actions:
                null == l
                    ? null
                    : (0, a.jsxs)("div", {
                          className: uJ.FO,
                          children: [
                              el.showModeSwitch ? (0, a.jsx)(us, { modes: el.modes, mode: ei, onChange: es }) : null,
                              (0, a.jsx)(V.A.Icon, {
                                  icon: eM ? u1 : u2,
                                  tooltip: e_,
                                  "aria-label": e_,
                                  selected: eM,
                                  onClick: eR,
                              }),
                              (0, a.jsx)(V.A.Icon, {
                                  ref: eN,
                                  icon: C.x,
                                  iconClassName: uJ.D8,
                                  tooltip: eS,
                                  "aria-label": eS,
                                  selected: eA,
                                  disabled: eC,
                                  onClick: eE,
                              }),
                              "frame" === ei ? (0, a.jsx)(oZ, { frame: eL, controlProjectId: l.id }) : null,
                              (0, a.jsx)("div", { className: uJ.YJ }),
                              A
                                  ? (0, a.jsx)(V.A.Icon, {
                                        icon: S.BugIcon,
                                        tooltip: en.intl.string(et.default["8MLfBT"]),
                                        "aria-label": en.intl.string(et.default["8MLfBT"]),
                                        selected: y,
                                        onClick: eI,
                                    })
                                  : null,
                              (0, a.jsx)(V.A.Icon, {
                                  icon: E.SettingsIcon,
                                  tooltip: en.intl.string(et.default.cWmjzs),
                                  "aria-label": en.intl.string(et.default.cWmjzs),
                                  onClick: () => (0, ub.A)(l.id, { guildId: o, isPreview: !0 }),
                              }),
                              (0, a.jsx)(uA, {
                                  projectId: l.id,
                                  projectName: l.name,
                                  guildId: o,
                                  projectGuildId: l.guild_id,
                                  isOwner: (0, ec.PV)(l),
                                  canRemix: (0, ec.H_)(l),
                                  onRefresh: (0, e$.x1)(eL) ? ez : void 0,
                                  isRefreshing: eF,
                                  onClose: eG,
                                  onExport: eq,
                                  onImport: eU.open,
                                  onRemix: eV,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = l.id),
                                          void (0, lC.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("964476"),
                                                  n.e("988322"),
                                              ]).then(n.bind(n, 748985));
                                              return (n) => (0, a.jsx)(t, { ...n, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      T?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                (d(!0), k(!1), j(!1), h(!0));
                                            },
                                  onRestorePoints: () => {
                                      (d(!0), k(!1), h(!1), j(!0));
                                  },
                                  refreshApplicationId:
                                      el.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== el.profileState
                                          ? eu
                                          : null,
                                  previewProjectId: l.id,
                              }),
                              ex
                                  ? null
                                  : (0, a.jsx)(V.A.Icon, { icon: u0, tooltip: eb, "aria-label": eb, onClick: ev }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: uJ.nj,
        children: [
            eU.input,
            (0, a.jsx)("main", {
                className: uJ.JX,
                children:
                    null == l
                        ? (0, a.jsxs)("div", {
                              className: uJ.j5,
                              children: [
                                  tn,
                                  (0, a.jsxs)("div", {
                                      className: uJ.sD,
                                      children: [
                                          (0, a.jsx)(I.D, {
                                              variant: "heading-lg/semibold",
                                              children: en.intl.string(et.default.F2dRba),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: en.intl.string(et.default.GnEJ3o),
                                          }),
                                          (0, a.jsx)(N.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: en.intl.string(et.default["42EdIV"]),
                                              onClick: () => (0, ea.hF)(o),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(eH.Provider, {
                              value: e1,
                              children: (0, a.jsx)(
                                  oO,
                                  {
                                      projectId: l.id,
                                      designFeedbackToggleRef: eN,
                                      applicationId: l.preview_application_id,
                                      previewApplicationId: l.preview_application_id,
                                      surface: e$.sd,
                                      header: tn,
                                      chatOpen: u,
                                      onCloseChat: ek,
                                      chatHeaderAction: tt,
                                      versionHistoryOpen: f,
                                      onCloseVersionHistory: () => h(!1),
                                      restorePointsOpen: p,
                                      onCloseRestorePoints: () => j(!1),
                                      installScope: l.install_scope,
                                      debugOpen: A && y,
                                      onCloseDebug: eT,
                                      onRestoreVersion: eP,
                                      restoreState: T,
                                      previewReady: Z,
                                      previewGate: e0,
                                      availability: el,
                                      activeMode: ei,
                                      widgetApplicationId: eu,
                                      onOpenPublishedApp: eX,
                                  },
                                  l.id,
                              ),
                          }),
            }),
        ],
    });
}
function u4(e) {
    let {
            projects: t,
            idea: l,
            guildId: s,
            submitting: o,
            createError: u,
            createDisabled: d,
            conjureTarget: m,
            onConjureTargetChange: f,
            nativeAppChannels: h,
            onNativeAppChannelsChange: p,
            eligibleGuilds: j,
            modelSettings: y,
            onModelSettingsChange: w,
            onSelectProject: k,
            onIdeaChange: C,
            onCreate: S,
            onCreateFromTemplate: E,
            onStartTemplate: I,
            onSubmitTemplate: O,
            onCancelTemplate: z,
            onSkipTemplate: G,
            onImportNewProject: B,
            importing: $,
        } = e,
        [q, U] = i.useState(() => ({ guildId: s, filter: uK(s) })),
        H = (q.guildId === s ? q.filter : uK(s)) ?? s,
        K = i.useCallback(
            (e) => {
                (uH.set(s, e), U({ guildId: s, filter: e }));
            },
            [s],
        ),
        W = (0, c.yK)(
            [Q.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let l = [];
                    for (let e of n) {
                        let t = Q.A.getGuild(e);
                        null != t && l.push(t);
                    }
                    return l.sort((e, t) => e.name.localeCompare(t.name));
                })(t, s),
            [t, s],
        ),
        Y = i.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: L.D, label: en.intl.string(et.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: uU,
                    leading: un.UserIcon,
                    label: en.intl.string(et.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: uV,
                    leading: oN.R,
                    label: en.intl.string(et.default["qqH+iN"]),
                },
                ...W.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(lc.Ay, { guild: e, size: lc.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [W],
        ),
        X = (0, c.yK)(
            [ec.Ay, Q.A],
            () => {
                let e = uW(H);
                if (null != e) return ec.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(Q.A.getGuilds()))
                    ec.Ay.hasFetchedGuildProjects(e.id) && t.push(...ec.Ay.getSharedProjects(e.id));
                return t;
            },
            [H],
        );
    i.useEffect(() => {
        let e = uW(H);
        null == e || ec.Ay.hasFetchedGuildProjects(e) || (0, ea.hF)(e);
    }, [H]);
    let Z = i.useMemo(
            () =>
                X.filter((e) => uY(e, H)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [X, H],
        ),
        J = i.useMemo(
            () => [
                {
                    label: en.intl.string(et.default.MLg0S8),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: uq,
                            label: en.intl.string(et.default.UXnPhI),
                            leading: un.UserIcon,
                        },
                        ...j.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, a.jsx)(lc.Ay, { guild: e, size: lc.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [j],
        ),
        ee = i.useMemo(
            () =>
                t
                    .filter((e) => uY(e, H))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, H],
        ),
        ei = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, eO.X0)(e, s)
                    ? k(e.id)
                    : (0, g.P)((0, x.o)(en.intl.string(et.default["wY7I+H"]), b.Ck.MESSAGE));
            },
            [s, k],
        ),
        es = en.intl.string(et.default.TU9IGR),
        er = [
            en.intl.string(et.default["E+Q26x"]),
            en.intl.string(et.default["06/jqP"]),
            en.intl.string(et.default["3gSfUa"]),
        ],
        eo = [
            {
                id: "moderation-bot",
                name: en.intl.string(et.default.idRAwG),
                description: en.intl.string(et.default["oP90O/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: en.intl.string(et.default.BLDsiz),
                description: en.intl.string(et.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: en.intl.string(et.default["+abXa8"]),
                description: en.intl.string(et.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: en.intl.string(et.default.ieAgex),
                description: en.intl.string(et.default["5yvj+f"]),
            },
        ],
        ed = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: s,
                        eligibleGuilds: j,
                        onStart: (t) => I(e.name, t),
                        onSubmit: (t, n, l) => O(e, t, n, l),
                        onCancel: z,
                        onSkip: G,
                    }),
                    (0, lC.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("247719"), n.e("948979")]).then(
                                n.bind(n, 248702),
                            );
                            return (n) => (0, a.jsx)(e, { ...n, ...t });
                        },
                        { modalKey: "VibegrationsTemplateWizardModal" },
                    ));
                }
                E(e);
            },
            [j, s, z, E, G, I, O],
        ),
        em = en.intl.string(et.default.FYK2xQ),
        ef =
            (i.useEffect(() => {
                (0, ea.b8)();
            }, []),
            (0, c.bG)([ec.Ay], () => {
                let e = ec.Ay.getMaxProjects();
                return null != e && ec.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - ec.Ay.getOwnedProjects().length)
                    : null;
            })),
        eh = en.intl.string(et.default["/SUK82"]),
        ep = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || S());
            },
            [d, S],
        ),
        eg = uW(H) ?? s,
        ex = (0, c.bG)([ec.Ay], () => ec.Ay.getGuildProjectsFetchState(eg), [eg]),
        eb = (0, c.bG)([ec.Ay], () => ec.Ay.getGuildProjectsFetchState(s), [s]),
        [ev, ej] = i.useState(uQ),
        ey = i.useMemo(() => nt.w.get(uZ(s)) ?? !1, [s]),
        ew = "success" === eb,
        ek = (0, c.yK)([ec.Ay], () => ec.Ay.getSharedProjects(s), [s]).length > 0 || t.some((e) => uY(e, s)),
        eA = ev ?? (!!ek || "error" === eb || (!ew && ey));
    i.useEffect(() => {
        ew && nt.w.set(uZ(s), ek);
    }, [ew, ek, s]);
    let eN = i.useCallback((e) => {
            (nt.w.set(uX, e), ej(e));
        }, []),
        eC = i.useCallback(() => eN(!eA), [eN, eA]),
        eS = i.useCallback(() => eN(!1), [eN]),
        eE = en.intl.string(et.default.jDPFDh),
        eI = eA ? eE : en.intl.string(et.default.a6d2y1);
    return (0, a.jsx)("div", {
        className: r()(uJ.nj, uJ.a0),
        children: (0, a.jsxs)("div", {
            className: uJ.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: uJ.ps,
                    children: [
                        (0, a.jsx)(uM, {
                            title: en.intl.string(et.default.Xmvb23),
                            actions: (0, a.jsx)(V.A.Icon, {
                                icon: T.Z,
                                tooltip: eI,
                                "aria-label": eI,
                                selected: eA,
                                onClick: eC,
                            }),
                        }),
                        (0, a.jsx)(P.Ip, {
                            className: uJ.Yy,
                            children: (0, a.jsx)("div", {
                                className: uJ.Mo,
                                children: (0, a.jsxs)("section", {
                                    className: r()(uJ.Qs, uJ.Ix),
                                    children: [
                                        (0, a.jsx)(uL, {}),
                                        (0, a.jsx)(o7, {}),
                                        (0, a.jsxs)("section", {
                                            className: uJ.WI,
                                            "aria-label": em,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: uJ.G9,
                                                    children: [
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: em,
                                                        }),
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: en.intl.string(et.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(oY, {
                                                    listClassName: uJ.Aw,
                                                    radius: oK,
                                                    children: eo.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: uJ.EA,
                                                                children: (0, a.jsxs)(oU, {
                                                                    disabled: o,
                                                                    ariaLabel: en.intl.formatToPlainString(
                                                                        et.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: r()(uJ.nx, uJ.rz),
                                                                    onClick: () => ed(e),
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            className: uJ.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, a.jsx)(v.E, {
                                                                            className: uJ.BK,
                                                                            variant: "text-sm/normal",
                                                                            color: "text-subtle",
                                                                            children: e.description,
                                                                        }),
                                                                    ],
                                                                }),
                                                            },
                                                            e.id,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsxs)("section", {
                                            className: uJ.WI,
                                            "aria-label": eh,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: uJ.G9,
                                                    children: [
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: eh,
                                                        }),
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: en.intl.string(et.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(oY, {
                                                    listClassName: uJ.Aw,
                                                    radius: oW,
                                                    children: er.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: uJ.EA,
                                                                children: (0, a.jsx)(oU, {
                                                                    disabled: o,
                                                                    className: uJ.nx,
                                                                    onClick: () => S(e),
                                                                    children: (0, a.jsx)(v.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: uJ.un,
                                                                        children: e,
                                                                    }),
                                                                }),
                                                            },
                                                            e,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(oq, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: uJ.Yl,
                            children: (0, a.jsxs)("div", {
                                className: r()(uJ.Qs, uJ.DA),
                                children: [
                                    (0, a.jsx)(M.f, {
                                        label: es,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: l,
                                        placeholder: es,
                                        error: u,
                                        onChange: C,
                                        onKeyDown: ep,
                                    }),
                                    null != h
                                        ? (0, a.jsx)(_.S, {
                                              checked: h,
                                              disabled: o,
                                              onChange: () => p(!h),
                                              label: en.intl.string(et.default.nyY2CS),
                                              description: en.intl.string(et.default.EwshDz),
                                          })
                                        : null,
                                    (0, a.jsxs)("div", {
                                        className: uJ.VP,
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: uJ.gH,
                                                children: (0, a.jsx)(R.l, {
                                                    selectionMode: "single",
                                                    label: en.intl.string(et.default.MLg0S8),
                                                    hideLabel: !0,
                                                    placeholder: en.intl.string(et.default.MLg0S8),
                                                    options: J,
                                                    value: m,
                                                    onSelectionChange: f,
                                                    disabled: o,
                                                }),
                                            }),
                                            null != ef
                                                ? (0, a.jsx)(v.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === ef ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === ef
                                                              ? en.intl.string(et.default.JQU61N)
                                                              : en.intl.formatToPlainString(et.default["336dtK"], {
                                                                    count: ef,
                                                                }),
                                                  })
                                                : null,
                                            (0, a.jsx)(ap, {
                                                settings: y ?? el.v0,
                                                tiers: el.qf,
                                                choices: (0, eu.e)()
                                                    ? {
                                                          main: [...el.S8.main, ...el.wF.main],
                                                          subagent: [...el.S8.subagent, ...el.wF.subagent],
                                                          thinking: el.S8.thinking,
                                                      }
                                                    : el.S8,
                                                disabled: o,
                                                onChange: w,
                                            }),
                                            (0, a.jsx)(N.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: en.intl.string(en.t.CumH4u),
                                                disabled: d,
                                                loading: o,
                                                onClick: () => S(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("aside", {
                    className: uJ.pA,
                    hidden: !eA,
                    "aria-label": en.intl.string(et.default.Bo5fE3),
                    children: [
                        (0, a.jsxs)("div", {
                            className: uJ.IR,
                            children: [
                                (0, a.jsx)(v.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: uJ.RM,
                                    children: en.intl.string(et.default.Bo5fE3),
                                }),
                                (0, a.jsxs)("div", {
                                    className: uJ.Ss,
                                    children: [
                                        (0, a.jsx)(ua, { importing: $, onImport: B }),
                                        (0, a.jsx)(V.A.Icon, { icon: D.P, tooltip: eE, "aria-label": eE, onClick: eS }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)(P.Ip, {
                            className: uJ.xe,
                            children: [
                                (0, a.jsx)("div", {
                                    className: uJ.Vw,
                                    children: (0, a.jsx)(R.l, {
                                        selectionMode: "single",
                                        label: en.intl.string(et.default.mvtKAm),
                                        hideLabel: !0,
                                        options: Y,
                                        value: H,
                                        onSelectionChange: K,
                                    }),
                                }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: uJ.wE,
                                    children: en.intl.string(et.default.YnAFtT),
                                }),
                                ("unattempted" === ex || "loading" === ex) && 0 === ee.length
                                    ? (0, a.jsx)("div", { className: uJ.E8, children: (0, a.jsx)(A.y, {}) })
                                    : "error" === ex && 0 === ee.length
                                      ? (0, a.jsxs)("div", {
                                            className: uJ.E8,
                                            children: [
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: uJ.JS,
                                                    children: en.intl.string(et.default["IN/HRP"]),
                                                }),
                                                (0, a.jsx)(N.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: en.intl.string(et.default["42EdIV"]),
                                                    onClick: () => (0, ea.hF)(eg),
                                                }),
                                            ],
                                        })
                                      : 0 === ee.length
                                        ? (0, a.jsx)("div", {
                                              className: uJ.D1,
                                              children: (0, a.jsxs)("div", {
                                                  className: uJ.ST,
                                                  children: [
                                                      (0, a.jsx)(L.D, { size: "lg", color: F.A.colors.TEXT_SUBTLE }),
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: uJ.sI,
                                                          children: en.intl.string(et.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: uJ.Dq,
                                              children: ee.map((e) =>
                                                  (0, a.jsx)(
                                                      u9,
                                                      {
                                                          project: e,
                                                          guildId: s,
                                                          onSelect: () => ei(e),
                                                          onRemix: () => (0, u$.A)(e, s),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                Z.length > 0
                                    ? (0, a.jsxs)("div", {
                                          className: uJ.qx,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: uJ.uc,
                                                  children: [
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: en.intl.string(et.default.jrCnUc),
                                                      }),
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: en.intl.string(et.default["1KEhDu"]),
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: uJ.Dq,
                                                  children: Z.map((e) =>
                                                      (0, a.jsx)(
                                                          u9,
                                                          {
                                                              project: e,
                                                              guildId: s,
                                                              onSelect: () => ei(e),
                                                              onRemix: () => (0, u$.A)(e, s),
                                                              shared: !0,
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function u7(e) {
    let t,
        { guildId: n, projectId: l } = e,
        s = (0, c.yK)([ec.Ay], () => ec.Ay.getOwnedProjects()),
        r = (0, c.yK)([X.Ay], () => X.Ay.getSelfMember(n)?.roles ?? [], [n]),
        o = (0, c.bG)(
            [Q.A, Z.A],
            () => {
                let e = Q.A.getGuild(n);
                return null != e && Z.A.can(eB.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [u, d] = i.useState(""),
        m = l ?? null,
        [f, h] = i.useState(!1),
        [p, v] = i.useState(null),
        j = (0, eP._)("VibegrationsScreen"),
        [y, w] = i.useState(null);
    i.useEffect(() => {
        w(null);
    }, [n]);
    let k = i.useMemo(() => (j.some((e) => e.id === n) ? n : uq), [j, n]),
        A = y ?? k,
        N = A === uq ? "user" : "guild",
        C = A === uq ? n : A,
        [S, E] = i.useState(!0),
        [I, T] = i.useState(null);
    (i.useEffect(() => {
        (0, ea.hF)(n);
    }, [n, r, o]),
        i.useEffect(() => {
            (0, ea.dm)(n, m);
        }, [n, m]));
    let P = i.useCallback(
            async (e, t, n) => {
                let l = await (0, ea.gA)({ guild_id: t, install_scope: n, flags: (0, el.RS)("guild" === n && S) });
                ((0, ee.Hc)(l),
                    (0, ee.r2)(l, I ?? el.v0),
                    e(l),
                    (0, H.pX)(eB.BVt.CHANNEL(t, uv.VV.VIBEGRATIONS, l)),
                    d(""),
                    T(null));
            },
            [S, I],
        ),
        M = i.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    n = tg({ idea: t, installScope: N, submitting: f });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && d(e), h(!0), v(null));
                    try {
                        await P((e) => (0, ee.dv)(e, t), C, N);
                    } catch (e) {
                        v((0, es.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [P, N, C, u, f],
        ),
        _ = i.useCallback(
            async (e) => {
                if (!f) {
                    (h(!0), v(null));
                    try {
                        await P(
                            (t) => {
                                var n;
                                (0, ee.dv)(
                                    t,
                                    ((n = e.name),
                                    en.intl.formatToPlainString(et.default["9D9L0S"], { templateName: n })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            C,
                            N,
                        );
                    } catch (e) {
                        v((0, es.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [P, N, C, f],
        ),
        R = i.useCallback(
            async (e, t) => {
                let n = await (0, ea.gA)({ guild_id: t, install_scope: "guild", flags: (0, el.RS)(S) });
                return ((0, ee.Hc)(n), (0, ee.r2)(n, I ?? el.v0), (0, ee.dv)(n, (0, ed.v8)(e)), n);
            },
            [S, I],
        ),
        D = i.useCallback(async (e, t, n, l) => {
            if (ec.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, ea.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new es.uQ((0, es.hj)(e), e.status);
            }
            ((0, ee.dv)(t, l, void 0, { templateId: e.id }),
                (0, H.pX)(eB.BVt.CHANNEL(n, uv.VV.VIBEGRATIONS, t)),
                T(null));
        }, []),
        L = i.useCallback((e) => {
            (0, ea.xx)(e).catch(() => void 0);
        }, []),
        F = i.useCallback(
            (e) => {
                let t = ec.Ay.getProject(e)?.guild_id ?? n;
                ((0, H.pX)(eB.BVt.CHANNEL(t, uv.VV.VIBEGRATIONS, e)), T(null));
            },
            [n],
        ),
        [O, z] = i.useState(!1),
        G = i.useCallback(
            async (e, t) => {
                let l = o5(e);
                if (null != l) return void (0, g.P)((0, x.o)(l, b.Ck.FAILURE));
                z(!0);
                let a = null;
                try {
                    ((a = await (0, ea.gA)({ guild_id: n, install_scope: t, flags: (0, el.RS)("guild" === t && S) })),
                        (0, ee.Hc)(a),
                        (0, ee.r2)(a, I ?? el.v0),
                        await o8(a, e, en.intl.string(et.default.KjEtrZ)),
                        (0, H.pX)(eB.BVt.CHANNEL(n, uv.VV.VIBEGRATIONS, a)),
                        T(null));
                } catch {
                    (null != a && (await (0, ea.xx)(a).catch(() => void 0)),
                        (0, g.P)((0, x.o)(en.intl.string(et.default["02GpNr"]), b.Ck.FAILURE)));
                } finally {
                    z(!1);
                }
            },
            [n, S, I],
        ),
        B = i.useCallback(
            (e) => {
                (0, H.pX)(eB.BVt.CHANNEL(n, uv.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        $ = i.useCallback(() => {
            (0, H.pX)(eB.BVt.CHANNEL(n, uv.VV.VIBEGRATIONS));
        }, [n]),
        q = i.useCallback((e) => {
            (d(e), v(null));
        }, []),
        U = (0, c.bG)(
            [ec.Ay],
            () => {
                if (null == m) return null;
                let e = ec.Ay.getProject(m);
                return null == e || (0, ec.PV)(e) || e.guild_id === n ? e : null;
            },
            [m, n],
        ),
        V = (0, c.bG)([ec.Ay], () => ec.Ay.hasFetchedGuildProjects(n), [n]);
    return null != m
        ? (0, a.jsx)(u3, { project: U, projectsLoaded: V, onBack: $, guildId: n }, m)
        : (0, a.jsx)(u4, {
              projects: s,
              modelSettings: I,
              onModelSettingsChange: T,
              idea: u,
              guildId: n,
              submitting: f,
              createError: p,
              createDisabled: "idea" === (t = tg({ idea: u, installScope: N, submitting: f })) || "submitting" === t,
              onSelectProject: B,
              onIdeaChange: q,
              onCreate: M,
              onCreateFromTemplate: _,
              onStartTemplate: R,
              onSubmitTemplate: D,
              onCancelTemplate: L,
              onSkipTemplate: F,
              onImportNewProject: G,
              importing: O,
              conjureTarget: A,
              onConjureTargetChange: w,
              nativeAppChannels: "guild" === N ? S : null,
              onNativeAppChannelsChange: E,
              eligibleGuilds: j,
          });
}
