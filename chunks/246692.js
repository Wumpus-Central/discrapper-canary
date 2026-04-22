a.d(l, { p: () => x });
var t = a(627968),
    n = a(64700),
    o = a(503698),
    i = a.n(o),
    r = a(608250),
    s = a(834730),
    d = a(821609),
    u = a(964892),
    c = a(135564),
    b = a(916845),
    p = a(627330),
    m = a(985018),
    h = a(77006);
function x(e) {
    let {
            steps: l,
            caretConfig: a = { align: "center" },
            size: o = "md",
            onStepChange: x,
            onRequestClose: g,
            popoverRef: f,
            shouldShow: v,
            position: y,
            ..._
        } = e,
        [C, j] = n.useState(0);
    n.useEffect(() => {
        v && j(0);
    }, [v]),
        n.useEffect(() => {
            x?.(C);
        }, [C, x]);
    let V = l[C],
        k = C + 1 === l.length,
        S = n.useCallback(() => {
            V?.onCta?.(), k ? g?.() : j((e) => e + 1);
        }, [V, k, g]),
        w = n.useCallback(() => {
            g?.();
        }, [g]),
        M = n.useCallback(() => {
            g?.();
        }, [g]);
    if (!v || null == V) return null;
    let T = {
            text: V.action?.text ?? (k ? m.intl.string(m.t.i4jeWR) : m.intl.string(m.t.PDTjLN)),
            variant: V.action?.variant ?? "primary",
            onClick: S,
            ...V.action,
        },
        A = {
            targetElementRef: _.targetElementRef,
            hasVideo: _.hasVideo,
            scrollBehavior: _.scrollBehavior,
            position: y,
            shouldShow: v,
            onRequestClose: w,
            gradientColor: V.gradientColor,
            caretConfig: a,
            ...("edge" === _.alignmentStrategy
                ? { alignmentStrategy: "edge", align: _.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, t.jsx)(u.x, {
        ...A,
        children: (0, t.jsxs)("div", {
            ref: f,
            children: [
                (0, t.jsx)(b.q, { onClick: M, variant: null != V.gradientColor ? "color-mix" : void 0 }),
                null != V.graphic &&
                    (0, t.jsx)("div", {
                        className: i()(h.graphic, { [h[`graphic--${o}`]]: null != o }),
                        children: (0, t.jsx)(r.v, {
                            ...V.graphic,
                            aspectRatio: V.graphic.aspectRatio ?? ("sm" === o ? "2/1" : "16/9"),
                        }),
                    }),
                (0, t.jsx)(p.D, { title: V.title, body: V.body, badge: V.badge, textLink: V.textLink }),
                (0, t.jsx)("div", {
                    className: h.actionBar,
                    children: (0, t.jsxs)("div", {
                        className: h.multistepActionLayout,
                        children: [
                            (0, t.jsx)(s.E, {
                                variant: "text-xs/normal",
                                className: h.multistepIndicator,
                                children: m.intl.formatToPlainString(m.t.rO31eY, {
                                    count: C + 1,
                                    totalSteps: l.length,
                                }),
                            }),
                            (0, t.jsx)(d.$, { size: "sm", ...T }),
                        ],
                    }),
                }),
                (0, t.jsx)(c.F, {}),
            ],
        }),
    });
}
