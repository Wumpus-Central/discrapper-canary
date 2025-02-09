n.d(t, { ZP: () => G }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    m = n(605436),
    h = n(663993),
    g = n(540059),
    x = n(518738),
    p = n(786761),
    _ = n(3148),
    C = n(753206),
    f = n(598077),
    v = n(496675),
    N = n(764260),
    j = n(95242),
    I = n(541575),
    E = n(420966),
    b = n(337344),
    T = n(275296),
    S = n(203377),
    R = n(981631),
    Z = n(388032),
    y = n(942532),
    A = n(853005),
    L = n(179517),
    D = n(79829);
let O = (0, h.Un)({
        createPromise: () => n.e('4848').then(n.bind(n, 336231)),
        webpackId: 336231
    }),
    k = o().debounce((e, t) => (0, N.Uv)(e, t), 200);
function P(e) {
    let { role: t, disabled: n } = e,
        [l, s] = r.useState(t.name);
    return (
        r.useEffect(() => {
            s(t.name);
        }, [t.name]),
        (0, i.jsx)(u.xJW, {
            title: Z.intl.string(Z.t.dLbkBg),
            required: !0,
            children: (0, i.jsx)(u.oil, {
                type: 'text',
                value: l,
                maxLength: R.VKK,
                onChange: function (e) {
                    s(e), k(t.id, e);
                },
                disabled: n
            })
        })
    );
}
function w(e) {
    let { role: t, disabled: n } = e;
    return (0, i.jsxs)(u.xJW, {
        className: y.colorPicker,
        title: Z.intl.string(Z.t['1F6FzM']),
        required: !0,
        children: [
            (0, i.jsx)(u.R94, {
                className: y.colorDescription,
                children: Z.intl.string(Z.t['9UCxlZ'])
            }),
            (0, i.jsx)(
                O,
                {
                    defaultColor: R.p6O,
                    colors: R.pmI,
                    value: t.color,
                    disabled: n,
                    onChange: (e) => {
                        var n, i;
                        return (n = t), (i = e), void (n.color !== i && (i !== R.p6O || 0 !== n.color) && (i === R.p6O && (i = 0), (0, N.OW)(n.id, i)));
                    },
                    customPickerPosition: 'right'
                },
                t.id
            )
        ]
    });
}
function M(e) {
    var t, l;
    let { role: s, guildId: a } = e,
        o =
            ((l = Z.intl.string(Z.t.Mi9KbW)),
            r.useMemo(() => {
                let e = (0, p.e5)({
                    ...(0, _.ZP)({
                        channelId: '1337',
                        content: l
                    }),
                    state: R.yb.SENT,
                    id: '31337'
                });
                return (
                    (e.author = new f.Z({
                        id: '313337',
                        username: Z.intl.string(Z.t.cqpybG),
                        discriminator: '0000',
                        bot: !1
                    })),
                    (e.author.getAvatarURL = () => n(52008)),
                    e
                );
            }, [l])),
        c = {
            nick: o.author.username,
            colorString: null !== (t = s.colorString) && void 0 !== t ? t : void 0
        },
        m = {
            src: L,
            name: s.name
        },
        h = {
            src: D,
            name: s.name
        },
        v = (0, x.oC)(a, s),
        N = (0, g.Q3)('RolePreview') ? [R.BRd.LIGHT, R.BRd.DARK, R.BRd.DARKER, R.BRd.MIDNIGHT] : [R.BRd.LIGHT, R.BRd.DARK];
    return (0, i.jsx)(u.Rny, {
        children: (0, i.jsx)('div', {
            className: y.previewContainer,
            'aria-hidden': !0,
            'data-disable-adaptive-theme': !0,
            children: N.map((e) =>
                (0, i.jsx)(
                    u.f6W,
                    {
                        theme: e,
                        children: (t) =>
                            (0, i.jsx)('div', {
                                className: t,
                                children: (0, i.jsx)('div', {
                                    className: y.messageContainer,
                                    children: (0, i.jsx)(C.Z, {
                                        author: c,
                                        message: o,
                                        roleIcon: null != v ? v : (0, d.ap)(e) ? h : m,
                                        isGroupStart: !0
                                    })
                                })
                            })
                    },
                    e
                )
            )
        })
    });
}
function U(e) {
    let { role: t, disabled: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.j7V, {
                disabled: n,
                value: t.hoist,
                onChange: (e) => (0, N.we)(t.id, e, t.mentionable),
                hideBorder: !0,
                children: Z.intl.string(Z.t.vceJPj)
            }),
            (0, i.jsx)(u.$i$, { className: y.divider }),
            (0, i.jsx)(u.j7V, {
                disabled: n,
                value: t.mentionable,
                onChange: (e) => (0, N.we)(t.id, t.hoist, e),
                note: Z.intl.string(Z.t.kRg5W1),
                hideBorder: !0,
                children: Z.intl.format(Z.t.DTXoJS, {})
            })
        ]
    });
}
function G(e) {
    let { guild: t, role: n, locked: r, setSelectedSection: l } = e,
        a = (0, m.pM)(null == t ? void 0 : t.id, n.id),
        o = r || a,
        d = (0, c.e7)([v.Z], () => v.Z.canImpersonateRole(t, n)),
        { headerHeight: h, headerRef: g } = (0, j.Z)(0),
        { scrolledToTop: x, handleScroll: p } = (0, E.V)();
    return (0, i.jsx)(u.yWw, {
        className: y.scroller,
        style: { scrollPaddingTop: h },
        onScroll: p,
        children: (0, i.jsxs)('div', {
            className: A.contentWidth,
            children: [
                (0, i.jsx)('div', {
                    className: s()(A.header, A.stickyHeader, { [A.stickyHeaderElevated]: !x }),
                    ref: g,
                    children: (0, i.jsx)(E.Z, {
                        guild: t,
                        role: n,
                        selectedSection: S.ZI.DISPLAY,
                        setSelectedSection: l
                    })
                }),
                (0, i.jsx)(P, {
                    role: n,
                    disabled: o
                }),
                (0, i.jsx)('div', {
                    className: y.noticeContainer,
                    children: (0, i.jsx)(T.Z, { role: n })
                }),
                (0, i.jsx)(u.$i$, { className: y.divider }),
                (0, i.jsx)(w, {
                    role: n,
                    disabled: o
                }),
                (0, i.jsx)(I.Z, {
                    guild: t,
                    disabled: o,
                    role: n
                }),
                (0, i.jsx)(M, {
                    role: n,
                    guildId: t.id
                }),
                (0, i.jsx)(u.$i$, { className: y.divider }),
                (0, i.jsx)(U, {
                    role: n,
                    disabled: o
                }),
                d
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(u.$i$, { className: y.divider }),
                              (0, i.jsx)(b.L, {
                                  guildId: t.id,
                                  role: n
                              })
                          ]
                      })
                    : null
            ]
        })
    });
}
