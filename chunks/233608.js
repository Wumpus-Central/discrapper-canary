E.d(i, { Z: () => C }), E(47120);
var l = E(230711),
    n = E(927723),
    r = E(200876),
    S = E(456269),
    e = E(228392),
    s = E(676317),
    A = E(63568),
    _ = E(434404),
    o = E(208884),
    P = E(722932),
    N = E(368442),
    T = E(60222),
    g = E(665906),
    I = E(131704),
    M = E(430824),
    R = E(63063),
    a = E(981631),
    D = E(71080),
    O = E(388032);
function p(t) {
    let i = (0, T.A)(t),
        E = (0, S.Eg)(t),
        e = M.Z.getGuild(t),
        s = (0, A.K2)(null == e ? void 0 : e.id, 'permissions') || (null == e ? void 0 : e.hasFeature(a.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)),
        _ = null != e && (0, r.l)(e),
        o = (0, n.M9)(e),
        N = (0, P.uH)({ location: 'getPermissionOptions' });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: O.intl.format(O.t.j66HgY, {
            keybind: O.intl.string(O.t.DkSwJy),
            onClick: () => {
                l.Z.open(a.oAB.KEYBINDS);
            }
        }),
        SOUNDBOARD_DESCRIPTION: O.intl.format(O.t.fVE8y8, { helpCenterArticle: R.Z.getArticleURL(a.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showForumPermissions: E,
        showMembershipManualApprovalPermissions: s,
        showCreatorMonetizationAnalyticsPermission: _,
        showClydeAIPermissions: o,
        inSoundmojiExperiment: N
    };
}
let C = {
    generateChannelPermissionSpec: function (t, i, E, l) {
        var r, A, T, R;
        let C = (0, S.Eg)(t),
            u = (0, D.IG)(i, E, C, l),
            c = p(t),
            d =
                g.tM.getCurrentConfig({
                    guildId: t,
                    location: '3ad37d_1'
                }).enabled && I.Um.has(i.type),
            U = (0, N.tu)(t),
            L = (0, s.ze)(t),
            f = i.isMediaChannel(),
            G = M.Z.getGuild(t),
            h = (0, n.M9)(G),
            m = (0, P.uH)({ location: 'generateChannelPermissionSpec' });
        switch (i.type) {
            case a.d4z.GUILD_CATEGORY:
                return [
                    o.zO(u, O.intl.string(O.t.AkPxc3)),
                    o.Ny(u, O.intl.string(O.t.Ny49TE)),
                    o.vq(u, O.intl.string(O.t.cKobOz), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        showClydeAIPermissions: h,
                        inSoundmojiExperiment: m
                    }),
                    o.WV(u, O.intl.string(O.t['46Ra1d'])),
                    o.xU(u, O.intl.string(O.t['rrh/W1'])),
                    ...((r = c.showStageChannelPermissions), (A = () => o.kv(u, O.intl.string(O.t.yniaur))), r ? [A()] : []),
                    o.uu(u, O.intl.string(O.t.b8lplZ))
                ];
            case a.d4z.GUILD_VOICE:
                return [
                    o.zO(u, O.intl.string(O.t.ouHggI), { showManageWebhooks: !0 }),
                    o.Ny(u, O.intl.string(O.t.Ny49TE)),
                    o.WV(u, O.intl.string(O.t['46Ra1d'])),
                    o.aW(u, O.intl.string(O.t.iqlsnJ), {
                        sectionDescription: L
                            ? O.intl.format(O.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      _.Z.open(t, a.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: m
                    }),
                    o.uu(u, O.intl.string(O.t.b8lplZ)),
                    o.xU(u, O.intl.string(O.t['rrh/W1']))
                ];
            case a.d4z.GUILD_STAGE_VOICE:
                return [
                    o.zO(u, O.intl.string(O.t.ouHggI), { showManageWebhooks: !1 }),
                    o.Ny(u, O.intl.string(O.t.Ny49TE)),
                    o.FX(u, O.intl.string(O.t['46Ra1d']), U),
                    o.kv(u, O.intl.string(O.t.yniaur)),
                    o.uu(u, O.intl.string(O.t.b8lplZ)),
                    o.aW(u, O.intl.string(O.t.iqlsnJ), {
                        sectionDescription: L
                            ? O.intl.format(O.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      _.Z.open(t, a.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: m
                    })
                ];
            case a.d4z.GUILD_FORUM:
            case a.d4z.GUILD_MEDIA:
                let V = f ? O.intl.string(O.t.aSjPg4) : O.intl.string(O.t.TS7CnZ),
                    B = f ? O.t.YjJTtL : O.t['1MTnqa'];
                return [
                    o.zO(u, O.intl.string(O.t.ouHggI)),
                    o.Ny(u, O.intl.string(O.t.Ny49TE)),
                    o.vq(u, V, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: L
                            ? O.intl.format(B, {
                                  setUpAutomod: () => {
                                      f || (0, e.MO)(), _.Z.open(t, a.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        showClydeAIPermissions: h,
                        inSoundmojiExperiment: m
                    }),
                    o.xU(u, O.intl.string(O.t['rrh/W1'])),
                    ...((T = () => o.WV(u, O.intl.string(O.t['46Ra1d']))), d ? [T()] : [])
                ];
            default:
                return [
                    o.zO(u, O.intl.string(O.t.ouHggI)),
                    o.Ny(u, O.intl.string(O.t.Ny49TE)),
                    o.vq(u, O.intl.string(O.t.cKobOz), {
                        showPrivateThreads: i.type !== a.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        showClydeAIPermissions: h,
                        inSoundmojiExperiment: m
                    }),
                    o.xU(u, O.intl.string(O.t['rrh/W1'])),
                    ...((R = () => o.WV(u, O.intl.string(O.t['46Ra1d']))), d ? [R()] : [])
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i;
        let E = new Set();
        return (
            t.hasFeature(a.oNc.COMMUNITY) || E.add(a.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (i = o.s4(p(t.id))),
            0 === E.size
                ? i
                : i.map((t) => ({
                      ...t,
                      permissions: t.permissions.filter((t) => !E.has(t.flag.toString()))
                  }))
        );
    },
    getGuildPermissionSpecMap: function (t) {
        return o.WW(p(t.id));
    }
};
