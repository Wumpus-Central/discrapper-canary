"use strict";
n.d(t, { i: () => o });
var r = n(89494),
    i = n(64700),
    a = n(297987),
    s = n(241827);
function o(e) {
    let { isDisabled: t, onFocus: n, onBlur: o, onFocusChange: l } = e,
        u = (0, i.useCallback)(
            (e) => {
                if (e.target === e.currentTarget) return o && o(e), l && l(!1), !0;
            },
            [o, l],
        ),
        c = (0, r.yB)(u),
        d = (0, i.useCallback)(
            (e) => {
                let t = (0, a.TW)(e.target),
                    r = t ? (0, s.bq)(t) : (0, s.bq)();
                e.target === e.currentTarget && r === (0, s.wt)(e.nativeEvent) && (n && n(e), l && l(!0), c(e));
            },
            [l, n, c],
        );
    return { focusProps: { onFocus: !t && (n || l || o) ? d : void 0, onBlur: !t && (o || l) ? u : void 0 } };
}
