i.d(e, { A: () => C });
var s = i(627968);
i(64700);
var r = i(821609),
    n = i(952270),
    l = i(834730),
    a = i(381969),
    d = i(920814),
    o = i(985018),
    c = i(503046);
function C() {
    let { selectedTab: t, isPhantomPreview: e, handlePreviewDismiss: i } = (0, a.k)();
    return e
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsxs)("div", {
                      className: c.ZF,
                      children: [
                          (0, s.jsx)(n.G, { size: "xs", color: "currentColor" }),
                          (0, s.jsx)(l.E, {
                              variant: "text-sm/normal",
                              className: c.cP,
                              children:
                                  t === d.B.GUILD_PRODUCTS_PREVIEW
                                      ? o.intl.string(o.t.F4Z0nV)
                                      : o.intl.string(o.t.pzTFpM),
                          }),
                      ],
                  }),
                  (0, s.jsx)(r.$, {
                      text: t === d.B.GUILD_PRODUCTS_PREVIEW ? o.intl.string(o.t.YF35pV) : o.intl.string(o.t.r30bky),
                      size: "sm",
                      variant: "secondary",
                      onClick: i,
                  }),
              ],
          })
        : null;
}
