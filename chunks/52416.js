n.d(t, { A: () => c });
var a = n(627968);
n(64700);
var o = n(877624),
    r = n(43105),
    l = n(403581),
    i = n(549996),
    d = n(498470),
    s = n(807098),
    p = n(637706),
    u = n(49999);
function c(e) {
    let { children: t, targetElementRef: n, dismissPopover: c } = e,
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
                              onClose: () => c(u.i.USER_DISMISS),
                          }),
                          icon: l.t,
                      },
                  ]
                : void 0,
        _ = (0, p.C)(b.helpArticle, b.helpArticleId);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { children: t }),
            (0, a.jsx)(r.A, {
                targetElementRef: n,
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
                onRequestClose: () => c(u.i.USER_DISMISS),
                gradientColor: "nitro-pink",
            }),
        ],
    });
}
