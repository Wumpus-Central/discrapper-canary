n.d(t, { h: () => d }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    a = n(909820),
    s = n(740492),
    c = n(937995),
    u = n(618158);
function d(e) {
    let { buttonRef: t, dismissed: n, onDismiss: d, renderComponent: p, nudgeAlignIntoViewport: h = !1, skipForceHide: f = !1 } = e,
        m = i.useContext(c.h9),
        [g, b] = i.useState(''),
        [_, y] = i.useState(!1),
        C = (0, l.e7)([s.ZP], () => s.ZP.callHeaderHeight),
        x = i.createRef(),
        v = i.useRef(0);
    i.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener('click', d), () => e.removeEventListener('click', d);
    }),
        i.useEffect(() => {
            if (!f) {
                var e, t;
                b(String(v.current)), y(void 0 !== C && C < (null != (t = null == (e = x.current) ? void 0 : e.clientHeight) ? t : 300) + 24), (v.current += 1);
            }
        }, [C, x, f]);
    let { preventIdle: j, allowIdle: O } = (0, u.Y)('popup');
    return (null == t ? void 0 : t.current) == null
        ? null
        : (0, r.jsx)(a.ZP, {
              children: (0, r.jsx)(o.jRF, {
                  targetRef: t,
                  position: 'top',
                  align: 'center',
                  spacing: 0,
                  positionKey: g,
                  nudgeAlignIntoViewport: h,
                  children: () =>
                      (0, r.jsx)('div', {
                          ref: x,
                          onMouseOver: j,
                          onFocus: j,
                          onBlur: O,
                          onMouseLeave: O,
                          children: p({
                              hidden: _ || m || n,
                              onDismiss: d
                          })
                      })
              })
          });
}
