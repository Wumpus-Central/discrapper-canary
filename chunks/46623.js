r.d(t, { A: () => d });
var n = r(627968);
r(64700);
var i = r(732955),
    o = r(397927),
    l = r(381969),
    s = r(920814),
    c = r(985018),
    a = r(41715);
function d() {
    let { selectedTab: e, isPhantomPreview: t, handlePreviewDismiss: r } = (0, l.k)();
    return t
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)("div", {
                      className: a.ZF,
                      children: [
                          (0, n.jsx)(o.G3N, {
                              size: "xs",
                              color: "currentColor",
                          }),
                          (0, n.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              className: a.cP,
                              children:
                                  e === s.B.GUILD_PRODUCTS_PREVIEW
                                      ? c.intl.string(c.t.F4Z0nV)
                                      : c.intl.string(c.t.pzTFpM),
                          }),
                      ],
                  }),
                  (0, n.jsx)(i.$nd, {
                      text: e === s.B.GUILD_PRODUCTS_PREVIEW ? c.intl.string(c.t.YF35pV) : c.intl.string(c.t.r30bky),
                      size: "sm",
                      variant: "secondary",
                      onClick: r,
                  }),
              ],
          })
        : null;
}
