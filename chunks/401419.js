(t.d(l, {
    Z: () => m,
    j: () => c
}),
    t(35282));
var r = t(255367);
t(73800);
var n = t(120356),
    i = t.n(n),
    s = t(729594),
    a = t(388032),
    o = t(519222);
let d = ['sessionshare.sp-int.playstation.com', 'session-share.playstation.com'],
    u = (e, l, t) => 'https://'.concat(e, '/embed/').concat(l, '?locale=').concat(t),
    c = ['PlayStation'],
    h = (e, l) => {
        let { host: t, pathname: r } = l,
            n = [];
        return (null != r && (n = r.split('/')), 'PlayStation' === e)
            ? null != t && d.includes(t) && 2 === n.length
                ? {
                      embedUrl: u(t, n[1], a.intl.currentLocale),
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
        n = null == (l = e.embed.provider) ? void 0 : l.name;
    if (null == t || null == n) return null;
    let a = null;
    try {
        a = s.parse(t, !0);
    } catch (e) {
        return null;
    }
    let d = h(n, a);
    return null == d
        ? null
        : (0, r.jsx)('iframe', {
              src: d.embedUrl,
              className: i()(o.embedIFrame, e.className),
              style: d.style,
              sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
          });
}
