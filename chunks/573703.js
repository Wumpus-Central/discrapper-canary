t.d(n, { Z: () => C });
var o = t(54381);
t(473749);
var i = t(481060),
    r = t(63063),
    a = t(376340),
    s = t(981631),
    l = t(388032),
    d = t(942016),
    c = t(38920);
function u() {
    return (0, o.jsx)("div", {
        className: d.__invalid_getCrunchyrollApp,
        children: (0, o.jsx)("div", {
            className: d.__invalid_getCrunchyrollAppBody,
            children: (0, o.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: (0, o.jsx)(i.Anchor, {
                    href: r.Z.getArticleURL(s.BhN.CRUNCHYROLL_CONNECTION),
                    children: l.intl.string(l.t.hvVgAZ),
                }),
            }),
        }),
    });
}
function C(e) {
    let { onClose: n } = e;
    return (0, o.jsx)(a.L, {
        img: (0, o.jsx)("img", {
            src: c,
            width: "224",
            height: "104",
            alt: "",
        }),
        title: l.intl.string(l.t.Fnvxvk),
        body: l.intl.string(l.t.YwXceg),
        content: (0, o.jsx)(u, {}),
        onClose: n,
    });
}
