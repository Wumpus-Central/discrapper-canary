n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(512722),
    a = n.n(i),
    o = n(481060),
    s = n(695346),
    l = n(572004);
function c(e) {
    let { id: t, label: n, onSuccess: i, shiftId: c, showIconFirst: u, showWithoutDeveloperMode: d, focusedClassName: f } = e,
        _ = s.Sb.useSetting();
    function p(e) {
        let n = null != c && e.shiftKey ? c : t;
        a()(null != n, 'cannot copy null text'), (0, l.JG)(n, i);
    }
    let h = d || _;
    if (__OVERLAY__ || !h || !l.wS || null == t) return null;
    let m = 'devmode-copy-id-'.concat(t);
    return (0, r.jsx)(
        o.sNh,
        {
            id: m,
            label: n,
            action: p,
            icon: u ? void 0 : o.VuL,
            iconLeft: u ? o.VuL : void 0,
            focusedClassName: f
        },
        m
    );
}
