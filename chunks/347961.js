n.d(t, { default: () => T });
var a = n(627968),
    i = n(64700),
    l = n(732955),
    r = n(397927),
    d = n(964486),
    u = n(954571),
    c = n(179172),
    s = n(792205),
    o = n(652215),
    N = n(985018);
function m(e) {
    switch (e) {
        case s.E.INPUT:
            return s.f.INPUT;
        case s.E.OUTPUT:
            return s.f.OUTPUT;
        case s.E.INPUT_AND_OUTPUT:
            return s.f.INPUT_AND_OUTPUT;
        default:
            return null;
    }
}
function T(e) {
    let t,
        { device: n, certifiedDeviceMetadata: T, onClose: U, transitionState: p } = e,
        [f, E] = (0, i.useState)(null != n ? m(n.type) : null),
        D = (0, i.useRef)(!1);
    function P() {
        (D.current = !0), c.mk(n.displayName);
    }
    (0, d.l0)(() => {
        D.current || P();
    }),
        (0, i.useEffect)(() => {
            u.default.track(o.HAw.OPEN_MODAL, {
                type: null != T ? "New Audio Device Detected - Certified" : "New Audio Device Detected - Not Certified",
                device_name: null != T ? `${T.vendor.name} ${T.model.name}` : n.displayName,
            });
        }, [n.displayName, T]);
    let _ = null != T ? N.intl.string(N.t.kiqvHd) : N.intl.string(N.t.AbnGI5);
    switch (n.type) {
        case s.E.INPUT:
            t =
                null != T
                    ? N.intl.format(N.t.NqNqy2, { vendorName: T.vendor.name, modelName: T.model.name })
                    : N.intl.format(N.t.stSaRi, { name: n.displayName });
            break;
        case s.E.OUTPUT:
            t =
                null != T
                    ? N.intl.format(N.t.uPgqIA, { vendorName: T.vendor.name, modelName: T.model.name })
                    : N.intl.format(N.t.jyhYp1, { name: n.displayName });
            break;
        case s.E.INPUT_AND_OUTPUT:
            t =
                null != T
                    ? N.intl.format(N.t["4Xyzxy"], { vendorName: T.vendor.name, modelName: T.model.name })
                    : N.intl.format(N.t.Z7XQcr, { name: n.displayName });
    }
    return (0, a.jsx)(l.aFV, {
        title: _,
        subtitle: t,
        actions: [
            {
                text: N.intl.string(N.t.vPBgq7),
                variant: "secondary",
                onClick: () => {
                    P(), U();
                },
            },
            {
                text: N.intl.string(N.t.ydkoDT),
                variant: "primary",
                onClick: () => {
                    (D.current = !0), null != f && c.TO(n.displayName, f, "New Audio Device Detected Modal"), U();
                },
            },
        ],
        actionBarInput: (0, a.jsx)(l.QWc, {
            text: N.intl.format(N.t.cwS3E6, { device: n.displayName }),
            onClick: () => {
                (D.current = !0),
                    c.BG(n.displayName),
                    u.default.track(o.HAw.MODAL_DISMISSED, {
                        type:
                            null != T
                                ? "New Audio Device Detected - Certified"
                                : "New Audio Device Detected - Not Certified",
                        location_object: n.displayName,
                        dismiss_type: "permanent",
                    }),
                    U();
            },
        }),
        onClose: U,
        transitionState: p,
        children:
            n.type === s.E.INPUT_AND_OUTPUT &&
            (0, a.jsx)(r.z6M, {
                value: (function (e) {
                    if (null == e) return null;
                    switch (e) {
                        case s.f.INPUT:
                            return s.E.INPUT;
                        case s.f.OUTPUT:
                            return s.E.OUTPUT;
                        case s.f.INPUT_AND_OUTPUT:
                            return s.E.INPUT_AND_OUTPUT;
                        default:
                            return null;
                    }
                })(f),
                onChange: (e) => E(m(e)),
                options: [
                    { name: N.intl.string(N.t.vhxqwT), value: s.E.INPUT_AND_OUTPUT },
                    { name: N.intl.string(N.t["Kqs9+J"]), value: s.E.INPUT },
                    { name: N.intl.string(N.t.GGlM3e), value: s.E.OUTPUT },
                ],
            }),
    });
}
