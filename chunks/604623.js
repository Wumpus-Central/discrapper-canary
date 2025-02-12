s.d(t, {
    CreateEmojiWithRolesModal: () => S,
    UpdateEmojiRolesModal: () => w
}),
    s(47120);
var l = s(200651),
    i = s(192379),
    n = s(120356),
    a = s.n(n),
    r = s(392711),
    o = s.n(r),
    c = s(772848),
    d = s(481060),
    h = s(80932),
    u = s(935369),
    x = s(313201),
    m = s(730089),
    j = s(626135),
    b = s(768581),
    _ = s(584825),
    v = s(46887),
    f = s(981631),
    p = s(388032),
    C = s(54124);
let g = (e) => {
    let { className: t, onChange: s, textVariant: i = 'text-md/normal', label: n, value: r, isArchived: o = !1 } = e;
    return (0, l.jsx)(d.XZJ, {
        size: 24,
        className: a()(C.checklistRow, t),
        value: r,
        onChange: s,
        type: d.XZJ.Types.INVERTED,
        children: (0, l.jsxs)('div', {
            className: C.checklistLabel,
            children: [
                (0, l.jsx)(d.Text, {
                    color: 'interactive-active',
                    variant: i,
                    children: n
                }),
                o && (0, l.jsx)(d.IGR, { text: p.intl.string(p.t.nhbtEh) })
            ]
        })
    });
};
function k(e) {
    let { transitionState: t, onClose: s, initialRoleIds: n = [], listingChoices: a, emojiUrl: r, saving: c, onSave: h } = e,
        u = (0, x.Dt)(),
        [m, j] = i.useState(() => new Set(n)),
        b = i.useMemo(
            () =>
                o().isEqual(
                    m,
                    new Set(
                        a.map((e) => {
                            let { role_id: t } = e;
                            return t;
                        })
                    )
                ),
            [a, m]
        ),
        _ = m.size > 0,
        v = (e) =>
            j((t) => {
                let s = new Set(t);
                return t.has(e) ? s.delete(e) : s.add(e), s;
            }),
        f = () => {
            h(Array.from(m), s);
        };
    return (0, l.jsxs)(d.Y0X, {
        transitionState: t,
        'aria-labelledby': u,
        children: [
            (0, l.jsxs)(d.xBx, {
                separator: !1,
                children: [
                    (0, l.jsxs)('div', {
                        className: C.headerContent,
                        children: [
                            (0, l.jsx)(d.Eep, {
                                src: r,
                                width: 40,
                                height: 40,
                                alt: ''
                            }),
                            (0, l.jsx)(d.LZC, {
                                size: 16,
                                horizontal: !0
                            }),
                            (0, l.jsxs)('div', {
                                className: C.__invalid_headerText,
                                children: [
                                    (0, l.jsx)(d.X6q, {
                                        id: u,
                                        variant: 'heading-md/semibold',
                                        children: p.intl.string(p.t.nP7nDQ)
                                    }),
                                    (0, l.jsx)(d.LZC, { size: 2 }),
                                    (0, l.jsx)(d.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'header-secondary',
                                        children: p.intl.string(p.t.I4SYUF)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, l.jsx)(d.olH, {
                        className: C.closeButton,
                        onClick: s
                    })
                ]
            }),
            (0, l.jsx)('div', { className: C.seperator }),
            (0, l.jsx)(d.hzk, {
                className: C.modalContent,
                children: (0, l.jsxs)('div', {
                    className: C.checklistContainer,
                    children: [
                        (0, l.jsx)(
                            g,
                            {
                                className: C.selectAllCheckbox,
                                label: p.intl.string(p.t['Ve/y5+']),
                                textVariant: 'text-md/semibold',
                                value: b,
                                onChange: () => {
                                    b
                                        ? j(new Set())
                                        : j(
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
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    0 !== t && (0, l.jsx)('div', { className: C.seperator }),
                                    (0, l.jsx)(
                                        g,
                                        {
                                            onChange: () => v(e.role_id),
                                            value: m.has(e.role_id),
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
            }),
            (0, l.jsx)(d.mzw, {
                children: (0, l.jsx)(d.ua7, {
                    shouldShow: !_,
                    text: p.intl.string(p.t['8aYImJ']),
                    children: (e) =>
                        (0, l.jsx)(d.zxk, {
                            ...e,
                            'aria-label': p.intl.string(p.t.R3BPHx),
                            disabled: !_,
                            submitting: c,
                            onClick: f,
                            children: p.intl.string(p.t.R3BPHx)
                        })
                })
            })
        ]
    });
}
function S(e) {
    let { guildId: t, data: s, file: n, ...a } = e,
        [r, o] = i.useState(!1),
        d = async (e, l) => {
            try {
                o(!0);
                let i = (0, c.Z)();
                j.default.track(f.rMx.EMOJI_UPLOAD_STARTED, {
                    guild_id: t,
                    upload_id: i
                }),
                    await (0, m.G)({
                        guildId: t,
                        uploadId: i,
                        data: s,
                        file: n,
                        roles: e
                    }),
                    l();
            } catch (e) {
            } finally {
                o(!1);
            }
        },
        h = (0, _.qi)(t, {
            includeSoftDeleted: !0,
            sortDeletedListingsLast: !0
        });
    return (0, l.jsx)(k, {
        emojiUrl: s,
        onSave: d,
        saving: r,
        listingChoices: h,
        ...a
    });
}
function w(e) {
    let { emoji: t, guildId: s, ...n } = e,
        a = b.ZP.getEmojiURL({
            id: t.id,
            animated: t.animated,
            size: 40
        }),
        [r, { loading: o }] = (0, u.Z)(h.dv),
        c = async (e, l) => {
            null !=
                (await r({
                    guildId: s,
                    emojiId: t.id,
                    roles: e
                })) && l();
        },
        d = (0, _.qi)(s, { includeSoftDeleted: !0 });
    d.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
    let x = (0, v.Z)(s),
        m = i.useMemo(() => {
            let e = new Set(
                x.map((e) => {
                    let { id: t } = e;
                    return t;
                })
            );
            return t.roles.filter((t) => e.has(t));
        }, [t.roles, x]);
    return (0, l.jsx)(k, {
        emojiUrl: a,
        onSave: c,
        initialRoleIds: m,
        saving: o,
        listingChoices: d,
        ...n
    });
}
