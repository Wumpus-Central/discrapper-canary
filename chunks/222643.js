t.d(n, { x: () => d });
var l = t(627968),
    i = t(64700),
    a = t(311907),
    s = t(623646),
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
            skipForceHide: p = !1,
        } = e,
        m = i.useContext(c.vG),
        [g, f] = i.useState(""),
        [C, E] = i.useState(!1),
        v = (0, a.bG)([o.Ay], () => o.Ay.callHeaderHeight),
        I = i.useRef(null),
        x = i.useRef(0);
    i.useEffect(() => {
        let e = n.current;
        if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d);
    }),
        i.useEffect(() => {
            p || (f(String(x.current)), E(void 0 !== v && v < (I.current?.clientHeight ?? 300) + 24), (x.current += 1));
        }, [v, I, p]);
    let { preventIdle: T, allowIdle: _ } = (0, u.o)("popup");
    return n?.current == null
        ? null
        : (0, l.jsx)(r.Ay, {
              children: (0, l.jsx)(s.Q, {
                  targetRef: n,
                  position: "top",
                  align: "center",
                  spacing: 0,
                  positionKey: g,
                  nudgeAlignIntoViewport: h,
                  children: () =>
                      (0, l.jsx)("div", {
                          ref: I,
                          onMouseOver: T,
                          onFocus: T,
                          onBlur: _,
                          onMouseLeave: _,
                          children: A({ hidden: C || m || t, onDismiss: d }),
                      }),
              }),
          });
}
