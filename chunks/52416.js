n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var a = n(877624),
    l = n(342494),
    r = n(732955),
    s = n(549996),
    o = n(498470),
    d = n(807098),
    c = n(49999);
function u(e) {
    let { children: t, targetElementRef: n, dismissPopover: u } = e,
        A = (0, s.c)(a.C.PREMIUM_TAB_POPOVER),
        h =
            null != A && "premiumTabPopover" === A.properties.properties.oneofKind
                ? A.properties.properties.premiumTabPopover
                : null,
        _ = (0, d.T)(h?.asset);
    if (null == h) return t;
    let m =
        h.button?.copy != null
            ? [
                  {
                      text: h.button.copy,
                      variant: "expressive",
                      onClick: (0, o.h)({ buttonAction: h.button.buttonAction, onClose: () => u(c.i.USER_DISMISS) }),
                      icon: r.tvc,
                  },
              ]
            : void 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { children: t }),
            (0, i.jsx)(l.AM, {
                targetElementRef: n,
                title: h.header,
                body: h.body,
                graphic: null != _ ? { type: "image", src: _ } : void 0,
                size: "md",
                align: "top",
                alignmentStrategy: "edge",
                position: "right",
                caretConfig: { align: "start" },
                actions: m,
                onRequestClose: () => u(c.i.USER_DISMISS),
                gradientColor: "nitro-pink",
            }),
        ],
    });
}
