E.d(i, { Z: () => D }), E(388685);
var n = E(409513),
    l = E(200876),
    S = E(228392),
    r = E(627050),
    e = E(676317),
    s = E(434404),
    A = E(208884),
    P = E(722932),
    o = E(368442),
    _ = E(60222),
    N = E(665906),
    g = E(313789),
    T = E(131704),
    M = E(430824),
    I = E(63063),
    O = E(981631),
    R = E(71080),
    a = E(388032);
function p(t) {
    let i = (0, _.A)(t),
        S = M.Z.getGuild(t),
        e = null != S && (0, l.l)(S),
        s = (0, P.uH)({ location: "getPermissionOptions" }),
        A = r.N.getCurrentConfig({
            guildId: t,
            location: "getPermissionOptions",
        }).enabled,
        o = n.Z.getCurrentConfig({
            guildId: t,
            location: "getPermissionOptions",
        }).enabled;
    return {
        PRIORITY_SPEAKER_DESCRIPTION: a.intl.format(a.t.j66HgY, {
            keybind: a.intl.string(a.t.DkSwJ2),
            onClick: () => {
                {
                    let { openUserSettings: t } = E(518596);
                    t(g.n.KEYBINDS_PANEL, { section: O.oAB.KEYBINDS });
                }
            },
        }),
        SOUNDBOARD_DESCRIPTION: a.intl.format(a.t.fVE8y8, { helpCenterArticle: I.Z.getArticleURL(O.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: e,
        inSoundmojiExperiment: s,
        inGameMentionsExperiment: A,
        inBypassSlowmodePermissionExperiment: o,
    };
}
let D = {
    generateChannelPermissionSpec: function (t, i, E, n) {
        var l, r, P, _;
        let g = (0, R.IG)(i, E, n),
            M = p(t),
            I =
                N.tM.getCurrentConfig({
                    guildId: t,
                    location: "3ad37d_1",
                }).enabled && T.Um.has(i.type),
            D = (0, o.tu)(t),
            c = (0, e.ze)(t),
            C = i.isMediaChannel(),
            { inSoundmojiExperiment: u, inBypassSlowmodePermissionExperiment: f } = M;
        switch (i.type) {
            case O.d4z.GUILD_CATEGORY:
                return [
                    A.zO(g, a.intl.string(a.t["AkPxc+"])),
                    A.Ny(g, a.intl.string(a.t.Ny49TN)),
                    A.vq(g, a.intl.string(a.t.cKobO5), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: u,
                        inBypassSlowmodePermissionExperiment: f,
                    }),
                    A.WV(g, a.intl.string(a.t["46Ra1b"])),
                    A.xU(g, a.intl.string(a.t["rrh/W6"])),
                    ...((l = M.showStageChannelPermissions),
                    (r = () => A.kv(g, a.intl.string(a.t.yniauk))),
                    l ? [r()] : []),
                    A.uu(g, a.intl.string(a.t.b8lplT)),
                ];
            case O.d4z.GUILD_VOICE:
                return [
                    A.zO(g, a.intl.string(a.t.ouHggI), { showManageWebhooks: !0 }),
                    A.Ny(g, a.intl.string(a.t.Ny49TN)),
                    A.WV(g, a.intl.string(a.t["46Ra1b"])),
                    A.aW(g, a.intl.string(a.t.iqlsnD), {
                        sectionDescription: c
                            ? a.intl.format(a.t["4Z9Fbb"], {
                                  setUpAutomod: () => {
                                      s.Z.open(t, O.pNK.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: u,
                    }),
                    A.uu(g, a.intl.string(a.t.b8lplT)),
                    A.xU(g, a.intl.string(a.t["rrh/W6"])),
                ];
            case O.d4z.GUILD_STAGE_VOICE:
                return [
                    A.zO(g, a.intl.string(a.t.ouHggI), { showManageWebhooks: !1 }),
                    A.Ny(g, a.intl.string(a.t.Ny49TN)),
                    A.FX(g, a.intl.string(a.t["46Ra1b"]), D),
                    A.kv(g, a.intl.string(a.t.yniauk)),
                    A.uu(g, a.intl.string(a.t.b8lplT)),
                    A.aW(g, a.intl.string(a.t.iqlsnD), {
                        sectionDescription: c
                            ? a.intl.format(a.t["4Z9Fbb"], {
                                  setUpAutomod: () => {
                                      s.Z.open(t, O.pNK.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: u,
                    }),
                    A.xU(g, a.intl.string(a.t["rrh/W6"]), { showActivities: !1 }),
                ];
            case O.d4z.GUILD_FORUM:
            case O.d4z.GUILD_MEDIA:
                let d = C ? a.intl.string(a.t.aSjPgw) : a.intl.string(a.t.TS7Cnb),
                    G = C ? a.t.YjJTtH : a.t["1MTnqY"];
                return [
                    A.zO(g, a.intl.string(a.t.ouHggI)),
                    A.Ny(g, a.intl.string(a.t.Ny49TN)),
                    A.vq(g, d, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: c
                            ? a.intl.format(G, {
                                  setUpAutomod: () => {
                                      C || (0, S.MO)(), s.Z.open(t, O.pNK.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: u,
                        inBypassSlowmodePermissionExperiment: f,
                    }),
                    A.xU(g, a.intl.string(a.t["rrh/W6"])),
                    ...((P = () => A.WV(g, a.intl.string(a.t["46Ra1b"]))), I ? [P()] : []),
                ];
            default:
                return [
                    A.zO(g, a.intl.string(a.t.ouHggI)),
                    A.Ny(g, a.intl.string(a.t.Ny49TN)),
                    A.vq(g, a.intl.string(a.t.cKobO5), {
                        showPrivateThreads: i.type !== O.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: u,
                        inBypassSlowmodePermissionExperiment: f,
                    }),
                    A.xU(g, a.intl.string(a.t["rrh/W6"])),
                    ...((_ = () => A.WV(g, a.intl.string(a.t["46Ra1b"]))), I ? [_()] : []),
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i;
        let E = new Set();
        return (
            t.features.has(O.GuildFeatures.COMMUNITY) || E.add(O.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (i = A.s4(p(t.id))),
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
        return A.WW(p(t.id));
    },
};
