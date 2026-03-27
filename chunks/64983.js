n.d(t, { A: () => E });
var i = n(627968),
    a = n(64700),
    l = n(735438),
    r = n.n(l),
    s = n(421380),
    o = n(397927),
    d = n(58149),
    c = n(954571),
    u = n(83241),
    A = n(926466),
    h = n(652215),
    _ = n(985018),
    m = n(68377);
let g = r().debounce(d.Ay.trackWithMetadata, 500),
    p = (e) => {
        let {
            guild: t,
            title: n,
            message: l,
            image: r,
            type: u,
            imageMarginX: A,
            imageMarginTop: p,
            trackingSource: E,
            undismissable: I,
            onDismissed: f,
            onClick: C,
            cta: T,
            ctaColor: N,
        } = e;
        a.useEffect(() => {
            g(h.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: u, guild_id: t.id });
        }, [t.id, u]);
        let S = null;
        "function" == typeof T
            ? (S = T())
            : null != T &&
              (S = (0, i.jsx)(s.$n, {
                  "data-migration-pending": !0,
                  className: m.HM,
                  size: s.$n.Sizes.SMALL,
                  onClick: () => {
                      null != u &&
                          c.default.track(h.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: E,
                              guild_id: t.id,
                              notice_type: u,
                          }),
                          C?.();
                  },
                  fullWidth: !0,
                  color: N,
                  children: T,
              }));
        let x = null != A ? `${A}px` : "16px";
        return (0, i.jsxs)("div", {
            className: m.kX,
            children: [
                !0 === I
                    ? null
                    : (0, i.jsx)(o.DUT, {
                          onClick: () => {
                              d.Ay.trackWithMetadata(h.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: u }), f?.();
                          },
                          className: m.VN,
                          "aria-label": _.intl.string(_.t.WAI6xu),
                          children: (0, i.jsx)(o.PGe, { size: "md", color: "currentColor", className: m.ut }),
                      }),
                null != r &&
                    (0, i.jsx)("div", {
                        className: m.ZS,
                        style: { marginTop: `${p}px`, marginLeft: x, marginRight: x },
                        children: "string" == typeof r ? (0, i.jsx)("img", { className: m.Sl, src: r, alt: "" }) : r,
                    }),
                (0, i.jsxs)("div", {
                    className: m.iU,
                    children: [
                        null != n
                            ? (0, i.jsx)(o.Heading, { variant: "heading-md/semibold", className: m.DD, children: n })
                            : null,
                        (0, i.jsx)(o.Text, { variant: "text-sm/normal", children: l }),
                        S,
                    ],
                }),
            ],
        });
    },
    E = function (e) {
        let { showRedesignedChannelNotice: t } = (0, u.P)(!0);
        return t ? (0, i.jsx)(A.A, { ...e }) : (0, i.jsx)(p, { ...e });
    };
