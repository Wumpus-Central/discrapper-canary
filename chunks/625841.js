n.d(t, { U: () => E });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(17928),
    r = n(843282),
    d = n(462887),
    h = n(831544),
    u = n(597601),
    c = n(332461),
    p = n(512950),
    g = n(834730),
    m = n(827343),
    _ = n(688810),
    v = n(363195),
    C = n(944993),
    b = n(347481),
    f = n(969341),
    x = n(74848),
    A = n(731854),
    D = n(985018),
    R = n(402592);
function E(e) {
    let {
            deviceType: t,
            location: l,
            selectedDeviceId: E,
            onSelectDevice: I,
            hideDeviceTypeIcon: O = !1,
            label: T,
            ...V
        } = e,
        {
            setDevice: N,
            Icon: U,
            getCanSetDevice: y,
            getWarningMessage: S,
            getLocation: j,
        } = {
            [A.oh.AUDIO_INPUT]: {
                setDevice: m.A.setInputDevice,
                Icon: h.c,
                getCanSetDevice: (e) => e.supports(A.O5.AUDIO_INPUT_DEVICE),
                getWarningMessage: () =>
                    D.intl.format(D.t["1iK6UW"], { onDownloadClick: () => (0, C._)("Help Text Input Devices") }),
                getLocation: (e) => `${e}.SingleSelectInputDevices`,
            },
            [A.oh.AUDIO_OUTPUT]: {
                setDevice: m.A.setOutputDevice,
                Icon: u.L,
                getCanSetDevice: (e) => e.supports(A.O5.AUDIO_OUTPUT_DEVICE),
                getWarningMessage: () =>
                    D.intl.format(D.t.Ow0dbF, { onDownloadClick: () => (0, C._)("Help Text Output Devices") }),
                getLocation: (e) => `${e}.SingleSelectOutputDevices`,
            },
            [A.oh.VIDEO_INPUT]: {
                setDevice: m.A.setVideoDevice,
                Icon: c.x,
                getCanSetDevice: (e) => e.isVideoAvailable() || !e.hasVideoDevice(),
                getWarningMessage: () =>
                    D.intl.format(D.t["1iK6UW"], { onDownloadClick: () => (0, C._)("Help Text Video Devices") }),
                getLocation: (e) => `${e}.SingleSelectVideoDevices`,
            },
        }[t],
        { analyticsLocations: M } = (0, _.Ay)(),
        w = (0, a.bG)([v.A], () => v.A.theme),
        k = j(l),
        L = (0, x.tR)(t),
        { id: P } = (0, x.x5)(t),
        F = (0, a.bG)([f.Ay], () => y(f.Ay)),
        B = (0, i.jsx)(p.p, { messageType: p.Y.WARNING, children: S() }),
        G = s.useCallback(
            (e) => {
                (I?.(e) ?? !0) && N(e, { location: k, analyticsLocations: M });
            },
            [k, M, I, N],
        );
    function K(e) {
        let t,
            s,
            { label: l, value: a } = e,
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            h = l,
            u = (0, x.d)(l);
        null != u && ((h = u.prefix), (t = u.subName));
        let c = b.A.getCertifiedDeviceName(a, h);
        if (b.A.isCertified(a)) {
            let e = (0, d.q)(w) ? n(961392) : n(848672);
            s = (0, i.jsx)("img", { src: e, alt: D.intl.string(D.t.smSKsj) });
        }
        return (0, i.jsxs)("div", {
            className: o()(R.Mg, { [R.S2]: r && null != t, [R.Sy]: !O }),
            children: [
                !O &&
                    (0, i.jsx)("div", {
                        className: R.Kt,
                        children: (0, i.jsx)(U, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                    }),
                (0, i.jsx)(g.E, {
                    lineClamp: 2,
                    variant: "text-md/medium",
                    color: r ? "text-subtle" : "text-default",
                    className: R.hV,
                    children: c,
                }),
                null != t &&
                    (0, i.jsx)(g.E, {
                        lineClamp: 2,
                        variant: r ? "text-xs/medium" : "text-md/medium",
                        color: "text-muted",
                        className: R.VT,
                        children: t,
                    }),
                null != s && (0, i.jsx)("div", { className: R.pN, children: s }),
            ],
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.Te, {
                label: T,
                value: E ?? P,
                onChange: G,
                options: L.map((e) => {
                    let { id: t, name: n } = e;
                    return { value: t, label: n };
                }),
                isDisabled: !F,
                popoutPosition: "bottom",
                renderOptionLabel: (e) => K(e, !0),
                renderOptionValue: (e) => {
                    let [t] = e;
                    return K(t);
                },
                optionClassName: R.OS,
                ...V,
                "data-migration-pending": !0,
            }),
            !F && B,
        ],
    });
}
