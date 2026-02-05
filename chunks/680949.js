n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(417597),
    a = n(397927),
    r = n(318937),
    o = n(533117),
    d = n(134753),
    c = n(709562),
    u = n(60504),
    h = n(985018);
function A() {
    let e = (0, s.bG)([o.A], () => o.A.getDrawMode()),
        t = e?.type === d.Z.LINE,
        n = l.useRef(null),
        A = () => {
            t ? (0, r.Ol)(null) : (0, r.Ol)({ type: d.Z.LINE });
        };
    return (0, i.jsx)(u.A, {
        renderPopout: () => null,
        popoutTargetRef: n,
        children: (e) => {
            let { ...l } = e;
            return (0, i.jsx)(c.A, {
                ...l,
                buttonRef: n,
                label: h.intl.string(h.t.ZQCf9V),
                isActive: t,
                iconComponent: a.R2l,
                onClick: A,
            });
        },
    });
}
