n.d(e, { A: () => x });
var l = n(858899),
    i = n(582128),
    a = n(826058),
    r = n(191850),
    u = n(792996);
function s(t) {
    return null != t && t.upToDate && "publish" === t.action && !t.awaitingApproval;
}
function o(t, e) {
    return null != e
        ? e
        : null == t
          ? u.intl.string(r.default["120EFN"])
          : s(t) && !t.publishing
            ? u.intl.string(r.default.kAfbEN)
            : t.label;
}
var c = n(373540),
    d = n(477900),
    f = n(189213),
    p = n(771871),
    g = n(192308);
function b(t) {
    let { options: e, onDone: n, transitionState: l, onClose: a } = t,
        [s, o] = i.useState(e.selected_destination_id),
        c = u.intl.string(r.default.lJrOGW);
    return (0, d.jsx)(f.a, {
        transitionState: l,
        onClose: a,
        title: c,
        size: "sm",
        actions: [
            { text: u.intl.string(r.default.y83r6D), variant: "secondary", onClick: a },
            {
                text: u.intl.string(r.default.zh1Izp),
                variant: "primary",
                onClick: () => {
                    (n(s), a());
                },
            },
        ],
        children: (0, d.jsx)(p.z, {
            label: c,
            options: e.destinations.map((t) => {
                let { id: e, label: n } = t;
                return { name: n, value: e };
            }),
            value: s,
            onChange: o,
        }),
    });
}
var m = n(962998),
    y = n(855986),
    h = n(722701);
function v(t) {
    let { projectId: e, ...n } = t,
        l = (0, y.bG)([h.A], () => h.A.getSafetyRecheck(e), [e]),
        i = (function (t) {
            switch (t?.status) {
                case void 0:
                case "cleared":
                    return null;
                case "pending":
                    return { message: u.intl.string(r.default.HsOGKK), type: "info" };
                case "held":
                    return {
                        message: u.intl.formatToPlainString(r.default.t8GlRz, { reason: t.reason }),
                        type: "critical",
                    };
                case "limited":
                    return {
                        message: u.intl.string("daily" === t.limit ? r.default["TtE+rz"] : r.default.ikIoxj),
                        type: "warning",
                    };
                case "unavailable":
                    return { message: u.intl.string(r.default.FxilA2), type: "warning" };
            }
        })(l),
        a =
            l?.status === "cleared"
                ? { title: u.intl.string(r.default.vVnbEq), body: u.intl.string(r.default["qY/RLI"]) }
                : { title: u.intl.string(r.default.ebqlWe), body: u.intl.string(r.default.UOr0cK) },
        s = { text: u.intl.string(u.t.BddRzS), onClick: n.onClose };
    return (0, d.jsx)(f.a, {
        ...n,
        title: a.title,
        subtitle: a.body,
        notice:
            null == i ? void 0 : { message: i.message, type: i.type, role: "critical" === i.type ? "alert" : "status" },
        actions:
            l?.status === "cleared"
                ? [{ ...s, variant: "primary" }]
                : [
                      { ...s, variant: "secondary" },
                      {
                          text: u.intl.string(r.default["nmwy0/"]),
                          variant: "primary",
                          loading: l?.status === "pending",
                          onClick: () => (0, m.zu)(e),
                      },
                  ],
    });
}
let C = {
    showPublishBlocked: c.A,
    showSafetyHold: function (t) {
        ((0, m.$N)(t), (0, g.qf)((e) => (0, d.jsx)(v, { ...e, projectId: t })));
    },
    promptPublishDestination: function (t) {
        return new Promise((e) => {
            let n = null;
            (0, g.qf)(
                (e) =>
                    (0, d.jsx)(b, {
                        ...e,
                        options: t,
                        onDone: (t) => {
                            n = t;
                        },
                    }),
                { onCloseCallback: () => e(n) },
            );
        });
    },
    showError: (t) => (0, l.P0)({ text: t, variant: "critical" }),
};
function x(t, e, n) {
    return (function (t, e, n, l) {
        let [r, u] = i.useState(null),
            c = i.useRef(null),
            d = i.useCallback(() => {
                (null != c.current && clearTimeout(c.current), (c.current = null));
            }, []);
        i.useEffect(() => d, [d]);
        let f = i.useMemo(
                () => ({
                    ...l,
                    showConfirmation: (t) => {
                        (d(),
                            u(t),
                            (c.current = setTimeout(() => {
                                ((c.current = null), u(null));
                            }, 1500)));
                    },
                }),
                [l, d],
            ),
            p = i.useMemo(() => ({ guildId: e, platform: f, busy: n }), [e, f, n]),
            g = (0, a.Ay)(t, p),
            b = g?.publishing === !0;
        i.useEffect(() => {
            b && (d(), u(null));
        }, [b, d]);
        let m = b ? null : r;
        return {
            publishOptions: p,
            publish: g,
            publishing: b,
            confirmation: m,
            variant: s(g) ? "secondary" : "primary",
            text: o(g, m),
            label: o(g, null),
            indicator: null == g ? null : g.publishing ? "publishing" : s(g) ? null : "unpublished",
        };
    })(t, e, n, C);
}
