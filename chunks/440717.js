n.d(t, { L: () => l });
var i = n(380189),
    r = n(73800),
    o = n(836388),
    s = n(893346),
    a = n(262083);
function l(e) {
    let { isDisabled: t, onBlurWithin: n, onFocusWithin: l, onFocusWithinChange: u } = e,
        c = (0, r.useRef)({ isFocusWithin: !1 }),
        { addGlobalListener: d, removeAllGlobalListeners: f } = (0, o.x)(),
        v = (0, r.useCallback)(
            (e) => {
                e.currentTarget.contains(e.target) && c.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && ((c.current.isFocusWithin = !1), f(), n && n(e), u && u(!1));
            },
            [n, u, c, f]
        ),
        p = (0, i.d0)(v),
        b = (0, r.useCallback)(
            (e) => {
                if (!e.currentTarget.contains(e.target)) return;
                let t = (0, s.r3)(e.target),
                    n = (0, a.vY)(t);
                if (!c.current.isFocusWithin && n === (0, a.NI)(e.nativeEvent)) {
                    (l && l(e), u && u(!0), (c.current.isFocusWithin = !0), p(e));
                    let n = e.currentTarget;
                    d(
                        t,
                        'focus',
                        (e) => {
                            if (c.current.isFocusWithin && !(0, a.bE)(n, e.target)) {
                                let r = new (0, i.Yf)('blur', new t.defaultView.FocusEvent('blur', { relatedTarget: e.target }));
                                ((r.target = n), (r.currentTarget = n), v(r));
                            }
                        },
                        { capture: !0 }
                    );
                }
            },
            [l, u, p, d, v]
        );
    return t
        ? {
              focusWithinProps: {
                  onFocus: void 0,
                  onBlur: void 0
              }
          }
        : {
              focusWithinProps: {
                  onFocus: b,
                  onBlur: v
              }
          };
}
