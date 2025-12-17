n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    l = n(907862),
    a = n(882508),
    o = n(388032),
    s = n(339531),
    c = n(993516);
function u(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: u,
        onActionClick: d,
        onActionMouseDown: f,
        position: h = "right",
        align: p = "top",
        caretConfig: g = { align: "start" },
        skuImageDetails: b,
        title: m,
        body: y,
    } = e;
    i.useEffect(() => {
        null == n || n();
    }, [n]);
    let O = i.useMemo(
        () =>
            (null == b ? void 0 : b.imageUrl) == null
                ? {
                      type: "image",
                      src: c.Z,
                      aspectRatio: "6/4",
                  }
                : (0, a.D)({
                      imageUrl: null == b ? void 0 : b.imageUrl,
                      backgroundImageUrl: null == b ? void 0 : b.backgroundImageUrl,
                      altText: o.intl.string(o.t["ulQB+t"]),
                      customClassNames: {
                          containerClassName: s.dynamicGraphicContainer,
                          foregroundImageClassName: s.dynamicGraphicForegroundImage,
                      },
                  }),
        [null == b ? void 0 : b.imageUrl, null == b ? void 0 : b.backgroundImageUrl],
    );
    return (0, r.jsx)(l.J2, {
        size: "lg",
        shouldShow: !0,
        position: h,
        caretConfig: g,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: p,
        badge: {
            type: "new",
            variant: "default",
        },
        onRequestClose: u,
        actions: [
            {
                text: o.intl.string(o.t.RzWDqY),
                variant: "primary",
                onClick: d,
                onMouseDown: f,
            },
        ],
        targetElementRef: t,
        title: null != m ? m : o.intl.string(o.t.Ylu2JM),
        body: null != y ? y : o.intl.string(o.t.vgylLQ),
        graphic: O,
    });
}
