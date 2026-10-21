n.d(t, { bI: () => N, Ay: () => $, KL: () => I, qF: () => T, FZ: () => O });
var l = n(582128),
    i = n(17928),
    r = n(73153),
    a = n(803306),
    u = n(627363),
    s = n(587895),
    o = n(321191),
    d = n(734057),
    c = n(808728),
    f = n(71393),
    p = n(576705),
    h = n(238490),
    g = n(371169),
    m = n(260498),
    b = n(951178),
    v = n(426035),
    x = n(385081),
    y = n(1371),
    A = n(246338),
    j = n(803101),
    w = n(664619),
    k = n(722701);
n(128761);
var S = n(248675),
    C = n(105292);
function P(e) {
    let { installScope: t, integrationStatus: n } = e,
        l = e.status ?? { state: "unpublished", surface: null, previewAppChannels: [] },
        i = "up_to_date" === l.state && e.liveNameOutdated ? { ...l, state: "changes" } : l,
        r = (function (e) {
            let { installScope: t, status: n, appChannelName: l, appChannelPending: i, botInGuild: r } = e;
            return (
                "guild" === t &&
                null != n &&
                "unpublished" !== n.state &&
                ("activity" === n.surface ? null == l && !0 !== i : "bot" === n.surface && !1 === r)
            );
        })({ ...e, status: i }),
        a = (function (e) {
            let { installScope: t, guildName: n, canManageGuild: l } = e;
            return "guild" !== t || !1 !== l ? null : C.intl.format(S.default.N4NkyR, { server: n ?? "" });
        })(e),
        u = (0, h.Qg)({
            installScope: t,
            previewReady: n?.preview_ready === !0,
            integrationInstalled: n?.integration_installed ?? null,
            botPermissionsChanged: n?.bot_permissions_changed === !0,
        }),
        s = {
            intent: u ? "consent_then_publish" : "publish",
            isUpdate: "changes" === i.state && !r,
            disabledReason: a,
            confirmReason:
                null == a
                    ? (function (e) {
                          let { installScope: t, guildName: n, canManageChannels: l, usesAppChannels: i } = e;
                          return "guild" === t && i && !1 === l
                              ? C.intl.format(S.default.eHYXFg, { server: n ?? "" })
                              : null;
                      })(e)
                    : null,
            missingSurface: r ? ("activity" === i.surface ? "channel" : "bot") : null,
        };
    return u && n?.bot_permissions_changed === !0
        ? { ...s, label: C.intl.string(S.default["tUeY/h"]), action: "review_permissions" }
        : { ...s, label: C.intl.string(S.default["120EFN"]), action: "publish" };
}
var M = n(516288),
    E = n(962998),
    _ = n(652215);
