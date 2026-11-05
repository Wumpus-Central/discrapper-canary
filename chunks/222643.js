var i = t(477900),
    l = t(582128),
    s = t(855986),
    a = t(623646),
    r = t(43189),
    o = t(964404),
    c = t(461782),
    u = t(447404);
t.d(
    n,
    {},
    {
        x: function (e) {
            let {
                    buttonRef: n,
                    dismissed: t,
                    onDismiss: d,
                    renderComponent: A,
                    nudgeAlignIntoViewport: h = !1,
                    skipForceHide: m = !1,
                } = e,
                g = l.useContext(c.vG),
                [x, C] = l.useState(""),
                [f, p] = l.useState(!1),
                E = (0, s.bG)([o.Ay], () => o.Ay.callHeaderHeight),
                I = l.useRef(null),
                j = l.useRef(0);
            (l.useEffect(() => {
                let e = n.current;
                if (null != e) return (e.addEventListener("click", d), () => e.removeEventListener("click", d));
            }),
                l.useEffect(() => {
                    m ||
                        (C(String(j.current)),
                        p(void 0 !== E && E < (I.current?.clientHeight ?? 300) + 24),
                        (j.current += 1));
                }, [E, I, m]));
            let { preventIdle: v, allowIdle: N } = (0, u.o)("popup");
            return n?.current == null
                ? null
                : (0, i.jsx)(r.Ay, {
                      children: (0, i.jsx)(a.Q, {
                          targetRef: n,
                          position: "top",
                          align: "center",
                          spacing: 0,
                          positionKey: x,
                          nudgeAlignIntoViewport: h,
                          children: () =>
                              (0, i.jsx)("div", {
                                  ref: I,
                                  onMouseOver: v,
                                  onFocus: v,
                                  onBlur: N,
                                  onMouseLeave: N,
                                  children: A({ hidden: f || g || t, onDismiss: d }),
                              }),
                      }),
                  });
        },
    },
);
