t.d(n, { A: () => m });
var l = t(477900),
    i = t(582128);
t(580321);
var a = t(849516),
    s = t(17928),
    r = t(446243),
    o = t(558076),
    c = t(544299),
    u = t(204651),
    d = t(375708),
    A = t(1195);
function m(e) {
    let { channel: n, themeable: t } = e,
        m = (0, s.bG)([o.A], () => null != o.A.getPendingNote(n.id)),
        h = (0, s.bG)([o.A], () => o.A.getNotes(n.id).length >= 20),
        C = i.useRef(null);
    return (
        i.useEffect(() => {
            (0, c.FE)(n.id) && C.current?.focus();
        }, [n.id]),
        (0, l.jsx)(u.l, {
            isTrayButton: !0,
            themeable: t,
            label: h ? d.intl.string(A.default.k4cbsb) : d.intl.string(A.default["lL1Y+d"]),
            iconComponent: a.u,
            buttonRef: C,
            onClick: function () {
                (0, r.WT)(n.id);
            },
            disabled: m || h,
        })
    );
}
