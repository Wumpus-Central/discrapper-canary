i.d(t, { A: () => h });
var n = i(477900);
i(582128);
var l = i(284009),
    s = i.n(l),
    c = i(477782),
    o = i(473935),
    d = i(885386),
    a = i(957565);
function h(e) {
    let { id: t, label: i, onSuccess: l, shiftId: h, showIconFirst: r, showWithoutDeveloperMode: u } = e,
        p = d.Q_.useSetting();
    if (__OVERLAY__ || !(u || p) || !a.p5 || null == t) return null;
    let v = `devmode-copy-id-${t}`;
    return (0, n.jsx)(
        c.Dr,
        {
            id: v,
            label: i,
            action: function (e) {
                let i = null != h && e.shiftKey ? h : t;
                (s()(null != i, "cannot copy null text"), (0, a.C)(i, l));
            },
            icon: r ? void 0 : o.L,
            iconLeft: r ? o.L : void 0,
            leadingAccessory: { type: "icon", icon: o.L },
        },
        v,
    );
}
