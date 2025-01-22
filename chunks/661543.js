r.d(n, {
    j: function () {
        return a;
    }
});
var i = r(570140);
function a(e) {
    let { imageSrc: n, file: r, uploadType: a, guildId: o, isTryItOutFlow: s = !1 } = e;
    i.Z.dispatch({
        type: 'PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL',
        imageSrc: n,
        file: r,
        uploadType: a,
        guildId: o,
        isTryItOutFlow: s
    });
}
