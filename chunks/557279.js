var i = n(617617),
    r = n(287809),
    a = n(349435),
    s = n(665909);
n.d(
    t,
    {},
    {
        Di: function (e) {
            let t = a.Ay.getChannelSafetyWarnings(e).filter((e) => e.type === a._j.INAPPROPRIATE_CONVERSATION_TIER_1);
            if (t.filter((e) => null != e.dismiss_timestamp).length > 0) return null;
            let n = t.filter((e) => null == e.dismiss_timestamp);
            return 1 === n.length ? n[0] : null;
        },
        S: function (e) {
            let t = e.filter((e) => e.type === a._j.INAPPROPRIATE_CONVERSATION_TIER_1);
            return t.length > 0 && t.every((e) => null == e.dismiss_timestamp);
        },
        gz: function () {
            let e = r.default.getCurrentUser()?.isStaff() === !0,
                t = i.A.settings.privacy?.inappropriateConversationWarnings?.value ?? !0;
            return ((0, s.Wu)() || e) && t;
        },
    },
);
