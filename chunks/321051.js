n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(692547),
    a = n(481060),
    s = n(697426),
    l = n(603074),
    c = n(388032),
    u = n(10123);
let d = [54, 8, 8, 8];
function f(e) {
    let { onSelect: t, sound: n } = e,
        [f, _] = i.useState(!1);
    function p(e) {
        _(!1), null == t || t(e);
    }
    let h = (e) =>
        (0, r.jsxs)('div', {
            className: u.customGiftHeader,
            children: [
                (0, r.jsxs)('div', {
                    className: u.__invalid_customGiftHeaderText,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: 'text-md/bold',
                            children: c.NW.string(c.t.aThJz8)
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: c.NW.string(c.t.stGFAw)
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: u.searchAndSound,
                    children: e
                })
            ]
        });
    return (0, r.jsx)(a.yRy, {
        shouldShow: f,
        position: 'bottom',
        align: 'left',
        onRequestClose: () => _(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(a.VqE, {
                children: (0, r.jsx)(l.Z, {
                    suppressPlaySound: !0,
                    shouldShowUpsell: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: p,
                    analyticsSource: 'gift soundboard',
                    soundButtonOverlay: s.Pb.ADD,
                    listPadding: d,
                    renderHeader: h,
                    defaultSoundsOnly: !0
                })
            });
        },
        children: () =>
            (0, r.jsx)(a.P3F, {
                className: u.sound,
                onClick: () => _(!0),
                children:
                    null == n
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(a.KY1, {
                                      size: 'custom',
                                      color: o.Z.colors.WHITE,
                                      className: u.soundIcon,
                                      width: 14,
                                      height: 14
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      className: u.text,
                                      variant: 'text-sm/semibold',
                                      children: c.NW.string(c.t.aThJz8)
                                  })
                              ]
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(a.Text, {
                                      className: u.textSelected,
                                      variant: 'text-sm/semibold',
                                      children: n.emojiName
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      className: u.text,
                                      variant: 'text-sm/semibold',
                                      children: n.name
                                  })
                              ]
                          })
            })
    });
}
function _(e) {
    let { sound: t, onSelect: n } = e;
    return (0, r.jsx)('div', {
        className: u.container,
        children: (0, r.jsx)(f, {
            onSelect: n,
            sound: t
        })
    });
}
