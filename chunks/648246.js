"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(908289),
    s = n(960076),
    o = n(985018);
function l(e) {
    let { activity: t, onAction: n, variant: l = "secondary", size: u = "sm", ...c } = e;
    if (!(0, s.A)(t)) return null;
    let d = () => {
        n?.();
        let e = (0, a.A)(t);
        return window.open(null != e ? e : void 0);
    };
    return (0, r.jsx)(i.Button, {
        variant: l,
        size: u,
        text: o.intl.string(o.t.I6JG46),
        onClick: d,
        fullWidth: !0,
        ...c,
    });
}
