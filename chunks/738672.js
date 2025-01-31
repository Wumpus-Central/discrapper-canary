n.d(t, { h: () => u }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(909820),
    o = n(740492),
    c = n(937995),
    d = n(618158);
function u(e) {
    let { buttonRef: t, dismissed: n, onDismiss: u, renderComponent: h, nudgeAlignIntoViewport: p = !1, skipForceHide: m = !1 } = e,
        f = l.useContext(c.h9),
        [g, _] = l.useState(''),
        [C, x] = l.useState(!1),
        v = (0, a.e7)([o.ZP], () => o.ZP.callHeaderHeight),
        E = l.createRef(),
        I = l.useRef(0);
    l.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener('click', u), () => e.removeEventListener('click', u);
    }),
        l.useEffect(() => {
            if (!m) {
                var e, t;
                _(String(I.current)), x(void 0 !== v && v < (null !== (t = null === (e = E.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 300) + 24), (I.current += 1);
            }
        }, [v, E, m]);
    let { preventIdle: b, allowIdle: Z } = (0, d.Y)('popup');
    return (null == t ? void 0 : t.current) == null
        ? null
        : (0, i.jsx)(s.ZP, {
              children: (0, i.jsx)(r.jRF, {
                  targetRef: t,
                  position: 'top',
                  align: 'center',
                  spacing: 0,
                  positionKey: g,
                  nudgeAlignIntoViewport: p,
                  children: () =>
                      (0, i.jsx)('div', {
                          ref: E,
                          onMouseOver: b,
                          onFocus: b,
                          onBlur: Z,
                          onMouseLeave: Z,
                          children: h({
                              hidden: C || f || n,
                              onDismiss: u
                          })
                      })
              })
          });
}
