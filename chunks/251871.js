n.d(i, { default: () => O }), n(388685);
var l = n(54381),
    e = n(473749),
    r = n(793030),
    a = n(399606),
    o = n(493773),
    u = n(100527),
    s = n(906732),
    d = n(314897),
    _ = n(271383),
    c = n(430824),
    f = n(626135),
    g = n(715903),
    A = n(295474),
    E = n(273504),
    P = n(981631),
    Z = n(372897),
    M = n(388032);
function O(t) {
    var i;
    let { onClose: n, transitionState: O, guildId: h } = t,
        k = (0, a.e7)([d.default], () => d.default.getId()),
        p = (0, a.e7)([_.ZP], () => _.ZP.getMember(h, k), [h, k]),
        N = (0, a.e7)([c.Z], () => c.Z.getGuild(h), [h]),
        T = null != (i = null == N ? void 0 : N.name) ? i : "",
        C = (0, g.no)(p),
        { analyticsLocations: I } = (0, s.ZP)(u.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [R, S] = (0, A.ww)({
            guildId: h,
            analyticsLocations: I,
        }),
        U = C.has(Z.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)
            ? M.intl.formatToPlainString(M.t.Oh20JS, { guildName: T })
            : M.intl.formatToPlainString(M.t["+VAZ/Z"], { guildName: T });
    S || (U = M.intl.formatToPlainString(M.t.tcrtME, { guildName: T }));
    let m = S ? M.intl.string(M.t.Viksoo) : M.intl.string(M.t.WikgZ1);
    return ((0, o.ZP)(() => {
        f.default.track(P.rMx.OPEN_MODAL, {
            type: E.dc,
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
              transitionState: O,
              onClose: n,
              title: M.intl.string(M.t["P+6K9C"]),
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
