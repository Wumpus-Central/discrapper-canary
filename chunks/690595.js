t.d(l, { A: () => h, o: () => u });
var r = t(627968);
t(64700);
var s = t(503698),
    n = t.n(s),
    i = t(567243),
    a = t(985018),
    o = t(416845);
let d = ["sessionshare.sp-int.playstation.com", "session-share.playstation.com"],
    u = ["PlayStation"];
function h(e) {
    let l = e.embed.url,
        t = e.embed.provider?.name;
    if (null == l || null == t) return null;
    let s = null;
    try {
        s = i.parse(l, !0);
    } catch (e) {
        return null;
    }
    let u = ((e, l) => {
        let { host: t, pathname: r } = l,
            s = [];
        if ((null != r && (s = r.split("/")), "PlayStation" === e)) {
            let e;
            if (null == t || !d.includes(t) || 2 !== s.length) return null;
            let l = s[1];
            return {
                embedUrl: ((e = a.intl.currentLocale), `https://${t}/embed/${l}?locale=${e}`),
                style: { width: 400, height: 300, borderRadius: 6 },
            };
        }
        return null;
    })(t, s);
    return null == u
        ? null
        : (0, r.jsx)("iframe", {
              src: u.embedUrl,
              className: n()(o.u, e.className),
              style: u.style,
              sandbox:
                  "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
          });
}
