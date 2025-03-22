n.d(t, { Z: () => u }), n(566702), n(47120);
var r = n(657305),
    i = n(841784),
    l = n(420660),
    o = n(981631),
    a = n(388032);
function s(e) {
    return {
        [o.IIU.STREAMING]: e ? a.t['4CQq9f'] : a.t['0wJXSk'],
        [o.IIU.LISTENING]: e ? a.t['b+lA5+'] : a.t.Vnuxub,
        [o.IIU.WATCHING]: e ? a.t.mqdfDQ : a.t.pW3Ip6,
        [o.IIU.COMPETING]: e ? a.t.oHF7Cg : a.t.QQ2wVF
    };
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e && e.type === o.IIU.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != t) return null == e || e.type !== o.IIU.PLAYING ? a.NW.string(a.t.eXan7O) : a.NW.format(s(n)[o.IIU.STREAMING], { name: e.name });
    if (null == e || null == e.name) return null;
    if ((0, l.Z)(e)) {
        let t = null != e.details && '' !== e.details ? e.details : e.name;
        return a.NW.format(s(n)[o.IIU.STREAMING], { name: t });
    }
    return (0, i.Z)(e)
        ? (0, r.Z)(e.name)
        : (function (e, t, n) {
              let r = s(n);
              switch (e) {
                  case o.IIU.LISTENING:
                  case o.IIU.WATCHING:
                  case o.IIU.COMPETING:
                      return a.NW.format(r[e], { name: t });
                  case o.IIU.CUSTOM_STATUS:
                  case o.IIU.HANG_STATUS:
                      return null;
                  case o.IIU.PLAYING:
                  default:
                      return n ? a.NW.formatToPlainString(a.t.Sq9xJy, { game: t }) : a.NW.format(a.t.lFApm5, { game: t });
              }
          })(e.type, e.name, n);
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (Array.isArray(e)) {
        let i = e;
        null == t || (r && !1 === t.discoverable) || (i = [...i, null]);
        let l = null;
        for (let e of i) {
            let r = c(e, t, n);
            if (null != r)
                return {
                    activity: e,
                    activityText: r
                };
            (null == e ? void 0 : e.type) === o.IIU.CUSTOM_STATUS && null != e.emoji && (l = e);
        }
        return (null == l ? void 0 : l.emoji) != null
            ? {
                  activity: l,
                  activityText: null
              }
            : null;
    }
    return c(e, t, n);
}
