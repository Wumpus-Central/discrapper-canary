n.d(e, { A: () => m });
var i = n(627968),
    l = n(64700),
    r = n(421380),
    u = n(171316),
    d = n(71393),
    s = n(954571),
    a = n(115063),
    o = n(762183),
    c = n(253932),
    g = n(445176),
    S = n(112469),
    _ = n(106148),
    T = n(650832),
    A = n(137675),
    E = n(542457),
    f = n(355097);
n(927693);
var C = n(652215),
    G = n(985018),
    p = n(842130);
function I(t) {
    let { ingress: e, guildId: n } = t,
        f = (0, S.q9)(),
        I = c.$s.useSetting().includes(n),
        m = (0, o.K)(),
        x = (0, g.e)(),
        R = (0, u.uM)(),
        v = l.useCallback(
            (t) => {
                let i = (0, a.Tb)();
                t ? i.delete(n) : i.add(n),
                    c.$s.updateSetting(Array.from(i)),
                    s.default.track(C.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: E.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: e,
                        guild_id: n,
                    });
            },
            [n, e],
        );
    function h(t, e) {
        s.default.track(C.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    }
    let D = x ? G.intl.string(G.t.PMsfcH) : G.intl.string(G.t.RAQUSN);
    return (0, i.jsx)(_.h, {
        children:
            "0" === n
                ? (0, i.jsx)(T.Ay, {
                      title: D,
                      note: x ? G.intl.string(G.t.XXGmuB) : G.intl.string(G.t.wbYDfT),
                      value: !m,
                      onChange: (t) => {
                          var e;
                          (e = !t),
                              (0, A.O)({
                                  header: G.intl.string(G.t["uUr+GR"]),
                                  body: G.intl.string(G.t.hjGJBp),
                                  confirmText: G.intl.string(G.t.gm1Vej),
                                  cancelText: G.intl.string(G.t.p89ACt),
                                  confirmButtonColor: r.$n.Colors.BRAND,
                                  onConfirm: () => {
                                      c.n6.updateSetting(e), h(e, !1);
                                  },
                                  onCancel: () => {
                                      c.n6.updateSetting(e), c.$s.updateSetting(e ? d.A.getGuildIds() : []), h(e, !0);
                                  },
                              });
                      },
                      disabled: R,
                      tooltipText: R ? G.intl.string(p.default["6Af/cw"]) : void 0,
                  })
                : (0, i.jsx)(T.Ay, {
                      title: D,
                      note: f ? G.intl.string(G.t.V0ka0Q) : x ? G.intl.string(G.t.F9WY3f) : G.intl.string(G.t.G7c3Xo),
                      value: !I,
                      onChange: v,
                  }),
    });
}
function m(t) {
    let { ingress: e = f.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = t,
        l = (0, S.Tx)();
    return (0, i.jsx)(I, { ingress: e, guildId: n ?? l });
}
