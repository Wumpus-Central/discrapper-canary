n.d(t, { A: () => N, U: () => U });
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
    g = n(683071),
    m = n(834730),
    v = n(827343),
    D = n(688810),
    x = n(363195),
    f = n(934729),
    h = n(347481),
    C = n(192820),
    b = n(74848),
    I = n(106713),
    O = n(731854),
    S = n(660183),
    A = n(534283);
function T(e) {
    return {
        [O.oh.AUDIO_INPUT]: {
            setDevice: v.default.setInputDevice,
            IconComponent: u.MicrophoneIcon,
            getCanSetDevice: (e) => e.supports(O.O5.AUDIO_INPUT_DEVICE),
            getWarningMessage: () =>
                S.intl.format(S.t["1iK6UW"], { onDownloadClick: () => (0, f._)("Help Text Input Devices") }),
            getLocation: (e) => `${e}.SingleSelectInputDevices`,
        },
        [O.oh.AUDIO_OUTPUT]: {
            setDevice: v.default.setOutputDevice,
            IconComponent: d.L,
            getCanSetDevice: (e) => e.supports(O.O5.AUDIO_OUTPUT_DEVICE),
            getWarningMessage: () =>
                S.intl.format(S.t.Ow0dbF, { onDownloadClick: () => (0, f._)("Help Text Output Devices") }),
            getLocation: (e) => `${e}.SingleSelectOutputDevices`,
        },
        [O.oh.VIDEO_INPUT]: {
            setDevice: v.default.setVideoDevice,
            IconComponent: p.x,
            getCanSetDevice: (e) => e.isVideoAvailable() || !e.hasVideoDevice(),
            getWarningMessage: () =>
                S.intl.format(S.t["1iK6UW"], { onDownloadClick: () => (0, f._)("Help Text Video Devices") }),
            getLocation: (e) => `${e}.SingleSelectVideoDevices`,
        },
    }[e];
}
function j(e) {
    let {
            devices: t,
            location: s,
            selectedDeviceId: u,
            onSelectDevice: d,
            hideDeviceTypeIcon: p = !1,
            label: v,
            textVariant: f,
            ...O
        } = e,
        { analyticsLocations: j } = (0, D.Ay)(),
        U = (0, a.bG)([x.A], () => x.A.theme),
        N = l.useMemo(() => t.reduce((e, t) => ({ ...e, [t.id]: t }), {}), [t]),
        _ = N[u]?.deviceType ?? null,
        w = (0, a.bG)([C.Ay], () => null == _ || T(_).getCanSetDevice(C.Ay)),
        { showDeviceFormFactorIndicators: V } = I.A.useConfig({ location: "SingleSelectDevices" }),
        y = null != _ ? (0, i.jsx)(g.w, { type: "warning", message: T(_).getWarningMessage(), role: "status" }) : null,
        E = l.useCallback(
            (e) => {
                if (!(d?.(e) ?? !0)) return;
                let t = N[e]?.deviceType;
                if (null == t) return;
                let { setDevice: n, getLocation: i } = T(t);
                n(e, { location: i(s), analyticsLocations: j });
            },
            [N, s, j, d],
        );
    function M(e) {
        let t,
            l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { prefix: s, subName: a } = (0, b.d)(e),
            c = h.A.getCertifiedDeviceName(e.id, s);
        if (h.A.isCertified(e.id)) {
            let e = (0, r.q)(U) ? n(961392) : n(848672);
            t = (0, i.jsx)("img", { src: e, alt: S.intl.string(S.t.smSKsj) });
        }
        let u = null == e ? null : V ? (0, b.d4)(e) : T(e.deviceType).IconComponent;
        return (0, i.jsxs)("div", {
            className: o()(A.Mg, { [A.S2]: l && null != a, [A.Sy]: !p }),
            children: [
                !p &&
                    null != u &&
                    (0, i.jsx)("div", {
                        className: A.Kt,
                        children: (0, i.jsx)(u, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                    }),
                (0, i.jsx)(m.E, {
                    lineClamp: 2,
                    variant: f ?? "text-md/medium",
                    color: l ? "text-subtle" : "text-default",
                    className: A.hV,
                    children: c,
                }),
                null != a &&
                    (0, i.jsx)(m.E, {
                        lineClamp: 2,
                        variant: f ?? (l ? "text-xs/medium" : "text-md/medium"),
                        color: "text-muted",
                        className: A.VT,
                        children: a,
                    }),
                null != t && (0, i.jsx)("div", { className: A.pN, children: t }),
            ],
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Te, {
                label: v,
                value: u,
                onChange: E,
                options: t.map((e) => {
                    let { id: t, name: n } = e;
                    return { value: t, label: n };
                }),
                isDisabled: !w,
                popoutPosition: "bottom",
                renderOptionLabel: (e) => {
                    let { value: t } = e;
                    return M(N[t], !0);
                },
                renderOptionValue: (e) => {
                    let [{ value: t }] = e;
                    return M(N[t]);
                },
                optionClassName: A.OS,
                ...O,
                "data-migration-pending": !0,
            }),
            !w && y,
        ],
    });
}
function U(e) {
    let { deviceType: t, selectedDeviceId: n, ...l } = e,
        s = (0, b.tR)(t),
        { id: o } = (0, b.x5)(t);
    return (0, i.jsx)(j, { ...l, devices: s, selectedDeviceId: n ?? o });
}
function N(e) {
    return (0, i.jsx)(j, { ...e });
}
