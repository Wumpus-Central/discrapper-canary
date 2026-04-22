"use strict";
n.d(t, { d: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(563014),
    l = n(885621),
    u = n(359823);
function d(e) {
    let {
            color: t = "default",
            disabled: n,
            isFocused: s,
            showDefaultFocus: d = !1,
            menuItemProps: c,
            children: _,
        } = e,
        f = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            if (!s) return;
            let e = f.current;
            if (null == e) return;
            (0, o.Y)(f);
            let t = e.querySelector('[tabindex="0"]');
            t?.focus();
        }, [s]),
        (0, r.jsx)("div", {
            ref: f,
            className: a()(u.item, l.jV[t], { [u.disabled]: n, [u.focused]: d && s, [u.hideInteraction]: !d }),
            "aria-disabled": n,
            ...c,
            children: _,
        })
    );
}
