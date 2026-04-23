s.d(t, { U: () => O });
var n = s(627968),
    l = s(64700),
    i = s(503698),
    a = s.n(i),
    o = s(17928),
    r = s(843282),
    c = s(462887),
    d = s(831544),
    u = s(597601),
    m = s(332461),
    x = s(512950),
    p = s(834730),
    g = s(827343),
    h = s(688810),
    A = s(363195),
    v = s(944993),
    f = s(347481),
    j = s(969341),
    N = s(74848),
    _ = s(731854),
    I = s(985018),
    D = s(402592);
function O(e) {
    let {
            deviceType: t,
            location: i,
            selectedDeviceId: O,
            onSelectDevice: E,
            hideDeviceTypeIcon: C = !1,
            label: b,
            ...T
        } = e,
        {
            setDevice: S,
            Icon: U,
            getCanSetDevice: y,
            getWarningMessage: k,
            getLocation: M,
        } = {
            [_.oh.AUDIO_INPUT]: {
                setDevice: g.A.setInputDevice,
                Icon: d.c,
                getCanSetDevice: (e) => e.supports(_.O5.AUDIO_INPUT_DEVICE),
                getWarningMessage: () =>
                    I.intl.format(I.t["1iK6UW"], { onDownloadClick: () => (0, v._)("Help Text Input Devices") }),
                getLocation: (e) => `${e}.SingleSelectInputDevices`,
            },
            [_.oh.AUDIO_OUTPUT]: {
                setDevice: g.A.setOutputDevice,
                Icon: u.L,
                getCanSetDevice: (e) => e.supports(_.O5.AUDIO_OUTPUT_DEVICE),
                getWarningMessage: () =>
                    I.intl.format(I.t.Ow0dbF, { onDownloadClick: () => (0, v._)("Help Text Output Devices") }),
                getLocation: (e) => `${e}.SingleSelectOutputDevices`,
            },
            [_.oh.VIDEO_INPUT]: {
                setDevice: g.A.setVideoDevice,
                Icon: m.x,
                getCanSetDevice: (e) => e.isVideoAvailable() || !e.hasVideoDevice(),
                getWarningMessage: () =>
                    I.intl.format(I.t["1iK6UW"], { onDownloadClick: () => (0, v._)("Help Text Video Devices") }),
                getLocation: (e) => `${e}.SingleSelectVideoDevices`,
            },
        }[t],
        { analyticsLocations: w } = (0, h.Ay)(),
        L = (0, o.bG)([A.A], () => A.A.theme),
        P = M(i),
        V = (0, N.tR)(t),
        { id: B } = (0, N.x5)(t),
        R = (0, o.bG)([j.Ay], () => y(j.Ay)),
        G = (0, n.jsx)(x.p, { messageType: x.Y.WARNING, children: k() }),
        H = l.useCallback(
            (e) => {
                (E?.(e) ?? !0) && S(e, { location: P, analyticsLocations: w });
            },
            [P, w, E, S],
        );
    function W(e) {
        let t,
            l,
            { label: i, value: o } = e,
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            d = i,
            u = (0, N.d)(i);
        null != u && ((d = u.prefix), (t = u.subName));
        let m = f.A.getCertifiedDeviceName(o, d);
        if (f.A.isCertified(o)) {
            let e = (0, c.q)(L) ? s(961392) : s(848672);
            l = (0, n.jsx)("img", { src: e, alt: I.intl.string(I.t.smSKsj) });
        }
        return (0, n.jsxs)("div", {
            className: a()(D.Mg, { [D.S2]: r && null != t, [D.Sy]: !C }),
            children: [
                !C &&
                    (0, n.jsx)("div", {
                        className: D.Kt,
                        children: (0, n.jsx)(U, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                    }),
                (0, n.jsx)(p.E, {
                    lineClamp: 2,
                    variant: "text-md/medium",
                    color: r ? "text-subtle" : "text-default",
                    className: D.hV,
                    children: m,
                }),
                null != t &&
                    (0, n.jsx)(p.E, {
                        lineClamp: 2,
                        variant: r ? "text-xs/medium" : "text-md/medium",
                        color: "text-muted",
                        className: D.VT,
                        children: t,
                    }),
                null != l && (0, n.jsx)("div", { className: D.pN, children: l }),
            ],
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(r.Te, {
                label: b,
                value: O ?? B,
                onChange: H,
                options: V.map((e) => {
                    let { id: t, name: s } = e;
                    return { value: t, label: s };
                }),
                isDisabled: !R,
                popoutPosition: "bottom",
                renderOptionLabel: (e) => W(e, !0),
                renderOptionValue: (e) => {
                    let [t] = e;
                    return W(t);
                },
                optionClassName: D.OS,
                ...T,
                "data-migration-pending": !0,
            }),
            !R && G,
        ],
    });
}
