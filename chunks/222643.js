t.d(n, { x: () => d });
var i = t(477900),
    l = t(582128),
    s = t(17928),
    a = t(623646),
    r = t(43189),
    o = t(964404),
    c = t(461782),
    u = t(447404);
function d(e) {
    let {
            buttonRef: n,
            dismissed: t,
            onDismiss: d,
            renderComponent: A,
            nudgeAlignIntoViewport: h = !1,
            skipForceHide: m = !1,
        } = e,
        g = l.useContext(c.vG),
        [x, C] = l.useState(""),
        [f, p] = l.useState(!1),
        E = (0, s.bG)([o.Ay], () => o.Ay.callHeaderHeight),
        j = l.useRef(null),
        v = l.useRef(0);
    (l.useEffect(() => {
        let e = n.current;
        if (null != e) return (e.addEventListener("click", d), () => e.removeEventListener("click", d));
    }),
        l.useEffect(() => {
            m || (C(String(v.current)), p(void 0 !== E && E < (j.current?.clientHeight ?? 300) + 24), (v.current += 1));
        }, [E, j, m]));
    let { preventIdle: I, allowIdle: N } = (0, u.o)("popup");
    return n?.current == null
        ? null
        : (0, i.jsx)(r.Ay, {
              children: (0, i.jsx)(a.Q, {
                  targetRef: n,
                  position: "top",
                  align: "center",
                  spacing: 0,
                  positionKey: x,
                  nudgeAlignIntoViewport: h,
                  children: () =>
                      (0, i.jsx)("div", {
                          ref: j,
                          onMouseOver: I,
                          onFocus: I,
                          onBlur: N,
                          onMouseLeave: N,
                          children: A({ hidden: f || g || t, onDismiss: d }),
                      }),
              }),
          });
}
