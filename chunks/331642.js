n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(692547),
    l = n(481060),
    o = n(596454),
    c = n(594174),
    d = n(74538),
    u = n(242291),
    m = n(706667),
    g = n(792165),
    h = n(409673),
    p = n(603074),
    x = n(388032),
    f = n(264019);
function _(e) {
    let { onSelect: t } = e,
        [n, a] = r.useState(!1),
        o = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        u = d.ZP.canUseCustomCallSounds(o);
    function m(e) {
        u && (a(!1), null == t || t(e));
    }
    return (0, i.jsx)(l.Popout, {
        shouldShow: n,
        position: 'left',
        onRequestClose: () => a(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(l.Dialog, {
                children: (0, i.jsx)(p.Z, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: m,
                    gridNotice: u ? null : (0, i.jsx)(g.o, {}),
                    analyticsSource: 'call sounds edit setting'
                })
            });
        },
        children: (e) =>
            (0, i.jsx)(h.hU, {
                ...e,
                onClick: () => {
                    a(!n);
                },
                text: x.intl.string(x.t.uOe0Aw),
                children: (0, i.jsx)(l.PencilIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: f.secondaryIcon
                })
            })
    });
}
function E(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, m.Z)(t, null),
        r =
            0 === (0, u.pI)()
                ? x.intl.string(x.t.OASXjo)
                : x.intl.formatToPlainString(x.t['/8fYOz'], {
                      emojiName: t.emojiName,
                      soundName: t.name
                  });
    return (0, i.jsx)(h.hU, {
        onClick: n,
        text: r,
        children: (0, i.jsx)(l.VoiceNormalIcon, {
            size: 'md',
            color: 'currentColor',
            className: f.secondaryIconActive
        })
    });
}
function C(e) {
    let { sound: t, isGlobal: n, onSelect: r } = e,
        s = null != t,
        c = null == t ? void 0 : t.emojiId,
        d = null == t ? void 0 : t.emojiName,
        u = s && (null != d || null != c),
        m = (e) =>
            (0, i.jsx)(l.Text, {
                variant: 'text-xs/medium',
                color: 'header-secondary',
                tag: 'span',
                children: e
            });
    return (0, i.jsxs)('div', {
        className: f.soundButtonSettingContainer,
        children: [
            (0, i.jsxs)('div', {
                className: f.container,
                children: [
                    u &&
                        (0, i.jsx)(o.Z, {
                            emojiId: c,
                            emojiName: d,
                            className: f.emoji
                        }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-primary',
                        className: f.soundText,
                        children:
                            null == t
                                ? x.intl.string(x.t.PoWNfX)
                                : n
                                  ? x.intl.format(x.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: m
                                    })
                                  : t.name
                    }),
                    s
                        ? (0, i.jsx)(E, { sound: t })
                        : (0, i.jsx)(l.VoiceNormalIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: f.secondaryIconDisabled
                          })
                ]
            }),
            (0, i.jsxs)('div', {
                className: f.container,
                children: [
                    (0, i.jsx)(_, { onSelect: r }),
                    s &&
                        !n &&
                        (0, i.jsx)(h.hU, {
                            onClick: () => r(null),
                            text: x.intl.string(x.t.jmtcGB),
                            children: (0, i.jsx)(l.TrashIcon, {
                                size: 'md',
                                color: a.Z.unsafe_rawColors.RED_400.css,
                                className: f.secondaryIcon
                            })
                        })
                ]
            })
        ]
    });
}
