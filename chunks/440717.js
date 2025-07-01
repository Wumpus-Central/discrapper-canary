n.d(t, { L: () => s });
var r = n(380189),
    i = n(73800),
    o = n(836388),
    u = n(893346),
    a = n(262083);
function s(e) {
    let { isDisabled: t, onBlurWithin: n, onFocusWithin: s, onFocusWithinChange: l } = e,
        c = (0, i.useRef)({ isFocusWithin: !1 }),
        { addGlobalListener: d, removeAllGlobalListeners: f } = (0, o.x)(),
        v = (0, i.useCallback)(
            (e) => {
                e.currentTarget.contains(e.target) && c.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && ((c.current.isFocusWithin = !1), f(), n && n(e), l && l(!1));
            },
            [n, l, c, f]
        ),
        p = (0, r.d0)(v),
        h = (0, i.useCallback)(
            (e) => {
                if (!e.currentTarget.contains(e.target)) return;
                let t = (0, u.r3)(e.target),
                    n = (0, a.vY)(t);
                if (!c.current.isFocusWithin && n === (0, a.NI)(e.nativeEvent)) {
                    (s && s(e), l && l(!0), (c.current.isFocusWithin = !0), p(e));
                    let n = e.currentTarget;
                    d(
                        t,
                        'focus',
                        (e) => {
                            if (c.current.isFocusWithin && !(0, a.bE)(n, e.target)) {
                                let i = new (0, r.Yf)('blur', new t.defaultView.FocusEvent('blur', { relatedTarget: e.target }));
                                ((i.target = n), (i.currentTarget = n), v(i));
                            }
                        },
                        { capture: !0 }
                    );
                }
            },
            [s, l, p, d, v]
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
                  onFocus: h,
                  onBlur: v
              }
          };
}
