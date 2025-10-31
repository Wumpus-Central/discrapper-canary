n.d(t, { h: () => d }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(909820),
    s = n(740492),
    c = n(937995),
    u = n(618158);
function d(e) {
    let {
            buttonRef: t,
            dismissed: n,
            onDismiss: d,
            renderComponent: p,
            nudgeAlignIntoViewport: f = !1,
            skipForceHide: h = !1,
        } = e,
        m = i.useContext(c.h9),
        [g, b] = i.useState(""),
        [_, y] = i.useState(!1),
        C = (0, l.e7)([s.ZP], () => s.ZP.callHeaderHeight),
        v = i.useRef(null),
        O = i.useRef(0);
    i.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d);
    }),
        i.useEffect(() => {
            if (!h) {
                var e, t;
                b(String(O.current)),
                    y(
                        void 0 !== C &&
                            C < (null != (t = null == (e = v.current) ? void 0 : e.clientHeight) ? t : 300) + 24,
                    ),
                    (O.current += 1);
            }
        }, [C, v, h]);
    let { preventIdle: x, allowIdle: E } = (0, u.Y)("popup");
    return (null == t ? void 0 : t.current) == null
        ? null
        : (0, r.jsx)(o.ZP, {
              children: (0, r.jsx)(a.jRF, {
                  targetRef: t,
                  position: "top",
                  align: "center",
                  spacing: 0,
                  positionKey: g,
                  nudgeAlignIntoViewport: f,
                  children: () =>
                      (0, r.jsx)("div", {
                          ref: v,
                          onMouseOver: x,
                          onFocus: x,
                          onBlur: E,
                          onMouseLeave: E,
                          children: p({
                              hidden: _ || m || n,
                              onDismiss: d,
                          }),
                      }),
              }),
          });
}
