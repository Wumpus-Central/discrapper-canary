n.d(i, { A: () => D });
var e = n(936555),
    r = n(853742),
    E = n(352505),
    s = n(979816),
    l = n(997509),
    S = n(225419),
    o = n(864145),
    A = n(96566),
    a = n(284738),
    _ = n(406704),
    g = n(780964),
    N = n(95701),
    B = n(71393),
    x = n(975571),
    T = n(652215),
    d = n(737045),
    M = n(985018);
function p(t) {
    let i = (0, a.Y)(t),
        r = B.A.getGuild(t),
        s = null != r && (0, e.w)(r),
        l = (0, o.K5)({ location: "getPermissionOptions" }),
        S = E.M.getCurrentConfig({ guildId: t, location: "getPermissionOptions" }).enabled;
    return {
        PRIORITY_SPEAKER_DESCRIPTION: M.intl.format(M.t.j66HgY, {
            keybind: M.intl.string(M.t.DkSwJ2),
            onClick: () => {
                {
                    let { openUserSettings: t } = n(840065);
                    t(g.X.KEYBINDS_PANEL, { section: T.nc_.KEYBINDS });
                }
            },
        }),
        SOUNDBOARD_DESCRIPTION: M.intl.format(M.t.fVE8y8, { helpCenterArticle: x.A.getArticleURL(T.MVz.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: s,
        inSoundmojiExperiment: l,
        inGameMentionsExperiment: S,
    };
}
let D = {
    generateChannelPermissionSpec: function (t, i, n, e) {
        var E, o, a, g;
        let B = (0, d.mW)(i, n, e),
            x = p(t),
            D = _.io.getCurrentConfig({ guildId: t, location: "3ad37d_1" }).enabled && N.p6.has(i.type),
            c = (0, A.Bw)(t),
            I = (0, s.i_)(t),
            R = i.isMediaChannel(),
            { inSoundmojiExperiment: O } = x;
        switch (i.type) {
            case T.rbe.GUILD_CATEGORY:
                return [
                    S.mL(B, M.intl.string(M.t["AkPxc+"])),
                    S.m6(B, M.intl.string(M.t.Ny49TN)),
                    S.BK(B, M.intl.string(M.t.cKobO5), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: O,
                    }),
                    S.iG(B, M.intl.string(M.t["46Ra1b"])),
                    S.Si(B, M.intl.string(M.t["rrh/W6"])),
                    ...((E = x.showStageChannelPermissions),
                    (o = () => S.qI(B, M.intl.string(M.t.yniauk))),
                    E ? [o()] : []),
                    S.xd(B, M.intl.string(M.t.b8lplT)),
                ];
            case T.rbe.GUILD_VOICE:
                return [
                    S.mL(B, M.intl.string(M.t.ouHggI), { showManageWebhooks: !0 }),
                    S.m6(B, M.intl.string(M.t.Ny49TN)),
                    S.iG(B, M.intl.string(M.t["46Ra1b"])),
                    S.k6(B, M.intl.string(M.t.iqlsnD), {
                        sectionDescription: I
                            ? M.intl.format(M.t["4Z9Fbb"], {
                                  setUpAutomod: () => {
                                      l.A.open(t, T.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: O,
                    }),
                    S.xd(B, M.intl.string(M.t.b8lplT)),
                    S.Si(B, M.intl.string(M.t["rrh/W6"])),
                ];
            case T.rbe.GUILD_STAGE_VOICE:
                return [
                    S.mL(B, M.intl.string(M.t.ouHggI), { showManageWebhooks: !1 }),
                    S.m6(B, M.intl.string(M.t.Ny49TN)),
                    S.od(B, M.intl.string(M.t["46Ra1b"]), c),
                    S.qI(B, M.intl.string(M.t.yniauk)),
                    S.xd(B, M.intl.string(M.t.b8lplT)),
                    S.k6(B, M.intl.string(M.t.iqlsnD), {
                        sectionDescription: I
                            ? M.intl.format(M.t["4Z9Fbb"], {
                                  setUpAutomod: () => {
                                      l.A.open(t, T.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: O,
                    }),
                    S.Si(B, M.intl.string(M.t["rrh/W6"]), { showActivities: !1 }),
                ];
            case T.rbe.GUILD_FORUM:
            case T.rbe.GUILD_MEDIA:
                let u = R ? M.intl.string(M.t.aSjPgw) : M.intl.string(M.t.TS7Cnb),
                    h = R ? M.t.YjJTtH : M.t["1MTnqY"];
                return [
                    S.mL(B, M.intl.string(M.t.ouHggI)),
                    S.m6(B, M.intl.string(M.t.Ny49TN)),
                    S.BK(B, u, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: I
                            ? M.intl.format(h, {
                                  setUpAutomod: () => {
                                      R || (0, r.El)(), l.A.open(t, T.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: O,
                    }),
                    S.Si(B, M.intl.string(M.t["rrh/W6"])),
                    ...((a = () => S.iG(B, M.intl.string(M.t["46Ra1b"]))), D ? [a()] : []),
                ];
            default:
                return [
                    S.mL(B, M.intl.string(M.t.ouHggI)),
                    S.m6(B, M.intl.string(M.t.Ny49TN)),
                    S.BK(B, M.intl.string(M.t.cKobO5), {
                        showPrivateThreads: i.type !== T.rbe.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: O,
                    }),
                    S.Si(B, M.intl.string(M.t["rrh/W6"])),
                    ...((g = () => S.iG(B, M.intl.string(M.t["46Ra1b"]))), D ? [g()] : []),
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i;
        let n = new Set();
        return (
            t.features.has(T.GuildFeatures.COMMUNITY) || n.add(T.xBc.VIEW_GUILD_ANALYTICS.toString()),
            (i = S.LZ(p(t.id))),
            0 === n.size
                ? i
                : i.map((t) => ({ ...t, permissions: t.permissions.filter((t) => !n.has(t.flag.toString())) }))
        );
    },
    getGuildPermissionSpecMap: function (t) {
        return S.eD(p(t.id));
    },
};
