n.d(t, { b: () => o });
let i = 'application/font-woff',
    r = 'image/jpeg',
    a = {
        woff: i,
        woff2: i,
        ttf: 'application/font-truetype',
        eot: 'application/vnd.ms-fontobject',
        png: 'image/png',
        jpg: r,
        jpeg: r,
        gif: 'image/gif',
        tiff: 'image/tiff',
        svg: 'image/svg+xml',
        webp: 'image/webp'
    };
function s(e) {
    let t = /\.([^./]*?)$/g.exec(e);
    return t ? t[1] : '';
}
function o(e) {
    return a[s(e).toLowerCase()] || '';
}
