n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    r = n(421380),
    a = n(171316),
    l = n(71393),
    o = n(954571),
    c = n(115063),
    d = n(762183),
    u = n(253932),
    _ = n(445176),
    m = n(112469),
    A = n(871930),
    g = n(578746),
    E = n(997913),
    h = n(542457),
    p = n(355097),
    C = n(531525);
n(820575);
var x = n(652215),
    T = n(985018),
    I = n(842130);
function S(e) {
    let { ingress: t, guildId: n } = e,
        p = (0, m.q9)(),
        S = u.$s.useSetting().includes(n),
        f = (0, d.K)(),
        N = (0, _.e)(),
        b = (0, a.uM)(),
        R = s.useCallback(
            (e) => {
                let i = (0, c.Tb)();
                e ? i.delete(n) : i.add(n),
                    u.$s.updateSetting(Array.from(i)),
                    o.default.track(x.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: h.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [n, t],
        );
    function v(e, t) {
        o.default.track(x.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    }
    let O = N ? T.intl.string(T.t.PMsfcH) : T.intl.string(T.t.RAQUSN);
    return (0, i.jsx)(A.h, {
        setting: C.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            "0" === n
                ? (0, i.jsx)(g.Ay, {
                      title: O,
                      note: N ? T.intl.string(T.t.XXGmuB) : T.intl.string(T.t.wbYDfT),
                      value: !f,
                      onChange: (e) => {
                          var t;
                          (t = !e),
                              (0, E.O)({
                                  header: T.intl.string(T.t["uUr+GR"]),
                                  body: T.intl.string(T.t.hjGJBp),
                                  confirmText: T.intl.string(T.t.gm1Vej),
                                  cancelText: T.intl.string(T.t.p89ACt),
                                  confirmButtonColor: r.$n.Colors.BRAND,
                                  onConfirm: () => {
                                      u.n6.updateSetting(t), v(t, !1);
                                  },
                                  onCancel: () => {
                                      u.n6.updateSetting(t), u.$s.updateSetting(t ? l.A.getGuildIds() : []), v(t, !0);
                                  },
                              });
                      },
                      disabled: b,
                      tooltipText: b ? T.intl.string(I.default["6Af/cw"]) : void 0,
                  })
                : (0, i.jsx)(g.Ay, {
                      title: O,
                      note: p ? T.intl.string(T.t.V0ka0Q) : N ? T.intl.string(T.t.F9WY3f) : T.intl.string(T.t.G7c3Xo),
                      value: !S,
                      onChange: R,
                  }),
    });
}
function f(e) {
    let { ingress: t = p.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        s = (0, m.Tx)();
    return (0, i.jsx)(S, { ingress: t, guildId: n ?? s });
}
