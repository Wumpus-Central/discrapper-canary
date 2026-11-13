var l = n(477900),
    r = n(582128),
    i = n(855986),
    a = n(189213),
    o = n(858899),
    u = n(331322),
    s = n(691885),
    c = n(834730),
    d = n(192308),
    f = n(260498),
    p = n(680032),
    h = n(551233),
    g = n(653036),
    y = n(191850),
    m = n(792996);
function x(e) {
    let { projectId: t, guildId: n, publishOptions: d, addingToAnother: x = !1, transitionState: b, onClose: v } = e,
        w = (0, i.bG)([f.Ay], () => f.Ay.getProject(t), [t]),
        j = w?.name ?? "",
        k = (0, h.A)(t, n, d, x),
        { guilds: S, guild: _, sharing: A, error: P } = k,
        I = r.useMemo(() => S.map((e) => ({ id: e.id, value: e.id, label: e.name })), [S]),
        C = r.useRef(!1);
    return (
        r.useEffect(
            () => (
                (C.current = !1),
                () => {
                    C.current = !0;
                }
            ),
            [],
        ),
        (0, l.jsx)(a.a, {
            transitionState: b,
            onClose: v,
            title: m.intl.formatToPlainString(x ? y.default["Aet9+Z"] : y.default.N3Ryqz, { app: j }),
            size: "sm",
            notice: null != P ? { type: "critical", message: P, role: "alert" } : void 0,
            actions: [
                { text: m.intl.string(m.t["ETE/oC"]), variant: "secondary", onClick: v, disabled: A },
                {
                    text: m.intl.string(x ? y.default["+uQwxA"] : y.default["+ysSG7"]),
                    variant: "primary",
                    onClick: async function () {
                        let e = await k.share();
                        e.shared &&
                            !C.current &&
                            (v(),
                            "publish" === e.next
                                ? await k.publish()
                                : (0, o.P0)({
                                      text: m.intl.formatToPlainString(
                                          "added" === e.next ? y.default["4WtS+v"] : y.default.o2xHEb,
                                          { app: j, server: _?.name ?? "" },
                                      ),
                                      variant: "success",
                                  }));
                    },
                    loading: A,
                    disabled: null == _ || A,
                },
            ],
            children: (0, l.jsxs)(u.B, {
                gap: 16,
                children: [
                    null != _ && (x || I.length > 1)
                        ? (0, l.jsx)(s.l, {
                              label: m.intl.string(y.default.Uq5hU9),
                              options: I,
                              value: _.id,
                              onSelectionChange: k.pickGuild,
                              selectionMode: "single",
                              disabled: A,
                              fullWidth: !0,
                          })
                        : null,
                    (0, l.jsx)(g.A, { rows: x ? (0, p._i)(w) : (0, p.dv)(w) }),
                    x
                        ? (0, l.jsx)(c.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: m.intl.string(y.default.Ewprwt),
                          })
                        : null,
                ],
            }),
        })
    );
}
n.d(
    t,
    {},
    {
        A: function (e) {
            (0, d.qf)((t) => (0, l.jsx)(x, { ...t, ...e }));
        },
    },
);
