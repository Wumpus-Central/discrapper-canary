i.d(t, { default: () => N });
var l = i(627968),
    n = i(64700),
    s = i(284009),
    a = i.n(s),
    d = i(110259),
    r = i(158954),
    c = i(311907),
    o = i(565787),
    u = i(397927),
    C = i(157559),
    f = i(801264),
    h = i(521361),
    g = i(108713),
    v = i(643501),
    m = i(985018),
    p = i(551385),
    x = i(94939);
let j = (0, o.k)(h.A);
function b(e) {
    let { devices: t, selectedDeviceId: i, onSelectDeviceId: n } = e,
        s = t.map((e) => {
            let { id: t, name: i } = e;
            return { value: t, name: i, leadingIcon: j };
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(u.z6M, { value: i, options: s, onChange: (e) => n(e) }),
            (0, l.jsx)(f.A, { children: m.intl.string(m.t.dI4HFq) }),
        ],
    });
}
function S() {
    return (0, l.jsx)("div", {
        className: p.jK,
        children: (0, l.jsx)("img", { src: x, width: "189", height: "177", alt: "" }),
    });
}
function N(e) {
    let t,
        i,
        s,
        o,
        { channel: f, platform: h, transitionState: x, onClose: j } = e,
        N = (0, c.bG)([v.default], () => v.default.getDevicesForPlatform(h), [h]),
        w = (0, c.bG)([v.default], () => v.default.getLastSelectedDeviceByPlatform(h)),
        y = n.useMemo(() => Object.values(N), [N]),
        I = (0, c.bG)([v.default], () => v.default.getFetchingDevices(h)),
        _ = (0, c.bG)([v.default], () => v.default.getAwaitingRemoteSessionInfo()?.deviceId),
        [k, A] = n.useState(!1),
        [D, R] = n.useState(() => N[_ ?? ""]?.id ?? null);
    n.useEffect(() => {
        g.Uc(h);
    }, [h]),
        n.useEffect(() => {
            1 === y.length ? R(y[0].id) : null != w && R(w);
        }, [y, w]);
    let M = async () => {
        let e = N[D ?? ""];
        a()(null != e, "Cannot transfer without selected device");
        try {
            A(!0), await g.VP(h, e.id, f), j();
        } catch (t) {
            A(!1),
                C.A.show({
                    title: m.intl.string(m.t.QL1y93),
                    body: m.intl.formatToPlainString(m.t["6ZyNH/"], { deviceName: e.name }),
                });
        }
    };
    return (
        I
            ? ((i = m.intl.string(m.t["+d9SH8"])),
              (t = (0, l.jsx)("div", { className: p.dc, children: (0, l.jsx)(u.y$y, {}) })))
            : 0 === y.length
              ? ((i = m.intl.string(m.t.OkJf1e)), (s = m.intl.string(m.t["of/l5Z"])), (t = (0, l.jsx)(S, {})))
              : ((i = m.intl.string(m.t["+d9SH8"])),
                (s = m.intl.string(m.t["5DtaWg"])),
                (o = [{ text: m.intl.string(m.t.FJR4bD), onClick: M, loading: k || null != _, disabled: null == D }]),
                (t = (0, l.jsx)(b, {
                    devices: y,
                    selectedDeviceId: D,
                    onSelectDeviceId: (e) => {
                        R(e), (0, g.Jm)(h, e);
                    },
                }))),
        (0, l.jsx)(r.Modal, {
            title: i,
            subtitle: s,
            actions: o,
            transitionState: x,
            trackingProps: { impression: { impressionName: d.ImpressionNames.GAME_CONSOLE_DEVICE_LIST } },
            onClose: j,
            children: t,
        })
    );
}
