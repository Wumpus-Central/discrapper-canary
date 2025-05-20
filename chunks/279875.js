n.d(t, { GuildSubscriptionSelectionModal: () => x }), n(388685), n(290780), n(539854);
var s = n(255367),
    i = n(73800),
    l = n(481060),
    r = n(565138),
    a = n(430824),
    o = n(270144),
    d = n(689011),
    c = n(388032),
    u = n(251216);
function x(e) {
    let { transitionState: t, onClose: n, sku: x, onSelect: m, currentGuildId: h } = e,
        [p, j] = i.useState(),
        { guilds: _, isFetching: g } = (0, o.CR)(x.applicationId, x.id, !0),
        b = i.useMemo(() => {
            if (!g && null != h)
                return (
                    _.findIndex((e) => {
                        let { id: t } = e;
                        return t === h;
                    }) >= 0
                );
        }, [h, _, g]);
    i.useLayoutEffect(() => {
        b && j(h);
    }, [h, b]);
    let f = i.useMemo(() => {
        let e = [];
        for (let t of _) {
            let n = {
                value: t.id,
                label: t.name
            };
            b && t.id === h ? e.unshift(n) : e.push(n);
        }
        return e;
    }, [h, _, b]);
    return (0, s.jsxs)(l.Y0X, {
        transitionState: t,
        size: l.CgR.SMALL,
        className: u.modal,
        children: [
            (0, s.jsx)(d.t, { onClose: n }),
            (0, s.jsxs)(l.hzk, {
                className: u.content,
                children: [
                    (0, s.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        className: u.breadCrumb,
                        children: c.intl.string(c.t['xgtI/P'])
                    }),
                    (0, s.jsxs)('div', {
                        className: u.selectionBody,
                        children: [
                            (0, s.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                children: c.intl.string(c.t.rAXXxM)
                            }),
                            (0, s.jsx)(l.Text, {
                                variant: 'eyebrow',
                                children: c.intl.string(c.t['5qyruL'])
                            }),
                            g
                                ? (0, s.jsx)(l.$jN, {
                                      type: l.$jN.Type.PULSING_ELLIPSIS,
                                      className: u.spinner
                                  })
                                : f.length > 0
                                  ? (0, s.jsx)(l.VcW, {
                                        options: f,
                                        value: p,
                                        onChange: j,
                                        renderOptionPrefix: (e) => {
                                            let t = null == e ? void 0 : e.value,
                                                n = null != t ? a.Z.getGuild(t) : null;
                                            return null == n
                                                ? null
                                                : (0, s.jsx)(r.Z, {
                                                      guild: n,
                                                      size: r.Z.Sizes.MINI
                                                  });
                                        },
                                        renderOptionLabel: (e) => {
                                            let { label: t, value: n } = e;
                                            return (0, s.jsxs)('div', {
                                                children: [
                                                    (0, s.jsx)(l.Text, {
                                                        variant: 'text-md/normal',
                                                        children: t
                                                    }),
                                                    n === h &&
                                                        (0, s.jsx)(l.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-secondary',
                                                            children: c.intl.string(c.t.RjtuAA)
                                                        })
                                                ]
                                            });
                                        }
                                    })
                                  : (0, s.jsx)(l.Wn, {
                                        messageType: l.QYI.WARNING,
                                        children: (0, s.jsx)(l.Text, {
                                            variant: 'text-sm/normal',
                                            children: c.intl.string(c.t.M2TbbG)
                                        })
                                    })
                        ]
                    })
                ]
            }),
            (0, s.jsxs)(l.mzw, {
                className: u.footer,
                children: [
                    (0, s.jsx)(l.zxk, {
                        look: l.zxk.Looks.BLANK,
                        size: l.zxk.Sizes.MIN,
                        className: u.closeBtn,
                        onClick: n,
                        children: c.intl.string(c.t.cpT0Cg)
                    }),
                    (0, s.jsx)(l.zxk, {
                        size: l.zxk.Sizes.SMALL,
                        disabled: null == p,
                        onClick: function () {
                            null != p && (m(p), n());
                        },
                        children: c.intl.string(c.t['cY+Ooa'])
                    })
                ]
            })
        ]
    });
}
