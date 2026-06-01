"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(877624),
    s = n(43105),
    a = n(403581),
    o = n(549996),
    l = n(498470),
    u = n(807098),
    c = n(637706),
    d = n(49999);
function _(e) {
    let { children: t, targetElementRef: n, dismissPopover: _ } = e,
        h = (0, o.c)(r.C.PREMIUM_TAB_POPOVER),
        f =
            null != h && "premiumTabPopover" === h.properties.properties.oneofKind
                ? h.properties.properties.premiumTabPopover
                : null,
        p = (0, u.T)(f?.asset);
    if (null == f) return t;
    let E =
            f.button?.copy != null
                ? [
                      {
                          text: f.button.copy,
                          variant: "expressive",
                          onClick: (0, l.h)({
                              buttonAction: f.button.buttonAction,
                              deeplinkSection: f.button.deeplinkSection,
                              onClose: () => _(d.i.USER_DISMISS),
                          }),
                          icon: a.t,
                      },
                  ]
                : void 0,
        m = (0, c.C)(f.helpArticle, f.helpArticleId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { children: t }),
            (0, i.jsx)(s.A, {
                targetElementRef: n,
                title: f.header,
                body: f.body,
                textLink: null != m ? { text: m.linkText, link: m.url } : void 0,
                graphic: null != p ? { type: "image", src: p } : void 0,
                size: "md",
                align: "top",
                alignmentStrategy: "edge",
                position: "right",
                caretConfig: { align: "start" },
                actions: E,
                onRequestClose: () => _(d.i.USER_DISMISS),
                gradientColor: "nitro-pink",
            }),
        ],
    });
}
