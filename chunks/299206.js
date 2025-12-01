n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(512722),
    a = n.n(i),
    o = n(481060),
    s = n(695346),
    l = n(572004);
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
        p = s.Sb.useSetting();
    function _(e) {
        let n = null != c && e.shiftKey ? c : t;
        a()(null != n, "cannot copy null text"), (0, l.JG)(n, i);
    }
    let m = d || p;
    if (__OVERLAY__ || !m || !l.wS || null == t) return null;
    let h = "devmode-copy-id-".concat(t);
    return (0, r.jsx)(
        o.sNh,
        {
            id: h,
            label: n,
            action: _,
            icon: u ? void 0 : o.VuL,
            iconLeft: u ? o.VuL : void 0,
            focusedClassName: f,
        },
        h,
    );
}
