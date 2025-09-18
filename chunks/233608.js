n.d(i, { Z: () => D }), n(388685);
var l = n(87432),
    E = n(200876),
    e = n(228392),
    r = n(627050),
    S = n(676317),
    s = n(434404),
    o = n(190263),
    P = n(208884),
    A = n(722932),
    _ = n(368442),
    N = n(60222),
    g = n(665906),
    T = n(313789),
    a = n(131704),
    M = n(430824),
    I = n(63063),
    O = n(981631),
    R = n(71080),
    p = n(388032);
function c(t) {
    let i = (0, N.A)(t),
        e = M.Z.getGuild(t),
        S = null != e && (0, E.l)(e),
        s = (0, A.uH)({ location: "getPermissionOptions" }),
        P = o.D.getCurrentConfig({
            guildId: t,
            location: "getPermissionOptions",
        }).enabled,
        _ = r.N.getCurrentConfig({
            guildId: t,
            location: "getPermissionOptions",
        }).enabled,
        g = l.Z.getCurrentConfig({
            guildId: t,
            location: "getPermissionOptions",
        }).enabled;
    return {
        PRIORITY_SPEAKER_DESCRIPTION: p.intl.format(p.t.j66HgY, {
            keybind: p.intl.string(p.t.DkSwJy),
            onClick: () => {
                {
                    let { openUserSettings: t } = n(518596);
                    t(T.n.KEYBINDS_PANEL, { section: O.oAB.KEYBINDS });
                }
            },
        }),
        SOUNDBOARD_DESCRIPTION: p.intl.format(p.t.fVE8y8, { helpCenterArticle: I.Z.getArticleURL(O.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: i,
        showExperimental: !0,
        showMembershipManualApprovalPermissions: !0,
        showCreatorMonetizationAnalyticsPermission: S,
        inSoundmojiExperiment: s,
        inPinPermissionExperiment: P,
        inGameMentionsExperiment: _,
        inBypassSlowmodePermissionExperiment: g,
    };
}
let D = {
    generateChannelPermissionSpec: function (t, i, n, l) {
        var E, r, o, A;
        let N = (0, R.IG)(i, n, l),
            T = c(t),
            M =
                g.tM.getCurrentConfig({
                    guildId: t,
                    location: "3ad37d_1",
                }).enabled && a.Um.has(i.type),
            I = (0, _.tu)(t),
            D = (0, S.ze)(t),
            u = i.isMediaChannel(),
            { inSoundmojiExperiment: d, inPinPermissionExperiment: C, inBypassSlowmodePermissionExperiment: f } = T;
        switch (i.type) {
            case O.d4z.GUILD_CATEGORY:
                return [
                    P.zO(N, p.intl.string(p.t.AkPxc3)),
                    P.Ny(N, p.intl.string(p.t.Ny49TE)),
                    P.vq(N, p.intl.string(p.t.cKobOz), {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: d,
                        inPinPermissionExperiment: C,
                        inBypassSlowmodePermissionExperiment: f,
                    }),
                    P.WV(N, p.intl.string(p.t["46Ra1d"])),
                    P.xU(N, p.intl.string(p.t["rrh/W1"])),
                    ...((E = T.showStageChannelPermissions),
                    (r = () => P.kv(N, p.intl.string(p.t.yniaur))),
                    E ? [r()] : []),
                    P.uu(N, p.intl.string(p.t.b8lplZ)),
                ];
            case O.d4z.GUILD_VOICE:
                return [
                    P.zO(N, p.intl.string(p.t.ouHggI), { showManageWebhooks: !0 }),
                    P.Ny(N, p.intl.string(p.t.Ny49TE)),
                    P.WV(N, p.intl.string(p.t["46Ra1d"])),
                    P.aW(N, p.intl.string(p.t.iqlsnJ), {
                        sectionDescription: D
                            ? p.intl.format(p.t["4Z9FbW"], {
                                  setUpAutomod: () => {
                                      s.Z.open(t, O.pNK.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: d,
                    }),
                    P.uu(N, p.intl.string(p.t.b8lplZ)),
                    P.xU(N, p.intl.string(p.t["rrh/W1"])),
                ];
            case O.d4z.GUILD_STAGE_VOICE:
                return [
                    P.zO(N, p.intl.string(p.t.ouHggI), { showManageWebhooks: !1 }),
                    P.Ny(N, p.intl.string(p.t.Ny49TE)),
                    P.FX(N, p.intl.string(p.t["46Ra1d"]), I),
                    P.kv(N, p.intl.string(p.t.yniaur)),
                    P.uu(N, p.intl.string(p.t.b8lplZ)),
                    P.aW(N, p.intl.string(p.t.iqlsnJ), {
                        sectionDescription: D
                            ? p.intl.format(p.t["4Z9FbW"], {
                                  setUpAutomod: () => {
                                      s.Z.open(t, O.pNK.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: d,
                    }),
                    P.xU(N, p.intl.string(p.t["rrh/W1"]), { showActivities: !1 }),
                ];
            case O.d4z.GUILD_FORUM:
            case O.d4z.GUILD_MEDIA:
                let U = u ? p.intl.string(p.t.aSjPg4) : p.intl.string(p.t.TS7CnZ),
                    L = u ? p.t.YjJTtL : p.t["1MTnqa"];
                return [
                    P.zO(N, p.intl.string(p.t.ouHggI)),
                    P.Ny(N, p.intl.string(p.t.Ny49TE)),
                    P.vq(N, U, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: D
                            ? p.intl.format(L, {
                                  setUpAutomod: () => {
                                      u || (0, e.MO)(), s.Z.open(t, O.pNK.GUILD_AUTOMOD);
                                  },
                              })
                            : void 0,
                        inSoundmojiExperiment: d,
                        inPinPermissionExperiment: C,
                        inBypassSlowmodePermissionExperiment: f,
                    }),
                    P.xU(N, p.intl.string(p.t["rrh/W1"])),
                    ...((o = () => P.WV(N, p.intl.string(p.t["46Ra1d"]))), M ? [o()] : []),
                ];
            default:
                return [
                    P.zO(N, p.intl.string(p.t.ouHggI)),
                    P.Ny(N, p.intl.string(p.t.Ny49TE)),
                    P.vq(N, p.intl.string(p.t.cKobOz), {
                        showPrivateThreads: i.type !== O.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        inSoundmojiExperiment: d,
                        inPinPermissionExperiment: C,
                        inBypassSlowmodePermissionExperiment: f,
                    }),
                    P.xU(N, p.intl.string(p.t["rrh/W1"])),
                    ...((A = () => P.WV(N, p.intl.string(p.t["46Ra1d"]))), M ? [A()] : []),
                ];
        }
    },
    generateGuildPermissionSpec: function (t) {
        var i;
        let n = new Set();
        return (
            t.features.has(O.oNc.COMMUNITY) || n.add(O.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (i = P.s4(c(t.id))),
            0 === n.size
                ? i
                : i.map((t) => {
                      var i, l;
                      return (
                          (i = (function (t) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var n = null != arguments[i] ? arguments[i] : {},
                                      l = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (l = l.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (t) {
                                              return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                          }),
                                      )),
                                      l.forEach(function (i) {
                                          var l;
                                          (l = n[i]),
                                              i in t
                                                  ? Object.defineProperty(t, i, {
                                                        value: l,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (t[i] = l);
                                      });
                              }
                              return t;
                          })({}, t)),
                          (l = l = { permissions: t.permissions.filter((t) => !n.has(t.flag.toString())) }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                              : (function (t, i) {
                                    var n = Object.keys(t);
                                    if (Object.getOwnPropertySymbols) {
                                        var l = Object.getOwnPropertySymbols(t);
                                        n.push.apply(n, l);
                                    }
                                    return n;
                                })(Object(l)).forEach(function (t) {
                                    Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(l, t));
                                }),
                          i
                      );
                  })
        );
    },
    getGuildPermissionSpecMap: function (t) {
        return P.WW(c(t.id));
    },
};
