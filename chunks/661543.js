n.d(t, { j: () => r });
var i = n(570140);
function r(e) {
    let { imageSrc: t, file: n, uploadType: r, guildId: a, isTryItOutFlow: s = !1 } = e;
    i.Z.dispatch({
        type: 'PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL',
        imageSrc: t,
        file: n,
        uploadType: r,
        guildId: a,
        isTryItOutFlow: s
    });
}
