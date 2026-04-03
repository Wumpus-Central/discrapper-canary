e.d(i, { A: () => D });
var n = e(936555),
    r = e(853742),
    E = e(979816),
    s = e(997509),
    l = e(472282),
    S = e(225419),
    o = e(864145),
    A = e(96566),
    a = e(284738),
    _ = e(406704),
    g = e(780964),
    B = e(95701),
    N = e(71393),
    x = e(975571),
    T = e(652215),
    d = e(737045),
    M = e(985018);
function p(t) {
    let i = (0, a.Y)(t),
        r = N.A.getGuild(t),
        E = null != r && (0, n.w)(r),
        s = (0, o.K)({ location: "getPermissionOptions" });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: M.intl.format(M.t.j66HgY, {
            keybind: M.intl.string(M.t.DkSwJ2),
            onClick: () => {
                {
                    let { openUserSettings: t } = e(858897);
                    t(g.X.KEYBINDS_PANEL);
                }
            },
        }),
        SOUNDBOARD_DESCRIPTION: M.intl.format(M.t.fVE8y8, { helpCenterArticle: x.A.getArticleURL(T.MVz.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: E,
        inSoundmojiExperiment: s,
    };
}
function I(t, i) {
    return 0 === i.size
        ? t
        : t.map((t) => ({ ...t, permissions: t.permissions.filter((t) => !i.has(t.flag.toString())) }));
}
let D = {
    generateChannelPermissionSpec: function (t, i, e, n) {
        var o, a, g, x;
        let D,
            c = (0, d.mW)(i, e, n),
            O = p(t),
            R = _.io.getCurrentConfig({ guildId: t, location: "3ad37d_1" }).enabled && B.p6.has(i.type),
            u = (0, A.Bw)(t),
            f = (0, E.i_)(t),
            h = i.isMediaChannel(),
            C = new Set(),
            L = N.A.getGuild(t);
        (L?.features.has(T.GuildFeatures.VERIFIED) &&
            l.A.getCurrentConfig({ guildId: t, location: "generateChannelPermissionSpec" }).enabled) ||
            C.add(T.xBc.MANAGE_OFFICIAL_MESSAGES.toString());
        let { inSoundmojiExperiment: G } = O;
        switch (i.type) {
            case T.rbe.GUILD_CATEGORY:
                D = [
                    S.mL(c, M.intl.string(M.t["AkPxc+"])),
                    S.m6(c, M.intl.string(M.t.Ny49TN)),
                    S.BK(c, M.intl.string(M.t.cKobO5), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: G,
                    }),
                    S.iG(c, M.intl.string(M.t["46Ra1b"])),
                    S.Si(c, M.intl.string(M.t["rrh/W6"])),
                    ...((o = O.showStageChannelPermissions),
                    (a = () => S.qI(c, M.intl.string(M.t.yniauk))),
                    o ? [a()] : []),
                    S.xd(c, M.intl.string(M.t.b8lplT)),
                ];
                break;
            case T.rbe.GUILD_VOICE:
                D = [
                    S.mL(c, M.intl.string(M.t.ouHggI), { showManageWebhooks: !0 }),
                    S.m6(c, M.intl.string(M.t.Ny49TN)),
                    S.iG(c, M.intl.string(M.t["46Ra1b"])),
                    S.k6(c, M.intl.string(M.t.iqlsnD), {
                        sectionDescription: f
                            ? M.intl.format(M.t["4Z9Fbb"], {
                                  setUpAutomod: () => {
                                      s.A.open(t, T.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: G,
                    }),
                    S.xd(c, M.intl.string(M.t.b8lplT)),
                    S.Si(c, M.intl.string(M.t["rrh/W6"])),
                ];
                break;
            case T.rbe.GUILD_STAGE_VOICE:
                D = [
                    S.mL(c, M.intl.string(M.t.ouHggI), { showManageWebhooks: !1 }),
                    S.m6(c, M.intl.string(M.t.Ny49TN)),
                    S.od(c, M.intl.string(M.t["46Ra1b"]), u),
                    S.qI(c, M.intl.string(M.t.yniauk)),
                    S.xd(c, M.intl.string(M.t.b8lplT)),
                    S.k6(c, M.intl.string(M.t.iqlsnD), {
                        sectionDescription: f
                            ? M.intl.format(M.t["4Z9Fbb"], {
                                  setUpAutomod: () => {
                                      s.A.open(t, T.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: G,
                    }),
                    S.Si(c, M.intl.string(M.t["rrh/W6"]), { showActivities: !1 }),
                ];
                break;
            case T.rbe.GUILD_FORUM:
            case T.rbe.GUILD_MEDIA: {
                let i = h ? M.intl.string(M.t.aSjPgw) : M.intl.string(M.t.TS7Cnb),
                    e = h ? M.t.YjJTtH : M.t["1MTnqY"];
                D = [
                    S.mL(c, M.intl.string(M.t.ouHggI)),
                    S.m6(c, M.intl.string(M.t.Ny49TN)),
                    S.BK(c, i, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: f
                            ? M.intl.format(e, {
                                  setUpAutomod: () => {
                                      h || (0, r.El)(), s.A.open(t, T.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: G,
                    }),
                    S.Si(c, M.intl.string(M.t["rrh/W6"])),
                    ...((g = () => S.iG(c, M.intl.string(M.t["46Ra1b"]))), R ? [g()] : []),
                ];
                break;
            }
            default:
                D = [
                    S.mL(c, M.intl.string(M.t.ouHggI)),
                    S.m6(c, M.intl.string(M.t.Ny49TN)),
                    S.BK(c, M.intl.string(M.t.cKobO5), {
                        showPrivateThreads: i.type !== T.rbe.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: G,
                    }),
                    S.Si(c, M.intl.string(M.t["rrh/W6"])),
                    ...((x = () => S.iG(c, M.intl.string(M.t["46Ra1b"]))), R ? [x()] : []),
                ];
        }
        return I(D, C);
    },
    generateGuildPermissionSpec: function (t) {
        let i = new Set();
        return (
            t.features.has(T.GuildFeatures.COMMUNITY) || i.add(T.xBc.VIEW_GUILD_ANALYTICS.toString()),
            (t.features.has(T.GuildFeatures.VERIFIED) &&
                l.A.getCurrentConfig({ guildId: t.id, location: "generateGuildPermissionSpec" }).enabled) ||
                i.add(T.xBc.MANAGE_OFFICIAL_MESSAGES.toString()),
            I(S.LZ(p(t.id)), i)
        );
    },
    getGuildPermissionSpecMap: function (t) {
        return S.eD(p(t.id));
    },
};
