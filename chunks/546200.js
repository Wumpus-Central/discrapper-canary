n.d(t, { EmojiStudioModal: () => s });
var l = n(54381);
n(473749);
var r = n(481060),
    i = n(375727),
    a = n(666416);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let s = (e) => {
    let { transitionState: t, guildId: n } = e,
        s = "userImage" in e ? e.userImage : void 0,
        u = "emoji" in e ? e.emoji : void 0,
        c = o({ guildId: n }, null != u ? { emoji: u } : null != s ? { userImage: s } : {});
    return (0, l.jsx)(r.Y0X, {
        "data-migration-pending": !0,
        transitionState: t,
        size: r.CgR.DYNAMIC,
        fullscreenOnMobile: !1,
        className: a.modalRoot,
        parentComponent: "Modal",
        children: (0, l.jsx)(r.hzk, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: a.modalContent,
            children: (0, l.jsx)(i.I, o({}, c)),
        }),
    });
};
