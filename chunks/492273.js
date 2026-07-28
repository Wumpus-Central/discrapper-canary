"use strict";
n.d(t, { R: () => l });
var r = n(959722),
    i = n(582128),
    a = n(11079),
    o = n(745391),
    s = n(712247);
function l(e) {
    let { isDisabled: t, onBlurWithin: n, onFocusWithin: l, onFocusWithinChange: u } = e,
        c = (0, i.useRef)({ isFocusWithin: !1 }),
        { addGlobalListener: d, removeAllGlobalListeners: f } = (0, a.A)(),
        p = (0, i.useCallback)(
            (e) => {
                e.currentTarget.contains(e.target) &&
                    c.current.isFocusWithin &&
                    !e.currentTarget.contains(e.relatedTarget) &&
                    ((c.current.isFocusWithin = !1), f(), n && n(e), u && u(!1));
            },
            [n, u, c, f],
        ),
        h = (0, r.yB)(p),
        m = (0, i.useCallback)(
            (e) => {
                if (!e.currentTarget.contains(e.target)) return;
                let t = (0, o.TW)(e.target),
                    n = (0, s.bq)(t);
                if (!c.current.isFocusWithin && n === (0, s.wt)(e.nativeEvent)) {
                    l && l(e), u && u(!0), (c.current.isFocusWithin = !0), h(e);
                    let n = e.currentTarget;
                    d(
                        t,
                        "focus",
                        (e) => {
                            if (c.current.isFocusWithin && !(0, s.sD)(n, e.target)) {
                                let i = new t.defaultView.FocusEvent("blur", { relatedTarget: e.target });
                                (0, r.o1)(i, n), p((0, r.eg)(i));
                            }
                        },
                        { capture: !0 },
                    );
                }
            },
            [l, u, h, d, p],
        );
    return t
        ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
        : { focusWithinProps: { onFocus: m, onBlur: p } };
}
