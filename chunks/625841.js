i.d(t, { U: () => N });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    o = i.n(l),
    a = i(17928),
    c = i(843282),
    r = i(462887),
    d = i(831544),
    u = i(597601),
    p = i(332461),
    m = i(512950),
    g = i(834730),
    v = i(827343),
    D = i(688810),
    x = i(363195),
    h = i(934729),
    C = i(347481),
    b = i(941327),
    I = i(74848),
    A = i(106713),
    O = i(731854),
    S = i(375708),
    f = i(402592);
function N(e) {
    let {
            deviceType: t,
            location: l,
            selectedDeviceId: N,
            onSelectDevice: U,
            hideDeviceTypeIcon: T = !1,
            label: _,
            ...j
        } = e,
        {
            setDevice: V,
            IconComponent: k,
            getCanSetDevice: w,
            getWarningMessage: y,
            getLocation: E,
        } = {
            [O.oh.AUDIO_INPUT]: {
                setDevice: v.A.setInputDevice,
                IconComponent: d.c,
                getCanSetDevice: (e) => e.supports(O.O5.AUDIO_INPUT_DEVICE),
                getWarningMessage: () =>
                    S.intl.format(S.t["1iK6UW"], { onDownloadClick: () => (0, h._)("Help Text Input Devices") }),
                getLocation: (e) => `${e}.SingleSelectInputDevices`,
            },
            [O.oh.AUDIO_OUTPUT]: {
                setDevice: v.A.setOutputDevice,
                IconComponent: u.L,
                getCanSetDevice: (e) => e.supports(O.O5.AUDIO_OUTPUT_DEVICE),
                getWarningMessage: () =>
                    S.intl.format(S.t.Ow0dbF, { onDownloadClick: () => (0, h._)("Help Text Output Devices") }),
                getLocation: (e) => `${e}.SingleSelectOutputDevices`,
            },
            [O.oh.VIDEO_INPUT]: {
                setDevice: v.A.setVideoDevice,
                IconComponent: p.x,
                getCanSetDevice: (e) => e.isVideoAvailable() || !e.hasVideoDevice(),
                getWarningMessage: () =>
                    S.intl.format(S.t["1iK6UW"], { onDownloadClick: () => (0, h._)("Help Text Video Devices") }),
                getLocation: (e) => `${e}.SingleSelectVideoDevices`,
            },
        }[t],
        { analyticsLocations: P } = (0, D.Ay)(),
        L = (0, a.bG)([x.A], () => x.A.theme),
        M = E(l),
        W = (0, I.tR)(t),
        K = s.useMemo(() => W.reduce((e, t) => ({ ...e, [t.id]: t }), {}), [W]),
        { id: G } = (0, I.x5)(t),
        H = (0, a.bG)([b.Ay], () => w(b.Ay)),
        { showDeviceFormFactorIndicators: $ } = A.A.useConfig({ location: "SingleSelectDevices" }),
        z = (0, n.jsx)(m.p, { messageType: m.Y.WARNING, children: y() }),
        F = s.useCallback(
            (e) => {
                (U?.(e) ?? !0) && V(e, { location: M, analyticsLocations: P });
            },
            [M, P, U, V],
        );
    function R(e) {
        let s,
            l,
            { label: a, value: c } = e,
            d = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            u = a,
            p = (0, I.d)(a);
        null != p && ((u = p.prefix), (s = p.subName));
        let m = C.A.getCertifiedDeviceName(c, u);
        if (C.A.isCertified(c)) {
            let e = (0, r.q)(L) ? i(961392) : i(848672);
            l = (0, n.jsx)("img", { src: e, alt: S.intl.string(S.t.smSKsj) });
        }
        let v = $ ? (0, I.d4)(K[c], t) : k;
        return (0, n.jsxs)("div", {
            className: o()(f.Mg, { [f.S2]: d && null != s, [f.Sy]: !T }),
            children: [
                !T &&
                    (0, n.jsx)("div", {
                        className: f.Kt,
                        children: (0, n.jsx)(v, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                    }),
                (0, n.jsx)(g.E, {
                    lineClamp: 2,
                    variant: "text-md/medium",
                    color: d ? "text-subtle" : "text-default",
                    className: f.hV,
                    children: m,
                }),
                null != s &&
                    (0, n.jsx)(g.E, {
                        lineClamp: 2,
                        variant: d ? "text-xs/medium" : "text-md/medium",
                        color: "text-muted",
                        className: f.VT,
                        children: s,
                    }),
                null != l && (0, n.jsx)("div", { className: f.pN, children: l }),
            ],
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(c.Te, {
                label: _,
                value: N ?? G,
                onChange: F,
                options: W.map((e) => {
                    let { id: t, name: i } = e;
                    return { value: t, label: i };
                }),
                isDisabled: !H,
                popoutPosition: "bottom",
                renderOptionLabel: (e) => R(e, !0),
                renderOptionValue: (e) => {
                    let [t] = e;
                    return R(t);
                },
                optionClassName: f.OS,
                ...j,
                "data-migration-pending": !0,
            }),
            !H && z,
        ],
    });
}
