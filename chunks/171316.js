n.d(t, {
    KK: () => b,
    NZ: () => y,
    gr: () => E,
    lH: () => S,
    uM: () => O,
    xs: () => g,
});
var r = n(64700),
    i = n(311907),
    a = n(873298),
    s = n(444802),
    o = n(662502),
    l = n(93857),
    c = n(287809),
    u = n(115063),
    d = n(899847),
    f = n(842144),
    p = n(704724),
    _ = n(500470),
    h = n(834981),
    m = n(835002);
let g = () => {
        let e = (0, _.x)(),
            t = l.p7.useControlledSetting(null == e ? void 0 : e.id);
        return null == e
            ? null
            : {
                  explicitContentNonFriendDm: (0, p.J6)({
                      teenId: null == e ? void 0 : e.id,
                      setting: null == t ? void 0 : t.explicitContentNonFriendDm,
                  }),
                  explicitContentFriendDm: (0, p.J6)({
                      teenId: null == e ? void 0 : e.id,
                      setting: null == t ? void 0 : t.explicitContentFriendDm,
                      isFriend: !0,
                  }),
                  explicitContentGuilds: a.TO.BLUR,
              };
    },
    E = () => {
        let e = (0, _.x)(),
            t = l.oQ.useControlledSetting(null == e ? void 0 : e.id);
        if (null == e) return null;
        let { goreContentNonFriendDm: n, goreContentFriendDm: r } = null != t ? t : {};
        return {
            goreContentNonFriendDm: (0, p.ky)(n) ? n : (0, s.jj)({ isDm: !0 }),
            goreContentFriendDm: (0, p.ky)(r)
                ? r
                : (0, s.jj)({
                      isDm: !0,
                      isFriend: !0,
                  }),
            goreContentGuilds: a.TO.BLUR,
        };
    },
    b = () => {
        let e = (0, _.x)(),
            t = l.qz.useControlledSetting(null == e ? void 0 : e.id),
            n = l.yr.useControlledSetting(null == e ? void 0 : e.id);
        return null != n ? n : !!t || t;
    };
function y() {
    let e = (0, _.x)(),
        t = l.up.useControlledSetting(null == e ? void 0 : e.id),
        n = r.useMemo(() => (0, u.Lx)(t), [t]);
    return n.mutualGuilds && !n.all;
}
function O() {
    let e = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        t = (0, h.Li)();
    return (null == e ? void 0 : e.nsfwAllowed) === !1 && t;
}
function A(e) {
    let t = (0, _.k)();
    return (0, i.bG)([f.A], () => f.A.hasConsented(t, e));
}
function v(e) {
    let t = (0, _.k)();
    return r.useCallback(
        async (n) => {
            if (null == t) return;
            let r = n ? [e] : [],
                i = n ? [] : [e];
            try {
                await d.Ay.updateTeenConsents(t, r, i);
            } catch (e) {
                o.A.showFailedToast(m.OB.GENERIC_ERROR);
            }
        },
        [t, e],
    );
}
function S(e) {
    return {
        hasConsented: A(e),
        updateConsent: v(e),
    };
}
