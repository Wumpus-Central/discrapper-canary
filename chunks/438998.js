n.d(t, { A: () => a });
var r = n(73153),
    i = n(421838),
    l = n(897513);
let a = {
    init() {
        r.h.subscribe("VOICE_CHANNEL_SELECT", (e) => {
            let { channelId: t } = e;
            null == t && i.sF(l._.VOICE_PANEL_INTRODUCTION);
        });
    },
};
