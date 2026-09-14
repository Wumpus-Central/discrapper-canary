n.d(t, { m: () => a });
var i = n(812743);
let r = new Map([
    [i.NJ.DARK, i.NJ.ASH],
    [i.NJ.ONYX, i.NJ.ASH],
]);
function a(e) {
    if (null == e) return;
    let t = r.get(e);
    return null != t ? `theme-${t} theme-${e} images-${t}` : `theme-${e} images-${e}`;
}
