n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(658722),
    a = n.n(i),
    l = n(442837),
    s = n(481060),
    o = n(596454),
    c = n(339085),
    d = n(456269),
    u = n(388032),
    m = n(183132);
let h = (e) => {
    let { tag: t } = e,
        { id: n, name: i, emojiId: a, emojiName: d } = t,
        u = (0, l.e7)([c.ZP], () => (null != a ? c.ZP.getUsableCustomEmojiById(a) : null)),
        h = null != a || null != d;
    return (0, r.jsx)(
        s.lo1,
        {
            value: n,
            children: (0, r.jsx)(s.lo1.Label, {
                children: (0, r.jsxs)("div", {
                    className: m.row,
                    children: [
                        h
                            ? (0, r.jsx)(o.Z, {
                                  className: m.__invalid_emoji,
                                  emojiId: a,
                                  emojiName: d,
                                  animated: !!(null == u ? void 0 : u.animated),
                              })
                            : (0, r.jsx)(s.lO_, {
                                  size: "md",
                                  color: "currentColor",
                                  className: m.__invalid_emoji,
                              }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/semibold",
                            color: "header-secondary",
                            children: i,
                        }),
                    ],
                }),
            }),
        },
        n,
    );
};
function g(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: i, onSelectTag: l, onClose: o } = e,
        c = (0, d.Vm)(t);
    return (0, r.jsx)(s.DBG, {
        value: n,
        onChange: (e) => {
            (!i || n.has(e)) && (l(e), o());
        },
        placeholder: u.intl.string(u.t.MbhGm7),
        "aria-label": u.intl.string(u.t.MbhGm7),
        children: (e) =>
            c.filter((t) => a()(e.toLowerCase(), t.name.toLowerCase())).map((e) => (0, r.jsx)(h, { tag: e }, e.id)),
    });
}
