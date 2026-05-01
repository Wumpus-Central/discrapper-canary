e.d(n, { A: () => s });
var i = e(627968);
e(64700);
var l = e(284009),
    r = e.n(l),
    a = e(477782),
    u = e(473935),
    c = e(253932),
    d = e(957565);
function s(t) {
    let { id: n, label: e, onSuccess: l, shiftId: s, showIconFirst: o, showWithoutDeveloperMode: p } = t,
        A = c.Q_.useSetting();
    if (__OVERLAY__ || !(p || A) || !d.p5 || null == n) return null;
    let y = `devmode-copy-id-${n}`;
    return (0, i.jsx)(
        a.Dr,
        {
            id: y,
            label: e,
            action: function (t) {
                let e = null != s && t.shiftKey ? s : n;
                r()(null != e, "cannot copy null text"), (0, d.C)(e, l);
            },
            icon: o ? void 0 : u.L,
            iconLeft: o ? u.L : void 0,
            leadingAccessory: { type: "icon", icon: u.L },
        },
        y,
    );
}
