n(47120);
var E = n(230711),
    l = n(927723),
    r = n(200876),
    S = n(456269),
    e = n(228392),
    s = n(676317),
    A = n(63568),
    o = n(434404),
    _ = n(208884),
    P = n(722932),
    N = n(368442),
    T = n(60222),
    g = n(665906),
    I = n(131704),
    M = n(430824),
    a = n(63063),
    R = n(981631),
    u = n(71080),
    D = n(388032);
function O(t) {
    let i = (0, T.A)(t),
        n = (0, S.Eg)(t),
        e = M.Z.getGuild(t),
        s = (0, A.K2)(null == e ? void 0 : e.id, 'permissions') || (null == e ? void 0 : e.hasFeature(R.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)),
        o = null != e && (0, r.l)(e),
        _ = (0, l.M9)(e),
        N = (0, P.uH)({ location: 'getPermissionOptions' });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: D.intl.format(D.t.j66HgY, {
            keybind: D.intl.string(D.t.DkSwJy),
            onClick: () => {
                E.Z.open(R.oAB.KEYBINDS);
            }
        }),
        SOUNDBOARD_DESCRIPTION: D.intl.format(D.t.fVE8y8, { helpCenterArticle: a.Z.getArticleURL(R.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showForumPermissions: n,
        showMembershipManualApprovalPermissions: s,
        showCreatorMonetizationAnalyticsPermission: o,
        showClydeAIPermissions: _,
        inSoundmojiExperiment: N
    };
}
function c(t, i) {
    return t ? [i()] : [];
}
i.Z = {
    generateChannelPermissionSpec: function (t, i, n, E) {
        var r, A, T, a, c, p;
        let C = (0, S.Eg)(t),
            d = (0, u.IG)(i, n, C, E),
            f = O(t),
            U =
                g.tM.getCurrentConfig({
                    guildId: t,
                    location: '3ad37d_1'
                }).enabled && I.Um.has(i.type),
            L = (0, N.tu)(t),
            G = (0, s.ze)(t),
            h = i.isMediaChannel(),
            m = M.Z.getGuild(t),
            V = (0, l.M9)(m),
            B = (0, P.uH)({ location: 'generateChannelPermissionSpec' });
        switch (i.type) {
            case R.d4z.GUILD_CATEGORY:
                return [
                    _.zO(d, D.intl.string(D.t.AkPxc3)),
                    _.Ny(d, D.intl.string(D.t.Ny49TE)),
                    _.vq(d, D.intl.string(D.t.cKobOz), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        showClydeAIPermissions: V,
                        inSoundmojiExperiment: B
                    }),
                    _.WV(d, D.intl.string(D.t['46Ra1d'])),
                    _.xU(d, D.intl.string(D.t['rrh/W1'])),
                    ...((r = f.showStageChannelPermissions), (A = () => _.kv(d, D.intl.string(D.t.yniaur))), r ? [A()] : []),
                    _.uu(d, D.intl.string(D.t.b8lplZ))
                ];
            case R.d4z.GUILD_VOICE:
                return [
                    _.zO(d, D.intl.string(D.t.ouHggI), { showManageWebhooks: !0 }),
                    _.Ny(d, D.intl.string(D.t.Ny49TE)),
                    _.WV(d, D.intl.string(D.t['46Ra1d'])),
                    _.aW(d, D.intl.string(D.t.iqlsnJ), {
                        sectionDescription: G
                            ? D.intl.format(D.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      o.Z.open(t, R.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: B
                    }),
                    _.uu(d, D.intl.string(D.t.b8lplZ)),
                    _.xU(d, D.intl.string(D.t['rrh/W1']))
                ];
            case R.d4z.GUILD_STAGE_VOICE:
                return [
                    _.zO(d, D.intl.string(D.t.ouHggI), { showManageWebhooks: !1 }),
                    _.Ny(d, D.intl.string(D.t.Ny49TE)),
                    _.FX(d, D.intl.string(D.t['46Ra1d']), L),
                    _.kv(d, D.intl.string(D.t.yniaur)),
                    _.uu(d, D.intl.string(D.t.b8lplZ)),
                    _.aW(d, D.intl.string(D.t.iqlsnJ), {
                        sectionDescription: G
                            ? D.intl.format(D.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      o.Z.open(t, R.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: B
                    })
                ];
            case R.d4z.GUILD_FORUM:
            case R.d4z.GUILD_MEDIA:
                let H = h ? D.intl.string(D.t.aSjPg4) : D.intl.string(D.t.TS7CnZ),
                    K = h ? D.t.YjJTtL : D.t['1MTnqa'];
                return [
                    _.zO(d, D.intl.string(D.t.ouHggI)),
                    _.Ny(d, D.intl.string(D.t.Ny49TE)),
                    _.vq(d, H, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: G
                            ? D.intl.format(K, {
                                  setUpAutomod: () => {
                                      !h && (0, e.MO)(), o.Z.open(t, R.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        showClydeAIPermissions: V,
                        inSoundmojiExperiment: B
                    }),
                    _.xU(d, D.intl.string(D.t['rrh/W1'])),
                    ...((T = U), (a = () => _.WV(d, D.intl.string(D.t['46Ra1d']))), T ? [a()] : [])
                ];
            default:
                return [
                    _.zO(d, D.intl.string(D.t.ouHggI)),
                    _.Ny(d, D.intl.string(D.t.Ny49TE)),
                    _.vq(d, D.intl.string(D.t.cKobOz), {
                        showPrivateThreads: i.type !== R.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        showClydeAIPermissions: V,
                        inSoundmojiExperiment: B
                    }),
                    _.xU(d, D.intl.string(D.t['rrh/W1'])),
                    ...((c = U), (p = () => _.WV(d, D.intl.string(D.t['46Ra1d']))), c ? [p()] : [])
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i, n;
        let E = new Set();
        return (
            !t.hasFeature(R.oNc.COMMUNITY) && E.add(R.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (i = _.s4(O(t.id))),
            0 === (n = E).size
                ? i
                : i.map((t) => ({
                      ...t,
                      permissions: t.permissions.filter((t) => !n.has(t.flag.toString()))
                  }))
        );
    },
    getGuildPermissionSpecMap: function (t) {
        return _.WW(O(t.id));
    }
};
