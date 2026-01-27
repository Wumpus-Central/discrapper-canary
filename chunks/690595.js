t.d(l, {
    A: () => c,
    o: () => d,
}),
    t(747238);
var r = t(627968);
t(64700);
var n = t(503698),
    i = t.n(n),
    s = t(567243),
    a = t(985018),
    o = t(61663);
let u = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
    d = ["PlayStation"];

function c(e) {
    var l;
    let t = e.embed.url,
        n = null == (l = e.embed.provider) ? void 0 : l.name;
    if (null == t || null == n) return null;
    let d = null;
    try {
        d = s.parse(t, !0);
    } catch (e) {
        return null;
    }
    let c = ((e, l) => {
        let { host: t, pathname: r } = l,
            n = [];
        if ((null != r && (n = r.split("/")), "PlayStation" === e)) {
            let e;
            if (null == t || !u.includes(t) || 2 !== n.length) return null;
            let l = n[1];
            return {
                embedUrl: ((e = a.intl.currentLocale), "https://".concat(t, "/embed/").concat(l, "?locale=").concat(e)),
                style: {
                    width: 400,
                    height: 300,
                    borderRadius: 6,
                },
            };
        }
        return null;
    })(n, d);
    return null == c
        ? null
        : (0, r.jsx)("iframe", {
              src: c.embedUrl,
              className: i()(o.u, e.className),
              style: c.style,
              sandbox:
                  "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          });
}
