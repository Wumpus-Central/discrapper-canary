n.d(t, { x: () => u });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(43189),
    o = n(964404),
    c = n(461782),
    d = n(447404);
function u(e) {
    let {
            buttonRef: t,
            dismissed: n,
            onDismiss: u,
            renderComponent: h,
            nudgeAlignIntoViewport: A = !1,
            skipForceHide: _ = !1,
        } = e,
        m = l.useContext(c.vG),
        [g, p] = l.useState(""),
        [f, x] = l.useState(!1),
        E = (0, s.bG)([o.Ay], () => o.Ay.callHeaderHeight),
        I = l.useRef(null),
        C = l.useRef(0);
    l.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener("click", u), () => e.removeEventListener("click", u);
    }),
        l.useEffect(() => {
            _ || (p(String(C.current)), x(void 0 !== E && E < (I.current?.clientHeight ?? 300) + 24), (C.current += 1));
        }, [E, I, _]);
    let { preventIdle: N, allowIdle: T } = (0, d.o)("popup");
    return t?.current == null
        ? null
        : (0, i.jsx)(r.Ay, {
              children: (0, i.jsx)(a.QCO, {
                  targetRef: t,
                  position: "top",
                  align: "center",
                  spacing: 0,
                  positionKey: g,
                  nudgeAlignIntoViewport: A,
                  children: () =>
                      (0, i.jsx)("div", {
                          ref: I,
                          onMouseOver: N,
                          onFocus: N,
                          onBlur: T,
                          onMouseLeave: T,
                          children: h({ hidden: f || m || n, onDismiss: u }),
                      }),
              }),
          });
}
