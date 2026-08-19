"use strict";
r.d(t, { R: () => l });
var n = r(959722),
    o = r(582128),
    i = r(11079),
    a = r(745391),
    s = r(712247);
function l(e) {
    let { isDisabled: t, onBlurWithin: r, onFocusWithin: l, onFocusWithinChange: u } = e,
        c = (0, o.useRef)({ isFocusWithin: !1 }),
        { addGlobalListener: f, removeAllGlobalListeners: p } = (0, i.A)(),
        d = (0, o.useCallback)(
            (e) => {
                e.currentTarget.contains(e.target) &&
                    c.current.isFocusWithin &&
                    !e.currentTarget.contains(e.relatedTarget) &&
                    ((c.current.isFocusWithin = !1), p(), r && r(e), u && u(!1));
            },
            [r, u, c, p],
        ),
        h = (0, n.yB)(d),
        m = (0, o.useCallback)(
            (e) => {
                if (!e.currentTarget.contains(e.target)) return;
                let t = (0, a.TW)(e.target),
                    r = (0, s.bq)(t);
                if (!c.current.isFocusWithin && r === (0, s.wt)(e.nativeEvent)) {
                    l && l(e), u && u(!0), (c.current.isFocusWithin = !0), h(e);
                    let r = e.currentTarget;
                    f(
                        t,
                        "focus",
                        (e) => {
                            if (c.current.isFocusWithin && !(0, s.sD)(r, e.target)) {
                                let o = new t.defaultView.FocusEvent("blur", { relatedTarget: e.target });
                                (0, n.o1)(o, r), d((0, n.eg)(o));
                            }
                        },
                        { capture: !0 },
                    );
                }
            },
            [l, u, h, f, d],
        );
    return t
        ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
        : { focusWithinProps: { onFocus: m, onBlur: d } };
}
