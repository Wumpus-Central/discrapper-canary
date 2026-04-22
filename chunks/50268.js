i.d(e, { A: () => d });
var l = i(627968);
i(64700);
var a = i(284009),
    n = i.n(a),
    r = i(477782),
    s = i(473935),
    o = i(253932),
    c = i(957565);
function d(t) {
    let { id: e, label: i, onSuccess: a, shiftId: d, showIconFirst: u, showWithoutDeveloperMode: _ } = t,
        p = o.Q_.useSetting();
    if (__OVERLAY__ || !(_ || p) || !c.p5 || null == e) return null;
    let f = `devmode-copy-id-${e}`;
    return (0, l.jsx)(
        r.Dr,
        {
            id: f,
            label: i,
            action: function (t) {
                let i = null != d && t.shiftKey ? d : e;
                n()(null != i, "cannot copy null text"), (0, c.C)(i, a);
            },
            icon: u ? void 0 : s.L,
            iconLeft: u ? s.L : void 0,
            leadingAccessory: { type: "icon", icon: s.L },
        },
        f,
    );
}
