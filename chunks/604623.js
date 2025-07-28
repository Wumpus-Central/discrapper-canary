(i.d(t, {
    CreateEmojiWithRolesModal: () => E,
    UpdateEmojiRolesModal: () => C
}),
    i(388685),
    i(35282),
    i(642613));
var n = i(255367),
    r = i(73800),
    l = i(120356),
    a = i.n(l),
    s = i(392711),
    o = i.n(s),
    c = i(772848),
    d = i(82659),
    u = i(481060),
    m = i(80932),
    h = i(935369),
    b = i(730089),
    f = i(626135),
    p = i(768581),
    g = i(176354),
    j = i(584825),
    x = i(46887),
    v = i(981631),
    y = i(388032),
    S = i(368477);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function _(e, t) {
    if (null == e) return {};
    var i,
        n,
        r = (function (e, t) {
            if (null == e) return {};
            var i,
                n,
                r = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) ((i = l[n]), t.indexOf(i) >= 0 || (r[i] = e[i]));
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) ((i = l[n]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]));
    }
    return r;
}
let k = (e) => {
    let { className: t, onChange: i, textVariant: r = 'text-md/normal', label: l, value: s, isArchived: o = !1 } = e;
    return (0, n.jsx)(u.XZJ, {
        size: 24,
        className: a()(S.checklistRow, t),
        value: s,
        onChange: i,
        type: u.XZJ.Types.INVERTED,
        children: (0, n.jsxs)('div', {
            className: S.checklistLabel,
            children: [
                (0, n.jsx)(u.Text, {
                    color: 'interactive-active',
                    variant: r,
                    children: l
                }),
                o && (0, n.jsx)(u.IGR, { text: y.intl.string(y.t.nhbtEh) })
            ]
        })
    });
};
function O(e) {
    let { transitionState: t, onClose: i, initialRoleIds: l = [], listingChoices: a, emojiUrl: s, emojiName: c, saving: m, onSave: h } = e,
        [b, f] = r.useState(() => new Set(l)),
        p = r.useMemo(
            () =>
                o().isEqual(
                    b,
                    new Set(
                        a.map((e) => {
                            let { role_id: t } = e;
                            return t;
                        })
                    )
                ),
            [a, b]
        ),
        g = b.size > 0,
        j = (e) =>
            f((t) => {
                let i = new Set(t);
                return (t.has(e) ? i.delete(e) : i.add(e), i);
            });
    return (0, n.jsx)(d.Modal, {
        onClose: i,
        transitionState: t,
        title: y.intl.string(y.t.nP7nDQ),
        subtitle: y.intl.string(y.t.I4SYUF),
        preview: !0,
        actions: [
            {
                text: y.intl.string(y.t['ETE/oK']),
                variant: 'secondary',
                onClick: i
            },
            {
                text: y.intl.string(y.t.R3BPHx),
                variant: 'primary',
                onClick: () => {
                    h(Array.from(b), i);
                },
                disabled: !g,
                loading: m
            }
        ],
        children: (0, n.jsxs)(u.Kqy, {
            gap: 'xl',
            children: [
                (0, n.jsxs)(u.Kqy, {
                    direction: 'horizontal',
                    gap: 'md',
                    align: 'center',
                    children: [
                        (0, n.jsx)(u.Eep, {
                            src: s,
                            width: 40,
                            height: 40,
                            alt: ''
                        }),
                        (0, n.jsxs)(u.Text, {
                            variant: 'text-md/normal',
                            children: [':', c, ':']
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    children: [
                        (0, n.jsx)(
                            k,
                            {
                                className: S.selectAllCheckbox,
                                label: y.intl.string(y.t['Ve/y5+']),
                                textVariant: 'text-md/semibold',
                                value: p,
                                onChange: () => {
                                    p
                                        ? f(new Set())
                                        : f(
                                              new Set(
                                                  a.map((e) => {
                                                      let { role_id: t } = e;
                                                      return t;
                                                  })
                                              )
                                          );
                                }
                            },
                            'allSubscriptionRoles'
                        ),
                        a.map((e, t) =>
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    0 !== t && (0, n.jsx)('div', { className: S.seperator }),
                                    (0, n.jsx)(
                                        k,
                                        {
                                            onChange: () => j(e.role_id),
                                            value: b.has(e.role_id),
                                            label: e.name,
                                            isArchived: e.archived
                                        },
                                        e.role_id
                                    )
                                ]
                            })
                        )
                    ]
                })
            ]
        })
    });
}
function E(e) {
    var { guildId: t, data: i, file: l } = e,
        a = _(e, ['guildId', 'data', 'file']);
    let [s, o] = r.useState(!1),
        d = async (e, n) => {
            try {
                o(!0);
                let r = (0, c.Z)();
                (f.default.track(v.rMx.EMOJI_UPLOAD_STARTED, {
                    guild_id: t,
                    upload_id: r
                }),
                    await (0, b.G)({
                        guildId: t,
                        uploadId: r,
                        data: i,
                        file: l,
                        roles: e
                    }),
                    n());
            } catch (e) {
            } finally {
                o(!1);
            }
        },
        u = (0, j.qi)(t, {
            includeSoftDeleted: !0,
            sortDeletedListingsLast: !0
        }),
        m = g.ZP.sanitizeEmojiName(l.name.split('.')[0]);
    return (0, n.jsx)(
        O,
        w(
            {
                emojiName: m,
                emojiUrl: i,
                onSave: d,
                saving: s,
                listingChoices: u
            },
            a
        )
    );
}
function C(e) {
    var { emoji: t, guildId: i } = e,
        l = _(e, ['emoji', 'guildId']);
    let a = p.ZP.getEmojiURL({
            id: t.id,
            animated: t.animated,
            size: 40
        }),
        [s, { loading: o }] = (0, h.Z)(m.dv),
        c = async (e, n) => {
            null !=
                (await s({
                    guildId: i,
                    emojiId: t.id,
                    roles: e
                })) && n();
        },
        d = (0, j.qi)(i, { includeSoftDeleted: !0 });
    d.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
    let u = (0, x.Z)(i),
        b = r.useMemo(() => {
            let e = new Set(
                u.map((e) => {
                    let { id: t } = e;
                    return t;
                })
            );
            return t.roles.filter((t) => e.has(t));
        }, [t.roles, u]);
    return (0, n.jsx)(
        O,
        w(
            {
                emojiName: t.name,
                emojiUrl: a,
                onSave: c,
                initialRoleIds: b,
                saving: o,
                listingChoices: d
            },
            l
        )
    );
}
