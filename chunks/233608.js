E.d(i, { Z: () => D }), E(388685);
var n = E(230711),
    l = E(200876),
    S = E(228392),
    r = E(627050),
    e = E(676317),
    s = E(434404),
    A = E(190263),
    P = E(208884),
    o = E(722932),
    _ = E(368442),
    N = E(60222),
    g = E(665906),
    T = E(131704),
    M = E(430824),
    I = E(63063),
    R = E(981631),
    O = E(71080),
    a = E(388032);
function p(t) {
    let i = (0, N.A)(t),
        E = M.Z.getGuild(t),
        S = null != E && (0, l.l)(E),
        e = (0, o.uH)({ location: "getPermissionOptions" }),
        s = A.D.getCurrentConfig({
            guildId: t,
            location: "getPermissionOptions",
        }).enabled,
        P = r.N.getCurrentConfig({
            guildId: t,
            location: "getPermissionOptions",
        }).enabled;
    return {
        PRIORITY_SPEAKER_DESCRIPTION: a.intl.format(a.t.j66HgY, {
            keybind: a.intl.string(a.t.DkSwJy),
            onClick: () => {
                n.Z.open(R.oAB.KEYBINDS);
            },
        }),
        SOUNDBOARD_DESCRIPTION: a.intl.format(a.t.fVE8y8, { helpCenterArticle: I.Z.getArticleURL(R.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: S,
        inSoundmojiExperiment: e,
        inPinPermissionExperiment: s,
        inGameMentionsExperiment: P,
    };
}
let D = {
    generateChannelPermissionSpec: function (t, i, E, n) {
        var l, r, N, M;
        let I = (0, O.IG)(i, E, n),
            D = p(t),
            c =
                g.tM.getCurrentConfig({
                    guildId: t,
                    location: "3ad37d_1",
                }).enabled && T.Um.has(i.type),
            C = (0, _.tu)(t),
            u = (0, e.ze)(t),
            f = i.isMediaChannel(),
            U = (0, o.uH)({ location: "generateChannelPermissionSpec" }),
            d = A.D.getCurrentConfig({
                guildId: t,
                location: "generateChannelPermissionSpec",
            }).enabled;
        switch (i.type) {
            case R.d4z.GUILD_CATEGORY:
                return [
                    P.zO(I, a.intl.string(a.t.AkPxc3)),
                    P.Ny(I, a.intl.string(a.t.Ny49TE)),
                    P.vq(I, a.intl.string(a.t.cKobOz), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: U,
                        inPinPermissionExperiment: d,
                    }),
                    P.WV(I, a.intl.string(a.t["46Ra1d"])),
                    P.xU(I, a.intl.string(a.t["rrh/W1"])),
                    ...((l = D.showStageChannelPermissions),
                    (r = () => P.kv(I, a.intl.string(a.t.yniaur))),
                    l ? [r()] : []),
                    P.uu(I, a.intl.string(a.t.b8lplZ)),
                ];
            case R.d4z.GUILD_VOICE:
                return [
                    P.zO(I, a.intl.string(a.t.ouHggI), { showManageWebhooks: !0 }),
                    P.Ny(I, a.intl.string(a.t.Ny49TE)),
                    P.WV(I, a.intl.string(a.t["46Ra1d"])),
                    P.aW(I, a.intl.string(a.t.iqlsnJ), {
                        sectionDescription: u
                            ? a.intl.format(a.t["4Z9FbW"], {
                                  setUpAutomod: () => {
                                      s.Z.open(t, R.pNK.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: U,
                    }),
                    P.uu(I, a.intl.string(a.t.b8lplZ)),
                    P.xU(I, a.intl.string(a.t["rrh/W1"])),
                ];
            case R.d4z.GUILD_STAGE_VOICE:
                return [
                    P.zO(I, a.intl.string(a.t.ouHggI), { showManageWebhooks: !1 }),
                    P.Ny(I, a.intl.string(a.t.Ny49TE)),
                    P.FX(I, a.intl.string(a.t["46Ra1d"]), C),
                    P.kv(I, a.intl.string(a.t.yniaur)),
                    P.uu(I, a.intl.string(a.t.b8lplZ)),
                    P.aW(I, a.intl.string(a.t.iqlsnJ), {
                        sectionDescription: u
                            ? a.intl.format(a.t["4Z9FbW"], {
                                  setUpAutomod: () => {
                                      s.Z.open(t, R.pNK.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: U,
                    }),
                    P.xU(I, a.intl.string(a.t["rrh/W1"]), { showActivities: !1 }),
                ];
            case R.d4z.GUILD_FORUM:
            case R.d4z.GUILD_MEDIA:
                let G = f ? a.intl.string(a.t.aSjPg4) : a.intl.string(a.t.TS7CnZ),
                    L = f ? a.t.YjJTtL : a.t["1MTnqa"];
                return [
                    P.zO(I, a.intl.string(a.t.ouHggI)),
                    P.Ny(I, a.intl.string(a.t.Ny49TE)),
                    P.vq(I, G, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: u
                            ? a.intl.format(L, {
                                  setUpAutomod: () => {
                                      f || (0, S.MO)(), s.Z.open(t, R.pNK.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: U,
                        inPinPermissionExperiment: d,
                    }),
                    P.xU(I, a.intl.string(a.t["rrh/W1"])),
                    ...((N = () => P.WV(I, a.intl.string(a.t["46Ra1d"]))), c ? [N()] : []),
                ];
            default:
                return [
                    P.zO(I, a.intl.string(a.t.ouHggI)),
                    P.Ny(I, a.intl.string(a.t.Ny49TE)),
                    P.vq(I, a.intl.string(a.t.cKobOz), {
                        showPrivateThreads: i.type !== R.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: U,
                        inPinPermissionExperiment: d,
                    }),
                    P.xU(I, a.intl.string(a.t["rrh/W1"])),
                    ...((M = () => P.WV(I, a.intl.string(a.t["46Ra1d"]))), c ? [M()] : []),
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i;
        let E = new Set();
        return (
            t.features.has(R.oNc.COMMUNITY) || E.add(R.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (i = P.s4(p(t.id))),
            0 === E.size
                ? i
                : i.map((t) => {
                      var i, n;
                      return (
                          (i = (function (t) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var E = null != arguments[i] ? arguments[i] : {},
                                      n = Object.keys(E);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (n = n.concat(
                                          Object.getOwnPropertySymbols(E).filter(function (t) {
                                              return Object.getOwnPropertyDescriptor(E, t).enumerable;
                                          }),
                                      )),
                                      n.forEach(function (i) {
                                          var n;
                                          (n = E[i]),
                                              i in t
                                                  ? Object.defineProperty(t, i, {
                                                        value: n,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (t[i] = n);
                                      });
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
        return P.WW(p(t.id));
    },
};
