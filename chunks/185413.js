n.r(t),
    n.d(t, {
        AddMembersBody: function () {
            return C;
        },
        MemberRoleSelector: function () {
            return M;
        },
        default: function () {
            return A;
        }
    }),
    n(47120),
    n(653041);
var l = n(200651),
    i = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(741361),
    o = n(461745),
    c = n(600164),
    d = n(313201),
    u = n(131704),
    m = n(592125),
    x = n(271383),
    h = n(430824),
    g = n(626135),
    b = n(934415),
    T = n(892880),
    E = n(226951),
    f = n(605436),
    y = n(971628),
    S = n(71080),
    j = n(981631),
    p = n(494831),
    R = n(388032),
    v = n(612432);
let L = (0, d.hQ)();
function w(e, t) {
    return t ? e.slice(1) : e;
}
function C(e) {
    let t,
        { guild: n, channel: a, permission: s, pendingAdditions: c, setPendingAdditions: d, isStageChannel: u = null != a && a.isGuildStageVoice(), description: m } = e,
        [g, b] = i.useState(!1),
        [j, p] = i.useState(''),
        v = (0, r.e7)([h.Z], () => h.Z.getRoles(n.id));
    function L(e) {
        let t = w(j.trim(), g);
        return RegExp(''.concat(E.Z.escape(t)), 'i').test(e);
    }
    let C = (0, r.Wu)([x.ZP], () => x.ZP.getMemberIds(n.id));
    g ? (t = []) : u ? (t = f.Wx(n, v, a, s, L)) : 0 === (t = f.ik(n, v, a, s, L)).length && '' === j.trim() && !f.RD(n, v) && (t = f.aq());
    let A = f.iI(C, a, n, s, L),
        {
            placeholderText: N,
            hintText: k,
            renderEmptyText: Z
        } = (function () {
            return {
                placeholderText: R.intl.string(R.t.iezLLi),
                hintText: R.intl.string(R.t['rwFx8/']),
                renderEmptyText: (e) => R.intl.format(R.t.ErpIY2, { query: e })
            };
        })();
    return (0, l.jsx)(M, {
        pendingAdditions: c,
        query: j,
        onQueryChange: function (e) {
            let t = e.trim(),
                l = '@' === t.charAt(0);
            T.Z.requestMembers(n.id, w(t, l), S.EQ), p(e), b(l);
        },
        onClickRow: function (e) {
            let t = (0, y.G)(e);
            d((n) => {
                let l = { ...n };
                if (t in l) delete l[t];
                else {
                    let n;
                    e.rowType === S.aC.ROLE || e.rowType === S.aC.ADMINISTRATOR
                        ? (n = {
                              type: o.Fj.ROLE,
                              label: e.name,
                              color: e.colorString
                          })
                        : (e.rowType === S.aC.MEMBER || e.rowType === S.aC.OWNER) &&
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
        members: A,
        placeholderText: N,
        hintText: k,
        renderEmptyText: Z,
        isStageChannel: u,
        description: m
    });
}
function M(e) {
    let t,
        { listClassName: n, pendingAdditions: i, query: r, onQueryChange: s, onClickRow: o, onRemovePendingAddition: c, roles: d, members: u, placeholderText: m, hintText: x, renderEmptyText: h, isStageChannel: g, focusSearchAfterReady: b, isReady: T, description: E } = e;
    return (0, l.jsxs)('div', {
        className: v.content,
        children: [
            (null == (t = E) && g && (t = R.intl.string(R.t.f7VbhI)), null == t || '' === t)
                ? null
                : (0, l.jsx)(a.Text, {
                      color: 'header-secondary',
                      className: v.description,
                      variant: 'text-sm/normal',
                      children: t
                  }),
            (0, l.jsx)(y.Z, {
                listClassName: n,
                pendingAdditions: i,
                query: r,
                onQueryChange: s,
                onClickRow: o,
                onRemovePendingAddition: c,
                roles: d,
                members: u,
                placeholderText: m,
                hintText: x,
                renderEmptyText: h,
                disabledText: g ? R.intl.string(R.t.MVVOCg) : null,
                focusSearchAfterReady: b,
                isReady: T,
                maxCount: p.ey
            })
        ]
    });
}
function A(e) {
    let { transitionState: t, onClose: n, channelId: o, newChannel: d, inSettings: x } = e,
        [T, E] = i.useState(!1),
        [f, y] = i.useState({}),
        p = (0, r.e7)([m.Z], () => m.Z.getChannel(o), [o]),
        w = (0, r.e7)([h.Z], () => h.Z.getGuild(null == p ? void 0 : p.getGuildId()));
    if (
        (i.useEffect(() => {
            g.default.track(j.rMx.OPEN_MODAL, { type: 'Grant Channel Access' });
        }, []),
        null == p || null == w)
    )
        return null;
    let M = d && 0 === Object.keys(f).length;
    async function A() {
        if (null == p || 0 === Object.keys(f).length) {
            n();
            return;
        }
        E(!0);
        try {
            await (function (e, t, n) {
                let l = [];
                return (
                    Object.values(t).forEach((t) => {
                        let { row: n } = t;
                        null != n.id && '' !== n.id && (n.rowType === S.aC.ROLE ? l.push((0, b.rX)(n.id, e.type)) : n.rowType === S.aC.MEMBER && l.push((0, b.jZ)(n.id, e.type)));
                    }),
                    (0, s.hw)(e.id, l, n)
                );
            })(p, f, x),
                n(),
                E(!1);
        } catch (e) {
            E(!1);
        }
    }
    let N = (0, u.zi)(p.type) ? a.TextLockIcon : a.VoiceLockIcon;
    return (0, l.jsxs)(a.ModalRoot, {
        transitionState: t,
        size: a.ModalSize.SMALL,
        'aria-labelledby': L,
        className: v.modalRoot,
        children: [
            (0, l.jsxs)(a.ModalHeader, {
                separator: !1,
                direction: c.Z.Direction.VERTICAL,
                align: c.Z.Align.CENTER,
                className: v.header,
                children: [
                    (0, l.jsx)(a.Heading, {
                        id: L,
                        variant: 'heading-xl/semibold',
                        children: R.intl.string(R.t.dMJ3Y2)
                    }),
                    (0, l.jsxs)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: v.headerSubtitle,
                        children: [
                            (0, l.jsx)(N, {
                                size: 'xs',
                                color: 'currentColor',
                                className: v.headerSubtitleIcon
                            }),
                            p.name
                        ]
                    })
                ]
            }),
            (0, l.jsx)(C, {
                guild: w,
                channel: p,
                permission: p.accessPermissions,
                pendingAdditions: f,
                setPendingAdditions: y
            }),
            (0, l.jsxs)(a.ModalFooter, {
                children: [
                    !M &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(a.Button, {
                                    onClick: A,
                                    look: a.Button.Looks.FILLED,
                                    size: a.Button.Sizes.SMALL,
                                    className: v.button,
                                    submitting: T,
                                    children: R.intl.string(R.t.i4jeWV)
                                }),
                                (0, l.jsx)(a.Button, {
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.TRANSPARENT,
                                    onClick: n,
                                    size: a.Button.Sizes.SMALL,
                                    children: R.intl.string(R.t['ETE/oK'])
                                })
                            ]
                        }),
                    M &&
                        (0, l.jsx)(a.Button, {
                            look: a.Button.Looks.FILLED,
                            color: a.Button.Colors.PRIMARY,
                            onClick: n,
                            size: a.Button.Sizes.SMALL,
                            children: R.intl.string(R.t.u46sxc)
                        })
                ]
            })
        ]
    });
}
