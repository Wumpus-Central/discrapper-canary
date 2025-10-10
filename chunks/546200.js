n.d(t, { EmojiStudioModal: () => o });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(375727),
    a = n(867248);
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
    return (0, r.jsx)(i.Y0X, {
        "data-migration-pending": !0,
        transitionState: t,
        size: i.CgR.DYNAMIC,
        fullscreenOnMobile: !1,
        className: a.modalRoot,
        parentComponent: "Modal",
        children: (0, r.jsx)(i.hzk, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: a.modalContent,
            children: (0, r.jsx)(l.I, s({}, c)),
        }),
    });
};
