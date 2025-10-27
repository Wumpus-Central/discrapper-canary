t.d(e, { Z: () => C });
var o = t(951288);
t(647438);
var i = t(481060),
    r = t(63063),
    s = t(376340),
    l = t(981631),
    a = t(388032),
    c = t(224942),
    d = t(38920);
function u() {
    return (0, o.jsx)("div", {
        className: c.__invalid_getCrunchyrollApp,
        children: (0, o.jsx)("div", {
            className: c.__invalid_getCrunchyrollAppBody,
            children: (0, o.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "header-secondary",
                children: (0, o.jsx)(i.Anchor, {
                    href: r.Z.getArticleURL(l.BhN.CRUNCHYROLL_CONNECTION),
                    children: a.intl.string(a.t.hvVgAZ),
                }),
            }),
        }),
    });
}
function C(n) {
    let { onClose: e } = n;
    return (0, o.jsx)(s.L, {
        img: (0, o.jsx)("img", {
            src: d,
            width: "224",
            height: "104",
            alt: "",
        }),
        title: a.intl.string(a.t.Fnvxvk),
        body: a.intl.string(a.t.YwXceg),
        content: (0, o.jsx)(u, {}),
        onClose: e,
    });
}
