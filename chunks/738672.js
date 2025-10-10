n.d(t, { h: () => d }), n(388685);
var i = n(951288),
    r = n(647438),
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
            nudgeAlignIntoViewport: h = !1,
            skipForceHide: f = !1,
        } = e,
        m = r.useContext(c.h9),
        [g, b] = r.useState(""),
        [C, y] = r.useState(!1),
        _ = (0, l.e7)([s.ZP], () => s.ZP.callHeaderHeight),
        v = r.useRef(null),
        x = r.useRef(0);
    r.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d);
    }),
        r.useEffect(() => {
            if (!f) {
                var e, t;
                b(String(x.current)),
                    y(
                        void 0 !== _ &&
                            _ < (null != (t = null == (e = v.current) ? void 0 : e.clientHeight) ? t : 300) + 24,
                    ),
                    (x.current += 1);
            }
        }, [_, v, f]);
    let { preventIdle: O, allowIdle: j } = (0, u.Y)("popup");
    return (null == t ? void 0 : t.current) == null
        ? null
        : (0, i.jsx)(o.ZP, {
              children: (0, i.jsx)(a.jRF, {
                  targetRef: t,
                  position: "top",
                  align: "center",
                  spacing: 0,
                  positionKey: g,
                  nudgeAlignIntoViewport: h,
                  children: () =>
                      (0, i.jsx)("div", {
                          ref: v,
                          onMouseOver: O,
                          onFocus: O,
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
