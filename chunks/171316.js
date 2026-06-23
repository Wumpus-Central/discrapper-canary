n.d(e, { KK: () => D, NZ: () => h, gr: () => x, lH: () => T, uM: () => F, xs: () => f });
var r = n(64700),
    i = n(17928),
    l = n(873298),
    o = n(444802),
    u = n(381689),
    d = n(389462),
    s = n(115063),
    c = n(899847),
    a = n(842144),
    C = n(704724),
    p = n(500470),
    m = n(834981),
    g = n(835002);
function f() {
    let t = (0, p.x)(),
        e = d.p7.useControlledSetting(t?.id);
    return null == t
        ? null
        : {
              explicitContentNonFriendDm: (0, C.J6)({ teenId: t?.id, setting: e?.explicitContentNonFriendDm }),
              explicitContentFriendDm: (0, C.J6)({ teenId: t?.id, setting: e?.explicitContentFriendDm, isFriend: !0 }),
              explicitContentGuilds: l.TO.BLUR,
          };
}
function x() {
    let t = (0, p.x)(),
        e = d.oQ.useControlledSetting(t?.id);
    if (null == t) return null;
    let { goreContentNonFriendDm: n, goreContentFriendDm: r } = e ?? {};
    return {
        goreContentNonFriendDm: (0, C.ky)(n) ? n : (0, o.jj)({ isDm: !0 }),
        goreContentFriendDm: (0, C.ky)(r) ? r : (0, o.jj)({ isDm: !0, isFriend: !0 }),
        goreContentGuilds: l.TO.BLUR,
    };
}
function D() {
    let t = (0, p.x)(),
        e = d.qz.useControlledSetting(t?.id),
        n = d.yr.useControlledSetting(t?.id);
    return null != n ? n : !!e || e;
}
function h() {
    let t = (0, p.x)(),
        e = d.up.useControlledSetting(t?.id),
        n = r.useMemo(() => (0, s.Lx)(e), [e]);
    return n.mutualGuilds && !n.all;
}
function F() {
    return (0, m.Du)();
}
function T(t) {
    let e, n;
    return {
        hasConsented: ((e = (0, p.k)()), (0, i.bG)([a.A], () => a.A.hasConsented(e, t))),
        updateConsent:
            ((n = (0, p.k)()),
            r.useCallback(
                async (e) => {
                    if (null != n)
                        try {
                            await c.Ay.updateTeenConsents(n, e ? [t] : [], e ? [] : [t]);
                        } catch (t) {
                            u.A.showFailedToast(g.OB.GENERIC_ERROR);
                        }
                },
                [n, t],
            )),
    };
}
