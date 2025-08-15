n.d(i, { Z: () => c }), n(388685);
var E = n(230711),
    l = n(200876),
    r = n(228392),
    e = n(627050),
    S = n(676317),
    s = n(434404),
    o = n(190263),
    A = n(208884),
    P = n(722932),
    _ = n(368442),
    N = n(60222),
    g = n(665906),
    T = n(131704),
    a = n(430824),
    I = n(63063),
    M = n(981631),
    R = n(71080),
    O = n(388032);
function p(t) {
    let i = (0, N.A)(t),
        n = a.Z.getGuild(t),
        r = null != n && (0, l.l)(n),
        S = (0, P.uH)({ location: "getPermissionOptions" }),
        s = o.D.getCurrentConfig({
            guildId: t,
            location: "getPermissionOptions",
        }).enabled,
        A = e.N.getCurrentConfig({
            guildId: t,
            location: "getPermissionOptions",
        }).enabled;
    return {
        PRIORITY_SPEAKER_DESCRIPTION: O.intl.format(O.t.j66HgY, {
            keybind: O.intl.string(O.t.DkSwJy),
            onClick: () => {
                E.Z.open(M.oAB.KEYBINDS);
            },
        }),
        SOUNDBOARD_DESCRIPTION: O.intl.format(O.t.fVE8y8, { helpCenterArticle: I.Z.getArticleURL(M.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: r,
        inSoundmojiExperiment: S,
        inPinPermissionExperiment: s,
        inGameMentionsExperiment: A,
    };
}
let c = {
    generateChannelPermissionSpec: function (t, i, n, E) {
        var l, e, N, a;
        let I = (0, R.IG)(i, n, E),
            c = p(t),
            D =
                g.tM.getCurrentConfig({
                    guildId: t,
                    location: "3ad37d_1",
                }).enabled && T.Um.has(i.type),
            u = (0, _.tu)(t),
            C = (0, S.ze)(t),
            d = i.isMediaChannel(),
            f = (0, P.uH)({ location: "generateChannelPermissionSpec" }),
            U = o.D.getCurrentConfig({
                guildId: t,
                location: "generateChannelPermissionSpec",
            }).enabled;
        switch (i.type) {
            case M.d4z.GUILD_CATEGORY:
                return [
                    A.zO(I, O.intl.string(O.t.AkPxc3)),
                    A.Ny(I, O.intl.string(O.t.Ny49TE)),
                    A.vq(I, O.intl.string(O.t.cKobOz), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: f,
                        inPinPermissionExperiment: U,
                    }),
                    A.WV(I, O.intl.string(O.t["46Ra1d"])),
                    A.xU(I, O.intl.string(O.t["rrh/W1"])),
                    ...((l = c.showStageChannelPermissions),
                    (e = () => A.kv(I, O.intl.string(O.t.yniaur))),
                    l ? [e()] : []),
                    A.uu(I, O.intl.string(O.t.b8lplZ)),
                ];
            case M.d4z.GUILD_VOICE:
                return [
                    A.zO(I, O.intl.string(O.t.ouHggI), { showManageWebhooks: !0 }),
                    A.Ny(I, O.intl.string(O.t.Ny49TE)),
                    A.WV(I, O.intl.string(O.t["46Ra1d"])),
                    A.aW(I, O.intl.string(O.t.iqlsnJ), {
                        sectionDescription: C
                            ? O.intl.format(O.t["4Z9FbW"], {
                                  setUpAutomod: () => {
                                      s.Z.open(t, M.pNK.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: f,
                    }),
                    A.uu(I, O.intl.string(O.t.b8lplZ)),
                    A.xU(I, O.intl.string(O.t["rrh/W1"])),
                ];
            case M.d4z.GUILD_STAGE_VOICE:
                return [
                    A.zO(I, O.intl.string(O.t.ouHggI), { showManageWebhooks: !1 }),
                    A.Ny(I, O.intl.string(O.t.Ny49TE)),
                    A.FX(I, O.intl.string(O.t["46Ra1d"]), u),
                    A.kv(I, O.intl.string(O.t.yniaur)),
                    A.uu(I, O.intl.string(O.t.b8lplZ)),
                    A.aW(I, O.intl.string(O.t.iqlsnJ), {
                        sectionDescription: C
                            ? O.intl.format(O.t["4Z9FbW"], {
                                  setUpAutomod: () => {
                                      s.Z.open(t, M.pNK.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: f,
                    }),
                    A.xU(I, O.intl.string(O.t["rrh/W1"]), { showActivities: !1 }),
                ];
            case M.d4z.GUILD_FORUM:
            case M.d4z.GUILD_MEDIA:
                let L = d ? O.intl.string(O.t.aSjPg4) : O.intl.string(O.t.TS7CnZ),
                    G = d ? O.t.YjJTtL : O.t["1MTnqa"];
                return [
                    A.zO(I, O.intl.string(O.t.ouHggI)),
                    A.Ny(I, O.intl.string(O.t.Ny49TE)),
                    A.vq(I, L, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: C
                            ? O.intl.format(G, {
                                  setUpAutomod: () => {
                                      d || (0, r.MO)(), s.Z.open(t, M.pNK.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: f,
                        inPinPermissionExperiment: U,
                    }),
                    A.xU(I, O.intl.string(O.t["rrh/W1"])),
                    ...((N = () => A.WV(I, O.intl.string(O.t["46Ra1d"]))), D ? [N()] : []),
                ];
            default:
                return [
                    A.zO(I, O.intl.string(O.t.ouHggI)),
                    A.Ny(I, O.intl.string(O.t.Ny49TE)),
                    A.vq(I, O.intl.string(O.t.cKobOz), {
                        showPrivateThreads: i.type !== M.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: f,
                        inPinPermissionExperiment: U,
                    }),
                    A.xU(I, O.intl.string(O.t["rrh/W1"])),
                    ...((a = () => A.WV(I, O.intl.string(O.t["46Ra1d"]))), D ? [a()] : []),
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i;
        let n = new Set();
        return (
            t.features.has(M.oNc.COMMUNITY) || n.add(M.Plq.VIEW_GUILD_ANALYTICS.toString()),
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
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (E = E.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (t) {
                                              return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                          }),
                                      )),
                                      E.forEach(function (i) {
                                          var E;
                                          (E = n[i]),
                                              i in t
                                                  ? Object.defineProperty(t, i, {
                                                        value: E,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
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
    },
};
