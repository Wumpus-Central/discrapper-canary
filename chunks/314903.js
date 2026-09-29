l.d(t, { Qc: () => L, v0: () => V, Ay: () => K });
var n = l(582128),
    a = l(17928),
    r = l(228366),
    i = l(803306),
    s = l(627363),
    u = l(587895),
    o = l(321191),
    d = l(734057),
    c = l(808728),
    f = l(71393),
    m = l(576705),
    h = l(948230),
    g = l(277977),
    x = l(972786),
    p = l(927899),
    v = l(443741),
    b = l(933294),
    j = l(683180),
    y = l(308528),
    k = l(625180),
    N = l(207371),
    w = l(976860),
    A = l(345942),
    S = l(287809),
    E = l(652215),
    C = l(165610),
    I = l(522250),
    M = l(58551),
    T = l(759967),
    P = l(375708);
function _(e) {
    let { installScope: t, status: l, integrationStatus: n, guildName: a, appChannelName: r, canManageGuild: i } = e;
    if (null == l) return null;
    let s = l.surface;
    if ("unpublished" === l.state && null == s && n?.preview_ready !== !0) return null;
    let u =
            null == s
                ? null
                : "user" === t
                  ? (function (e) {
                        switch (e) {
                            case "bot":
                                return {
                                    update: P.intl.string(T.default.o046LG),
                                    open: P.intl.string(T.default.BceUWe),
                                    destination: "dm",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: P.intl.string(T.default["91710b"]),
                                    open: P.intl.string(T.default.c4LI5t),
                                    destination: "launch",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return {
                                    update: P.intl.string(T.default["S+XFJ2"]),
                                    open: P.intl.string(T.default.wK3FYl),
                                    destination: "profile",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !0,
                                };
                            case "automod":
                                return null;
                        }
                    })(s)
                  : (function (e, t, l) {
                        if (null == t) return null;
                        let n = P.intl.formatToPlainString(T.default.jnwfvk, { server: t });
                        switch (e) {
                            case "bot":
                                return {
                                    update: P.intl.string(T.default.o046LG),
                                    open: n,
                                    destination: "guild",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: P.intl.string(T.default["91710b"]),
                                    open: null == l ? n : P.intl.formatToPlainString(T.default.Nfs5wk, { channel: l }),
                                    destination: "channel",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "automod":
                                return {
                                    update: P.intl.string(T.default.Qn0VCU),
                                    open: P.intl.string(T.default.j8541Y),
                                    destination: "automod",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return null;
                        }
                    })(s, a, r),
        o = (function (e) {
            let { installScope: t, status: l, appChannelName: n, appChannelPending: a, botInGuild: r } = e;
            return (
                "guild" === t &&
                null != l &&
                "unpublished" !== l.state &&
                ("activity" === l.surface ? null == n && !0 !== a : "bot" === l.surface && !1 === r)
            );
        })(e);
    if (null != u && "up_to_date" === l.state && !o)
        return {
            label: u.open,
            intent: "open",
            action: "open",
            destination: u.destination,
            navigatesOnPublish: !1,
            upToDate: !0,
            disabledReason: null,
        };
    let d = "guild" === t && !1 === i ? P.intl.formatToPlainString(T.default.x71ku3, { server: a ?? "" }) : null,
        c = (0, M.Qg)({
            installScope: t,
            previewReady: n?.preview_ready === !0,
            integrationInstalled: n?.integration_installed ?? null,
            botPermissionsChanged: n?.bot_permissions_changed === !0,
        }),
        f = {
            intent: c ? "consent_then_publish" : "publish",
            destination: u?.destination ?? null,
            upToDate: !1,
            disabledReason: d,
        },
        m = "changes" === l.state && !o,
        h = null != u && (m ? u.navigatesOnUpdate : u.navigatesOnFirstPublish);
    if (c && n?.bot_permissions_changed === !0)
        return { ...f, label: P.intl.string(T.default.zFcLHP), action: "review_permissions", navigatesOnPublish: h };
    let g = u?.update ?? P.intl.string(T.default["91710b"]);
    return { ...f, label: m ? g : P.intl.string(T.default["5gU57O"]), action: "publish", navigatesOnPublish: h };
}
var R = l(145216);
let L = n.createContext(null);
function F(e) {
    return u.A.getApplication(e.application_id)?.bot?.id ?? e.application_id;
}
function D(e, t) {
    let l = x.Ay.getProject(e);
    if (null == l) return null;
    let n = "user" === l.install_scope ? null : (l.guild_id ?? t),
        a = null == n ? null : (0, j.SH)(n, l.application_id),
        r = null == n ? null : f.A.getGuild(n);
    return {
        project: l,
        guildId: n,
        appChannelId: a,
        input: {
            installScope: l.install_scope,
            status: x.Ay.getPublishStatus(e),
            integrationStatus: x.Ay.getIntegrationStatus(e),
            guildName: r?.name ?? null,
            appChannelName: null == a ? null : (d.A.getChannel(a)?.name ?? null),
            appChannelPending: x.Ay.isAppChannelPending(e),
            canManageGuild: null == r ? null : m.A.can(E.xBc.MANAGE_GUILD, r),
            botInGuild: (function (e, t) {
                if (null == t) return null;
                let l = o.A.getMutualGuilds(F(e));
                return null == l
                    ? null
                    : l.some((e) => {
                          let { guild: l } = e;
                          return l.id === t;
                      });
            })(l, n),
        },
    };
}
function O(e, t, l) {
    return (function (e, t) {
        let l,
            { applicationId: n, guildId: a, appChannelId: r, openProfile: i, openAutomodSettings: s } = t;
        switch (e) {
            case "launch":
                if ((0, N.x)(u.A.getApplication(n)))
                    return (k.A.launchFrame({ applicationId: n, surface: C.sd }).catch(() => {}), Promise.resolve());
                break;
            case "profile": {
                let e = S.default.getCurrentUser()?.id;
                if (null != e) return (i(e), Promise.resolve());
                break;
            }
            case "channel":
                if (null != a && null != r) return ((0, w.pX)(E.BVt.CHANNEL(a, r)), Promise.resolve());
                break;
            case "automod":
                if (null != a && null != s) return (s(a), Promise.resolve());
        }
        if ("dm" !== e && null != a) {
            let e;
            return (
                null != (e = c.Ay.getDefaultChannel(a)?.id) ? (0, w.pX)(E.BVt.CHANNEL(a, e)) : (0, A.u)(a),
                Promise.resolve()
            );
        }
        return ((l = u.A.getApplication(n)?.bot?.id ?? n), y.A.openPrivateChannel({ recipientIds: l }));
    })(t, {
        applicationId: e.project.application_id,
        guildId: e.guildId,
        appChannelId: e.appChannelId,
        openProfile: l.openProfile,
        openAutomodSettings: l.openAutomodSettings,
    });
}
async function $(e, t) {
    let l = x.Ay.getProject(e),
        n = l?.preview_application_id;
    if (null == l || null == n) return;
    let a = (0, v.H)(l, x.Ay.getIntegrationStatus(e), t);
    (null == u.A.getApplication(n) && (await (0, s.TA)(n).catch(() => {})),
        await new Promise((e) => {
            b.A.openVibegrationsAppInstallModal({
                applicationId: n,
                application: u.A.getApplication(n) ?? null,
                guildId: a,
                onClose: e,
            });
        }),
        await (0, v.w)(l, a).catch(() => {}),
        await (0, h.U1)(e).catch(() => {}));
}
let q = new Set(["dm", "guild", "channel"]);
function z(e, t, l) {
    let { project: n } = e,
        { platform: a, guildId: r } = l,
        i = n.id,
        s = t.navigatesOnPublish ? t.destination : null,
        u = "user" === n.install_scope || null != s ? null : (0, g.$C)(i);
    (u?.catch(() => {}), "channel" === s && U(i, !0));
    let o = (0, g.TV)(i).then((e) => {
            if (!0 !== e.ok) throw Error(P.intl.string(T.default.fNP6Cd));
            return e;
        }),
        d = o.then(
            () =>
                (0, h.tZ)(i, { isPreview: !1 }).catch((e) => {
                    console.error("[vibegrations] post-publish refresh failed", i, e);
                }),
            () => {},
        );
    if (
        (o.then(
            () => {
                (null != e.guildId && B(n),
                    null != s &&
                        (q.has(s) && (0, I.cP)(i),
                        d
                            .then(() => ("channel" === s ? G(i, r) : void 0))
                            .finally(() => U(i, !1))
                            .then(() => O(D(i, r) ?? e, s, a))
                            .catch(() => {})));
            },
            (e) => {
                (U(i, !1), a.showError(e instanceof Error ? e.message : P.intl.string(T.default.fNP6Cd)));
            },
        ),
        null != u && null != e.guildId)
    ) {
        let t = o.then(() => {});
        (t.catch(() => {}),
            a.openPublishNotes({
                projectId: i,
                guildId: e.guildId,
                applicationId: n.application_id,
                projectName: n.name,
                publish: t,
                initialDraft: u,
            }));
    }
}
function U(e, t) {
    r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function G(e, t) {
    let l = Date.now() + 5e3;
    for (; D(e, t)?.appChannelId == null && Date.now() < l;) await new Promise((e) => setTimeout(e, 250));
}
function B(e) {
    (0, i.eO)(F(e), { withMutualGuilds: !0 }).catch(() => {});
}
function V(e, t) {
    let l = D(e, t.guildId);
    if (null == l) return;
    let n = _({
        ...l.input,
        status: null == l.input.status ? null : { ...l.input.status, state: "up_to_date" },
    })?.destination;
    null != n && O(l, n, t.platform).catch(() => {});
}
let H = new Set();
async function W(e, t, l) {
    let { guildId: n, platform: a } = l;
    if (!0 === l.busy || H.has(e)) return;
    let r = D(e, n);
    if (null == r || x.Ay.isProjectPublishing(e)) return;
    let i = _(r.input);
    if (null != i) {
        if (
            ((0, p.Ar)(e, {
                entryPoint: t,
                publishState: r.input.status?.state ?? null,
                surface: r.input.status?.surface ?? null,
                installScope: r.project.install_scope,
                action: i.action,
            }),
            "open" === i.intent)
        ) {
            null != i.destination && O(r, i.destination, a).catch(() => {});
            return;
        }
        if (null == i.disabledReason) {
            if (r.input.integrationStatus?.preview_ready !== !0) return void a.showPublishBlocked(R.H.NO_PREVIEW);
            if ("consent_then_publish" === i.intent) {
                H.add(e);
                try {
                    await (a.requestConsent ?? ((e) => $(e, n)))(e);
                } finally {
                    H.delete(e);
                }
                if (x.Ay.isProjectPublishing(e)) return;
                let t = D(e, n),
                    r = t?.input.integrationStatus ?? null;
                if (
                    null == t ||
                    (0, M.Qg)({
                        installScope: t.project.install_scope,
                        previewReady: r?.preview_ready === !0,
                        integrationInstalled: r?.integration_installed ?? null,
                        botPermissionsChanged: r?.bot_permissions_changed === !0,
                    })
                )
                    return;
                z(t, i, l);
                return;
            }
            z(r, i, l);
        }
    }
}
function K(e, t) {
    let l = n.useContext(L),
        r = t ?? l,
        i = r?.guildId ?? null,
        {
            canPublish: s,
            publishing: h,
            project: g,
            guildId: p,
            installScope: v,
            status: b,
            integrationStatus: j,
            guildName: y,
            appChannelName: k,
            appChannelPending: N,
            canManageGuild: w,
            botInGuild: A,
        } = (0, a.cf)(
            [x.Ay, f.A, c.Ay, d.A, m.A, o.A, u.A],
            () => {
                let t = null == e || null == i ? null : D(e, i);
                return {
                    canPublish: null != t && (0, x.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    publishing: null != e && x.Ay.isProjectPublishing(e),
                    installScope: t?.input.installScope ?? null,
                    status: t?.input.status ?? null,
                    integrationStatus: t?.input.integrationStatus ?? null,
                    guildName: t?.input.guildName ?? null,
                    appChannelName: t?.input.appChannelName ?? null,
                    appChannelPending: t?.input.appChannelPending ?? !1,
                    canManageGuild: t?.input.canManageGuild ?? null,
                    botInGuild: t?.input.botInGuild ?? null,
                };
            },
            [e, i],
        ),
        S = n.useMemo(
            () =>
                null == g
                    ? null
                    : {
                          installScope: v,
                          status: b,
                          integrationStatus: j,
                          guildName: y,
                          appChannelName: k,
                          appChannelPending: N,
                          canManageGuild: w,
                          botInGuild: A,
                      },
            [g, v, b, j, y, k, N, w, A],
        ),
        E = S?.status?.state ?? null,
        C = S?.installScope === "guild" && S.status?.surface === "bot";
    n.useEffect(() => {
        null != g && null != p && C && null != E && "unpublished" !== E && B(g);
    }, [g?.id, p, C, E]);
    let I = n.useMemo(() => (null == S ? null : _(S)), [S]),
        M = n.useCallback(
            (t) => {
                null != e &&
                    null != r &&
                    W(e, t, r).catch((t) => {
                        console.error("[vibegrations] publish action failed", e, t);
                    });
            },
            [e, r],
        );
    return null != r && s && null != I
        ? {
              ...I,
              status: S?.status ?? null,
              guildName: S?.guildName ?? null,
              publishing: h,
              disabled: h || !0 === r.busy || null != I.disabledReason,
              run: M,
          }
        : null;
}
