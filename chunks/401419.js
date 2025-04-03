t.d(l, {
    Z: () => m,
    j: () => c
}),
    t(301563);
var n = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    s = t(729594),
    a = t(388032),
    o = t(519222);
let u = ['sessionshare.sp-int.playstation.com', 'session-share.playstation.com'],
    d = (e, l, t) => 'https://'.concat(e, '/embed/').concat(l, '?locale=').concat(t),
    c = ['PlayStation'],
    h = (e, l) => {
        let { host: t, pathname: n } = l,
            r = [];
        return (null != n && (r = n.split('/')), 'PlayStation' === e)
            ? null != t && u.includes(t) && 2 === r.length
                ? {
                      embedUrl: d(t, r[1], a.NW.currentLocale),
                      style: {
                          width: 400,
                          height: 300,
                          borderRadius: 6
                      }
                  }
                : null
            : null;
    };
function m(e) {
    var l;
    let t = e.embed.url,
        r = null == (l = e.embed.provider) ? void 0 : l.name;
    if (null == t || null == r) return null;
    let a = null;
    try {
        a = s.parse(t, !0);
    } catch (e) {
        return null;
    }
    let u = h(r, a);
    return null == u
        ? null
        : (0, n.jsx)('iframe', {
              src: u.embedUrl,
              className: i()(o.embedIFrame, e.className),
              style: u.style,
              sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
          });
}
