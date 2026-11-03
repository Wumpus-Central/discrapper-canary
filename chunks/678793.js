n.d(e, { A: () => x });
var l = n(858899),
    a = n(582128),
    i = n(79733),
    r = n(809526),
    u = n(105292);
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
    p = n(144228),
    g = n(192308);
function b(t) {
    let { options: e, onDone: n, transitionState: l, onClose: i } = t,
        [s, o] = a.useState(e.selected_destination_id),
        c = u.intl.string(r.default.lJrOGW);
    return (0, d.jsx)(f.a, {
        transitionState: l,
        onClose: i,
        title: c,
        size: "sm",
        actions: [
            { text: u.intl.string(r.default.y83r6D), variant: "secondary", onClick: i },
            {
                text: u.intl.string(r.default.zh1Izp),
                variant: "primary",
                onClick: () => {
                    (n(s), i());
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
    y = n(17928),
    h = n(722701);
function v(t) {
    let { projectId: e, ...n } = t,
        l = (0, y.bG)([h.A], () => h.A.getSafetyRecheck(e), [e]),
        a = (function (t) {
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
        i =
            l?.status === "cleared"
                ? { title: u.intl.string(r.default.vVnbEq), body: u.intl.string(r.default["qY/RLI"]) }
                : { title: u.intl.string(r.default.ebqlWe), body: u.intl.string(r.default.UOr0cK) },
        s = { text: u.intl.string(u.t.BddRzS), onClick: n.onClose };
    return (0, d.jsx)(f.a, {
        ...n,
        title: i.title,
        subtitle: i.body,
        notice:
            null == a ? void 0 : { message: a.message, type: a.type, role: "critical" === a.type ? "alert" : "status" },
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
        ((0, m.$N)(t), (0, g.openModal)((e) => (0, d.jsx)(v, { ...e, projectId: t })));
    },
    promptPublishDestination: function (t) {
        return new Promise((e) => {
            let n = null;
            (0, g.openModal)(
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
        let [r, u] = a.useState(null),
            c = a.useRef(null),
            d = a.useCallback(() => {
                (null != c.current && clearTimeout(c.current), (c.current = null));
            }, []);
        a.useEffect(() => d, [d]);
        let f = a.useMemo(
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
            p = a.useMemo(() => ({ guildId: e, platform: f, busy: n }), [e, f, n]),
            g = (0, i.Ay)(t, p),
            b = g?.publishing === !0;
        a.useEffect(() => {
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
