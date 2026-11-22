l.d(n, { bI: () => R, t8: () => k, Ay: () => $, qF: () => x, KL: () => L, vL: () => B, FZ: () => Z, T3: () => q });
var e = l(582128),
    i = l(855986),
    u = l(73153),
    a = l(803306),
    r = l(627363),
    s = l(587895),
    o = l(851767),
    d = l(734057),
    c = l(808728),
    p = l(71393),
    f = l(576705),
    g = l(238490),
    h = l(233470),
    b = l(260498),
    _ = l(951178),
    A = l(426035),
    P = l(890698),
    S = l(385081),
    m = l(519325),
    w = l(246338),
    I = l(664619),
    C = l(722701),
    E = l(811587),
    v = l(191850),
    y = l(792996);
function N(t) {
    let { installScope: n, integrationStatus: l } = t,
        e = t.status ?? { publishState: "not_live", surface: null, previewAppChannels: [] },
        i = "live_current" === e.publishState && t.liveNameOutdated ? { ...e, publishState: "live_outdated" } : e,
        u = (function (t) {
            let {
                installScope: n,
                status: l,
                appChannelName: e,
                appChannelPending: i,
                usesAppChannels: u,
                botInGuild: a,
            } = t;
            return (
                "guild" === n &&
                null != l &&
                !!(0, E.l)(l.publishState) &&
                (!1 === a || ("activity" === l.surface && u && null == e && !0 !== i))
            );
        })({ ...t, status: i }),
        a = (function (t) {
            let { installScope: n, guildName: l, canManageGuild: e } = t;
            return "guild" !== n || !1 !== e ? null : y.intl.format(v.default.N4NkyR, { server: l ?? "" });
        })(t),
        r = (0, g.Qg)({
            installScope: n,
            previewReady: l?.preview_ready === !0,
            integrationInstalled: l?.integration_installed ?? null,
            botPermissionsChanged: l?.bot_permissions_changed === !0,
        }),
        s = {
            intent: r ? "consent_then_publish" : "publish",
            isUpdate: "live_outdated" === i.publishState && !u,
            upToDate: ("live_current" === i.publishState || "live_auto_synced" === i.publishState) && !u,
            disabledReason: a,
            confirmReason:
                null == a
                    ? (function (t) {
                          let { installScope: n, guildName: l, canManageChannels: e, usesAppChannels: i } = t;
                          return "guild" === n && i && !1 === e
                              ? y.intl.format(v.default.eHYXFg, { server: l ?? "" })
                              : null;
                      })(t)
                    : null,
            missingSurface: u ? ("activity" === i.surface && !1 !== t.botInGuild ? "channel" : "bot") : null,
        };
    return r && l?.bot_permissions_changed === !0
        ? { ...s, label: y.intl.string(v.default["tUeY/h"]), action: "review_permissions" }
        : { ...s, label: y.intl.string(v.default["120EFN"]), action: "publish" };
}
var M = l(516288),
    T = l(962998),
    U = l(868193),
    G = l(615839);
