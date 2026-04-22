"use strict";
n.d(t, { A: () => _ });
var l = n(627968);
n(64700);
var a = n(91871),
    s = n.n(a),
    i = n(311907),
    r = n(103552),
    o = n(278416),
    d = n(834730),
    c = n(914427),
    u = n(565645),
    m = n(508675),
    h = n(435470),
    g = n(985018),
    x = n(156810);
let f = (e) => {
    let { tag: t } = e,
        { id: n, name: a, emojiId: s, emojiName: c } = t,
        h = (0, i.bG)([m.Ay], () => (null != s ? m.Ay.getUsableCustomEmojiById(s) : null)),
        g = null != s || null != c;
    return (0, l.jsx)(
        r.x4,
        {
            value: n,
            children: (0, l.jsx)(r.x4.Label, {
                children: (0, l.jsxs)("div", {
                    className: x.nM,
                    children: [
                        g
                            ? (0, l.jsx)(u.A, {
                                  className: x.__invalid_emoji,
                                  emojiId: s,
                                  emojiName: c,
                                  animated: !!h?.animated,
                              })
                            : (0, l.jsx)(o.g, { size: "md", color: "currentColor", className: x.__invalid_emoji }),
                        (0, l.jsx)(d.E, { variant: "text-md/semibold", color: "text-default", children: a }),
                    ],
                }),
            }),
        },
        n,
    );
};
function _(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: a, onSelectTag: i, onClose: r } = e,
        o = (0, h.OT)(t);
    return (0, l.jsx)(c.p, {
        value: n,
        onChange: (e) => {
            (!a || n.has(e)) && (i(e), r());
        },
        placeholder: g.intl.string(g.t.MbhGm7),
        "aria-label": g.intl.string(g.t.MbhGm7),
        children: (e) =>
            o.filter((t) => s()(e.toLowerCase(), t.name.toLowerCase())).map((e) => (0, l.jsx)(f, { tag: e }, e.id)),
    });
}
