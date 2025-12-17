n.d(t, { Z: () => h });
var a = n(54381);
n(473749);
var r = n(658722),
    i = n.n(r),
    l = n(442837),
    s = n(481060),
    o = n(596454),
    c = n(339085),
    d = n(456269),
    u = n(388032),
    m = n(909454);
let f = (e) => {
    let { tag: t } = e,
        { id: n, name: r, emojiId: i, emojiName: d } = t,
        u = (0, l.e7)([c.ZP], () => (null != i ? c.ZP.getUsableCustomEmojiById(i) : null)),
        f = null != i || null != d;
    return (0, a.jsx)(
        s.lo1,
        {
            value: n,
            children: (0, a.jsx)(s.lo1.Label, {
                children: (0, a.jsxs)("div", {
                    className: m.row,
                    children: [
                        f
                            ? (0, a.jsx)(o.Z, {
                                  className: m.__invalid_emoji,
                                  emojiId: i,
                                  emojiName: d,
                                  animated: !!(null == u ? void 0 : u.animated),
                              })
                            : (0, a.jsx)(s.lO_, {
                                  size: "md",
                                  color: "currentColor",
                                  className: m.__invalid_emoji,
                              }),
                        (0, a.jsx)(s.Text, {
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
function h(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: r, onSelectTag: l, onClose: o } = e,
        c = (0, d.Vm)(t);
    return (0, a.jsx)(s.DBG, {
        value: n,
        onChange: (e) => {
            (!r || n.has(e)) && (l(e), o());
        },
        placeholder: u.intl.string(u.t.MbhGm7),
        "aria-label": u.intl.string(u.t.MbhGm7),
        children: (e) =>
            c.filter((t) => i()(e.toLowerCase(), t.name.toLowerCase())).map((e) => (0, a.jsx)(f, { tag: e }, e.id)),
    });
}
