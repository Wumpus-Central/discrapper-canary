var s = t(477900),
    l = t(503698),
    i = t.n(l),
    a = t(805251),
    r = t(866665),
    c = t(366605),
    d = t(431527),
    o = t(890283),
    u = t(422844),
    h = t(691060),
    m = t(376310),
    g = t(746080),
    x = t(792996),
    f = t(240103);
function j(e) {
    let { channel: n, isNew: t } = e,
        s = (0, h.kt)(n),
        l = s.slice(void 0, 3),
        i = s.slice(3),
        a = s.length > 3 ? s.length - 3 : 0,
        r = n.hasFlag(g.lx.PINNED),
        c = l.length > 0 || r || t;
    return {
        shownTags: l,
        remainingTags: i,
        moreTagsCount: a,
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
                    shownTags: g,
                    remainingTags: A,
                    moreTagsCount: v,
                    isPinned: p,
                    shouldRenderTagsRow: N,
                } = j({ channel: n, isNew: t }),
                { enabled: b } = o.A.useConfig({ location: "forum-post-tags" }),
                { tagFilter: y } = (0, u.R)(n.id),
                C = (0, m.cq)(g);
            return N
                ? (0, s.jsxs)("div", {
                      className: i()(f._A, h),
                      children: [
                          t
                              ? (0, s.jsx)("div", {
                                    className: f.Ad,
                                    children: (0, s.jsx)(a.E, { type: "new", variant: "primary" }),
                                })
                              : null,
                          p &&
                              (0, s.jsx)("div", {
                                  className: f.Ne,
                                  children: (0, s.jsx)(r.m, {
                                      text: x.intl.string(x.t["1QLRYb"]),
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
                                    label: x.intl.string(x.t["P/y+sj"]),
                                    items: C,
                                    size: "xs",
                                })
                              : g.map((e) =>
                                    (0, s.jsx)(
                                        m.Ay,
                                        { tag: e, size: m.Ay.Sizes.SMALL, className: i()(l, { [f.At]: y.has(e.id) }) },
                                        e.id,
                                    ),
                                ),
                          v > 0
                              ? (0, s.jsx)(m.q6, { tags: A, count: v, size: m.Ay.Sizes.SMALL, useManaTagGroup: b })
                              : null,
                      ],
                  })
                : null;
        },
        BA: j,
    },
);
