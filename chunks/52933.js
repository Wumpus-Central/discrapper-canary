n.d(t, { Ay: () => p, BA: () => v });
var s = n(477900),
    l = n(503698),
    a = n.n(l),
    i = n(661531),
    r = n(812993),
    c = n(866665),
    o = n(366605),
    d = n(669257),
    u = n(890283),
    h = n(422844),
    m = n(691060),
    g = n(376310),
    x = n(746080),
    A = n(375708),
    f = n(223139),
    j = n(240103);
function v(e) {
    let { channel: t, isNew: n } = e,
        s = (0, m.kt)(t),
        l = s.slice(void 0, 3),
        a = s.slice(3),
        i = s.length > 3 ? s.length - 3 : 0,
        r = t.hasFlag(x.lx.PINNED),
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
function p(e) {
    let { channel: t, isNew: n, tagsClassName: l, className: m } = e,
        {
            shownTags: x,
            remainingTags: p,
            moreTagsCount: N,
            isPinned: C,
            shouldRenderTagsRow: b,
        } = v({ channel: t, isNew: n }),
        { enabled: y } = u.A.useConfig({ location: "forum-post-tags" }),
        { tagFilter: S } = (0, h.R)(t.id),
        M = (0, g.cq)(x);
    return b
        ? (0, s.jsxs)("div", {
              className: a()(j._A, m),
              children: [
                  n
                      ? (0, s.jsx)(r.Lp, {
                            className: a()(f.Ad, f.PP),
                            color: i.A.unsafe_rawColors.BRAND_260.css,
                            text: A.intl.string(A.t.y2b7CA),
                        })
                      : null,
                  C &&
                      (0, s.jsx)("div", {
                          className: j.Ne,
                          children: (0, s.jsx)(c.m, {
                              text: A.intl.string(A.t["1QLRYb"]),
                              children: (0, s.jsx)(o.t, { size: "custom", width: 16, height: 16, color: "white" }),
                          }),
                      }),
                  y
                      ? (0, s.jsx)(d.C, {
                            variant: "filter",
                            label: A.intl.string(A.t["P/y+sj"]),
                            items: M,
                            size: "xs",
                        })
                      : x.map((e) =>
                            (0, s.jsx)(
                                g.Ay,
                                { tag: e, size: g.Ay.Sizes.SMALL, className: a()(l, { [j.At]: S.has(e.id) }) },
                                e.id,
                            ),
                        ),
                  N > 0 ? (0, s.jsx)(g.q6, { tags: p, count: N, size: g.Ay.Sizes.SMALL, useManaTagGroup: y }) : null,
              ],
          })
        : null;
}
