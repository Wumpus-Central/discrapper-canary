n.d(e, { A: () => g });
var t = n(477900);
n(582128);
var a = n(782134),
    r = n(323384),
    u = n(503698),
    i = n.n(u),
    s = n(821609),
    o = n(104299),
    c = n(710995);
function d(l) {
    let {
            application: e,
            label: n,
            icon: a,
            loading: r = !1,
            onAction: u,
            revealActionOnHover: d = !1,
            className: f,
            children: p,
        } = l,
        g = e.getCoverImageURL(864),
        y = e.getIconURL(128);
    return (0, t.jsxs)("div", {
        className: i()(c.Gt, f, { [c.fD]: d && null != g && !r }),
        children: [
            null != g
                ? (0, t.jsx)("img", { alt: "", src: g, className: c.Iv })
                : null != y
                  ? (0, t.jsx)("img", { alt: "", src: y, className: c.Kk })
                  : (0, t.jsx)(o.A, { applicationId: e.id, name: e.name, glyphSize: 32, className: c.Kk }),
            (0, t.jsx)("div", {
                className: c.XI,
                children: (0, t.jsx)(s.$, { variant: "overlay-primary", icon: a, text: n, loading: r, onClick: u }),
            }),
            p,
        ],
    });
}
var f = n(191850),
    p = n(792996);
function g(l) {
    let { application: e, type: n, launching: u, onAction: i, ...s } = l;
    return "launch" === n
        ? (0, t.jsx)(d, {
              application: e,
              label: p.intl.string(f.default["1cF7L4"]),
              icon: a.PlayIcon,
              loading: u,
              onAction: i,
              ...s,
          })
        : (0, t.jsx)(d, { application: e, label: p.intl.string(p.t["3xjX0U"]), icon: r.AppsIcon, onAction: i, ...s });
}
