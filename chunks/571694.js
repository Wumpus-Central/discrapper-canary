"use strict";
n.d(t, { Y: () => l });
var i = n(287809),
    r = n(486020),
    a = n(403362),
    s = n(652215);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        n = arguments.length > 2 ? arguments[2] : void 0;
    switch (e.type) {
        case s.rbe.DM:
            let [l] = e.recipients.map(i.default.getUser).filter(a.Vq);
            if (null == l) return null;
            return l.getAvatarURL(void 0, t, n);
        case s.rbe.GROUP_DM:
            return r.Ay.getChannelIconURL({ id: e.id, icon: e.icon, applicationId: e.getApplicationId(), size: t });
    }
}
