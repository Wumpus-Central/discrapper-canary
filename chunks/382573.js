n.d(e, { default: () => w });
var i = n(627968),
    l = n(64700),
    r = n(189213),
    s = n(834730),
    d = n(365982);
function u(t) {
    let { children: e } = t;
    return (0, i.jsx)("div", { className: d.y, children: e });
}
var a = n(174459),
    o = n(975571),
    S = n(115063),
    c = n(885386),
    g = n(556534),
    _ = n(464946),
    A = n(750994),
    E = n(355097),
    T = n(954225),
    f = n(652215),
    R = n(375708);
function I(t) {
    let { ingress: e, guildId: n } = t,
        r = c.pE.useSetting().includes(n),
        s = l.useCallback(
            (t) => {
                let i = (0, S.CN)();
                t ? i.delete(n) : i.add(n),
                    c.pE.updateSetting([...i]),
                    a.default.track(f.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: T.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                        ingress: e,
                        guild_id: n,
                    });
            },
            [e, n],
        );
    return "0" === n
        ? null
        : (0, i.jsx)(_.h, {
              children: (0, i.jsx)(A.Ay, {
                  title: R.intl.string(R.t["T+nevN"]),
                  value: !r,
                  onChange: s,
                  note: R.intl.format(R.t.jXKQCu, {
                      helpdeskArticle: o.A.getArticleURL(f.MVz.ACTIVITY_STATUS_SETTINGS),
                  }),
              }),
          });
}
function C(t) {
    let { ingress: e = E.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = t,
        l = (0, g.Tx)();
    return (0, i.jsx)(I, { ingress: e, guildId: n ?? l });
}
var G = n(395277);
function x(t) {
    let { ingress: e, guildId: n } = t,
        r = c.JG.useSetting().includes(n),
        s = l.useCallback(
            (t) => {
                let i = (0, S.Kk)();
                t ? i.delete(n) : i.add(n),
                    c.JG.updateSetting([...i]),
                    a.default.track(f.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: T.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                        ingress: e,
                        guild_id: n,
                    });
            },
            [e, n],
        );
    return "0" === n
        ? null
        : (0, i.jsx)(_.h, {
              children: (0, i.jsx)(A.Ay, {
                  title: R.intl.string(G.default.WhdCGP),
                  value: !r,
                  onChange: s,
                  note: R.intl.string(G.default.UQ9RHJ),
              }),
          });
}
function p(t) {
    let { ingress: e = E.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = t,
        l = (0, g.Tx)();
    return (0, i.jsx)(x, { ingress: e, guildId: n ?? l });
}
var h = n(862482),
    U = n(171316),
    V = n(71393),
    j = n(307863),
    m = n(428031),
    k = n(972737),
    Y = n(602339);
function L(t) {
    let { ingress: e, guildId: n } = t,
        r = (0, g.q9)(),
        s = c.$s.useSetting().includes(n),
        d = (0, m.K)(),
        u = (0, j.e)(),
        o = (0, U.uM)(),
        E = l.useCallback(
            (t) => {
                let i = (0, S.Tb)();
                t ? i.delete(n) : i.add(n),
                    c.$s.updateSetting(Array.from(i)),
                    a.default.track(f.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: T.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: e,
                        guild_id: n,
                    });
            },
            [n, e],
        );
    function I(t, e) {
        a.default.track(f.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    }
    let C = u ? R.intl.string(R.t.PMsfcH) : R.intl.string(R.t.RAQUSN);
    return (0, i.jsx)(_.h, {
        children:
            "0" === n
                ? (0, i.jsx)(A.Ay, {
                      title: C,
                      note: u ? R.intl.string(R.t.XXGmuB) : R.intl.string(R.t.wbYDfT),
                      value: !d,
                      onChange: function (t) {
                          var e;
                          (e = !t),
                              (0, k.O)({
                                  header: R.intl.string(R.t["uUr+GR"]),
                                  body: R.intl.string(R.t.hjGJBp),
                                  confirmText: R.intl.string(R.t.gm1Vej),
                                  cancelText: R.intl.string(R.t.p89ACt),
                                  confirmButtonColor: h.$n.Colors.BRAND,
                                  onConfirm: function () {
                                      c.n6.updateSetting(e), I(e, !1);
                                  },
                                  onCancel: function () {
                                      c.n6.updateSetting(e), c.$s.updateSetting(e ? V.A.getGuildIds() : []), I(e, !0);
                                  },
                              });
                      },
                      disabled: o,
                      tooltipText: o ? R.intl.string(Y.default["6Af/cw"]) : void 0,
                  })
                : (0, i.jsx)(A.Ay, {
                      title: C,
                      note: r ? R.intl.string(R.t.V0ka0Q) : u ? R.intl.string(R.t.F9WY3f) : R.intl.string(R.t.G7c3Xo),
                      value: !s,
                      onChange: E,
                  }),
    });
}
function N(t) {
    let { ingress: e = E.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = t,
        l = (0, g.Tx)();
    return (0, i.jsx)(L, { ingress: e, guildId: n ?? l });
}
var b = n(139716),
    M = n(847599),
    v = n(953298);
function D(t) {
    let { ingress: e, guildId: n } = t,
        r = (0, g.q9)(),
        s = (0, m.K)(),
        d = c.$s.useSetting().includes(n),
        u = (0, U.uM)(),
        E = c.YX.useSetting(),
        I = c.Zr.useSetting().includes(n),
        C = l.useCallback(
            (t) => {
                let i = (0, S.xo)();
                t ? i.delete(n) : i.add(n),
                    c.Zr.updateSetting(Array.from(i)),
                    a.default.track(f.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: T.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: e,
                        guild_id: n,
                    });
            },
            [e, n],
        );
    function G(t, e) {
        a.default.track(f.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    }
    function x(t, e) {
        var n;
        !t && (0, v.w)()
            ? b.A.showAgeVerificationGetStartedModal({ entryPoint: M.q1.MESSAGE_REQUESTS_SETTINGS })
            : e
              ? C(t)
              : ((n = !t),
                (0, k.O)({
                    header: R.intl.string(R.t.yAfu1p),
                    body: R.intl.string(R.t.Ry2z74),
                    confirmText: R.intl.string(R.t.gm1Vej),
                    cancelText: R.intl.string(R.t.p89ACt),
                    confirmButtonColor: h.$n.Colors.BRAND,
                    onConfirm: function () {
                        c.YX.updateSetting(n), G(n, !1);
                    },
                    onCancel: function () {
                        c.YX.updateSetting(n), c.Zr.updateSetting(n ? V.A.getGuildIds() : []), G(n, !0);
                    },
                }));
    }
    return (0, i.jsx)(_.h, {
        children:
            "0" === n
                ? (0, i.jsx)(A.Ay, {
                      title: R.intl.string(R.t["3o2ojh"]),
                      value: !s && !E,
                      onChange: (t) => x(t, !1),
                      disabled: s || u,
                      tooltipText: u ? R.intl.string(Y.default["6Af/cw"]) : void 0,
                      note: R.intl.format(R.t.wkm9a3, { helpdeskArticle: o.A.getArticleURL(f.MVz.MESSAGE_REQUESTS) }),
                  })
                : (0, i.jsx)(A.Ay, {
                      title: R.intl.string(R.t["3o2ojh"]),
                      value: !d && !I,
                      onChange: (t) => x(t, !0),
                      disabled: d,
                      note: r
                          ? R.intl.format(R.t.WpnWLc, { helpdeskArticle: o.A.getArticleURL(f.MVz.MESSAGE_REQUESTS) })
                          : R.intl.format(R.t.wkm9a3, { helpdeskArticle: o.A.getArticleURL(f.MVz.MESSAGE_REQUESTS) }),
                  }),
    });
}
function y(t) {
    let { ingress: e = E.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = t,
        l = (0, g.Tx)();
    return (0, i.jsx)(D, { ingress: e, guildId: n ?? l });
}
function P(t) {
    let { guildId: e } = t;
    return (0, i.jsxs)(u, {
        children: [
            (0, i.jsx)(N, { ingress: E.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, i.jsx)(y, { ingress: E.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, i.jsx)(p, { ingress: E.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, i.jsx)(C, { ingress: E.bf.SERVER_PRIVACY_MODAL, guildId: e }),
            (0, i.jsx)(s.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: R.intl.format(R.t.LNsV04, {
                    policyLink: "https://discord.com/safety/360043709612-our-policies",
                }),
            }),
        ],
    });
}
function w(t) {
    let { guild: e, transitionState: n, onClose: l } = t,
        s = `${R.intl.string(R.t.BayiAo)}\u{2014}${null != e ? e.name : "??"}`;
    return (0, i.jsx)(r.Modal, {
        transitionState: n,
        size: "sm",
        title: s,
        actions: [{ onClick: () => l(), variant: "primary", text: R.intl.string(R.t.i4jeWR) }],
        onClose: () => Promise.resolve(l()),
        children: (0, i.jsx)(P, { guildId: e.id }),
    });
}
