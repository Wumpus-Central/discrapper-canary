a.d(l, { A: () => v });
var t = a(627968);
a(64700);
var s = a(877624),
    i = a(265486),
    n = a(403581),
    c = a(549996),
    h = a(498470),
    r = a(807098),
    o = a(637706),
    d = a(49999);
function v(e) {
    let { children: l, targetElementRef: a, dismissPopover: v } = e,
        g = (0, c.c)(s.C.PREMIUM_TAB_POPOVER),
        p =
            null != g && "premiumTabPopover" === g.properties.properties.oneofKind
                ? g.properties.properties.premiumTabPopover
                : null,
        m = (0, r.T)(p?.asset);
    if (null == p) return l;
    let f =
            p.button?.copy != null
                ? [
                      {
                          text: p.button.copy,
                          variant: "expressive",
                          onClick: (0, h.h)({
                              buttonAction: p.button.buttonAction,
                              deeplinkSection: p.button.deeplinkSection,
                              onClose: () => v(d.i.USER_DISMISS),
                          }),
                          icon: n.t,
                      },
                  ]
                : void 0,
        w = (0, o.C)(p.helpArticle, p.helpArticleId);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", { children: l }),
            (0, t.jsx)(i.A, {
                targetElementRef: a,
                title: p.header,
                body: p.body,
                textLink: null != w ? { text: w.linkText, link: w.url } : void 0,
                graphic: null != m ? { type: "image", src: m } : void 0,
                size: "md",
                align: "top",
                alignmentStrategy: "edge",
                position: "right",
                caretConfig: { align: "start" },
                actions: f,
                onRequestClose: () => v(d.i.USER_DISMISS),
                gradientColor: "nitro-pink",
            }),
        ],
    });
}
