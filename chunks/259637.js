n.d(t, {
    Z: function () {
        return g;
    }
});
var a = n(200651);
n(192379);
var i = n(658722),
    r = n.n(i),
    l = n(442837),
    s = n(481060),
    o = n(596454),
    c = n(339085),
    d = n(456269),
    u = n(388032),
    m = n(158804);
let h = (e) => {
    let { tag: t } = e,
        { id: n, name: i, emojiId: r, emojiName: d } = t,
        u = (0, l.e7)([c.ZP], () => (null != r ? c.ZP.getUsableCustomEmojiById(r) : null)),
        h = null != r || null != d;
    return (0, a.jsx)(
        s.ComboboxItem,
        {
            value: n,
            children: (0, a.jsx)(s.ComboboxItem.Label, {
                children: (0, a.jsxs)('div', {
                    className: m.row,
                    children: [
                        h
                            ? (0, a.jsx)(o.Z, {
                                  className: m.__invalid_emoji,
                                  emojiId: r,
                                  emojiName: d,
                                  animated: !!(null == u ? void 0 : u.animated)
                              })
                            : (0, a.jsx)(s.TagIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: m.__invalid_emoji
                              }),
                        (0, a.jsx)(s.Text, {
                            variant: 'text-md/semibold',
                            color: 'header-secondary',
                            children: i
                        })
                    ]
                })
            })
        },
        n
    );
};
function g(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: i, onSelectTag: l, onClose: o } = e,
        c = (0, d.Vm)(t),
        m = (e, t) => t.filter((t) => r()(e.toLowerCase(), t.name.toLowerCase()));
    return (0, a.jsx)(s.ComboboxPopout, {
        showScrollbar: !0,
        value: n,
        onChange: (e) => {
            if (!i || !!n.has(e)) l(e), o();
        },
        placeholder: u.intl.string(u.t.MbhGm5),
        'aria-label': u.intl.string(u.t.MbhGm5),
        children: (e) => m(e, c).map((e) => (0, a.jsx)(h, { tag: e }, e.id))
    });
}
