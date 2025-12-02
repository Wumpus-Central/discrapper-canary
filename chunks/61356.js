n.d(t, { Z: () => a });
var r = n(399606),
    i = n(541099);
function a(e) {
    let { type: t, channelId: n } = e;
    return (0, r.e7)([i.Z], () => {
        let e = i.Z.activeViewType();
        return null != e && e === t && i.Z.activeChannelId() === n && i.Z.shouldShowPopup();
    }, [t, n]);
}
