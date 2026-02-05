t.d(a, { default: () => A });
var l = t(627968),
    i = t(64700),
    n = t(311907),
    r = t(397927),
    s = t(442433),
    d = t(391973),
    u = t(684013),
    o = t(555528),
    c = t(256415),
    v = t(395011),
    m = t(897720);
t(392164);
var g = t(652215),
    p = t(985018);
function A(e) {
    let { onSelect: a, onClose: t } = e,
        {
            avatarSizeMode: A,
            displayNameMode: f,
            displayUserMode: h,
        } = (0, n.cf)([c.default], () => ({
            avatarSizeMode: c.default.getAvatarSizeMode(),
            displayNameMode: c.default.getDisplayNameMode(),
            displayUserMode: c.default.getDisplayUserMode(),
        })),
        x = i.useRef(t);
    i.useEffect(() => {
        x.current = t;
    }),
        i.useEffect(() => () => x.current?.(), []);
    let S = (0, n.bG)([v.A, o.A], () => {
            let e = v.A.getWidgetByType(g.uss.VOICE_V3);
            if (null == e) return null;
            let a = o.A.getWidget(e.id);
            return null != a && (0, m.ZO)(a) ? a : null;
        }),
        y = S?.meta?.voiceStatesMaxShown ?? 8;
    function M(e) {
        null != S &&
            (e < 1
                ? (0, d.cC)(S.id, { voiceStatesMaxShown: -1 })
                : (0, d.cC)(S.id, { voiceStatesMaxShown: Math.floor(e) }));
    }
    return (0, l.jsxs)(r.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "overlay-voice-widget-context-menu",
        onClose: s.Z_,
        "aria-label": p.intl.string(p.t.tPfVWi),
        onSelect: a,
        children: [
            (0, l.jsx)(r.rXV, {
                label: p.intl.string(p.t.dnvZSg),
                children: [
                    { value: g.OSZ.LARGE, name: p.intl.string(p.t.YcOxtr) },
                    { value: g.OSZ.SMALL, name: p.intl.string(p.t.BKIKqx) },
                ].map((e) =>
                    (0, l.jsx)(
                        r.iDA,
                        {
                            label: e.name,
                            checked: A === e.value,
                            id: `avatar-size-mode-${e.value}`,
                            group: "avatar-size-mode",
                            action: () => u.A.setAvatarSizeMode(e.value),
                        },
                        e.value,
                    ),
                ),
            }),
            (0, l.jsx)(r.rXV, {
                label: p.intl.string(p.t.J0dpcB),
                children: [
                    { value: g.pwA.ALWAYS, name: p.intl.string(p.t.nBmDrT) },
                    { value: g.pwA.ONLY_WHILE_SPEAKING, name: p.intl.string(p.t["2OvIZY"]) },
                    { value: g.pwA.NEVER, name: p.intl.string(p.t.ekjlPL) },
                ].map((e) =>
                    (0, l.jsx)(
                        r.iDA,
                        {
                            label: e.name,
                            checked: f === e.value,
                            id: `display-name-mode-${e.value}`,
                            group: "display-name-mode",
                            action: () => u.A.setDisplayNameMode(e.value),
                        },
                        e.value,
                    ),
                ),
            }),
            (0, l.jsx)(r.rXV, {
                label: p.intl.string(p.t.swsWWC),
                children: [
                    { value: g.f5z.ALWAYS, name: p.intl.string(p.t.nBmDrT) },
                    { value: g.f5z.ONLY_WHILE_SPEAKING, name: p.intl.string(p.t["2OvIZY"]) },
                ].map((e) =>
                    (0, l.jsx)(
                        r.iDA,
                        {
                            label: e.name,
                            checked: h === e.value,
                            id: `display-user-mode-${e.value}`,
                            group: "display-user-mode",
                            action: () => u.A.setDisplayUserMode(e.value),
                        },
                        e.value,
                    ),
                ),
            }),
            (0, l.jsx)(r.rXV, {
                children: (0, l.jsx)(r.aK1, {
                    id: "voice-widget-max-users-displayed",
                    label: p.intl.string(p.t["X/Uyzc"]),
                    control: (e, a) =>
                        (0, l.jsx)(r.i42, {
                            ...e,
                            ref: a,
                            value: y,
                            minValue: 0,
                            maxValue: 25,
                            onChange: M,
                            renderValue: (e) => (e < 1 ? p.intl.string(p.t.nrUzFL) : `${Math.floor(e)}`),
                            "aria-label": p.intl.string(p.t["X/Uyzc"]),
                        }),
                }),
            }),
        ],
    });
}
