r.d(e, { L: () => s });
var n = r(617467),
    i = r(192379),
    o = r(693865),
    a = r(408717),
    u = r(263064);
function s(t) {
    let { isDisabled: e, onBlurWithin: r, onFocusWithin: s, onFocusWithinChange: c } = t,
        l = (0, i.useRef)({ isFocusWithin: !1 }),
        { addGlobalListener: f, removeAllGlobalListeners: p } = (0, o.x)(),
        h = (0, i.useCallback)(
            (t) => {
                t.currentTarget.contains(t.target) && l.current.isFocusWithin && !t.currentTarget.contains(t.relatedTarget) && ((l.current.isFocusWithin = !1), p(), r && r(t), c && c(!1));
            },
            [r, c, l, p]
        ),
        d = (0, n.d0)(h),
        g = (0, i.useCallback)(
            (t) => {
                if (!t.currentTarget.contains(t.target)) return;
                let e = (0, a.r3)(t.target),
                    r = (0, u.vY)(e);
                if (!l.current.isFocusWithin && r === (0, u.NI)(t.nativeEvent)) {
                    s && s(t), c && c(!0), (l.current.isFocusWithin = !0), d(t);
                    let r = t.currentTarget;
                    f(
                        e,
                        'focus',
                        (t) => {
                            if (l.current.isFocusWithin && !(0, u.bE)(r, t.target)) {
                                let i = new (0, n.Yf)('blur', new e.defaultView.FocusEvent('blur', { relatedTarget: t.target }));
                                (i.target = r), (i.currentTarget = r), h(i);
                            }
                        },
                        { capture: !0 }
                    );
                }
            },
            [s, c, d, f, h]
        );
    return e
        ? {
              focusWithinProps: {
                  onFocus: void 0,
                  onBlur: void 0
              }
          }
        : {
              focusWithinProps: {
                  onFocus: g,
                  onBlur: h
              }
          };
}
