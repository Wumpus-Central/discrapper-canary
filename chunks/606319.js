i.d(e, { A: () => x });
var n = i(627968),
    l = i(64700),
    r = i(862482),
    s = i(171316),
    d = i(71393),
    a = i(954571),
    u = i(115063),
    _ = i(762183),
    S = i(253932),
    o = i(445176),
    g = i(112469),
    E = i(106148),
    A = i(650832),
    c = i(137675),
    T = i(542457),
    I = i(355097);
i(927693);
var R = i(652215),
    G = i(985018),
    f = i(602339);
function C(t) {
    let { ingress: e, guildId: i } = t,
        I = (0, g.q9)(),
        C = S.$s.useSetting().includes(i),
        x = (0, _.K)(),
        h = (0, o.e)(),
        p = (0, s.uM)(),
        m = l.useCallback(
            (t) => {
                let n = (0, u.Tb)();
                t ? n.delete(i) : n.add(i),
                    S.$s.updateSetting(Array.from(n)),
                    a.default.track(R.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: T.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [i, e],
        );
    function U(t, e) {
        a.default.track(R.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    }
    let v = h ? G.intl.string(G.t.PMsfcH) : G.intl.string(G.t.RAQUSN);
    return (0, n.jsx)(E.h, {
        children:
            "0" === i
                ? (0, n.jsx)(A.Ay, {
                      title: v,
                      note: h ? G.intl.string(G.t.XXGmuB) : G.intl.string(G.t.wbYDfT),
                      value: !x,
                      onChange: (t) => {
                          var e;
                          (e = !t),
                              (0, c.O)({
                                  header: G.intl.string(G.t["uUr+GR"]),
                                  body: G.intl.string(G.t.hjGJBp),
                                  confirmText: G.intl.string(G.t.gm1Vej),
                                  cancelText: G.intl.string(G.t.p89ACt),
                                  confirmButtonColor: r.$n.Colors.BRAND,
                                  onConfirm: () => {
                                      S.n6.updateSetting(e), U(e, !1);
                                  },
                                  onCancel: () => {
                                      S.n6.updateSetting(e), S.$s.updateSetting(e ? d.A.getGuildIds() : []), U(e, !0);
                                  },
                              });
                      },
                      disabled: p,
                      tooltipText: p ? G.intl.string(f.default["6Af/cw"]) : void 0,
                  })
                : (0, n.jsx)(A.Ay, {
                      title: v,
                      note: I ? G.intl.string(G.t.V0ka0Q) : h ? G.intl.string(G.t.F9WY3f) : G.intl.string(G.t.G7c3Xo),
                      value: !C,
                      onChange: m,
                  }),
    });
}
function x(t) {
    let { ingress: e = I.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, g.Tx)();
    return (0, n.jsx)(C, { ingress: e, guildId: i ?? l });
}
