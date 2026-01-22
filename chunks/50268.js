n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(397927),
    o = n(253932),
    l = n(957565);

function c(e) {
    let {
            id: t,
            label: n,
            onSuccess: i,
            shiftId: c,
            showIconFirst: u,
            showWithoutDeveloperMode: d,
            focusedClassName: f,
        } = e,
        p = o.Q_.useSetting();

    function _(e) {
        let n = null != c && e.shiftKey ? c : t;
        a()(null != n, "cannot copy null text"), (0, l.C)(n, i);
    }
    let h = d || p;
    if (__OVERLAY__ || !h || !l.p5 || null == t) return null;
    let m = "devmode-copy-id-".concat(t);
    return (0, r.jsx)(
        s.Drp,
        {
            id: m,
            label: n,
            action: _,
            icon: u ? void 0 : s.L9S,
            iconLeft: u ? s.L9S : void 0,
            focusedClassName: f,
        },
        m,
    );
}
