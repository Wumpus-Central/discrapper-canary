n.d(t, { A: () => f });
var l = n(627968);
n(64700);
var r = n(91871),
    a = n.n(r),
    i = n(311907),
    s = n(397927),
    c = n(565645),
    o = n(508675),
    d = n(435470),
    u = n(985018),
    m = n(553017);
let h = (e) => {
    let { tag: t } = e,
        { id: n, name: r, emojiId: a, emojiName: d } = t,
        u = (0, i.bG)([o.Ay], () => (null != a ? o.Ay.getUsableCustomEmojiById(a) : null)),
        h = null != a || null != d;
    return (0, l.jsx)(
        s.x4T,
        {
            value: n,
            children: (0, l.jsx)(s.x4T.Label, {
                children: (0, l.jsxs)("div", {
                    className: m.nM,
                    children: [
                        h
                            ? (0, l.jsx)(c.A, {
                                  className: m.__invalid_emoji,
                                  emojiId: a,
                                  emojiName: d,
                                  animated: !!(null == u ? void 0 : u.animated),
                              })
                            : (0, l.jsx)(s.gqV, {
                                  size: "md",
                                  color: "currentColor",
                                  className: m.__invalid_emoji,
                              }),
                        (0, l.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: r,
                        }),
                    ],
                }),
            }),
        },
        n,
    );
};
function f(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: r, onSelectTag: i, onClose: c } = e,
        o = (0, d.OT)(t);
    return (0, l.jsx)(s.pzS, {
        value: n,
        onChange: (e) => {
            (!r || n.has(e)) && (i(e), c());
        },
        placeholder: u.intl.string(u.t.MbhGm7),
        "aria-label": u.intl.string(u.t.MbhGm7),
        children: (e) =>
            o.filter((t) => a()(e.toLowerCase(), t.name.toLowerCase())).map((e) => (0, l.jsx)(h, { tag: e }, e.id)),
    });
}
