"use strict";
a.d(t, { K: () => o });
var s = a(64700),
    r = a(475743),
    n = a(954571),
    i = a(21251),
    l = a(652215);
function o(e) {
    let t = (0, r.A)(e);
    s.useEffect(() => {
        if (e === t) return;
        let a = null;
        "user-code-input" !== e.type && "handoff" !== e.type && (a = (0, i.i)(e.userCodeData.clientId)),
            n.default.track(l.HAw.DEVICE_LINK_STEP, { previous_step: t?.type, current_step: e.type, platform_type: a });
    }, [t, e]);
}
