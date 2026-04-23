i.d(e, { default: () => O });
var n = i(627968),
    l = i(64700),
    r = i(189213),
    s = i(834730),
    d = i(505653),
    a = i(954571),
    u = i(975571),
    _ = i(115063),
    S = i(253932),
    o = i(112469),
    g = i(106148),
    E = i(650832),
    c = i(542457),
    T = i(355097),
    A = i(652215),
    I = i(985018);
function R(t) {
    let { ingress: e, guildId: i } = t,
        r = S.pE.useSetting().includes(i),
        s = l.useCallback(
            (t) => {
                let n = (0, _.CN)();
                t ? n.delete(i) : n.add(i),
                    S.pE.updateSetting([...n]),
                    a.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: c.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [e, i],
        );
    return "0" === i
        ? null
        : (0, n.jsx)(g.h, {
              children: (0, n.jsx)(E.Ay, {
                  title: I.intl.string(I.t["T+nevN"]),
                  value: !r,
                  onChange: s,
                  note: I.intl.format(I.t.jXKQCu, {
                      helpdeskArticle: u.A.getArticleURL(A.MVz.ACTIVITY_STATUS_SETTINGS),
                  }),
              }),
          });
}
function G(t) {
    let { ingress: e = T.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, o.Tx)();
    return (0, n.jsx)(R, { ingress: e, guildId: i ?? l });
}
var f = i(395277);
function C(t) {
    let { ingress: e, guildId: i } = t,
        r = S.JG.useSetting().includes(i),
        s = l.useCallback(
            (t) => {
                let n = (0, _.Kk)();
                t ? n.delete(i) : n.add(i),
                    S.JG.updateSetting([...n]),
                    a.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: c.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [e, i],
        );
    return "0" === i
        ? null
        : (0, n.jsx)(g.h, {
              children: (0, n.jsx)(E.Ay, {
                  title: I.intl.string(f.default.WhdCGP),
                  value: !r,
                  onChange: s,
                  note: I.intl.string(f.default.UQ9RHJ),
              }),
          });
}
function x(t) {
    let { ingress: e = T.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, o.Tx)();
    return (0, n.jsx)(C, { ingress: e, guildId: i ?? l });
}
var h = i(862482),
    p = i(171316),
    m = i(71393),
    U = i(762183),
    V = i(445176),
    j = i(137675),
    L = i(602339);
function v(t) {
    let { ingress: e, guildId: i } = t,
        r = (0, o.q9)(),
        s = S.$s.useSetting().includes(i),
        d = (0, U.K)(),
        u = (0, V.e)(),
        T = (0, p.uM)(),
        R = l.useCallback(
            (t) => {
                let n = (0, _.Tb)();
                t ? n.delete(i) : n.add(i),
                    S.$s.updateSetting(Array.from(n)),
                    a.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: c.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [i, e],
        );
    function G(t, e) {
        a.default.track(A.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    }
    let f = u ? I.intl.string(I.t.PMsfcH) : I.intl.string(I.t.RAQUSN);
    return (0, n.jsx)(g.h, {
        children:
            "0" === i
                ? (0, n.jsx)(E.Ay, {
                      title: f,
                      note: u ? I.intl.string(I.t.XXGmuB) : I.intl.string(I.t.wbYDfT),
                      value: !d,
                      onChange: (t) => {
                          var e;
                          (e = !t),
                              (0, j.O)({
                                  header: I.intl.string(I.t["uUr+GR"]),
                                  body: I.intl.string(I.t.hjGJBp),
                                  confirmText: I.intl.string(I.t.gm1Vej),
                                  cancelText: I.intl.string(I.t.p89ACt),
                                  confirmButtonColor: h.$n.Colors.BRAND,
                                  onConfirm: () => {
                                      S.n6.updateSetting(e), G(e, !1);
                                  },
                                  onCancel: () => {
                                      S.n6.updateSetting(e), S.$s.updateSetting(e ? m.A.getGuildIds() : []), G(e, !0);
                                  },
                              });
                      },
                      disabled: T,
                      tooltipText: T ? I.intl.string(L.default["6Af/cw"]) : void 0,
                  })
                : (0, n.jsx)(E.Ay, {
                      title: f,
                      note: r ? I.intl.string(I.t.V0ka0Q) : u ? I.intl.string(I.t.F9WY3f) : I.intl.string(I.t.G7c3Xo),
                      value: !s,
                      onChange: R,
                  }),
    });
}
function Y(t) {
    let { ingress: e = T.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, o.Tx)();
    return (0, n.jsx)(v, { ingress: e, guildId: i ?? l });
}
var k = i(139716),
    D = i(847599),
    b = i(152076);
function M(t) {
    let { ingress: e, guildId: i } = t,
        r = (0, o.q9)(),
        s = (0, U.K)(),
        d = S.$s.useSetting().includes(i),
        T = (0, p.uM)(),
        R = S.YX.useSetting(),
        G = S.Zr.useSetting().includes(i),
        f = l.useCallback(
            (t) => {
                let n = (0, _.xo)();
                t ? n.delete(i) : n.add(i),
                    S.Zr.updateSetting(Array.from(n)),
                    a.default.track(A.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: c.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [e, i],
        );
    function C(t, e) {
        a.default.track(A.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    }
    function x(t, e) {
        var i;
        !t && (0, b.w)()
            ? k.A.showAgeVerificationGetStartedModal({ entryPoint: D.q1.MESSAGE_REQUESTS_SETTINGS })
            : e
              ? f(t)
              : ((i = !t),
                (0, j.O)({
                    header: I.intl.string(I.t.yAfu1p),
                    body: I.intl.string(I.t.Ry2z74),
                    confirmText: I.intl.string(I.t.gm1Vej),
                    cancelText: I.intl.string(I.t.p89ACt),
                    confirmButtonColor: h.$n.Colors.BRAND,
                    onConfirm: () => {
                        S.YX.updateSetting(i), C(i, !1);
                    },
                    onCancel: () => {
                        S.YX.updateSetting(i), S.Zr.updateSetting(i ? m.A.getGuildIds() : []), C(i, !0);
                    },
                }));
    }
    return (0, n.jsx)(g.h, {
        children:
            "0" === i
                ? (0, n.jsx)(E.Ay, {
                      title: I.intl.string(I.t["3o2ojh"]),
                      value: !s && !R,
                      onChange: (t) => x(t, !1),
                      disabled: s || T,
                      tooltipText: T ? I.intl.string(L.default["6Af/cw"]) : void 0,
                      note: I.intl.format(I.t.wkm9a3, { helpdeskArticle: u.A.getArticleURL(A.MVz.MESSAGE_REQUESTS) }),
                  })
                : (0, n.jsx)(E.Ay, {
                      title: I.intl.string(I.t["3o2ojh"]),
                      value: !d && !G,
                      onChange: (t) => x(t, !0),
                      disabled: d,
                      note: r
                          ? I.intl.format(I.t.WpnWLc, { helpdeskArticle: u.A.getArticleURL(A.MVz.MESSAGE_REQUESTS) })
                          : I.intl.format(I.t.wkm9a3, { helpdeskArticle: u.A.getArticleURL(A.MVz.MESSAGE_REQUESTS) }),
                  }),
    });
}
function N(t) {
    let { ingress: e = T.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, o.Tx)();
    return (0, n.jsx)(M, { ingress: e, guildId: i ?? l });
}
function y(t) {
    let { guildId: e } = t;
    return (0, n.jsxs)(d.A, {
        children: [
            (0, n.jsx)(Y, { ingress: T.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(N, { ingress: T.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(x, { ingress: T.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(G, { ingress: T.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(s.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: I.intl.format(I.t.LNsV04, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function O(t) {
    let { guild: e, transitionState: i, onClose: l } = t,
        s = `${I.intl.string(I.t.BayiAo)}—${null != e ? e.name : "??"}`;
    return (0, n.jsx)(r.Modal, {
        transitionState: i,
        size: "sm",
        title: s,
        actions: [{ onClick: () => l(), variant: "primary", text: I.intl.string(I.t.i4jeWR) }],
        onClose: () => Promise.resolve(l()),
        children: (0, n.jsx)(y, { guildId: e.id }),
    });
}
