"use strict";
n.d(t, { x: () => u });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(43189),
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
            skipForceHide: p = !1,
        } = e,
        g = s.useContext(c.vG),
        [m, _] = s.useState(""),
        [f, x] = s.useState(!1),
        C = (0, l.bG)([o.Ay], () => o.Ay.callHeaderHeight),
        E = s.useRef(null),
        I = s.useRef(0);
    s.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener("click", u), () => e.removeEventListener("click", u);
    }),
        s.useEffect(() => {
            p || (_(String(I.current)), x(void 0 !== C && C < (E.current?.clientHeight ?? 300) + 24), (I.current += 1));
        }, [C, E, p]);
    let { preventIdle: b, allowIdle: N } = (0, d.o)("popup");
    return t?.current == null
        ? null
        : (0, i.jsx)(a.Ay, {
              children: (0, i.jsx)(r.QCO, {
                  targetRef: t,
                  position: "top",
                  align: "center",
                  spacing: 0,
                  positionKey: m,
                  nudgeAlignIntoViewport: A,
                  children: () =>
                      (0, i.jsx)("div", {
                          ref: E,
                          onMouseOver: b,
                          onFocus: b,
                          onBlur: N,
                          onMouseLeave: N,
                          children: h({ hidden: f || g || n, onDismiss: u }),
                      }),
              }),
          });
}
