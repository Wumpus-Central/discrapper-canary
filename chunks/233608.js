n.d(i, { Z: () => c }), n(388685);
var E = n(200876),
    l = n(228392),
    r = n(627050),
    e = n(676317),
    S = n(434404),
    s = n(190263),
    o = n(208884),
    A = n(722932),
    P = n(368442),
    _ = n(60222),
    N = n(665906),
    g = n(313789),
    T = n(131704),
    a = n(430824),
    I = n(63063),
    M = n(981631),
    R = n(71080),
    O = n(388032);
function p(t) {
    let i = (0, _.A)(t),
        l = a.Z.getGuild(t),
        e = null != l && (0, E.l)(l),
        S = (0, A.uH)({ location: "getPermissionOptions" }),
        o = s.D.getCurrentConfig({
            guildId: t,
            location: "getPermissionOptions",
        }).enabled,
        P = r.N.getCurrentConfig({
            guildId: t,
            location: "getPermissionOptions",
        }).enabled;
    return {
        PRIORITY_SPEAKER_DESCRIPTION: O.intl.format(O.t.j66HgY, {
            keybind: O.intl.string(O.t.DkSwJy),
            onClick: () => {
                {
                    let { openUserSettings: t } = n(518596);
                    t(g.n.KEYBINDS_PANEL, { section: M.oAB.KEYBINDS });
                }
            },
        }),
        SOUNDBOARD_DESCRIPTION: O.intl.format(O.t.fVE8y8, { helpCenterArticle: I.Z.getArticleURL(M.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: e,
        inSoundmojiExperiment: S,
        inPinPermissionExperiment: o,
        inGameMentionsExperiment: P,
    };
}
let c = {
    generateChannelPermissionSpec: function (t, i, n, E) {
        var r, _, g, a;
        let I = (0, R.IG)(i, n, E),
            c = p(t),
            D =
                N.tM.getCurrentConfig({
                    guildId: t,
                    location: "3ad37d_1",
                }).enabled && T.Um.has(i.type),
            u = (0, P.tu)(t),
            C = (0, e.ze)(t),
            d = i.isMediaChannel(),
            f = (0, A.uH)({ location: "generateChannelPermissionSpec" }),
            U = s.D.getCurrentConfig({
                guildId: t,
                location: "generateChannelPermissionSpec",
            }).enabled;
        switch (i.type) {
            case M.d4z.GUILD_CATEGORY:
                return [
                    o.zO(I, O.intl.string(O.t.AkPxc3)),
                    o.Ny(I, O.intl.string(O.t.Ny49TE)),
                    o.vq(I, O.intl.string(O.t.cKobOz), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: f,
                        inPinPermissionExperiment: U,
                    }),
                    o.WV(I, O.intl.string(O.t["46Ra1d"])),
                    o.xU(I, O.intl.string(O.t["rrh/W1"])),
                    ...((r = c.showStageChannelPermissions),
                    (_ = () => o.kv(I, O.intl.string(O.t.yniaur))),
                    r ? [_()] : []),
                    o.uu(I, O.intl.string(O.t.b8lplZ)),
                ];
            case M.d4z.GUILD_VOICE:
                return [
                    o.zO(I, O.intl.string(O.t.ouHggI), { showManageWebhooks: !0 }),
                    o.Ny(I, O.intl.string(O.t.Ny49TE)),
                    o.WV(I, O.intl.string(O.t["46Ra1d"])),
                    o.aW(I, O.intl.string(O.t.iqlsnJ), {
                        sectionDescription: C
                            ? O.intl.format(O.t["4Z9FbW"], {
                                  setUpAutomod: () => {
                                      S.Z.open(t, M.pNK.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: f,
                    }),
                    o.uu(I, O.intl.string(O.t.b8lplZ)),
                    o.xU(I, O.intl.string(O.t["rrh/W1"])),
                ];
            case M.d4z.GUILD_STAGE_VOICE:
                return [
                    o.zO(I, O.intl.string(O.t.ouHggI), { showManageWebhooks: !1 }),
                    o.Ny(I, O.intl.string(O.t.Ny49TE)),
                    o.FX(I, O.intl.string(O.t["46Ra1d"]), u),
                    o.kv(I, O.intl.string(O.t.yniaur)),
                    o.uu(I, O.intl.string(O.t.b8lplZ)),
                    o.aW(I, O.intl.string(O.t.iqlsnJ), {
                        sectionDescription: C
                            ? O.intl.format(O.t["4Z9FbW"], {
                                  setUpAutomod: () => {
                                      S.Z.open(t, M.pNK.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: f,
                    }),
                    o.xU(I, O.intl.string(O.t["rrh/W1"]), { showActivities: !1 }),
                ];
            case M.d4z.GUILD_FORUM:
            case M.d4z.GUILD_MEDIA:
                let L = d ? O.intl.string(O.t.aSjPg4) : O.intl.string(O.t.TS7CnZ),
                    G = d ? O.t.YjJTtL : O.t["1MTnqa"];
                return [
                    o.zO(I, O.intl.string(O.t.ouHggI)),
                    o.Ny(I, O.intl.string(O.t.Ny49TE)),
                    o.vq(I, L, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: C
                            ? O.intl.format(G, {
                                  setUpAutomod: () => {
                                      d || (0, l.MO)(), S.Z.open(t, M.pNK.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: f,
                        inPinPermissionExperiment: U,
                    }),
                    o.xU(I, O.intl.string(O.t["rrh/W1"])),
                    ...((g = () => o.WV(I, O.intl.string(O.t["46Ra1d"]))), D ? [g()] : []),
                ];
            default:
                return [
                    o.zO(I, O.intl.string(O.t.ouHggI)),
                    o.Ny(I, O.intl.string(O.t.Ny49TE)),
                    o.vq(I, O.intl.string(O.t.cKobOz), {
                        showPrivateThreads: i.type !== M.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: f,
                        inPinPermissionExperiment: U,
                    }),
                    o.xU(I, O.intl.string(O.t["rrh/W1"])),
                    ...((a = () => o.WV(I, O.intl.string(O.t["46Ra1d"]))), D ? [a()] : []),
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i;
        let n = new Set();
        return (
            t.features.has(M.oNc.COMMUNITY) || n.add(M.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (i = o.s4(p(t.id))),
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
        return o.WW(p(t.id));
    },
};
