t.d(l, {
    Z: () => h,
    j: () => u,
}),
    t(35282);
var r = t(255367);
t(73800);
var n = t(120356),
    i = t.n(n),
    s = t(729594),
    a = t(388032),
    o = t(126425);
let d = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
    u = ["PlayStation"];
function h(e) {
    var l;
    let t = e.embed.url,
        n = null == (l = e.embed.provider) ? void 0 : l.name;
    if (null == t || null == n) return null;
    let u = null;
    try {
        u = s.parse(t, !0);
    } catch (e) {
        return null;
    }
    let h = ((e, l) => {
        let { host: t, pathname: r } = l,
            n = [];
        if ((null != r && (n = r.split("/")), "PlayStation" === e)) {
            let e;
            if (null == t || !d.includes(t) || 2 !== n.length) return null;
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
    })(n, u);
    return null == h
        ? null
        : (0, r.jsx)("iframe", {
              src: h.embedUrl,
              className: i()(o.embedIFrame, e.className),
              style: h.style,
              sandbox:
                  "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          });
}
