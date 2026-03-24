n.d(i, { A: () => p });
var e = n(936555),
    r = n(853742),
    E = n(979816),
    s = n(997509),
    l = n(225419),
    S = n(864145),
    o = n(96566),
    A = n(284738),
    a = n(406704),
    _ = n(780964),
    g = n(95701),
    N = n(71393),
    B = n(975571),
    x = n(652215),
    T = n(737045),
    d = n(985018);
function M(t) {
    let i = (0, A.Y)(t),
        r = N.A.getGuild(t),
        E = null != r && (0, e.w)(r),
        s = (0, S.K)({ location: "getPermissionOptions" });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: d.intl.format(d.t.j66HgY, {
            keybind: d.intl.string(d.t.DkSwJ2),
            onClick: () => {
                {
                    let { openUserSettings: t } = n(840065);
                    t(_.X.KEYBINDS_PANEL);
                }
            },
        }),
        SOUNDBOARD_DESCRIPTION: d.intl.format(d.t.fVE8y8, { helpCenterArticle: B.A.getArticleURL(x.MVz.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: E,
        inSoundmojiExperiment: s,
    };
}
let p = {
    generateChannelPermissionSpec: function (t, i, n, e) {
        var S, A, _, N;
        let B = (0, T.mW)(i, n, e),
            p = M(t),
            D = a.io.getCurrentConfig({ guildId: t, location: "3ad37d_1" }).enabled && g.p6.has(i.type),
            c = (0, o.Bw)(t),
            I = (0, E.i_)(t),
            R = i.isMediaChannel(),
            { inSoundmojiExperiment: O } = p;
        switch (i.type) {
            case x.rbe.GUILD_CATEGORY:
                return [
                    l.mL(B, d.intl.string(d.t["AkPxc+"])),
                    l.m6(B, d.intl.string(d.t.Ny49TN)),
                    l.BK(B, d.intl.string(d.t.cKobO5), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: O,
                    }),
                    l.iG(B, d.intl.string(d.t["46Ra1b"])),
                    l.Si(B, d.intl.string(d.t["rrh/W6"])),
                    ...((S = p.showStageChannelPermissions),
                    (A = () => l.qI(B, d.intl.string(d.t.yniauk))),
                    S ? [A()] : []),
                    l.xd(B, d.intl.string(d.t.b8lplT)),
                ];
            case x.rbe.GUILD_VOICE:
                return [
                    l.mL(B, d.intl.string(d.t.ouHggI), { showManageWebhooks: !0 }),
                    l.m6(B, d.intl.string(d.t.Ny49TN)),
                    l.iG(B, d.intl.string(d.t["46Ra1b"])),
                    l.k6(B, d.intl.string(d.t.iqlsnD), {
                        sectionDescription: I
                            ? d.intl.format(d.t["4Z9Fbb"], {
                                  setUpAutomod: () => {
                                      s.A.open(t, x.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: O,
                    }),
                    l.xd(B, d.intl.string(d.t.b8lplT)),
                    l.Si(B, d.intl.string(d.t["rrh/W6"])),
                ];
            case x.rbe.GUILD_STAGE_VOICE:
                return [
                    l.mL(B, d.intl.string(d.t.ouHggI), { showManageWebhooks: !1 }),
                    l.m6(B, d.intl.string(d.t.Ny49TN)),
                    l.od(B, d.intl.string(d.t["46Ra1b"]), c),
                    l.qI(B, d.intl.string(d.t.yniauk)),
                    l.xd(B, d.intl.string(d.t.b8lplT)),
                    l.k6(B, d.intl.string(d.t.iqlsnD), {
                        sectionDescription: I
                            ? d.intl.format(d.t["4Z9Fbb"], {
                                  setUpAutomod: () => {
                                      s.A.open(t, x.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: O,
                    }),
                    l.Si(B, d.intl.string(d.t["rrh/W6"]), { showActivities: !1 }),
                ];
            case x.rbe.GUILD_FORUM:
            case x.rbe.GUILD_MEDIA:
                let u = R ? d.intl.string(d.t.aSjPgw) : d.intl.string(d.t.TS7Cnb),
                    h = R ? d.t.YjJTtH : d.t["1MTnqY"];
                return [
                    l.mL(B, d.intl.string(d.t.ouHggI)),
                    l.m6(B, d.intl.string(d.t.Ny49TN)),
                    l.BK(B, u, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: I
                            ? d.intl.format(h, {
                                  setUpAutomod: () => {
                                      R || (0, r.El)(), s.A.open(t, x.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: O,
                    }),
                    l.Si(B, d.intl.string(d.t["rrh/W6"])),
                    ...((_ = () => l.iG(B, d.intl.string(d.t["46Ra1b"]))), D ? [_()] : []),
                ];
            default:
                return [
                    l.mL(B, d.intl.string(d.t.ouHggI)),
                    l.m6(B, d.intl.string(d.t.Ny49TN)),
                    l.BK(B, d.intl.string(d.t.cKobO5), {
                        showPrivateThreads: i.type !== x.rbe.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: O,
                    }),
                    l.Si(B, d.intl.string(d.t["rrh/W6"])),
                    ...((N = () => l.iG(B, d.intl.string(d.t["46Ra1b"]))), D ? [N()] : []),
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i;
        let n = new Set();
        return (
            t.features.has(x.GuildFeatures.COMMUNITY) || n.add(x.xBc.VIEW_GUILD_ANALYTICS.toString()),
            (i = l.LZ(M(t.id))),
            0 === n.size
                ? i
                : i.map((t) => ({ ...t, permissions: t.permissions.filter((t) => !n.has(t.flag.toString())) }))
        );
    },
    getGuildPermissionSpecMap: function (t) {
        return l.eD(M(t.id));
    },
};
