n.d(t, { A: () => U, U: () => j });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    o = n.n(s),
    a = n(17928),
    c = n(843282),
    r = n(462887),
    u = n(831544),
    d = n(597601),
    p = n(332461),
    m = n(512950),
    v = n(834730),
    g = n(827343),
    D = n(688810),
    x = n(363195),
    h = n(934729),
    C = n(347481),
    f = n(25578),
    I = n(74848),
    b = n(106713),
    A = n(731854),
    O = n(375708),
    S = n(534283);
function T(e) {
    return {
        [A.oh.AUDIO_INPUT]: {
            setDevice: g.A.setInputDevice,
            IconComponent: u.MicrophoneIcon,
            getCanSetDevice: (e) => e.supports(A.O5.AUDIO_INPUT_DEVICE),
            getWarningMessage: () =>
                O.intl.format(O.t["1iK6UW"], { onDownloadClick: () => (0, h._)("Help Text Input Devices") }),
            getLocation: (e) => `${e}.SingleSelectInputDevices`,
        },
        [A.oh.AUDIO_OUTPUT]: {
            setDevice: g.A.setOutputDevice,
            IconComponent: d.L,
            getCanSetDevice: (e) => e.supports(A.O5.AUDIO_OUTPUT_DEVICE),
            getWarningMessage: () =>
                O.intl.format(O.t.Ow0dbF, { onDownloadClick: () => (0, h._)("Help Text Output Devices") }),
            getLocation: (e) => `${e}.SingleSelectOutputDevices`,
        },
        [A.oh.VIDEO_INPUT]: {
            setDevice: g.A.setVideoDevice,
            IconComponent: p.x,
            getCanSetDevice: (e) => e.isVideoAvailable() || !e.hasVideoDevice(),
            getWarningMessage: () =>
                O.intl.format(O.t["1iK6UW"], { onDownloadClick: () => (0, h._)("Help Text Video Devices") }),
            getLocation: (e) => `${e}.SingleSelectVideoDevices`,
        },
    }[e];
}
function N(e) {
    let {
            devices: t,
            location: s,
            selectedDeviceId: u,
            onSelectDevice: d,
            hideDeviceTypeIcon: p = !1,
            label: g,
            ...h
        } = e,
        { analyticsLocations: A } = (0, D.Ay)(),
        N = (0, a.bG)([x.A], () => x.A.theme),
        j = l.useMemo(() => t.reduce((e, t) => ({ ...e, [t.id]: t }), {}), [t]),
        U = j[u]?.deviceType ?? null,
        _ = (0, a.bG)([f.Ay], () => null == U || T(U).getCanSetDevice(f.Ay)),
        { showDeviceFormFactorIndicators: V } = b.A.useConfig({ location: "SingleSelectDevices" }),
        y = null != U ? (0, i.jsx)(m.p, { messageType: m.Y.WARNING, children: T(U).getWarningMessage() }) : null,
        w = l.useCallback(
            (e) => {
                if (!(d?.(e) ?? !0)) return;
                let t = j[e]?.deviceType;
                if (null == t) return;
                let { setDevice: n, getLocation: i } = T(t);
                n(e, { location: i(s), analyticsLocations: A });
            },
            [j, s, A, d],
        );
    function E(e) {
        let t,
            l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { prefix: s, subName: a } = (0, I.d)(e),
            c = C.A.getCertifiedDeviceName(e.id, s);
        if (C.A.isCertified(e.id)) {
            let e = (0, r.q)(N) ? n(961392) : n(848672);
            t = (0, i.jsx)("img", { src: e, alt: O.intl.string(O.t.smSKsj) });
        }
        let u = null == e ? null : V ? (0, I.d4)(e) : T(e.deviceType).IconComponent;
        return (0, i.jsxs)("div", {
            className: o()(S.Mg, { [S.S2]: l && null != a, [S.Sy]: !p }),
            children: [
                !p &&
                    null != u &&
                    (0, i.jsx)("div", {
                        className: S.Kt,
                        children: (0, i.jsx)(u, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                    }),
                (0, i.jsx)(v.E, {
                    lineClamp: 2,
                    variant: "text-md/medium",
                    color: l ? "text-subtle" : "text-default",
                    className: S.hV,
                    children: c,
                }),
                null != a &&
                    (0, i.jsx)(v.E, {
                        lineClamp: 2,
                        variant: l ? "text-xs/medium" : "text-md/medium",
                        color: "text-muted",
                        className: S.VT,
                        children: a,
                    }),
                null != t && (0, i.jsx)("div", { className: S.pN, children: t }),
            ],
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Te, {
                label: g,
                value: u,
                onChange: w,
                options: t.map((e) => {
                    let { id: t, name: n } = e;
                    return { value: t, label: n };
                }),
                isDisabled: !_,
                popoutPosition: "bottom",
                renderOptionLabel: (e) => {
                    let { value: t } = e;
                    return E(j[t], !0);
                },
                renderOptionValue: (e) => {
                    let [{ value: t }] = e;
                    return E(j[t]);
                },
                optionClassName: S.OS,
                ...h,
                "data-migration-pending": !0,
            }),
            !_ && y,
        ],
    });
}
function j(e) {
    let { deviceType: t, selectedDeviceId: n, ...l } = e,
        s = (0, I.tR)(t),
        { id: o } = (0, I.x5)(t);
    return (0, i.jsx)(N, { ...l, devices: s, selectedDeviceId: n ?? o });
}
function U(e) {
    return (0, i.jsx)(N, { ...e });
}
