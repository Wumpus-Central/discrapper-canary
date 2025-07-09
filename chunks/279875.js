(n.d(t, { GuildSubscriptionSelectionModal: () => m }), n(388685), n(290780), n(539854));
var i = n(255367),
    s = n(73800),
    l = n(755721),
    r = n(481060),
    a = n(565138),
    o = n(430824),
    d = n(270144),
    c = n(689011),
    u = n(388032),
    x = n(251216);
function m(e) {
    let { transitionState: t, onClose: n, sku: m, onSelect: p, currentGuildId: h } = e,
        [j, _] = s.useState(),
        { guilds: b, isFetching: g } = (0, d.CR)(m.applicationId, m.id, !0),
        f = s.useMemo(() => {
            if (!g && null != h)
                return (
                    b.findIndex((e) => {
                        let { id: t } = e;
                        return t === h;
                    }) >= 0
                );
        }, [h, b, g]);
    s.useLayoutEffect(() => {
        f && _(h);
    }, [h, f]);
    let v = s.useMemo(() => {
        let e = [];
        for (let t of b) {
            let n = {
                value: t.id,
                label: t.name
            };
            f && t.id === h ? e.unshift(n) : e.push(n);
        }
        return e;
    }, [h, b, f]);
    return (0, i.jsxs)(r.Y0X, {
        transitionState: t,
        size: r.CgR.SMALL,
        className: x.modal,
        parentComponent: 'GuildSubscriptionSelectionModal',
        children: [
            (0, i.jsx)(c.t, { onClose: n }),
            (0, i.jsxs)(r.hzk, {
                className: x.content,
                children: [
                    (0, i.jsx)(r.Text, {
                        variant: 'text-sm/medium',
                        className: x.breadCrumb,
                        children: u.intl.string(u.t['xgtI/P'])
                    }),
                    (0, i.jsxs)('div', {
                        className: x.selectionBody,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/medium',
                                children: u.intl.string(u.t.rAXXxM)
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'eyebrow',
                                children: u.intl.string(u.t['5qyruL'])
                            }),
                            g
                                ? (0, i.jsx)(r.$jN, {
                                      type: r.$jN.Type.PULSING_ELLIPSIS,
                                      className: x.spinner
                                  })
                                : v.length > 0
                                  ? (0, i.jsx)(r.VcW, {
                                        options: v,
                                        value: j,
                                        onChange: _,
                                        renderOptionPrefix: (e) => {
                                            let t = null == e ? void 0 : e.value,
                                                n = null != t ? o.Z.getGuild(t) : null;
                                            return null == n
                                                ? null
                                                : (0, i.jsx)(a.Z, {
                                                      guild: n,
                                                      size: a.Z.Sizes.MINI
                                                  });
                                        },
                                        renderOptionLabel: (e) => {
                                            let { label: t, value: n } = e;
                                            return (0, i.jsxs)('div', {
                                                children: [
                                                    (0, i.jsx)(r.Text, {
                                                        variant: 'text-md/normal',
                                                        children: t
                                                    }),
                                                    n === h &&
                                                        (0, i.jsx)(r.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-secondary',
                                                            children: u.intl.string(u.t.RjtuAA)
                                                        })
                                                ]
                                            });
                                        }
                                    })
                                  : (0, i.jsx)(r.Wn, {
                                        messageType: r.QYI.WARNING,
                                        children: (0, i.jsx)(r.Text, {
                                            variant: 'text-sm/normal',
                                            children: u.intl.string(u.t.M2TbbG)
                                        })
                                    })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)(r.mzw, {
                className: x.footer,
                children: [
                    (0, i.jsx)(l.zx, {
                        look: l.zx.Looks.BLANK,
                        size: l.zx.Sizes.MIN,
                        className: x.closeBtn,
                        onClick: n,
                        children: u.intl.string(u.t.cpT0Cg)
                    }),
                    (0, i.jsx)(r.zxk, {
                        variant: 'primary',
                        size: 'sm',
                        text: u.intl.string(u.t['cY+Ooa']),
                        disabled: null == j,
                        onClick: function () {
                            null != j && p(j);
                        }
                    })
                ]
            })
        ]
    });
}
