"use strict";
n.d(t, { R: () => l });
var r = n(89494),
    i = n(64700),
    a = n(114099),
    s = n(297987),
    o = n(241827);
function l(e) {
    let { isDisabled: t, onBlurWithin: n, onFocusWithin: l, onFocusWithinChange: u } = e,
        c = (0, i.useRef)({ isFocusWithin: !1 }),
        { addGlobalListener: d, removeAllGlobalListeners: _ } = (0, a.A)(),
        f = (0, i.useCallback)(
            (e) => {
                e.currentTarget.contains(e.target) &&
                    c.current.isFocusWithin &&
                    !e.currentTarget.contains(e.relatedTarget) &&
                    ((c.current.isFocusWithin = !1), _(), n && n(e), u && u(!1));
            },
            [n, u, c, _],
        ),
        p = (0, r.yB)(f),
        h = (0, i.useCallback)(
            (e) => {
                if (!e.currentTarget.contains(e.target)) return;
                let t = (0, s.TW)(e.target),
                    n = (0, o.bq)(t);
                if (!c.current.isFocusWithin && n === (0, o.wt)(e.nativeEvent)) {
                    l && l(e), u && u(!0), (c.current.isFocusWithin = !0), p(e);
                    let n = e.currentTarget;
                    d(
                        t,
                        "focus",
                        (e) => {
                            if (c.current.isFocusWithin && !(0, o.sD)(n, e.target)) {
                                let i = new t.defaultView.FocusEvent("blur", { relatedTarget: e.target });
                                (0, r.o1)(i, n), f((0, r.eg)(i));
                            }
                        },
                        { capture: !0 },
                    );
                }
            },
            [l, u, p, d, f],
        );
    return t
        ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
        : { focusWithinProps: { onFocus: h, onBlur: f } };
}
