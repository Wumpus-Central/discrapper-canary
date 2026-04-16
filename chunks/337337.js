"use strict";
n.d(t, { A: () => x });
var l = n(627968);
n(64700);
var i = n(91871),
    s = n.n(i),
    a = n(311907),
    r = n(397927),
    o = n(565645),
    d = n(508675),
    c = n(435470),
    u = n(985018),
    m = n(6858);
let h = (e) => {
    let { tag: t } = e,
        { id: n, name: i, emojiId: s, emojiName: c } = t,
        u = (0, a.bG)([d.Ay], () => (null != s ? d.Ay.getUsableCustomEmojiById(s) : null)),
        h = null != s || null != c;
    return (0, l.jsx)(
        r.x4T,
        {
            value: n,
            children: (0, l.jsx)(r.x4T.Label, {
                children: (0, l.jsxs)("div", {
                    className: m.nM,
                    children: [
                        h
                            ? (0, l.jsx)(o.A, {
                                  className: m.__invalid_emoji,
                                  emojiId: s,
                                  emojiName: c,
                                  animated: !!u?.animated,
                              })
                            : (0, l.jsx)(r.gqV, { size: "md", color: "currentColor", className: m.__invalid_emoji }),
                        (0, l.jsx)(r.Text, { variant: "text-md/semibold", color: "text-default", children: i }),
                    ],
                }),
            }),
        },
        n,
    );
};
function x(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: i, onSelectTag: a, onClose: o } = e,
        d = (0, c.OT)(t);
    return (0, l.jsx)(r.pzS, {
        value: n,
        onChange: (e) => {
            (!i || n.has(e)) && (a(e), o());
        },
        placeholder: u.intl.string(u.t.MbhGm7),
        "aria-label": u.intl.string(u.t.MbhGm7),
        children: (e) =>
            d.filter((t) => s()(e.toLowerCase(), t.name.toLowerCase())).map((e) => (0, l.jsx)(h, { tag: e }, e.id)),
    });
}
