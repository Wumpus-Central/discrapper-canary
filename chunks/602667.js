r.d(n, {
    A: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(434650),
    u = r(110924),
    c = r(451478),
    d = r(915750);
let f = (e) => {
        let [n, r] = o.useState(!1),
            i = null != e ? e : n,
            a = i !== (0, u.Z)(i);
        return {
            visible: i,
            visibleChanged: a,
            reference: (0, l.O)((e) => r(e), d.PI)
        };
    },
    p = () => {
        let e = (0, s.e7)([c.Z], () => c.Z.isFocused()),
            n = e !== (0, u.Z)(e);
        return {
            focused: e,
            focusedChanged: n
        };
    };
function h(e) {
    let { focused: n, focusedChanged: r } = p(),
        { visible: i, visibleChanged: s, reference: l } = f(e.overrideVisibility),
        u = {
            ...e,
            focused: n,
            focusedChanged: r,
            visible: i,
            visibleChanged: s,
            reference: l,
            impression: o.useRef(null)
        };
    return (0, a.jsx)(d.ui, { ...u }, (0, d.B5)(e.questOrQuests, e.questContent));
}
