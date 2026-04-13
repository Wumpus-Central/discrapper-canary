"use strict";
n.r(t), n.d(t, { default: () => c });
var r = n(627968),
    i = n(64700),
    s = n(215530),
    a = n(697668),
    o = n(634409),
    l = n(650218),
    u = n(39407);
function c(e) {
    let { user: t, onClickContainer: n } = e,
        c = i.useCallback(
            (e) => {
                n?.(e), e.stopPropagation();
            },
            [n],
        ),
        [d, _] = (0, s.A)(t.id);
    return d
        ? (0, r.jsx)(l.A, { ...e, onHide: _, onClickContainer: c })
        : t.isNonUserBot()
          ? (0, r.jsx)(o.A, { ...e, onClickContainer: c })
          : t.bot
            ? (0, r.jsx)(a.A, { ...e, onClickContainer: c })
            : (0, r.jsx)(u.A, { ...e, onClickContainer: c });
}
