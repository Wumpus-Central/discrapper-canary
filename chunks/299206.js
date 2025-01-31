n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(512722),
    a = n.n(r),
    s = n(481060),
    o = n(695346),
    l = n(572004);
function u(e) {
    let { id: t, label: n, onSuccess: r, shiftId: u, showIconFirst: c, showWithoutDeveloperMode: d, focusedClassName: f } = e,
        _ = o.Sb.useSetting();
    function p(e) {
        let n = null != u && e.shiftKey ? u : t;
        a()(null != n, 'cannot copy null text'), (0, l.JG)(n), null == r || r();
    }
    let h = d || _;
    if (__OVERLAY__ || !h || !l.wS || null == t) return null;
    let m = 'devmode-copy-id-'.concat(t);
    return (0, i.jsx)(
        s.sNh,
        {
            id: m,
            label: n,
            action: p,
            icon: c ? void 0 : s.VuL,
            iconLeft: c ? s.VuL : void 0,
            focusedClassName: f
        },
        m
    );
}
