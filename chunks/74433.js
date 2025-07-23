(n.d(t, { Z: () => d }), n(781311), n(388685));
var r = n(833858),
    i = n(657305),
    l = n(841784),
    a = n(420660),
    o = n(981631),
    s = n(388032);
function c(e) {
    return {
        [o.IIU.STREAMING]: e ? s.t['4CQq9f'] : s.t['0wJXSk'],
        [o.IIU.LISTENING]: e ? s.t['b+lA5+'] : s.t.Vnuxub,
        [o.IIU.WATCHING]: e ? s.t.mqdfDQ : s.t.pW3Ip6,
        [o.IIU.COMPETING]: e ? s.t.oHF7Cg : s.t.QQ2wVF
    };
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        u = arguments.length > 3 ? arguments[3] : void 0;
    if (null != e && e.type === o.IIU.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != t) return null == e || e.type !== o.IIU.PLAYING ? s.intl.string(s.t.eXan7O) : s.intl.format(c(n)[o.IIU.STREAMING], { name: e.name });
    if (u && (null == e ? void 0 : e.type) === o.IIU.HANG_STATUS) return (0, r.O8)(e);
    if (null == e || null == e.name) return null;
    if ((0, a.Z)(e)) {
        let t = null != e.details && '' !== e.details ? e.details : e.name;
        return s.intl.format(c(n)[o.IIU.STREAMING], { name: t });
    }
    return (0, l.Z)(e)
        ? (0, i.Z)(e.name)
        : (function (e, t, n) {
              let r = c(n);
              switch (e) {
                  case o.IIU.LISTENING:
                  case o.IIU.WATCHING:
                  case o.IIU.COMPETING:
                      return s.intl.format(r[e], { name: t });
                  case o.IIU.CUSTOM_STATUS:
                  case o.IIU.HANG_STATUS:
                      return null;
                  case o.IIU.PLAYING:
                  default:
                      return n ? s.intl.formatToPlainString(s.t.Sq9xJy, { game: t }) : s.intl.format(s.t.lFApm5, { game: t });
              }
          })(e.type, e.name, n);
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (Array.isArray(e)) {
        let i = e;
        null != t && !1 !== t.discoverable && (i = [...i, null]);
        let l = null;
        for (let e of i) {
            let i = u(e, t, n, r);
            if (null != i)
                return {
                    activity: e,
                    activityText: i
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
    return u(e, t, n, r);
}
