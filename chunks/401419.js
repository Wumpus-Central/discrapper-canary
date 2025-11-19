n.d(t, {
    Z: () => m,
    j: () => p,
}),
    n(35282);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(729594),
    s = n(388032),
    l = n(193939);
let c = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
    u = (e, t, n) => "https://".concat(e, "/embed/").concat(t, "?locale=").concat(n),
    d = 400,
    f = 300,
    _ = 6,
    p = ["PlayStation"],
    h = (e, t) => {
        let { host: n, pathname: r } = t,
            i = [];
        if ((null != r && (i = r.split("/")), "PlayStation" === e)) {
            if (null == n || !c.includes(n) || 2 !== i.length) return null;
            let e = i[1];
            return {
                embedUrl: u(n, e, s.intl.currentLocale),
                style: {
                    width: d,
                    height: f,
                    borderRadius: _,
                },
            };
        }
        return null;
    };
function m(e) {
    var t;
    let n = e.embed.url,
        i = null == (t = e.embed.provider) ? void 0 : t.name;
    if (null == n || null == i) return null;
    let s = null;
    try {
        s = o.parse(n, !0);
    } catch (e) {
        return null;
    }
    let c = h(i, s);
    return null == c
        ? null
        : (0, r.jsx)("iframe", {
              src: c.embedUrl,
              className: a()(l.embedIFrame, e.className),
              style: c.style,
              sandbox:
                  "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          });
}
