n.d(t, {
    kb: () => O,
    oO: () => y,
    uK: () => b,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(827734),
    o = n(582754),
    l = n(397927),
    c = n(736653),
    u = n(235986),
    d = n(975571),
    f = n(86379),
    p = n(652215),
    _ = n(985018),
    h = n(389797),
    m = n(270516),
    g = n(480540);

function E(e) {
    let { className: t } = e,
        n = (0, c.Ay)(),
        i = (0, o.Mw)(n) ? m : g;
    return (0, r.jsxs)("div", {
        className: a()(h.kL, t),
        children: [
            (0, r.jsx)(l.Heading, {
                className: h.wx,
                variant: "heading-xl/semibold",
                children: _.intl.string(_.t.vwMEHS),
            }),
            (0, r.jsxs)(l.Text, {
                className: h.h_,
                variant: "text-md/normal",
                color: "text-default",
                children: [
                    (0, r.jsx)("p", {
                        children: _.intl.string(_.t.fev8MQ),
                    }),
                    (0, r.jsx)("p", {
                        children: _.intl.format(_.t.IHxEJU, {
                            helpdeskArticle: d.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("img", {
                src: i,
                className: h.j0,
                alt: "Blocked Payments",
            }),
        ],
    });
}

function b() {
    return (0, r.jsx)(E, {
        className: h.W0,
    });
}

function y(e) {
    let { onClose: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.rQ0, {
                className: h.Oy,
                justify: u.A.Justify.END,
                "data-migration-pending": !0,
                children: (0, r.jsx)(l.s_y, {
                    onClick: t,
                    "data-migration-pending": !0,
                }),
            }),
            (0, r.jsx)(l.$mQ, {
                className: h.Gv,
                "data-migration-pending": !0,
                children: (0, r.jsx)(E, {
                    className: h.yl,
                }),
            }),
        ],
    });
}

function O(e) {
    let { className: t } = e;
    return (0, f.H)()
        ? (0, r.jsxs)(l.ZpM, {
              className: a()(h.ek, t),
              type: l.ZpM.Types.CUSTOM,
              children: [
                  (0, r.jsx)(l.EpV, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: h.XJ,
                      color: s.A.unsafe_rawColors.YELLOW_300.css,
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      children: _.intl.format(_.t.NYkcCh, {
                          helpdeskArticle: d.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS),
                      }),
                  }),
              ],
          })
        : null;
}
