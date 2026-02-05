"use strict";
n.d(t, { $: () => s, w: () => a });
var r = n(503278),
    i = n(652215);
function a(e, t) {
    let { enabled: n } = r.l.useExperiment({ guildId: e ?? i.dJq, location: t });
    return n;
}
function s(e, t) {
    let { enabled: n } = r.l.getCurrentConfig({ guildId: e ?? i.dJq, location: t });
    return n;
}
