r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(692547),
    l = r(481060),
    u = r(697426),
    c = r(603074),
    d = r(388032),
    f = r(677635);
let p = [54, 8, 8, 8];
function h(e) {
    let { onSelect: n, sound: r } = e,
        [i, h] = o.useState(!1);
    function _(e) {
        h(!1), null == n || n(e);
    }
    let m = (e) =>
        (0, a.jsxs)('div', {
            className: f.customGiftHeader,
            children: [
                (0, a.jsxs)('div', {
                    className: f.__invalid_customGiftHeaderText,
                    children: [
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/bold',
                            children: d.intl.string(d.t.aThJz8)
                        }),
                        (0, a.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: d.intl.string(d.t.stGFAw)
                        })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: f.searchAndSound,
                    children: e
                })
            ]
        });
    return (0, a.jsx)(l.Popout, {
        shouldShow: i,
        position: 'bottom',
        align: 'left',
        onRequestClose: () => h(!1),
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, a.jsx)(l.Dialog, {
                children: (0, a.jsx)(c.Z, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: n,
                    onSelect: _,
                    analyticsSource: 'gift soundboard',
                    soundButtonOverlay: u.Pb.ADD,
                    listPadding: p,
                    renderHeader: m,
                    defaultSoundsOnly: !0
                })
            });
        },
        children: () =>
            (0, a.jsx)(l.Clickable, {
                className: f.sound,
                onClick: () => h(!0),
                children:
                    null == r
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(l.SoundboardIcon, {
                                      size: 'custom',
                                      color: s.Z.colors.WHITE,
                                      className: f.soundIcon,
                                      width: 14,
                                      height: 14
                                  }),
                                  (0, a.jsx)(l.Text, {
                                      className: f.text,
                                      variant: 'text-sm/semibold',
                                      children: d.intl.string(d.t.aThJz8)
                                  })
                              ]
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(l.Text, {
                                      className: f.textSelected,
                                      variant: 'text-sm/semibold',
                                      children: r.emojiName
                                  }),
                                  (0, a.jsx)(l.Text, {
                                      className: f.text,
                                      variant: 'text-sm/semibold',
                                      children: r.name
                                  })
                              ]
                          })
            })
    });
}
function _(e) {
    let { sound: n, onSelect: r } = e;
    return (0, a.jsx)('div', {
        className: f.container,
        children: (0, a.jsx)(h, {
            onSelect: r,
            sound: n
        })
    });
}
