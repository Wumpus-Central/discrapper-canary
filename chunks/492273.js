"use strict";
r.d(t, { R: () => l });
var n = r(959722),
    i = r(582128),
    o = r(11079),
    a = r(745391),
    s = r(712247);
function l(e) {
    let { isDisabled: t, onBlurWithin: r, onFocusWithin: l, onFocusWithinChange: u } = e,
        c = (0, i.useRef)({ isFocusWithin: !1 }),
        { addGlobalListener: f, removeAllGlobalListeners: d } = (0, o.A)(),
        p = (0, i.useCallback)(
            (e) => {
                e.currentTarget.contains(e.target) &&
                    c.current.isFocusWithin &&
                    !e.currentTarget.contains(e.relatedTarget) &&
                    ((c.current.isFocusWithin = !1), d(), r && r(e), u && u(!1));
            },
            [r, u, c, d],
        ),
        h = (0, n.yB)(p),
        m = (0, i.useCallback)(
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
                                let i = new t.defaultView.FocusEvent("blur", { relatedTarget: e.target });
                                (0, n.o1)(i, r), p((0, n.eg)(i));
                            }
                        },
                        { capture: !0 },
                    );
                }
            },
            [l, u, h, f, p],
        );
    return t
        ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
        : { focusWithinProps: { onFocus: m, onBlur: p } };
}
