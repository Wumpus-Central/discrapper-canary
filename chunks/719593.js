n.d(e, { A: () => v });
var i = n(858899),
    a = n(582128),
    l = n(738604),
    r = n(191850),
    s = n(792996),
    u = n(373540),
    o = n(477900),
    d = n(189213),
    c = n(771871),
    f = n(192308);
function p(t) {
    let { options: e, onDone: n, transitionState: i, onClose: l } = t,
        [u, f] = a.useState(e.selected_destination_id),
        p = s.intl.string(r.default.lJrOGW);
    return (0, o.jsx)(d.a, {
        transitionState: i,
        onClose: l,
        title: p,
        size: "sm",
        actions: [
            { text: s.intl.string(r.default.y83r6D), variant: "secondary", onClick: l },
            {
                text: s.intl.string(r.default.zh1Izp),
                variant: "primary",
                onClick: () => {
                    (n(u), l());
                },
            },
        ],
        children: (0, o.jsx)(c.z, {
            label: p,
            options: e.destinations.map((t) => {
                let { id: e, label: n } = t;
                return { name: n, value: e };
            }),
            value: u,
            onChange: f,
        }),
    });
}
var g = n(962998),
    y = n(855986),
    m = n(722701);
function b(t) {
    let { projectId: e, ...n } = t,
        i = (0, y.bG)([m.A], () => m.A.getSafetyRecheck(e), [e]),
        a = (function (t) {
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
        l =
            i?.status === "cleared"
                ? { title: s.intl.string(r.default.vVnbEq), body: s.intl.string(r.default["qY/RLI"]) }
                : { title: s.intl.string(r.default.ebqlWe), body: s.intl.string(r.default.UOr0cK) },
        u = { text: s.intl.string(s.t.BddRzS), onClick: n.onClose };
    return (0, o.jsx)(d.a, {
        ...n,
        title: l.title,
        subtitle: l.body,
        notice:
            null == a ? void 0 : { message: a.message, type: a.type, role: "critical" === a.type ? "alert" : "status" },
        actions:
            i?.status === "cleared"
                ? [{ ...u, variant: "primary" }]
                : [
                      { ...u, variant: "secondary" },
                      {
                          text: s.intl.string(r.default["nmwy0/"]),
                          variant: "primary",
                          loading: i?.status === "pending",
                          onClick: () => (0, g.zu)(e),
                      },
                  ],
    });
}
let h = {
    showPublishBlocked: u.A,
    showSafetyHold: function (t) {
        ((0, g.$N)(t), (0, f.qf)((e) => (0, o.jsx)(b, { ...e, projectId: t })));
    },
    promptPublishDestination: function (t) {
        return new Promise((e) => {
            let n = null;
            (0, f.qf)(
                (e) =>
                    (0, o.jsx)(p, {
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
function v(t, e, n) {
    let i, u, o, d;
    return (
        (i = a.useMemo(() => ({ guildId: e, platform: h, busy: n }), [e, h, n])),
        (u = (0, l.Ay)(t, i)),
        (d = "up_to_date" === (o = u?.state ?? "hidden") || "auto_synced" === o),
        {
            publishOptions: i,
            publish: u,
            state: o,
            variant: d ? "secondary" : "primary",
            text: d ? s.intl.string(r.default.kAfbEN) : (u?.label ?? s.intl.string(r.default["120EFN"])),
            indicator: "publishing" === o ? "publishing" : "action_needed" === o ? "unpublished" : null,
            hint: "auto_synced" === o ? s.intl.string(r.default.W4LzCY) : null,
            pendingChanges: null != u && (u.isUpdate || u.status?.publishState === "not_live"),
        }
    );
}
