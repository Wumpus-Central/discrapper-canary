var i = n(582128),
    r = n(855986),
    o = n(873298),
    l = n(444802),
    u = n(662502),
    d = n(389462),
    s = n(115063),
    c = n(899847),
    a = n(842144),
    C = n(704724),
    p = n(500470),
    g = n(834981),
    m = n(835002);
n.d(
    e,
    {},
    {
        KK: function () {
            let t = (0, p.x)(),
                e = d.qz.useControlledSetting(t?.id),
                n = d.yr.useControlledSetting(t?.id);
            return null != n ? n : !!e || e;
        },
        NZ: function () {
            let t = (0, p.x)(),
                e = d.up.useControlledSetting(t?.id),
                n = i.useMemo(() => (0, s.Lx)(e), [e]);
            return n.mutualGuilds && !n.all;
        },
        gr: function () {
            let t = (0, p.x)(),
                e = d.oQ.useControlledSetting(t?.id);
            if (null == t) return null;
            let { goreContentNonFriendDm: n, goreContentFriendDm: i } = e ?? {};
            return {
                goreContentNonFriendDm: (0, C.ky)(n) ? n : (0, l.jj)({ isDm: !0 }),
                goreContentFriendDm: (0, C.ky)(i) ? i : (0, l.jj)({ isDm: !0, isFriend: !0 }),
                goreContentGuilds: o.TO.BLUR,
            };
        },
        lH: function (t) {
            let e, n;
            return {
                hasConsented: ((e = (0, p.k)()), (0, r.bG)([a.A], () => a.A.hasConsented(e, t))),
                updateConsent:
                    ((n = (0, p.k)()),
                    i.useCallback(
                        async (e) => {
                            if (null != n)
                                try {
                                    await c.Ay.updateTeenConsents(n, e ? [t] : [], e ? [] : [t]);
                                } catch (t) {
                                    u.A.showFailedToast(m.OB.GENERIC_ERROR);
                                }
                        },
                        [n, t],
                    )),
            };
        },
        uM: function () {
            return (0, g.Du)();
        },
        xs: function () {
            let t = (0, p.x)(),
                e = d.p7.useControlledSetting(t?.id);
            return null == t
                ? null
                : {
                      explicitContentNonFriendDm: (0, C.J6)({ teenId: t?.id, setting: e?.explicitContentNonFriendDm }),
                      explicitContentFriendDm: (0, C.J6)({
                          teenId: t?.id,
                          setting: e?.explicitContentFriendDm,
                          isFriend: !0,
                      }),
                      explicitContentGuilds: o.TO.BLUR,
                  };
        },
    },
);
