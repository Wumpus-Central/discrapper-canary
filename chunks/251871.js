n.d(i, { default: () => E }), n(388685);
var l = n(951288),
    e = n(647438),
    a = n(399606),
    r = n(82659),
    o = n(493773),
    u = n(100527),
    s = n(906732),
    d = n(314897),
    c = n(271383),
    _ = n(430824),
    f = n(626135),
    g = n(715903),
    A = n(295474),
    P = n(273504),
    k = n(981631),
    h = n(372897),
    p = n(388032);
function E(t) {
    var i;
    let { onClose: n, transitionState: E, guildId: M } = t,
        O = (0, a.e7)([d.default], () => d.default.getId()),
        Z = (0, a.e7)([c.ZP], () => c.ZP.getMember(M, O), [M, O]),
        N = (0, a.e7)([_.Z], () => _.Z.getGuild(M), [M]),
        T = null != (i = null == N ? void 0 : N.name) ? i : "",
        D = (0, g.no)(Z),
        { analyticsLocations: I } = (0, s.ZP)(u.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [R, S] = (0, A.ww)({
            guildId: M,
            analyticsLocations: I,
            openWithoutBackstack: !0,
        }),
        U = D.has(h.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)
            ? p.intl.formatToPlainString(p.t.Oh20JS, { guildName: T })
            : p.intl.formatToPlainString(p.t["+VAZ/f"], { guildName: T });
    S || (U = p.intl.formatToPlainString(p.t.tcrtMD, { guildName: T }));
    let m = S ? p.intl.string(p.t.Viksoq) : p.intl.string(p.t.WikgZ2);
    return ((0, o.ZP)(() => {
        f.default.track(k.rMx.OPEN_MODAL, {
            type: P.dc,
            guild_id: M,
            other_user_id: O,
        });
    }),
    e.useEffect(() => {
        if (null == N) return void n();
    }, [N, n]),
    null == N)
        ? null
        : (0, l.jsx)(r.Modal, {
              transitionState: E,
              onClose: n,
              title: p.intl.string(p.t["P+6K9P"]),
              subtitle: U,
              actions: [
                  {
                      text: m,
                      onClick: () => {
                          R(), n();
                      },
                  },
              ],
          });
}
