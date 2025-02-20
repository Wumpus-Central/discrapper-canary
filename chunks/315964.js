n.d(t, { Z: () => o });
var r = n(570140),
    i = n(142497),
    l = n(190378);
let o = {
    init() {
        r.Z.subscribe('VOICE_CHANNEL_SELECT', (e) => {
            let { channelId: t } = e;
            null == t && i.Kw(l.v.VOICE_PANEL_INTRODUCTION);
        });
    }
};
