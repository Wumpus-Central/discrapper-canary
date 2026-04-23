t.d(a, { default: () => h });
var l = t(627968),
    i = t(64700),
    n = t(17928),
    r = t(550079),
    s = t(477782),
    d = t(964355),
    u = t(442433),
    o = t(391973),
    c = t(684013),
    v = t(38502),
    m = t(256415),
    g = t(489277),
    p = t(897720);
t(392164);
var f = t(652215),
    A = t(985018);
function h(e) {
    let { onSelect: a, onClose: t } = e,
        {
            avatarSizeMode: h,
            displayNameMode: x,
            displayUserMode: S,
        } = (0, n.cf)([m.default], () => ({
            avatarSizeMode: m.default.getAvatarSizeMode(),
            displayNameMode: m.default.getDisplayNameMode(),
            displayUserMode: m.default.getDisplayUserMode(),
        })),
        y = i.useRef(t);
    i.useEffect(() => {
        y.current = t;
    }),
        i.useEffect(() => () => y.current?.(), []);
    let M = (0, n.bG)([g.A, v.A], () => {
            let e = g.A.getWidgetByType(f.uss.VOICE_V3);
            if (null == e) return null;
            let a = v.A.getWidget(e.id);
            return null != a && (0, p.ZO)(a) ? a : null;
        }),
        b = M?.meta?.voiceStatesMaxShown ?? 8;
    function j(e) {
        null != M &&
            (e < 1
                ? (0, o.cC)(M.id, { voiceStatesMaxShown: -1 })
                : (0, o.cC)(M.id, { voiceStatesMaxShown: Math.floor(e) }));
    }
    return (0, l.jsxs)(r.W, {
        "data-menu-migrated-auto": !0,
        navId: "overlay-voice-widget-context-menu",
        onClose: u.Z_,
        "aria-label": A.intl.string(A.t.tPfVWi),
        onSelect: a,
        children: [
            (0, l.jsx)(s.rX, {
                label: A.intl.string(A.t.dnvZSg),
                children: [
                    { value: f.OSZ.LARGE, name: A.intl.string(A.t.YcOxtr) },
                    { value: f.OSZ.SMALL, name: A.intl.string(A.t.BKIKqx) },
                ].map((e) =>
                    (0, l.jsx)(
                        s.iD,
                        {
                            label: e.name,
                            checked: h === e.value,
                            id: `avatar-size-mode-${e.value}`,
                            group: "avatar-size-mode",
                            action: () => c.A.setAvatarSizeMode(e.value),
                        },
                        e.value,
                    ),
                ),
            }),
            (0, l.jsx)(s.rX, {
                label: A.intl.string(A.t.J0dpcB),
                children: [
                    { value: f.pwA.ALWAYS, name: A.intl.string(A.t.nBmDrT) },
                    { value: f.pwA.ONLY_WHILE_SPEAKING, name: A.intl.string(A.t["2OvIZY"]) },
                    { value: f.pwA.NEVER, name: A.intl.string(A.t.ekjlPL) },
                ].map((e) =>
                    (0, l.jsx)(
                        s.iD,
                        {
                            label: e.name,
                            checked: x === e.value,
                            id: `display-name-mode-${e.value}`,
                            group: "display-name-mode",
                            action: () => c.A.setDisplayNameMode(e.value),
                        },
                        e.value,
                    ),
                ),
            }),
            (0, l.jsx)(s.rX, {
                label: A.intl.string(A.t.swsWWC),
                children: [
                    { value: f.f5z.ALWAYS, name: A.intl.string(A.t.nBmDrT) },
                    { value: f.f5z.ONLY_WHILE_SPEAKING, name: A.intl.string(A.t["2OvIZY"]) },
                ].map((e) =>
                    (0, l.jsx)(
                        s.iD,
                        {
                            label: e.name,
                            checked: S === e.value,
                            id: `display-user-mode-${e.value}`,
                            group: "display-user-mode",
                            action: () => c.A.setDisplayUserMode(e.value),
                        },
                        e.value,
                    ),
                ),
            }),
            (0, l.jsx)(s.rX, {
                children: (0, l.jsx)(s.aK, {
                    id: "voice-widget-max-users-displayed",
                    label: A.intl.string(A.t["X/Uyzc"]),
                    control: (e, a) =>
                        (0, l.jsx)(d.i, {
                            ...e,
                            ref: a,
                            value: b,
                            minValue: 0,
                            maxValue: 25,
                            onChange: j,
                            renderValue: (e) => (e < 1 ? A.intl.string(A.t.nrUzFL) : `${Math.floor(e)}`),
                            "aria-label": A.intl.string(A.t["X/Uyzc"]),
                        }),
                }),
            }),
        ],
    });
}
