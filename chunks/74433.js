n.d(t, { Z: () => d }), n(566702), n(47120);
var r = n(657305),
    i = n(841784),
    o = n(420660),
    a = n(981631),
    s = n(388032);
function l(e) {
    return {
        [a.IIU.STREAMING]: e ? s.t['4CQq9f'] : s.t['0wJXSk'],
        [a.IIU.LISTENING]: e ? s.t['b+lA5+'] : s.t.Vnuxub,
        [a.IIU.WATCHING]: e ? s.t.mqdfDQ : s.t.pW3Ip6,
        [a.IIU.COMPETING]: e ? s.t.oHF7Cg : s.t.QQ2wVF
    };
}
function c(e, t, n) {
    let r = l(n);
    switch (e) {
        case a.IIU.LISTENING:
        case a.IIU.WATCHING:
        case a.IIU.COMPETING:
            return s.NW.format(r[e], { name: t });
        case a.IIU.CUSTOM_STATUS:
        case a.IIU.HANG_STATUS:
            return null;
        case a.IIU.PLAYING:
        default:
            return n ? s.NW.formatToPlainString(s.t.Sq9xJy, { game: t }) : s.NW.format(s.t.lFApm5, { game: t });
    }
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e && e.type === a.IIU.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != t) return null == e || e.type !== a.IIU.PLAYING ? s.NW.string(s.t.eXan7O) : s.NW.format(l(n)[a.IIU.STREAMING], { name: e.name });
    if (null == e || null == e.name) return null;
    if ((0, o.Z)(e)) {
        let t = null != e.details && '' !== e.details ? e.details : e.name;
        return s.NW.format(l(n)[a.IIU.STREAMING], { name: t });
    }
    return (0, i.Z)(e) ? (0, r.Z)(e.name) : c(e.type, e.name, n);
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (Array.isArray(e)) {
        let i = e;
        null == t || (r && !1 === t.discoverable) || (i = [...i, null]);
        let o = null;
        for (let e of i) {
            let r = u(e, t, n);
            if (null != r)
                return {
                    activity: e,
                    activityText: r
                };
            (null == e ? void 0 : e.type) === a.IIU.CUSTOM_STATUS && null != e.emoji && (o = e);
        }
        return (null == o ? void 0 : o.emoji) != null
            ? {
                  activity: o,
                  activityText: null
              }
            : null;
    }
    return u(e, t, n);
}
