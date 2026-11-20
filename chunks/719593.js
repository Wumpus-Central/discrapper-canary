n.d(e, { A: () => x });
var i = n(858899),
    l = n(582128),
    a = n(738604),
    r = n(191850),
    s = n(792996);
function u(t) {
    return null != t && t.upToDate && "publish" === t.action && !t.awaitingApproval;
}
var o = n(373540),
    d = n(477900),
    c = n(189213),
    f = n(771871),
    p = n(192308);
function g(t) {
    let { options: e, onDone: n, transitionState: i, onClose: a } = t,
        [u, o] = l.useState(e.selected_destination_id),
        p = s.intl.string(r.default.lJrOGW);
    return (0, d.jsx)(c.a, {
        transitionState: i,
        onClose: a,
        title: p,
        size: "sm",
        actions: [
            { text: s.intl.string(r.default.y83r6D), variant: "secondary", onClick: a },
            {
                text: s.intl.string(r.default.zh1Izp),
                variant: "primary",
                onClick: () => {
                    (n(u), a());
                },
            },
        ],
        children: (0, d.jsx)(f.z, {
            label: p,
            options: e.destinations.map((t) => {
                let { id: e, label: n } = t;
                return { name: n, value: e };
            }),
            value: u,
            onChange: o,
        }),
    });
}
var b = n(962998),
    h = n(855986),
    m = n(722701);
function y(t) {
    let { projectId: e, ...n } = t,
        i = (0, h.bG)([m.A], () => m.A.getSafetyRecheck(e), [e]),
        l = (function (t) {
            switch (t?.status) {
                case void 0:
                case "cleared":
                    return null;
                case "pending":
                    return { message: s.intl.string(r.default.HsOGKK), type: "info" };
                case "held":
                    return {
                        message: s.intl.formatToPlainString(r.default.t8GlRz, { reason: t.reason }),
                        type: "critical",
                    };
                case "limited":
                    return {
                        message: s.intl.string("daily" === t.limit ? r.default["TtE+rz"] : r.default.ikIoxj),
                        type: "warning",
                    };
                case "unavailable":
                    return { message: s.intl.string(r.default.FxilA2), type: "warning" };
            }
        })(i),
        a =
            i?.status === "cleared"
                ? { title: s.intl.string(r.default.vVnbEq), body: s.intl.string(r.default["qY/RLI"]) }
                : { title: s.intl.string(r.default.ebqlWe), body: s.intl.string(r.default.UOr0cK) },
        u = { text: s.intl.string(s.t.BddRzS), onClick: n.onClose };
    return (0, d.jsx)(c.a, {
        ...n,
        title: a.title,
        subtitle: a.body,
        notice:
            null == l ? void 0 : { message: l.message, type: l.type, role: "critical" === l.type ? "alert" : "status" },
        actions:
            i?.status === "cleared"
                ? [{ ...u, variant: "primary" }]
                : [
                      { ...u, variant: "secondary" },
                      {
                          text: s.intl.string(r.default["nmwy0/"]),
                          variant: "primary",
                          loading: i?.status === "pending",
                          onClick: () => (0, b.zu)(e),
                      },
                  ],
    });
}
let v = {
    showPublishBlocked: o.A,
    showSafetyHold: function (t) {
        ((0, b.$N)(t), (0, p.qf)((e) => (0, d.jsx)(y, { ...e, projectId: t })));
    },
    promptPublishDestination: function (t) {
        return new Promise((e) => {
            let n = null;
            (0, p.qf)(
                (e) =>
                    (0, d.jsx)(g, {
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
    showError: (t) => (0, i.P0)({ text: t, variant: "critical" }),
    showConfirmation: (t) => (0, i.P0)({ text: t, variant: "success" }),
};
function x(t, e, n) {
    let i, o;
    return (
        (i = l.useMemo(() => ({ guildId: e, platform: v, busy: n }), [e, v, n])),
        (o = (0, a.Ay)(t, i)),
        {
            publishOptions: i,
            publish: o,
            publishing: o?.publishing === !0,
            variant: u(o) ? "secondary" : "primary",
            text:
                null == o
                    ? s.intl.string(r.default["120EFN"])
                    : u(o) && !o.publishing
                      ? s.intl.string(r.default.kAfbEN)
                      : o.label,
            indicator: null == o ? null : o.publishing ? "publishing" : u(o) ? null : "unpublished",
            pendingChanges: null != o && (o.isUpdate || o.status?.publishState === "not_live"),
        }
    );
}
