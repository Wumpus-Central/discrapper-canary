(n.r(t), n.d(t, { default: () => uz }), n(321073));
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
    g = n(376357),
    x = n(857250),
    b = n(97483),
    v = n(834730),
    j = n(323384),
    y = n(939249),
    w = n(866665),
    k = n(140735),
    A = n(289873),
    N = n(821609),
    C = n(92446),
    S = n(625903),
    E = n(297264),
    I = n(97893),
    T = n(364522),
    P = n(103557),
    M = n(150934),
    _ = n(691885),
    R = n(789645),
    D = n(152367),
    L = n(661531),
    F = n(442433),
    O = n(627363),
    z = n(47167),
    G = n(713654),
    B = n(625180),
    $ = n(672929),
    q = n(775946),
    U = n(742589),
    V = n(976860),
    H = n(402860),
    K = n(885386),
    W = n(734057),
    Y = n(696451),
    X = n(71393),
    Q = n(576705),
    Z = n(486020),
    J = n(277977),
    ee = n(50617),
    et = n(375708),
    en = n(673724),
    el = n(948230),
    ea = n(637708),
    ei = n(936494);
function es(e, t, n) {
    return t?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : n;
}
async function er(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, el.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
var eo = n(208137),
    eu = n(993396),
    ed = n(972786),
    ec = n(598748),
    em = n(294323),
    ef = n(25451),
    eh = n(280450);
let ep = ["frame", "widget", "bot"],
    eg = { frame: ee.default.TI6dfu, widget: ee.default.zshJSX, bot: ee.default.bBkuBd };
function ex(e) {
    return et.intl.string(eg[e]);
}
function eb(e) {
    return `vibegrations-preview-mode-panel-${e}`;
}
let ev = { frame: (e) => e.hasFrame, widget: (e) => e.hasProfileWidget, bot: (e) => !0 === e.hasBotDm };
function ej(e) {
    let t = e.widgetTop && e.widgetBottom,
        n = e.miniProfile;
    return { hasMainCard: t, hasPopoutCard: n, hasAny: t || n };
}
function ey(e) {
    let { installScope: t, previewReady: n, integrationInstalled: l, botPermissionsChanged: a } = e;
    return !!n && null != l && (!!a || ("user" !== t && !l));
}
var ew = n(287809),
    ek = n(427262),
    eA = n(783791),
    eN = n(803306);
let eC = new Set(),
    eS = new Map();
function eE(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
function eI(e) {
    if (null == e || eC.has(e) || null != ew.default.getUser(e)) return;
    let t = eS.get(e) ?? 0;
    t >= 3 ||
        (eS.set(e, t + 1),
        eC.add(e),
        eN
            .wz(e)
            .finally(() => eC.delete(e))
            .catch(() => {}));
}
var eT = n(459514),
    eP = n(73153),
    eM = n(587895),
    e_ = n(321191),
    eR = n(808728),
    eD = n(927899),
    eL = n(933294),
    eF = n(683180),
    eO = n(308528),
    ez = n(345942),
    eG = n(652215),
    eB = n(165610),
    e$ = n(522250);
function eq(e) {
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
                                    update: et.intl.string(ee.default.o046LG),
                                    open: et.intl.string(ee.default.BceUWe),
                                    destination: "dm",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: et.intl.string(ee.default["91710b"]),
                                    open: et.intl.string(ee.default.c4LI5t),
                                    destination: "launch",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return {
                                    update: et.intl.string(ee.default["S+XFJ2"]),
                                    open: et.intl.string(ee.default.wK3FYl),
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
                        let l = et.intl.formatToPlainString(ee.default.jnwfvk, { server: t });
                        switch (e) {
                            case "bot":
                                return {
                                    update: et.intl.string(ee.default.o046LG),
                                    open: l,
                                    destination: "guild",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: et.intl.string(ee.default["91710b"]),
                                    open:
                                        null == n ? l : et.intl.formatToPlainString(ee.default.Nfs5wk, { channel: n }),
                                    destination: "channel",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "automod":
                                return {
                                    update: et.intl.string(ee.default.Qn0VCU),
                                    open: et.intl.string(ee.default.j8541Y),
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
                ? et.intl.formatToPlainString(ee.default.qG1SMK, o)
                : s
                  ? et.intl.formatToPlainString(ee.default.x71ku3, o)
                  : r
                    ? et.intl.formatToPlainString(ee.default["53xiNu"], o)
                    : null;
        })(e),
        d = ey({
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
        return { ...m, label: et.intl.string(ee.default.zFcLHP), action: "review_permissions", navigatesOnPublish: f };
    let h = r?.update ?? et.intl.string(ee.default["91710b"]);
    return { ...m, label: c ? h : et.intl.string(ee.default["5gU57O"]), action: "publish", navigatesOnPublish: f };
}
var eU = (((l = {}).NO_PREVIEW = "no-preview"), (l.PERMISSIONS = "permissions"), l);
let eV = i.createContext(null);
function eH(e) {
    return eM.A.getApplication(e.application_id)?.bot?.id ?? e.application_id;
}
function eK(e, t) {
    let n = ed.Ay.getProject(e);
    if (null == n) return null;
    let l = "user" === n.install_scope ? null : (n.guild_id ?? t),
        a = null == l ? null : (0, eF.SH)(l, n.application_id),
        i = null == l ? null : X.A.getGuild(l);
    return {
        project: n,
        guildId: l,
        appChannelId: a,
        input: {
            installScope: n.install_scope,
            status: ed.Ay.getPublishStatus(e),
            integrationStatus: ed.Ay.getIntegrationStatus(e),
            guildName: i?.name ?? null,
            appChannelName: null == a ? null : (W.A.getChannel(a)?.name ?? null),
            appChannelPending: ed.Ay.isAppChannelPending(e),
            canManageGuild: null == i ? null : Q.A.can(eG.xBc.MANAGE_GUILD, i),
            canManageChannels: null == i ? null : Q.A.can(eG.xBc.MANAGE_CHANNELS, i),
            usesNativeAppChannels: (0, en.KQ)(n),
            botInGuild: (function (e, t) {
                if (null == t) return null;
                let n = e_.A.getMutualGuilds(eH(e));
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
function eW(e, t, n) {
    return (function (e, t) {
        let n,
            { applicationId: l, guildId: a, appChannelId: i, openProfile: s, openAutomodSettings: r } = t;
        switch (e) {
            case "launch":
                if ((0, ef.X)(eM.A.getApplication(l)))
                    return (B.A.launchFrame({ applicationId: l, surface: eB.sd }).catch(() => {}), Promise.resolve());
                break;
            case "profile": {
                let e = ew.default.getCurrentUser()?.id;
                if (null != e) return (s(e), Promise.resolve());
                break;
            }
            case "channel":
                if (null != a && null != i) return ((0, V.pX)(eG.BVt.CHANNEL(a, i)), Promise.resolve());
                break;
            case "automod":
                if (null != a && null != r) return (r(a), Promise.resolve());
        }
        if ("dm" !== e && null != a) {
            let e;
            return (
                null != (e = eR.Ay.getDefaultChannel(a)?.id) ? (0, V.pX)(eG.BVt.CHANNEL(a, e)) : (0, ez.u)(a),
                Promise.resolve()
            );
        }
        return ((n = eM.A.getApplication(l)?.bot?.id ?? l), eO.A.openPrivateChannel({ recipientIds: n }));
    })(t, {
        applicationId: e.project.application_id,
        guildId: e.guildId,
        appChannelId: e.appChannelId,
        openProfile: n.openProfile,
        openAutomodSettings: n.openAutomodSettings,
    });
}
async function eY(e, t) {
    let n = ed.Ay.getProject(e),
        l = n?.preview_application_id;
    if (null == n || null == l) return;
    let a = es(n, ed.Ay.getIntegrationStatus(e), t);
    (null == eM.A.getApplication(l) && (await (0, O.TA)(l).catch(() => {})),
        await new Promise((e) => {
            eL.A.openVibegrationsAppInstallModal({
                applicationId: l,
                application: eM.A.getApplication(l) ?? null,
                guildId: a,
                onClose: e,
            });
        }),
        await er(n, a).catch(() => {}),
        await (0, el.U1)(e).catch(() => {}));
}
let eX = new Set(["dm", "guild", "channel"]);
function eQ(e, t, n) {
    let { project: l } = e,
        { platform: a, guildId: i } = n,
        s = l.id,
        r = t.navigatesOnPublish ? t.destination : null,
        o = "user" === l.install_scope || null != r ? null : (0, J.$C)(s);
    (o?.catch(() => {}), "channel" === r && eZ(s, !0));
    let u = (0, J.TV)(s).then((e) => {
            if (!0 !== e.ok) {
                let t;
                throw Error(
                    null != (t = e.detail?.trim()) && "" !== t
                        ? et.intl.formatToPlainString(ee.default.xTlB8O, { reason: t })
                        : et.intl.string(ee.default.fNP6Cd),
                );
            }
            return e;
        }),
        d = u.then(
            () =>
                (0, el.tZ)(s, { isPreview: !1 }).catch((e) => {
                    console.error("[vibegrations] post-publish refresh failed", s, e);
                }),
            () => {},
        );
    if (
        (u.then(
            () => {
                (null != e.guildId && e0(l),
                    null != r &&
                        (eX.has(r) && (0, e$.cP)(s),
                        d
                            .then(() => ("channel" === r ? eJ(s, i) : void 0))
                            .finally(() => eZ(s, !1))
                            .then(() => eW(eK(s, i) ?? e, r, a))
                            .catch(() => {})));
            },
            (e) => {
                (eZ(s, !1), a.showError(e instanceof Error ? e.message : et.intl.string(ee.default.fNP6Cd)));
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
function eZ(e, t) {
    eP.h.dispatch({ type: "VIBEGRATIONS_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function eJ(e, t) {
    let n = Date.now() + 5e3;
    for (; eK(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function e0(e) {
    (0, eN.eO)(eH(e), { withMutualGuilds: !0 }).catch(() => {});
}
let e2 = new Set();
async function e1(e, t, n) {
    let { guildId: l, platform: a } = n;
    if (!0 === n.busy || e2.has(e)) return;
    let i = eK(e, l);
    if (null == i || ed.Ay.isProjectPublishing(e)) return;
    let s = eq(i.input);
    if (null != s) {
        if (
            ((0, eD.Ar)(e, {
                entryPoint: t,
                publishState: i.input.status?.state ?? null,
                surface: i.input.status?.surface ?? null,
                installScope: i.project.install_scope,
                action: s.action,
            }),
            "open" === s.intent)
        ) {
            null != s.destination && eW(i, s.destination, a).catch(() => {});
            return;
        }
        if (null == s.disabledReason) {
            if (i.input.integrationStatus?.preview_ready !== !0) return void a.showPublishBlocked(eU.NO_PREVIEW);
            if ("consent_then_publish" === s.intent) {
                e2.add(e);
                try {
                    await (a.requestConsent ?? ((e) => eY(e, l)))(e);
                } finally {
                    e2.delete(e);
                }
                if (ed.Ay.isProjectPublishing(e)) return;
                let t = eK(e, l),
                    i = t?.input.integrationStatus ?? null;
                if (
                    null == t ||
                    ey({
                        installScope: t.project.install_scope,
                        previewReady: i?.preview_ready === !0,
                        integrationInstalled: i?.integration_installed ?? null,
                        botPermissionsChanged: i?.bot_permissions_changed === !0,
                    })
                )
                    return;
                eQ(t, s, n);
                return;
            }
            eQ(i, s, n);
        }
    }
}
function e6(e, t) {
    let n = i.useContext(eV),
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
            [ed.Ay, X.A, eR.Ay, W.A, Q.A, e_.A, eM.A],
            () => {
                let t = null == e || null == a ? null : eK(e, a);
                return {
                    canPublish: null != t && (0, ed.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing: null != e && ed.Ay.isProjectPublishing(e),
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
        null != o && null != u && A && null != k && "unpublished" !== k && e0(o);
    }, [o?.id, u, A, k]);
    let N = i.useMemo(() => (null == w ? null : eq(w)), [w]),
        C = i.useCallback(
            (t) => {
                null != e &&
                    null != l &&
                    e1(e, t, l).catch((t) => {
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
let e9 = Object.freeze({ x: 0.5, y: 0.5 });
function e3(e) {
    return "" !== e.trim();
}
function e4(e) {
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
function e7(e) {
    let { kind: t, name: n } = e4(e);
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
let e8 = "[vibegrations:selected] ",
    te = " \u2014 ";
function tt(e) {
    if (!e.startsWith(e8)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        a = n.slice(e8.length),
        i = a.indexOf(te),
        s = (-1 === i ? a : a.slice(0, i)).trim();
    return "" === s ? null : { label: s, body: l };
}
let tn = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    tl = new Map(),
    ta = new Set();
function ti(e) {
    return tl.get(e) ?? tn;
}
function ts(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? tl.set(e, t) : tl.delete(e), [...ta]))
        try {
            n();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function tr(e) {
    tl.has(e) && ts(e, tn);
}
function to(e, t) {
    let n = ti(e);
    n.active && ts(e, { ...n, context: t });
}
function tu(e, t) {
    return null != t && e.authorId === t;
}
function td(e) {
    return (
        ta.add(e),
        () => {
            ta.delete(e);
        }
    );
}
function tc(e) {
    let t = i.useCallback(() => (null == e ? tn : ti(e)), [e]);
    return i.useSyncExternalStore(td, t, t);
}
var tm = n(559676),
    tf = n(84442),
    th = n(805332);
function tp(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var tg = n(991690),
    tx = n(58736),
    tb = n(580954),
    tv = n(343030),
    tj = n(91242),
    ty = n(317608),
    tw = n(206600),
    tk = n(869146),
    tA = n(742023),
    tN = n(697744),
    tC = n(296167);
function tS(e) {
    let { className: t } = e,
        { Component: n, events: l, getDuration: s } = (0, tN.c)();
    return (
        i.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function n() {
                    ((e = null), null != s()) ? l.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(n));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [l, s]),
        i.useEffect(() => {
            let e = setInterval(l.onMouseEnter, 3e4);
            return () => clearInterval(e);
        }, [l]),
        (0, a.jsxs)("div", {
            className: t,
            onMouseEnter: l.onMouseEnter,
            onMouseLeave: l.onMouseLeave,
            children: [
                (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                (0, a.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: tC.o,
                    children: et.intl.string(ee.default.jTuX7C),
                }),
            ],
        })
    );
}
var tE = n(328284);
function tI(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: r()(tE.Bf, l && tE.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: tE.Ux,
                children: [
                    (0, a.jsx)(E.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var tT = n(963691);
function tP(e) {
    let { applicationId: t, surface: n } = e,
        { frame: l, state: s } = (0, tw.A)({ applicationId: t, surface: n }),
        r = (0, eB.VA)(t, n);
    switch (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = tj.A.getFrame(e);
                    if (null == t || tk.A.getWindowOpen(eG.MLl.ACTIVITY_POPOUT)) return;
                    let n = tj.A.getMainFrame()?.id === e;
                    t.intent === eB.sV.MAIN
                        ? (n || B.A.promoteFrame(e), B.A.resetFrameLayoutModes(e))
                        : n && B.A.clearMainFrameSlot();
                })(r),
                () => {
                    let e;
                    null != (e = tj.A.getFrame(r)) &&
                        ((0, eB.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        tA.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === eB.sV.INLINE && B.A.promoteFrame(r),
                              B.A.updateFrameLayoutMode({ frameId: r, layoutMode: eB.y0.PIP }))
                            : e.intent === eB.sV.MAIN && B.A.demoteMainFrame(r));
                }
            ),
            [r],
        ),
        s)
    ) {
        case tw.n.Launched:
            return (0, a.jsx)(ty.A, { frameId: l.id, level: tv.A.WithinAppContent, className: tT.Z7 });
        case tw.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: tT.qs,
                children: (0, a.jsx)(tI, {
                    title: et.intl.string(ee.default["4f6Vkr"]),
                    body: et.intl.string(ee.default.LJ2q1H),
                }),
            });
        case tw.n.NoApplication:
            return (0, a.jsx)(tS, { className: tT.qs });
        case tw.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: tT.qs,
                children: (0, a.jsx)(tI, {
                    title: et.intl.string(ee.default.FHOJiH),
                    body: et.intl.string(ee.default["1yLQoV"]),
                }),
            });
        case tw.n.Error:
            return (0, a.jsxs)("div", {
                className: tT.qs,
                children: [
                    (0, a.jsx)(E.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: et.intl.string(ee.default.MeLWCr),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: tT.tj,
                        children: et.intl.string(ee.default["1RCbQT"]),
                    }),
                ],
            });
        case tw.n.AwaitingLaunch:
        case tw.n.Loading:
            return (0, a.jsx)("div", { className: tT.qs, children: (0, a.jsx)(A.y, {}) });
    }
}
var tM = n(334738),
    t_ = n(688438),
    tR = n(355622),
    tD = n(531685),
    tL = n(365971),
    tF = n(362417);
function tO(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: tF.f,
        children: [
            (0, a.jsx)(j.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function tz() {
    return (0, a.jsx)("div", { className: tF.f, children: (0, a.jsx)(A.y, {}) });
}
function tG(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: s, isLoading: r } = (0, O.YY)(l),
        o = s?.bot?.id ?? null,
        u = (0, c.bG)([W.A], () => {
            if (null == o) return null;
            let e = W.A.getDMFromUserId(o);
            return null != e ? W.A.getChannel(e) : null;
        });
    ((t = u?.id ?? null),
        i.useEffect(() => {
            null != t && eO.A.preload(eG.ME, t);
        }, [t]),
        (n = (0, c.bG)([tD.A], () => tD.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, tL.Xg)();
            return (
                (0, tM.yl)(t, e),
                () => {
                    (0, tM.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, m] = i.useState(null),
        f = null != o && d === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            eO.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || m(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    r)
        ? (0, a.jsx)(tz, {})
        : null == o || f
          ? (0, a.jsx)(tO, { message: et.intl.string(ee.default.bl4eBc) })
          : null == u
            ? (0, a.jsx)(tz, {})
            : (0, a.jsx)("div", {
                  className: tF.g,
                  children: (0, a.jsx)(t_.A, { channel: u, guild: null, chatInputType: tR.oU.SIDEBAR }, u.id),
              });
}
var tB = n(887909),
    t$ = n(570962),
    tq = n(590744);
function tU(e) {
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
    } = (0, tB.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: tq.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: tq.rf,
                children: (0, a.jsx)(t$.A, {
                    obscured: !0 === f,
                    children: (0, a.jsxs)("div", {
                        className: tq.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: tq.z3,
                                      children: [
                                          (0, a.jsx)(E.D, {
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
                                className: r()(tq.Qs, c ? tq.cw : null, m ? tq.pN : null),
                                children: [s, null == u ? d : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != o && o.length > 0
                ? (0, a.jsx)("div", {
                      className: tq.o1,
                      children: o.map((e, t) => (0, a.jsx)(N.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var tV = n(486610),
    tH = n(531913),
    tK = n(633075),
    tW = n(946356),
    tY = n(139730),
    tX = n(58216),
    tQ = n(71495);
function tZ(e) {
    let { applicationId: t } = e,
        n = (0, c.bG)([ew.default], () => ew.default.getCurrentUser());
    return null == n ? null : (0, a.jsx)(tJ, { applicationId: t, user: n });
}
function tJ(e) {
    let { applicationId: t, user: n } = e,
        l = (0, c.bG)([eM.A], () => eM.A.getApplication(t)),
        s = i.useMemo(() => new tK.R({ applicationId: t }), [t]),
        r = (0, tH.A)(n.id, t),
        o = r.surfaceConfigs,
        u = ej({
            widgetTop: null != o[ec.m.WIDGET_TOP],
            widgetBottom: null != o[ec.m.WIDGET_BOTTOM],
            miniProfile: null != o[ec.m.MINI_PROFILE],
        });
    return u.hasAny
        ? (0, a.jsx)("div", {
              className: tQ.$C,
              children: (0, a.jsxs)("div", {
                  className: tQ.PV,
                  children: [
                      u.hasMainCard
                          ? (0, a.jsx)("div", {
                                className: tQ.a9,
                                children: (0, a.jsx)(tW.A.Overlay, {
                                    className: tQ.Qb,
                                    children: (0, a.jsx)(tX.A, {
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
                                className: tQ.ql,
                                children: (0, a.jsx)(tY.A, { application: l, rendererProps: r, renderText: tV.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var t0 = n(976102);
function t2(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            previewReady: s,
            previewGate: r,
            availability: o,
            activeMode: u,
            widgetApplicationId: d,
        } = e,
        c = (0, $.A)(t, l),
        { data: m, isLoading: f } = (0, O.YY)(t ?? void 0);
    if (
        (i.useEffect(() => {
            r?.type === "permissions" && null != c && (0, tb.A)().leaveFrame(c.id);
        }, [c, r?.type]),
        r?.type === "checking")
    )
        return (0, a.jsx)("div", { className: t0.q, children: (0, a.jsx)(A.y, {}) });
    if (r?.type === "permissions")
        return (0, a.jsx)("div", {
            className: t0.q,
            children: null == r.authorizeProps ? (0, a.jsx)(A.y, {}) : (0, a.jsx)(tU, { ...r.authorizeProps }),
        });
    if (!s) return (0, a.jsx)(tS, { className: t0.q });
    if (null == t) return null;
    if (f && null == m) return (0, a.jsx)("div", { className: t0.q, children: (0, a.jsx)(A.y, {}) });
    let h = o.showModeSwitch && null != u ? { role: "tabpanel", id: eb(u), "aria-label": ex(u) } : {};
    return (0, a.jsxs)("div", {
        className: t0.R,
        ...h,
        children: [
            ("frame" === u && o.modes.includes("frame")) || 0 === o.modes.length
                ? (0, a.jsx)(tP, { applicationId: t, surface: l })
                : null,
            "widget" === u && null != d
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, a.jsx)("div", {
                          className: t0.q,
                          children: (0, a.jsx)(tI, {
                              wide: !0,
                              title: et.intl.string(ee.default.SGHO9K),
                              body: et.intl.string(ee.default["pV/rS2"]),
                          }),
                      })
                    : (0, a.jsx)(tZ, { applicationId: d })
                : null,
            "bot" === u && null != n ? (0, a.jsx)(tG, { previewApplicationId: n }) : null,
        ],
    });
}
var t1 = n(689175),
    t6 = n(65593),
    t9 = n(903586);
function t3(e) {
    return !(0, eA.BL)(e) && !0 !== e.stopRequested;
}
var t4 = n(935208),
    t7 = n(435558),
    t5 = n.n(t7),
    t8 = n(506774);
let ne = "VibegrationsComposerDrafts";
function nt() {
    return t8.w.get(ne) ?? {};
}
let nn = new Map(),
    nl = t5().throttle(() => {
        if (0 === nn.size) return;
        let e = nt();
        for (let [t, n] of nn) "" === n ? delete e[t] : (e[t] = n);
        (nn.clear(), t8.w.set(ne, e));
    }, 1e3);
class na extends c.Ay.Store {
    getDraft(e) {
        let t = nn.get(e);
        return null != t ? t : (nt()[e] ?? "");
    }
}
let ni = new na(eP.h, {
    LOGOUT: function () {
        return (nn.clear(), nl.cancel(), t8.w.remove(ne), !1);
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (nn.set(t, n), nl(), "" === n && nl.flush(), !1);
    },
});
function ns(e) {
    return "" !== ni.getDraft(e).trim();
}
(n(323874), n(14289), n(35956));
var nr = n(839214);
let no = [],
    nu = 1,
    nd = (0, nr.D)(() => ({ draftsByProject: {} }));
function nc(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? no;
}
function nm(e, t) {
    return nc(nd.getState(), e, t);
}
function nf(e, t, n) {
    let { draftsByProject: l } = nd.getState();
    nd.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function nh(e, t, n, l) {
    let a = nm(e, t);
    return (
        !!a.some((e) => e.localId === n) &&
        (nf(
            e,
            t,
            a.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function np(e, t) {
    (0, J.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function ng(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && np(e, t.ref.id));
}
function nx(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = nd.getState(),
        a = l[e];
    if (null == a) return;
    for (let t of Object.values(a))
        for (let l of t ?? no) n ? ng(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: i, ...s } = l;
    nd.setState({ draftsByProject: s });
}
function nb(e, t) {
    let n = nm(e, t);
    if (0 !== n.length) {
        for (let t of n) ng(e, t);
        nf(e, t, no);
    }
}
function nv(e, t) {
    let n = nm(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (nf(e, t, no), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function nj(e, t) {
    let { clarificationAnswers: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = nm(e, "chat"),
        a = l.length > 0 && l.every((e) => "ready" === e.status) ? nv(e, "chat") : [];
    (0, J.dv)(e, t, a, { clarificationAnswers: n });
}
(eP.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(nd.getState().draftsByProject)) nx(e, { deleteFromWorker: !0 });
}),
    eP.h.subscribe("VIBEGRATIONS_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        nx(t, { deleteFromWorker: !1 });
    }));
var ny = n(717447),
    nw = n(29080),
    nk = n(46054),
    nA = n(76275);
function nN(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : et.intl.string(ee.default.MdXWEK);
}
function nC(e) {
    var t;
    let n,
        l,
        { steps: a, content: i, hasProposal: s, hasAttachments: r } = e,
        o = (0, t9.B4)(a),
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
        })({ hasAttachments: r, showsClosingMessage: f, endsOnStreamedMessage: (0, t9.Lf)(a) }),
    };
}
(n(134528), n(947204));
var nS = n(478016),
    nE = n(331322),
    nI = n(34136);
function nT(e) {
    let { title: t, trailing: n, children: l, className: i, headerClassName: s, ...o } = e;
    return (0, a.jsxs)("section", {
        className: r()(nI.Nr, i),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: r()(nI.wx, null != n && nI.o5, s),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var nP = n(113757);
function nM(e) {
    let { idea: t, selected: n, onPick: l } = e,
        s = i.useId(),
        o = null == l;
    return (0, a.jsxs)(y.D, {
        className: r()(nP.nM, { [nP.f1]: o, [nP.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": et.intl.formatToPlainString(ee.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: nP.jo,
                children: [
                    n
                        ? (0, a.jsx)(nS.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: nP.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: nP.G9,
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
function n_(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [s, r] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (r((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(nT, {
        title: et.intl.string(ee.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                nM,
                { idea: e, selected: s.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function nR(e) {
    let { onAsk: t } = e;
    return (0, a.jsx)(nE.B, {
        align: "start",
        "data-vibegrations-ideas-offer": !0,
        children: (0, a.jsx)(N.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: et.intl.string(ee.default.cwTe5o),
        }),
    });
}
var nD = n(435619),
    nL = n(885574),
    nF = n(430392),
    nO = n(632015),
    nz = n(256905),
    nG = n(847374),
    nB = n(320448),
    n$ = n(289906);
function nq(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nU(e) {
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
        v = h ? nG.a : nB._,
        j = null != n || l;
    return (0, a.jsxs)(nT, {
        ...m,
        title: t,
        trailing: j
            ? (0, a.jsxs)("span", {
                  className: n$.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(y.D, {
                                className: n$.L$,
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
        headerClassName: h ? void 0 : n$.RG,
        "data-superseded": l ? "true" : void 0,
        children: [d, (0, a.jsx)("div", { id: f, className: r()(n$.rf, u), hidden: !h, children: c })],
    });
}
var nV = n(824757);
function nH(e) {
    let { label: t, info: n, children: l } = e;
    return (0, a.jsxs)("section", {
        className: nV.uW,
        children: [
            (0, a.jsxs)("span", {
                className: nV.a9,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
function nK() {
    return (0, a.jsx)(w.m, {
        text: et.intl.string(ee.default.DXe2dP),
        children: (0, a.jsx)(y.D, {
            className: nV.bk,
            "aria-label": et.intl.string(ee.default.Y6y4nQ),
            children: (0, a.jsx)(nL.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function nW(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(nH, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: nV.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: nV.jw,
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
function nY(e) {
    let { isActivity: t, hasWidget: n } = e,
        l = t ? j.k : nF.RobotIcon;
    return (0, a.jsxs)("span", {
        className: nV.K2,
        children: [
            n
                ? (0, a.jsxs)("span", {
                      className: nV.L6,
                      children: [
                          (0, a.jsx)(nO.f, {
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
                              children: et.intl.string(ee.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("span", {
                className: nV.L6,
                children: [
                    (0, a.jsx)(l, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: et.intl.string(t ? et.t.IC5Ann : ee.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function nX(e) {
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
                        (0, J.PK)(e, t).then(
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
                            (0, J.n6)(e, t).then(
                                (e) => {
                                    e && 0 === r ? o(1) : s(!0);
                                },
                                () => s(!0),
                            ));
                    }, [e, t, r]),
                }
            );
        })(t, l),
        u = et.intl.string(ee.default.FW8UcU),
        d = i.useCallback(() => {
            (0, J.PK)(t, l).then(
                (e) => {
                    (0, nz.R)({
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
        : (0, a.jsx)(nH, {
              label: et.intl.string(ee.default["9W8SbY"]),
              info: (0, a.jsx)(nK, {}),
              children: (0, a.jsx)(y.D, {
                  className: nV.xX,
                  onClick: d,
                  "aria-label": et.intl.string(ee.default.CBrpNv),
                  children: null != s ? (0, a.jsx)("img", { src: s, alt: u, className: nV.sN, onError: o }) : null,
              }),
          });
}
function nQ(e) {
    let { projectId: t, proposal: n, version: l, onApprove: i } = e,
        s = l?.superseded === !0,
        r = n.what_changed?.trim() ?? "";
    return (0, a.jsxs)(nU, {
        title:
            s && null != l
                ? et.intl.formatToPlainString(ee.default.KdZinO, { version: l.version })
                : et.intl.string(ee.default["60htw+"]),
        meta: s
            ? (0, a.jsx)(nq, { children: et.intl.string(ee.default.o2zmBB) })
            : (0, a.jsx)(nY, { isActivity: !0 === n.is_activity, hasWidget: null != n.widget_config }),
        superseded: s,
        showLabel: et.intl.string(ee.default["1AKkZ2"]),
        hideLabel: et.intl.string(ee.default.dm6fQ8),
        bodyClassName: nV.rf,
        "data-vibegrations-plan-card": !0,
        children: [
            "" !== r
                ? (0, a.jsx)(nH, {
                      label: et.intl.string(ee.default.ucdH2a),
                      children: (0, a.jsx)(v.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: r,
                      }),
                  })
                : null,
            (0, a.jsx)(v.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: n.summary,
            }),
            null != n.design_image ? (0, a.jsx)(nX, { projectId: t, design: n.design_image }) : null,
            n.changes.length > 0
                ? (0, a.jsx)(nH, {
                      label: et.intl.string(ee.default.KLyB8Y),
                      children: (0, a.jsx)("ul", {
                          className: nV.p_,
                          children: n.changes.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: nV.Aw,
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
                ? (0, a.jsx)(nH, {
                      label: et.intl.string(et.t["0hKkS+"]),
                      children: (0, a.jsx)("ul", {
                          className: nV.p_,
                          children: n.commands.map((e, t) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: nV.uX,
                                      children: [
                                          (0, a.jsxs)(v.E, {
                                              variant: "experimental/body-md/medium",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
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
            (0, a.jsx)(nW, { label: et.intl.string(ee.default.ieqTtP), names: n.bot_permissions ?? [] }),
            (0, a.jsx)(nW, { label: et.intl.string(ee.default.Cn9qix), names: n.privileged_intents ?? [] }),
            null == i || s
                ? null
                : (0, a.jsxs)("div", {
                      className: nV.o1,
                      children: [
                          (0, a.jsx)(N.$, {
                              variant: "primary",
                              size: "sm",
                              text: et.intl.string(ee.default["hG0Y0+"]),
                              onClick: i,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: et.intl.string(ee.default.Vl3IL0),
                          }),
                      ],
                  }),
        ],
    });
}
var nZ = n(548118);
function nJ(e) {
    return null != e && e.status?.state === "unpublished";
}
function n0(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, c.bG)([X.A], () => (null == n ? null : X.A.getGuild(n)));
    return (0, a.jsx)(nE.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(nE.B, {
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
                    ? (0, a.jsxs)(nE.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: et.intl.string(ee.default.FLbAwN),
                              }),
                              (0, a.jsx)(nZ.Ay, { guild: l, size: nZ.Ay.Sizes.SMOL }),
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
function n2(e) {
    let { projectId: t } = e,
        n = e6(t);
    return null != n && nJ(n) ? (0, a.jsx)(n0, { publish: n }) : null;
}
var n1 = n(406810),
    n6 = n(381849),
    n9 = n(977628);
function n3(e) {
    let t = Date.parse(e);
    return Number.isNaN(t)
        ? { relative: null, absolute: null }
        : {
              relative: (0, n6.WR)({ seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)), getFormatter: n6._e }),
              absolute: new Date(t).toLocaleString(),
          };
}
function n4(e) {
    return (0, m.A)({
        title: et.intl.string(ee.default.qOUOPE),
        subtitle: et.intl.string(ee.default.k2JBj5),
        confirmText: et.intl.string(ee.default["+sRK16"]),
        variant: "critical",
        onConfirm: e,
    });
}
function n7(e) {
    let t,
        { projectId: n, onClose: l, onRestore: s } = e,
        [r, o] = i.useState({ status: "loading" });
    return (
        i.useEffect(() => {
            let e = !1;
            return (
                (0, J.ST)(n)
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
                ? (0, a.jsx)("div", { className: n9.E8, children: (0, a.jsx)(A.y, {}) })
                : "failed" === r.status
                  ? (0, a.jsx)("div", {
                        className: n9.E8,
                        role: "alert",
                        children: (0, a.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: et.intl.string(ee.default["mSJn+K"]),
                        }),
                    })
                  : 0 === r.entries.length
                    ? (0, a.jsx)("div", {
                          className: n9.E8,
                          children: (0, a.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: et.intl.string(ee.default.TOmYPT),
                          }),
                      })
                    : (0, a.jsx)(T.Ip, {
                          className: n9.p_,
                          children: (0, a.jsx)("div", {
                              className: n9.jO,
                              children: r.entries.map((e) => {
                                  let t = n3(e.authoredAt);
                                  return (0, a.jsxs)(
                                      y.D,
                                      {
                                          className: n9.f_,
                                          onClick: () =>
                                              n4(() => {
                                                  (l(), s(e));
                                              }),
                                          children: [
                                              (0, a.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: n9.bc,
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
            className: n9.nd,
            "aria-label": et.intl.string(ee.default.jAWwzi),
            children: [
                (0, a.jsxs)(tx.Ay, {
                    "aria-label": et.intl.string(ee.default.jAWwzi),
                    toolbar: (0, a.jsx)(tx.Ay.Icon, { icon: R.P, tooltip: et.intl.string(et.t.cpT0Cq), onClick: l }),
                    children: [
                        (0, a.jsx)(tx.Ay.ChannelIcon, { icon: n1.ClockIcon, "aria-hidden": !0 }),
                        (0, a.jsx)(tx.Ay.Title, { children: et.intl.string(ee.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: n9.rf, children: t }),
            ],
        })
    );
}
var n5 = n(584698);
function n8(e) {
    let { proposal: t, onRestore: n } = e,
        l = n3(t.authored_at);
    return (0, a.jsx)(nT, {
        title: et.intl.string(ee.default.khdMoL),
        children: (0, a.jsxs)("div", {
            className: n5.r,
            children: [
                (0, a.jsxs)("div", {
                    className: n5.z,
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
                          text: et.intl.string(ee.default.eSDVDt),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var le = n(530557),
    lt = n(872162),
    ln = n(628284);
function ll(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var la = n(192308),
    li = n(479191);
function ls(e) {
    let { projectId: t, cardId: l, request: s, status: o, awaiting: u } = e,
        d = i.useCallback(() => {
            (0, la.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: s });
            });
        }, [t, s]),
        c = i.useMemo(() => s.fields.map((e) => ({ id: e.name, label: e.label, icon: le.R })), [s.fields]),
        m = (function (e, t) {
            let [n, l] = i.useState(() => ll(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(ll(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, o),
        f = r()(li.Lo, { [li.jY]: m });
    return "superseded" === o
        ? (0, a.jsx)(
              "article",
              {
                  className: f,
                  children: (0, a.jsx)(v.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: et.intl.string(ee.default["XvX+Pj"]),
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
                            children: et.intl.string(ee.default["/e28TK"]),
                        }),
                        (0, a.jsx)(lt.C, { label: et.intl.string(ee.default["/e28TK"]), size: "xs", items: c }),
                    ],
                },
                o,
            )
          : "pending" === o
            ? (0, a.jsx)(
                  "article",
                  {
                      className: li.Lo,
                      children: (0, a.jsx)(lt.C, { label: et.intl.string(ee.default["/e28TK"]), size: "xs", items: c }),
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
                                className: li.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: li.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(ln.y, {
                                            size: "xs",
                                            color: L.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(v.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: et.intl.string(ee.default.stFB6A),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(lt.C, { label: et.intl.string(ee.default.stFB6A), size: "xs", items: c }),
                        ],
                    },
                    o,
                )
              : (0, a.jsxs)("article", {
                    className: li.Lo,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: et.intl.string(null != u ? ee.default.sKNh1M : ee.default["/e28TK"]),
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != s.note && "" !== s.note ? s.note : et.intl.string(ee.default.jxvtin),
                        }),
                        (0, a.jsx)(lt.C, { label: et.intl.string(ee.default["/e28TK"]), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: li.sq,
                            children: (0, a.jsx)(N.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: d,
                                text: et.intl.string(ee.default["gVV+HX"]),
                            }),
                        }),
                    ],
                });
}
var lr = n(349735),
    lo = n(450112),
    lu = n(973e3);
function ld(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        i = null != n.note && "" !== n.note ? n.note : et.intl.string(ee.default["V+DBhs"]);
    return (0, a.jsx)(lr.A, {
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
                text: et.intl.string(ee.default.Tuz9vw),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: lu.Mk,
                      onSubmit: u,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: et.intl.string(ee.default.wgDhiQ),
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: i,
                          }),
                          t,
                          (0, a.jsx)("div", { className: lu.p0, children: d }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: r()(lo.nd, lo.jx),
                      "aria-label": et.intl.string(ee.default.wgDhiQ),
                      onSubmit: u,
                      children: [
                          (0, a.jsxs)("div", {
                              className: lo.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: lo.TK,
                                      children: et.intl.string(ee.default.wgDhiQ),
                                  }),
                                  (0, a.jsx)(y.D, {
                                      className: r()(lo.gb, lo.Q7),
                                      onClick: l,
                                      "aria-label": et.intl.string(ee.default["6UTDHm"]),
                                      children: (0, a.jsx)(R.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: lu.DQ,
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
                              className: lo.qr,
                              children: (0, a.jsx)("div", { className: lo.zt, children: d }),
                          }),
                      ],
                  });
        },
    });
}
var lc = n(196582);
let lm = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    lf = {
        snail: () => ee.default["2l3AEQ"],
        goat: () => ee.default["+FPL+I"],
        frog: () => ee.default.w4GOfR,
        bunny: () => ee.default.XmZT9M,
        cat: () => ee.default.NnydwQ,
        caterpillar: () => ee.default["4iXcNT"],
        butterfly: () => ee.default.DoTGt5,
        dog: () => ee.default["9zxqmP"],
        spider: () => ee.default.HF0T3L,
        bee: () => ee.default.XTzDga,
        bot: () => ee.default.abtC2b,
    },
    lh = {
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
function lp(e) {
    return { ...lh[e], name: et.intl.string(lf[e]()) };
}
function lg(e) {
    return lm.includes(e) ? lp(e) : void 0;
}
function lx(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % lm.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, lm[(t + n) % lm.length]);
            }),
            l
        );
    })(e))
        t.set(n, lp(l));
    return t;
}
var lb = n(683063),
    lv = n(705754),
    lj = n(883455),
    ly = n(13699);
function lw(e) {
    let { projectId: t, lane: n, Illocon: l, tint: i, name: s, connectsDown: r } = e,
        o = n.task,
        u = "running" === o.status,
        d = (0, t9.SY)(n.steps),
        c = u
            ? null != d
                ? (0, t9.WQ)(d)
                : nN(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(nN(e));
                  switch (e.status) {
                      case "failed":
                          return et.intl.formatToPlainString(ee.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return et.intl.formatToPlainString(ee.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return et.intl.formatToPlainString(ee.default.vuv9bT, {
                                  task: t,
                                  duration: (0, nA.MB)(e.durationMs),
                              });
                          return et.intl.formatToPlainString(ee.default.KS49RN, { task: t });
                      default:
                          return et.intl.formatToPlainString(ee.default.KS49RN, { task: t });
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
                                    className: ly.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            lj.A,
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
                                      className: ly.iq,
                                      children: (0, a.jsx)(lv.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(lc.A, {
        glyph: (0, a.jsx)(lb.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: s,
            body: nN(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: ly.nC,
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
var lk = n(329456);
let lA = [];
function lN(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: r()(lk.xL, {
            [lk.Vb]: "in_progress" === t,
            [lk.cT]: "completed" === t,
            [lk.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return et.intl.string(ee.default.TkPGOH);
                case "in_progress":
                    return et.intl.string(ee.default["oK+fmd"]);
                case "unfinished":
                    return et.intl.string(ee.default["1ley3g"]);
                default:
                    return et.intl.string(ee.default.d7lieu);
            }
        })(t),
        children: [
            (0, a.jsx)(A.y, {
                type: A.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: lk.Qd,
                itemClassName: lk.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: lk.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: lk.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function lC(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : lA), [n, t]),
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
        className: lk.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: r } = n;
                return (0, a.jsx)(
                    lb.u,
                    {
                        asset: (0, a.jsx)(r, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: lk.MA,
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
                      className: lk.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function lS(e) {
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
            ((t = (s ?? lA).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of s ?? lA) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: lk.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || o ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: r()(lk.AS, { [lk.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(lN, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: lk.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: lk.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(lC, { agents: d.get(e.id) ?? lA, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: lk.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(lN, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: lk.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: lk.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function lE(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: i = !0, live: s = !0, superseded: r = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let d = et.intl.formatToPlainString(ee.default.bQvqly, { completed: o, total: u }),
        c = et.intl.formatToPlainString(ee.default["QG/EiF"], { completed: o, total: u });
    return (0, a.jsx)(nU, {
        title: et.intl.string(ee.default.qCRC6c),
        meta: (0, a.jsx)(nq, { children: d }),
        superseded: r,
        showLabel: et.intl.string(ee.default.SVhXLT),
        hideLabel: et.intl.string(ee.default.fIBJas),
        className: lk.Nr,
        bodyClassName: lk.rf,
        beforeBody: i && !r ? (0, a.jsx)(k.A, { role: "status", "aria-live": "polite", children: c }) : null,
        "data-vibegrations-todo-card": !0,
        children: (0, a.jsx)(lS, { todos: t, provisional: n, agents: l, live: s }),
    });
}
var lI = n(744239),
    lT = n(229775),
    lP = n(165648);
function lM(e) {
    let t = lx(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? lg(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: nN(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function l_(e) {
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
        x = i.useMemo(() => (0, t9.GO)(n, { turnActive: l }), [n, l]),
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
            className: ly.pj,
            "data-live": !1,
            children: (0, a.jsx)(lc.A, {
                glyph: (0, a.jsx)(nw.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: et.intl.string(ee.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let v = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        j = f ? ((0, t9.lt)(n) ?? d ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === b.steps.length && 0 === b.tasks.length && !y) return null;
    let w = b.tasks,
        k = lx(w.map((e) => e.taskId)),
        A = !p && (l || w.some((e) => "running" === e.task.status)),
        N = lM(w);
    return (0, a.jsx)(lc.l.Provider, {
        value: w.length,
        children: (0, a.jsxs)("ol", {
            className: ly.pj,
            "data-live": A,
            children: [
                (0, a.jsx)(ny.A, {
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
                    let l = null != e.task.helperMark ? lg(e.task.helperMark) : void 0,
                        i = l ?? k.get(e.taskId);
                    return null == i
                        ? null
                        : (0, a.jsx)(
                              lw,
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
                          className: ly.YO,
                          children: (0, a.jsx)(lE, { todos: j, provisional: c, agents: N, live: s, superseded: r }),
                      })
                    : null,
            ],
        }),
    });
}
function lR(e) {
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
            hoistedProse: w = !1,
            hoistedAttachmentsHost: k,
            restoreProposal: A,
            onRestoreProposal: N,
        } = e,
        C = i.useMemo(
            () => nC({ steps: n, content: l, hasProposal: null != s, hasAttachments: null != d && d.length > 0 }),
            [n, l, s, d],
        ),
        { streamed: S, lastStreamedMessage: E, showsClosingMessage: I, closingContent: T } = C,
        P = (w ? k : void 0) ?? C.attachmentsHost,
        M = I && !w,
        _ = null == d ? null : (0, a.jsx)(nD.A, { projectId: t, attachments: d }),
        R = null == _ ? null : (0, a.jsx)("div", { className: ly.MT, children: _ }),
        D = y
            ? (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: et.intl.string(ee.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: ly.ue,
        children: [
            S.length > 0 && !w
                ? (0, a.jsx)("ol", {
                      className: ly.dO,
                      children: S.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: ly.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: lP.PT,
                                          children: nk.A.parse(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === P && e === E ? R : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != s
                ? (0, a.jsx)(nQ, { projectId: t, proposal: s, version: o, onApprove: j })
                : M
                  ? (0, a.jsxs)("div", {
                        className: r()(ly.ky, lT.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: r()(lP.PT, ly.cW),
                                children: nk.A.parse(T, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === P ? R : null,
                            D,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: r()(ly.ky, lT.XR, { [lI.O]: null != f && "open" === h }),
                      children: (0, a.jsx)(ls, {
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
                      className: r()(ly.ky, lT.XR),
                      children: (0, a.jsx)(ld, { projectId: t, request: p }),
                  })
                : null,
            "standalone" !== P && ("closing" !== P || M) ? null : _,
            null != g ? (0, a.jsx)(n2, { projectId: t }) : null,
            null != u && u.length > 0 ? (0, a.jsx)(n_, { ideas: u, pickedIdeaIds: b, onPick: x }) : null,
            null != A ? (0, a.jsx)(n8, { proposal: A, onRestore: N }) : null,
            M ? null : D,
        ],
    });
}
var lD = n(864970),
    lL = n(146806),
    lF = n(475358),
    lO = n(81369),
    lz = n(922016),
    lG = n(980707),
    lB = n(477782),
    l$ = n(717400),
    lq = n(663341),
    lU = n(826745),
    lV = n(783977),
    lH = n(559647),
    lK = n(775602),
    lW = n(234320),
    lY = n(900797),
    lX = n(107698),
    lQ = n(704855),
    lZ = n(98115),
    lJ = n(856795),
    l0 = n(752065);
function l2(e) {
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
function l1(e) {
    let { settings: t, tiers: n, choices: l, disabled: s, onChange: o, placement: u, open: d, entered: c } = e,
        [m, f] = i.useState(!1),
        h = l2(m),
        p = en.ks.indexOf(t.tier),
        g = m ? lY.t : nB._,
        x = en.ks.map(lX.eQ),
        b = (0, lX.is)(t.tier),
        { text: j, phase: y } = (0, lJ.Q)(b);
    return (0, a.jsx)("div", {
        className: l0.qd,
        "data-placement": u ?? void 0,
        children: (0, a.jsxs)("div", {
            className: r()(l0.t$, { [l0.Zr]: d && c, [l0.GF]: !d }),
            role: "dialog",
            "aria-label": et.intl.string(ee.default["2NWMqY"]),
            children: [
                h.mounted
                    ? (0, a.jsx)("div", {
                          className: r()(l0.Nr, l0.uO, { [l0.Zr]: m && h.entered, [l0.GF]: !m }),
                          children: (0, a.jsx)(lZ.u1, { settings: t, tiers: n, choices: l, disabled: s, onChange: o }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${l0.Nr} ${l0.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: l0.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: l0.y6,
                                    "aria-expanded": m,
                                    "aria-label": et.intl.string(ee.default.IaLFoX),
                                    onClick: () => f((e) => !e),
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: et.intl.string(ee.default.GDs9Vq),
                                        }),
                                        (0, a.jsx)(g, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: l0.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: r()(l0.Z, { [l0.xQ]: "exit" === y, [l0.lm]: "enter" === y }),
                                    children: j,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: l0.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: l0.Nb,
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: et.intl.string(ee.default["5DOL2g"]),
                                        }),
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: et.intl.string(ee.default.OJIfkn),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(lQ.A, {
                                    activeIndex: p,
                                    stops: x,
                                    ariaLabel: et.intl.string(ee.default.GDs9Vq),
                                    disabled: s,
                                    onSelect: function (e) {
                                        let n = en.ks[e];
                                        null != n && n !== t.tier && o((0, lX.zy)((0, lX.gc)(t, n)));
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
function l6(e) {
    let { settings: t, tiers: n, choices: l, disabled: s, onChange: r, className: o, icon: u } = e,
        d = i.useRef(null),
        [c, m] = (0, lZ.kn)(t, r),
        [f, h] = i.useState(!1),
        { mounted: p, entered: g } = l2(f);
    return (0, a.jsx)(lz.Y, {
        targetElementRef: d,
        position: "top",
        align: "right",
        shouldShow: p,
        onRequestClose: () => h(!1),
        animation: lz.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(l1, {
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
                text: et.intl.string(ee.default.GoSNDN),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(y.D, {
                    innerRef: d,
                    className: o ?? l0.hZ,
                    "aria-label": et.intl.string(ee.default.GoSNDN),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(lV.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var l9 = n(285796),
    l3 = n(590380),
    l4 = n(298668);
let l7 = en.Is;
function l5(e, t, n, l) {
    let a = nm(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: nu++ }, upload: n };
        });
        for (let { draft: n, upload: a } of (nf(e, t, [
            ...nm(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            a?.().then(
                (l) => {
                    "errorText" in l
                        ? nh(e, t, n.localId, { status: "error", errorText: l.errorText })
                        : nh(e, t, n.localId, { status: "ready", ref: l })
                          ? setTimeout(
                                () =>
                                    nh(e, t, n.localId, {
                                        status: "error",
                                        errorText: et.intl.string(ee.default.HL9CT6),
                                    }),
                                en.$f - 3e5,
                            )
                          : np(e, l.id);
                },
                (l) => {
                    (console.error("[vibegrations] attachment upload failed", l),
                        nh(e, t, n.localId, { status: "error", errorText: et.intl.string(ee.default.GwEHvn) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (a++ >= l7)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: et.intl.formatToPlainString(ee.default.DlX57a, { count: l7 }),
                    },
                };
            if (!(0, en.x5)(e.size, t))
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: et.intl.formatToPlainString(ee.default.cI7t94, { size: (0, en.ZJ)((0, en.yr)(t)) }),
                    },
                };
            let i = en.Wb.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: i }, upload: () => l(e) };
        }),
    );
}
function l8(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        a = nd.useState((e) => nc(e, t, n)),
        s = i.useCallback((e) => l5(t, n, e, l), [t, n, l]),
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
                null != (a = (l = nm(t, n)).find((t) => t.localId === e)) &&
                    (ng(t, a),
                    nf(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => nv(t, n), [t, n]);
    return {
        drafts: a,
        addFiles: s,
        pasteFiles: r,
        removeDraft: o,
        settled: a.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function ae(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(l3.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(A.y, { type: A.t.SPINNING_CIRCLE_SIMPLE, className: l4.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: l4.o1,
                onClick: () => n(t.localId),
                "aria-label": et.intl.string(ee.default["3HWvgk"]),
                children: (0, a.jsx)(l9.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var at = n(789438);
let an = "text-md/normal",
    al = null;
function aa(e) {
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
                frontFrom: 1e3 * (0, lL._R)(m),
                frontTo: 1e3 * (0, lL._R)(f),
                backFrom: 1e3 * (0, lL.T)(m),
                backTo: 1e3 * (0, lL.T)(f),
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
        E = (0, c.bG)([lK.Ay], () => lK.Ay.useReducedMotion),
        I = t === et.intl.string(ee.default.Jj8Ftb),
        T = s === t && I;
    function P(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: r()(at.VT, { [at.qk]: l }),
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
            children: (0, a.jsx)(lF.e, { shortcut: "tab", className: at.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(lD.o, {
                text: t,
                variant: an,
                delay: null,
                duration: 1e3,
                trailingWidth: p,
                className: r()(at.xM, { [at.s2]: l }),
                onStart: N,
                onComplete: () => o(t),
            }),
            P(at.IS, n || (!E && "out" === w), u),
            (0, a.jsx)("span", {
                ref: d,
                className: at.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: an, tag: "span", children: t }),
            }),
            T
                ? (0, a.jsxs)("span", {
                      className: at.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: an, tag: "span", className: at.xM, children: t }),
                          P(at.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
function ai(e) {
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
        [j, y] = i.useState(() => ni.getDraft(t)),
        A = i.useCallback(
            (e) => {
                ((0, el.I$)(t, e), y(e));
            },
            [t],
        ),
        N = "" !== j.trim();
    i.useEffect(() => x?.(N), [N, x]);
    let [C, S] = i.useState(t);
    C !== t && (S(t), y(ni.getDraft(t)));
    let E = (0, c.bG)([lK.Ay], () => lK.Ay.isSubmitButtonEnabled),
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
        } = l8({ projectId: t, surface: "chat", onUploadFile: d }),
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
                null == al && (al = document.createElement("canvas").getContext("2d"));
                let s = al;
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
    (0, lW.Vo)({
        event: eG.jej.GLOBAL_CLIPBOARD_PASTE,
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
        [J, en] = i.useState(!1);
    i.useEffect(() => {
        if (0 === j.length) return void en(!1);
        let e = Y.current?.querySelector("textarea");
        if (null != e) {
            let t = ao(e);
            null != t && Z(t);
        }
        en(!0);
        let t = setTimeout(() => en(!1), as);
        return () => clearTimeout(t);
    }, [j]);
    let ea = i.useMemo(() => ({ "--custom-glow-x": `${Q}px` }), [Q]),
        ei = J ? ` ${at.EB}` : "",
        es = r
            ? et.intl.string(ee.default.pGFXZ0)
            : l
              ? et.intl.string(ee.default.JeM47J)
              : n
                ? g
                    ? et.intl.string(ee.default.Bs7bUv)
                    : p
                      ? et.intl.string(ee.default.M3ovXY)
                      : et.intl.string(s ? ee.default["67PpcP"] : ee.default.ahRdoJ)
                : et.intl.string(ee.default.nm4w9P),
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
        className: at.DA,
        children: [
            M.length > 0
                ? (0, a.jsx)("div", {
                      className: at.lN,
                      children: M.map((e) => (0, a.jsx)(ae, { draft: e, onRemove: D }, e.localId)),
                  })
                : null,
            (0, a.jsx)("span", { className: `${at.wg} ${at.LP}${ei}`, style: ea, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${at.wg} ${at.L3}${ei}`, style: ea, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: at.VA,
                ref: Y,
                children: [
                    (0, a.jsx)("input", {
                        ref: P,
                        type: "file",
                        multiple: !0,
                        onChange: W,
                        className: at.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    null == f
                        ? (0, a.jsx)(w.m, {
                              text: et.intl.string(ee.default.d6Rqlu),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  ref: X,
                                  type: "button",
                                  className: `${at.Y0} ${at.nu}`,
                                  disabled: !n,
                                  onClick: () => P.current?.click(),
                                  "aria-label": et.intl.string(ee.default.d6Rqlu),
                                  children: (0, a.jsx)(lO.H, {
                                      size: "refresh_sm",
                                      color: "currentColor",
                                      className: at.Qu,
                                  }),
                              }),
                          })
                        : (0, a.jsx)(lz.Y, {
                              targetElementRef: X,
                              position: "top",
                              align: "left",
                              animation: lz.Y.Animation.NONE,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, a.jsx)(lG.W, {
                                      "data-menu-migrated": !0,
                                      navId: "vibegrations-composer-attach",
                                      "aria-label": et.intl.string(et.t.d56gCa),
                                      onClose: t,
                                      onSelect: t,
                                      children: (0, a.jsxs)(lB.rX, {
                                          children: [
                                              (0, a.jsx)(lB.Dr, {
                                                  id: "upload-file",
                                                  label: et.intl.string(et.t["d3+iYs"]),
                                                  iconLeft: lO.H,
                                                  leadingAccessory: { type: "icon", icon: lO.H },
                                                  action: () => P.current?.click(),
                                              }),
                                              null != f
                                                  ? (0, a.jsx)(lB.Dr, {
                                                        id: "import-project",
                                                        label: et.intl.string(ee.default.edKajy),
                                                        iconLeft: l$.q,
                                                        leadingAccessory: { type: "icon", icon: l$.q },
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
                                      className: `${at.Y0} ${at.nu}`,
                                      disabled: !n,
                                      "aria-label": et.intl.string(et.t.d56gCa),
                                      "aria-haspopup": "menu",
                                      "aria-expanded": l,
                                      children: (0, a.jsx)(lq.PlusLargeIcon, {
                                          size: "refresh_sm",
                                          color: "currentColor",
                                          className: at.Qu,
                                      }),
                                  });
                              },
                          }),
                    ef
                        ? (0, a.jsx)("div", {
                              ref: eu,
                              className: at.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(aa, { text: em, offering: ec && null == G, typed: null != G }),
                          })
                        : null,
                    (0, a.jsx)(lU.y, {
                        value: j,
                        onChange: (e) => A(e.currentTarget.value),
                        onKeyDown: H,
                        onPaste: K,
                        placeholder: ef ? "" : es,
                        disabled: !n,
                        "aria-label": et.intl.string(ee.default.OPr66w),
                        "aria-describedby": ef ? ed : void 0,
                        rows: 1,
                        className: at.jp,
                    }),
                    ef ? (0, a.jsx)(k.A, { id: ed, children: es }) : null,
                    (0, a.jsx)("div", {
                        className: at.Sz,
                        children:
                            s && null != u
                                ? (0, a.jsx)(w.m, {
                                      text: et.intl.string(ee.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${at.Y0} ${at.$E}`,
                                          disabled: I,
                                          onClick: U,
                                          "aria-label": et.intl.string(ee.default.KdgI4k),
                                          children: (0, a.jsx)(nw.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : b?.tierSettings != null && null != v
                                  ? (0, a.jsx)(l6, {
                                        settings: b.tierSettings,
                                        tiers: b.tiers,
                                        choices: b.choices,
                                        disabled: !n,
                                        onChange: v,
                                        className: `${at.Y0} ${at.$E}`,
                                        icon: (0, a.jsx)(lV.R, {
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
                              className: at.fF,
                              children: [
                                  (0, a.jsx)("div", { className: at.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: at.rt,
                                      disabled: !z,
                                      "aria-label": et.intl.string(ee.default["22GHMt"]),
                                      children: (0, a.jsx)(lH.SendMessageIcon, {
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
let as = 1500,
    ar = [
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
function ao(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = ao.mirror;
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
                (ao.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of ar) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let a = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + a - e.scrollLeft);
}
ao.mirror = null;
var au = n(335385);
let ad = [6e4, 18e4, 6e5],
    ac = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: ad,
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
                    (0, eA.BL)(t) &&
                    !(null != n.publishCta && nJ(l))
                );
            },
        },
    ];
function am(e, t) {
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
let af = new Map();
var ah = n(320095),
    ap = n(963852),
    ag = n(521981),
    ax = n(763754),
    ab = n(491182),
    av = n(438729),
    aj = n(622868),
    ay = n(448368),
    aw = n(837528),
    ak = n(439762),
    aA = n(715628),
    aN = n(752636),
    aC = n(9842),
    aS = n(589022),
    aE = n(95701),
    aI = n(994500),
    aT = n(967198);
let aP = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function aM(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function a_(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function aR(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let a = a_(e, t),
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
    if (aM(a) && aM(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && aM(a_(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function aD(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([lK.Ay], () => lK.Ay.useReducedMotion),
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
                      for (; i > 0 && aR(t, i);) i--;
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
                                    for (; l > t + 1 && n - l < 12 && aP.has(e.charAt(l - 1));) l--;
                                    return aP.has(e.charAt(l - 1)) ? n : l;
                                })(t, a, Math.min(t.length, a + s));
                                let o = r;
                                for (; o < t.length && o - r < 32 && aR(t, o);) o++;
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
var aL = n(7584),
    aF = n(565645),
    aO = n(842766);
function az(e) {
    let { emoji: t, label: n } = e;
    return (0, a.jsx)("div", {
        className: aO.H,
        children: (0, a.jsx)(aF.A, { emojiName: t, alt: n, size: "reaction" }),
    });
}
var aG = n(27989);
function aB(e) {
    let t = i.useId(),
        n = "custom" === e.size ? { width: e.width, height: e.height } : (0, aG.J)(e.size ?? "md");
    return (0, a.jsxs)("svg", {
        width: n?.width ?? 24,
        height: n?.height ?? 24,
        viewBox: "0 0 24 24",
        fill: "none",
        className: r()(e.colorClass, e.className),
        style: e.style,
        "aria-hidden": !0,
        children: [
            (0, a.jsx)("clipPath", { id: t, children: (0, a.jsx)("rect", { width: "24", height: "24", rx: "8" }) }),
            (0, a.jsx)("g", {
                clipPath: `url(#${t})`,
                children: (0, a.jsx)("path", {
                    d: "M20.6996 10.7515L15.1195 12.6108C15.1195 12.6108 13.9587 12.9065 13.4323 13.4325C12.9055 13.959 12.6105 15.1198 12.6105 15.1198L10.7513 20.6999C10.3493 21.9063 8.6428 21.906 8.24046 20.6995L2.84448 4.51832C2.49948 3.48376 3.48352 2.49972 4.51808 2.84472L20.6992 8.2407C21.9057 8.64305 21.906 10.3495 20.6996 10.7515Z",
                    fill: "string" == typeof e.color ? e.color : "currentColor",
                }),
            }),
        ],
    });
}
var a$ = n(365199),
    aq = n(194085),
    aU = n(734495),
    aV = n(441136);
function aH(e) {
    let { message: t, onClose: n } = e,
        l = (0, aU.A)(t);
    return (0, a.jsx)(lG.W, {
        navId: "vibegrations-message-actions",
        "aria-label": et.intl.string(et.t.Lv7LxN),
        onClose: n,
        onSelect: n,
        children: (0, a.jsx)(lB.rX, { children: l }),
    });
}
function aK(e) {
    let { groupStart: t, renderMenu: n } = e,
        [l, s] = i.useState(!1),
        o = i.useRef(null),
        u = i.useCallback(() => s((e) => !e), []),
        d = i.useCallback(() => s(!1), []);
    return (0, a.jsx)("div", {
        className: r()(aV.QE, { [aV.Rn]: t, [aV.vg]: l }),
        children: (0, a.jsx)(aq.Ay, {
            children: (0, a.jsx)(lz.Y, {
                targetElementRef: o,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return n(t);
                },
                shouldShow: l,
                onRequestClose: d,
                position: "left",
                align: "top",
                animation: lz.Y.Animation.NONE,
                children: (e, t) => {
                    let { onClick: n, ...l } = e,
                        { isShown: i } = t;
                    return (0, a.jsx)(aq.qv, {
                        ref: o,
                        label: et.intl.string(et.t["UKOtz+"]),
                        icon: a$.MoreHorizontalIcon,
                        selected: i,
                        onClick: u,
                        ...l,
                    });
                },
            }),
        }),
    });
}
function aW(e) {
    let { message: t, groupStart: n } = e,
        l = i.useCallback((e) => (0, a.jsx)(aH, { message: t, onClose: e }), [t]);
    return null == (0, aU.A)(t) ? null : (0, a.jsx)(aK, { groupStart: n, renderMenu: l });
}
let aY = (0, aE.createChannelRecord)({ id: "vibegrations-builder", type: eG.rbe.DM }),
    aX = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function aQ(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: r()(aV.Yq, { [aV.x1]: t }), children: e });
}
function aZ(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function aJ(e, t, n) {
    let { content: l } = (0, ak.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        s = i.useMemo(() => ({ message: e, channel: aY, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(av.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, aA.A)(s, l);
}
function a0(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        s = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        r = (0, aw.m)(e, aY, t.usernameProfile, l),
        o = (0, aw.Jo)(t.avatarProfile, l),
        u = (0, c.bG)([aT.A], () => aT.A.getGuildId()),
        d = (0, c.bG)([ew.default], () => ew.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = ew.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(aS.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
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
function a2(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: s } = e,
        r = i.useMemo(() => {
            let e = "" !== n.content ? (0, ag.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: aV.GV,
                              children: [
                                  (0, a.jsx)(aB, { className: aV.Rj, size: "custom", width: 14, height: 14 }),
                                  l,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [n, l]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: u } = (0, c.cf)(
            [aI.A],
            () => ({
                isReplyAuthorBlocked: aI.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: aI.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, ax.X4)(n),
        m = (0, ax.X4)(t),
        f = a0(n);
    return (0, a.jsx)(ay.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: aY,
        referencedMessage: { state: aC.a.LOADED, message: n },
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
function a1(e) {
    let { message: t, author: n } = e,
        l = a0(t);
    return (0, a.jsx)(aj.Ay, {
        message: t,
        channel: aY,
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
function a6(e) {
    let { content: t, createdAt: n, userId: l, accessories: s, agentReaction: r, groupStart: o } = e;
    i.useEffect(() => eI(l), [l]);
    let u = (0, c.bG)(
            [ew.default],
            () => eE(l, null != l ? ew.default.getUser(l) : null, ew.default.getCurrentUser()),
            [l],
        ),
        d = i.useMemo(() => (0, ax.FT)(u, null), [u]),
        m = i.useMemo(() => tt(t), [t]),
        f = m?.body ?? t,
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, ap.Ay)({ channelId: aY.id, content: f, author: u });
            return (0, ah.rh)({ ...e, timestamp: aZ(n, e.timestamp), state: eG.cmJ.SENT });
        }, [f, u, n]),
        p = (function (e) {
            if (null == e || "" === e) return null;
            let t = aL.Ay.convertSurrogateToName(e, !1);
            return "" === t ? null : et.intl.formatToPlainString(ee.default.DrSoFn, { emojiName: t });
        })(r);
    return null == h
        ? null
        : (0, a.jsx)(a9, {
              message: h,
              author: d,
              content: f,
              selected: m?.label,
              accessories:
                  null != r && null != p
                      ? (0, a.jsxs)(a.Fragment, { children: [s, (0, a.jsx)(az, { emoji: r, label: p })] })
                      : s,
              groupStart: o,
          });
}
function a9(e) {
    let { message: t, author: n, content: l, selected: i, accessories: s, groupStart: r = !0 } = e,
        o = aJ(t, l);
    return (0, a.jsx)(ab.A, {
        className: aV.yE,
        author: n,
        childrenHeader: r ? (0, a.jsx)(a1, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == i
                ? o
                : (0, a.jsxs)("div", {
                      className: aV.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: aV.GV,
                              children: [
                                  (0, a.jsx)(aB, { className: aV.Rj, size: "custom", width: 16, height: 16 }),
                                  i,
                              ],
                          }),
                          (0, a.jsx)("span", { className: aV.WO, children: o }),
                      ],
                  }),
        childrenAccessories: aQ(s, "" !== l),
        childrenButtons: (0, a.jsx)(aW, { message: t, groupStart: r }),
    });
}
function a3(e) {
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
        { text: m, revealing: f } = aD(t, { streaming: u }),
        h = i.useMemo(() => (0, ax.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = s?.userId,
        x = (0, c.bG)(
            [ew.default],
            () => eE(g, null != g ? ew.default.getUser(g) : null, ew.default.getCurrentUser()),
            [g],
        ),
        b = i.useMemo(() => (null == s ? null : tt(s.content)), [s]),
        v = i.useMemo(() => {
            if (null == s || null == x) return null;
            let e = (0, ap.Ay)({ channelId: aY.id, content: b?.body ?? s.content, author: x });
            return (0, ah.rh)({ ...e, id: s.id, timestamp: aZ(s.createdAt, e.timestamp), state: eG.cmJ.SENT });
        }, [s, b, x]),
        y = i.useMemo(() => (null == s ? void 0 : { channel_id: aY.id, message_id: s.id }), [s]),
        w = i.useMemo(() => {
            let e = (0, ap.Ay)({ channelId: aY.id, content: m, author: aX });
            return (0, ah.rh)({
                ...e,
                timestamp: aZ(n, e.timestamp),
                state: eG.cmJ.SENT,
                ...(null != y ? { type: eG.lAJ.REPLY, message_reference: y } : {}),
            });
        }, [m, n, y]),
        k = aJ(w, m, aV.OS);
    return (0, a.jsxs)("div", {
        className: aV.$4,
        "data-replying": null != v ? "true" : void 0,
        "data-vibegrations-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(ab.A, {
                className: aV.yE,
                author: p,
                childrenRepliedMessage:
                    null == v
                        ? null
                        : (0, a.jsx)(a2, { baseMessage: w, referenced: v, selected: b?.label, onJumpToReplied: r }),
                childrenHeader: (0, aN.A)({ message: w, channel: aY, author: p, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: k,
                childrenAccessories: aQ(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            o
                ? (0, a.jsx)("span", {
                      className: aV.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(j.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
let a4 = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i;
function a7(e) {
    let { projectId: t, notice: n } = e;
    return "outdated" === n ? (0, a.jsx)(a8, { projectId: t }) : (0, a.jsx)(a5, { projectId: t, notice: n });
}
function a5(e) {
    let { projectId: t, notice: n } = e,
        l = i.useContext(eV),
        s = (0, c.bG)([ed.Ay, eM.A], () => {
            let e = ed.Ay.getProject(t);
            return null == e ? "" : (eM.A.getApplication(e.application_id)?.name ?? e.name);
        }),
        r = i.useCallback(() => {
            null != l &&
                (function (e, t) {
                    let n = eK(e, t.guildId);
                    if (null == n) return;
                    let l = eq({
                        ...n.input,
                        status: null == n.input.status ? null : { ...n.input.status, state: "up_to_date" },
                    })?.destination;
                    null != l && eW(n, l, t.platform).catch(() => {});
                })(t, l);
        }, [l, t]);
    return (0, a.jsx)(v.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: et.intl.format(
            (function (e) {
                if (!e.update) return ee.default.ogEl54;
                switch (e.surface) {
                    case "bot":
                        return ee.default.ncJb2S;
                    case "widget":
                        return ee.default.gSpqdm;
                    case "automod":
                        return ee.default.M3cBMT;
                    case "activity":
                    case null:
                        return ee.default.tg9fgb;
                }
            })(n),
            { name: s, onOpen: r },
        ),
    });
}
function a8(e) {
    let { projectId: t } = e,
        n = e6(t);
    return null == n
        ? null
        : (0, a.jsx)(v.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: et.intl.format(ee.default.AcWS6c, {
                  action: n.label,
                  onUpdate: () => {
                      (af.get(t)?.forEach((e) => e()), n.run("outdated_notice"));
                  },
              }),
          });
}
var ie = n(556616);
function it(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function il(e) {
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
            it(e, t);
            let n = new ResizeObserver(() => it(e, t));
            return (n.observe(t), () => n.disconnect());
        }, [s, o]),
        (0, a.jsx)("div", {
            ref: u,
            className: r()(ie.NI, { [ie.Jg]: null == s }),
            "aria-live": "polite",
            children: (0, a.jsx)("div", {
                className: ie.t$,
                children: l.map((e) =>
                    (0, a.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : d,
                            "aria-hidden": e.leaving || void 0,
                            className: r()(ie.qd, e.leaving ? ie.cu : ie.We),
                            children: n(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var ia = n(744898);
function ii(e) {
    let { onSelect: t, onClose: n = F.Z_, onRestoreVersion: l } = e;
    return (0, a.jsx)(lG.W, {
        "data-menu-migrated": !0,
        navId: "vibegrations-turn-context",
        onClose: n,
        "aria-label": et.intl.string(et.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsx)(lB.rX, {
            children: (0, a.jsx)(lB.Dr, {
                id: "restore-version",
                label: et.intl.string(ee.default.eSDVDt),
                icon: ia.e,
                action: l,
            }),
        }),
    });
}
var is = n(375068);
function ir(e) {
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
        w = (0, c.bG)([ed.Ay], () => ed.Ay.getPublishStatus(t)?.state ?? null),
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
                                        let t = (0, t9.lt)(e.steps);
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
                    let e = !(0, eA.BL)(t),
                        a = nC({
                            steps: t.steps,
                            content: t.content,
                            hasProposal: null != t.proposal,
                            hasAttachments: (t.attachments?.length ?? 0) > 0,
                        }),
                        i = a.lastStreamedMessage?.key,
                        s = (0, t9.C6)(t.steps, { turnActive: e }),
                        { lastWork: r, open: o } = (0, t9.CT)(s, { turnActive: e }),
                        u = s.at(-1)?.index,
                        d = !1;
                    for (let c of s) {
                        if (null != c.prose && a4.test(c.prose.content)) d = !0;
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
                                    turnActive: t3(t),
                                    checklistSuperseded: c.hasTodos && n.has(t.render_id),
                                },
                                { actor: null, boundary: void 0 },
                            );
                    }
                    let c = a4.test(t.content ?? "");
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
            let a = e6(e),
                s = (0, au.A)(),
                r = (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("publish_notice" !== n.kind) {
                            if ("user" === n.role) return null;
                            if ((0, eA.BL)(n)) return n;
                            if (!(0, eA.B0)(e, t)) break;
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
                [d, c] = i.useState(() => am(u, Date.now())),
                m = (function (e, t, n) {
                    if (e.projectId !== t.projectId) return am(t, n());
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
                            let t = Math.min(e.outdatedBackoff + 1, ad.length - 1);
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
                    ac.map((e) => ({
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
                    let n = af.get(e) ?? new Set();
                    return (
                        af.set(e, n),
                        n.add(t),
                        () => {
                            (n.delete(t), 0 === n.size && af.delete(e));
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
                        return (0, a.jsx)(a3, {
                            groupStart: !1,
                            content: "",
                            accessories: (0, a.jsx)(a7, { projectId: t, notice: "outdated" }),
                        });
                    case "ideas":
                        return (0, a.jsx)("div", {
                            className: is.u$,
                            children: (0, a.jsx)(a3, {
                                content: et.intl.string(ee.default.tG5PBo),
                                accessories: (0, a.jsx)(nR, { onAsk: u }),
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
                            if (!(0, eA.BL)(n) || "plan_implemented" === n.kind) return null;
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
                : (0, eA.BL)(N)
                  ? N.awaitingUser
                  : null) ?? void 0,
        P = (0, c.bG)([J.Ay], () => J.Ay.getSettings(t)?.secrets, [t]),
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
                                        t === et.intl.string(ee.default.lM98yZ) ||
                                        t === et.intl.string(ee.default.pu8e3p)
                                    );
                                })(r);
                            continue;
                        }
                        let o = r.secretRequest?.fields ?? [];
                        if (0 === o.length || !(0, eA.BL)(r)) continue;
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
                className: r()(is.x7, is.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: is.Ub, children: (0, a.jsx)(A.y, {}) }),
            });
        let e = "unavailable" === l ? ee.default.s4oxNv : ee.default.khZEUv;
        return (0, a.jsx)("ol", {
            ref: s,
            className: is.x7,
            children: (0, a.jsx)(io, { role: "assistant", children: (0, a.jsx)(a3, { content: et.intl.string(e) }) }),
        });
    }
    return (0, a.jsxs)("ol", {
        ref: g,
        className: is.x7,
        children: [
            k.map((e) => {
                let l = e.message;
                switch (e.kind) {
                    case "user": {
                        let n = null != l.attachments && l.attachments.length > 0 ? l.attachments : null;
                        return (0, a.jsx)(
                            io,
                            {
                                role: "user",
                                anchorId: l.id,
                                highlighted: x === l.id,
                                continuation: !e.groupStart,
                                children: (0, a.jsx)(a6, {
                                    groupStart: e.groupStart,
                                    content: l.content,
                                    createdAt: l.created_at,
                                    userId: l.user_id,
                                    agentReaction: l.agentReaction,
                                    accessories:
                                        null != n ? (0, a.jsx)(nD.A, { projectId: t, attachments: n }) : void 0,
                                }),
                            },
                            e.key,
                        );
                    }
                    case "prose":
                        return (0, a.jsx)(
                            io,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, a.jsx)(a3, {
                                    groupStart: e.groupStart,
                                    content: e.content,
                                    streaming: e.streaming,
                                    createdAt: l.created_at,
                                    accessories:
                                        e.hostsAttachments && null != l.attachments
                                            ? (0, a.jsx)(nD.A, { projectId: t, attachments: l.attachments })
                                            : void 0,
                                }),
                            },
                            e.key,
                        );
                    case "activity":
                        return (0, a.jsx)(
                            io,
                            {
                                role: "assistant",
                                children: (0, a.jsx)(l_, {
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
                            io,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                children: (0, a.jsx)(a3, {
                                    groupStart: e.groupStart,
                                    content: null == l.publishNotice ? l.content : "",
                                    createdAt: l.created_at,
                                    accessories:
                                        null == l.publishNotice
                                            ? void 0
                                            : (0, a.jsx)(a7, { projectId: t, notice: l.publishNotice }),
                                }),
                            },
                            e.key,
                        );
                    case "interrupted":
                        return (0, a.jsx)(
                            io,
                            {
                                role: "assistant",
                                children: (0, a.jsx)(l_, { projectId: t, interrupted: !0, steps: l.steps }),
                            },
                            e.key,
                        );
                    case "legacyTodos":
                        return (0, a.jsx)(
                            io,
                            {
                                role: "assistant",
                                children: (0, a.jsx)(l_, {
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
                                          n4(() => h(i));
                                      }
                                    : void 0,
                            r = l.restoreProposal;
                        return (0, a.jsx)(
                            io,
                            {
                                role: "assistant",
                                continuation: !e.groupStart,
                                onContextMenu:
                                    null != s
                                        ? (e) => {
                                              (0, F.jA)(e, (e) => (0, a.jsx)(ii, { ...e, onRestoreVersion: s }));
                                          }
                                        : void 0,
                                children: (0, a.jsx)(a3, {
                                    groupStart: e.groupStart,
                                    buttons:
                                        null != s
                                            ? (0, a.jsx)(aK, {
                                                  groupStart: e.groupStart,
                                                  renderMenu: (e) =>
                                                      (0, a.jsx)(ii, { onClose: e, onSelect: e, onRestoreVersion: s }),
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
                                    accessories: (0, a.jsx)(lR, {
                                        projectId: t,
                                        steps: l.steps,
                                        content: "",
                                        proposal: l.proposal,
                                        planVersion: I.get(l.render_id),
                                        interrupted: !0 === l.interrupted,
                                        hoistedProse: !0,
                                        hoistedAttachmentsHost: e.attachmentsHost,
                                        sideReply: e.sideReply,
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
                                                          void n4(() => h(e))
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
                ? (0, a.jsx)(io, {
                      role: "assistant",
                      continuation: !0,
                      children: (0, a.jsx)(a3, {
                          groupStart: !1,
                          content: "",
                          accessories: (0, a.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: et.intl.string(ee.default["1LEnd8"]),
                          }),
                      }),
                  })
                : null,
            (0, a.jsx)("li", {
                role: "none",
                className: is.q3,
                children: (0, a.jsx)(il, { reminder: C, renderReminder: S }),
            }),
        ],
    });
}
function io(e) {
    let { role: t, children: n, anchorId: l, highlighted: i = !1, continuation: s = !1, onContextMenu: o } = e;
    return (0, a.jsx)("li", {
        onContextMenu: o,
        "data-role": t,
        "data-vibegrations-message": l,
        className: r()(is.xk, { [is.Qo]: i, [is.q3]: s }),
        children: n,
    });
}
let iu = [ee.default.krnkPq, ee.default["8oUm/J"], ee.default["6Ea4dF"], ee.default.fQx5qC, ee.default["phXeK/"]];
function id(e) {
    return iu.some((t) => et.intl.string(t) === e);
}
function ic(e) {
    switch (e) {
        case "connecting":
            return et.intl.string(ee.default.W7oyuf);
        case "closed":
            return et.intl.string(ee.default["yBmS+I"]);
        case "failed":
            return et.intl.string(ee.default.eE60xI);
    }
}
var im = n(823376),
    ih = n(495557);
function ip(e) {
    let { activity: t, id: n } = e,
        { text: l, revealing: s } = aD(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [l]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: ih.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(t1.Ch, {
                ref: o,
                className: ih.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: r()(lP.PT, ih.bb),
                    "data-vibegrations-revealing": s ? "true" : void 0,
                    children: nk.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var ig = n(921461);
function ix(e) {
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
                ? ee.default.ivvYHP
                : l
                  ? ee.default.aFffp2
                  : a
                    ? iu[0]
                    : n
                      ? ee.default["0vH/5G"]
                      : s
                        ? ee.default.Ly7F7x
                        : ee.default.QDGuNS;
        })({ activity: t, compacting: n, restoring: l, recalling: s, controlling: o }),
        g = et.intl.string(p),
        x = p === iu["0"],
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
        ((A.current = x), !x && id(k.current) && v(j.current));
    }, [x]),
        i.useEffect(() => {
            let e = 0,
                t = 0;
            function n() {
                if (A.current) {
                    var e;
                    ((N.current = id(k.current) ? N.current + 1 : 0),
                        v(((e = N.current), et.intl.string(iu[e % iu.length]))));
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
    return (0, a.jsx)(lz.Y, {
        targetElementRef: c,
        position: "top",
        align: "left",
        shouldShow: E,
        onRequestClose: T,
        renderPopout: () => (0, a.jsx)(ip, { id: m, activity: t }),
        children: () =>
            (0, a.jsxs)(y.D, {
                innerRef: c,
                className: r()(ig.hF, C && ig.Xd),
                "aria-label": et.intl.string(l ? ee.default.pGFXZ0 : x ? iu["0"] : ee.default.SzdX35),
                "aria-expanded": E,
                "aria-describedby": E ? m : void 0,
                "data-vibegrations-thinking-trigger": !0,
                "data-vibegrations-activity": et.intl.string(p),
                onClick: I,
                children: [
                    (0, a.jsx)("span", {
                        className: ig.bl,
                        children: (0, a.jsx)(im.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: ig.xu,
                        "aria-hidden": !!o || !!x || void 0,
                        children: (0, a.jsx)(lD.o, {
                            ref: w,
                            text: b,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            duration: 1e3,
                            delay: null,
                            className: ig.yE,
                        }),
                    }),
                ],
            }),
    });
}
let ib = { second: 1e3, minute: 6e4 };
function iv(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let a = ib[t];
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
var ij = n(979148);
function iy(e) {
    let { startedAt: t } = e,
        n = iv(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: "text-xs/medium",
        color: "text-muted",
        "aria-hidden": !0,
        className: ij.$,
        "data-vibegrations-turn-timer": !0,
        children: (0, nA.C7)(n),
    });
}
function iw(e) {
    let { startedAt: t } = e,
        n = iv(t, "minute");
    return (0, a.jsx)(k.A, { role: "timer", children: (0, nA.Us)(n) });
}
var ik = n(280894);
function iA(e) {
    return e.toLocaleString();
}
function iN(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: ik.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: ik.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [iA((0, en.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    iA(n.input_tokens),
                    " in \xb7 ",
                    iA(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${iA(n.cache_creation_input_tokens)} cache write \xb7 ${iA(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function iC(e) {
    let { project: t } = e,
        n = (0, en.wU)(t.compaction),
        l = (0, en.wU)(t.classifier),
        i = (0, en.wV)(t.orchestrator, t.codegen),
        s = (0, en.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: ik.si,
        role: "dialog",
        "aria-label": et.intl.string(ee.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: ik.Q$,
                children: (0, a.jsxs)("div", {
                    className: ik.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [iA((0, en.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(iN, { label: et.intl.string(ee.default.R9aduM), usage: i }),
            (0, a.jsx)(iN, { label: et.intl.string(ee.default.Tj6b30), usage: n }),
            (0, a.jsx)(iN, { label: et.intl.string(ee.default.vVUMwj), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: ik.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: et.intl.string(ee.default["kILb+R"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, en.sj)(s) ? "\u2014" : `${Math.round(100 * (0, en.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function iS(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(lz.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(iC, { project: t }),
        children: (e) =>
            (0, a.jsx)(y.D, {
                innerRef: n,
                className: ik.Y$,
                "aria-label": et.intl.string(ee.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(nL.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var iE = n(258216);
function iI(e) {
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
        f = (0, tm.o4)(n),
        [h, p] = i.useState(null),
        g = i.useCallback((e) => p(id(e) ? null : e), []),
        x =
            null == c
                ? null
                : ((t = (0, en.a7)(c.cost_usd)),
                  {
                      text: et.intl.formatToPlainString(ee.default["4PFO2p"], { runes: t.toLocaleString() }),
                      aria: et.intl.formatToPlainString(ee.default["7SZZvj"], { runes: t, turns: c.turns }),
                  }),
        b = l && null != s;
    return (0, a.jsxs)("div", {
        className: iE.jf,
        children: [
            (0, a.jsxs)("div", {
                className: iE.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: [
                    l || r || o || f
                        ? (0, a.jsx)(ix, {
                              activity: u,
                              compacting: d,
                              restoring: r,
                              recalling: o,
                              controlling: f,
                              spoken: h,
                              onSpokenChange: g,
                          })
                        : null,
                    b ? (0, a.jsx)(iy, { startedAt: s }) : null,
                ],
            }),
            b ? (0, a.jsx)(iw, { startedAt: s }) : null,
            null == c || null == x
                ? null
                : (0, a.jsxs)("span", {
                      className: iE.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": x.aria,
                              children: x.text,
                          }),
                          (0, a.jsx)(iS, { project: c }),
                      ],
                  }),
            "open" === m
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === m ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": et.intl.formatToPlainString(ee.default.eDDdhB, { status: ic(m) }),
                      "data-vibegrations-conn": !0,
                      "data-state": m,
                      className: iE.XF,
                      children: ic(m),
                  }),
        ],
    });
}
var iT = n(621466),
    iP = n(658675),
    iM = n(22231),
    i_ = n(408278),
    iR = n(123292);
function iD(e, t, n) {
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
var iL = n(424110);
function iF(e) {
    let { option: t, position: n, disabled: l, onPick: s, reachable: o = !0, selected: u } = e,
        d = i.useId(),
        c = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(y.D, {
        className: r()(iL.uK, { [iL.ue]: l, [iL.h4]: !0 === u }),
        onClick: l ? void 0 : () => s(t),
        "aria-label": et.intl.formatToPlainString(c ? ee.default.aL1BKQ : ee.default.k7lEgj, { answer: t.label }),
        "aria-describedby": m ? d : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != u
                ? (0, a.jsx)("span", { className: iL.dy, children: (0, a.jsx)(iP.P, { checked: u, disabled: l }) })
                : (0, a.jsx)("span", { className: iL.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: iL.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: iL.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: iL.ed,
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
                      className: iL.rM,
                      children: et.intl.string(ee.default.OXRWyV),
                  })
                : null,
        ],
    });
}
let iO = [];
function iz(e) {
    let { question: t, draft: n, selected: l, direction: i, disabled: s } = e,
        o = "" === n.trim() ? null : n,
        u = !0 === t.multi_select;
    return (0, a.jsxs)("div", {
        className: r()(iL.Ge, iL.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            u
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: iL.aK,
                      children: et.intl.string(ee.default.jt5JBA),
                  })
                : null,
            t.options.map((e, t) =>
                (0, a.jsx)(
                    iF,
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
                className: iL.Xy,
                children: [
                    (0, a.jsx)("span", {
                        className: iL.Gy,
                        "aria-hidden": !0,
                        children: (0, a.jsx)(iM.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == o ? null : (0, a.jsx)("span", { className: r()(iL.Pu, iL.es), children: o }),
                ],
            }),
        ],
    });
}
function iG(e) {
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
        D = Math.min(f, _ - 1),
        L = t.questions[D],
        [F, O] = i.useState({ id: L.id, expanded: !1 }),
        z = F.id === L.id && F.expanded,
        [G, B] = i.useState(null),
        $ = u[L.id] ?? "",
        q = !0 === L.multi_select,
        U = c[L.id] ?? iO,
        { text: V, phase: H } = (0, lJ.Q)(L.question),
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
    let Y = et.intl.string(z ? et.t.iTcuma : et.t.dcl9MQ),
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
    let en = i.useCallback(
            (e) => {
                if (M) return;
                let n = { ...s, [L.id]: e };
                o(n);
                let l = iD(t, n, D);
                null == l ? X(n) : Q(l, l < D ? "back" : "forward");
            },
            [s, t, M, D, L.id, X, Q],
        ),
        el = i.useCallback(() => {
            M || 0 === D || Q(D - 1, "back");
        }, [M, D, Q]),
        ea = D > 0 && !M,
        ei = i.useCallback(
            (e) => {
                (d((e) => ({ ...e, [L.id]: "" })), en({ kind: "option", optionId: e.id, text: e.label }));
            },
            [L.id, en],
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
                "" !== es.text && en(es);
                return;
            }
            let e = $.trim();
            "" !== e && en({ kind: "custom", text: e });
        }, [$, es, en]),
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
        ep = null == iD(t, null != ef ? { ...s, [L.id]: ef } : s, D),
        eg = i.useCallback(() => {
            null == ef || M || en(ef);
        }, [M, ef, en]),
        ex = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (!((0, iT.vq)(e.target, HTMLTextAreaElement) || (0, iT.vq)(e.target, HTMLInputElement)) &&
                        ("ArrowLeft" === e.key && ea
                            ? (e.preventDefault(), el())
                            : "ArrowRight" === e.key && eh && (e.preventDefault(), eg())));
            },
            [ea, eh, el, eg],
        );
    return (0, a.jsxs)("section", {
        className: r()(iL.$O, { [iL.fI]: eo && !ed, [iL.Oh]: ed }),
        role: "dialog",
        "aria-label": L.question,
        "data-vibegrations-clarification": t.id,
        "data-state": M ? "inert" : "open",
        "data-question-expanded": z ? "true" : void 0,
        "data-step": D,
        tabIndex: -1,
        onKeyDown: ex,
        children: [
            (0, a.jsxs)("div", {
                className: iL.rf,
                style: null == j ? void 0 : { height: j.heading + j.rows },
                "data-moving": A ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: S,
                        className: iL.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: I,
                                tag: "span",
                                id: `${L.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: z ? void 0 : 5,
                                className: r()(lo.TK, iL.R_, { [iL.TB]: "exit" === H, [iL.JU]: "enter" === H }),
                                children: V,
                            }),
                            W || z
                                ? (0, a.jsx)("div", {
                                      className: lo.Q7,
                                      children: (0, a.jsx)(w.m, {
                                          text: Y,
                                          children: (0, a.jsx)(i_.K, {
                                              icon: z ? lY.t : nG.a,
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
                                      className: r()(lo.gb, lo.Q7),
                                      onClick: em,
                                      "aria-label": et.intl.string(ee.default.fMdUNR),
                                      "data-vibegrations-clarification-close": !0,
                                      children: (0, a.jsx)(R.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: iL.Cg,
                        style: null == j ? void 0 : { insetBlockStart: j.heading },
                        children: (0, a.jsxs)("div", {
                            className: iL.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: T,
                                    className: iL.Ge,
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
                                                  className: iL.aK,
                                                  children: et.intl.string(ee.default.jt5JBA),
                                              })
                                            : null,
                                        L.options.map((e, t) =>
                                            (0, a.jsx)(
                                                iF,
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
                                                                          ((n = t[L.id] ?? iO),
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
                                            className: iL.Xy,
                                            children: [
                                                (0, a.jsx)("span", {
                                                    className: iL.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, a.jsx)(iM.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, a.jsx)(lU.y, {
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
                                                    placeholder: et.intl.string(ee.default.qifsdL),
                                                    "aria-label": et.intl.formatToPlainString(ee.default.XHESTL, {
                                                        question: L.question,
                                                    }),
                                                    disabled: M,
                                                    rows: 1,
                                                    className: iL.Pu,
                                                    "data-vibegrations-clarification-other": L.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == x
                                    ? null
                                    : (0, a.jsx)(
                                          iz,
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
                      className: lo.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children:
                                  _ > 1
                                      ? et.intl.formatToPlainString(ee.default["7bypa+"], { index: D + 1, total: _ })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: lo.zt,
                              children: [
                                  ea
                                      ? (0, a.jsx)(iR.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: et.intl.string(ee.default.yKdgqw),
                                            onClick: el,
                                            "data-vibegrations-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(N.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: et.intl.string(ep ? et.t.geKm7t : ee.default.S7Sa6j),
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
var iB = n(643278),
    i$ = n(191521),
    iq = n(405189);
function iU(e) {
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
              className: iq.qd,
              "data-placement": m,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: r()(iq.vK, { [iq.ho]: g && c, [iq.ET]: !c }),
                      children: [
                          null == d
                              ? (0, a.jsx)("ol", {
                                    className: r()(iq.Rk, ly.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(lc.A, {
                                        glyph: (0, a.jsx)(i$.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(y.D, {
                                    className: iq.pZ,
                                    onClick: d,
                                    "aria-label": et.intl.string(ee.default.tYjQFG),
                                    children: (0, a.jsx)("ol", {
                                        className: r()(iq.Rk, ly.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(lc.A, {
                                            glyph: (0, a.jsx)(i$.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          T
                              ? (0, a.jsx)(w.m, {
                                    text: et.intl.string(ee.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(y.D, {
                                        className: iq.BO,
                                        onClick: P,
                                        "aria-expanded": b,
                                        "aria-label": et.intl.string(ee.default.qCRC6c),
                                        children: (0, a.jsx)(iB.ClipboardListIcon, {
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
                            className: r()(iq.vB, { [iq.pg]: b && C, [iq.ui]: !b }),
                            children: (0, a.jsx)(lE, {
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
var iV = n(106430),
    iH = n(670455),
    iK = n(698638),
    iW = n(348800);
let iY = [
    et.intl.string(ee.default["E+Q26x"]),
    et.intl.string(ee.default["06/jqP"]),
    et.intl.string(ee.default["3gSfUa"]),
];
function iX(e) {
    var t;
    let { projectId: l, restoreState: s, onRestoreVersion: r } = e,
        o = (0, c.bG)([eA.Ay], () => eA.Ay.getMessages(l), [l]),
        u = (0, c.bG)([J.Ay], () => J.Ay.getConnState(l), [l]),
        d = (0, c.bG)([J.Ay], () => J.Ay.isChatStopped(l), [l]),
        m = (0, c.bG)([eA.Ay], () => eA.Ay.getProjectUsage(l), [l]),
        f = (0, c.bG)([eA.Ay], () => eA.Ay.getThinkingActivity(l), [l]),
        h = (0, c.bG)([eA.Ay], () => eA.Ay.isCompacting(l), [l]),
        p = (0, c.bG)([J.Ay], () => J.Ay.getModelSettings(l), [l]),
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
            (0, J.Hc)(l);
        }, [l]),
        (0, tf.v6)(l),
        i.useEffect(
            () => () =>
                (function (e) {
                    if ((0, e$.jb)(e)) return;
                    let t = (0, e$.hl)(e);
                    t < e$.qu ||
                        (0, e$.Xi)(e) ||
                        iV.A.possiblyShowFeedbackModal(iH.MW.VIBEGRATIONS, () => {
                            ((0, e$.AH)(e),
                                (0, la.openModalLazy)(async () => {
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
    let C = tc(l),
        S = i.useCallback(
            (e, t) => {
                (0, J.dv)(l, e, t);
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
                                  a = t.filter((e) => e3(e.comment)),
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
                      tr(l));
            },
            [C, S, l],
        ),
        I = i.useCallback(() => (0, J.fu)(l), [l]),
        T = i.useCallback((e) => nj(l, e.implementation_prompt), [l]),
        [P, M] = (function (e) {
            let [t, n] = i.useState(() => ns(e)),
                [l, a] = i.useState(e),
                s = l !== e,
                r = s ? ns(e) : t;
            return (s && (a(e), n(r)), [r, n]);
        })(l),
        _ = i.useCallback(() => S(et.intl.string(ee.default["3sTTBu"])), [S]),
        R = i.useCallback((e, t) => nj(l, e, { clarificationAnswers: t }), [l]),
        D = i.useCallback((e) => (0, J.XZ)(l, e), [l]),
        L = i.useCallback((e) => (0, J.vX)(l, e), [l]),
        F = i.useCallback((e) => l5(l, "chat", Array.from(e), L), [l, L]),
        O = i.useCallback(() => nj(l, et.intl.string(ee.default.Jj8Ftb)), [l]),
        z = s?.status === "restoring",
        G = "open" === u && !d && !z,
        B = o[o.length - 1],
        $ = null != B && "assistant" === B.role && null != B.proposal,
        [q, U] = i.useState(null),
        V = B?.clarification != null && B.clarification.id !== q ? B.clarification : null,
        H = i.useCallback(() => {
            null != V && U(V.id);
        }, [V]),
        K = (0, c.bG)([J.Ay], () => J.Ay.getSettings(l), [l]),
        [W, Y] = i.useState(null),
        X =
            null != B &&
            "assistant" === B.role &&
            null != B.settingsRequest &&
            (0, eA.BL)(B) &&
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
        en = null != Q,
        el = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, c.bG)([eA.Ay], () => eA.Ay.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, c.bG)([eA.Ay], () => eA.Ay.isHistoryUnavailable(l), [l]),
            connState: u,
        }),
        ea = "loading" === el && 0 === o.length,
        ei = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return iY[e % iY.length];
        }, [l]),
        es = $ ? et.intl.string(ee.default.Jj8Ftb) : "greeting" === el && 0 === o.length ? ei : null,
        er = i.useMemo(() => {
            for (let e = o.length - 1; e >= 0; e--) {
                let t = o[e];
                if ("assistant" === t.role && !(0, eA.BL)(t)) return t;
            }
        }, [o]),
        eo = null != er,
        eu =
            null != er
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = t4.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(er)
                : void 0,
        ed = $ && G ? O : void 0,
        ec = i.useCallback(() => nj(l, et.intl.string(ee.default.ga8too)), [l]),
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
    let eg = i.useMemo(() => (null != er ? (0, ny.b)(er.steps) : ""), [er]),
        ex = i.useMemo(() => (null != er ? ((0, t9.lt)(er.steps) ?? er.todos) : void 0), [er]),
        eb = er?.provisionalTodo,
        ev = null != er && t3(er),
        ej = i.useMemo(() => {
            var e;
            return null != er ? ((e = er.steps), lM((0, t9.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [er]);
    return (0, a.jsxs)("section", {
        ref: g,
        "data-vibegrations-chat": !0,
        className: iW.TE,
        children: [
            G
                ? (0, a.jsx)(t6.A, {
                      title: et.intl.string(ee.default.UazRD1),
                      description: et.intl.string(ee.default["O4r42+"]),
                      icons: iK.ir,
                      onDrop: F,
                  })
                : null,
            (0, a.jsx)(iU, {
                onJumpToActivity: k,
                line: eg,
                placement: eo && "top" === em ? "top" : null,
                todos: ex,
                todosLive: ev,
                provisionalTodo: eb,
                agents: ej,
            }),
            (0, a.jsxs)("div", {
                className: iW.JX,
                children: [
                    (0, a.jsx)(t1.Ch, {
                        ref: x,
                        onScroll: A,
                        scrollbarGutter: ea ? "both-edges" : "stable",
                        className: [iW.N$, y ? null : iW.hB, en ? iW.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(ir, {
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
                        className: iW.NJ,
                        children: (0, a.jsx)(iI, {
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
                              className: en ? `${iW.B5} ${iW.J9}` : iW.B5,
                              children: (0, a.jsx)(
                                  iG,
                                  { clarification: V, onSubmit: G ? R : void 0, onDismiss: H },
                                  V.id,
                              ),
                          }),
                    null == Q
                        ? null
                        : (0, a.jsx)("div", {
                              className: iW.B5,
                              children: (0, a.jsx)(ld, { projectId: l, request: Q, onDismiss: Z }, X?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: iW.Jx,
                children: [
                    (0, a.jsx)(iU, {
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
                              className: iW.g0,
                              "data-testid": "vibegrations-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: et.intl.formatToPlainString(ee.default.Lkx0Kk, {
                                          count: C.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: et.intl.string(ee.default.fh6kQv),
                                  }),
                                  (0, a.jsx)(N.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: et.intl.string(ee.default.B0YARo),
                                      onClick: () => tr(l),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(ai, {
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
var iQ = n(602853),
    iZ = n(517461),
    iJ = n(761929),
    i0 = n(927506);
function i2(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: s } = e,
        r = (0, iQ.r)(L.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, d] = (0, iZ.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = i.useState(u ?? 460),
        f = (0, t7.clamp)(c, 360, n);
    i.useLayoutEffect(() => {
        l(t ? f + r : 0);
    }, [f, t, r, l]);
    let h = (0, iJ.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: iJ.R.HORIZONTAL_LEFT,
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
        className: i0.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: i0.Di, onPointerDown: p }),
            (0, a.jsx)("div", { ref: o, className: i0.kL, style: { width: f }, children: s }),
        ],
    });
}
var i1 = n(624479),
    i6 = n(761508),
    i9 = n(540999),
    i3 = n(957565);
let i4 = [],
    i7 = new Map(),
    i5 = new Map(),
    i8 = new Map(),
    se = new Map(),
    st = new Map(),
    sn = new Map(),
    sl = new Map();
class sa extends c.Ay.Store {
    getStatus(e) {
        return i7.get(e) ?? null;
    }
    getFetchState(e) {
        return i5.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return se.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return sn.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return st.get(e) ?? null;
    }
    getModelCalls(e) {
        return sl.get(e) ?? i4;
    }
    getForceCompactionState(e) {
        return i8.get(e) ?? "idle";
    }
}
let si = new sa(eP.h, {
    LOGOUT: function () {
        if (
            0 === i7.size &&
            0 === i5.size &&
            0 === i8.size &&
            0 === se.size &&
            0 === st.size &&
            0 === sn.size &&
            0 === sl.size
        )
            return !1;
        (i7.clear(), i5.clear(), i8.clear(), se.clear(), st.clear(), sn.clear(), sl.clear());
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        i5.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("open" === n) return !1;
        let l = "pending" === i8.get(t);
        l &&
            i8.set(t, {
                outcome: "failed",
                reason: "Connection lost before the worker answered",
                observedAt: new Date().toISOString(),
            });
        let a = "loading" === i5.get(t);
        if ((a && i5.set(t, "failed"), !l && !a)) return !1;
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: n, failed: l } = e;
        l || null == n ? i5.set(t, "failed") : (i7.set(t, n), i5.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        se.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        st.set(e.projectId, {
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
        i8.set(t, "pending");
    },
    VIBEGRATIONS_DEBUG_FORCE_COMPACTION_RESULT: function (e) {
        i8.set(e.projectId, {
            outcome: e.outcome,
            reason: e.reason,
            ...(!0 === e.pendingTurn ? { pendingTurn: !0 } : {}),
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_MODEL_CALL: function (e) {
        let t = sl.get(e.projectId);
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
        sl.set(e.projectId, l.length > 200 ? l.slice(-200) : l);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: n } = e;
        if (0 === (0, en.aM)(n.total)) return !1;
        sn.set(t, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        (i7.delete(t), i5.delete(t), i8.delete(t), se.delete(t), st.delete(t), sn.delete(t), sl.delete(t));
    },
});
function ss(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function sr(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function so(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function su(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = String(t.getHours()).padStart(2, "0"),
        l = String(t.getMinutes()).padStart(2, "0"),
        a = String(t.getSeconds()).padStart(2, "0");
    return `${n}:${l}:${a}`;
}
function sd(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function sc(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function sm(e) {
    return et.intl.string("preview" === e ? ee.default["+m8XM6"] : ee.default.kiOVnt);
}
let sf = ["all", "preview", "stable", "web"],
    sh = new Set(["error", "aborted", "length"]);
function sp(e) {
    switch (e.reason) {
        case "local":
            return et.intl.string(ee.default.M7Vn6y);
        case "unconfigured":
            return et.intl.string(ee.default.QirpMl);
        case "unauthorized":
            return et.intl.string(ee.default.QZ1e4l);
        default:
            return null != e.detail
                ? et.intl.formatToPlainString(ee.default.zUTHf7, { detail: e.detail })
                : et.intl.string(ee.default.WIAQes);
    }
}
function sg(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : et.intl.formatToPlainString(ee.default.SBkDIZ, {
              p50: ss(e.memory_p50_bytes ?? 0),
              p999: ss(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let sx = {
    db: () => ee.default.r6cciE,
    db_preview: () => ee.default.JmIyL8,
    runtime: () => ee.default.bzNyv8,
    runtime_preview: () => ee.default["LONZ/8"],
    bot: () => ee.default.jdpw3A,
    bot_preview: () => ee.default["/g6wUz"],
};
var sb = n(69985);
function sv(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: sb.KE,
        children: [
            (0, a.jsx)("div", {
                className: sb.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(A.y, { type: A.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: et.intl.string(ee.default["K+FvtM"]),
                            })
                          : null != t
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: et.intl.formatToPlainString(ee.default["4NpaEk"], { time: sd(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(N.$, { variant: "secondary", size: "sm", text: et.intl.string(ee.default.aw0IJm), onClick: l }),
        ],
    });
}
function sj(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: sb.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: sb.Gf, children: t }),
            n,
        ],
    });
}
function sy(e) {
    let { label: t, value: n, hint: l, critical: i = !1 } = e;
    return (0, a.jsxs)("div", {
        className: sb.N8,
        children: [
            (0, a.jsxs)("div", {
                className: sb.x7,
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
function sw(e) {
    let { label: t, used: n, max: l, formatValue: i } = e,
        s = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        r = s >= 0.9;
    return (0, a.jsxs)("div", {
        className: sb.N8,
        children: [
            (0, a.jsxs)("div", {
                className: sb.x7,
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
                className: sb.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": l,
                "aria-valuenow": Math.min(n, l),
                "aria-valuetext": `${i(n)} of ${i(l)}`,
                children: (0, a.jsx)("div", {
                    className: r ? sb.aV : sb.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(s) },
                }),
            }),
        ],
    });
}
function sk(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(sy, {
            label: et.intl.string(ee.default.H6PMwW),
            value: et.intl.string(ee.default.TLOZ8J),
            hint: sp(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(sy, {
            label: et.intl.string(ee.default.H6PMwW),
            value: "\u2014",
            hint: et.intl.string(ee.default.uAzxdh),
        });
    let l = sg(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sy, { label: et.intl.string(ee.default.awAqRi), value: sr(n.cpu_ms) }),
            null != l && (0, a.jsx)(sy, { label: et.intl.string(ee.default.WdGviA), value: l }),
        ],
    });
}
function sA(e) {
    let { analytics: t } = e,
        n = et.intl.string(ee.default.Pgvj3h);
    if ("ok" !== t.status)
        return (0, a.jsx)(sj, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: sp(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? sx[t] : null) ? et.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(sj, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: et.intl.string(ee.default.uAzxdh),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          sy,
                          {
                              label: n,
                              value: et.intl.formatToPlainString(ee.default.AnRynJ, { cpu: sr(t.cpu_ms) }),
                              hint: sg(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var sN = n(522652);
let sC = [];
function sS(e) {
    let t,
        { call: n } = e,
        { text: l, bad: i } =
            ((t = null != n.stopReason && sh.has(n.stopReason)),
            {
                text: [
                    null != n.durationMs ? sr(n.durationMs) : null,
                    `${so(n.inputTokens + n.cacheReadTokens + n.cacheWriteTokens)} \u{2192} ${so(n.outputTokens)}`,
                    t ? n.stopReason : null,
                ]
                    .filter((e) => null != e)
                    .join(" \xb7 "),
                bad: t,
            });
    return (0, a.jsxs)("div", {
        className: sN.p5,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sN.Q5,
                children: su(n.observedAt),
            }),
            (0, a.jsxs)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-default",
                className: sN.qN,
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
function sE(e, t) {
    return (0, a.jsx)(sy, {
        label: e,
        value: et.intl.formatToPlainString(ee.default.U98VaN, { count: so((0, en.aM)(t)) }),
        hint: `${so(t.input_tokens)} in \xb7 ${so(t.output_tokens)} out \xb7 ${so(t.cache_read_input_tokens)} cache read`,
    });
}
function sI(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: s, traceVisible: r = !1 } = e,
        o = (0, c.bG)([si], () => si.getLastTurnUsage(t), [t]),
        u = (0, c.bG)([si], () => si.getLastCompaction(t), [t]),
        d = (0, c.bG)([si], () => si.getLastCompactionDecline(t), [t]),
        m = (0, c.bG)([si], () => si.getForceCompactionState(t), [t]),
        f = i.useCallback(() => (0, J.Lj)(t), [t]),
        h = i.useCallback(() => (0, J.Lj)(t, !0), [t]),
        p = (0, c.bG)([si], () => (r ? sC : si.getModelCalls(t)), [t, r]),
        g = n?.agent?.lifetime ?? null,
        x = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        j = u?.promptCeiling ?? x?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: sN.Mf,
        children: [
            (0, a.jsx)(sv, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: s }),
            (0, a.jsx)(sj, {
                title: et.intl.string(ee.default.IYpHtT),
                children:
                    null == g
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: et.intl.string(ee.default.gPabB9),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(sy, {
                                      label: et.intl.string(ee.default["8MSJDH"]),
                                      value: so((0, en.a7)(g.cost_usd)),
                                      hint: et.intl.formatToPlainString(ee.default["6Z2KhK"], { count: so(g.turns) }),
                                  }),
                                  sE(et.intl.string(ee.default.hk4jJr), g.orchestrator),
                                  sE(et.intl.string(ee.default.R9aduM), g.codegen),
                                  sE(et.intl.string(ee.default.Tj6b30), (0, en.wU)(g.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(sy, {
                                          label: et.intl.string(ee.default.Q2OlgI),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${so(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(sj, {
                title: et.intl.string(ee.default.lo4mY6),
                children:
                    null == o
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: et.intl.string(ee.default.uyPveL),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  sE(et.intl.string(ee.default["VwF+oY"]), o.total),
                                  (0, a.jsx)(sy, {
                                      label: et.intl.string(ee.default["kILb+R"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, en.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(sj, {
                title: et.intl.string(ee.default.mn8279),
                children: [
                    null != u && null != j
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(sw, {
                                      label: et.intl.string(ee.default.dKFhCg),
                                      used: u.tokensAfter,
                                      max: j,
                                      formatValue: so,
                                  }),
                                  (0, a.jsx)(sy, {
                                      label: et.intl.string(ee.default.ntZb8d),
                                      value: `${so(u.tokensBefore)} \u{2192} ${so(u.tokensAfter)}`,
                                      hint: et.intl.formatToPlainString(ee.default.jA05ru, {
                                          count: so(u.retainedMessages),
                                          time: sd(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != j
                                      ? et.intl.formatToPlainString(ee.default.LKGmsP, { ceiling: so(j) })
                                      : et.intl.string(ee.default.gPabB9),
                          }),
                    null != d &&
                        (0, a.jsx)(sy, {
                            label: et.intl.string(ee.default["se+2ls"]),
                            value: `${so(d.projected)} / ${so(d.threshold)}`,
                            critical: !0,
                            hint: et.intl.formatToPlainString(ee.default.KHK44U, { time: sd(d.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: sN.Lj,
                        children: [
                            (0, a.jsx)(N.$, {
                                variant: "secondary",
                                size: "sm",
                                text: et.intl.string(ee.default.B0KV7p),
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
                                    if ("idle" === e) return et.intl.string(ee.default.wBng42);
                                    if ("pending" === e) return et.intl.string(ee.default["0tgo31"]);
                                    let t = sd(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return et.intl.formatToPlainString(ee.default["eL8+rZ"], { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? ee.default["9vZuG6"]
                                            : "busy" === e.outcome
                                              ? ee.default.GV4sdd
                                              : ee.default["Y+0nUb"];
                                    return et.intl.formatToPlainString(n, {
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
                                            text: et.intl.string(ee.default["044+ju"]),
                                            onClick: h,
                                        }),
                                        (0, a.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: et.intl.string(ee.default["8D32H6"]),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            !r &&
                (0, a.jsx)(sj, {
                    title: et.intl.string(ee.default.F5eP7e),
                    children:
                        0 === p.length
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: et.intl.string(ee.default.j8NMgl),
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      p
                                          .slice(-30)
                                          .reverse()
                                          .map((e) => (0, a.jsx)(sS, { call: e }, e.id)),
                                      p.length > 30 &&
                                          (0, a.jsx)(v.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: et.intl.formatToPlainString(ee.default["3hYhpp"], {
                                                  shown: 30,
                                                  total: p.length,
                                              }),
                                          }),
                                  ],
                              }),
                }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(sj, {
                    title: et.intl.string(ee.default.ZRxAPD),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(sy, {
                                        label: et.intl.string(ee.default["wt5X/o"]),
                                        value: sd(b.instance_since),
                                        hint: et.intl.string(ee.default.QX2UQC),
                                    }),
                                    (0, a.jsx)(sy, {
                                        label: et.intl.string(ee.default["4lgurx"]),
                                        value: so(b.sockets),
                                    }),
                                    (0, a.jsx)(sy, {
                                        label: et.intl.string(ee.default["a/LXBt"]),
                                        value: b.turn_inflight
                                            ? et.intl.string(ee.default["9KlveJ"])
                                            : et.intl.string(ee.default["4tYZVa"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(sy, {
                                            label: et.intl.string(ee.default["/hOBkc"]),
                                            value: so(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(sk, { analytics: n.analytics }),
                    ],
                }),
            null != x &&
                (0, a.jsxs)(sj, {
                    title: et.intl.string(ee.default["EmSF+A"]),
                    children: [
                        (0, a.jsx)(sy, {
                            label: et.intl.string(ee.default.Rb6m3E),
                            value: so(x.max_subagent_iterations),
                        }),
                        (0, a.jsx)(sy, {
                            label: et.intl.string(ee.default.WQ9pMe),
                            value: et.intl.formatToPlainString(ee.default.U98VaN, {
                                count: so(x.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(sy, {
                            label: et.intl.string(ee.default.iEAvzu),
                            value: et.intl.formatToPlainString(ee.default.U98VaN, {
                                count: so(x.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(sy, {
                            label: et.intl.string(ee.default["jbhs+f"]),
                            value: so(x.max_user_message_chars),
                        }),
                        (0, a.jsx)(sy, { label: et.intl.string(ee.default.TOQnq4), value: so(x.max_build_attempts) }),
                        (0, a.jsx)(sy, { label: et.intl.string(ee.default.RIDc6D), value: so(x.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var sT = n(629584),
    sP = n(683438),
    sM = n(849363);
function s_(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: sM.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: et.intl.string(ee.default.TV42NS),
              }),
          });
}
function sR(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: sM.qf,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: et.intl.string(ee.default.TV42NS),
                  }),
                  (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: et.intl.string(ee.default["+2AMt1"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: sM.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function sD(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: sM.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: et.intl.string(ee.default["U/qDX9"]),
              }),
          })
        : null;
}
var sL = n(417397);
let sF = i.memo(function (e) {
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
        className: sL.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: sL.Mt,
                selectable: !0,
                children: su(n.ts),
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
                className: sL.dm,
                children: n.level,
            }),
            (0, a.jsxs)("span", {
                className: sL.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-subtle",
                            className: sL.Cq,
                            children: n.source,
                        }),
                    null != n.kind &&
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-xxs/semibold",
                            color: "text-feedback-critical",
                            className: sL.Cq,
                            title: n.build ?? void 0,
                            children: et.intl.string(ee.default.GO6JcR),
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
                                      className: sL.Pq,
                                      "aria-expanded": s,
                                      "aria-controls": o,
                                      "aria-label": et.intl.string(ee.default.ehmgbH),
                                      onClick: () => r((e) => !e),
                                      children: [
                                          s
                                              ? (0, a.jsx)(nG.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(nB._, {
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
                                                  et.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? ee.default.lXkB6Z : ee.default.wkbYxG,
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
                                          className: sL.dF,
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
function sO(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([ed.Ay], () => ed.Ay.getLogs(t), [t]),
        l = (0, c.bG)([ed.Ay], () => ed.Ay.getHistoryState(t, "logs")),
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
                sf.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return sm(e);
                            case "web":
                                return et.intl.string(ee.default.J2TPCe);
                            default:
                                return et.intl.string(ee.default.humq1B);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: sL.$F,
        children: [
            (0, a.jsxs)("div", {
                className: sL.y4,
                children: [
                    (0, a.jsx)(sT.I, {
                        look: "pill",
                        "aria-label": et.intl.string(ee.default.fhnXnM),
                        options: p,
                        value: s,
                        onChange: (e) => r(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: sL.KT,
                        children: (0, a.jsx)(sP.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: et.intl.string(ee.default["MX4vr/"]),
                            "aria-label": et.intl.string(ee.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(s_, { state: l }),
            (0, a.jsxs)(t1.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: sL.sx,
                children: [
                    (0, a.jsx)(sD, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(sR, {
                              state: l,
                              emptyTitle: et.intl.string(ee.default.mcFyYc),
                              emptyBody: et.intl.string(ee.default.RNN8pX),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: et.intl.string(ee.default.oIJbFa),
                            })
                          : d.map((e) => (0, a.jsx)(sF, { entry: e.log, showSource: "all" === s }, e.key)),
                ],
            }),
        ],
    });
}
function sz(e) {
    let { title: t, preview: n, stable: l, renderEnv: s } = e,
        r = [];
    return (
        null != n && r.push((0, a.jsx)(i.Fragment, { children: s("preview", n) }, "preview")),
        null != l && r.push((0, a.jsx)(i.Fragment, { children: s("stable", l) }, "stable")),
        (0, a.jsx)(sj, {
            title: t,
            children:
                r.length > 0
                    ? r
                    : (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: et.intl.string(ee.default.W4hcKL),
                      }),
        })
    );
}
function sG(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(sy, {
                      label: et.intl.formatToPlainString(ee.default.f8ix3w, { env: sm(n) }),
                      value: ((t = l.connected), et.intl.string(t ? ee.default["9KlveJ"] : ee.default["4tYZVa"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(sy, {
                      label: et.intl.string(ee.default["0AB7l3"]),
                      value: so(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${sd(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(sy, { label: et.intl.string(ee.default.ElaQ0A), value: so(l.guild_count) }),
                  (0, a.jsx)(sy, {
                      label: et.intl.string(ee.default.SJtBTN),
                      value: so(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? et.intl.formatToPlainString(ee.default.bSzLue, {
                                    code: l.last_close_code,
                                    time: sd(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(sy, {
                          label: et.intl.string(ee.default.N4l504),
                          value: so(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(sy, { label: sm(n), value: et.intl.string(ee.default.C6xjtD) });
}
function sB(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(sy, {
        label: sm(t),
        value: et.intl.formatToPlainString(ee.default.Yur5Zm, { requests: so(n.requests), failures: so(l + n.errors) }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? et.intl.formatToPlainString(ee.default["0ayoy+"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: sd(n.last_failure.at),
                  })
                : et.intl.formatToPlainString(ee.default["1PdrB1"], { time: sd(n.since) }),
    });
}
function s$(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sy, {
                label: et.intl.formatToPlainString(ee.default.BVORfc, { env: sm(t) }),
                value: so(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    sy,
                    {
                        label: et.intl.formatToPlainString(ee.default.NQxkhU, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? et.intl.formatToPlainString(ee.default.P8lBrO, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? et.intl.formatToPlainString(ee.default["7ecbr3"], { time: sd(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function sq(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(sy, {
        label: sm(t),
        value: et.intl.formatToPlainString(ee.default.voXL2a, { calls: so(n.calls), errors: so(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function sU(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(sj, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: et.intl.string(ee.default["v/fbnv"]),
            }),
        });
    let i = n.cpu_ms_total / n.requests,
        s = n.cpu_ms_total > 0;
    return (0, a.jsxs)(sj, {
        title: t,
        children: [
            (0, a.jsx)(sy, {
                label: et.intl.string(ee.default.KOnL3g),
                value: so(n.requests),
                hint: et.intl.formatToPlainString(ee.default["1PdrB1"], { time: sd(n.since) }),
            }),
            (0, a.jsx)(sy, { label: et.intl.string(ee.default.CjPhyY), value: so(n.errors), critical: n.errors > 0 }),
            s
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(sw, {
                              label: et.intl.string(ee.default["V/nNbs"]),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: sr,
                          }),
                          (0, a.jsx)(sy, {
                              label: et.intl.string(ee.default["+rYPHD"]),
                              value: sr(i),
                              hint: et.intl.formatToPlainString(ee.default["+LxC7W"], {
                                  total: sr(n.cpu_ms_total),
                                  wall: sr(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(sy, {
                      label: et.intl.string(ee.default["V/nNbs"]),
                      value: et.intl.string(ee.default.YKWIxp),
                      hint: et.intl.string(ee.default["8GAiDk"]),
                  }),
            !s &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(sy, { label: et.intl.string(ee.default.ueEMPa), value: sr(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(sy, { label: et.intl.string(ee.default.vM2krr), value: so(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(sy, {
                label: et.intl.string(ee.default.g1O88C),
                value: so(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: et.intl.formatToPlainString(ee.default["5iALNP"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(sy, { label: et.intl.string(ee.default.JUZs7g), value: sc(n.build) }),
        ],
    });
}
function sV(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: s } = t.storage,
        r = t.worker.limits,
        o = s
            ? [{ key: "shared", label: et.intl.string(ee.default.Vrh0rD), metrics: n }]
            : [
                  { key: "preview", label: et.intl.string(ee.default["+m8XM6"]), metrics: l },
                  { key: "stable", label: et.intl.string(ee.default.kiOVnt), metrics: n },
              ];
    return (0, a.jsx)(sj, {
        title: et.intl.string(ee.default.i91625),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(sy, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(sy, {
                                  label: et.intl.formatToPlainString(ee.default["9TpIQg"], { env: n }),
                                  value: ss(l.r2_bytes),
                                  hint: et.intl.formatToPlainString(
                                      l.r2_truncated ? ee.default.o45MMA : ee.default.S7o3vV,
                                      { count: so(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(sw, {
                                      label: et.intl.formatToPlainString(ee.default["0OIswI"], { env: n }),
                                      used: l.db_bytes,
                                      max: r.db_bytes,
                                      formatValue: ss,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function sH(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: sN.Mf,
        children: [
            (0, a.jsx)(sv, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(sU, {
                            title: et.intl.string(ee.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(sU, {
                            title: et.intl.string(ee.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(sV, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(sz, {
                                title: et.intl.string(ee.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(sG, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(sz, {
                                title: et.intl.string(ee.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(sB, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(sz, {
                                title: et.intl.string(ee.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(s$, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(sz, {
                                title: et.intl.string(ee.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(sq, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(sA, { analytics: t.analytics }),
                        (0, a.jsxs)(sj, {
                            title: et.intl.string(ee.default["HHe+8E"]),
                            children: [
                                (0, a.jsx)(sy, {
                                    label: et.intl.string(ee.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? sc(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(sy, {
                                    label: et.intl.string(ee.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? sc(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function sK(e, t) {
    return String(e).padStart(t, "0");
}
function sW(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        a = `${sK(l.getHours(), 2)}:${sK(l.getMinutes(), 2)}:${sK(l.getSeconds(), 2)}`;
    return "millis" === t ? `${a}.${sK(l.getMilliseconds(), 3)}` : a;
}
var sY = n(977129);
let sX = new Map(),
    sQ = new Map(),
    sZ = 0,
    sJ = 0;
async function s0(e, t, n) {
    let l = sZ,
        a = sX.get(t);
    if (null != a) return { status: "loaded", rich: a };
    if (Date.now() < sJ) return { status: "forbidden" };
    let i = sQ.get(t);
    if (null != i) return i;
    let s = (async () => {
        try {
            let a,
                { ticket: i, baseUrl: s } = await (0, sY.d)(e),
                r = await fetch(
                    ((a = new URL(`${s}/agent/trace-detail`)).searchParams.set("ticket", i),
                    a.searchParams.set("id", t),
                    a.toString()),
                    { method: "GET", credentials: "omit" },
                );
            if (403 === r.status) return ((sJ = Date.now() + 6e4), { status: "forbidden" });
            if (!r.ok) return { status: "failed" };
            let o = await r.json();
            if (!0 !== o.available || null == o.rich) return { status: "unavailable" };
            if (l !== sZ) return { status: "failed" };
            var n = o.rich;
            for (sX.set(t, n); sX.size > 100;) {
                let e = sX.keys().next();
                if (!0 === e.done) break;
                sX.delete(e.value);
            }
            return { status: "loaded", rich: o.rich };
        } catch {
            return { status: "failed" };
        }
    })();
    sQ.set(t, s);
    let r = await s;
    return (sQ.get(t) === s && sQ.delete(t), n?.aborted === !0 ? { status: "failed" } : r);
}
function s2() {
    ((sZ += 1), sX.clear(), sQ.clear(), (sJ = 0));
}
function s1(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function s6(e) {
    if (e < 1e3) return String(e);
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function s9(e) {
    switch (e) {
        case "subagent":
            return et.intl.string(ee.default["EoY7D+"]);
        case "context":
            return et.intl.string(ee.default.KVFrD3);
        case "tool":
            return et.intl.string(ee.default["/N6ZU9"]);
        case "delegated":
            return et.intl.string(ee.default.HcEbf2);
        default:
            return et.intl.string(ee.default.AhOqQs);
    }
}
function s3(e) {
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
let s4 = ["model", "tool", "subagent", "delegated", "context"];
function s7(e, t) {
    let n = t.trim().toLowerCase();
    return "" === n
        ? e
        : e.filter((e) => {
              let t;
              return ((t =
                  "model" === e.kind
                      ? [e.model, e.agent, e.stopReason ?? "", e.error ?? ""]
                      : [e.tool, e.agent, e.summary ?? "", e.error ?? ""]).push(s3(e)),
              t.join(" ").toLowerCase()).includes(n);
          });
}
function s5(e, t) {
    return null == t ? null : (e.find((e) => e.id === t) ?? null);
}
let s8 = ["arguments", "result", "usage", "diagnostics"];
var re = n(40715);
let rt = { started: re.Vf, ok: re.mo, error: re.Sr };
function rn(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: `${re.Om} ${rt[t] ?? re.Vf}`,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "started":
                    return et.intl.string(ee.default.HpKDyl);
                case "error":
                    return et.intl.string(ee.default["5T4Dd0"]);
                default:
                    return et.intl.string(ee.default.VbEmf0);
            }
        })(t),
    });
}
let rl = { model: re.WI, subagent: re.uM, context: re.eH, tool: re.pw, delegated: re.C8 };
function ra(e) {
    let { label: t, value: n } = e;
    return (0, a.jsxs)("div", {
        className: re.wV,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", className: re.D6, children: t }),
            (0, a.jsx)("div", { className: re.zL, children: n }),
        ],
    });
}
function ri(e) {
    let { label: t, value: n } = e;
    return (0, a.jsx)(ra, {
        label: t,
        value: (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-default", selectable: !0, children: n }),
    });
}
function rs(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: re.WA, children: t });
}
function rr(e) {
    let { title: t, children: n } = e,
        l = i.useId();
    return (0, a.jsxs)("section", {
        "aria-labelledby": l,
        className: re.xd,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                id: l,
                className: re.Hm,
                children: t,
            }),
            n,
        ],
    });
}
function ro(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("details", {
        className: re.XK,
        children: [
            (0, a.jsxs)("summary", {
                className: re.p8,
                children: [
                    (0, a.jsx)(nB._, { className: re.k, size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "none", children: t }),
                ],
            }),
            (0, a.jsx)("div", { className: re.bG, children: n }),
        ],
    });
}
function ru(e) {
    let { field: t } = e;
    if (null != t.value)
        return (0, a.jsx)(ra, {
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
            ? et.intl.formatToPlainString(ee.default.DdXP0P, { count: t.chars })
            : null != t.items
              ? et.intl.formatToPlainString(ee.default.OB8Qvn, { count: t.items })
              : null;
    return (0, a.jsx)(ra, {
        label: t.key,
        value: (0, a.jsxs)("div", {
            className: re.Kv,
            children: [
                (0, a.jsx)(v.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: (function (e) {
                        switch (e) {
                            case "prose":
                                return et.intl.string(ee.default.xO6bcQ);
                            case "content":
                                return et.intl.string(ee.default.gpBZRr);
                            default:
                                return et.intl.string(ee.default.OZvPXt);
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
function rd(e) {
    let { entries: t } = e;
    return 0 === t.length
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)("div", {
                      className: re.QR,
                      children: (0, a.jsx)(v.E, {
                          variant: "text-xs/semibold",
                          color: "none",
                          className: re.uh,
                          children: et.intl.string(ee.default.fy9PRy),
                      }),
                  }),
                  t.map((e) =>
                      (0, a.jsx)(
                          ra,
                          {
                              label: e.key,
                              value: (0, a.jsxs)("div", {
                                  className: re.TY,
                                  children: [
                                      null == e.value
                                          ? null
                                          : (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                className: re.Px,
                                                selectable: !0,
                                                children: e.value,
                                            }),
                                      !0 !== e.scrubbed
                                          ? null
                                          : (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-feedback-warning",
                                                children: et.intl.string(ee.default.PkIUHD),
                                            }),
                                      !0 !== e.truncated
                                          ? null
                                          : (0, a.jsx)(v.E, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children:
                                                    null == e.chars
                                                        ? et.intl.string(ee.default["1kBG9Z"])
                                                        : et.intl.formatToPlainString(ee.default.VGSwo4, {
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
function rc(e) {
    let { detail: t } = e,
        n =
            null == t || "loaded" === t.status || "forbidden" === t.status
                ? null
                : et.intl.string(
                      "loading" === t.status
                          ? ee.default["vBF/0G"]
                          : "unavailable" === t.status
                            ? ee.default.jEQTot
                            : ee.default.fj5wM8,
                  );
    return null == n
        ? null
        : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", className: re.E7, children: n });
}
function rm(e) {
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
                s8.filter((e) => l.has(e))
            );
        })(n, { childCount: o, hasParent: null != s }),
        d = (function (e, t) {
            let [n, l] = i.useState(null);
            if (
                (i.useEffect(() => {
                    if (null == t || null != sX.get(t)) return;
                    let n = new AbortController();
                    return (
                        s0(e, t, n.signal).then((e) => {
                            n.signal.aborted || l({ detailId: t, detail: e });
                        }),
                        () => n.abort()
                    );
                }, [e, t]),
                null == t)
            )
                return null;
            let a = sX.get(t);
            return null != a ? { status: "loaded", rich: a } : n?.detailId === t ? n.detail : { status: "loading" };
        })(t, "tool" === n.kind ? n.detailId : void 0),
        c = "model" === n.kind ? n.model : n.tool,
        m = sW(n.startedAt, "millis"),
        f = s3(n),
        h = i.useCallback(
            (e) => {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), l());
            },
            [l],
        );
    return (0, a.jsxs)(t1.Ch, {
        className: re._0,
        onKeyDown: h,
        role: "region",
        "aria-label": et.intl.formatToPlainString(ee.default.TlpZKP, { name: c }),
        children: [
            (0, a.jsx)("div", {
                className: re.sy,
                children: (0, a.jsxs)("div", {
                    className: re.HI,
                    children: [
                        (0, a.jsx)(rn, { status: n.status }),
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "none",
                            className: `${re.PY} ${rl[f]}`,
                            children: s9(f),
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/semibold",
                            color: "text-strong",
                            className: re.kc,
                            children: c,
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            tabularNumbers: !0,
                            className: re.l5,
                            children: null == n.durationMs ? et.intl.string(ee.default.HpKDyl) : s1(n.durationMs),
                        }),
                    ],
                }),
            }),
            null == n.error
                ? null
                : (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: re.Um,
                      selectable: !0,
                      children: n.error,
                  }),
            u.includes("arguments") && "tool" === n.kind
                ? (0, a.jsxs)(rr, {
                      title: et.intl.string(ee.default.jXY3mm),
                      children: [
                          (n.fields ?? []).map((e) => (0, a.jsx)(ru, { field: e }, e.key)),
                          d?.status === "loaded" && null != d.rich.args
                              ? (0, a.jsx)(rd, { entries: d.rich.args })
                              : null,
                          (0, a.jsx)(rc, { detail: d }),
                      ],
                  })
                : null,
            u.includes("result") && "tool" === n.kind
                ? (0, a.jsxs)(rr, {
                      title: et.intl.string(ee.default.KXrf5F),
                      children: [
                          (0, a.jsx)(ri, {
                              label: et.intl.string(ee.default["2Aii2k"]),
                              value: et.intl.formatToPlainString(ee.default.DdXP0P, { count: n.resultChars ?? 0 }),
                          }),
                          null == n.resultAdded
                              ? null
                              : (0, a.jsx)(ri, {
                                    label: et.intl.string(ee.default.hpGFzS),
                                    value: `+${n.resultAdded} \u{2212}${n.resultRemoved ?? 0}`,
                                }),
                          !0 !== n.resultTruncated
                              ? null
                              : (0, a.jsx)(ra, {
                                    label: et.intl.string(ee.default["UV2R1/"]),
                                    value: (0, a.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-warning",
                                        children: et.intl.string(ee.default["1kBG9Z"]),
                                    }),
                                }),
                          d?.status === "loaded" && null != d.rich.result
                              ? (0, a.jsx)(rd, { entries: d.rich.result })
                              : null,
                      ],
                  })
                : null,
            u.includes("usage") && "model" === n.kind
                ? (0, a.jsxs)(rr, {
                      title: et.intl.string(ee.default["W+4BVk"]),
                      children: [
                          (0, a.jsxs)(rs, {
                              children: [
                                  null == n.promptTokens
                                      ? null
                                      : (0, a.jsx)(ri, {
                                            label: et.intl.string(ee.default.Ran4BY),
                                            value: et.intl.formatToPlainString(ee.default["PYO+Jv"], {
                                                tokens: s6(n.promptTokens),
                                            }),
                                        }),
                                  null == n.systemTokens
                                      ? null
                                      : (0, a.jsx)(ri, {
                                            label: et.intl.string(ee.default.vPIcyv),
                                            value: et.intl.formatToPlainString(ee.default.Qy2iTq, {
                                                system: s6(n.systemTokens),
                                                tools: s6(n.toolsTokens ?? 0),
                                                toolCount: n.tools ?? 0,
                                                messages: s6(n.messagesTokens ?? 0),
                                                messageCount: n.messages ?? 0,
                                            }),
                                        }),
                                  null == n.inputTokens
                                      ? null
                                      : (0, a.jsx)(ri, {
                                            label: et.intl.string(ee.default["/703Yk"]),
                                            value: String(n.inputTokens),
                                        }),
                                  null == n.outputTokens
                                      ? null
                                      : (0, a.jsx)(ri, {
                                            label: et.intl.string(ee.default["6+W0dJ"]),
                                            value: String(n.outputTokens),
                                        }),
                                  null == n.cacheReadTokens
                                      ? null
                                      : (0, a.jsx)(ri, {
                                            label: et.intl.string(ee.default.VyAl6j),
                                            value: et.intl.formatToPlainString(ee.default.lkMc23, {
                                                read: n.cacheReadTokens,
                                                write: n.cacheWriteTokens ?? 0,
                                            }),
                                        }),
                                  null == n.costUsd
                                      ? null
                                      : (0, a.jsx)(ri, {
                                            label: et.intl.string(ee.default.l9YFEQ),
                                            value: `$${n.costUsd.toFixed(4)}`,
                                        }),
                              ],
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              className: re.E7,
                              children: et.intl.string(ee.default.F9jaUF),
                          }),
                      ],
                  })
                : null,
            u.includes("arguments") || u.includes("result")
                ? (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: re.E7,
                      children: et.intl.string(ee.default["ppv+97"]),
                  })
                : null,
            u.includes("diagnostics")
                ? (0, a.jsx)(ro, {
                      title: et.intl.string(ee.default.T7SFyZ),
                      children: (0, a.jsxs)(rs, {
                          children: [
                              null == s
                                  ? null
                                  : (0, a.jsx)(ra, {
                                        label: et.intl.string(ee.default.NnBqcd),
                                        value: (0, a.jsx)(y.D, {
                                            tag: "div",
                                            className: re.mi,
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
                                  : (0, a.jsx)(ri, {
                                        label: et.intl.string(ee.default.fI6mzD),
                                        value: et.intl.formatToPlainString(ee.default.hO8FYp, { count: o }),
                                    }),
                              null == n.turnId
                                  ? null
                                  : (0, a.jsx)(ri, { label: et.intl.string(ee.default.I7cJP0), value: n.turnId }),
                              (0, a.jsx)(ri, { label: et.intl.string(ee.default["XVTP/S"]), value: n.id }),
                              null == m ? null : (0, a.jsx)(ri, { label: et.intl.string(ee.default.rD7bm0), value: m }),
                              "model" !== n.kind || null == n.stopReason
                                  ? null
                                  : (0, a.jsx)(ri, { label: et.intl.string(ee.default.rxmzYT), value: n.stopReason }),
                              "tool" !== n.kind || null == n.schema || 0 === n.schema.length
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(v.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-muted",
                                                className: re.Hm,
                                                children: et.intl.string(ee.default["6oILKx"]),
                                            }),
                                            n.schema.map((e) =>
                                                (0, a.jsx)(
                                                    ri,
                                                    {
                                                        label: e.name,
                                                        value: e.required
                                                            ? et.intl.formatToPlainString(ee.default["6QoPmP"], {
                                                                  type: e.type,
                                                              })
                                                            : et.intl.formatToPlainString(ee.default["/L6GFe"], {
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
                className: re.E7,
                children: et.intl.string(ee.default.khAjR0),
            }),
        ],
    });
}
let rf = { model: re.WI, subagent: re.uM, context: re.eH, tool: re.pw, delegated: re.C8 };
function rh(e) {
    let { entries: t } = e,
        n = i.useMemo(
            () =>
                (function (e) {
                    let t = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 },
                        n = { model: 0, subagent: 0, context: 0, tool: 0, delegated: 0 };
                    for (let l of e) {
                        let e = s3(l);
                        ((t[e] += l.durationMs ?? 0), (n[e] += 1));
                    }
                    return s4.map((e) => ({ category: e, ms: t[e], calls: n[e] }));
                })(t),
            [t],
        ),
        l = n.reduce((e, t) => e + t.ms, 0);
    return (0, a.jsxs)("div", {
        className: re.M0,
        children: [
            (0, a.jsx)("div", {
                className: re.pZ,
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
                                            className: `${re.dL} ${rf[t]}`,
                                            style: { "--custom-vibegrations-trace-segment-weight": String(n) },
                                        },
                                        t,
                                    );
                          }),
            }),
            (0, a.jsx)("div", {
                className: re.z4,
                role: "group",
                "aria-label": et.intl.string(ee.default.UZ1OlR),
                children: s4.map((e) => {
                    let t = n.find((t) => t.category === e),
                        i = t?.ms ?? 0,
                        s = t?.calls ?? 0,
                        r = 0 === l ? 0 : Math.round((i / l) * 100);
                    return (0, a.jsxs)(
                        "div",
                        {
                            className: re.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${re.A9} ${rf[e]}`, "aria-hidden": !0 }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: s9(e) }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: et.intl.formatToPlainString(ee.default.UffawN, { percent: r }),
                                }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    tabularNumbers: !0,
                                    children: et.intl.formatToPlainString(ee.default.w8vPbe, { count: s }),
                                }),
                                0 === i
                                    ? null
                                    : (0, a.jsx)(v.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: s1(i),
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
let rp = { model: re.WI, subagent: re.uM, context: re.eH, tool: re.pw, delegated: re.C8 };
function rg(e) {
    let { entry: t, selected: n, tabbable: l, onSelect: i, onKeyDown: s, nested: r } = e,
        o = s3(t),
        u = "model" === t.kind ? t.model : t.tool,
        d =
            "model" === t.kind && null != t.promptTokens
                ? et.intl.formatToPlainString(ee.default["PYO+Jv"], { tokens: s6(t.promptTokens) })
                : null != t.durationMs
                  ? s1(t.durationMs)
                  : null;
    return (0, a.jsxs)(y.D, {
        tag: "div",
        role: "option",
        "aria-selected": n,
        tabIndex: l ? 0 : -1,
        id: `trace-${t.id}`,
        className: `${re.nM} ${r ? re.A5 : ""} ${"error" === t.status ? re.Cr : ""} ${n ? re.CZ : ""}`,
        onKeyDown: s,
        onClick: () => i(t.id),
        children: [
            (0, a.jsxs)("div", {
                className: re.sU,
                children: [
                    (0, a.jsx)(rn, { status: t.status }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "none",
                        className: `${re.PY} ${rp[o]}`,
                        children: s9(o),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        className: re.G9,
                        children: u,
                    }),
                    null == d
                        ? null
                        : (0, a.jsx)(v.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              tabularNumbers: !0,
                              className: re.j2,
                              children: d,
                          }),
                ],
            }),
            "tool" === t.kind && null != t.summary
                ? (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: re.Ne,
                      children: t.summary,
                  })
                : null,
            null == t.error
                ? null
                : (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      className: re.Xu,
                      children: t.error,
                  }),
        ],
    });
}
function rx(e) {
    var t;
    let { projectId: n, query: l } = e,
        s = (0, c.yK)([ed.Ay], () => ed.Ay.getTrace(n), [n]),
        r = (0, c.bG)([ed.Ay], () => ed.Ay.getHistoryState(n, "trace"));
    i.useEffect(() => s2, [n]);
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
            return 0 === t ? 40 : (0, t7.clamp)((e / t) * 100, 25, 75);
        }, []),
        A = i.useCallback((e) => {
            let t = p.current?.offsetHeight ?? 0;
            return 0 === t ? e : (0, t7.clamp)(e, (25 * t) / 100, (75 * t) / 100);
        }, []),
        N = (0, iJ.A)({
            resizableDomNodeRef: g,
            orientation: iJ.R.VERTICAL_TOP,
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
            null != t && (e.preventDefault(), m((e) => (0, t7.clamp)(e + t, 25, 75)));
        }, []),
        E = i.useCallback(() => {
            (u(null), y(o));
        }, [o, y]),
        I = i.useMemo(() => s7(s, l), [s, l]),
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
                    .map((e, t) => ({ ...e, index: t, entries: s7(e.entries, l) }))
                    .filter((e) => e.entries.length > 0),
            [s, l],
        ),
        P = s5(I, o),
        M = P?.kind === "tool" ? s5(s, P.parentId ?? null) : null,
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
              className: re.uP,
              ref: p,
              children: (0, a.jsx)(sR, {
                  state: r,
                  emptyTitle: et.intl.string(ee.default.Iyt8OJ),
                  emptyBody: et.intl.string(ee.default["8pdPx5"]),
              }),
          })
        : (0, a.jsxs)("div", {
              className: `${re.uP} ${f ? re.F4 : ""}`,
              ref: p,
              children: [
                  (0, a.jsxs)("div", {
                      className: re.DK,
                      children: [
                          (0, a.jsx)(rh, { entries: s }),
                          (0, a.jsx)(s_, { state: r }),
                          0 === I.length
                              ? (0, a.jsx)("div", {
                                    className: re.Ie,
                                    children: (0, a.jsx)(v.E, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: et.intl.string(ee.default["Cpr+oM"]),
                                    }),
                                })
                              : (0, a.jsxs)(t1.Ch, {
                                    ref: x,
                                    className: re.Ns,
                                    children: [
                                        (0, a.jsx)(sD, { state: r }),
                                        (0, a.jsx)("div", {
                                            ref: b,
                                            id: j,
                                            role: "listbox",
                                            "aria-label": et.intl.string(ee.default["QATZ+A"]),
                                            className: re.p_,
                                            children: T.map((e) => {
                                                let t = sW(e.startedAt),
                                                    n = et.intl.formatToPlainString(ee.default["Y/j+TD"], {
                                                        number: e.index + 1,
                                                    });
                                                return (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        role: "presentation",
                                                        children: [
                                                            (0, a.jsxs)("div", {
                                                                className: re.mf,
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
                                                                              children: s1(e.spanMs),
                                                                          }),
                                                                ],
                                                            }),
                                                            (0, a.jsx)("div", {
                                                                role: "group",
                                                                "aria-label": n,
                                                                className: re.M5,
                                                                children: e.entries.map((e) =>
                                                                    (0, a.jsx)(
                                                                        rg,
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
                                    "aria-label": et.intl.string(ee.default.I8sr5Y),
                                    "aria-valuenow": Math.round(d),
                                    "aria-valuemin": 25,
                                    "aria-valuemax": 75,
                                    tabIndex: 0,
                                    className: re.b1,
                                    onPointerDown: C,
                                    onKeyDown: S,
                                }),
                                (0, a.jsx)("div", {
                                    ref: g,
                                    className: re.Or,
                                    style: { "--custom-vibegrations-trace-detail-share": String(d) },
                                    children: (0, a.jsx)(rm, {
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
var rb = n(77729),
    rv = n(723702),
    rj = n(264572).Buffer;
async function ry(e, t) {
    if (rv.isPlatformEmbedded) {
        let n = rj.from(await e.arrayBuffer());
        if ("function" == typeof rb.A.fileManager.saveWithDialog2) await rb.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await rb.A.fileManager.saveWithDialog(n, t);
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
function rw(e) {
    let { projectId: t, query: n, onQueryChange: l } = e,
        s = (0, c.yK)([ed.Ay], () => ed.Ay.getTrace(t), [t]),
        r = i.useRef(null),
        o = i.useCallback(() => {
            ry(
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
                className: re.ED,
                children: (0, a.jsx)(sP.I, {
                    query: n,
                    onChange: l,
                    onClear: () => l(""),
                    size: "sm",
                    placeholder: et.intl.string(ee.default.NfncNw),
                    "aria-label": et.intl.string(ee.default.NfncNw),
                }),
            }),
            (0, a.jsx)(lz.Y, {
                targetElementRef: r,
                position: "bottom",
                align: "right",
                animation: lz.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(lG.W, {
                        "data-menu-migrated": !0,
                        navId: `vibegrations-trace-actions-${t}`,
                        "aria-label": et.intl.string(et.t.ogxXGq),
                        onClose: n,
                        onSelect: n,
                        children: (0, a.jsx)(lB.rX, {
                            children: (0, a.jsx)(lB.Dr, {
                                id: "export",
                                label: et.intl.string(ee.default.A3Z3ar),
                                disabled: 0 === s.length,
                                action: o,
                            }),
                        }),
                    });
                },
                children: (e, t) => {
                    let { isShown: n } = t;
                    return (0, a.jsx)(i_.K, {
                        ...e,
                        buttonRef: r,
                        icon: a$.MoreHorizontalIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": et.intl.string(et.t["UKOtz+"]),
                        "aria-haspopup": "menu",
                        "aria-expanded": n,
                    });
                },
            }),
        ],
    });
}
var rk = n(497243);
function rA(e) {
    let { projectId: t, onClose: n } = e,
        [l, s] = i.useState("logs"),
        [r, o] = i.useState(""),
        u = (0, c.bG)([i9.A], () => i9.A.isDeveloper),
        d = (0, c.bG)([si], () => si.getStatus(t), [t]),
        m = (0, c.bG)([si], () => si.getFetchState(t), [t]);
    i.useEffect(() => {
        (0, J.R7)(t);
    }, [t]);
    let f = i.useCallback(() => (0, J.R7)(t), [t]),
        h = i.useCallback(() => {
            (0, i3.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: si.getStatus(t),
                        last_turn_usage: si.getLastTurnUsage(t),
                        last_compaction: si.getLastCompaction(t),
                        last_compaction_decline: si.getLastCompactionDecline(t),
                        model_calls: si.getModelCalls(t),
                        logs: ed.Ay.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, g.P)((0, x.o)(et.intl.string(ee.default.sDSDiO), b.Ck.SUCCESS)),
            );
        }, [t]),
        p = et.intl.string(ee.default.KampIf);
    return (0, a.jsxs)("section", {
        className: rk.nd,
        "aria-label": p,
        children: [
            (0, a.jsxs)(tx.Ay, {
                "aria-label": p,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(tx.Ay.Icon, {
                            icon: i1.CopyIcon,
                            tooltip: et.intl.string(ee.default["21ipY1"]),
                            onClick: h,
                        }),
                        (0, a.jsx)(tx.Ay.Icon, { icon: R.P, tooltip: et.intl.string(et.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(tx.Ay.ChannelIcon, { icon: C.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(tx.Ay.Title, { children: p }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: rk.rf,
                children: [
                    (0, a.jsxs)(i6.V, {
                        selectedItem: l,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": et.intl.string(ee.default.uNyR86),
                        className: rk.vR,
                        children: [
                            (0, a.jsx)(i6.V.Item, { id: "logs", children: et.intl.string(ee.default["1mpzdJ"]) }),
                            (0, a.jsx)(i6.V.Item, { id: "worker", children: et.intl.string(ee.default.whGHLD) }),
                            (0, a.jsx)(i6.V.Item, { id: "agent", children: et.intl.string(ee.default.cK3AvL) }),
                            u
                                ? (0, a.jsx)(i6.V.Item, { id: "trace", children: et.intl.string(ee.default.wUZveG) })
                                : null,
                        ],
                    }),
                    "logs" === l
                        ? (0, a.jsx)(sO, { projectId: t })
                        : "worker" === l
                          ? (0, a.jsx)(sH, { status: d, fetchState: m, onRefresh: f })
                          : "trace" === l && u
                            ? (0, a.jsxs)("div", {
                                  className: rk.uP,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: rk.XH,
                                          children: (0, a.jsx)(rw, { projectId: t, query: r, onQueryChange: o }),
                                      }),
                                      (0, a.jsx)(rx, { projectId: t, query: r }),
                                  ],
                              })
                            : (0, a.jsx)(sI, { projectId: t, status: d, fetchState: m, onRefresh: f, traceVisible: u }),
                ],
            }),
        ],
    });
}
var rN = n(333007),
    rC = n(97808),
    rS = n(778712),
    rE = n(365912),
    rI = n(775121),
    rT = n(277437);
function rP(e) {
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
        } = l8({ projectId: t, surface: "design", onUploadFile: h }),
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
        className: r()(rT.M0, { [rT.ho]: N && !f, [rT.ET]: f }),
        style: { left: _, top: R },
        "data-testid": "vibegrations-design-compose-bar",
        children: [
            (0, a.jsx)("input", {
                ref: y,
                type: "file",
                multiple: !0,
                className: rT.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (g(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, a.jsx)(w.m, {
                position: "bottom",
                text: et.intl.string(ee.default.d6Rqlu),
                ariaHidden: !0,
                children: (0, a.jsx)("button", {
                    type: "button",
                    className: rT.tY,
                    onClick: () => y.current?.click(),
                    "aria-label": et.intl.string(ee.default.d6Rqlu),
                    children: (0, a.jsx)(lO.H, { size: "custom", color: "currentColor", className: rT.WW }),
                }),
            }),
            (0, a.jsx)(lU.y, {
                autoFocus: !0,
                rows: 1,
                className: rT.hF,
                value: o,
                placeholder: "" === s ? et.intl.string(ee.default.FK09JH) : `Edit ${s}`,
                "aria-label": et.intl.string(ee.default["qR+sGX"]),
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
                      className: rT.ZO,
                      children: p.map((e) => (0, a.jsx)(ae, { draft: e, onRemove: b }, e.localId)),
                  })
                : null,
        ],
    });
}
var rM = n(320510);
function r_(e) {
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
function rR(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = r_(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
n(762399);
var rD = n(940107),
    rL = n(42843);
let rF = { x: 25, y: 21 };
function rO(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rz(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function rG(e, t, n, l) {
    let a = rz(e, n, l);
    return { x: a.left + a.width * t.x, y: a.top + a.height * t.y };
}
function rB(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function r$(e) {
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
function rq(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: s, toggleRef: r } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: d } = tc(o),
        m = (0, tm.o4)(o),
        f = (0, la.useHasAnyModalOpen)(),
        h = (0, c.bG)([ew.default], () => ew.default.getCurrentUser()),
        p = h?.id ?? null,
        [g, x] = i.useState(null),
        [b, j] = i.useState(null),
        [y, w] = i.useState(!1),
        [k, A] = i.useState(!1),
        [C, S] = i.useState(null),
        [E, I] = i.useState(!1),
        T = i.useRef(null),
        M = i.useRef(null),
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
        if (null != W) return () => nb(W, "design");
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
                x((t) => (rO(t, e) ? t : e));
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
                (0, rM.S)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        w(!1);
                        let n = "completed" === t.status ? r$(t.response) : null;
                        null == n ? A(!0) : (j(n), to(o, { url: n.url, title: n.title, viewport: n.viewport }));
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
        if (rO(Y.current, g)) return;
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
                    (0, rM.S)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !en.current) return;
                        let l = r$(e.response);
                        null != l && (j(l), to(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let a = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let i = r_(e.element);
                            null != i && a.set(l.id, i);
                        }),
                            (n = ti(o)).active &&
                                0 !== a.size &&
                                ts(o, {
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
        en = i.useRef(!1);
    i.useEffect(() => {
        ((en.current = K), K || ((X.current = null), (Q.current = null), (_.current = null), I(!1)));
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
                    (0, rD.W)(
                        n,
                        "control",
                        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
                        { timeoutMs: 5500, label: "inspect" },
                    )
                        .then(rR, () => ({ status: "failed" }))
                        .then((t) => {
                            if (((Z.current = !1), en.current)) {
                                if ("picked" !== t.status || rY(t.target, eo.current.rect, eo.current.scale))
                                    "picked" === t.status || "none" === t.status
                                        ? S(null)
                                        : "unsupported" === t.status && F(!0);
                                else {
                                    let e = e4(t.target);
                                    (D((t) => (rW(t, e) ? t : e)),
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
            let e = setTimeout(() => B(null), rH);
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
                    (nb(o, "design"),
                    H(null),
                    ($.current = !1),
                    z({ projectId: o, target: e, anchor: t, draft: "", at: n, label: e4(e) }));
            },
            [o],
        ),
        ed = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / ei, y: (e.clientY - t.top) / ei }), [ei]),
        ec = i.useCallback(() => {
            let e = _.current;
            if (null == e) return;
            let t = T.current;
            null != t && (t.style.transform = `translate3d(${e.x + 12}px, ${e.y + 12}px, 0)`);
            let n = M.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ec);
    let em = i.useCallback(
            (e) => {
                if (null == g || null != V) return;
                if (((_.current = { x: e.clientX, y: e.clientY }), ec(), I(!0), null != O)) {
                    (Math.abs(e.clientX - O.at.x) > rK || Math.abs(e.clientY - O.at.y) > rK) && ($.current = !0);
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
                        n = null != e && rY(e, g, ei) ? null : e;
                    if (null != n) {
                        let e = e4(n);
                        D((t) => (rW(t, e) ? t : e));
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
                            ? e9
                            : { x: Math.min(1, Math.max(0, (t - l) / i)), y: Math.min(1, Math.max(0, (n - a) / s)) };
                    })(C, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [C, g, ed, O, V, eu, ea],
        ),
        ep = i.useCallback(() => {
            null != o && (S(null), tr(o));
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
                rI.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        rI.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ex.current());
        }
        function t(e) {
            let t = e.target;
            (0, iT.vq)(t) &&
                ev.current?.contains(t) !== !0 &&
                r?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, rE.J$)(e), !0);
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
                    eu(C, e9, { x: (g?.left ?? 0) + C.rect.x * ei, y: (g?.top ?? 0) + C.rect.y * ei }));
            },
            [o, O, V, er, C, eu, eg, g, ei],
        ),
        ey = i.useCallback(
            (e) => {
                null == o ||
                    null == O ||
                    ((e3(O.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, J.dv)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = e4(e),
                                    a = [n, l].filter((e) => "" !== e).join(": ");
                                return `${e8}${a}${te}${e5(e)}
${t.trim()}`;
                            })(O.target, O.draft),
                            e,
                        ),
                        ea(),
                        S(null)));
            },
            [o, O, ea],
        ),
        ek = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, J.vX)(o, e)), [o]),
        eA = i.useCallback(() => {
            if (null != o && null != V && null != p && e3(V.draft)) {
                var e, t;
                let n, l;
                ((e = V.id),
                    (t = V.draft.trim()),
                    null != (l = (n = ti(o)).annotations.find((t) => t.id === e)) &&
                        tu(l, p) &&
                        ts(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    H({ ...V, editing: !1 }));
            }
        }, [o, V, p]),
        eN = i.useCallback(() => {
            if (null != o && null != V && null != p) {
                var e;
                let t, n;
                ((e = V.id),
                    null != (n = (t = ti(o)).annotations.find((t) => t.id === e)) &&
                        tu(n, p) &&
                        ts(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    H(null));
            }
        }, [o, V, p]),
        eC = u
            ? y
                ? et.intl.string(ee.default.jQQ8i2)
                : k
                  ? et.intl.string(ee.default.zvU2QH)
                  : et.intl.formatToPlainString(ee.default.A4HDMU, { count: d.length })
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
                      let { left: n, top: l } = rB(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(rG(eI.target, eI.anchor, g, ei), g)
                : null;
    return (0, rN.createPortal)(
        (0, a.jsxs)("div", {
            ref: ev,
            className: rL.Li,
            children: [
                (0, a.jsx)("div", {
                    className: rL.y4,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-design-announcer",
                    children: eC,
                }),
                eS
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: rL.MT,
                                  style: { left: g.left, top: g.top, width: g.width, height: g.height },
                                  "data-plain-cursor": eE ? void 0 : "",
                                  "data-testid": "vibegrations-design-surface",
                                  role: "application",
                                  "aria-label": et.intl.string(ee.default["2Wn1kr"]),
                                  tabIndex: 0,
                                  onMouseMove: em,
                                  onMouseLeave: ef,
                                  onClick: eh,
                                  onKeyDown: ej,
                              }),
                              null != C && null == O && null == V ? (0, a.jsx)(rX, { box: rz(C, g, ei) }) : null,
                              (0, a.jsx)("div", {
                                  ref: T,
                                  className: rL.aZ,
                                  children: (0, a.jsx)("div", {
                                      className: rL.xz,
                                      "data-shown": null != C && null == V && null == O ? "" : void 0,
                                      "data-instant": q ? "" : void 0,
                                      children: (0, a.jsxs)(v.E, {
                                          variant: "text-xs/medium",
                                          className: rL.Ux,
                                          children: [
                                              null == R
                                                  ? null
                                                  : (0, a.jsx)("span", { className: rL.Tl, children: R.kind }),
                                              null == R || "" === R.name
                                                  ? null
                                                  : (0, a.jsxs)("span", { className: rL.kh, children: [" ", R.name] }),
                                          ],
                                      }),
                                  }),
                              }),
                              (0, a.jsx)("div", {
                                  ref: M,
                                  className: rL.Y,
                                  children: eE
                                      ? (0, a.jsx)(aB, { className: rL.u, size: "custom", width: 15, height: 15 })
                                      : null,
                              }),
                              null == eM
                                  ? null
                                  : (0, a.jsx)("div", {
                                        className: rL.aZ,
                                        style: { transform: `translate3d(${eM.at.x + 12}px, ${eM.at.y + 12}px, 0)` },
                                        children: (0, a.jsx)("div", {
                                            className: rL.xz,
                                            "data-shown": "",
                                            "data-locked": "",
                                            "data-closing": null == O ? "" : void 0,
                                            children: (0, a.jsxs)(v.E, {
                                                variant: "text-xs/medium",
                                                className: rL.Ux,
                                                children: [
                                                    (0, a.jsx)("span", { className: rL.Tl, children: eM.label.kind }),
                                                    "" === eM.label.name
                                                        ? null
                                                        : (0, a.jsxs)("span", {
                                                              className: rL.kh,
                                                              children: [" ", eM.label.name],
                                                          }),
                                                ],
                                            }),
                                        }),
                                    }),
                              null != eT
                                  ? (0, a.jsx)("div", { className: rL.D0, style: rz(eT, g, ei), "aria-hidden": !0 })
                                  : null,
                              d.map((e, t) => {
                                  let n = rG(e.target, e.anchor, g, ei),
                                      l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                  return (0, a.jsx)(
                                      "button",
                                      {
                                          type: "button",
                                          className: rL.xL,
                                          style: { ...rB(n, g), width: 24, height: 24 },
                                          "aria-label": et.intl.formatToPlainString(ee.default.zicHlU, {
                                              index: t + 1,
                                              target: e7(e.target),
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
                                          children: (0, a.jsx)(rU, { authorId: e.authorId }),
                                      },
                                      e.id,
                                  );
                              }),
                              null == eP || null == o
                                  ? null
                                  : (0, a.jsx)(rP, {
                                        projectId: o,
                                        at: { x: eP.at.x + 12, y: eP.at.y + 12 },
                                        bounds: g,
                                        kind: eP.label.kind,
                                        value: eP.draft,
                                        canSubmit: null != O && e3(eP.draft),
                                        onChange: (e) => {
                                            null != O && z({ ...O, draft: e });
                                        },
                                        onSubmit: ey,
                                        onDismiss: ea,
                                        onUploadFile: ek,
                                        closing: null == O,
                                    }),
                              null != eI && null != V && null != e_
                                  ? (0, a.jsxs)(rV, {
                                        point: e_,
                                        frame: g,
                                        authorId: eI.authorId,
                                        title: e7(eI.target),
                                        testId: "vibegrations-design-popout",
                                        onDismiss: () => {
                                            V.confirmingRemove ? H({ ...V, confirmingRemove: !1 }) : H(null);
                                        },
                                        onMouseLeave: () => {
                                            V.editing || V.confirmingRemove || H(null);
                                        },
                                        children: [
                                            V.editing
                                                ? (0, a.jsx)(P.f, {
                                                      autoFocus: !0,
                                                      label: et.intl.string(ee.default["qR+sGX"]),
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
                                                      className: rL.aC,
                                                      children: eI.comment,
                                                  }),
                                            tu(eI, p)
                                                ? (0, a.jsx)("div", {
                                                      className: rL.eB,
                                                      children: V.confirmingRemove
                                                          ? (0, a.jsxs)(a.Fragment, {
                                                                children: [
                                                                    (0, a.jsx)(v.E, {
                                                                        variant: "text-xs/normal",
                                                                        color: "text-muted",
                                                                        className: rL.nv,
                                                                        children: et.intl.string(ee.default["IMrOF/"]),
                                                                    }),
                                                                    (0, a.jsx)(N.$, {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: et.intl.string(ee.default.cLsnYH),
                                                                        onClick: () =>
                                                                            H({ ...V, confirmingRemove: !1 }),
                                                                    }),
                                                                    (0, a.jsx)(N.$, {
                                                                        variant: "critical-primary",
                                                                        size: "sm",
                                                                        text: et.intl.string(ee.default.ncz32j),
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
                                                                        text: et.intl.string(ee.default.ncz32j),
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
                                                                              disabled: !e3(V.draft),
                                                                              text: et.intl.string(ee.default.wIeFN0),
                                                                              onClick: eA,
                                                                          })
                                                                        : (0, a.jsx)(N.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: et.intl.string(ee.default.DKZggU),
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
function rU(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([ew.default], () => ew.default.getUser(t), [t]);
    return (0, a.jsx)(rC.eu, {
        src: null == n ? null : Z.Ay.getUserAvatarURL(n),
        size: rS._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function rV(e) {
    let t,
        n,
        l,
        s,
        r,
        o,
        { point: u, frame: d, authorId: c, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = i.useRef(null),
        b = i.useRef(null),
        [j, y] = i.useState(rF);
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
        className: rL.Nr,
        style: C,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: rL.MY,
                children: [
                    (0, a.jsx)("span", { ref: b, className: rL.ip, children: (0, a.jsx)(rU, { authorId: c }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: rL.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: rL.zI, children: g }),
        ],
    });
}
let rH = 300,
    rK = 2;
function rW(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function rY(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        a = t.height / n;
    return !(l < 1) && !(a < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * a;
}
function rX(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: rL.Zt, style: t, "data-testid": "vibegrations-design-highlight" });
}
var rQ = n(11055),
    rZ = n(175841),
    rJ = n(872768),
    r0 = n(475815);
function r2(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function r1(e) {
    let t;
    return (
        null != e &&
        ((t =
            document.fullscreenElement ??
            document.webkitFullscreenElement ??
            document.mozFullScreenElement ??
            document.msFullscreenElement ??
            null),
        ((0, iT.vq)(t, Element) ? t.getAttribute("data-frame-id") : null) === e)
    );
}
function r6(e) {
    return (0, r0.a3)(document, e);
}
function r9(e) {
    return i.useSyncExternalStore(r6, () => r1(e));
}
var r3 = n(342667);
function r4(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function r7(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function r5(e) {
    let { phase: t, projectId: n, onOpenPublishedApp: l, compact: s } = e,
        { stop: o, stopping: u } = (function (e) {
            let t = (0, c.bG)([eA.Ay], () => null != e && eA.Ay.isThinking(e)),
                [n, l] = i.useState(!1),
                [a, s] = i.useState(t);
            (t !== a && (s(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let r = i.useCallback(() => {
                null != e && (l(!0), (0, J.fu)(e));
            }, [e]);
            return { stop: t ? r : null, stopping: n };
        })(n),
        d = "controlling" === t,
        m = et.intl.string(d ? ee.default.ydhvN1 : ee.default["7U6tIB"]),
        f =
            null != l
                ? (0, a.jsx)(N.$, {
                      variant: "overlay-secondary",
                      size: "sm",
                      text: et.intl.string(ee.default.kj5epw),
                      onClick: l,
                  })
                : null,
        h =
            null != o
                ? (0, a.jsx)(N.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: et.intl.string(ee.default["2HalWx"]),
                      loading: u,
                      onClick: o,
                      "data-testid": "vibegrations-control-stop",
                  })
                : null;
    return s
        ? (0, a.jsxs)("div", {
              className: r()(r3.M0, r3.oE),
              "data-phase": t,
              "data-testid": "vibegrations-control-notice",
              children: [
                  d
                      ? (0, a.jsx)(im.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(rZ.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: r3.ID, children: m }),
                  d ? (0, a.jsx)(k.A, { children: et.intl.string(ee.default.NldIIG) }) : null,
                  d ? (0, a.jsxs)("div", { className: r3.lC, children: [f, h] }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: r3.M0,
              "data-phase": t,
              "data-testid": "vibegrations-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: r3.sp,
                      children: [
                          (0, a.jsx)(rZ.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, a.jsx)(im.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: r3.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: r3.w9,
                                      children: m,
                                  }),
                                  d
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: r3.Rb,
                                            children: et.intl.string(ee.default.NldIIG),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, a.jsxs)("div", { className: r3.lC, children: [f, h] }) : null,
              ],
          });
}
function r8(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            resolveIframe: s,
            frameId: r,
            onOpenPublishedApp: o = null,
        } = e,
        u = (0, tm.o4)(null != n && n === l ? t : null),
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
        c = (0, la.useHasAnyModalOpen)(),
        m = r9(r);
    i.useEffect(() => {
        u &&
            m &&
            null != r &&
            (function (e) {
                if (!r1(e)) return;
                let t = r2(e);
                null != t && (0, r0.sP)(t);
            })(r);
    }, [u, m, r]);
    let [f, h] = i.useState(null),
        [p, g] = i.useState(null),
        [x, b] = i.useState(null),
        v = "idle" !== d;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = r4(s());
            h((t) => (r7(t, e) ? t : e));
            let t = null == p ? null : r4(p);
            (b((e) => (r7(e, t) ? e : t)), null != p && (0, rJ.t)(p.getBoundingClientRect().height));
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
                    null != p && (0, rJ.t)(0));
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
                      className: r3.D,
                      "data-phase": d,
                      children: (0, a.jsx)("div", {
                          className: r3.QF,
                          children: (0, a.jsx)(r5, { phase: d, projectId: t, onOpenPublishedApp: o, compact: w }),
                      }),
                  })
                : null,
            (0, rN.createPortal)(
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)("div", {
                            className: r3.y4,
                            role: "status",
                            "aria-live": "polite",
                            "data-testid": "vibegrations-control-announcer",
                            children:
                                "controlling" === d
                                    ? et.intl.string(ee.default.dIE9zO)
                                    : "handoff" === d
                                      ? et.intl.string(ee.default["7U6tIB"])
                                      : "",
                        }),
                        y
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: r3.ys,
                                          style: A,
                                          "data-testid": "vibegrations-control-glow",
                                          "aria-hidden": !0,
                                      }),
                                      (0, a.jsx)("div", {
                                          className: r3.om,
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
var oe = n(237528),
    ot = n(664121),
    on = n(95477),
    ol = n(724401);
function oa(e) {
    let t = new Date(e);
    function n(e) {
        return String(e).padStart(2, "0");
    }
    return `${t.getFullYear()}-${n(t.getMonth() + 1)}-${n(t.getDate())}T${n(t.getHours())}:${n(t.getMinutes())}`;
}
function oi(e) {
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
            Promise.all([(0, J.DM)(n, o), (0, J.ms)(n, o)])
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
                    title: et.intl.string(ee.default.S3WHxG),
                    subtitle:
                        1 === r.length
                            ? et.intl.formatToPlainString(ee.default["0lt6bH"], { target: e })
                            : et.intl.formatToPlainString(ee.default.zVcDfj, {
                                  environment: et.intl.string(
                                      "preview" === o ? ee.default["/kYdZe"] : ee.default["1/CVzo"],
                                  ),
                                  target: e,
                              }),
                    confirmText: et.intl.string(ee.default.ZlKerR),
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
                                              text: et.intl.string(ee.default.kIWqXR),
                                          }),
                                          C())
                                        : "expired" === e.code
                                          ? (b({
                                                phase: "settled",
                                                environment: o,
                                                tone: "danger",
                                                text: et.intl.formatToPlainString(ee.default.PeVYaC, { days: 30 }),
                                            }),
                                            C())
                                          : "unconfirmed" === e.code
                                            ? (b({
                                                  phase: "settled",
                                                  environment: o,
                                                  tone: "danger",
                                                  text: et.intl.string(ee.default["2xSPXh"]),
                                              }),
                                              C())
                                            : b({
                                                  phase: "settled",
                                                  environment: o,
                                                  tone: "danger",
                                                  text: et.intl.string(ee.default.kXofol),
                                              });
                                })
                                .catch(() => {
                                    b({
                                        phase: "settled",
                                        environment: o,
                                        tone: "danger",
                                        text: et.intl.string(ee.default.kXofol),
                                    });
                                }));
                    },
                });
            },
            [o, r, C],
        ),
        I = i.useCallback(() => {
            (b({ phase: "busy", environment: o, kind: "create" }),
                (0, J._m)(n, o, f)
                    .then(() => {
                        (h(""),
                            b({
                                phase: "settled",
                                environment: o,
                                tone: "positive",
                                text: et.intl.string(ee.default.mfAoFT),
                            }),
                            C());
                    })
                    .catch(() => {
                        b({
                            phase: "settled",
                            environment: o,
                            tone: "danger",
                            text: et.intl.string(ee.default.uhhqP3),
                        });
                    }));
        }, [n, o, f, C]),
        P = "loaded" === S.status ? S.window : null,
        M = "loaded" === S.status ? S.nowMs : 0,
        _ = P?.earliestRestoreTimestampMs ?? M - 2592e6,
        D = "" === p ? null : new Date(p).getTime(),
        L = null != D && !Number.isNaN(D) && D >= _ && D <= M,
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
                ? (0, a.jsx)("div", { className: ol.E8, children: (0, a.jsx)(A.y, {}) })
                : "failed" === S.status
                  ? (0, a.jsx)("div", {
                        className: ol.E8,
                        role: "alert",
                        children: (0, a.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: et.intl.string(ee.default.pwFaXc),
                        }),
                    })
                  : 0 === S.points.length
                    ? (0, a.jsx)("div", {
                          className: ol.E8,
                          children: (0, a.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: et.intl.string(ee.default["7hBXn4"]),
                          }),
                      })
                    : (0, a.jsx)(T.Ip, {
                          className: ol.p_,
                          children: (0, a.jsx)("div", {
                              className: ol.jO,
                              children: S.points.map((e) => {
                                  let t,
                                      l = Number.isNaN((t = Date.parse(e.createdAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, n6.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: n6._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            },
                                      i = (0, a.jsxs)("div", {
                                          className: ol.KW,
                                          children: [
                                              (0, a.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  children: (function (e) {
                                                      switch (e) {
                                                          case "auto_deploy":
                                                              return et.intl.string(ee.default.h4zhWL);
                                                          case "undo":
                                                              return et.intl.string(ee.default["c/tNny"]);
                                                          default:
                                                              return et.intl.string(ee.default["jViU+0"]);
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
                                                  (0, a.jsx)(oe.v, {
                                                      text: et.intl.string(ee.default.TtQOSW),
                                                      variant: "redLight",
                                                  }),
                                          ],
                                      });
                                  return e.expired
                                      ? (0, a.jsxs)(
                                            "div",
                                            {
                                                className: ol.AD,
                                                title: et.intl.formatToPlainString(ee.default.PeVYaC, { days: 30 }),
                                                children: [
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-muted",
                                                        className: ol.Pf,
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
                                                className: ol.f_,
                                                "aria-disabled": j,
                                                onClick: j
                                                    ? void 0
                                                    : () =>
                                                          E(`${e.label} (${l.absolute ?? e.createdAt})`, () =>
                                                              (0, J.$D)(n, e.id),
                                                          ),
                                                children: [
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-md/medium",
                                                        className: ol.Pf,
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
            className: ol.nd,
            "aria-label": et.intl.string(ee.default.FRjicO),
            children: [
                (0, a.jsxs)(tx.Ay, {
                    "aria-label": et.intl.string(ee.default.FRjicO),
                    toolbar: (0, a.jsx)(tx.Ay.Icon, { icon: R.P, tooltip: et.intl.string(et.t.cpT0Cq), onClick: s }),
                    children: [
                        (0, a.jsx)(tx.Ay.ChannelIcon, { icon: ot.R, "aria-hidden": !0 }),
                        (0, a.jsx)(tx.Ay.Title, { children: et.intl.string(ee.default.FRjicO) }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: ol.rf,
                    children: [
                        (0, a.jsxs)("div", {
                            className: ol.ne,
                            children: [
                                r.length > 1 &&
                                    (0, a.jsxs)(i6.V, {
                                        selectedItem: o,
                                        type: "top",
                                        onItemSelect: (e) => {
                                            (u(e), k(0));
                                        },
                                        "aria-label": et.intl.string(ee.default.CNvRyJ),
                                        className: ol.vR,
                                        children: [
                                            (0, a.jsx)(i6.V.Item, {
                                                id: "preview",
                                                children: et.intl.string(ee.default["/kYdZe"]),
                                            }),
                                            (0, a.jsx)(i6.V.Item, {
                                                id: "stable",
                                                children: et.intl.string(ee.default["1/CVzo"]),
                                            }),
                                        ],
                                    }),
                                (0, a.jsxs)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: [
                                        et.intl.formatToPlainString(ee.default.l07ism, { days: 30 }),
                                        null != P
                                            ? ` ${new Date(P.earliestRestoreTimestampMs).toLocaleString()} \u{2192}`
                                            : "",
                                    ],
                                }),
                                "pending" === F.kind
                                    ? (0, a.jsxs)("div", {
                                          className: ol.lm,
                                          role: "status",
                                          children: [
                                              (0, a.jsx)(A.y, { type: A.t.PULSING_ELLIPSIS }),
                                              (0, a.jsx)(v.E, {
                                                  variant: "text-sm/normal",
                                                  children: et.intl.string(ee.default.xMAiew),
                                              }),
                                          ],
                                      })
                                    : "notice" === F.kind
                                      ? (0, a.jsx)("div", {
                                            className: ol.lm,
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
                            className: ol.qr,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: ol.Rv,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: ol.Fv,
                                            children: (0, a.jsx)(on.k, {
                                                label: et.intl.string(ee.default.hJb78b),
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
                                            text: et.intl.string(ee.default["14UarN"]),
                                            onClick: I,
                                            disabled: j,
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: ol._A,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: ol.kv,
                                            children: (0, a.jsx)(on.k, {
                                                label: et.intl.string(ee.default.rI7mpv),
                                                type: "datetime-local",
                                                value: p,
                                                min: oa(_),
                                                max: oa(M),
                                                disabled: j || null == P,
                                                onChange: g,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, a.jsx)(N.$, {
                                            variant: "critical-primary",
                                            size: "md",
                                            text: et.intl.string(ee.default["3D/vYN"]),
                                            disabled: j || !L,
                                            onClick: () => {
                                                null != D && E(new Date(D).toLocaleString(), () => (0, J.dz)(n, o, D));
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
var os = n(120426),
    or = n(873727),
    oo = n(147248),
    ou = n(418842),
    od = n(363195),
    oc = n(171936),
    om = n(796036),
    of = n(462702);
function oh(e) {
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
        x = (0, $.A)(l, o),
        b = x?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([od.A], () => (0, or.x4)(od.A.theme)),
            l = (0, c.bG)([oo.A], () => oo.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: s,
                highContrast: r,
                forcedColors: o,
                underlineLinks: u,
            } = (0, c.cf)([lK.Ay], () => ({
                reducedMotion: lK.Ay.useReducedMotion,
                fontScale: (0, or.U0)(),
                highContrast: lK.Ay.isHighContrastModeEnabled,
                forcedColors: lK.Ay.useForcedColors,
                underlineLinks: lK.Ay.alwaysShowLinkDecorations,
            })),
            d = K.hH.useSetting(),
            m = (0, ou.C)(),
            f = i.useRef(!1),
            h = i.useRef(!1),
            p = i.useRef(0),
            g = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, os.F)(e, t);
                if (null == l) return;
                g.current = l;
                let i = {
                    revision: ++p.current,
                    baseTheme: n,
                    customTheme: (0, or.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: s,
                    reducedMotion: a,
                    highContrast: r,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, rD.W)(l, "set-env", i, {
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
                let n = (0, os.F)(e, t);
                null != n && n !== g.current && v();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, os.F)(e, t) && ((g.current = null), v());
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
            if (null != t) return (0, oc.mn)(t, () => (0, os.F)(p, b));
        }, [t, p, b]));
    let v = i.useCallback(() => (0, os.F)(p, b), [p, b]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: r()(of.Mh, d),
                children: [
                    u,
                    (0, a.jsx)(r8, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: s,
                        resolveIframe: v,
                        frameId: b,
                        onOpenPublishedApp: h,
                    }),
                    (0, a.jsx)("div", { ref: g, className: of.fm, children: m }),
                ],
            }),
            f,
            (0, a.jsx)(rq, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: s,
                resolveIframe: v,
                toggleRef: n,
            }),
        ],
    });
}
function op(e) {
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
        if (o.type === tg.U.MAIN) return ((0, el.HV)(l), () => (0, el.HV)(null));
    }, [l, o.type]),
        i.useEffect(() => {
            null != t && ((0, J.Hc)(t), (0, om.s)());
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
        i.useLayoutEffect(() => () => (0, el.Zq)(0), []));
    let P = Math.max(360, I - 320),
        M = d || o.type === tg.U.MAIN;
    return (0, a.jsx)("div", {
        ref: E,
        className: of.LB,
        children: (0, a.jsx)(oh, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: s,
            surface: o,
            header: u,
            onOpenPublishedApp: S,
            mainClassName: null == u ? void 0 : r()(of.ez, { [of.zt]: d }),
            content: (0, a.jsx)(t2, {
                applicationId: l,
                previewApplicationId: s,
                surface: o,
                previewReady: w,
                previewGate: k,
                availability: A,
                activeMode: N,
                widgetApplicationId: C,
            }),
            sidebar:
                null != t && M
                    ? (0, a.jsx)(i2, {
                          open: d,
                          maxWidth: P,
                          onWidthChange: el.Zq,
                          children: (0, a.jsx)("div", {
                              className: of.cO,
                              children: v
                                  ? (0, a.jsx)(rA, { projectId: t, onClose: j ?? (() => {}) }, t)
                                  : f
                                    ? (0, a.jsx)(
                                          n7,
                                          { projectId: t, onClose: x ?? (() => {}), onRestore: b ?? (() => {}) },
                                          t,
                                      )
                                    : h
                                      ? (0, a.jsx)(oi, { projectId: t, installScope: g, onClose: p ?? (() => {}) }, t)
                                      : (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(rQ.A, { projectId: t }),
                                                (0, a.jsx)(tx.Ay, {
                                                    "aria-label": et.intl.string(et.t["/VQax8"]),
                                                    toolbar: (0, a.jsxs)(a.Fragment, {
                                                        children: [
                                                            m,
                                                            null == c
                                                                ? null
                                                                : (0, a.jsx)(tx.Ay.Icon, {
                                                                      icon: R.P,
                                                                      tooltip: et.intl.string(ee.default.YdgE0j),
                                                                      onClick: c,
                                                                  }),
                                                        ],
                                                    }),
                                                    children: (0, a.jsx)(tx.Ay.Title, {
                                                        children: et.intl.string(et.t["/VQax8"]),
                                                    }),
                                                }),
                                                (0, a.jsx)("div", {
                                                    className: of.cb,
                                                    children: (0, a.jsx)(
                                                        iX,
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
var og = n(58703),
    ox = n(127181);
function ob() {
    (0, la.openModalLazy)(
        async () => {
            let { default: e } = await n.e("978132").then(n.bind(n, 75199));
            return (t) => (0, a.jsx)(e, { ...t });
        },
        { modalKey: "vibegrations-changelog" },
    );
}
var ov = n(413927);
function oj() {
    let e = (0, ox.TH)("desktop");
    if (0 === e.length) return null;
    let t = et.intl.string(ee.default.x07mpp);
    return (0, a.jsxs)("section", {
        className: ov.rN,
        "aria-label": t,
        children: [
            (0, a.jsxs)("div", {
                className: ov.bZ,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: et.intl.string(ee.default.h5CwHI),
                    }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: ov.V,
                children: e.map((e) =>
                    (0, a.jsxs)(
                        "li",
                        {
                            className: ov.S3,
                            children: [
                                (0, a.jsxs)(v.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: ov.VO,
                                    children: [
                                        (0, og.i$)(u()(e.date, "YYYY-MM-DD"), "LL"),
                                        (0, ox.MZ)(e) ? ` \xb7 ${et.intl.string(ee.default.vvxuUI)}` : null,
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
            (0, ox.B)("desktop")
                ? (0, a.jsx)(N.$, {
                      variant: "secondary",
                      size: "sm",
                      text: et.intl.string(ee.default.YWxThz),
                      onClick: ob,
                  })
                : null,
        ],
    });
}
function oy(e) {
    let { className: t, ariaLabel: n, disabled: l, onClick: i, children: s } = e;
    return (0, a.jsx)(y.D, { "aria-disabled": l, "aria-label": n, className: t, onClick: l ? void 0 : i, children: s });
}
var ow = n(865665),
    ok = n(568190);
let oA = { x: 5, y: 7 },
    oN = { x: 5, y: 4 };
function oC(e) {
    let { listClassName: t, radius: n, children: l } = e,
        [s, r] = i.useState(!1);
    return (0, a.jsxs)("div", {
        className: ok.n,
        onMouseEnter: () => r(!0),
        onMouseLeave: () => r(!1),
        children: [
            (0, a.jsx)("ol", { className: t, children: l }),
            s ? (0, a.jsx)(ow.C, { area: 64, radius: n, color: L.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var oS = n(86147),
    oE = n(729475);
function oI(e) {
    let { frame: t, controlProjectId: n } = e,
        l = r9(t?.id ?? null),
        i = (0, tm.o4)(n),
        s = (0, c.bG)(
            [tk.A, tj.A],
            () => null != t && tk.A.getWindowOpen(eG.MLl.ACTIVITY_POPOUT) && tj.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, eB.x1)(t) || s || i) return null;
    let r = r2(t.id);
    if (null == r || !(0, r0.Ub)(r)) return null;
    let o = et.intl.string(l ? et.t.Z7MyNB : et.t.OIDkcp);
    return (0, a.jsx)(U.A.Icon, {
        tooltip: o,
        icon: l ? oS.z : oE.T,
        "aria-label": o,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => {
            var e;
            let n;
            null != (n = r2((e = t.id))) && (0, r0.Ub)(n) && (r1(e) ? (0, r0.sP)(n) : (0, r0.tl)(n));
        },
    });
}
var oT = n(707554),
    oP = n(770178),
    oM = n(765548),
    o_ = n(595528),
    oR = n(885576),
    oD = n(236730);
let oL = "heading-xxl/semibold",
    oF = !1;
function oO() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        l = (0, oM.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        s = (0, oP.w)(l, [], { fireOnMount: !0 }),
        r = (0, c.bG)([o_.A], () => o_.A.isConnected());
    i.useEffect(() => {
        if (!r || !t || oF) return;
        let n = !1,
            l = 0;
        function a() {
            n ||
                (l = window.setTimeout(() => {
                    ((oF = !0), e.current?.play());
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
    let o = (0, c.bG)([oR.A], () => oR.A.isIdle()),
        u = i.useRef(o);
    i.useEffect(() => {
        let t = u.current && !o;
        ((u.current = o), t && oF && (e.current?.stop(), e.current?.play()));
    }, [o]);
    let d = et.intl.string(ee.default["2tYpRK"]);
    return (0, a.jsx)("div", {
        ref: s,
        className: oD.x,
        children: t
            ? (0, a.jsx)(oT.H, { children: (0, a.jsx)(lD.o, { ref: e, text: d, variant: oL, delay: null }) })
            : (0, a.jsx)(E.D, { variant: oL, children: d }),
    });
}
async function oz(e, t, n) {
    (0, J.Hc)(e);
    let l = await (0, J.vX)(e, t);
    (0, J.dv)(e, n, [l]);
}
function oG(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, en.x5)(e.size, t)
        ? null
        : et.intl.formatToPlainString(ee.default.AzziHF, { size: (0, en.ZJ)((0, en.yr)(t)) });
}
async function oB(e, t) {
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
        a = await (0, J.cS)(e, l);
    await ry(a, l);
}
function o$(e) {
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
var oq = n(950305);
let oU = [
    { value: "user", icon: oq.UserIcon, nameMessage: ee.default.iqXIRN },
    { value: "guild", icon: ot.R, nameMessage: ee.default.LdgKdI },
];
function oV(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        s = o$(i.useCallback((e) => n(e, "user"), [n])),
        r = o$(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: s.open, guild: r.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(lz.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: lz.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(lG.W, {
                        "data-menu-migrated": !0,
                        navId: "vibegrations-import-scope",
                        "aria-label": et.intl.string(ee.default.oq8F8s),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(lB.rX, {
                            label: et.intl.string(ee.default.MLg0S8),
                            children: oU
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: et.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        lB.Dr,
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
                        icon: lO.H,
                        text: et.intl.string(ee.default["NHP2+t"]),
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
var oH = n(491920);
function oK(e) {
    let { modes: t, mode: n, onChange: l, className: s } = e,
        o = i.useMemo(() => t.map((e) => ({ value: e, name: ex(e), "aria-controls": eb(e) })), [t]),
        u = i.useCallback(
            (e) => {
                l(e.value);
            },
            [l],
        );
    return null == n
        ? null
        : (0, a.jsx)(sT.I, {
              role: "tablist",
              look: "pill",
              className: r()(oH.b, s),
              optionClassName: oH.u,
              options: o,
              value: n,
              onChange: u,
          });
}
var oW = n(782603),
    oY = n(780338),
    oX = n(663417),
    oQ = n(70688),
    oZ = n(173936),
    oJ = n(473935),
    o0 = n(7437),
    o2 = n(147036),
    o1 = n(123917),
    o6 = n(557875);
let o9 = new Set();
var o3 = n(313007),
    o4 = n(976814),
    o7 = n(746080),
    o5 = n(793712);
let o8 = [];
function ue(e) {
    (0, g.P)((0, x.o)(e, b.Ck.FAILURE));
}
function ut(e) {
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
        C = (0, o3.$s)(t),
        { pending: E, refresh: I } = (0, o0.A)(k ?? null),
        { pending: T, connect: P } = (function (e, t) {
            let [n, l] = i.useState(o9),
                a = i.useRef(o9),
                s = i.useCallback((e) => {
                    ((a.current = (0, o6.Q6)(a.current, e)), l(a.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, o6.K9)(a.current, n.type);
                        async function r() {
                            let l = await (0, J.JI)(e, n.type);
                            (s(n.type), "url" === l.type)
                                ? (0, o1.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, o6.rq)(l.error)
                                          ? et.intl.string(ee.default.avu1u4)
                                          : et.intl.string(ee.default["5fwOcF"]),
                                  );
                        }
                        null != i && ((a.current = i), l(i), r().catch(() => s(n.type)));
                    },
                    [t, e, s],
                ),
            };
        })(A ?? null, ue),
        M = (0, c.bG)([J.Ay], () => (null == A ? o8 : J.Ay.getDeclaredConnections(A))),
        _ = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: a } = e,
                i = [];
            for (let { connection: e, offer: s } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: et.intl.string(ee.default["8oRfMw"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === s
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: et.intl.formatToPlainString(ee.default.JXACNA, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: a.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: et.intl.formatToPlainString(ee.default.JMd7xW, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({
            canRefresh: null != k,
            refreshPending: E,
            offers: i.useMemo(() => (0, o6.Xl)(M), [M]),
            connectPending: T,
        }),
        R = i.useMemo(() => new Map(M.map((e) => [e.type, e])), [M]),
        D = null != f && o,
        L = r && null != d,
        F = D || null != u || L || null != h || null != p || null != v,
        O = i3.p5 && null != l,
        z = i3.p5,
        G = C ? oW.BellIcon : oY.BellSlashIcon;
    return (0, a.jsxs)(lG.W, {
        "data-menu-migrated": !0,
        navId: `vibegrations-project-actions-${t}`,
        "aria-label": et.intl.string(et.t.ogxXGq),
        onClose: N,
        onSelect: N,
        children: [
            null != j || null != w
                ? (0, a.jsxs)(lB.rX, {
                      children: [
                          null != j
                              ? (0, a.jsx)(lB.Dr, {
                                    id: "refresh",
                                    icon: oX.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: oX.RefreshIcon },
                                    label: et.intl.string(ee.default.xKexN1),
                                    disabled: y,
                                    action: j,
                                })
                              : null,
                          null != w
                              ? (0, a.jsx)(lB.Dr, {
                                    id: "close",
                                    icon: oQ.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: oQ.DoorExitIcon },
                                    label: et.intl.string(ee.default.Ea0Wrr),
                                    action: w,
                                })
                              : null,
                      ],
                  })
                : null,
            _.length > 0
                ? (0, a.jsx)(lB.rX, {
                      children: _.map((e) =>
                          (0, a.jsx)(
                              lB.Dr,
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
            (0, a.jsx)(lB.rX, {
                children: (0, a.jsx)(lB.Dr, {
                    id: "mute",
                    label: et.intl.string(C ? ee.default.ZTkrp3 : ee.default.fwSfWU),
                    icon: G,
                    leadingAccessory: { type: "icon", icon: G },
                    action: () => (0, o3.qQ)(t, !C),
                }),
            }),
            F
                ? (0, a.jsxs)(lB.rX, {
                      children: [
                          D
                              ? (0, a.jsx)(lB.Dr, { id: "remix", label: et.intl.string(ee.default.vPI794), action: f })
                              : null,
                          null != u
                              ? (0, a.jsx)(lB.Dr, {
                                    id: "export",
                                    label: et.intl.string(ee.default["7iamDC"]),
                                    action: u,
                                })
                              : null,
                          L
                              ? (0, a.jsx)(lB.Dr, { id: "import", label: et.intl.string(ee.default.lf8HqE), action: d })
                              : null,
                          null != h
                              ? (0, a.jsx)(lB.Dr, {
                                    id: "connect-tool",
                                    label: et.intl.string(ee.default["3qelzD"]),
                                    action: h,
                                })
                              : null,
                          null != p
                              ? (0, a.jsx)(lB.Dr, {
                                    id: "version-history",
                                    label: et.intl.string(ee.default.jAWwzi),
                                    action: p,
                                })
                              : null,
                          null != v
                              ? (0, a.jsx)(lB.Dr, {
                                    id: "restore-points",
                                    label: et.intl.string(ee.default.FRjicO),
                                    action: v,
                                })
                              : null,
                      ],
                  })
                : null,
            z
                ? (0, a.jsxs)(lB.rX, {
                      children: [
                          O
                              ? (0, a.jsx)(lB.Dr, {
                                    id: "copy-link",
                                    label: et.intl.string(et.t.WqhZss),
                                    icon: oZ.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: oZ.LinkIcon },
                                    action: () =>
                                        (0, i3.C)((0, o2.n)(l, o7.VV.VIBEGRATIONS, t), () =>
                                            (0, g.P)((0, x.o)(et.intl.string(et.t["L/PwZf"]), b.Ck.SUCCESS)),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(lB.Dr, {
                              id: "copy-project-id",
                              label: et.intl.string(ee.default.b4TqpT),
                              icon: oJ.L,
                              leadingAccessory: { type: "icon", icon: oJ.L },
                              action: () =>
                                  (0, i3.C)(t, () =>
                                      (0, g.P)((0, x.o)(et.intl.string(ee.default.WOKsTg), b.Ck.SUCCESS)),
                                  ),
                          }),
                      ],
                  })
                : null,
            r
                ? (0, a.jsxs)(lB.rX, {
                      children: [
                          (0, a.jsx)(lB.Dr, {
                              id: "settings",
                              label: et.intl.string(ee.default["xhcY+n"]),
                              icon: S.SettingsIcon,
                              leadingAccessory: { type: "icon", icon: S.SettingsIcon },
                              action: () => (0, o4.A)(t, { guildId: s ?? l, initialTab: "project", isPreview: !0 }),
                          }),
                          (0, a.jsx)(lB.Dr, {
                              id: "delete",
                              label: et.intl.string(et.t.oyYWHE),
                              color: "danger",
                              action: () => {
                                  (0, m.A)({
                                      title: et.intl.formatToPlainString(ee.default.ZokHVz, { name: n }),
                                      subtitle: et.intl.string(ee.default.NmF939),
                                      confirmText: et.intl.string(et.t.oyYWHE),
                                      variant: "critical",
                                      onConfirm: () => {
                                          (0, el.K)(t, () =>
                                              (0, g.P)((0, x.o)(et.intl.string(ee.default.tqKZCi), b.Ck.FAILURE)),
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
function un(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(lz.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: lz.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(ut, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: i } = e,
                { isShown: s } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: o5.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(w.m, {
                              text: et.intl.string(et.t["UKOtz+"]),
                              children: (0, a.jsx)(i_.K, {
                                  icon: a$.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": et.intl.string(et.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": s,
                                  onClick: i,
                              }),
                          })
                        : (0, a.jsx)(U.A.Icon, {
                              icon: a$.MoreHorizontalIcon,
                              tooltip: et.intl.string(et.t["UKOtz+"]),
                              "aria-label": et.intl.string(et.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": s,
                              selected: s,
                              onClick: i,
                          }),
            });
        },
    });
}
var ul = n(104171),
    ua = n(889227),
    ui = n(350086);
let us = rS._3.SIZE_16;
function ur(e) {
    return e instanceof ua.A
        ? (0, a.jsx)(rC.eu, { src: e.getAvatarURL(void 0, (0, rS.FT)(us)), size: us, "aria-hidden": !0 })
        : null;
}
function uo(e) {
    let { creator: t, className: n } = e,
        l = [t.creator, ...t.collaborators],
        i = l.length - 3;
    return (0, a.jsxs)("div", {
        className: r()(ui.c, n),
        "aria-hidden": !0,
        children: [
            (0, a.jsx)(ul.Ay, { users: l.slice(0, 3), max: 3, size: ul.DN.SIZE_16, renderUser: ur }),
            i > 0 ? (0, a.jsxs)(v.E, { variant: "text-xs/medium", color: "text-subtle", children: ["+", i] }) : null,
        ],
    });
}
var uu = n(769979);
function ud(e) {
    let { title: t, actions: n, breadcrumb: l } = e;
    return (0, a.jsx)(U.A, {
        hideSearch: !0,
        toolbar: n,
        className: uu.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: uu.QF,
            children: [
                (0, a.jsx)(D.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: L.A.colors.TEXT_STRONG,
                    className: uu.Kk,
                }),
                null != l
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(U.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, a.jsx)(U.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, a.jsx)(U.A.Title, { className: uu.Qw, wrapperClassName: uu.DD, children: t }),
            ],
        }),
    });
}
var uc = n(683071);
let um = "conjuring-help";
var uf = n(107148);
function uh() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, c.cf)([ew.default, X.A, eR.Ay, aI.A], () => {
                let e = ew.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of X.A.getGuildsArray()) {
                    if (!t.features.has(eG.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = eR.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, z.m1)(t, ew.default, aI.A) === um;
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
                    ? (0, V.pX)(eG.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, o1.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, a.jsx)("div", {
              className: uf.l,
              children: (0, a.jsx)(uc.w, {
                  type: "info",
                  iconAlign: "center",
                  children: et.intl.format(ee.default["4BsHmp"], { channel: um, onNavigate: t }),
              }),
          });
}
var up = n(321593),
    ug = n(227189),
    ux = n(189213);
function ub(e) {
    let { reason: t, transitionState: n, onClose: l } = e,
        i = t === eU.PERMISSIONS;
    return (0, a.jsx)(ux.a, {
        transitionState: n,
        onClose: l,
        title: et.intl.string(i ? ee.default.Rtlv25 : ee.default["+UouPe"]),
        subtitle: et.intl.string(i ? ee.default["nDQB/b"] : ee.default["E0QD++"]),
        size: "sm",
        actions: [{ text: et.intl.string(i ? et.t.BddRzS : ee.default["+Zh4FA"]), variant: "primary", onClick: l }],
    });
}
var uv = n(480007),
    uj = n(584936);
let uy = "user",
    uw = "user",
    uk = "no-server",
    uA = new Map();
function uN(e) {
    return uA.get(e) ?? null;
}
function uC(e) {
    switch (e) {
        case "all":
        case uw:
        case uk:
            return null;
        default:
            return e;
    }
}
function uS(e, t) {
    switch (t) {
        case "all":
            return !0;
        case uw:
            return "user" === e.install_scope;
        case uk:
            return null == (0, ea.HC)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
let uE = "VibegrationsProjectsPanelOpen";
function uI() {
    return t8.w.get(uE) ?? null;
}
function uT(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var uP = n(352978);
function uM(e) {
    return (0, a.jsx)(f.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function u_(e) {
    return (0, a.jsx)(h.u, { ...e, size: "custom", width: 20, height: 20 });
}
function uR(e) {
    return (0, a.jsx)(p.k, { ...e, size: "custom", width: 20, height: 20 });
}
let uD = {
    showPublishBlocked: function (e) {
        (0, la.openModal)((t) => (0, a.jsx)(ub, { ...t, reason: e }));
    },
    openPublishNotes: uv.A,
    showError: (e) => (0, g.P)((0, x.o)(e, b.Ck.FAILURE)),
    openProfile: (e) => {
        (0, H.openUserProfileModal)({ userId: e });
    },
    openAutomodSettings: (e) => {
        Promise.resolve()
            .then(n.bind(n, 468689))
            .then((t) => {
                let { default: n } = t;
                return n.open(e, eG.BEX.GUILD_AUTOMOD);
            })
            .catch(() => {});
    },
};
function uL(e) {
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
                    (0, g.P)((0, x.o)(et.intl.formatToPlainString(ee.default.u9TapG, { name: l }), b.Ck.MESSAGE)),
                    oB(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", n, e),
                                (0, g.P)(
                                    (0, x.o)(
                                        409 === (t = e instanceof J._v ? e.status : null)
                                            ? et.intl.string(ee.default.uB40Hz)
                                            : 404 === t
                                              ? et.intl.string(ee.default.wCq2jC)
                                              : et.intl.string(ee.default.G2GqyP),
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
                onImport: (f = o$(
                    i.useCallback(
                        (e) => {
                            let t = oG(e);
                            null != t
                                ? (0, g.P)((0, x.o)(t, b.Ck.FAILURE))
                                : (0, m.A)({
                                      title: et.intl.formatToPlainString(ee.default.XYZqZK, { name: l }),
                                      subtitle: et.intl.string(ee.default["6syXoH"]),
                                      confirmText: et.intl.string(ee.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, V.pX)(eG.BVt.CHANNEL(I, o7.VV.VIBEGRATIONS, n));
                                          try {
                                              await oz(n, e, et.intl.string(ee.default.C7GU2r));
                                          } catch {
                                              (0, g.P)((0, x.o)(et.intl.string(ee.default["02GpNr"]), b.Ck.FAILURE));
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
        { data: D } = (0, O.YY)(R),
        L = D?.icon == null ? null : Z.Ay.getApplicationIconURL({ id: R, icon: D.icon, size: 40 }),
        z =
            null == E.updated_at
                ? null
                : et.intl.formatToPlainString(ee.default.oMDaqr, { time: u()(E.updated_at).fromNow() }),
        G = (0, ea.HC)(E),
        B =
            (0, c.bG)([X.A], () => (null == G ? null : (X.A.getGuild(G)?.name ?? null)), [G]) ??
            et.intl.string(ee.default["qqH+iN"]),
        $ = (0, c.bG)([ed.Ay], () => ed.Ay.isProjectDeleting(E.id), [E.id]),
        U =
            ((t = M ? E : null),
            (h = t?.id),
            (p = t?.owner_user_id),
            (N = (0, c.yK)(
                [eA.Ay],
                () =>
                    null == h
                        ? []
                        : [
                              ...new Set(
                                  eA.Ay.getMessages(h)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== p ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [h, p],
            )),
            i.useEffect(() => {
                null != p && (eI(p), N.forEach(eI));
            }, [p, N]),
            (C = (0, c.bG)([ew.default], () => (null == p ? null : ew.default.getUser(p)), [p])),
            (S = (0, c.yK)([ew.default], () => N.map((e) => ew.default.getUser(e)).filter((e) => null != e), [N])),
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
                                      ? et.intl.formatToPlainString(ee.default.TwgkQe, { creator: e })
                                      : et.intl.formatToPlainString(ee.default.yZ9HPM, {
                                            creator: e,
                                            collaborators:
                                                0 === (n = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === n
                                                      ? et.intl.formatToPlainString(et.t["8s9z8P"], { first: t[0] })
                                                      : 2 === n
                                                        ? et.intl.formatToPlainString(et.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === n
                                                          ? et.intl.formatToPlainString(et.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : et.intl.formatToPlainString(et.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: n - 3,
                                                            }),
                                        });
                              })(
                                  (0, ek.mG)(C),
                                  S.map((e) => (0, ek.mG)(e)),
                              ),
                          },
                [C, S],
            )),
        H = i.useId(),
        K = (0, a.jsx)(v.E, { variant: "text-md/semibold", color: "text-strong", className: uP.j1, children: E.name }),
        W =
            null == L
                ? (0, a.jsx)("div", {
                      className: uP.a8,
                      "aria-hidden": !0,
                      children: (0, a.jsx)(j.k, { size: "custom", width: 20, height: 20, color: "var(--icon-muted)" }),
                  })
                : (0, a.jsx)("img", { alt: "", src: L, className: uP.VJ }),
        Y = (0, tf.lE)(E.id),
        Q = {
            projectId: E.id,
            projectName: E.name,
            guildId: I,
            projectGuildId: E.guild_id,
            isOwner: (0, ed.PV)(E),
            canRemix: (0, ed.H_)(E),
            onRemix: P,
            onExport: _.onExport,
            onImport: _.onImport,
        };
    return (0, a.jsxs)("div", {
        className: r()(uP.OY, { [uP.Wy]: $ }),
        "aria-busy": $,
        children: [
            (0, a.jsx)(up.Ay, { projectId: E.id }),
            null == Y || $ ? null : (0, a.jsx)("div", { className: uP.SB, "aria-hidden": !0 }),
            (0, a.jsxs)(y.D, {
                className: uP.W6,
                onClick: $ ? void 0 : T,
                onContextMenu: function (e) {
                    $ || (0, F.jA)(e, () => (0, a.jsx)(ut, { ...Q, onCloseMenu: F.Z_ }));
                },
                tabIndex: $ ? -1 : void 0,
                "aria-describedby": null != U ? H : void 0,
                children: [
                    W,
                    (0, a.jsxs)("div", {
                        className: uP.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: uP.Ub,
                                children: [
                                    null != U ? (0, a.jsx)(w.m, { text: U.label, ariaHidden: !0, children: K }) : K,
                                    null == U || $ ? null : (0, a.jsx)(uo, { creator: U, className: uP.rb }),
                                    Y !== d.I.NEEDS_INPUT || $
                                        ? null
                                        : (0, a.jsxs)("div", {
                                              className: uP.fs,
                                              children: [
                                                  (0, a.jsx)(q.A, { mentionsCount: 1 }),
                                                  (0, a.jsx)(k.A, { children: et.intl.string(ee.default.V3e2Yd) }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: uP.h3,
                                children: [
                                    (0, a.jsx)(v.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: uP.Wb,
                                        children: $ ? et.intl.string(ee.default.EwXXks) : B,
                                    }),
                                    null == z || $
                                        ? null
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("span", {
                                                      className: uP.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, a.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: uP.zM,
                                                      children: z,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != U ? (0, a.jsx)(k.A, { id: H, children: U.label }) : null,
            (0, a.jsx)("div", {
                className: uP.M2,
                children: $
                    ? (0, a.jsx)(A.y, { type: A.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: uP.Pl,
                          children: [(0, a.jsx)(un, { ...Q, trigger: "iconButton" }), _.importInput],
                      }),
            }),
        ],
    });
}
function uF(e) {
    var t;
    let { project: l, projectsLoaded: s, onBack: r, guildId: o } = e,
        [u, d] = i.useState(!0),
        [f, h] = i.useState(!1),
        [p, j] = i.useState(!1),
        [y, k] = i.useState(!1),
        A = K.Q_.useSetting(),
        [I, T] = i.useState(null),
        [P, M] = i.useState(null),
        _ = l?.id ?? null,
        R = i.useRef(_),
        D = i.useRef(!0),
        L = i.useRef(!1),
        F = i.useRef(null);
    ((R.current = _),
        i.useEffect(
            () => (
                (D.current = !0),
                () => {
                    D.current = !1;
                }
            ),
            [],
        ));
    let q = (0, c.bG)([ed.Ay], () => (null == _ ? null : ed.Ay.getIntegrationStatus(_)), [_]),
        { data: H, isLoading: Y } = (0, O.YY)(l?.preview_application_id ?? void 0),
        X = null != _ && P !== _,
        Q = q?.preview_ready === !0,
        Z = q?.has_activity === !0,
        {
            availability: en,
            activeMode: ea,
            setMode: ei,
            widgetApplicationId: eo,
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
                g = (0, c.bG)([eh.default], () => eh.default.getId()),
                { applicationWidgetConfig: x } = (0, em.A)(g, p ?? void 0),
                b = x?.surfaces,
                v = ej({
                    widgetTop: b?.[ec.m.WIDGET_TOP] != null,
                    widgetBottom: b?.[ec.m.WIDGET_BOTTOM] != null,
                    miniProfile: b?.[ec.m.MINI_PROFILE] != null,
                }),
                j = null != p && (u ? v.hasMainCard : v.hasAny),
                { data: y } = (0, O.YY)(a ?? void 0),
                w = null != a && y?.bot?.id != null,
                { data: k, isLoading: A } = (0, O.YY)(l ?? void 0),
                N = s || (0, ef.X)(k),
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
                        modes: (n = ep.filter((e) => ev[e](t))),
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
            declaredActivity: Z,
            installScope: l?.install_scope ?? null,
            ownerAuthorizationRevoked: q?.owner_authorization_revoked === !0,
        }),
        eu = ey({
            installScope: l?.install_scope ?? null,
            previewReady: Q,
            integrationInstalled: q?.integration_installed ?? null,
            botPermissionsChanged: q?.bot_permissions_changed === !0,
        }),
        eg = u && !y && !f && !p,
        ex = et.intl.string(eg ? ee.default.YdgE0j : ee.default.aWVf4j),
        eb = i.useCallback(() => {
            if (y || f || p) {
                (k(!1), h(!1), j(!1), d(!0));
                return;
            }
            d((e) => !e);
        }, [y, f, p]),
        ew = i.useCallback(() => d(!1), []),
        { active: ek } = tc(_),
        eA = i.useRef(null),
        eN = (0, tm.o4)(_),
        eC = et.intl.string(eN ? ee.default.bfQ4Ki : ek ? ee.default.rfNEHn : ee.default.lXcEa2),
        eS = i.useCallback(() => {
            if (null != _) {
                let e;
                if (ek) return void tr(_);
                (k(!1), h(!1), j(!1), d(!0), (e = ti(_)).active || ts(_, { ...e, active: !0 }));
            }
        }, [_, ek]),
        eE = i.useCallback(() => {
            k((e) => !e && (d(!0), h(!1), j(!1), !0));
        }, []),
        eI = i.useCallback(() => k(!1), []),
        eT = i.useCallback(
            (e) => {
                if (null == l || L.current) return;
                let t = l.id;
                function n() {
                    return D.current && R.current === t;
                }
                ((L.current = !0),
                    h(!1),
                    d(!0),
                    T({ entry: e, status: "restoring" }),
                    (0, J.oB)(t, e.sha)
                        .then(
                            () => {
                                n() && T({ entry: e, status: "restored" });
                            },
                            (l) => {
                                n() &&
                                    (T({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", t, l),
                                    (0, g.P)((0, x.o)(et.intl.string(ee.default.q6iZ84), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            n() && (L.current = !1);
                        }));
            },
            [l],
        ),
        eP = (0, c.bG)([th.A], () => th.A.isBuilderPreviewMobile()),
        eM = et.intl.string(eP ? ee.default["3uCc8U"] : ee.default["+nzCxZ"]),
        e_ = i.useCallback(() => (0, el.GG)(!eP), [eP]),
        eD = (0, $.A)(l?.preview_application_id ?? null, eB.sd),
        eL = (0, eB.x1)(eD) && eD.data.proxyTicketRefreshing,
        eO = i.useCallback(() => {
            null == eD || eL || B.A.refreshProxyTicket(eD.id);
        }, [eD, eL]),
        ez = i.useCallback(() => {
            var e, t;
            (null != l && ((e = l.id), (t = eD?.id), (0, J.Bn)(e), (0, tb.A)().leaveFrame(t)), r());
        }, [l, eD?.id, r]),
        e$ = i.useCallback(() => {
            null != l && (d(!0), (0, J.dv)(l.id, et.intl.string(ee.default["2ejwtJ"])));
        }, [l]),
        eq = o$(
            i.useCallback(
                (e) => {
                    if (null == l) return;
                    let t = l.id,
                        n = oG(e);
                    null != n
                        ? (0, g.P)((0, x.o)(n, b.Ck.FAILURE))
                        : (0, m.A)({
                              title: et.intl.formatToPlainString(ee.default.XYZqZK, { name: l.name }),
                              subtitle: et.intl.string(ee.default["6syXoH"]),
                              confirmText: et.intl.string(ee.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  d(!0);
                                  try {
                                      await oz(t, e, et.intl.string(ee.default.C7GU2r));
                                  } catch {
                                      (0, g.P)((0, x.o)(et.intl.string(ee.default["02GpNr"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [l],
            ),
        ),
        eU = i.useCallback(() => {
            null != l && (0, uj.A)(l, o);
        }, [l, o]),
        eH = i.useCallback(async () => {
            if (null == _ || R.current !== _) return;
            F.current?.abort();
            let e = new AbortController();
            ((F.current = e), M(null));
            try {
                await (0, el.U1)(_, e.signal);
            } catch {
            } finally {
                e.signal.aborted || F.current !== e || R.current !== _ || M(_);
            }
        }, [_]);
    i.useEffect(
        () => (
            eH(),
            () => {
                (F.current?.abort(), (F.current = null));
            }
        ),
        [eH],
    );
    let eK = es(l ?? null, q ?? null, o),
        eW = ((t = l?.application_id ?? null), (0, c.bG)([eR.Ay], () => (null == t ? null : (0, eF.SH)(o, t)), [o, t])),
        eY = i.useMemo(() => (null == eW ? null : () => (0, V.pX)(eG.BVt.CHANNEL(o, eW))), [o, eW]),
        eX = i.useCallback(async () => {
            null != l && (await er(l, eK));
        }, [eK, l]),
        eQ = i.useCallback(async () => {
            try {
                await eX();
            } catch {}
            await eH();
        }, [eH, eX]),
        eZ = i.useMemo(() => {
            let e = l?.preview_application_id;
            return null == e || Y || X
                ? null
                : {
                      ...(0, ug.p)({ applicationId: e, application: H ?? null, guildId: eK }),
                      onClose: () => {
                          eQ();
                      },
                  };
        }, [X, eQ, eK, Y, H, l?.preview_application_id]),
        eJ = eu ? { type: "permissions", authorizeProps: eZ } : X && null == q ? { type: "checking" } : void 0,
        e0 = (0, c.bG)([ed.Ay], () => null != _ && ed.Ay.isProjectDeleting(_), [_]);
    i.useEffect(() => {
        ((null == l && s) || e0) && (0, V.bG)(eG.BVt.CHANNEL(o, o7.VV.VIBEGRATIONS));
    }, [o, l, s, e0]);
    let e2 = i.useMemo(() => ({ guildId: o, platform: uD, busy: X || Y }), [o, X, Y]),
        e1 = e6(_, e2),
        e9 = e1?.intent === "open" && "channel" === e1.destination ? e1.appChannelId : null,
        e3 = (0, c.bG)([W.A], () => (null == e9 ? null : W.A.getChannel(e9)), [e9]),
        e4 = (0, z.Ay)(e3),
        e7 = (0, G.gU)(e3),
        e5 =
            null != e4 && null != e7
                ? et.intl.format(ee.default.W95rrI, {
                      channel: e4,
                      channelIconHook: (e, t) =>
                          (0, a.jsx)(e7, { size: "xs", color: "currentColor", className: uP.Y2 }, t),
                  })
                : e1?.label,
        e8 = e1?.upToDate === !0 ? et.intl.string(ee.default["5U1fkv"]) : (e1?.disabledReason ?? null),
        te =
            null == e1
                ? null
                : (0, a.jsx)("div", {
                      className: uP.As,
                      children: (0, a.jsx)(w.m, {
                          text: e8,
                          asContainer: !0,
                          children: (0, a.jsx)(N.$, {
                              size: "sm",
                              variant: e1.upToDate ? "secondary" : "primary",
                              loading: e1.publishing,
                              disabled: e1.disabled,
                              onClick: () => e1.run("header"),
                              text: e5,
                          }),
                      }),
                  }),
        tt = (0, a.jsx)(ud, {
            title: l?.name ?? et.intl.string(ee.default.F2dRba),
            breadcrumb: { title: et.intl.string(ee.default.Xmvb23), onClick: r },
            actions:
                null == l
                    ? null
                    : (0, a.jsxs)("div", {
                          className: uP.FO,
                          children: [
                              en.showModeSwitch ? (0, a.jsx)(oK, { modes: en.modes, mode: ea, onChange: ei }) : null,
                              (0, a.jsx)(U.A.Icon, {
                                  icon: eP ? uR : u_,
                                  tooltip: eM,
                                  "aria-label": eM,
                                  selected: eP,
                                  onClick: e_,
                              }),
                              (0, a.jsx)(U.A.Icon, {
                                  ref: eA,
                                  icon: aB,
                                  tooltip: eC,
                                  "aria-label": eC,
                                  selected: ek,
                                  disabled: eN,
                                  onClick: eS,
                              }),
                              "frame" === ea ? (0, a.jsx)(oI, { frame: eD, controlProjectId: l.id }) : null,
                              (0, a.jsx)("div", { className: uP.YJ }),
                              A
                                  ? (0, a.jsx)(U.A.Icon, {
                                        icon: C.BugIcon,
                                        tooltip: et.intl.string(ee.default["8MLfBT"]),
                                        "aria-label": et.intl.string(ee.default["8MLfBT"]),
                                        selected: y,
                                        onClick: eE,
                                    })
                                  : null,
                              (0, a.jsx)(U.A.Icon, {
                                  icon: S.SettingsIcon,
                                  tooltip: et.intl.string(ee.default.cWmjzs),
                                  "aria-label": et.intl.string(ee.default.cWmjzs),
                                  onClick: () => (0, o4.A)(l.id, { guildId: o, isPreview: !0 }),
                              }),
                              (0, a.jsx)(un, {
                                  projectId: l.id,
                                  projectName: l.name,
                                  guildId: o,
                                  projectGuildId: l.guild_id,
                                  isOwner: (0, ed.PV)(l),
                                  canRemix: (0, ed.H_)(l),
                                  onRefresh: (0, eB.x1)(eD) ? eO : void 0,
                                  isRefreshing: eL,
                                  onClose: ez,
                                  onExport: e$,
                                  onImport: eq.open,
                                  onRemix: eU,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = l.id),
                                          void (0, la.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("964476"),
                                                  n.e("988322"),
                                              ]).then(n.bind(n, 748985));
                                              return (n) => (0, a.jsx)(t, { ...n, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      I?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                (d(!0), k(!1), j(!1), h(!0));
                                            },
                                  onRestorePoints: () => {
                                      (d(!0), k(!1), h(!1), j(!0));
                                  },
                                  refreshApplicationId:
                                      en.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== en.profileState
                                          ? eo
                                          : null,
                                  previewProjectId: l.id,
                              }),
                              eg
                                  ? null
                                  : (0, a.jsx)(U.A.Icon, { icon: uM, tooltip: ex, "aria-label": ex, onClick: eb }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: uP.nj,
        children: [
            eq.input,
            (0, a.jsx)("main", {
                className: uP.JX,
                children:
                    null == l
                        ? (0, a.jsxs)("div", {
                              className: uP.j5,
                              children: [
                                  tt,
                                  (0, a.jsxs)("div", {
                                      className: uP.sD,
                                      children: [
                                          (0, a.jsx)(E.D, {
                                              variant: "heading-lg/semibold",
                                              children: et.intl.string(ee.default.F2dRba),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: et.intl.string(ee.default.GnEJ3o),
                                          }),
                                          (0, a.jsx)(N.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: et.intl.string(ee.default["42EdIV"]),
                                              onClick: () => (0, el.hF)(o),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(eV.Provider, {
                              value: e2,
                              children: (0, a.jsx)(
                                  op,
                                  {
                                      projectId: l.id,
                                      designFeedbackToggleRef: eA,
                                      applicationId: l.preview_application_id,
                                      previewApplicationId: l.preview_application_id,
                                      surface: eB.sd,
                                      header: tt,
                                      chatOpen: u,
                                      onCloseChat: ew,
                                      chatHeaderAction: te,
                                      versionHistoryOpen: f,
                                      onCloseVersionHistory: () => h(!1),
                                      restorePointsOpen: p,
                                      onCloseRestorePoints: () => j(!1),
                                      installScope: l.install_scope,
                                      debugOpen: A && y,
                                      onCloseDebug: eI,
                                      onRestoreVersion: eT,
                                      restoreState: I,
                                      previewReady: Q,
                                      previewGate: eJ,
                                      availability: en,
                                      activeMode: ea,
                                      widgetApplicationId: eo,
                                      onOpenPublishedApp: eY,
                                  },
                                  l.id,
                              ),
                          }),
            }),
        ],
    });
}
function uO(e) {
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
            onStartTemplate: F,
            onSubmitTemplate: O,
            onCancelTemplate: z,
            onSkipTemplate: G,
            onImportNewProject: B,
            importing: $,
        } = e,
        [q, V] = i.useState(() => ({ guildId: s, filter: uN(s) })),
        H = (q.guildId === s ? q.filter : uN(s)) ?? s,
        K = i.useCallback(
            (e) => {
                (uA.set(s, e), V({ guildId: s, filter: e }));
            },
            [s],
        ),
        W = (0, c.yK)(
            [X.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let l = [];
                    for (let e of n) {
                        let t = X.A.getGuild(e);
                        null != t && l.push(t);
                    }
                    return l.sort((e, t) => e.name.localeCompare(t.name));
                })(t, s),
            [t, s],
        ),
        Y = i.useMemo(
            () => [
                { id: "vibegrations-filter-all", value: "all", leading: D.D, label: et.intl.string(ee.default.BRUwuY) },
                {
                    id: "vibegrations-filter-user",
                    value: uw,
                    leading: oq.UserIcon,
                    label: et.intl.string(ee.default.mtU4VZ),
                },
                {
                    id: "vibegrations-filter-no-server",
                    value: uk,
                    leading: ot.R,
                    label: et.intl.string(ee.default["qqH+iN"]),
                },
                ...W.map((e) => ({
                    id: `vibegrations-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(nZ.Ay, { guild: e, size: nZ.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [W],
        ),
        Q = (0, c.yK)(
            [ed.Ay, X.A],
            () => {
                let e = uC(H);
                if (null != e) return ed.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(X.A.getGuilds()))
                    ed.Ay.hasFetchedGuildProjects(e.id) && t.push(...ed.Ay.getSharedProjects(e.id));
                return t;
            },
            [H],
        );
    i.useEffect(() => {
        let e = uC(H);
        null == e || ed.Ay.hasFetchedGuildProjects(e) || (0, el.hF)(e);
    }, [H]);
    let Z = i.useMemo(
            () =>
                Q.filter((e) => uS(e, H)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [Q, H],
        ),
        J = i.useMemo(
            () => [
                {
                    label: et.intl.string(ee.default.MLg0S8),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: uy,
                            label: et.intl.string(ee.default.UXnPhI),
                            leading: oq.UserIcon,
                        },
                        ...j.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, a.jsx)(nZ.Ay, { guild: e, size: nZ.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [j],
        ),
        ea = i.useMemo(
            () =>
                t
                    .filter((e) => uS(e, H))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, H],
        ),
        ei = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, eF.X0)(e, s)
                    ? k(e.id)
                    : (0, g.P)((0, x.o)(et.intl.string(ee.default["wY7I+H"]), b.Ck.MESSAGE));
            },
            [s, k],
        ),
        es = et.intl.string(ee.default.TU9IGR),
        er = [
            et.intl.string(ee.default["E+Q26x"]),
            et.intl.string(ee.default["06/jqP"]),
            et.intl.string(ee.default["3gSfUa"]),
        ],
        eu = [
            {
                id: "moderation-bot",
                name: et.intl.string(ee.default.idRAwG),
                description: et.intl.string(ee.default["oP90O/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: et.intl.string(ee.default.BLDsiz),
                description: et.intl.string(ee.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: et.intl.string(ee.default["+abXa8"]),
                description: et.intl.string(ee.default.OZYPMR),
            },
            {
                id: "rust-sphere",
                name: et.intl.string(ee.default.ieAgex),
                description: et.intl.string(ee.default["5yvj+f"]),
            },
        ],
        ec = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: s,
                        eligibleGuilds: j,
                        onStart: (t) => F(e.name, t),
                        onSubmit: (t, n, l) => O(e, t, n, l),
                        onCancel: z,
                        onSkip: G,
                    }),
                    (0, la.openModalLazy)(
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
            [j, s, z, E, G, F, O],
        ),
        em = et.intl.string(ee.default.FYK2xQ),
        ef =
            (i.useEffect(() => {
                (0, el.b8)();
            }, []),
            (0, c.bG)([ed.Ay], () => {
                let e = ed.Ay.getMaxProjects();
                return null != e && ed.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - ed.Ay.getOwnedProjects().length)
                    : null;
            })),
        eh = et.intl.string(ee.default["/SUK82"]),
        ep = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || S());
            },
            [d, S],
        ),
        eg = uC(H) ?? s,
        ex = (0, c.bG)([ed.Ay], () => ed.Ay.getGuildProjectsFetchState(eg), [eg]),
        eb = (0, c.bG)([ed.Ay], () => ed.Ay.getGuildProjectsFetchState(s), [s]),
        [ev, ej] = i.useState(uI),
        ey = i.useMemo(() => t8.w.get(uT(s)) ?? !1, [s]),
        ew = "success" === eb,
        ek = (0, c.yK)([ed.Ay], () => ed.Ay.getSharedProjects(s), [s]).length > 0 || t.some((e) => uS(e, s)),
        eA = ev ?? (!!ek || "error" === eb || (!ew && ey));
    i.useEffect(() => {
        ew && t8.w.set(uT(s), ek);
    }, [ew, ek, s]);
    let eN = i.useCallback((e) => {
            (t8.w.set(uE, e), ej(e));
        }, []),
        eC = i.useCallback(() => eN(!eA), [eN, eA]),
        eS = i.useCallback(() => eN(!1), [eN]),
        eE = et.intl.string(ee.default.jDPFDh),
        eI = eA ? eE : et.intl.string(ee.default.a6d2y1);
    return (0, a.jsx)("div", {
        className: r()(uP.nj, uP.a0),
        children: (0, a.jsxs)("div", {
            className: uP.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: uP.ps,
                    children: [
                        (0, a.jsx)(ud, {
                            title: et.intl.string(ee.default.Xmvb23),
                            actions: (0, a.jsx)(U.A.Icon, {
                                icon: I.Z,
                                tooltip: eI,
                                "aria-label": eI,
                                selected: eA,
                                onClick: eC,
                            }),
                        }),
                        (0, a.jsx)(T.Ip, {
                            className: uP.Yy,
                            children: (0, a.jsx)("div", {
                                className: uP.Mo,
                                children: (0, a.jsxs)("section", {
                                    className: r()(uP.Qs, uP.Ix),
                                    children: [
                                        (0, a.jsx)(uh, {}),
                                        (0, a.jsx)(oO, {}),
                                        (0, a.jsxs)("section", {
                                            className: uP.WI,
                                            "aria-label": em,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: uP.G9,
                                                    children: [
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: em,
                                                        }),
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: et.intl.string(ee.default.BTNdyX),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(oC, {
                                                    listClassName: uP.Aw,
                                                    radius: oA,
                                                    children: eu.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: uP.EA,
                                                                children: (0, a.jsxs)(oy, {
                                                                    disabled: o,
                                                                    ariaLabel: et.intl.formatToPlainString(
                                                                        ee.default.ER1uQ4,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: r()(uP.nx, uP.rz),
                                                                    onClick: () => ec(e),
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            className: uP.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, a.jsx)(v.E, {
                                                                            className: uP.BK,
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
                                            className: uP.WI,
                                            "aria-label": eh,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: uP.G9,
                                                    children: [
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: eh,
                                                        }),
                                                        (0, a.jsx)(v.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: et.intl.string(ee.default["+aBXyx"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(oC, {
                                                    listClassName: uP.Aw,
                                                    radius: oN,
                                                    children: er.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: uP.EA,
                                                                children: (0, a.jsx)(oy, {
                                                                    disabled: o,
                                                                    className: uP.nx,
                                                                    onClick: () => S(e),
                                                                    children: (0, a.jsx)(v.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: uP.un,
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
                                        (0, a.jsx)(oj, {}),
                                    ],
                                }),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: uP.Yl,
                            children: (0, a.jsxs)("div", {
                                className: r()(uP.Qs, uP.DA),
                                children: [
                                    (0, a.jsx)(P.f, {
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
                                        ? (0, a.jsx)(M.S, {
                                              checked: h,
                                              disabled: o,
                                              onChange: () => p(!h),
                                              label: et.intl.string(ee.default.nyY2CS),
                                              description: et.intl.string(ee.default.EwshDz),
                                          })
                                        : null,
                                    (0, a.jsxs)("div", {
                                        className: uP.VP,
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: uP.gH,
                                                children: (0, a.jsx)(_.l, {
                                                    selectionMode: "single",
                                                    label: et.intl.string(ee.default.MLg0S8),
                                                    hideLabel: !0,
                                                    placeholder: et.intl.string(ee.default.MLg0S8),
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
                                                              ? et.intl.string(ee.default.JQU61N)
                                                              : et.intl.formatToPlainString(ee.default["336dtK"], {
                                                                    count: ef,
                                                                }),
                                                  })
                                                : null,
                                            (0, a.jsx)(l6, {
                                                settings: y ?? en.v0,
                                                tiers: en.qf,
                                                choices: (0, eo.e)()
                                                    ? {
                                                          main: [...en.S8.main, ...en.wF.main],
                                                          subagent: [...en.S8.subagent, ...en.wF.subagent],
                                                          thinking: en.S8.thinking,
                                                      }
                                                    : en.S8,
                                                disabled: o,
                                                onChange: w,
                                            }),
                                            (0, a.jsx)(N.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: et.intl.string(et.t.CumH4u),
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
                    className: uP.pA,
                    hidden: !eA,
                    "aria-label": et.intl.string(ee.default.Bo5fE3),
                    children: [
                        (0, a.jsxs)("div", {
                            className: uP.IR,
                            children: [
                                (0, a.jsx)(v.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: uP.RM,
                                    children: et.intl.string(ee.default.Bo5fE3),
                                }),
                                (0, a.jsxs)("div", {
                                    className: uP.Ss,
                                    children: [
                                        (0, a.jsx)(oV, { importing: $, onImport: B }),
                                        (0, a.jsx)(U.A.Icon, { icon: R.P, tooltip: eE, "aria-label": eE, onClick: eS }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)(T.Ip, {
                            className: uP.xe,
                            children: [
                                (0, a.jsx)("div", {
                                    className: uP.Vw,
                                    children: (0, a.jsx)(_.l, {
                                        selectionMode: "single",
                                        label: et.intl.string(ee.default.mvtKAm),
                                        hideLabel: !0,
                                        options: Y,
                                        value: H,
                                        onSelectionChange: K,
                                    }),
                                }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: uP.wE,
                                    children: et.intl.string(ee.default.YnAFtT),
                                }),
                                ("unattempted" === ex || "loading" === ex) && 0 === ea.length
                                    ? (0, a.jsx)("div", { className: uP.E8, children: (0, a.jsx)(A.y, {}) })
                                    : "error" === ex && 0 === ea.length
                                      ? (0, a.jsxs)("div", {
                                            className: uP.E8,
                                            children: [
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: uP.JS,
                                                    children: et.intl.string(ee.default["IN/HRP"]),
                                                }),
                                                (0, a.jsx)(N.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: et.intl.string(ee.default["42EdIV"]),
                                                    onClick: () => (0, el.hF)(eg),
                                                }),
                                            ],
                                        })
                                      : 0 === ea.length
                                        ? (0, a.jsx)("div", {
                                              className: uP.D1,
                                              children: (0, a.jsxs)("div", {
                                                  className: uP.ST,
                                                  children: [
                                                      (0, a.jsx)(D.D, { size: "lg", color: L.A.colors.TEXT_SUBTLE }),
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: uP.sI,
                                                          children: et.intl.string(ee.default["vqy+in"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: uP.Dq,
                                              children: ea.map((e) =>
                                                  (0, a.jsx)(
                                                      uL,
                                                      {
                                                          project: e,
                                                          guildId: s,
                                                          onSelect: () => ei(e),
                                                          onRemix: () => (0, uj.A)(e, s),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                Z.length > 0
                                    ? (0, a.jsxs)("div", {
                                          className: uP.qx,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: uP.uc,
                                                  children: [
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: et.intl.string(ee.default.jrCnUc),
                                                      }),
                                                      (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: et.intl.string(ee.default["1KEhDu"]),
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: uP.Dq,
                                                  children: Z.map((e) =>
                                                      (0, a.jsx)(
                                                          uL,
                                                          {
                                                              project: e,
                                                              guildId: s,
                                                              onSelect: () => ei(e),
                                                              onRemix: () => (0, uj.A)(e, s),
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
function uz(e) {
    let t,
        { guildId: n, projectId: l } = e,
        s = (0, c.yK)([ed.Ay], () => ed.Ay.getOwnedProjects()),
        r = (0, c.yK)([Y.Ay], () => Y.Ay.getSelfMember(n)?.roles ?? [], [n]),
        o = (0, c.bG)(
            [X.A, Q.A],
            () => {
                let e = X.A.getGuild(n);
                return null != e && Q.A.can(eG.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [u, d] = i.useState(""),
        m = l ?? null,
        [f, h] = i.useState(!1),
        [p, v] = i.useState(null),
        j = (0, eT._)("VibegrationsScreen"),
        [y, w] = i.useState(null);
    i.useEffect(() => {
        w(null);
    }, [n]);
    let k = i.useMemo(() => (j.some((e) => e.id === n) ? n : uy), [j, n]),
        A = y ?? k,
        N = A === uy ? "user" : "guild",
        C = A === uy ? n : A,
        [S, E] = i.useState(!0),
        [I, T] = i.useState(null);
    (i.useEffect(() => {
        (0, el.hF)(n);
    }, [n, r, o]),
        i.useEffect(() => {
            (0, el.dm)(n, m);
        }, [n, m]));
    let P = i.useCallback(
            async (e, t, n) => {
                let l = await (0, el.gA)({ guild_id: t, install_scope: n, flags: (0, en.RS)("guild" === n && S) });
                ((0, J.Hc)(l),
                    (0, J.r2)(l, I ?? en.v0),
                    e(l),
                    (0, V.pX)(eG.BVt.CHANNEL(t, o7.VV.VIBEGRATIONS, l)),
                    d(""),
                    T(null));
            },
            [S, I],
        ),
        M = i.useCallback(
            async (e) => {
                let t = (e ?? u).trim(),
                    n = tp({ idea: t, installScope: N, submitting: f });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && d(e), h(!0), v(null));
                    try {
                        await P((e) => (0, J.dv)(e, t), C, N);
                    } catch (e) {
                        v((0, ei.Xd)(e));
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
                                (0, J.dv)(
                                    t,
                                    ((n = e.name),
                                    et.intl.formatToPlainString(ee.default["9D9L0S"], { templateName: n })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            C,
                            N,
                        );
                    } catch (e) {
                        v((0, ei.Xd)(e));
                    } finally {
                        h(!1);
                    }
                }
            },
            [P, N, C, f],
        ),
        R = i.useCallback(
            async (e, t) => {
                let n = await (0, el.gA)({ guild_id: t, install_scope: "guild", flags: (0, en.RS)(S) });
                return ((0, J.Hc)(n), (0, J.r2)(n, I ?? en.v0), (0, J.dv)(n, (0, eu.v8)(e)), n);
            },
            [S, I],
        ),
        D = i.useCallback(async (e, t, n, l) => {
            if (ed.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, el.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new ei.uQ((0, ei.hj)(e), e.status);
            }
            ((0, J.dv)(t, l, void 0, { templateId: e.id }),
                (0, V.pX)(eG.BVt.CHANNEL(n, o7.VV.VIBEGRATIONS, t)),
                T(null));
        }, []),
        L = i.useCallback((e) => {
            (0, el.xx)(e).catch(() => void 0);
        }, []),
        F = i.useCallback(
            (e) => {
                let t = ed.Ay.getProject(e)?.guild_id ?? n;
                ((0, V.pX)(eG.BVt.CHANNEL(t, o7.VV.VIBEGRATIONS, e)), T(null));
            },
            [n],
        ),
        [O, z] = i.useState(!1),
        G = i.useCallback(
            async (e, t) => {
                let l = oG(e);
                if (null != l) return void (0, g.P)((0, x.o)(l, b.Ck.FAILURE));
                z(!0);
                let a = null;
                try {
                    ((a = await (0, el.gA)({ guild_id: n, install_scope: t, flags: (0, en.RS)("guild" === t && S) })),
                        (0, J.Hc)(a),
                        (0, J.r2)(a, I ?? en.v0),
                        await oz(a, e, et.intl.string(ee.default.KjEtrZ)),
                        (0, V.pX)(eG.BVt.CHANNEL(n, o7.VV.VIBEGRATIONS, a)),
                        T(null));
                } catch {
                    (null != a && (await (0, el.xx)(a).catch(() => void 0)),
                        (0, g.P)((0, x.o)(et.intl.string(ee.default["02GpNr"]), b.Ck.FAILURE)));
                } finally {
                    z(!1);
                }
            },
            [n, S, I],
        ),
        B = i.useCallback(
            (e) => {
                (0, V.pX)(eG.BVt.CHANNEL(n, o7.VV.VIBEGRATIONS, e));
            },
            [n],
        ),
        $ = i.useCallback(() => {
            (0, V.pX)(eG.BVt.CHANNEL(n, o7.VV.VIBEGRATIONS));
        }, [n]),
        q = i.useCallback((e) => {
            (d(e), v(null));
        }, []),
        U = (0, c.bG)(
            [ed.Ay],
            () => {
                if (null == m) return null;
                let e = ed.Ay.getProject(m);
                return null == e || (0, ed.PV)(e) || e.guild_id === n ? e : null;
            },
            [m, n],
        ),
        H = (0, c.bG)([ed.Ay], () => ed.Ay.hasFetchedGuildProjects(n), [n]);
    return null != m
        ? (0, a.jsx)(uF, { project: U, projectsLoaded: H, onBack: $, guildId: n }, m)
        : (0, a.jsx)(uO, {
              projects: s,
              modelSettings: I,
              onModelSettingsChange: T,
              idea: u,
              guildId: n,
              submitting: f,
              createError: p,
              createDisabled: "idea" === (t = tp({ idea: u, installScope: N, submitting: f })) || "submitting" === t,
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
