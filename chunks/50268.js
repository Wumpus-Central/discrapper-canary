n.d(e, { A: () => s });
var i = n(627968);
n(64700);
var r = n(284009),
    l = n.n(r),
    o = n(477782),
    u = n(473935),
    a = n(885386),
    c = n(957565);
function s(t) {
    let { id: e, label: n, onSuccess: r, shiftId: s, showIconFirst: d, showWithoutDeveloperMode: A } = t,
        p = a.Q_.useSetting();
    if (__OVERLAY__ || !(A || p) || !c.p5 || null == e) return null;
    let f = `devmode-copy-id-${e}`;
    return (0, i.jsx)(
        o.Dr,
        {
            id: f,
            label: n,
            action: function (t) {
                let n = null != s && t.shiftKey ? s : e;
                l()(null != n, "cannot copy null text"), (0, c.C)(n, r);
            },
            icon: d ? void 0 : u.L,
            iconLeft: d ? u.L : void 0,
            leadingAccessory: { type: "icon", icon: u.L },
        },
        f,
    );
}
