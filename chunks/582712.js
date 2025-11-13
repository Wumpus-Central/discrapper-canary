r.d(t, { default: () => y });
var n = r(951288),
    a = r(647438),
    s = r(286379),
    i = r(442837),
    o = r(755721),
    l = r(481060),
    c = r(565138),
    d = r(797614),
    u = r(769654),
    b = r(695346),
    m = r(430824),
    g = r(88658),
    h = r(401416),
    p = r(920133),
    f = r(388032),
    x = r(956051),
    j = r(444812);
function y(e) {
    let { transitionState: t, guildId: y, onClose: O } = e,
        D = (0, i.e7)([m.Z], () => m.Z.getGuild(y));
    return (a.useEffect(() => {
        (0, h.Y)(y), (0, p.L)(p.Q.MODAL_VIEWED, y), d.Z.increment({ name: s.V.DM_SETTINGS_UPSELL_VIEW });
    }, [y]),
    null == D)
        ? null
        : (0, n.jsx)(l.Y0X, {
              transitionState: t,
              className: x.modal,
              parentComponent: "DmSettingsUpsellModal",
              children: (0, n.jsxs)("form", {
                  onSubmit: (e) => {
                      e.preventDefault();
                      let t = (0, g.YK)();
                      t.add(y),
                          b.h2
                              .updateSetting(Array.from(t))
                              .then(() =>
                                  (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.rlYD1W), l.ToastType.SUCCESS)),
                              ),
                          O(),
                          (0, p.L)(p.Q.MODAL_DISABLED_DMS, y);
                  },
                  children: [
                      (0, n.jsx)("img", {
                          alt: "",
                          className: x.headerImage,
                          src: j,
                      }),
                      (0, n.jsxs)(l.xBx, {
                          separator: !1,
                          className: x.header,
                          children: [
                              (0, n.jsx)(l.Heading, {
                                  variant: "heading-lg/bold",
                                  className: x.title,
                                  children: f.intl.string(f.t.w2BvnL),
                              }),
                              (0, n.jsx)(l.Text, {
                                  variant: "text-md/normal",
                                  color: "header-secondary",
                                  className: x.body,
                                  children: f.intl.format(f.t.Depjkv, { guild_name: D.name }),
                              }),
                          ],
                      }),
                      (0, n.jsxs)(l.hzk, {
                          children: [
                              (0, n.jsx)(l.Text, {
                                  variant: "eyebrow",
                                  color: "header-secondary",
                                  className: x.subtitle,
                                  children: f.intl.string(f.t.KPB2iw),
                              }),
                              (0, n.jsx)("div", {
                                  className: x.guildContainer,
                                  children: (0, n.jsxs)("div", {
                                      className: x.guildInfo,
                                      children: [
                                          (0, n.jsx)(c.Z, {
                                              guild: D,
                                              size: c.Z.Sizes.SMALL,
                                          }),
                                          (0, n.jsx)(l.Text, {
                                              className: x.guildName,
                                              variant: "text-md/semibold",
                                              children: D.name,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, n.jsxs)("div", {
                                  className: x.content,
                                  children: [
                                      (0, n.jsx)(o.zx, {
                                          className: x.button,
                                          type: "submit",
                                          color: o.zx.Colors.BRAND,
                                          size: o.zx.Sizes.MEDIUM,
                                          children: f.intl.string(f.t.TD7iUx),
                                      }),
                                      (0, n.jsx)(o.zx, {
                                          className: x.button,
                                          color: o.zx.Colors.PRIMARY,
                                          onClick: () => {
                                              O(), (0, p.L)(p.Q.MODAL_DISMISSED, y);
                                          },
                                          children: f.intl.string(f.t.PsWbcp),
                                      }),
                                      (0, n.jsx)(l.Text, {
                                          variant: "text-xs/normal",
                                          color: "header-secondary",
                                          className: x.footer,
                                          children: f.intl.format(f.t.IzZxXW, {
                                              onClick: () => {
                                                  O(),
                                                      (0, u.X)(y),
                                                      (0, l.ZDy)(async () => {
                                                          let { default: e } = await r
                                                              .e("86722")
                                                              .then(r.bind(r, 264333));
                                                          return (t) => {
                                                              var r, a;
                                                              return (0, n.jsx)(
                                                                  e,
                                                                  ((r = (function (e) {
                                                                      for (var t = 1; t < arguments.length; t++) {
                                                                          var r =
                                                                                  null != arguments[t]
                                                                                      ? arguments[t]
                                                                                      : {},
                                                                              n = Object.keys(r);
                                                                          "function" ==
                                                                              typeof Object.getOwnPropertySymbols &&
                                                                              (n = n.concat(
                                                                                  Object.getOwnPropertySymbols(
                                                                                      r,
                                                                                  ).filter(function (e) {
                                                                                      return Object.getOwnPropertyDescriptor(
                                                                                          r,
                                                                                          e,
                                                                                      ).enumerable;
                                                                                  }),
                                                                              )),
                                                                              n.forEach(function (t) {
                                                                                  var n;
                                                                                  (n = r[t]),
                                                                                      t in e
                                                                                          ? Object.defineProperty(
                                                                                                e,
                                                                                                t,
                                                                                                {
                                                                                                    value: n,
                                                                                                    enumerable: !0,
                                                                                                    configurable: !0,
                                                                                                    writable: !0,
                                                                                                },
                                                                                            )
                                                                                          : (e[t] = n);
                                                                              });
                                                                      }
                                                                      return e;
                                                                  })({}, t)),
                                                                  (a = a = { guild: D }),
                                                                  Object.getOwnPropertyDescriptors
                                                                      ? Object.defineProperties(
                                                                            r,
                                                                            Object.getOwnPropertyDescriptors(a),
                                                                        )
                                                                      : (function (e, t) {
                                                                            var r = Object.keys(e);
                                                                            if (Object.getOwnPropertySymbols) {
                                                                                var n = Object.getOwnPropertySymbols(e);
                                                                                r.push.apply(r, n);
                                                                            }
                                                                            return r;
                                                                        })(Object(a)).forEach(function (e) {
                                                                            Object.defineProperty(
                                                                                r,
                                                                                e,
                                                                                Object.getOwnPropertyDescriptor(a, e),
                                                                            );
                                                                        }),
                                                                  r),
                                                              );
                                                          };
                                                      }),
                                                      (0, p.L)(p.Q.MODAL_GUILD_SETTINGS_CLICKED, y);
                                              },
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
