r.d(t, {
    U: () => C,
    default: () => M,
    t: () => L
}),
    r(266796),
    r(47120),
    r(566702),
    r(474991),
    r(398202),
    r(301563),
    r(653041);
var n = r(200651),
    l = r(192379),
    i = r(442837),
    a = r(481060),
    s = r(741361),
    o = r(461745),
    c = r(600164),
    d = r(313201),
    u = r(131704),
    m = r(592125),
    x = r(271383),
    h = r(430824),
    b = r(626135),
    y = r(934415),
    f = r(892880),
    p = r(226951),
    g = r(605436),
    j = r(971628),
    v = r(71080),
    E = r(981631),
    S = r(494831),
    T = r(388032),
    w = r(208838);
function R(e) {
    var t = (function (e, t) {
        if ('object' !== O(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(e, t || 'default');
            if ('object' !== O(n)) return n;
            throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' === O(t) ? t : String(t);
}
function O(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
let N = (0, d.hQ)();
function k(e, t) {
    return t ? e.slice(1) : e;
}
function C(e) {
    let t,
        { guild: r, channel: a, permission: s, pendingAdditions: c, setPendingAdditions: d, isStageChannel: u = null != a && a.isGuildStageVoice(), description: m } = e,
        [b, y] = l.useState(!1),
        [E, S] = l.useState(''),
        w = (0, i.e7)([h.Z], () => h.Z.getRoles(r.id));
    function O(e) {
        let t = k(E.trim(), b);
        return RegExp(''.concat(p.Z.escape(t)), 'i').test(e);
    }
    let N = (0, i.Wu)([x.ZP], () => x.ZP.getMemberIds(r.id));
    b ? (t = []) : u ? (t = g.Wx(r, w, a, s, O)) : 0 !== (t = g.ik(r, w, a, s, O)).length || '' !== E.trim() || g.RD(r, w) || (t = g.aq());
    let C = g.iI(N, a, r, s, O),
        {
            placeholderText: M,
            hintText: P,
            renderEmptyText: Z
        } = {
            placeholderText: T.NW.string(T.t.iezLLi),
            hintText: T.NW.string(T.t['rwFx8/']),
            renderEmptyText: (e) => T.NW.format(T.t.ErpIY2, { query: e })
        };
    return (0, n.jsx)(L, {
        pendingAdditions: c,
        query: E,
        onQueryChange: function (e) {
            let t = e.trim(),
                n = '@' === t.charAt(0);
            f.Z.requestMembers(r.id, k(t, n), v.EQ), S(e), y(n);
        },
        onClickRow: function (e) {
            let t = (0, j.G)(e);
            d((r) => {
                let n = (function (e) {
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
                })({}, r);
                if (t in n) delete n[t];
                else {
                    let r;
                    e.rowType === v.aC.ROLE || e.rowType === v.aC.ADMINISTRATOR
                        ? (r = {
                              type: o.Fj.ROLE,
                              label: e.name,
                              color: e.colorString
                          })
                        : (e.rowType === v.aC.MEMBER || e.rowType === v.aC.OWNER) &&
                          (r = {
                              type: o.Fj.MEMBER,
                              label: e.name,
                              avatar: e.avatarURL
                          }),
                        null != r &&
                            (n[t] = {
                                display: r,
                                row: e
                            });
                }
                return n;
            });
        },
        onRemovePendingAddition: function (e) {
            d((t) => {
                let { [e]: r } = t;
                return (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                l = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                            return l;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    }
                    return l;
                })(t, [e].map(R));
            });
        },
        roles: t,
        members: C,
        placeholderText: M,
        hintText: P,
        renderEmptyText: Z,
        isStageChannel: u,
        description: m
    });
}
function L(e) {
    let t,
        { listClassName: r, pendingAdditions: l, query: i, onQueryChange: s, onClickRow: o, onRemovePendingAddition: c, roles: d, members: u, placeholderText: m, hintText: x, renderEmptyText: h, isStageChannel: b, focusSearchAfterReady: y, isReady: f, description: p } = e;
    return (0, n.jsxs)('div', {
        className: w.content,
        children: [
            (null == (t = p) && b && (t = T.NW.string(T.t.f7VbhI)), null == t || '' === t)
                ? null
                : (0, n.jsx)(a.Text, {
                      color: 'header-secondary',
                      className: w.description,
                      variant: 'text-sm/normal',
                      children: t
                  }),
            (0, n.jsx)(j.Z, {
                listClassName: r,
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
                disabledText: b ? T.NW.string(T.t.MVVOCg) : null,
                focusSearchAfterReady: y,
                isReady: f,
                maxCount: S.ey
            })
        ]
    });
}
function M(e) {
    let { transitionState: t, onClose: r, channelId: o, newChannel: d, inSettings: x } = e,
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
    async function k() {
        if (null == S || 0 === Object.keys(g).length) return void r();
        p(!0);
        try {
            await (function (e, t, r) {
                let n = [];
                return (
                    Object.values(t).forEach((t) => {
                        let { row: r } = t;
                        null != r.id && '' !== r.id && (r.rowType === v.aC.ROLE ? n.push((0, y.rX)(r.id, e.type)) : r.rowType === v.aC.MEMBER && n.push((0, y.jZ)(r.id, e.type)));
                    }),
                    (0, s.hw)(e.id, n, r)
                );
            })(S, g, x),
                r(),
                p(!1);
        } catch (e) {
            p(!1);
        }
    }
    let L = (0, u.zi)(S.type) ? a.W4G : a.gjC;
    return (0, n.jsxs)(a.Y0X, {
        transitionState: t,
        size: a.CgR.SMALL,
        'aria-labelledby': N,
        className: w.modalRoot,
        children: [
            (0, n.jsxs)(a.xBx, {
                separator: !1,
                direction: c.Z.Direction.VERTICAL,
                align: c.Z.Align.CENTER,
                className: w.header,
                children: [
                    (0, n.jsx)(a.X6q, {
                        id: N,
                        variant: 'heading-xl/semibold',
                        children: T.NW.string(T.t.dMJ3Y2)
                    }),
                    (0, n.jsxs)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: w.headerSubtitle,
                        children: [
                            (0, n.jsx)(L, {
                                size: 'xs',
                                color: 'currentColor',
                                className: w.headerSubtitleIcon
                            }),
                            S.name
                        ]
                    })
                ]
            }),
            (0, n.jsx)(C, {
                guild: R,
                channel: S,
                permission: S.accessPermissions,
                pendingAdditions: g,
                setPendingAdditions: j
            }),
            (0, n.jsxs)(a.mzw, {
                children: [
                    !O &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(a.zxk, {
                                    onClick: k,
                                    look: a.zxk.Looks.FILLED,
                                    size: a.zxk.Sizes.SMALL,
                                    className: w.button,
                                    submitting: f,
                                    children: T.NW.string(T.t.i4jeWV)
                                }),
                                (0, n.jsx)(a.zxk, {
                                    look: a.zxk.Looks.LINK,
                                    color: a.zxk.Colors.TRANSPARENT,
                                    onClick: r,
                                    size: a.zxk.Sizes.SMALL,
                                    children: T.NW.string(T.t['ETE/oK'])
                                })
                            ]
                        }),
                    O &&
                        (0, n.jsx)(a.zxk, {
                            look: a.zxk.Looks.FILLED,
                            color: a.zxk.Colors.PRIMARY,
                            onClick: r,
                            size: a.zxk.Sizes.SMALL,
                            children: T.NW.string(T.t.u46sxc)
                        })
                ]
            })
        ]
    });
}
