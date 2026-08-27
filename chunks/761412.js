"use strict";
r.d(t, { R: () => l });
var n = r(872197),
    i = r(256062),
    o = r(143761),
    a = r(635597),
    s = r(582128);
function l(e) {
    let { isDisabled: t, onBlurWithin: r, onFocusWithin: l, onFocusWithinChange: u } = e,
        c = (0, s.useRef)({ isFocusWithin: !1 }),
        { addGlobalListener: f, removeAllGlobalListeners: d } = (0, a.A)(),
        p = (0, s.useCallback)(
            (e) => {
                (0, i.sD)(e.currentTarget, (0, i.wt)(e)) &&
                    c.current.isFocusWithin &&
                    !(0, i.sD)(e.currentTarget, e.relatedTarget) &&
                    ((c.current.isFocusWithin = !1), d(), r && r(e), u && u(!1));
            },
            [r, u, c, d],
        ),
        h = (0, n.yB)(p),
        m = (0, s.useCallback)(
            (e) => {
                if (!(0, i.sD)(e.currentTarget, (0, i.wt)(e))) return;
                let t = (0, i.wt)(e),
                    r = (0, o.TW)(t),
                    a = (0, i.bq)(r);
                if (!c.current.isFocusWithin && a === t) {
                    l && l(e), u && u(!0), (c.current.isFocusWithin = !0), h(e);
                    let t = e.currentTarget;
                    f(
                        r,
                        "focus",
                        (e) => {
                            let o = (0, i.wt)(e);
                            if (c.current.isFocusWithin && !(0, i.sD)(t, o)) {
                                let e = new r.defaultView.FocusEvent("blur", { relatedTarget: o });
                                (0, n.o1)(e, t), p((0, n.eg)(e));
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
