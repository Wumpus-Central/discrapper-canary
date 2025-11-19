n.d(t, { Y: () => l });
var r = n(473749),
    a = n(110924),
    i = n(626135),
    o = n(497350),
    s = n(981631);
function l(e) {
    let t = (0, a.Z)(e);
    r.useEffect(() => {
        if (e === t) return;
        let n = null;
        "user-code-input" !== e.type && "handoff" !== e.type && (n = (0, o.B)(e.userCodeData.clientId)),
            i.default.track(s.rMx.DEVICE_LINK_STEP, {
                previous_step: null == t ? void 0 : t.type,
                current_step: e.type,
                platform_type: n,
            });
    }, [t, e]);
}
