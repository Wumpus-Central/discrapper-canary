var s = t(477900),
    l = t(503698),
    a = t.n(l),
    i = t(805251),
    r = t(866665),
    c = t(366605),
    d = t(431527),
    o = t(890283),
    u = t(422844),
    h = t(691060),
    m = t(376310),
    x = t(746080),
    g = t(792996),
    j = t(240103);
function f(e) {
    let { channel: n, isNew: t } = e,
        s = (0, h.kt)(n),
        l = s.slice(void 0, 3),
        a = s.slice(3),
        i = s.length > 3 ? s.length - 3 : 0,
        r = n.hasFlag(x.lx.PINNED),
        c = l.length > 0 || r || t;
    return {
        shownTags: l,
        remainingTags: a,
        moreTagsCount: i,
        isPinned: r,
        shouldRenderTagsRow: c,
        forumPostContainsTags: s.length > 0,
    };
}
t.d(
    n,
    {},
    {
        Ay: function (e) {
            let { channel: n, isNew: t, tagsClassName: l, className: h } = e,
                {
                    shownTags: x,
                    remainingTags: v,
                    moreTagsCount: A,
                    isPinned: p,
                    shouldRenderTagsRow: N,
                } = f({ channel: n, isNew: t }),
                { enabled: b } = o.A.useConfig({ location: "forum-post-tags" }),
                { tagFilter: y } = (0, u.R)(n.id),
                C = (0, m.cq)(x);
            return N
                ? (0, s.jsxs)("div", {
                      className: a()(j._A, h),
                      children: [
                          t
                              ? (0, s.jsx)("div", {
                                    className: j.Ad,
                                    children: (0, s.jsx)(i.E, { type: "new", variant: "primary" }),
                                })
                              : null,
                          p &&
                              (0, s.jsx)("div", {
                                  className: j.Ne,
                                  children: (0, s.jsx)(r.m, {
                                      text: g.intl.string(g.t["1QLRYb"]),
                                      children: (0, s.jsx)(c.PinIcon, {
                                          size: "custom",
                                          width: 16,
                                          height: 16,
                                          color: "white",
                                      }),
                                  }),
                              }),
                          b
                              ? (0, s.jsx)(d.C, {
                                    variant: "filter",
                                    label: g.intl.string(g.t["P/y+sj"]),
                                    items: C,
                                    size: "xs",
                                })
                              : x.map((e) =>
                                    (0, s.jsx)(
                                        m.Ay,
                                        { tag: e, size: m.Ay.Sizes.SMALL, className: a()(l, { [j.At]: y.has(e.id) }) },
                                        e.id,
                                    ),
                                ),
                          A > 0
                              ? (0, s.jsx)(m.q6, { tags: v, count: A, size: m.Ay.Sizes.SMALL, useManaTagGroup: b })
                              : null,
                      ],
                  })
                : null;
        },
        BA: f,
    },
);
