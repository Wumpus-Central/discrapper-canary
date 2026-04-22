"use strict";
n.d(t, { B: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(844222),
    l = n(545442),
    u = n(935154),
    d = n(486020),
    c = n(32271);
function _(e) {
    let { accessory: t, isFocused: n } = e,
        { reducedMotion: s } = i.useContext(o.C);
    switch (t.type) {
        case "icon": {
            let { type: e, icon: n, color: i = "currentColor", className: s, ...o } = t;
            return (0, r.jsx)("div", {
                className: c.iconContainerLeft,
                children: (0, r.jsx)(n, { "aria-hidden": !0, color: i, ...o, className: a()(c.icon, s) }),
            });
        }
        case "emoji": {
            let e = (function (e, t, n) {
                let { emojiId: r, src: i, animated: s = !1 } = e;
                return null != r ? d.Ay.getEmojiURL({ id: r, animated: s && (!n || t), size: 18 }) : i;
            })(t, n, s.enabled);
            return (0, r.jsx)("div", {
                className: c.iconContainerLeft,
                children: (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: e, className: c.icon }),
            });
        }
        case "image":
            return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: c.imageAccessory });
        case "avatar":
            return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: c.avatarAccessory });
        case "roleDot": {
            let { variant: e, color: n, colors: i } = t;
            return (0, r.jsx)("div", {
                className: c.roleDotAccessory,
                children:
                    "dot" === e
                        ? (0, r.jsx)(l.W, { color: n, colors: i, background: !1, tooltip: !1 })
                        : (0, r.jsx)(l.R, { color: n, colors: i ?? null }),
            });
        }
        case "status": {
            let { status: e } = t;
            return (0, r.jsx)("div", {
                className: c.statusAccessory,
                children: (0, r.jsx)(u.nW, { status: e, size: 10, color: n ? "currentColor" : void 0 }),
            });
        }
        case "guildTag":
            return (0, r.jsx)("div", { className: c.guildTagAccessory, children: t.element });
    }
}
