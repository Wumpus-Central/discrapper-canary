n.d(t, { Z: () => d }), n(47120);
var i = n(657305),
    r = n(841784),
    a = n(420660),
    s = n(981631),
    o = n(388032);
function l(e) {
    return {
        [s.IIU.STREAMING]: e ? o.t['4CQq9f'] : o.t['0wJXSk'],
        [s.IIU.LISTENING]: e ? o.t['b+lA5+'] : o.t.Vnuxub,
        [s.IIU.WATCHING]: e ? o.t.mqdfDQ : o.t.pW3Ip6,
        [s.IIU.COMPETING]: e ? o.t.oHF7Cg : o.t.QQ2wVF
    };
}
function u(e, t, n) {
    let i = l(n);
    switch (e) {
        case s.IIU.LISTENING:
        case s.IIU.WATCHING:
        case s.IIU.COMPETING:
            return o.intl.format(i[e], { name: t });
        case s.IIU.CUSTOM_STATUS:
        case s.IIU.HANG_STATUS:
            return null;
        case s.IIU.PLAYING:
        default:
            return n ? o.intl.formatToPlainString(o.t.Sq9xJy, { game: t }) : o.intl.format(o.t.lFApm5, { game: t });
    }
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e && e.type === s.IIU.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != t) return null == e || e.type !== s.IIU.PLAYING ? o.intl.string(o.t.eXan7O) : o.intl.format(l(n)[s.IIU.STREAMING], { name: e.name });
    if (null == e || null == e.name) return null;
    if ((0, a.Z)(e)) {
        let t = null != e.details && '' !== e.details ? e.details : e.name;
        return o.intl.format(l(n)[s.IIU.STREAMING], { name: t });
    }
    return (0, r.Z)(e) ? (0, i.Z)(e.name) : u(e.type, e.name, n);
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (Array.isArray(e)) {
        let r = e;
        null == t || (i && !1 === t.discoverable) || (r = [...r, null]);
        let a = null;
        for (let e of r) {
            let i = c(e, t, n);
            if (null != i)
                return {
                    activity: e,
                    activityText: i
                };
            (null == e ? void 0 : e.type) === s.IIU.CUSTOM_STATUS && null != e.emoji && (a = e);
        }
        return (null == a ? void 0 : a.emoji) != null
            ? {
                  activity: a,
                  activityText: null
              }
            : null;
    }
    return c(e, t, n);
}
