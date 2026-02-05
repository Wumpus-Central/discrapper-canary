"use strict";
n.d(t, { EE: () => l, Xj: () => u, cZ: () => i, cy: () => s, iO: () => a, l8: () => o }), n(321073);
var r = n(64700);
function i(e, t) {
    if (null != e) {
        if ("function" == typeof e) return void e(t);
        "object" == typeof e && "current" in e && (e.current = t);
    }
}
function a(e, t) {
    let n = (e ?? "").trim(),
        r = (t ?? "").trim();
    if ("" === n) return r;
    if ("" === r) return n;
    let i = ` ${n} `,
        a = r.split(/\s+/).filter(Boolean),
        s = [];
    for (let e of a) {
        let t = ` ${e} `;
        i.includes(t) || s.push(e);
    }
    return 0 === s.length ? n : `${n} ${s.join(" ")}`.trim();
}
function s(e, t) {
    if (null != e || null != t)
        return function () {
            for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            "function" == typeof e && e(...r), "function" == typeof t && t(...r);
        };
}
function o(e) {
    switch (e) {
        case "top":
        default:
            return "bottom";
        case "bottom":
            return "top";
        case "left":
            return "right";
        case "right":
            return "left";
    }
}
function l(e) {
    let { tag: t, className: n, tabIndex: i, children: a, triggerHandlers: s, describedById: o, triggerRef: l } = e;
    return r.createElement(
        t,
        {
            ref: l,
            className: n,
            tabIndex: i,
            onMouseEnter: s.onMouseEnter,
            onMouseLeave: s.onMouseLeave,
            onFocus: s.onFocus,
            onBlur: s.onBlur,
            onContextMenu: s.onContextMenu,
            onClick: s.onClick,
            ...(null != o && "" !== o ? { "aria-describedby": o } : {}),
        },
        a,
    );
}
function u(e) {
    if (null == e) return "";
    if ("string" == typeof e) return e;
    try {
        return JSON.stringify(e);
    } catch {
        return String(e);
    }
}
