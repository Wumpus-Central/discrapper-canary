n.d(i, {
    A: () => M,
}),
    n(896048);
var e = n(936555),
    r = n(853742),
    E = n(352505),
    s = n(979816),
    l = n(997509),
    S = n(225419),
    o = n(864145),
    a = n(96566),
    A = n(284738),
    g = n(406704),
    _ = n(780964),
    N = n(95701),
    B = n(71393),
    x = n(975571),
    T = n(652215),
    c = n(737045),
    p = n(985018);

function d(t) {
    let i = (0, A.Y)(t),
        r = B.A.getGuild(t),
        s = null != r && (0, e.w)(r),
        l = (0, o.K5)({
            location: "getPermissionOptions",
        }),
        S = E.M.getCurrentConfig({
            guildId: t,
            location: "getPermissionOptions",
        }).enabled;
    return {
        PRIORITY_SPEAKER_DESCRIPTION: p.intl.format(p.t.j66HgY, {
            keybind: p.intl.string(p.t.DkSwJ2),
            onClick: () => {
                {
                    let { openUserSettings: t } = n(840065);
                    t(_.X.KEYBINDS_PANEL, {
                        section: T.nc_.KEYBINDS,
                    });
                }
            },
        }),
        SOUNDBOARD_DESCRIPTION: p.intl.format(p.t.fVE8y8, {
            helpCenterArticle: x.A.getArticleURL(T.MVz.SOUNDBOARD),
        }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: s,
        inSoundmojiExperiment: l,
        inGameMentionsExperiment: S,
    };
}
let M = {
    generateChannelPermissionSpec: function (t, i, n, e) {
        var E, o, A, _;
        let B = (0, c.mW)(i, n, e),
            x = d(t),
            M =
                g.io.getCurrentConfig({
                    guildId: t,
                    location: "3ad37d_1",
                }).enabled && N.p6.has(i.type),
            D = (0, a.Bw)(t),
            u = (0, s.i_)(t),
            O = i.isMediaChannel(),
            { inSoundmojiExperiment: I } = x;
        switch (i.type) {
            case T.rbe.GUILD_CATEGORY:
                return [
                    S.mL(B, p.intl.string(p.t["AkPxc+"])),
                    S.m6(B, p.intl.string(p.t.Ny49TN)),
                    S.BK(B, p.intl.string(p.t.cKobO5), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: I,
                    }),
                    S.iG(B, p.intl.string(p.t["46Ra1b"])),
                    S.Si(B, p.intl.string(p.t["rrh/W6"])),
                    ...((E = x.showStageChannelPermissions),
                    (o = () => S.qI(B, p.intl.string(p.t.yniauk))),
                    E ? [o()] : []),
                    S.xd(B, p.intl.string(p.t.b8lplT)),
                ];
            case T.rbe.GUILD_VOICE:
                return [
                    S.mL(B, p.intl.string(p.t.ouHggI), {
                        showManageWebhooks: !0,
                    }),
                    S.m6(B, p.intl.string(p.t.Ny49TN)),
                    S.iG(B, p.intl.string(p.t["46Ra1b"])),
                    S.k6(B, p.intl.string(p.t.iqlsnD), {
                        sectionDescription: u
                            ? p.intl.format(p.t["4Z9Fbb"], {
                                  setUpAutomod: () => {
                                      l.A.open(t, T.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: I,
                    }),
                    S.xd(B, p.intl.string(p.t.b8lplT)),
                    S.Si(B, p.intl.string(p.t["rrh/W6"])),
                ];
            case T.rbe.GUILD_STAGE_VOICE:
                return [
                    S.mL(B, p.intl.string(p.t.ouHggI), {
                        showManageWebhooks: !1,
                    }),
                    S.m6(B, p.intl.string(p.t.Ny49TN)),
                    S.od(B, p.intl.string(p.t["46Ra1b"]), D),
                    S.qI(B, p.intl.string(p.t.yniauk)),
                    S.xd(B, p.intl.string(p.t.b8lplT)),
                    S.k6(B, p.intl.string(p.t.iqlsnD), {
                        sectionDescription: u
                            ? p.intl.format(p.t["4Z9Fbb"], {
                                  setUpAutomod: () => {
                                      l.A.open(t, T.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: I,
                    }),
                    S.Si(B, p.intl.string(p.t["rrh/W6"]), {
                        showActivities: !1,
                    }),
                ];
            case T.rbe.GUILD_FORUM:
            case T.rbe.GUILD_MEDIA:
                let R = O ? p.intl.string(p.t.aSjPgw) : p.intl.string(p.t.TS7Cnb),
                    h = O ? p.t.YjJTtH : p.t["1MTnqY"];
                return [
                    S.mL(B, p.intl.string(p.t.ouHggI)),
                    S.m6(B, p.intl.string(p.t.Ny49TN)),
                    S.BK(B, R, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: u
                            ? p.intl.format(h, {
                                  setUpAutomod: () => {
                                      O || (0, r.El)(), l.A.open(t, T.BEX.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: I,
                    }),
                    S.Si(B, p.intl.string(p.t["rrh/W6"])),
                    ...((A = () => S.iG(B, p.intl.string(p.t["46Ra1b"]))), M ? [A()] : []),
                ];
            default:
                return [
                    S.mL(B, p.intl.string(p.t.ouHggI)),
                    S.m6(B, p.intl.string(p.t.Ny49TN)),
                    S.BK(B, p.intl.string(p.t.cKobO5), {
                        showPrivateThreads: i.type !== T.rbe.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: I,
                    }),
                    S.Si(B, p.intl.string(p.t["rrh/W6"])),
                    ...((_ = () => S.iG(B, p.intl.string(p.t["46Ra1b"]))), M ? [_()] : []),
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i;
        let n = new Set();
        return (
            t.features.has(T.GuildFeatures.COMMUNITY) || n.add(T.xBc.VIEW_GUILD_ANALYTICS.toString()),
            (i = S.LZ(d(t.id))),
            0 === n.size
                ? i
                : i.map((t) => {
                      var i, e;
                      return (
                          (i = (function (t) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var n = null != arguments[i] ? arguments[i] : {},
                                      e = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (e = e.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (t) {
                                              return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                          }),
                                      )),
                                      e.forEach(function (i) {
                                          var e;
                                          (e = n[i]),
                                              i in t
                                                  ? Object.defineProperty(t, i, {
                                                        value: e,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (t[i] = e);
                                      });
                              }
                              return t;
                          })({}, t)),
                          (e = e =
                              {
                                  permissions: t.permissions.filter((t) => !n.has(t.flag.toString())),
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e))
                              : (function (t, i) {
                                    var n = Object.keys(t);
                                    if (Object.getOwnPropertySymbols) {
                                        var e = Object.getOwnPropertySymbols(t);
                                        n.push.apply(n, e);
                                    }
                                    return n;
                                })(Object(e)).forEach(function (t) {
                                    Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(e, t));
                                }),
                          i
                      );
                  })
        );
    },
    getGuildPermissionSpecMap: function (t) {
        return S.eD(d(t.id));
    },
};
