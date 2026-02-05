e.d(n, { A: () => c });
var i = e(627968),
    l = e(64700),
    a = e(397927),
    r = e(308528),
    d = e(994500),
    o = e(287809),
    s = e(47167),
    u = e(985018);
function c(t, n) {
    let c = l.useCallback(() => {
        let l = (0, s.m1)(t, o.default, d.A),
            c = u.intl.formatToPlainString(u.t.hJ5Ap4, { name: l }),
            A = u.intl.format(u.t.SSIVOu, { name: l });
        t.isManaged() &&
            ((c = u.intl.formatToPlainString(u.t.hVGjEW, { name: l })), (A = u.intl.format(u.t.IK1Qvs, { name: l })));
        let f = function (e) {
            let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            r.A.closePrivateChannel(t.id, n, i);
        };
        (0, a.mMO)(async () => {
            let { default: t } = await e.e("37803").then(e.bind(e, 148166));
            return (n) => (0, i.jsx)(t, { title: c, body: A, onSubmit: f, ...n });
        });
    }, [t, n]);
    return (0, i.jsx)(a.Drp, { id: "leave-channel", label: u.intl.string(u.t["26C4oi"]), action: c, color: "danger" });
}
