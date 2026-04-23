n.d(t, { KK: () => A, NZ: () => D, gr: () => x, lH: () => h, uM: () => T, xs: () => p });
var l = n(64700),
    r = n(17928),
    i = n(873298),
    u = n(444802),
    o = n(381689),
    d = n(93857),
    s = n(115063),
    a = n(899847),
    c = n(842144),
    g = n(704724),
    C = n(500470),
    f = n(834981),
    m = n(835002);
let p = () => {
        let e = (0, C.x)(),
            t = d.p7.useControlledSetting(e?.id);
        return null == e
            ? null
            : {
                  explicitContentNonFriendDm: (0, g.J6)({ teenId: e?.id, setting: t?.explicitContentNonFriendDm }),
                  explicitContentFriendDm: (0, g.J6)({
                      teenId: e?.id,
                      setting: t?.explicitContentFriendDm,
                      isFriend: !0,
                  }),
                  explicitContentGuilds: i.TO.BLUR,
              };
    },
    x = () => {
        let e = (0, C.x)(),
            t = d.oQ.useControlledSetting(e?.id);
        if (null == e) return null;
        let { goreContentNonFriendDm: n, goreContentFriendDm: l } = t ?? {};
        return {
            goreContentNonFriendDm: (0, g.ky)(n) ? n : (0, u.jj)({ isDm: !0 }),
            goreContentFriendDm: (0, g.ky)(l) ? l : (0, u.jj)({ isDm: !0, isFriend: !0 }),
            goreContentGuilds: i.TO.BLUR,
        };
    },
    A = () => {
        let e = (0, C.x)(),
            t = d.qz.useControlledSetting(e?.id),
            n = d.yr.useControlledSetting(e?.id);
        return null != n ? n : !!t || t;
    };
function D() {
    let e = (0, C.x)(),
        t = d.up.useControlledSetting(e?.id),
        n = l.useMemo(() => (0, s.Lx)(t), [t]);
    return n.mutualGuilds && !n.all;
}
function T() {
    return (0, f.Du)();
}
function h(e) {
    let t, n;
    return {
        hasConsented: ((t = (0, C.k)()), (0, r.bG)([c.A], () => c.A.hasConsented(t, e))),
        updateConsent:
            ((n = (0, C.k)()),
            l.useCallback(
                async (t) => {
                    if (null != n)
                        try {
                            await a.Ay.updateTeenConsents(n, t ? [e] : [], t ? [] : [e]);
                        } catch (e) {
                            o.A.showFailedToast(m.OB.GENERIC_ERROR);
                        }
                },
                [n, e],
            )),
    };
}
