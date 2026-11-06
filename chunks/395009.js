n.d(e, { A: () => f });
var t = n(477900);
n(582128);
var a = n(782134),
    u = n(323384),
    r = n(821609),
    i = n(104299),
    s = n(710995);
function c(l) {
    let { application: e, label: n, icon: a, loading: u = !1, onAction: c } = l,
        o = e.getCoverImageURL(864),
        d = e.getIconURL(128);
    return (0, t.jsxs)("div", {
        className: s.Gt,
        children: [
            null != o
                ? (0, t.jsx)("img", { alt: "", src: o, className: s.Iv })
                : null != d
                  ? (0, t.jsx)("img", { alt: "", src: d, className: s.Kk })
                  : (0, t.jsx)(i.A, { applicationId: e.id, name: e.name, glyphSize: 32, className: s.Kk }),
            (0, t.jsx)("div", {
                className: s.XI,
                children: (0, t.jsx)(r.$, { variant: "overlay-primary", icon: a, text: n, loading: u, onClick: c }),
            }),
        ],
    });
}
var o = n(191850),
    d = n(792996);
function f(l) {
    let { application: e, type: n, launching: r, onAction: i } = l;
    return "launch" === n
        ? (0, t.jsx)(c, {
              application: e,
              label: d.intl.string(o.default["1cF7L4"]),
              icon: a.PlayIcon,
              loading: r,
              onAction: i,
          })
        : (0, t.jsx)(c, { application: e, label: d.intl.string(d.t["3xjX0U"]), icon: u.AppsIcon, onAction: i });
}
