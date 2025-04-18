n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var a = n(658722),
    i = n.n(a),
    l = n(442837),
    s = n(481060),
    o = n(596454),
    c = n(339085),
    d = n(456269),
    u = n(388032),
    m = n(414464);
let h = (e) => {
    let { tag: t } = e,
        { id: n, name: a, emojiId: i, emojiName: d } = t,
        u = (0, l.e7)([c.ZP], () => (null != i ? c.ZP.getUsableCustomEmojiById(i) : null)),
        h = null != i || null != d;
    return (0, r.jsx)(
        s.lo1,
        {
            value: n,
            children: (0, r.jsx)(s.lo1.Label, {
                children: (0, r.jsxs)('div', {
                    className: m.row,
                    children: [
                        h
                            ? (0, r.jsx)(o.Z, {
                                  className: m.__invalid_emoji,
                                  emojiId: i,
                                  emojiName: d,
                                  animated: !!(null == u ? void 0 : u.animated)
                              })
                            : (0, r.jsx)(s.lO_, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: m.__invalid_emoji
                              }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-md/semibold',
                            color: 'header-secondary',
                            children: a
                        })
                    ]
                })
            })
        },
        n
    );
};
function g(e) {
    let { parentChannel: t, appliedTags: n, maxTagsApplied: a, onSelectTag: l, onClose: o } = e,
        c = (0, d.Vm)(t),
        m = (e, t) => t.filter((t) => i()(e.toLowerCase(), t.name.toLowerCase()));
    return (0, r.jsx)(s.DBG, {
        showScrollbar: !0,
        value: n,
        onChange: (e) => {
            (!a || n.has(e)) && (l(e), o());
        },
        placeholder: u.NW.string(u.t.MbhGm5),
        'aria-label': u.NW.string(u.t.MbhGm5),
        children: (e) => m(e, c).map((e) => (0, r.jsx)(h, { tag: e }, e.id))
    });
}
