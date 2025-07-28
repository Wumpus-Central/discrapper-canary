(n.d(t, { default: () => y }), n(388685));
var i = n(255367),
    r = n(73800),
    l = n(512722),
    s = n.n(l),
    o = n(990547),
    a = n(442837),
    c = n(82659),
    d = n(481060),
    u = n(668781),
    f = n(494620),
    m = n(961842),
    p = n(254238),
    v = n(258609),
    h = n(388032),
    g = n(285990),
    C = n(505913);
function b(e) {
    let { name: t, subText: n } = e;
    return (0, i.jsxs)('div', {
        className: g.deviceItemName,
        children: [
            (0, i.jsx)(m.Z, { className: g.deviceItemIcon }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(d.Text, {
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
function j(e) {
    let { devices: t, selectedDeviceId: n, onSelectDeviceId: r } = e,
        l = t.map((e) => {
            let { id: t, name: n, platform: r } = e;
            return {
                value: t,
                name: (0, i.jsx)(b, {
                    name: n,
                    platform: r
                })
            };
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.FXm, {
                radioPosition: 'right',
                radioItemClassName: g.deviceItem,
                size: d.FXm.Sizes.NOT_SET,
                value: n,
                options: l,
                onChange: (e) => {
                    let { value: t } = e;
                    return r(t);
                }
            }),
            (0, i.jsx)(f.Z, { children: h.intl.string(h.t.dI4HFh) })
        ]
    });
}
function O() {
    return (0, i.jsx)('div', {
        className: g.emptyArt,
        children: (0, i.jsx)('img', {
            src: C,
            width: '189',
            height: '177',
            alt: ''
        })
    });
}
function y(e) {
    let t,
        n,
        l,
        f,
        { channel: m, platform: C, transitionState: b, onClose: y } = e,
        x = (0, a.e7)([v.Z], () => v.Z.getDevicesForPlatform(C), [C]),
        I = (0, a.e7)([v.Z], () => v.Z.getLastSelectedDeviceByPlatform(C)),
        w = r.useMemo(() => Object.values(x), [x]),
        S = (0, a.e7)([v.Z], () => v.Z.getFetchingDevices(C)),
        N = (0, a.e7)([v.Z], () => {
            var e;
            return null == (e = v.Z.getAwaitingRemoteSessionInfo()) ? void 0 : e.deviceId;
        }),
        [P, Z] = r.useState(!1),
        [_, D] = r.useState(() => {
            var e, t;
            return null != (t = null == (e = x[null != N ? N : '']) ? void 0 : e.id) ? t : null;
        });
    (r.useEffect(() => {
        p.LO(C);
    }, [C]),
        r.useEffect(() => {
            1 === w.length ? D(w[0].id) : null != I && D(I);
        }, [w, I]));
    let k = async () => {
        let e = x[null != _ ? _ : ''];
        s()(null != e, 'Cannot transfer without selected device');
        try {
            (Z(!0), await p.sh(C, e.id, m), y());
        } catch (t) {
            (Z(!1),
                u.Z.show({
                    title: h.intl.string(h.t['QL1y9/']),
                    body: h.intl.formatToPlainString(h.t['6ZyNHx'], { deviceName: e.name })
                }));
        }
    };
    return (
        S
            ? ((n = h.intl.string(h.t['+d9SHx'])),
              (t = (0, i.jsx)('div', {
                  className: g.spinnerContainer,
                  children: (0, i.jsx)(d.$jN, {})
              })))
            : 0 === w.length
              ? ((n = h.intl.string(h.t.OkJf1d)), (l = h.intl.string(h.t['of/l5e'])), (t = (0, i.jsx)(O, {})))
              : ((n = h.intl.string(h.t['+d9SHx'])),
                (l = h.intl.string(h.t['5DtaWl'])),
                (f = [
                    {
                        text: h.intl.string(h.t.FJR4bG),
                        onClick: k,
                        loading: P || null != N,
                        disabled: null == _
                    }
                ]),
                (t = (0, i.jsx)(j, {
                    devices: w,
                    selectedDeviceId: _,
                    onSelectDeviceId: (e) => {
                        (D(e), (0, p.bp)(C, e));
                    }
                }))),
        (0, i.jsx)(c.Modal, {
            title: n,
            subtitle: l,
            actions: f,
            transitionState: b,
            trackingProps: { impression: { impressionName: o.ImpressionNames.GAME_CONSOLE_DEVICE_LIST } },
            onClose: y,
            children: t
        })
    );
}
