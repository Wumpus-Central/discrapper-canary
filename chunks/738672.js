n.d(t, { h: () => d }), n(388685);
var i = n(54381),
    r = n(473749),
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
        m = r.useContext(c.h9),
        [g, b] = r.useState(""),
        [C, y] = r.useState(!1),
        v = (0, l.e7)([s.ZP], () => s.ZP.callHeaderHeight),
        x = r.useRef(null),
        O = r.useRef(0);
    r.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d);
    }),
        r.useEffect(() => {
            if (!h) {
                var e, t;
                b(String(O.current)),
                    y(
                        void 0 !== v &&
                            v < (null != (t = null == (e = x.current) ? void 0 : e.clientHeight) ? t : 300) + 24,
                    ),
                    (O.current += 1);
            }
        }, [v, x, h]);
    let { preventIdle: E, allowIdle: j } = (0, u.Y)("popup");
    return (null == t ? void 0 : t.current) == null
        ? null
        : (0, i.jsx)(o.ZP, {
              children: (0, i.jsx)(a.jRF, {
                  targetRef: t,
                  position: "top",
                  align: "center",
                  spacing: 0,
                  positionKey: g,
                  nudgeAlignIntoViewport: f,
                  children: () =>
                      (0, i.jsx)("div", {
                          ref: x,
                          onMouseOver: E,
                          onFocus: E,
                          onBlur: j,
                          onMouseLeave: j,
                          children: p({
                              hidden: C || m || n,
                              onDismiss: d,
                          }),
                      }),
              }),
          });
}
