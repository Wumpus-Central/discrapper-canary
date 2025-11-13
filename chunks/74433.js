n.d(t, { Z: () => c }), n(781311), n(388685);
var r = n(657305),
    i = n(841784),
    l = n(420660),
    a = n(981631),
    s = n(388032);
function o(e, t) {
    if (null != e && e.type === a.IIU.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != t) return null == e || e.type !== a.IIU.PLAYING ? s.intl.string(s.t.eXan7B) : e.name;
    if (null == e || null == e.name) return null;
    if ((0, l.Z)(e)) return null != e.details && "" !== e.details ? e.details : e.name;
    if ((0, i.Z)(e)) return (0, r.Z)(e.name);
    var n = e.type,
        o = e.name;
    switch (n) {
        case a.IIU.LISTENING:
        case a.IIU.WATCHING:
        case a.IIU.COMPETING:
        case a.IIU.STREAMING:
            return o;
        case a.IIU.CUSTOM_STATUS:
        case a.IIU.HANG_STATUS:
            return null;
        case a.IIU.PLAYING:
        default:
            return o;
    }
}
function c(e, t) {
    if (Array.isArray(e)) {
        let n = e;
        null != t && !1 !== t.discoverable && (n = [...n, null]);
        let r = null;
        for (let e of n) {
            let n = o(e, t);
            if (null != n)
                return {
                    activity: e,
                    activityText: n,
                };
            (null == e ? void 0 : e.type) === a.IIU.CUSTOM_STATUS && null != e.emoji && (r = e);
        }
        return (null == r ? void 0 : r.emoji) != null
            ? {
                  activity: r,
                  activityText: null,
              }
            : null;
    }
    return o(e, t);
}
