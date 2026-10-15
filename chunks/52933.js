n.d(t, { Ay: () => A, BA: () => j });
var s = n(477900),
    l = n(503698),
    i = n.n(l),
    a = n(62010),
    r = n(866665),
    c = n(366605),
    d = n(872162),
    o = n(890283),
    u = n(422844),
    h = n(691060),
    m = n(376310),
    g = n(746080),
    x = n(105292),
    f = n(240103);
function j(e) {
    let { channel: t, isNew: n } = e,
        s = (0, h.kt)(t),
        l = s.slice(void 0, 3),
        i = s.slice(3),
        a = s.length > 3 ? s.length - 3 : 0,
        r = t.hasFlag(g.lx.PINNED),
        c = l.length > 0 || r || n;
    return {
        shownTags: l,
        remainingTags: i,
        moreTagsCount: a,
        isPinned: r,
        shouldRenderTagsRow: c,
        forumPostContainsTags: s.length > 0,
    };
}
function A(e) {
    let { channel: t, isNew: n, tagsClassName: l, className: h } = e,
        {
            shownTags: g,
            remainingTags: A,
            moreTagsCount: v,
            isPinned: p,
            shouldRenderTagsRow: N,
        } = j({ channel: t, isNew: n }),
        { enabled: y } = o.A.useConfig({ location: "forum-post-tags" }),
        { tagFilter: b } = (0, u.R)(t.id),
        C = (0, m.cq)(g);
    return N
        ? (0, s.jsxs)("div", {
              className: i()(f._A, h),
              children: [
                  n
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
                              children: (0, s.jsx)(c.t, { size: "custom", width: 16, height: 16, color: "white" }),
                          }),
                      }),
                  y
                      ? (0, s.jsx)(d.C, {
                            variant: "filter",
                            label: x.intl.string(x.t["P/y+sj"]),
                            items: C,
                            size: "xs",
                        })
                      : g.map((e) =>
                            (0, s.jsx)(
                                m.Ay,
                                { tag: e, size: m.Ay.Sizes.SMALL, className: i()(l, { [f.At]: b.has(e.id) }) },
                                e.id,
                            ),
                        ),
                  v > 0 ? (0, s.jsx)(m.q6, { tags: A, count: v, size: m.Ay.Sizes.SMALL, useManaTagGroup: y }) : null,
              ],
          })
        : null;
}
