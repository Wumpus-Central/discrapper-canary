n.d(t, { KK: () => h, NZ: () => F, gr: () => D, lH: () => S, uM: () => N, xs: () => x });
var i = n(64700),
    l = n(17928),
    r = n(873298),
    o = n(444802),
    d = n(381689),
    s = n(389462),
    u = n(115063),
    a = n(899847),
    C = n(842144),
    c = n(704724),
    g = n(500470),
    m = n(834981),
    p = n(835002);
let x = () => {
        let e = (0, g.x)(),
            t = s.p7.useControlledSetting(e?.id);
        return null == e
            ? null
            : {
                  explicitContentNonFriendDm: (0, c.J6)({ teenId: e?.id, setting: t?.explicitContentNonFriendDm }),
                  explicitContentFriendDm: (0, c.J6)({
                      teenId: e?.id,
                      setting: t?.explicitContentFriendDm,
                      isFriend: !0,
                  }),
                  explicitContentGuilds: r.TO.BLUR,
              };
    },
    D = () => {
        let e = (0, g.x)(),
            t = s.oQ.useControlledSetting(e?.id);
        if (null == e) return null;
        let { goreContentNonFriendDm: n, goreContentFriendDm: i } = t ?? {};
        return {
            goreContentNonFriendDm: (0, c.ky)(n) ? n : (0, o.jj)({ isDm: !0 }),
            goreContentFriendDm: (0, c.ky)(i) ? i : (0, o.jj)({ isDm: !0, isFriend: !0 }),
            goreContentGuilds: r.TO.BLUR,
        };
    },
    h = () => {
        let e = (0, g.x)(),
            t = s.qz.useControlledSetting(e?.id),
            n = s.yr.useControlledSetting(e?.id);
        return null != n ? n : !!t || t;
    };
function F() {
    let e = (0, g.x)(),
        t = s.up.useControlledSetting(e?.id),
        n = i.useMemo(() => (0, u.Lx)(t), [t]);
    return n.mutualGuilds && !n.all;
}
function N() {
    return (0, m.Du)();
}
function S(e) {
    let t, n;
    return {
        hasConsented: ((t = (0, g.k)()), (0, l.bG)([C.A], () => C.A.hasConsented(t, e))),
        updateConsent:
            ((n = (0, g.k)()),
            i.useCallback(
                async (t) => {
                    if (null != n)
                        try {
                            await a.Ay.updateTeenConsents(n, t ? [e] : [], t ? [] : [e]);
                        } catch (e) {
                            d.A.showFailedToast(p.OB.GENERIC_ERROR);
                        }
                },
                [n, e],
            )),
    };
}
