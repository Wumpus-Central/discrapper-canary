n.d(t, { Ay: () => j, BA: () => A });
var s = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    i = n(827734),
    r = n(990078),
    c = n(777666),
    o = n(366605),
    u = n(200463),
    d = n(435470),
    h = n(376310),
    m = n(746080),
    g = n(985018),
    x = n(330070),
    f = n(280530);
function A(e) {
    let { channel: t, isNew: n } = e,
        s = (0, d.kt)(t),
        l = s.slice(void 0, 3),
        a = s.slice(3),
        i = s.length > 3 ? s.length - 3 : 0,
        r = t.hasFlag(m.lx.PINNED),
        c = l.length > 0 || r || n;
    return {
        shownTags: l,
        remainingTags: a,
        moreTagsCount: i,
        isPinned: r,
        shouldRenderTagsRow: c,
        forumPostContainsTags: s.length > 0,
    };
}
function j(e) {
    let { channel: t, isNew: n, tagsClassName: l, className: d } = e,
        {
            shownTags: m,
            remainingTags: j,
            moreTagsCount: v,
            isPinned: p,
            shouldRenderTagsRow: N,
        } = A({ channel: t, isNew: n }),
        { tagFilter: C } = (0, u.R)(t.id);
    return N
        ? (0, s.jsxs)("div", {
              className: a()(f._A, d),
              children: [
                  n
                      ? (0, s.jsx)(c.Lp, {
                            className: a()(x.Ad, x.PP),
                            color: i.A.unsafe_rawColors.BRAND_260.css,
                            text: g.intl.string(g.t.y2b7CA),
                        })
                      : null,
                  p &&
                      (0, s.jsx)("div", {
                          className: f.Ne,
                          children: (0, s.jsx)(r.m, {
                              text: g.intl.string(g.t["1QLRYb"]),
                              children: (0, s.jsx)(o.t, { size: "custom", width: 16, height: 16, color: "white" }),
                          }),
                      }),
                  m.map((e) =>
                      (0, s.jsx)(
                          h.A,
                          { tag: e, size: h.A.Sizes.SMALL, className: a()(l, { [f.At]: C.has(e.id) }) },
                          e.id,
                      ),
                  ),
                  v > 0 ? (0, s.jsx)(h.q, { tags: j, count: v, size: h.A.Sizes.SMALL }) : null,
              ],
          })
        : null;
}
