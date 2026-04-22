i.d(t, { default: () => w });
var l = i(627968),
    n = i(64700),
    s = i(284009),
    a = i.n(s),
    d = i(110259),
    r = i(189213),
    c = i(311907),
    o = i(565787),
    u = i(954197),
    C = i(289873),
    f = i(157559),
    h = i(208039),
    g = i(521361),
    v = i(108713),
    m = i(643501),
    p = i(985018),
    x = i(587972),
    j = i(94939);
let b = (0, o.k)(g.A);
function S(e) {
    let { devices: t, selectedDeviceId: i, onSelectDeviceId: n } = e,
        s = t.map((e) => {
            let { id: t, name: i } = e;
            return { value: t, name: i, leadingIcon: b };
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(u.z, { value: i, options: s, onChange: (e) => n(e) }),
            (0, l.jsx)(h.A, { children: p.intl.string(p.t.dI4HFq) }),
        ],
    });
}
function N() {
    return (0, l.jsx)("div", {
        className: x.jK,
        children: (0, l.jsx)("img", { src: j, width: "189", height: "177", alt: "" }),
    });
}
function w(e) {
    let t,
        i,
        s,
        o,
        { channel: u, platform: h, transitionState: g, onClose: j } = e,
        b = (0, c.bG)([m.default], () => m.default.getDevicesForPlatform(h), [h]),
        w = (0, c.bG)([m.default], () => m.default.getLastSelectedDeviceByPlatform(h)),
        I = n.useMemo(() => Object.values(b), [b]),
        _ = (0, c.bG)([m.default], () => m.default.getFetchingDevices(h)),
        k = (0, c.bG)([m.default], () => m.default.getAwaitingRemoteSessionInfo()?.deviceId),
        [y, A] = n.useState(!1),
        [D, R] = n.useState(() => b[k ?? ""]?.id ?? null);
    n.useEffect(() => {
        v.Uc(h);
    }, [h]),
        n.useEffect(() => {
            1 === I.length ? R(I[0].id) : null != w && R(w);
        }, [I, w]);
    let E = async () => {
        let e = b[D ?? ""];
        a()(null != e, "Cannot transfer without selected device");
        try {
            A(!0), await v.VP(h, e.id, u), j();
        } catch (t) {
            A(!1),
                f.A.show({
                    title: p.intl.string(p.t.QL1y93),
                    body: p.intl.formatToPlainString(p.t["6ZyNH/"], { deviceName: e.name }),
                });
        }
    };
    return (
        _
            ? ((i = p.intl.string(p.t["+d9SH8"])),
              (t = (0, l.jsx)("div", { className: x.dc, children: (0, l.jsx)(C.y, {}) })))
            : 0 === I.length
              ? ((i = p.intl.string(p.t.OkJf1e)), (s = p.intl.string(p.t["of/l5Z"])), (t = (0, l.jsx)(N, {})))
              : ((i = p.intl.string(p.t["+d9SH8"])),
                (s = p.intl.string(p.t["5DtaWg"])),
                (o = [{ text: p.intl.string(p.t.FJR4bD), onClick: E, loading: y || null != k, disabled: null == D }]),
                (t = (0, l.jsx)(S, {
                    devices: I,
                    selectedDeviceId: D,
                    onSelectDeviceId: (e) => {
                        R(e), (0, v.Jm)(h, e);
                    },
                }))),
        (0, l.jsx)(r.Modal, {
            title: i,
            subtitle: s,
            actions: o,
            transitionState: g,
            trackingProps: { impression: { impressionName: d.ImpressionNames.GAME_CONSOLE_DEVICE_LIST } },
            onClose: j,
            children: t,
        })
    );
}
