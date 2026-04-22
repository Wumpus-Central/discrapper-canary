n.d(t, { H: () => r });
var a = n(73153);
function r(e) {
    let { image: t, file: n, uploadType: r, guildId: l, analyticsSource: i, isTryItOut: o = !1 } = e;
    a.h.dispatch({
        type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
        image: t,
        file: n,
        uploadType: r,
        guildId: l,
        analyticsSource: i,
        isTryItOut: o,
    });
}
