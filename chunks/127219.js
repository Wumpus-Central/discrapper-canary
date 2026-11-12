var n,
    i = s(477900);
s(582128);
var a = s(506988),
    l = s(508380),
    r = s(221596),
    o = s(792996),
    c = (((n = {}).NOT_FOUND = "not_found"), (n.MOBILE_ONLY = "mobile_only"), n);
s.d(
    t,
    {},
    {
        l: function (e) {
            let { questId: t, reason: s = "not_found" } = e;
            return (0, i.jsx)(l.i, {
                questId: t,
                fallbackReason: r.eA.UNKNOWN_QUEST,
                bodyText: o.intl.string("mobile_only" === s ? o.t.Pag1gS : o.t.c9275Z),
                questContent: a.uF.INVALID_QUEST_EMBED,
            });
        },
        o: c,
    },
);
