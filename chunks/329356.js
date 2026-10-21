n.d(t, { bI: () => _, $l: () => D, Ay: () => $, KL: () => I, qF: () => T, FZ: () => B });
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
    x = n(426035),
    v = n(385081),
    y = n(1371),
    A = n(246338),
    j = n(803101),
    w = n(664619),
    k = n(722701),
    S = n(949616),
    C = n(516288),
    P = n(962998),
    M = n(248675),
    E = n(105292),
    N = n(652215);
let _ = 221552 == n.j ? l.createContext(null) : null;
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
            canManageGuild: null == r ? null : p.A.can(N.xBc.MANAGE_GUILD, r),
            canManageChannels: null == r ? null : p.A.can(N.xBc.MANAGE_CHANNELS, r),
            usesAppChannels: (0, b.Hv)(n),
            botInGuild: (0, x.AS)(n, l),
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
async function D(e, t, n) {
    let { name: l, icon: i, description: r } = t,
        a = {};
    if (
        (l !== n.name && (a.name = l),
        null != i && (a.icon = i),
        r.trim() !== n.description.trim() && (a.description = r.trim()),
        0 === Object.keys(a).length)
    )
        return !0;
    try {
        return (await (0, g.CW)(e, a), !0);
    } catch {
        return !1;
    }
}
async function F(e) {
    await (0, g._b)(e.id).catch(() => {});
    let t = m.Ay.getProject(e.id)?.preview_application_id;
    return null == t ? "" : (s.A.getApplication(t)?.description ?? "");
}
async function G(e, t, n) {
    let l,
        { project: i } = e,
        { platform: r, guildId: a } = n,
        u = i.id;
    O.add(u);
    try {
        let e = await (0, P.xQ)(u);
        l = 1 === e.destinations.length ? e.selected_destination_id : await r.promptPublishDestination(e);
    } catch (e) {
        r.showError(e instanceof Error ? e.message : E.intl.string(M.default.gMWZeG));
        return;
    } finally {
        O.delete(u);
    }
    if (null == l) return;
    if (k.A.isProjectPublishing(u) || k.A.getPublishStatus(u)?.publishing === !0)
        return void r.showError(E.intl.string(M.default["TD/ze/"]));
    let s = null != e.guildId && e.input.status?.surface === "activity" && null == e.appChannelId && !t.isUpdate;
    (s && U(u, !0),
        (0, P.TV)(u, l)
            .then((e) => {
                if (!0 === e.ok) return e;
                throw (
                    20088 === e.code && (0, g.U1)(u).catch(() => {}),
                    Error(20088 === e.code ? E.intl.string(M.default.UXEDPw) : E.intl.string(M.default.gMWZeG))
                );
            })
            .then(
                (t) => {
                    (r.showConfirmation(E.intl.string(M.default.S6Px3n)),
                        null != e.guildId && q(i),
                        (0, w.tZ)(u, { isPreview: !1 })
                            .catch((e) => {
                                console.error("[conjure] post-publish refresh failed", u, e);
                            })
                            .then(() => (s && !0 !== t.channel_skipped ? W(u, a) : void 0))
                            .finally(() => U(u, !1))
                            .catch(() => {}));
                },
                (e) => {
                    (U(u, !1), r.showError(e instanceof Error ? e.message : E.intl.string(M.default.gMWZeG)));
                },
            ));
}
function U(e, t) {
    r.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function W(e, t) {
    let n = Date.now() + 5e3;
    for (; L(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function q(e) {
    (0, a.eO)((0, x.Du)(e), { withMutualGuilds: !0 }).catch(() => {});
}
let O = new Set();
async function B(e, t, l) {
    let { guildId: i, platform: r } = l;
    if (!0 === l.busy || O.has(e)) return;
    let a = L(e, i);
    if (null == a) return;
    let u = k.A.getPublishApprovalUrl(e);
    if (null != u && (0, m.PV)(a.project)) {
        let { promptPublishApproval: e } = await Promise.all([n.e("241989"), n.e("574246")]).then(n.bind(n, 200389));
        e(u);
        return;
    }
    if (k.A.isProjectPublishing(e) || a.input.status?.publishing === !0) return;
    let s = (0, S.U)(a.input);
    ((0, v.yJ)(e, {
        entryPoint: t,
        publishState: a.input.status?.state ?? null,
        surface: a.input.status?.surface ?? null,
        installScope: a.project.install_scope,
        action: s.action,
    }),
    null != s.disabledReason)
        ? r.showPublishBlocked(C.k.MISSING_MANAGE_SERVER, s.disabledReason)
        : ((0, P.dx)(e), null != s.confirmReason)
          ? r.showPublishBlocked(C.k.MISSING_MANAGE_CHANNELS, s.confirmReason, () => {
                z(e, s, l).catch(() => {});
            })
          : await z(e, s, l);
}
async function z(e, t, n) {
    let { guildId: l, platform: i } = n,
        r = L(e, l);
    if (!(null == r || k.A.isProjectPublishing(e))) {
        if (null != i.promptFirstPublish && r.input.status?.state === "unpublished" && (0, m.PV)(r.project)) {
            let t;
            O.add(e);
            try {
                t = await i.promptFirstPublish({ projectId: e, name: r.project.name, description: await F(r.project) });
            } finally {
                O.delete(e);
            }
            if (!t || k.A.isProjectPublishing(e)) return;
            r = L(e, l) ?? r;
        }
        if ("consent_then_publish" === t.intent) {
            O.add(e);
            try {
                await (i.requestConsent ?? ((e) => R(e, l)))(e);
            } finally {
                O.delete(e);
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
    let n = l.useContext(_),
        r = t ?? n,
        a = r?.guildId ?? null,
        {
            canPublish: h,
            publishing: g,
            approvalUrl: b,
            project: x,
            guildId: v,
            appChannelId: y,
            installScope: A,
            status: j,
            integrationStatus: w,
            guildName: C,
            appChannelName: P,
            appChannelPending: N,
            canManageGuild: I,
            canManageChannels: T,
            usesAppChannels: R,
            botInGuild: D,
            liveNameOutdated: F,
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
        G = l.useMemo(
            () =>
                null == x
                    ? null
                    : {
                          installScope: A,
                          status: j,
                          integrationStatus: w,
                          guildName: C,
                          appChannelName: P,
                          appChannelPending: N,
                          canManageGuild: I,
                          canManageChannels: T,
                          usesAppChannels: R,
                          botInGuild: D,
                          liveNameOutdated: F,
                      },
            [x, A, j, w, C, P, N, I, T, R, D, F],
        ),
        U = G?.status?.state ?? null,
        W = G?.installScope === "guild" && G.status?.surface === "bot";
    l.useEffect(() => {
        null != x && null != v && W && null != U && "unpublished" !== U && q(x);
    }, [x?.id, v, W, U]);
    let O = x?.application_id ?? null,
        z = null != U && "unpublished" !== U;
    l.useEffect(() => {
        null != O &&
            z &&
            null == s.A.getApplication(O) &&
            !s.A.isFetchingApplication(O) &&
            (0, u.TA)(O).catch(() => {});
    }, [O, z]);
    let $ = l.useMemo(() => (null == G ? null : (0, S.U)(G)), [G]),
        V = l.useCallback(
            (t) => {
                null != e &&
                    null != r &&
                    B(e, t, r).catch((t) => {
                        console.error("[conjure] publish action failed", e, t);
                    });
            },
            [e, r],
        );
    if (null == r || !h || null == $) return null;
    let Y = null == b ? $.label : E.intl.string(M.default.qru9M5);
    return {
        ...$,
        status: G?.status ?? null,
        guildId: v,
        appChannelId: y,
        publishing: g,
        label: g ? E.intl.string(M.default.Rhx0rn) : Y,
        disabled: g || !0 === r.busy,
        run: V,
    };
}
