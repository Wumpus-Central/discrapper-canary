n.d(t, { bI: () => _, tV: () => B, Ay: () => Y, $l: () => D, KL: () => I, qF: () => R, FZ: () => $ });
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
    S = n(664619),
    w = n(722701),
    C = n(949616),
    k = n(516288),
    M = n(962998),
    E = n(248675),
    P = n(105292),
    N = n(652215);
let _ = 221552 == n.j ? l.createContext(null) : null;
function I(e, t) {
    return "user" === e.install_scope ? null : (e.guild_id ?? t);
}
function R(e) {
    if ((0, b.Fl)(e)) return !1;
    let t = s.A.getApplication(e.application_id)?.name;
    return null != t && t !== e.name;
}
function T(e, t) {
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
            status: w.A.getPublishStatus(e),
            integrationStatus: m.Ay.getIntegrationStatus(e),
            guildName: r?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: w.A.isAppChannelPending(e),
            canManageGuild: null == r ? null : p.A.can(N.xBc.MANAGE_GUILD, r),
            canManageChannels: null == r ? null : p.A.can(N.xBc.MANAGE_CHANNELS, r),
            usesAppChannels: (0, b.Hv)(n),
            botInGuild: (0, v.AS)(n, l),
            liveNameOutdated: R(n),
        },
    };
}
async function L(e, t) {
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
async function G(e) {
    var t;
    let n;
    return (
        null != e.preview_application_id && (await W(e.preview_application_id)),
        (t = e.id),
        null == (n = m.Ay.getProject(t)?.preview_application_id) ? "" : (s.A.getApplication(n)?.description ?? "")
    );
}
let F = new Map();
function W(e) {
    if (s.A.isHydrated(e)) return (0, g.gM)(e);
    let t = F.get(e);
    return (
        null == t &&
            ((t = (0, u.TA)(e)
                .then(
                    () => void 0,
                    () => void 0,
                )
                .finally(() => F.delete(e))),
            F.set(e, t)),
        t
    );
}
function B(e) {
    (0, M.dx)(e);
    let t = m.Ay.getProject(e)?.preview_application_id;
    null != t && w.A.getPublishStatus(e)?.state === "unpublished" && W(t).catch(() => {});
}
function O(e, t, n) {
    let { project: l } = e,
        { platform: i, guildId: r } = n,
        a = l.id,
        u = null != e.guildId && e.input.status?.surface === "activity" && null == e.appChannelId && !t.isUpdate;
    (u && q(a, !0),
        (0, M.TV)(a)
            .then((e) => {
                if (!0 === e.ok) return e;
                throw (
                    20088 === e.code && (0, g.U1)(a).catch(() => {}),
                    Error(20088 === e.code ? P.intl.string(E.default.UXEDPw) : P.intl.string(E.default.gMWZeG))
                );
            })
            .then(
                (t) => {
                    (i.showConfirmation(P.intl.string(E.default.S6Px3n)),
                        null != e.guildId && z(l),
                        (0, S.tZ)(a, { isPreview: !1 })
                            .catch((e) => {
                                console.error("[conjure] post-publish refresh failed", a, e);
                            })
                            .then(() => (u && !0 !== t.channel_skipped ? U(a, r) : void 0))
                            .finally(() => q(a, !1))
                            .catch(() => {}));
                },
                (e) => {
                    (q(a, !1), i.showError(e instanceof Error ? e.message : P.intl.string(E.default.gMWZeG)));
                },
            ));
}
function q(e, t) {
    r.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: e, pending: t });
}
async function U(e, t) {
    let n = Date.now() + 5e3;
    for (; T(e, t)?.appChannelId == null && Date.now() < n;) await new Promise((e) => setTimeout(e, 250));
}
function z(e) {
    (0, a.eO)((0, v.Du)(e), { withMutualGuilds: !0 }).catch(() => {});
}
let V = new Set();
async function $(e, t, n) {
    let { guildId: l, platform: i } = n;
    if (!0 === n.busy || V.has(e)) return;
    let r = T(e, l);
    if (null == r || w.A.isProjectPublishing(e) || r.input.status?.publishing === !0) return;
    let a = (0, C.U)(r.input);
    ((0, x.yJ)(e, {
        entryPoint: t,
        publishState: r.input.status?.state ?? null,
        surface: r.input.status?.surface ?? null,
        installScope: r.project.install_scope,
        action: a.action,
    }),
    null != a.disabledReason)
        ? i.showPublishBlocked(k.k.MISSING_MANAGE_SERVER, a.disabledReason)
        : ((0, M.dx)(e), null != a.confirmReason)
          ? i.showPublishBlocked(k.k.MISSING_MANAGE_CHANNELS, a.confirmReason, () => {
                H(e, a, n).catch(() => {});
            })
          : await H(e, a, n);
}
async function H(e, t, n) {
    let { guildId: l, platform: i } = n,
        r = T(e, l);
    if (!(null == r || w.A.isProjectPublishing(e))) {
        if (null != i.promptFirstPublish && r.input.status?.state === "unpublished" && (0, m.PV)(r.project)) {
            let t;
            V.add(e);
            try {
                t = await i.promptFirstPublish({ projectId: e, name: r.project.name, description: await G(r.project) });
            } finally {
                V.delete(e);
            }
            if (!t || w.A.isProjectPublishing(e)) return;
            r = T(e, l) ?? r;
        }
        if ("consent_then_publish" === t.intent) {
            V.add(e);
            try {
                await (i.requestConsent ?? ((e) => L(e, l)))(e);
            } finally {
                V.delete(e);
            }
            if (w.A.isProjectPublishing(e)) return;
            let r = T(e, l),
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
            O(r, t, n);
            return;
        }
        O(r, t, n);
    }
}
function Y(e, t) {
    let n = l.useContext(_),
        r = t ?? n,
        a = r?.guildId ?? null,
        {
            canPublish: h,
            publishing: g,
            project: b,
            guildId: v,
            appChannelId: x,
            installScope: y,
            status: A,
            integrationStatus: j,
            guildName: S,
            appChannelName: k,
            appChannelPending: M,
            canManageGuild: N,
            canManageChannels: I,
            usesAppChannels: R,
            botInGuild: L,
            liveNameOutdated: D,
        } = (0, i.cf)(
            [m.Ay, w.A, f.A, c.Ay, d.A, p.A, o.A, s.A],
            () => {
                let t = null == e || null == a ? null : T(e, a);
                return {
                    canPublish: null != t && (0, m.jf)(t.project),
                    project: t?.project ?? null,
                    guildId: t?.guildId ?? null,
                    appChannelId: t?.appChannelId ?? null,
                    publishing: null != e && (w.A.isProjectPublishing(e) || w.A.getPublishStatus(e)?.publishing === !0),
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
                null == b
                    ? null
                    : {
                          installScope: y,
                          status: A,
                          integrationStatus: j,
                          guildName: S,
                          appChannelName: k,
                          appChannelPending: M,
                          canManageGuild: N,
                          canManageChannels: I,
                          usesAppChannels: R,
                          botInGuild: L,
                          liveNameOutdated: D,
                      },
            [b, y, A, j, S, k, M, N, I, R, L, D],
        ),
        F = G?.status?.state ?? null,
        W = G?.installScope === "guild" && G.status?.surface === "bot";
    l.useEffect(() => {
        null != b && null != v && W && null != F && "unpublished" !== F && z(b);
    }, [b?.id, v, W, F]);
    let B = b?.application_id ?? null,
        O = null != F && "unpublished" !== F;
    l.useEffect(() => {
        null != B &&
            O &&
            null == s.A.getApplication(B) &&
            !s.A.isFetchingApplication(B) &&
            (0, u.TA)(B).catch(() => {});
    }, [B, O]);
    let q = l.useMemo(() => (null == G ? null : (0, C.U)(G)), [G]),
        U = l.useCallback(
            (t) => {
                null != e &&
                    null != r &&
                    $(e, t, r).catch((t) => {
                        console.error("[conjure] publish action failed", e, t);
                    });
            },
            [e, r],
        );
    return null != r && h && null != q
        ? {
              ...q,
              status: G?.status ?? null,
              guildId: v,
              appChannelId: x,
              publishing: g,
              label: g ? P.intl.string(E.default.Rhx0rn) : q.label,
              disabled: g || !0 === r.busy,
              run: U,
          }
        : null;
}
