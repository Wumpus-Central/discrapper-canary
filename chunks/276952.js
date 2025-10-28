n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(13941),
    s = n(481060),
    l = n(82364);
let c = Object.freeze({
        tension: 400,
        friction: 30,
    }),
    u = Object.freeze({
        opacity: 0,
        height: 8,
        transform: "translateX(-4px) translateZ(0)",
    });
function d(e) {
    let { selected: t = !1, hovered: n = !1, unread: i = !1, disabled: d = !1, className: f } = e;
    (t = !d && t), (n = !d && n), (i = !d && i);
    let _ = {
            opacity: 1,
            height: t ? 40 : n ? 20 : 8,
            transform: "translateX(0) translateZ(0)",
        },
        p = (0, s.Yzy)(
            t || n || i,
            {
                config: c,
                keys: (e) => (e ? "pill" : "empty"),
                initial: t || n || i ? _ : null,
                from: u,
                leave: u,
                enter: _,
                update: _,
            },
            n || document.hasFocus() ? "animate-always" : "animate-never",
        );
    return (0, r.jsx)("div", {
        className: a()(f, l.wrapper),
        "aria-hidden": !0,
        children: p(
            (e, t) =>
                t &&
                (0, r.jsx)(o.animated.span, {
                    className: l.item,
                    style: e,
                }),
        ),
    });
}
