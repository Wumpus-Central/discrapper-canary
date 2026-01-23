n.d(t, {
    KK: () => E,
    NZ: () => y,
    gr: () => g,
    lH: () => A,
    uM: () => b,
    xs: () => m,
});
var r = n(64700),
    i = n(311907),
    a = n(873298),
    s = n(444802),
    o = n(662502),
    l = n(93857),
    c = n(115063),
    u = n(899847),
    d = n(842144),
    f = n(704724),
    p = n(500470),
    _ = n(834981),
    h = n(835002);
let m = () => {
        let e = (0, p.x)(),
            t = l.p7.useControlledSetting(null == e ? void 0 : e.id);
        return null == e
            ? null
            : {
                  explicitContentNonFriendDm: (0, f.J6)({
                      teenId: null == e ? void 0 : e.id,
                      setting: null == t ? void 0 : t.explicitContentNonFriendDm,
                  }),
                  explicitContentFriendDm: (0, f.J6)({
                      teenId: null == e ? void 0 : e.id,
                      setting: null == t ? void 0 : t.explicitContentFriendDm,
                      isFriend: !0,
                  }),
                  explicitContentGuilds: a.TO.BLUR,
              };
    },
    g = () => {
        let e = (0, p.x)(),
            t = l.oQ.useControlledSetting(null == e ? void 0 : e.id);
        if (null == e) return null;
        let { goreContentNonFriendDm: n, goreContentFriendDm: r } = null != t ? t : {};
        return {
            goreContentNonFriendDm: (0, f.ky)(n)
                ? n
                : (0, s.jj)({
                      isDm: !0,
                  }),
            goreContentFriendDm: (0, f.ky)(r)
                ? r
                : (0, s.jj)({
                      isDm: !0,
                      isFriend: !0,
                  }),
            goreContentGuilds: a.TO.BLUR,
        };
    },
    E = () => {
        let e = (0, p.x)(),
            t = l.qz.useControlledSetting(null == e ? void 0 : e.id),
            n = l.yr.useControlledSetting(null == e ? void 0 : e.id);
        return null != n ? n : !!t || t;
    };

function y() {
    let e = (0, p.x)(),
        t = l.up.useControlledSetting(null == e ? void 0 : e.id),
        n = r.useMemo(() => (0, c.Lx)(t), [t]);
    return n.mutualGuilds && !n.all;
}

function b() {
    return (0, _.Du)();
}

function O(e) {
    let t = (0, p.k)();
    return (0, i.bG)([d.A], () => d.A.hasConsented(t, e));
}

function v(e) {
    let t = (0, p.k)();
    return r.useCallback(
        async (n) => {
            if (null == t) return;
            let r = n ? [e] : [],
                i = n ? [] : [e];
            try {
                await u.Ay.updateTeenConsents(t, r, i);
            } catch (e) {
                o.A.showFailedToast(h.OB.GENERIC_ERROR);
            }
        },
        [t, e],
    );
}

function A(e) {
    return {
        hasConsented: O(e),
        updateConsent: v(e),
    };
}
