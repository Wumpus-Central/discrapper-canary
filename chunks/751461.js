n.d(t, {
    A: () => I,
});
var r = n(627968),
    i = n(64700),
    l = n(421380),
    s = n(171316),
    a = n(71393),
    o = n(954571),
    c = n(115063),
    d = n(762183),
    u = n(253932),
    _ = n(445176),
    p = n(112469),
    m = n(871930),
    g = n(578746),
    A = n(997913),
    f = n(542457),
    h = n(355097),
    b = n(531525);
n(820575);
var E = n(652215),
    x = n(985018),
    O = n(842130);

function C(e) {
    let { ingress: t, guildId: n } = e,
        h = (0, p.q9)(),
        C = u.$s.useSetting().includes(n),
        I = (0, d.K)(),
        T = (0, _.e)(),
        S = (0, s.uM)(),
        j = i.useCallback(
            (e) => {
                let r = (0, c.Tb)();
                e ? r.delete(n) : r.add(n),
                    u.$s.updateSetting(Array.from(r)),
                    o.default.track(E.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: f.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [n, t],
        );

    function v(e, t) {
        o.default.track(E.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    }
    let N = T ? x.intl.string(x.t.PMsfcH) : x.intl.string(x.t.RAQUSN);
    return (0, r.jsx)(m.h, {
        setting: b.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            "0" === n
                ? (0, r.jsx)(g.Ay, {
                      title: N,
                      note: T ? x.intl.string(x.t.XXGmuB) : x.intl.string(x.t.wbYDfT),
                      value: !I,
                      onChange: (e) => {
                          var t;
                          (t = !e),
                              (0, A.O)({
                                  header: x.intl.string(x.t["uUr+GR"]),
                                  body: x.intl.string(x.t.hjGJBp),
                                  confirmText: x.intl.string(x.t.gm1Vej),
                                  cancelText: x.intl.string(x.t.p89ACt),
                                  confirmButtonColor: l.$n.Colors.BRAND,
                                  onConfirm: () => {
                                      u.n6.updateSetting(t), v(t, !1);
                                  },
                                  onCancel: () => {
                                      u.n6.updateSetting(t), u.$s.updateSetting(t ? a.A.getGuildIds() : []), v(t, !0);
                                  },
                              });
                      },
                      disabled: S,
                      tooltipText: S ? x.intl.string(O.default["6Af/cw"]) : void 0,
                  })
                : (0, r.jsx)(g.Ay, {
                      title: N,
                      note: h ? x.intl.string(x.t.V0ka0Q) : T ? x.intl.string(x.t.F9WY3f) : x.intl.string(x.t.G7c3Xo),
                      value: !C,
                      onChange: j,
                  }),
    });
}

function I(e) {
    let { ingress: t = h.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, p.Tx)();
    return (0, r.jsx)(C, {
        ingress: t,
        guildId: null != n ? n : i,
    });
}
