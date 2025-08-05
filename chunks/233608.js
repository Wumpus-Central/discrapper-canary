(E.d(i, { Z: () => p }), E(388685));
var n = E(230711),
    l = E(200876),
    S = E(228392),
    r = E(676317),
    e = E(434404),
    A = E(190263),
    s = E(208884),
    P = E(722932),
    _ = E(368442),
    o = E(60222),
    N = E(665906),
    T = E(131704),
    g = E(430824),
    M = E(63063),
    I = E(981631),
    R = E(71080),
    O = E(388032);
function a(t) {
    let i = (0, o.A)(t),
        E = g.Z.getGuild(t),
        S = null != E && (0, l.l)(E),
        r = (0, P.uH)({ location: 'getPermissionOptions' }),
        e = A.D.getCurrentConfig({
            guildId: t,
            location: 'getPermissionOptions'
        }).enabled;
    return {
        PRIORITY_SPEAKER_DESCRIPTION: O.intl.format(O.t.j66HgY, {
            keybind: O.intl.string(O.t.DkSwJy),
            onClick: () => {
                n.Z.open(I.oAB.KEYBINDS);
            }
        }),
        SOUNDBOARD_DESCRIPTION: O.intl.format(O.t.fVE8y8, { helpCenterArticle: M.Z.getArticleURL(I.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: S,
        inSoundmojiExperiment: r,
        inPinPermissionExperiment: e
    };
}
let p = {
    generateChannelPermissionSpec: function (t, i, E, n) {
        var l, o, g, M;
        let p = (0, R.IG)(i, E, n),
            D = a(t),
            c =
                N.tM.getCurrentConfig({
                    guildId: t,
                    location: '3ad37d_1'
                }).enabled && T.Um.has(i.type),
            C = (0, _.tu)(t),
            u = (0, r.ze)(t),
            f = i.isMediaChannel(),
            U = (0, P.uH)({ location: 'generateChannelPermissionSpec' }),
            d = A.D.getCurrentConfig({
                guildId: t,
                location: 'generateChannelPermissionSpec'
            }).enabled;
        switch (i.type) {
            case I.d4z.GUILD_CATEGORY:
                return [
                    s.zO(p, O.intl.string(O.t.AkPxc3)),
                    s.Ny(p, O.intl.string(O.t.Ny49TE)),
                    s.vq(p, O.intl.string(O.t.cKobOz), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: U,
                        inPinPermissionExperiment: d
                    }),
                    s.WV(p, O.intl.string(O.t['46Ra1d'])),
                    s.xU(p, O.intl.string(O.t['rrh/W1'])),
                    ...((l = D.showStageChannelPermissions), (o = () => s.kv(p, O.intl.string(O.t.yniaur))), l ? [o()] : []),
                    s.uu(p, O.intl.string(O.t.b8lplZ))
                ];
            case I.d4z.GUILD_VOICE:
                return [
                    s.zO(p, O.intl.string(O.t.ouHggI), { showManageWebhooks: !0 }),
                    s.Ny(p, O.intl.string(O.t.Ny49TE)),
                    s.WV(p, O.intl.string(O.t['46Ra1d'])),
                    s.aW(p, O.intl.string(O.t.iqlsnJ), {
                        sectionDescription: u
                            ? O.intl.format(O.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      e.Z.open(t, I.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: U
                    }),
                    s.uu(p, O.intl.string(O.t.b8lplZ)),
                    s.xU(p, O.intl.string(O.t['rrh/W1']))
                ];
            case I.d4z.GUILD_STAGE_VOICE:
                return [
                    s.zO(p, O.intl.string(O.t.ouHggI), { showManageWebhooks: !1 }),
                    s.Ny(p, O.intl.string(O.t.Ny49TE)),
                    s.FX(p, O.intl.string(O.t['46Ra1d']), C),
                    s.kv(p, O.intl.string(O.t.yniaur)),
                    s.uu(p, O.intl.string(O.t.b8lplZ)),
                    s.aW(p, O.intl.string(O.t.iqlsnJ), {
                        sectionDescription: u
                            ? O.intl.format(O.t['4Z9FbW'], {
                                  setUpAutomod: () => {
                                      e.Z.open(t, I.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: U
                    }),
                    s.xU(p, O.intl.string(O.t['rrh/W1']), { showActivities: !1 })
                ];
            case I.d4z.GUILD_FORUM:
            case I.d4z.GUILD_MEDIA:
                let L = f ? O.intl.string(O.t.aSjPg4) : O.intl.string(O.t.TS7CnZ),
                    G = f ? O.t.YjJTtL : O.t['1MTnqa'];
                return [
                    s.zO(p, O.intl.string(O.t.ouHggI)),
                    s.Ny(p, O.intl.string(O.t.Ny49TE)),
                    s.vq(p, L, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: u
                            ? O.intl.format(G, {
                                  setUpAutomod: () => {
                                      (f || (0, S.MO)(), e.Z.open(t, I.pNK.GUILD_AUTOMOD));
                                  }
                              })
                            : void 0,
                        inSoundmojiExperiment: U,
                        inPinPermissionExperiment: d
                    }),
                    s.xU(p, O.intl.string(O.t['rrh/W1'])),
                    ...((g = () => s.WV(p, O.intl.string(O.t['46Ra1d']))), c ? [g()] : [])
                ];
            default:
                return [
                    s.zO(p, O.intl.string(O.t.ouHggI)),
                    s.Ny(p, O.intl.string(O.t.Ny49TE)),
                    s.vq(p, O.intl.string(O.t.cKobOz), {
                        showPrivateThreads: i.type !== I.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: U,
                        inPinPermissionExperiment: d
                    }),
                    s.xU(p, O.intl.string(O.t['rrh/W1'])),
                    ...((M = () => s.WV(p, O.intl.string(O.t['46Ra1d']))), c ? [M()] : [])
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i;
        let E = new Set();
        return (
            t.features.has(I.oNc.COMMUNITY) || E.add(I.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (i = s.s4(a(t.id))),
            0 === E.size
                ? i
                : i.map((t) => {
                      var i, n;
                      return (
                          (i = (function (t) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var E = null != arguments[i] ? arguments[i] : {},
                                      n = Object.keys(E);
                                  ('function' == typeof Object.getOwnPropertySymbols &&
                                      (n = n.concat(
                                          Object.getOwnPropertySymbols(E).filter(function (t) {
                                              return Object.getOwnPropertyDescriptor(E, t).enumerable;
                                          })
                                      )),
                                      n.forEach(function (i) {
                                          var n;
                                          ((n = E[i]),
                                              i in t
                                                  ? Object.defineProperty(t, i, {
                                                        value: n,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (t[i] = n));
                                      }));
                              }
                              return t;
                          })({}, t)),
                          (n = n = { permissions: t.permissions.filter((t) => !E.has(t.flag.toString())) }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n))
                              : (function (t, i) {
                                    var E = Object.keys(t);
                                    if (Object.getOwnPropertySymbols) {
                                        var n = Object.getOwnPropertySymbols(t);
                                        E.push.apply(E, n);
                                    }
                                    return E;
                                })(Object(n)).forEach(function (t) {
                                    Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(n, t));
                                }),
                          i
                      );
                  })
        );
    },
    getGuildPermissionSpecMap: function (t) {
        return s.WW(a(t.id));
    }
};
