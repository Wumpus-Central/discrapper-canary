i.d(n, { A: () => d });
var e = i(477900);
i(582128);
var l = i(284009),
    r = i.n(l),
    a = i(477782),
    o = i(473935),
    u = i(885386),
    c = i(957565);
function d(t) {
    let { id: n, label: i, onSuccess: l, shiftId: d, showIconFirst: s, showWithoutDeveloperMode: p } = t,
        A = u.Q_.useSetting();
    if (__OVERLAY__ || !(p || A) || !c.p5 || null == n) return null;
    let y = `devmode-copy-id-${n}`;
    return (0, e.jsx)(
        a.Dr,
        {
            id: y,
            label: i,
            action: function (t) {
                let i = null != d && t.shiftKey ? d : n;
                r()(null != i, "cannot copy null text"), (0, c.C)(i, l);
            },
            icon: s ? void 0 : o.L,
            iconLeft: s ? o.L : void 0,
            leadingAccessory: { type: "icon", icon: o.L },
        },
        y,
    );
}
