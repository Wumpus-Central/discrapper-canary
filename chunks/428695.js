n.d(t, { Z: () => g });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(755721),
    c = n(481060),
    u = n(367907),
    d = n(626135),
    p = n(981631),
    f = n(388032),
    m = n(454703);
let h = (0, s.debounce)(u.ZP.trackWithMetadata, 500),
    g = function (e) {
        let {
            guild: t,
            title: n,
            message: l,
            image: s,
            type: g,
            imageStyles: _,
            imageMarginX: b,
            imageMarginTop: E,
            trackingSource: O,
            undismissable: I,
            onDismissed: y,
            onClick: v,
            cta: C,
            ctaColor: S,
            centerText: T,
            className: N,
        } = e;
        i.useEffect(() => {
            h(p.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: g,
                guild_id: t.id,
            });
        }, [t.id, g]);
        let j = null;
        "function" == typeof C
            ? (j = C())
            : null != C &&
              (j = (0, r.jsx)(o.zx, {
                  className: m.button,
                  size: o.zx.Sizes.SMALL,
                  onClick: () => {
                      null != g &&
                          d.default.track(p.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: O,
                              guild_id: t.id,
                              notice_type: g,
                          }),
                          null == v || v();
                  },
                  fullWidth: !0,
                  color: S,
                  children: C,
              }));
        let P = null;
        "function" == typeof n
            ? (P = n())
            : null != n &&
              (P = (0, r.jsx)(c.Text, {
                  variant: "text-md/medium",
                  color: "header-primary",
                  className: a()(m.title, { [m.noImageTitle]: null == s }, { [m.center]: T }),
                  children: n,
              }));
        let x = null;
        "function" == typeof l
            ? (x = l())
            : null != l &&
              (x = (0, r.jsx)(c.Text, {
                  className: a()({ [m.center]: T }),
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: l,
              }));
        let A = null != b ? "".concat(b, "px") : "16px";
        return (0, r.jsxs)("div", {
            className: a()(m.container, N),
            children: [
                !0 === I
                    ? null
                    : (0, r.jsx)(c.P3F, {
                          onClick: () => {
                              u.ZP.trackWithMetadata(p.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: g }), null == y || y();
                          },
                          className: m.close,
                          "aria-label": f.intl.string(f.t.WAI6xu),
                          children: (0, r.jsx)(c.Dio, {
                              size: "md",
                              color: "currentColor",
                              className: m.closeIcon,
                          }),
                      }),
                null != s &&
                    (0, r.jsx)("div", {
                        className: m.imageContainer,
                        style: {
                            marginTop: "".concat(E, "px"),
                            marginLeft: A,
                            marginRight: A,
                        },
                        children: (0, r.jsx)("img", {
                            className: m.image,
                            style: _,
                            src: s,
                            alt: "",
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: m.message,
                    children: [P, x, j],
                }),
            ],
        });
    };
