n.d(t, { EmojiStudioModal: () => o });
var r = n(951288);
n(647438);
var l = n(481060),
    a = n(375727),
    i = n(867248);
function s(e) {
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
let o = (e) => {
    let { transitionState: t, guildId: n } = e,
        o = "userImage" in e ? e.userImage : void 0,
        u = "emoji" in e ? e.emoji : void 0,
        c = s({ guildId: n }, null != u ? { emoji: u } : null != o ? { userImage: o } : {});
    return (0, r.jsx)(l.Y0X, {
        transitionState: t,
        size: l.CgR.DYNAMIC,
        fullscreenOnMobile: !1,
        className: i.modalRoot,
        parentComponent: "Modal",
        children: (0, r.jsx)(l.hzk, {
            scrollbarType: "none",
            className: i.modalContent,
            children: (0, r.jsx)(a.I, s({}, c)),
        }),
    });
};
