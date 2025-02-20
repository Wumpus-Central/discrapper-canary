n.d(t, { x: () => s }), n(47120);
var r = n(594174),
    i = n(768581),
    o = n(823379),
    a = n(981631);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        n = arguments.length > 2 ? arguments[2] : void 0;
    switch (e.type) {
        case a.d4z.DM:
            let [s] = e.recipients.map(r.default.getUser).filter(o.lm);
            if (null == s) return null;
            return s.getAvatarURL(void 0, t, n);
        case a.d4z.GROUP_DM:
            return i.ZP.getChannelIconURL({
                id: e.id,
                icon: e.icon,
                applicationId: e.getApplicationId(),
                size: t
            });
    }
}
