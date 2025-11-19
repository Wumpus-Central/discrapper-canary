n.d(t, { default: () => w }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(512722),
    o = n.n(l),
    s = n(990547),
    a = n(793030),
    c = n(442837),
    d = n(16030),
    u = n(481060),
    f = n(668781),
    p = n(494620),
    g = n(961842),
    C = n(254238),
    h = n(258609),
    v = n(388032),
    b = n(269441),
    O = n(505913);
let j = (0, d.G)(g.Z);
function m(e) {
    let { devices: t, selectedDeviceId: n, onSelectDeviceId: i } = e,
        l = t.map((e) => {
            let { id: t, name: n } = e;
            return {
                value: t,
                name: n,
                leadingIcon: j,
            };
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.FXm, {
                value: n,
                options: l,
                onChange: (e) => i(e),
            }),
            (0, r.jsx)(p.Z, { children: v.intl.string(v.t.dI4HFq) }),
        ],
    });
}
function y() {
    return (0, r.jsx)("div", {
        className: b.emptyArt,
        children: (0, r.jsx)("img", {
            src: O,
            width: "189",
            height: "177",
            alt: "",
        }),
    });
}
function w(e) {
    let t,
        n,
        l,
        d,
        { channel: p, platform: g, transitionState: O, onClose: j } = e,
        w = (0, c.e7)([h.default], () => h.default.getDevicesForPlatform(g), [g]),
        x = (0, c.e7)([h.default], () => h.default.getLastSelectedDeviceByPlatform(g)),
        P = i.useMemo(() => Object.values(w), [w]),
        S = (0, c.e7)([h.default], () => h.default.getFetchingDevices(g)),
        D = (0, c.e7)([h.default], () => {
            var e;
            return null == (e = h.default.getAwaitingRemoteSessionInfo()) ? void 0 : e.deviceId;
        }),
        [N, k] = i.useState(!1),
        [I, Z] = i.useState(() => {
            var e, t;
            return null != (t = null == (e = w[null != D ? D : ""]) ? void 0 : e.id) ? t : null;
        });
    i.useEffect(() => {
        C.LO(g);
    }, [g]),
        i.useEffect(() => {
            1 === P.length ? Z(P[0].id) : null != x && Z(x);
        }, [P, x]);
    let E = async () => {
        let e = w[null != I ? I : ""];
        o()(null != e, "Cannot transfer without selected device");
        try {
            k(!0), await C.sh(g, e.id, p), j();
        } catch (t) {
            k(!1),
                f.Z.show({
                    title: v.intl.string(v.t.QL1y93),
                    body: v.intl.formatToPlainString(v.t["6ZyNH/"], { deviceName: e.name }),
                });
        }
    };
    return (
        S
            ? ((n = v.intl.string(v.t["+d9SH8"])),
              (t = (0, r.jsx)("div", {
                  className: b.spinnerContainer,
                  children: (0, r.jsx)(u.$jN, {}),
              })))
            : 0 === P.length
              ? ((n = v.intl.string(v.t.OkJf1e)), (l = v.intl.string(v.t["of/l5Z"])), (t = (0, r.jsx)(y, {})))
              : ((n = v.intl.string(v.t["+d9SH8"])),
                (l = v.intl.string(v.t["5DtaWg"])),
                (d = [
                    {
                        text: v.intl.string(v.t.FJR4bD),
                        onClick: E,
                        loading: N || null != D,
                        disabled: null == I,
                    },
                ]),
                (t = (0, r.jsx)(m, {
                    devices: P,
                    selectedDeviceId: I,
                    onSelectDeviceId: (e) => {
                        Z(e), (0, C.bp)(g, e);
                    },
                }))),
        (0, r.jsx)(a.Modal, {
            title: n,
            subtitle: l,
            actions: d,
            transitionState: O,
            trackingProps: { impression: { impressionName: s.ImpressionNames.GAME_CONSOLE_DEVICE_LIST } },
            onClose: j,
            children: t,
        })
    );
}
