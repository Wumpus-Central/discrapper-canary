"use strict";
n.d(t, { i: () => s });
var r = n(959722),
    i = n(582128),
    a = n(745391),
    o = n(712247);
function s(e) {
    let { isDisabled: t, onFocus: n, onBlur: s, onFocusChange: l } = e,
        u = (0, i.useCallback)(
            (e) => {
                if (e.target === e.currentTarget) return s && s(e), l && l(!1), !0;
            },
            [s, l],
        ),
        c = (0, r.yB)(u),
        d = (0, i.useCallback)(
            (e) => {
                let t = (0, a.TW)(e.target),
                    r = t ? (0, o.bq)(t) : (0, o.bq)();
                e.target === e.currentTarget && r === (0, o.wt)(e.nativeEvent) && (n && n(e), l && l(!0), c(e));
            },
            [l, n, c],
        );
    return { focusProps: { onFocus: !t && (n || l || s) ? d : void 0, onBlur: !t && (s || l) ? u : void 0 } };
}
