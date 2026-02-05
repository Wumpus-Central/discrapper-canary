n.d(t, { x: () => u });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(43189),
    o = n(964404),
    d = n(461782),
    c = n(447404);
function u(e) {
    let {
            buttonRef: t,
            dismissed: n,
            onDismiss: u,
            renderComponent: h,
            nudgeAlignIntoViewport: A = !1,
            skipForceHide: g = !1,
        } = e,
        m = l.useContext(d.vG),
        [p, _] = l.useState(""),
        [x, f] = l.useState(!1),
        E = (0, s.bG)([o.Ay], () => o.Ay.callHeaderHeight),
        C = l.useRef(null),
        I = l.useRef(0);
    l.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener("click", u), () => e.removeEventListener("click", u);
    }),
        l.useEffect(() => {
            g || (_(String(I.current)), f(void 0 !== E && E < (C.current?.clientHeight ?? 300) + 24), (I.current += 1));
        }, [E, C, g]);
    let { preventIdle: S, allowIdle: b } = (0, c.o)("popup");
    return t?.current == null
        ? null
        : (0, i.jsx)(r.Ay, {
              children: (0, i.jsx)(a.QCO, {
                  targetRef: t,
                  position: "top",
                  align: "center",
                  spacing: 0,
                  positionKey: p,
                  nudgeAlignIntoViewport: A,
                  children: () =>
                      (0, i.jsx)("div", {
                          ref: C,
                          onMouseOver: S,
                          onFocus: S,
                          onBlur: b,
                          onMouseLeave: b,
                          children: h({ hidden: x || m || n, onDismiss: u }),
                      }),
              }),
          });
}
