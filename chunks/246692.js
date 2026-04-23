a.d(l, { p: () => x });
var t = a(627968),
    o = a(64700),
    n = a(503698),
    i = a.n(n),
    r = a(608250),
    s = a(834730),
    d = a(821609),
    u = a(964892),
    c = a(135564),
    b = a(916845),
    p = a(627330),
    m = a(985018),
    h = a(824078);
function x(e) {
    let {
            steps: l,
            caretConfig: a = { align: "center" },
            size: n = "md",
            onStepChange: x,
            onRequestClose: v,
            popoverRef: f,
            shouldShow: g,
            position: y,
            ...C
        } = e,
        [j, V] = o.useState(0);
    o.useEffect(() => {
        g && V(0);
    }, [g]),
        o.useEffect(() => {
            x?.(j);
        }, [j, x]);
    let k = l[j],
        S = j + 1 === l.length,
        _ = o.useCallback(() => {
            k?.onCta?.(), S ? v?.() : V((e) => e + 1);
        }, [k, S, v]),
        w = o.useCallback(() => {
            v?.();
        }, [v]),
        T = o.useCallback(() => {
            v?.();
        }, [v]);
    if (!g || null == k) return null;
    let M = {
            text: k.action?.text ?? (S ? m.intl.string(m.t.i4jeWR) : m.intl.string(m.t.PDTjLN)),
            variant: k.action?.variant ?? "primary",
            onClick: _,
            ...k.action,
        },
        A = {
            targetElementRef: C.targetElementRef,
            hasVideo: C.hasVideo,
            scrollBehavior: C.scrollBehavior,
            position: y,
            shouldShow: g,
            onRequestClose: w,
            gradientColor: k.gradientColor,
            caretConfig: a,
            ...("edge" === C.alignmentStrategy
                ? { alignmentStrategy: "edge", align: C.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, t.jsx)(u.x, {
        ...A,
        children: (0, t.jsxs)("div", {
            ref: f,
            children: [
                (0, t.jsx)(b.q, { onClick: T, variant: null != k.gradientColor ? "color-mix" : void 0 }),
                null != k.graphic &&
                    (0, t.jsx)("div", {
                        className: i()(h.graphic, { [h[`graphic--${n}`]]: null != n }),
                        children: (0, t.jsx)(r.v, {
                            ...k.graphic,
                            aspectRatio: k.graphic.aspectRatio ?? ("sm" === n ? "2/1" : "16/9"),
                        }),
                    }),
                (0, t.jsx)(p.D, { title: k.title, body: k.body, badge: k.badge, textLink: k.textLink }),
                (0, t.jsx)("div", {
                    className: h.actionBar,
                    children: (0, t.jsxs)("div", {
                        className: h.multistepActionLayout,
                        children: [
                            (0, t.jsx)(s.E, {
                                variant: "text-xs/normal",
                                className: h.multistepIndicator,
                                children: m.intl.formatToPlainString(m.t.rO31eY, {
                                    count: j + 1,
                                    totalSteps: l.length,
                                }),
                            }),
                            (0, t.jsx)(d.$, { size: "sm", ...M }),
                        ],
                    }),
                }),
                (0, t.jsx)(c.F, {}),
            ],
        }),
    });
}
