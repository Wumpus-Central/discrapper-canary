n.d(t, { Z: () => d }), n(704826), n(35282);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(729594),
    s = n(785992),
    l = n(616922),
    c = n(838983);
function u(e) {
    let t = /intl-[^/]+\//;
    return e.replace(t, "");
}
function d(e) {
    let {
        className: t,
        embed: { url: n },
    } = e;
    if (null == n) return null;
    let i = null,
        d = null;
    try {
        let e = o.parse(u(n), !0);
        (i = e.host), (d = e.pathname);
    } catch (e) {
        return null;
    }
    if (!(0, s.E)(i) || null == d) return null;
    let f = d.split("/"),
        p = null != f[1] ? f[1].toLowerCase() : null,
        _ = null != f[3] ? f[3].toLowerCase() : null,
        m = f[4];
    if (
        !["track", "playlist", "album", "artist", "user", "show", "episode"].includes(null != p ? p : "") ||
        ("user" === p && "playlist" !== _)
    )
        return null;
    "user" === p && "playlist" === _ && null != m && (d = "/playlist/".concat(m));
    let h = 352;
    return (
        "track" === p ? (h = 80) : ("episode" === p || "show" === p) && (h = 232),
        (0, r.jsx)("iframe", {
            className: a()(c.embedSpotify, t),
            src: l.C7.EMBED(d),
            style: {
                maxWidth: 400,
                minWidth: 300,
                width: "100%",
                height: h,
            },
            frameBorder: 0,
            sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
            allow: "clipboard-write",
        })
    );
}
