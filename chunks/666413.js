"use strict";
s.d(t, { S: () => g });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(407045),
    o = s(607399),
    c = s(946015),
    d = s(397927),
    u = s(854818),
    _ = s(134264);
let g = l.memo(function (e) {
    let { countdownTimerBlock: t, isVisible: s } = e,
        l = (0, d.zhh)({
            transform: `translateX(-50%) ${s ? "translateY(-75%)" : "translateY(0%)"}`,
            opacity: +!!s,
            config: { tension: 120, friction: 12 },
        });
    return (0, n.jsxs)(i.animated.div, {
        className: a()([_.lP, o.Fr && _.yJ]),
        role: "status",
        style: {
            ...l,
            ...(null != t.bannerUrl &&
                "" !== t.bannerUrl && {
                    backgroundImage: `url(${t.bannerUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }),
        },
        children: [
            (0, n.jsxs)(c.s, {
                direction: c.s.Direction.VERTICAL,
                children: [
                    (0, n.jsx)(d.Text, {
                        variant: "text-md/medium",
                        className: _.Wx,
                        style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                        children: t.title,
                    }),
                    null != t.body &&
                        "" !== t.body &&
                        (0, n.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            className: _.w9,
                            style: null != t.textColor && "" !== t.textColor ? { color: t.textColor } : void 0,
                            children: t.body,
                        }),
                ],
            }),
            (0, n.jsx)(u.e, { endDate: t.endTime }),
        ],
    });
});
