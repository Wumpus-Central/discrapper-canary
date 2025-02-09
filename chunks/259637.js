n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(658722),
    l = n.n(r),
    a = n(442837),
    s = n(481060),
    o = n(596454),
    c = n(339085),
    d = n(456269),
    u = n(388032),
    m = n(316641);
let h = (e) => {
    let { tag: t } = e,
        { id: n, name: r, emojiId: l, emojiName: d } = t,
        u = (0, a.e7)([c.ZP], () => (null != l ? c.ZP.getUsableCustomEmojiById(l) : null)),
        h = null != l || null != d;
    return (0, i.jsx)(
        s.lo1,
        {
            value: n,
            children: (0, i.jsx)(s.lo1.Label, {
                children: (0, i.jsxs)('div', {
                    className: m.row,
                    children: [
                        h
                            ? (0, i.jsx)(o.Z, {
                                  className: m.__invalid_emoji,
                                  emojiId: l,
                                  emojiName: d,
                                  animated: !!(null == u ? void 0 : u.animated)
                              })
                            : (0, i.jsx)(s.lO_, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: m.__invalid_emoji
                              }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/semibold',
                            color: 'header-secondary',
                            children: r
                        })
                    ]
                })
            })
        },
        n
    );
};
function g(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: r, onSelectTag: a, onClose: o } = e,
        c = (0, d.Vm)(t),
        m = (e, t) => t.filter((t) => l()(e.toLowerCase(), t.name.toLowerCase()));
    return (0, i.jsx)(s.DBG, {
        showScrollbar: !0,
        value: n,
        onChange: (e) => {
            (!r || n.has(e)) && (a(e), o());
        },
        placeholder: u.intl.string(u.t.MbhGm5),
        'aria-label': u.intl.string(u.t.MbhGm5),
        children: (e) => m(e, c).map((e) => (0, i.jsx)(h, { tag: e }, e.id))
    });
}
