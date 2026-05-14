i.d(t, { U: () => U });
var s = i(627968),
    n = i(64700),
    l = i(503698),
    a = i.n(l),
    o = i(17928),
    c = i(843282),
    r = i(462887),
    d = i(831544),
    u = i(597601),
    p = i(332461),
    m = i(512950),
    v = i(834730),
    g = i(827343),
    D = i(688810),
    x = i(363195),
    h = i(934729),
    b = i(347481),
    C = i(235058),
    I = i(74848),
    A = i(731854),
    O = i(375708),
    N = i(402592);
function U(e) {
    let {
            deviceType: t,
            location: l,
            selectedDeviceId: U,
            onSelectDevice: f,
            hideDeviceTypeIcon: S = !1,
            label: T,
            ..._
        } = e,
        {
            setDevice: j,
            Icon: V,
            getCanSetDevice: k,
            getWarningMessage: w,
            getLocation: y,
        } = {
            [A.oh.AUDIO_INPUT]: {
                setDevice: g.A.setInputDevice,
                Icon: d.c,
                getCanSetDevice: (e) => e.supports(A.O5.AUDIO_INPUT_DEVICE),
                getWarningMessage: () =>
                    O.intl.format(O.t["1iK6UW"], { onDownloadClick: () => (0, h._)("Help Text Input Devices") }),
                getLocation: (e) => `${e}.SingleSelectInputDevices`,
            },
            [A.oh.AUDIO_OUTPUT]: {
                setDevice: g.A.setOutputDevice,
                Icon: u.L,
                getCanSetDevice: (e) => e.supports(A.O5.AUDIO_OUTPUT_DEVICE),
                getWarningMessage: () =>
                    O.intl.format(O.t.Ow0dbF, { onDownloadClick: () => (0, h._)("Help Text Output Devices") }),
                getLocation: (e) => `${e}.SingleSelectOutputDevices`,
            },
            [A.oh.VIDEO_INPUT]: {
                setDevice: g.A.setVideoDevice,
                Icon: p.x,
                getCanSetDevice: (e) => e.isVideoAvailable() || !e.hasVideoDevice(),
                getWarningMessage: () =>
                    O.intl.format(O.t["1iK6UW"], { onDownloadClick: () => (0, h._)("Help Text Video Devices") }),
                getLocation: (e) => `${e}.SingleSelectVideoDevices`,
            },
        }[t],
        { analyticsLocations: E } = (0, D.Ay)(),
        P = (0, o.bG)([x.A], () => x.A.theme),
        L = y(l),
        W = (0, I.tR)(t),
        { id: M } = (0, I.x5)(t),
        K = (0, o.bG)([C.Ay], () => k(C.Ay)),
        G = (0, s.jsx)(m.p, { messageType: m.Y.WARNING, children: w() }),
        H = n.useCallback(
            (e) => {
                (f?.(e) ?? !0) && j(e, { location: L, analyticsLocations: E });
            },
            [L, E, f, j],
        );
    function $(e) {
        let t,
            n,
            { label: l, value: o } = e,
            c = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            d = l,
            u = (0, I.d)(l);
        null != u && ((d = u.prefix), (t = u.subName));
        let p = b.A.getCertifiedDeviceName(o, d);
        if (b.A.isCertified(o)) {
            let e = (0, r.q)(P) ? i(961392) : i(848672);
            n = (0, s.jsx)("img", { src: e, alt: O.intl.string(O.t.smSKsj) });
        }
        return (0, s.jsxs)("div", {
            className: a()(N.Mg, { [N.S2]: c && null != t, [N.Sy]: !S }),
            children: [
                !S &&
                    (0, s.jsx)("div", {
                        className: N.Kt,
                        children: (0, s.jsx)(V, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                    }),
                (0, s.jsx)(v.E, {
                    lineClamp: 2,
                    variant: "text-md/medium",
                    color: c ? "text-subtle" : "text-default",
                    className: N.hV,
                    children: p,
                }),
                null != t &&
                    (0, s.jsx)(v.E, {
                        lineClamp: 2,
                        variant: c ? "text-xs/medium" : "text-md/medium",
                        color: "text-muted",
                        className: N.VT,
                        children: t,
                    }),
                null != n && (0, s.jsx)("div", { className: N.pN, children: n }),
            ],
        });
    }
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(c.Te, {
                label: T,
                value: U ?? M,
                onChange: H,
                options: W.map((e) => {
                    let { id: t, name: i } = e;
                    return { value: t, label: i };
                }),
                isDisabled: !K,
                popoutPosition: "bottom",
                renderOptionLabel: (e) => $(e, !0),
                renderOptionValue: (e) => {
                    let [t] = e;
                    return $(t);
                },
                optionClassName: N.OS,
                ..._,
                "data-migration-pending": !0,
            }),
            !K && G,
        ],
    });
}
