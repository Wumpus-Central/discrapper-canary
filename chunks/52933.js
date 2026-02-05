s.d(t, { Ay: () => f, BA: () => A });
var n = s(627968);
s(64700);
var l = s(503698),
    a = s.n(l),
    i = s(827734),
    r = s(990078),
    o = s(397927),
    d = s(422844),
    c = s(435470),
    u = s(376310),
    h = s(746080),
    m = s(985018),
    g = s(558997),
    x = s(902049);
function A(e) {
    let { channel: t, isNew: s } = e,
        n = (0, c.kt)(t),
        l = n.slice(void 0, 3),
        a = n.slice(3),
        i = n.length > 3 ? n.length - 3 : 0,
        r = t.hasFlag(h.lx.PINNED),
        o = l.length > 0 || r || s;
    return {
        shownTags: l,
        remainingTags: a,
        moreTagsCount: i,
        isPinned: r,
        shouldRenderTagsRow: o,
        forumPostContainsTags: n.length > 0,
    };
}
function f(e) {
    let { channel: t, isNew: s, tagsClassName: l, className: c } = e,
        {
            shownTags: h,
            remainingTags: f,
            moreTagsCount: p,
            isPinned: C,
            shouldRenderTagsRow: S,
        } = A({ channel: t, isNew: s }),
        { tagFilter: v } = (0, d.R)(t.id);
    return S
        ? (0, n.jsxs)("div", {
              className: a()(x._A, c),
              children: [
                  s
                      ? (0, n.jsx)(o.LpS, {
                            className: a()(g.Ad, g.PP),
                            color: i.A.unsafe_rawColors.BRAND_260.css,
                            text: m.intl.string(m.t.y2b7CA),
                        })
                      : null,
                  C &&
                      (0, n.jsx)("div", {
                          className: x.Ne,
                          children: (0, n.jsx)(r.m, {
                              text: m.intl.string(m.t["1QLRYb"]),
                              children: (0, n.jsx)(o.tsw, { size: "custom", width: 16, height: 16, color: "white" }),
                          }),
                      }),
                  h.map((e) =>
                      (0, n.jsx)(
                          u.A,
                          { tag: e, size: u.A.Sizes.SMALL, className: a()(l, { [x.At]: v.has(e.id) }) },
                          e.id,
                      ),
                  ),
                  p > 0 ? (0, n.jsx)(u.q, { tags: f, count: p, size: u.A.Sizes.SMALL }) : null,
              ],
          })
        : null;
}
