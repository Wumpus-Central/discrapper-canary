n.d(t, {
    A: () => i,
});
var r = n(652215);

function i(e) {
    let { LayerStore: t, PopoutWindowStore: n } = e,
        i = t.hasLayers(),
        a = n.getWindowOpen(r.MLl.CHANNEL_CALL_POPOUT) || n.getWindowOpen(r.MLl.ACTIVITY_POPOUT);
    return i && !a;
}
