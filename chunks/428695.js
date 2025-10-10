n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n(755721),
    c = n(481060),
    u = n(367907),
    d = n(626135),
    p = n(981631),
    f = n(388032),
    h = n(454703);
let g = (0, o.debounce)(u.ZP.trackWithMetadata, 500),
    m = function (e) {
        let {
            guild: t,
            title: n,
            message: l,
            image: o,
            type: m,
            imageStyles: b,
            imageMarginX: _,
            imageMarginTop: O,
            trackingSource: E,
            undismissable: y,
            onDismissed: v,
            onClick: I,
            cta: S,
            ctaColor: C,
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
        "function" == typeof S
            ? (j = S())
            : null != S &&
              (j = (0, r.jsx)(s.zx, {
                  className: h.button,
                  size: s.zx.Sizes.SMALL,
                  onClick: () => {
                      null != m &&
                          d.default.track(p.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: E,
                              guild_id: t.id,
                              notice_type: m,
                          }),
                          null == I || I();
                  },
                  fullWidth: !0,
                  color: C,
                  children: S,
              }));
        let P = null;
        "function" == typeof n
            ? (P = n())
            : null != n &&
              (P = (0, r.jsx)(c.Text, {
                  variant: "text-md/medium",
                  color: "header-primary",
                  className: a()(h.title, { [h.noImageTitle]: null == o }, { [h.center]: T }),
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
        let A = null != _ ? "".concat(_, "px") : "16px";
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
                          "aria-label": f.intl.string(f.t.WAI6xs),
                          children: (0, r.jsx)(c.Dio, {
                              size: "md",
                              color: "currentColor",
                              className: h.closeIcon,
                          }),
                      }),
                null != o &&
                    (0, r.jsx)("div", {
                        className: h.imageContainer,
                        style: {
                            marginTop: "".concat(O, "px"),
                            marginLeft: A,
                            marginRight: A,
                        },
                        children: (0, r.jsx)("img", {
                            className: h.image,
                            style: b,
                            src: o,
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
