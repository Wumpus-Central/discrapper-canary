"use strict";
n.d(t, { p: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(732955),
    u = n(964892),
    c = n(135564),
    d = n(916845),
    _ = n(627330),
    f = n(985018),
    p = n(248789);
function h(e) {
    let {
            steps: t,
            caretConfig: n = { align: "center" },
            size: a = "md",
            onStepChange: h,
            onRequestClose: m,
            popoverRef: g,
            shouldShow: E,
            position: A,
            ...I
        } = e,
        [T, y] = i.useState(0);
    i.useEffect(() => {
        E && y(0);
    }, [E]),
        i.useEffect(() => {
            h?.(T);
        }, [T, h]);
    let S = t[T],
        v = T + 1 === t.length,
        C = i.useCallback(() => {
            S?.onCta?.(), v ? m?.() : y((e) => e + 1);
        }, [S, v, m]),
        b = i.useCallback(() => {
            m?.();
        }, [m]),
        N = i.useCallback(() => {
            m?.();
        }, [m]);
    if (!E || null == S) return null;
    let R = {
            text: S.action?.text ?? (v ? f.intl.string(f.t.i4jeWR) : f.intl.string(f.t.PDTjLN)),
            variant: S.action?.variant ?? "primary",
            onClick: C,
            ...S.action,
        },
        O = {
            targetElementRef: I.targetElementRef,
            hasVideo: I.hasVideo,
            scrollBehavior: I.scrollBehavior,
            position: A,
            shouldShow: E,
            onRequestClose: b,
            gradientColor: S.gradientColor,
            caretConfig: n,
            ...("edge" === I.alignmentStrategy
                ? { alignmentStrategy: "edge", align: I.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, r.jsx)(u.x, {
        ...O,
        children: (0, r.jsxs)("div", {
            ref: g,
            children: [
                (0, r.jsx)(d.q, { onClick: N, variant: null != S.gradientColor ? "color-mix" : void 0 }),
                null != S.graphic &&
                    (0, r.jsx)("div", {
                        className: s()(p.graphic, { [p[`graphic--${a}`]]: null != a }),
                        children: (0, r.jsx)(o.vYh, {
                            ...S.graphic,
                            aspectRatio: S.graphic.aspectRatio ?? ("sm" === a ? "2/1" : "16/9"),
                        }),
                    }),
                (0, r.jsx)(_.D, { title: S.title, body: S.body, badge: S.badge, textLink: S.textLink }),
                (0, r.jsx)("div", {
                    className: p.actionBar,
                    children: (0, r.jsxs)("div", {
                        className: p.multistepActionLayout,
                        children: [
                            (0, r.jsx)(o.EYj, {
                                variant: "text-xs/normal",
                                className: p.multistepIndicator,
                                children: f.intl.formatToPlainString(f.t.rO31eY, {
                                    count: T + 1,
                                    totalSteps: t.length,
                                }),
                            }),
                            (0, r.jsx)(l.$nd, { size: "sm", ...R }),
                        ],
                    }),
                }),
                (0, r.jsx)(c.F, {}),
            ],
        }),
    });
}
