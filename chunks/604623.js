r.d(t, {
    CreateEmojiWithRolesModal: () => C,
    UpdateEmojiRolesModal: () => S
}),
    r(47120),
    r(230036);
var n = r(200651),
    i = r(192379),
    l = r(120356),
    s = r.n(l),
    a = r(392711),
    o = r.n(a),
    c = r(772848),
    d = r(481060),
    u = r(80932),
    h = r(935369),
    b = r(313201),
    m = r(730089),
    j = r(626135),
    f = r(768581),
    p = r(584825),
    x = r(46887),
    g = r(981631),
    v = r(388032),
    y = r(368477);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function _(e, t) {
    if (null == e) return {};
    var r,
        n,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    }
    return i;
}
let w = (e) => {
    let { className: t, onChange: r, textVariant: i = 'text-md/normal', label: l, value: a, isArchived: o = !1 } = e;
    return (0, n.jsx)(d.XZJ, {
        size: 24,
        className: s()(y.checklistRow, t),
        value: a,
        onChange: r,
        type: d.XZJ.Types.INVERTED,
        children: (0, n.jsxs)('div', {
            className: y.checklistLabel,
            children: [
                (0, n.jsx)(d.Text, {
                    color: 'interactive-active',
                    variant: i,
                    children: l
                }),
                o && (0, n.jsx)(d.IGR, { text: v.NW.string(v.t.nhbtEh) })
            ]
        })
    });
};
function k(e) {
    let { transitionState: t, onClose: r, initialRoleIds: l = [], listingChoices: s, emojiUrl: a, saving: c, onSave: u } = e,
        h = (0, b.Dt)(),
        [m, j] = i.useState(() => new Set(l)),
        f = i.useMemo(
            () =>
                o().isEqual(
                    m,
                    new Set(
                        s.map((e) => {
                            let { role_id: t } = e;
                            return t;
                        })
                    )
                ),
            [s, m]
        ),
        p = m.size > 0,
        x = (e) =>
            j((t) => {
                let r = new Set(t);
                return t.has(e) ? r.delete(e) : r.add(e), r;
            }),
        g = () => {
            u(Array.from(m), r);
        };
    return (0, n.jsxs)(d.Y0X, {
        transitionState: t,
        'aria-labelledby': h,
        children: [
            (0, n.jsxs)(d.xBx, {
                separator: !1,
                children: [
                    (0, n.jsxs)('div', {
                        className: y.headerContent,
                        children: [
                            (0, n.jsx)(d.Eep, {
                                src: a,
                                width: 40,
                                height: 40,
                                alt: ''
                            }),
                            (0, n.jsx)(d.LZC, {
                                size: 16,
                                horizontal: !0
                            }),
                            (0, n.jsxs)('div', {
                                className: y.__invalid_headerText,
                                children: [
                                    (0, n.jsx)(d.X6q, {
                                        id: h,
                                        variant: 'heading-md/semibold',
                                        children: v.NW.string(v.t.nP7nDQ)
                                    }),
                                    (0, n.jsx)(d.LZC, { size: 2 }),
                                    (0, n.jsx)(d.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'header-secondary',
                                        children: v.NW.string(v.t.I4SYUF)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsx)(d.olH, {
                        className: y.closeButton,
                        onClick: r
                    })
                ]
            }),
            (0, n.jsx)('div', { className: y.seperator }),
            (0, n.jsx)(d.hzk, {
                className: y.modalContent,
                children: (0, n.jsxs)('div', {
                    className: y.checklistContainer,
                    children: [
                        (0, n.jsx)(
                            w,
                            {
                                className: y.selectAllCheckbox,
                                label: v.NW.string(v.t['Ve/y5+']),
                                textVariant: 'text-md/semibold',
                                value: f,
                                onChange: () => {
                                    f
                                        ? j(new Set())
                                        : j(
                                              new Set(
                                                  s.map((e) => {
                                                      let { role_id: t } = e;
                                                      return t;
                                                  })
                                              )
                                          );
                                }
                            },
                            'allSubscriptionRoles'
                        ),
                        s.map((e, t) =>
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    0 !== t && (0, n.jsx)('div', { className: y.seperator }),
                                    (0, n.jsx)(
                                        w,
                                        {
                                            onChange: () => x(e.role_id),
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
            (0, n.jsx)(d.mzw, {
                children: (0, n.jsx)(d.ua7, {
                    shouldShow: !p,
                    text: v.NW.string(v.t['8aYImJ']),
                    children: (e) => {
                        var t, r;
                        return (0, n.jsx)(
                            d.zxk,
                            ((t = O({}, e)),
                            (r = r =
                                {
                                    'aria-label': v.NW.string(v.t.R3BPHx),
                                    disabled: !p,
                                    submitting: c,
                                    onClick: g,
                                    children: v.NW.string(v.t.R3BPHx)
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            t)
                        );
                    }
                })
            })
        ]
    });
}
function C(e) {
    var { guildId: t, data: r, file: l } = e,
        s = _(e, ['guildId', 'data', 'file']);
    let [a, o] = i.useState(!1),
        d = async (e, n) => {
            try {
                o(!0);
                let i = (0, c.Z)();
                j.default.track(g.rMx.EMOJI_UPLOAD_STARTED, {
                    guild_id: t,
                    upload_id: i
                }),
                    await (0, m.G)({
                        guildId: t,
                        uploadId: i,
                        data: r,
                        file: l,
                        roles: e
                    }),
                    n();
            } catch (e) {
            } finally {
                o(!1);
            }
        },
        u = (0, p.qi)(t, {
            includeSoftDeleted: !0,
            sortDeletedListingsLast: !0
        });
    return (0, n.jsx)(
        k,
        O(
            {
                emojiUrl: r,
                onSave: d,
                saving: a,
                listingChoices: u
            },
            s
        )
    );
}
function S(e) {
    var { emoji: t, guildId: r } = e,
        l = _(e, ['emoji', 'guildId']);
    let s = f.ZP.getEmojiURL({
            id: t.id,
            animated: t.animated,
            size: 40
        }),
        [a, { loading: o }] = (0, h.Z)(u.dv),
        c = async (e, n) => {
            null !=
                (await a({
                    guildId: r,
                    emojiId: t.id,
                    roles: e
                })) && n();
        },
        d = (0, p.qi)(r, { includeSoftDeleted: !0 });
    d.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
    let b = (0, x.Z)(r),
        m = i.useMemo(() => {
            let e = new Set(
                b.map((e) => {
                    let { id: t } = e;
                    return t;
                })
            );
            return t.roles.filter((t) => e.has(t));
        }, [t.roles, b]);
    return (0, n.jsx)(
        k,
        O(
            {
                emojiUrl: s,
                onSave: c,
                initialRoleIds: m,
                saving: o,
                listingChoices: d
            },
            l
        )
    );
}
