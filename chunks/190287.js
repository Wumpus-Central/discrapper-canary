n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(596454),
    d = n(318766),
    u = n(907040),
    m = n(456268),
    h = n(999382),
    g = n(185923),
    x = n(388032),
    p = n(778916);
let f = (e) => {
    var t;
    let { reason: n = '', emoji_name: l, onSetReason: m, onSelectEmoji: x, onClearPressed: f, reasonMinLength: C, reasonMaxLength: v, placeholder: _, position: N } = e,
        [I, T] = r.useState(!1),
        j = (0, s.e7)([h.Z], () => h.Z.isGuildMetadataLoaded());
    return (0, i.jsxs)('div', {
        className: a()(p.reasonContainer),
        children: [
            (0, i.jsx)(o.Popout, {
                onRequestClose: () => {
                    T(!1);
                },
                shouldShow: I,
                position: 'right',
                align: 'top',
                animation: o.Popout.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(u.Z, {
                        pickerIntention: g.Hz.COMMUNITY_CONTENT,
                        closePopout: t,
                        onSelectEmoji: (e, n) => {
                            null != e && x(e), n && t();
                        }
                    });
                },
                children: () =>
                    (0, i.jsx)('div', {
                        className: p.background,
                        children: (0, i.jsx)(d.Z, {
                            active: !1,
                            onClick: () => {
                                T(!0);
                            },
                            tabIndex: 0,
                            renderButtonContents:
                                null != l
                                    ? () =>
                                          (0, i.jsx)(c.Z, {
                                              emojiName: l,
                                              animated: !1
                                          })
                                    : null
                        })
                    })
            }),
            (0, i.jsxs)('div', {
                className: p.inputContainer,
                children: [
                    (0, i.jsx)(
                        o.TextInput,
                        {
                            inputClassName: p.reason,
                            placeholder: _,
                            value: n,
                            minLength: C,
                            maxLength: v,
                            onChange: (e) => {
                                m(e);
                            },
                            defaultDirty: (null == n ? void 0 : n.length) > 0
                        },
                        'text-input-'.concat(N, '-').concat(j)
                    ),
                    (null !== (t = null == n ? void 0 : n.length) && void 0 !== t ? t : 0) > 0 || null != l
                        ? (0, i.jsx)(o.Button, {
                              className: p.clearStatusButton,
                              onClick: f,
                              look: o.Button.Looks.BLANK,
                              size: o.Button.Sizes.NONE,
                              tabIndex: -1,
                              'aria-hidden': !0,
                              children: (0, i.jsx)(o.CircleXIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: p.clearStatusIcon
                              })
                          })
                        : null
                ]
            })
        ]
    });
};
t.Z = (e) => {
    let { reasonMinLength: t, reasonMaxLength: n, guildId: r, reasons: l } = e,
        a = [x.intl.string(x.t['9dhBGh']), x.intl.string(x.t['8RmhKC']), x.intl.string(x.t['2t0V8/']), x.intl.string(x.t.l8WqCQ)],
        s = [];
    for (let e = 0; e < 4; e++)
        s.push(
            (0, i.jsx)(
                f,
                {
                    position: e,
                    placeholder: a[e],
                    ...l[e],
                    onSetReason: (t) => {
                        let n = [...l],
                            i = Object.assign({}, l[e], { reason: t });
                        (n[e] = i), (0, m.P$)(r, n);
                    },
                    onSelectEmoji: (t) => {
                        let n = [...l],
                            i = Object.assign({}, l[e], { emoji_name: t.optionallyDiverseSequence });
                        (n[e] = i), (0, m.P$)(r, n);
                    },
                    onClearPressed: () => {
                        let t = [...l],
                            n = {
                                reason: '',
                                emoji_name: null
                            };
                        (t[e] = n), (0, m.P$)(r, t);
                    },
                    reasonMinLength: t,
                    reasonMaxLength: n
                },
                'reasonListItem-' + e
            )
        );
    return (0, i.jsx)('div', { children: s });
};