let N = 221552 == n.j ? l.createContext(null) : null;
function I(e, t) {
    return "user" === e.install_scope ? null : (e.guild_id ?? t);
}
function T(e) {
    if ((0, b.Fl)(e)) return !1;
    let t = s.A.getApplication(e.application_id)?.name;
    return null != t && t !== e.name;
}
function L(e, t) {
    let n = m.Ay.getProject(e);
    if (null == n) return null;
    let l = I(n, t),
        i = null == l ? null : (0, A.i8)(l, n.application_id),
        r = null == l ? null : f.A.getGuild(l);
    return {
        project: n,
        guildId: l,
        appChannelId: i,
        input: {
            installScope: n.install_scope,
            status: k.A.getPublishStatus(e),
            integrationStatus: m.Ay.getIntegrationStatus(e),
            guildName: r?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: k.A.isAppChannelPending(e),
            canManageGuild: null == r ? null : p.A.can(_.xBc.MANAGE_GUILD, r),
            canManageChannels: null == r ? null : p.A.can(_.xBc.MANAGE_CHANNELS, r),
            usesAppChannels: (0, b.Hv)(n),
            botInGuild: (0, v.AS)(n, l),
            liveNameOutdated: T(n),
        },
    };
}
async function R(e, t) {
    let n = m.Ay.getProject(e),
        l = n?.preview_application_id;
    if (null == n || null == l) return;
    let i = (0, j.a)(n, m.Ay.getIntegrationStatus(e), t);
    (null == s.A.getApplication(l) && (await (0, u.TA)(l).catch(() => {})),
        await new Promise((e) => {
            y.A.openConjureAppInstallModal({
                applicationId: l,
                application: s.A.getApplication(l) ?? null,
                guildId: i,
                onClose: e,
            });
        }),
        await (0, j.$)(n, i).catch(() => {}),
        await (0, g.U1)(e).catch(() => {}));
}
async function D(e) {
    await (0, g._b)(e.id).catch(() => {});
    let t = m.Ay.getProject(e.id)?.preview_application_id;
    return null == t ? "" : (s.A.getApplication(t)?.description ?? "");
}
async function G(e, t, n) {
    let l,
        { project: i } = e,
        { platform: r, guildId: a } = n,
        u = i.id;
    F.add(u);
    try {
        let e = await (0, E.xQ)(u);
        l = 1 === e.destinations.length ? e.selected_destination_id : await r.promptPublishDestination(e);
    } catch (e) {
        r.showError(e instanceof Error ? e.message : C.intl.string(S.default.gMWZeG));
        return;
    } finally {
        F.delete(u);
    }
    if (null == l) return;
    if (k.A.isProjectPublishing(u) || k.A.getPublishStatus(u)?.publishing === !0)
        return void r.showError(C.intl.string(S.default["TD/ze/"]));
    let s = null != e.guildId && e.input.status?.surface === "activity" && null == e.appChannelId && !t.isUpdate;
    (s && q(u, !0),
        (0, E.TV)(u, l)
            .then((e) => {
                if (!0 === e.ok) return e;
                throw (
                    20088 === e.code && (0, g.U1)(u).catch(() => {}),
                    Error(20088 === e.code ? C.intl.string(S.default.UXEDPw) : C.intl.string(S.default.gMWZeG))
                );
            })
            .then(
                (t) => {
                    (r.showConfirmation(C.intl.string(S.default.S6Px3n)),
                        null != e.guildId && U(i),
                        (0, w.tZ)(u, { isPreview: !1 })
                            .catch((e) => {
                                console.error("[conjure] post-publish refresh failed", u, e);
                            })
                            .then(() => (s && !0 !== t.channel_skipped ? W(u, a) : void 0))
                            .finally(() => q(u, !1))
                            .catch(() => {}));
                },
                (e) => {
                    (q(u, !1), r.showError(e instanceof Error ? e.message : C.intl.string(S.default.gMWZeG)));
                },
            ));
}
function q(e, t) {
    r.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function W(e, t) {
    let n = Date.now() + 5e3;
    for (; L(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function U(e) {
    (0, a.eO)((0, v.Du)(e), { withMutualGuilds: !0 }).catch(() => {});
}
let F = new Set();
async function O(e, t, l) {
    let { guildId: i, platform: r } = l;
    if (!0 === l.busy || F.has(e)) return;
    let a = L(e, i);
    if (null == a) return;
    let u = k.A.getPublishApprovalUrl(e);
    if (null != u && (0, m.PV)(a.project)) {
        let { promptPublishApproval: e } = await Promise.all([n.e("241989"), n.e("574246")]).then(n.bind(n, 200389));
        e(u);
        return;
    }
    if (k.A.isProjectPublishing(e) || a.input.status?.publishing === !0) return;
    let s = P(a.input);
    ((0, x.yJ)(e, {
        entryPoint: t,
        publishState: a.input.status?.state ?? null,
        surface: a.input.status?.surface ?? null,
        installScope: a.project.install_scope,
        action: s.action,
    }),
    null != s.disabledReason)
        ? r.showPublishBlocked(M.k.MISSING_MANAGE_SERVER, s.disabledReason)
        : ((0, E.dx)(e), null != s.confirmReason)
          ? r.showPublishBlocked(M.k.MISSING_MANAGE_CHANNELS, s.confirmReason, () => {
                B(e, s, l).catch(() => {});
            })
          : await B(e, s, l);
}
async function B(e, t, n) {
    let { guildId: l, platform: i } = n,
        r = L(e, l);
    if (!(null == r || k.A.isProjectPublishing(e))) {
        if (null != i.promptFirstPublish && r.input.status?.state === "unpublished" && (0, m.PV)(r.project)) {
            let t;
            F.add(e);
            try {
                t = await i.promptFirstPublish({ projectId: e, name: r.project.name, description: await D(r.project) });
            } finally {
                F.delete(e);
            }
            if (!t || k.A.isProjectPublishing(e)) return;
            r = L(e, l) ?? r;
        }
        if ("consent_then_publish" === t.intent) {
            F.add(e);
            try {
                await (i.requestConsent ?? ((e) => R(e, l)))(e);
            } finally {
                F.delete(e);
            }
            if (k.A.isProjectPublishing(e)) return;
            let r = L(e, l),
                a = r?.input.integrationStatus ?? null;
            if (
                null == r ||
                (0, h.Qg)({
                    installScope: r.project.install_scope,
                    previewReady: a?.preview_ready === !0,
                    integrationInstalled: a?.integration_installed ?? null,
                    botPermissionsChanged: a?.bot_permissions_changed === !0,
                })
            )
                return;
            await G(r, t, n);
            return;
        }
        await G(r, t, n);
    }
}
function $(e, t) {
    let n = l.useContext(N),
        r = t ?? n,
        a = r?.guildId ?? null,
        {
            canPublish: h,
            publishing: g,
            approvalUrl: b,
            project: v,
            guildId: x,
            appChannelId: y,
            installScope: A,
            status: j,
            integrationStatus: w,
            guildName: M,
            appChannelName: E,
            appChannelPending: _,
            canManageGuild: I,
            canManageChannels: T,
            usesAppChannels: R,
            botInGuild: D,
            liveNameOutdated: G,
        } = (0, i.cf)(
            [m.Ay, k.A, f.A, c.Ay, d.A, p.A, o.A, s.A],
            () => {
                let t = null == e || null == a ? null : L(e, a);
                return {
                    canPublish: null != t && (0, m.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing:
                        null != e &&
                        null == k.A.getPublishApprovalUrl(e) &&
                        (k.A.isProjectPublishing(e) || k.A.getPublishStatus(e)?.publishing === !0),
                    approvalUrl: null == e ? null : k.A.getPublishApprovalUrl(e),
                    installScope: t?.input.installScope ?? null,
                    status: t?.input.status ?? null,
                    integrationStatus: t?.input.integrationStatus ?? null,
                    guildName: t?.input.guildName ?? null,
                    appChannelName: t?.input.appChannelName ?? null,
                    appChannelPending: t?.input.appChannelPending ?? !1,
                    canManageGuild: t?.input.canManageGuild ?? null,
                    canManageChannels: t?.input.canManageChannels ?? null,
                    usesAppChannels: t?.input.usesAppChannels ?? !1,
                    botInGuild: t?.input.botInGuild ?? null,
                    liveNameOutdated: t?.input.liveNameOutdated ?? !1,
                };
            },
            [e, a],
        ),
        q = l.useMemo(
            () =>
                null == v
                    ? null
                    : {
                          installScope: A,
                          status: j,
                          integrationStatus: w,
                          guildName: M,
                          appChannelName: E,
                          appChannelPending: _,
                          canManageGuild: I,
                          canManageChannels: T,
                          usesAppChannels: R,
                          botInGuild: D,
                          liveNameOutdated: G,
                      },
            [v, A, j, w, M, E, _, I, T, R, D, G],
        ),
        W = q?.status?.state ?? null,
        F = q?.installScope === "guild" && q.status?.surface === "bot";
    l.useEffect(() => {
        null != v && null != x && F && null != W && "unpublished" !== W && U(v);
    }, [v?.id, x, F, W]);
    let B = v?.application_id ?? null,
        $ = null != W && "unpublished" !== W;
    l.useEffect(() => {
        null != B &&
            $ &&
            null == s.A.getApplication(B) &&
            !s.A.isFetchingApplication(B) &&
            (0, u.TA)(B).catch(() => {});
    }, [B, $]);
    let V = l.useMemo(() => (null == q ? null : P(q)), [q]),
        z = l.useCallback(
            (t) => {
                null != e &&
                    null != r &&
                    O(e, t, r).catch((t) => {
                        console.error("[conjure] publish action failed", e, t);
                    });
            },
            [e, r],
        );
    if (null == r || !h || null == V) return null;
    let Y = null == b ? V.label : C.intl.string(S.default.qru9M5);
    return {
        ...V,
        status: q?.status ?? null,
        guildId: x,
        appChannelId: y,
        publishing: g,
        label: g ? C.intl.string(S.default.Rhx0rn) : Y,
        disabled: g || !0 === r.busy,
        run: z,
    };
}
