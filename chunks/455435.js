l.d(t, { Qc: () => D, v0: () => H, Ay: () => Y });
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
    h = l(673724),
    g = l(948230),
    x = l(277977),
    p = l(972786),
    v = l(927899),
    b = l(443741),
    j = l(933294),
    y = l(683180),
    k = l(308528),
    N = l(625180),
    w = l(207371),
    A = l(976860),
    S = l(345942),
    C = l(287809),
    E = l(652215),
    I = l(165610),
    T = l(522250),
    M = l(58551),
    _ = l(50617),
    P = l(375708);
function R(e) {
    let { installScope: t, status: l, integrationStatus: n, guildName: a, appChannelName: r } = e;
    if (null == l) return null;
    let i = l.surface;
    if ("unpublished" === l.state && null == i && n?.preview_ready !== !0) return null;
    let s =
            null == i
                ? null
                : "user" === t
                  ? (function (e) {
                        switch (e) {
                            case "bot":
                                return {
                                    update: P.intl.string(_.default.o046LG),
                                    open: P.intl.string(_.default.BceUWe),
                                    destination: "dm",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: P.intl.string(_.default["91710b"]),
                                    open: P.intl.string(_.default.c4LI5t),
                                    destination: "launch",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return {
                                    update: P.intl.string(_.default["S+XFJ2"]),
                                    open: P.intl.string(_.default.wK3FYl),
                                    destination: "profile",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !0,
                                };
                            case "automod":
                                return null;
                        }
                    })(i)
                  : (function (e, t, l) {
                        if (null == t) return null;
                        let n = P.intl.formatToPlainString(_.default.jnwfvk, { server: t });
                        switch (e) {
                            case "bot":
                                return {
                                    update: P.intl.string(_.default.o046LG),
                                    open: n,
                                    destination: "guild",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: P.intl.string(_.default["91710b"]),
                                    open: null == l ? n : P.intl.formatToPlainString(_.default.Nfs5wk, { channel: l }),
                                    destination: "channel",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "automod":
                                return {
                                    update: P.intl.string(_.default.Qn0VCU),
                                    open: P.intl.string(_.default.j8541Y),
                                    destination: "automod",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return null;
                        }
                    })(i, a, r),
        u = (function (e) {
            let { installScope: t, status: l, appChannelName: n, appChannelPending: a, botInGuild: r } = e;
            return (
                "guild" === t &&
                null != l &&
                "unpublished" !== l.state &&
                ("activity" === l.surface ? null == n && !0 !== a : "bot" === l.surface && !1 === r)
            );
        })(e);
    if (null != s && "up_to_date" === l.state && !u)
        return {
            label: s.open,
            intent: "open",
            action: "open",
            destination: s.destination,
            navigatesOnPublish: !1,
            upToDate: !0,
            isUpdate: !1,
            disabledReason: null,
        };
    let o = (function (e) {
            let {
                installScope: t,
                guildName: l,
                canManageGuild: n,
                canManageChannels: a,
                usesNativeAppChannels: r,
            } = e;
            if ("guild" !== t) return null;
            let i = !1 === n,
                s = r && !1 === a,
                u = { server: l ?? "" };
            return i && s
                ? P.intl.formatToPlainString(_.default.qG1SMK, u)
                : i
                  ? P.intl.formatToPlainString(_.default.x71ku3, u)
                  : s
                    ? P.intl.formatToPlainString(_.default["53xiNu"], u)
                    : null;
        })(e),
        d = (0, M.Qg)({
            installScope: t,
            previewReady: n?.preview_ready === !0,
            integrationInstalled: n?.integration_installed ?? null,
            botPermissionsChanged: n?.bot_permissions_changed === !0,
        }),
        c = "changes" === l.state && !u,
        f = {
            intent: d ? "consent_then_publish" : "publish",
            destination: s?.destination ?? null,
            upToDate: !1,
            isUpdate: c,
            disabledReason: o,
        },
        m = null != s && (c ? s.navigatesOnUpdate : s.navigatesOnFirstPublish);
    if (d && n?.bot_permissions_changed === !0)
        return { ...f, label: P.intl.string(_.default.zFcLHP), action: "review_permissions", navigatesOnPublish: m };
    let h = s?.update ?? P.intl.string(_.default["91710b"]);
    return { ...f, label: c ? h : P.intl.string(_.default["5gU57O"]), action: "publish", navigatesOnPublish: m };
}
var L = l(145216);
let D = n.createContext(null);
function F(e) {
    return u.A.getApplication(e.application_id)?.bot?.id ?? e.application_id;
}
function O(e, t) {
    let l = p.Ay.getProject(e);
    if (null == l) return null;
    let n = "user" === l.install_scope ? null : (l.guild_id ?? t),
        a = null == n ? null : (0, y.SH)(n, l.application_id),
        r = null == n ? null : f.A.getGuild(n);
    return {
        project: l,
        guildId: n,
        appChannelId: a,
        input: {
            installScope: l.install_scope,
            status: p.Ay.getPublishStatus(e),
            integrationStatus: p.Ay.getIntegrationStatus(e),
            guildName: r?.name ?? null,
            appChannelName: null == a ? null : (d.A.getChannel(a)?.name ?? null),
            appChannelPending: p.Ay.isAppChannelPending(e),
            canManageGuild: null == r ? null : m.A.can(E.xBc.MANAGE_GUILD, r),
            canManageChannels: null == r ? null : m.A.can(E.xBc.MANAGE_CHANNELS, r),
            usesNativeAppChannels: (0, h.KQ)(l),
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
function $(e, t, l) {
    return (function (e, t) {
        let l,
            { applicationId: n, guildId: a, appChannelId: r, openProfile: i, openAutomodSettings: s } = t;
        switch (e) {
            case "launch":
                if ((0, w.x)(u.A.getApplication(n)))
                    return (N.A.launchFrame({ applicationId: n, surface: I.sd }).catch(() => {}), Promise.resolve());
                break;
            case "profile": {
                let e = C.default.getCurrentUser()?.id;
                if (null != e) return (i(e), Promise.resolve());
                break;
            }
            case "channel":
                if (null != a && null != r) return ((0, A.pX)(E.BVt.CHANNEL(a, r)), Promise.resolve());
                break;
            case "automod":
                if (null != a && null != s) return (s(a), Promise.resolve());
        }
        if ("dm" !== e && null != a) {
            let e;
            return (
                null != (e = c.Ay.getDefaultChannel(a)?.id) ? (0, A.pX)(E.BVt.CHANNEL(a, e)) : (0, S.u)(a),
                Promise.resolve()
            );
        }
        return ((l = u.A.getApplication(n)?.bot?.id ?? n), k.A.openPrivateChannel({ recipientIds: l }));
    })(t, {
        applicationId: e.project.application_id,
        guildId: e.guildId,
        appChannelId: e.appChannelId,
        openProfile: l.openProfile,
        openAutomodSettings: l.openAutomodSettings,
    });
}
async function z(e, t) {
    let l = p.Ay.getProject(e),
        n = l?.preview_application_id;
    if (null == l || null == n) return;
    let a = (0, b.H)(l, p.Ay.getIntegrationStatus(e), t);
    (null == u.A.getApplication(n) && (await (0, s.TA)(n).catch(() => {})),
        await new Promise((e) => {
            j.A.openVibegrationsAppInstallModal({
                applicationId: n,
                application: u.A.getApplication(n) ?? null,
                guildId: a,
                onClose: e,
            });
        }),
        await (0, b.w)(l, a).catch(() => {}),
        await (0, g.U1)(e).catch(() => {}));
}
let q = new Set(["dm", "guild", "channel"]);
function U(e, t, l) {
    let { project: n } = e,
        { platform: a, guildId: r } = l,
        i = n.id,
        s = t.navigatesOnPublish ? t.destination : null,
        u = "user" === n.install_scope || null != s ? null : (0, x.$C)(i);
    (u?.catch(() => {}), "channel" === s && G(i, !0));
    let o = (0, x.TV)(i).then((e) => {
            if (!0 !== e.ok) {
                let t;
                throw Error(
                    null != (t = e.detail?.trim()) && "" !== t
                        ? P.intl.formatToPlainString(_.default.xTlB8O, { reason: t })
                        : P.intl.string(_.default.fNP6Cd),
                );
            }
            return e;
        }),
        d = o.then(
            () =>
                (0, g.tZ)(i, { isPreview: !1 }).catch((e) => {
                    console.error("[vibegrations] post-publish refresh failed", i, e);
                }),
            () => {},
        );
    if (
        (o.then(
            () => {
                (null != e.guildId && V(n),
                    null != s &&
                        (q.has(s) && (0, T.cP)(i),
                        d
                            .then(() => ("channel" === s ? B(i, r) : void 0))
                            .finally(() => G(i, !1))
                            .then(() => $(O(i, r) ?? e, s, a))
                            .catch(() => {})));
            },
            (e) => {
                (G(i, !1), a.showError(e instanceof Error ? e.message : P.intl.string(_.default.fNP6Cd)));
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
function G(e, t) {
    r.h.dispatch({ type: "VIBEGRATIONS_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function B(e, t) {
    let l = Date.now() + 5e3;
    for (; O(e, t)?.appChannelId == null && Date.now() < l;) await new Promise((e) => setTimeout(e, 250));
}
function V(e) {
    (0, i.eO)(F(e), { withMutualGuilds: !0 }).catch(() => {});
}
function H(e, t) {
    let l = O(e, t.guildId);
    if (null == l) return;
    let n = R({
        ...l.input,
        status: null == l.input.status ? null : { ...l.input.status, state: "up_to_date" },
    })?.destination;
    null != n && $(l, n, t.platform).catch(() => {});
}
let K = new Set();
async function W(e, t, l) {
    let { guildId: n, platform: a } = l;
    if (!0 === l.busy || K.has(e)) return;
    let r = O(e, n);
    if (null == r || p.Ay.isProjectPublishing(e)) return;
    let i = R(r.input);
    if (null != i) {
        if (
            ((0, v.Ar)(e, {
                entryPoint: t,
                publishState: r.input.status?.state ?? null,
                surface: r.input.status?.surface ?? null,
                installScope: r.project.install_scope,
                action: i.action,
            }),
            "open" === i.intent)
        ) {
            null != i.destination && $(r, i.destination, a).catch(() => {});
            return;
        }
        if (null == i.disabledReason) {
            if (r.input.integrationStatus?.preview_ready !== !0) return void a.showPublishBlocked(L.H.NO_PREVIEW);
            if ("consent_then_publish" === i.intent) {
                K.add(e);
                try {
                    await (a.requestConsent ?? ((e) => z(e, n)))(e);
                } finally {
                    K.delete(e);
                }
                if (p.Ay.isProjectPublishing(e)) return;
                let t = O(e, n),
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
                U(t, i, l);
                return;
            }
            U(r, i, l);
        }
    }
}
function Y(e, t) {
    let l = n.useContext(D),
        r = t ?? l,
        i = r?.guildId ?? null,
        {
            canPublish: s,
            publishing: h,
            project: g,
            guildId: x,
            installScope: v,
            status: b,
            integrationStatus: j,
            guildName: y,
            appChannelName: k,
            appChannelPending: N,
            canManageGuild: w,
            canManageChannels: A,
            usesNativeAppChannels: S,
            botInGuild: C,
        } = (0, a.cf)(
            [p.Ay, f.A, c.Ay, d.A, m.A, o.A, u.A],
            () => {
                let t = null == e || null == i ? null : O(e, i);
                return {
                    canPublish: null != t && (0, p.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    publishing: null != e && p.Ay.isProjectPublishing(e),
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
            [e, i],
        ),
        E = n.useMemo(
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
                          canManageChannels: A,
                          usesNativeAppChannels: S,
                          botInGuild: C,
                      },
            [g, v, b, j, y, k, N, w, A, S, C],
        ),
        I = E?.status?.state ?? null,
        T = E?.installScope === "guild" && E.status?.surface === "bot";
    n.useEffect(() => {
        null != g && null != x && T && null != I && "unpublished" !== I && V(g);
    }, [g?.id, x, T, I]);
    let M = n.useMemo(() => (null == E ? null : R(E)), [E]),
        _ = n.useCallback(
            (t) => {
                null != e &&
                    null != r &&
                    W(e, t, r).catch((t) => {
                        console.error("[vibegrations] publish action failed", e, t);
                    });
            },
            [e, r],
        );
    return null != r && s && null != M
        ? {
              ...M,
              status: E?.status ?? null,
              guildId: x,
              publishing: h,
              disabled: h || !0 === r.busy || null != M.disabledReason,
              run: _,
          }
        : null;
}
