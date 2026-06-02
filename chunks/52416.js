a.d(t, { A: () => u });
var n = a(627968);
a(64700);
var o = a(877624),
    r = a(43105),
    l = a(403581),
    i = a(549996),
    d = a(498470),
    s = a(807098),
    c = a(637706),
    p = a(49999);
function u(e) {
    let { children: t, targetElementRef: a, dismissPopover: u } = e,
        m = (0, i.c)(o.C.PREMIUM_TAB_POPOVER),
        b =
            null != m && "premiumTabPopover" === m.properties.properties.oneofKind
                ? m.properties.properties.premiumTabPopover
                : null,
        g = (0, s.T)(b?.asset);
    if (null == b) return t;
    let f =
            b.button?.copy != null
                ? [
                      {
                          text: b.button.copy,
                          variant: "expressive",
                          onClick: (0, d.h)({
                              buttonAction: b.button.buttonAction,
                              deeplinkSection: b.button.deeplinkSection,
                              onClose: () => u(p.i.USER_DISMISS),
                          }),
                          icon: l.t,
                      },
                  ]
                : void 0,
        _ = (0, c.C)(b.helpArticle, b.helpArticleId);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", { children: t }),
            (0, n.jsx)(r.A, {
                targetElementRef: a,
                title: b.header,
                body: b.body,
                textLink: null != _ ? { text: _.linkText, link: _.url } : void 0,
                graphic: null != g ? { type: "image", src: g } : void 0,
                size: "md",
                align: "top",
                alignmentStrategy: "edge",
                position: "right",
                caretConfig: { align: "start" },
                actions: f,
                onRequestClose: () => u(p.i.USER_DISMISS),
                gradientColor: "nitro-pink",
            }),
        ],
    });
}
