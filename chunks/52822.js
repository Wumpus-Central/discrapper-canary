"use strict";
n.d(t, { d: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(563014),
    l = n(885621),
    u = n(658122);
function c(e) {
    let {
            color: t = "default",
            disabled: n,
            isFocused: a,
            showDefaultFocus: c = !1,
            menuItemProps: d,
            children: _,
        } = e,
        f = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            if (!a) return;
            let e = f.current;
            if (null == e) return;
            (0, o.Y)(f);
            let t = e.querySelector('[tabindex="0"]');
            t?.focus();
        }, [a]),
        (0, r.jsx)("div", {
            ref: f,
            className: s()(u.item, l.jV[t], { [u.disabled]: n, [u.focused]: c && a, [u.hideInteraction]: !c }),
            "aria-disabled": n,
            ...d,
            children: _,
        })
    );
}
