i.d(t, { A: () => c });
var s = i(627968);
i(64700);
var r = i(732955),
    n = i(397927),
    l = i(381969),
    d = i(920814),
    a = i(985018),
    o = i(41715);
function c() {
    let { selectedTab: e, isPhantomPreview: t, handlePreviewDismiss: i } = (0, l.k)();
    return t
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsxs)("div", {
                      className: o.ZF,
                      children: [
                          (0, s.jsx)(n.G3N, { size: "xs", color: "currentColor" }),
                          (0, s.jsx)(n.Text, {
                              variant: "text-sm/normal",
                              className: o.cP,
                              children:
                                  e === d.B.GUILD_PRODUCTS_PREVIEW
                                      ? a.intl.string(a.t.F4Z0nV)
                                      : a.intl.string(a.t.pzTFpM),
                          }),
                      ],
                  }),
                  (0, s.jsx)(r.$nd, {
                      text: e === d.B.GUILD_PRODUCTS_PREVIEW ? a.intl.string(a.t.YF35pV) : a.intl.string(a.t.r30bky),
                      size: "sm",
                      variant: "secondary",
                      onClick: i,
                  }),
              ],
          })
        : null;
}
