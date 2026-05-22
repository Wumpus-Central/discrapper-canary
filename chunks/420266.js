i.d(t, { Ln: () => j, kt: () => y, Z0: () => S }), i(321073);
var l = i(64700),
    n = i(17928),
    s = i(427358),
    a = i(95701),
    r = i(696451),
    c = i(576705),
    o = i(287809),
    d = i(607567),
    u = i(488926),
    m = i(228366),
    A = i(763827);
let h = {},
    p = !1,
    g = null;
function x(e) {
    e in h && delete h[e];
}
function I() {
    if (!p && A.A.isConnected()) {
        let e = A.A.getChannelId();
        if (null != e) return x(e), (g = e), (p = !0), !0;
    } else if (p && !A.A.isConnected() && null != g) return x(g), (g = null), (p = !1), !0;
    return !1;
}
class v extends n.Ay.Store {
    static displayName = "VoiceInvitesuggestionsStore ";
    initialize() {
        this.waitFor(A.A), this.syncWith([A.A], I);
    }
    getIsPopoverDismissed(e) {
        return null != e && (h[e] ?? !1);
    }
    getShouldShowPopover(e) {
        return null != e && A.A.isConnected() && A.A.getChannelId() === e && !this.getIsPopoverDismissed(e);
    }
}
let f = new v(m.h, {
    VOICE_INVITE_SUGGESTIONS_DISMISS_POPOVER: function (e) {
        let { channelId: t } = e;
        return !h[t] && ((h[t] = !0), !0);
    },
});
var N = i(652215);
function y(e) {
    let { channel: t } = e,
        i = t?.guild_id;
    return (0, n.yK)([s.A, d.Ay, r.Ay, o.default], () => {
        if (null == t) return [];
        let e = s.A.getUserAffinitiesMap(),
            l = null != t ? d.Ay.getVoiceStatesForChannel(t) : [],
            n = new Set();
        l.forEach((e) => n.add(e.user.id));
        let c = [];
        for (let e of r.Ay.getMembers(i)) {
            if (n.has(e.userId)) continue;
            let i = o.default.getUser(e.userId);
            if (null == i) continue;
            let l = (0, a.TA)(t.type);
            (0, u.$3)({ permission: l, user: i, context: t }) && c.push(i);
        }
        let m = (t) => e.get(t)?.vcProbability ?? 0;
        return c.sort((e, t) => m(t.id) - m(e.id)).slice(0, 5);
    }, [t, i]);
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: i = !1, disabled: s = !1 } = t,
        a = (0, n.bG)([f], () => f.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: a && !i && !s,
        dismiss: l.useCallback(() => {
            var t;
            (t = e.id), m.h.dispatch({ type: "VOICE_INVITE_SUGGESTIONS_DISMISS_POPOVER", channelId: t });
        }, [e]),
    };
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: i = !1 } = t,
        l = f.getShouldShowPopover(e.id),
        n = c.A.can(N.xBc.CREATE_INSTANT_INVITE, e);
    return l && n && !i;
}
