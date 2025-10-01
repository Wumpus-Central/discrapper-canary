n.d(t, { default: () => x }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(512722),
    s = n.n(l),
    o = n(990547),
    a = n(793030),
    c = n(442837),
    d = n(755721),
    u = n(481060),
    f = n(668781),
    p = n(494620),
    v = n(961842),
    m = n(254238),
    h = n(258609),
    g = n(388032),
    C = n(163589),
    b = n(505913);
function j(e) {
    let { name: t, subText: n } = e;
    return (0, i.jsxs)("div", {
        className: C.deviceItemName,
        children: [
            (0, i.jsx)(v.Z, { className: C.deviceItemIcon }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        color: "interactive-active",
                        children: t,
                    }),
                    n,
                ],
            }),
        ],
    });
}
function O(e) {
    let { devices: t, selectedDeviceId: n, onSelectDeviceId: r } = e,
        l = t.map((e) => {
            let { id: t, name: n, platform: r } = e;
            return {
                value: t,
                name: (0, i.jsx)(j, {
                    name: n,
                    platform: r,
                }),
            };
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Gu, {
                radioPosition: "right",
                radioItemClassName: C.deviceItem,
                size: d.l7.NOT_SET,
                value: n,
                options: l,
                onChange: (e) => {
                    let { value: t } = e;
                    return r(t);
                },
            }),
            (0, i.jsx)(p.Z, { children: g.intl.string(g.t.dI4HFh) }),
        ],
    });
}
function y() {
    return (0, i.jsx)("div", {
        className: C.emptyArt,
        children: (0, i.jsx)("img", {
            src: b,
            width: "189",
            height: "177",
            alt: "",
        }),
    });
}
function x(e) {
    let t,
        n,
        l,
        d,
        { channel: p, platform: v, transitionState: b, onClose: j } = e,
        x = (0, c.e7)([h.Z], () => h.Z.getDevicesForPlatform(v), [v]),
        I = (0, c.e7)([h.Z], () => h.Z.getLastSelectedDeviceByPlatform(v)),
        w = r.useMemo(() => Object.values(x), [x]),
        N = (0, c.e7)([h.Z], () => h.Z.getFetchingDevices(v)),
        P = (0, c.e7)([h.Z], () => {
            var e;
            return null == (e = h.Z.getAwaitingRemoteSessionInfo()) ? void 0 : e.deviceId;
        }),
        [S, Z] = r.useState(!1),
        [_, D] = r.useState(() => {
            var e, t;
            return null != (t = null == (e = x[null != P ? P : ""]) ? void 0 : e.id) ? t : null;
        });
    r.useEffect(() => {
        m.LO(v);
    }, [v]),
        r.useEffect(() => {
            1 === w.length ? D(w[0].id) : null != I && D(I);
        }, [w, I]);
    let k = async () => {
        let e = x[null != _ ? _ : ""];
        s()(null != e, "Cannot transfer without selected device");
        try {
            Z(!0), await m.sh(v, e.id, p), j();
        } catch (t) {
            Z(!1),
                f.Z.show({
                    title: g.intl.string(g.t["QL1y9/"]),
                    body: g.intl.formatToPlainString(g.t["6ZyNHx"], { deviceName: e.name }),
                });
        }
    };
    return (
        N
            ? ((n = g.intl.string(g.t["+d9SHx"])),
              (t = (0, i.jsx)("div", {
                  className: C.spinnerContainer,
                  children: (0, i.jsx)(u.$jN, {}),
              })))
            : 0 === w.length
              ? ((n = g.intl.string(g.t.OkJf1d)), (l = g.intl.string(g.t["of/l5e"])), (t = (0, i.jsx)(y, {})))
              : ((n = g.intl.string(g.t["+d9SHx"])),
                (l = g.intl.string(g.t["5DtaWl"])),
                (d = [
                    {
                        text: g.intl.string(g.t.FJR4bG),
                        onClick: k,
                        loading: S || null != P,
                        disabled: null == _,
                    },
                ]),
                (t = (0, i.jsx)(O, {
                    devices: w,
                    selectedDeviceId: _,
                    onSelectDeviceId: (e) => {
                        D(e), (0, m.bp)(v, e);
                    },
                }))),
        (0, i.jsx)(a.Modal, {
            title: n,
            subtitle: l,
            actions: d,
            transitionState: b,
            trackingProps: { impression: { impressionName: o.ImpressionNames.GAME_CONSOLE_DEVICE_LIST } },
            onClose: j,
            children: t,
        })
    );
}
