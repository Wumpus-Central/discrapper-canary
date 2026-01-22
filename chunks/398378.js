r.d(t, {
    K: () => c,
});
var a = r(64700),
    n = r(475743),
    s = r(954571),
    i = r(21251),
    l = r(652215);

function c(e) {
    let t = (0, n.A)(e);
    a.useEffect(() => {
        if (e === t) return;
        let r = null;
        "user-code-input" !== e.type && "handoff" !== e.type && (r = (0, i.i)(e.userCodeData.clientId)),
            s.default.track(l.HAw.DEVICE_LINK_STEP, {
                previous_step: null == t ? void 0 : t.type,
                current_step: e.type,
                platform_type: r,
            });
    }, [t, e]);
}
