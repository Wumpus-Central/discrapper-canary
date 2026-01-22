n.d(t, { R: () => l });
var r = n(89494),
    i = n(64700),
    a = n(114099),
    s = n(297987),
    o = n(241827);
function l(e) {
    let { isDisabled: t, onBlurWithin: n, onFocusWithin: l, onFocusWithinChange: c } = e,
        u = (0, i.useRef)({ isFocusWithin: !1 }),
        { addGlobalListener: d, removeAllGlobalListeners: f } = (0, a.A)(),
        p = (0, i.useCallback)(
            (e) => {
                e.currentTarget.contains(e.target) &&
                    u.current.isFocusWithin &&
                    !e.currentTarget.contains(e.relatedTarget) &&
                    ((u.current.isFocusWithin = !1), f(), n && n(e), c && c(!1));
            },
            [n, c, u, f],
        ),
        _ = (0, r.yB)(p),
        h = (0, i.useCallback)(
            (e) => {
                if (!e.currentTarget.contains(e.target)) return;
                let t = (0, s.TW)(e.target),
                    n = (0, o.bq)(t);
                if (!u.current.isFocusWithin && n === (0, o.wt)(e.nativeEvent)) {
                    l && l(e), c && c(!0), (u.current.isFocusWithin = !0), _(e);
                    let n = e.currentTarget;
                    d(
                        t,
                        "focus",
                        (e) => {
                            if (u.current.isFocusWithin && !(0, o.sD)(n, e.target)) {
                                let i = new t.defaultView.FocusEvent("blur", { relatedTarget: e.target });
                                (0, r.o1)(i, n), p((0, r.eg)(i));
                            }
                        },
                        { capture: !0 },
                    );
                }
            },
            [l, c, _, d, p],
        );
    return t
        ? {
              focusWithinProps: {
                  onFocus: void 0,
                  onBlur: void 0,
              },
          }
        : {
              focusWithinProps: {
                  onFocus: h,
                  onBlur: p,
              },
          };
}
