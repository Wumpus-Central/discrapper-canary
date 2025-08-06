(n.d(t, { h: () => f }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(481060),
    s = n(909820),
    l = n(740492),
    c = n(937995),
    u = n(618158);
let d = 24;
function f(e) {
    let { buttonRef: t, dismissed: n, onDismiss: f, renderComponent: _, nudgeAlignIntoViewport: p = !1, skipForceHide: h = !1 } = e,
        m = i.useContext(c.h9),
        [g, E] = i.useState(''),
        [b, y] = i.useState(!1),
        O = (0, o.e7)([l.ZP], () => l.ZP.callHeaderHeight),
        v = i.useRef(null),
        I = i.useRef(0);
    (i.useEffect(() => {
        let e = t.current;
        if (null != e) return (e.addEventListener('click', f), () => e.removeEventListener('click', f));
    }),
        i.useEffect(() => {
            if (!h) {
                var e, t;
                (E(String(I.current)), y(void 0 !== O && O < (null != (t = null == (e = v.current) ? void 0 : e.clientHeight) ? t : 300) + d), (I.current += 1));
            }
        }, [O, v, h]));
    let { preventIdle: T, allowIdle: S } = (0, u.Y)('popup');
    return (null == t ? void 0 : t.current) == null
        ? null
        : (0, r.jsx)(s.ZP, {
              children: (0, r.jsx)(a.jRF, {
                  targetRef: t,
                  position: 'top',
                  align: 'center',
                  spacing: 0,
                  positionKey: g,
                  nudgeAlignIntoViewport: p,
                  children: () =>
                      (0, r.jsx)('div', {
                          ref: v,
                          onMouseOver: T,
                          onFocus: T,
                          onBlur: S,
                          onMouseLeave: S,
                          children: _({
                              hidden: b || m || n,
                              onDismiss: f
                          })
                      })
              })
          });
}
