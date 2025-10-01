n.d(i, { default: () => Z }), n(388685);
var l = n(951288),
    e = n(647438),
    r = n(793030),
    a = n(399606),
    u = n(493773),
    o = n(100527),
    s = n(906732),
    d = n(314897),
    _ = n(271383),
    c = n(430824),
    f = n(626135),
    g = n(715903),
    A = n(295474),
    P = n(273504),
    E = n(981631),
    M = n(372897),
    O = n(388032);
function Z(t) {
    var i;
    let { onClose: n, transitionState: Z, guildId: h } = t,
        k = (0, a.e7)([d.default], () => d.default.getId()),
        p = (0, a.e7)([_.ZP], () => _.ZP.getMember(h, k), [h, k]),
        N = (0, a.e7)([c.Z], () => c.Z.getGuild(h), [h]),
        T = null != (i = null == N ? void 0 : N.name) ? i : "",
        D = (0, g.no)(p),
        { analyticsLocations: I } = (0, s.ZP)(o.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [R, S] = (0, A.ww)({
            guildId: h,
            analyticsLocations: I,
        }),
        U = D.has(M.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)
            ? O.intl.formatToPlainString(O.t.Oh20JS, { guildName: T })
            : O.intl.formatToPlainString(O.t["+VAZ/f"], { guildName: T });
    S || (U = O.intl.formatToPlainString(O.t.tcrtMD, { guildName: T }));
    let m = S ? O.intl.string(O.t.Viksoq) : O.intl.string(O.t.WikgZ2);
    return ((0, u.ZP)(() => {
        f.default.track(E.rMx.OPEN_MODAL, {
            type: P.dc,
            guild_id: h,
            other_user_id: k,
        });
    }),
    e.useEffect(() => {
        if (null == N) return void n();
    }, [N, n]),
    null == N)
        ? null
        : (0, l.jsx)(r.Modal, {
              transitionState: Z,
              onClose: n,
              title: O.intl.string(O.t["P+6K9P"]),
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
