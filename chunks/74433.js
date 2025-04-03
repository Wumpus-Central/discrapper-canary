n.d(t, { Z: () => u }), n(566702), n(47120);
var r = n(657305),
    i = n(841784),
    l = n(420660),
    a = n(981631),
    o = n(388032);
function s(e) {
    return {
        [a.IIU.STREAMING]: e ? o.t['4CQq9f'] : o.t['0wJXSk'],
        [a.IIU.LISTENING]: e ? o.t['b+lA5+'] : o.t.Vnuxub,
        [a.IIU.WATCHING]: e ? o.t.mqdfDQ : o.t.pW3Ip6,
        [a.IIU.COMPETING]: e ? o.t.oHF7Cg : o.t.QQ2wVF
    };
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null != e && e.type === a.IIU.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != t) return null == e || e.type !== a.IIU.PLAYING ? o.NW.string(o.t.eXan7O) : o.NW.format(s(n)[a.IIU.STREAMING], { name: e.name });
    if (null == e || null == e.name) return null;
    if ((0, l.Z)(e)) {
        let t = null != e.details && '' !== e.details ? e.details : e.name;
        return o.NW.format(s(n)[a.IIU.STREAMING], { name: t });
    }
    return (0, i.Z)(e)
        ? (0, r.Z)(e.name)
        : (function (e, t, n) {
              let r = s(n);
              switch (e) {
                  case a.IIU.LISTENING:
                  case a.IIU.WATCHING:
                  case a.IIU.COMPETING:
                      return o.NW.format(r[e], { name: t });
                  case a.IIU.CUSTOM_STATUS:
                  case a.IIU.HANG_STATUS:
                      return null;
                  case a.IIU.PLAYING:
                  default:
                      return n ? o.NW.formatToPlainString(o.t.Sq9xJy, { game: t }) : o.NW.format(o.t.lFApm5, { game: t });
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
            (null == e ? void 0 : e.type) === a.IIU.CUSTOM_STATUS && null != e.emoji && (l = e);
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
