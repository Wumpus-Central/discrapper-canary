t.d(e, {
    A: () => b,
});
var i = t(627968);
t(64700);
var o = t(397927),
    r = t(975571),
    s = t(236863),
    a = t(652215),
    d = t(985018),
    l = t(506542),
    c = t(465429);

function C() {
    return (0, i.jsx)("div", {
        className: l.__invalid_getCrunchyrollApp,
        children: (0, i.jsx)("div", {
            className: l.__invalid_getCrunchyrollAppBody,
            children: (0, i.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: (0, i.jsx)(o.MzZ, {
                    href: r.A.getArticleURL(a.MVz.CRUNCHYROLL_CONNECTION),
                    children: d.intl.string(d.t.hvVgAZ),
                }),
            }),
        }),
    });
}

function b(n) {
    let { onClose: e } = n;
    return (0, i.jsx)(s.b, {
        img: (0, i.jsx)("img", {
            src: c,
            width: "224",
            height: "104",
            alt: "",
        }),
        title: d.intl.string(d.t.Fnvxvk),
        body: d.intl.string(d.t.YwXceg),
        content: (0, i.jsx)(C, {}),
        onClose: e,
    });
}
