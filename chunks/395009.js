n.d(e, { A: () => g });
var t = n(477900);
n(582128);
var a = n(782134),
    u = n(323384),
    r = n(503698),
    i = n.n(r),
    s = n(821609),
    c = n(104299),
    o = n(710995);
function d(l) {
    let {
            application: e,
            label: n,
            icon: a,
            loading: u = !1,
            onAction: r,
            revealActionOnHover: d = !1,
            className: f,
            children: p,
        } = l,
        g = e.getCoverImageURL(864),
        y = e.getIconURL(128);
    return (0, t.jsxs)("div", {
        className: i()(o.Gt, f, { [o.fD]: d && null != g && !u }),
        children: [
            null != g
                ? (0, t.jsx)("img", { alt: "", src: g, className: o.Iv })
                : null != y
                  ? (0, t.jsx)("img", { alt: "", src: y, className: o.Kk })
                  : (0, t.jsx)(c.A, { applicationId: e.id, name: e.name, glyphSize: 32, className: o.Kk }),
            (0, t.jsx)("div", {
                className: o.XI,
                children: (0, t.jsx)(s.$, { variant: "overlay-primary", icon: a, text: n, loading: u, onClick: r }),
            }),
            p,
        ],
    });
}
var f = n(191850),
    p = n(792996);
function g(l) {
    let { application: e, type: n, launching: r, onAction: i, ...s } = l;
    return "launch" === n
        ? (0, t.jsx)(d, {
              application: e,
              label: p.intl.string(f.default["1cF7L4"]),
              icon: a.PlayIcon,
              loading: r,
              onAction: i,
              ...s,
          })
        : (0, t.jsx)(d, { application: e, label: p.intl.string(p.t["3xjX0U"]), icon: u.AppsIcon, onAction: i, ...s });
}
