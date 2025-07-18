(i.d(t, {
    CreateEmojiWithRolesModal: () => E,
    UpdateEmojiRolesModal: () => C
}),
    i(388685),
    i(35282),
    i(642613));
var n = i(255367),
    l = i(73800),
    r = i(120356),
    a = i.n(r),
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
    j = i(176354),
    g = i(584825),
    x = i(46887),
    v = i(981631),
    y = i(388032),
    w = i(368477);
function S(e) {
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
function O(e, t) {
    if (null == e) return {};
    var i,
        n,
        l = (function (e, t) {
            if (null == e) return {};
            var i,
                n,
                l = {},
                r = Object.keys(e);
            for (n = 0; n < r.length; n++) ((i = r[n]), t.indexOf(i) >= 0 || (l[i] = e[i]));
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (n = 0; n < r.length; n++) ((i = r[n]), !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]));
    }
    return l;
}
let _ = (e) => {
    let { className: t, onChange: i, textVariant: l = 'text-md/normal', label: r, value: s, isArchived: o = !1 } = e;
    return (0, n.jsx)(u.XZJ, {
        size: 24,
        className: a()(w.checklistRow, t),
        value: s,
        onChange: i,
        type: u.XZJ.Types.INVERTED,
        children: (0, n.jsxs)('div', {
            className: w.checklistLabel,
            children: [
                (0, n.jsx)(u.Text, {
                    color: 'interactive-active',
                    variant: l,
                    children: r
                }),
                o && (0, n.jsx)(u.IGR, { text: y.intl.string(y.t.nhbtEh) })
            ]
        })
    });
};
function k(e) {
    let { transitionState: t, onClose: i, initialRoleIds: r = [], listingChoices: a, emojiUrl: s, emojiName: c, saving: m, onSave: h } = e,
        [b, f] = l.useState(() => new Set(r)),
        p = l.useMemo(
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
        j = b.size > 0,
        g = (e) =>
            f((t) => {
                let i = new Set(t);
                return (t.has(e) ? i.delete(e) : i.add(e), i);
            });
    return (0, n.jsx)(d.u, {
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
                disabled: !j,
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
                            _,
                            {
                                className: w.selectAllCheckbox,
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
                                    0 !== t && (0, n.jsx)('div', { className: w.seperator }),
                                    (0, n.jsx)(
                                        _,
                                        {
                                            onChange: () => g(e.role_id),
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
    var { guildId: t, data: i, file: r } = e,
        a = O(e, ['guildId', 'data', 'file']);
    let [s, o] = l.useState(!1),
        d = async (e, n) => {
            try {
                o(!0);
                let l = (0, c.Z)();
                (f.default.track(v.rMx.EMOJI_UPLOAD_STARTED, {
                    guild_id: t,
                    upload_id: l
                }),
                    await (0, b.G)({
                        guildId: t,
                        uploadId: l,
                        data: i,
                        file: r,
                        roles: e
                    }),
                    n());
            } catch (e) {
            } finally {
                o(!1);
            }
        },
        u = (0, g.qi)(t, {
            includeSoftDeleted: !0,
            sortDeletedListingsLast: !0
        }),
        m = j.ZP.sanitizeEmojiName(r.name.split('.')[0]);
    return (0, n.jsx)(
        k,
        S(
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
        r = O(e, ['emoji', 'guildId']);
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
        d = (0, g.qi)(i, { includeSoftDeleted: !0 });
    d.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
    let u = (0, x.Z)(i),
        b = l.useMemo(() => {
            let e = new Set(
                u.map((e) => {
                    let { id: t } = e;
                    return t;
                })
            );
            return t.roles.filter((t) => e.has(t));
        }, [t.roles, u]);
    return (0, n.jsx)(
        k,
        S(
            {
                emojiName: t.name,
                emojiUrl: a,
                onSave: c,
                initialRoleIds: b,
                saving: o,
                listingChoices: d
            },
            r
        )
    );
}
