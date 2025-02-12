n.d(t, {
    U: () => L,
    default: () => N,
    t: () => k
}),
    n(47120),
    n(653041);
var l = n(200651),
    i = n(192379),
    s = n(442837),
    r = n(481060),
    a = n(741361),
    o = n(461745),
    c = n(600164),
    d = n(313201),
    u = n(131704),
    x = n(592125),
    m = n(271383),
    h = n(430824),
    g = n(626135),
    E = n(934415),
    b = n(892880),
    T = n(226951),
    y = n(605436),
    j = n(971628),
    p = n(71080),
    R = n(981631),
    S = n(494831),
    f = n(388032),
    v = n(929434);
let w = (0, d.hQ)();
function C(e, t) {
    return t ? e.slice(1) : e;
}
function L(e) {
    let t,
        { guild: n, channel: r, permission: a, pendingAdditions: c, setPendingAdditions: d, isStageChannel: u = null != r && r.isGuildStageVoice(), description: x } = e,
        [g, E] = i.useState(!1),
        [R, S] = i.useState(''),
        v = (0, s.e7)([h.Z], () => h.Z.getRoles(n.id));
    function w(e) {
        let t = C(R.trim(), g);
        return RegExp(''.concat(T.Z.escape(t)), 'i').test(e);
    }
    let L = (0, s.Wu)([m.ZP], () => m.ZP.getMemberIds(n.id));
    g ? (t = []) : u ? (t = y.Wx(n, v, r, a, w)) : 0 !== (t = y.ik(n, v, r, a, w)).length || '' !== R.trim() || y.RD(n, v) || (t = y.aq());
    let N = y.iI(L, r, n, a, w),
        {
            placeholderText: M,
            hintText: Z,
            renderEmptyText: z
        } = {
            placeholderText: f.intl.string(f.t.iezLLi),
            hintText: f.intl.string(f.t['rwFx8/']),
            renderEmptyText: (e) => f.intl.format(f.t.ErpIY2, { query: e })
        };
    return (0, l.jsx)(k, {
        pendingAdditions: c,
        query: R,
        onQueryChange: function (e) {
            let t = e.trim(),
                l = '@' === t.charAt(0);
            b.Z.requestMembers(n.id, C(t, l), p.EQ), S(e), E(l);
        },
        onClickRow: function (e) {
            let t = (0, j.G)(e);
            d((n) => {
                let l = { ...n };
                if (t in l) delete l[t];
                else {
                    let n;
                    e.rowType === p.aC.ROLE || e.rowType === p.aC.ADMINISTRATOR
                        ? (n = {
                              type: o.Fj.ROLE,
                              label: e.name,
                              color: e.colorString
                          })
                        : (e.rowType === p.aC.MEMBER || e.rowType === p.aC.OWNER) &&
                          (n = {
                              type: o.Fj.MEMBER,
                              label: e.name,
                              avatar: e.avatarURL
                          }),
                        null != n &&
                            (l[t] = {
                                display: n,
                                row: e
                            });
                }
                return l;
            });
        },
        onRemovePendingAddition: function (e) {
            d((t) => {
                let { [e]: n, ...l } = t;
                return l;
            });
        },
        roles: t,
        members: N,
        placeholderText: M,
        hintText: Z,
        renderEmptyText: z,
        isStageChannel: u,
        description: x
    });
}
function k(e) {
    let t,
        { listClassName: n, pendingAdditions: i, query: s, onQueryChange: a, onClickRow: o, onRemovePendingAddition: c, roles: d, members: u, placeholderText: x, hintText: m, renderEmptyText: h, isStageChannel: g, focusSearchAfterReady: E, isReady: b, description: T } = e;
    return (0, l.jsxs)('div', {
        className: v.content,
        children: [
            (null == (t = T) && g && (t = f.intl.string(f.t.f7VbhI)), null == t || '' === t)
                ? null
                : (0, l.jsx)(r.Text, {
                      color: 'header-secondary',
                      className: v.description,
                      variant: 'text-sm/normal',
                      children: t
                  }),
            (0, l.jsx)(j.Z, {
                listClassName: n,
                pendingAdditions: i,
                query: s,
                onQueryChange: a,
                onClickRow: o,
                onRemovePendingAddition: c,
                roles: d,
                members: u,
                placeholderText: x,
                hintText: m,
                renderEmptyText: h,
                disabledText: g ? f.intl.string(f.t.MVVOCg) : null,
                focusSearchAfterReady: E,
                isReady: b,
                maxCount: S.ey
            })
        ]
    });
}
function N(e) {
    let { transitionState: t, onClose: n, channelId: o, newChannel: d, inSettings: m } = e,
        [b, T] = i.useState(!1),
        [y, j] = i.useState({}),
        S = (0, s.e7)([x.Z], () => x.Z.getChannel(o), [o]),
        C = (0, s.e7)([h.Z], () => h.Z.getGuild(null == S ? void 0 : S.getGuildId()));
    if (
        (i.useEffect(() => {
            g.default.track(R.rMx.OPEN_MODAL, { type: 'Grant Channel Access' });
        }, []),
        null == S || null == C)
    )
        return null;
    let k = d && 0 === Object.keys(y).length;
    async function N() {
        if (null == S || 0 === Object.keys(y).length) {
            n();
            return;
        }
        T(!0);
        try {
            await (function (e, t, n) {
                let l = [];
                return (
                    Object.values(t).forEach((t) => {
                        let { row: n } = t;
                        null != n.id && '' !== n.id && (n.rowType === p.aC.ROLE ? l.push((0, E.rX)(n.id, e.type)) : n.rowType === p.aC.MEMBER && l.push((0, E.jZ)(n.id, e.type)));
                    }),
                    (0, a.hw)(e.id, l, n)
                );
            })(S, y, m),
                n(),
                T(!1);
        } catch (e) {
            T(!1);
        }
    }
    let M = (0, u.zi)(S.type) ? r.W4G : r.gjC;
    return (0, l.jsxs)(r.Y0X, {
        transitionState: t,
        size: r.CgR.SMALL,
        'aria-labelledby': w,
        className: v.modalRoot,
        children: [
            (0, l.jsxs)(r.xBx, {
                separator: !1,
                direction: c.Z.Direction.VERTICAL,
                align: c.Z.Align.CENTER,
                className: v.header,
                children: [
                    (0, l.jsx)(r.X6q, {
                        id: w,
                        variant: 'heading-xl/semibold',
                        children: f.intl.string(f.t.dMJ3Y2)
                    }),
                    (0, l.jsxs)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: v.headerSubtitle,
                        children: [
                            (0, l.jsx)(M, {
                                size: 'xs',
                                color: 'currentColor',
                                className: v.headerSubtitleIcon
                            }),
                            S.name
                        ]
                    })
                ]
            }),
            (0, l.jsx)(L, {
                guild: C,
                channel: S,
                permission: S.accessPermissions,
                pendingAdditions: y,
                setPendingAdditions: j
            }),
            (0, l.jsxs)(r.mzw, {
                children: [
                    !k &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(r.zxk, {
                                    onClick: N,
                                    look: r.zxk.Looks.FILLED,
                                    size: r.zxk.Sizes.SMALL,
                                    className: v.button,
                                    submitting: b,
                                    children: f.intl.string(f.t.i4jeWV)
                                }),
                                (0, l.jsx)(r.zxk, {
                                    look: r.zxk.Looks.LINK,
                                    color: r.zxk.Colors.TRANSPARENT,
                                    onClick: n,
                                    size: r.zxk.Sizes.SMALL,
                                    children: f.intl.string(f.t['ETE/oK'])
                                })
                            ]
                        }),
                    k &&
                        (0, l.jsx)(r.zxk, {
                            look: r.zxk.Looks.FILLED,
                            color: r.zxk.Colors.PRIMARY,
                            onClick: n,
                            size: r.zxk.Sizes.SMALL,
                            children: f.intl.string(f.t.u46sxc)
                        })
                ]
            })
        ]
    });
}
