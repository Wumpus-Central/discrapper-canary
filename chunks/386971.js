n.d(t, {
    mc: () => u,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(565645),
    l = n(3432),
    c = n(233883);

function u(e) {
    let t,
        { applicationId: n, storeListingBenefits: i, skuBenefits: a, className: s } = e;
    return (
        null != i
            ? (t = i.map((e) =>
                  (0, r.jsx)(
                      f,
                      {
                          applicationId: n,
                          benefit: e,
                          className: s,
                      },
                      e.id,
                  ),
              ))
            : null != a &&
              (t = a.map((e, t) =>
                  (0, r.jsx)(
                      d,
                      {
                          benefit: e,
                          className: s,
                      },
                      t,
                  ),
              )),
        t
    );
}

function d(e) {
    let {
        benefit: t,
        className: n,
        emojiContainerClassName: i,
        showsDescription: l = !0,
        nameTextVariant: u = "text-md/medium",
        nameTextColor: d = "text-strong",
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(c.kL, n),
        children: [
            null != t.emoji &&
                (0, r.jsx)("div", {
                    className: a()(c.qq, i),
                    children: (0, r.jsx)(o.A, {
                        emojiId: t.emoji.id,
                        emojiName: t.emoji.name,
                        animated: t.emoji.animated,
                    }),
                }),
            (0, r.jsxs)("div", {
                className: c.op,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: u,
                        color: d,
                        className: c.UU,
                        children: t.name,
                    }),
                    l &&
                        (0, r.jsx)(s.Text, {
                            color: "interactive-text-default",
                            variant: "text-sm/normal",
                            children: t.description,
                        }),
                ],
            }),
        ],
    });
}

function f(e) {
    let {
        applicationId: t,
        benefit: n,
        className: i,
        emojiContainerClassName: o,
        showsDescription: u = !0,
        nameTextVariant: d = "text-md/medium",
        nameTextColor: f = "text-strong",
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(c.kL, i),
        children: [
            (0, r.jsx)("div", {
                className: a()(c.qq, o),
                children: (0, l.N)(t, n.icon),
            }),
            (0, r.jsxs)("div", {
                className: c.op,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: d,
                        color: f,
                        className: c.UU,
                        children: n.name,
                    }),
                    u &&
                        (0, r.jsx)(s.Text, {
                            color: "interactive-text-default",
                            variant: "text-sm/normal",
                            children: n.description,
                        }),
                ],
            }),
        ],
    });
}
