n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(512722),
    o = n.n(i),
    a = n(481060),
    s = n(695346),
    l = n(572004);
function c(e) {
    let { id: t, label: n, onSuccess: i, shiftId: c, showIconFirst: u, showWithoutDeveloperMode: d, focusedClassName: f } = e,
        _ = s.Sb.useSetting();
    function p(e) {
        let n = null != c && e.shiftKey ? c : t;
        o()(null != n, 'cannot copy null text'), (0, l.JG)(n), null == i || i();
    }
    let h = d || _;
    if (__OVERLAY__ || !h || !l.wS || null == t) return null;
    let m = 'devmode-copy-id-'.concat(t);
    return (0, r.jsx)(
        a.sNh,
        {
            id: m,
            label: n,
            action: p,
            icon: u ? void 0 : a.VuL,
            iconLeft: u ? a.VuL : void 0,
            focusedClassName: f
        },
        m
    );
}
