n.d(t, { Ay: () => j, BA: () => f });
var s = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    i = n(661531),
    r = n(990078),
    c = n(812993),
    o = n(366605),
    d = n(422844),
    u = n(691060),
    m = n(376310),
    h = n(746080),
    x = n(375708),
    g = n(330070),
    A = n(280530);
function f(e) {
    let { channel: t, isNew: n } = e,
        s = (0, u.kt)(t),
        l = s.slice(void 0, 3),
        a = s.slice(3),
        i = s.length > 3 ? s.length - 3 : 0,
        r = t.hasFlag(h.lx.PINNED),
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
            shownTags: h,
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
                      ? (0, s.jsx)(c.Lp, {
                            className: a()(g.Ad, g.PP),
                            color: i.A.unsafe_rawColors.BRAND_260.css,
                            text: x.intl.string(x.t.y2b7CA),
                        })
                      : null,
                  N &&
                      (0, s.jsx)("div", {
                          className: A.Ne,
                          children: (0, s.jsx)(r.m, {
                              text: x.intl.string(x.t["1QLRYb"]),
                              children: (0, s.jsx)(o.t, { size: "custom", width: 16, height: 16, color: "white" }),
                          }),
                      }),
                  h.map((e) =>
                      (0, s.jsx)(
                          m.A,
                          { tag: e, size: m.A.Sizes.SMALL, className: a()(l, { [A.At]: C.has(e.id) }) },
                          e.id,
                      ),
                  ),
                  v > 0 ? (0, s.jsx)(m.q, { tags: j, count: v, size: m.A.Sizes.SMALL }) : null,
              ],
          })
        : null;
}
