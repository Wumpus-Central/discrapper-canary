i.d(e, { U: () => C });
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
    A = i(544028),
    h = i(944993),
    p = i(347481),
    g = i(430452),
    f = i(74848),
    T = i(731854),
    S = i(985018),
    E = i(709759);
function C(t) {
    let {
            deviceType: e,
            location: r,
            selectedDeviceId: C,
            onSelectDevice: v,
            hideDeviceTypeIcon: I = !1,
            label: _,
            ...x
        } = t,
        {
            setDevice: N,
            Icon: y,
            getCanSetDevice: j,
            getWarningMessage: D,
            getLocation: O,
        } = {
            [T.oh.AUDIO_INPUT]: {
                setDevice: c.A.setInputDevice,
                Icon: u.cNw,
                getCanSetDevice: (t) => t.supports(T.O5.AUDIO_INPUT_DEVICE),
                getWarningMessage: () =>
                    S.intl.format(S.t["1iK6UW"], { onDownloadClick: () => (0, h._)("Help Text Input Devices") }),
                getLocation: (t) => `${t}.SingleSelectInputDevices`,
            },
            [T.oh.AUDIO_OUTPUT]: {
                setDevice: c.A.setOutputDevice,
                Icon: u.LoC,
                getCanSetDevice: (t) => t.supports(T.O5.AUDIO_OUTPUT_DEVICE),
                getWarningMessage: () =>
                    S.intl.format(S.t.Ow0dbF, { onDownloadClick: () => (0, h._)("Help Text Output Devices") }),
                getLocation: (t) => `${t}.SingleSelectOutputDevices`,
            },
            [T.oh.VIDEO_INPUT]: {
                setDevice: c.A.setVideoDevice,
                Icon: u.xpe,
                getCanSetDevice: (t) => t.isVideoAvailable() || !t.hasVideoDevice(),
                getWarningMessage: () =>
                    S.intl.format(S.t["1iK6UW"], { onDownloadClick: () => (0, h._)("Help Text Video Devices") }),
                getLocation: (t) => `${t}.SingleSelectVideoDevices`,
            },
        }[e],
        { analyticsLocations: P } = (0, m.Ay)(),
        U = (0, a.bG)([A.A], () => A.A.theme),
        L = O(r),
        R = (0, f.tR)(e),
        { id: M } = (0, f.x5)(e),
        b = (0, a.bG)([g.Ay], () => j(g.Ay)),
        G = (0, n.jsx)(u.po8, { messageType: u.YCn.WARNING, children: D() }),
        V = l.useCallback(
            (t) => {
                (v?.(t) ?? !0) && N(t, { location: L, analyticsLocations: P });
            },
            [L, P, v, N],
        );
    function H(t) {
        let e,
            l,
            { label: r, value: a } = t,
            o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            c = r,
            m = (0, f.d)(r);
        null != m && ((c = m.prefix), (e = m.subName));
        let A = p.A.getCertifiedDeviceName(a, c);
        if (p.A.isCertified(a)) {
            let t = (0, d.qB)(U) ? i(961392) : i(848672);
            l = (0, n.jsx)("img", { src: t, alt: S.intl.string(S.t.smSKsj) });
        }
        return (0, n.jsxs)("div", {
            className: s()(E.Mg, { [E.S2]: o && null != e, [E.Sy]: !I }),
            children: [
                !I &&
                    (0, n.jsx)("div", {
                        className: E.Kt,
                        children: (0, n.jsx)(y, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                    }),
                (0, n.jsx)(u.Text, {
                    lineClamp: 2,
                    variant: "text-md/medium",
                    color: o ? "text-subtle" : "text-default",
                    className: E.hV,
                    children: A,
                }),
                null != e &&
                    (0, n.jsx)(u.Text, {
                        lineClamp: 2,
                        variant: o ? "text-xs/medium" : "text-md/medium",
                        color: "text-muted",
                        className: E.VT,
                        children: e,
                    }),
                null != l && (0, n.jsx)("div", { className: E.pN, children: l }),
            ],
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(o.Te, {
                label: _,
                value: C ?? M,
                onChange: V,
                options: R.map((t) => {
                    let { id: e, name: i } = t;
                    return { value: e, label: i };
                }),
                isDisabled: !b,
                popoutPosition: "bottom",
                renderOptionLabel: (t) => H(t, !0),
                renderOptionValue: (t) => {
                    let [e] = t;
                    return H(e);
                },
                optionClassName: E.OS,
                ...x,
                "data-migration-pending": !0,
            }),
            !b && G,
        ],
    });
}
