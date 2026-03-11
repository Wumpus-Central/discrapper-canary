t.d(n, { A: () => _ });
var o = t(627968);
t(64700);
var i = t(397927),
    r = t(975571),
    s = t(61917),
    l = t(652215),
    a = t(985018),
    d = t(783816),
    c = t(465429);
function C() {
    return (0, o.jsx)("div", {
        className: d.__invalid_getCrunchyrollApp,
        children: (0, o.jsx)("div", {
            className: d.__invalid_getCrunchyrollAppBody,
            children: (0, o.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: (0, o.jsx)(i.MzZ, {
                    href: r.A.getArticleURL(l.MVz.CRUNCHYROLL_CONNECTION),
                    children: a.intl.string(a.t.hvVgAZ),
                }),
            }),
        }),
    });
}
function _(e) {
    let { onClose: n } = e;
    return (0, o.jsx)(s.b, {
        img: (0, o.jsx)("img", { src: c, width: "224", height: "104", alt: "" }),
        title: a.intl.string(a.t.Fnvxvk),
        body: a.intl.string(a.t.YwXceg),
        content: (0, o.jsx)(C, {}),
        onClose: n,
    });
}
