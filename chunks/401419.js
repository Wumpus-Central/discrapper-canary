t.d(l, {
    Z: function () {
        return c;
    },
    j: function () {
        return m;
    }
});
var n = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    a = t(729594),
    o = t(388032),
    s = t(112197);
let d = ['sessionshare.sp-int.playstation.com', 'session-share.playstation.com'],
    u = (e, l, t) => 'https://'.concat(e, '/embed/').concat(l, '?locale=').concat(t),
    m = ['PlayStation'],
    h = (e, l) => {
        let { host: t, pathname: n } = l,
            i = [];
        switch ((null != n && (i = n.split('/')), e)) {
            case 'PlayStation':
                if (null == t || !d.includes(t) || 2 !== i.length) break;
                return {
                    embedUrl: u(t, i[1], o.intl.currentLocale),
                    style: {
                        width: 400,
                        height: 300,
                        borderRadius: 6
                    }
                };
        }
        return null;
    };
function c(e) {
    var l;
    let t = e.embed.url,
        i = null === (l = e.embed.provider) || void 0 === l ? void 0 : l.name;
    if (null == t || null == i) return null;
    let o = null;
    try {
        o = a.parse(t, !0);
    } catch (e) {
        return null;
    }
    let d = h(i, o);
    return null == d
        ? null
        : (0, n.jsx)('iframe', {
              src: d.embedUrl,
              className: r()(s.embedIFrame, e.className),
              style: d.style,
              sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
          });
}
