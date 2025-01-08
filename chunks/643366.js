n.d(t, {
    Y: function () {
        return c;
    }
});
var a = n(192379),
    r = n(110924),
    o = n(626135),
    i = n(497350),
    l = n(981631);
function c(e) {
    let t = (0, r.Z)(e);
    a.useEffect(() => {
        if (e === t) return;
        let n = null;
        'user-code-input' !== e.type && 'handoff' !== e.type && (n = (0, i.B)(e.userCodeData.clientId)),
            o.default.track(l.rMx.DEVICE_LINK_STEP, {
                previous_step: null == t ? void 0 : t.type,
                current_step: e.type,
                platform_type: n
            });
    }, [t, e]);
}
