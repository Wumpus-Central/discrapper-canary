E.d(i, { A: () => C });
var n = E(936555),
    S = E(853742),
    r = E(979816),
    A = E(468689),
    e = E(581007),
    _ = E(472282),
    s = E(225419),
    B = E(864145),
    l = E(96566),
    o = E(284738),
    N = E(406704),
    T = E(780964),
    x = E(95701),
    g = E(71393),
    M = E(975571),
    I = E(652215),
    R = E(719366),
    a = E(375708);
function O(t) {
    let i = (0, o.Y)(t),
        S = g.A.getGuild(t),
        r = null != S && (0, n.w)(S),
        A = (0, B.K)({ location: "getPermissionOptions" }),
        { enableHangoutWindow: _ } = (0, e.kY)({ guildId: t, location: "getPermissionOptions" });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: a.intl.format(a.t.j66HgY, {
            keybind: a.intl.string(a.t.DkSwJ2),
            onClick: () => {
                {
                    let { openUserSettings: t } = E(766075);
                    t(T.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY);
                }
            },
        }),
        SOUNDBOARD_DESCRIPTION: a.intl.format(a.t.fVE8y8, { helpCenterArticle: M.A.getArticleURL(I.MVz.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: r,
        inSoundmojiExperiment: A,
        enableHangoutWindow: _,
    };
}
function D(t, i) {
    return 0 === i.size
        ? t
        : t.map((t) => ({ ...t, permissions: t.permissions.filter((t) => !i.has(t.flag.toString())) }));
}
let C = {
    generateChannelPermissionSpec: function (t, i, E, n) {
        var e, B, o, T;
        let M,
            C = O(t),
            p = (0, R.mW)(i, E, { ...n, enableHangoutWindow: C.enableHangoutWindow }),
            G = N.io.getCurrentConfig({ guildId: t, location: "3ad37d_1" }).enabled && x.p6.has(i.type),
            L = (0, l.Bw)(t),
            c = (0, r.i_)(t),
            d = i.isMediaChannel(),
            U = new Set(),
            f = g.A.getGuild(t);
        (f?.features.has(I.GuildFeatures.VERIFIED) &&
            _.A.getCurrentConfig({ guildId: t, location: "generateChannelPermissionSpec" }).enabled) ||
            U.add(I.xBc.MANAGE_OFFICIAL_MESSAGES.toString());
        let { inSoundmojiExperiment: u } = C;
        switch (i.type) {
            case I.rbe.GUILD_CATEGORY:
                M = [
                    s.mL(p, a.intl.string(a.t["AkPxc+"])),
                    s.m6(p, a.intl.string(a.t.Ny49TN)),
                    s.BK(p, a.intl.string(a.t.cKobO5), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: u,
                    }),
                    s.iG(p, a.intl.string(a.t["46Ra1b"])),
                    s.Si(p, a.intl.string(a.t["rrh/W6"])),
                    ...((e = C.showStageChannelPermissions),
                    (B = () => s.qI(p, a.intl.string(a.t.yniauk))),
                    e ? [B()] : []),
                    s.xd(p, a.intl.string(a.t.b8lplT)),
                ];
                break;
            case I.rbe.GUILD_VOICE:
                M = [
                    s.mL(p, a.intl.string(a.t.ouHggI), { showManageWebhooks: !0 }),
                    s.m6(p, a.intl.string(a.t.Ny49TN)),
                    s.iG(p, a.intl.string(a.t["46Ra1b"])),
                    s.k6(p, a.intl.string(a.t.iqlsnD), {
                        sectionDescription: c
                            ? a.intl.format(a.t["4Z9Fbb"], {
                                  setUpAutomod: () => {
                                      A.A.open(t, I.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: u,
                    }),
                    s.xd(p, a.intl.string(a.t.b8lplT)),
                    s.Si(p, a.intl.string(a.t["rrh/W6"])),
                ];
                break;
            case I.rbe.GUILD_STAGE_VOICE:
                M = [
                    s.mL(p, a.intl.string(a.t.ouHggI), { showManageWebhooks: !1 }),
                    s.m6(p, a.intl.string(a.t.Ny49TN)),
                    s.od(p, a.intl.string(a.t["46Ra1b"]), L),
                    s.qI(p, a.intl.string(a.t.yniauk)),
                    s.xd(p, a.intl.string(a.t.b8lplT)),
                    s.k6(p, a.intl.string(a.t.iqlsnD), {
                        sectionDescription: c
                            ? a.intl.format(a.t["4Z9Fbb"], {
                                  setUpAutomod: () => {
                                      A.A.open(t, I.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: u,
                    }),
                    s.Si(p, a.intl.string(a.t["rrh/W6"]), { showActivities: !1 }),
                ];
                break;
            case I.rbe.GUILD_FORUM:
            case I.rbe.GUILD_MEDIA: {
                let i = d ? a.intl.string(a.t.aSjPgw) : a.intl.string(a.t.TS7Cnb),
                    E = d ? a.t.YjJTtH : a.t["1MTnqY"];
                M = [
                    s.mL(p, a.intl.string(a.t.ouHggI)),
                    s.m6(p, a.intl.string(a.t.Ny49TN)),
                    s.BK(p, i, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: c
                            ? a.intl.format(E, {
                                  setUpAutomod: () => {
                                      d || (0, S.El)(), A.A.open(t, I.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: u,
                    }),
                    s.Si(p, a.intl.string(a.t["rrh/W6"])),
                    ...((o = () => s.iG(p, a.intl.string(a.t["46Ra1b"]))), G ? [o()] : []),
                ];
                break;
            }
            default:
                M = [
                    s.mL(p, a.intl.string(a.t.ouHggI)),
                    s.m6(p, a.intl.string(a.t.Ny49TN)),
                    s.BK(p, a.intl.string(a.t.cKobO5), {
                        showPrivateThreads: i.type !== I.rbe.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: u,
                    }),
                    s.Si(p, a.intl.string(a.t["rrh/W6"])),
                    ...((T = () => s.iG(p, a.intl.string(a.t["46Ra1b"]))), G ? [T()] : []),
                ];
        }
        return D(M, U);
    },
    generateGuildPermissionSpec: function (t) {
        let i = new Set();
        return (
            t.features.has(I.GuildFeatures.COMMUNITY) || i.add(I.xBc.VIEW_GUILD_ANALYTICS.toString()),
            (t.features.has(I.GuildFeatures.VERIFIED) &&
                _.A.getCurrentConfig({ guildId: t.id, location: "generateGuildPermissionSpec" }).enabled) ||
                i.add(I.xBc.MANAGE_OFFICIAL_MESSAGES.toString()),
            D(s.LZ(O(t.id)), i)
        );
    },
    getGuildPermissionSpecMap: function (t) {
        return s.eD(O(t.id));
    },
};
