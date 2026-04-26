E.d(i, { A: () => C });
var n = E(936555),
    S = E(853742),
    r = E(979816),
    A = E(997509),
    e = E(581007),
    s = E(472282),
    _ = E(225419),
    l = E(864145),
    B = E(96566),
    o = E(284738),
    N = E(406704),
    g = E(780964),
    x = E(95701),
    T = E(71393),
    I = E(975571),
    M = E(652215),
    R = E(719366),
    a = E(985018);
function O(t) {
    let i = (0, o.Y)(t),
        S = T.A.getGuild(t),
        r = null != S && (0, n.w)(S),
        A = (0, l.K)({ location: "getPermissionOptions" }),
        { enableHangoutWindow: s } = (0, e.kY)({ guildId: t, location: "getPermissionOptions" });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: a.intl.format(a.t.j66HgY, {
            keybind: a.intl.string(a.t.DkSwJ2),
            onClick: () => {
                {
                    let { openUserSettings: t } = E(858897);
                    t(g.X.KEYBINDS_PANEL);
                }
            },
        }),
        SOUNDBOARD_DESCRIPTION: a.intl.format(a.t.fVE8y8, { helpCenterArticle: I.A.getArticleURL(M.MVz.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: r,
        inSoundmojiExperiment: A,
        enableHangoutWindow: s,
    };
}
function D(t, i) {
    return 0 === i.size
        ? t
        : t.map((t) => ({ ...t, permissions: t.permissions.filter((t) => !i.has(t.flag.toString())) }));
}
let C = {
    generateChannelPermissionSpec: function (t, i, E, n) {
        var e, l, o, g;
        let I,
            C = O(t),
            p = (0, R.mW)(i, E, { ...n, enableHangoutWindow: C.enableHangoutWindow }),
            G = N.io.getCurrentConfig({ guildId: t, location: "3ad37d_1" }).enabled && x.p6.has(i.type),
            c = (0, B.Bw)(t),
            L = (0, r.i_)(t),
            d = i.isMediaChannel(),
            U = new Set(),
            f = T.A.getGuild(t);
        (f?.features.has(M.GuildFeatures.VERIFIED) &&
            s.A.getCurrentConfig({ guildId: t, location: "generateChannelPermissionSpec" }).enabled) ||
            U.add(M.xBc.MANAGE_OFFICIAL_MESSAGES.toString());
        let { inSoundmojiExperiment: u } = C;
        switch (i.type) {
            case M.rbe.GUILD_CATEGORY:
                I = [
                    _.mL(p, a.intl.string(a.t["AkPxc+"])),
                    _.m6(p, a.intl.string(a.t.Ny49TN)),
                    _.BK(p, a.intl.string(a.t.cKobO5), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: u,
                    }),
                    _.iG(p, a.intl.string(a.t["46Ra1b"])),
                    _.Si(p, a.intl.string(a.t["rrh/W6"])),
                    ...((e = C.showStageChannelPermissions),
                    (l = () => _.qI(p, a.intl.string(a.t.yniauk))),
                    e ? [l()] : []),
                    _.xd(p, a.intl.string(a.t.b8lplT)),
                ];
                break;
            case M.rbe.GUILD_VOICE:
                I = [
                    _.mL(p, a.intl.string(a.t.ouHggI), { showManageWebhooks: !0 }),
                    _.m6(p, a.intl.string(a.t.Ny49TN)),
                    _.iG(p, a.intl.string(a.t["46Ra1b"])),
                    _.k6(p, a.intl.string(a.t.iqlsnD), {
                        sectionDescription: L
                            ? a.intl.format(a.t["4Z9Fbb"], {
                                  setUpAutomod: () => {
                                      A.A.open(t, M.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: u,
                    }),
                    _.xd(p, a.intl.string(a.t.b8lplT)),
                    _.Si(p, a.intl.string(a.t["rrh/W6"])),
                ];
                break;
            case M.rbe.GUILD_STAGE_VOICE:
                I = [
                    _.mL(p, a.intl.string(a.t.ouHggI), { showManageWebhooks: !1 }),
                    _.m6(p, a.intl.string(a.t.Ny49TN)),
                    _.od(p, a.intl.string(a.t["46Ra1b"]), c),
                    _.qI(p, a.intl.string(a.t.yniauk)),
                    _.xd(p, a.intl.string(a.t.b8lplT)),
                    _.k6(p, a.intl.string(a.t.iqlsnD), {
                        sectionDescription: L
                            ? a.intl.format(a.t["4Z9Fbb"], {
                                  setUpAutomod: () => {
                                      A.A.open(t, M.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: u,
                    }),
                    _.Si(p, a.intl.string(a.t["rrh/W6"]), { showActivities: !1 }),
                ];
                break;
            case M.rbe.GUILD_FORUM:
            case M.rbe.GUILD_MEDIA: {
                let i = d ? a.intl.string(a.t.aSjPgw) : a.intl.string(a.t.TS7Cnb),
                    E = d ? a.t.YjJTtH : a.t["1MTnqY"];
                I = [
                    _.mL(p, a.intl.string(a.t.ouHggI)),
                    _.m6(p, a.intl.string(a.t.Ny49TN)),
                    _.BK(p, i, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: L
                            ? a.intl.format(E, {
                                  setUpAutomod: () => {
                                      d || (0, S.El)(), A.A.open(t, M.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: u,
                    }),
                    _.Si(p, a.intl.string(a.t["rrh/W6"])),
                    ...((o = () => _.iG(p, a.intl.string(a.t["46Ra1b"]))), G ? [o()] : []),
                ];
                break;
            }
            default:
                I = [
                    _.mL(p, a.intl.string(a.t.ouHggI)),
                    _.m6(p, a.intl.string(a.t.Ny49TN)),
                    _.BK(p, a.intl.string(a.t.cKobO5), {
                        showPrivateThreads: i.type !== M.rbe.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: u,
                    }),
                    _.Si(p, a.intl.string(a.t["rrh/W6"])),
                    ...((g = () => _.iG(p, a.intl.string(a.t["46Ra1b"]))), G ? [g()] : []),
                ];
        }
        return D(I, U);
    },
    generateGuildPermissionSpec: function (t) {
        let i = new Set();
        return (
            t.features.has(M.GuildFeatures.COMMUNITY) || i.add(M.xBc.VIEW_GUILD_ANALYTICS.toString()),
            (t.features.has(M.GuildFeatures.VERIFIED) &&
                s.A.getCurrentConfig({ guildId: t.id, location: "generateGuildPermissionSpec" }).enabled) ||
                i.add(M.xBc.MANAGE_OFFICIAL_MESSAGES.toString()),
            D(_.LZ(O(t.id)), i)
        );
    },
    getGuildPermissionSpecMap: function (t) {
        return _.eD(O(t.id));
    },
};
