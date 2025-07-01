(t.d(n, { GuildSubscriptionSelectionModal: () => x }), t(388685), t(290780), t(539854));
var i = t(255367),
    l = t(73800),
    s = t(481060),
    r = t(565138),
    a = t(430824),
    o = t(270144),
    d = t(689011),
    c = t(388032),
    u = t(251216);
function x(e) {
    let { transitionState: n, onClose: t, sku: x, onSelect: m, currentGuildId: h } = e,
        [p, j] = l.useState(),
        { guilds: _, isFetching: b } = (0, o.CR)(x.applicationId, x.id, !0),
        g = l.useMemo(() => {
            if (!b && null != h)
                return (
                    _.findIndex((e) => {
                        let { id: n } = e;
                        return n === h;
                    }) >= 0
                );
        }, [h, _, b]);
    l.useLayoutEffect(() => {
        g && j(h);
    }, [h, g]);
    let f = l.useMemo(() => {
        let e = [];
        for (let n of _) {
            let t = {
                value: n.id,
                label: n.name
            };
            g && n.id === h ? e.unshift(t) : e.push(t);
        }
        return e;
    }, [h, _, g]);
    return (0, i.jsxs)(s.Y0X, {
        transitionState: n,
        size: s.CgR.SMALL,
        className: u.modal,
        parentComponent: 'GuildSubscriptionSelectionModal',
        children: [
            (0, i.jsx)(d.t, { onClose: t }),
            (0, i.jsxs)(s.hzk, {
                className: u.content,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        className: u.breadCrumb,
                        children: c.intl.string(c.t['xgtI/P'])
                    }),
                    (0, i.jsxs)('div', {
                        className: u.selectionBody,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/medium',
                                children: c.intl.string(c.t.rAXXxM)
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'eyebrow',
                                children: c.intl.string(c.t['5qyruL'])
                            }),
                            b
                                ? (0, i.jsx)(s.$jN, {
                                      type: s.$jN.Type.PULSING_ELLIPSIS,
                                      className: u.spinner
                                  })
                                : f.length > 0
                                  ? (0, i.jsx)(s.VcW, {
                                        options: f,
                                        value: p,
                                        onChange: j,
                                        renderOptionPrefix: (e) => {
                                            let n = null == e ? void 0 : e.value,
                                                t = null != n ? a.Z.getGuild(n) : null;
                                            return null == t
                                                ? null
                                                : (0, i.jsx)(r.Z, {
                                                      guild: t,
                                                      size: r.Z.Sizes.MINI
                                                  });
                                        },
                                        renderOptionLabel: (e) => {
                                            let { label: n, value: t } = e;
                                            return (0, i.jsxs)('div', {
                                                children: [
                                                    (0, i.jsx)(s.Text, {
                                                        variant: 'text-md/normal',
                                                        children: n
                                                    }),
                                                    t === h &&
                                                        (0, i.jsx)(s.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-secondary',
                                                            children: c.intl.string(c.t.RjtuAA)
                                                        })
                                                ]
                                            });
                                        }
                                    })
                                  : (0, i.jsx)(s.Wn, {
                                        messageType: s.QYI.WARNING,
                                        children: (0, i.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            children: c.intl.string(c.t.M2TbbG)
                                        })
                                    })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)(s.mzw, {
                className: u.footer,
                children: [
                    (0, i.jsx)(s.zxk, {
                        look: s.zxk.Looks.BLANK,
                        size: s.zxk.Sizes.MIN,
                        className: u.closeBtn,
                        onClick: t,
                        children: c.intl.string(c.t.cpT0Cg)
                    }),
                    (0, i.jsx)(s.zxk, {
                        size: s.zxk.Sizes.SMALL,
                        disabled: null == p,
                        onClick: function () {
                            null != p && (m(p), t());
                        },
                        children: c.intl.string(c.t['cY+Ooa'])
                    })
                ]
            })
        ]
    });
}
