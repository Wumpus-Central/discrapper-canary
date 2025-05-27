r.d(n, { Z: () => y });
var t = r(255367),
    a = r(120356),
    i = r.n(a),
    s = r(442837),
    l = r(481060),
    o = r(510918),
    d = r(494620),
    c = r(63063),
    m = r(434404),
    f = r(999382),
    u = r(981631),
    h = r(817239),
    p = r(388032),
    x = r(602268);
let y = function (e) {
    let { className: n, guildId: r, tag: a, badge: y, primaryColor: b, secondaryColor: g, isDisabled: j = !1 } = e,
        C = (0, s.e7)([f.Z], () => f.Z.getProps().originalProfile),
        v = null != C && C.tag !== a;
    return (0, t.jsxs)('div', {
        className: n,
        children: [
            (0, t.jsx)(l.vwX, {
                className: x.sectionTitle,
                children: p.intl.string(h.default['tN+8pK'])
            }),
            (0, t.jsxs)('div', {
                className: x.tagContainer,
                children: [
                    (0, t.jsx)('div', {
                        className: x.tagInputContainer,
                        children: (0, t.jsx)(l.oil, {
                            className: x.tagInputWrapper,
                            inputClassName: i()(x.tagInput, 'heading-sm/semibold'),
                            maxLength: 4,
                            autoFocus: !0,
                            placeholder: 'WUMP',
                            prefixElement: (0, t.jsx)(o.v, {
                                badge: y,
                                width: 40,
                                height: 40,
                                primaryTintColor: b,
                                secondaryTintColor: g
                            }),
                            disabled: j,
                            value: null != a ? a : '',
                            onChange: function (e) {
                                m.Z.updateGuildProfile(r, { tag: e });
                            }
                        })
                    }),
                    (0, t.jsx)('div', {
                        className: x.tagTooltip,
                        children: (0, t.jsx)(l.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: p.intl.string(h.default.CrHXHh)
                        })
                    })
                ]
            }),
            v &&
                (0, t.jsx)(d.Z, {
                    className: x.tagChangeInfoBox,
                    children: (0, t.jsx)(l.Text, {
                        variant: 'text-xs/medium',
                        children: p.intl.format(h.default['4ZKDXl'], { articleUrl: c.Z.getArticleURL(u.BhN.SERVER_TAGS) })
                    })
                })
        ]
    });
};
