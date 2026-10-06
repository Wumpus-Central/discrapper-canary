n.d(t, { A: () => r });
var i = n(991690);
function r(e) {
    if (null != e)
        switch (e.type) {
            case i.U.MAIN:
            case i.U.APP_CHANNEL:
            case i.U.VOICE_CHANNEL:
            case i.U.INTERACTION_MODAL:
                return e.channelId;
            default:
                return;
        }
}
