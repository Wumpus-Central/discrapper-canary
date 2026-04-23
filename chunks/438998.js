n.d(t, { A: () => l });
var i = n(73153),
    r = n(421838),
    a = n(897513);
let l = {
    init() {
        i.h.subscribe("VOICE_CHANNEL_SELECT", (e) => {
            let { channelId: t } = e;
            null == t && r.sF(a._.VOICE_PANEL_INTRODUCTION);
        });
    },
};
