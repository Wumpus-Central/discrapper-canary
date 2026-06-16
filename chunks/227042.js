"use strict";
n.d(t, { A: () => r });
var i = n(652215);
function r(e) {
    let { LayerStore: t, PopoutWindowStore: n } = e,
        r = t.hasLayers(),
        s = n.getWindowOpen(i.MLl.CHANNEL_CALL_POPOUT) || n.getWindowOpen(i.MLl.ACTIVITY_POPOUT);
    return r && !s;
}
