t.d(n, { x: () => d });
var l = t(477900),
    i = t(582128),
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
        C = i.useContext(c.vG),
        [p, x] = i.useState(""),
        [g, f] = i.useState(!1),
        E = (0, a.bG)([r.Ay], () => r.Ay.callHeaderHeight),
        I = i.useRef(null),
        v = i.useRef(0);
    (i.useEffect(() => {
        let e = n.current;
        if (null != e) return (e.addEventListener("click", d), () => e.removeEventListener("click", d));
    }),
        i.useEffect(() => {
            h || (x(String(v.current)), f(void 0 !== E && E < (I.current?.clientHeight ?? 300) + 24), (v.current += 1));
        }, [E, I, h]));
    let { preventIdle: j, allowIdle: T } = (0, u.o)("popup");
    return n?.current == null
        ? null
        : (0, l.jsx)(o.Ay, {
              children: (0, l.jsx)(s.Q, {
                  targetRef: n,
                  position: "top",
                  align: "center",
                  spacing: 0,
                  positionKey: p,
                  nudgeAlignIntoViewport: m,
                  children: () =>
                      (0, l.jsx)("div", {
                          ref: I,
                          onMouseOver: j,
                          onFocus: j,
                          onBlur: T,
                          onMouseLeave: T,
                          children: A({ hidden: g || C || t, onDismiss: d }),
                      }),
              }),
          });
}
