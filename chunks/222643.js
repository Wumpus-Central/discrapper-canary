t.d(n, { x: () => d });
var i = t(477900),
    l = t(582128),
    a = t(17928),
    s = t(623646),
    o = t(43189),
    r = t(742023),
    c = t(461782),
    u = t(447404);
function d(e) {
    let {
            buttonRef: n,
            dismissed: t,
            onDismiss: d,
            renderComponent: A,
            nudgeAlignIntoViewport: m = !1,
            skipForceHide: h = !1,
        } = e,
        C = l.useContext(c.vG),
        [p, x] = l.useState(""),
        [g, f] = l.useState(!1),
        E = (0, a.bG)([r.Ay], () => r.Ay.callHeaderHeight),
        I = l.useRef(null),
        v = l.useRef(0);
    (l.useEffect(() => {
        let e = n.current;
        if (null != e) return (e.addEventListener("click", d), () => e.removeEventListener("click", d));
    }),
        l.useEffect(() => {
            h || (x(String(v.current)), f(void 0 !== E && E < (I.current?.clientHeight ?? 300) + 24), (v.current += 1));
        }, [E, I, h]));
    let { preventIdle: T, allowIdle: j } = (0, u.o)("popup");
    return n?.current == null
        ? null
        : (0, i.jsx)(o.Ay, {
              children: (0, i.jsx)(s.Q, {
                  targetRef: n,
                  position: "top",
                  align: "center",
                  spacing: 0,
                  positionKey: p,
                  nudgeAlignIntoViewport: m,
                  children: () =>
                      (0, i.jsx)("div", {
                          ref: I,
                          onMouseOver: T,
                          onFocus: T,
                          onBlur: j,
                          onMouseLeave: j,
                          children: A({ hidden: g || C || t, onDismiss: d }),
                      }),
              }),
          });
}
