n.d(t, {
    KK: () => h,
    NZ: () => b,
    gr: () => f,
    lH: () => x,
    uM: () => E,
    xs: () => A,
});
var r = n(64700),
    i = n(311907),
    l = n(873298),
    s = n(444802),
    a = n(662502),
    o = n(93857),
    c = n(115063),
    d = n(899847),
    u = n(842144),
    _ = n(704724),
    p = n(500470),
    m = n(834981),
    g = n(835002);
let A = () => {
        let e = (0, p.x)(),
            t = o.p7.useControlledSetting(null == e ? void 0 : e.id);
        return null == e
            ? null
            : {
                  explicitContentNonFriendDm: (0, _.J6)({
                      teenId: null == e ? void 0 : e.id,
                      setting: null == t ? void 0 : t.explicitContentNonFriendDm,
                  }),
                  explicitContentFriendDm: (0, _.J6)({
                      teenId: null == e ? void 0 : e.id,
                      setting: null == t ? void 0 : t.explicitContentFriendDm,
                      isFriend: !0,
                  }),
                  explicitContentGuilds: l.TO.BLUR,
              };
    },
    f = () => {
        let e = (0, p.x)(),
            t = o.oQ.useControlledSetting(null == e ? void 0 : e.id);
        if (null == e) return null;
        let { goreContentNonFriendDm: n, goreContentFriendDm: r } = null != t ? t : {};
        return {
            goreContentNonFriendDm: (0, _.ky)(n)
                ? n
                : (0, s.jj)({
                      isDm: !0,
                  }),
            goreContentFriendDm: (0, _.ky)(r)
                ? r
                : (0, s.jj)({
                      isDm: !0,
                      isFriend: !0,
                  }),
            goreContentGuilds: l.TO.BLUR,
        };
    },
    h = () => {
        let e = (0, p.x)(),
            t = o.qz.useControlledSetting(null == e ? void 0 : e.id),
            n = o.yr.useControlledSetting(null == e ? void 0 : e.id);
        return null != n ? n : !!t || t;
    };

function b() {
    let e = (0, p.x)(),
        t = o.up.useControlledSetting(null == e ? void 0 : e.id),
        n = r.useMemo(() => (0, c.Lx)(t), [t]);
    return n.mutualGuilds && !n.all;
}

function E() {
    return (0, m.Du)();
}

function x(e) {
    let t, n;
    return {
        hasConsented: ((t = (0, p.k)()), (0, i.bG)([u.A], () => u.A.hasConsented(t, e))),
        updateConsent:
            ((n = (0, p.k)()),
            r.useCallback(
                async (t) => {
                    if (null != n)
                        try {
                            await d.Ay.updateTeenConsents(n, t ? [e] : [], t ? [] : [e]);
                        } catch (e) {
                            a.A.showFailedToast(g.OB.GENERIC_ERROR);
                        }
                },
                [n, e],
            )),
    };
}
