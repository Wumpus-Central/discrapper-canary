n.d(t, { Z: () => a });
var i = n(570140),
    l = n(142497),
    r = n(190378);
let a = {
    init() {
        i.Z.subscribe('VOICE_CHANNEL_SELECT', (e) => {
            let { channelId: t } = e;
            null == t && l.Kw(r.v.VOICE_PANEL_INTRODUCTION);
        });
    }
};
