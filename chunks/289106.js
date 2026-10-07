n.d(t, { bI: () => L, Ay: () => Q, ub: () => X, qF: () => F, FZ: () => z });
var l = n(582128),
    i = n(17928),
    a = n(73153),
    r = n(803306),
    u = n(627363),
    s = n(587895),
    o = n(321191),
    d = n(734057),
    c = n(808728),
    f = n(71393),
    p = n(576705),
    h = n(164892),
    g = n(712808),
    m = n(238490),
    b = n(371169),
    v = n(260498),
    x = n(385081),
    y = n(89505),
    A = n(246338),
    C = n(803101),
    j = n(248675),
    P = n(660183);
function w(e) {
    let { installScope: t, integrationStatus: n, guildName: l, appChannelName: i } = e;
    if (null == e.status) return null;
    let a = "up_to_date" === e.status.state && e.liveNameOutdated ? { ...e.status, state: "changes" } : e.status,
        r = a.surface;
    if ("unpublished" === a.state && null == r && n?.preview_ready !== !0) return null;
    let u =
            null == r
                ? null
                : "user" === t
                  ? (function (e) {
                        switch (e) {
                            case "bot":
                                return {
                                    update: P.intl.string(j.default.JpDnbE),
                                    open: P.intl.string(j.default.NNIwRu),
                                    destination: "dm",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: P.intl.string(j.default.QesMDC),
                                    open: P.intl.string(j.default.iyQTsb),
                                    destination: "launch",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return {
                                    update: P.intl.string(j.default["LUi/55"]),
                                    open: P.intl.string(j.default.TXUK1g),
                                    destination: "profile",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !0,
                                };
                            case "automod":
                                return null;
                        }
                    })(r)
                  : (function (e, t, n) {
                        if (null == t) return null;
                        let l = P.intl.formatToPlainString(j.default.fTgw6C, { server: t });
                        switch (e) {
                            case "bot":
                                return {
                                    update: P.intl.string(j.default.JpDnbE),
                                    open: l,
                                    destination: "guild",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "activity":
                                return {
                                    update: P.intl.string(j.default.QesMDC),
                                    open: null == n ? l : P.intl.formatToPlainString(j.default.l9xGQD, { channel: n }),
                                    destination: "channel",
                                    navigatesOnFirstPublish: !0,
                                    navigatesOnUpdate: !1,
                                };
                            case "automod":
                                return {
                                    update: P.intl.string(j.default.bwBMMn),
                                    open: P.intl.string(j.default.KjbLum),
                                    destination: "automod",
                                    navigatesOnFirstPublish: !1,
                                    navigatesOnUpdate: !1,
                                };
                            case "widget":
                                return null;
                        }
                    })(r, l, i),
        s = (function (e) {
            let { installScope: t, status: n, appChannelName: l, appChannelPending: i, botInGuild: a } = e;
            return (
                "guild" === t &&
                null != n &&
                "unpublished" !== n.state &&
                ("activity" === n.surface ? null == l && !0 !== i : "bot" === n.surface && !1 === a)
            );
        })(e);
    if (null != u && "up_to_date" === a.state && !s)
        return {
            label: u.open,
            intent: "open",
            action: "open",
            destination: u.destination,
            navigatesOnPublish: !1,
            upToDate: !0,
            isUpdate: !1,
            disabledReason: null,
        };
    let o = (function (e) {
            let {
                installScope: t,
                guildName: n,
                canManageGuild: l,
                canManageChannels: i,
                usesNativeAppChannels: a,
            } = e;
            if ("guild" !== t) return null;
            let r = !1 === l,
                u = a && !1 === i,
                s = { server: n ?? "" };
            return r && u
                ? P.intl.formatToPlainString(j.default["4sqXfg"], s)
                : r
                  ? P.intl.formatToPlainString(j.default.N4NkyR, s)
                  : u
                    ? P.intl.formatToPlainString(j.default.PxtHIV, s)
                    : null;
        })(e),
        d = (0, m.Qg)({
            installScope: t,
            previewReady: n?.preview_ready === !0,
            integrationInstalled: n?.integration_installed ?? null,
            botPermissionsChanged: n?.bot_permissions_changed === !0,
        }),
        c = "changes" === a.state && !s,
        f = {
            intent: d ? "consent_then_publish" : "publish",
            destination: u?.destination ?? null,
            upToDate: !1,
            isUpdate: c,
            disabledReason: o,
        },
        p = null != u && (c ? u.navigatesOnUpdate : u.navigatesOnFirstPublish);
    if (d && n?.bot_permissions_changed === !0)
        return { ...f, label: P.intl.string(j.default["tUeY/h"]), action: "review_permissions", navigatesOnPublish: p };
    let h = u?.update ?? P.intl.string(j.default.QesMDC);
    return { ...f, label: c ? h : P.intl.string(j.default["120EFN"]), action: "publish", navigatesOnPublish: p };
}
var M = n(516288),
    k = n(308528),
    I = n(625180),
    E = n(25451),
    N = n(976860),
    _ = n(345942),
    S = n(287809),
    R = n(652215),
    O = n(165610);
let L = 221552 == n.j ? l.createContext(null) : null;
function W(e) {
    return s.A.getApplication(e.application_id)?.bot?.id ?? e.application_id;
}
function F(e) {
    let t = s.A.getApplication(e.application_id)?.name;
    return null != t && t !== e.name;
}
function T(e, t) {
    let n = v.Ay.getProject(e);
    if (null == n) return null;
    let l = "user" === n.install_scope ? null : (n.guild_id ?? t),
        i = null == l ? null : (0, A.i8)(l, n.application_id),
        a = null == l ? null : f.A.getGuild(l);
    return {
        project: n,
        guildId: l,
        appChannelId: i,
        input: {
            installScope: n.install_scope,
            status: v.Ay.getPublishStatus(e),
            integrationStatus: v.Ay.getIntegrationStatus(e),
            guildName: a?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: v.Ay.isAppChannelPending(e),
            canManageGuild: null == a ? null : p.A.can(R.xBc.MANAGE_GUILD, a),
            canManageChannels: null == a ? null : p.A.can(R.xBc.MANAGE_CHANNELS, a),
            usesNativeAppChannels: (0, h.KQ)(n),
            botInGuild: (function (e, t) {
                if (null == t) return null;
                let n = o.A.getMutualGuilds(W(e));
                return null == n
                    ? null
                    : n.some((e) => {
                          let { guild: n } = e;
                          return n.id === t;
                      });
            })(n, l),
            liveNameOutdated: F(n),
        },
    };
}
function G(e, t, n) {
    return (function e(t, n) {
        let l,
            { applicationId: i, guildId: a, appChannelId: r, openProfile: u, openAutomodSettings: o } = n;
        switch (t) {
            case "launch":
                if (null != a) return e("channel", { applicationId: i, guildId: a, appChannelId: r, openProfile: u });
                if ((0, E.X)(s.A.getApplication(i)))
                    return (I.A.launchFrame({ applicationId: i, surface: O.sd }).catch(() => {}), Promise.resolve());
                break;
            case "profile": {
                let e = S.default.getCurrentUser()?.id;
                if (null != e) return (u(e), Promise.resolve());
                break;
            }
            case "channel":
                if (null != a && null != r) return ((0, N.pX)(R.BVt.CHANNEL(a, r)), Promise.resolve());
                break;
            case "automod":
                if (null != a && null != o) return (o(a), Promise.resolve());
        }
        if ("dm" !== t && null != a) {
            let e;
            return (
                null != (e = c.Ay.getDefaultChannel(a)?.id) ? (0, N.pX)(R.BVt.CHANNEL(a, e)) : (0, _.u)(a),
                Promise.resolve()
            );
        }
        return ((l = s.A.getApplication(i)?.bot?.id ?? i), k.A.openPrivateChannel({ recipientIds: l }));
    })(t, {
        applicationId: e.project.application_id,
        guildId: e.guildId,
        appChannelId: e.appChannelId,
        openProfile: n.openProfile,
        openAutomodSettings: n.openAutomodSettings,
    });
}
async function B(e, t) {
    let n = v.Ay.getProject(e),
        l = n?.preview_application_id;
    if (null == n || null == l) return;
    let i = (0, C.a)(n, v.Ay.getIntegrationStatus(e), t);
    (null == s.A.getApplication(l) && (await (0, u.TA)(l).catch(() => {})),
        await new Promise((e) => {
            y.A.openConjureAppInstallModal({
                applicationId: l,
                application: s.A.getApplication(l) ?? null,
                guildId: i,
                onClose: e,
            });
        }),
        await (0, C.$)(n, i).catch(() => {}),
        await (0, b.U1)(e).catch(() => {}));
}
function D(e, t, n) {
    let { project: l } = e,
        { platform: i, guildId: a } = n,
        r = l.id,
        u = t.navigatesOnPublish ? t.destination : null,
        s = "user" === l.install_scope || null != u ? null : (0, g.$C)(r);
    (s?.catch(() => {}), "channel" === u && U(r, !0));
    let o = (0, g.TV)(r).then((e) => {
            if (!0 !== e.ok) {
                let t;
                throw Error(
                    null != (t = e.detail?.trim()) && "" !== t
                        ? P.intl.formatToPlainString(j.default["7ZsIF1"], { reason: t })
                        : P.intl.string(j.default.gMWZeG),
                );
            }
            return e;
        }),
        d = o.then(
            () =>
                (0, b.tZ)(r, { isPreview: !1 }).catch((e) => {
                    console.error("[vibegrations] post-publish refresh failed", r, e);
                }),
            () => {},
        );
    if (
        (o.then(
            () => {
                (null != e.guildId && $(l),
                    null != u &&
                        d
                            .then(() => ("channel" === u ? q(r, a) : void 0))
                            .finally(() => U(r, !1))
                            .then(() => G(T(r, a) ?? e, u, i))
                            .catch(() => {}));
            },
            (e) => {
                (U(r, !1), i.showError(e instanceof Error ? e.message : P.intl.string(j.default.gMWZeG)));
            },
        ),
        null != s && null != e.guildId)
    ) {
        let t = o.then(() => {});
        (t.catch(() => {}),
            i.openPublishNotes({
                projectId: r,
                guildId: e.guildId,
                applicationId: l.application_id,
                projectName: l.name,
                publish: t,
                initialDraft: s,
            }));
    }
}
function U(e, t) {
    a.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function q(e, t) {
    let n = Date.now() + 5e3;
    for (; T(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function $(e) {
    (0, r.eO)(W(e), { withMutualGuilds: !0 }).catch(() => {});
}
function X(e, t) {
    let n = T(e, t.guildId);
    if (null == n) return;
    let l = w({
        ...n.input,
        status: null == n.input.status ? null : { ...n.input.status, state: "up_to_date" },
    })?.destination;
    null != l && G(n, l, t.platform).catch(() => {});
}
let V = new Set();
async function z(e, t, n) {
    let { guildId: l, platform: i } = n;
    if (!0 === n.busy || V.has(e)) return;
    let a = T(e, l);
    if (null == a || v.Ay.isProjectPublishing(e)) return;
    let r = w(a.input);
    if (null != r) {
        if (
            ((0, x.yJ)(e, {
                entryPoint: t,
                publishState: a.input.status?.state ?? null,
                surface: a.input.status?.surface ?? null,
                installScope: a.project.install_scope,
                action: r.action,
            }),
            "open" === r.intent)
        ) {
            null != r.destination && G(a, r.destination, i).catch(() => {});
            return;
        }
        if (null == r.disabledReason) {
            if (a.input.integrationStatus?.preview_ready !== !0) return void i.showPublishBlocked(M.k.NO_PREVIEW);
            if ("consent_then_publish" === r.intent) {
                V.add(e);
                try {
                    await (i.requestConsent ?? ((e) => B(e, l)))(e);
                } finally {
                    V.delete(e);
                }
                if (v.Ay.isProjectPublishing(e)) return;
                let t = T(e, l),
                    a = t?.input.integrationStatus ?? null;
                if (
                    null == t ||
                    (0, m.Qg)({
                        installScope: t.project.install_scope,
                        previewReady: a?.preview_ready === !0,
                        integrationInstalled: a?.integration_installed ?? null,
                        botPermissionsChanged: a?.bot_permissions_changed === !0,
                    })
                )
                    return;
                D(t, r, n);
                return;
            }
            D(a, r, n);
        }
    }
}
function Q(e, t) {
    let n = l.useContext(L),
        a = t ?? n,
        r = a?.guildId ?? null,
        {
            canPublish: h,
            publishing: g,
            project: m,
            guildId: b,
            appChannelId: x,
            installScope: y,
            status: A,
            integrationStatus: C,
            guildName: j,
            appChannelName: P,
            appChannelPending: M,
            canManageGuild: k,
            canManageChannels: I,
            usesNativeAppChannels: E,
            botInGuild: N,
            liveNameOutdated: _,
        } = (0, i.cf)(
            [v.Ay, f.A, c.Ay, d.A, p.A, o.A, s.A],
            () => {
                let t = null == e || null == r ? null : T(e, r);
                return {
                    canPublish: null != t && (0, v.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing: null != e && v.Ay.isProjectPublishing(e),
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
                    liveNameOutdated: t?.input.liveNameOutdated ?? !1,
                };
            },
            [e, r],
        ),
        S = l.useMemo(
            () =>
                null == m
                    ? null
                    : {
                          installScope: y,
                          status: A,
                          integrationStatus: C,
                          guildName: j,
                          appChannelName: P,
                          appChannelPending: M,
                          canManageGuild: k,
                          canManageChannels: I,
                          usesNativeAppChannels: E,
                          botInGuild: N,
                          liveNameOutdated: _,
                      },
            [m, y, A, C, j, P, M, k, I, E, N, _],
        ),
        R = S?.status?.state ?? null,
        O = S?.installScope === "guild" && S.status?.surface === "bot";
    l.useEffect(() => {
        null != m && null != b && O && null != R && "unpublished" !== R && $(m);
    }, [m?.id, b, O, R]);
    let W = m?.application_id ?? null,
        F = null != R && "unpublished" !== R;
    l.useEffect(() => {
        null != W &&
            F &&
            null == s.A.getApplication(W) &&
            !s.A.isFetchingApplication(W) &&
            (0, u.TA)(W).catch(() => {});
    }, [W, F]);
    let G = l.useMemo(() => (null == S ? null : w(S)), [S]),
        B = l.useCallback(
            (t) => {
                null != e &&
                    null != a &&
                    z(e, t, a).catch((t) => {
                        console.error("[vibegrations] publish action failed", e, t);
                    });
            },
            [e, a],
        );
    return null != a && h && null != G
        ? {
              ...G,
              status: S?.status ?? null,
              guildId: b,
              appChannelId: x,
              publishing: g,
              disabled: g || !0 === a.busy || null != G.disabledReason,
              run: B,
          }
        : null;
}
