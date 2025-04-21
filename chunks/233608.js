n.d(i, { Z: () => c }), n(388685);
var E = n(230711),
    l = n(797610),
    r = n(200876),
    e = n(456269),
    S = n(228392),
    s = n(676317),
    o = n(434404),
    A = n(208884),
    P = n(722932),
    _ = n(368442),
    N = n(60222),
    T = n(665906),
    g = n(131704),
    I = n(430824),
    a = n(63063),
    M = n(981631),
    R = n(71080),
    O = n(388032);
function p(t) {
    let i = (0, N.A)(t),
        n = (0, e.Eg)(t),
        S = I.Z.getGuild(t),
        s = null != S && (0, r.l)(S),
        o = (0, l.M9)(S),
        A = (0, P.uH)({ location: 'getPermissionOptions' });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: O.intl.format(O.t.j66HgY, {
            keybind: O.intl.string(O.t.DkSwJy),
            onClick: () => {
                E.Z.open(M.oAB.KEYBINDS);
            }
        }),
        SOUNDBOARD_DESCRIPTION: O.intl.format(O.t.fVE8y8, { helpCenterArticle: a.Z.getArticleURL(M.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showForumPermissions: n,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: s,
        showClydeAIPermissions: o,
        inSoundmojiExperiment: A
    };
}
let c = {
    generateChannelPermissionSpec: function (t, i, n, E) {
        var r, N, a, c;
        let D = (0, e.Eg)(t),
            u = (0, R.IG)(i, n, D, E),
            C = p(t),
            d =
                T.tM.getCurrentConfig({
                    guildId: t,
                    location: '3ad37d_1'
                }).enabled && g.Um.has(i.type),
            f = (0, _.tu)(t),
            U = (0, s.ze)(t),
            L = i.isMediaChannel(),
            h = I.Z.getGuild(t),
            G = (0, l.M9)(h),
            m = (0, P.uH)({ location: 'generateChannelPermissionSpec' });
        switch (i.type) {
            case M.d4z.GUILD_CATEGORY:
                return [
                    A.zO(u, O.intl.string(O.t.AkPxc3)),
                    A.Ny(u, O.intl.string(O.t.Ny49TE)),
                    A.vq(u, O.intl.string(O.t.cKobOz), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        showClydeAIPermissions: G,
                        inSoundmojiExperiment: m
                    }),
                    A.WV(u, O.intl.string(O.t['46Ra1d'])),
                    A.xU(u, O.intl.string(O.t['rrh/W1'])),
                    ...((r = C.showStageChannelPermissions), (N = () => A.kv(u, O.intl.string(O.t.yniaur))), r ? [N()] : []),
                    A.uu(u, O.intl.string(O.t.b8lplZ))
                ];
            case M.d4z.GUILD_VOICE:
                return [
                    A.zO(u, O.intl.string(O.t.ouHggI), { showManageWebhooks: !0 }),
                    A.Ny(u, O.intl.string(O.t.Ny49TE)),
                    A.WV(u, O.intl.string(O.t['46Ra1d'])),
                    A.aW(u, O.intl.string(O.t.iqlsnJ), {
                        sectionDescription: U
                            ? O.intl.format(O.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      o.Z.open(t, M.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: m
                    }),
                    A.uu(u, O.intl.string(O.t.b8lplZ)),
                    A.xU(u, O.intl.string(O.t['rrh/W1']))
                ];
            case M.d4z.GUILD_STAGE_VOICE:
                return [
                    A.zO(u, O.intl.string(O.t.ouHggI), { showManageWebhooks: !1 }),
                    A.Ny(u, O.intl.string(O.t.Ny49TE)),
                    A.FX(u, O.intl.string(O.t['46Ra1d']), f),
                    A.kv(u, O.intl.string(O.t.yniaur)),
                    A.uu(u, O.intl.string(O.t.b8lplZ)),
                    A.aW(u, O.intl.string(O.t.iqlsnJ), {
                        sectionDescription: U
                            ? O.intl.format(O.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      o.Z.open(t, M.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: m
                    })
                ];
            case M.d4z.GUILD_FORUM:
            case M.d4z.GUILD_MEDIA:
                let V = L ? O.intl.string(O.t.aSjPg4) : O.intl.string(O.t.TS7CnZ),
                    B = L ? O.t.YjJTtL : O.t['1MTnqa'];
                return [
                    A.zO(u, O.intl.string(O.t.ouHggI)),
                    A.Ny(u, O.intl.string(O.t.Ny49TE)),
                    A.vq(u, V, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: U
                            ? O.intl.format(B, {
                                  setUpAutomod: () => {
                                      L || (0, S.MO)(), o.Z.open(t, M.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        showClydeAIPermissions: G,
                        inSoundmojiExperiment: m
                    }),
                    A.xU(u, O.intl.string(O.t['rrh/W1'])),
                    ...((a = () => A.WV(u, O.intl.string(O.t['46Ra1d']))), d ? [a()] : [])
                ];
            default:
                return [
                    A.zO(u, O.intl.string(O.t.ouHggI)),
                    A.Ny(u, O.intl.string(O.t.Ny49TE)),
                    A.vq(u, O.intl.string(O.t.cKobOz), {
                        showPrivateThreads: i.type !== M.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        showClydeAIPermissions: G,
                        inSoundmojiExperiment: m
                    }),
                    A.xU(u, O.intl.string(O.t['rrh/W1'])),
                    ...((c = () => A.WV(u, O.intl.string(O.t['46Ra1d']))), d ? [c()] : [])
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i;
        let n = new Set();
        return (
            t.hasFeature(M.oNc.COMMUNITY) || n.add(M.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (i = A.s4(p(t.id))),
            0 === n.size
                ? i
                : i.map((t) => {
                      var i, E;
                      return (
                          (i = (function (t) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var n = null != arguments[i] ? arguments[i] : {},
                                      E = Object.keys(n);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (E = E.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (t) {
                                              return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                          })
                                      )),
                                      E.forEach(function (i) {
                                          var E;
                                          (E = n[i]),
                                              i in t
                                                  ? Object.defineProperty(t, i, {
                                                        value: E,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (t[i] = E);
                                      });
                              }
                              return t;
                          })({}, t)),
                          (E = E = { permissions: t.permissions.filter((t) => !n.has(t.flag.toString())) }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(E))
                              : (function (t, i) {
                                    var n = Object.keys(t);
                                    if (Object.getOwnPropertySymbols) {
                                        var E = Object.getOwnPropertySymbols(t);
                                        n.push.apply(n, E);
                                    }
                                    return n;
                                })(Object(E)).forEach(function (t) {
                                    Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(E, t));
                                }),
                          i
                      );
                  })
        );
    },
    getGuildPermissionSpecMap: function (t) {
        return A.WW(p(t.id));
    }
};
