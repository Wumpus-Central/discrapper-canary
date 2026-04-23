t.d(n, { t: () => l });
async function l(e, n) {
    let t = new Image();
    await new Promise((n, l) => {
        (t.onload = () => n()), (t.onerror = () => l(Error(`Failed to load image: ${e}`))), (t.src = e);
    });
    let l = null != n ? Math.min(1, n / Math.max(t.naturalWidth, t.naturalHeight)) : 1,
        i = document.createElement("canvas");
    (i.width = Math.round(t.naturalWidth * l)), (i.height = Math.round(t.naturalHeight * l));
    let r = i.getContext("2d");
    if (null == r) throw Error("Canvas 2d context unavailable");
    return r.drawImage(t, 0, 0, i.width, i.height), i.toDataURL("image/png");
}
