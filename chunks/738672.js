n.d(t, { h: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
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
        [_, C] = i.useState(!1),
        v = (0, l.e7)([s.ZP], () => s.ZP.callHeaderHeight),
        y = i.createRef(),
        x = i.useRef(0);
    i.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener('click', d), () => e.removeEventListener('click', d);
    }),
        i.useEffect(() => {
            if (!f) {
                var e, t;
                b(String(x.current)), C(void 0 !== v && v < (null !== (t = null === (e = y.current) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 300) + 24), (x.current += 1);
            }
        }, [v, y, f]);
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
                          ref: y,
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
