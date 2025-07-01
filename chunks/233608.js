(n.d(i, { Z: () => p }), n(388685));
var E = n(230711),
    l = n(200876),
    r = n(456269),
    e = n(228392),
    S = n(676317),
    s = n(434404),
    o = n(208884),
    A = n(722932),
    P = n(368442),
    _ = n(60222),
    N = n(665906),
    T = n(131704),
    g = n(430824),
    a = n(63063),
    M = n(981631),
    I = n(71080),
    R = n(388032);
function O(t) {
    let i = (0, _.A)(t),
        n = (0, r.Eg)(t),
        e = g.Z.getGuild(t),
        S = null != e && (0, l.l)(e),
        s = (0, A.uH)({ location: 'getPermissionOptions' });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: R.intl.format(R.t.j66HgY, {
            keybind: R.intl.string(R.t.DkSwJy),
            onClick: () => {
                E.Z.open(M.oAB.KEYBINDS);
            }
        }),
        SOUNDBOARD_DESCRIPTION: R.intl.format(R.t.fVE8y8, { helpCenterArticle: a.Z.getArticleURL(M.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showForumPermissions: n,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: S,
        inSoundmojiExperiment: s
    };
}
let p = {
    generateChannelPermissionSpec: function (t, i, n, E) {
        var l, _, g, a;
        let p = (0, r.Eg)(t),
            c = (0, I.IG)(i, n, p, E),
            u = O(t),
            D =
                N.tM.getCurrentConfig({
                    guildId: t,
                    location: '3ad37d_1'
                }).enabled && T.Um.has(i.type),
            C = (0, P.tu)(t),
            d = (0, S.ze)(t),
            f = i.isMediaChannel(),
            U = (0, A.uH)({ location: 'generateChannelPermissionSpec' });
        switch (i.type) {
            case M.d4z.GUILD_CATEGORY:
                return [
                    o.zO(c, R.intl.string(R.t.AkPxc3)),
                    o.Ny(c, R.intl.string(R.t.Ny49TE)),
                    o.vq(c, R.intl.string(R.t.cKobOz), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: U
                    }),
                    o.WV(c, R.intl.string(R.t['46Ra1d'])),
                    o.xU(c, R.intl.string(R.t['rrh/W1'])),
                    ...((l = u.showStageChannelPermissions), (_ = () => o.kv(c, R.intl.string(R.t.yniaur))), l ? [_()] : []),
                    o.uu(c, R.intl.string(R.t.b8lplZ))
                ];
            case M.d4z.GUILD_VOICE:
                return [
                    o.zO(c, R.intl.string(R.t.ouHggI), { showManageWebhooks: !0 }),
                    o.Ny(c, R.intl.string(R.t.Ny49TE)),
                    o.WV(c, R.intl.string(R.t['46Ra1d'])),
                    o.aW(c, R.intl.string(R.t.iqlsnJ), {
                        sectionDescription: d
                            ? R.intl.format(R.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      s.Z.open(t, M.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: U
                    }),
                    o.uu(c, R.intl.string(R.t.b8lplZ)),
                    o.xU(c, R.intl.string(R.t['rrh/W1']))
                ];
            case M.d4z.GUILD_STAGE_VOICE:
                return [
                    o.zO(c, R.intl.string(R.t.ouHggI), { showManageWebhooks: !1 }),
                    o.Ny(c, R.intl.string(R.t.Ny49TE)),
                    o.FX(c, R.intl.string(R.t['46Ra1d']), C),
                    o.kv(c, R.intl.string(R.t.yniaur)),
                    o.uu(c, R.intl.string(R.t.b8lplZ)),
                    o.aW(c, R.intl.string(R.t.iqlsnJ), {
                        sectionDescription: d
                            ? R.intl.format(R.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      s.Z.open(t, M.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: U
                    }),
                    o.xU(c, R.intl.string(R.t['rrh/W1']), { showActivities: !1 })
                ];
            case M.d4z.GUILD_FORUM:
            case M.d4z.GUILD_MEDIA:
                let L = f ? R.intl.string(R.t.aSjPg4) : R.intl.string(R.t.TS7CnZ),
                    h = f ? R.t.YjJTtL : R.t['1MTnqa'];
                return [
                    o.zO(c, R.intl.string(R.t.ouHggI)),
                    o.Ny(c, R.intl.string(R.t.Ny49TE)),
                    o.vq(c, L, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: d
                            ? R.intl.format(h, {
                                  setUpAutomod: () => {
                                      (f || (0, e.MO)(), s.Z.open(t, M.pNK.GUILD_AUTOMOD));
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: U
                    }),
                    o.xU(c, R.intl.string(R.t['rrh/W1'])),
                    ...((g = () => o.WV(c, R.intl.string(R.t['46Ra1d']))), D ? [g()] : [])
                ];
            default:
                return [
                    o.zO(c, R.intl.string(R.t.ouHggI)),
                    o.Ny(c, R.intl.string(R.t.Ny49TE)),
                    o.vq(c, R.intl.string(R.t.cKobOz), {
                        showPrivateThreads: i.type !== M.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: U
                    }),
                    o.xU(c, R.intl.string(R.t['rrh/W1'])),
                    ...((a = () => o.WV(c, R.intl.string(R.t['46Ra1d']))), D ? [a()] : [])
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i;
        let n = new Set();
        return (
            t.hasFeature(M.oNc.COMMUNITY) || n.add(M.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (i = o.s4(O(t.id))),
            0 === n.size
                ? i
                : i.map((t) => {
                      var i, E;
                      return (
                          (i = (function (t) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var n = null != arguments[i] ? arguments[i] : {},
                                      E = Object.keys(n);
                                  ('function' == typeof Object.getOwnPropertySymbols &&
                                      (E = E.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (t) {
                                              return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                          })
                                      )),
                                      E.forEach(function (i) {
                                          var E;
                                          ((E = n[i]),
                                              i in t
                                                  ? Object.defineProperty(t, i, {
                                                        value: E,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (t[i] = E));
                                      }));
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
        return o.WW(O(t.id));
    }
};
