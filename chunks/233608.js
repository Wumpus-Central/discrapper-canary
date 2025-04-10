i.d(E, { Z: () => c }), i(388685);
var r = i(230711),
    n = i(797610),
    l = i(200876),
    e = i(456269),
    S = i(228392),
    s = i(676317),
    N = i(434404),
    o = i(208884),
    A = i(722932),
    P = i(368442),
    _ = i(60222),
    T = i(665906),
    g = i(131704),
    I = i(430824),
    a = i(63063),
    M = i(981631),
    R = i(71080),
    O = i(388032);
function p(t) {
    let E = (0, _.A)(t),
        i = (0, e.Eg)(t),
        S = I.Z.getGuild(t),
        s = null != S && (0, l.l)(S),
        N = (0, n.M9)(S),
        o = (0, A.uH)({ location: 'getPermissionOptions' });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: O.NW.format(O.t.j66HgY, {
            keybind: O.NW.string(O.t.DkSwJy),
            onClick: () => {
                r.Z.open(M.oAB.KEYBINDS);
            }
        }),
        SOUNDBOARD_DESCRIPTION: O.NW.format(O.t.fVE8y8, { helpCenterArticle: a.Z.getArticleURL(M.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: E,
        showExperimental: !0,
        showForumPermissions: i,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: s,
        showClydeAIPermissions: N,
        inSoundmojiExperiment: o
    };
}
let c = {
    generateChannelPermissionSpec: function (t, E, i, r) {
        var l, _, a, c;
        let D = (0, e.Eg)(t),
            u = (0, R.IG)(E, i, D, r),
            C = p(t),
            W =
                T.tM.getCurrentConfig({
                    guildId: t,
                    location: '3ad37d_1'
                }).enabled && g.Um.has(E.type),
            d = (0, P.tu)(t),
            f = (0, s.ze)(t),
            U = E.isMediaChannel(),
            L = I.Z.getGuild(t),
            h = (0, n.M9)(L),
            G = (0, A.uH)({ location: 'generateChannelPermissionSpec' });
        switch (E.type) {
            case M.d4z.GUILD_CATEGORY:
                return [
                    o.zO(u, O.NW.string(O.t.AkPxc3)),
                    o.Ny(u, O.NW.string(O.t.Ny49TE)),
                    o.vq(u, O.NW.string(O.t.cKobOz), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        showClydeAIPermissions: h,
                        inSoundmojiExperiment: G
                    }),
                    o.WV(u, O.NW.string(O.t['46Ra1d'])),
                    o.xU(u, O.NW.string(O.t['rrh/W1'])),
                    ...((l = C.showStageChannelPermissions), (_ = () => o.kv(u, O.NW.string(O.t.yniaur))), l ? [_()] : []),
                    o.uu(u, O.NW.string(O.t.b8lplZ))
                ];
            case M.d4z.GUILD_VOICE:
                return [
                    o.zO(u, O.NW.string(O.t.ouHggI), { showManageWebhooks: !0 }),
                    o.Ny(u, O.NW.string(O.t.Ny49TE)),
                    o.WV(u, O.NW.string(O.t['46Ra1d'])),
                    o.aW(u, O.NW.string(O.t.iqlsnJ), {
                        sectionDescription: f
                            ? O.NW.format(O.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      N.Z.open(t, M.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: G
                    }),
                    o.uu(u, O.NW.string(O.t.b8lplZ)),
                    o.xU(u, O.NW.string(O.t['rrh/W1']))
                ];
            case M.d4z.GUILD_STAGE_VOICE:
                return [
                    o.zO(u, O.NW.string(O.t.ouHggI), { showManageWebhooks: !1 }),
                    o.Ny(u, O.NW.string(O.t.Ny49TE)),
                    o.FX(u, O.NW.string(O.t['46Ra1d']), d),
                    o.kv(u, O.NW.string(O.t.yniaur)),
                    o.uu(u, O.NW.string(O.t.b8lplZ)),
                    o.aW(u, O.NW.string(O.t.iqlsnJ), {
                        sectionDescription: f
                            ? O.NW.format(O.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      N.Z.open(t, M.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: G
                    })
                ];
            case M.d4z.GUILD_FORUM:
            case M.d4z.GUILD_MEDIA:
                let m = U ? O.NW.string(O.t.aSjPg4) : O.NW.string(O.t.TS7CnZ),
                    V = U ? O.t.YjJTtL : O.t['1MTnqa'];
                return [
                    o.zO(u, O.NW.string(O.t.ouHggI)),
                    o.Ny(u, O.NW.string(O.t.Ny49TE)),
                    o.vq(u, m, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: f
                            ? O.NW.format(V, {
                                  setUpAutomod: () => {
                                      U || (0, S.MO)(), N.Z.open(t, M.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        showClydeAIPermissions: h,
                        inSoundmojiExperiment: G
                    }),
                    o.xU(u, O.NW.string(O.t['rrh/W1'])),
                    ...((a = () => o.WV(u, O.NW.string(O.t['46Ra1d']))), W ? [a()] : [])
                ];
            default:
                return [
                    o.zO(u, O.NW.string(O.t.ouHggI)),
                    o.Ny(u, O.NW.string(O.t.Ny49TE)),
                    o.vq(u, O.NW.string(O.t.cKobOz), {
                        showPrivateThreads: E.type !== M.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        showClydeAIPermissions: h,
                        inSoundmojiExperiment: G
                    }),
                    o.xU(u, O.NW.string(O.t['rrh/W1'])),
                    ...((c = () => o.WV(u, O.NW.string(O.t['46Ra1d']))), W ? [c()] : [])
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var E;
        let i = new Set();
        return (
            t.hasFeature(M.oNc.COMMUNITY) || i.add(M.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (E = o.s4(p(t.id))),
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
        return o.WW(p(t.id));
    }
};
