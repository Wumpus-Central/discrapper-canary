n.d(t, {
    A: () => m,
    o: () => _,
}),
    n(747238);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(567243),
    o = n(985018),
    l = n(61663);
let c = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
    u = (e, t, n) => "https://".concat(e, "/embed/").concat(t, "?locale=").concat(n),
    d = 400,
    f = 300,
    p = 6,
    _ = ["PlayStation"],
    h = (e, t) => {
        let { host: n, pathname: r } = t,
            i = [];
        if ((null != r && (i = r.split("/")), "PlayStation" === e)) {
            if (null == n || !c.includes(n) || 2 !== i.length) return null;
            let e = i[1];
            return {
                embedUrl: u(n, e, o.intl.currentLocale),
                style: {
                    width: d,
                    height: f,
                    borderRadius: p,
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
    let o = null;
    try {
        o = s.parse(n, !0);
    } catch (e) {
        return null;
    }
    let c = h(i, o);
    return null == c
        ? null
        : (0, r.jsx)("iframe", {
              src: c.embedUrl,
              className: a()(l.u, e.className),
              style: c.style,
              sandbox:
                  "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          });
}
