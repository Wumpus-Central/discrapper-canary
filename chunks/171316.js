n.d(t, { KK: () => p, NZ: () => C, gr: () => h, lH: () => T, uM: () => x, xs: () => E });
var i = n(64700),
    s = n(311907),
    r = n(873298),
    a = n(444802),
    l = n(662502),
    o = n(93857),
    c = n(115063),
    d = n(899847),
    u = n(842144),
    _ = n(704724),
    m = n(500470),
    A = n(834981),
    g = n(835002);
let E = () => {
        let e = (0, m.x)(),
            t = o.p7.useControlledSetting(e?.id);
        return null == e
            ? null
            : {
                  explicitContentNonFriendDm: (0, _.J6)({ teenId: e?.id, setting: t?.explicitContentNonFriendDm }),
                  explicitContentFriendDm: (0, _.J6)({
                      teenId: e?.id,
                      setting: t?.explicitContentFriendDm,
                      isFriend: !0,
                  }),
                  explicitContentGuilds: r.TO.BLUR,
              };
    },
    h = () => {
        let e = (0, m.x)(),
            t = o.oQ.useControlledSetting(e?.id);
        if (null == e) return null;
        let { goreContentNonFriendDm: n, goreContentFriendDm: i } = t ?? {};
        return {
            goreContentNonFriendDm: (0, _.ky)(n) ? n : (0, a.jj)({ isDm: !0 }),
            goreContentFriendDm: (0, _.ky)(i) ? i : (0, a.jj)({ isDm: !0, isFriend: !0 }),
            goreContentGuilds: r.TO.BLUR,
        };
    },
    p = () => {
        let e = (0, m.x)(),
            t = o.qz.useControlledSetting(e?.id),
            n = o.yr.useControlledSetting(e?.id);
        return null != n ? n : !!t || t;
    };
function C() {
    let e = (0, m.x)(),
        t = o.up.useControlledSetting(e?.id),
        n = i.useMemo(() => (0, c.Lx)(t), [t]);
    return n.mutualGuilds && !n.all;
}
function x() {
    return (0, A.Du)();
}
function T(e) {
    let t, n;
    return {
        hasConsented: ((t = (0, m.k)()), (0, s.bG)([u.A], () => u.A.hasConsented(t, e))),
        updateConsent:
            ((n = (0, m.k)()),
            i.useCallback(
                async (t) => {
                    if (null != n)
                        try {
                            await d.Ay.updateTeenConsents(n, t ? [e] : [], t ? [] : [e]);
                        } catch (e) {
                            l.A.showFailedToast(g.OB.GENERIC_ERROR);
                        }
                },
                [n, e],
            )),
    };
}
