l.d(t, {
    Z: () => m,
    j: () => c
}),
    l(301563);
var r = l(200651);
l(192379);
var n = l(120356),
    i = l.n(n),
    s = l(729594),
    o = l(388032),
    a = l(557782);
let d = ['sessionshare.sp-int.playstation.com', 'session-share.playstation.com'],
    u = (e, t, l) => 'https://'.concat(e, '/embed/').concat(t, '?locale=').concat(l),
    c = ['PlayStation'],
    h = (e, t) => {
        let { host: l, pathname: r } = t,
            n = [];
        switch ((null != r && (n = r.split('/')), e)) {
            case 'PlayStation':
                if (null == l || !d.includes(l) || 2 !== n.length) break;
                return {
                    embedUrl: u(l, n[1], o.NW.currentLocale),
                    style: {
                        width: 400,
                        height: 300,
                        borderRadius: 6
                    }
                };
        }
        return null;
    };
function m(e) {
    var t;
    let l = e.embed.url,
        n = null === (t = e.embed.provider) || void 0 === t ? void 0 : t.name;
    if (null == l || null == n) return null;
    let o = null;
    try {
        o = s.parse(l, !0);
    } catch (e) {
        return null;
    }
    let d = h(n, o);
    return null == d
        ? null
        : (0, r.jsx)('iframe', {
              src: d.embedUrl,
              className: i()(a.embedIFrame, e.className),
              style: d.style,
              sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
          });
}
