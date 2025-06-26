var t,
    a = n(264344),
    o = n.n(a);
let i = parseInt(null != (t = o().version) ? t : '0', 10),
    l = void 0 !== o().ua && o().ua.indexOf('OculusBrowser') > -1;
(() => {
    if ('undefined' == typeof window || null != window.WebSocket) return o().name;
})(),
    l || ('Firefox' === o().name && i >= 80) || ('Chrome' === o().name && i >= 37) || ('Opera' === o().name && i >= 66) || ('Node.js' === o().name && i >= 6) || ('Electron' === o().name && i >= 1) || ('Safari' === o().name && i >= 13) || o().name,
    'Chrome' === o().name || 'Safari' === o().name || ('Firefox' === o().name && i >= 80) || 'Opera' === o().name || o().name,
    l || ('Firefox' === o().name && i >= 73) || ('Safari' === o().name && i >= 13) || ('Chrome' === o().name && i >= 80) || o().name,
    ('Chrome' === o().name && i >= 58) || ('Safari' === o().name && i >= 15) || o().name,
    ('Chrome' === o().name && i >= 72) || ('Safari' === o().name && i >= 11) || ('Opera' === o().name && i >= 60) || o().name;
