n.d(t, { default: () => w }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(284009),
    o = n.n(i),
    s = n(110259),
    a = n(158954),
    c = n(311907),
    d = n(565787),
    u = n(397927),
    f = n(157559),
    p = n(801264),
    b = n(521361),
    g = n(108713),
    h = n(643501),
    y = n(985018),
    v = n(551385),
    C = n(94939);
let O = (0, d.k)(b.A);
function j(e) {
    let { devices: t, selectedDeviceId: n, onSelectDeviceId: l } = e,
        i = t.map((e) => {
            let { id: t, name: n } = e;
            return {
                value: t,
                name: n,
                leadingIcon: O,
            };
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.z6M, {
                value: n,
                options: i,
                onChange: (e) => l(e),
            }),
            (0, r.jsx)(p.A, { children: y.intl.string(y.t.dI4HFq) }),
        ],
    });
}
function m() {
    return (0, r.jsx)("div", {
        className: v.jK,
        children: (0, r.jsx)("img", {
            src: C,
            width: "189",
            height: "177",
            alt: "",
        }),
    });
}
function w(e) {
    let t,
        n,
        i,
        d,
        { channel: p, platform: b, transitionState: C, onClose: O } = e,
        w = (0, c.bG)([h.default], () => h.default.getDevicesForPlatform(b), [b]),
        x = (0, c.bG)([h.default], () => h.default.getLastSelectedDeviceByPlatform(b)),
        P = l.useMemo(() => Object.values(w), [w]),
        S = (0, c.bG)([h.default], () => h.default.getFetchingDevices(b)),
        D = (0, c.bG)([h.default], () => {
            var e;
            return null == (e = h.default.getAwaitingRemoteSessionInfo()) ? void 0 : e.deviceId;
        }),
        [I, E] = l.useState(!1),
        [N, R] = l.useState(() => {
            var e, t;
            return null != (e = null == (t = w[null != D ? D : ""]) ? void 0 : t.id) ? e : null;
        });
    l.useEffect(() => {
        g.Uc(b);
    }, [b]),
        l.useEffect(() => {
            1 === P.length ? R(P[0].id) : null != x && R(x);
        }, [P, x]);
    let k = async () => {
        let e = w[null != N ? N : ""];
        o()(null != e, "Cannot transfer without selected device");
        try {
            E(!0), await g.VP(b, e.id, p), O();
        } catch (t) {
            E(!1),
                f.A.show({
                    title: y.intl.string(y.t.QL1y93),
                    body: y.intl.formatToPlainString(y.t["6ZyNH/"], { deviceName: e.name }),
                });
        }
    };
    return (
        S
            ? ((n = y.intl.string(y.t["+d9SH8"])),
              (t = (0, r.jsx)("div", {
                  className: v.dc,
                  children: (0, r.jsx)(u.y$y, {}),
              })))
            : 0 === P.length
              ? ((n = y.intl.string(y.t.OkJf1e)), (i = y.intl.string(y.t["of/l5Z"])), (t = (0, r.jsx)(m, {})))
              : ((n = y.intl.string(y.t["+d9SH8"])),
                (i = y.intl.string(y.t["5DtaWg"])),
                (d = [
                    {
                        text: y.intl.string(y.t.FJR4bD),
                        onClick: k,
                        loading: I || null != D,
                        disabled: null == N,
                    },
                ]),
                (t = (0, r.jsx)(j, {
                    devices: P,
                    selectedDeviceId: N,
                    onSelectDeviceId: (e) => {
                        R(e), (0, g.Jm)(b, e);
                    },
                }))),
        (0, r.jsx)(a.Modal, {
            title: n,
            subtitle: i,
            actions: d,
            transitionState: C,
            trackingProps: { impression: { impressionName: s.ImpressionNames.GAME_CONSOLE_DEVICE_LIST } },
            onClose: O,
            children: t,
        })
    );
}
