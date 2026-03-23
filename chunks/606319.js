i.d(e, { A: () => x });
var n = i(627968),
    l = i(64700),
    r = i(421380),
    s = i(171316),
    d = i(71393),
    a = i(954571),
    u = i(115063),
    o = i(762183),
    S = i(253932),
    A = i(445176),
    g = i(112469),
    _ = i(106148),
    E = i(650832),
    c = i(137675),
    T = i(542457),
    R = i(355097);
i(927693);
var f = i(652215),
    I = i(985018),
    C = i(842130);
function G(t) {
    let { ingress: e, guildId: i } = t,
        R = (0, g.q9)(),
        G = S.$s.useSetting().includes(i),
        x = (0, o.K)(),
        p = (0, A.e)(),
        h = (0, s.uM)(),
        U = l.useCallback(
            (t) => {
                let n = (0, u.Tb)();
                t ? n.delete(i) : n.add(i),
                    S.$s.updateSetting(Array.from(n)),
                    a.default.track(f.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: T.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: e,
                        guild_id: i,
                    });
            },
            [i, e],
        );
    function V(t, e) {
        a.default.track(f.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: t,
            applied_to_existing_guilds: e,
        });
    }
    let j = p ? I.intl.string(I.t.PMsfcH) : I.intl.string(I.t.RAQUSN);
    return (0, n.jsx)(_.h, {
        children:
            "0" === i
                ? (0, n.jsx)(E.Ay, {
                      title: j,
                      note: p ? I.intl.string(I.t.XXGmuB) : I.intl.string(I.t.wbYDfT),
                      value: !x,
                      onChange: (t) => {
                          var e;
                          (e = !t),
                              (0, c.O)({
                                  header: I.intl.string(I.t["uUr+GR"]),
                                  body: I.intl.string(I.t.hjGJBp),
                                  confirmText: I.intl.string(I.t.gm1Vej),
                                  cancelText: I.intl.string(I.t.p89ACt),
                                  confirmButtonColor: r.$n.Colors.BRAND,
                                  onConfirm: () => {
                                      S.n6.updateSetting(e), V(e, !1);
                                  },
                                  onCancel: () => {
                                      S.n6.updateSetting(e), S.$s.updateSetting(e ? d.A.getGuildIds() : []), V(e, !0);
                                  },
                              });
                      },
                      disabled: h,
                      tooltipText: h ? I.intl.string(C.default["6Af/cw"]) : void 0,
                  })
                : (0, n.jsx)(E.Ay, {
                      title: j,
                      note: R ? I.intl.string(I.t.V0ka0Q) : p ? I.intl.string(I.t.F9WY3f) : I.intl.string(I.t.G7c3Xo),
                      value: !G,
                      onChange: U,
                  }),
    });
}
function x(t) {
    let { ingress: e = R.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: i } = t,
        l = (0, g.Tx)();
    return (0, n.jsx)(G, { ingress: e, guildId: i ?? l });
}
