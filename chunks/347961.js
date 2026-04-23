n.d(t, { default: () => U });
var a = n(627968),
    i = n(64700),
    l = n(189213),
    r = n(123292),
    d = n(954197),
    u = n(964486),
    c = n(954571),
    s = n(179172),
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
        [E, D] = (0, i.useState)(null != n ? T(n.type) : null),
        P = (0, i.useRef)(!1);
    function _() {
        (P.current = !0), s.mk(n.displayName);
    }
    (0, u.l0)(() => {
        P.current || _();
    }),
        (0, i.useEffect)(() => {
            c.default.track(N.HAw.OPEN_MODAL, {
                type: null != U ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
                device_name: null != U ? `${U.vendor.name} ${U.model.name}` : n.displayName,
            });
        }, [n.displayName, U]);
    let y = null != U ? m.intl.string(m.t.kiqvHd) : m.intl.string(m.t.AbnGI5);
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
        title: y,
        subtitle: t,
        actions: [
            {
                text: m.intl.string(m.t.vPBgq7),
                variant: "secondary",
                onClick: () => {
                    _(), p();
                },
            },
            {
                text: m.intl.string(m.t.ydkoDT),
                variant: "primary",
                onClick: () => {
                    (P.current = !0), null != E && s.TO(n.displayName, E, "New Audio Device Detected Modal"), p();
                },
            },
        ],
        actionBarInput: (0, a.jsx)(r.Q, {
            text: m.intl.format(m.t.cwS3E6, { device: n.displayName }),
            onClick: () => {
                (P.current = !0),
                    s.BG(n.displayName),
                    c.default.track(N.HAw.MODAL_DISMISSED, {
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
                })(E),
                onChange: (e) => D(T(e)),
                options: [
                    { name: m.intl.string(m.t.vhxqwT), value: o.E.INPUT_AND_OUTPUT },
                    { name: m.intl.string(m.t["Kqs9+J"]), value: o.E.INPUT },
                    { name: m.intl.string(m.t.GGlM3e), value: o.E.OUTPUT },
                ],
            }),
    });
}
