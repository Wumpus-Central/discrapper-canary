n.d(t, {
    J6: () => d,
    Jz: () => u,
    ky: () => o,
    qY: () => c,
});
var r = n(873298),
    i = n(632119),
    l = n(444802),
    s = n(93857);

function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let o = (e) => null != e && e !== r.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    c = (e, t) => {
        let n = ((e) => {
            let t = s.oQ.getControlledSetting(e),
                { goreContentNonFriendDm: n, goreContentFriendDm: i } = null != t ? t : {};
            return {
                goreContentNonFriendDm: o(n)
                    ? n
                    : (0, l.jj)({
                          isDm: !0,
                      }),
                goreContentFriendDm: o(i)
                    ? i
                    : (0, l.jj)({
                          isDm: !0,
                          isFriend: !0,
                      }),
                goreContentGuilds: r.TO.BLUR,
            };
        })(e);
        s.oQ.updateControlledSetting(e, a({}, n, t));
    },
    d = (e) => {
        let { teenId: t, setting: n, isFriend: r = !1 } = e;
        if (o(n)) return n;
        let l = s.sM.getControlledSetting(t);
        return r ? i.Bb[l] : i.fu[l];
    },
    u = (e, t) => {
        let n,
            i =
                ((n = s.p7.getControlledSetting(e)),
                {
                    explicitContentNonFriendDm: d({
                        teenId: e,
                        setting: null == n ? void 0 : n.explicitContentNonFriendDm,
                    }),
                    explicitContentFriendDm: d({
                        teenId: e,
                        setting: null == n ? void 0 : n.explicitContentFriendDm,
                        isFriend: !0,
                    }),
                    explicitContentGuilds: r.TO.BLUR,
                });
        s.p7.updateControlledSetting(e, a({}, i, t));
    };
