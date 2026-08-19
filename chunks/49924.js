"use strict";
r.d(t, { i: () => s });
var n = r(959722),
    o = r(582128),
    i = r(745391),
    a = r(712247);
function s(e) {
    let { isDisabled: t, onFocus: r, onBlur: s, onFocusChange: l } = e,
        u = (0, o.useCallback)(
            (e) => {
                if (e.target === e.currentTarget) return s && s(e), l && l(!1), !0;
            },
            [s, l],
        ),
        c = (0, n.yB)(u),
        f = (0, o.useCallback)(
            (e) => {
                let t = (0, i.TW)(e.target),
                    n = t ? (0, a.bq)(t) : (0, a.bq)();
                e.target === e.currentTarget && n === (0, a.wt)(e.nativeEvent) && (r && r(e), l && l(!0), c(e));
            },
            [l, r, c],
        );
    return { focusProps: { onFocus: !t && (r || l || s) ? f : void 0, onBlur: !t && (s || l) ? u : void 0 } };
}
