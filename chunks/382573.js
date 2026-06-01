i.d(e, { default: () => w });
var n = i(627968),
    l = i(64700),
    r = i(189213),
    s = i(834730),
    d = i(365982);
function a(t) {
    let { children: e } = t;
    return (0, n.jsx)("div", { className: d.y, children: e });
}
var u = i(174459),
    o = i(975571),
    S = i(115063),
    g = i(885386),
    c = i(556534),
    _ = i(464946),
    A = i(750994),
    E = i(355097),
    T = i(954225),
    R = i(652215),
    f = i(375708);
function I(t) {
    let { ingress: e, guildId: i } = t,
        r = g.pE.useSetting().includes(i),
        s = l.useCallback(
            (t) => {
                let n = (0, S.CN)();
                t ? n.delete(i) : n.add(i),
                    g.pE.updateSetting([...n]),
                    u.default.track(R.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: T.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [e, i],
        );
    return "0" === i
        ? null
        : (0, n.jsx)(_.h, {
              children: (0, n.jsx)(A.Ay, {
                  title: f.intl.string(f.t["T+nevN"]),
                  value: !r,
                  onChange: s,
                  note: f.intl.format(f.t.jXKQCu, {
                      helpdeskArticle: o.A.getArticleURL(R.MVz.ACTIVITY_STATUS_SETTINGS),
                  }),
              }),
          });
}
function C(t) {
    let { ingress: e = E.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, c.Tx)();
    return (0, n.jsx)(I, { ingress: e, guildId: i ?? l });
}
var G = i(395277);
function x(t) {
    let { ingress: e, guildId: i } = t,
        r = g.JG.useSetting().includes(i),
        s = l.useCallback(
            (t) => {
                let n = (0, S.Kk)();
                t ? n.delete(i) : n.add(i),
                    g.JG.updateSetting([...n]),
                    u.default.track(R.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: T.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [e, i],
        );
    return "0" === i
        ? null
        : (0, n.jsx)(_.h, {
              children: (0, n.jsx)(A.Ay, {
                  title: f.intl.string(G.default.WhdCGP),
                  value: !r,
                  onChange: s,
                  note: f.intl.string(G.default.UQ9RHJ),
              }),
          });
}
function p(t) {
    let { ingress: e = E.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, c.Tx)();
    return (0, n.jsx)(x, { ingress: e, guildId: i ?? l });
}
var h = i(862482),
    U = i(171316),
    V = i(71393),
    j = i(307863),
    m = i(428031),
    k = i(972737),
    Y = i(602339);
function L(t) {
    let { ingress: e, guildId: i } = t,
        r = (0, c.q9)(),
        s = g.$s.useSetting().includes(i),
        d = (0, m.K)(),
        a = (0, j.e)(),
        o = (0, U.uM)(),
        E = l.useCallback(
            (t) => {
                let n = (0, S.Tb)();
                t ? n.delete(i) : n.add(i),
                    g.$s.updateSetting(Array.from(n)),
                    u.default.track(R.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: T.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [i, e],
        );
    function I(t, e) {
        u.default.track(R.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    }
    let C = a ? f.intl.string(f.t.PMsfcH) : f.intl.string(f.t.RAQUSN);
    return (0, n.jsx)(_.h, {
        children:
            "0" === i
                ? (0, n.jsx)(A.Ay, {
                      title: C,
                      note: a ? f.intl.string(f.t.XXGmuB) : f.intl.string(f.t.wbYDfT),
                      value: !d,
                      onChange: (t) => {
                          var e;
                          (e = !t),
                              (0, k.O)({
                                  header: f.intl.string(f.t["uUr+GR"]),
                                  body: f.intl.string(f.t.hjGJBp),
                                  confirmText: f.intl.string(f.t.gm1Vej),
                                  cancelText: f.intl.string(f.t.p89ACt),
                                  confirmButtonColor: h.$n.Colors.BRAND,
                                  onConfirm: () => {
                                      g.n6.updateSetting(e), I(e, !1);
                                  },
                                  onCancel: () => {
                                      g.n6.updateSetting(e), g.$s.updateSetting(e ? V.A.getGuildIds() : []), I(e, !0);
                                  },
                              });
                      },
                      disabled: o,
                      tooltipText: o ? f.intl.string(Y.default["6Af/cw"]) : void 0,
                  })
                : (0, n.jsx)(A.Ay, {
                      title: C,
                      note: r ? f.intl.string(f.t.V0ka0Q) : a ? f.intl.string(f.t.F9WY3f) : f.intl.string(f.t.G7c3Xo),
                      value: !s,
                      onChange: E,
                  }),
    });
}
function N(t) {
    let { ingress: e = E.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, c.Tx)();
    return (0, n.jsx)(L, { ingress: e, guildId: i ?? l });
}
var b = i(139716),
    M = i(847599),
    v = i(953298);
function D(t) {
    let { ingress: e, guildId: i } = t,
        r = (0, c.q9)(),
        s = (0, m.K)(),
        d = g.$s.useSetting().includes(i),
        a = (0, U.uM)(),
        E = g.YX.useSetting(),
        I = g.Zr.useSetting().includes(i),
        C = l.useCallback(
            (t) => {
                let n = (0, S.xo)();
                t ? n.delete(i) : n.add(i),
                    g.Zr.updateSetting(Array.from(n)),
                    u.default.track(R.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: T.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [e, i],
        );
    function G(t, e) {
        u.default.track(R.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    }
    function x(t, e) {
        var i;
        !t && (0, v.w)()
            ? b.A.showAgeVerificationGetStartedModal({ entryPoint: M.q1.MESSAGE_REQUESTS_SETTINGS })
            : e
              ? C(t)
              : ((i = !t),
                (0, k.O)({
                    header: f.intl.string(f.t.yAfu1p),
                    body: f.intl.string(f.t.Ry2z74),
                    confirmText: f.intl.string(f.t.gm1Vej),
                    cancelText: f.intl.string(f.t.p89ACt),
                    confirmButtonColor: h.$n.Colors.BRAND,
                    onConfirm: () => {
                        g.YX.updateSetting(i), G(i, !1);
                    },
                    onCancel: () => {
                        g.YX.updateSetting(i), g.Zr.updateSetting(i ? V.A.getGuildIds() : []), G(i, !0);
                    },
                }));
    }
    return (0, n.jsx)(_.h, {
        children:
            "0" === i
                ? (0, n.jsx)(A.Ay, {
                      title: f.intl.string(f.t["3o2ojh"]),
                      value: !s && !E,
                      onChange: (t) => x(t, !1),
                      disabled: s || a,
                      tooltipText: a ? f.intl.string(Y.default["6Af/cw"]) : void 0,
                      note: f.intl.format(f.t.wkm9a3, { helpdeskArticle: o.A.getArticleURL(R.MVz.MESSAGE_REQUESTS) }),
                  })
                : (0, n.jsx)(A.Ay, {
                      title: f.intl.string(f.t["3o2ojh"]),
                      value: !d && !I,
                      onChange: (t) => x(t, !0),
                      disabled: d,
                      note: r
                          ? f.intl.format(f.t.WpnWLc, { helpdeskArticle: o.A.getArticleURL(R.MVz.MESSAGE_REQUESTS) })
                          : f.intl.format(f.t.wkm9a3, { helpdeskArticle: o.A.getArticleURL(R.MVz.MESSAGE_REQUESTS) }),
                  }),
    });
}
function y(t) {
    let { ingress: e = E.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, c.Tx)();
    return (0, n.jsx)(D, { ingress: e, guildId: i ?? l });
}
function P(t) {
    let { guildId: e } = t;
    return (0, n.jsxs)(a, {
        children: [
            (0, n.jsx)(N, { ingress: E.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(y, { ingress: E.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(p, { ingress: E.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(C, { ingress: E.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, n.jsx)(s.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: f.intl.format(f.t.LNsV04, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function w(t) {
    let { guild: e, transitionState: i, onClose: l } = t,
        s = `${f.intl.string(f.t.BayiAo)}\u{2014}${null != e ? e.name : "??"}`;
    return (0, n.jsx)(r.Modal, {
        transitionState: i,
        size: "sm",
        title: s,
        actions: [{ onClick: () => l(), variant: "primary", text: f.intl.string(f.t.i4jeWR) }],
        onClose: () => Promise.resolve(l()),
        children: (0, n.jsx)(P, { guildId: e.id }),
    });
}
