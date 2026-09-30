r.d(i, { Z: () => d });
var h = r(776231),
    p = r(644447),
    e = r(515718),
    u = r(536763);
function d(t, i) {
    if ("IMAGE" !== t.type) return;
    if (!(0, e.eJ)(t)) return void (0, h.yt)(t.url);
    let r = (0, p.E)({ proxyURL: t.proxyUrl, url: t.url });
    (0, u.A)({ src: r, width: t.width, height: t.height, hasMultiple: i, options: t });
}
