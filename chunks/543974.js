t.r(n),
    t.d(n, {
        default: function () {
            return N;
        }
    }),
    t(47120);
var i = t(200651),
    a = t(192379),
    r = t(512722),
    o = t.n(r),
    l = t(990547),
    d = t(442837),
    s = t(481060),
    c = t(668781),
    m = t(494620),
    u = t(961842),
    h = t(254238),
    v = t(258609),
    C = t(388032),
    x = t(491472),
    f = t(505913);
function g(e) {
    let { name: n, subText: t } = e;
    return (0, i.jsxs)('div', {
        className: x.deviceItemName,
        children: [
            (0, i.jsx)(u.Z, { className: x.deviceItemIcon }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(s.Text, {
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
function p(e) {
    let { devices: n, onFinished: t, selectedDeviceId: a, onSelectDeviceId: r, transferring: o } = e,
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
            (0, i.jsxs)(s.ModalHeader, {
                separator: !1,
                className: x.modalHeaderContainer,
                children: [
                    (0, i.jsx)(s.Heading, {
                        className: x.modalHeader,
                        color: 'header-primary',
                        variant: 'heading-xl/bold',
                        children: C.intl.string(C.t['+d9SHx'])
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: C.intl.string(C.t['5DtaWl'])
                    })
                ]
            }),
            (0, i.jsxs)(s.ModalContent, {
                className: x.content,
                children: [
                    (0, i.jsx)(s.RadioGroup, {
                        radioPosition: 'right',
                        radioItemClassName: x.deviceItem,
                        size: s.RadioGroup.Sizes.NOT_SET,
                        value: a,
                        options: l,
                        onChange: (e) => {
                            let { value: n } = e;
                            return r(n);
                        }
                    }),
                    (0, i.jsx)(m.Z, { children: C.intl.string(C.t.dI4HFh) })
                ]
            }),
            (0, i.jsx)(s.ModalFooter, {
                children: (0, i.jsx)(s.Button, {
                    disabled: null == a,
                    submitting: o,
                    onClick: t,
                    children: C.intl.string(C.t.FJR4bG)
                })
            })
        ]
    });
}
function j() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.ModalHeader, {
                separator: !1,
                className: x.modalHeaderContainer,
                children: [
                    (0, i.jsx)(s.Heading, {
                        className: x.modalHeader,
                        color: 'header-primary',
                        variant: 'heading-xl/bold',
                        children: C.intl.string(C.t.OkJf1d)
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        children: C.intl.string(C.t['of/l5e'])
                    })
                ]
            }),
            (0, i.jsx)(s.ModalContent, {
                className: x.emptyArt,
                children: (0, i.jsx)('img', {
                    src: f,
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
        f = (0, d.e7)([v.Z], () => v.Z.getDevicesForPlatform(r), [r]),
        g = (0, d.e7)([v.Z], () => v.Z.getLastSelectedDeviceByPlatform(r)),
        N = a.useMemo(() => Object.values(f), [f]),
        I = (0, d.e7)([v.Z], () => v.Z.getFetchingDevices(r)),
        _ = (0, d.e7)([v.Z], () => {
            var e;
            return null === (e = v.Z.getAwaitingRemoteSessionInfo()) || void 0 === e ? void 0 : e.deviceId;
        }),
        [Z, w] = a.useState(!1),
        [H, R] = a.useState(() => {
            var e, n;
            return null !== (n = null === (e = f[null != _ ? _ : '']) || void 0 === e ? void 0 : e.id) && void 0 !== n ? n : null;
        });
    a.useEffect(() => {
        h.LO(r);
    }, [r]),
        a.useEffect(() => {
            1 === N.length ? R(N[0].id) : null != g && R(g);
        }, [N, g]);
    let M = async () => {
        let e = f[null != H ? H : ''];
        o()(null != e, 'Cannot transfer without selected device');
        try {
            w(!0), await h.sh(r, e.id, t), u();
        } catch (n) {
            w(!1),
                c.Z.show({
                    title: C.intl.string(C.t['QL1y9/']),
                    body: C.intl.formatToPlainString(C.t['6ZyNHx'], { deviceName: e.name })
                });
        }
    };
    return (
        (n = I
            ? (0, i.jsx)('div', {
                  className: x.spinnerContainer,
                  children: (0, i.jsx)(s.Spinner, {})
              })
            : 0 === N.length
              ? (0, i.jsx)(j, {})
              : (0, i.jsx)(p, {
                    devices: N,
                    onFinished: M,
                    selectedDeviceId: H,
                    transferring: Z || null != _,
                    onSelectDeviceId: (e) => {
                        R(e), (0, h.bp)(r, e);
                    }
                })),
        (0, i.jsxs)(s.ModalRoot, {
            size: s.ModalSize.DYNAMIC,
            className: x.modalRoot,
            transitionState: m,
            impression: { impressionName: l.ImpressionNames.GAME_CONSOLE_DEVICE_LIST },
            children: [
                n,
                (0, i.jsx)(s.ModalCloseButton, {
                    className: x.closeButton,
                    onClick: u
                })
            ]
        })
    );
}
