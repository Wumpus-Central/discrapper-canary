"use strict";
s.d(t, { K: () => o });
var a = s(64700),
    r = s(475743),
    n = s(954571),
    i = s(21251),
    l = s(652215);
function o(e) {
    let t = (0, r.A)(e);
    a.useEffect(() => {
        if (e === t) return;
        let s = null;
        "user-code-input" !== e.type && "handoff" !== e.type && (s = (0, i.i)(e.userCodeData.clientId)),
            n.default.track(l.HAw.DEVICE_LINK_STEP, { previous_step: t?.type, current_step: e.type, platform_type: s });
    }, [t, e]);
}