let j = {
    preparing: v.default.GQeas1,
    approval: v.default["TkHHD+"],
    approved_by_grant: v.default["9+kNt8"],
    setup: v.default["F+AxgM"],
    build: v.default.oQeMIy,
    deploy: v.default.LqZvZ2,
    discord: v.default.LFcGAT,
    activating: v.default.ff1Fq1,
};
var D = l(652215);
let R = e.createContext(null);
function L(t, n) {
    return "guild" === t.install_scope ? (t.guild_id ?? n) : null;
}
function x(t) {
    if (!(0, _._7)(t)) return !1;
    let n = s.A.getApplication(t.application_id)?.name;
    return null != n && n !== t.name;
}
function k(t) {
    if (null == C.A.getPublishApprovalUrl(t)) return !1;
    let n = C.A.getPublishProgress(t)?.stage;
    return null == n || "preparing" === n || "approval" === n;
}
function O(t, n) {
    let l = b.Ay.getProject(t);
    if (null == l) return null;
    let e = L(l, n),
        i = null == e ? null : (0, w.i8)(e, l.application_id),
        u = null == e ? null : p.A.getGuild(e);
    return {
        project: l,
        guildId: e,
        appChannelId: i,
        ownerInstallMissing:
            "user" === l.install_scope &&
            (0, b.PV)(l) &&
            b.Ay.getIntegrationStatus(t)?.owner_authorization_revoked === !0,
        input: {
            installScope: l.install_scope,
            status: C.A.getPublishStatus(t),
            integrationStatus: b.Ay.getIntegrationStatus(t),
            guildName: u?.name ?? null,
            appChannelName: null == i ? null : (d.A.getChannel(i)?.name ?? null),
            appChannelPending: C.A.isAppChannelPending(t),
            canManageGuild:
                null == u
                    ? null
                    : !!f.A.can(D.xBc.MANAGE_GUILD, u) ||
                      (!!(0, b.PV)(l) &&
                          (0, _.Jr)(l).some((t) => {
                              let n = p.A.getGuild(t);
                              return null != n && f.A.can(D.xBc.MANAGE_GUILD, n);
                          })),
            canManageChannels: null == u ? null : f.A.can(D.xBc.MANAGE_CHANNELS, u),
            usesAppChannels: (0, _.Hv)(l),
            botInGuild: (0, A.AS)(l, e),
            liveNameOutdated: x(l),
        },
    };
}
async function B(t, n) {
    let l = b.Ay.getProject(t),
        e = l?.preview_application_id;
    if (null == l || null == e) return;
    let i = l?.install_scope === "guild" && null != l.guild_id ? l.guild_id : n;
    (await (0, r.TA)(e).catch(() => {}),
        await new Promise((t) => {
            m.A.openConjureAppInstallModal({
                applicationId: e,
                application: s.A.getApplication(e) ?? null,
                guildId: i,
                onClose: t,
            });
        }),
        await (async function (t, n) {
            "guild" === t.install_scope &&
                (null == t.guild_id
                    ? await (0, h.xo)(t.id, n)
                    : t.preview_guild_id !== n && (await (0, h.CW)(t.id, { preview_guild_id: n })));
        })(l, i).catch(() => {}),
        await (0, h.U1)(t).catch(() => {}));
}
async function H(t, n, l, e) {
    let i,
        { project: a } = t,
        { platform: r, guildId: s } = l,
        o = a.id;
    V.add(o);
    try {
        let t = await (0, T.xQ)(o);
        i = 1 === t.destinations.length ? t.selected_destination_id : await r.promptPublishDestination(t);
    } catch (t) {
        r.showError(t instanceof Error ? t.message : y.intl.string(v.default.gMWZeG));
        return;
    } finally {
        V.delete(o);
    }
    if (null == i) return;
    if (C.A.isProjectPublishing(o) || C.A.getPublishStatus(o)?.publishing === !0)
        return void r.showError(y.intl.string(v.default["TD/ze/"]));
    let d = null != t.guildId && t.input.status?.surface === "activity" && null == t.appChannelId && !n.isUpdate;
    (d && J(o, !0),
        (0, T.TV)(o, i, e)
            .then((t) => {
                if (!0 === t.ok) return t;
                throw (20088 === t.code && (0, h.U1)(o).catch(() => {}), Error((0, U.A)(t)));
            })
            .then(
                (n) => {
                    (r.showConfirmation(y.intl.string(v.default.S6Px3n)),
                        (0, P.$w)(o),
                        null != t.guildId && F(a),
                        (0, I.tZ)(o, { isPreview: !1 })
                            .catch((t) => {
                                console.error("[conjure] post-publish refresh failed", o, t);
                            })
                            .then(() => (d && !0 !== n.channel_skipped ? q(o, s) : void 0))
                            .finally(() => J(o, !1))
                            .catch(() => {}));
                },
                (t) => {
                    J(o, !1);
                    let n = t instanceof Error ? t.message : y.intl.string(v.default.gMWZeG);
                    (u.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: o, message: n }),
                        r.showError(n));
                },
            ));
}
function J(t, n) {
    u.h.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: t, pending: n });
}
async function q(t, n) {
    let l = Date.now() + 5e3,
        e = O(t, n)?.appChannelId ?? null;
    for (; null == e && Date.now() < l;)
        (await new Promise((t) => setTimeout(t, 250)), (e = O(t, n)?.appChannelId ?? null));
    return e;
}
function F(t) {
    (0, a.eO)((0, A.Du)(t), { withMutualGuilds: !0 }).catch(() => {});
}
let V = new Set();
async function Z(t, n, e) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { guildId: u, platform: a } = e;
    if (!0 === e.busy || V.has(t)) return;
    let r = O(t, u),
        s = r?.input.status?.publishState;
    if (r?.ownerInstallMissing === !0) {
        V.add(t);
        try {
            await (0, h.lZ)(t);
        } catch {
            a.showError(y.intl.string(v.default.gMWZeG));
            return;
        } finally {
            V.delete(t);
        }
    }
    if (null == r || null == s || "nothing_built" === s) return;
    if (r.input.status?.safetyHold === !0) return void a.showSafetyHold(t);
    let o = k(t) ? C.A.getPublishApprovalUrl(t) : null;
    if (null != o && (0, b.PV)(r.project)) {
        let { promptPublishApproval: t } = await Promise.all([l.e(241989), l.e(574246)]).then(l.bind(l, 200389));
        t(o);
        return;
    }
    if (C.A.isProjectPublishing(t) || r.input.status?.publishing === !0) return;
    let d = N(r.input);
    ((0, S.yJ)(t, {
        entryPoint: n,
        publishState: s,
        surface: r.input.status?.surface ?? null,
        installScope: r.project.install_scope,
        action: d.action,
    }),
    null != d.disabledReason)
        ? a.showPublishBlocked(M.k.MISSING_MANAGE_SERVER, d.disabledReason)
        : ((0, T.dx)(t), null != d.confirmReason)
          ? a.showPublishBlocked(M.k.MISSING_MANAGE_CHANNELS, d.confirmReason, () => {
                W(t, d, e, i).catch(() => {});
            })
          : await W(t, d, e, i);
}
async function W(t, n, l, e) {
    let { guildId: i, platform: u } = l,
        a = O(t, i);
    if (!(null == a || C.A.isProjectPublishing(t))) {
        if ("consent_then_publish" === n.intent) {
            V.add(t);
            try {
                await (u.requestConsent ?? ((t) => B(t, i)))(t);
            } finally {
                V.delete(t);
            }
            if (C.A.isProjectPublishing(t)) return;
            let a = O(t, i),
                r = a?.input.integrationStatus ?? null;
            if (
                null == a ||
                (0, g.Qg)({
                    installScope: a.project.install_scope,
                    previewReady: r?.preview_ready === !0,
                    integrationInstalled: r?.integration_installed ?? null,
                    botPermissionsChanged: r?.bot_permissions_changed === !0,
                })
            )
                return;
            await H(a, n, l, e);
            return;
        }
        await H(a, n, l, e);
    }
}
function $(t, n) {
    let l = e.useContext(R),
        u = n ?? l,
        a = u?.guildId ?? null,
        {
            viewerCanPublish: g,
            ownerInstallMissing: h,
            publishing: _,
            failure: A,
            approvalUrl: P,
            project: S,
            guildId: m,
            appChannelId: w,
            installScope: I,
            status: M,
            integrationStatus: T,
            guildName: U,
            appChannelName: D,
            appChannelPending: L,
            canManageGuild: x,
            canManageChannels: B,
            usesAppChannels: H,
            botInGuild: J,
            liveNameOutdated: q,
        } = (0, i.cf)(
            [b.Ay, C.A, p.A, c.A, d.A, f.A, o.A, s.A],
            () => {
                let n = null == t || null == a ? null : O(t, a);
                return {
                    viewerCanPublish: null != n && (0, b.jf)(n.project),
                    ownerInstallMissing: n?.ownerInstallMissing === !0,
                    project: n?.project ?? null,
                    guildId: n?.guildId ?? null,
                    appChannelId: n?.appChannelId ?? null,
                    publishing:
                        null != t &&
                        !1 === k(t) &&
                        (C.A.isProjectPublishing(t) || C.A.getPublishStatus(t)?.publishing === !0),
                    failure: null == t ? null : C.A.getPublishFailure(t),
                    approvalUrl: null != t && k(t) ? C.A.getPublishApprovalUrl(t) : null,
                    installScope: n?.input.installScope ?? null,
                    status: n?.input.status ?? null,
                    integrationStatus: n?.input.integrationStatus ?? null,
                    guildName: n?.input.guildName ?? null,
                    appChannelName: n?.input.appChannelName ?? null,
                    appChannelPending: n?.input.appChannelPending ?? !1,
                    canManageGuild: n?.input.canManageGuild ?? null,
                    canManageChannels: n?.input.canManageChannels ?? null,
                    usesAppChannels: n?.input.usesAppChannels ?? !1,
                    botInGuild: n?.input.botInGuild ?? null,
                    liveNameOutdated: n?.input.liveNameOutdated ?? !1,
                };
            },
            [t, a],
        ),
        V = e.useMemo(
            () =>
                null == S
                    ? null
                    : {
                          installScope: I,
                          status: M,
                          integrationStatus: T,
                          guildName: U,
                          appChannelName: D,
                          appChannelPending: L,
                          canManageGuild: x,
                          canManageChannels: B,
                          usesAppChannels: H,
                          botInGuild: J,
                          liveNameOutdated: q,
                      },
            [S, I, M, T, U, D, L, x, B, H, J, q],
        ),
        W = V?.status?.publishState ?? null,
        $ = V?.installScope === "guild" && V.status?.surface === "bot";
    e.useEffect(() => {
        null != S && null != m && $ && null != W && (0, E.l)(W) && F(S);
    }, [S?.id, m, $, W]);
    let Q = S?.application_id ?? null,
        z = null != W && (0, E.l)(W);
    e.useEffect(() => {
        null != Q &&
            z &&
            null == s.A.getApplication(Q) &&
            !s.A.isFetchingApplication(Q) &&
            (0, r.TA)(Q).catch(() => {});
    }, [Q, z]);
    let K = e.useMemo(() => (null == V ? null : N(V)), [V]),
        X = (function (t) {
            let n = (0, i.bG)([C.A], () => (null == t ? null : C.A.getPublishProgress(t))),
                [l, u] = e.useState(() => Date.now());
            return (e.useEffect(() => {
                if (null == n) return;
                u(Date.now());
                let t = setInterval(() => u(Date.now()), 1e3);
                return () => clearInterval(t);
            }, [n]),
            null == n)
                ? null
                : y.intl.formatToPlainString(v.default["ndkR+x"], {
                      action: y.intl.string(j[n.stage]),
                      detail: (0, G.C7)(l - n.stageStartedAt),
                  });
        })(_ ? t : null),
        Y = e.useCallback(
            (n, l) => {
                null != t &&
                    null != u &&
                    Z(t, n, u, l).catch((n) => {
                        console.error("[conjure] publish action failed", t, n);
                    });
            },
            [t, u],
        );
    if (null == u || null == V || null == K) return null;
    let tt = (function (t, n) {
        let l = t.status?.publishState;
        if (!n.canPublish || null == t.installScope || null == l || "nothing_built" === l) return "hidden";
        if (n.publishing) return "publishing";
        let { upToDate: e, action: i } = N(t);
        return !e || "publish" !== i || n.awaitingApproval || n.ownerInstallMissing
            ? "action_needed"
            : "live_auto_synced" === l
              ? "auto_synced"
              : "up_to_date";
    })(V, { canPublish: g, publishing: _, awaitingApproval: null != P, ownerInstallMissing: h });
    if ("hidden" === tt) return null;
    let tn = null == P ? K.label : y.intl.string(v.default.qru9M5);
    return {
        ...K,
        state: tt,
        status: V.status,
        guildId: m,
        appChannelId: w,
        failure: _ ? null : A,
        showsProgress: null != X,
        label: _ ? (X ?? y.intl.string(v.default.Rhx0rn)) : tn,
        disabled: _ || !0 === u.busy,
        run: Y,
    };
}
