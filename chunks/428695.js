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
    g = n(156132);
let h = (0, s.debounce)(u.ZP.trackWithMetadata, 500),
    m = function (e) {
        let {
            guild: t,
            title: n,
            message: l,
            image: s,
            type: m,
            imageStyles: b,
            imageMarginX: _,
            imageMarginTop: E,
            trackingSource: O,
            undismissable: v,
            onDismissed: y,
            onClick: I,
            cta: C,
            ctaColor: S,
            centerText: T,
            className: N,
        } = e;
        i.useEffect(() => {
            h(p.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: m,
                guild_id: t.id,
            });
        }, [t.id, m]);
        let j = null;
        "function" == typeof C
            ? (j = C())
            : null != C &&
              (j = (0, r.jsx)(o.zx, {
                  "data-migration-pending": !0,
                  className: g.button,
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
                  color: "text-strong",
                  className: a()(g.title, { [g.noImageTitle]: null == s }, { [g.center]: T }),
                  children: n,
              }));
        let x = null;
        "function" == typeof l
            ? (x = l())
            : null != l &&
              (x = (0, r.jsx)(c.Text, {
                  className: a()({ [g.center]: T }),
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: l,
              }));
        let A = null != _ ? "".concat(_, "px") : "16px";
        return (0, r.jsxs)("div", {
            className: a()(g.container, N),
            children: [
                !0 === v
                    ? null
                    : (0, r.jsx)(c.P3F, {
                          onClick: () => {
                              u.ZP.trackWithMetadata(p.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: m }), null == y || y();
                          },
                          className: g.close,
                          "aria-label": f.intl.string(f.t.WAI6xu),
                          children: (0, r.jsx)(c.Dio, {
                              size: "md",
                              color: "currentColor",
                              className: g.closeIcon,
                          }),
                      }),
                null != s &&
                    (0, r.jsx)("div", {
                        className: g.imageContainer,
                        style: {
                            marginTop: "".concat(E, "px"),
                            marginLeft: A,
                            marginRight: A,
                        },
                        children: (0, r.jsx)("img", {
                            className: g.image,
                            style: b,
                            src: s,
                            alt: "",
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: g.message,
                    children: [P, x, j],
                }),
            ],
        });
    };
