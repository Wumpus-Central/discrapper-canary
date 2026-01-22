n.d(t, {
    Ay: () => v,
    BA: () => f,
});
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(827734),
    a = n(990078),
    o = n(397927),
    c = n(422844),
    d = n(435470),
    u = n(376310),
    h = n(746080),
    g = n(985018),
    m = n(558997),
    p = n(902049);
function f(e) {
    let { channel: t, isNew: n } = e,
        i = (0, d.kt)(t),
        s = i.slice(void 0, 3),
        r = i.slice(3),
        l = i.length > 3 ? i.length - 3 : 0,
        a = t.hasFlag(h.lx.PINNED),
        o = s.length > 0 || a || n;
    return {
        shownTags: s,
        remainingTags: r,
        moreTagsCount: l,
        isPinned: a,
        shouldRenderTagsRow: o,
        forumPostContainsTags: i.length > 0,
    };
}
function v(e) {
    let { channel: t, isNew: n, tagsClassName: s, className: d } = e,
        {
            shownTags: h,
            remainingTags: v,
            moreTagsCount: b,
            isPinned: A,
            shouldRenderTagsRow: O,
        } = f({
            channel: t,
            isNew: n,
        }),
        { tagFilter: x } = (0, c.R)(t.id);
    return O
        ? (0, i.jsxs)("div", {
              className: r()(p._A, d),
              children: [
                  n
                      ? (0, i.jsx)(o.LpS, {
                            className: r()(m.Ad, m.PP),
                            color: l.A.unsafe_rawColors.BRAND_260.css,
                            text: g.intl.string(g.t.y2b7CA),
                        })
                      : null,
                  A &&
                      (0, i.jsx)("div", {
                          className: p.Ne,
                          children: (0, i.jsx)(a.m, {
                              text: g.intl.string(g.t["1QLRYb"]),
                              children: (0, i.jsx)(o.tsw, {
                                  size: "custom",
                                  width: 16,
                                  height: 16,
                                  color: "white",
                              }),
                          }),
                      }),
                  h.map((e) =>
                      (0, i.jsx)(
                          u.A,
                          {
                              tag: e,
                              size: u.A.Sizes.SMALL,
                              className: r()(s, { [p.At]: x.has(e.id) }),
                          },
                          e.id,
                      ),
                  ),
                  b > 0
                      ? (0, i.jsx)(u.q, {
                            tags: v,
                            count: b,
                            size: u.A.Sizes.SMALL,
                        })
                      : null,
              ],
          })
        : null;
}
