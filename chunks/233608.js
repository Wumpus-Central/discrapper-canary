(n.d(i, { Z: () => p }), n(388685));
var E = n(230711),
    l = n(200876),
    r = n(228392),
    e = n(676317),
    S = n(434404),
    s = n(190263),
    A = n(208884),
    o = n(722932),
    P = n(368442),
    _ = n(60222),
    N = n(665906),
    g = n(131704),
    T = n(430824),
    a = n(63063),
    I = n(981631),
    M = n(71080),
    R = n(388032);
function O(t) {
    let i = (0, _.A)(t),
        n = T.Z.getGuild(t),
        r = null != n && (0, l.l)(n),
        e = (0, o.uH)({ location: 'getPermissionOptions' }),
        S = s.D.getCurrentConfig({
            guildId: t,
            location: 'getPermissionOptions'
        }).enabled;
    return {
        PRIORITY_SPEAKER_DESCRIPTION: R.intl.format(R.t.j66HgY, {
            keybind: R.intl.string(R.t.DkSwJy),
            onClick: () => {
                E.Z.open(I.oAB.KEYBINDS);
            }
        }),
        SOUNDBOARD_DESCRIPTION: R.intl.format(R.t.fVE8y8, { helpCenterArticle: a.Z.getArticleURL(I.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: r,
        inSoundmojiExperiment: e,
        inPinPermissionExperiment: S
    };
}
let p = {
    generateChannelPermissionSpec: function (t, i, n, E) {
        var l, _, T, a;
        let p = (0, M.IG)(i, n, E),
            c = O(t),
            D =
                N.tM.getCurrentConfig({
                    guildId: t,
                    location: '3ad37d_1'
                }).enabled && g.Um.has(i.type),
            u = (0, P.tu)(t),
            C = (0, e.ze)(t),
            d = i.isMediaChannel(),
            f = (0, o.uH)({ location: 'generateChannelPermissionSpec' }),
            U = s.D.getCurrentConfig({
                guildId: t,
                location: 'generateChannelPermissionSpec'
            }).enabled;
        switch (i.type) {
            case I.d4z.GUILD_CATEGORY:
                return [
                    A.zO(p, R.intl.string(R.t.AkPxc3)),
                    A.Ny(p, R.intl.string(R.t.Ny49TE)),
                    A.vq(p, R.intl.string(R.t.cKobOz), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: f,
                        inPinPermissionExperiment: U
                    }),
                    A.WV(p, R.intl.string(R.t['46Ra1d'])),
                    A.xU(p, R.intl.string(R.t['rrh/W1'])),
                    ...((l = c.showStageChannelPermissions), (_ = () => A.kv(p, R.intl.string(R.t.yniaur))), l ? [_()] : []),
                    A.uu(p, R.intl.string(R.t.b8lplZ))
                ];
            case I.d4z.GUILD_VOICE:
                return [
                    A.zO(p, R.intl.string(R.t.ouHggI), { showManageWebhooks: !0 }),
                    A.Ny(p, R.intl.string(R.t.Ny49TE)),
                    A.WV(p, R.intl.string(R.t['46Ra1d'])),
                    A.aW(p, R.intl.string(R.t.iqlsnJ), {
                        sectionDescription: C
                            ? R.intl.format(R.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      S.Z.open(t, I.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: f
                    }),
                    A.uu(p, R.intl.string(R.t.b8lplZ)),
                    A.xU(p, R.intl.string(R.t['rrh/W1']))
                ];
            case I.d4z.GUILD_STAGE_VOICE:
                return [
                    A.zO(p, R.intl.string(R.t.ouHggI), { showManageWebhooks: !1 }),
                    A.Ny(p, R.intl.string(R.t.Ny49TE)),
                    A.FX(p, R.intl.string(R.t['46Ra1d']), u),
                    A.kv(p, R.intl.string(R.t.yniaur)),
                    A.uu(p, R.intl.string(R.t.b8lplZ)),
                    A.aW(p, R.intl.string(R.t.iqlsnJ), {
                        sectionDescription: C
                            ? R.intl.format(R.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      S.Z.open(t, I.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: f
                    }),
                    A.xU(p, R.intl.string(R.t['rrh/W1']), { showActivities: !1 })
                ];
            case I.d4z.GUILD_FORUM:
            case I.d4z.GUILD_MEDIA:
                let L = d ? R.intl.string(R.t.aSjPg4) : R.intl.string(R.t.TS7CnZ),
                    G = d ? R.t.YjJTtL : R.t['1MTnqa'];
                return [
                    A.zO(p, R.intl.string(R.t.ouHggI)),
                    A.Ny(p, R.intl.string(R.t.Ny49TE)),
                    A.vq(p, L, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: C
                            ? R.intl.format(G, {
                                  setUpAutomod: () => {
                                      (d || (0, r.MO)(), S.Z.open(t, I.pNK.GUILD_AUTOMOD));
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: f,
                        inPinPermissionExperiment: U
                    }),
                    A.xU(p, R.intl.string(R.t['rrh/W1'])),
                    ...((T = () => A.WV(p, R.intl.string(R.t['46Ra1d']))), D ? [T()] : [])
                ];
            default:
                return [
                    A.zO(p, R.intl.string(R.t.ouHggI)),
                    A.Ny(p, R.intl.string(R.t.Ny49TE)),
                    A.vq(p, R.intl.string(R.t.cKobOz), {
                        showPrivateThreads: i.type !== I.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: f,
                        inPinPermissionExperiment: U
                    }),
                    A.xU(p, R.intl.string(R.t['rrh/W1'])),
                    ...((a = () => A.WV(p, R.intl.string(R.t['46Ra1d']))), D ? [a()] : [])
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i;
        let n = new Set();
        return (
            t.features.has(I.oNc.COMMUNITY) || n.add(I.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (i = A.s4(O(t.id))),
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
        return A.WW(O(t.id));
    }
};
