i.d(E, { Z: () => D }), i(47120);
var r = i(230711),
    n = i(927723),
    l = i(200876),
    e = i(456269),
    S = i(228392),
    s = i(676317),
    N = i(63568),
    o = i(434404),
    A = i(208884),
    P = i(722932),
    _ = i(368442),
    T = i(60222),
    g = i(665906),
    I = i(131704),
    a = i(430824),
    M = i(63063),
    R = i(981631),
    O = i(71080),
    p = i(388032);
function c(t) {
    let E = (0, T.A)(t),
        i = (0, e.Eg)(t),
        S = a.Z.getGuild(t),
        s = (0, N.K2)(null == S ? void 0 : S.id, 'permissions') || (null == S ? void 0 : S.hasFeature(R.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)),
        o = null != S && (0, l.l)(S),
        A = (0, n.M9)(S),
        _ = (0, P.uH)({ location: 'getPermissionOptions' });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: p.NW.format(p.t.j66HgY, {
            keybind: p.NW.string(p.t.DkSwJy),
            onClick: () => {
                r.Z.open(R.oAB.KEYBINDS);
            }
        }),
        SOUNDBOARD_DESCRIPTION: p.NW.format(p.t.fVE8y8, { helpCenterArticle: M.Z.getArticleURL(R.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: E,
        showExperimental: !0,
        showForumPermissions: i,
        showMembershipManualApprovalPermissions: s,
        showCreatorMonetizationAnalyticsPermission: o,
        showClydeAIPermissions: A,
        inSoundmojiExperiment: _
    };
}
let D = {
    generateChannelPermissionSpec: function (t, E, i, r) {
        var l, N, T, M;
        let D = (0, e.Eg)(t),
            u = (0, O.IG)(E, i, D, r),
            C = c(t),
            W =
                g.tM.getCurrentConfig({
                    guildId: t,
                    location: '3ad37d_1'
                }).enabled && I.Um.has(E.type),
            d = (0, _.tu)(t),
            f = (0, s.ze)(t),
            U = E.isMediaChannel(),
            L = a.Z.getGuild(t),
            h = (0, n.M9)(L),
            G = (0, P.uH)({ location: 'generateChannelPermissionSpec' });
        switch (E.type) {
            case R.d4z.GUILD_CATEGORY:
                return [
                    A.zO(u, p.NW.string(p.t.AkPxc3)),
                    A.Ny(u, p.NW.string(p.t.Ny49TE)),
                    A.vq(u, p.NW.string(p.t.cKobOz), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        showClydeAIPermissions: h,
                        inSoundmojiExperiment: G
                    }),
                    A.WV(u, p.NW.string(p.t['46Ra1d'])),
                    A.xU(u, p.NW.string(p.t['rrh/W1'])),
                    ...((l = C.showStageChannelPermissions), (N = () => A.kv(u, p.NW.string(p.t.yniaur))), l ? [N()] : []),
                    A.uu(u, p.NW.string(p.t.b8lplZ))
                ];
            case R.d4z.GUILD_VOICE:
                return [
                    A.zO(u, p.NW.string(p.t.ouHggI), { showManageWebhooks: !0 }),
                    A.Ny(u, p.NW.string(p.t.Ny49TE)),
                    A.WV(u, p.NW.string(p.t['46Ra1d'])),
                    A.aW(u, p.NW.string(p.t.iqlsnJ), {
                        sectionDescription: f
                            ? p.NW.format(p.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      o.Z.open(t, R.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: G
                    }),
                    A.uu(u, p.NW.string(p.t.b8lplZ)),
                    A.xU(u, p.NW.string(p.t['rrh/W1']))
                ];
            case R.d4z.GUILD_STAGE_VOICE:
                return [
                    A.zO(u, p.NW.string(p.t.ouHggI), { showManageWebhooks: !1 }),
                    A.Ny(u, p.NW.string(p.t.Ny49TE)),
                    A.FX(u, p.NW.string(p.t['46Ra1d']), d),
                    A.kv(u, p.NW.string(p.t.yniaur)),
                    A.uu(u, p.NW.string(p.t.b8lplZ)),
                    A.aW(u, p.NW.string(p.t.iqlsnJ), {
                        sectionDescription: f
                            ? p.NW.format(p.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      o.Z.open(t, R.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: G
                    })
                ];
            case R.d4z.GUILD_FORUM:
            case R.d4z.GUILD_MEDIA:
                let m = U ? p.NW.string(p.t.aSjPg4) : p.NW.string(p.t.TS7CnZ),
                    V = U ? p.t.YjJTtL : p.t['1MTnqa'];
                return [
                    A.zO(u, p.NW.string(p.t.ouHggI)),
                    A.Ny(u, p.NW.string(p.t.Ny49TE)),
                    A.vq(u, m, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: f
                            ? p.NW.format(V, {
                                  setUpAutomod: () => {
                                      U || (0, S.MO)(), o.Z.open(t, R.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        showClydeAIPermissions: h,
                        inSoundmojiExperiment: G
                    }),
                    A.xU(u, p.NW.string(p.t['rrh/W1'])),
                    ...((T = () => A.WV(u, p.NW.string(p.t['46Ra1d']))), W ? [T()] : [])
                ];
            default:
                return [
                    A.zO(u, p.NW.string(p.t.ouHggI)),
                    A.Ny(u, p.NW.string(p.t.Ny49TE)),
                    A.vq(u, p.NW.string(p.t.cKobOz), {
                        showPrivateThreads: E.type !== R.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        showClydeAIPermissions: h,
                        inSoundmojiExperiment: G
                    }),
                    A.xU(u, p.NW.string(p.t['rrh/W1'])),
                    ...((M = () => A.WV(u, p.NW.string(p.t['46Ra1d']))), W ? [M()] : [])
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var E;
        let i = new Set();
        return (
            t.hasFeature(R.oNc.COMMUNITY) || i.add(R.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (E = A.s4(c(t.id))),
            0 === i.size
                ? E
                : E.map((t) => {
                      var E, r;
                      return (
                          (E = (function (t) {
                              for (var E = 1; E < arguments.length; E++) {
                                  var i = null != arguments[E] ? arguments[E] : {},
                                      r = Object.keys(i);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(i).filter(function (t) {
                                              return Object.getOwnPropertyDescriptor(i, t).enumerable;
                                          })
                                      )),
                                      r.forEach(function (E) {
                                          var r;
                                          (r = i[E]),
                                              E in t
                                                  ? Object.defineProperty(t, E, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (t[E] = r);
                                      });
                              }
                              return t;
                          })({}, t)),
                          (r = r = { permissions: t.permissions.filter((t) => !i.has(t.flag.toString())) }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(r))
                              : (function (t, E) {
                                    var i = Object.keys(t);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(t);
                                        i.push.apply(i, r);
                                    }
                                    return i;
                                })(Object(r)).forEach(function (t) {
                                    Object.defineProperty(E, t, Object.getOwnPropertyDescriptor(r, t));
                                }),
                          E
                      );
                  })
        );
    },
    getGuildPermissionSpecMap: function (t) {
        return A.WW(c(t.id));
    }
};
