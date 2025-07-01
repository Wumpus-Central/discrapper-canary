(n.d(t, {
    U: () => M,
    default: () => P,
    t: () => N
}),
    n(953529),
    n(388685),
    n(781311),
    n(413496),
    n(433524),
    n(35282),
    n(539854));
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(481060),
    s = n(741361),
    o = n(461745),
    c = n(600164),
    d = n(313201),
    u = n(131704),
    m = n(592125),
    x = n(271383),
    h = n(485386),
    b = n(430824),
    f = n(626135),
    y = n(934415),
    p = n(892880),
    g = n(226951),
    j = n(605436),
    v = n(971628),
    E = n(71080),
    S = n(981631),
    T = n(494831),
    w = n(388032),
    R = n(208838);
function O(e) {
    var t = (function (e, t) {
        if ('object' !== k(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || 'default');
            if ('object' !== k(r)) return r;
            throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' === k(t) ? t : String(t);
}
function k(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
let C = (0, d.hQ)();
function L(e, t) {
    return t ? e.slice(1) : e;
}
function M(e) {
    let t,
        { guild: n, channel: a, permission: s, pendingAdditions: c, setPendingAdditions: d, isStageChannel: u = null != a && a.isGuildStageVoice(), description: m } = e,
        [b, f] = l.useState(!1),
        [y, S] = l.useState(''),
        T = (0, i.e7)([h.Z], () => h.Z.getRoles(n.id));
    function R(e) {
        let t = L(y.trim(), b);
        return RegExp(''.concat(g.Z.escape(t)), 'i').test(e);
    }
    let k = (0, i.Wu)([x.ZP], () => x.ZP.getMemberIds(n.id));
    b ? (t = []) : u ? (t = j.Wx(n, T, a, s, R)) : 0 !== (t = j.ik(n, T, a, s, R)).length || '' !== y.trim() || j.RD(n, T) || (t = j.aq());
    let C = j.iI(k, a, n, s, R),
        {
            placeholderText: M,
            hintText: P,
            renderEmptyText: A
        } = {
            placeholderText: w.intl.string(w.t.iezLLi),
            hintText: w.intl.string(w.t['rwFx8/']),
            renderEmptyText: (e) => w.intl.format(w.t.ErpIY2, { query: e })
        };
    return (0, r.jsx)(N, {
        pendingAdditions: c,
        query: y,
        onQueryChange: function (e) {
            let t = e.trim(),
                r = '@' === t.charAt(0);
            (p.Z.requestMembers(n.id, L(t, r), E.EQ), S(e), f(r));
        },
        onClickRow: function (e) {
            let t = (0, v.G)(e);
            d((n) => {
                let r = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, n);
                if (t in r) delete r[t];
                else {
                    let n;
                    (e.rowType === E.aC.ROLE || e.rowType === E.aC.ADMINISTRATOR
                        ? (n = {
                              type: o.Fj.ROLE,
                              label: e.name,
                              color: e.colorString
                          })
                        : (e.rowType === E.aC.MEMBER || e.rowType === E.aC.OWNER) &&
                          (n = {
                              type: o.Fj.MEMBER,
                              label: e.name,
                              avatar: e.avatarURL
                          }),
                        null != n &&
                            (r[t] = {
                                display: n,
                                row: e
                            }));
                }
                return r;
            });
        },
        onRemovePendingAddition: function (e) {
            d((t) => {
                let { [e]: n } = t;
                return (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                l = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                            return l;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
                    }
                    return l;
                })(t, [e].map(O));
            });
        },
        roles: t,
        members: C,
        placeholderText: M,
        hintText: P,
        renderEmptyText: A,
        isStageChannel: u,
        description: m
    });
}
function N(e) {
    let t,
        { listClassName: n, pendingAdditions: l, query: i, onQueryChange: s, onClickRow: o, onRemovePendingAddition: c, roles: d, members: u, placeholderText: m, hintText: x, renderEmptyText: h, isStageChannel: b, focusSearchAfterReady: f, isReady: y, description: p } = e;
    return (0, r.jsxs)('div', {
        className: R.content,
        children: [
            (null == (t = p) && b && (t = w.intl.string(w.t.f7VbhI)), null == t || '' === t)
                ? null
                : (0, r.jsx)(a.Text, {
                      color: 'header-secondary',
                      className: R.description,
                      variant: 'text-sm/normal',
                      children: t
                  }),
            (0, r.jsx)(v.Z, {
                listClassName: n,
                pendingAdditions: l,
                query: i,
                onQueryChange: s,
                onClickRow: o,
                onRemovePendingAddition: c,
                roles: d,
                members: u,
                placeholderText: m,
                hintText: x,
                renderEmptyText: h,
                disabledText: b ? w.intl.string(w.t.MVVOCg) : null,
                focusSearchAfterReady: f,
                isReady: y,
                maxCount: T.ey
            })
        ]
    });
}
function P(e) {
    let { transitionState: t, onClose: n, channelId: o, newChannel: d, inSettings: x } = e,
        [h, p] = l.useState(!1),
        [g, j] = l.useState({}),
        v = (0, i.e7)([m.Z], () => m.Z.getChannel(o), [o]),
        T = (0, i.e7)([b.Z], () => b.Z.getGuild(null == v ? void 0 : v.getGuildId()));
    if (
        (l.useEffect(() => {
            f.default.track(S.rMx.OPEN_MODAL, { type: 'Grant Channel Access' });
        }, []),
        null == v || null == T)
    )
        return null;
    let O = d && 0 === Object.keys(g).length;
    async function k() {
        if (null == v || 0 === Object.keys(g).length) return void n();
        p(!0);
        try {
            (await (function (e, t, n) {
                let r = [];
                return (
                    Object.values(t).forEach((t) => {
                        let { row: n } = t;
                        null != n.id && '' !== n.id && (n.rowType === E.aC.ROLE ? r.push((0, y.rX)(n.id, e.type)) : n.rowType === E.aC.MEMBER && r.push((0, y.jZ)(n.id, e.type)));
                    }),
                    (0, s.hw)(e.id, r, n)
                );
            })(v, g, x),
                n(),
                p(!1));
        } catch (e) {
            p(!1);
        }
    }
    let L = (0, u.zi)(v.type) ? a.W4G : a.gjC;
    return (0, r.jsxs)(a.Y0X, {
        transitionState: t,
        size: a.CgR.SMALL,
        'aria-labelledby': C,
        className: R.modalRoot,
        parentComponent: 'AddMembersModal',
        children: [
            (0, r.jsxs)(a.xBx, {
                separator: !1,
                direction: c.Z.Direction.VERTICAL,
                align: c.Z.Align.CENTER,
                className: R.header,
                children: [
                    (0, r.jsx)(a.X6q, {
                        id: C,
                        variant: 'heading-xl/semibold',
                        children: w.intl.string(w.t.dMJ3Y2)
                    }),
                    (0, r.jsxs)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: R.headerSubtitle,
                        children: [
                            (0, r.jsx)(L, {
                                size: 'xs',
                                color: 'currentColor',
                                className: R.headerSubtitleIcon
                            }),
                            v.name
                        ]
                    })
                ]
            }),
            (0, r.jsx)(M, {
                guild: T,
                channel: v,
                permission: v.accessPermissions,
                pendingAdditions: g,
                setPendingAdditions: j
            }),
            (0, r.jsxs)(a.mzw, {
                children: [
                    !O &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(a.zxk, {
                                    onClick: k,
                                    look: a.zxk.Looks.FILLED,
                                    size: a.zxk.Sizes.SMALL,
                                    className: R.button,
                                    submitting: h,
                                    children: w.intl.string(w.t.i4jeWV)
                                }),
                                (0, r.jsx)(a.zxk, {
                                    look: a.zxk.Looks.LINK,
                                    color: a.zxk.Colors.TRANSPARENT,
                                    onClick: n,
                                    size: a.zxk.Sizes.SMALL,
                                    children: w.intl.string(w.t['ETE/oK'])
                                })
                            ]
                        }),
                    O &&
                        (0, r.jsx)(a.zxk, {
                            look: a.zxk.Looks.FILLED,
                            color: a.zxk.Colors.PRIMARY,
                            onClick: n,
                            size: a.zxk.Sizes.SMALL,
                            children: w.intl.string(w.t.u46sxc)
                        })
                ]
            })
        ]
    });
}
