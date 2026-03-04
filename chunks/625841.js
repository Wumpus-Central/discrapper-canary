i.d(t, { U: () => b });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    o = i(311907),
    r = i(843282),
    c = i(582754),
    u = i(397927),
    d = i(827343),
    h = i(688810),
    m = i(544028),
    p = i(825468),
    v = i(347481),
    g = i(430452),
    A = i(954571),
    _ = i(74848),
    x = i(652215),
    T = i(731854),
    D = i(985018),
    f = i(534393);
let I = "SHOW_MORE";
function b(e) {
    let {
            deviceType: t,
            location: l,
            showAllDevices: b = !1,
            selectedDeviceId: C,
            onSelectDevice: S,
            hideDeviceTypeIcon: y = !1,
            label: O,
            ...M
        } = e,
        {
            setDevice: j,
            Icon: V,
            getCanSetDevice: N,
            getWarningMessage: E,
            getLocation: w,
        } = {
            [T.oh.AUDIO_INPUT]: {
                setDevice: d.A.setInputDevice,
                Icon: u.cNw,
                getCanSetDevice: (e) => e.supports(T.O5.AUDIO_INPUT_DEVICE),
                getWarningMessage: () =>
                    D.intl.format(D.t["1iK6UW"], { onDownloadClick: () => (0, p._)("Help Text Input Devices") }),
                getLocation: (e) => `${e}.SingleSelectInputDevices`,
            },
            [T.oh.AUDIO_OUTPUT]: {
                setDevice: d.A.setOutputDevice,
                Icon: u.LoC,
                getCanSetDevice: (e) => e.supports(T.O5.AUDIO_OUTPUT_DEVICE),
                getWarningMessage: () =>
                    D.intl.format(D.t.Ow0dbF, { onDownloadClick: () => (0, p._)("Help Text Output Devices") }),
                getLocation: (e) => `${e}.SingleSelectOutputDevices`,
            },
            [T.oh.VIDEO_INPUT]: {
                setDevice: d.A.setVideoDevice,
                Icon: u.xpe,
                getCanSetDevice: (e) => e.isVideoAvailable() || !e.hasVideoDevice(),
                getWarningMessage: () =>
                    D.intl.format(D.t["1iK6UW"], { onDownloadClick: () => (0, p._)("Help Text Video Devices") }),
                getLocation: (e) => `${e}.SingleSelectVideoDevices`,
            },
        }[t],
        { analyticsLocations: k } = (0, h.Ay)(),
        U = (0, o.bG)([m.A], () => m.A.theme),
        [L, B] = s.useState(b),
        P = w(l),
        [$, K] = (0, _.tR)(t, { location: P }),
        { id: G } = (0, _.x5)(t),
        R = (0, o.bG)([g.Ay], () => N(g.Ay)),
        W = (0, n.jsx)(u.po8, { messageType: u.YCn.WARNING, children: E() }),
        H = s.useCallback(
            (e) => {
                e === I
                    ? (B(!0),
                      A.default.track(x.HAw.DEVICES_LIST_SHOW_MORE_CLICKED, {
                          device_type: t,
                          location: P,
                          location_stack: k,
                          shown_device_count: $.length,
                          hidden_device_count: K.length,
                      }))
                    : (S?.(e) ?? !0) && j(e, { location: P, analyticsLocations: k });
            },
            [t, P, $.length, K.length, k, S, j],
        );
    function z(e) {
        let t,
            s,
            { label: l, value: o } = e,
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            d = l,
            h = (0, _.d)(l);
        null != h && ((d = h.prefix), (t = h.subName));
        let m = v.A.getCertifiedDeviceName(o, d);
        if (v.A.isCertified(o)) {
            let e = (0, c.qB)(U) ? i(961392) : i(848672);
            s = (0, n.jsx)("img", { src: e, alt: D.intl.string(D.t.smSKsj) });
        }
        return (0, n.jsxs)("div", {
            className: a()(f.Mg, { [f.S2]: r && null != t, [f.Sy]: !y }),
            children: [
                !y &&
                    (0, n.jsx)("div", {
                        className: f.Kt,
                        children: (0, n.jsx)(V, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: u.LU0.colors.ICON_MUTED,
                        }),
                    }),
                (0, n.jsx)(u.Text, {
                    lineClamp: 2,
                    variant: "text-md/medium",
                    color: r ? "text-subtle" : "text-default",
                    className: f.hV,
                    children: m,
                }),
                null != t &&
                    (0, n.jsx)(u.Text, {
                        lineClamp: 2,
                        variant: r ? "text-xs/medium" : "text-md/medium",
                        color: "text-muted",
                        className: f.VT,
                        children: t,
                    }),
                null != s && (0, n.jsx)("div", { className: f.pN, children: s }),
            ],
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(r.Te, {
                label: O,
                value: C ?? G,
                onChange: H,
                options: (function () {
                    let e = (e) => {
                            let { id: t, name: i } = e;
                            return { value: t, label: i };
                        },
                        t = $.map(e);
                    if (L || 0 === K.length) {
                        let i = K.map(e);
                        return t.concat(i);
                    }
                    {
                        let e = { value: I, label: D.intl.string(D.t.E99UMh), preventCloseOnSelect: !0 };
                        return t.concat(e);
                    }
                })(),
                isDisabled: !R,
                popoutPosition: "bottom",
                renderOptionLabel: (e) => z(e, !0),
                renderOptionValue: (e) => {
                    let [t] = e;
                    return z(t);
                },
                optionClassName: f.OS,
                ...M,
                "data-migration-pending": !0,
            }),
            !R && W,
        ],
    });
}
