r.d(t, { EmojiStudioModal: () => E }), r(388685);
var n = r(255367),
    a = r(73800),
    i = r(442837),
    s = r(481060),
    l = r(80932),
    o = r(710845),
    c = r(430824),
    u = r(496675),
    d = r(914010),
    h = r(768581),
    p = r(176354),
    g = r(598117),
    m = r(903759),
    f = r(746622),
    b = r(273391),
    v = r(981631),
    x = r(388032),
    _ = r(870483);
let j = new o.Z('EmojiStudioModal'),
    O = (e) => {
        let { userImage: t, guildId: r, back: o } = e,
            h = (0, i.e7)([c.Z, d.Z, u.Z], () => {
                let e = d.Z.getGuildId(),
                    t = c.Z.getGuild(e);
                return u.Z.can(v.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [m, O] = a.useState(null != r ? r : h),
            [E, D] = a.useState(null),
            [N, C] = a.useState(''),
            [w, S] = a.useState(null),
            [A, k] = a.useState(!1),
            M = async () => {
                if ((D(null), null == m)) return void D(g.ze.MISSING_GUILD);
                if (null == t || (null == t ? void 0 : t.file) == null || null == w) return void D(g.ze.MISSING_IMAGE_DATA);
                try {
                    await (0, l.rS)({
                        image: w,
                        guildId: m,
                        name: N
                    });
                } catch (e) {
                    D((0, f.z)(e)), j.error('Failed to upload emoji.', e);
                    return;
                }
                (0, s.Mr3)(g.Hj);
            },
            R = a.useRef(0),
            T = a.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: r = 0, error: n, loading: a } = e,
                    i = null;
                null != t && p.ZP.isDataTooBig(t) && (i = g.ze.TOO_BIG), D(null != n ? n : i), k(a), r < R.current || (null != t && (S(t), (R.current = r)));
            }, []);
        return (0, n.jsxs)('main', {
            children: [
                (0, n.jsx)(s.X6q, {
                    variant: 'heading-lg/semibold',
                    className: _.heading,
                    children: 'Add Custom Emoji'
                }),
                (0, n.jsx)('div', {
                    className: _.editor,
                    children: (0, n.jsx)(b.v, {
                        file: t.file,
                        imageUri: t.data,
                        onUpdate: T
                    })
                }),
                (0, n.jsxs)('footer', {
                    children: [
                        null != E && (0, n.jsx)(f.H, { error: E }),
                        (0, n.jsxs)('div', {
                            className: _.grid,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: _.preview,
                                    children: [
                                        (0, n.jsx)('img', {
                                            src: null != w ? w : '',
                                            alt: 'Edited',
                                            className: A ? _.loading : ''
                                        }),
                                        (0, n.jsxs)('div', {
                                            children: [
                                                (0, n.jsx)(s.oil, {
                                                    placeholder: ':emoji:',
                                                    onChange: (e) => {
                                                        C(e.length < 2 ? e : p.ZP.sanitizeEmojiName(e));
                                                    },
                                                    value: N
                                                }),
                                                (0, n.jsx)(s.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-muted',
                                                    className: _.inputNote,
                                                    children: 'Min. 2 characters (letters, numbers & underscores only).'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, n.jsx)(y, {
                                    onChange: O,
                                    selected: m
                                }),
                                (0, n.jsx)(s.zxk, {
                                    className: _.submit,
                                    onClick: M,
                                    fullWidth: !0,
                                    disabled: null == t || null == m || N.length < 2,
                                    children: x.intl.string(x.t.DU0dy8)
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(I, { back: o })
            ]
        });
    },
    E = (e) => {
        let { transitionState: t, userImage: r, guildId: i } = e,
            [l, o] = a.useState(r),
            c = a.useCallback(() => o(null), [o]),
            u = null == l ? s.CgR.MEDIUM : s.CgR.LARGE;
        return (0, n.jsx)(s.Y0X, {
            transitionState: t,
            size: u,
            children: (0, n.jsxs)(s.hzk, {
                scrollbarType: 'none',
                className: _.modalContent,
                children: [
                    null == l
                        ? (0, n.jsx)(m.u, { setUserImage: o })
                        : (0, n.jsx)(O, {
                              userImage: l,
                              guildId: i,
                              back: c
                          }),
                    (0, n.jsx)(s.olH, {
                        onClick: () => (0, s.Mr3)(g.Hj),
                        className: _.closeButton
                    })
                ]
            })
        });
    },
    D = (e) => ({
        label: e.name,
        value: e.id
    }),
    N = (e) => u.Z.can(v.Plq.CREATE_GUILD_EXPRESSIONS, e),
    y = (e) => {
        let { onChange: t, selected: r } = e,
            l = (0, i.e7)([c.Z], () => c.Z.getGuilds()),
            o = a.useMemo(() => Object.values(l).filter(N).map(D), [l]),
            u = a.useCallback(
                (e) => {
                    let [t] = e;
                    if (null == t || null == t.value) return null;
                    let r = l[t.value];
                    if (null == r) return t.label;
                    let a = h.ZP.getGuildIconURL({
                        id: r.id,
                        icon: r.icon,
                        size: 24,
                        canAnimate: !1
                    });
                    return a
                        ? (0, n.jsx)('img', {
                              src: a,
                              alt: t.label
                          })
                        : t.label;
                },
                [l]
            );
        return (0, n.jsx)(s.q4e, {
            options: o,
            value: r,
            onChange: t,
            className: _.select,
            popoutWidth: 'auto',
            renderOptionValue: u
        });
    },
    I = (e) => {
        let { back: t } = e;
        return (0, n.jsxs)(s.zxk, {
            'aria-label': x.intl.string(x.t['13/7kZ']),
            onClick: t,
            look: s.zxk.Looks.BLANK,
            size: s.zxk.Sizes.MIN,
            innerClassName: _.backButtonInnner,
            className: _.backButton,
            children: [
                (0, n.jsx)(s.j9r, {
                    color: 'currentColor',
                    size: 'xs'
                }),
                'Back'
            ]
        });
    };
