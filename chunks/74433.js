r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(833858),
    o = r(657305),
    s = r(841784),
    l = r(420660),
    u = r(981631),
    c = r(388032);
function d(e) {
    return {
        [u.IIU.STREAMING]: e ? c.t['4CQq9f'] : c.t['0wJXSk'],
        [u.IIU.LISTENING]: e ? c.t['b+lA5+'] : c.t.Vnuxub,
        [u.IIU.WATCHING]: e ? c.t.mqdfDQ : c.t.pW3Ip6,
        [u.IIU.COMPETING]: e ? c.t.oHF7Cg : c.t.QQ2wVF
    };
}
function f(e, n, r) {
    let i = d(r);
    switch (e) {
        case u.IIU.LISTENING:
        case u.IIU.WATCHING:
        case u.IIU.COMPETING:
            return c.intl.format(i[e], { name: n });
        case u.IIU.CUSTOM_STATUS:
        case u.IIU.HANG_STATUS:
            return null;
        case u.IIU.PLAYING:
        default:
            return r ? c.intl.formatToPlainString(c.t.Sq9xJy, { game: n }) : c.intl.format(c.t.lFApm5, { game: n });
    }
}
function p(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (null != e && e.type === u.IIU.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != n) return null == e || e.type !== u.IIU.PLAYING ? c.intl.string(c.t.eXan7O) : c.intl.format(d(r)[u.IIU.STREAMING], { name: e.name });
    if (i && null != e && e.type === u.IIU.HANG_STATUS) return (0, a.O8)(e);
    if (null == e || null == e.name) return null;
    if ((0, l.Z)(e)) {
        let n = null != e.details && '' !== e.details ? e.details : e.name;
        return c.intl.format(d(r)[u.IIU.STREAMING], { name: n });
    }
    return (0, s.Z)(e) ? (0, o.Z)(e.name) : f(e.type, e.name, r);
}
function h(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0;
    if (Array.isArray(e)) {
        let o = e;
        null != n && (!a || !1 !== n.discoverable) && (o = [...o, null]);
        let s = null;
        for (let e of o) {
            let a = p(e, n, r, i);
            if (null != a)
                return {
                    activity: e,
                    activityText: a
                };
            (null == e ? void 0 : e.type) === u.IIU.CUSTOM_STATUS && null != e.emoji && (s = e);
        }
        return (null == s ? void 0 : s.emoji) != null
            ? {
                  activity: s,
                  activityText: null
              }
            : null;
    }
    return p(e, n, r, i);
}
