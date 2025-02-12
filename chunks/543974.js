t.d(n, { default: () => N }), t(47120);
var i = t(200651),
    a = t(192379),
    r = t(512722),
    s = t.n(r),
    l = t(990547),
    o = t(442837),
    d = t(481060),
    c = t(668781),
    m = t(494620),
    u = t(961842),
    f = t(254238),
    x = t(258609),
    h = t(388032),
    v = t(781010),
    C = t(505913);
function g(e) {
    let { name: n, subText: t } = e;
    return (0, i.jsxs)('div', {
        className: v.deviceItemName,
        children: [
            (0, i.jsx)(u.Z, { className: v.deviceItemIcon }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: 'text-md/semibold',
                        color: 'interactive-active',
                        children: n
                    }),
                    t
                ]
            })
        ]
    });
}
function j(e) {
    let { devices: n, onFinished: t, selectedDeviceId: a, onSelectDeviceId: r, transferring: s } = e,
        l = n.map((e) => {
            let { id: n, name: t, platform: a } = e;
            return {
                value: n,
                name: (0, i.jsx)(g, {
                    name: t,
                    platform: a
                })
            };
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.xBx, {
                separator: !1,
                className: v.modalHeaderContainer,
                children: [
                    (0, i.jsx)(d.X6q, {
                        className: v.modalHeader,
                        color: 'header-primary',
                        variant: 'heading-xl/bold',
                        children: h.intl.string(h.t['+d9SHx'])
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: h.intl.string(h.t['5DtaWl'])
                    })
                ]
            }),
            (0, i.jsxs)(d.hzk, {
                className: v.content,
                children: [
                    (0, i.jsx)(d.FXm, {
                        radioPosition: 'right',
                        radioItemClassName: v.deviceItem,
                        size: d.FXm.Sizes.NOT_SET,
                        value: a,
                        options: l,
                        onChange: (e) => {
                            let { value: n } = e;
                            return r(n);
                        }
                    }),
                    (0, i.jsx)(m.Z, { children: h.intl.string(h.t.dI4HFh) })
                ]
            }),
            (0, i.jsx)(d.mzw, {
                children: (0, i.jsx)(d.zxk, {
                    disabled: null == a,
                    submitting: s,
                    onClick: t,
                    children: h.intl.string(h.t.FJR4bG)
                })
            })
        ]
    });
}
function p() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.xBx, {
                separator: !1,
                className: v.modalHeaderContainer,
                children: [
                    (0, i.jsx)(d.X6q, {
                        className: v.modalHeader,
                        color: 'header-primary',
                        variant: 'heading-xl/bold',
                        children: h.intl.string(h.t.OkJf1d)
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: h.intl.string(h.t['of/l5e'])
                    })
                ]
            }),
            (0, i.jsx)(d.hzk, {
                className: v.emptyArt,
                children: (0, i.jsx)('img', {
                    src: C,
                    width: '189',
                    height: '177',
                    alt: ''
                })
            })
        ]
    });
}
function N(e) {
    let n,
        { channel: t, platform: r, transitionState: m, onClose: u } = e,
        C = (0, o.e7)([x.Z], () => x.Z.getDevicesForPlatform(r), [r]),
        g = (0, o.e7)([x.Z], () => x.Z.getLastSelectedDeviceByPlatform(r)),
        N = a.useMemo(() => Object.values(C), [C]),
        _ = (0, o.e7)([x.Z], () => x.Z.getFetchingDevices(r)),
        I = (0, o.e7)([x.Z], () => {
            var e;
            return null === (e = x.Z.getAwaitingRemoteSessionInfo()) || void 0 === e ? void 0 : e.deviceId;
        }),
        [Z, w] = a.useState(!1),
        [b, y] = a.useState(() => {
            var e, n;
            return null !== (n = null === (e = C[null != I ? I : '']) || void 0 === e ? void 0 : e.id) && void 0 !== n ? n : null;
        });
    a.useEffect(() => {
        f.LO(r);
    }, [r]),
        a.useEffect(() => {
            1 === N.length ? y(N[0].id) : null != g && y(g);
        }, [N, g]);
    let R = async () => {
        let e = C[null != b ? b : ''];
        s()(null != e, 'Cannot transfer without selected device');
        try {
            w(!0), await f.sh(r, e.id, t), u();
        } catch (n) {
            w(!1),
                c.Z.show({
                    title: h.intl.string(h.t['QL1y9/']),
                    body: h.intl.formatToPlainString(h.t['6ZyNHx'], { deviceName: e.name })
                });
        }
    };
    return (
        (n = _
            ? (0, i.jsx)('div', {
                  className: v.spinnerContainer,
                  children: (0, i.jsx)(d.$jN, {})
              })
            : 0 === N.length
              ? (0, i.jsx)(p, {})
              : (0, i.jsx)(j, {
                    devices: N,
                    onFinished: R,
                    selectedDeviceId: b,
                    transferring: Z || null != I,
                    onSelectDeviceId: (e) => {
                        y(e), (0, f.bp)(r, e);
                    }
                })),
        (0, i.jsxs)(d.Y0X, {
            size: d.CgR.DYNAMIC,
            className: v.modalRoot,
            transitionState: m,
            impression: { impressionName: l.ImpressionNames.GAME_CONSOLE_DEVICE_LIST },
            children: [
                n,
                (0, i.jsx)(d.olH, {
                    className: v.closeButton,
                    onClick: u
                })
            ]
        })
    );
}
