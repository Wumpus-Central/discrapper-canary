n.d(t, { A: () => l });
var i = n(652215);
function l(e) {
    let { LayerStore: t, PopoutWindowStore: n } = e,
        l = t.hasLayers(),
        r = n.getWindowOpen(i.MLl.CHANNEL_CALL_POPOUT) || n.getWindowOpen(i.MLl.ACTIVITY_POPOUT);
    return l && !r;
}
