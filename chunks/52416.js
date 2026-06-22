n.d(t, { A: () => u });
var a = n(627968);
n(64700);
var o = n(877624),
    l = n(43105),
    r = n(549996),
    i = n(498470),
    d = n(807098),
    s = n(637706),
    p = n(49999);
function u(e) {
    let { children: t, targetElementRef: n, dismissPopover: u } = e,
        c = (0, r.c)(o.C.PREMIUM_TAB_POPOVER),
        b =
            null != c && "premiumTabPopover" === c.properties.properties.oneofKind
                ? c.properties.properties.premiumTabPopover
                : null,
        m = (0, d.T)(b?.asset);
    if (null == b) return t;
    let { icon: f } = (0, i.x)({ buttonAction: b.button?.buttonAction }),
        g =
            b.button?.copy != null
                ? [
                      {
                          text: b.button.copy,
                          variant: "expressive",
                          onClick: (0, i.h)({
                              buttonAction: b.button.buttonAction,
                              deeplinkSection: b.button.deeplinkSection,
                              applicationId: b.button.navigableStorefrontApplicationId?.value,
                              onClose: () => u(p.i.USER_DISMISS),
                          }),
                          icon: f,
                      },
                  ]
                : void 0,
        _ = (0, s.C)(b.helpArticle, b.helpArticleId);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { children: t }),
            (0, a.jsx)(l.A, {
                targetElementRef: n,
                title: b.header,
                body: b.body,
                textLink: null != _ ? { text: _.linkText, link: _.url } : void 0,
                graphic: null != m ? { type: "image", src: m } : void 0,
                size: "md",
                align: "top",
                alignmentStrategy: "edge",
                position: "right",
                caretConfig: { align: "start" },
                actions: g,
                onRequestClose: () => u(p.i.USER_DISMISS),
                gradientColor: "nitro-pink",
            }),
        ],
    });
}
