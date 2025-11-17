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
            nudgeAlignIntoViewport: h = !1,
            skipForceHide: f = !1,
        } = e,
        m = r.useContext(c.h9),
        [g, b] = r.useState(""),
        [y, C] = r.useState(!1),
        v = (0, l.e7)([s.ZP], () => s.ZP.callHeaderHeight),
        _ = r.useRef(null),
        x = r.useRef(0);
    r.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener("click", d), () => e.removeEventListener("click", d);
    }),
        r.useEffect(() => {
            if (!f) {
                var e, t;
                b(String(x.current)),
                    C(
                        void 0 !== v &&
                            v < (null != (t = null == (e = _.current) ? void 0 : e.clientHeight) ? t : 300) + 24,
                    ),
                    (x.current += 1);
            }
        }, [v, _, f]);
    let { preventIdle: j, allowIdle: O } = (0, u.Y)("popup");
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
                          ref: _,
                          onMouseOver: j,
                          onFocus: j,
                          onBlur: O,
                          onMouseLeave: O,
                          children: p({
                              hidden: y || m || n,
                              onDismiss: d,
                          }),
                      }),
              }),
          });
}
