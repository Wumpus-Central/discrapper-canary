n.d(t, { Y: () => s });
var a = n(192379),
    r = n(110924),
    o = n(626135),
    l = n(497350),
    i = n(981631);
function s(e) {
    let t = (0, r.Z)(e);
    a.useEffect(() => {
        if (e === t) return;
        let n = null;
        'user-code-input' !== e.type && 'handoff' !== e.type && (n = (0, l.B)(e.userCodeData.clientId)),
            o.default.track(i.rMx.DEVICE_LINK_STEP, {
                previous_step: null == t ? void 0 : t.type,
                current_step: e.type,
                platform_type: n
            });
    }, [t, e]);
}
