n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    a = n(421380),
    s = n(171316),
    o = n(71393),
    l = n(954571),
    c = n(115063),
    u = n(762183),
    d = n(253932),
    f = n(445176),
    p = n(112469),
    _ = n(871930),
    h = n(578746),
    m = n(997913),
    g = n(542457),
    E = n(355097),
    b = n(531525);
n(820575);
var y = n(652215),
    O = n(985018),
    A = n(842130);
function v(e) {
    let { ingress: t, guildId: n } = e,
        E = (0, p.q9)(),
        v = d.$s.useSetting().includes(n),
        S = (0, u.K)(),
        I = (0, f.e)(),
        T = (0, s.uM)(),
        C = i.useCallback(
            (e) => {
                let r = (0, c.Tb)();
                e ? r.delete(n) : r.add(n),
                    d.$s.updateSetting(Array.from(r)),
                    l.default.track(y.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: g.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: t,
                        guild_id: n,
                    });
            },
            [n, t],
        );
    function N(e, t) {
        l.default.track(y.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    }
    let R = (e) => {
            w(!e);
        },
        w = (e) => {
            let t = () => {
                    d.n6.updateSetting(e), d.$s.updateSetting(e ? o.A.getGuildIds() : []), N(e, !0);
                },
                n = () => {
                    d.n6.updateSetting(e), N(e, !1);
                };
            (0, m.O)({
                header: O.intl.string(O.t["uUr+GR"]),
                body: O.intl.string(O.t.hjGJBp),
                confirmText: O.intl.string(O.t.gm1Vej),
                cancelText: O.intl.string(O.t.p89ACt),
                confirmButtonColor: a.$n.Colors.BRAND,
                onConfirm: n,
                onCancel: t,
            });
        },
        P = I ? O.intl.string(O.t.PMsfcH) : O.intl.string(O.t.RAQUSN);
    return (0, r.jsx)(_.h, {
        setting: b.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2,
        children:
            "0" === n
                ? (0, r.jsx)(h.Ay, {
                      title: P,
                      note: I ? O.intl.string(O.t.XXGmuB) : O.intl.string(O.t.wbYDfT),
                      value: !S,
                      onChange: R,
                      disabled: T,
                      tooltipText: T ? O.intl.string(A.default["6Af/cw"]) : void 0,
                  })
                : (0, r.jsx)(h.Ay, {
                      title: P,
                      note: E ? O.intl.string(O.t.V0ka0Q) : I ? O.intl.string(O.t.F9WY3f) : O.intl.string(O.t.G7c3Xo),
                      value: !v,
                      onChange: C,
                  }),
    });
}
function S(e) {
    let { ingress: t = E.bf.USER_SETTINGS_PRIVACY_SAFETY, guildId: n } = e,
        i = (0, p.Tx)();
    return (0, r.jsx)(v, {
        ingress: t,
        guildId: null != n ? n : i,
    });
}
