(l.d(n, { default: () => _ }), l(388685), l(953529));
var a = l(255367),
    t = l(73800),
    r = l(658722),
    i = l.n(r),
    s = l(399606),
    o = l(481060),
    c = l(471445),
    d = l(313201),
    u = l(734893),
    m = l(208567),
    h = l(592125),
    x = l(984933),
    p = l(430824),
    v = l(768581),
    g = l(969632),
    j = l(580357),
    C = l(388032),
    k = l(70164);
function I(e, n, l, a) {
    return {
        channelId: e.value,
        title: n,
        description: l,
        emoji: null,
        icon: null != a ? a : null
    };
}
function _(e) {
    var n, l;
    let { transitionState: r, onClose: _, resourceChannel: f, guildId: b, onSave: N, onDelete: B, onIconUpload: y } = e,
        Z = (0, d.Dt)(),
        [G, z] = t.useState(null != (n = null == f ? void 0 : f.title) ? n : ''),
        [S, X] = t.useState(null != (l = null == f ? void 0 : f.description) ? l : ''),
        [R, U] = t.useState(
            (function (e) {
                if (null == e) return null;
                let n = h.Z.getChannel(e.channelId);
                return null == n
                    ? null
                    : {
                          value: n.id,
                          label: n.name
                      };
            })(f)
        ),
        w = (0, s.e7)([g.Z], () => {
            var e;
            return null == (e = g.Z.getResourceChannel(null == f ? void 0 : f.channelId)) ? void 0 : e.icon;
        }),
        H = (0, s.Wu)([g.Z], () => {
            var e, n;
            return (null != (n = null == (e = g.Z.getSettings()) ? void 0 : e.resourceChannels) ? n : []).map((e) => e.channelId);
        }),
        P = G.length < u.n || null == R,
        T = t.useCallback(() => {
            null == R || G.length <= 0 || (N(I(R, G, S, w)), _());
        }, [N, _, G, R, w, S]),
        W = t.useCallback(() => {
            (null == B || B(), _());
        }, [B, _]),
        q = t.useCallback(
            (e) => {
                U(e);
            },
            [U]
        ),
        E = t.useCallback(
            (e) =>
                Promise.resolve(
                    x.ZP.getSelectableChannels(b)
                        .filter((n) => (0, u.k3)(n.channel) && !H.includes(n.channel.id) && i()(e, n.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name
                        }))
                ),
            [b, H]
        ),
        K = t.useCallback(
            (e) => {
                if (null == e || null == b) return null;
                let n = h.Z.getChannel(e.value),
                    l = p.Z.getGuild(b);
                if (null == n || null == l) return null;
                let t = (0, c.KS)(n, l);
                return null == t
                    ? null
                    : (0, a.jsx)(t, {
                          size: 'xs',
                          color: 'currentColor',
                          className: k.channelIcon
                      });
            },
            [b]
        ),
        L = t.useCallback(
            (e) => {
                null != y && null != R && y(I(R, G, S), e);
            },
            [R, G, y, S]
        ),
        M = t.useCallback(
            () =>
                null == w || null == R
                    ? null
                    : v.ZP.getResourceChannelIconURL({
                          channelId: R.value,
                          icon: w
                      }),
            [R, w]
        );
    return (0, a.jsxs)(o.Y0X, {
        transitionState: r,
        'aria-labelledby': Z,
        parentComponent: 'ResourceChannelModal',
        children: [
            (0, a.jsxs)('div', {
                className: k.containerWithHeader,
                children: [
                    (0, a.jsxs)('div', {
                        className: k.splitGroup,
                        children: [
                            (0, a.jsx)('div', {
                                className: k.header,
                                children: (0, a.jsx)(o.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: C.intl.string(C.t.iREYFB)
                                })
                            }),
                            (0, a.jsx)(o.olH, {
                                className: k.closeButton,
                                onClick: _
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: k.formGroup,
                        children: [
                            (0, a.jsxs)(o.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: [C.intl.string(C.t.nPa4Ji), (0, a.jsx)(j.Z, {})]
                            }),
                            (0, a.jsx)(o.VcW, {
                                value: R,
                                renderOptionPrefix: K,
                                options: E,
                                onChange: q
                            }),
                            (0, a.jsx)(o.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                children: C.intl.string(C.t.eNDtJC)
                            })
                        ]
                    }),
                    (0, a.jsx)('div', { className: k.separator }),
                    (0, a.jsxs)('div', {
                        className: k.formGroup,
                        children: [
                            (0, a.jsxs)(o.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: [C.intl.string(C.t['lFy+aW']), (0, a.jsx)(j.Z, {})]
                            }),
                            (0, a.jsx)(o.oil, {
                                value: G,
                                onChange: z,
                                placeholder: C.intl.string(C.t.XKUimJ),
                                maxLength: u.am
                            })
                        ]
                    }),
                    (0, a.jsx)('div', { className: k.separator }),
                    (0, a.jsxs)('div', {
                        className: k.formGroup,
                        children: [
                            (0, a.jsx)(o.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: C.intl.string(C.t.CnkilJ)
                            }),
                            (0, a.jsx)(o.Kx8, {
                                value: S,
                                onChange: X,
                                placeholder: C.intl.string(C.t.na0V4O),
                                maxLength: u.Vu
                            })
                        ]
                    }),
                    (0, a.jsx)('div', { className: k.separator }),
                    (0, a.jsxs)('div', {
                        className: k.splitGroup,
                        children: [
                            (0, a.jsxs)('div', {
                                children: [
                                    (0, a.jsx)(o.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        children: C.intl.string(C.t.CB6dys)
                                    }),
                                    (0, a.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-muted',
                                        children: C.intl.string(C.t.Kcdk7O)
                                    })
                                ]
                            }),
                            (0, a.jsx)('div', {
                                children: (0, a.jsx)(m.Z, {
                                    className: k.uploader,
                                    imageClassName: k.uploadImage,
                                    image: w,
                                    makeURL: M,
                                    icon: (0, a.jsx)(o.rG2, {
                                        size: 'md',
                                        color: 'currentColor'
                                    }),
                                    hideSize: !0,
                                    onChange: L,
                                    iconClassName: k.uploadImageIcon,
                                    showIcon: null == w
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)(o.mzw, {
                children: (0, a.jsxs)('div', {
                    className: k.footerButtons,
                    children: [
                        null != f
                            ? (0, a.jsx)('div', {
                                  className: k.removeButton,
                                  children: (0, a.jsx)(o.zxk, {
                                      variant: 'critical-secondary',
                                      size: 'sm',
                                      text: C.intl.string(C.t.N86XcH),
                                      onClick: W
                                  })
                              })
                            : (0, a.jsx)('div', {}),
                        (0, a.jsx)('div', {
                            className: k.rightButtons,
                            children: (0, a.jsxs)(o.hE2, {
                                direction: 'horizontal-reverse',
                                children: [
                                    (0, a.jsx)(o.zxk, {
                                        variant: 'secondary',
                                        size: 'sm',
                                        text: C.intl.string(C.t['ETE/oK']),
                                        onClick: _
                                    }),
                                    (0, a.jsx)(o.zxk, {
                                        variant: 'primary',
                                        text: C.intl.string(C.t.R3BPHx),
                                        disabled: P,
                                        onClick: T
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}
