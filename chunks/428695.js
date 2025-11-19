n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(755721),
    c = n(481060),
    u = n(367907),
    d = n(626135),
    p = n(981631),
    f = n(388032),
    h = n(454703);
let g = (0, s.debounce)(u.ZP.trackWithMetadata, 500),
    m = function (e) {
        let {
            guild: t,
            title: n,
            message: l,
            image: s,
            type: m,
            imageStyles: _,
            imageMarginX: b,
            imageMarginTop: E,
            trackingSource: O,
            undismissable: y,
            onDismissed: v,
            onClick: I,
            cta: C,
            ctaColor: S,
            centerText: T,
            className: N,
        } = e;
        i.useEffect(() => {
            g(p.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: m,
                guild_id: t.id,
            });
        }, [t.id, m]);
        let j = null;
        "function" == typeof C
            ? (j = C())
            : null != C &&
              (j = (0, r.jsx)(o.zx, {
                  className: h.button,
                  size: o.zx.Sizes.SMALL,
                  onClick: () => {
                      null != m &&
                          d.default.track(p.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: O,
                              guild_id: t.id,
                              notice_type: m,
                          }),
                          null == I || I();
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
                  className: a()(h.title, { [h.noImageTitle]: null == s }, { [h.center]: T }),
                  children: n,
              }));
        let x = null;
        "function" == typeof l
            ? (x = l())
            : null != l &&
              (x = (0, r.jsx)(c.Text, {
                  className: a()({ [h.center]: T }),
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: l,
              }));
        let A = null != b ? "".concat(b, "px") : "16px";
        return (0, r.jsxs)("div", {
            className: a()(h.container, N),
            children: [
                !0 === y
                    ? null
                    : (0, r.jsx)(c.P3F, {
                          onClick: () => {
                              u.ZP.trackWithMetadata(p.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: m }), null == v || v();
                          },
                          className: h.close,
                          "aria-label": f.intl.string(f.t.WAI6xu),
                          children: (0, r.jsx)(c.Dio, {
                              size: "md",
                              color: "currentColor",
                              className: h.closeIcon,
                          }),
                      }),
                null != s &&
                    (0, r.jsx)("div", {
                        className: h.imageContainer,
                        style: {
                            marginTop: "".concat(E, "px"),
                            marginLeft: A,
                            marginRight: A,
                        },
                        children: (0, r.jsx)("img", {
                            className: h.image,
                            style: _,
                            src: s,
                            alt: "",
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: h.message,
                    children: [P, x, j],
                }),
            ],
        });
    };
