n.d(t, { Y: () => o }), n(896048);
var r = n(287809),
    i = n(486020),
    a = n(403362),
    s = n(652215);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        n = arguments.length > 2 ? arguments[2] : void 0;
    switch (e.type) {
        case s.rbe.DM:
            let [o] = e.recipients.map(r.default.getUser).filter(a.Vq);
            if (null == o) return null;
            return o.getAvatarURL(void 0, t, n);
        case s.rbe.GROUP_DM:
            return i.Ay.getChannelIconURL({
                id: e.id,
                icon: e.icon,
                applicationId: e.getApplicationId(),
                size: t,
            });
    }
}
