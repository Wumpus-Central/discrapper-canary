n.d(t, { x: () => d }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(43189),
    o = n(964404),
    c = n(461782),
    u = n(447404);
function d(e) {
    let {
            buttonRef: t,
            dismissed: n,
            onDismiss: d,
            renderComponent: f,
            nudgeAlignIntoViewport: p = !1,
            skipForceHide: h = !1,
        } = e,
        b = l.useContext(c.vG),
        [g, m] = l.useState(""),
        [A, y] = l.useState(!1),
        O = (0, i.bG)([o.Ay], () => o.Ay.callHeaderHeight),
        j = l.useRef(null),
        v = l.useRef(0);
    l.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d);
    }),
        l.useEffect(() => {
            if (!h) {
                var e, t;
                m(String(v.current)),
                    y(
                        void 0 !== O &&
                            O < (null != (e = null == (t = j.current) ? void 0 : t.clientHeight) ? e : 300) + 24,
                    ),
                    (v.current += 1);
            }
        }, [O, j, h]);
    let { preventIdle: x, allowIdle: E } = (0, u.o)("popup");
    return (null == t ? void 0 : t.current) == null
        ? null
        : (0, r.jsx)(s.Ay, {
              children: (0, r.jsx)(a.QCO, {
                  targetRef: t,
                  position: "top",
                  align: "center",
                  spacing: 0,
                  positionKey: g,
                  nudgeAlignIntoViewport: p,
                  children: () =>
                      (0, r.jsx)("div", {
                          ref: j,
                          onMouseOver: x,
                          onFocus: x,
                          onBlur: E,
                          onMouseLeave: E,
                          children: f({
                              hidden: A || b || n,
                              onDismiss: d,
                          }),
                      }),
              }),
          });
}
