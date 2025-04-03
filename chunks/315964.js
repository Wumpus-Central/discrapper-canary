n.d(t, { Z: () => a });
var r = n(570140),
    i = n(142497),
    l = n(190378);
let a = {
    init() {
        r.Z.subscribe('VOICE_CHANNEL_SELECT', (e) => {
            let { channelId: t } = e;
            null == t && i.Kw(l.v.VOICE_PANEL_INTRODUCTION);
        });
    }
};
