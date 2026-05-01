t.d(n, { x: () => d });
var l = t(627968),
    i = t(64700),
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
        C = i.useContext(c.vG),
        [E, p] = i.useState(""),
        [g, x] = i.useState(!1),
        I = (0, s.bG)([o.Ay], () => o.Ay.callHeaderHeight),
        f = i.useRef(null),
        T = i.useRef(0);
    i.useEffect(() => {
        let e = n.current;
        if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d);
    }),
        i.useEffect(() => {
            m || (p(String(T.current)), x(void 0 !== I && I < (f.current?.clientHeight ?? 300) + 24), (T.current += 1));
        }, [I, f, m]);
    let { preventIdle: v, allowIdle: _ } = (0, u.o)("popup");
    return n?.current == null
        ? null
        : (0, l.jsx)(r.Ay, {
              children: (0, l.jsx)(a.Q, {
                  targetRef: n,
                  position: "top",
                  align: "center",
                  spacing: 0,
                  positionKey: E,
                  nudgeAlignIntoViewport: h,
                  children: () =>
                      (0, l.jsx)("div", {
                          ref: f,
                          onMouseOver: v,
                          onFocus: v,
                          onBlur: _,
                          onMouseLeave: _,
                          children: A({ hidden: g || C || t, onDismiss: d }),
                      }),
              }),
          });
}
