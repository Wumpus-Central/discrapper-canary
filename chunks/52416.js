n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(877624),
    r = n(342494),
    a = n(732955),
    s = n(549996),
    o = n(498470),
    d = n(807098),
    c = n(637706),
    u = n(49999);
function A(e) {
    let { children: t, targetElementRef: n, dismissPopover: A } = e,
        h = (0, s.c)(l.C.PREMIUM_TAB_POPOVER),
        _ =
            null != h && "premiumTabPopover" === h.properties.properties.oneofKind
                ? h.properties.properties.premiumTabPopover
                : null,
        m = (0, d.T)(_?.asset);
    if (null == _) return t;
    let g =
            _.button?.copy != null
                ? [
                      {
                          text: _.button.copy,
                          variant: "expressive",
                          onClick: (0, o.h)({
                              buttonAction: _.button.buttonAction,
                              onClose: () => A(u.i.USER_DISMISS),
                          }),
                          icon: a.tvc,
                      },
                  ]
                : void 0,
        p = (0, c.C)(_.helpArticle, _.helpArticleId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { children: t }),
            (0, i.jsx)(r.AM, {
                targetElementRef: n,
                title: _.header,
                body: _.body,
                textLink: null != p ? { text: p.linkText, link: p.url } : void 0,
                graphic: null != m ? { type: "image", src: m } : void 0,
                size: "md",
                align: "top",
                alignmentStrategy: "edge",
                position: "right",
                caretConfig: { align: "start" },
                actions: g,
                onRequestClose: () => A(u.i.USER_DISMISS),
                gradientColor: "nitro-pink",
            }),
        ],
    });
}
