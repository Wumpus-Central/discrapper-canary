n.d(l, { default: () => N }), n(47120);
var a = n(200651),
    r = n(192379),
    i = n(658722),
    t = n.n(i),
    s = n(399606),
    o = n(481060),
    c = n(471445),
    d = n(313201),
    u = n(734893),
    h = n(208567),
    m = n(592125),
    x = n(984933),
    p = n(430824),
    v = n(768581),
    g = n(969632),
    j = n(580357),
    k = n(388032),
    C = n(147177);
function I(e, l, n, a) {
    return {
        channelId: e.value,
        title: l,
        description: n,
        emoji: null,
        icon: null != a ? a : null
    };
}
function N(e) {
    var l, n;
    let { transitionState: i, onClose: N, resourceChannel: _, guildId: f, onSave: b, onDelete: z, onIconUpload: B } = e,
        L = (0, d.Dt)(),
        [Z, S] = r.useState(null !== (l = null == _ ? void 0 : _.title) && void 0 !== l ? l : ''),
        [y, G] = r.useState(null !== (n = null == _ ? void 0 : _.description) && void 0 !== n ? n : ''),
        [R, X] = r.useState(
            (function (e) {
                if (null == e) return null;
                let l = m.Z.getChannel(e.channelId);
                return null == l
                    ? null
                    : {
                          value: l.id,
                          label: l.name
                      };
            })(_)
        ),
        K = (0, s.e7)([g.Z], () => {
            var e;
            return null === (e = g.Z.getResourceChannel(null == _ ? void 0 : _.channelId)) || void 0 === e ? void 0 : e.icon;
        }),
        M = (0, s.Wu)([g.Z], () => {
            var e, l;
            return (null !== (l = null === (e = g.Z.getSettings()) || void 0 === e ? void 0 : e.resourceChannels) && void 0 !== l ? l : []).map((e) => e.channelId);
        }),
        P = Z.length < u.n || null == R,
        U = r.useCallback(() => {
            null == R || Z.length <= 0 || (b(I(R, Z, y, K)), N());
        }, [b, N, Z, R, K, y]),
        w = r.useCallback(() => {
            null == z || z(), N();
        }, [z, N]),
        H = r.useCallback(
            (e) => {
                X(e);
            },
            [X]
        ),
        T = r.useCallback(
            (e) =>
                Promise.resolve(
                    x.ZP.getSelectableChannels(f)
                        .filter((l) => (0, u.k3)(l.channel) && !M.includes(l.channel.id) && t()(e, l.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name
                        }))
                ),
            [f, M]
        ),
        W = r.useCallback(
            (e) => {
                if (null == e || null == f) return null;
                let l = m.Z.getChannel(e.value),
                    n = p.Z.getGuild(f);
                if (null == l || null == n) return null;
                let r = (0, c.KS)(l, n);
                return null == r
                    ? null
                    : (0, a.jsx)(r, {
                          size: 'xs',
                          color: 'currentColor',
                          className: C.channelIcon
                      });
            },
            [f]
        ),
        q = r.useCallback(
            (e) => {
                null != B && null != R && B(I(R, Z, y), e);
            },
            [R, Z, B, y]
        ),
        E = r.useCallback(
            () =>
                null == K || null == R
                    ? null
                    : v.ZP.getResourceChannelIconURL({
                          channelId: R.value,
                          icon: K
                      }),
            [R, K]
        );
    return (0, a.jsxs)(o.Y0X, {
        transitionState: i,
        'aria-labelledby': L,
        children: [
            (0, a.jsxs)('div', {
                className: C.containerWithHeader,
                children: [
                    (0, a.jsxs)('div', {
                        className: C.splitGroup,
                        children: [
                            (0, a.jsx)('div', {
                                className: C.header,
                                children: (0, a.jsx)(o.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: k.intl.string(k.t.iREYFB)
                                })
                            }),
                            (0, a.jsx)(o.olH, {
                                className: C.closeButton,
                                onClick: N
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: C.formGroup,
                        children: [
                            (0, a.jsxs)(o.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: [k.intl.string(k.t.nPa4Ji), (0, a.jsx)(j.Z, {})]
                            }),
                            (0, a.jsx)(o.VcW, {
                                value: R,
                                renderOptionPrefix: W,
                                options: T,
                                onChange: H
                            }),
                            (0, a.jsx)(o.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                children: k.intl.string(k.t.eNDtJC)
                            })
                        ]
                    }),
                    (0, a.jsx)('div', { className: C.separator }),
                    (0, a.jsxs)('div', {
                        className: C.formGroup,
                        children: [
                            (0, a.jsxs)(o.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: [k.intl.string(k.t['lFy+aW']), (0, a.jsx)(j.Z, {})]
                            }),
                            (0, a.jsx)(o.oil, {
                                value: Z,
                                onChange: S,
                                placeholder: k.intl.string(k.t.XKUimJ),
                                maxLength: u.am
                            })
                        ]
                    }),
                    (0, a.jsx)('div', { className: C.separator }),
                    (0, a.jsxs)('div', {
                        className: C.formGroup,
                        children: [
                            (0, a.jsx)(o.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: k.intl.string(k.t.CnkilJ)
                            }),
                            (0, a.jsx)(o.Kx8, {
                                value: y,
                                onChange: G,
                                placeholder: k.intl.string(k.t.na0V4O),
                                maxLength: u.Vu
                            })
                        ]
                    }),
                    (0, a.jsx)('div', { className: C.separator }),
                    (0, a.jsxs)('div', {
                        className: C.splitGroup,
                        children: [
                            (0, a.jsxs)('div', {
                                children: [
                                    (0, a.jsx)(o.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        children: k.intl.string(k.t.CB6dys)
                                    }),
                                    (0, a.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-muted',
                                        children: k.intl.string(k.t.Kcdk7O)
                                    })
                                ]
                            }),
                            (0, a.jsx)('div', {
                                children: (0, a.jsx)(h.Z, {
                                    className: C.uploader,
                                    imageClassName: C.uploadImage,
                                    image: K,
                                    makeURL: E,
                                    icon: (0, a.jsx)(o.rG2, {
                                        size: 'md',
                                        color: 'currentColor'
                                    }),
                                    hideSize: !0,
                                    onChange: q,
                                    iconClassName: C.uploadImageIcon,
                                    showIcon: null == K
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)(o.mzw, {
                children: (0, a.jsxs)('div', {
                    className: C.footerButtons,
                    children: [
                        null != _
                            ? (0, a.jsx)('div', {
                                  className: C.removeButton,
                                  children: (0, a.jsx)(o.zxk, {
                                      size: o.zxk.Sizes.SMALL,
                                      look: o.zxk.Looks.LINK,
                                      color: o.zxk.Colors.RED,
                                      onClick: w,
                                      children: k.intl.string(k.t.N86XcH)
                                  })
                              })
                            : (0, a.jsx)('div', {}),
                        (0, a.jsxs)('div', {
                            className: C.rightButtons,
                            children: [
                                (0, a.jsx)(o.zxk, {
                                    onClick: N,
                                    size: o.zxk.Sizes.SMALL,
                                    look: o.zxk.Looks.LINK,
                                    color: o.zxk.Colors.PRIMARY,
                                    children: k.intl.string(k.t['ETE/oK'])
                                }),
                                (0, a.jsx)(o.zxk, {
                                    disabled: P,
                                    onClick: U,
                                    children: k.intl.string(k.t.R3BPHx)
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
