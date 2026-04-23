"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(861672),
    s = n(477782),
    a = n(985018);
let o = (e) => {
    let { onChangeAvatar: t, onChangeAvatarDecoration: n, onClose: o } = e;
    return (0, r.jsxs)(i.W, {
        "data-menu-migrated": !0,
        onClose: o,
        onSelect: void 0,
        navId: "user-settings-change-avatar",
        "aria-label": a.intl.string(a.t.ldIeAd),
        children: [
            (0, r.jsx)(s.Dr, { id: "change-avatar", action: t, label: a.intl.string(a.t["4OynCD"]) }),
            (0, r.jsx)(s.Dr, { id: "change-avatar-decoration", action: n, label: a.intl.string(a.t.BVcYCx) }),
        ],
    });
};
