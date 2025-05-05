n.d(t, {
    U: () => L,
    default: () => M,
    t: () => N
}),
    n(953529),
    n(388685),
    n(781311),
    n(413496),
    n(433524),
    n(35282),
    n(539854);
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
    h = n(430824),
    b = n(626135),
    y = n(934415),
    f = n(892880),
    p = n(226951),
    g = n(605436),
    j = n(971628),
    v = n(71080),
    E = n(981631),
    S = n(494831),
    T = n(388032),
    w = n(208838);
function R(e) {
    var t = (function (e, t) {
        if ('object' !== O(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || 'default');
            if ('object' !== O(r)) return r;
            throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' === O(t) ? t : String(t);
}
function O(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
let k = (0, d.hQ)();
function C(e, t) {
    return t ? e.slice(1) : e;
}
function L(e) {
    let t,
        { guild: n, channel: a, permission: s, pendingAdditions: c, setPendingAdditions: d, isStageChannel: u = null != a && a.isGuildStageVoice(), description: m } = e,
        [b, y] = l.useState(!1),
        [E, S] = l.useState(''),
        w = (0, i.e7)([h.Z], () => h.Z.getRoles(n.id));
    function O(e) {
        let t = C(E.trim(), b);
        return RegExp(''.concat(p.Z.escape(t)), 'i').test(e);
    }
    let k = (0, i.Wu)([x.ZP], () => x.ZP.getMemberIds(n.id));
    b ? (t = []) : u ? (t = g.Wx(n, w, a, s, O)) : 0 !== (t = g.ik(n, w, a, s, O)).length || '' !== E.trim() || g.RD(n, w) || (t = g.aq());
    let L = g.iI(k, a, n, s, O),
        {
            placeholderText: M,
            hintText: P,
            renderEmptyText: Z
        } = {
            placeholderText: T.intl.string(T.t.iezLLi),
            hintText: T.intl.string(T.t['rwFx8/']),
            renderEmptyText: (e) => T.intl.format(T.t.ErpIY2, { query: e })
        };
    return (0, r.jsx)(N, {
        pendingAdditions: c,
        query: E,
        onQueryChange: function (e) {
            let t = e.trim(),
                r = '@' === t.charAt(0);
            f.Z.requestMembers(n.id, C(t, r), v.EQ), S(e), y(r);
        },
        onClickRow: function (e) {
            let t = (0, j.G)(e);
            d((n) => {
                let r = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, n);
                if (t in r) delete r[t];
                else {
                    let n;
                    e.rowType === v.aC.ROLE || e.rowType === v.aC.ADMINISTRATOR
                        ? (n = {
                              type: o.Fj.ROLE,
                              label: e.name,
                              color: e.colorString
                          })
                        : (e.rowType === v.aC.MEMBER || e.rowType === v.aC.OWNER) &&
                          (n = {
                              type: o.Fj.MEMBER,
                              label: e.name,
                              avatar: e.avatarURL
                          }),
                        null != n &&
                            (r[t] = {
                                display: n,
                                row: e
                            });
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
                            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                            return l;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    }
                    return l;
                })(t, [e].map(R));
            });
        },
        roles: t,
        members: L,
        placeholderText: M,
        hintText: P,
        renderEmptyText: Z,
        isStageChannel: u,
        description: m
    });
}
function N(e) {
    let t,
        { listClassName: n, pendingAdditions: l, query: i, onQueryChange: s, onClickRow: o, onRemovePendingAddition: c, roles: d, members: u, placeholderText: m, hintText: x, renderEmptyText: h, isStageChannel: b, focusSearchAfterReady: y, isReady: f, description: p } = e;
    return (0, r.jsxs)('div', {
        className: w.content,
        children: [
            (null == (t = p) && b && (t = T.intl.string(T.t.f7VbhI)), null == t || '' === t)
                ? null
                : (0, r.jsx)(a.Text, {
                      color: 'header-secondary',
                      className: w.description,
                      variant: 'text-sm/normal',
                      children: t
                  }),
            (0, r.jsx)(j.Z, {
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
                disabledText: b ? T.intl.string(T.t.MVVOCg) : null,
                focusSearchAfterReady: y,
                isReady: f,
                maxCount: S.ey
            })
        ]
    });
}
function M(e) {
    let { transitionState: t, onClose: n, channelId: o, newChannel: d, inSettings: x } = e,
        [f, p] = l.useState(!1),
        [g, j] = l.useState({}),
        S = (0, i.e7)([m.Z], () => m.Z.getChannel(o), [o]),
        R = (0, i.e7)([h.Z], () => h.Z.getGuild(null == S ? void 0 : S.getGuildId()));
    if (
        (l.useEffect(() => {
            b.default.track(E.rMx.OPEN_MODAL, { type: 'Grant Channel Access' });
        }, []),
        null == S || null == R)
    )
        return null;
    let O = d && 0 === Object.keys(g).length;
    async function C() {
        if (null == S || 0 === Object.keys(g).length) return void n();
        p(!0);
        try {
            await (function (e, t, n) {
                let r = [];
                return (
                    Object.values(t).forEach((t) => {
                        let { row: n } = t;
                        null != n.id && '' !== n.id && (n.rowType === v.aC.ROLE ? r.push((0, y.rX)(n.id, e.type)) : n.rowType === v.aC.MEMBER && r.push((0, y.jZ)(n.id, e.type)));
                    }),
                    (0, s.hw)(e.id, r, n)
                );
            })(S, g, x),
                n(),
                p(!1);
        } catch (e) {
            p(!1);
        }
    }
    let N = (0, u.zi)(S.type) ? a.W4G : a.gjC;
    return (0, r.jsxs)(a.Y0X, {
        transitionState: t,
        size: a.CgR.SMALL,
        'aria-labelledby': k,
        className: w.modalRoot,
        children: [
            (0, r.jsxs)(a.xBx, {
                separator: !1,
                direction: c.Z.Direction.VERTICAL,
                align: c.Z.Align.CENTER,
                className: w.header,
                children: [
                    (0, r.jsx)(a.X6q, {
                        id: k,
                        variant: 'heading-xl/semibold',
                        children: T.intl.string(T.t.dMJ3Y2)
                    }),
                    (0, r.jsxs)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: w.headerSubtitle,
                        children: [
                            (0, r.jsx)(N, {
                                size: 'xs',
                                color: 'currentColor',
                                className: w.headerSubtitleIcon
                            }),
                            S.name
                        ]
                    })
                ]
            }),
            (0, r.jsx)(L, {
                guild: R,
                channel: S,
                permission: S.accessPermissions,
                pendingAdditions: g,
                setPendingAdditions: j
            }),
            (0, r.jsxs)(a.mzw, {
                children: [
                    !O &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(a.zxk, {
                                    onClick: C,
                                    look: a.zxk.Looks.FILLED,
                                    size: a.zxk.Sizes.SMALL,
                                    className: w.button,
                                    submitting: f,
                                    children: T.intl.string(T.t.i4jeWV)
                                }),
                                (0, r.jsx)(a.zxk, {
                                    look: a.zxk.Looks.LINK,
                                    color: a.zxk.Colors.TRANSPARENT,
                                    onClick: n,
                                    size: a.zxk.Sizes.SMALL,
                                    children: T.intl.string(T.t['ETE/oK'])
                                })
                            ]
                        }),
                    O &&
                        (0, r.jsx)(a.zxk, {
                            look: a.zxk.Looks.FILLED,
                            color: a.zxk.Colors.PRIMARY,
                            onClick: n,
                            size: a.zxk.Sizes.SMALL,
                            children: T.intl.string(T.t.u46sxc)
                        })
                ]
            })
        ]
    });
}
