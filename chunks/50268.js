"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(397927),
    o = n(253932),
    l = n(957565);
function u(e) {
    let { id: t, label: n, onSuccess: i, shiftId: u, showIconFirst: c, showWithoutDeveloperMode: d } = e,
        _ = o.Q_.useSetting();
    function f(e) {
        let n = null != u && e.shiftKey ? u : t;
        a()(null != n, "cannot copy null text"), (0, l.C)(n, i);
    }
    let p = d || _;
    if (__OVERLAY__ || !p || !l.p5 || null == t) return null;
    let h = `devmode-copy-id-${t}`;
    return (0, r.jsx)(
        s.Drp,
        {
            id: h,
            label: n,
            action: f,
            icon: c ? void 0 : s.L9S,
            iconLeft: c ? s.L9S : void 0,
            leadingAccessory: { type: "icon", icon: s.L9S },
        },
        h,
    );
}
