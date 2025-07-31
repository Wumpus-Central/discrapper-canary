(n.d(t, { Z: () => C }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(481060),
    o = n(100527),
    a = n(594174),
    c = n(451467),
    d = n(641115),
    u = n(672811),
    f = n(891180),
    m = n(544753),
    h = n(615161),
    p = n(812652),
    x = n(156582),
    g = n(396678),
    _ = n(37113),
    v = n(676462),
    j = n(388032),
    b = n(496958);
function S(e) {
    let { label: t, children: n } = e;
    return (0, r.jsxs)('div', {
        className: b.setting,
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                color: 'header-secondary',
                children: t
            }),
            n
        ]
    });
}
function C() {
    var e, t, n;
    let [{ preset: C, fps: y, sourceType: O, resolution: I }, Z] = (0, h.E_)(),
        w = (0, m.Z)(),
        N = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        [T, E] = null != (e = (0, g.Z)(_.tI.PRESET_VIDEO)) ? e : [_.LY.RESOLUTION_720, _.ws.FPS_30],
        [P, R] = null != (t = (0, g.Z)(_.tI.PRESET_DOCUMENTS)) ? t : [_.LY.RESOLUTION_SOURCE, _.ws.FPS_15],
        [A, M] = null != (n = (0, g.Z)(C)) ? n : [I, y],
        k = i.useMemo(() => (C === _.tI.PRESET_VIDEO ? T : C === _.tI.PRESET_DOCUMENTS ? P : I), [C, T, P, I]),
        L = i.useMemo(() => (C === _.tI.PRESET_VIDEO ? E : C === _.tI.PRESET_DOCUMENTS ? R : y), [C, E, R, y]),
        D = C === _.tI.PRESET_DOCUMENTS,
        B = p.Vf.map((e) => {
            let { value: t } = e,
                n = (0, c.Z)(C, t, _.ws.FPS_30, N, w);
            return {
                value: t,
                name: (0, f.M)(t),
                tooltipAriaLabel: n ? void 0 : j.intl.string(j.t.sEAnVF),
                tooltip: n ? void 0 : (0, r.jsx)(d.W, {}),
                className: n ? void 0 : b.premiumOption
            };
        }),
        U = p.YX.map((e) => {
            let t = (0, c.Z)(C, _.LY.RESOLUTION_720, e, N, w);
            return {
                value: e,
                name: ''.concat(e, 'fps'),
                tooltipAriaLabel: t ? void 0 : j.intl.string(j.t.sEAnVF),
                tooltip: t ? void 0 : (0, r.jsx)(d.W, {}),
                className: t ? void 0 : b.premiumOption
            };
        });
    return (0, r.jsxs)('div', {
        className: b.root,
        children: [
            (0, r.jsx)(S, {
                label: j.intl.string(v.default['7eHfrq']),
                children: (0, r.jsx)(s.PhF, {
                    isSelected: (e) => C === e,
                    serialize: (e) => String(e),
                    select: (e) => {
                        Z({
                            type: 'set_preset',
                            preset: e
                        });
                    },
                    options: p.PG.filter((e) => {
                        let { canUse: t } = e;
                        return t(O);
                    }).map((e) => {
                        let { value: t } = e;
                        return {
                            value: t,
                            label: (0, u.L)(t)
                        };
                    })
                })
            }),
            (0, r.jsx)(S, {
                label: j.intl.string(v.default.PYBXFR),
                children: (0, r.jsx)(s.sY7, {
                    className: b.segmentedControl,
                    options: B,
                    look: 'pill',
                    disabled: D,
                    value: k,
                    onChange: (e) =>
                        !D &&
                        (function (e) {
                            if (!(0, c.Z)(C, e, y, N, w)) return (0, x.E)({ analyticsLocation: o.Z.GO_LIVE_MODAL_SETTINGS_SELECTION });
                            (Z({
                                type: 'set_resolution',
                                resolution: e
                            }),
                                e !== A &&
                                    Z({
                                        type: 'set_preset',
                                        preset: _.tI.PRESET_CUSTOM
                                    }));
                        })(e.value)
                })
            }),
            (0, r.jsx)(S, {
                label: j.intl.string(v.default['/ssDMT']),
                children: (0, r.jsx)(s.sY7, {
                    className: b.segmentedControl,
                    disabled: D,
                    options: U,
                    value: L,
                    look: 'pill',
                    onChange: (e) =>
                        !D &&
                        (function (e) {
                            if (!(0, c.Z)(C, I, e, N, w)) return (0, x.E)({ analyticsLocation: o.Z.GO_LIVE_MODAL_SETTINGS_SELECTION });
                            (Z({
                                type: 'set_fps',
                                fps: e
                            }),
                                e !== M &&
                                    Z({
                                        type: 'set_preset',
                                        preset: _.tI.PRESET_CUSTOM
                                    }));
                        })(e.value)
                })
            })
        ]
    });
}
