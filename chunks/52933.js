n.d(t, { Ay: () => j, BA: () => f });
var s = n(477900);
n(582128);
var l = n(503698),
    a = n.n(l),
    i = n(661531),
    r = n(812993),
    c = n(866665),
    o = n(366605),
    d = n(422844),
    u = n(691060),
    h = n(376310),
    m = n(746080),
    g = n(375708),
    x = n(223139),
    A = n(240103);
function f(e) {
    let { channel: t, isNew: n } = e,
        s = (0, u.kt)(t),
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
    let { channel: t, isNew: n, tagsClassName: l, className: u } = e,
        {
            shownTags: m,
            remainingTags: j,
            moreTagsCount: v,
            isPinned: N,
            shouldRenderTagsRow: p,
        } = f({ channel: t, isNew: n }),
        { tagFilter: C } = (0, d.R)(t.id);
    return p
        ? (0, s.jsxs)("div", {
              className: a()(A._A, u),
              children: [
                  n
                      ? (0, s.jsx)(r.Lp, {
                            className: a()(x.Ad, x.PP),
                            color: i.A.unsafe_rawColors.BRAND_260.css,
                            text: g.intl.string(g.t.y2b7CA),
                        })
                      : null,
                  N &&
                      (0, s.jsx)("div", {
                          className: A.Ne,
                          children: (0, s.jsx)(c.m, {
                              text: g.intl.string(g.t["1QLRYb"]),
                              children: (0, s.jsx)(o.t, { size: "custom", width: 16, height: 16, color: "white" }),
                          }),
                      }),
                  m.map((e) =>
                      (0, s.jsx)(
                          h.A,
                          { tag: e, size: h.A.Sizes.SMALL, className: a()(l, { [A.At]: C.has(e.id) }) },
                          e.id,
                      ),
                  ),
                  v > 0 ? (0, s.jsx)(h.q, { tags: j, count: v, size: h.A.Sizes.SMALL }) : null,
              ],
          })
        : null;
}
