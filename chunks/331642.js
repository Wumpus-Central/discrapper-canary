n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(692547),
    a = n(481060),
    o = n(596454),
    c = n(594174),
    d = n(74538),
    u = n(242291),
    h = n(830253),
    m = n(792165),
    g = n(409673),
    x = n(603074),
    _ = n(388032),
    p = n(978135);
function E(e) {
    let { onSelect: t } = e,
        [n, r] = s.useState(!1),
        o = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        u = d.ZP.canUseCustomCallSounds(o);
    function h(e) {
        u && (r(!1), null == t || t(e));
    }
    return (0, i.jsx)(a.yRy, {
        shouldShow: n,
        position: 'left',
        onRequestClose: () => r(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(a.VqE, {
                children: (0, i.jsx)(x.Z, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: h,
                    gridNotice: u ? null : (0, i.jsx)(m.o, {}),
                    analyticsSource: 'call sounds edit setting'
                })
            });
        },
        children: (e) =>
            (0, i.jsx)(g.hU, {
                ...e,
                onClick: () => {
                    r(!n);
                },
                text: _.intl.string(_.t.uOe0Aw),
                children: (0, i.jsx)(a.vdY, {
                    size: 'md',
                    color: 'currentColor',
                    className: p.secondaryIcon
                })
            })
    });
}
function C(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, h.Z)(t, null),
        s =
            0 === (0, u.pI)()
                ? _.intl.string(_.t.OASXjo)
                : _.intl.formatToPlainString(_.t['/8fYOz'], {
                      emojiName: t.emojiName,
                      soundName: t.name
                  });
    return (0, i.jsx)(g.hU, {
        onClick: n,
        text: s,
        children: (0, i.jsx)(a.gj8, {
            size: 'md',
            color: 'currentColor',
            className: p.secondaryIconActive
        })
    });
}
function f(e) {
    let { sound: t, isGlobal: n, onSelect: s } = e,
        l = null != t,
        c = null == t ? void 0 : t.emojiId,
        d = null == t ? void 0 : t.emojiName,
        u = l && (null != d || null != c);
    return (0, i.jsxs)('div', {
        className: p.soundButtonSettingContainer,
        children: [
            (0, i.jsxs)('div', {
                className: p.container,
                children: [
                    u &&
                        (0, i.jsx)(o.Z, {
                            emojiId: c,
                            emojiName: d,
                            className: p.emoji
                        }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        className: p.soundText,
                        children:
                            null == t
                                ? _.intl.string(_.t.PoWNfX)
                                : n
                                  ? _.intl.format(_.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: (e) =>
                                            (0, i.jsx)(a.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'header-secondary',
                                                tag: 'span',
                                                children: e
                                            })
                                    })
                                  : t.name
                    }),
                    l
                        ? (0, i.jsx)(C, { sound: t })
                        : (0, i.jsx)(a.gj8, {
                              size: 'md',
                              color: 'currentColor',
                              className: p.secondaryIconDisabled
                          })
                ]
            }),
            (0, i.jsxs)('div', {
                className: p.container,
                children: [
                    (0, i.jsx)(E, { onSelect: s }),
                    l &&
                        !n &&
                        (0, i.jsx)(g.hU, {
                            onClick: () => s(null),
                            text: _.intl.string(_.t.jmtcGB),
                            children: (0, i.jsx)(a.XHJ, {
                                size: 'md',
                                color: r.Z.unsafe_rawColors.RED_400.css,
                                className: p.secondaryIcon
                            })
                        })
                ]
            })
        ]
    });
}
