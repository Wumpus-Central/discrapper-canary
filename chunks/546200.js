n.d(t, { EmojiStudioModal: () => s });
var r = n(951288);
n(647438);
var l = n(481060),
    i = n(375727),
    a = n(867248);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let s = (e) => {
    let { transitionState: t, guildId: n } = e,
        s = "userImage" in e ? e.userImage : void 0,
        u = "emoji" in e ? e.emoji : void 0,
        c = o({ guildId: n }, null != u ? { emoji: u } : null != s ? { userImage: s } : {});
    return (0, r.jsx)(l.Y0X, {
        transitionState: t,
        size: l.CgR.DYNAMIC,
        fullscreenOnMobile: !1,
        className: a.modalRoot,
        parentComponent: "Modal",
        children: (0, r.jsx)(l.hzk, {
            scrollbarType: "none",
            className: a.modalContent,
            children: (0, r.jsx)(i.I, o({}, c)),
        }),
    });
};
