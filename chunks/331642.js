n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(692547),
    a = n(481060),
    o = n(596454),
    c = n(594174),
    d = n(74538),
    u = n(242291),
    m = n(830253),
    h = n(792165),
    g = n(409673),
    _ = n(603074),
    x = n(388032),
    p = n(477733);
function E(e) {
    let { onSelect: t } = e,
        [n, l] = s.useState(!1),
        o = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        u = d.ZP.canUseCustomCallSounds(o);
    function m(e) {
        u && (l(!1), null == t || t(e));
    }
    return (0, i.jsx)(a.yRy, {
        shouldShow: n,
        position: 'left',
        onRequestClose: () => l(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(a.VqE, {
                children: (0, i.jsx)(_.Z, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: m,
                    gridNotice: u ? null : (0, i.jsx)(h.o, {}),
                    analyticsSource: 'call sounds edit setting'
                })
            });
        },
        children: (e) =>
            (0, i.jsx)(g.hU, {
                ...e,
                onClick: () => {
                    l(!n);
                },
                text: x.intl.string(x.t.uOe0Aw),
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
        { previewSound: n } = (0, m.Z)(t, null),
        s =
            0 === (0, u.pI)()
                ? x.intl.string(x.t.OASXjo)
                : x.intl.formatToPlainString(x.t['/8fYOz'], {
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
        r = null != t,
        c = null == t ? void 0 : t.emojiId,
        d = null == t ? void 0 : t.emojiName,
        u = r && (null != d || null != c);
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
                                ? x.intl.string(x.t.PoWNfX)
                                : n
                                  ? x.intl.format(x.t.B6HU6O, {
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
                    r
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
                    r &&
                        !n &&
                        (0, i.jsx)(g.hU, {
                            onClick: () => s(null),
                            text: x.intl.string(x.t.jmtcGB),
                            children: (0, i.jsx)(a.XHJ, {
                                size: 'md',
                                color: l.Z.unsafe_rawColors.RED_400.css,
                                className: p.secondaryIcon
                            })
                        })
                ]
            })
        ]
    });
}
