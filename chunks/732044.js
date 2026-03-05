"use strict";
n.d(t, { A: () => o });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(453738),
    a = n(58736);
let o = function (e) {
    let { channel: t } = e,
        [n, o] = s.useState(!1),
        c = s.useRef(null);
    return (0, i.jsx)(l.YNO, {
        targetElementRef: c,
        shouldShow: n,
        animation: l.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        ignoreModalClicks: !0,
        onRequestClose: () => o(!1),
        renderPopout: function (e) {
            return (0, i.jsx)(r.A, { ...e, channel: t, onClose: () => o(!1) });
        },
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(a.In, {
                ...e,
                ref: c,
                onClick: () => o((e) => !e),
                tooltip: n ? null : "Conversations",
                icon: l.oyn,
                iconSize: 20,
                "aria-label": "Conversations",
                selected: n,
            });
        },
    });
};
