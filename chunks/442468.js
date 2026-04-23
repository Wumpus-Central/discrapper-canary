n.d(t, { default: () => U });
var a = n(627968),
    i = n(64700),
    l = n(189213),
    r = n(123292),
    d = n(144228),
    c = n(964486),
    s = n(954571),
    u = n(228366),
    o = n(792205),
    N = n(652215),
    m = n(985018);
function T(e) {
    switch (e) {
        case o.E.INPUT:
            return o.f.INPUT;
        case o.E.OUTPUT:
            return o.f.OUTPUT;
        case o.E.INPUT_AND_OUTPUT:
            return o.f.INPUT_AND_OUTPUT;
        default:
            return null;
    }
}
function U(e) {
    let t,
        { device: n, certifiedDeviceMetadata: U, onClose: p, transitionState: f } = e,
        [D, E] = (0, i.useState)(null != n ? T(n.type) : null),
        P = (0, i.useRef)(!1);
    function v() {
        var e;
        (P.current = !0), (e = n.displayName), u.h.dispatch({ type: "CONNECTED_DEVICE_DONT_SWITCH", displayName: e });
    }
    (0, c.l0)(() => {
        P.current || v();
    }),
        (0, i.useEffect)(() => {
            s.default.track(N.HAw.OPEN_MODAL, {
                type: null != U ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
                device_name: null != U ? `${U.vendor.name} ${U.model.name}` : n.displayName,
            });
        }, [n.displayName, U]);
    let _ = null != U ? m.intl.string(m.t.kiqvHd) : m.intl.string(m.t.AbnGI5);
    switch (n.type) {
        case o.E.INPUT:
            t =
                null != U
                    ? m.intl.format(m.t.NqNqy2, { vendorName: U.vendor.name, modelName: U.model.name })
                    : m.intl.format(m.t.stSaRi, { name: n.displayName });
            break;
        case o.E.OUTPUT:
            t =
                null != U
                    ? m.intl.format(m.t.uPgqIA, { vendorName: U.vendor.name, modelName: U.model.name })
                    : m.intl.format(m.t.jyhYp1, { name: n.displayName });
            break;
        case o.E.INPUT_AND_OUTPUT:
            t =
                null != U
                    ? m.intl.format(m.t["4Xyzxy"], { vendorName: U.vendor.name, modelName: U.model.name })
                    : m.intl.format(m.t.Z7XQcr, { name: n.displayName });
    }
    return (0, a.jsx)(l.Modal, {
        title: _,
        subtitle: t,
        actions: [
            {
                text: m.intl.string(m.t.vPBgq7),
                variant: "secondary",
                onClick: () => {
                    v(), p();
                },
            },
            {
                text: m.intl.string(m.t.ydkoDT),
                variant: "primary",
                onClick: () => {
                    if (((P.current = !0), null != D)) {
                        var e;
                        (e = n.displayName),
                            u.h.dispatch({
                                type: "CONNECTED_DEVICE_SWITCH",
                                displayName: e,
                                connectedDevicePreference: D,
                                location: "New Audio Device Detected Modal",
                            });
                    }
                    p();
                },
            },
        ],
        actionBarInput: (0, a.jsx)(r.Q, {
            text: m.intl.format(m.t.cwS3E6, { device: n.displayName }),
            onClick: () => {
                var e;
                (P.current = !0),
                    (e = n.displayName),
                    u.h.dispatch({ type: "CONNECTED_DEVICE_IGNORE", displayName: e }),
                    s.default.track(N.HAw.MODAL_DISMISSED, {
                        type:
                            null != U
                                ? "New Audio Device Detected - Certified"
                                : "New Audio Device Detected - Not Certified",
                        location_object: n.displayName,
                        dismiss_type: "permanent",
                    }),
                    p();
            },
        }),
        onClose: p,
        transitionState: f,
        children:
            n.type === o.E.INPUT_AND_OUTPUT &&
            (0, a.jsx)(d.z, {
                value: (function (e) {
                    if (null == e) return null;
                    switch (e) {
                        case o.f.INPUT:
                            return o.E.INPUT;
                        case o.f.OUTPUT:
                            return o.E.OUTPUT;
                        case o.f.INPUT_AND_OUTPUT:
                            return o.E.INPUT_AND_OUTPUT;
                        default:
                            return null;
                    }
                })(D),
                onChange: (e) => E(T(e)),
                options: [
                    { name: m.intl.string(m.t.vhxqwT), value: o.E.INPUT_AND_OUTPUT },
                    { name: m.intl.string(m.t["Kqs9+J"]), value: o.E.INPUT },
                    { name: m.intl.string(m.t.GGlM3e), value: o.E.OUTPUT },
                ],
            }),
    });
}
