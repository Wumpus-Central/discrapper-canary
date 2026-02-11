i.d(t, { U: () => I });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(311907),
    o = i(843282),
    c = i(582754),
    u = i(397927),
    d = i(827343),
    h = i(688810),
    m = i(544028),
    p = i(825468),
    v = i(347481),
    g = i(430452),
    f = i(954571),
    x = i(74848),
    _ = i(652215),
    A = i(731854),
    T = i(985018),
    C = i(534393);
let D = "SHOW_MORE";
function I(e) {
    let {
            deviceType: t,
            location: l,
            showAllDevices: I = !1,
            selectedDeviceId: S,
            onSelectDevice: N,
            hideDeviceTypeIcon: O = !1,
            label: y,
            ...w
        } = e,
        {
            setDevice: j,
            Icon: M,
            getCanSetDevice: b,
            getWarningMessage: E,
            getLocation: L,
        } = {
            [A.oh.AUDIO_INPUT]: {
                setDevice: d.A.setInputDevice,
                Icon: u.cNw,
                getCanSetDevice: (e) => e.supports(A.O5.AUDIO_INPUT_DEVICE),
                getWarningMessage: () =>
                    T.intl.format(T.t["1iK6UW"], { onDownloadClick: () => (0, p._)("Help Text Input Devices") }),
                getLocation: (e) => `${e}.SingleSelectInputDevices`,
            },
            [A.oh.AUDIO_OUTPUT]: {
                setDevice: d.A.setOutputDevice,
                Icon: u.LoC,
                getCanSetDevice: (e) => e.supports(A.O5.AUDIO_OUTPUT_DEVICE),
                getWarningMessage: () =>
                    T.intl.format(T.t.Ow0dbF, { onDownloadClick: () => (0, p._)("Help Text Output Devices") }),
                getLocation: (e) => `${e}.SingleSelectOutputDevices`,
            },
            [A.oh.VIDEO_INPUT]: {
                setDevice: d.A.setVideoDevice,
                Icon: u.xpe,
                getCanSetDevice: (e) => e.isVideoAvailable(),
                getWarningMessage: () =>
                    T.intl.format(T.t["1iK6UW"], { onDownloadClick: () => (0, p._)("Help Text Video Devices") }),
                getLocation: (e) => `${e}.SingleSelectVideoDevices`,
            },
        }[t],
        { analyticsLocations: V } = (0, h.Ay)(),
        R = (0, r.bG)([m.A], () => m.A.theme),
        [k, W] = s.useState(I),
        U = L(l),
        [P, G] = (0, x.tR)(t, { location: U }),
        { id: H } = (0, x.x5)(t),
        z = (0, r.bG)([g.Ay], () => b(g.Ay)),
        B = (0, n.jsx)(u.po8, { messageType: u.YCn.WARNING, children: E() }),
        F = s.useCallback(
            (e) => {
                e === D
                    ? (W(!0),
                      f.default.track(_.HAw.DEVICES_LIST_SHOW_MORE_CLICKED, {
                          device_type: t,
                          location: U,
                          location_stack: V,
                          shown_device_count: P.length,
                          hidden_device_count: G.length,
                      }))
                    : (N?.(e) ?? !0) && j(e, { location: U, analyticsLocations: V });
            },
            [t, U, P.length, G.length, V, N, j],
        );
    function $(e) {
        let t,
            s,
            { label: l, value: r } = e,
            o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            d = l,
            h = (0, x.d)(l);
        null != h && ((d = h.prefix), (t = h.subName));
        let m = v.A.getCertifiedDeviceName(r, d);
        if (v.A.isCertified(r)) {
            let e = (0, c.qB)(R) ? i(961392) : i(848672);
            s = (0, n.jsx)("img", { src: e, alt: T.intl.string(T.t.smSKsj) });
        }
        return (0, n.jsxs)("div", {
            className: a()(C.Mg, { [C.S2]: o && null != t, [C.Sy]: !O }),
            children: [
                !O &&
                    (0, n.jsx)("div", {
                        className: C.Kt,
                        children: (0, n.jsx)(M, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: u.LU0.colors.ICON_MUTED,
                        }),
                    }),
                (0, n.jsx)(u.Text, {
                    lineClamp: 2,
                    variant: "text-md/medium",
                    color: o ? "text-subtle" : "text-default",
                    className: C.hV,
                    children: m,
                }),
                null != t &&
                    (0, n.jsx)(u.Text, {
                        lineClamp: 2,
                        variant: o ? "text-xs/medium" : "text-md/medium",
                        color: "text-muted",
                        className: C.VT,
                        children: t,
                    }),
                null != s && (0, n.jsx)("div", { className: C.pN, children: s }),
            ],
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(o.Te, {
                label: y,
                value: S ?? H,
                onChange: F,
                options: (function () {
                    let e = (e) => {
                            let { id: t, name: i } = e;
                            return { value: t, label: i };
                        },
                        t = P.map(e);
                    if (k || 0 === G.length) {
                        let i = G.map(e);
                        return t.concat(i);
                    }
                    {
                        let e = { value: D, label: T.intl.string(T.t.E99UMh), preventCloseOnSelect: !0 };
                        return t.concat(e);
                    }
                })(),
                isDisabled: !z,
                popoutPosition: "bottom",
                renderOptionLabel: (e) => $(e, !0),
                renderOptionValue: (e) => {
                    let [t] = e;
                    return $(t);
                },
                optionClassName: C.OS,
                ...w,
                "data-migration-pending": !0,
            }),
            !z && B,
        ],
    });
}
