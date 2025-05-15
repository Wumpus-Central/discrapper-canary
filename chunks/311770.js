r.d(t, { EmojiStudioModal: () => _ }), r(388685);
var n = r(255367),
    l = r(73800),
    i = r(442837),
    a = r(481060),
    o = r(80932),
    s = r(710845),
    c = r(430824),
    u = r(496675),
    d = r(914010),
    h = r(768581),
    g = r(176354),
    m = r(598117),
    f = r(903759),
    p = r(746622),
    b = r(273391),
    O = r(981631),
    y = r(388032),
    j = r(807179);
let x = new s.Z('EmojiStudioModal'),
    w = (e) => {
        let { userImage: t, guildId: r, back: s } = e,
            h = (0, i.e7)([c.Z, d.Z, u.Z], () => {
                let e = d.Z.getGuildId(),
                    t = c.Z.getGuild(e);
                return u.Z.can(O.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null;
            }),
            [f, w] = l.useState(null != r ? r : h),
            [_, E] = l.useState(null),
            [v, C] = l.useState(''),
            [A, S] = l.useState(null),
            [P, R] = l.useState(!1),
            M = async () => {
                if ((E(null), null == f)) return void E(m.ze.MISSING_GUILD);
                if (null == t || (null == t ? void 0 : t.file) == null || null == A) return void E(m.ze.MISSING_IMAGE_DATA);
                try {
                    await (0, o.rS)({
                        image: A,
                        guildId: f,
                        name: v
                    });
                } catch (e) {
                    E((0, p.z)(e)), x.error('Failed to upload emoji.', e);
                    return;
                }
                (0, a.Mr3)(m.Hj);
            },
            k = l.useRef(0),
            T = l.useCallback((e) => {
                let { imageData: t, imageDataTimestamp: r = 0, error: n, loading: l } = e,
                    i = null;
                null != t && g.ZP.isDataTooBig(t) && (i = m.ze.TOO_BIG), E(null != n ? n : i), R(l), r < k.current || (null != t && (S(t), (k.current = r)));
            }, []);
        return (0, n.jsxs)('main', {
            children: [
                (0, n.jsx)(a.X6q, {
                    variant: 'heading-lg/semibold',
                    className: j.heading,
                    children: 'Add Custom Emoji'
                }),
                (0, n.jsx)('div', {
                    className: j.editor,
                    children: (0, n.jsx)(b.v, {
                        file: t.file,
                        imageUri: t.data,
                        onUpdate: T
                    })
                }),
                (0, n.jsxs)('footer', {
                    children: [
                        null != _ && (0, n.jsx)(p.H, { error: _ }),
                        (0, n.jsxs)('div', {
                            className: j.grid,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: j.preview,
                                    children: [
                                        (0, n.jsx)('img', {
                                            src: null != A ? A : '',
                                            alt: 'Edited',
                                            className: P ? j.loading : ''
                                        }),
                                        (0, n.jsxs)('div', {
                                            children: [
                                                (0, n.jsx)(a.oil, {
                                                    placeholder: ':emoji:',
                                                    onChange: (e) => {
                                                        C(e.length < 2 ? e : g.ZP.sanitizeEmojiName(e));
                                                    },
                                                    value: v
                                                }),
                                                (0, n.jsx)(a.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-muted',
                                                    className: j.inputNote,
                                                    children: 'Min. 2 characters (letters, numbers & underscores only).'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, n.jsx)(I, {
                                    onChange: w,
                                    selected: f
                                }),
                                (0, n.jsx)(a.zxk, {
                                    className: j.submit,
                                    onClick: M,
                                    fullWidth: !0,
                                    disabled: null == t || null == f || v.length < 2,
                                    children: y.intl.string(y.t.DU0dy8)
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(N, { back: s })
            ]
        });
    },
    _ = (e) => {
        let { transitionState: t, userImage: r, guildId: i } = e,
            [o, s] = l.useState(r),
            c = l.useCallback(() => s(null), [s]),
            u = null == o ? a.CgR.MEDIUM : a.CgR.LARGE;
        return (0, n.jsx)(a.Y0X, {
            transitionState: t,
            size: u,
            children: (0, n.jsxs)(a.hzk, {
                scrollbarType: 'none',
                className: j.modalContent,
                children: [
                    null == o
                        ? (0, n.jsx)(f.u, { setUserImage: s })
                        : (0, n.jsx)(w, {
                              userImage: o,
                              guildId: i,
                              back: c
                          }),
                    (0, n.jsx)(a.olH, {
                        onClick: () => (0, a.Mr3)(m.Hj),
                        className: j.closeButton
                    })
                ]
            })
        });
    },
    E = (e) => ({
        label: e.name,
        value: e.id
    }),
    v = (e) => u.Z.can(O.Plq.CREATE_GUILD_EXPRESSIONS, e),
    I = (e) => {
        let { onChange: t, selected: r } = e,
            o = (0, i.e7)([c.Z], () => c.Z.getGuilds()),
            s = l.useMemo(() => Object.values(o).filter(v).map(E), [o]),
            u = l.useCallback(
                (e) => {
                    let [t] = e;
                    if (null == t || null == t.value) return null;
                    let r = o[t.value];
                    if (null == r) return t.label;
                    let l = h.ZP.getGuildIconURL({
                        id: r.id,
                        icon: r.icon,
                        size: 24,
                        canAnimate: !1
                    });
                    return l
                        ? (0, n.jsx)('img', {
                              src: l,
                              alt: t.label
                          })
                        : t.label;
                },
                [o]
            );
        return (0, n.jsx)(a.q4e, {
            options: s,
            value: r,
            onChange: t,
            className: j.select,
            popoutWidth: 'auto',
            renderOptionValue: u
        });
    },
    N = (e) => {
        let { back: t } = e;
        return (0, n.jsxs)(a.zxk, {
            'aria-label': y.intl.string(y.t['13/7kZ']),
            onClick: t,
            look: a.zxk.Looks.BLANK,
            size: a.zxk.Sizes.MIN,
            innerClassName: j.backButtonInnner,
            className: j.backButton,
            children: [
                (0, n.jsx)(a.j9r, {
                    color: 'currentColor',
                    size: 'xs'
                }),
                'Back'
            ]
        });
    };
