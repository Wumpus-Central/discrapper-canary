"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(284009),
    s = n.n(r),
    a = n(477782),
    o = n(473935),
    l = n(885386),
    u = n(957565);
function c(e) {
    let { id: t, label: n, onSuccess: r, shiftId: c, showIconFirst: d, showWithoutDeveloperMode: _ } = e,
        f = l.Q_.useSetting();
    if (__OVERLAY__ || !(_ || f) || !u.p5 || null == t) return null;
    let h = `devmode-copy-id-${t}`;
    return (0, i.jsx)(
        a.Dr,
        {
            id: h,
            label: n,
            action: function (e) {
                let n = null != c && e.shiftKey ? c : t;
                s()(null != n, "cannot copy null text"), (0, u.C)(n, r);
            },
            icon: d ? void 0 : o.L,
            iconLeft: d ? o.L : void 0,
            leadingAccessory: { type: "icon", icon: o.L },
        },
        h,
    );
}
