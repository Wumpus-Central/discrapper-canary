n.d(t, { Z: () => a });
var i = n(399606),
    l = n(541099);
function a(e) {
    let { type: t } = e;
    return (0, i.e7)(
        [l.Z],
        () => {
            let e = l.Z.activeViewType();
            return null != e && e === t && l.Z.shouldShowPopup();
        },
        [t]
    );
}
