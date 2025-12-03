e.d(t, { Z: () => C });
var o = e(54381);
e(473749);
var i = e(481060),
    r = e(63063),
    s = e(376340),
    l = e(981631),
    a = e(388032),
    c = e(224942),
    d = e(38920);
function u() {
    return (0, o.jsx)("div", {
        className: c.__invalid_getCrunchyrollApp,
        children: (0, o.jsx)("div", {
            className: c.__invalid_getCrunchyrollAppBody,
            children: (0, o.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: (0, o.jsx)(i.Anchor, {
                    href: r.Z.getArticleURL(l.BhN.CRUNCHYROLL_CONNECTION),
                    children: a.intl.string(a.t.hvVgAZ),
                }),
            }),
        }),
    });
}
function C(n) {
    let { onClose: t } = n;
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
        onClose: t,
    });
}
