n.d(t, { A: () => f }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(434650),
    o = n(110924),
    l = n(451478),
    u = n(915750);
let c = (e) => {
        let [t, n] = r.useState(!1),
            i = null != e ? e : t,
            a = i !== (0, o.Z)(i);
        return {
            visible: i,
            visibleChanged: a,
            reference: (0, s.O)((e) => n(e), u.PI)
        };
    },
    d = () => {
        let e = (0, a.e7)([l.Z], () => l.Z.isFocused()),
            t = e !== (0, o.Z)(e);
        return {
            focused: e,
            focusedChanged: t
        };
    };
function f(e) {
    let { focused: t, focusedChanged: n } = d(),
        { visible: a, visibleChanged: s, reference: o } = c(e.overrideVisibility),
        l = {
            ...e,
            focused: t,
            focusedChanged: n,
            visible: a,
            visibleChanged: s,
            reference: o,
            impression: r.useRef(null)
        };
    return (0, i.jsx)(u.ui, { ...l }, (0, u.B5)(e.questOrQuests, e.questContent));
}
