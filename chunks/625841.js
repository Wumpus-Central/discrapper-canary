i.d(e, { U: () => S });
var n = i(627968),
    l = i(64700),
    r = i(503698),
    s = i.n(r),
    a = i(311907),
    o = i(843282),
    d = i(582754),
    u = i(397927),
    c = i(827343),
    m = i(688810),
    p = i(544028),
    A = i(825468),
    h = i(347481),
    g = i(430452),
    f = i(74848),
    T = i(731854),
    v = i(985018),
    C = i(784463);
function S(t) {
    let {
            deviceType: e,
            location: r,
            selectedDeviceId: S,
            onSelectDevice: E,
            hideDeviceTypeIcon: x = !1,
            label: y,
            ..._
        } = t,
        {
            setDevice: N,
            Icon: I,
            getCanSetDevice: j,
            getWarningMessage: D,
            getLocation: P,
        } = {
            [T.oh.AUDIO_INPUT]: {
                setDevice: c.A.setInputDevice,
                Icon: u.cNw,
                getCanSetDevice: (t) => t.supports(T.O5.AUDIO_INPUT_DEVICE),
                getWarningMessage: () =>
                    v.intl.format(v.t["1iK6UW"], { onDownloadClick: () => (0, A._)("Help Text Input Devices") }),
                getLocation: (t) => `${t}.SingleSelectInputDevices`,
            },
            [T.oh.AUDIO_OUTPUT]: {
                setDevice: c.A.setOutputDevice,
                Icon: u.LoC,
                getCanSetDevice: (t) => t.supports(T.O5.AUDIO_OUTPUT_DEVICE),
                getWarningMessage: () =>
                    v.intl.format(v.t.Ow0dbF, { onDownloadClick: () => (0, A._)("Help Text Output Devices") }),
                getLocation: (t) => `${t}.SingleSelectOutputDevices`,
            },
            [T.oh.VIDEO_INPUT]: {
                setDevice: c.A.setVideoDevice,
                Icon: u.xpe,
                getCanSetDevice: (t) => t.isVideoAvailable() || !t.hasVideoDevice(),
                getWarningMessage: () =>
                    v.intl.format(v.t["1iK6UW"], { onDownloadClick: () => (0, A._)("Help Text Video Devices") }),
                getLocation: (t) => `${t}.SingleSelectVideoDevices`,
            },
        }[e],
        { analyticsLocations: U } = (0, m.Ay)(),
        b = (0, a.bG)([p.A], () => p.A.theme),
        L = P(r),
        O = (0, f.tR)(e),
        { id: M } = (0, f.x5)(e),
        R = (0, a.bG)([g.Ay], () => j(g.Ay)),
        V = (0, n.jsx)(u.po8, { messageType: u.YCn.WARNING, children: D() }),
        w = l.useCallback(
            (t) => {
                (E?.(t) ?? !0) && N(t, { location: L, analyticsLocations: U });
            },
            [L, U, E, N],
        );
    function G(t) {
        let e,
            l,
            { label: r, value: a } = t,
            o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            c = r,
            m = (0, f.d)(r);
        null != m && ((c = m.prefix), (e = m.subName));
        let p = h.A.getCertifiedDeviceName(a, c);
        if (h.A.isCertified(a)) {
            let t = (0, d.qB)(b) ? i(961392) : i(848672);
            l = (0, n.jsx)("img", { src: t, alt: v.intl.string(v.t.smSKsj) });
        }
        return (0, n.jsxs)("div", {
            className: s()(C.Mg, { [C.S2]: o && null != e, [C.Sy]: !x }),
            children: [
                !x &&
                    (0, n.jsx)("div", {
                        className: C.Kt,
                        children: (0, n.jsx)(I, {
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
                    children: p,
                }),
                null != e &&
                    (0, n.jsx)(u.Text, {
                        lineClamp: 2,
                        variant: o ? "text-xs/medium" : "text-md/medium",
                        color: "text-muted",
                        className: C.VT,
                        children: e,
                    }),
                null != l && (0, n.jsx)("div", { className: C.pN, children: l }),
            ],
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(o.Te, {
                label: y,
                value: S ?? M,
                onChange: w,
                options: O.map((t) => {
                    let { id: e, name: i } = t;
                    return { value: e, label: i };
                }),
                isDisabled: !R,
                popoutPosition: "bottom",
                renderOptionLabel: (t) => G(t, !0),
                renderOptionValue: (t) => {
                    let [e] = t;
                    return G(e);
                },
                optionClassName: C.OS,
                ..._,
                "data-migration-pending": !0,
            }),
            !R && V,
        ],
    });
}
