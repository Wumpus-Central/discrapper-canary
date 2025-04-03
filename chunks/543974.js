n.d(t, { default: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(512722),
    l = n.n(a),
    s = n(990547),
    o = n(442837),
    c = n(481060),
    d = n(668781),
    m = n(494620),
    u = n(961842),
    f = n(254238),
    h = n(258609),
    p = n(388032),
    v = n(285990),
    j = n(505913);
function x(e) {
    let { name: t, subText: n } = e;
    return (0, r.jsxs)('div', {
        className: v.deviceItemName,
        children: [
            (0, r.jsx)(u.Z, { className: v.deviceItemIcon }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: 'text-md/semibold',
                        color: 'interactive-active',
                        children: t
                    }),
                    n
                ]
            })
        ]
    });
}
function C(e) {
    let { devices: t, onFinished: n, selectedDeviceId: i, onSelectDeviceId: a, transferring: l } = e,
        s = t.map((e) => {
            let { id: t, name: n, platform: i } = e;
            return {
                value: t,
                name: (0, r.jsx)(x, {
                    name: n,
                    platform: i
                })
            };
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(c.xBx, {
                separator: !1,
                className: v.modalHeaderContainer,
                children: [
                    (0, r.jsx)(c.X6q, {
                        className: v.modalHeader,
                        color: 'header-primary',
                        variant: 'heading-xl/bold',
                        children: p.NW.string(p.t['+d9SHx'])
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: p.NW.string(p.t['5DtaWl'])
                    })
                ]
            }),
            (0, r.jsxs)(c.hzk, {
                className: v.content,
                children: [
                    (0, r.jsx)(c.FXm, {
                        radioPosition: 'right',
                        radioItemClassName: v.deviceItem,
                        size: c.FXm.Sizes.NOT_SET,
                        value: i,
                        options: s,
                        onChange: (e) => {
                            let { value: t } = e;
                            return a(t);
                        }
                    }),
                    (0, r.jsx)(m.Z, { children: p.NW.string(p.t.dI4HFh) })
                ]
            }),
            (0, r.jsx)(c.mzw, {
                children: (0, r.jsx)(c.zxk, {
                    disabled: null == i,
                    submitting: l,
                    onClick: n,
                    children: p.NW.string(p.t.FJR4bG)
                })
            })
        ]
    });
}
function g() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(c.xBx, {
                separator: !1,
                className: v.modalHeaderContainer,
                children: [
                    (0, r.jsx)(c.X6q, {
                        className: v.modalHeader,
                        color: 'header-primary',
                        variant: 'heading-xl/bold',
                        children: p.NW.string(p.t.OkJf1d)
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: p.NW.string(p.t['of/l5e'])
                    })
                ]
            }),
            (0, r.jsx)(c.hzk, {
                className: v.emptyArt,
                children: (0, r.jsx)('img', {
                    src: j,
                    width: '189',
                    height: '177',
                    alt: ''
                })
            })
        ]
    });
}
function b(e) {
    let t,
        { channel: n, platform: a, transitionState: m, onClose: u } = e,
        j = (0, o.e7)([h.Z], () => h.Z.getDevicesForPlatform(a), [a]),
        x = (0, o.e7)([h.Z], () => h.Z.getLastSelectedDeviceByPlatform(a)),
        b = i.useMemo(() => Object.values(j), [j]),
        y = (0, o.e7)([h.Z], () => h.Z.getFetchingDevices(a)),
        O = (0, o.e7)([h.Z], () => {
            var e;
            return null == (e = h.Z.getAwaitingRemoteSessionInfo()) ? void 0 : e.deviceId;
        }),
        [N, _] = i.useState(!1),
        [I, w] = i.useState(() => {
            var e, t;
            return null != (t = null == (e = j[null != O ? O : '']) ? void 0 : e.id) ? t : null;
        });
    i.useEffect(() => {
        f.LO(a);
    }, [a]),
        i.useEffect(() => {
            1 === b.length ? w(b[0].id) : null != x && w(x);
        }, [b, x]);
    let S = async () => {
        let e = j[null != I ? I : ''];
        l()(null != e, 'Cannot transfer without selected device');
        try {
            _(!0), await f.sh(a, e.id, n), u();
        } catch (t) {
            _(!1),
                d.Z.show({
                    title: p.NW.string(p.t['QL1y9/']),
                    body: p.NW.formatToPlainString(p.t['6ZyNHx'], { deviceName: e.name })
                });
        }
    };
    return (
        (t = y
            ? (0, r.jsx)('div', {
                  className: v.spinnerContainer,
                  children: (0, r.jsx)(c.$jN, {})
              })
            : 0 === b.length
              ? (0, r.jsx)(g, {})
              : (0, r.jsx)(C, {
                    devices: b,
                    onFinished: S,
                    selectedDeviceId: I,
                    transferring: N || null != O,
                    onSelectDeviceId: (e) => {
                        w(e), (0, f.bp)(a, e);
                    }
                })),
        (0, r.jsxs)(c.Y0X, {
            size: c.CgR.DYNAMIC,
            className: v.modalRoot,
            transitionState: m,
            impression: { impressionName: s.ImpressionNames.GAME_CONSOLE_DEVICE_LIST },
            children: [
                t,
                (0, r.jsx)(c.olH, {
                    className: v.closeButton,
                    onClick: u
                })
            ]
        })
    );
}
